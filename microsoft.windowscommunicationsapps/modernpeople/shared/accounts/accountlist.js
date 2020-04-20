﻿Jx.delayDefine(People.Accounts,["AccountListControl","AccountListType"],function(){function r(n){return n.displayName}var i=window.People,n=i.Accounts,t=Microsoft.WindowsLive.Platform;n.AccountListControl=function(t,i,u,f,e){n.ObjectListControl.call(this,"AccountList",e||{});n.AccountControlBase.call(this,i,u);this._type=t;this._platform=i;this._scenario=u;this._biciSuffix=f;this._elItemTemplate=null;this._options=e||{};this._maxCount=this._options.maxCount===undefined?-1:this._options.maxCount;this._useLargeIcons=!!this._options.largeIcons;this._showErrorStates=!!this._options.showErrorStates;this._getAssetText=this._options.getAssetText||r;switch(this._type){case n.AccountListType.filteredUpsells:case n.AccountListType.unfilteredUpsells:case n.AccountListType.connectedUpsells:this._onPrimaryAction=this._options.onPrimaryAction||function(){return true}}$include("$(cssResources)/AccountListControl.css")};Jx.augment(n.AccountListControl,n.ObjectListControl);Jx.augment(n.AccountListControl,n.AccountControlBase);n.AccountListType={filteredUpsells:0,unfilteredUpsells:1,connectedUpsells:2};Object.freeze(n.AccountListType);n.AccountListControl.prototype.updateAccountData=function(n){this._updateObjectData(n)};n.AccountListControl.prototype._getCollection=function(){var i=null,r=this._platform.accountManager,u;if(r.getConnectableAccountsByScenario&&r.getConnectedAccountsByScenario){switch(this._type){case n.AccountListType.filteredUpsells:i=r.getConnectableAccountsByScenario(this._scenario,t.ConnectableFilter.excludeIfAnyAccountIsConnected);break;case n.AccountListType.unfilteredUpsells:i=r.getConnectableAccountsByScenario(this._scenario,t.ConnectableFilter.normal);break;case n.AccountListType.connectedUpsells:i=r.getConnectedAccountsByScenario(this._scenario,t.ConnectedFilter.includeDisabledAccounts,t.AccountSort.name)}this._maxCount>0&&(u=i,i=this._collection=new People.CappedPlatformCollection(u,this._maxCount));i.unlock()}return i};n.AccountListControl.prototype._getChildObject=function(t){if(this._showErrorStates){var i=t,r=n.AccountControlBase.mapAppScenarioToResourceType[this._scenario];return i.getResourceByType(r)}return null};n.AccountListControl.prototype._getNewObjectItem=function(){var n=this._elItemTemplate,t;return n===null&&(this._elItemTemplate=n=document.createElement("div"),n.setAttribute("role","option"),n.innerHTML="<div class='ali singleLineText'><div class='ali-leftColumn' aria-hidden='true'><div id='ali_icon' class='"+(this._useLargeIcons?"ali-largeIcon":"ali-icon")+"'><\/div><\/div><div class='ali-rightColumn' aria-hidden='true'><div class='ali-displayName singleLineText'><\/div><div class='ali-description singleLineText'><\/div><\/div><\/div>"),t=n.cloneNode(true),t.id="idAccountItem_"+Jx.uid(),i.Animation.addPressStyling(t.firstElementChild),t};n.AccountListControl.prototype._applyObject=function(t,i){var u=i,h=t.querySelector("#ali_icon"),f,o,r,s,e;h.style.backgroundImage="url("+u.iconMediumUrl+")";f=t.querySelector(".ali-displayName");o="ali_displayName"+Jx.uid();f.id=o;t.setAttribute("aria-labelledby",o);f.innerText=this._getAssetText(u);r=t.querySelector(".ali-description");s="ali_description"+Jx.uid();r.id=s;t.setAttribute("aria-describedby",s);switch(this._type){case n.AccountListType.unfilteredUpsells:r.innerText=this._calcUpsellDescriptionText(u);break;case n.AccountListType.connectedUpsells:e=this._getCurrentError(u);n.KnownAccountError.none===e?(r.innerText=u.emailAddress||u.userDisplayName,u.emailAddress&&Jx.isRtl()&&(r.style.direction="ltr",r.style.textAlign="right"),Jx.removeClass(r,"ali-errorText")):n.KnownAccountError.removalNeeded===e||n.KnownAccountError.oauthCredentialError===e?(r.innerText=Jx.res.getString("/accountsStrings/alc-attentionNeededText"),Jx.addClass(r,"ali-errorText")):(r.innerText=Jx.res.getString("/accountsStrings/alc-errorText"),Jx.addClass(r,"ali-errorText"));break;case n.AccountListType.filteredUpsells:Jx.addClass(f,"noDescription")}n.ObjectListControl.prototype._applyObject.call(this,t,i)};n.AccountListControl.prototype._calcUpsellDescriptionText=function(t){var i=null;return(t.sourceId==="ABCH"||t.sourceId==="EXCH")&&(i=t.summary),i||Jx.res.getString("/accountsStrings/alc-connectText")};n.AccountListControl.prototype._handlePrimaryAction=function(t){var i=t,r;this._onPrimaryAction(i)&&(r=new n.FlowLauncher(this._platform,this._scenario,this._biciSuffix),r.launchManageFlow(i))}})