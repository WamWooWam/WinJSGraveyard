﻿Jx.delayDefine(Calendar,["ProviderModel","ProviderAction","ProviderHresult"],function(){function i(n){Jx.mark("Calendar.ProviderModel."+n+",StartTA,Calendar,App")}function r(n){Jx.mark("Calendar.ProviderModel."+n+",StopTA,Calendar,App")}function t(n){Jx.mark("Calendar.ProviderModel."+n+",Info,Calendar,App")}var n=Calendar.ProviderAction={add:"add",closeError:"closeError",closeSuccess:"closeSuccess",remove:"remove",replace:"replace",signIn:"signIn"},o=Calendar.ProviderHresult={generalFailure:-2147467259,organizerChange:-2057961215},u,f,e=Calendar.Helpers,s=Calendar.ProviderModel=function(){i("constructor");u=Calendar.Views.CalendarSelector;this._action=null;this._calendarEventMap={};this._calendars=[];this._event=null;this._errorText=null;this._errorDetails=null;this._errorHresult=null;this._operation=null;this._platform=null;this._reportInformation=null;this._shouldRecordBici=false;this._providerConverter=new Calendar.ProviderConverter;this._doReport=this._doReport.bind(this);r("constructor")};s.prototype={initialize:function(n,t,i){var r,u,f;this._platform=t;r=i;u=Windows.ApplicationModel.Appointments.AppointmentsProvider.AppointmentsProviderLaunchActionVerbs;switch(n.verb){case u.addAppointment:this._operation=n.addAppointmentOperation;r||(this._shouldRecordBici=true,this._prepareAddAction(true));break;case u.removeAppointment:this._operation=n.removeAppointmentOperation;r||this._prepareRemoveAction();break;case u.replaceAppointment:this._operation=n.replaceAppointmentOperation;r||this._prepareReplaceAction();break;default:f="Calendar.ProviderModel: Unsupported action: "+n.verb;Jx.log.error(f);throw new Error(f)}r&&this.setPlatformError(i)},willEmailAttendees:function(t){var i=false,r;return t&&t.isOrganizer&&(r=t.getAttendees(),i=r.count>0,r.dispose()),i&&this._action===n.remove?!this.eventIsInPast(t):i},eventIsInPast:function(n){var t,i=false;return f=f||Microsoft.WindowsLive.Platform.Calendar.EventType,n.recurring&&n.eventType===f.series?(t=n.recurrence,+t.until<Date.now()&&+t.until>=-116417952e5&&(i=true)):i=+n.endDate<Date.now(),i},getAction:function(){return this._action},getCalendars:function(){return this._calendars},getErrorText:function(){return this._errorText},getEvent:function(){return this._event},getOriginalEvent:function(n){Jx.isNumber(n)||(n=this._calendars[0].calendar.id);return this._calendarEventMap[n]},setError:function(t,i,r){this._errorHresult=r;this._errorText=t;this._errorDetails=i;this._action=n.closeError;Jx.log.error(i)},setPlatformError:function(t){var i=Microsoft.WindowsLive.Platform.Result,u=[i.accountLocked,i.accountSuspendedAbuse,i.accountSuspendedCompromise,i.accountUpdateRequired,i.actionRequired,i.authRequestThrottled,i.defaultAccountDoesNotExist,i.emailVerificationRequired,i.forceSignIn,i.parentalConsentRequired,i.passwordDoesNotExist,i.passwordLogonFailure,i.passwordUpdateRequired,-2147023665,-2146893042].indexOf(t)!==-1,r;u?(r=Jx.res.getString("ProviderErrorSignIn"),this.setError(r,r,t),this._action=n.signIn):(r=Jx.res.getString("ProviderStartErrorGeneric"),this.setError(r,r,t))},reportWithoutSave:function(){if(this._action===n.closeSuccess)t("reportWithoutSave.closeSuccess"),this._dismissUI();else if(this._action===n.signIn)t("reportWithoutSave.signIn"),this._dismissUI();else{var i=this._errorDetails;this._errorHresult&&(i+=" "+this._formatHresult(this._errorHresult));t("reportWithoutSave.closeError");this._dismissUI(i)}},saveEvent:function(u){var e,f,l,h,c;i("saveEvent");e=false;try{f=this._providerConverter.updateBeforeSave(this._event,u,this._calendarEventMap[u.id]);l=f.validate();l===Microsoft.WindowsLive.Platform.Calendar.Status.errorEventExceptionDeleteRequired&&f.deleteExceptions();f.commit();e=true}catch(s){Jx.log.exception(s,"Error saving event");h=Jx.res.getString("ProviderErrorGeneric");c=h;s.number===o.organizerChange&&(c=Jx.res.getString("ProviderErrorOrganizer"));this.setError(h,c,s.number)}if(e){this._logEventData(f);try{this.willEmailAttendees(f)&&this._sendMail(f)}catch(a){Jx.log.exception(a,"Error sending update email")}t("saveEvent.success");this._dismissUI(f.uid)}return r("saveEvent"),e},deleteEvent:function(i){var r,u,f,o;r=this.getOriginalEvent(i.id);u=false;try{this.willEmailAttendees(r)&&(r.meetingStatus=Microsoft.WindowsLive.Platform.Calendar.MeetingStatus.meetingCanceled,r.subject=Jx.res.getString("EventCancelledPrefix")+r.subject,this._sendMail(r));r.deleteObject();u=true}catch(e){Jx.log.exception(e,"Error deleting event");f=Jx.res.getString("ProviderErrorDeleteReadonly");o=f;this.setError(f,o,e.number)}return u&&(t("deleteEvent.success"),this._dismissUI()),u},dispose:function(n){this._platform=null;this._calendarEventMap=null;n||(this._doReport=null,this._operation=null)},_dismissUI:function(n){this._reportInformation=n;this._operation.dismissUI();setTimeout(this._doReport,2e3);Jx.EventManager.fireDirect(null,"dismissUI")},_doReport:function(){i("doReport");this._action===n.closeError?(t("doReport.closeError"),this._operation.reportError(this._reportInformation)):this._action===n.signIn?(t("doReport.signIn"),this._operation.reportCanceled()):this._reportInformation?(t("doReport.reportCompleted.information"),this._operation.reportCompleted(this._reportInformation)):(t("doReport.reportSuccess.noInformation"),this._operation.reportCompleted());r("doReport")},_sendMail:function(n){for(var r=n.getAttendees(),f="",o=r.count,s=e.formatEmailAddress,u,i,t=0;t<o;t++)u=r.item(t),f+=s(u.name,u.email)+"; ";r.dispose();i=this._platform.invitesManager.mailFromEvent(n,n.calendar.account);i.to=f;i.moveToOutbox();i.commit()},_loadEvents:function(n,t){var s,r,f,h,e,i,o;this._calendars=[];s=this._platform.calendarManager;r=s.getEventsFromUID(n);try{for(f=0,h=r.count;f<h;f++){if(e=r.item(f),i=null,t)if(e.recurring)try{i=e.getOccurrenceByExceptionStart(t)}catch(c){Jx.log.exception("Error loading occurrence - may be expected if instanceStartDate was incorrect",c);i=null}else i=null;else i=e;i&&(o=i.calendar,this._calendarEventMap[o.id]=i,this._calendars.push(u.createCalendarOption(o)))}}finally{r.dispose()}return this._calendars.length>0},_prepareAddAction:function(t){var i=this._providerConverter.convertToEvent(this._operation.appointmentInformation,this._platform.calendarManager.defaultCalendar,t);this._calendars=u.getCalendarsForSelector(this._platform);Jx.isNonEmptyString(i.errorText)?this.setError(i.errorText,i.errorDetails,i.errorHresult):(this._event=i.event,this._action=n.add)},_prepareReplaceAction:function(){var r,i,t;r=this._loadEvents(this._operation.appointmentId,this._operation.instanceStartDate);i=Jx.isDate(this._operation.instanceStartDate);r?(t=this._providerConverter.convertToEvent(this._operation.appointmentInformation,this._platform.calendarManager.defaultCalendar,!i),Jx.isNonEmptyString(t.errorText)?this.setError(t.errorText,t.errorDetails,t.errorHresult):(this._event=t.event,this._action=n.replace)):this._prepareAddAction(!i)},_prepareRemoveAction:function(){var t=this._loadEvents(this._operation.appointmentId,this._operation.instanceStartDate);t?this._action=n.remove:(this._errorText=Jx.res.getString("ProviderErrorDeleteNotFound"),this._action=n.closeSuccess)},_logEventData:function(i){var f=(new Jx.AppData).localSettings().container("Calendar");if(f.set("lastProviderUid",i.uid),this._action===n.add&&this._shouldRecordBici){var o=i.recurring?1:0,s=i.location.length>0?1:0,h=i.data.length>0?1:0,c=this._providerConverter.getNumAttendees(),r=e.getDaysUntilStart(i),u;u=r<0||i.startDate<e.getNowDate()?0:r+1;Jx.bici.addToStream(Microsoft.WindowsLive.Instrumentation.Ids.Calendar.calendarProviderCreateEvent,o,s,h,u,c)}},_formatHresult:function(n){var t,i;return Jx.isValidNumber(n)?(t=n<0?4294967295+n+1:n,i=("0000000"+t.toString(16)).substr(-8),"0x"+i.toUpperCase()):""}}})