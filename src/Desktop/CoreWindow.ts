import { Application } from "./Application";
import { Desktop } from "./Desktop"
import { createSplashElement } from "./Util";
import $d from "../dom-tools"
import * as _ from "lodash"

export class CoreWindow {

    private _app: Application;
    private _rootElement: HTMLElement;
    private _titleBarElement: HTMLDivElement;
    // private titleBarIconElement: HTMLImageElement;
    // private titleBarTitleElement: HTMLSpanElement;
    // private titleBarMinimiseButton: HTMLButtonElement;
    // private titleBarCloseButton: HTMLButtonElement;

    private _frame: HTMLIFrameElement;
    private _splash: HTMLDivElement;
    private _sourceSet: boolean;
    private _suspended: boolean;

    private static rootElement: HTMLElement;
    private static mainWindowMap: Map<string, CoreWindow>;
    private static windowSet: Array<CoreWindow>;
    frameLoaded: boolean;

    public static get windows() {
        CoreWindow.ensureRootElement();
        return CoreWindow.windowSet;
    }

    public get frame() {
        return this._frame;
    }

    public get root() {
        return this._rootElement;
    }

    public get app() {
        return this._app;
    }

    constructor(app: Application) {
        this._app = app;
        this._rootElement = document.createElement("div");
        this._rootElement.classList.add("core-window");

        this._frame = <HTMLIFrameElement>$d("<iframe>")
            .addClass("core-window-frame")
            .load(this.onFrameLoaded.bind(this), false).element;

        this._splash = createSplashElement(app);

        this._titleBarElement = <HTMLDivElement>$d("<div>")
            .addClass("core-window-titlebar")
            .append([
                $d("<img>").addClass("core-window-icon").attr("src", app.squareSmallLogoUrl.replace(".png", ".targetsize-48.png")),
                $d("<div>").addClass("core-window-totle").text(app.displayName),
                $d("<button>").addClass("core-window-minimise"),
                $d("<button>").addClass("core-window-close").click(this.onCloseButtonClicked.bind(this), false),
            ]).element;

        this._rootElement.appendChild(this._frame);
        this._rootElement.appendChild(this._splash);
        this._rootElement.appendChild(this._titleBarElement);
        CoreWindow.rootElement.appendChild(this._rootElement);
    }

    onCloseButtonClicked(ev: Event) {

    }

    ensureVisible() {
        this._rootElement.style.zIndex = (++Desktop.z).toString();
        this._rootElement.classList.remove("invisible");
    }

    activate() {
        this.ensureVisible();

        if (this._frame.src && this.frameLoaded) {
            this.doFadeOut();
        }
        else {
            this._frame.src = this._app.url;
        }

        let hash = this._app.packageName + "/" + this._app.id;
        if (window.location.hash != hash)
            window.location.hash = hash;
    }

    hide() {
        this._rootElement.classList.add("invisible");
        this._splash.classList.remove("invisible");
        this._suspended = true;

        this.sendMessage("Windows.UI.WebUI.WebUIApplication", "suspending", null);
    }

    terminate() {
        this._frame.src = "about:blank";
        this._rootElement.removeChild(this._frame);

        _.remove(CoreWindow.windows, this);

        if (CoreWindow.mainWindowMap.get(this.app.id) == this)
            CoreWindow.mainWindowMap.delete(this.app.id);

        CoreWindow.rootElement.removeChild(this._rootElement);
    }

    private onFrameLoaded() {
        if (!this._splash || !this._frame.src)
            return

        this.frameLoaded = true;
        this.doFadeOut();
    }

    sendMessage(target: string, event: string, data: any) {
        this._frame.contentWindow.postMessage({ event: event, target: target, data: data }, "*");
    }

    private doFadeOut() {
        this.sendMessage("Windows.UI.WebUI.WebUIApplication", this._suspended ? "resuming" : "activated", null);
        this._suspended = false;

        this._splash.classList.add("invisible");
        setTimeout(() => {
            this._splash.classList.add("hidden");
            this._splash.classList.remove("invisible");
        }, 200);
    }

    static ensureRootElement() {
        if (CoreWindow.rootElement)
            return;

        CoreWindow.rootElement = <HTMLElement>document.getElementsByClassName("core-window-container")[0];
        CoreWindow.mainWindowMap = new Map<string, CoreWindow>();
        CoreWindow.windowSet = [];
    }

    static createMainWindow(app: Application) {
        CoreWindow.ensureRootElement();

        if (this.mainWindowMap.has(app.id)) {
            return this.mainWindowMap.get(app.id);
        }
        else {
            let window = new CoreWindow(app);
            this.mainWindowMap.set(app.id, window);
            this.windows.push(window);
            return window;
        }
    }
}