﻿Jx.delayDefine(Mail,"SearchScopeSwitcher",function(){"use strict";function e(){return r||(r=Jx.escapeHtml(Jx.res.getString("mailMessageListSearchComboDropdownAriaLabel"))),r}function t(n,t){this._view=t;this._id=n;this._description=Jx.res.loadCompoundString("mailMessageListSearchComboText",this.name)}function i(n,t){this._account=n;this._id="mailUpsellSearchScope";this._label=f("mailMessageListSearchComboLabelAllFolders");this._name=f("mailMessageListSearchComboDropdownAllFolders");this._description=u.allPinnedPeople===t.type||u.person===t.type?Jx.res.loadCompoundString("mailMessageListSearchAllAccount",this._account.name):Jx.res.loadCompoundString("mailMessageListSearchComboText",this._label)}function f(n){return Jx.escapeHtml(Jx.res.getString(n))}var u=Microsoft.WindowsLive.Platform.MailViewType,n,r;Mail.SearchScopeSwitcher=function(n,r){var s=n.account,o=n.view,c=new t("mailDefaultSearchScope",o),f=null,h=[c];s.mailResource.canServerSearchAllFolders?f=new i(s,o):o.type!==u.inbox&&(f=new t("mailUpsellSearchScope",s.inboxView));f&&h.push(f);this._defaultScope=this._currentScope=c;this._upsellScope=f;this._scopes=h;this._comboBox=new Mail.ComboBox(r,h.map(function(n,t){return n.toMenuItem(t)}),0,{getDropdownAriaLabel:e},"mailMessageListSearchComboText");this._disposer=new Mail.Disposer(new Mail.EventHook(o,"changed",this._onViewChanged,this),this._comboBox,new Mail.EventHook(this._comboBox,"changed",this._onScopeChanged,this))};Jx.augment(Mail.SearchScopeSwitcher,Jx.Events);n=Mail.SearchScopeSwitcher.prototype;r=null;n._onViewChanged=function(n){if(Mail.Validators.hasPropertyChanged(n,"name")){var t=this._defaultScope;this._comboBox.updateItem(0,t.toMenuItem(0))}};n._onScopeChanged=function(){var n=this._scopes[this._comboBox.value];this._currentScope=n;this.raiseEvent("changed",n)};n.dispose=function(){Jx.dispose(this._disposer)};n.canUpsell=function(){return this._upsellScope&&this._upsellScope!==this._currentScope};n.rescopeToUpsell=function(){this.canUpsell()&&this._comboBox.updateNewValue(1,true)};n.rescopeToCurrentView=function(){this._currentScope!==this._defaultScope&&this._comboBox.updateNewValue(0,true)};n.hasFocus=function(){return this._comboBox.hasFocus()};Object.defineProperty(n,"current",{get:function(){return this._currentScope},enumerable:true});Object.defineProperty(n,"upsell",{get:function(){return this._upsellScope},enumerable:true});Object.defineProperty(n,"canServerSearch",{get:function(){return this._currentScope.canServerSearch},enumerable:true});t.prototype.search=function(n,t,i){return this._view.search(n,t,i)};t.prototype.toMenuItem=function(n){return{value:n,text:this.name,label:this.label,id:this._id}};Object.defineProperty(t.prototype,"name",{get:function(){return this._view.name||""},enumerable:true});Object.defineProperty(t.prototype,"label",{get:function(){return this.name},enumerable:true});Object.defineProperty(t.prototype,"canServerSearch",{get:function(){return this._view.canServerSearch},enumerable:true});Object.defineProperty(t.prototype,"description",{get:function(){return this._description},enumerable:true});Object.defineProperty(t.prototype,"isSearchingAllViews",{get:function(){return false},enumerable:true});Jx.inherit(i,t);i.prototype.search=function(n,t,i){return this._account.search(n,t,i)};Object.defineProperty(i.prototype,"name",{get:function(){return this._name},enumerable:true});Object.defineProperty(i.prototype,"label",{get:function(){return this._label},enumerable:true});Object.defineProperty(i.prototype,"description",{get:function(){return this._description},enumerable:true});Object.defineProperty(i.prototype,"canServerSearch",{get:function(){return true},enumerable:true});Object.defineProperty(i.prototype,"isSearchingAllViews",{get:function(){return true},enumerable:true})})