import { IMessage } from "./Desktop";
import $d, { DOMBaseNode } from "../dom-tools"

export class MessageDialogImpl {
    showAsync(message: IMessage) {
        let windowRoot = message.window.root;

        if (windowRoot.querySelectorAll(".message-dialog-container").length != 0) {
            // winrt also does this
            message.window.sendMessage("Windows.UI.Popups.MessageDialog", "fail", { id: message.data.id, message: "Can only open one MessageDialog at a time!" });
            return;
        }

        let dialogRoot: DOMBaseNode;

        let closeDialog = (c) => {
            message.window.sendMessage("Windows.UI.Popups.MessageDialog", "success", { id: message.data.id, commandId: c.id });
            windowRoot.removeChild(containerRoot.element);
        }

        let containerRoot = $d("<div>")
            .addClass("message-dialog-container")
            .append([
                dialogRoot = $d("<div>")
                    .addClass("message-dialog-root")
                    .append([
                        $d("<div>")
                            .addClass("message-dialog-content-root")
                            .append([
                                $d("<h1>")
                                    .addClass("message-dialog-title", message.data.title ? "visible" : "hidden")
                                    .text(message.data.title),
                                $d("<pre>")
                                    .addClass("message-dialog-content", message.data.content ? "visible" : "hidden")
                                    .text(message.data.content),
                                $d("<div>")
                                    .addClass("message-dialog-button-container")
                                    .append((message.data.commands as Array<any>).map(c => $d("<button>").text(c.label).addClass("message-dialog-button").click(() => { closeDialog(c); }, false))),
                            ])
                    ]),
            ])

        windowRoot.appendChild(containerRoot.element);
    }
}