import { Start } from "./Start";
import { CoreWindow } from "./CoreWindow";
import { Application } from "./Application";

import { MSAppImpl } from "./MSAppImpl";
import { MessageDialogImpl } from "./MessageDialogImpl";

export interface IMessage {
    source: string;
    event: string;
    data: any;
    window: CoreWindow;
    app: Application;
}

export class Desktop {
    static z: number = 10;
    static messageListeners: Map<string, any>;

    static init() {
        Start.getInstance(); // initialize start
        Desktop.messageListeners = new Map();
        Desktop.registerListener("MSApp", new MSAppImpl());
        Desktop.registerListener("MessageDialog", new MessageDialogImpl());
        window.addEventListener("message", Desktop.globalMessageListener);
    }

    // global message listener dispatches messages to their correct location
    // with source app information attached
    static globalMessageListener(ev: MessageEvent) {
        let frame = (ev.source as Window).frameElement;
        if (frame == null) {
            console.error("Global message from null frame??");
            return;
        }

        let targetWindow: CoreWindow = null;
        for (const window of CoreWindow.windows) {
            if (window.frame == frame) {
                targetWindow = window;
                break;
            }
        }

        if (targetWindow == null) {
            console.error("Global message from null window??");
            return;
        }

        let data: IMessage = ev.data;
        if (data["window"] || data["app"]) {
            console.warn("Invalid property in data, will be overwritten!");
        }

        data.window = targetWindow;
        data.app = targetWindow.app;

        if (!Desktop.messageListeners.has(data.source)) {
            console.error("Global message with no handler!");
            return;
        }

        Desktop.messageListeners.get(data.source)[data.event](data);
    }

    static registerListener(name: string, listener: any) {
        Desktop.messageListeners.set(name, listener);
    }
}