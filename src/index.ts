import { Start } from "./Desktop/Start";
import { goToAppFromUrl } from "./Desktop/Util"
import { Desktop } from "./Desktop/Desktop";

(() => {
    Desktop.init();
    window.addEventListener("hashchange", (ev: HashChangeEvent) => {
        goToAppFromUrl();
    })

    goToAppFromUrl();
})();