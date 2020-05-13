import { Start } from "./Desktop/Start";
import { goToAppFromUrl } from "./Desktop/Util"
import { Desktop } from "./Desktop/Desktop";
import "./fonts.css"
import "./index.css"

window.addEventListener("load", () => {
    Desktop.init();
    window.addEventListener("hashchange", (ev: HashChangeEvent) => {
        goToAppFromUrl();
    })

    goToAppFromUrl();
})