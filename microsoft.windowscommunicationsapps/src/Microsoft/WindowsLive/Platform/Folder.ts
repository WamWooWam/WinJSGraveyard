import { WindowsLive } from "../Enums";
import { PlatformObject } from "./PlatformObject";
import { MailView } from "./MailView";
import { Foundation } from "../../../../../src/Windows";

export class Folder extends PlatformObject {
    constructor(mailView: MailView) {
        super("Folder");
        this.objectId = "Folder" + mailView.objectId;
        return new Proxy(this, new Foundation.ShimProxyHandler());
    }

    startSyncFolderContents(bool: boolean) {

    }

    get specialMailFolderType(): WindowsLive.Platform.MailFolderType {
        return WindowsLive.Platform.MailFolderType.inbox;
    }
}