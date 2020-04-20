import { Manager } from "./ManagerBase";
import { MailView } from "./MailView";
import { Client } from "./Client";
import { Foundation } from "../../../../../src/Windows";
import { MailMessage } from "./MailMessage";
import { Collection } from "./Utils";
import { WindowsLive } from "../Enums";

export class MailManager extends Manager {

    mailViews: Map<WindowsLive.Platform.MailViewType, MailView>;

    constructor(client: Client) {
        super(client)
        this.mailViews = new Map<WindowsLive.Platform.MailViewType, MailView>();
    }

    ensureMailView(view: WindowsLive.Platform.MailViewType, accountId: string, objectId: string) {

        if (!this.mailViews.has(view)) {
            var newView = new Proxy(new MailView(view), new Foundation.ShimProxyHandler);
            this.mailViews.set(view, newView);
            return newView;
        }
        else {
            return this.mailViews.get(view);
        }
    }

    createDraftMessage(view: WindowsLive.Platform.MailViewType) {
        return new MailMessage();
    }

    public setMailVisible(bool: boolean) {

    }

    public getMailViews(): Collection {
        return new Collection(Array.from(this.mailViews.values()));
    }
}