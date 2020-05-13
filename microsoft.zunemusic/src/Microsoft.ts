import { CollectionBuildingManager as CollectionBuildingManagerImpl } from "./Entertainment/Platform/CollectionBuildingManager";
import { ConfigurationManager as ConfigurationManagerImpl } from "./Entertainment/Configuration/ConfigurationManager";
import { Application as ApplicationImpl } from "./Entertainment/Application/Application";
import { ApplicationStatics as ApplicationStaticsImpl } from "./Entertainment/Application/ApplicationStatics";
import { ApplicationLifetimeManager as ApplicationLifetimeManagerImpl } from "./Entertainment/ApplicationLifetimeManager";
import { GlobalizationManager as GlobalizationManagerImpl } from "./Entertainment/Util/GlobalizationManager";
import { FeatureEnablement as FeatureEnablementImpl } from "./Entertainment/FeatureEnablement/FeatureEnablement"
import { Instrumentation as InstrumentationImpl } from "./Entertainment/Instrumentation";
import { SignIn as SignInImpl } from "./Entertainment/Util/SignIn";
import { Logging as LoggingImpl } from "./Entertainment/Platform/Logging";
import { ShipAssertProvider as ShipAssertProviderImpl } from "./Entertainment/Infratructure/ShipAssertProvider";
import { Marketplace as MarketplaceImpl } from "./Entertainment/Marketplace/Marketplace";

export namespace PerfTrack {
    export class PerfTrackLogger {
        static windowsDataUploadEnabled: number = 0;

        writeResizeStopEvent() {

        }
    }
    export enum PerfTrackTimePoint {
        responsive
    }
}

export namespace Entertainment {
    export namespace Application {
        export const ApplicationStatics = ApplicationStaticsImpl;
        export const Application = ApplicationImpl;
    }

    export const ApplicationLifetimeManager = ApplicationLifetimeManagerImpl;

    export namespace Configuration {
        export const ConfigurationManager = ConfigurationManagerImpl;
    }

    export namespace FeatureEnablement {
        export const FeatureEnablement = FeatureEnablementImpl;
    }

    export namespace Infrastructure {
        export const ShipAssertProvider = ShipAssertProviderImpl;
    }
    
    export const Instrumentation = InstrumentationImpl;

    export namespace Marketplace {
        export const Marketplace = MarketplaceImpl;
    }

    export namespace Platform {
        export const CollectionBuildingManager = CollectionBuildingManagerImpl;
        export const Logging = LoggingImpl;
    }

    export namespace Util {
        export const GlobalizationManager = GlobalizationManagerImpl;
        export const SignIn = SignInImpl;
    }
}