import { Foundation } from "./Windows.Foundation";

export namespace Storage {
    export class ApplicationData {
        public static get current(): ApplicationData {
            return new ApplicationData();
        }
        public get roamingSettings(): ApplicationDataContainer {
            return self.localStorage != undefined ? new LocalStorageBackedContainer("roamingSettings") : new WebWorkerBackedContainer("roamingSettings");
        }
        public get localSettings(): ApplicationDataContainer {
            return self.localStorage != undefined ? new LocalStorageBackedContainer("roamingSettings") : new WebWorkerBackedContainer("roamingSettings");
        }
    }

    export abstract class ApplicationDataContainer {
        protected name: string;
        protected containers: Map<string, ApplicationDataContainer>

        public values: Map<string, any>;
        public locality: ApplicationDataLocality;

        constructor(name) {
            this.name = name;
            this.values = new Map<string, any>();
            this.containers = new Map<string, WebWorkerBackedContainer>();
            this.locality = name.includes("local") ? ApplicationDataLocality.local : ApplicationDataLocality.roaming;
        }

        abstract lookup(key: string): any;
        abstract set(key: string, value: any): void
        abstract remove(key: string): void;
        abstract createContainer(name: string, disposition: ApplicationDataCreateDisposition): ApplicationDataContainer;
        abstract deleteContainer(name: string): void;
    }

    export enum ApplicationDataCreateDisposition {
        always,
        existing
    }

    export enum ApplicationDataLocality {
        local,
        roaming,
        temporaray,
        localCache
    }

    export enum CollisionCreationOption {
        
    }

    export class WebWorkerBackedContainer extends ApplicationDataContainer {

        constructor(name: string) {
            super(name)

            // let data = localStorage.getItem(name);
            // if (data !== null) {
            //     this.values = new Map(JSON.parse(data));
            // }

            // localStorage.setItem(name, JSON.stringify([...this.values]));
        }

        lookup(key: string): any {
            return this.values.get(key);
        }

        set(key: string, value: any) {
            this.values.set(key, value);
        }

        remove(key: string) {
            this.values.delete(key);
            //localStorage.setItem(name, JSON.stringify([...this.values]));
        }

        createContainer(name: string, disposition: ApplicationDataCreateDisposition) {
            var storage = new WebWorkerBackedContainer(this.name + "." + name);
            return this.containers.has(name) ? this.containers.get(name) : this.containers.set(name, storage).get(name);
        }

        deleteContainer(name: string) {
            this.containers.delete(name);
            //localStorage.removeItem(this.name + "." + name);
        }
    }

    export class LocalStorageBackedContainer extends ApplicationDataContainer {
        constructor(name: string) {
            super(name);

            let data = localStorage.getItem(name);
            if (data !== null) {
                this.values = new Map(JSON.parse(data));
            }

            localStorage.setItem(this.name, JSON.stringify([...this.values]));
        }

        lookup(key: string): any {
            return this.values.get(key);
        }

        set(key: string, value: any) {
            this.values.set(key, value);
            localStorage.setItem(this.name, JSON.stringify([...this.values]));
        }

        remove(key: string) {
            this.values.delete(key);
            localStorage.setItem(this.name, JSON.stringify([...this.values]));
        }

        createContainer(name: string, disposition: ApplicationDataCreateDisposition) {
            var storage = new LocalStorageBackedContainer(this.name + "." + name);
            return this.containers.has(name) ? this.containers.get(name) : this.containers.set(name, storage).get(name);
        }

        deleteContainer(name: string) {
            this.containers.delete(name);
            localStorage.removeItem(this.name + "." + name);
        }
    }

    export class PathIO {
        static readTextAsync(path: string) : Foundation.IAsyncOperation<string> {
            return Foundation.Shim.failShimmedAsyncFunction()
        }
    }
}