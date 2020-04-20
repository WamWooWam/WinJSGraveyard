
import { circularEase, cubicEase, lightenDarkenColour, createSplashElement } from "./Util"
import { Start } from "./Start";
import { Application } from "./Application";
import { CoreWindow } from "./CoreWindow";
import { ApplicationRegistry } from "./ApplicationRegistry";

export enum TileSize {
    small,
    square,
    wide,
    large
}

export class Tile {

    private app: Application;

    private animationState: any;
    private animationComplete: boolean;
    private wasClicked: boolean;

    private tileStyle: string;
    private tileSize: TileSize;
    private tileSizeString: string;
    private tileContainerElement: HTMLDivElement;
    private tileContainerPostElement: HTMLDivElement;
    private tileElement: HTMLDivElement;
    private showTextSizes: Array<TileSize>

    tileBack: HTMLDivElement;
    tileFront: HTMLDivElement;
    splash: HTMLDivElement;

    constructor(tileContainerElement: HTMLDivElement) {
        this.tileContainerElement = tileContainerElement;
        this.tileStyle = tileContainerElement.style.cssText;
        this.tileContainerPostElement = <HTMLDivElement>tileContainerElement.nextElementSibling;
        this.tileSizeString = tileContainerElement.dataset.tileSize ?? "square";
        this.tileSize = TileSize[this.tileSizeString];

        this.showTextSizes = (tileContainerElement.dataset.showTextOn ?? "square|wide|large").split('|').map(v => TileSize[v]);

        this.app = Application.extractApplication(tileContainerElement);
        ApplicationRegistry.registerApplication(this.app);

        this.constructTile();
        this.animationState = {};
    }

    public get rootElement(): HTMLElement {
        return this.tileContainerElement;
    }

    public get postElement(): HTMLElement {
        return this.tileContainerPostElement;
    }

    private constructTile() {
        this.tileContainerElement.classList.add(this.tileSizeString)

        let tileColour = this.app.backgroundColor;
        let tileTopColour = lightenDarkenColour(tileColour, 30);
        let borderColour = lightenDarkenColour(tileColour, 40);

        this.tileElement = document.createElement("div");
        this.tileElement.classList.add("tile");
        this.tileContainerElement.appendChild(this.tileElement);

        this.tileBack = document.createElement("div");
        this.tileBack.classList.add("back");
        this.tileElement.appendChild(this.tileBack);

        this.tileFront = document.createElement("div");
        this.tileFront.classList.add("front");
        this.tileElement.appendChild(this.tileFront);

        this.tileFront.style.cssText = `background: linear-gradient(to top right, ${tileColour}, ${tileTopColour}); border: 1px solid ${borderColour};`;
        this.tileBack.style.cssText = `background: ${tileColour};`

        this.constructFront();

        this.tileContainerElement.addEventListener("click", this.onTileClicked.bind(this));
    }

    private constructFront() {
        let tileFrontImageContainer = document.createElement("div");
        tileFrontImageContainer.classList.add("tile-front-image-container");
        this.tileFront.appendChild(tileFrontImageContainer);

        let tileImageUrl = this.app.squareLogoUrl.replace(".png", ".scale-100.png");

        if (this.tileSize == TileSize.wide && this.app.wideLogoUrl) {
            tileImageUrl = this.app.wideLogoUrl;
        }

        if(this.tileSize == TileSize.small && this.app.squareSmallLogoUrl){
            tileImageUrl = this.app.squareSmallLogoUrl;
        }

        let tileFrontImage = document.createElement("img");
        tileFrontImage.src = tileImageUrl;
        tileFrontImage.classList.add("tile-front-image");
        tileFrontImage.classList.add(this.tileSizeString);
        tileFrontImageContainer.appendChild(tileFrontImage);

        if (this.tileSize != TileSize.small && this.showTextSizes.includes(this.tileSize)) { 
            let tileFrontText = document.createElement("p");
            tileFrontText.innerText = this.app.displayName;
            tileFrontText.classList.add("tile-front-text");
            this.tileFront.appendChild(tileFrontText);
        }
    }

    private constructBack() {
        this.splash = createSplashElement(this.app);
        this.tileBack.appendChild(this.splash);
    }

    private constructCoreWindow() {
        let coreWindow = CoreWindow.createMainWindow(this.app);
        coreWindow.activate();
    }

    reset() {
        this.animationState = {};
        this.animationComplete = false;
        this.wasClicked = false;
        this.tileContainerElement.style.cssText = this.tileStyle;
        this.tileContainerElement.classList.remove("moving");
        this.tileContainerElement.classList.remove("flipped");
    }

    private onFlipComplete() {
        this.constructCoreWindow();
        this.reset();

        let start = Start.getInstance();
        start.restoreTile(this);

    }

    private onTileClicked() {
        if (this.wasClicked)
            return;

        var start = Start.getInstance();
        this.wasClicked = true;
        this.constructBack();

        var bodyRect = document.body.getBoundingClientRect();
        var elemRect = this.tileContainerElement.getBoundingClientRect();

        this.animationState.initialX = elemRect.left - bodyRect.left;
        this.animationState.initialY = elemRect.top - bodyRect.top;
        this.animationState.initialWidth = elemRect.width;
        this.animationState.initialHeight = elemRect.height;

        this.tileContainerElement.classList.add("moving");
        this.tileContainerElement.style.cssText = `position: absolute; top: ${this.animationState.y}px; left: ${this.animationState.x}px;`

        start.hide();
        start.removeTile(this);

        document.body.appendChild(this.tileContainerElement);

        requestAnimationFrame(this.flip.bind(this));
    }

    private flip(time: number) {
        if (this.animationState.start == null) {
            this.animationState.start = time;
            requestAnimationFrame(this.flip.bind(this));
            return;
        }

        var bodyRect = document.body.getBoundingClientRect();

        let bounds = this.tileContainerElement.getBoundingClientRect();
        let progress = (time - this.animationState.start) / 1000.0;
        let angle = circularEase(progress, 0, 180, 1);
        let width = cubicEase(progress, this.animationState.initialWidth, bodyRect.width - this.animationState.initialWidth, 1);
        let height = cubicEase(progress, this.animationState.initialHeight, bodyRect.height - this.animationState.initialHeight, 1);

        let targetX = ((bodyRect.width - width) / 2) - this.animationState.initialX;
        let targetY = ((bodyRect.height - height) / 2) - this.animationState.initialY;

        let x = cubicEase(progress, this.animationState.initialX, targetX, 1);
        let y = cubicEase(progress, this.animationState.initialY, targetY, 1);

        this.tileContainerElement.style.cssText = `position: absolute; top: ${y}px; left: ${x}px; width: ${width}px; height: ${height}px; transform: rotate3D(0,1,0,${angle}deg);`

        if (angle >= 90 && !this.animationState.flipped) {
            this.animationState.flipped = true;
            this.tileContainerElement.classList.add("flipped");
        }

        if (progress < 1) {
            this.animationState.previousProgress = progress;
            requestAnimationFrame(this.flip.bind(this));
        } else {
            this.animationState = {}
            this.animationComplete = true;
            setTimeout(this.onFlipComplete.bind(this), 500);
        }
    }
}