import { Entertainment } from "../../Enums";

export class FeatureEnablement {
    isEnabled(feature: Entertainment.FeatureEnablement.FeatureItem) {
        console.warn("Requested feature enablement for " + Entertainment.FeatureEnablement.FeatureItem[feature]);
        return true;
    }
}