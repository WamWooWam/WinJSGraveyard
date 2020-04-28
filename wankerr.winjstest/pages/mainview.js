
(function () {
    var PageConstructor = WinJS.UI.Pages.define("/pages/mainview.html", {
        // This function is called after the page control contents
        // have been loaded, controls have been activated, and
        // the resulting elements have been parented to the DOM.
        ready: function (element, options) {
            test1(element);
            test2(element);
            test3(element);
            test4(element);
            test5(element);
        },
    });

    WinJS.Namespace.define("ImmersiveControlPanel.Pages", {
        MainView: PageConstructor
    });
})();

function test1(element) {
    let test1 = element.querySelector("#test-1");
    let testObject = {
        a: "ass",
        b: 1,
    };
    try {
        let folder = Windows.Storage.ApplicationData.current.localFolder;
        folder.createFileAsync("test.json")
            .then((file) => {
                return Windows.Storage.FileIO.writeTextAsync(file, JSON.stringify(testObject));
            })
            .then(() => {
                return folder.getFileAsync("test.json");
            })
            .then((file) => {
                return Windows.Storage.FileIO.readTextAsync(file);
            })
            .then((text) => {
                let result = JSON.parse(text);
                if (result.a != testObject.a) {
                    throw "FAIL " + result;
                }
                else {
                    test1.innerText = "PASS! " + text;
                }
            })
            .catch((e) => {
                test1.innerText = "FAIL " + e;
            });
    }
    catch (e) {
        test1.innerText = e;
    }
}


function test2(element) {
    let test2 = element.querySelector("#test-2");
    try {
        Windows.Storage.PathIO.readTextAsync("ms-appx-web:///config.json")
            .then((text) => {
                test2.innerText = "PASS! " + JSON.stringify(JSON.parse(text));
            })
            .catch((e) => {
                test2.innerText = "FAIL " + e;
            });
    }
    catch (e) {
        test2.innerText = e;
    }
}

function test3(element) {
    let test3 = element.querySelector("#test-3");
    try {
        Windows.Storage.PathIO.readTextAsync("ms-appx-web:///doesnt-exist-lol.json")
            .then((text) => {
                test3.innerText = "FAIL " + text;
            })
            .catch((e) => {
                test3.innerText = "PASS! " + e;
            });
    }
    catch (e) {
        test3.innerText = e;
    }
}

function test4(element) {
    let test2 = element.querySelector("#test-4");
    try {
        Windows.Storage.PathIO.readTextAsync("ms-appx:///config.json")
            .then((text) => {
                test2.innerText = "PASS! " + JSON.stringify(JSON.parse(text));
            })
            .catch((e) => {
                test2.innerText = "FAIL " + e;
            });
    }
    catch (e) {
        test2.innerText = e;
    }
}

function test5(element) {
    let test3 = element.querySelector("#test-5");
    try {
        Windows.Storage.PathIO.readTextAsync("ms-appx:///doesnt-exist-lol.json")
            .then((text) => {
                test3.innerText = "FAIL " + text;
            })
            .catch((e) => {
                test3.innerText = "PASS! " + e;
            });
    }
    catch (e) {
        test3.innerText = e;
    }
}