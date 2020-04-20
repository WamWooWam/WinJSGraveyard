import { Foundation } from "../../../../../src/Windows.Foundation";

export class PlatformObject extends Foundation.EventTarget {
    public objectId: string;
    public objectType: string;

    constructor(type: string) {
        super();
        this.objectType = type;
    }

    @Foundation.Enumerable(true)
    public get canEdit(): boolean {
        return false;
    }

    @Foundation.Enumerable(true)
    public get canDelete(): boolean {
        return false;
    }

    @Foundation.Enumerable(true)
    public get isObjectValid(): boolean {
        return this.objectId != "invalid";
    }

    commit() {

    }

    deleteObject() {

    }

}