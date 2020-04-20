import { URL } from "url"

export namespace Foundation {
    export class IAsyncOperation<T> extends Promise<T> {
        done(t: any, c: any) {
            this.then(t).catch(c);
        }
    }

    export class IAsyncAction extends Promise<void> {
        done(t: any, c: any) {
            this.then(t).catch(c);
        }
    }

    export class Uri {

    }
    
    export const Url = URL;

    export function Enumerable(value: boolean) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            descriptor.enumerable = value;
        };
    }

    export class ShimProxyHandler<T extends Object> implements ProxyHandler<T> {
        get(target: T, key: any) {
            let f = target[key];

            if (key != "constructor")
                (f === undefined ? console.error : console.info)("shim: " + target.constructor?.name + "." + key);

            return f;
        }
    }

    export interface Rect {
        height: number,
        width: number,
        x: number,
        y: number
    }

    export class EventTarget {
        targetElement: Element;

        constructor() {
            if (self["document"] != undefined)
                this.targetElement = document.createElement("div");
        }

        addEventListener(event: any, handler: any) {
            this.targetElement?.addEventListener(event, handler);
        }

        removeEventListener(event: any, handler: any) {
            this.targetElement?.removeEventListener(event, handler);
        }

        dispatchEvent(event: Event) {
            this.targetElement?.dispatchEvent(event);
        }
    }

    export class Shim {
        static callerName() {
            try {
                throw new Error();
            } catch (e) {
                try {
                    return e.stack.split('at ')[3].split(' ')[0];
                } catch (e) {
                    return '';
                }
            }
        }

        static shimmedFunction(...args) {
            console.warn("shim: " + Shim.callerName(), args);
        }

        static shimmedAsyncFunction<T>(...args): IAsyncOperation<T> {
            var callerName = Shim.callerName();
            return new IAsyncOperation<T>((resolve, reject) => {
                console.warn("async shim: " + callerName, args);
                resolve();
            });
        }

        static failShimmedAsyncFunction<T>(...args): IAsyncOperation<T> {
            var callerName = Shim.callerName();
            return new IAsyncOperation<T>((resolve, reject) => {
                console.warn("async shim: " + callerName, args);
                reject();
            });
        }
    }
}