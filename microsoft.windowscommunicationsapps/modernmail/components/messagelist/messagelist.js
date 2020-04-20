﻿Jx.delayDefine(Mail,"CompMessageList",function(){"use strict";function f(n,t,i){var r=t.account,u=r.newsletterView,f=r.socialView,e=null;e=i.hasNewsletterCategory&&u?u:i.hasSocialUpdateCategory&&f?f:i.primaryView;t.updateNav(t.account,e,i)}function u(n,t){var i=t.objectId;return n.findIndexByMessageId(i)!==-1?WinJS.Promise.as():Mail.Promises.waitForEvent(n,"itemAdded",function(n){var r=n.objectId;return r===i||r===t.parentConversationId}).then(function(){return Mail.Promises.waitForEvent(n,"endChanges")})}function e(n,t,i){if(i){var r=null;return t.parentConversationId||(r=Mail.Promises.waitForEvent(t,"changed",function(){return Jx.isNonEmptyString(t.parentConversationId)})),WinJS.Promise.as(r).then(function(){return u(n,t)})}return u(n,t)}function r(n){Jx.mark("CompMessageList."+n)}function t(n){Jx.mark("CompMessageList."+n+",StartTA,CompMessageList")}function i(n){Jx.mark("CompMessageList."+n+",StopTA,CompMessageList")}Mail.CompMessageList=function(n,r,u,f,e){t("Ctor");t("Ctor_InitComp");this.initComponent();i("Ctor_InitComp");this._name="Mail.CompMessageList";this._host=n;this._selection=r;this._animator=f;this._settings=e;this._syncMonitor=null;this._listView=null;this._collection=null;this._dataAdaptor=null;this._itemRenderer=null;this._selectionHandler=null;this._nameHeader=null;this._progressRing=null;this._filter=null;this._notificationHandler=null;this._dataProvider=null;this._searchHandler=null;this._messageChangedPromise=null;this._updateDatasourcePromise=null;this._emptyTextControl=null;var o=this._viewIntro=new Mail.ViewIntroductionHeader(e);this.appendChild(o);this._commandBar=u;this._visible=true;this._jobSet=Jx.scheduler.createJobSet();this._disposer=new Mail.Disposer;this._collectionDisposer=null;this._searchDisposer=null;this._canvasCommandBar=null;this._registerCanvasCommandBarJob=null;this._rootElement=null;i("Ctor")};Jx.augment(Mail.CompMessageList,Jx.Component);Mail.CompMessageList.defaultElementId="mailMessageListCollection";var n=Mail.CompMessageList.prototype;n.deactivateUI=function(){Jx.Component.prototype.deactivateUI.call(this);Jx.dispose(this._jobSet);this._jobSet=null;Jx.dispose(this._disposer);this._disposer=null;this._filter=null;this._progressRing=null;Mail.ListViewHelper.enableAnimation(this._listView);this._animator.unregisterMessageList();Mail.MessageListItemFactory.listView=null;this._disposeCollection();this._listView.dispose();this._listView=null;this._disposeView();Jx.dispose(this._searchDisposer);this._searchDisposer=null;Jx.dispose(this._searchHandler);this._searchHandler=null;Jx.dispose(this._canvasCommandBar);this._canvasCommandBar=null};n.shutdownComponent=function(){Jx.Component.prototype.shutdownComponent.call(this)};n.getUI=function(n){var t=Jx.res,i=Jx.escapeHtml;n.html="<div id='mailFrameMessageListBackground' class='mailFrameMessageListBackground'><div id='mailFrameMessageList' class='supportMultiSelect'><div id='messageList' class='selectionModeInactive'><div id='mailMessageListHeaderArea'><div id='mailMessageListAccountName' class='typeSizeNormal' role='heading'><\/div><div id='mailMessageListFolderName' role='heading'><\/div><div id='mailMessageListCanvasButtons'><button class='mailCanvasButton mailMessageListRespondButton hidden mirrorInRTL useCustomFont' aria-label='"+i(t.getString("mailCommandRespondAriaLabel"))+"' type='button'><div aria-hidden='true' class='moveLeftByTwoPixels'>&#xE172;<\/div><\/button><button class='mailCanvasButton mailMessageListComposeButton hidden' aria-label='"+i(t.getString("mailCommandComposeAriaLabel"))+"' type='button'><div aria-hidden='true'>&#xE109;<\/div><\/button><button class='mailCanvasButton mailMessageListDeleteButton hidden' aria-label='"+i(t.getString("mailCommandDeleteAriaLabel"))+"' type='button'><div aria-hidden='true'>&#xE107;<\/div><\/button><\/div>"+Jx.getUI(this._viewIntro).html+"<\/div><div id='mailMessageListFilterHeader' class='mailMessageListSecondRow'><div id='mailMessageListFilterContainer'><input class='mailMessageListAllCheckbox' role='checkbox' type='checkbox' aria-label='"+i(t.getString("mailSelectAllCheckboxAriaLabel"))+"'/><div id='mailMessageListFilter' class='comboboxHost' aria-expanded='false' aria-haspopup='true' role='button' tabindex='0'><div class='comboboxText' aria-hidden='true'><\/div><div class='comboboxArrow' aria-hidden='true'>&#x2002;&#xE015;<\/div><\/div><\/div><button id='mailMessageListStartSearch' aria-label='"+i(t.getString("mailMessageListStartSearch"))+"' role='button'>&#xE094;<\/button><\/div><div id='mailMessageListSearchHeader' class='mailMessageListSecondRow'><div id='mailMessageListSearchScope' class='comboboxHost' aria-expanded='false' aria-haspopup='true' role='button' tabindex='0'><div class='comboboxText' aria-hidden='true'><\/div><div class='comboboxArrow' aria-hidden='true'>&#x2002;&#xE015;<\/div><\/div><div id='mailMessageListSearchBoxContainer'><div id='mailMessageListSearchBox'><\/div><button id='mailMessageListDismissSearch' aria-label='"+Jx.escapeHtml(Jx.res.getString("mailMessageListCancelSearch"))+"' role='button'>&#xE0A4;<\/button><\/div><\/div><div id='messageListContents'><div id='mailMessageListEmptyMessageWrapper'><div id='mailMessageListEmptyMessage' class='hidden typeSizeNormal'><\/div><\/div><div id='mailMessageListCollection' class='win-selectionstylefilled' aria-describedby='mailMessageListCollectionDesc' aria-label='"+i(t.getString("mailMessageListCollectionAriaLabel"))+"'><\/div><div id='mailMessageListCollectionDesc' class='hidden'  aria-label='"+i(t.getString("mailMessageListListViewAriaDescription"))+"'><\/div><\/div><progress id='mailMessageListProgress' class='win-progress hidden' max='100'><\/progress><div id='mailMessageListSearchStatus' class='hidden'><\/div><\/div><\/div><\/div>"};n._createListView=function(){var f,e,o,n,r,u;t("createListView");Mail.log("MessageList_listViewStartup",Mail.LogEvent.start);t("createListView_listViewItemRenderer");f=new WinJS.UI.simpleItemRenderer(this._renderItem.bind(this));i("createListView_listViewItemRenderer");t("createListView_layout");e=new WinJS.UI.ListLayout;i("createListView_layout");t("createListView_dataSource");Mail.CompMessageListVirtualizedDataSource=WinJS.Class.derive(WinJS.UI.VirtualizedDataSource,function(n,t){this._baseDataSourceConstructor(n,t)});o=new Mail.CompMessageListVirtualizedDataSource(this,{cacheSize:200});i("createListView_dataSource");t("createListView_ctor");n=document.getElementById(Mail.CompMessageList.defaultElementId);r=this._listView=new WinJS.UI.ListView(n,{itemTemplate:f,layout:e,itemDataSource:o,selectionMode:"multi",swipeBehavior:"select",tapBehavior:"directSelect",itemsDraggable:true});i("createListView_ctor");Mail.MessageListItemFactory.listView=r;Mail.ListViewHelper.disableAnimation(this._listView);u=n.querySelector(".win-viewport");this._disposer.addMany(new Mail.EventHook(r,"loadingstatechanged",this._onLoadingStateChanged,this),new Mail.EventHook(u,"click",this._onClick,this),new Mail.EventHook(u,"keydown",this._onKeyDown,this));this._animator.registerMessageList(this._listView);i("createListView")};n._onFirstLaunch=function(){var n,t;n=this._listView.loadingState;Mail.writeProfilerMark("listview state: "+n);n==="viewPortLoaded"&&(t=Mail.Globals.splashScreen,t.dismiss());this._isViewReady()&&(Mail.log("MessageList_listViewStartup",Mail.LogEvent.stop),this._onFirstLaunch=Jx.fnEmpty)};n.focus=function(){t("focus");this._refreshListView();Mail.setActiveElement(Mail.CompMessageList.defaultElementId)||Mail.setActiveElement(Mail.CompApp.rootElementId);i("focus")};n._onLoadingStateChanged=function(){var n=this._isViewReady()&&this._isSyncComplete();n&&Jx.mark("MessageList_listViewReady");this._setLocked();this._onFirstLaunch()};n.activateUI=function(){t("activateUI");var n=this._rootElement=document.getElementById("mailFrameMessageListBackground");this._animator.setMessageListElements(n,n.querySelector("#mailFrameMessageList"),n.querySelector("#mailMessageListCollection"));Jx.Component.prototype.activateUI.call(this);this._createCanvasCommandBar();this._filter=new Mail.MessageListFilter(document.getElementById("mailMessageListFilter"),this._selection,this._settings);Mail.Utilities.ComposeHelper.currentSelectedFilter=this._filter;t("activateUI_CreateSubComponents");this._createListView();this._progressRing=new Mail.MessageListProgressRing(document.getElementById("mailMessageListProgress"));this._viewIntro.setContainer(document.getElementById("mailMessageListHeaderArea"));this._updateView(this._selection.message,this._selection.messageIndex);i("activateUI_CreateSubComponents");this._disposer.addMany(Jx.scheduler.addJob(this._jobSet,Mail.Priority.messageListInitSearch,"CompMessageList._getSearchHandler",function(){this._searchHandler=this._getSearchHandler()},this),new Mail.EventHook(Mail.guiState,"layoutChanged",this._onLayoutChanged,this),new Mail.EventHook(this._selection,"navChanged",this._onNavigation,this),this._filter,new Mail.EventHook(this._filter,"changed",this._onFilterChanged,this),new Mail.EventHook(this._settings,Mail.AppSettings.Events.threadingOptionChanged,this._threadingOptionChanged,this),Mail.EventHook.createGlobalHook("composeVisibilityChanged",this._onComposeVisibilityChanged,this),this._progressRing);i("activateUI")};n._onComposeVisibilityChanged=function(){Mail.Utilities.ComposeHelper.isComposeShowing||this.focus()};n._createCanvasCommandBar=function(){this._canvasCommandBar||!Mail.guiState.isOnePane||Jx.isObject(this._registerCanvasCommandBarJob)||(this._registerCanvasCommandBarJob=Jx.scheduler.addJob(this._jobSet,Mail.Priority.registerCommandBar,"CompMessageList: register command bar",function(){this._registerCanvasCommandBarJob=null;this._canvasCommandBar=new Mail.CompCanvasCommandBar(document.getElementById("messageList"),{respond:".mailMessageListRespondButton",compose:".mailMessageListComposeButton",deleteMessage:".mailMessageListDeleteButton"});Mail.Globals.commandManager.registerCommandHost(this._canvasCommandBar)},this))};n._onLayoutChanged=function(){var n=Mail.guiState;(n.isThreePane&&!Mail.Utilities.ComposeHelper.isComposeShowing||n.isMessageListActive)&&this.focus();this._createCanvasCommandBar()};n._onFilterChanged=function(){this._animateRefresh()};n._isSearching=function(){return Jx.isObject(this._searchHandler)&&(this._searchHandler.isSearching||this._searchHandler.isSearchHeaderVisible)};n._dismissSearch=function(n){Jx.isObject(this._searchHandler)&&this._searchHandler.dismissSearch(n)};n._getSearchHandler=function(){var n=this._searchHandler=new Mail.SearchHandler(this._selection,this._animator);return this._searchDisposer=new Mail.Disposer(new Mail.EventHook(n,"executeSearch",this._onExecuteSearch,this),new Mail.EventHook(n,"localSearchComplete",this._onLocalSearchCompleted,this),new Mail.EventHook(n,"searchComplete",this._onSearchCompleted,this),new Mail.EventHook(n,"exitSearch",this._onExitSearch,this)),this._getSearchHandler=function(){return this._searchHandler},this._searchHandler};n._onExecuteSearch=function(){this._showMessageList(false);this._adjustProgressRingVisibility();document.getElementById("mailMessageListEmptyMessage").classList.add("hidden")};n._onExitSearch=function(n){var i,r;var t=this._selection.message,u=t&&t.isLocalMessage,e=Mail.Globals.platform;n.reason==="viewChanged"?this._searchHandler.hideSearchHeader():!u||this._selection.view.containsMessage(t)||n.reason==="messageChanged"?(i=null,r=false,n.reason==="messageChanged"?(i=n.data,r=i.isDraft):u&&(i=t),this._filter.setToAll(),this._animateRefresh(true,r,i)):(this._searchHandler.hideSearchHeader(),f(e,this._selection,t))};n._setLocked=function(){var n=Mail.ViewSyncMonitor.SyncStatus,t=this._isViewReady()&&this._syncMonitor&&this._syncMonitor.getSyncStatus()===n.completed;this._collection&&(t?this._collection.unlock():this._collection.lock())};n._onLocalSearchCompleted=function(n){var t,i;t=this._searchHandler.scopeSwitcher;this._updateDataProvider(new Mail.SearchDataProvider(n,t,this._listView,document.getElementById("mailMessageListSearchStatus")));this._disposeCollection();i=document.getElementById("mailMessageListEmptyMessage");this._emptyTextControl=new Mail.SearchEmptyTextControl(i,this._selection,t);this._updateCollection(this._dataProvider.collection)};n._onSearchCompleted=function(){this._refreshNoMessageState()};n._onNavigation=function(n){n.accountChanged||n.viewChanged||this._isSearching()?this._onViewChanged(n.desiredMessage):n.desiredMessage?this._onMessageSelected(n.desiredMessage):this._onViewReselected()};n._onViewChanged=function(n){this._isSearching()&&this._dismissSearch({reason:"viewChanged"});this._filter.setToAll();this._updateView(n);n&&n.isDraft||this.focus()};n._onViewReselected=function(){t("_viewReselected");this._filter.currentFilter!==Microsoft.WindowsLive.Platform.FilterCriteria.all?(this._filter.setToAll(),this._animateRefresh()):this._selectionHandler.isSelectionMode?this._selectionHandler.exitSelectionMode():this._resetSelection();i("_viewReselected")};n._onMessageSelected=function(n){if(t("_messageChanged"),this._isSearching()){this._dismissSearch({reason:"messageChanged",data:n});return}n.isDraft&&this._selectionHandler.exitSelectionMode();this._messageChangedPromise&&this._messageChangedPromise.cancel();this._messageChangedPromise=e(this._collection,n,this._supportsThreading());this._messageChangedPromise.then(function(n){this._messageChangedPromise=null;this._resetSelection(n)}.bind(this,n));i("_messageChanged")};n._updateView=function(n,r){t("_updateView");var f=this._selection,u=f.view;this._disposeView();this._syncMonitor=Mail.ViewSyncMonitor.create(u);this._syncMonitor.addListener("syncStatusChanged",this._onFolderSyncStatusChange,this);this._nameHeader=new Mail.FolderNameHeader(this._selection);this._viewIntro.setView(u);this._showViewCollection(n,r);i("_updateView")};n._animateRefresh=function(n,t,i){var r=document.getElementById("messageListContents"),u=[r];n&&u.push(document.getElementById("mailMessageListSearchHeader"));this._animator.shortFadeOut(u).then(function(n){var t=Mail.ListViewHelper.waitForListView(this._listView);return this._showViewCollection(n),t}.bind(this,i)).then(function(){return n&&this._getSearchHandler().hideSearchHeader(),this._animator.shortFadeIn([r])}.bind(this)).done(function(){t||this.focus();this._adjustProgressRingVisibility()}.bind(this))};n._threadingOptionChanged=function(){!this._isSearching()&&this._isSyncComplete()&&this._animateRefresh(false,true)};n._supportsThreading=function(){return!this._isSearching()&&Mail.ViewCapabilities.supportsThreading(this._selection.view,this._settings)};n._adjustProgressRingVisibility=function(){this._progressRing.adjustVisibilityForSyncStatus(!this._isSearching()&&!this._isSyncComplete())};n._showViewCollection=function(n,r){var u,a;t("_showViewCollection");this._disposeCollection();var e=this._supportsThreading(),o=this._selection.view,h=this._filter,c=this._syncMonitor,l=this._listView,s=null,f={threaded:e,syncMonitor:c,isViewReady:this._isViewReady()};e&&(f.initialExpansion=0,n&&(f.initialExpansionId=n.objectId,f.initialExpansion=r));u=new Mail.ViewDataProvider(o,f,h);this._updateDataProvider(u);this._selection.registerQuery(u.query,h.currentFilter);e&&(s=new Mail.AccessibilityHelper(l,u.collection));a=document.getElementById("mailMessageListEmptyMessage");this._emptyTextControl=Mail.EmptyTextControl.create(a,c,o);this._updateCollection(u.collection,n);this._collectionDisposer.add(new Mail.UnseenMonitor(o,l,document));s&&this._collectionDisposer.add(s);i("_showViewCollection")};n._updateListViewResources=function(n,t){return this._dataAdaptor=new Mail.MessageListDataSource(n),this._adjustProgressRingVisibility(),this._updateDatasourcePromise=this._updateDatasource(),this._updateSelectionHandler(n),t&&this._updateScrollPosition(t),this._refreshNoMessageState(),this._updateDatasourcePromise};n._updateScrollPosition=function(n){var t=this._collection.findIndexByMessageId(n.objectId);t>=0&&(this._listView.indexOfFirstVisible=t,this._listView.currentItem={index:t})};n._isListViewVisible=function(){var t=document.getElementById(Mail.CompMessageList.defaultElementId),n=Mail.guiState.isMessageListVisible&&!t.classList.contains("invisible")&&!this._rootElement.classList.contains("invisible");return r("_isListViewVisible:= "+n),n};n._refreshListView=function(){r("_refreshListView recalculateRequired:= "+this._recalculateRequired);this._recalculateRequired&&this._isListViewVisible()&&(t("_refreshListView"),this._listView.recalculateItemPosition(),this._recalculateRequired=false,i("_refreshListView"))};n._updateCollection=function(n,r){t("_updateCollection");this._collection=n;this._collectionDisposer=new Mail.Disposer(n,new Mail.EventHook(n,"endChanges",this._refreshNoMessageState,this),new Mail.EventHook(n,"reset",this._onCollectionReset,this));this._updateListViewResources(n,r).then(function(n){this._resetSelection(n)}.bind(this,r));n.count!==0&&this._isSyncComplete()||Jx.EventManager.fireDirect(null,"mail-messageList-loadedEmptyFolder");i("_updateCollection")};n._updateDataProvider=function(n){Jx.dispose(this._dataProvider);this._dataProvider=n};n._updateSelectionHandler=function(n){this._selectionHandler=new Mail.SelectionHandler(n,this._listView,this._selection,this._commandBar);this._itemRenderer=new Mail.MailHeaderRenderer(this._notificationHandler,this._selectionHandler,this._supportsThreading(),this._selection)};n._resetSelection=function(n,t,i){var r=n?n.objectId:null;this._selectionHandler.controller.setInitialSelection(r,t,i)};n._updateDatasource=function(){return t("_updateDatasource"),this._listView.itemDataSource=new Mail.CompMessageListVirtualizedDataSource(this,{cacheSize:200}),this._recalculateRequired=true,Mail.ListViewHelper.setSelectionMode(this._listView,this._dataProvider.selectionMode),i("_updateDatasource"),Mail.ListViewHelper.waitForListView(this._listView,"viewPortLoaded")};n._disposeView=function(){t("_disposeView");Jx.dispose(this._nameHeader);this._nameHeader=null;this._syncMonitor&&(this._syncMonitor.removeListener("syncStatusChanged",this._onFolderSyncStatusChange,this),Jx.dispose(this._syncMonitor),this._syncMonitor=null);i("_disposeView")};n._disposeListViewResources=function(){this._messageChangedPromise&&(this._messageChangedPromise.cancel(),this._messageChangedPromise=null);this._updateDatasourcePromise&&(this._updateDatasourcePromise.cancel(),this._updateDatasourcePromise=null);Jx.dispose(this._selectionHandler);this._selectionHandler=null;Jx.dispose(this._itemRenderer);this._itemRenderer=null;Jx.dispose(this._dataAdaptor);this._dataAdaptor=null;Jx.dispose(this._notificationHandler);this._notificationHandler=null};n._disposeCollection=function(){t("_disposeCollection");this._selection.clearQuery();this._disposeListViewResources();Jx.dispose(this._emptyTextControl);this._emptyTextControl=null;Jx.dispose(this._collectionDisposer);this._collectionDisposer=null;this._collection=null;i("_disposeCollection")};n._onClick=function(n){Jx.EventManager.fireDirect(null,"mail-messageList-clicked",n)};n._onKeyDown=function(n){Jx.EventManager.fireDirect(null,"mail-messageList-keydown",n)};n._onCollectionReset=function(){t("_onCollectionReset");this._disposeListViewResources();this._updateListViewResources(this._collection).then(function(){var n=this._selection;this._resetSelection(n.message,n.messageIndex,Mail.SelectionModel.ScrollOptions.scrollToTop);i("_onCollectionReset")}.bind(this))};n._refreshNoMessageState=function(){t("_refreshNoMessageState");var f=Jx.isObject(this._collection)&&!this._collection.mailItems.isEmpty,n=this._isSyncComplete(),e=this._isSearching(),u=f&&(n||e),o=!u&&(n||e);r("_refreshNoMessageState - isCollectionNonEmpty: "+f+" showMessageList: "+u+" showEmptyText: "+o);this._showMessageList(u);this._emptyTextControl.setVisibility(o,!n);i("_refreshNoMessageState")};n._onFolderSyncStatusChange=function(){this._setLocked();this._adjustProgressRingVisibility();this._refreshNoMessageState()};n.appReset=function(){t("appReset");this._dismissSearch();this._resetSelection();i("appReset")};Object.defineProperty(n,"collection",{get:function(){return this._collection}});Object.defineProperty(n,"compareByIdentity",{get:function(){return true}});n.setNotificationHandler=function(n){Jx.isNullOrUndefined(this._collection)||(this._notificationHandler=new Mail.MessageListNotificationHandler(this._collection,this._listView,n))};n.getCount=function(){return this._dataAdaptor?this._dataAdaptor.getCount():WinJS.Promise.wrap(0)};n.itemsFromIndex=function(n,t,i){return this._dataAdaptor.itemsFromIndex(n,t,i)};n._renderItem=function(n){return this._itemRenderer.renderItem(n)};n._isSyncComplete=function(){return this._syncMonitor&&this._syncMonitor.isSyncCompleted};n._isViewReady=function(){return Mail.ListViewHelper.isListViewReady(this._listView)};n._showMessageList=function(n){var t,r,i;t=document.getElementById(Mail.CompMessageList.defaultElementId);r=!t.classList.contains("invisible");r!==n&&(Mail.writeProfilerMark("Mail.CompMessageList._showMessageList - isVisible: "+n),i=document.activeElement,!n&&i&&Mail.isElementOrDescendant(i,t)&&Mail.setActiveElement(Mail.CompApp.rootElementId),Jx.setClass(t,"invisible",!n),n?(this._refreshListView(),this._selectionHandler.controller.setInitialSelection()):this._selectionHandler.controller.clearDisplayedItem())};n.setEnabled=function(n){Jx.setClass(this._rootElement,"invisible",!n)};n.resolveDrag=function(n){var u=this._collection,i=this._selectionHandler.getModel().selection(),t=n.getIndices(),r=null;return r=t.length!==1||i.isIndexSelected(t[0])?i.logicalItems:[u.item(t[0])],r.reduce(function(n,t){var i=t.data;return Jx.isInstanceOf(i,Mail.UIDataModel.MailItem)&&n.push(i),n},[])}})