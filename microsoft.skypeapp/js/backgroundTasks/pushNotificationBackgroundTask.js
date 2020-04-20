

(function () {
    "use strict";

    importScripts("/microsoft.skypeapp/js/backgroundTasks/backgroundTaskBase.js");

    var pushNotification = WinJS.Class.derive(Skype.BackgroundTasks.BackgroundTaskBase, function constructor(webUIBackgroundTaskInstance, bgEventsDispatcher) {
        Skype.BackgroundTasks.BackgroundTaskBase.call(this, "pushNotification", webUIBackgroundTaskInstance);
        this._eventsDispatcher = bgEventsDispatcher;
    }, {
        _executeAsync: function () {
            importScripts("/microsoft.skypeapp/js/globalextensions.js");
            importScripts("/microsoft.skypeapp/js/globalization.js");
            importScripts("/microsoft.skypeapp/js/loginManager.js");
            
            if (!Skype.LoginManager.isValidCurrentUser()) {
                return WinJS.Promise.as();
            }

            
            importScripts("/microsoft.skypeapp/js/notifications/parsers/parserBase.js");
            importScripts("/microsoft.skypeapp/js/notifications/parsers/msnParserBase.js");
            importScripts("/microsoft.skypeapp/js/notifications/parsers/msnCntParser.js");
            importScripts("/microsoft.skypeapp/js/notifications/parsers/msnSdgParser.js");
            importScripts("/microsoft.skypeapp/js/notifications/parsers/msnOutParser.js");
            importScripts("/microsoft.skypeapp/js/notifications/parsers/callNotificationParser.js");
            importScripts("/microsoft.skypeapp/js/notifications/parsers/abchNotificationParser.js");
            
            importScripts("/microsoft.skypeapp/js/notifications/raw.js");
            importScripts("/microsoft.skypeapp/js/notifications/tiles.js");

            var notificationContent = this._backgroundTaskInstance.triggerDetails.content;
            log("RAW notification: " + notificationContent.split('\n')[0]);
            var notification = Skype.Notifications.RAW.parse(notificationContent);

            var ParserBase = Skype.Notifications.RAW.Parsers.ParserBase;
            switch (notification.type) {
                case ParserBase.MessageType.PNH:
                    log("Skype.Notifications.RAW.Type.PNH notification");

                    importScripts("/microsoft.skypeapp/js/disposable.js");
                    importScripts("/microsoft.skypeapp/js/notifications/toasts/callToast.js");
                    importScripts("/microsoft.skypeapp/js/notifications/pushNotificationBase.js");
                    importScripts("/microsoft.skypeapp/js/notifications/callPushNotification.js");

                    var callPushNotification = new Skype.Notifications.CallPushNotification(notification.content, this._eventsDispatcher);
                    return callPushNotification.handleAsync();

                case ParserBase.MessageType.MSN:
                    log("Skype.Notifications.RAW.Type.MSN notification");

                    importScripts("/microsoft.skypeapp/js/application/backgroundState.js");
                    importScripts("/microsoft.skypeapp/js/notifications/toasts.js");
                    importScripts("/microsoft.skypeapp/js/notifications/imCache.js");
                    importScripts("/microsoft.skypeapp/js/notifications/pushNotificationBase.js");
                    importScripts("/microsoft.skypeapp/js/notifications/messagePushNotification.js");

                    var messagePushNotification = new Skype.Notifications.MessagePushNotification(notification.content, notificationContent);
                    return messagePushNotification.handleAsync();

                case ParserBase.MessageType.ABCH:
                    log("Skype.Notifications.RAW.Type.ABCH notification");
                    
                    importScripts("/microsoft.skypeapp/js/notifications/abchNotificationCache.js");

                    
                    var abchNotificationCache = new Skype.Notifications.AbchNotificationCache(Windows.Storage.ApplicationData.current.localSettings);
                    abchNotificationCache.save(notificationContent);
                    return WinJS.Promise.as();

                default:
                    return WinJS.Promise.wrapError("Invalid notification type: " + notification.type);
            }
        },

        _fakeCloseTask: function () {
            
            
            
            close();
        }
    });

    WinJS.Namespace.define("Skype.BackgroundTasks", {
        PushNotification: pushNotification
    });

})();

Skype.BackgroundTasks.BackgroundTaskBase.run(Skype.BackgroundTasks.PushNotification, Skype.BackgroundTasks.BackgroundTaskBase.ExecutionPolicy.executeAlways);