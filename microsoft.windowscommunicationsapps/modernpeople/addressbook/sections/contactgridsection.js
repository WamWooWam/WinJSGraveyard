﻿Jx.delayDefine(People,"ContactGridSection",function(){function t(){this._element=document.createElement("div");this._element.id=this.id="NullNode_"+String(Jx.uid())}var n=window.People,i=WinJS.Utilities;n.ContactGridSection=function(t,i,r){n.Section.call(this,t,i);this._peopleManager=r};Jx.inherit(n.ContactGridSection,n.Section);n.ContactGridSection.prototype.getContent=function(){return this._getPlaceholderUI()+"<div class='gridContainer' role='group' aria-label='"+(this.title?Jx.escapeHtml(Jx.res.getString(this.title)):"")+"'><\/div>"};n.ContactGridSection.prototype._getPlaceholderUI=function(){return""};n.ContactGridSection.prototype.activateUI=function(){n.Section.prototype.activateUI.call(this);var t=this._gridContainer=this._contentElement.querySelector(".gridContainer");this._getPlaceholderUI()!==""&&(this._placeholder=t.previousSibling)};n.ContactGridSection.prototype.hydrateExtent=function(i){var r,e,f,s,h,u,o,c;for(this._emptyExtent=this.getSectionExtent(),n.Section.prototype.hydrateExtent.call(this,i),this._computeGridOffsets(),r=this._collection=this._getCollection(),e=this._unloadedCollections=[],f=0,s=r.length;f<s;++f)h=r.getItem(f),u=h.collection,u.isLoaded?u.acceptPendingChanges():r.isHydrated||(e.push(u),u.addListener("load",this._onCollectionLoaded,this));o=this._getFactories();o.none=new n.Callback(function(){return new t});c=this._getCanonicalType();this._grid=n.Grid.createGrid({items:r,factories:o,canonicalType:c,jobSet:this.getJobSet(),viewport:this,containerElement:this._gridContainer});this._grid.hydrate(n.Hydration.get(i,"grid",{}));(r.isHydrated||e.length===0)&&this.extentReady(this)};n.ContactGridSection.prototype.hydratePosition=function(t){this._grid.hydratePosition(n.Hydration.get(t,"grid",{}))};n.ContactGridSection.prototype.contentReadyAsync=function(){if(this.isInView()){var n=this;return this._grid.contentReadyAsync().then(function(t){var i=t.length>0;return i?t:Boolean(n._placeholder)?[n._sectionElement]:[]})}return[]};n.ContactGridSection.prototype.onEnterComplete=function(){this._grid.onEnterComplete()};n.ContactGridSection.prototype.render=function(){n.Section.prototype.render.call(this);var t=this.getParent();this.scroll(t.getScrollPosition(),0)};n.ContactGridSection.prototype.scroll=function(t,i){n.Section.prototype.scroll.call(this,t,i);this._grid.onScroll(t-this._gridScrollableOffset,i)};n.ContactGridSection.prototype.setScrollPosition=function(n){var t=this.getParent();return t.setScrollPosition(n+this._gridScrollableOffset)};n.ContactGridSection.prototype.getScrollPosition=function(){var n=this.getParent();return n.getScrollPosition()-this._gridScrollableOffset};n.ContactGridSection.prototype.positionItem=function(t){var i=this._grid.positionItem(t);return this.getOrientation()!==n.Orientation.vertical||i.isFirstGroup||(i.scrollPos+=this._gridScrollableOffset),i};n.ContactGridSection.prototype.getCurrentItem=function(n){var t=this._grid.getCurrentItem(n);return t.scrollPos+=this._gridScrollableOffset,t};n.ContactGridSection.prototype.setCurrentItem=function(n){n.scrollPos-=this._gridScrollableOffset;n.orthoPos-=this._gridOrthogonalOffset;this._grid.setCurrentItem(n)};n.ContactGridSection.prototype.resize=function(){if(n.Section.prototype.resize.call(this),!this.isHidden()){this._grid.onResize();var t=this.getParent();this.scroll(t.getScrollPosition(),0)}};n.ContactGridSection.prototype.show=function(){n.Section.prototype.show.call(this);this.resize()};n.ContactGridSection.prototype.dehydrate=function(){var t={};return n.Hydration.set(t,"grid",this._grid.dehydrate()),t};n.ContactGridSection.prototype.shutdownComponent=function(){n.Section.prototype.shutdownComponent.call(this);Jx.dispose(this._grid);this._unloadedCollections.forEach(function(n){n.removeListener("load",this._onCollectionLoaded,this)},this);this._unloadedCollections=null};n.ContactGridSection.prototype._getCanonicalType=function(){return"person"};n.ContactGridSection.prototype._onCollectionLoaded=function(n){var t=n.target,i;t.removeListener("load",this._onCollectionLoaded,this);i=this._unloadedCollections.indexOf(t);this._unloadedCollections.splice(i,1);this._unloadedCollections.length===0&&this.extentReady(this)};n.ContactGridSection.prototype.extentReady=function(t){this._extentReady=true;this._hideIfEmpty();n.Section.prototype.extentReady.call(this,t)};n.ContactGridSection.prototype.extentChanged=function(t,i,r){n.Section.prototype.extentChanged.call(this,t,i+this._gridScrollableOffset,r);this._hideIfEmpty()};n.ContactGridSection.prototype._hideIfEmpty=function(){if(this._extentReady){var n=this.getSectionExtent()<=this._emptyExtent;n!==this.isHidden()&&(n?this.hide():this.show())}};n.ContactGridSection.prototype._computeGridOffsets=function(){var t=this._gridContainer,i=this._sectionElement,r=t.offsetTop-i.offsetTop,u=getComputedStyle(t).direction==="ltr"?t.offsetLeft-i.offsetLeft:i.offsetLeft+i.offsetWidth-t.offsetLeft-t.offsetWidth;this.getOrientation()===n.Orientation.vertical?(this._gridScrollableOffset=r,this._gridOrthogonalOffset=u):(this._gridScrollableOffset=u,this._gridOrthogonalOffset=r)};n.ContactGridSection.prototype._grid=null;n.ContactGridSection.prototype._unloadedCollections=null;n.ContactGridSection.prototype._collection=null;n.ContactGridSection.prototype._extentReady=false;n.ContactGridSection.prototype._emptyExtent=0;n.ContactGridSection.prototype._gridScrollableOffset=0;n.ContactGridSection.prototype._gridOrthogonalOffset=0;n.ContactGridSection.prototype._gridContainer=null;n.ContactGridSection.prototype._placeholder=null;t.prototype.getElement=function(){return this._element};t.prototype.getHandler=function(){return this};t.prototype.setDataContext=function(){};t.prototype.nullify=t.prototype.dispose=Jx.fnEmpty})