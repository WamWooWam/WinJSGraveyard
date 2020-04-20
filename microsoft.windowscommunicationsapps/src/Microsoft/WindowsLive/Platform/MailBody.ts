import { PlatformObject } from "./PlatformObject";
import { WindowsLive } from "../Enums";

export class MailBody extends PlatformObject {

    constructor(type: WindowsLive.Platform.MailBodyType) {
        super("MailBody");
        this.type = type;
    }

    type: WindowsLive.Platform.MailBodyType;
    truncated: boolean = false;
    body: string = "";
    method: string = "";
    metadata: string = "";
}