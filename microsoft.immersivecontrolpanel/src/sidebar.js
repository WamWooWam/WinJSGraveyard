(() => {
    var topLevelItems = [
        { title: "PC and devices", page: "/pages/devices.html" },
        { title: "Accounts", page: "/pages/accounts.html" },
        { title: "OneDrive", page: "/pages/onedrive.html" },
        { title: "Search and apps", page: "/pages/apps.html" },
        { title: "Privacy", page: "/pages/privacy.html" },
        { title: "Network", page: "/pages/network.html" },
        { title: "Time and language", page: "/pages/time.html" },
        { title: "Ease of Access", page: "/pages/accessibility.html" },
        {
            title: "Update and recovery",
            subItems: [
                { title: "Windows Update", page: "/pages/windowsupdate.html" },
                { title: "File History", page: "/pages/filehistory.html" },
                { title: "Recovery", page: "/pages/recovery.html" }
            ]
        }
    ];

    let listView = null;
    let sidebar = null;
    let sidebarTitle = null;
    let itemHistory = [];
    let listViewDataList = new WinJS.Binding.List(topLevelItems);
    let topLevel = "/pages/mainview.html";

    function onItemInvoked(e) {
        let item = itemHistory[itemHistory.length - 1][e.detail.itemIndex];
        if (item.subItems) {
            sidebarTitle.innerText = item.title;
            itemHistory.push(item.subItems);

            let first = item.subItems[0];
            listView.itemDataSource = new WinJS.Binding.List(item.subItems).dataSource;
            WinJS.UI.Animation.enterContent(sidebar, null);
            WinJS.Navigation.navigate(first.page);
        }
        else if (item.page) {
            WinJS.Navigation.navigate(item.page);
        }
    }

    function onNavigating(e) {
        // TODO: Handle this properly
        if (e.detail.delta < 0) {
            let delta = Math.abs(e.detail.delta) + 1;
            for (let i = 0; i < delta; i++) {
                itemHistory.pop();
            }
        }

        if (e.detail.location == topLevel) {
            itemHistory.push(topLevelItems);
            listView.itemDataSource = listViewDataList.dataSource;
            WinJS.UI.Animation.enterContent(sidebar, null);
        }
    }

    function onControlPanelInvoked(e) {
        e.preventDefault();

        var dialog = new Windows.UI.Popups.MessageDialog("Not yet implemented");
        dialog.showAsync();
    }

    function init() {
        let button = document.getElementById("control-panel-link");
        button.addEventListener("click", onControlPanelInvoked);

        WinJS.Navigation.addEventListener("navigating", onNavigating);

        sidebar = document.getElementById("sidebar-content");
        listView = document.getElementById("sidebar-list-view").winControl;
        listView.addEventListener("iteminvoked", onItemInvoked);
        listView.addEventListener("contentanimating", function (e) { e.preventDefault() });
        listView.itemDataSource = listViewDataList.dataSource;

        sidebarTitle = document.getElementById("sidebar-title");
        WinJS.UI.Animation.enterContent(sidebar, null);
    }

    WinJS.Namespace.define("ImmersiveControlPanel.Sidebar", {
        init
    });
})();