﻿Jx.delayDefine(Calendar,"ProviderEventView",function(){"use strict";function i(n){Jx.mark("Calendar.ProviderEventView."+n+",StartTA,Calendar,App")}function r(n){Jx.mark("Calendar.ProviderEventView."+n+",StopTA,Calendar,App")}function h(n){Jx.mark("Calendar.ProviderEventView."+n+",Info,Calendar,App")}function e(n){var t="";return n&&(t=n.subject.trim()),Jx.isNonEmptyString(t)||(t=Jx.res.getString("NoSubject")),t}function s(t,i,r){var u=null;return t===n.remove?(f=f||Microsoft.WindowsLive.Platform.Calendar.EventType,u=r&&r.eventType===f.series?i?Jx.res.getString("ProviderWarningDeleteSeriesChoose"):Jx.res.getString("ProviderWarningDeleteSeries"):i?Jx.res.getString("ProviderWarningDeleteChoose"):Jx.res.getString("ProviderWarningDelete")):t===n.replace&&(u=Jx.res.getString("ProviderWarningReplace")),u}var u=Calendar.Helpers,n=Calendar.ProviderAction,f,o=Calendar.ProviderEventView=function(n){i("constructor");this._model=n;this._calendarSelector=null;this._selectedCalendarIndex=0;this._calendarSelectorElement=null;this._buttonElement=null;this._beforeElement=null;this._afterElement=null;this._handleFocusOut=this._handleFocusOut.bind(this);this._handleButton=this._handleButton.bind(this);this._handleCalendarChange=this._handleCalendarChange.bind(this);this._settingsContainer=null;this.initComponent();r("constructor")},t;Jx.augment(o,Jx.Component);t=o.prototype;t._getFullEventHtml=function(n,t){var o=e(n),r=Jx.escapeHtml(n.location.trim()),s=Jx.isNonEmptyString(r),u=document.createElement("div"),i;u.innerHTML=n.data;i=u.innerText.trim();Jx.isNonEmptyString(i)&&(i=Jx.res.getString("ProviderNotes")+i);var h=this._model.willEmailAttendees(t),f=Jx.escapeHtml(Jx.res.getString("ProviderAttendeesUpdate"));return'<div class="provEvent1"><div id="provSubject">'+Jx.escapeHtml(o)+"<\/div>"+(s?'<div class="provLocation">'+r+"<\/div>":"")+'<div class="provDateContainer"><div class="provDate">'+Jx.escapeHtml(this._formatEventDate(n))+"<\/div>"+(n.recurring?'<div class="provRecur">&#x1f503;<\/div>':"")+'<\/div><div id="provAttendees" title="'+f+'" '+(h?"":'style="display:none"')+">"+f+'<\/div><\/div><div class="provEvent2"><div id="provNotes">'+Jx.escapeHtml(i)+"<\/div><\/div>"};t._getRemoveEventHtml=function(n){var t=e(n),i=this._model.willEmailAttendees(n);return'<div class="provEvent1"><div id="provSubject">'+Jx.escapeHtml(t)+'<\/div><\/div><div class="provEvent2"><div id="provNotes"'+(i?"":'style="display:none"')+">"+Jx.escapeHtml(Jx.res.getString("ProviderInfoDeleteAttendees"))+"<\/div><\/div>"};t._formatEventDate=function(n){var o=new Jx.DTFormatter("shortDate"),s=new Jx.DTFormatter("shortTime"),t=n.startDate,i=n.endDate,r,f,e,h;return n.allDayEvent?(i=new Date(i.getTime()-1),r=o.format(t),f=u.isSameDate(t,i)?Jx.res.loadCompoundString("AllDaySuffix",r):Jx.res.loadCompoundString("DateRangeShort",r,o.format(i))):(e=u.shortDateAndTime,t.getTime()===i.getTime()?f=e.format(t):u.isSameDate(t,i)?(r=o.format(t),f=r+" "+Jx.res.loadCompoundString("TimeRange",s.format(t),s.format(i))):(r=e.format(t),h=e.format(i),f=Jx.res.loadCompoundString("DateRangeShort",r,h))),f};t.getUI=function(t){var u=this._model.getAction(),l=u===n.remove,a=this._model.getErrorText(),v=Jx.isNonEmptyString(a),i="",h,c,r;if(i='<a href="#" aria-hidden="true" class="provAccessHelper" id="provBefore"><\/a>',v)i+='<div class="provError">'+Jx.escapeHtml(a)+"<\/div>";else{var y=this._model.getCalendars(),e=y.length>1,o=null,f=null;e||u===n.add||(f=this._model.getOriginalEvent());o=l?f:this._model.getEvent();h=s(u,e,o);Jx.isNonEmptyString(h)&&(i+='<div id="provInfo">'+Jx.escapeHtml(h)+"<\/div>");e&&(c=this._calendarSelector=new Calendar.Views.CalendarSelector,i+=Jx.getUI(c).html,this.append(c));i+=l?this._getRemoveEventHtml(f):this._getFullEventHtml(o,f)}switch(u){case n.add:r=Jx.res.getString("ProviderAdd");break;case n.remove:r=Jx.res.getString("ProviderDelete");break;case n.replace:r=Jx.res.getString("ProviderReplace");break;case n.signIn:r=Jx.res.getString("ProviderSignIn");break;default:r=Jx.res.getString("ProviderClose")}i+='<div class="provFooter"><button id="provButton" class="prov'+u+'">'+Jx.escapeHtml(r)+"<\/button><\/div>";i+='<a href="#" aria-hidden="true" class="provAccessHelper" id="provAfter"><\/a>';t.html=i};t.activateUI=function(){if(i("activateUI"),Jx.Component.prototype.activateUI.call(this),this._buttonElement=$.id("provButton"),this._buttonElement.addEventListener("click",this._handleButton,false),this._beforeElement=$.id("provBefore"),this._afterElement=$.id("provAfter"),this._beforeElement.addEventListener("focus",this._handleFocusOut,true),this._afterElement.addEventListener("focus",this._handleFocusOut,true),this._calendarSelector){if(this._calendarSelectorElement=$("#CalendarCombo .selection")[0],this._model.getAction()!==n.add)this._calendarSelector.on("calendarSelected",this._handleCalendarChange);this._setupCalendarSelector()}r("activateUI")};t.deactivateUI=function(){this._buttonElement&&(this._buttonElement.removeEventListener("click",this._handleButton,false),this._buttonElement=null);this._calendarSelectorElement=null;this._beforeElement&&(this._beforeElement.removeEventListener("focus",this._handleFocusOut,true),this._beforeElement=null);this._afterElement&&(this._afterElement.removeEventListener("focus",this._handleFocusOut,true),this._afterElement=null);this._calendarSelector&&this._model.getAction()!==n.add&&this._calendarSelector.detach("calendarSelected",this._handleCalendarChange)};t.displayErrorUI=function(){var t,i,n,r;this._model.getErrorText()||(t=Jx.res.getString("ProviderStartErrorGeneric"),this._model.setError(t,t));i=document.getElementById("providerRoot");this.deactivateUI();n=this._calendarSelector;n&&(n.shutdownComponent(),this.removeChild(n),this._calendarSelector=null);r=Jx.getUI(this).html;i.innerHTML=r;this.activateUI()};t._setupCalendarSelector=function(){var i=this._calendarSelector,t,r;t=null;r=this._model.getCalendars();i.setCalendars(r);this._model.getAction()===n.add&&(t=this._getSettings().get("lastCalendarId"));i.updateSelectionById(t)};t._handleCalendarChange=function(t){var f=this._model.getCalendars()[t.data.index].calendar,i=this._model.getOriginalEvent(f.id),u=this._model.getAction(),o=this._model.willEmailAttendees(i),r;u===n.remove?(document.getElementById("provSubject").innerText=e(i),document.getElementById("provInfo").innerText=s(u,true,i),r=document.getElementById("provNotes")):r=document.getElementById("provAttendees");r.style.display=o?"":"none"};t._getSelectedCalendar=function(n){var i=this._model.getCalendars(),t=null;return t=this._calendarSelector?i[this._calendarSelector.getSelectedCalendarIndex()].calendar:i[0].calendar,n&&this._getSettings().set("lastCalendarId",t.id),t};t._handleButton=function(){i("handleButton");var u=false,f=this._model,e=this._model.getAction(),t;h("handleButton.action:"+e);switch(e){case n.remove:t=this._getSelectedCalendar();u=!f.deleteEvent(t);break;case n.add:case n.replace:t=this._getSelectedCalendar(e===n.add);u=!f.saveEvent(t);break;case n.signIn:Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri("wlcalendar:")).done();break;default:f.reportWithoutSave()}u&&this.displayErrorUI();r("handleButton")};t._handleFocusOut=function(n){this._buttonElement&&(this._calendarSelectorElement&&n.target!==this._beforeElement?this._calendarSelectorElement.focus():this._buttonElement.focus())};t._getSettings=function(){if(!this._settingsContainer){var n=new Jx.AppData,t=n.localSettings();this._settingsContainer=t.container("Calendar")}return this._settingsContainer}})