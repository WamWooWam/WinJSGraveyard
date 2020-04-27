
(function () {
    var PageConstructor = WinJS.UI.Pages.define("/pages/mainview.html", {
        // This function is called after the page control contents
        // have been loaded, controls have been activated, and
        // the resulting elements have been parented to the DOM.
        ready: function (element, options) {
            let pass = element.querySelector("#pass-fail");
            let testObject = {
                a: "ass",
                b: 1,
            };
            try {
                let folder = Windows.Storage.ApplicationData.current.localFolder;
                folder.createFileAsync("test.json")
                    .then((file) => {
                        return Windows.Storage.FileIO.writeTextAsync(file, JSON.stringify(testObject))
                    })
                    .then(() => {
                        return folder.getFileAsync("test.json")
                    })
                    .then((file) => {
                        return Windows.Storage.FileIO.readTextAsync(file);
                    })
                    .then((text) => {
                        let result = JSON.parse(text);
                        if (result.a != testObject.a) {
                            throw "FAIL"
                        }
                        else{
                            pass.innerText = text;
                        }
                    })
                    .catch((e) => {
                        pass.innerText = e;
                    })
            }
            catch (e) {
                pass.innerText = e;
            }
        },
    });

    WinJS.Namespace.define("ImmersiveControlPanel.Pages", {
        MainView: PageConstructor
    });
})();