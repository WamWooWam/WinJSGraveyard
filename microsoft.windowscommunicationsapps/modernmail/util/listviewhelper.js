﻿Jx.delayDefine(Mail,"ListViewHelper",function(){"use strict";var n=Mail.ListViewHelper={isListViewReady:function(n){return Jx.isObject(n)&&n.loadingState==="complete"},isItemsLoaded:function(n){var t=n.loadingState;return t==="complete"||t==="itemsLoaded"},disableAnimation:function(t){t.addEventListener("contentanimating",n._onListViewContentAnimation,false)},enableAnimation:function(t){t.removeEventListener("contentanimating",n._onListViewContentAnimation,false)},_onListViewContentAnimation:function(n){var t=Jx.isObject(n.detail)?n.detail.type:"unknown";Mail.writeProfilerMark("ListViewContentAnimation - incoming "+t+" animation - cancelled");n.preventDefault()},_onKeyboardNavigating:function(n){var t=n.detail.newFocus,i=n.srcElement.winControl;i.selection.set(t)},waitForListView:function(n,t,i){return t=t||"viewPortLoaded",Mail.Promises.waitForEventWithTimeout(n,"loadingstatechanged",function(){return n.loadingState===t},i)},setSelectionMode:function(t,i){t.selectionMode=i;t.swipeBehavior=i==="multi"?"select":"none";i==="single"?t.addEventListener("keyboardnavigating",n._onKeyboardNavigating,false):i==="multi"&&t.removeEventListener("keyboardnavigating",n._onKeyboardNavigating,false)}}})