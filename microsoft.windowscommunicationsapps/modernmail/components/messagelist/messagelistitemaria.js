﻿Jx.delayDefine(Mail,"MessageListItemAria",function(){"use strict";function u(n,t,i){var r,u;return t&&(r=Mail.ViewCustomizations.getLabel(n,i),r)?Jx.res.loadCompoundString("mailMessageListConversationChildItemFolderNameAriaDesc",r):(u=n.isOutboundFolder?"mailMessageListItemAriaDescOutboundTimestamp":"mailMessageListItemAriaDescInboundTimestamp",Jx.res.loadCompoundString(u,n.bestDateShortString))}function f(n){var t=n.isOutboundFolder?"mailMessageListItemAriaDescOutboundRecipient":"mailMessageListItemAriaDescInboundRecipient";return Jx.res.loadCompoundString(t,n.slowHeaderRecipientsString)}function r(n,t){var i=t[n];return i?Jx.res.getString(i):""}var n=Microsoft.WindowsLive.Platform,i={},t;i[n.MailMessageImportance.low]="mailMessageListItemAriaDescLowPriority";i[n.MailMessageImportance.high]="mailMessageListItemAriaDescHighPriority";t={};t[n.MailMessageLastVerb.forward]="mailMessageListListViewAriaDescriptionForwarded";t[n.MailMessageLastVerb.replyToSender]="mailMessageListListViewAriaDescriptionReplied";t[n.MailMessageLastVerb.replyToAll]="mailMessageListListViewAriaDescriptionReplied";Mail.MessageListItemAria={getDescription:function(n,e,o){var d;Jx.mark("Mail.MessageListItemAria.getDescription,StartTA,Mail");var s,h=u(n,e,o),c=f(n),l=n.subject,a=r(n.importance,i),v=r(n.lastVerb,t),y=Jx.res.getString(n.read?"mailMessageListListViewAriaDescriptionRead":"mailMessageListListViewAriaDescriptionUnread"),p=n.flagged?Jx.res.getString("mailMessageListItemAriaDescFlagged"):"",w=n.hasOrdinaryAttachments?Jx.res.getString("mailMessageListItemAriaDescHasAttachment"):"",b=n.irmHasTemplate?Jx.res.getString("mailMessageListItemAriaDescIrm"):"",k=n.calendarInvite?Jx.res.getString("mailMessageListItemAriaDescCalendarItem"):"";return e?s=Jx.res.loadCompoundString("mailMessageListConversationChildItemAriaDescriptionTemplate",a,l,h,c,y,p,v,w,k,b):(d=n.totalCount,s=d<=1?Jx.res.loadCompoundString("mailMessageListMailItemAriaDescriptionTemplate",a,c,l,h,y,p,v,w,k,b):Jx.res.loadCompoundString("mailMessageListConversationHeaderAriaDescriptionTemplate",a,d,c,l,h,y,p,v,w,k,b)),Jx.mark("Mail.MessageListItemAria.getDescription,StopTA,Mail"),s}}})