import { Application } from "./Application";
import { Desktop } from "./Desktop"
import $d from "../dom-tools"
import { createSplashElement } from "./Util";

export class CoreWindow {
    private app: Application;
    private rootElement: HTMLElement;

    private titleBarElement: HTMLDivElement;
    // private titleBarIconElement: HTMLImageElement;
    // private titleBarTitleElement: HTMLSpanElement;
    // private titleBarMinimiseButton: HTMLButtonElement;
    // private titleBarCloseButton: HTMLButtonElement;

    private frame: HTMLIFrameElement;
    private splash: HTMLDivElement;
    private sourceSet: boolean;
    private suspended: boolean;

    private static rootElement: HTMLElement;
    private static windowMap: Map<string, CoreWindow>;
    frameLoaded: boolean;

    public static get windows() {
        CoreWindow.ensureRootElement();
        return this.windowMap.values();
    }

    constructor(app: Application) {
        this.app = app;
        this.rootElement = document.createElement("div");
        this.rootElement.classList.add("core-window");

        this.frame = <HTMLIFrameElement>$d("<iframe>")
            .addClass("core-window-frame")
            .load(this.onFrameLoaded.bind(this), false).element;

        this.splash = createSplashElement(app);

        this.titleBarElement = <HTMLDivElement>$d("<div>")
            .addClass("core-window-titlebar")
            .append([
                $d("<img>").addClass("core-window-icon").attr("src", app.squareSmallLogoUrl.replace(".png", ".targetsize-48.png")),
                $d("<div>").addClass("core-window-totle").text(app.displayName),
                $d("<button>").addClass("core-window-minimise"),
                $d("<button>").addClass("core-window-close").click(this.onCloseButtonClicked.bind(this), false),
            ]).element;

        this.rootElement.appendChild(this.frame);
        this.rootElement.appendChild(this.splash);
        this.rootElement.appendChild(this.titleBarElement);
        CoreWindow.rootElement.appendChild(this.rootElement);
    }

    onCloseButtonClicked(ev: Event) {

    }

    ensureVisible() {
        this.rootElement.style.zIndex = (++Desktop.z).toString();
        this.rootElement.classList.remove("invisible");
    }

    activate() {
        this.ensureVisible();

        if (this.frame.src && this.frameLoaded) {
            this.doFadeOut();
        }
        else {
            this.frame.src = this.app.url;
        }

        let hash = this.app.packageName + "/" + this.app.id;
        if (window.location.hash != hash)
            window.location.hash = hash;
    }

    hide() {
        this.rootElement.classList.add("invisible");
        this.splash.classList.remove("invisible");        
        this.frame.contentWindow.postMessage({ event: "suspending", target: "Windows.UI.WebUI.WebUIApplication" }, "*");
        this.suspended = true;
    }

    private onFrameLoaded() {
        if (!this.splash || !this.frame.src)
            return

        this.frameLoaded = true;
        this.doFadeOut();
    }

    private doFadeOut() {
        this.frame.contentWindow.postMessage({ event: this.suspended ? "resuming" : "activated", target: "Windows.UI.WebUI.WebUIApplication" }, "*");
        this.suspended = false;

        this.splash.classList.add("invisible");
        setTimeout(() => {
            this.splash.classList.add("hidden");
            this.splash.classList.remove("invisible");
        }, 200);
    }

    static ensureRootElement() {
        if (CoreWindow.rootElement)
            return;

        CoreWindow.rootElement = <HTMLElement>document.getElementsByClassName("core-window-container")[0];
        CoreWindow.windowMap = new Map<string, CoreWindow>();
    }

    static createMainWindow(app: Application) {
        CoreWindow.ensureRootElement();

        if (this.windowMap.has(app.id)) {
            return this.windowMap.get(app.id);
        }
        else {
            let window = new CoreWindow(app);
            this.windowMap.set(app.id, window);
            return window;
        }
    }
}