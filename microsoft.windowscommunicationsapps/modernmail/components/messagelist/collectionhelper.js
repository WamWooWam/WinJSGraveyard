﻿Jx.delayDefine(Mail,"CollectionHelper",function(){Mail.CollectionHelper={indexOf:function(n,t,i){function o(i){return i>=0&&i<e&&n.item(i).objectId===t}var e,r,u,f;if(e=n.count,r=-1,!Jx.isNonEmptyString(t))return r;for(Mail.writeProfilerMark("Mail.Collection.indexOf",Mail.LogEvent.start),(!Jx.isNumber(i)||i<0||i>=e)&&(i=0),u=i,f=i+1;u>=0||f<e;u--,f++){if(o(u)){r=u;break}if(o(f)){r=f;break}}return r||Jx.log.warning("Mail.CollectionHelper.indexOf failed to find object ID: "+t),Mail.writeProfilerMark("Mail.Collection.indexOf",Mail.LogEvent.stop),r}}})