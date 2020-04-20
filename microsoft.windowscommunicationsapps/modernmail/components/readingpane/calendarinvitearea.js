﻿Jx.delayDefine(Mail,"CalendarInviteArea",function(){"use strict";function i(n){Mail.writeProfilerMark("CalendarInviteArea."+n,Mail.LogEvent.start)}function r(n){Mail.writeProfilerMark("CalendarInviteArea."+n,Mail.LogEvent.stop)}var u=null,s=null,e=null,t=null,o=-2147418113,h=-100,c=-200,f={},n=Mail.CalendarInviteArea=function(n){if(i("ctor"),!u){var h=Microsoft.WindowsLive.Platform,c=h.Calendar,o=c.MeetingMessageType;u=h.CalendarMessageType;s=h.MailFolderType;e=c.BusyStatus;t=c.ResponseType;f[o.informationalUpdate]="mailInviteStatusInformational";f[o.outdated]="mailInviteStatusOutdated";f[o.delegatorCopy]="mailInviteStatusDelegator";f[o.delegateCopy]="mailInviteStatusDelegate"}this._selection=n;r("ctor")};n.prototype.initialize=function(n,t){i("initialize");this._host=n;this._host.innerHTML=Mail.Templates.calendarInviteArea();this._keySources=t;r("initialize")};n.prototype.shutdown=function(){if(i("shutdown"),this._eventsHooked){var n=this;this._keySources.forEach(function(t){t.removeEventListener("keydown",n._onKeyDown,false)});this._keySources=[];this._eventsHooked=false}this._host.innerHTML="";this._host=null;this._message=null;r("shutdown")};n.prototype.setMessage=function(n){var t,e,l,h;if(i("setMessage"),this._hideMenu(),this._message=n,Boolean(n)&&n.calendarMessageType!==u.none&&n.calendarEvent){t=this._message.calendarEvent;this._calendarViewed=false;var a=this._message.account.platformObject,v=this._host.querySelector(".calendarInviteWhenContent"),y=this._host.querySelector(".calendarInviteWhereContent");if(v.innerHTML=Jx.escapeHtml(Mail.Utilities.getCalendarEventTimeRange(a,t)),y.innerText=t.location,this._setSelectorVisibility(".calendarInviteRecurrence",Boolean(t.recurring)),this._message.isJunk||this._message.isOutboundFolder)this._setSelectorVisibility(".calendarInviteButtons,.calendarInviteStatus",false);else{this._setSelectorVisibility(".calendarInviteButtons",true);this._ensureButtonsHooked();var o=false,s=false,c=false;this._message.calendarMessageType===u.cancelled?s=true:this._message.calendarMessageType===u.request&&(e=f[t.meetingMessageType],e||(o=true,t.responseRequested||(e="mailInviteStatusNoResponse")),Jx.isNonEmptyString(e)&&(l=this._host.querySelector(".calendarInviteStatus"),h=Jx.res.getString(e),Jx.isNonEmptyString(h)&&(l.innerText=h,c=true)));this._setSelectorVisibility(".calendarInviteAccept,.calendarInviteTentative,.calendarInviteDecline,.calendarInviteRespond",o);this._setSelectorVisibility(".calendarInviteRemove",s);this._setSelectorVisibility(".calendarInviteStatus",c);this._setSelectorClass(".calendarInviteButtons","viewCalendarOnly",!(o||s))}this._host.classList.remove("hidden")}r("setMessage")};n.prototype._getIdsCalendar=function(){return this._idsCalendar||(this._idsCalendar=Microsoft.WindowsLive.Instrumentation.Ids.Calendar),this._idsCalendar};n.BiciResponseType={Edit:0,Send:1,NoSend:2};n.BiciResponse={3:0,2:1,4:2};n.prototype._getRealEvent=function(n,t){var f,i,r,u;if(!t.isEventTypeValid)return null;if(f=Mail.Globals.platform,i=f.calendarManager.getEventFromUID(n,t.uid),i)if(r=Microsoft.WindowsLive.Platform.Calendar.EventType,u=t.eventType,u===r.single&&i.eventType!==r.single)i=null;else if(u===r.instanceOfSeries||u===r.exceptionToSeries)try{i=i.getOccurrence(t.startDate)}catch(e){i=null}return i};n.prototype._ensureButtonsHooked=function(){var n;if(!this._eventsHooked){var t=this._host.querySelector(".calendarInviteAccept"),i=this._host.querySelector(".calendarInviteTentative"),r=this._host.querySelector(".calendarInviteDecline"),u=this._host.querySelector(".calendarInviteRespond"),f=this._host.querySelector(".calendarInviteRemove"),e=this._host.querySelector(".calendarInviteViewCalendar");this._onAccept=this._onAccept.bind(this);this._onTentative=this._onTentative.bind(this);this._onDecline=this._onDecline.bind(this);this._onRespond=this._onRespond.bind(this);this._onRemove=this._onRemove.bind(this);this._onViewCalendar=this._onViewCalendar.bind(this);t.addEventListener("click",this._onAccept,false);i.addEventListener("click",this._onTentative,false);r.addEventListener("click",this._onDecline,false);u.addEventListener("click",this._onRespond,false);f.addEventListener("click",this._onRemove,false);e.addEventListener("click",this._onViewCalendar,false);n=this;this._onKeyDown=this._onKeyDown.bind(this);this._keySources.forEach(function(t){t.addEventListener("keydown",n._onKeyDown,false)});this._eventsHooked=true}};n.prototype._setSelectorVisibility=function(n,t){this._setSelectorClass(n,"hidden",!t)};n.prototype._setSelectorClass=function(n,t,i){var u,f,r;for(u=this._host.querySelectorAll(n),f=u.length,r=0;r<f;r++)Jx.setClass(u[r],t,i)};n.prototype._hideMenu=function(){this._menu&&(this._menu.hide(),this._menu=null)};n.prototype._showMenu=function(n,t,i){this._hideMenu();var r=document.createElement("div");r.id="inviteResponseFlyout";r.setAttribute("aria-label",i);this._menu=new WinJS.UI.Menu(r,{commands:t});this._menu.addEventListener("afterhide",function(){r.outerHTML="";r=null},false);document.body.appendChild(r);this._menu.show(n,"auto","center")};n.prototype._showResponseFlyout=function(n,t){this._showMenu(n,[{label:Jx.res.getString("EventEditBeforeSend"),onclick:this._editResponseBeforeSend.bind(this,t),id:"inviteEditResponseBeforeSendButton"},{label:Jx.res.getString("EventSendNow"),onclick:this._respondToInvite.bind(this,t,true),id:"inviteResponseSendButton"},{label:Jx.res.getString("EventDontSend"),onclick:this._respondToInvite.bind(this,t,false),id:"inviteResponseDontSendButton"}],Jx.res.getString("EventResponseOptions"))};n.prototype._onAccept=function(n){this._message.calendarEvent.responseRequested?this._showResponseFlyout(n.target,t.accepted):this._respondToInvite(t.accepted,false)};n.prototype._onTentative=function(n){this._message.calendarEvent.responseRequested?this._showResponseFlyout(n.target,t.tentative):this._respondToInvite(t.tentative,false)};n.prototype._onDecline=function(n){this._message.calendarEvent.responseRequested?this._showResponseFlyout(n.target,t.declined):this._respondToInvite(t.declined,false)};n.prototype._onRespond=function(n){var t=n.target;this._showMenu(t,[{label:Jx.res.getString("EventAccept"),onclick:this._onAccept.bind(this,n)},{label:Jx.res.getString("EventTentative"),onclick:this._onTentative.bind(this,n)},{label:Jx.res.getString("EventDecline"),onclick:this._onDecline.bind(this,n)}],Jx.res.getString("EventRespond"))};n.prototype._onRemove=function(){i("_onRemove");var t=this._message.account.platformObject,u=this._message.calendarEvent,n=this._getRealEvent(t,u);n&&n.deleteObject();this._setSelectorVisibility(".calendarInviteRemove",false);this._selection.deleteItems([this._message]);r("_onRemove")};n.prototype._launchUri=function(n){Windows.System.Launcher.launchUriAsync(n)};n.prototype._onViewCalendar=function(){var n,f,t,e;i("_onViewCalendar");n=this._message.calendarEvent;var o=Mail.Globals.platform,s=this._message.account.platformObject,u=o.calendarManager;if(this._calendarViewed=true,n.eventType===Microsoft.WindowsLive.Platform.Calendar.EventType.series)try{f=u.getEventFromUID(s,n.uid);t=u.getNextEvent(f.id);t&&(n=t)}catch(h){}e=new Windows.Foundation.Uri("wlcalendar://focusEvent/?start="+n.startDate.getTime().toString()+"&end="+n.endDate.getTime().toString()+"&allDay="+n.allDayEvent.toString());this._launchUri(e);r("_onViewCalendar")};n.prototype._editResponseBeforeSend=function(i){var r,u,e,f;if(Jx.bici.addToStream(this._getIdsCalendar().showCalendar,this._calendarViewed?1:0),Jx.bici.addToStream(this._getIdsCalendar().inviteResponse,n.BiciResponse[i],n.BiciResponseType.Edit,0),!this._message){Jx.log.info("CalendarInviteArea._editResponseBeforeSend: Unable to respond to invite without message object");return}if(r=this._message.calendarEvent,u=this._message.account.platformObject,u){f=this._getRealEvent(u,r);Mail.Utilities.ComposeHelper.ensureComposeFiles();Compose.CalendarUtil.PreEditResponseActionsEx(r,f,this._message.platformMailMessage,i,u);var s=Compose.util,h=s.convertCalendarResponseToCalendarActionType(i),c=s.convertToComposeAction(h),l={factorySpec:{originalMessage:this._message.platformMailMessage,originalEvent:f||r,calendarAction:h}};Mail.Utilities.ComposeHelper.launchCompose(c,l,{startDirty:true,moveToDrafts:true});i!==t.declined&&Compose.CalendarUtil.MoveMessageToDeleted(this._message)}else e={message:"Unexpected lack of account when responding to invitation",number:o},Jx.fault("CalendarInviteArea.js","_editResponseBeforeSend",e)};n.prototype._respondToInvite=function(u,f){var w,s,a;if(Jx.bici.addToStream(this._getIdsCalendar().showCalendar,this._calendarViewed?1:0),Jx.bici.addToStream(this._getIdsCalendar().inviteResponse,n.BiciResponse[u],f?n.BiciResponseType.Send:n.BiciResponseType.NoSend,0),!this._message){Jx.log.info("CalendarInviteArea._respondToInvite: Unable to respond to invite without message object");return}i("_respondToInvite");var v=this._message.calendarEvent,p=Mail.Globals.platform,y=this._message.account.platformObject,l=null;y?(p.invitesManager.sendMeetingResponse(v,this._message.platformMailMessage,u,y),s=this._getRealEvent(y,v),s&&(u===t.declined?s.deleteObject():(s.responseType=u,s.busyStatus=u===t.accepted?s.allDayEvent?e.free:e.busy:e.tentative,s.commit())),a=null,f&&(l=p.invitesManager.createResponseMail(v,this._message.platformMailMessage,u,y),l?Jx.isNonEmptyString(l.to)?(l.moveToOutbox(),l.commit()):a={message:"Unable to send response mail since we did not have an email address",number:h}:v.responseRequested&&(a={message:"Failed to get mail from platform even though a response was requested",number:c})),a?Jx.fault("CalendarInviteArea.js","_respondToInvite",a):(Mail.Utilities.ComposeHelper.ensureComposeFiles(),Compose.CalendarUtil.MoveMessageToDeleted(this._message))):(w={message:"Unexpected lack of account when responding to invitation",number:o},Jx.fault("CalendarInviteArea.js","_respondToInvite",w));r("_respondToInvite")};n.prototype._onKeyDown=function(n){var o,f,e,s;i("_onKeyDown");!n.altKey||n.shiftKey||n.ctrlKey||(o=Mail.guiState,o.isReadingPaneVisible&&Boolean(this._message)&&this._message.calendarMessageType!==u.none&&this._message.calendarEvent&&(f=null,e=null,this._message.calendarMessageType===u.request&&(n.key==="c"?(f=".calendarInviteAccept",e=t.accepted):n.key==="t"?(f=".calendarInviteTentative",e=t.tentative):n.key==="d"&&(f=".calendarInviteDecline",e=t.declined)),n.key==="v"&&this._onViewCalendar(),e!==null&&(o.isOnePane&&!o.isNavPaneWide&&(f=".calendarInviteRespond"),s=this._host.querySelector(f),this._showResponseFlyout(s,e))));r("_onKeyDown")};n.prototype._host=null;n.prototype._menu=null;n.prototype._keySources=[];n.prototype._eventsHooked=false;n.prototype._message=null;n.prototype._idsCalendar=null;n.prototype._calendarViewed=false})