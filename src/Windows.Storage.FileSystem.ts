import { IAsyncOperation, IAsyncAction } from "./Windows.Foundation";
import * as BrowserFS from "browserfs"
import { randstr } from "./util";
import { ApplicationModel } from "./Windows.ApplicationModel";
const fs = BrowserFS.BFSRequire("fs");
const _path = BrowserFS.BFSRequire("path");

export enum CreationCollisionOption {
    generateUniqueName,
    replaceExisting,
    failIfExists,
    openIfExists
}

export enum NameCollisionOption {

}

export enum StorageItemTypes {

}

export class BasicProperties {

}

export abstract class StorageItem {
    constructor(path: string) {
        this.path = path;
    }

    name: string;
    path: string;
    dateCreated: Date;
    attributes: any;

    abstract deleteAsync(options): IAsyncAction;
    abstract getBasicPropertiesAsync(): IAsyncOperation<BasicProperties>;
    abstract isOfType(type: StorageItemTypes): boolean;
    abstract renameAsync(newName: string, option: NameCollisionOption): IAsyncAction;
}

export class StorageFile extends StorageItem {
    fileType: string;
    contentType: string;
    parent: StorageFolder;

    constructor(name: string, parent: StorageFolder) {
        super(_path.join(parent.path, name));
        this.name = name;
        this.parent = parent;
    }

    deleteAsync(options: any): IAsyncAction {
        throw new Error("Method not implemented.");
    }
    getBasicPropertiesAsync(): IAsyncOperation<BasicProperties> {
        throw new Error("Method not implemented.");
    }
    isOfType(type: StorageItemTypes): boolean {
        throw new Error("Method not implemented.");
    }
    renameAsync(newName: string, option: NameCollisionOption): IAsyncAction {
        throw new Error("Method not implemented.");
    }
}

export class StorageFolder extends StorageItem {

    static getFolderFromPathSync(path: string): StorageFolder {
        return new StorageFolder(path, fs.existsSync(path));
    }

    static getFolderFromPathAsync(path: string): IAsyncOperation<StorageFolder> {
        return new IAsyncOperation((rej, res) => {
            fs.exists(path, (exists: boolean) => {
                if (!exists) {
                    rej();
                    return;
                }

                res(new StorageFolder(path));
            })
        })
    }

    private exists: boolean;

    constructor(path: string, exists: boolean = true) {
        super(path);
        this.exists = exists;
    }

    private ensureInitialised(): Promise<StorageFolder> {
        return new Promise((res, rej) => {
            if (this.exists) {
                res(this);
                return;
            }

            fs.exists(this.path, (exists: boolean) => {
                if (!exists) {
                    fs.mkdir(this.path, "0777", (error) => {
                        if (error && error.errno != BrowserFS.Errors.ErrorCode.EEXIST)
                            throw error; // we dont want to be throwing if the condition we're checking for is actually true

                        this.exists = true;
                        res(this);
                    })
                }
                else {
                    this.exists = true;
                    res(this)
                }
            })
        })
    }

    createFileAsync(name: string, collision: CreationCollisionOption): IAsyncOperation<StorageFile> {
        return new IAsyncOperation((res, rej) => {
            this.ensureInitialised().then(_ => {
                var filePath = _path.join(this.path, name);
                fs.exists(filePath, (exists: boolean) => {
                    if (exists) {
                        if (collision == CreationCollisionOption.failIfExists) {
                            rej();
                            return;
                        }
                        else if (collision == CreationCollisionOption.generateUniqueName) {
                            let ext = _path.extname(name);
                            name = name.split('.').slice(0, -1).join('.') + "-" + randstr(6) + "." + ext;
                            console.log("unique name:" + name);
                        }
                        else if (collision == CreationCollisionOption.replaceExisting) {
                            return this.getFileAsync(name)
                                .then(f => {
                                    return f.deleteAsync(null);
                                })
                                .then(c => {
                                    res(this.createFileAsync(name, collision));
                                });
                        }
                        else if (collision == CreationCollisionOption.openIfExists) {
                            res(this.getFileAsync(name));
                            return;
                        }
                    }

                    res(new StorageFile(name, this));
                })
            })
        });
    }

    createFolderAsync(name: string) {

    }

    getFileAsync(name: string): IAsyncOperation<StorageFile> {
        return new IAsyncOperation((res, rej) => {
            this.ensureInitialised().then(_ => {
                var filePath = _path.join(this.path, name);
                fs.exists(filePath, (exists: boolean) => {
                    if (!exists) {
                        rej();
                        return;
                    }

                    res(new StorageFile(name, this));
                })
            })
        });
    }

    getFolderAsync(name: string) {

    }

    getFoldersAsync(name: string) {

    }

    deleteAsync(options: any): IAsyncAction {
        throw new Error("Method not implemented.");
    }

    getBasicPropertiesAsync(): IAsyncOperation<BasicProperties> {
        throw new Error("Method not implemented.");
    }

    isOfType(type: StorageItemTypes): boolean {
        throw new Error("Method not implemented.");
    }

    renameAsync(newName: string, option: NameCollisionOption): IAsyncAction {
        throw new Error("Method not implemented.");
    }
}

export class PathIO {

    static readTextAsync(path: string): IAsyncOperation<string> {
        let uri = new URL(path, "file://");
        if (uri.protocol == "ms-appx:" || uri.protocol == "ms-appx-web:") {
            return IAsyncOperation.wrap(PathIO.readPackageFileAsync(uri, path).then(f => f.text()));
        }
        else {
            return IAsyncOperation.wrap(PathIO.readLocalFileAsync(path).then(b => new TextDecoder().decode(b)));
        }
    }

    private static readPackageFileAsync(uri: URL, path: string): IAsyncOperation<Response> {
        return new IAsyncOperation((res, rej) => {
            let url = PathIO.extractPackageUrl(path, uri);

            fetch(url.toString())
                .then(r => {
                    if (!r.ok) {
                        throw new Error("File not found!")
                    }

                    res(r);
                })
                .catch(e => rej(e))
        });
    }

    private static readLocalFileAsync(path: string): IAsyncOperation<Buffer> {
        return new IAsyncOperation((res, rej) => {
            fs.exists(path, (exists: boolean) => {
                if (!exists) {
                    rej();
                }

                fs.readFile(path, (error, buffer) => {
                    if (error) {
                        rej(error);
                        return;
                    }
                    res(buffer);
                })
            })
        });
    }

    static writeTextAsync(path: string, content: string): IAsyncAction {
        return new IAsyncAction((res, rej) => {
            fs.writeFile(path, content, (error) => {
                if (error) {
                    rej(error);
                    return;
                }

                res();
            });
        });
    }

    private static extractPackageUrl(path: string, uri: URL) {
        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1] + "/";
        let name = path.substr(uri.protocol.length + 2);
        if (name.startsWith("/")) {
            name = "." + name;
        }
        else {
            name = "/" + name;
        }
        let url = new URL(name, baseUrl);
        return url;
    }
}

export class FileIO {

    static readTextAsync(file: StorageFile): IAsyncOperation<string> {
        return PathIO.readTextAsync(file.path);
    }

    static writeTextAsync(file: StorageFile, content: string): IAsyncAction {
        return PathIO.writeTextAsync(file.path, content);
    }
}

(() => {
    BrowserFS.install(self);
    BrowserFS.configure({
        fs: "MountableFileSystem",
        options: {
            '/temp': { fs: "InMemory" },
            '/appdata': { fs: self.indexedDB !== undefined ? "IndexedDB" : "InMemory", options: { storeName: ApplicationModel.Package.current.id.name + "_storage" } },
        }
    }, (e) => {
        if (e) console.error(e);
    });
})();