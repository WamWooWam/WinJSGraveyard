﻿Jx.delayDefine(People,"ContactCommands",function(){function i(t){var r=t.isEnabled?t.isEnabled():true,i=new n.Command(t.id,t.title,null,t.icon,true,r,t,t.invoke,null,false,null,t.beforeShowUpdate);return t.isSelected&&i.setSelected(t.isSelected()),t.isCustomFlyout&&i.setCustomFlyout(true),t.biciIndex>=0&&i.setBiciIndex(t.biciIndex),i}var n=window.People,r=n.Controls,t=n.Nav;n.ContactCommands={addCommands:function(n,t){var i=n.getCommandBar(),r=n.getNavBar(),u=n.getPlatform(),f=this.getFactories(),e=t.createAccessor(function(){f.forEach(function(n){i.updateCommand(n(e,u,i,r))})});f.forEach(function(n){i.addCommand(n(e,u,i,r))});i.refresh()},makeDeleteCommand:function(n){return i({id:"cmdid_profile_delete",title:"/strings/profileCommandButtonDelete",icon:"",isEnabled:function(){return n.linkedContacts.some(function(n){return n.canDelete&&!n.isGal})},invoke:function(t,i){var u=new r.ContactDeleteFlyout;return u.show(n.createAccessor(),i,"top"),u.getFlyout()}})},makeEditCommand:function(u){return i({id:"cmdid_profile_edit",title:"/strings/profileCommandButtonEdit",icon:"",invoke:function(n,i){var f=u.linkedContacts.filter(function(n){return n.canEdit&&!n.isGal}),e;return f.length>1?(e=new r.ContactEditFlyout,e.show(u.createAccessor(),i),e.getFlyout()):(f.length===1?t.navigate(t.getEditProfileDetailUri(u.objectId,{contactId:f[0].objectId})):t.navigate(t.getEditProfileDetailUri(u.objectId,{contactId:null})),null)},biciIndex:n.Bici.ReactionType.edit})},makePinCommand:function(t,r,u,f){function v(n){return n?"":""}function y(){var n="/strings/profileCommandButton"+(e?"Unpin":"Pin");return{commandId:a,iconSymbol:v(e),name:n,tooltip:n}}function o(){s.isPersonPinnedAsync(r,l).done(function(n){e=n.isPinned;e&&(h=n.launchArguments,c=n.tileId);u.updateCommand(y())},Jx.fnEmpty)}var s=n.Pinning,e=false,h="",c="",l=t.getPlatformObject(),a="cmdid_profile_pin"+String(Jx.uid());return o(),i({id:a,title:"/strings/profileCommandButtonPin",icon:v(e),isCustomFlyout:true,invoke:function(n,t){function p(){o();u.hide();v.sticky=b;f.hide();i.sticky=y}var v=u.getWinappbar(),b=v.sticky,i,y,a,w;v.sticky=true;i=f.getWinappbar();y=i.sticky;i.sticky=true;a=t.getBoundingClientRect();w={x:a.left+a.width/2,y:a.top-8};s.pinPersonAsync(r,l,!e,c,h,[w]).done(p,p)},beforeShowUpdate:function(){u.updateCommand(y());o()}})},getFactories:function(){return[this.makePinCommand,this.makeEditCommand,this.makeDeleteCommand]}}})