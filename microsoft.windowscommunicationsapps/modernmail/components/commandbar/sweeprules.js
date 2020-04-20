﻿Jx.delayDefine(Mail,"SweepRules",function(){"use strict";function r(r,u,f,e){var c,l,a,v,y;if(c=i._createRule(u.account.platformObject),l=false,c){a=o(u,f);c.actionType=a;switch(e){case t.moveAll:c.deferredActionAge=0;c.deferredActionType=n.MailRuleDeferredActionType.none;l=false;break;case t.moveAllFuture:c.deferredActionAge=0;c.deferredActionType=n.MailRuleDeferredActionType.none;l=true;break;case t.moveTenDays:c.deferredActionAge=10;c.deferredActionType=n.MailRuleDeferredActionType.days;l=true;break;case t.moveNotMostRecent:c.deferredActionAge=1;c.deferredActionType=n.MailRuleDeferredActionType.count;l=true;break;default:return}c.senderEmailAddress=r;c.targetCategoryId=s(a,u,f);c.targetFolderId=h(a,f);v=i.getScopeFolder(a,e,u);y=v?v.objectId:"";c.runMailRule(y);l&&c.commit()}}function e(t,i){var r=n.MailViewType;return(t===r.newsletter||t===r.social)&&i!==r.inbox?true:t!==r.inbox&&(i===r.newsletter||i===r.social)?true:false}function o(t,i){var r=n.MailViewType;return i.type===r.newsletter||i.type===r.social?n.MailRuleActionType.addCategory:(t.type===r.newsletter||t.type===r.social)&&i.type!==r.deletedItems?n.MailRuleActionType.removeCategory:n.MailRuleActionType.move}function s(t,i,r){var u=n.MailRuleActionType,e=n.MailViewType,f=null;switch(t){case u.move:return n.MailRuleCategoryId.none;case u.addCategory:f=r;break;case u.removeCategory:f=i;break;default:return n.MailRuleCategoryId.none}switch(f.type){case e.newsletter:return n.MailRuleCategoryId.newsletter;case e.social:return n.MailRuleCategoryId.social;default:return n.MailRuleCategoryId.none}}function h(t,i){return t===n.MailRuleActionType.move?i.folder.objectId:""}function u(n){Jx.mark("SweepRules."+n+",StartTA,WorkerOwner")}function f(n){Jx.mark("SweepRules."+n+",StopTA,WorkerOwner")}Mail.SweepRules={};var n=Microsoft.WindowsLive.Platform,i=Mail.SweepRules,t=Mail.SweepRules.sweepType={moveAll:0,moveAllFuture:1,moveTenDays:2,moveNotMostRecent:3};i.runSweepRule=function(n,t,i){u("runSweepRule");r(n,t,t.account.deletedView,i);f("runSweepRule")};i.runMoveAllRule=function(n,t,i,u){if(e(t.type,i.type)){var f=t.account.inboxView;r(n,t,f,u);r(n,f,i,u)}else r(n,t,i,u)};i.getSenders=function(n,t){var i,r,e;u("getSenders");t=t||n.messages;i={};t.forEach(function(n){var t=n.from;t&&(i[t.emailAddress]=t)});r=[];for(e in i)i.hasOwnProperty(e)&&r.push(i[e]);return f("getSenders"),r};i._createRule=function(t){var i=t.getResourceByType(n.ResourceType.mailRule);return i?i.createRule():null};i.getScopeFolder=function(i,r,u){var f=n.MailViewType,e=u.type;return r===t.moveAll||r===t.moveAllFuture?i===n.MailRuleActionType.move?e===f.newsletter||e===f.social?u.account.inboxView.folder:u.folder:u.account.inboxView.folder:null}})