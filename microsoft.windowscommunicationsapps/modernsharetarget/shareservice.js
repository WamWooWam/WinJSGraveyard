﻿Share.ShareService=function(){this._helper=null};Share.ShareService.prototype._shareObject=null;Share.ShareService.prototype.initiateShare=function(n){if(Jx.isObject(n)){var t=this._helper=new Share.RequestHelper(n.shareOperation,n.quickLink);t.sendMessageToOutbox(n.mailMessage,n.account,n.platform)}else Jx.log.error("shareObject is null or undefined")};Share.ShareService.prototype.cancelShare=function(n){this._helper.cancel(n.mailMessage)}