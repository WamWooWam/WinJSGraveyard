﻿Jx.delayDefine(Calendar.Templates,"Agenda",function(){Calendar.Templates.Agenda={host:function(n){return'<div id="'+n.id+'" class="agendaview">'+n.background.html+'<div class="agendacontainer"><div class="herocontainer"><div class="date" role="button" tabindex="0"><\/div><div class="allday"><\/div><\/div><div class="timeline peekBarSpace"><\/div><\/div><\/div>'},backgroundContainer:function(n){return'<div id="'+n.id+'" class="backgroundcontainer"><progress class="backgroundprogress win-ring win-medium"><\/progress><\/div>'},background:function(){var n=document.createElement("div");return n.className="background",n.innerHTML='<div class="backgroundoverlay"><\/div>',n},item:function(n){var t=n.item,r=document.createElement("div"),i,e,f,h,c,y;if(r.className="event",i="",t.textContainer)r.className+=" textcontainer",i='<div class="info">'+t.infoHtml+"<\/div>";else if(t.allDayContainer){r.className+=" alldaycontainer";var l=t.items.filter(function(n){return!n.isPast}),o=l.length,s=n.maxAllDay,a=o<=s?s:s-1,v=o-a,u=[];for(i='<div class="alldayinfo">',e=0;e<o&&e<a;e++)f=l[e],u.push(f.label),i+='<div class="alldayevent" data-handle="'+f.handleHtml+'">',h=f.timeRange.startHtml,h&&(i+='<div class="starttime">'+h+"<\/div>"),i+='<div class="subject">'+f.subjectHtml+"<\/div>",c=f.timeRange.endHtml,c&&(i+='<div class="endtime">'+c+"<\/div>"),i+="<\/div>";v>0&&(u.push(t.allDayMoreLabel),i+='<div class="morealldayevents" role="listitem">'+Jx.escapeHtml(t.allDayMoreFormat.format(v))+"<\/div>");y=t.allDayLabelFormat.format(t.label,u[0]||"",u[1]||"",u[2]||"",u[3]||"",u[4]||"");r.setAttribute("aria-label",y)}else r.setAttribute("aria-label",t.label),r.setAttribute("data-handle",t.handle),r.setAttribute("data-status",t.busyStatusClass),i='<div class="glyph" style="background-color: '+t.colorHtml+'"><div class="glyphinner"><\/div><\/div><div class="eventinfo"><div class="subject" style="color: '+t.colorHtml+'"><div class="subjectinner">'+t.subjectHtml+'<\/div><\/div><div class="location">'+t.locationHtml+'<\/div><div class="timespan">'+t.timeRange.fullHtml,t.conflict&&(i+='<span class="conflict">↗↙<\/span>'),i+='<\/div><div class="herotext" style="color: '+t.colorHtml+'">'+t.heroTextHtml+"<\/div><\/div>";return r.innerHTML=i,r},groupHeader:function(n){var t=document.createElement("div");return t.className="agendaheader",t.setAttribute("data-key",n.key),t.textContent=n.data.text,t}}})