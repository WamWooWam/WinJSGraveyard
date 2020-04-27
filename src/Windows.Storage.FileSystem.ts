import { Foundation } from "./Windows.Foundation";
import * as BrowserFS from "browserfs"
import { randstr } from "./util";
const fs = BrowserFS.BFSRequire("fs");
const path = BrowserFS.BFSRequire("path");

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

    abstract deleteAsync(options): Foundation.IAsyncAction;
    abstract getBasicPropertiesAsync(): Foundation.IAsyncOperation<BasicProperties>;
    abstract isOfType(type: StorageItemTypes): boolean;
    abstract renameAsync(newName: string, option: NameCollisionOption): Foundation.IAsyncAction;
}

export class StorageFile extends StorageItem {
    fileType: string;
    contentType: string;
    parent: StorageFolder;

    constructor(name: string, parent: StorageFolder) {
        super(path.join(parent.path, name));
        this.name = name;
        this.parent = parent;
    }

    deleteAsync(options: any): Foundation.IAsyncAction {
        throw new Error("Method not implemented.");
    }
    getBasicPropertiesAsync(): Foundation.IAsyncOperation<BasicProperties> {
        throw new Error("Method not implemented.");
    }
    isOfType(type: StorageItemTypes): boolean {
        throw new Error("Method not implemented.");
    }
    renameAsync(newName: string, option: NameCollisionOption): Foundation.IAsyncAction {
        throw new Error("Method not implemented.");
    }
}

export class StorageFolder extends StorageItem {

    static getFolderFromPathSync(path: string): StorageFolder {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }

        return new StorageFolder(path);
    }

    static getFolderFromPathAsync(path: string): Foundation.IAsyncOperation<StorageFolder> {
        return new Foundation.IAsyncOperation((rej, res) => {
            fs.exists(path, (exists: boolean) => {
                if (!exists) {
                    rej();
                    return;
                }

                res(new StorageFolder(path));
            })
        })
    }


    createFileAsync(name: string, collision: CreationCollisionOption): Foundation.IAsyncOperation<StorageFile> {
        return new Foundation.IAsyncOperation((res, rej) => {
            var filePath = path.join(this.path, name);
            fs.exists(filePath, (exists: boolean) => {
                if (exists) {
                    if (collision == CreationCollisionOption.failIfExists) {
                        rej();
                        return;
                    }
                    else if (collision == CreationCollisionOption.generateUniqueName) {
                        let ext = path.extname(name);
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
        });
    }

    createFolderAsync(name: string) {

    }

    getFileAsync(name: string): Foundation.IAsyncOperation<StorageFile> {
        return new Foundation.IAsyncOperation((res, rej) => {
            var filePath = path.join(this.path, name);
            fs.exists(filePath, (exists: boolean) => {
                if (!exists) {
                    rej();
                    return;
                }

                res(new StorageFile(name, this));
            })
        });
    }

    getFolderAsync(name: string) {

    }

    getFoldersAsync(name: string) {

    }

    deleteAsync(options: any): Foundation.IAsyncAction {
        throw new Error("Method not implemented.");
    }

    getBasicPropertiesAsync(): Foundation.IAsyncOperation<BasicProperties> {
        throw new Error("Method not implemented.");
    }

    isOfType(type: StorageItemTypes): boolean {
        throw new Error("Method not implemented.");
    }

    renameAsync(newName: string, option: NameCollisionOption): Foundation.IAsyncAction {
        throw new Error("Method not implemented.");
    }
}

export class PathIO {
    static readTextAsync(path: string): Foundation.IAsyncOperation<string> {
        return new Foundation.IAsyncOperation<string>((res, rej) => {
            fs.exists(path, (exists: boolean) => {
                if (!exists) {
                    rej();
                }

                fs.readFile(path, (error, buffer) => {
                    if (error) {
                        rej(error);
                        return;
                    }

                    var reader = new TextDecoder("utf8");
                    res(reader.decode(buffer));
                })
            })
        });
    }

    static writeTextAsync(path: string, content: string): Foundation.IAsyncAction {
        return new Foundation.IAsyncAction((res, rej) => {
            fs.writeFile(path, content, (error) => {
                if (error) {
                    rej(error);
                    return;
                }

                res();
            });
        });
    }
}

export class FileIO {

    static readTextAsync(file: StorageFile): Foundation.IAsyncOperation<string> {
        return PathIO.readTextAsync(file.path);
    }

    static writeTextAsync(file: StorageFile, content: string): Foundation.IAsyncAction {
        return PathIO.writeTextAsync(file.path, content);
    }
}

(() => {
    BrowserFS.install(self);
    BrowserFS.configure({
        fs: "MountableFileSystem",
        options: {
            '/tmp': { fs: "InMemory" },
            '/test': { fs: self.localStorage !== undefined ? "LocalStorage" : "InMemory" },
        }
    }, (e) => {
        console.error(e);
    });
})();