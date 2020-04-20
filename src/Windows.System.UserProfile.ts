/// <ref src="Windows.Globalisation.ts"/>
import { Globalization } from "./Windows.Globalization"

export namespace System {
    export namespace UserProfile {
        export class GlobalizationPreferences {
            static weekStartsOn = Globalization.DayOfWeek.monday;
        }
    }

    export enum ProcessorArchitecture {
        arm
    }
}