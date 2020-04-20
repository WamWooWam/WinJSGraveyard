import { Start } from "./Desktop/Start";
import { goToAppFromUrl } from "./Desktop/Util"

(() => {
    window.addEventListener("hashchange", (ev: HashChangeEvent) => {
        goToAppFromUrl();
    })

    goToAppFromUrl();
})();