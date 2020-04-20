

(function () {
    "use strict";

    importScripts("/microsoft.skypeapp/js/backgroundTasks/backgroundTaskBase.js");

    var refreshChannelUri = WinJS.Class.derive(Skype.BackgroundTasks.BackgroundTaskBase, function constructor(webUIBackgroundTaskInstance) {
        Skype.BackgroundTasks.BackgroundTaskBase.call(this, "refreshChannelUri", webUIBackgroundTaskInstance);
    }, {
        _executeAsync: function () {
            return new WinJS.Promise(function (completedHandler, errorHandler) {
                
                if (!lib) {
                    log("library is not available");
                    completedHandler();
                    return;
                }

                if (lib.getLibStatus() !== LibWrap.WrSkyLib.libstatus_RUNNING) {
                    log("library is not running");
                    completedHandler();
                    return;
                }

                
                importScripts("/microsoft.skypeapp/js/globalextensions.js");
                
                importScripts("/microsoft.skypeapp/js/loginManager.js");

                if (!Skype.LoginManager.isValidCurrentUser()) {
                    completedHandler();
                    return;
                }

                log("library is available");

                
                importScripts("/microsoft.skypeapp/js/version.js");
                
				importScripts("/microsoft.skypeapp/js/notifications/wnsChannelRegistration.js");
                importScripts("/microsoft.skypeapp/js/notifications/notifications.js");

                Skype.Notifications.createChannel().then(completedHandler, errorHandler);
            });
        },

        _fakeCloseTask: function () {
            
            
            
            close();
        }
    });

    WinJS.Namespace.define("Skype.BackgroundTasks", {
        RefreshChannelUri: refreshChannelUri
    });

})();

Skype.BackgroundTasks.BackgroundTaskBase.run(Skype.BackgroundTasks.RefreshChannelUri);