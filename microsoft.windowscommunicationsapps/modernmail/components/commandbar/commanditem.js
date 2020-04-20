﻿Jx.delayDefine(Mail.Commands,["Item","ToggleItem","MenuItem","ToggleMenuItem"],function(){Mail.Commands.Item=function(n){this._options=n;this._cachedLabel=null;this._cachedTooltip=null;this.isEnabled=n.isEnabled||function(){return true}};Mail.Commands.Item.prototype.getOption=function(){var n=this.label,t={id:this.id,type:this.type,icon:this.icon,useCustomFont:this.useCustomFont,tooltip:this.tooltip};return Jx.isString(n)&&(t.label=n),t};Mail.Commands.Item.prototype.invalidateContextualFields=function(){this._cachedLabel=null;this._cachedTooltip=null};Object.defineProperty(Mail.Commands.Item.prototype,"tooltip",{get:function(){if(!Jx.isNonEmptyString(this._cachedTooltip)&&this._shortcutLabelId){var n=this._shortcutLabel;this._cachedTooltip=Jx.res.loadCompoundString(this._shortcutLabelId,n?Jx.key.getLabel(n):"")}return this._cachedTooltip},enumerable:true});Object.defineProperty(Mail.Commands.Item.prototype,"_shortcutLabel",{get:function(){return this._options.shortcutLabel},enumerable:true});Object.defineProperty(Mail.Commands.Item.prototype,"_shortcutLabelId",{get:function(){return this._options.shortcutLabelId},enumerable:true});Object.defineProperty(Mail.Commands.Item.prototype,"_labelLocId",{get:function(){return this._options.labelLocId},enumerable:true});Object.defineProperty(Mail.Commands.Item.prototype,"id",{get:function(){return this._options.id},enumerable:true});Object.defineProperty(Mail.Commands.Item.prototype,"shortcuts",{get:function(){return this._options.shortcuts},enumerable:true});Object.defineProperty(Mail.Commands.Item.prototype,"label",{get:function(){return this._options.type==="separator"?null:(Jx.isNullOrUndefined(this._cachedLabel)&&(this._cachedLabel=Jx.res.getString(this._labelLocId)),this._cachedLabel)},enumerable:true});Object.defineProperty(Mail.Commands.Item.prototype,"showAsSelected",{get:function(){return false},enumerable:true});Object.defineProperty(Mail.Commands.Item.prototype,"icon",{get:function(){return this._options.icon},enumerable:true});Object.defineProperty(Mail.Commands.Item.prototype,"useCustomFont",{get:function(){return this._options.useCustomFont||false},enumerable:true});Object.defineProperty(Mail.Commands.Item.prototype,"type",{get:function(){return this._options.type},enumerable:true});Object.defineProperty(Mail.Commands.Item.prototype,"onInvoke",{get:function(){return function(n,t,i){this.isEnabled(n)&&this._options.handler.call(null,n,t,i)}.bind(this)},enumerable:true});Object.defineProperty(Mail.Commands.Item.prototype,"enableContexts",{get:function(){return this._options.enableContext},enumerable:true});Object.defineProperty(Mail.Commands.Item.prototype,"dismissAfterInvoke",{get:function(){return this._options.dismissAfterInvoke},enumerable:true});Object.defineProperty(Mail.Commands.Item.prototype,"noAnimationOnDismiss",{get:function(){return this._options.noAnimationOnDismiss},enumerable:true});Mail.Commands.ToggleItem=function(n){this._cachedToggleState=null;Mail.Commands.Item.call(this,n)};Jx.inherit(Mail.Commands.ToggleItem,Mail.Commands.Item);Mail.Commands.ToggleItem.prototype.invalidateContextualFields=function(){Mail.Commands.Item.prototype.invalidateContextualFields.call(this);this._cachedToggleState=null};Object.defineProperty(Mail.Commands.ToggleItem.prototype,"_toggleState",{get:function(){return Jx.isBoolean(this._cachedToggleState)||(this._cachedToggleState=this._options.isToggledOn()),this._cachedToggleState},enumerable:true});Object.defineProperty(Mail.Commands.ToggleItem.prototype,"showAsSelected",{get:function(){return this._options.toggleBackground?this._toggleState:false},enumerable:true});Mail.Commands.ToggleItem.prototype._getProperty=function(n){var t=this._options[n];if(!Jx.isNullOrUndefined(t)){if(Jx.isString(t)||Jx.isBoolean(t)||Jx.isNumber(t)||Jx.isFunction(t))return t;if(Jx.isObject(t))return this._toggleState?t.on:t.off}return null};Object.defineProperty(Mail.Commands.ToggleItem.prototype,"toggleContexts",{get:function(){return this._options.toggleContext},enumerable:true});Object.defineProperty(Mail.Commands.ToggleItem.prototype,"icon",{get:function(){return this._getProperty("icon")},enumerable:true});Object.defineProperty(Mail.Commands.ToggleItem.prototype,"_shortcutLabel",{get:function(){return this._getProperty("shortcutLabel")},enumerable:true});Object.defineProperty(Mail.Commands.ToggleItem.prototype,"_shortcutLabelId",{get:function(){return this._getProperty("shortcutLabelId")},enumerable:true});Object.defineProperty(Mail.Commands.ToggleItem.prototype,"_labelLocId",{get:function(){return this._getProperty("labelLocId")},enumerable:true});Object.defineProperty(Mail.Commands.ToggleItem.prototype,"dismissAfterInvoke",{get:function(){return this._getProperty("dismissAfterInvoke")},enumerable:true});Object.defineProperty(Mail.Commands.ToggleItem.prototype,"noAnimationOnDismiss",{get:function(){return this._getProperty("noAnimationOnDismiss")},enumerable:true});Object.defineProperty(Mail.Commands.ToggleItem.prototype,"onInvoke",{get:function(){return function(n,t,i){this.isEnabled(n)&&this._getProperty("handler").call(null,n,t,i);i&&i.target&&i.target.winControl&&(i.target.winControl.selected=this.showAsSelected)}.bind(this)},enumerable:true});Mail.Commands.MenuItem=function(n,t){var i={};Object.keys(n._options).forEach(function(t){i[t]=n._options[t]});Object.keys(t).forEach(function(n){i[n]=t[n]});i.shortcuts=[];Mail.Commands.Item.call(this,i)};Jx.inherit(Mail.Commands.MenuItem,Mail.Commands.Item);Mail.Commands.ToggleMenuItem=function(n,t){var i={};Object.keys(n._options).forEach(function(t){i[t]=n._options[t]});Object.keys(t).forEach(function(n){i[n]=t[n]});i.shortcuts=[];Mail.Commands.ToggleItem.call(this,i)};Jx.inherit(Mail.Commands.ToggleMenuItem,Mail.Commands.ToggleItem)})