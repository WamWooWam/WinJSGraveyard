export class Application {

    packageName: string;
    packageVersion: string;

    id: string;
    url: string;
    icon: string;
    displayName: string;

    squareLogoUrl: string;
    squareSmallLogoUrl: string;
    squareLargeLogoUrl: string;
    wideLogoUrl: string;
    splashImageUrl: string;

    foregroundColor: string;
    backgroundColor: string;

    static extractApplication(element: HTMLElement): Application {
        let data = element.dataset;

        var app = new Application();
        app.packageName = data.packageName;
        app.packageVersion = data.packageVersion;

        app.id = data.id;
        app.url = "/" + app.packageName + data.url;
        app.displayName = data.displayName;
        app.icon = "/" + app.packageName + data.icon;
        app.foregroundColor = data.foregroundText;
        app.backgroundColor = data.backgroundColor;
        app.splashImageUrl = "/" + app.packageName + data.splashImage;

        if (data.squareLogo)
            app.squareLogoUrl = "/" + app.packageName + data.squareLogo;
        if (data.squareSmallLogo)
            app.squareSmallLogoUrl = "/" + app.packageName + data.squareSmallLogo;
        if (data.squareLargeLogo)
            app.squareLargeLogoUrl = "/" + app.packageName + data.squareLargeLogo;
        if (data.wideLogo)
            app.wideLogoUrl = "/" + app.packageName + data.wideLogo;

        return app;
    }
}