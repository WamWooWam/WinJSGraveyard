import { Application } from "./Application";

export class ApplicationRegistry {
    private static applicationMap: Map<string, Application>;

    static ensureApplicationMap() {
        ApplicationRegistry.applicationMap = ApplicationRegistry.applicationMap ?? new Map();
    }

    static registerApplication(app: Application) {
        ApplicationRegistry.ensureApplicationMap();
        ApplicationRegistry.applicationMap.set(app.packageName + "/" + app.id, app);
    }

    static getById(id: string): Application {
        ApplicationRegistry.ensureApplicationMap();
        return ApplicationRegistry.applicationMap.get(id);
    }
}