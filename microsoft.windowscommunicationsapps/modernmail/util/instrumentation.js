﻿Jx.delayDefine(Mail,"Instrumentation",function(){"use strict";var r=Microsoft.WindowsLive.Instrumentation.Ids.Mail,i=Microsoft.WindowsLive.Platform,t=i.MailViewType,e={none:1,single:2,multiple:3},f={keyboardShortcut:1,onMessage:2,appBar:3,other:4,onCanvas:5,automatic:6},o={microsoft:1,enterprise:2,microsoftWithEnterprise:3},s={keyboardShortcut:1,appBar:2,other:3},n=Mail.Instrumentation={_touchPresent:null,_isTouchPresent:function(){var t=n._touchPresent,i;return Jx.isValidNumber(t)||(Mail.log("Mail.Instrumentation._touchPresent",Mail.LogEvent.start),i=new Windows.Devices.Input.TouchCapabilities,n._touchPresent=t=i.touchPresent?1:0,Mail.log("Mail.Instrumentation._touchPresent",Mail.LogEvent.stop)),t},_getUserLoginType:function(){if(Microsoft.WindowsLive.Platform.Result.defaultAccountDoesNotExist===Mail.Globals.platform.accountManager.defaultAccount.lastAuthResult)return o.enterprise;var n=false;try{n=Windows.Management.Workplace.WorkplaceSettings.isMicrosoftAccountOptional}catch(t){Jx.log.exception("Windows.Management.Workplace.WorkplaceSettings.isMicrosoftAccountOptional lookup failed",t)}return n?o.microsoftWithEnterprise:o.microsoft},instrumentAppBarInvoke:function(t){Mail.log("Mail.Instrumentation.instrumentAppBarInvoke",Mail.LogEvent.start);var i=n.AppBarInvokeType;(t===i.peekBarTouch||t===i.edgyTouch)&&(n._touchPresent=true);Jx.bici.addToStream(r.mailAppBarInvoke,n._isTouchPresent(),t);Mail.log("Mail.Instrumentation.instrumentAppBarInvoke",Mail.LogEvent.stop)},instrumentTriageCommand:function(t,i,o){Mail.log("Mail.Instrumentation.instrumentTriageCommand",Mail.LogEvent.start);var c=o.messages.length,h=e.none,s=null;c===1?h=e.single:c>1&&(h=e.multiple);i===u.keyboardShortcut?s=f.keyboardShortcut:i===u.onMessage?s=f.onMessage:i===u.appBar?s=f.appBar:i===u.onCanvas?s=f.onCanvas:i===u.automatic?s=f.automatic:i===u.dragAndDrop&&(s=f.other);Jx.bici.addToStream(r.mailTriageCommand,t,s,h,n._isTouchPresent(),n.getServerDomain(o.account.platformObject),n._getFolderViewValue(o.view));Mail.log("Mail.Instrumentation.instrumentTriageCommand",Mail.LogEvent.stop)},instrumentMailCommand:function(t){Mail.log("Mail.Instrumentation.instrumentMailCommand",Mail.LogEvent.start);Jx.bici.addToStream(r.modernMailCommand,t,n._isTouchPresent());Mail.log("Mail.Instrumentation.instrumentMailCommand",Mail.LogEvent.stop)},instrumentFormattingCommand:function(t,i){Mail.log("Mail.Instrumentation.instrumentFormattingCommand",Mail.LogEvent.start);var f=s.other;i===u.keyboardShortcut?f=s.keyboardShortcut:i===u.appBar&&(f=s.appBar);Jx.bici.addToStream(r.mailFormatCommand,f,t,n._isTouchPresent());Mail.log("Mail.Instrumentation.instrumentFormattingCommand",Mail.LogEvent.stop)},getServerDomain:function(n){var r=i.ServerType.eas,t,u;n.accountType===i.AccountType.imap&&(r=i.ServerType.imap);t=null;u=n.getServerByType(r).server;try{t=new Windows.Foundation.Uri("foo://"+u).domain}catch(f){t="windows-mail-telemetry-account-no-domain"}return t},instrumentEmailProviders:function(){var t,u,s,h;Mail.log("Mail.Instrumentation.instrumentEmailProviders",Mail.LogEvent.start);var e=Mail.Globals.platform.accountManager.getConnectedAccountsByScenario(i.ApplicationScenario.mail,i.ConnectedFilter.normal,i.AccountSort.name),o=n._isTouchPresent(),f=n._getUserLoginType();for(t=0,u=e.count;t<u;t++)s=e.item(t),h=n.getServerDomain(s),Jx.bici.addToStream(r.connectedMailAccountsOnMailVisible,h,u,o,f);Jx.bici.addToStream(r.connectedMailAccountsOnMailVisible,"windows-mail-telemetry",u,o,f);Jx.bici.addToStream(r.modernUserLogin,f);Mail.log("Mail.Instrumentation.instrumentEmailProviders",Mail.LogEvent.stop)},instrumentConversationThreading:function(){Mail.log("Mail.Instrumentation.instrumentConversationThreading",Mail.LogEvent.start);Jx.bici.set(r.modernMailConversationThreadingEnabled,Mail.Globals.appSettings.isThreadingEnabled?2:1);Mail.log("Mail.Instrumentation.instrumentConversationThreading",Mail.LogEvent.stop)},_getViewDisabledValue:function(t){var i=n.ViewDisabled,r=i.disabled;return t.isEnabled&&(r=t.isPinnedToNavPane?i.enabledAndPinned:i.enabledAndUnpinned),r},_getFolderViewValue:function(i){var r=n.FolderView,u=r.others;switch(i.type){case t.inbox:u=r.inbox;break;case t.flagged:u=r.flagged;break;case t.deletedItems:u=r.deletedItems;break;case t.sentItems:u=r.sentItems;break;case t.outbox:u=r.outbox;break;case t.draft:u=r.draft;break;case t.junkMail:u=r.junkMail;break;case t.social:u=r.social;break;case t.newsletter:u=r.newsletter;break;case t.allPinnedPeople:u=r.allPinnedPeople;break;case t.person:u=i.isPinnedToNavPane?r.pinnedPerson:r.suggestedPerson;break;case t.userGeneratedFolder:u=i.isPinnedToNavPane?r.pinnedUserGeneratedFolder:r.other;break;default:u=r.other}return u},instrumentNavigation:function(u){var f,e,o;if(Mail.log("Mail.Instrumentation.instrumentNavigation",Mail.LogEvent.start),f=u.account,e=f.platformObject,e&&e.isObjectValid){var s=f.queryViews(i.MailViewScenario.navPane),h=Mail.ViewFilters,c=h.filterByType(s,[t.person],[]),l=h.filterByType(s,h.folders,[]);var a=n.ViewDisabled,v=a.NA,y=a.NA,p=e.getServerByType(i.ServerType.eas);p&&p.isWlasSupported&&(o=f.queryViews(i.MailViewScenario.systemCategories),o&&o.forEach(function(i){i.type===t.social?y=n._getViewDisabledValue(i):i.type===t.newsletter&&(v=n._getViewDisabledValue(i))}),Jx.dispose(o));Jx.bici.addToStream(r.modernMailNavigate,n._getFolderViewValue(u),n.getServerDomain(f.platformObject),c.count,l.count-1,v,y);Jx.dispose(c);Jx.dispose(l);Jx.dispose(s)}Mail.log("Mail.Instrumentation.instrumentNavigation",Mail.LogEvent.stop)},FolderView:{inbox:1,flagged:2,deletedItems:3,sentItems:4,outbox:5,draft:6,junkMail:7,social:8,newsletter:9,allPinnedPeople:10,pinnedPerson:11,suggestedPerson:12,pinnedUserGeneratedFolder:13,other:15},ViewDisabled:{enabledAndPinned:0,enabledAndUnpinned:1,disabled:2,NA:3},Commands:{"delete":1,"new":2,reply:3,replyAll:4,forward:5,flag:6,unflag:7,move:8,markAsRead:9,markAsUnread:10,enterSelectionMode:1,newComposeWindow:2,newReadingPaneWindow:3,emoticon:8,saveDraft:17},UIEntryPoint:{keyboardShortcut:0,onMessage:1,appBar:2,onCanvas:3,dragAndDrop:4,automatic:5},AppBarInvokeType:{peekBarTouch:1,peekBarMouse:2,rightClick:3,composeSelection:4,consumeSelection:5,edgyTouch:6,edgyKeyboard:7}},u=n.UIEntryPoint})