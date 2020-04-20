import { PlatformObject } from "./PlatformObject";
import { Foundation } from "../../../../../src/Windows";

export class MailResource extends PlatformObject {
    constructor() {
        super("MailResource");
        return new Proxy(this, new Foundation.ShimProxyHandler());
    }

    @Foundation.Enumerable(true)
    public get isEnabled(): boolean {
        return true;
    }
}