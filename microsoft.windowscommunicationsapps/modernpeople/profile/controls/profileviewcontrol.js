﻿Jx.delayDefine(People.Controls,"ProfileViewControl",function(){function o(t){var e,i,u,f,o;$include("$(cssResources)/controls-people.css");e=this._person=t.data;i=this._hostDiv=t.element;u=this._host;this._cachedWidth=0;this._jobSet=u.getJobSet().createChild();this._jobSet.addUIJob(n.MeCommands,n.MeCommands.addCommands,[u],n.Priority.appbar);f=this._layout=u.getLayout();this._layoutChangedHandler=this._resizeContent;f.addLayoutChangedEventListener(this._layoutChangedHandler,this);f.addOrientationChangedEventListener(this._layoutChangedHandler,this);this._shareCallback=n.ShareSource.sharePersonCallback.bind(this,e);o=Jx.app;o.addListener("sharesourcedatarequested",this._shareCallback);var h={interactive:true,onClick:function(){n.Nav.navigate(n.Nav.getEditMePictureUri())}},s=this._ic=new n.IdentityControl(this._person,this._jobSet,h),c=s.getUI(n.IdentityElements.TileLayout,{primaryContent:null,className:"mePrfView-ic-me"});i.innerHTML="<div id='meProfileViewControl' class='profileBase-container' aria-label='"+Jx.escapeHtml(Jx.res.getString("/strings/profileDetailPageAriaLabel"))+"'><div class='profile-icContainer'>"+c+"<\/div><div id='profileViewControl'><\/div><div id='profileViewPadding' class='profileBase-paddingDiv' aria-disabled='true'><\/div><\/div>";this._jobSet.addUIJob(this,function(){this._loadForm();s.activateUI(i);var n=t.context;t.mode==="hydrate"&&n&&r.ContactControlPosition.setScrollPosition(i,n)},null,n.Priority.next)}function s(){return r.ContactControlPosition.getScrollPosition(this._hostDiv)}function h(){var t,n;return this._shareCallback&&(t=Jx.app,t.removeListener("sharesourcedatarequested",this._shareCallback),this._shareCallback=null),this._layoutChangedHandler&&(this._layout.removeLayoutChangedEventListener(this._layoutChangedHandler,this),this._layout.removeOrientationChangedEventListener(this._layoutChangedHandler,this),this._layoutChangedHandler=null),n=this._jobSet,n&&n.cancelAllChildJobs(),true}function c(){Jx.dispose(this._jobSet);this._jobSet=null;this._person=null;this._ic&&(this._ic.shutdownUI(),this._ic=null);this._hostDiv.innerHTML=""}function l(n,t,i){var r,u,f,e;for(r in t)if(t[r].fieldList||(t[r].fieldList=[]),u=i[r],u)t[r].fieldList=u;else for(f in n)e=n[f].group,r===e&&t[e].fieldList.push(f)}var n=window.People,r=n.Controls,a=n.Nav,v=n.Layout,u=null,f=null,i=function(n,t){return function(){try{return t.apply(this,arguments)}finally{}}},e=r.ProfileViewControl=function(n){this._host=n},t=e.prototype;t.load=i("load",o);t.prepareSuspension=i("prepareSuspension",s);t.activate=i("activate",function(){});t.deactivate=i("deactivate",h);t.unload=i("unload",c);t._resize=function(){var n=this._hostDiv;this._cachedWidth=r.ContactControlPosition.update(this._layout,this._cachedWidth,n.querySelector("#profileViewControl"),n.querySelector("#profileViewPadding"))};t._resizeContent=function(){this._jobSet.addUIJob(this,this._resize,null,n.Priority.realizeItem)};t._loadForm=function(){var s=n.UiForm.getMarket(),r=function(){return s.region==="JP"},i={"ja-JP":{name:["lastName","firstName","yomiLastName","yomiFirstName","title","suffix","middleName"]},firstLast:{name:["title","firstName","middleName","lastName","suffix","yomiFirstName","yomiLastName"]},lastFirst:{name:["title","lastName","firstName","suffix","yomiLastName","yomiFirstName","middleName"]}},e={title:{group:"name",active:false},firstName:{group:"name",active:false},middleName:{group:"name",active:false},lastName:{group:"name",active:false},suffix:{group:"name",active:false},yomiFirstName:{group:"name",active:false,display:r},yomiLastName:{group:"name",active:false,display:r},significantOther:{group:"contactInfo",active:false},homePhoneNumber:{group:"contactInfo",type:"tel"},mobilePhoneNumber:{group:"contactInfo",type:"tel"},homeFaxNumber:{group:"contactInfo",active:false},personalEmailAddress:{group:"contactInfo",type:"email"},homeLocation:{group:"contactInfo",type:"mapLocation"},jobTitle:{group:"workInfo",active:false},company:{group:"workInfo",active:false},yomiCompanyName:{group:"workInfo",active:false},businessPhoneNumber:{group:"workInfo",type:"tel"},pagerNumber:{group:"workInfo",active:false},businessFaxNumber:{group:"workInfo",active:false},businessEmailAddress:{group:"workInfo",type:"email"},businessLocation:{group:"workInfo",type:"mapLocation"}},o={name:{},contactInfo:{},workInfo:{}},t;u||(u=new n.LocaleHelper);f||(f=new n.NameHelper(u));t=i[u.locale];t||(t=i.firstLast,f.IsFirstLast()||(t=i.lastFirst));l(e,o,t);this._jobSet.addUIJob(this,function(){var t=new n.UiForm({fieldList:e,groupList:o,loc:Jx.res,cssPrefix:"mePrfView-",residPrefix:"/meStrings/meCtrl_"});t.createViewForm(this._hostDiv.querySelector("#profileViewControl"),this._person);this._resizeContent()},null,n.Priority.next)}})