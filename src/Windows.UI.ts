/// <ref src="Windows.Foundation.ts"/>
import { Foundation } from "./Windows.Foundation"

export namespace UI {
    export namespace ApplicationSettings {
        export class SettingsPane extends Foundation.EventTarget {
            public static getForCurrentView() {
                return new SettingsPane();
            }

            show() {
                console.log("Windows.UI.ApplicationSettings.SettingsPane#show");
            }
        }
    }

    export namespace Input {
        export class EdgeGesture extends Foundation.EventTarget {
            public static getForCurrentView() {
                return new Proxy(new EdgeGesture(), new Foundation.ShimProxyHandler);
            }
        }
    }

    export namespace Core {
        export interface IPropertyAnimation {
            duration: number;
        }

        export namespace AnimationMetrics {
            export enum AnimationEffect {
                expand,
                collapse,
                reposition,
                fadeIn,
                fadeOut,
                addToList,
                deleteFromList,
                addToGrid,
                deleteFromGrid,
                addToSearchGrid,
                deleteFromSearchGrid,
                addToSearchList,
                deleteFromSearchList,
                showEdgeUI,
                showPanel,
                hideEdgeUI,
                hidePanel,
                showPopup,
                hidePopup,
                pointerDown,
                pointerUp,
                dragSourceStart,
                dragSourceEnd,
                transitionContent,
                reveal,
                hide,
                dragBetweenEnter,
                dragBetweenLeave,
                swipeSelect,
                swipeDeselect,
                swipeReveal,
                enterPage,
                transitionPage,
                crossFade,
                peek,
                updateBadge,
            }
            export enum AnimationEffectTarget {
                primary,
                added,
                affected,
                background,
                content,
                deleted,
                deselected,
                dragSource,
                hidden,
                incoming,
                outgoing,
                outline,
                remaining,
                revealed,
                rowIn,
                rowOut,
                selected,
                selection,
                shown,
                tapped,
            }
            export enum PropertyAnimationType {
                scale,
                translation,
                opacity,
            }
            export class AnimationDescription {
                constructor(effect: AnimationEffect, target: AnimationEffectTarget) {

                }

                get animations(): Array<IPropertyAnimation> {
                    return [{ duration: 1000 }]; // idfk
                }
            }
        }
    }

    export namespace ViewManagement {
        export class ApplicationView extends Foundation.EventTarget {
            public static getForCurrentView() {
                return new Proxy(new ApplicationView(), new Foundation.ShimProxyHandler);
            }

            public get id(): number {
                return 0;
            }

            public get title(): string {
                return "title";
            }

            public set title(value: string) {

            }
        }

        export enum ApplicationViewBoundsMode {
            useVisible,
            useCoreWindow,
        }
        export enum ApplicationViewMode {
            default,
            compactOverlay,
            spanning,
        }
        export enum ApplicationViewOrientation {
            landscape,
            portrait,
        }
        export enum ApplicationViewState {
            fullScreenLandscape,
            filled,
            snapped,
            fullScreenPortrait,
        }
        export enum ApplicationViewSwitchingOptions {
            default,
            skipAnimation,
            consolidateViews,
        }
        export enum ApplicationViewWindowingMode {
            auto,
            preferredLaunchViewSize,
            fullScreen,
            compactOverlay,
            maximized,
        }
        export enum HandPreference {
            leftHanded,
            rightHanded,
        }
        export enum UserInteractionMode {
            mouse,
            touch,
        }
        export enum ViewSizePreference {
            default,
            useLess,
            useHalf,
            useMore,
            useMinimum,
            useNone,
            custom,
        }

        export class InputPane extends Foundation.EventTarget {
            public static getForCurrentView() {
                return new Proxy(new InputPane(), new Foundation.ShimProxyHandler);
            }

            get occludedRect(): Foundation.Rect {
                return { x: 0, y: 0, width: 0, height: 0 };
            }
        }

        export class UISettings {
            messageDuration: number = 1;
            handPreference: HandPreference = HandPreference.rightHanded;
            animationsEnabled: Boolean = true;
            mouseHoverTime: number = 2000;
        }
    }

    export namespace Popups {
        export class MessageDialog {

        }
        export class UICommand {
            
        }
    }

    export namespace Notifications {
        export class ToastNotificationManager {
            private static _manager: ToastNotificationManager;

            static getDefault(): ToastNotificationManager {
                return (ToastNotificationManager._manager ?? (ToastNotificationManager._manager = new ToastNotificationManager()));
            }

            createToastNotifier(pack: string) {
                return new ToastNotifier();
            }

            getTemplateContent() {

            }
        }

        export class ToastNotifier  {
            show(xml: any) { // todo: xml

            }
        }

        export class ToastNotification {

        }
    }
}