import { PlatformObject } from "./PlatformObject";
import { Foundation } from "../../../../../src/Windows.Foundation";

export class Person extends PlatformObject {
    constructor() {
        super("Person");

        return new Proxy(this, new Foundation.ShimProxyHandler);
    }
}