﻿Jx.delayDefine(Mail,"Phase1Upsell",function(){"use strict";var t=People.Accounts,n;Mail.Phase1Upsell=function(n){t.Phase1Upsell.call(this,n,Microsoft.WindowsLive.Platform.ApplicationScenario.mail,null,{phase1InstructionsId:"mailPhase1UpsellInstructions"})};Jx.inherit(Mail.Phase1Upsell,t.Phase1Upsell);n=Mail.Phase1Upsell.prototype;n.getUI=function(n){t.Phase1Upsell.prototype.getUI.call(this,n);n.html="<div class='phase1UpsellBackground'><div class='phase1UpsellPositioner'><div class='phase1UpsellAppTitle' role='heading'>"+Jx.escapeHtml(Jx.res.getString("mailAppTitle"))+"<\/div>"+n.html+"<\/div><\/div>"};n._onAccountClick=function(){return true};n._platform=null;n._scenario=null;n._onAddMoreAccounts=function(){t.showAccountSettingsPage(this._platform,this._scenario,t.AccountSettingsPage.upsells,{launchedFromApp:true})};n._incrementPhase=function(){this.fire("upsellAvailable",null,null)}})