﻿Jx.delayDefine(People.Accounts,"AccountControlBase",function(){var f=window.People.Accounts,s=window.People.Social,n=Microsoft.WindowsLive.Platform,o=Microsoft.WindowsLive.Market,i=f.KnownAccountError={none:0,pushFailed:1,badCredentials:2,noCredentials:3,syncFailed:4,removalNeeded:5,ignorableCertError:6,certificateNeeded:7,oauthCredentialError:8,reconnectNeeded:9,upgradeNeeded:10},t,r,u,e;Object.freeze(i);t=f.AccountControlBase=function(n,t){this._platform=n;this._scenario=t};r=t.mapAppScenarioToAppName={};r[n.ApplicationScenario.calendar]="calendar";r[n.ApplicationScenario.mail]="mail";r[n.ApplicationScenario.people]="people";Object.freeze(r);u=t.mapAppScenarioToResourceType={};u[n.ApplicationScenario.calendar]=n.ResourceType.calendar;u[n.ApplicationScenario.mail]=n.ResourceType.mail;u[n.ApplicationScenario.people]=n.ResourceType.contacts;e=t.mapAppScenarioToScenarioState={};e[n.ApplicationScenario.people]="peopleScenarioState";t.prototype._launchWebAuthAddFlow=function(n,t){f.getUserAuthTokenAsync(function(i){this._launchWebAuthAddFlowWithTicket(n,i,t)}.bind(this),function(){this._launchWebAuthAddFlowWithTicket(n,"",t)}.bind(this))};t.prototype._launchWebAuthAddFlowWithTicket=function(t,i,r){var e,f;r=!!r;try{var s=Windows.Security.Authentication.Web.WebAuthenticationBroker.getCurrentApplicationCallbackUri(),u=this._getBasicAccountConnectURL(t),h=t.getServerScenarios(this._scenario,r);u+="&scenarios="+h;u+="&view=modern";u+="&ru="+s.absoluteUri;Jx.isNonEmptyString(i)&&(e=0,f=i.length,i.indexOf("t=")===0&&(e=2,f-=2),i.indexOf("&p=")===i.length-3&&(f-=3),u+="&wlrpsticket="+i.substr(e,f));r&&(u+="&authz=true");Jx.log.info("Plat.ConfigureType._launchAddFlow, url: "+u);var c=this._forcePlatformSync.bind(this,this._platform),l=new Windows.Foundation.Uri(u),o=Windows.Security.Authentication.Web.WebAuthenticationStatus;Windows.Security.Authentication.Web.WebAuthenticationBroker.authenticateAsync(Windows.Security.Authentication.Web.WebAuthenticationOptions.none,l,s).done(function(n){var t="success";n.responseStatus===o.success?this._isPackageOnLockScreen()||c():n.responseStatus===o.errorHttp?t="error":n.responseStatus===o.userCancel&&(t="user-cancelled");Jx.log.info("Account add response status: "+t+" errorDetail: "+n.responseErrorDetail)}.bind(this),function(n){Jx.log.error("Account add failed: "+n)})}catch(a){Jx.log.exception("AccountControlBase._launchAddFlow failed.",a)}};t.prototype._manageAccountOnline=function(t){var r;var i=document.msVisibilityState,u=this._forcePlatformSync.bind(this,this._platform),f=new Windows.Foundation.Uri(this._getCustomURL(t)||this._getBasicAccountConnectURL(t));Windows.System.Launcher.launchUriAsync(f).done();r=function(){Jx.log.info("AccountControlBase._manageWebConfigurableAccount(), onVisibilityChange(), msVisibilityState = "+document.msVisibilityState);var n=i;i=document.msVisibilityState;i!==n&&i==="visible"&&(this._isPackageOnLockScreen()||u(),document.removeEventListener("msvisibilitychange",r))}.bind(this);document.addEventListener("msvisibilitychange",r)};t.prototype._getBasicAccountConnectURL=function(n){var i,u;var e=this._platform.accountManager.defaultAccount.meContact,f=Microsoft.WindowsLive.Cid,t="https://profile.live.com/cid-"+f.CidFormatter.toString(e.cid.value,f.CidFormat.hexidecimal)+"/services/connect/?",s=r[this._scenario];t+="appid="+n.sourceId;t+="&biciID="+this._getBiciId();t+="&brand="+s;try{i=Windows.ApplicationModel.Resources.Core.ResourceManager.current.defaultContext.languages[0];Jx.isNonEmptyString(i)&&(t+="&mkt="+i);u=o.get(Microsoft.WindowsLive.FallbackLogic.countryRegion);Jx.isNonEmptyString(u)&&(t+="&psamarket="+u)}catch(h){Jx.log.exception("AccountControlBase._getBasicAccountConnectURL(), Microsoft.WindowsLive.Market.get() failed.",h)}return t};t.prototype._getCustomURL=function(n){return n.sourceId==="SKYPE"?"https://secure.skype.com/account/main-page":""};t.prototype._getBiciSuffix=function(){};t.prototype._getBiciId=function(){var i=r[this._scenario],t,n;return t=this._getBiciSuffix(),n=i+t+"_windows81",this._getBiciId=function(){return n},n};t.prototype._isPackageOnLockScreen=function(){var n=false,t=Windows.ApplicationModel.Background;return["Microsoft.WindowsLive.Mail","Microsoft.WindowsLive.Calendar"].forEach(function(i){if(!n)try{var r=t.BackgroundExecutionManager.getAccessStatus(i);(r===t.BackgroundAccessStatus.allowedMayUseActiveRealTimeConnectivity||r===t.BackgroundAccessStatus.allowedWithAlwaysOnRealTimeConnectivity)&&(n=true)}catch(u){Jx.log.exception("BackgroundExecutionManager.getAccessStatus() failed",u)}}),n};t.prototype._forcePlatformConnectedIdCheckAsync=function(n,t){var i=t||n.accountManager.defaultAccount,r=n.createVerb("ConnectedIdChange","");return n.runResourceVerbAsync(i,"backgroundTasks",r)};t.prototype._forcePlatformSync=function(t){Jx.log.info("AccountListControl._forcePlatformSync()");var i=t.accountManager.defaultAccount.getResourceByType(n.ResourceType.mail);i.isSyncNeeded=true;i.commit()};t.prototype._getCurrentError=function(t){var r=i.none,h=this._scenario,l=t.getConfigureType(h),c,f,o,s;switch(l){case n.ConfigureType.editOnClient:c=u[h];f=t.getResourceByType(c);o=t.settingsResult!==n.Result.success;f&&(o&&(f.lastSyncResult===n.Result.e_HTTP_DENIED||f.lastSyncResult===n.Result.ixp_E_IMAP_LOGINFAILURE)?r=i.badCredentials:f.lastPushResult===n.Result.e_SYNC_PUSH_FAILED?r=i.pushFailed:o&&f.lastSyncResult===n.Result.autoDiscoveryFailed?r=i.syncFailed:o&&f.lastSyncResult===n.Result.credentialMissing?r=i.noCredentials:f.lastSyncResult===n.Result.e_GOOGLE_APPS?r=i.removalNeeded:f.lastSyncResult===n.Result.e_SYNC_IGNORABLE_SERVER_CERT_FAILURE?r=i.ignorableCertError:f.lastSyncResult===n.Result.e_SYNC_CBA_FAILED?r=i.certificateNeeded:Jx.isNullOrUndefined(f.lastSendMailResult)||f.lastSendMailResult!==n.Result.ixp_E_SMTP_535_AUTH_FAILED||(r=i.badCredentials));t.supportsOAuth&&(r===i.badCredentials||r===i.noCredentials)&&(r=i.oauthCredentialError);break;case n.ConfigureType.editOnWeb:s=e[h];Jx.isNonEmptyString(s)&&(t[s]===n.ScenarioState.error?r=i.reconnectNeeded:t[s]===n.ScenarioState.upgradeRequired&&(r=i.upgradeNeeded))}return r};t.prototype._hasDefaultAccount=function(){return this._platform.accountManager.defaultAccount.lastAuthResult!==n.Result.defaultAccountDoesNotExist}})