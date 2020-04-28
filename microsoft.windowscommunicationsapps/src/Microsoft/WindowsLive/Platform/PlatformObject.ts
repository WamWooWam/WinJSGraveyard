import { EventTarget, Enumerable } from "../../../../../src/Windows.Foundation";


export class PlatformObject extends EventTarget {
    public objectId: string;
    public objectType: string;

    constructor(type: string) {
        super();
        this.objectType = type;
    }

    @Enumerable(true)
    public get canEdit(): boolean {
        return false;
    }

    @Enumerable(true)
    public get canDelete(): boolean {
        return false;
    }

    @Enumerable(true)
    public get isObjectValid(): boolean {
        return this.objectId != "invalid";
    }

    commit() {

    }

    deleteObject() {

    }

}