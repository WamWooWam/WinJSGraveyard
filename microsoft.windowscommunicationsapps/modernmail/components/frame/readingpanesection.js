﻿Jx.delayDefine(Mail,"ReadingPaneSection",function(){var t=Mail.ReadingPaneSection=function(n,t,i){this.initComponent();this._animator=t;var r=this._readingPane=new Mail.StandardReadingPane("mailFrameReadingPane",n,i,t);this.append(r);this._element=null},n;Jx.augment(t,Jx.Component);n=t.prototype;n.getUI=function(n){n.html="<div id='mailFrameReadingPaneSection'><div id='mailFrameReadingPane' class='mailFrameReadingPaneChild'>"+Jx.getUI(this._readingPane).html+"<\/div><div id='idCompCompose' class='invisible mailFrameReadingPaneChild'><\/div><\/div>"};n.onActivateUI=function(){var t=this._element=document.getElementById("mailFrameReadingPaneSection"),n=this._animator;n&&n.setReadingPaneElements(t)};n.setEnabled=function(n){Jx.setClass(this._element,"invisible",!n)}})