import { Foundation } from "../../../../../src/Windows.Foundation";
import { PlatformObject } from "./PlatformObject"

export class AccountsResource extends PlatformObject {
    constructor(id: string) {
        super("Account");
        this.objectId = id;

        return new Proxy(this, new Foundation.ShimProxyHandler());
    }

    public get isInitialSyncFinished(): boolean {
        return true;
    }

    hasEverSynchronized: boolean = true;

}