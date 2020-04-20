﻿Share.TargetRoot=function(n){if(this.constructor!==Share.TargetRoot)throw new Error("Share.TargetRoot is a constructor; it must be called using new");this.initComponent();this._data=new Share.MailData(n)};Share.TargetRoot.prototype.setPlatform=function(n){this._platform=n;this._checkStartupState();this._startupError===Share.MailConstants.StartupError.none?(this._data.platform=this._platform,this._beginLoadData(),this._createChildren()):(Jx.log.verbose("ShareTarget skipping data load due to startup error"),this._dataLoadComplete())};Jx.augment(Share.TargetRoot,Jx.Component.prototype);Share.TargetRoot.prototype.activateUI=function(){if(!this._uiInitialized&&(Jx.log.verbose("Share.TargetRoot.activateUI"),this._uiInitialized=true,Jx.Component.activateUI.call(this),Jx.res.processAll(document.getElementById("shareFlyout")),this._startupError===Share.MailConstants.StartupError.none)){var n=Share.TargetRoot.prototype;this._keyboardShow=n._keyboardShow.bind(this);this._keyboardHide=n._keyboardHide.bind(this);this._scrollIntoView=n._scrollIntoView.bind(this);this._inputPane=Windows.UI.ViewManagement.InputPane.getForCurrentView();this._inputPane.addEventListener("showing",this._keyboardShow);this._inputPane.addEventListener("hiding",this._keyboardHide);this._address.setLabelledBy("shareToLabel");this._address.setAriaFlow("shareToLabel","shareSubject");this._attachDocumentListeners()}};Share.TargetRoot.prototype.animateUI=function(){var n=document.getElementById("shareFlyout"),t,i;n.style.display="-ms-grid";t=WinJS.UI.Animation.enterPage(n);i=this._renderDataArea.bind(this);t.done(function(){setImmediate(i)})};Share.TargetRoot.prototype._beginLoadData=function(){this._waitForDataTimeout=setTimeout(this._dataTimeout.bind(this),Share.MailConstants.waitForRender);this._dataLoadPromise=this._data.loadDataAsync(this._handledShareTypes);var n=this._endDataLoad.bind(this),t=this._endDataLoadError.bind(this);this._dataLoadPromise.done(function(t){setImmediate(n,t)},function(n){setImmediate(t,n)})};Share.TargetRoot.prototype._shutdownAndRemoveChild=function(n){n.deactivateUI();n.shutdownComponent();this.removeChild(n)};Share.TargetRoot.prototype._renderDataArea=function(){var n,t;this.isShutdown()||(this._startupError===Share.MailConstants.StartupError.none&&(this._prefillRecipientFromQuicklink(),n=this,setImmediate(function(){n._address.focusInput()}),this._dataReady?(Jx.log.verbose("Share.TargetRoot: Share data is ready upon initial page animation complete"),this._startRenderData(true)):(Jx.log.verbose("Share.TargetRoot: Share data is not ready upon initial page animation complete - rendering loading UI"),t=document.getElementById("shareContentArea"),t.style.display="-ms-grid",t.style.opacity="0",WinJS.UI.Animation.fadeIn(t),setTimeout(function(){n.isShutdown()||(n._initialUIReady=true,Jx.log.verbose("Share.TargetRoot: Min time for loading UX expired"),n._dataRenderReady()&&(Jx.log.verbose("Share.TargetRoot: Rendering data immediately after loading timer since data is ready"),n._startRenderData(false)))},1e3))),Share.mark("PageLoad",Share.LogEvent.end))};Share.TargetRoot.prototype.shutdownComponent=function(){Jx.Component.shutdownComponent.call(this);this._deactivateTimeout();this._inputPane&&(this._inputPane.removeEventListener("showing",this._keyboardShow),this._inputPane.removeEventListener("hiding",this._keyboardHide),this._inputPane=null,this._keyboardShow=null,this._keyboardHide=null,this._scrollIntoView=null);try{this._dataLoadPromise&&(this._dataLoadPromise.cancel(),this._dataLoadPromise=null);this._canvas&&(this._canvas.dispose(),this._canvas=null)}catch(n){Jx.log.exception("Error during shareTarget cleanup",n)}if(this._platform){try{this._platform.dispose()}catch(n){Jx.log.exception("Error disposing platform",n)}this._platform=null}if(window.Mail)try{Mail.Globals.appSettings.dispose()}catch(n){Jx.log.exception("Error disposing platform",n)}};Share.TargetRoot.prototype.getUI=function(n){if(Jx.log.verbose("Share.TargetRoot.getUI"),this._checkStartupState(),this._startupError===Share.MailConstants.StartupError.none)n.html='<div id="shareFlyout"><div class="share-from">'+Jx.getUI(this._fromCtrl).html+'<\/div><div class="share-buttonBox">'+Jx.getUI(this._shareButton).html+'<\/div><div id="shareScrollArea" role="group"><div id="shareToArea"><div id="shareAddressError"><\/div><div class="share-label"><label id="shareToLabel" data-win-res="innerText:/sharetargetstrings/toLabel"><\/label><\/div><div id="shareAddressWell">'+Jx.getUI(this._address).html+'<\/div><\/div><div id="shareContentArea"><div class="share-dataLoad"><progress class="win-ring"><\/progress><span data-win-res="innerText:/sharetargetstrings/dataLoading"><\/span><\/div><\/div><\/div><\/div>';else if(this._startupError===Share.MailConstants.StartupError.mailNotSetup)n.html='<div id="shareFlyout" class="share-errorContainer"><div class="share-error-title share-error1" data-win-res="innerText:/sharetargetstrings/errorTitle"><\/div><div class="share-error share-error2" data-win-res="innerText:/sharetargetstrings/errorText"><\/div><\/div>';else{var t="shareDataErrorGeneric";this._startupError===Share.MailConstants.StartupError.needsInternet&&(t="networkErrorText");n.html='<div id="shareFlyout" class="share-errorContainer"><div class="share-error share-error1" data-win-res="innerText:/sharetargetstrings/'+t+'"><\/div><\/div>'}};Share.TargetRoot.prototype.shareClose=function(){!this._shareStarted&&Boolean(this._data)&&Boolean(this._data.mailMessage)&&this._data.mailMessage.canDelete&&(Jx.log.verbose("Attempting to delete mail message on close"),this._data.mailMessage.deleteObject());this._address&&this._address.cancelPendingSearches()};Share.TargetRoot.prototype._checkStartupState=function(){var i,n,t,r,u;if(this._startupError===Share.MailConstants.StartupError.none)if(Boolean(this._platform))try{n=Microsoft.WindowsLive.Platform;t=this._platform.accountManager.defaultAccount;i=this._platform.accountManager.getConnectedAccountsByScenario(n.ApplicationScenario.mail,n.ConnectedFilter.normal,n.AccountSort.rank);i.count>0?this._startupError=Share.MailConstants.StartupError.none:(r=Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile(),Boolean(t)&&t.mailScenarioState===n.ScenarioState.unknown&&(!Boolean(r)||r.getNetworkConnectivityLevel()!==Windows.Networking.Connectivity.NetworkConnectivityLevel.internetAccess)?this._startupError=Share.MailConstants.StartupError.needsInternet:(u=Boolean(t)?t.mailScenarioState.toString():"no defaultAccount",Jx.log.info("mailScenarioState is not connected: "+u),this._startupError=Share.MailConstants.StartupError.mailNotSetup))}catch(f){this._startupError=Share.MailConstants.StartupError.genericError;Jx.fault("ShareToMail.ShareTargetRoot.js","AccountException",f)}finally{i&&i.dispose()}else Jx.log.error("ShareTarget: unable to run shareTarget due to lack of platform"),this._startupError=Share.MailConstants.StartupError.genericError};Share.TargetRoot.prototype._endDataLoadError=function(n){this.isShutdown()||(this._data.errorCategory===Share.Constants.DataError.none&&(this._data.recordError("Error loading data",Share.Constants.DataError.internalError,n),Jx.fault("ShareToMail.ShareTargetRoot.js","DataLoadError",n)),this._endDataLoad())};Share.TargetRoot.prototype._endDataLoad=function(){this.isShutdown()||(this._dataLoadPromise=null,Jx.log.verbose("Data load complete."),this._dataLoadComplete(),this._dataRenderReady()&&(Jx.log.verbose("Starting to render data after data load complete"),this._startRenderData(false)))};Share.TargetRoot.prototype._dataLoadComplete=function(){this._dataReady||(this._dataReady=true,this._dataLoadPromise&&(this._dataLoadPromise.cancel(),this._dataLoadPromise=null),this._deactivateTimeout(),this._startupError===Share.MailConstants.StartupError.none&&this._createDependentChildren())};Share.TargetRoot.prototype._prefillRecipientFromQuicklink=function(){!Jx.isNullOrUndefined(this._data.shareOperation)&&Jx.isNonEmptyString(this._data.shareOperation.quickLinkId)&&(this._address.addRecipientsByString(this._data.shareOperation.quickLinkId),this._address.setAutoSuggestOnFocus(false))};Share.TargetRoot.prototype._deactivateTimeout=function(){Jx.isNumber(this._waitForDataTimeout)&&(clearTimeout(this._waitForDataTimeout),this._waitForDataTimeout=null)};Share.TargetRoot.prototype._createChildren=function(){if(Jx.log.verbose("Creating ShareButton"),this._shareButton=new Share.ShareButton,this._shareButton.addListener("share",this._shareClick,this),Jx.log.verbose("Creating address well"),this._address=new AddressWell.Controller("shareTo",null,this._platform,true,"",null,false),this._address.setScrollsIntoView(false),Jx.log.verbose("Creating quick link data object"),this._quickLinkData=new Share.QuickLinkData(this._platform),Jx.log.verbose("Creating FromControl"),this._fromCtrl=new FromControl.FromControl(this._platform.accountManager,this._platform.peopleManager),!Jx.isNullOrUndefined(this._data.shareOperation)&&Jx.isNonEmptyString(this._data.shareOperation.quickLinkId)){var n=this._quickLinkData.getAssociatedFromAccount(this._data.shareOperation.quickLinkId);Jx.isNullOrUndefined(n)?this._prefillLastUsedFromAccount():this._fromCtrl.select(n.objectId,n.preferredSendAsAddress)}else this._prefillLastUsedFromAccount();this._address.setContextualAccount(this._fromCtrl.selectedAccount);Jx.log.verbose("Appending controls");this.append(this._shareButton,this._fromCtrl,this._address)};Share.TargetRoot.prototype._prefillLastUsedFromAccount=function(){if(Jx.isNonEmptyString(this._lastFromAccountId)){var n=this._platform.accountManager.loadAccount(this._lastFromAccountId);Jx.isNullOrUndefined(n)||this._fromCtrl.select(this._lastFromAccountId,n.preferredSendAsAddress)}};Share.TargetRoot.prototype._createDependentChildren=function(){if(Jx.isNullOrUndefined(this._data.mailMessage)&&this._createMailMessage(),this._data.containsShareType(Windows.ApplicationModel.DataTransfer.StandardDataFormats.storageItems)||this._data.containsShareType(Windows.ApplicationModel.DataTransfer.StandardDataFormats.bitmap)?(this._data.mailMessage.commit(),this._attachmentWrapper=new Share.AttachmentWrapper(this._data.storageItems,this._platform.mailManager,this._data.mailMessage),Jx.EventManager.addListener(null,"attachcomplete",this._uploadComplete,this),this.append(this._attachmentWrapper)):(Jx.log.verbose("No files - upload complete."),this._uploadCompleted=true),this._data.containsShareType(Windows.ApplicationModel.DataTransfer.StandardDataFormats.bitmap)){var n=this,t=null;this._data.bitmap.openReadAsync().then(function(i){return t=i,ModernCanvas.Mail.createAttachmentAsync(n._data.mailMessage,Microsoft.WindowsLive.Platform.AttachmentUIType.ordinary,t,"image/bmp",Jx.res.getString(Share.MailConstants.stringsPrefix+"bitmapFileName"))}).done(function(){Jx.dispose(t);n._bitmapAttachedCallback()},n._bitmapAttachErrorCallback.bind(n))}else Jx.log.verbose("No bitmap."),this._bitmapAttached=true};Share.TargetRoot.prototype._bitmapAttachErrorCallback=function(n){this._data.recordError("Unable to attach bitmap",Share.Constants.DataError.internalError,n);this._bitmapAttachedCallback()};Share.TargetRoot.prototype._bitmapAttachedCallback=function(){this._bitmapAttached=true;this._readyForSend()&&this._beginShare()};Share.TargetRoot.prototype._createMailMessage=function(){var t=this._platform.accountManager.defaultAccount,i=this._platform.mailManager,n=i.createMessage(t),r=n.createBody();r.type=Microsoft.WindowsLive.Platform.MailBodyType.html;this._data.mailMessage=n};Share.TargetRoot.prototype._callValidate=function(){this._attachmentWrapper.attachmentWell.validate()||(Jx.log.info("Attachment errors after send has been hit!"),this._data.mailMessage.commit(),this._data.shareOperation.reportError(Jx.res.getString(Share.MailConstants.stringsPrefix+"attachmentUploadError")))};Share.TargetRoot.prototype._uploadComplete=function(){Jx.log.verbose("Attachment upload complete");this._attachmentWrapper.attachmentWell.validate();this._shareStarted&&(this._uploadCompleted=this._attachmentWrapper.isReady());this._readyForSend()&&this._beginShare()};Share.TargetRoot.prototype._dataTimeout=function(){this._waitForDataTimeout=null;this._data.recordError("Timeout reached for ShareTargetRoot data loading",Share.Constants.DataError.internalError,null,Share.Constants.ErrorCode.timeout);this._dataLoadComplete();this._dataRenderReady()?(Jx.log.verbose("Starting to render data after data timeout"),this._startRenderData(false)):Jx.log.error("ShareTargetRoot internal error: component initial render did not happen before data load timeout")};Share.TargetRoot.prototype._dataRenderReady=function(){return this._initialUIReady&&this._dataReady};Share.TargetRoot.prototype._startRenderData=function(n){var t,i,r;if(this._renderDataComplete){Jx.log.verbose("Not rendering since render has already happened");return}this._shareStarted?(this._renderData(),this._activateData()):(t=document.getElementById("shareContentArea"),t.style.display="-ms-grid",i=this,r=function(){i._renderData();i._activateData();n?WinJS.UI.Animation.fadeIn(t):WinJS.UI.Animation.enterContent(t)},n?(t.innerHTML="",r()):WinJS.UI.Animation.exitContent(t).then(function(){setImmediate(r)}));this._renderDataComplete=true};Share.TargetRoot.prototype._renderData=function(){var r=this._shareStarted?document.getElementById("shareProgressHidden"):document.getElementById("shareContentArea");var t=this._getDataErrorMessage(),i='<div id="shareSubjectArea"><div id="shareSubjectBorder"><input id="shareSubject" type="text" maxlength="250" data-win-res="placeholder:composeSubjectPlaceholder;aria-label:/sharetargetstrings/subjectLabel" spellcheck="true" /><\/div><\/div>',n="";this._attachmentWrapper?n=Jx.getUI(this._attachmentWrapper).html:t&&(n='<div class="share-awError">'+Jx.escapeHtml(t)+"<\/div>");i+='<div id="shareAttachmentWell">'+n+'<\/div><div id="shareMsgBoxContainer"><div id="shareMsgBox" aria-label="'+Jx.escapeHtml(Jx.res.getString(Share.Constants.stringsPrefix+"messageBoxLabel"))+'"><\/div><\/div>';r.innerHTML=i;Jx.log.verbose("_renderData finished")};Share.TargetRoot.prototype._activateData=function(){var n=document.getElementById("shareSubject"),t;n.addEventListener("change",this._fireSubjectChanged,false);n.value=this._data.subject;t=document.getElementById("shareContentArea");Jx.res.processAll(t);this._attachmentWrapper&&this._attachmentWrapper.activateUI();this._createCanvasAsync().done(function(){Jx.log.verbose("ShareTargetRoot - data children ready");this._dataChildrenReady=true;this._shareStarted&&this._canvas.callWhenContentReady(this._canvasContentReadyCallback.bind(this))}.bind(this))};Share.TargetRoot.prototype._fireSubjectChanged=function(){Jx.EventManager.fire(null,"subjectChanged",{subject:document.getElementById("shareSubject").value})};Share.TargetRoot.prototype._createCanvasAsync=function(){var e,t,i,r,n,u,o,f,s,h;return e=this._fromCtrl?this._fromCtrl.selectedAccount:this._data.account,window.Mail={Globals:{}},t=window.Mail.Globals.appSettings=new Share.AppSettings,i="",i+=Boolean(t.composeFontFamily)?"font-family: "+t.composeFontFamily.replace(/"/g,"'")+";":"",i+=Boolean(t.composeFontSize)?"font-size: "+t.composeFontSize.replace(/"/g,"'")+";":"",i+=Boolean(t.composeFontColor)?"color: "+t.composeFontColor.replace(/"/g,"'")+";":"",this._style=i,r="<br>",n=document.createDocumentFragment(),n.appendChild(this._createDivWithContents(r)),Jx.isNonEmptyString(this._data.messageHtml)&&(n.appendChild(this._createDivWithContents(r)),u=document.createElement("div"),o=this._createDivWithContents(this._data.messageHtml,false),u.contentEditable="false",u.appendChild(o),n.appendChild(u)),this._data.containsShareType(Windows.ApplicationModel.DataTransfer.StandardDataFormats.webLink)&&(n.appendChild(this._createDivWithContents(r)),n.appendChild(this._createDivWithContents(this._htmlFromUri(this._data.uri)))),f=this._data.sourceUri,Jx.isObject(f)&&(this._data.containsShareType(Windows.ApplicationModel.DataTransfer.StandardDataFormats.webLink)&&f.equals(this._data.uri)||(n.appendChild(this._createDivWithContents(r)),n.appendChild(this._createDivWithContents(Jx.res.loadCompoundString(Share.MailConstants.stringsPrefix+"sourceLink",this._htmlFromUri(f)))))),this._canvasDirtyTracker=new ModernCanvas.Plugins.DirtyTracker,s={className:"stm",mailMessage:this._data.mailMessage,mailAccount:e,plugins:{indent:new ModernCanvas.Plugins.Indent,defaultFont:new ModernCanvas.Plugins.DefaultFont,dirtyTracker:this._canvasDirtyTracker}},this._createCanvasUrlToStreamMapAsync().then(function(n){h=n},function(n){Jx.fault("ShareToMail.ShareTargetRoot.js","CreateCanvasUrlToStreamMap",n)}).then(function(){return ModernCanvas.createCanvasAsync(document.getElementById("shareMsgBox"),s)}).then(function(t){return this._canvas=t,t.setCueText(Jx.res.getString(Share.Constants.stringsPrefix+"messageBoxLabel")),this._data.containsShareType(Windows.ApplicationModel.DataTransfer.StandardDataFormats.html)?t.addContent(n,ModernCanvas.ContentFormat.documentFragment,ModernCanvas.ContentLocation.start,false,h,this._data.shareOperation.data.properties.applicationListingUri):t.addContent(n,ModernCanvas.ContentFormat.documentFragment,ModernCanvas.ContentLocation.start),this._fromCtrl&&(this._fromCtrl.onAccountChanged=this._onFromAccountChanged.bind(this)),t.clearUndoRedo(),t.components.commandManager.setCommand(new ModernCanvas.Command("focusNext",this._focusNext.bind(this),{undoable:false})),t.components.commandManager.setCommand(new ModernCanvas.Command("focusPrevious",this._focusPrevious.bind(this),{undoable:false})),t.showCueText(),this._canvasKeyDown=this._documentKeyDownHandler.bind(this),t.addEventListener("keydown",this._canvasKeyDown,false),t}.bind(this))};Share.TargetRoot.prototype._createCanvasUrlToStreamMapAsync=function(){return this._data.containsShareType(Windows.ApplicationModel.DataTransfer.StandardDataFormats.html)?ModernCanvas.createUrlToStreamMapAsync(this._data.shareOperation.data):WinJS.Promise.as()};Share.TargetRoot.prototype._htmlFromUri=function(n){return"<a href='"+Jx.escapeHtml(n.absoluteCanonicalUri)+"'>"+Jx.escapeHtml(n.displayUri)+"<\/a>"};Share.TargetRoot.prototype._createDivWithContents=function(n,t){t=Jx.isBoolean(t)?t:true;var i=document.createElement("div");return i.innerHTML=window.toStaticHTML(n),t&&(i.classList.add("defaultFont"),i.setAttribute("style",this._style)),i};Share.TargetRoot.prototype._onFromAccountChanged=function(n){Boolean(n)&&(this._canvas.setMailAccount(n),this._address.setContextualAccount(n))};Share.TargetRoot.prototype._focusNext=function(){this._shareButton.focus()};Share.TargetRoot.prototype._focusPrevious=function(){Boolean(this._attachmentWrapper)&&Boolean(this._attachmentWrapper.attachmentWell)&&!this._attachmentWrapper.attachmentWell.isHidden()?this._attachmentWrapper.attachmentWell.focus():document.getElementById("shareSubject").focus()};Share.TargetRoot.prototype._readyForSend=function(){return Jx.log.verbose("readyForSend check: "+this._shareStarted.toString()+", "+this._uploadCompleted.toString()+", "+this._bitmapAttached.toString()+", "+this._quickLinkCompleted.toString()+", "+this._dataChildrenReady.toString()+", "+this._canvasContentReady.toString()),this._shareStarted&&this._uploadCompleted&&this._bitmapAttached&&this._quickLinkCompleted&&this._dataChildrenReady&&this._canvasContentReady};Share.TargetRoot.prototype._shareClick=function(){var n,i,t;this._wasDataReadyOnSend=this._dataChildrenReady;Jx.log.info("Share click event handled");n=document.getElementById("shareAddressError");i=this._address.getError();Jx.isNonEmptyString(i)?(Jx.log.info("AddressWell error: "+i),n.innerText=i,Jx.addClass(n,"errorVisible"),document.getElementById("shareFlyout").scrollTop=0):this._shareStarted||(n.innerText="",Jx.removeClass(n,"errorVisible"),Share.mark("Send",Share.LogEvent.start),this._data.shareOperation.reportStarted(),this._data.shareOperation.dismissUI(),t=this._address.getRecipients(),Jx.isArray(t)&&0<t.length&&t.length<=3?this._constructQuicklink(t):(Jx.log.verbose("ShareTargetRoot: no quicklinks"),this._quickLinkCompleted=true),this._attachmentWrapper&&(this._uploadCompleted=this._attachmentWrapper.isReady()),this._wasAttachReadyOnSend=this._uploadCompleted,this._canvas&&(this._canvas.isContentReady()?this._canvasContentReady=true:this._canvas.callWhenContentReady(this._canvasContentReadyCallback.bind(this))),this._getDataAndRemoveChildren(),this._shareStarted=true,this._readyForSend()&&this._beginShare(),this._showProgress())};Share.TargetRoot.prototype._canvasContentReadyCallback=function(){this._canvasContentReady=true;this._readyForSend()&&this._beginShare()};Share.TargetRoot.prototype._getDataAndRemoveChildren=function(){Jx.isNullOrUndefined(this._data.mailMessage)&&this._createMailMessage();this._data.mailMessage.to=this._address.getRecipientsStringInNameEmailPairs();this._recipientsCount=this._address.getRecipients().length;this._getFromControlData();this._data.account=this._fromCtrl.selectedAccount;this._shutdownAndRemoveChild(this._address);this._shutdownAndRemoveChild(this._fromCtrl);this._shutdownAndRemoveChild(this._shareButton);this._address=null;this._fromCtrl=null;this._shareButton=null};Share.TargetRoot.prototype._getFromControlData=function(){var n=this._fromCtrl.selectedAccount,i=this._fromCtrl.selectedEmailAddress,t;this._lastFromAccountId=this._data.mailMessage.accountId=n.objectId;t=FromControl.buildFromString(i,n);this._data.mailMessage.from=t};Share.TargetRoot.prototype._getDataAndRemoveDependentChildren=function(){var n,i,r,u,f,t;this._canvas.finalizeMailMessage();n=ModernCanvas.ContentFormat.htmlString;i=this._canvas.getContent([n]);this._data.messageHtml=i[n];r=this._data.mailMessage.getBody();r.body=this._data.messageHtml;u=this._canvas.getCharacterCount();f=this._canvasDirtyTracker.isDirty;this._canvas.removeEventListener("keydown",this._canvasKeyDown,false);this._canvas.dispose();this._canvas=null;this._canvasKeyDown=null;t=document.getElementById("shareSubject");this._data.subject=this._data.mailMessage.subject=t.value;t.removeEventListener("change",this._fireSubjectChanged,false);Jx.isNullOrUndefined(this._attachmentWrapper)||Jx.isNullOrUndefined(this._attachmentWrapper.attachmentWell)||(this._shutdownAndRemoveChild(this._attachmentWrapper),this._attachmentWrapper=null);this._sendBici(false,this._recipientsCount,u,f)};Share.TargetRoot.prototype._sendBici=function(n,t,i,r){var s=this._wasAttachReadyOnSend&&this._wasDataReadyOnSend?1:0,h=this._data.shareOperation.data,u="UNKNOWN_APP",f,e,o;try{u=h.properties.applicationName}catch(c){Jx.log.exception(c,"Error accessing ApplicationName")}f=Microsoft.WindowsLive.Instrumentation.Ids;e=f.Mail.sendMailModern;Jx.bici.addToStream(e,i,t,this._data.subject.length,null,u,n?1:0,s);o=f.Mail.shareToMailOnSend;Jx.bici.addToStream(o,r?1:0,u)};Share.TargetRoot.prototype._shareCancel=function(){this._shareService.cancelShare(this._data)};Share.TargetRoot.prototype._showProgress=function(){var n,t,r,i;this._progress=new Share.Progress;this.append(this._progress);n=document.createElement("div");n.style.display="none";n.innerHTML=Jx.getUI(this._progress).html;t=document.getElementById("shareFlyout");r=t.parentNode;r.appendChild(n);Jx.res.processAll(n);i=this;this._progress.activateUI();this._progress.addListener("cancel",this._shareCancel,this);Share.mark("Send_animation",Share.LogEvent.start);WinJS.UI.Animation.exitPage(t,null).then(function(){var n,r;i._readyForSend()||(n=document.getElementById("shareContentArea"),n.parentNode.removeChild(n),r=document.getElementById("shareProgressHidden"),r.appendChild(n));t.parentNode.removeChild(t)}).then(function(){return n.style.display="block",WinJS.UI.Animation.enterPage(n,null)}).then(function(){i._progress.animateUI();Share.mark("Send_animation",Share.LogEvent.end);Share.mark("Send",Share.LogEvent.end)});this._detachDocumentListeners()};Share.TargetRoot.prototype._calculateQuicklinkName=function(n){return Jx.isNonEmptyString(n.calculatedUIName)?n.calculatedUIName:n.emailAddress};Share.TargetRoot.prototype._constructQuicklink=function(n){var i,t,r,u,f;for(this._quickLink=new Windows.ApplicationModel.DataTransfer.ShareTarget.QuickLink,i=[],t=0;t<n.length;t++)i[t]=n[t].emailAddress;i.sort();this._quickLink.id=i.join(";");this._quickLink.id+=";";this._quickLinkData.associateFromAccount(this._quickLink.id,this._fromCtrl.selectedAccount);n.length===1?(this._quickLink.title=Jx.res.loadCompoundString(Share.MailConstants.stringsPrefix+"quickLinkSingleEmail",this._calculateQuicklinkName(n[0])),Jx.isNullOrUndefined(n[0].person)||(r=AddressWell.getUserTileStream(n[0].person,Microsoft.WindowsLive.Platform.UserTileSize.extraLarge),Jx.isNullOrUndefined(r)||(this._quickLink.thumbnail=this._createFromStream(r)))):this._quickLink.title=n.length===2?Jx.res.loadCompoundString(Share.MailConstants.stringsPrefix+"quickLinkDoubleEmail",this._calculateQuicklinkName(n[0]),this._calculateQuicklinkName(n[1])):Jx.res.loadCompoundString(Share.MailConstants.stringsPrefix+"quickLinkTripleEmail",this._calculateQuicklinkName(n[0]),this._calculateQuicklinkName(n[1]),this._calculateQuicklinkName(n[2]));Jx.isNullOrUndefined(this._quickLink.thumbnail)?(u=this._finishQuickLink.bind(this),f=this._quicklinkFileError.bind(this),Windows.ApplicationModel.Package.current.installedLocation.getFileAsync("Resources\\ModernShareTarget\\images\\MailQuickLinkIcon.png").done(function(n){setImmediate(u,n)},function(n){setImmediate(f,n)})):(this._setQuicklinkFormats(this._quickLink),Jx.log.verbose("Quicklink complete"),this._data.quickLink=this._quickLink,this._quickLinkCompleted=true,this._readyForSend()&&this._beginShare())};Share.TargetRoot.prototype._quicklinkFileError=function(n){this.isShutdown()||(n?Jx.log.exception("Share.TargetRoot: Quicklink thumbnail could not be retrieved",n):Jx.log.error("Share.TargetRoot: Quicklink thumbnail could not be retrieved"),this._quickLinkCompleted=true,this._readyForSend()&&this._beginShare())};Share.TargetRoot.prototype._finishQuickLink=function(n){if(!this.isShutdown()){try{var t=Windows.Storage.Streams.RandomAccessStreamReference.createFromFile(n);this._quickLink.thumbnail=t;this._setQuicklinkFormats(this._quickLink);this._data.quickLink=this._quickLink}catch(i){Jx.log.exception("Could not retrieve the thumbnail reference for the generic pawn",i)}Jx.log.verbose("Quicklink thumbnail complete with loaded image");this._quickLinkCompleted=true;this._readyForSend()&&this._beginShare()}};Share.TargetRoot.prototype._setQuicklinkFormats=function(n){n.supportedFileTypes.replaceAll(["*"]);n.supportedDataFormats.replaceAll(this._handledShareTypes)};Share.TargetRoot.prototype._beginShare=function(){var t,n,i;if(Jx.log.verbose("ShareTargetRoot: quicklinks and data are ready for send, beginning share process"),t=this._getDataErrorMessage(),Jx.isNullOrUndefined(this._attachmentWrapper)||(this._callValidate(),this._attachmentWrapper.attachmentWell.finalizeForSend()),!this._wasDataReadyOnSend&&Boolean(t)){Jx.log.info("Share.TargetRoot reporting error since there was an error loading the data, but the user had already clicked send");this._data.shareOperation.reportError(t);return}this._getDataAndRemoveDependentChildren();Jx.appData.localSettings().get("RetailExperience")?(n=document.createElement("script"),n.type="text/javascript",n.src="./modernsharetarget/retailshareservice.js",document.head.appendChild(n),this._shareService=new Share.RetailShareService):this._shareService=new Share.ShareService;Jx.log.verbose("Share.TargetRoot: Initiating share");i=function(){Jx.EventManager.removeListener(null,Share.MailConstants.messageSentEvent,i);this._cleanQuickLinks()};Jx.EventManager.addListener(null,Share.MailConstants.messageSentEvent,i,this);this._shareService.initiateShare(this._data)};Share.TargetRoot.prototype._cleanQuickLinks=function(){this._quickLinkData.clean(Share.MailConstants.maximumQuicklinkDataCount,Share.MailConstants.daysToKeepQuicklinkData)};Share.TargetRoot.prototype._attachDocumentListeners=function(){this._documentKeyDown===null&&(this._documentKeyDown=this._documentKeyDownHandler.bind(this),document.addEventListener("keydown",this._documentKeyDown,false))};Share.TargetRoot.prototype._detachDocumentListeners=function(){this._documentKeyDown!==null&&(document.removeEventListener("keydown",this._documentKeyDown,false),this._documentKeyDown=null)};Share.TargetRoot.prototype._documentKeyDownHandler=function(n){var i=n.key,t=0;n.altKey&&(t|=1);n.ctrlKey&&(t|=2);n.shiftKey&&(t|=4);(n.ctrlKey&&i==="Enter"||t===1&&i==="s")&&this._shareClick()};Share.TargetRoot.prototype._getDataErrorMessage=function(){var n=null,t;return this._data.errorCategory===Share.Constants.DataError.invalidFormat?n=Jx.res.getString("/sharetargetstrings/shareDataErrorFormat"):this._data.errorCategory===Share.Constants.DataError.internalError&&(t=this._data.getErrorCodeString(),n=t?Jx.res.loadCompoundString("/sharetargetstrings/shareDataErrorGenericCode",t):Jx.res.getString("/sharetargetstrings/shareDataErrorGeneric")),n};Share.TargetRoot.shutdownApp=function(){var n=Jx.app,t=Jx.root;n&&t&&(t.shareClose(),n.shutdownUI(),n.shutdown())};Share.TargetRoot.prototype._keyboardShow=function(n){n.ensuredFocusedElementInView=true;var t=document.getElementById("shareFlyout"),i=n.occludedRect.height+"px";t.style.bottom=i;WinJS.UI.executeAnimation(t,{property:"bottom",delay:0,duration:367,timing:"cubic-bezier(0.1, 0.9, 0.2, 1)",from:"0px",to:i}).done(this._scrollIntoView,this._scrollIntoView)};Share.TargetRoot.prototype._keyboardHide=function(){var n=document.getElementById("shareFlyout"),t;Jx.isNullOrUndefined(n)||(t=n.style.bottom,n.style.bottom="0px",WinJS.UI.executeAnimation(n,{property:"bottom",delay:0,duration:367,timing:"cubic-bezier(0.1, 0.9, 0.2, 1)",from:t,to:"0px"}).done(null,function(){}))};Share.TargetRoot.prototype._scrollIntoView=function(){var n;if(!Boolean(this._address)||!this._address.hasFocus()){var t=document.getElementById("shareScrollArea"),r=t.scrollLeft,i=document.getSelection();i.rangeCount>0&&(n=i.getRangeAt(0).commonAncestorContainer,n.nodeType!==n.ELEMENT_NODE&&(n=n.parentNode),AddressWell.scrollIntoViewIfNotInView(n,false,t));t.scrollLeft=r}};Share.TargetRoot.prototype._attachmentWrapper=null;Share.TargetRoot.prototype._canvas=null;Share.TargetRoot.prototype._canvasDirtyTracker=null;Share.TargetRoot.prototype._fromCtrl=null;Share.TargetRoot.prototype._shareButton=null;Share.TargetRoot.prototype._progress=null;Share.TargetRoot.prototype._address=null;Share.TargetRoot.prototype._style="";Share.TargetRoot.prototype._dataLoadPromise=null;Share.TargetRoot.prototype._waitForDataTimeout=null;Share.TargetRoot.prototype._dataReady=false;Share.TargetRoot.prototype._dataChildrenReady=false;Share.TargetRoot.prototype._initialUIReady=false;Share.TargetRoot.prototype._renderDataComplete=false;Share.TargetRoot.prototype._uploadCompleted=false;Share.TargetRoot.prototype._canvasContentReady=false;Share.TargetRoot.prototype._bitmapAttached=false;Share.TargetRoot.prototype._quickLinkCompleted=false;Share.TargetRoot.prototype._shareStarted=false;Share.TargetRoot.prototype._wasDataReadyOnSend=false;Share.TargetRoot.prototype._wasAttachReadyOnSend=false;Share.TargetRoot.prototype._uiInitialized=false;Share.TargetRoot.prototype._data=null;Share.TargetRoot.prototype._platform=null;Share.TargetRoot.prototype._shareService=null;Share.TargetRoot.prototype._quickLinkData=null;Share.TargetRoot.prototype._quickLink=null;Share.TargetRoot.prototype._createFromStream=Windows.Storage.Streams.RandomAccessStreamReference.createFromStream;Share.TargetRoot.prototype._documentKeyDown=null;Share.TargetRoot.prototype._canvasKeyDown=null;Share.TargetRoot.prototype._recipientsCount=0;Share.TargetRoot.prototype._inputPane=null;Share.TargetRoot.prototype._handledShareTypes=[Windows.ApplicationModel.DataTransfer.StandardDataFormats.html,Windows.ApplicationModel.DataTransfer.StandardDataFormats.webLink,Windows.ApplicationModel.DataTransfer.StandardDataFormats.storageItems,Windows.ApplicationModel.DataTransfer.StandardDataFormats.text];Object.defineProperty(Share.TargetRoot.prototype,"_lastFromAccountId",{enumerable:true,get:function(){return Jx.appData.localSettings().get("ShareToMailAccount")||""},set:function(n){Jx.appData.localSettings().set("ShareToMailAccount",n||"")}});Share.TargetRoot.prototype._startupError=Share.MailConstants.StartupError.none