import { Foundation } from "../../../../../src/Windows.Foundation";
import { PlatformObject } from "./PlatformObject";

export class UserTile extends PlatformObject {
    constructor(id: string) {
        super("usertile");
        this.objectId = id;

        return new Proxy(this, new Foundation.ShimProxyHandler());
    }

    public get appdataURI(): string {
        return "";
    }
}