import { PlatformObject } from "./PlatformObject";
import { Foundation } from "../../../../../src/Windows";
import { Collection } from "./Utils";
import { UserTile } from "./UserTile";
import { WindowsLive } from "../Enums";
import { Account } from "./Account";
import { Person } from "./Person";
import { PeopleManager } from "./PeopleManager";

export class Contact extends PlatformObject {

    private contactManager: PeopleManager;    

    constructor(contactManager: PeopleManager) {
        super("Contact");

        return new Proxy(this, new Foundation.ShimProxyHandler());
    }

    @Foundation.Enumerable(true)
    public get linkedContacts(): Collection {
        return new Collection([]);
    }

    @Foundation.Enumerable(true)
    public get calculatedUIName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public firstName: string;
    public middleName: string;
    public lastName: string;
    public nickName: string;
    public emailAddress: string;
    public accountId: string;
    public account: Account;

    @Foundation.Enumerable(true)
    public get person(): Person {
        return new Person();
    }

    commit(): void {

    }

    getUserTile(tile: WindowsLive.Platform.UserTileSize, cached: boolean) {
        return new UserTile(this.objectId);
    }
}