﻿Jx.delayDefine(Mail,"AccountItem",function(){"use strict";var t=Microsoft.WindowsLive.Platform,n;Mail.AccountItem=function(n,i){Mail.log("AccountListItem_Ctor",Mail.LogEvent.start);this.initComponent();this._account=n;this._resource=n.getResourceByType(t.ResourceType.mail);this._errorHandler=Mail.AccountSettings.createErrorHandler(this._account,this._resource);this._unseenInboxCounter=new Mail.CollectionCounter(new Mail.ScheduledQueryCollection(function(){return Mail.AccountItem._getUnseenCollection(n,t.MailViewType.inbox)},this,[],Mail.Priority.queryCount,i,"unseenInbox:"+this.displayName));this._unseenInboxCounter.unlock();this._unseenFavCounter=new Mail.CollectionCounter(new Mail.ScheduledQueryCollection(function(){return Mail.AccountItem._getUnseenCollection(n,t.MailViewType.allPinnedPeople)},this,[],Mail.Priority.queryCount,i,"unseenFavorite:"+this.displayName));this._unseenFavCounter.unlock();this._hasOof=false;this._oofIndicator=new Mail.OofIndicatorSwitcher(this._updateOof.bind(this,true),this._updateOof.bind(this,false),false);this._oofIndicator.setAccount(n);this._disposables=new Mail.Disposer(new Mail.EventHook(this._account,"changed",this._onAccountChanged,this),new Mail.EventHook(this._unseenInboxCounter,"collectionchanged",this._onUnseenInboxCollectionChanged,this),this._unseenInboxCounter,new Mail.EventHook(this._unseenFavCounter,"collectionchanged",this._onUnseenFavCollectionChanged,this),this._unseenFavCounter,this._oofIndicator);this._resource&&this._disposables.add(new Mail.EventHook(this._resource,"changed",this._onAccountChanged,this));Mail.log("AccountListItem_Ctor",Mail.LogEvent.stop)};Jx.augment(Mail.AccountItem,Jx.Component);Jx.augment(Mail.AccountItem,Jx.Events);n=Mail.AccountItem.prototype;n.dispose=function(){Jx.dispose(this._disposables)};Mail.AccountItem._getUnseenCollection=function(n,i){var r=Mail.Globals.platform.mailManager.ensureMailView(i,n.objectId,"");return r?r.getMessages(t.FilterCriteria.unseen):new Mail.ArrayCollection([])};Object.defineProperty(n,"platformAccount",{get:function(){return this._account}});Object.defineProperty(n,"resource",{get:function(){return this._resource}});Object.defineProperty(n,"objectId",{get:function(){return this._account.objectId}});Object.defineProperty(n,"displayName",{get:function(){return this._account.displayName}});Object.defineProperty(n,"hasError",{get:function(){return this._errorHandler.hasError}});Object.defineProperty(n,"errorText",{get:function(){return this._errorHandler.errorText}});Object.defineProperty(n,"hasOof",{get:function(){return this._hasOof}});Object.defineProperty(n,"hasUnseenInbox",{get:function(){return Jx.isNonEmptyString(this._unseenInboxCounter.displayCount)}});Object.defineProperty(n,"hasUnseenFav",{get:function(){return this._unseenFavCounter&&this._unseenFavCounter.count>0}});Object.defineProperty(n,"unseenInboxCount",{get:function(){return this._unseenInboxCounter.count}});Object.defineProperty(n,"ariaLabel",{get:function(){var n=this.hasUnseenFav?Jx.res.getString("mailAccountListUnseenFav"):"",t=this.hasError?this._errorHandler.errorText:this._hasOof?Jx.res.getString("mailOofAccountListMessage"):"",i=this._unseenInboxCounter.count;return i===1?Jx.res.loadCompoundString("mailAccountListAriaTemplateSingular",this.displayName,n,t):Jx.res.loadCompoundString("mailAccountListAriaTemplatePlural",this.displayName,i,n,t)}});n.getUI=function(n){var t=Jx.escapeHtml(this.displayName),i=Jx.escapeHtml(this.ariaLabel);n.html="<div id='"+this._id+"' role='option' title='"+t+"' aria-label='"+i+"' class='accountItem"+(this.hasError?" showError":"")+(this.hasUnseenInbox?" showUnseenInbox":"")+(this.hasUnseenFav?" showUnseenFav":"")+(this._hasOof?" showOof":"")+"' tabIndex='-1'><div class='accountInfo typeSizeNormal' aria-hidden='true'><div class='accountName '>"+t+"<\/div><div class='unseenInbox'><span class='unseenCount'>"+this._unseenInboxCounter.displayCount+"<\/span><span class='unseenPlus'>"+this._unseenInboxCounter.overflowGlyph+"<\/span><\/div><div class='unseenFav'><\/div><\/div><div class='errorText accountStatus typeSizeNormal' aria-hidden='true'>"+Jx.escapeHtml(this._errorHandler.errorText)+"<\/div><div class='oofText accountStatus typeSizeNormal' aria-hidden='true'>"+Jx.escapeHtml(Jx.res.getString("mailOofAccountListMessage"))+"<\/div><\/div>"};n.onClick=function(){this._errorHandler.hasError&&this._errorHandler.handler(true)};n._onAccountChanged=function(n){var t=document.getElementById(this._id);t&&(Mail.Validators.hasPropertyChanged(n,"displayName")?(t.querySelector(".accountName").innerText=this.displayName,t.title=this.displayName,Mail.setAttribute(t,"aria-label",this.ariaLabel)):Mail.Validators.hasPropertyChanged(n,"settingsResult")?(this._updateError(t),Mail.setAttribute(t,"aria-label",this.ariaLabel)):(Mail.Validators.hasPropertyChanged(n,"lastSyncResult")||Mail.Validators.hasPropertyChanged(n,"lastPushResult")||Mail.Validators.hasPropertyChanged(n,"lastSendMailResult"))&&(this._updateError(t),this._updateUnseenCount(t),Mail.setAttribute(t,"aria-label",this.ariaLabel)))};n._raiseChangedEvent=function(n){n.target=this;this.raiseEvent("changed",n)};n._onUnseenInboxCollectionChanged=function(){var n=document.getElementById(this._id);n&&(this._updateUnseenCount(n),Mail.setAttribute(n,"aria-label",this.ariaLabel));this._raiseChangedEvent(["hasUnseenInbox","unseenInboxCount"])};n._onUnseenFavCollectionChanged=function(){var n=document.getElementById(this._id);n&&(this._updateUnseenFav(n),Mail.setAttribute(n,"aria-label",this.ariaLabel));this._raiseChangedEvent(["hasUnseenFav"])};n._updateError=function(n){this._errorHandler=Mail.AccountSettings.createErrorHandler(this._account,this._resource);n.querySelector(".errorText").innerText=this._errorHandler.errorText;var t=this.hasError;Jx.hasClass(n,"showError")!==t&&(Jx.setClass(n,"showError",t),this._raiseChangedEvent(["hasError"]))};n._updateUnseenCount=function(n){n.querySelector(".unseenCount").innerText=this._unseenInboxCounter.displayCount;n.querySelector(".unseenPlus").innerText=this._unseenInboxCounter.overflowGlyph;Jx.setClass(n,"showUnseenInbox",this.hasUnseenInbox)};n._updateUnseenFav=function(n){Jx.setClass(n,"showUnseenFav",this.hasUnseenFav)};n._updateOof=function(n){this._hasOof=n;var t=document.getElementById(this._id);t&&(Jx.setClass(t,"showOof",n),Mail.setAttribute(t,"aria-label",this.ariaLabel));this._raiseChangedEvent(["hasOof"])}})