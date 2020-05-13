
export namespace Logging {
    export class DataPoint {

        level: any;
        authMethod: any;

        static properties: any;

        values: Array<any>;

        constructor() {
            this.values = [];
        }

        write() {
            console.error('shimmed function DataPoint.write', this.values)
        }

        appendTarget(value) {
            this.values.push(value);
        }

        appendGroupBegin(value) {
            this.values.push(value);
        }

        appendGroupEnd() {
            console.error('shimmed function DataPoint.appendGroupEnd')
        }

        appendArea(value) {
            this.values.push(value);
        }

        appendUIPath(value) {
            this.values.push(value);
        }

        appendComponent(value) {
            this.values.push(value);
        }

        appendEventName(value) {
            this.values.push(value);
        }

        appendParameter(name, value) {
            this.values.push({}[name] = value);
        }

        appendDestination(listener) {
            console.error('shimmed function DataPoint.appendDestination')
        }

    }
    export enum LoggingLevel {
        error,
        shipAssert,
        assert,
        telemetryClick,
        telemetryImpression,
        telemetry,
        exception,
        warning,
        info,
        bugHunting,
    }
    export enum TelemetryAuthMethod {
        dontCare,
        unauthenticated,
    }
    export enum TelemetryListener {
        etw,
        cosmos,
        mediaUsage,
        keystone,
    }
}