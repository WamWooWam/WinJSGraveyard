﻿Jx.delayDefine(Mail.Worker,"_Scrubber",function(){"use strict";function o(n){return n=n.toLowerCase(),e.some(function(t){return n.indexOf(t)===0})}function c(n){Jx.mark("Scrubber."+n)}function t(n){Jx.mark("Scrubber."+n+",StartTA,Scrubber")}function n(n){Jx.mark("Scrubber."+n+",StopTA,Scrubber")}function l(n){Jx.mark("Scrubber:"+n+",StartTM,Scrubber")}function a(n){Jx.mark("Scrubber:"+n+",StopTM,Scrubber")}var i=Microsoft.WindowsLive.Platform,h=i.MailBodyType,u=Jx.Bidi,f=Mail.Worker._Scrubber=function(r,f,e){l("scrub");t("ctor");this._message=f;c("objectId = "+f.objectId);this._onComplete=null;this._onCompleteContext=null;this._priority=Mail.Priority.workerMessageScrubber;this._scrubDraft=false;e&&(e.onComplete&&(this._onComplete=e.onComplete),e.onCompleteContext&&(this._onCompleteContext=e.onCompleteContext),e.priority&&(this._priority=e.priority),e.scrubDrafts&&(this._scrubDraft=true));this._done=false;var o=this._jobSet=Jx.scheduler.createJobSet();this._disposer=new Mail.Disposer(o);this._htmlBody=null;this._htmlBodyTruncated=null;this._allowExternalImages=f.allowExternalImages;this._scrubbedHTML=null;this._rawHTML=null;this._htmlBodyHash=null;this._document=null;this._rawHTMLParts=null;this._nextPart=0;this._hasExternalImages=false;this._hasExternalBackgrounds=false;this._hasCSSImages=false;this._hrefWorker=null;this._tabIndexWorker=null;this._titleWorker=null;this._elements=null;this._innerText="";this._readingDirection=u.Values.none;this._sanitizedBody=null;Jx.scheduler.addJob(o,this._priority,"Scrubber._setup",this._setup,this);n("ctor")},r,e,s;f.scrubSynchronously=function(n,t,r){var u=new f(n,t,r);return u.runSynchronous(),u};r=10240;e=["cid:","file:"];s=["./modernmail/resources/css/ReadingPaneBody.css"];f.prototype={dispose:function(){t("dispose");this._disposer.dispose();this._disposer=null;n("dispose")},getDocument:function(){var i,r;return t("getDocument"),i=this._document,i||(this._createDocument(),i=this._document,i.open(),r=this.getSanitizedBody(),r&&MSApp.execUnsafeLocalFunction(function(){i.write(r.body)}),i.close()),n("getDocument"),i},isSameHtmlBody:function(n){return this._htmlBodyHash===Mail.Validators.hashString(n.body)},runSynchronous:function(){this._jobSet.runSynchronous()},getSanitizedBody:function(){return this._sanitizedBody===null&&(this._sanitizedBody=this._message.getSanitizedBody()),this._sanitizedBody},_setup:function(){var i,r;if(t("_setup"),i=this._message,this.getSanitizedBody()){this._done=true;this._raiseCompleteEvent();n("_setup");return}if(!this._scrubDraft&&i.isDraft){this._done=true;i.setDraftSanitizedVersion();this._raiseCompleteEvent();n("_setup");return}if(r=this._htmlBody=i.getBodyByType(h.html),!r){this._done=true;i.setNoHTMLBody();this._raiseCompleteEvent();n("_setup");return}this._htmlBodyTruncated=r.truncated;Jx.scheduler.addJob(this._jobSet,this._priority,"Scrubber._scrub",this._scrub,this);n("_setup")},_scrub:function(){t("_scrub");this._addJob("Scrubber._createDocument",this._createDocument);this._addJob("Scrubber._toStaticHTML",this._toStaticHTML);this._addJob("Scrubber._breakHTML",this._breakHTML);this._addJob("Scrubber._writeHTML",this._writeHTML);this._addJob("Scrubber._enablePhoneDetection",this._enablePhoneDetection);this._addJob("Scrubber._bodyDirection",this._bodyDirection);this._addJob("Scrubber._getInnerText",this._getInnerText);this._addJob("Scrubber._getReadingDirection",this._getReadingDirection);this._addJob("Scrubber._blockImages",this.scheduleElements("img",this._blockImages));this._addJob("Scrubber._blockBackgrounds",this.scheduleElements("[background]",this._blockBackgrounds));this._addJob("Scrubber._blockInlineImageStyles",this.scheduleElements("[style]",this._blockInlineImageStyles));this._addJob("Scrubber._blockCSSImages",this.scheduleElements("style",this._blockCSSImages));this._addJob("Scrubber._removeBadTags",this._removeBadTags);this._addJob("Scrubber._fixHRs",this._fixHRs);this._addJob("Scrubber._addLocalCSS",this._addLocalCSS);this._addJob("Scrubber._fixHREFs",this._fixHREFs);this._addJob("Scrubber._fixTabIndexes",this._fixTabIndexes);this._addJob("Scrubber._fixTitles",this._fixTitles);this._addJob("Scrubber._serializeBody",this._serializeBody);this._addJob("Scrubber._saveBody",this._saveBody);this._addJob("Scrubber._raiseCompleteEvent",this._raiseCompleteEvent);n("_scrub")},_addJob:function(n,t){Jx.scheduler.addJob(this._jobSet,this._priority,n,function(){try{return t.call(this)}catch(i){Jx.log.exception("ScrubHelper - unable to complete "+n,i)}return this._jobSet.dispose(),this._done=true,this._message.setNoHTMLBody(),this._raiseCompleteEvent(),Jx.Scheduler.repeat(false)},this)},_raiseCompleteEvent:function(){t("_raiseCompleteEvent");a("scrub");this._onComplete&&this._onComplete.call(this._onCompleteContext);n("_raiseCompleteEvent")},_createDocument:function(){t("_createDocument");this._document=document.implementation.createHTMLDocument("");n("_createDocument")},_toStaticHTML:function(){t("_toStaticHTML");var r=this._htmlBody.body;this._htmlBodyHash=Mail.Validators.hashString(r);try{this._rawHTML=window.toStaticHTML(r)}catch(u){Jx.log.exception("toStaticHTML threw",u);this._rawHTML=""}n("_toStaticHTML")},_breakHTML:function(){var o,u;t("_breakHTML");for(var f=this._rawHTML,e=f.length,s=this._rawHTMLParts=[],i=0;i<e;)o=e-i,u=Math.min(o,r),s.push(f.substr(i,u)),i+=u;this._rawHTMLParts.length===0&&(this._rawHTMLParts=[""]);n("_breakHTML")},_writeHTML:function(){var r,u,i,f;return t("_writeHTML"),r=this._rawHTMLParts,u=this._nextPart++,i=this._document,u===0&&i.open(),MSApp.execUnsafeLocalFunction(function(){i.write(r[u])}),f=this._nextPart===r.length,f&&i.close(),n("_writeHTML"),Jx.Scheduler.repeat(!f)},_enablePhoneDetection:function(){t("_enablePhoneDetection");this._document.documentElement.setAttribute("x-ms-format-detection","phone");n("_enablePhoneDetection")},_bodyDirection:function(){var r,f,i;if(t("_bodyDirection"),r=this._document.body,f=u.getDocumentDirection(this._document),!f){for(i=r.firstChild;i&&!Jx.isHTMLElement(i);)i=i.nextSibling;i&&i.getAttribute("data-externalstyle")&&(r.style.direction=i.dir)}n("_bodyDirection")},_getInnerText:function(){t("_getInnerText");this._innerText=this._document.body.innerText;n("_getInnerText")},_getReadingDirection:function(){t("_getReadingDirection");this._readingDirection=u.getTextDirection(this._innerText);n("_getReadingDirection")},scheduleElements:function(n,t){var i=null,r=0;return function(){return i||(i=this._document.querySelectorAll(n)),r<i.length&&(t.call(this,i[r]),r++),Jx.Scheduler.repeat(r!==i.length)}},_blockImages:function(n){var i,t;if(i=n.src,Jx.isNonEmptyString(i))n.setAttribute("data-ms-imgsrc",n.getAttribute("src")),o(i)||(n.src="",this._hasExternalImages=true);else for(t=n.attributes.length-1;t>=0;t--)n.removeAttribute(n.attributes[t].name)},_blockBackgrounds:function(n){var t=n.background;Jx.isNonEmptyString(t)&&(n.setAttribute("data-ms-background",n.getAttribute("background")),o(t)||(n.background="",this._hasExternalBackgrounds=true))},_scrubStyleProperties:function(n){var i,f,t,r,u;for(i=false,f=this._allowExternalImages,t=n.length-1;t>=0;--t)r=n[t],u=n[r],Jx.isNonEmptyString(u)&&u.indexOf("url(")>=0&&(this._hasCSSImages=true,f||(n[r]="",i=true));return i},_blockInlineImageStyles:function(n){this._scrubStyleProperties(n.style)},_blockCSSImages:function(n){var i,o,t,r,s;var u=false,f=n.sheet,e=f.cssRules;for(i=0,o=e.length;i<o;++i)for(t=e[i],t=t.cssRules?t.cssRules:[t],r=0,s=t.length;r<s;++r)u|=this._scrubStyleProperties(t[r].style);u&&(n.innerText=f.cssText)},_removeBadTags:function(){t("_removeBadTags");ModernCanvas.runWorkersSynchronously([new ModernCanvas.BadElementHtmlWorker(this._document)]);n("_removeBadTags")},_fixHRs:function(){var r,i,u;for(t("_fixHRs"),r=this._document.querySelectorAll('hr[width="100%"]'),i=0,u=r.length;i<u;i++)r[i].width="99%";n("_fixHRs")},_addLocalCSS:function(){t("_addLocalCSS");var i=this._document,r=i.head;s.forEach(function(n){var t=i.createElement("link");t.rel="Stylesheet";t.href=n;r.appendChild(t)},this);n("_addLocalCSS")},_fixHREFs:function(){t("_fixHREFs");var i=this._hrefWorker;return i||(i=this._hrefWorker=new ModernCanvas.HrefHtmlWorker(this._document.documentElement)),n("_fixHREFs"),i.run()},_fixTabIndexes:function(){t("_fixTabIndexes");var i=this._tabIndexWorker;return i||(i=this._tabIndexWorker=new ModernCanvas.TabIndexHtmlWorker(this._document.documentElement)),n("_fixTabIndexes"),i.run()},_fixTitles:function(){t("_fixTitles");var i=this._titleWorker;return i||(i=this._titleWorker=new ModernCanvas.TitleAttributeHtmlWorker(this._document.documentElement)),n("_fixTitles"),i.run()},_serializeBody:function(){t("_serializeBody");this._scrubbedHTML=this._document.documentElement.outerHTML;n("_serializeBody")},_saveBody:function(){var i,r;t("_saveBody");this._done=true;i=this._message;r={hasExternalImages:this._hasExternalImages,hasExternalBackgrounds:this._hasExternalBackgrounds,hasCSSImages:this._hasCSSImages,allowedCSSImages:this._hasCSSImages?this._allowExternalImages:false,htmlBodyHash:this._htmlBodyHash,readingDirection:this._readingDirection};!this._scrubDraft&&i.isDraft?i.setDraftSanitizedVersion():i.addSanitizedBody(this._scrubbedHTML,r,this._htmlBodyTruncated);n("_saveBody")}}})