import { PlatformObject } from "./PlatformObject";
import { Folder } from "./Folder";
import { Collection } from "./Utils";
import { WindowsLive } from "../Enums";

export class MailView extends PlatformObject {
    view: WindowsLive.Platform.MailViewType;
    isPinnedToNavPane: boolean;

    constructor(view: WindowsLive.Platform.MailViewType) {
        super("mailview");
        this.objectId = "MailView" + view;
        this.view = view;
        this.isPinnedToNavPane = true;
    }

    get sourceObject(): Folder {
        return new Folder(this);
    }

    clearUnseenMessages() {

    }

    getMessages(): Collection {
        return new Collection([]);
    }

    getLaunchArguments(): string {
        return "";
    }
}
