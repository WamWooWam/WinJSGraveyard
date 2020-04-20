﻿Jx.delayDefine(Mail,["Flyout","FlyoutContent"],function(){"use strict";var n=Mail.Flyout=function(n,t,i){this._content=t;this._options=i;var r=this._host=document.createElement("div");r.className=i.className||"";this._flyout=this._createFlyout(r,i);this._afterHide=null;n.appendChild(r);t.setFlyout(this)},t;n.prototype.dispose=function(){this.hide().then(function(){this._content.setFlyout(null);this._flyout.dispose();this._host.removeNode(true);this._host=null}.bind(this))};n.prototype.show=function(n,t){var r,e;var o=this._host,i=this._flyout,u=this._content,f=this._options;return u.initUI(o),r=function(){this._afterHide=null;f.singleShow&&this.dispose()}.bind(this),this._afterHide=Mail.Promises.waitForEvent(i,"afterhide").then(function(){u.shutdownUI()}).then(r,r),e=Mail.Promises.waitForEvent(i,"aftershow"),i.show(f.anchor,n,t),e};n.prototype.hide=function(){var n=this._afterHide;return n&&(this._afterHide=null,this._flyout.hide()),n||WinJS.Promise.as()};n.prototype.replace=function(t){var r=this._host.parentElement,i=this._options;return this.hide().then(function(){return i.singleShow||this.dispose(),new n(r,t,i).show()}.bind(this))};n.prototype._createFlyout=function(n,t){return n.classList.add("mailFlyout"),new WinJS.UI.Flyout(n,t)};t=Mail.FlyoutContent=function(){this.initComponent();this._flyout=null};Jx.inherit(t,Jx.Component);t.prototype.setFlyout=function(n){this._flyout=n}})