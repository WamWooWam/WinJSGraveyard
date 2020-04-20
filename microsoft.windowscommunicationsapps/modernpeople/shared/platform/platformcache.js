﻿Jx.delayDefine(People,"PlatformCache",function(){var t=People,n=t.PlatformCache=function(n,i){this._platform=n;this._defaultAccount=null;this._defaultMeContact=null;i=this._jobSet=i.createChild();this._fetch=null;this._collections={};i.addUIJob(this,this._fetchContacts,[i],t.Priority.fetchContacts)};n.prototype.getPlatform=function(){return this._platform};n.prototype.getDefaultAccount=function(){var n=this._defaultAccount;return n||(Jx.log.warning("Loading default account"),n=this._defaultAccount=this._platform.accountManager.defaultAccount),n};n.prototype.getDefaultMeContact=function(){var n=this._defaultMeContact,t;return n||(t=this.getDefaultAccount(),t&&(Jx.log.warning("Loading me contact"),n=this._defaultMeContact=t.meContact)),n};n.prototype.getCollection=function(n,t,i){var f=this._collections,r=f[n],e,u;if(!r){if(Jx.log.warning("Creating "+n+" collection"),r=f[n]=t.call(i,this._platform,this._jobSet),u=Jx.appData.localSettings().container("People").container("Collections").get(n),Jx.isNonEmptyString(u))try{e=JSON.parse(u)}catch(o){Jx.log.exception("Invalid hydration data for "+n,o)}r.hydrate(e)}return r};n.prototype._fetchContacts=function(n){this._fetch=new t.FetchContacts(this._platform,n)};n.prototype.suspend=function(){var i=Jx.appData.localSettings().container("People").container("Collections"),n,t;for(n in this._collections)t=JSON.stringify(this._collections[n].dehydrate()),i.set(n,t)};n.prototype.dispose=function(){this.suspend();this._platform=null;this._defaultAccount=null;this._defaultMeContact=null;Jx.dispose(this._jobSet);this._jobSet=null;Jx.dispose(this._fetch);this._fetch=null;for(var n in this._collections)Jx.dispose(this._collections[n]);this._collections=null}})