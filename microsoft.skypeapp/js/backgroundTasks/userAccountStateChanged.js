

(function () {
    "use strict";

    importScripts("/microsoft.skypeapp/js/backgroundTasks/backgroundTaskBase.js");

    var userAccountStateChanged = WinJS.Class.derive(Skype.BackgroundTasks.BackgroundTaskBase, function constructor(webUIBackgroundTaskInstance) {
        Skype.BackgroundTasks.BackgroundTaskBase.call(this, "userAccountStateChanged", webUIBackgroundTaskInstance);
    }, {
        _executeAsync: function () {
            return new WinJS.Promise(function (completed, error) {
                importScripts("/microsoft.skypeapp/js/globalextensions.js");
                importScripts("/microsoft.skypeapp/js/loginManager.js");
                if (Skype.LoginManager.isValidCurrentUser()) {
                    
                    completed();
                    return;
                }

                
                if (lib) {
                    
                    Skype.LoginManager.invalidateCurrentUser();
                    completed();
                } else {
                    
                    
					importScripts("/microsoft.skypeapp/js/notifications/wnsChannelRegistration.js");
                    importScripts("/microsoft.skypeapp/js/notifications/notifications.js");
                    Skype.Notifications.closeChannelAsync().then(completed, error);
                }
            });
        },
        
        _fakeCloseTask: function() {
            
            
            
            close();
        }
    });

    WinJS.Namespace.define("Skype.BackgroundTasks", {
        UserAccountStateChanged: userAccountStateChanged
    });
})();

Skype.BackgroundTasks.BackgroundTaskBase.run(Skype.BackgroundTasks.UserAccountStateChanged);