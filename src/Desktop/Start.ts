import { Tile } from "./Tile";
import { CoreWindow } from "./CoreWindow";
import "./start.css"

export class Start {
    private static _start: Start;

    private startElement: HTMLElement;
    private tilesElement: HTMLElement;
    private tiles: Array<Tile>;

    constructor() {
        this.startElement = <HTMLElement>document.getElementsByClassName("start")[0];
        this.tilesElement = <HTMLElement>document.getElementsByClassName("start-tiles")[0];
        this.tiles = [];

        let tileElements = this.tilesElement.querySelectorAll(".tile-container");
        for (let i = 0; i < tileElements.length; i++) {
            let tile = <HTMLDivElement>tileElements.item(i);
            this.tiles.push(new Tile(tile));
        }
    }

    static getInstance(): Start {
        return this._start ?? (this._start = new Start());
    }

    show() {
        for (const window of CoreWindow.windows) {
            window.hide();
        }

        this.startElement.classList.remove("invisible");
    }

    removeTile(tile: Tile) {
        this.tilesElement.removeChild(tile.rootElement);
    }

    restoreTile(tile: Tile) {
        this.tilesElement.insertBefore(tile.rootElement, tile.postElement);
    }

    hide() {
        this.startElement.classList.add("invisible");
    }
}