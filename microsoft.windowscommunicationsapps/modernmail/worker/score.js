﻿Jx.delayDefine(Mail.Worker,"Score",function(){"use strict";function r(n){Jx.mark("Score."+n+",StartTA,Score")}function u(n){Jx.mark("Score."+n+",StopTA,Score")}var f=Microsoft.WindowsLive.Platform,t=Mail.Worker.Score=function(n,t,i,e,o){r("ctor");this._platform=n;this._message=t;this._selection=i;this._onUpdate={func:e,context:o};this._selection.addScore(this);this._score=0;this.update();u("ctor")},n,i;t.compare=function(n,i){return i.score-n.score||i.message.bestDate-n.message.bestDate};n=t.Factors={currentConversation:100,currentView:100,currentAccount:50,inInbox:30,inSentItems:20,inOutbox:-500,isDeleted:-10,isJunk:-250,isDraft:-500,isFlagged:30,isFromPinnedPerson:25,isInPinnedFolderView:20,isUnread:75};i=t.AdjustmentReason={accountId:n.currentAccount,viewId:n.currentView,parentConversationId:n.currentConversation};t.prototype={dispose:function(){this._selection.removeScore(this);this._message=null;this._onUpdate=null},get accountId(){return this._message.accountId},get parentConversationId(){return this._message.parentConversationId},get score(){return this._score},get message(){return this._message},adjust:function(n,t){var r=i[n];t&&(r*=-1);this._score+=r;this._onUpdate.func.call(this._onUpdate.context)},_calculateScore:function(){r("_calculateScore");var n=0;return[this._currentConversation,this._currentView,this._currentAccount,this._inInbox,this._inSentItems,this._inOutbox,this._isDeleted,this._isJunk,this._isDraft,this._isFlagged,this._isFromPinnedPerson,this._isInPinnedFolderView,this._isUnread].forEach(function(t){n+=t.call(this)},this),u("_calculateScore"),n},update:function(){if(this._message.pendingRemoval){this._score=-1e5;return}r("update");this._score=this._calculateScore();u("update")},_currentConversation:function(){var t=this._message.parentConversationId===this._selection.parentConversationId;return t?n.currentConversation:0},_currentView:function(){var t=Jx.isNonEmptyString(this._selection.viewId)&&this._message.isInView(this._selection.viewId);return t?n.currentView:0},_currentAccount:function(){var t=this._message.accountId===this._selection.accountId;return t?n.currentAccount:0},_inInbox:function(){return this._message.isInInbox?n.inInbox:0},_inSentItems:function(){return this._message.isInSentItems?n.inSentItems:0},_inOutbox:function(){var t=this._message.isInOutbox;return t?n.inOutbox:0},_isDeleted:function(){return this._message.isInDeletedItems?n.isDeleted:0},_isJunk:function(){var t=this._message.isJunk;return t?n.isJunk:0},_isDraft:function(){var t=this._message.isDraft;return t?n.isDraft:0},_isFlagged:function(){var t=this._message.flagged;return t?n.isFlagged:0},_isFromPinnedPerson:function(){var t=this._message.isFromPersonPinned;return t?n.isFromPinnedPerson:0},_isInPinnedFolderView:function(){var t=this._message.folder,i=Jx.isObject(t)&&t.isInPinnedFolderView;return i?n.isInPinnedFolderView:0},_isUnread:function(){var t=!this._message.read;return t?n.isUnread:0}}})