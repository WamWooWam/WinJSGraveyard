﻿Jx.delayDefine(People,"UiFormTextInputControl",function(){function r(n){return n?n.replace(/^\s+|\s+$/g,""):n}function u(n,t,i,r,u,f){var s=f?f:"",e=i.getFieldMaxLength(r,u),o;e&&(n.maxLength=e);n.setAttribute("aria-label",i.getString("fieldTitle",r,null));n.value=s;n.addEventListener("blur",function(){try{t.validate()}catch(n){}return false});u.showPlaceholder&&(o=i.getString("fieldPlaceholder",r,u.locId),n.setAttribute("placeholder",o));i.setCssStyle(n,"fieldInput");u.readonly&&(n.readonly="readonly",i.setCssStyle(n,"readonly"));t._$input=n;t._$div=n}function f(n,t,i,r,u){var c=u?u:"",o=r.lines||1,f=null,s,e,h;if(o>1)f=document.createElement("textarea"),f.setAttribute("autocomplete","off"),f.setAttribute("spellcheck","false"),f.rows=o;else{s=r.htmlType||r.type||"text";f=document.createElement("input");f.setAttribute("autocomplete","off");f.setAttribute("spellcheck","false");try{f.type=s}catch(l){f.type="text"}}f.name=i;f.id="editInput_"+i;e=t.getFieldMaxLength(i,r);e&&(f.maxLength=e);f.setAttribute("aria-labelledby","editLabel_"+i);f.value=c;f.addEventListener("blur",function(){try{n.validate()}catch(t){}return false});r.showPlaceholder&&(h=t.getString("fieldPlaceholder",i,r.locId),f.setAttribute("placeholder",h));t.setCssStyle(f,"fieldInput");r.readonly&&(f.readonly="readonly",t.setCssStyle(f,"readonly"));n._$input=f;n._$div=f}function t(n,t,i,r,e,o){this._$uiform=n;this._$fieldName=i;this._$fieldAttr=r;this._$validator=o;var s=t.querySelector("#editInput_"+i);s?u(s,this,n,i,r,e):(f(this,n,i,r,e),t.appendChild(this._$div))}var i=window.People,n;i.UiFormTextInputControl=t;n=t.prototype;n._$input=null;n.getValue=function(){return r(this._$input.value)};n.setValue=function(n){var t=this._$input;t.value=n;t.placeholder&&(t.placeholder=t.placeholder)};n.setFocus=function(){this._$input.focus()};n.validate=function(){return this._$validator?this._$validator(this._$uiform,this._$fieldName,this._$fieldAttr,this.getValue()):true};n.compare=function(n){return this.compareValues(this.getValue(),n)};n.compareValues=function(n,t){return n===null&&t===null?true:n!==null&&n!==""?String(n)===String(t):Jx.isNullOrUndefined(t)||t===""?true:String(n)===String(t)};n.isEmpty=function(){var n=this.getValue();return n===null||n===undefined||n===""}})