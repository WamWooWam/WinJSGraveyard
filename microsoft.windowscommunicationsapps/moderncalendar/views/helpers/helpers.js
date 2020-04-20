﻿(function(){function t(n){var i=n.target;i.hideFocusOnNext?($(i).attr("hidefocus","true"),i.hideFocusOnNext=false):($(i).removeAttr("hidefocus"),i.removeEventListener("onfocus",t,false))}var n=Calendar.Helpers;n._isVisible=false;n.isPopupVisible=function(){return n._isVisible};n.showPopup=function(t,i,r){r.addEventListener("click",function(n){t&&n.target instanceof HTMLButtonElement&&t.hide()},false);t.addEventListener("beforeshow",function(){n._isVisible=true},false);t.addEventListener("afterhide",function(){r.outerHTML="";t=r=null;n._isVisible=false},false);document.body.appendChild(r);t.show(i)};n.showFlyout=function(t){for(var f=t.commands,h=f.length,r=document.createElement("div"),e,o,s,u='<div><div class="cal-flyout-msg">'+Jx.escapeHtml(t.message)+'<\/div><div class="cal-flyout-buttons">',i=0;i<h;i++)u+='<button class="cal-flyout-button" tabindex="'+(i+1)+'">'+Jx.escapeHtml(f[i].label)+"<\/button>";for(u+="<\/div><\/div>",r.setAttribute("aria-label",t.message),r.innerHTML=u,e=r.querySelectorAll("button"),o=e.length,i=0;i<o;i++)e[i].addEventListener("click",f[i].onclick,false);s=new WinJS.UI.Flyout(r);n.showPopup(s,t.anchor,r)};n.showCantOpenEvent=function(t){n.showFlyout({anchor:t,message:Jx.res.getString("CantOpenEvent"),commands:[]})};n.showMenu=function(t){var i=document.createElement("div"),r;i.setAttribute("aria-label",t.message);r=new WinJS.UI.Menu(i,{commands:t.commands});n.showPopup(r,t.anchor,i)};n.launchMail=function(t,i){var r=i.handle,u="ms-mail:?action=calendar&calendaraction="+encodeURIComponent(t)+"&eventhandle="+r;n._launchUriAsync(new Windows.Foundation.Uri(u))};n._launchUriAsync=function(n){return Windows.System.Launcher.launchUriAsync(n)};n.getHoursHtml=function(){for(var f=Windows.Globalization,e=new Jx.DTFormatter("shortTime"),o=f.ClockIdentifiers.twelveHour,r="",s=e.clock===o,i,t=0,u=24;t<u;t++)s?(i=t%12,i===0&&(i=Jx.escapeHtml(n.simpleTime.format(new Date(2e3,0,1,t))))):i=t,r+="<div class='hour'><div class='trim'>"+i+"<\/div><\/div>";return r};n.getIdealScrollTop=function(t,i,r){var f=t.startDate,e=t.endDate,u=i.scrollHeight*(f.getHours()+f.getMinutes()/60)/24,o=i.scrollHeight*(e.getHours()+e.getMinutes()/60)/24;return u<=r?r=u:n.isSameDate(f,e)?o>r+i.offsetHeight&&(r=Math.min(u,o-i.offsetHeight)):r=u,r};n.editEvent=function(t,i,r){var f,e,u;f={};t.fire("getPlatform",f);e=f.platform.calendarManager;u=e.getEventFromHandle(i);u?!u.recurring||u.calendar.readOnly?t.fire("editEvent",{event:u}):n.showFlyout({anchor:r,message:Jx.res.getString("EventRecurringChoice"),commands:[{label:Jx.res.getString("EventRecurringChangeOne"),onclick:function(){u=e.getEventFromHandle(i);u?t.fire("editEvent",{event:u}):n.showCantOpenEvent(r)}},{label:Jx.res.getString("EventRecurringChangeAll"),onclick:function(){try{u=u.getSeries()}catch(i){u=null}u?t.fire("editEvent",{event:u}):n.showCantOpenEvent(r)}}]}):n.showCantOpenEvent(r)};n.hideFocusRectangleOnNextFocusOnly=function(n){n&&!n.hideFocusOnNext&&(n.hideFocusOnNext=true,n.addEventListener("onfocus",t,false))};var i=new Array(7),r=new Array(7),u=function(){for(var r=new Jx.DTFormatter("{dayofweek.full}"),t,n=0;n<7;n++)t=new Date(2011,8,18+n),i[n]=r.format(t);u=Jx.fnEmpty},f=function(){for(var i=new Jx.DTFormatter("{dayofweek.abbreviated(3)}"),t,n=0;n<7;n++)t=new Date(2011,8,18+n),r[n]=i.format(t);f=Jx.fnEmpty};n.getDay=function(n){return u(),i[n]};n.getShortDay=function(n){return f(),r[n]};n.formatEmailAddress=function(n,t){return n===t?t:'"'+n.replace(/\"/g,'\\"')+'" <'+t+">"}})()