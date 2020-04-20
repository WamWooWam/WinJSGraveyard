﻿Jx.delayDefine(Mail,"FontSettings",function(){"use strict";function t(n){Jx.mark("FontSettings."+n+",StartTA,FontSettings")}function i(n){Jx.mark("FontSettings."+n+",StopTA,FontSettings")}Mail.FontSettings=function(n){this._host=n;this._composeSettings=null;this._disposer=new Mail.Disposer};var n=Mail.FontSettings.prototype;n.dispose=function(){this._disposer.dispose();this._disposer=null;this._composeSettings=null;this._host=null};n.getHTML=function(){return'<div id="mailSettingsPaneFontSelectorDiv"><div id="mailSettingsPaneFontSelectorHeader" class="typeSizeNormal">'+Jx.res.getString("mailSettingsPaneDefaultFontLabel")+'<\/div><div id="mailSettingsPanePreviewTextDiv"><span class="previewText authoringFontFamilyClass" id="mailSettingsPanePreviewText">'+Jx.res.getString("mailSettingsPanePreviewText")+'<\/span><\/div><div id="mailSettingsFontNameControl"><\/div><div id="mailSettingsFontSizeControl"><\/div><div id="mailSettingsFontColorControl"><\/div><div id="mailSettingsFocusFix" tabindex="-1"><\/div><\/div>'};n.populateControls=function(){t("populateControls");this._initComposeSettings();var n=this._host,f=n.querySelector("#mailSettingsFocusFix"),u=null;f.addEventListener("focus",function(){u.focus()});var r=Mail.Globals.appSettings,e=n.querySelector("#mailSettingsPaneFontSelectorDiv"),o=n.querySelector("#mailSettingsPanePreviewText");this._composeSettings.forEach(function(t){var f=t.config||{},i,s;f.host=n;i=t.control=new t.ctor(f);s=e.querySelector(t.selector);i.initUI(s);u=i;r[t.appSettingsProperty]&&(i.value=r[t.appSettingsProperty]);t.eventHandler=function(n){r[this.appSettingsProperty]!==n.value&&(r[this.appSettingsProperty]=n.value);o.style[this.styleSetting]=n.value};this._disposer.add(new Mail.EventHook(i,"change",t.eventHandler,t))},this);i("populateControls")};n.update=function(){t("update");this._updateFontSettings();this._stylePreviewText();i("update")};n._stylePreviewText=function(){var t=this._host.querySelector("#mailSettingsPanePreviewText"),n=this._composeSettings[0];Boolean(n.control.value)||(n.control.value=t.getComputedStyle().fontFamily.replace(/.Color.Emoji.,\s*/i,"").replace(/,.*/,"").replace(/"/g,""));t.style[n.styleSetting]=n.control.value;n=this._composeSettings[1];Boolean(n.control.value)||(n.control.value=t.getComputedStyle().fontSize);t.style[n.styleSetting]=n.control.value;n=this._composeSettings[2];Boolean(n.control.value)||(n.control.value=t.getComputedStyle().color);t.style[n.styleSetting]=n.control.value};n._updateFontSettings=function(){var n=Mail.Globals.appSettings;this._composeSettings.forEach(function(t){t.control.value=n[t.appSettingsProperty]})};n._initComposeSettings=function(){this._composeSettings=[{className:"fontNameControl",selector:"#mailSettingsFontNameControl",appSettingsProperty:"composeFontFamily",ctor:FontSelector.NameControl,styleSetting:"fontFamily",config:{styleOptions:true}},{className:"fontSizeControl",selector:"#mailSettingsFontSizeControl",appSettingsProperty:"composeFontSize",ctor:FontSelector.SizeControl,styleSetting:"fontSize"},{className:"fontColorControl",selector:"#mailSettingsFontColorControl",appSettingsProperty:"composeFontColor",styleSetting:"color",ctor:FontSelector.ColorControl,config:{itemsTabbable:false,gridLayout:{rows:"56px 56px 56px",columns:"56px 56px 56px 56px 56px"},colors:[{value:"#000000",name:Jx.res.getString("black")},{value:"#375623",name:Jx.res.getString("darkgreen")},{value:"#1F3864",name:Jx.res.getString("darkblue")},{value:"#1E4E79",name:Jx.res.getString("mediumdarkblue")},{value:"#833C0B",name:Jx.res.getString("darkbrown")},{value:"#525252",name:Jx.res.getString("darkgrey")},{value:"#4BA524",name:Jx.res.getString("green")},{value:"#006FC9",name:Jx.res.getString("blue")},{value:"#7232AD",name:Jx.res.getString("purple")},{value:"#BD1398",name:Jx.res.getString("pink")},{value:"#757B80",name:Jx.res.getString("grey")},{value:"#D03A3A",name:Jx.res.getString("red")},{value:"#D05C12",name:Jx.res.getString("orange")},{value:"#E2C501",name:Jx.res.getString("yellow")}]}}]}})