import { PlatformObject } from "./PlatformObject";
import { Foundation } from "../../../../../src/Windows";
import { MailBody } from "./MailBody";
import { WindowsLive } from "../Enums";

export class MailMessage extends PlatformObject {
    constructor() {
        super("MailMessage");
    }

    from: string = "";
    to: string = "";
    cc: string = "";
    bcc: string = "";

    subject: string = "";
    sender: string = "";

    @Foundation.Enumerable(true)
    public get toRecipients() {
        return [];
    }

    @Foundation.Enumerable(true)
    public get ccRecipients() {
        return [];
    }

    @Foundation.Enumerable(true)
    public get bccRecipients() {
        return [];
    }

    isInSpecialFolderType() {
        return false;
    }

    createBody() {
        return new MailBody(WindowsLive.Platform.MailBodyType.html);
    }
}