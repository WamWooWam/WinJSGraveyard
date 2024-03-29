﻿(function() {
    function i(n, t) {
        return Array.prototype.map.call(n, function(n) {
            var i = n.$includeSrc;
            return i === undefined && (n.$includeSrc = i = (n[t] || "").toLowerCase()),
                i
        })
    }

    function n(n) {
        msWriteProfilerMark("Include." + n + ",StartTA,People,Include")
    }

    function t(n) {
        msWriteProfilerMark("Include." + n + ",StopTA,People,Include")
    }
    window.Include = {
        _elHead: null
    };
    Include._replacements = {
        modernRoot: "",
        modernShared: "$(modernRoot)/shared",
        winJS: "/winui",
        platformTest: "$(modernRoot)",
        peopleRoot: "$(modernRoot)/ModernPeople",
        peopleShared: "$(peopleRoot)/shared",
        socialRoot: "$(peopleRoot)/Social",
        peopleResources: "$(modernRoot)",
        stringResources: "$(peopleResources)/ModernPeople",
        stringExtension: "resw",
        imageResources: "/microsoft.windowscommunicationsapps/ModernPeople/images",
        cssResources: "$(peopleResources)/ModernPeople/resources/css/en",
        sharedResources: "$(peopleResources)/Resources/ModernShared",
        localizedSharedResources: "$(peopleResources)/ModernShared/resources/en",
        jxCore: "$(modernRoot)/Jx",
        sasRoot: "$(modernRoot)",
        messageBarRoot: "$(modernRoot)/MessageBar",
        messageBarResources: "$(modernRoot)/Resources/MessageBar",
        canvasRoot: "$(modernRoot)/ModernCanvas",
        shareAnythingRoot: "$(modernRoot)/ModernShareAnything",
        shareAnythingResources: "$(modernRoot)/Resources/ModernShareAnything"
    };
    Include._init = function() {};
    Include._createStyleSheet = function(n) {
        var t = document.createElement("link");
        t.rel = "stylesheet";
        t.href = n;
        document.head.appendChild(t)
    };
    Include._replacementsRegex = /\$\([^\)]*\)/g;
    Include.replacePaths = function(n, t) {
        var r, i, u;
        for (t = t || this._replacements;
            (r = n.match(this._replacementsRegex)) !== null;)
            for (i = 0,
                u = r.length; i < u; i++)
                n = n.replace(r[i], t[r[i].substring(2, r[i].length - 1)]);
        return n
    };
    Include._isCssFileName = function(n) {
        return n.substring(n.length - 4).toLowerCase() === ".css"
    };
    Include._elLink = document.createElement("a");
    Include.absolutePath = function(n) {
        return this._elLink.href = "." + n,
            this._elLink.href
    };
    Include._addingScriptTag = false;
    Include._fileScopeInitializer = null;
    Include.initializeFileScope = function(n) {
        this._addingScriptTag ? this._fileScopeInitializer = n : n()
    };
    Include._elHead = document.getElementsByTagName("head")[0];
    Include._elScripts = document.scripts;
    Include.$include = function() {
        var s, f, h, e, l, r, u, o, c;
        for (n("$include"),
            s = arguments,
            e = 0,
            l = s.length; e < l; e++)
            r = this.absolutePath(this.replacePaths(s[e])).toLowerCase(),
            u = r.substr(r.lastIndexOf("/") + 1),
            this._isCssFileName(r) ? (h = h || i(document.getElementsByTagName("link"), "href"),
                h.indexOf(r) === -1 && (n("$include:addStyleSheet=" + u),
                    this._createStyleSheet(r),
                    t("$include:addStyleSheet=" + u))) : (f = f || i(this._elScripts, "src"),
                f.indexOf(r) === -1 && (n("$include:addScriptTag=" + u),
                    o = document.createElement("script"),
                    o.type = "text/javascript",
                    o.src = r,
                    this._addingScriptTag = true,
                    this._elHead.appendChild(o),
                    this._addingScriptTag = false,
                    f.push(r),
                    t("$include:addScriptTag=" + u),
                    c = this._fileScopeInitializer,
                    c !== null && (this._fileScopeInitializer = null,
                        n("$include:runScript=" + u),
                        c(),
                        t("$include:runScript=" + u))));
        t("$include")
    };
    Include.includeOneFile = function(n) {
        try {
            Include.$include(n)
        } finally {}
    };
    Include._init()
})();
var $include = function() {
    return Include.$include.apply(Include, arguments)
}