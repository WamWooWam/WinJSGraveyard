import * as MSAppImpl from "../../src/MSApp"
import * as MicrosoftImpl from "./Microsoft"
import * as MicrosoftEnums from "./Enums"
import * as WindowsImpl from "../../src/Windows"
import * as en_GB from "../resources/en-gb.json"
import * as en_US from "../resources/en-us.json"
import * as generic from "../resources/generic.json"
import * as _ from "lodash"

let loader = WindowsImpl.ApplicationModel.Resources.ResourceLoader.getForCurrentView();
loader.languageMap.set("en-gb", en_GB.default);
loader.languageMap.set("en-us", en_US.default);
loader.languageMap.set("generic", generic.default);

const globalThis = (() => {
    if (typeof self !== 'undefined') {
        return self;
    } else if (typeof window !== 'undefined') {
        return window;
    } else {
        return Function('return this')();
    }
})();

if (globalThis.document)
    globalThis["msMatchMedia"] = typeof msMatchMedia === "function" ? msMatchMedia : window.matchMedia;

globalThis["msWriteProfilerMark"] = function (...args) { console.info("profiler:" + args[0]) };
globalThis["setImmediate"] = typeof setImmediate === 'function' ? setImmediate : (...args) => {
    args.splice(1, 0, 0);
    setTimeout(...args);
};
globalThis["msSetImmediate"] = setImmediate;
globalThis["Debug"] = {}
globalThis["MSApp"] = MSAppImpl;
globalThis["Microsoft"] = _.merge(MicrosoftImpl, MicrosoftEnums);
globalThis["Windows"] = WindowsImpl;

globalThis["msSetWeakWinRTProperty"] = null;
globalThis["msGetWeakWinRTProperty"] = null;

Object.defineProperty(Function.prototype, "name", { writable: true })