import { Foundation } from "../../../../../../src/Windows.Foundation"
import { SuiteUpdateApplication } from "./Application"

//
// checks for updates of the "suite" (i.e. the group of communication apps) 
// realistically not needed until we're in PWA territory so help me god
export class SuiteUpdate extends Foundation.EventTarget {
    static loadAsync(...args) {
        return new Foundation.IAsyncOperation<SuiteUpdate>((resolve, reject) => resolve(new SuiteUpdate()));
    }
    static loadPlatformAsync(...args) {
        return Foundation.Shim.shimmedAsyncFunction<SuiteUpdate>(args);
    }
    static loadManagerAsync(...args) {
        return Foundation.Shim.shimmedAsyncFunction<SuiteUpdate>(args);
    }
    static loadUriAsync(...args) {
        return Foundation.Shim.shimmedAsyncFunction<SuiteUpdate>(args);
    }
    static loadStorageFileAsync(...args) {
        return Foundation.Shim.shimmedAsyncFunction<SuiteUpdate>(args);
    }
    static loadXmlAsync(...args) {
        return Foundation.Shim.shimmedAsyncFunction<SuiteUpdate>(args);
    }

    get app(): SuiteUpdateApplication {
        return new SuiteUpdateApplication()
    }
}