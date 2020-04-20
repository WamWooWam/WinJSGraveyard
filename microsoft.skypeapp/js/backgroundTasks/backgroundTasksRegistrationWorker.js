






(function () {
    "use strict";

    importScripts("/winjs/js/base.js", "/microsoft.skypeapp/js/globalextensions.js", "/microsoft.skypeapp/js/log.js", "/microsoft.skypeapp/js/backgroundTasks/backgroundTasksRegistrator.js");

    self.onmessage = function (e) {
        if (e.data === "register") {
            log("register tasks");
            Skype.BackgroundTasks.Registrator.registerTasks();
        } else if (e.data === "unregister") {
            log("unregister tasks");
            Skype.BackgroundTasks.Registrator.unregisterTasks();
        }
    };
})();
