﻿Jx.delayDefine(People,"PlatformCollectionWatcher",function(){var t=window.People,i=Microsoft.WindowsLive.Platform,n=t.PlatformCollectionWatcher=function(n,t){this._collection=n;var i=this._listener=this._collectionChanged.bind(this);n.addEventListener("collectionchanged",i);this._callback=t};n.prototype.getCount=function(){return this._collection.count};n.prototype.item=function(n){return this._collection.item(n)};n.prototype.dispose=function(){var n=this._collection,t=this._listener;this._collection=null;this._listener=null;n&&(n.removeEventListener("collectionchanged",t),n.dispose())};n.prototype._collectionChanged=function(n){this._callback.invoke([this,n.detail[0]])}})