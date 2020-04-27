(() => {   

    let nav = WinJS.Navigation;
    let renderHost = null;

    function init() {
        return new WinJS.Promise((complete) => {
            nav.history.current.initialPlaceholder = true;
            nav.navigate(nav.location || Application.navigator.home, nav.state)

            complete();
        });       
    }

    WinJS.Namespace.define("TestApp.Application", {
        init
    });
})();