﻿Jx.delayDefine(People,"ZoomedOutView",function(){var n=window.People,t;n.ZoomedOutView=function(t){n.ContactGridSection.call(this,"zoomedOutSection");this._zoomhost=t;this._rendered=false};Jx.inherit(n.ZoomedOutView,n.ContactGridSection);t=n.ZoomedOutView.prototype;t.shutdownComponent=function(){Jx.dispose(this._collection);n.ContactGridSection.prototype.shutdownComponent.call(this)};t._getCollection=function(){return this._zoomhost.getCollection()};t._getFactories=function(){return{zoomedOutAlphabeticHeader:new n.Callback(function(){return new n.ZoomedOutAlphabeticHeader},this),zoomedOutFavoritesHeader:new n.Callback(function(){return new n.ZoomedOutFavoritesHeader},this),zoomedOutSocialHeader:new n.Callback(function(){return new n.ZoomedOutSocialHeader},this)}};t._getCanonicalType=function(){return"zoomedOutAlphabeticHeader"};t.render=function(){this.getJobSet().addUIJob(this,this._ensureRendered,null,n.Priority.semanticZoom)};t.setCurrentItem=function(t){var i=getComputedStyle(this._sectionElement),f=this.getOrientation()===n.Orientation.horizontal,e=i.direction==="ltr",r,u;f?(r=e?i.marginLeft:i.marginRight,u=i.marginTop):(r=i.marginTop,u=i.marginLeft);t.scrollPos-=parseInt(r);t.orthoPos-=parseInt(u);n.ContactGridSection.prototype.setCurrentItem.call(this,t)};t.positionItem=function(t){return this._ensureRendered(),n.ContactGridSection.prototype.positionItem.call(this,t)};t._ensureRendered=function(){this._rendered||(this._rendered=true,n.ContactGridSection.prototype.render.call(this))}})