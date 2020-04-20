﻿Jx.delayDefine(Mail.Commands,"Handlers",function(){var n=Mail.Instrumentation;Mail.Commands.Handlers={};Mail.Commands.Handlers.onMarkAsRead=function(t,i){Mail.writeProfilerMark("CommandBar_onMarkAsRead",Mail.LogEvent.start);t.setReadState(true);n.instrumentTriageCommand(n.Commands.markAsRead,i,t);Mail.writeProfilerMark("CommandBar_onMarkAsRead",Mail.LogEvent.stop)};Mail.Commands.Handlers.onMarkAsUnread=function(t,i){Mail.writeProfilerMark("CommandBar_onMarkAsUnread",Mail.LogEvent.start);t.setReadState(false);n.instrumentTriageCommand(n.Commands.markAsUnread,i,t);Mail.writeProfilerMark("CommandBar_onMarkAsUnread",Mail.LogEvent.stop)};Mail.Commands.Handlers.applyFlag=function(t,i){Mail.writeProfilerMark("CommandBar_applyFlag",Mail.LogEvent.start);t.setFlagState(true);n.instrumentTriageCommand(n.Commands.flag,i,t);Mail.writeProfilerMark("CommandBar_applyFlag",Mail.LogEvent.stop)};Mail.Commands.Handlers.removeFlag=function(t,i){Mail.writeProfilerMark("CommandBar_removeFlag",Mail.LogEvent.start);t.setFlagState(false);n.instrumentTriageCommand(n.Commands.unflag,i,t);Mail.writeProfilerMark("CommandBar_removeFlag",Mail.LogEvent.stop)};Mail.Commands.Handlers.deleteMessages=function(t,i,r,u){var e;if(Mail.writeProfilerMark("CommandBar_deleteMessages",Mail.LogEvent.start),e=function(){i();Mail.guiState.ensureNavMessageList();n.instrumentTriageCommand(n.Commands.delete,r,u);Jx.EventManager.fireDirect(null,"exitSelectionMode")},t===0)e();else{var o=Windows.UI.Popups,s=t===1,h=Jx.res.getString(s?"mailDeleteDraftBodyText":"mailDeleteMultipleDraftsBodyText"),c=Jx.res.getString(s?"mailDeleteDraftTitle":"mailDeleteMultipleDraftsTitle"),f=new o.MessageDialog(h,c);f.commands.append(new o.UICommand(Jx.res.getString("mailDeleteDraftConfirm"),e));f.commands.append(new o.UICommand(Jx.res.getString("mailDeleteDraftCancel"),Jx.fnEmpty));f.defaultCommandIndex=f.cancelCommandIndex=1;Mail.showPopupAsync(f)}Mail.writeProfilerMark("CommandBar_deleteMessages",Mail.LogEvent.stop)};Mail.Commands.Handlers.onDeleteButton=function(n,t){Mail.log("CommandBar_onDeleteButton",Mail.LogEvent.start);var i=n.messages,r=i.filter(function(n){return n.hasDraft});Mail.Commands.Handlers.deleteMessages(r.length,function(){n.deleteItems(i)},t,n);Mail.log("CommandBar_onDeleteButton",Mail.LogEvent.stop)};Mail.Commands.Handlers.onJunkButton=function(n){Mail.writeProfilerMark("CommandBar_onJunkButton",Mail.LogEvent.start);n.junkItems();Mail.writeProfilerMark("CommandBar_onJunkButton",Mail.LogEvent.stop)};Mail.Commands.Handlers.onUnjunkButton=function(n){Mail.writeProfilerMark("CommandBar_onUnjunkButton",Mail.LogEvent.start);n.moveItemsTo(n.account.inboxView);Mail.writeProfilerMark("CommandBar_onUnjunkButton",Mail.LogEvent.stop)};Mail.Commands.Handlers.onSyncButton=function(){Mail.writeProfilerMark("CommandBar_onSyncButton",Mail.LogEvent.start);Jx.EventManager.fireDirect(null,Mail.Commands.Events.showNextSyncStatus);Jx.forceSync(Mail.Globals.platform,Microsoft.WindowsLive.Platform.ApplicationScenario.mail);Mail.writeProfilerMark("CommandBar_onSyncButton",Mail.LogEvent.stop)};Mail.Commands.Handlers.onMoveButton=function(t,i,r){Mail.writeProfilerMark("CommandBar_onMoveButton",Mail.LogEvent.start);var u=document.getElementById("idCompApp");Mail.Globals.commandManager.showAppBar().then(function(){Mail.MoveFlyout.showMoveFlyout(u,t,r);n.instrumentTriageCommand(n.Commands.move,i,t);Mail.writeProfilerMark("CommandBar_onMoveButton",Mail.LogEvent.stop)})};Mail.Commands.Handlers.onToggleSelectionMode=function(){Mail.SelectionHandler.toggleSelectionMode()};Mail.Commands.Handlers._getDefaultPinnedTileName=function(n,t){return Jx.res.loadCompoundString("mailCommandPinAccountAndFolderName",n.displayName,t.name)};Mail.Commands.Handlers._getSecondaryTileLogos=function(n){var t={},i,r;return i=n.iconType,r=Microsoft.WindowsLive.Platform.AccountIconType,i===r.exchange?(t.wide310x150="ms-appx:///ModernMail/Resources/Images/ExchangeWideLogo.png",t.square30x30="ms-appx:///ModernMail/Resources/Images/ExchangeSmallLogo.png",t.square70x70="ms-appx:///ModernMail/Resources/Images/ExchangeTinyLogo.png",t.square150x150="ms-appx:///ModernMail/Resources/Images/ExchangeLogo.png",t.square310x310="ms-appx:///ModernMail/Resources/Images/ExchangeLargeLogo.png",t.lockScreen="ms-appx:///ModernMail/Resources/Images/ExchangeBadge.png"):i===r.outlook?(t.wide310x150="ms-appx:///ModernMail/Resources/Images/HotmailWideLogo.png",t.square30x30="ms-appx:///ModernMail/Resources/Images/HotmailSmallLogo.png",t.square70x70="ms-appx:///ModernMail/Resources/Images/HotmailTinyLogo.png",t.square150x150="ms-appx:///ModernMail/Resources/Images/HotmailLogo.png",t.square310x310="ms-appx:///ModernMail/Resources/Images/HotmailLargeLogo.png",t.lockScreen="ms-appx:///ModernMail/Resources/Images/HotmailBadge.png"):(t.wide310x150="ms-appx:///ModernMail/Res/MailWideLogo.png",t.square30x30="ms-appx:///ModernMail/Res/MailSmallLogo.png",t.square70x70="ms-appx:///ModernMail/Res/MailTinyLogo.png",t.square150x150="ms-appx:///ModernMail/Res/MailLogo.png",t.square310x310="ms-appx:///ModernMail/Res/MailLargeLogo.png",t.lockScreen="ms-appx:///ModernMail/Res/MailBadge.png"),t};Mail.Commands.Handlers._getTileInfoForView=function(n){var t=JSON.parse(n),i="",r=Microsoft.WindowsLive.Platform,o=t.type!==r.TileIdType.localMailViewId,f,u,e;return t.type===r.TileIdType.roamingMailViewId&&t.viewType!==r.MailViewType.userGeneratedFolder&&t.viewType!==r.MailViewType.person&&(f=function(n){var t=this[n];return Jx.isObject(t)?u(t):t},u=function(n){return Object.keys(n).map(f,n).join("_").replace(/[\n\t\";,:!<>\/\\\*\? ]/g,"")},i=u(t)),(!Jx.isNonEmptyString(i)||i.length>64)&&(e=(new Windows.Security.ExchangeActiveSyncProvisioning.EasClientDeviceInformation).id,i="Mail_"+e.replace(/-/g,"")+"_"+Date.now().toString(16)),{tileId:i,shouldRoam:o}};Mail.Commands.Handlers.onPinFolder=function(n,t){Mail.log("CommandBar_pinOperation",Mail.LogEvent.start);Mail.writeProfilerMark("CommandBar_onPinButton",Mail.LogEvent.start);var r=Windows.UI.StartScreen,i=Windows.Foundation,u=n.view,e=n.account.platformObject,f=Mail.Globals.commandManager;f.showAppBar().then(function(){var h=Mail.Activation.stringifyArguments(u),s;if(!Jx.isNonEmptyString(h))return WinJS.Promise.wrapError(new Error("Could not create arguments"));if(s=Mail.Commands.Handlers._getTileInfoForView(h),!r.SecondaryTile.exists(s.tileId)){var l=Mail.Commands.Handlers._getDefaultPinnedTileName(e,u),o=Mail.Commands.Handlers._getSecondaryTileLogos(e),v=new i.Uri(o.wide310x150),y=new i.Uri(o.square30x30),p=new i.Uri(o.square70x70),w=new i.Uri(o.square150x150),b=new i.Uri(o.square310x310),k=new i.Uri(o.lockScreen),n=new r.SecondaryTile(s.tileId);n.displayName=l;n.shortName=l;n.arguments=h;n.roamingEnabled=s.shouldRoam;n.foregroundText=r.ForegroundText.light;n.lockScreenBadgeLogo=k;n.visualElements.showNameOnSquare150x150Logo=true;n.visualElements.showNameOnWide310x150Logo=true;n.visualElements.showNameOnSquare310x310Logo=true;n.visualElements.wide310x150Logo=v;n.visualElements.square30x30Logo=y;n.visualElements.square70x70Logo=p;n.visualElements.square150x150Logo=w;n.visualElements.square310x310Logo=b;var d=document.getElementById(t),c=d.getBoundingClientRect(),g=function(n){f.hideAppBar();n&&(f.pinnedFolderChange(),u.setStartScreenTileId(s.tileId,h));Mail.log("CommandBar_pinOperation",Mail.LogEvent.stop)};try{n.requestCreateAsync({x:c.left+c.width/2,y:c.top-5}).done(g)}catch(a){Mail.writeProfilerMark("StartScreen.SecondaryTile.requestCreateAsync threw exception "+a.number,Mail.LogEvent.stop);Mail.log("CommandBar_pinOperation",Mail.LogEvent.stop)}Mail.writeProfilerMark("CommandBar_onPinButton",Mail.LogEvent.stop)}}.bind(this))};Mail.Commands.Handlers.onUnpinFolder=function(n,t){Mail.log("CommandBar_unpinOperation",Mail.LogEvent.start);Mail.writeProfilerMark("CommandBar_onUnpinButton",Mail.LogEvent.start);Mail.Commands.Handlers.unpinFolder(n.view.startScreenTileId,t);Mail.writeProfilerMark("CommandBar_onUnpinButton",Mail.LogEvent.stop)};Mail.Commands.Handlers.unpinFolder=function(n,t){var i=Windows.UI.StartScreen;if(i.SecondaryTile.exists(n)){var u=new i.SecondaryTile(n),f=document.getElementById(t||"folderOperations"),r=f.getBoundingClientRect();u.requestDeleteAsync({x:r.left,y:r.top}).done(function(n){var t=Mail.Globals.commandManager;t.hideAppBar();n&&t.pinnedFolderChange();Mail.log("CommandBar_unpinOperation",Mail.LogEvent.stop)})}};Mail.Commands.Handlers.showPreviousMessage=function(){Jx.EventManager.fireDirect(null,Mail.Commands.Events.showPreviousMessage)};Mail.Commands.Handlers.showNextMessage=function(){Jx.EventManager.fireDirect(null,Mail.Commands.Events.showNextMessage)};Mail.Commands.Handlers.applyAllFilter=function(){Jx.EventManager.fireDirect(null,Mail.Commands.Events.allFilterApplied)};Mail.Commands.Handlers.applyUnreadFilter=function(){Jx.EventManager.fireDirect(null,Mail.Commands.Events.unreadFilterApplied)};Mail.Commands.Handlers.reapplyFilter=function(){Jx.EventManager.fireDirect(null,Mail.Commands.Events.reapplyFilter)};Mail.Commands.Handlers.print=function(){var n=new Mail.PrintHandler;n.showPrintUI()};Mail.Commands.Handlers.dismissAppBar=function(){var n=Mail.Globals.commandManager;n.hideAppBar()};Mail.Commands.Handlers.composeCommand=function(n,t){var r=Mail.Globals.commandManager,i=r.getContext("composeSelection");Boolean(i)&&i.fireCommandEvent(n,t)};Mail.Commands.Handlers.composeSaveCommand=function(t,i){var u=Mail.Globals.commandManager,r=u.getContext("composeSelection");Boolean(r)&&(r.saveCommand(),n.instrumentFormattingCommand(n.Commands.saveDraft,i))};Mail.Commands.Handlers.composeEmojiPicker=function(t,i){var u=Mail.Globals.commandManager,r=u.getContext("composeSelection");Boolean(r)&&(r.pauseAppBarPadding(),WinJS.UI.AppBar._ElementWithFocusPreviousToAppBar=null,u.hideAppBar(),r.showEmojiPicker(),n.instrumentFormattingCommand(n.Commands.emoticon,i))};Mail.Commands.Handlers.edit=function(n,t){var i=n.message;if(!i.isDraft&&i.canMoveFromOutboxToDrafts)try{i.moveFromOutboxToDraftsAndCommit();n.updateNav(n.account,n.account.draftsView,i);Mail.Utilities.ComposeHelper.onEdit(i,true)}catch(r){}else t.handleCommandBarNewChild()};Mail.Commands.Handlers.newChildWindow=function(n,t){var i=Mail.Utilities.ComposeHelper;n.message.isDraft&&i.isComposeShowing&&(i.setDirty(),i.hideCurrent());t()}})