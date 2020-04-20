

(function () {
    "use strict";

    importScripts("/microsoft.skypeapp/js/backgroundTasks/backgroundTaskBase.js");

    var keepAlive = WinJS.Class.derive(Skype.BackgroundTasks.BackgroundTaskBase, function constructor(webUIBackgroundTaskInstance) {
        Skype.BackgroundTasks.BackgroundTaskBase.call(this, "keepAlive", webUIBackgroundTaskInstance);
    }, {
        _TIME_TO_EXECUTE_KEEP_ALIVE_LIB_TASKS: 4000, 

        _executeAsync: function () {
            return new WinJS.Promise(function(completedHandler, errorHandler) {
                importScripts("/microsoft.skypeapp/js/globalextensions.js");
                importScripts("/microsoft.skypeapp/js/loginManager.js");
                if (!Skype.LoginManager.isValidCurrentUser()) {
                    completedHandler();
                    return;
                }

                if (lib) {
                    log("library is available");
                    lib.executeBackgroundTask();
                    WinJS.Promise.timeout(this._TIME_TO_EXECUTE_KEEP_ALIVE_LIB_TASKS).then(completedHandler, errorHandler);
                } else {
                    log("library is not available");
                    
                    importScripts("/microsoft.skypeapp/js/notifications/parsers/parserBase.js");
                    importScripts("/microsoft.skypeapp/js/notifications/parsers/msnParserBase.js");
                    importScripts("/microsoft.skypeapp/js/notifications/parsers/msnCntParser.js");
                    importScripts("/microsoft.skypeapp/js/notifications/parsers/msnSdgParser.js");
                    importScripts("/microsoft.skypeapp/js/notifications/parsers/msnOutParser.js");
                    importScripts("/microsoft.skypeapp/js/notifications/parsers/callNotificationParser.js");
                    importScripts("/microsoft.skypeapp/js/notifications/parsers/abchNotificationParser.js");
                    
                    
                    importScripts("/microsoft.skypeapp/js/periodicWakeup.js");
                    
                    importScripts("/microsoft.skypeapp/js/notifications/raw.js");

                    Skype.PeriodicWakeup.periodicWakeupAsync().then(completedHandler, errorHandler);
                }
            }.bind(this));
        },

        _fakeCloseTask: function () {
            
            
            
            close();
        }
    });

    WinJS.Namespace.define("Skype.BackgroundTasks", {
        KeepAlive: keepAlive
    });
})();

Skype.BackgroundTasks.BackgroundTaskBase.run(Skype.BackgroundTasks.KeepAlive);