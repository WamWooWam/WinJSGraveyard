﻿Jx.delayDefine(People,"JobSet",function(){"use strict";var n=window.People,t=n.Priority;n.JobSet=function(n){this._real=n};n.JobSet.prototype.addUIJob=function(n,t,i,r){Jx.scheduler.addJob(this._real,r,null,t,n,i)};n.JobSet.prototype.cancelJobs=function(){this._real.cancelJobs()};n.JobSet.prototype.cancelAllChildJobs=function(){this._real.cancelJobs()};n.JobSet.prototype.setVisibility=function(n){this._real.visible=n};Object.defineProperty(n.JobSet.prototype,"isVisible",{get:function(){return this._real.visible}});n.JobSet.prototype.setOrder=function(n){this._real.order=n};n.JobSet.prototype.createChild=function(){return new n.JobSet(Jx.scheduler.createJobSet(this._real))};n.JobSet.prototype.dispose=function(){Jx.dispose(this._real)}})