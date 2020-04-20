﻿(function(){function i(n){msWriteProfilerMark("Calendar:MonthWorker."+n+",StartTA,Calendar")}function r(n){msWriteProfilerMark("Calendar:MonthWorker."+n+",StopTA,Calendar")}function e(n){return n.getTime()===new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime()}function u(n,i){var r=t.getMonthsBetween(n.date,i);return r<0?i.getDate()-n.gridStart.getDate()+1:r>0?i.getDate()+n.numDays+n.gridStartOffset:i.getDate()+n.gridStartOffset}function o(t,i){return n._accOverflow(f.format(t),n._overflowEvents(i))}var t=Calendar.Helpers,f=new Jx.DTFormatter("longDate"),n=Calendar.Views.MonthWorker=function(i,r,u){this._router=i;this._scheduler=r;this._manager=u;this._requests={};this._updateEvents=this._updateEvents.bind(this);this._router.route("Month/getEvents",this.getEvents,this);this._router.route("Month/setVisible",this.setVisible,this);this._router.route("Month/cancel",this.cancel,this);t.ensureFormats();n._overflowEvents||(n._overflowEvents=Jx.res.getFormatFunction("OverflowEvents"),n._accOverflow=Jx.res.getFormatFunction("AccMonthOverflow"))};n.prototype.getEvents=function(n){var u=n.id,t=n.data;t.start=new Date(t.start);t.end=new Date(t.end);i("getEvents");t.collection=this._manager.getEvents(t.start,t.end);t.job=this._scheduler.schedule(this._processEvents,this,[u,t],t.isVisible);r("getEvents");this._requests[u]=t};n.prototype.setVisible=function(n){var i=n.id,t=this._requests[i];t&&(t.isVisible=n.data,this._scheduler.setVisible(t.job,n.data))};n.prototype.cancel=function(n){var u,t,f;i("cancel");u=n.id;t=this._requests[u];t&&(f=t.onCollectionChanged,f&&(t.collection.removeEventListener("collectionchanged",f),t.changeTimeout!==true&&clearTimeout(t.changeTimeout)),this._unhookEvents(u,t),t.collection.dispose(),this._scheduler.cancel(t.job),delete this._requests[n.id]);r("cancel")};n.prototype.dispose=function(){for(var n in this._requests)this.cancel({id:n});this._requests={};this._manager=null;this._scheduler=null;this._router=null};n.prototype._processEvents=function(n,u){var l,k,s,v,d;i("processEvents");var c=u.item,y=u.collection,p=[],w=[],b=[],a=[];for(l=0,k=y.count;l<k;l++)if(s=y.item(l),s!==null){p.push(s);var f={winrt:s},h=s.startDate,o=s.endDate;if(h>=u.end||o<u.start)continue;h<c.gridStart&&(h=c.gridStart,f.lastMonth=true);o>=c.gridEnd&&(o=new Date(c.gridEnd.getTime()-1));e(o)&&(v=new Date(o.getTime()-1),v>=h&&(o=v));f.startDate=h;f.endDate=o;f.start=h.getTime();f.end=o.getTime();f.isMultiDay=!t.isSameDate(h,o);f.color=t.processEventColor(s.color);f.isMultiDay?b.push(f):s.allDayEvent?w.push(f):a.push(f)}u.requiresSort&&(a.sort(t.orderEvents),u.requiresSort=false);d=b.concat(w).concat(a);u.events=p;u.job=this._scheduler.schedule(this._firstPass,this,[n,u,d],u.isVisible);r("processEvents")};n.prototype._firstPass=function(n,f,e){var w,ut,ft,p,k,et;i("firstPass");var h=f.item,a=new Array(h.numWeeks*7),d=h.eventsPerDay;for(w=0;w<e.length;w++)for(var s=e[w],v=s.winrt,o=u(h,s.startDate),g=u(h,s.endDate),nt=s.startDate.getDay(),y=nt>=t.firstDayOfWeek?nt-t.firstDayOfWeek:nt+7-t.firstDayOfWeek,tt=true;o<=g;){var it=1,rt=a[o-1],c=rt,l=0,b=d===0;if(c){for(ut=c.slots;ut[l];)l++;l<d?ut[l]=true:(c.overflow+=1,b=true)}else rt=c=a[o-1]={slots:b?[]:[true],overflow:b?1:0,layoutData:[]};for(o++,y++;o<=g&&y<7;)it++,c=a[o-1]||(a[o-1]={slots:[],overflow:0,layoutData:[]}),l<d?c.slots[l]=true:c.overflow+=1,o++,y++;ft=o>g;b||(p=new Date,p=new Date(p.getFullYear(),p.getMonth(),p.getDate()),k=t.getEventUiInfo(v,true),et={handle:k.handle,statusClass:t.busyStatusClasses[v.busyStatus],left:((y-it)*14.28).toFixed(2)+"%",bottom:"calc("+(h.numWeeks-Math.floor((o-2)/7)-1)*(100/h.numWeeks)+"% + "+((h.eventsPerDay-l-1)*h.eventHeight).toFixed(2)+"px)",color:s.color,width:(it*14.28).toFixed(2)+"%",hasTime:!v.allDayEvent&&tt&&!s.lastMonth,subject:k.subject,startTime:tt&&!v.allDayEvent?t.simpleTime.format(s.startDate):"",endTime:ft&&!v.allDayEvent?t.simpleTime.format(s.endDate):"",isMultiDay:s.isMultiDay,label:k.label},rt.layoutData.push(et));y=0;tt=false}f.job=this._scheduler.schedule(this._buildEventHtml,this,[n,f,e,a],f.isVisible);r("firstPass")};n.prototype._getEventHtml=function(t,i,r,f){var s="",a=new Date,nt=a>=t.date&&a<new Date(t.date.getFullYear(),t.date.getMonth()+1),tt=nt?u(t,a)-1:-1,h=r[f],v,k,c,e,y,d,g,p,l,w,b;if(h){for(v=h.layoutData,k=v.length,c=0;c<k;c++)e=v[c],e&&(y="event",e.isMultiDay&&(y+=" multiDay"),s+="<div id='"+e.handle+"'     class='"+y+"'     data-status='"+e.statusClass+"'     style='"+(this._isRtl?"right:":"left:")+e.left+";            bottom: "+e.bottom+";            width: "+e.width+";            height: "+String(t.eventHeight)+"px;            color: "+e.color+";'     role='button'     aria-label='"+Jx.escapeHtml(e.label)+"'     tabIndex='1'>",s+="  <div class='glyph' style='background-color:"+e.color+";'><div class='glyphInner'><\/div><\/div>",e.isMultiDay&&(s+="<div class='time' style='padding-top:"+t.eventTopMargin+"px;' aria-hidden='true'>"+Jx.escapeHtml(e.startTime)+"<\/div>"),s+="  <div class='subject' style='padding-top:"+t.eventTopMargin+"px;' aria-hidden='true'>"+Jx.escapeHtml(e.subject)+"<\/div>",e.isMultiDay?s+="<div class='time right' style='padding-top:"+t.eventTopMargin+"px;' aria-hidden='true'>"+Jx.escapeHtml(e.endTime)+"<\/div>":e.hasTime&&(s+="<div class='time right' style='padding-top:"+t.eventTopMargin+"px;' aria-hidden='true'>"+Jx.escapeHtml(e.startTime)+"<\/div>"),s+="  <div class='overlay'><\/div>",s+="<\/div>");if(d=Math.floor(f/7),g=f%7,h.overflow>0){for(p=0,l=0;l<h.slots.length;l++)h.slots[l]&&(p+=1);w=p+h.overflow;b=new Date(t.date);b.setDate(f-t.gridStartOffset+1);s+="<div id='"+String(f-t.gridStartOffset)+"'     class='"+(f===tt?"overflowToday'":"overflow'")+"     role='button'     aria-label='"+Jx.escapeHtml(o(b,w))+"'     style='"+(this._isRtl?"left":"right")+": calc("+((6-g)*14.28).toFixed(2)+"% + 2px);            height: "+String(t.gridHeight/t.numWeeks-t.eventsPerDay*t.eventHeight-3)+"px;            top: "+String(d*(100/t.numWeeks))+"%;'     tabIndex='1'><div class='overflowInner' aria-hidden='true'>"+Jx.escapeHtml(n._overflowEvents(w))+"<\/div><\/div>"}}return s};n.prototype._buildEventHtml=function(n,t,u,f){var o,e,s;for(i("buildEventHtml"),o="",e=0,s=f.length;e<s;e++)f[e]&&(o+=this._getEventHtml(t.item,u,f,e));t.job=this._scheduler.schedule(this._sendEvents,this,[n,t,o],t.isVisible);r("buildEventHtml")};n.prototype._sendEvents=function(n,t,u){i("sendEvents");var f;t.onCollectionChanged?(f="Month/eventsChanged",t.job=this._scheduler.schedule(this._hookEvents,this,[n,t],t.isVisible),t.collection.unlock()):(f="Month/getEvents",t.job=this._scheduler.schedule(this._hookCollection,this,[n,t],t.isVisible));this._router.postMessage({command:f,id:n,html:u});r("sendEvents")};n.prototype._hookCollection=function(n,t){i("hookCollection");t.onCollectionChanged=this._onCollectionChanged.bind(this,n,t);t.collection.addEventListener("collectionchanged",t.onCollectionChanged);t.collection.unlock();this._hookEvents(n,t);r("hookCollection")};n.prototype._hookEvents=function(n,t){i("hookEvents");t.onItemChanged=this._onItemChanged.bind(this,n,t);for(var u=0,f=t.events.length;u<f;u++)t.events[u].addEventListener("changed",t.onItemChanged);r("hookEvents")};n.prototype._unhookEvents=function(n,t){var f,e,u,o;if(i("unhookEvents"),f=t.onItemChanged,f){for(e=t.events,u=0,o=e.length;u<o;u++)e[u].removeEventListener("changed",f);t.onItemChanged=null}r("unhookEvents")};n.prototype._onCollectionChanged=function(n,t){if(i("_onCollectionChanged"),!t.changeTimeout){this._unhookEvents(n,t);this._scheduler.cancel(t.job);var u=Date.now()-(t.lastChanged?t.lastChanged:0);u<990?t.changeTimeout=setTimeout(this._updateEvents,1e3-u,n,t):(setImmediate(this._updateEvents,n,t),t.changeTimeout=true)}r("_onCollectionChanged")};n.prototype._updateEvents=function(n,t){this._requests[n]&&(i("_updateEvents"),t.changeTimeout=null,t.lastChanged=Date.now(),t.collection.lock(),this._processEvents(n,t),r("_updateEvents"))};n.prototype._onItemChanged=function(n,u,f){var o,e,s,c,h;for(i("_onItemChanged"),o=Array.prototype.slice.call(f.detail[0]),e=f.target,s=0,c=o.length;s<c;s++)if(h=o[s],h==="startDate"||h==="endDate"){u.requiresSort=true;this._onCollectionChanged(n,u,f);return}postMessage({command:"Month/eventChanged",id:n,properties:o,ev:{handle:e.handle,busyStatus:e.busyStatus,color:e.color,location:e.location,subject:e.subject||t.noSubject}});r("_onItemChanged")}})()