export class Application {

    packageName: string;
    packageVersion: string;

    id: string;
    url: string;
    displayName: string;
    squareLogoUrl: string;
    squareSmallLogoUrl: string;
    foregroundColor: string;
    backgroundColor: string;
    splashImageUrl: string;
    wideLogoUrl: string;

    static extractApplication(element: HTMLElement): Application {
        let data = element.dataset;

        var app = new Application();
        app.packageName = data.packageName;
        app.packageVersion = data.packageVersion;

        app.id = data.id;
        app.url = "/" + app.packageName + data.url;
        app.displayName = data.displayName;
        app.squareLogoUrl = "/" + app.packageName + data.squareLogo;
        app.squareSmallLogoUrl = "/" + app.packageName + data.squareSmallLogo;
        app.foregroundColor = data.foregroundText;
        app.backgroundColor = data.backgroundColor;
        app.splashImageUrl = "/" + app.packageName + data.splashImage;

        if (data.wideLogo)
            app.wideLogoUrl = "/" + app.packageName + data.wideLogo;

        return app;
    }
}