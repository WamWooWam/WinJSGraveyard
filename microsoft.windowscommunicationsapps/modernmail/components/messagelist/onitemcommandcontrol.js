﻿Jx.delayDefine(Mail,"OnItemCommandControl",function(){"use strict";function n(n){Jx.mark("OnItemCommandControl."+n+",StartTA,Mail")}function t(n){Jx.mark("OnItemCommandControl."+n+",StopTA,Mail")}var r=Microsoft.WindowsLive.Platform.MailViewType,i=Mail.Instrumentation;Mail.OnItemCommandControl=function(i,r,u){n("constructor");this._mailItem=i;this._selection=r;this._listItemElement=u;var f=u.querySelector(".mailMessageListItemCommandContainer");this._flagCommandButton=f.querySelector(".commandFlag");this._markReadUnreadCommandButton=f.querySelector(".commandMarkAsReadUnread");this._deleteCommandButton=f.querySelector(".commandDelete");this._updateAllCommands();this._disposer=new Mail.Disposer(new Mail.EventHook(f,"click",this._onClicked,this),new Mail.EventHook(f,"MSPointerDown",this._onPointerDown,this));t("constructor")};Mail.OnItemCommandControl.prototype.dispose=function(){n("dispose");Jx.dispose(this._disposer);this._disposer=null;t("dispose")};var u=["flagged","canFlag"],f=["read","canMarkAsRead"],e=["canMove"],o=["canFlag","canMarkAsRead","canMove"];Mail.OnItemCommandControl.prototype.onItemChanged=function(i){n("onMailItemChanged");Mail.Validators.havePropertiesChanged(i,u)&&this._updateFlagCommand();Mail.Validators.havePropertiesChanged(i,f)&&this._updateReadCommands();Mail.Validators.havePropertiesChanged(i,e)&&this._updateDeleteCommand();Mail.Validators.havePropertiesChanged(i,o)&&this._checkCommandsEnabled();t("onMailItemChanged")};Mail.OnItemCommandControl.prototype._onClicked=function(i){n("onClicked");var r=i.target.classList;r.contains("commandFlag")?this._toggleFlag():r.contains("commandMarkAsReadUnread")?this._toggleReadState():r.contains("commandDelete")&&this._deleteMailItem();t("onClicked")};Mail.OnItemCommandControl.prototype._onPointerDown=function(n){n.pointerType==="mouse"&&n.currentPoint.properties.isRightButtonPressed||n.stopPropagation()};Mail.OnItemCommandControl.prototype._updateAllCommands=function(){n("updateAllCommands");this._updateFlagCommand();this._updateReadCommands();this._updateDeleteCommand();this._checkCommandsEnabled();t("updateAllCommands")};Mail.OnItemCommandControl.prototype._updateFlagCommand=function(){n("updateFlagCommand");var u=this._flagCommandButton,i=u.classList;this._mailItem.canFlag&&this._selection.view.type!==r.outbox?(i.remove("hidden"),this._mailItem.flagged?(i.add("flaggedMessage"),u.title=Jx.res.getString("mailCommandUnflagLabel")):(i.remove("flaggedMessage"),u.title=Jx.res.getString("mailCommandFlagLabel"))):i.add("hidden");t("updateFlagCommand")};Mail.OnItemCommandControl.prototype._updateReadCommands=function(){n("updateReadCommands");this._mailItem.canMarkRead&&this._selection.view.type!==r.outbox?(this._markReadUnreadCommandButton.classList.remove("hidden"),this._markReadUnreadCommandButton.title=this._mailItem.read?Jx.res.getString("mailCommandMarkUnreadLabel"):Jx.res.getString("mailCommandMarkReadLabel")):this._markReadUnreadCommandButton.classList.add("hidden");t("updateReadCommands")};Mail.OnItemCommandControl.prototype._updateDeleteCommand=function(){n("updateDeleteCommand");this._mailItem.canMove?this._deleteCommandButton.classList.remove("hidden"):this._deleteCommandButton.classList.add("hidden");t("updateDeleteCommand")};Mail.OnItemCommandControl.prototype._checkCommandsEnabled=function(){n("checkCommandsEnabled");var i=this._mailItem.canFlag||this._mailItem.canMarkRead||this._mailItem.canMove;i?this._listItemElement.classList.add("hasEnabledCommands"):this._listItemElement.classList.remove("hasEnabledCommands");t("checkCommandsEnabled")};Mail.OnItemCommandControl.prototype._toggleFlag=function(){n("toggleFlag");var r=!this._mailItem.flagged,u=i.Commands,f=r?u.flag:u.unflag;i.instrumentTriageCommand(f,i.UIEntryPoint.onMessage,this._selection);this._selection.setFlagState(r,[this._mailItem]);t("toggleFlag")};Mail.OnItemCommandControl.prototype._toggleReadState=function(){n("toggleReadState");var r=!this._mailItem.read,u=i.Commands,f=r?u.markAsRead:u.markAsUnread;i.instrumentTriageCommand(f,i.UIEntryPoint.onMessage,this._selection);this._selection.setReadState(r,[this._mailItem]);t("toggleReadState")};Mail.OnItemCommandControl.prototype._deleteMailItem=function(){n("deleteMailItem");var r=function(){this._selection.deleteItems([this._mailItem])}.bind(this);Mail.Commands.Handlers.deleteMessages(this._mailItem.hasDraft?1:0,r,i.UIEntryPoint.onMessage,this._selection);t("deleteMailItem",Mail.LogEvent.stop)}})