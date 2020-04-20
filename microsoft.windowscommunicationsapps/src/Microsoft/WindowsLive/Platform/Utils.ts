import { Foundation } from "../../../../../src/Windows.Foundation";

//
// was Windows.Foundation.Collections not a thing at this stage?
export class Collection extends Foundation.EventTarget {
    private readonly collection: any[];

    constructor(collection: any[]) {
        super();
        this.collection = collection
        this.count = collection.length;

        return new Proxy(this, new Foundation.ShimProxyHandler());
    }

    public count: number;

    @Foundation.Enumerable(true)
    public get totalCount(): number {
        return this.collection.length;
    }

    public item(index: number) {
        return this.collection[index];
    }

    public fetchMoreItems(dwFetchSize: number) {

    }

    public lock() {

    }

    public unlock() {

    }

    public dispose() {

    }
}