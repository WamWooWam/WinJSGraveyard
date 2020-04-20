﻿Jx.delayDefine(Mail,"FolderFlyout",function(){"use strict";function f(n,i){t.call(this,n,i);var u=n.view,f=u.platform.mailManager,r=this._stuck=new Mail.CollectionCounter(new Mail.ScheduledQueryCollection(f.getPermanentlyFailedMessageCollection,f,[u.account.objectId],Mail.Priority.updateView,Jx.scheduler,"stuck-in-outbox"));r.unlock();this._disposer=new Mail.Disposer(r,new Mail.EventHook(r,"collectionchanged",this._onCollectionChanged,this))}function r(n){this.initComponent();this._title=n}function e(n,t){this._items=t;this._header=n;var i=this._array=new Mail.ArrayCollection(t.count?[n]:[]);i.unlock();Mail.CollectionWrapper.call(this,new Mail.ConcatenatedCollection([i,t]))}var o=Microsoft.WindowsLive.Platform,s=Mail.ViewItems,u=Mail.ViewFilters,t,n,h=".folderFlyout.wideNav .section.Pinned *",i=Mail.FolderFlyout=function(n,t,i){this.initComponent();this._switcher=n;this._account=t;this._hooks=null;this._views=null;this._categories=null;this._pinned=null;var r=this._list=new Jx.List({requestAnimation:this.requestAnimation.bind(this,null),jobSet:i}),u=this._ariaFlows=new Mail.AriaFlows(r,h);this.append(u);this._element=null};Jx.augment(i,Jx.Component);i.prototype.getUI=function(t){var e=this._account,i=this._views=e.queryViews(o.MailViewScenario.allFolders,"folderFlyout"),r=u.filterByType(i,u.folders),s=this._categories=u.filterByType(i,u.categories),h=this._pinned=u.filterPinned(r),f;this._list.setSource(new Mail.ArrayCollection([new n(Mail.ViewHierarchy.wrapFlat(s),"Categories",this),new n(Mail.ViewHierarchy.wrapFlat(h),"Pinned",this),new n(Mail.TreeFlattener.create(r),"All",this)]));f=this._switcher.isWide?"wideNav":"";t.html="<div id='"+this._id+"' class='folderFlyout viewFlyout "+f+"' role='listbox'><div class='inhibitTouchHover'><\/div>"+Jx.getUI(this._ariaFlows).html+"<\/div>"};i.prototype.onActivateUI=function(){var n=this._element=document.getElementById(this._id);this._hooks=new Mail.Disposer(this._views,this._categories,this._pinned,new Jx.KeyboardNavigation(n,"vertical",this,h),new Jx.PressEffect(n,".folder, .content",["className"],".inhibitTouchHover"),new Mail.EventHook(this._switcher,"widthChanged",this._onSwitcherWidthChange,this))};i.prototype.onDeactivateUI=function(){Jx.dispose(this._hooks)};i.prototype.beforeShow=Jx.fnEmpty;i.prototype.afterHide=Jx.fnEmpty;i.prototype.selectView=function(n){this._switcher.selectView(n)};i.prototype.waitForAnimation=function(){return this._list.waitForAnimation()};i.prototype.requestAnimation=function(n){return this.waitForAnimation().then(function(){return this._list.getAffectedElements(n)}.bind(this))};i.prototype._onSwitcherWidthChange=function(){Jx.setClass(this._element,"wideNav",this._switcher.isWide);this.fire("contentUpdated")};n=function(n,i,u){this.initComponent();this._flyout=u;this._title=i;this._collection=n;var s=this._list=new Jx.List({factory:function(n){return n.objectId==="header"?new r("mailFolderFlyout"+i):n.view.type===o.MailViewType.outbox?new f(n,u):new t(n,u)},requestAnimation:this._requestAnimation.bind(this)});this.appendChild(s);s.setSource(new e({objectId:"header"},n));this._hooks=null;this._element=null;this._animation=null};Jx.augment(n,Jx.Component);n.prototype.getUI=function(n){n.html="<div id='"+this._id+"' class='section "+this._title+"'>"+Jx.getUI(this._list).html+"<\/div>"};n.prototype.onActivateUI=function(){var n=this._element=document.getElementById(this._id);this._hooks=new Mail.Disposer(new Jx.Clicker(n,this._onClick,this),new Mail.EventHook(n,"contextmenu",this._onClick,this),new Mail.EventHook(n,"MSHoldVisual",function(n){n.preventDefault()}),new Mail.EventHook(n,"maildrop",this._onDrop,this),new Mail.Disposable(Jx.observeMutation(n,{attributes:true,subtree:true,attributeFilter:["aria-checked"]},this._onAttributeChange,this),"disconnect"));this._collection.unlock()};n.prototype.onDeactivateUI=function(){Jx.dispose(this._hooks)};n.prototype.waitForAnimation=function(){return this._list.waitForAnimation()};n.prototype._requestAnimation=function(){return this._flyout.requestAnimation(this)};n.prototype._onClick=function(n){var t=this._list.getTarget(n);if(t)t.onClick(n)};n.prototype._onAttributeChange=function(n){n.forEach(function(n){var t=this._list.getTarget(n);if(t)t.onAttributeChange(n)},this)};n.prototype._onDrop=function(n){var t=this._list.getTarget(n);if(t)t.onDrop(n)};n.prototype.shutdownComponent=function(){Jx.dispose(this._collection);Jx.Component.prototype.shutdownComponent.call(this)};t=function(n,t){this.initComponent();this._node=n;this._flyout=t;this._element=null;var i=n.view;this._count=new Mail.BoundElements.ViewCount(i);this._name=new Mail.BoundElements.ViewName(i);this._star=new Mail.BoundElements.ViewPinner(i,"mailPinFolderLabel","mailUnpinFolderLabel");this.append(this._count,this._name,this._star)};Jx.augment(t,Jx.Component);t.prototype.getUI=function(n){var i=this._node,t=i.view,r=this._getError();n.html="<div id='"+this._id+"' class='folder"+(Mail.ViewCapabilities.canMoveTo(t)?" draghoverable'":" inhibitDrop'")+"><div class='content "+(r?"error ":"")+"depth"+i.depth+"' tabIndex='-1' aria-label='"+Jx.escapeHtml(s.getLabel(t,r))+"' title='"+Jx.escapeHtml(t.name)+"' role='option'>"+Jx.getUI(this._name).html+Jx.getUI(this._count).html+"<\/div>"+Jx.getUI(this._star).html+"<\/div>"};t.prototype.updateLabel=function(){var n=this._getElement(),t=this._node.view;Mail.setAttribute(n,"aria-label",s.getLabel(t,this._getError()));Mail.setAttribute(n,"title",t.name)};t.prototype.onClick=function(n){this._star.onClick(n)||this._flyout.selectView(this._node.view)};t.prototype.onAttributeChange=function(n){this._star.onAttributeChange(n)};t.prototype.onDrop=function(n){var t=n.detail;Mail.moveWithConfirmation(t.selection,this._node.view,t.messages)};t.prototype._getElement=function(){return this._element||(this._element=document.querySelector("#"+this._id+" .content"))};t.prototype._getError=function(){return""};Jx.inherit(f,t);f.prototype.shutdownComponent=function(){Jx.dispose(this._disposer);t.prototype.shutdownComponent.call(this)};f.prototype._getError=function(){return this._stuck.count>0?Jx.res.getString("mailAttentionNeeded"):""};f.prototype._onCollectionChanged=function(){Jx.setClass(this._getElement(),"error",this._stuck.count>0);this.updateLabel()};Jx.augment(r,Jx.Component);r.prototype.getUI=function(n){n.html="<div class='header' role='heading'>"+Jx.escapeHtml(Jx.res.getString(this._title))+"<\/div>"};r.prototype.onClick=Jx.fnEmpty;r.prototype.onAttributeChange=Jx.fnEmpty;r.prototype.onDrop=Jx.fnEmpty;Jx.inherit(e,Mail.CollectionWrapper);e.prototype.item=function(n){return this._collection.item(n)};e.prototype._onCollectionChanged=function(n){this._raiseChange({eType:n.eType,objectId:n.objectId,index:n.index,previousIndex:n.previousIndex});var i=this._items,t=this._array;t.count===1&&i.count===0?t.removeItem(0):t.count===0&&i.count>0&&t.insertItem(this._header,0)}})