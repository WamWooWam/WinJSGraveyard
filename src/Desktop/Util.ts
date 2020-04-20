import { ApplicationRegistry } from "./ApplicationRegistry";
import { Application } from "./Application";
import { CoreWindow } from "./CoreWindow";
import { Start } from "./Start";

export function goToAppFromUrl() {
    let start = Start.getInstance();
    let hash = window.location.hash;
    if (hash != null) {
        hash = hash.substr(1);

        let app = ApplicationRegistry.getById(hash);
        if (app != null) {
            let window = CoreWindow.createMainWindow(app);
            window.activate();

            return;
        }
    }

    start.show();
}

export function cubicEase(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
}

export function circularEase(t, b, c, d) {
    t /= d;
    t--;
    return c * Math.sqrt(1 - t * t) + b;
}

export function lightenDarkenColour(col, amt) {

    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');

}

export function createSplashElement(app: Application) {
    let splash = document.createElement("div");
    splash.classList.add("splashScreen");
    splash.style.cssText = `background: ${app.backgroundColor};`;
    let splashScreenContainer = document.createElement("div");
    splashScreenContainer.classList.add("splashScreenContainer");
    let splashScreenImage = document.createElement("img");
    splashScreenImage.src = app.splashImageUrl.replace(".png", ".scale-100.png");
    splashScreenContainer.appendChild(splashScreenImage);
    splash.appendChild(splashScreenContainer);

    return splash;
}