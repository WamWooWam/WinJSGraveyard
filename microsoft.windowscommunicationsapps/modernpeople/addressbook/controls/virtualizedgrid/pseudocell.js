﻿Jx.delayDefine(People.Grid,"PseudoCell",function(){"use strict";function i(){}var r=window.People,t=r.Grid,n=t.PseudoCell=function(n){t.Cell.call(this,null,null,null,n);var i=this._element=document.createElement("div");i.tabIndex=-1};Jx.inherit(n,t.Cell);n.create=function(t,i,r,u,f){var e=new n(t);return e.itemOffset=r,e.groupIndex=u,e.gridIndex=i,f.appendChild(e.getElement()),e.position(),e};n.prototype.realize=Jx.fnEmpty;n.prototype.dispose=Jx.fnEmpty;n.prototype.scheduleHide=i;n.prototype.scheduleRealization=i;n.prototype.schedulePosition=i;n.prototype.getElement=function(){return this._element};n.prototype.returnToPool=function(){}})