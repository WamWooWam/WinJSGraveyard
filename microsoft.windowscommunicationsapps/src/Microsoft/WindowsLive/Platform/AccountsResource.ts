import { PlatformObject } from "./PlatformObject"
import { ShimProxyHandler } from "../../../../../src/Windows.Foundation";

export class AccountsResource extends PlatformObject {
    constructor(id: string) {
        super("Account");
        this.objectId = id;

        return new Proxy(this, new ShimProxyHandler());
    }

    public get isInitialSyncFinished(): boolean {
        return true;
    }

    hasEverSynchronized: boolean = true;

}