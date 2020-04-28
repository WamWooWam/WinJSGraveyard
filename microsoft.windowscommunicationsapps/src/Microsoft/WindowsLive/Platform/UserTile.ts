import { PlatformObject } from "./PlatformObject";
import { ShimProxyHandler } from "../../../../../src/Windows.Foundation";

export class UserTile extends PlatformObject {
    constructor(id: string) {
        super("usertile");
        this.objectId = id;

        return new Proxy(this, new ShimProxyHandler());
    }

    public get appdataURI(): string {
        return "";
    }
}