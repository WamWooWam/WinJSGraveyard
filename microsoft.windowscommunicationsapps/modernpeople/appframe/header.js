﻿Jx.delayDefine(People,"CpHeader",function(){var n=window.People,r=n.Nav,t,i;n.CpHeader=function(t){this._name="People.CpHeader";this.initComponent();this._title=new n.CpTitle(t);this._frameCommands=new n.FrameCommands(t);this.append(this._title,this._frameCommands);this._leftoverElements=[]};Jx.augment(n.CpHeader,Jx.Component);n.CpHeader.tabIndexLast=1e3;t=n.CpHeader.TitleTypes={res:0,personName:1,resWithName:2};n.CpHeader.Scenes={ab:{id:"ab",type:t.res,resId:"/strings/addressBookHeader",headerTitleCssClass:"ab-headertitle"},allcontacts:{id:"allcontacts",type:t.res,resId:"/strings/allContactsPageHeader",backButtonCssClass:"app-backbutton"},whatsnew:{id:"whatsnew",type:t.res,resId:"/strings/whatsNewHeader",backButtonCssClass:"app-backbutton"},ct:{id:"ct",type:t.personName,backButtonCssClass:"app-backbutton"},create:{id:"create",type:t.res,resId:"/strings/createContactHeader",backButtonCssClass:"app-backbutton"},edit:{id:"edit",type:t.res,resId:"/strings/editContactHeader",backButtonCssClass:"app-backbutton"},editphoto:{id:"editphoto",type:t.res,resId:"/strings/editPhotoHeader",backButtonCssClass:"app-backbutton"},link:{id:"link",type:t.resWithName,resId:"/strings/linkHeader",backButtonCssClass:"app-backbutton"},none:{id:"none"},notification:{id:"notification",type:t.res,resId:"/strings/notificationHeader",backButtonCssClass:"app-backbutton"},search:{id:"search",type:t.res,resId:"/strings/searchHeader",backButtonCssClass:"app-backbutton"},galsearchresults:{id:"galsearchresults",type:t.res,resId:"/strings/searchResultsHeader",backButtonCssClass:"app-backbutton"}};n.CpHeader.prototype.getFrameCommands=function(){return this._frameCommands};n.CpHeader.prototype.deactivateUI=function(){Jx.Component.prototype.deactivateUI.call(this)};n.CpHeader.prototype.getUI=function(n){n.html='<div id="header_container" class="header-container"><div class="grid-header-back hiddenInEdit"><button class="win-backbutton hidden" id="idPeopleBack" type="button" aria-label="'+Jx.escapeHtml(Jx.res.getString("/strings/backButtonAriaLabel"))+'"/><\/div>'+Jx.getUI(this._title).html+'<div class="grid-header-search-container hiddenInEdit hiddenInCommandScene"><div class="grid-header-search" id="searchControlId" data-win-control="WinJS.UI.SearchBox" aria-expanded="false" aria-label="'+Jx.escapeHtml(Jx.res.getString("/strings/searchBoxAriaLabel"))+'"data-win-options="{ placeholderText : &quot;'+Jx.escapeHtml(Jx.res.getString("/strings/SearchBoxPlaceholder"))+'&quot;, searchHistoryDisabled : true, chooseSuggestionOnEnter: true }"><\/div><\/div>'+Jx.getUI(this._frameCommands).html+"<\/div>"};n.CpHeader.prototype._backEnabled=false;n.CpHeader.prototype._backBtn=null;n.CpHeader.prototype._searchControl=null;n.CpHeader.prototype.updateBackBtn=function(t){var i=this._backBtn,u=this._searchControl,f,e,r;i&&(WinJS.Utilities.removeClass(i,"hidden"),this._backBtnClass&&WinJS.Utilities.removeClass(i,this._backBtnClass),f=this._backEnabled=Jx.root.canGoBack(),i.disabled=!f,e=f?"false":"true",i.setAttribute("aria-hidden",e),i.setAttribute("aria-disabled",e),i.tabIndex=n.CpHeader.tabIndexLast,WinJS.Utilities.removeClass(u,"dynamic-win-searchbox-with-back-button"),u.getAttribute("aria-expanded")==="true"&&WinJS.Utilities.removeClass(u.querySelector(".win-searchbox-flyout"),"dynamic-win-searchbox-flyout-with-back-button"),t&&(this._backBtnClass=n.CpTitle.PageToScene[t].backButtonCssClass,this._backBtnClass&&WinJS.Utilities.addClass(i,this._backBtnClass)),WinJS.Utilities.removeClass(this._title.getElement(),"dynamic-search-grid-header-title"),WinJS.Utilities.removeClass(this._title.getElement().querySelector(".header-secondaryTitle"),"dynamic-search-header-secondaryTitle"),WinJS.Utilities.removeClass(this._title.getElement().querySelector(".header-title .header-title-text"),"dynamic-header-title-header-title-text"));r=this._headerTitle;r&&(this._headerTitleClass&&WinJS.Utilities.removeClass(r,this._headerTitleClass),t&&(this._headerTitleClass=n.CpTitle.PageToScene[t].headerTitleCssClass,this._headerTitleClass&&WinJS.Utilities.addClass(r,this._headerTitleClass)))};n.CpHeader.prototype._onBack=function(){this._backEnabled&&Jx.root.back()};n.CpHeader.prototype._onKeyup=function(n,t){t.type==="keyup"&&(t.key==="Spacebar"||t.key==="Enter")&&n.call(this)};n.CpHeader.prototype.activateUI=function(){Jx.log.info("CpHeader.activateUI");Jx.Component.prototype.activateUI.call(this);this._container=document.getElementById("header_container");var n=this._backBtn=document.getElementById("idPeopleBack");this._headerTitle=document.getElementById("idPeopleTitle");this._searchControl=document.getElementById("searchControlId");n.addEventListener("click",this._onBack.bind(this),false)};n.CpHeader.prototype._parentContainer=null;n.CpHeader.prototype.setParentContainer=function(n){this._parentContainer=n};i=n.CpHeader.Scenes;n.CpHeader.prototype._scene="";n.CpHeader.prototype._cleanupAnimations=Jx.fnEmpty;n.CpHeader.prototype.setupUpdate=function(t){var u=this._parentContainer;Jx.setClass(u,"snappable",!r.Pages[t].blockSnap);Jx.setClass(u,"hidden",n.CpTitle.PageToScene[t]===i.none)};n.CpHeader.prototype.update=function(t,u,f,e){var s,h,o,a,c,v,l;return Jx.log.info("P.CpHeader.update: selectedPage="+t),s=n.CpTitle.PageToScene[t],h=this._container,o=null,this._cleanupAnimations(),n.Animation.disabled||s===this._scene||this._scene===""||(n.Animation.removeOutgoingElements(this._leftoverElements),this._leftoverElements=[],o=h.cloneNode(true),o.id="idOutgoingHeader",h.parentNode.appendChild(o),this._leftoverElements.push(o)),a=this._backEnabled,this.updateBackBtn(t),this._title.update(t,u,f,e),this._frameCommands.update(),c=[],s!==i.none&&(!a&&this._backEnabled&&c.push(this._backBtn),this._backEnabled&&this._searchControl.getAttribute("aria-expanded")==="true"&&(WinJS.Utilities.addClass(this._searchControl,"dynamic-win-searchbox-with-back-button"),WinJS.Utilities.addClass(this._searchControl.querySelector(".win-searchbox-flyout"),"dynamic-win-searchbox-flyout-with-back-button")),s!==this._scene&&c.push(this._title.getElement()),h.className="header-container",r.Pages[t].isEdit?(h.className+=" edit-create-scene",c.push(this._frameCommands.getElement())):s===i.search?h.className+=" search-scene":s===i.ct?h.className+=" ct-scene":s===i.allcontacts&&(WinJS.Utilities.addClass(this._title.getElement(),"dynamic-search-grid-header-title"),WinJS.Utilities.addClass(this._title.getElement().querySelector(".header-secondaryTitle"),"dynamic-search-header-secondaryTitle"),WinJS.Utilities.addClass(this._title.getElement().querySelector(".header-title .header-title-text"),"dynamic-header-title-header-title-text")),this._frameCommands.hasCommands()&&(h.className+=" has-commands-scene")),this._scene=s,v=this,l={entering:c,exiting:o?[o]:[],onEnterComplete:function(){v._cleanupAnimations()},onExitComplete:function(){o&&Jx.addClass(o,"under")}},c.forEach(function(n){n.style.opacity="0"}),this._cleanupAnimations=function(){o&&(n.Animation.removeOutgoingElement(o),n.Sequence.remove(this._leftoverElements,o));l.onExitComplete=l.onEnterComplete=this._cleanupAnimations=Jx.fnEmpty},l};n.CpHeader.prototype.updateSecondaryTitle=function(n){Jx.isNonEmptyString(n)&&this._title.setSecondaryTitleText(n)};n.CpHeader.prototype.clearSecondaryTitle=function(){this._title.setSecondaryTitleText("")}})