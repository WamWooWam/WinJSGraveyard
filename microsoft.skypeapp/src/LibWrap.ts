export class WrSkyLib {
    static log(category: string, message: string): void {
        console.warn(`[${category}]: ${message}`);
    }

    static initPlatform() {
        // init 
    }
}

export enum UIEventContext {
    ui,
    background
}

export class UIEventRunner {
    private static _instance: UIEventRunner;

    static instance(): UIEventRunner {
        return (UIEventRunner._instance != undefined ? UIEventRunner._instance = new UIEventRunner() : UIEventRunner._instance);
    }

    static run(context: UIEventContext, threshold: number) {

    }
}

export class VectGIString {

}

export class AvatarManager {
    static offlineAvatarURI: string = "https://cdn.discordapp.com/embed/avatars/0.png";
}