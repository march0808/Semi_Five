if(typeof window!="undefined"&&typeof window.nhn=="undefined")window.nhn={};
if(typeof window!="undefined"){if(typeof window.jindo=="undefined")window.jindo={}}else if(!jindo)jindo=
{};
jindo.$Jindo=function(){var cl=arguments.callee;var cc=cl._cached;if(cc)return cc;if(!(this instanceof cl))return new cl;
if(!cc)cl._cached=this;this.version="1.5.3"};
jindo.$=function(sID){var ret=[],arg=arguments,nArgLeng=arg.length,lastArgument=arg[nArgLeng-1],doc=document,
el=null;var reg=/^<([a-z]+|h[1-5])>$/i;var reg2=/^<([a-z]+|h[1-5])(\s+[^>]+)?>/i;if(nArgLeng>1&&typeof lastArgument!=
"string"&&lastArgument.body){arg=Array.prototype.slice.apply(arg,[0,nArgLeng-1]);doc=lastArgument}for(var i=
0;i<nArgLeng;i++){el=arg[i];if(typeof el=="string"){el=el.replace(/^\s+|\s+$/g,"");if(el.indexOf("\x3c")>
-1)if(reg.test(el))el=doc.createElement(RegExp.$1);else{if(reg2.test(el)){var p={thead:"table",tbody:"table",
tr:"tbody",td:"tr",dt:"dl",dd:"dl",li:"ul",legend:"fieldset",option:"select"};var tag=RegExp.$1.toLowerCase();
var ele=jindo._createEle(p[tag],el,doc);for(var i=0,leng=ele.length;i<leng;i++)ret.push(ele[i]);el=null}}else el=
doc.getElementById(el)}if(el)ret[ret.length]=el}return ret.length>1?ret:ret[0]||null};
jindo._createEle=function(sParentTag,sHTML,oDoc,bWantParent){var sId="R"+(new Date).getTime()+parseInt(Math.random()*
1E5,10);var oDummy=oDoc.createElement("div");switch(sParentTag){case "select":case "table":case "dl":case "ul":case "fieldset":oDummy.innerHTML=
"\x3c"+sParentTag+' class\x3d"'+sId+'"\x3e'+sHTML+"\x3c/"+sParentTag+"\x3e";break;case "thead":case "tbody":case "col":oDummy.innerHTML=
"\x3ctable\x3e\x3c"+sParentTag+' class\x3d"'+sId+'"\x3e'+sHTML+"\x3c/"+sParentTag+"\x3e\x3c/table\x3e";
break;case "tr":oDummy.innerHTML='\x3ctable\x3e\x3ctbody\x3e\x3ctr class\x3d"'+sId+'"\x3e'+sHTML+"\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e";
break;default:oDummy.innerHTML='\x3cdiv class\x3d"'+sId+'"\x3e'+sHTML+"\x3c/div\x3e";break}var oFound;
for(oFound=oDummy.firstChild;oFound;oFound=oFound.firstChild)if(oFound.className==sId)break;return bWantParent?
oFound:oFound.childNodes};
jindo.$Class=function(oDef){function typeClass(){var t=this;var a=[];var superFunc=function(m,superClass,
func){if(m!="constructor"&&func.toString().indexOf("$super")>-1){var funcArg=func.toString().replace(/function\s*\(([^\)]*)[\w\W]*/g,
"$1").split(",");var funcStr=func.toString().replace(/function[^{]*{/,"").replace(/(\w|\.?)(this\.\$super|this)/g,
function(m,m2,m3){if(!m2)return m3+".$super";return m});
funcStr=funcStr.substr(0,funcStr.length-1);func=superClass[m]=eval("false||function("+funcArg.join(",")+
"){"+funcStr+"}")}return function(){var f=this.$this[m];var t=this.$this;var r=(t[m]=func).apply(t,arguments);
t[m]=f;return r}};
while(typeof t._$superClass!="undefined"){t.$super=new Object;t.$super.$this=this;for(var x in t._$superClass.prototype)if(t._$superClass.prototype.hasOwnProperty(x)){if(typeof this[x]==
"undefined"&&x!="$init")this[x]=t._$superClass.prototype[x];if(x!="constructor"&&x!="_$superClass"&&typeof t._$superClass.prototype[x]==
"function")t.$super[x]=superFunc(x,t._$superClass,t._$superClass.prototype[x]);else t.$super[x]=t._$superClass.prototype[x]}if(typeof t.$super.$init==
"function")a[a.length]=t;t=t.$super}for(var i=a.length-1;i>-1;i--)a[i].$super.$init.apply(a[i].$super,
arguments);if(typeof this.$init=="function")this.$init.apply(this,arguments)}
if(typeof oDef.$static!="undefined"){var i=0,x;for(x in oDef)if(oDef.hasOwnProperty(x))x=="$static"||
i++;for(x in oDef.$static)if(oDef.$static.hasOwnProperty(x))typeClass[x]=oDef.$static[x];if(!i)return oDef.$static;
delete oDef.$static}typeClass.prototype=oDef;typeClass.prototype.constructor=typeClass;typeClass.extend=
jindo.$Class.extend;return typeClass};
jindo.$Class.extend=function(superClass){if(typeof superClass=="undefined"||superClass===null||!superClass.extend)throw new Error("extend\uc2dc \uc288\ud37c \ud074\ub798\uc2a4\ub294 Class\uc5ec\uc57c \ud569\ub2c8\ub2e4.");
this.prototype._$superClass=superClass;for(var x in superClass)if(superClass.hasOwnProperty(x)){if(x==
"prototype")continue;this[x]=superClass[x]}return this};
jindo.$$=jindo.cssquery=function(){var sVersion="3.0";var debugOption={repeat:1};var UID=1;var cost=0;
var validUID={};var bSupportByClassName=document.getElementsByClassName?true:false;var safeHTML=false;
var getUID4HTML=function(oEl){var nUID=safeHTML?oEl._cssquery_UID&&oEl._cssquery_UID[0]:oEl._cssquery_UID;
if(nUID&&validUID[nUID]==oEl)return nUID;nUID=UID++;oEl._cssquery_UID=safeHTML?[nUID]:nUID;validUID[nUID]=
oEl;return nUID};
var getUID4XML=function(oEl){var oAttr=oEl.getAttribute("_cssquery_UID");var nUID=safeHTML?oAttr&&oAttr[0]:
oAttr;if(!nUID){nUID=UID++;oEl.setAttribute("_cssquery_UID",safeHTML?[nUID]:nUID)}return nUID};
var getUID=getUID4HTML;var uniqid=function(sPrefix){return(sPrefix||"")+(new Date).getTime()+parseInt(Math.random()*
1E8,10)};
function getElementsByClass(searchClass,node,tag){var classElements=new Array;if(node==null)node=document;
if(tag==null)tag="*";var els=node.getElementsByTagName(tag);var elsLen=els.length;var pattern=new RegExp("(^|\\s)"+
searchClass+"(\\s|$)");for(i=0,j=0;i<elsLen;i++)if(pattern.test(els[i].className)){classElements[j]=els[i];
j++}return classElements}
var getChilds_dontShrink=function(oEl,sTagName,sClassName){if(bSupportByClassName&&sClassName){if(oEl.getElementsByClassName)return oEl.getElementsByClassName(sClassName);
if(oEl.querySelectorAll)return oEl.querySelectorAll(sClassName);return getElementsByClass(sClassName,
oEl,sTagName)}else if(sTagName=="*")return oEl.all||oEl.getElementsByTagName(sTagName);return oEl.getElementsByTagName(sTagName)};
var clearKeys=function(){backupKeys._keys={}};
var oDocument_dontShrink=document;var bXMLDocument=false;var backupKeys=function(sQuery){var oKeys=backupKeys._keys;
sQuery=sQuery.replace(/'(\\'|[^'])*'/g,function(sAll){var uid=uniqid("QUOT");oKeys[uid]=sAll;return uid});
sQuery=sQuery.replace(/"(\\"|[^"])*"/g,function(sAll){var uid=uniqid("QUOT");oKeys[uid]=sAll;return uid});
sQuery=sQuery.replace(/\[(.*?)\]/g,function(sAll,sBody){if(sBody.indexOf("ATTR")==0)return sAll;var uid=
"["+uniqid("ATTR")+"]";oKeys[uid]=sAll;return uid});
var bChanged;do{bChanged=false;sQuery=sQuery.replace(/\(((\\\)|[^)|^(])*)\)/g,function(sAll,sBody){if(sBody.indexOf("BRCE")==
0)return sAll;var uid="_"+uniqid("BRCE");oKeys[uid]=sAll;bChanged=true;return uid})}while(bChanged);
return sQuery};
var restoreKeys=function(sQuery,bOnlyAttrBrace){var oKeys=backupKeys._keys;var bChanged;var rRegex=bOnlyAttrBrace?
/(\[ATTR[0-9]+\])/g:/(QUOT[0-9]+|\[ATTR[0-9]+\])/g;do{bChanged=false;sQuery=sQuery.replace(rRegex,function(sKey){if(oKeys[sKey]){bChanged=
true;return oKeys[sKey]}return sKey})}while(bChanged);
sQuery=sQuery.replace(/_BRCE[0-9]+/g,function(sKey){return oKeys[sKey]?oKeys[sKey]:sKey});
return sQuery};
var restoreString=function(sKey){var oKeys=backupKeys._keys;var sOrg=oKeys[sKey];if(!sOrg)return sKey;
return eval(sOrg)};
var wrapQuot=function(sStr){return'"'+sStr.replace(/"/g,'\\"')+'"'};
var getStyleKey=function(sKey){if(/^@/.test(sKey))return sKey.substr(1);return null};
var getCSS=function(oEl,sKey){if(oEl.currentStyle){if(sKey=="float")sKey="styleFloat";return oEl.currentStyle[sKey]||
oEl.style[sKey]}else if(window.getComputedStyle)return oDocument_dontShrink.defaultView.getComputedStyle(oEl,
null).getPropertyValue(sKey.replace(/([A-Z])/g,"-$1").toLowerCase())||oEl.style[sKey];if(sKey=="float"&&
/MSIE/.test(window.navigator.userAgent))sKey="styleFloat";return oEl.style[sKey]};
var oCamels={"accesskey":"accessKey","cellspacing":"cellSpacing","cellpadding":"cellPadding","class":"className",
"colspan":"colSpan","for":"htmlFor","maxlength":"maxLength","readonly":"readOnly","rowspan":"rowSpan",
"tabindex":"tabIndex","valign":"vAlign"};var getDefineCode=function(sKey){var sVal;var sStyleKey;if(bXMLDocument)sVal=
'oEl.getAttribute("'+sKey+'",2)';else if(sStyleKey=getStyleKey(sKey)){sKey="$$"+sStyleKey;sVal='getCSS(oEl, "'+
sStyleKey+'")'}else switch(sKey){case "checked":sVal='oEl.checked + ""';break;case "disabled":sVal='oEl.disabled + ""';
break;case "enabled":sVal='!oEl.disabled + ""';break;case "readonly":sVal='oEl.readOnly + ""';break;case "selected":sVal=
'oEl.selected + ""';break;default:if(oCamels[sKey])sVal="oEl."+oCamels[sKey];else sVal='oEl.getAttribute("'+
sKey+'",2)'}return"_"+sKey+" \x3d "+sVal};
var getReturnCode=function(oExpr){var sStyleKey=getStyleKey(oExpr.key);var sVar="_"+(sStyleKey?"$$"+sStyleKey:
oExpr.key);var sVal=oExpr.val?wrapQuot(oExpr.val):"";switch(oExpr.op){case "~\x3d":return"("+sVar+' \x26\x26 (" " + '+
sVar+' + " ").indexOf(" " + '+sVal+' + " ") \x3e -1)';case "^\x3d":return"("+sVar+" \x26\x26 "+sVar+".indexOf("+
sVal+") \x3d\x3d 0)";case "$\x3d":return"("+sVar+" \x26\x26 "+sVar+".substr("+sVar+".length - "+oExpr.val.length+
") \x3d\x3d "+sVal+")";case "*\x3d":return"("+sVar+" \x26\x26 "+sVar+".indexOf("+sVal+") \x3e -1)";case "!\x3d":return"("+
sVar+" !\x3d "+sVal+")";case "\x3d":return"("+sVar+" \x3d\x3d "+sVal+")"}return"("+sVar+")"};
var getNodeIndex=function(oEl){var nUID=getUID(oEl);var nIndex=oNodeIndexes[nUID]||0;if(nIndex==0){for(var oSib=
(oEl.parentNode||oEl._IE5_parentNode).firstChild;oSib;oSib=oSib.nextSibling){if(oSib.nodeType!=1)continue;
nIndex++;setNodeIndex(oSib,nIndex)}nIndex=oNodeIndexes[nUID]}return nIndex};
var oNodeIndexes={};var setNodeIndex=function(oEl,nIndex){var nUID=getUID(oEl);oNodeIndexes[nUID]=nIndex};
var unsetNodeIndexes=function(){setTimeout(function(){oNodeIndexes={}},0)};
var oPseudoes_dontShrink={"contains":function(oEl,sOption){return(oEl.innerText||oEl.textContent||"").indexOf(sOption)>
-1},
"last-child":function(oEl,sOption){for(oEl=oEl.nextSibling;oEl;oEl=oEl.nextSibling)if(oEl.nodeType==1)return false;
return true},
"first-child":function(oEl,sOption){for(oEl=oEl.previousSibling;oEl;oEl=oEl.previousSibling)if(oEl.nodeType==
1)return false;return true},
"only-child":function(oEl,sOption){var nChild=0;for(var oChild=(oEl.parentNode||oEl._IE5_parentNode).firstChild;oChild;oChild=
oChild.nextSibling){if(oChild.nodeType==1)nChild++;if(nChild>1)return false}return nChild?true:false},
"empty":function(oEl,_){return oEl.firstChild?false:true},
"nth-child":function(oEl,nMul,nAdd){var nIndex=getNodeIndex(oEl);return nIndex%nMul==nAdd},
"nth-last-child":function(oEl,nMul,nAdd){var oLast=(oEl.parentNode||oEl._IE5_parentNode).lastChild;for(;oLast;oLast=
oLast.previousSibling)if(oLast.nodeType==1)break;var nTotal=getNodeIndex(oLast);var nIndex=getNodeIndex(oEl);
var nLastIndex=nTotal-nIndex+1;return nLastIndex%nMul==nAdd},
"checked":function(oEl){return!!oEl.checked},
"selected":function(oEl){return!!oEl.selected},
"enabled":function(oEl){return!oEl.disabled},
"disabled":function(oEl){return!!oEl.disabled}};
var getExpression=function(sBody){var oRet={defines:"",returns:"true"};var sBody=restoreKeys(sBody,true);
var aExprs=[];var aDefineCode=[],aReturnCode=[];var sId,sTagName;var sBody=sBody.replace(/:([\w-]+)(\(([^)]*)\))?/g,
function(_1,sType,_2,sOption){switch(sType){case "not":var oInner=getExpression(sOption);var sFuncDefines=
oInner.defines;var sFuncReturns=oInner.returnsID+oInner.returnsTAG+oInner.returns;aReturnCode.push("!(function() { "+
sFuncDefines+" return "+sFuncReturns+" })()");break;case "nth-child":case "nth-last-child":sOption=restoreString(sOption);
if(sOption=="even")sOption="2n";else if(sOption=="odd")sOption="2n+1";var nMul,nAdd;var matchstr=sOption.match(/([0-9]*)n([+-][0-9]+)*/);
if(matchstr){nMul=matchstr[1]||1;nAdd=matchstr[2]||0}else{nMul=Infinity;nAdd=parseInt(sOption,10)}aReturnCode.push("oPseudoes_dontShrink["+
wrapQuot(sType)+"](oEl, "+nMul+", "+nAdd+")");break;case "first-of-type":case "last-of-type":sType=sType==
"first-of-type"?"nth-of-type":"nth-last-of-type";sOption=1;case "nth-of-type":case "nth-last-of-type":sOption=
restoreString(sOption);if(sOption=="even")sOption="2n";else if(sOption=="odd")sOption="2n+1";var nMul,
nAdd;if(/([0-9]*)n([+-][0-9]+)*/.test(sOption)){nMul=parseInt(RegExp.$1,10)||1;nAdd=parseInt(RegExp.$2,
20)||0}else{nMul=Infinity;nAdd=parseInt(sOption,10)}oRet.nth=[nMul,nAdd,sType];break;default:sOption=
sOption?restoreString(sOption):"";aReturnCode.push("oPseudoes_dontShrink["+wrapQuot(sType)+"](oEl, "+
wrapQuot(sOption)+")");break}return""});
var sBody=sBody.replace(/\[(@?[\w-]+)(([!^~$*]?=)([^\]]*))?\]/g,function(_1,sKey,_2,sOp,sVal){sKey=restoreString(sKey);
sVal=restoreString(sVal);if(sKey=="checked"||sKey=="disabled"||sKey=="enabled"||sKey=="readonly"||sKey==
"selected")if(!sVal){sOp="\x3d";sVal="true"}aExprs.push({key:sKey,op:sOp,val:sVal});return""});
var sClassName=null;var sBody=sBody.replace(/\.([\w-]+)/g,function(_,sClass){aExprs.push({key:"class",
op:"~\x3d",val:sClass});if(!sClassName)sClassName=sClass;return""});
var sBody=sBody.replace(/#([\w-]+)/g,function(_,sIdValue){if(bXMLDocument)aExprs.push({key:"id",op:"\x3d",
val:sIdValue});else sId=sIdValue;return""});
sTagName=sBody=="*"?"":sBody;var oVars={};for(var i=0,oExpr;oExpr=aExprs[i];i++){var sKey=oExpr.key;if(!oVars[sKey])aDefineCode.push(getDefineCode(sKey));
aReturnCode.unshift(getReturnCode(oExpr));oVars[sKey]=true}if(aDefineCode.length)oRet.defines="var "+
aDefineCode.join(",")+";";if(aReturnCode.length)oRet.returns=aReturnCode.join("\x26\x26");oRet.quotID=
sId?wrapQuot(sId):"";oRet.quotTAG=sTagName?wrapQuot(bXMLDocument?sTagName:sTagName.toUpperCase()):"";
if(bSupportByClassName)oRet.quotCLASS=sClassName?wrapQuot(sClassName):"";oRet.returnsID=sId?"oEl.id \x3d\x3d "+
oRet.quotID+" \x26\x26 ":"";oRet.returnsTAG=sTagName&&sTagName!="*"?"oEl.tagName \x3d\x3d "+oRet.quotTAG+
" \x26\x26 ":"";return oRet};
var splitToParts=function(sQuery){var aParts=[];var sRel=" ";var sBody=sQuery.replace(/(.*?)\s*(!?[+>~ ]|!)\s*/g,
function(_,sBody,sRelative){if(sBody)aParts.push({rel:sRel,body:sBody});sRel=sRelative.replace(/\s+$/g,
"")||" ";return""});
if(sBody)aParts.push({rel:sRel,body:sBody});return aParts};
var isNth_dontShrink=function(oEl,sTagName,nMul,nAdd,sDirection){var nIndex=0;for(var oSib=oEl;oSib;oSib=
oSib[sDirection])if(oSib.nodeType==1&&(!sTagName||sTagName==oSib.tagName))nIndex++;return nIndex%nMul==
nAdd};
var compileParts=function(aParts){var aPartExprs=[];for(var i=0,oPart;oPart=aParts[i];i++)aPartExprs.push(getExpression(oPart.body));
var sFunc="";var sPushCode="aRet.push(oEl); if (oOptions.single) { bStop \x3d true; }";for(var i=aParts.length-
1,oPart;oPart=aParts[i];i--){var oExpr=aPartExprs[i];var sPush=(debugOption.callback?"cost++;":"")+oExpr.defines;
var sReturn="if (bStop) {"+(i==0?"return aRet;":"return;")+"}";if(oExpr.returns=="true")sPush+=(sFunc?
sFunc+"(oEl);":sPushCode)+sReturn;else sPush+="if ("+oExpr.returns+") {"+(sFunc?sFunc+"(oEl);":sPushCode)+
sReturn+"}";var sCheckTag="oEl.nodeType !\x3d 1";if(oExpr.quotTAG)sCheckTag="oEl.tagName !\x3d "+oExpr.quotTAG;
var sTmpFunc="(function(oBase"+(i==0?", oOptions) { var bStop \x3d false; var aRet \x3d [];":") {");if(oExpr.nth)sPush=
"if (isNth_dontShrink(oEl, "+(oExpr.quotTAG?oExpr.quotTAG:"false")+","+oExpr.nth[0]+","+oExpr.nth[1]+
","+'"'+(oExpr.nth[2]=="nth-of-type"?"previousSibling":"nextSibling")+'")) {'+sPush+"}";switch(oPart.rel){case " ":if(oExpr.quotID)sTmpFunc+=
"var oEl \x3d oDocument_dontShrink.getElementById("+oExpr.quotID+");"+"var oCandi \x3d oEl;"+"for (; oCandi; oCandi \x3d (oCandi.parentNode || oCandi._IE5_parentNode)) {"+
"if (oCandi \x3d\x3d oBase) break;"+"}"+"if (!oCandi || "+sCheckTag+") return aRet;"+sPush;else sTmpFunc+=
"var aCandi \x3d getChilds_dontShrink(oBase, "+(oExpr.quotTAG||'"*"')+", "+(oExpr.quotCLASS||"null")+
");"+"for (var i \x3d 0, oEl; oEl \x3d aCandi[i]; i++) {"+(oExpr.quotCLASS?"if ("+sCheckTag+") continue;":
"")+sPush+"}";break;case "\x3e":if(oExpr.quotID)sTmpFunc+="var oEl \x3d oDocument_dontShrink.getElementById("+
oExpr.quotID+");"+"if ((oEl.parentNode || oEl._IE5_parentNode) !\x3d oBase || "+sCheckTag+") return aRet;"+
sPush;else sTmpFunc+="for (var oEl \x3d oBase.firstChild; oEl; oEl \x3d oEl.nextSibling) {"+"if ("+sCheckTag+
") { continue; }"+sPush+"}";break;case "+":if(oExpr.quotID)sTmpFunc+="var oEl \x3d oDocument_dontShrink.getElementById("+
oExpr.quotID+");"+"var oPrev;"+"for (oPrev \x3d oEl.previousSibling; oPrev; oPrev \x3d oPrev.previousSibling) { if (oPrev.nodeType \x3d\x3d 1) break; }"+
"if (!oPrev || oPrev !\x3d oBase || "+sCheckTag+") return aRet;"+sPush;else sTmpFunc+="for (var oEl \x3d oBase.nextSibling; oEl; oEl \x3d oEl.nextSibling) { if (oEl.nodeType \x3d\x3d 1) break; }"+
"if (!oEl || "+sCheckTag+") { return aRet; }"+sPush;break;case "~":if(oExpr.quotID)sTmpFunc+="var oEl \x3d oDocument_dontShrink.getElementById("+
oExpr.quotID+");"+"var oCandi \x3d oEl;"+"for (; oCandi; oCandi \x3d oCandi.previousSibling) { if (oCandi \x3d\x3d oBase) break; }"+
"if (!oCandi || "+sCheckTag+") return aRet;"+sPush;else sTmpFunc+="for (var oEl \x3d oBase.nextSibling; oEl; oEl \x3d oEl.nextSibling) {"+
"if ("+sCheckTag+") { continue; }"+"if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}";break;
case "!":if(oExpr.quotID)sTmpFunc+="var oEl \x3d oDocument_dontShrink.getElementById("+oExpr.quotID+");"+
"for (; oBase; oBase \x3d (oBase.parentNode || oBase._IE5_parentNode)) { if (oBase \x3d\x3d oEl) break; }"+
"if (!oBase || "+sCheckTag+") return aRet;"+sPush;else sTmpFunc+="for (var oEl \x3d (oBase.parentNode || oBase._IE5_parentNode); oEl; oEl \x3d (oEl.parentNode || oEl._IE5_parentNode)) {"+
"if ("+sCheckTag+") { continue; }"+sPush+"}";break;case "!\x3e":if(oExpr.quotID)sTmpFunc+="var oEl \x3d oDocument_dontShrink.getElementById("+
oExpr.quotID+");"+"var oRel \x3d (oBase.parentNode || oBase._IE5_parentNode);"+"if (!oRel || oEl !\x3d oRel || ("+
sCheckTag+")) return aRet;"+sPush;else sTmpFunc+="var oEl \x3d (oBase.parentNode || oBase._IE5_parentNode);"+
"if (!oEl || "+sCheckTag+") { return aRet; }"+sPush;break;case "!+":if(oExpr.quotID)sTmpFunc+="var oEl \x3d oDocument_dontShrink.getElementById("+
oExpr.quotID+");"+"var oRel;"+"for (oRel \x3d oBase.previousSibling; oRel; oRel \x3d oRel.previousSibling) { if (oRel.nodeType \x3d\x3d 1) break; }"+
"if (!oRel || oEl !\x3d oRel || ("+sCheckTag+")) return aRet;"+sPush;else sTmpFunc+="for (oEl \x3d oBase.previousSibling; oEl; oEl \x3d oEl.previousSibling) { if (oEl.nodeType \x3d\x3d 1) break; }"+
"if (!oEl || "+sCheckTag+") { return aRet; }"+sPush;break;case "!~":if(oExpr.quotID)sTmpFunc+="var oEl \x3d oDocument_dontShrink.getElementById("+
oExpr.quotID+");"+"var oRel;"+"for (oRel \x3d oBase.previousSibling; oRel; oRel \x3d oRel.previousSibling) { "+
"if (oRel.nodeType !\x3d 1) { continue; }"+"if (oRel \x3d\x3d oEl) { break; }"+"}"+"if (!oRel || ("+sCheckTag+
")) return aRet;"+sPush;else sTmpFunc+="for (oEl \x3d oBase.previousSibling; oEl; oEl \x3d oEl.previousSibling) {"+
"if ("+sCheckTag+") { continue; }"+"if (!markElement_dontShrink(oEl, "+i+")) { break; }"+sPush+"}";break}sTmpFunc+=
(i==0?"return aRet;":"")+"})";sFunc=sTmpFunc}eval("var fpCompiled \x3d "+sFunc+";");return fpCompiled};
var parseQuery=function(sQuery){var sCacheKey=sQuery;var fpSelf=arguments.callee;var fpFunction=fpSelf._cache[sCacheKey];
if(!fpFunction){sQuery=backupKeys(sQuery);var aParts=splitToParts(sQuery);fpFunction=fpSelf._cache[sCacheKey]=
compileParts(aParts);fpFunction.depth=aParts.length}return fpFunction};
parseQuery._cache={};var parseTestQuery=function(sQuery){var fpSelf=arguments.callee;var aSplitQuery=
backupKeys(sQuery).split(/\s*,\s*/);var aResult=[];var nLen=aSplitQuery.length;var aFunc=[];for(var i=
0;i<nLen;i++)aFunc.push(function(sQuery){var sCacheKey=sQuery;var fpFunction=fpSelf._cache[sCacheKey];
if(!fpFunction){sQuery=backupKeys(sQuery);var oExpr=getExpression(sQuery);eval("fpFunction \x3d function(oEl) { "+
oExpr.defines+"return ("+oExpr.returnsID+oExpr.returnsTAG+oExpr.returns+"); };")}return fpFunction}(restoreKeys(aSplitQuery[i])));
return aFunc};
parseTestQuery._cache={};var distinct=function(aList){var aDistinct=[];var oDummy={};for(var i=0,oEl;oEl=
aList[i];i++){var nUID=getUID(oEl);if(oDummy[nUID])continue;aDistinct.push(oEl);oDummy[nUID]=true}return aDistinct};
var markElement_dontShrink=function(oEl,nDepth){var nUID=getUID(oEl);if(cssquery._marked[nDepth][nUID])return false;
cssquery._marked[nDepth][nUID]=true;return true};
var oResultCache=null;var bUseResultCache=false;var bExtremeMode=false;var old_cssquery=function(sQuery,
oParent,oOptions){if(typeof sQuery=="object"){var oResult={};for(var k in sQuery)if(sQuery.hasOwnProperty(k))oResult[k]=
arguments.callee(sQuery[k],oParent,oOptions);return oResult}cost=0;var executeTime=(new Date).getTime();
var aRet;for(var r=0,rp=debugOption.repeat;r<rp;r++)aRet=function(sQuery,oParent,oOptions){if(oOptions){if(!oOptions.oneTimeOffCache)oOptions.oneTimeOffCache=
false}else oOptions={oneTimeOffCache:false};cssquery.safeHTML(oOptions.oneTimeOffCache);if(!oParent)oParent=
document;oDocument_dontShrink=oParent.ownerDocument||oParent.document||oParent;if(/\bMSIE\s([0-9]+(\.[0-9]+)*);/.test(navigator.userAgent)&&
parseFloat(RegExp.$1)<6){try{oDocument_dontShrink.location}catch(e){oDocument_dontShrink=document}oDocument_dontShrink.firstChild=
oDocument_dontShrink.getElementsByTagName("html")[0];oDocument_dontShrink.firstChild._IE5_parentNode=
oDocument_dontShrink}bXMLDocument=typeof XMLDocument!="undefined"?oDocument_dontShrink.constructor===
XMLDocument:!oDocument_dontShrink.location;getUID=bXMLDocument?getUID4XML:getUID4HTML;clearKeys();var aSplitQuery=
backupKeys(sQuery).split(/\s*,\s*/);var aResult=[];var nLen=aSplitQuery.length;for(var i=0;i<nLen;i++)aSplitQuery[i]=
restoreKeys(aSplitQuery[i]);for(var i=0;i<nLen;i++){var sSingleQuery=aSplitQuery[i];var aSingleQueryResult=
null;var sResultCacheKey=sSingleQuery+(oOptions.single?"_single":"");var aCache=bUseResultCache?oResultCache[sResultCacheKey]:
null;if(aCache)for(var j=0,oCache;oCache=aCache[j];j++)if(oCache.parent==oParent){aSingleQueryResult=
oCache.result;break}if(!aSingleQueryResult){var fpFunction=parseQuery(sSingleQuery);cssquery._marked=
[];for(var j=0,nDepth=fpFunction.depth;j<nDepth;j++)cssquery._marked.push({});aSingleQueryResult=distinct(fpFunction(oParent,
oOptions));if(bUseResultCache&&!oOptions.oneTimeOffCache){if(!(oResultCache[sResultCacheKey]instanceof
Array))oResultCache[sResultCacheKey]=[];oResultCache[sResultCacheKey].push({parent:oParent,result:aSingleQueryResult})}}aResult=
aResult.concat(aSingleQueryResult)}unsetNodeIndexes();return aResult}(sQuery,oParent,oOptions);
executeTime=(new Date).getTime()-executeTime;if(debugOption.callback)debugOption.callback(sQuery,cost,
executeTime);return aRet};
var cssquery;if(document.querySelectorAll){function _isNonStandardQueryButNotException(sQuery){return/\[\s*(?:checked|selected|disabled)/.test(sQuery)}
function _commaRevise(sQuery,sChange){return sQuery.replace(/\,/gi,sChange)}
var protoSlice=Array.prototype.slice;var _toArray=function(aArray){return protoSlice.apply(aArray)};
try{protoSlice.apply(document.documentElement.childNodes)}catch(e){_toArray=function(aArray){var returnArray=
[];var leng=aArray.length;for(var i=0;i<leng;i++)returnArray.push(aArray[i]);return returnArray}}cssquery=
function(sQuery,oParent,oOptions){oParent=oParent||document;
try{if(_isNonStandardQueryButNotException(sQuery))throw Error("None Standard Query");else{var sReviseQuery=
sQuery;var oReviseParent=oParent;if(oParent.nodeType!=9){if(bExtremeMode){if(!oParent.id)oParent.id="p"+
(new Date).getTime()+parseInt(Math.random()*1E8,10)}else throw Error("Parent Element has not ID.or It is not document.or None Extreme Mode.");
sReviseQuery=_commaRevise("#"+oParent.id+" "+sQuery,", #"+oParent.id);oReviseParent=oParent.ownerDocument||
oParent.document||document}if(oOptions&&oOptions.single)return[oReviseParent.querySelector(sReviseQuery)];
else return _toArray(oReviseParent.querySelectorAll(sReviseQuery))}}catch(e){return old_cssquery(sQuery,
oParent,oOptions)}}}else cssquery=old_cssquery;
cssquery.test=function(oEl,sQuery){clearKeys();var aFunc=parseTestQuery(sQuery);for(var i=0,nLen=aFunc.length;i<
nLen;i++)if(aFunc[i](oEl))return true;return false};
cssquery.useCache=function(bFlag){if(typeof bFlag!="undefined"){bUseResultCache=bFlag;cssquery.clearCache()}return bUseResultCache};
cssquery.clearCache=function(){oResultCache={}};
cssquery.getSingle=function(sQuery,oParent,oOptions){return cssquery(sQuery,oParent,{single:true,oneTimeOffCache:oOptions?
!!oOptions.oneTimeOffCache:false})[0]||null};
cssquery.xpath=function(sXPath,oParent){var sXPath=sXPath.replace(/\/(\w+)(\[([0-9]+)\])?/g,function(_1,
sTag,_2,sTh){sTh=sTh||"1";return"\x3e"+sTag+":nth-of-type("+sTh+")"});
return old_cssquery(sXPath,oParent)};
cssquery.debug=function(fpCallback,nRepeat){debugOption.callback=fpCallback;debugOption.repeat=nRepeat||
1};
cssquery.safeHTML=function(bFlag){var bIE=/MSIE/.test(window.navigator.userAgent);if(arguments.length>
0)safeHTML=bFlag&&bIE;return safeHTML||!bIE};
cssquery.version=sVersion;cssquery.release=function(){if(/MSIE/.test(window.navigator.userAgent)){delete validUID;
validUID={};if(bUseResultCache)cssquery.clearCache()}};
cssquery._getCacheInfo=function(){return{uidCache:validUID,eleCache:oResultCache}};
cssquery._resetUID=function(){UID=0};
cssquery.extreme=function(bExtreme){if(arguments.length==0)bExtreme=true;bExtremeMode=bExtreme};
return cssquery}();
jindo.$Agent=function(){var cl=arguments.callee;var cc=cl._cached;if(cc)return cc;if(!(this instanceof
cl))return new cl;if(!cc)cl._cached=this;this._navigator=navigator};
jindo.$Agent.prototype.navigator=function(){var info=new Object;var ver=-1;var nativeVersion=-1;var u=
this._navigator.userAgent;var v=this._navigator.vendor||"";function f(s,h){return(h||"").indexOf(s)>-1}
info.getName=function(){var name="";for(x in info)if(typeof info[x]=="boolean"&&info[x]&&info.hasOwnProperty(x))name=
x;return name};
info.webkit=f("WebKit",u);info.opera=typeof window.opera!="undefined"||f("Opera",u);info.ie=!info.opera&&
(f("MSIE",u)||f("Trident",u));info.chrome=info.webkit&&f("Chrome",u);info.safari=info.webkit&&!info.chrome&&
f("Apple",v);info.firefox=f("Firefox",u);info.mozilla=f("Gecko",u)&&!info.safari&&!info.chrome&&!info.firefox;
info.camino=f("Camino",v);info.netscape=f("Netscape",u);info.omniweb=f("OmniWeb",u);info.icab=f("iCab",
v);info.konqueror=f("KDE",v);info.mobile=(f("Mobile",u)||f("Android",u)||f("Nokia",u)||f("webOS",u)||
f("Opera Mini",u)||f("BlackBerry",u)||f("Windows",u)&&f("PPC",u)||f("Smartphone",u)||f("IEMobile",u))&&
!f("iPad",u);info.msafari=!f("IEMobile",u)&&f("Mobile",u)||f("iPad",u)&&f("Safari",u);info.mopera=f("Opera Mini",
u);info.mie=f("PPC",u)||f("Smartphone",u)||f("IEMobile",u);try{if(info.ie){ver=u.match(/(?:MSIE) ([0-9.]+)/)[1];
if(u.match(/(?:Trident)\/([0-9.]+)/)){var nTridentNum=parseInt(RegExp.$1,10);if(nTridentNum>3)nativeVersion=
nTridentNum+4}}else if(info.safari||info.msafari){ver=parseFloat(u.match(/Safari\/([0-9.]+)/)[1]);if(ver==
100)ver=1.1;else if(u.match(/Version\/([0-9.]+)/))ver=RegExp.$1;else ver=[1,1.2,-1,1.3,2,3][Math.floor(ver/
100)]}else if(info.mopera)ver=u.match(/(?:Opera\sMini)\/([0-9.]+)/)[1];else if(info.firefox||info.opera||
info.omniweb)ver=u.match(/(?:Firefox|Opera|OmniWeb)\/([0-9.]+)/)[1];else if(info.mozilla)ver=u.match(/rv:([0-9.]+)/)[1];
else if(info.icab)ver=u.match(/iCab[ \/]([0-9.]+)/)[1];else if(info.chrome)ver=u.match(/Chrome[ \/]([0-9.]+)/)[1];
info.version=parseFloat(ver);info.nativeVersion=parseFloat(nativeVersion);if(isNaN(info.version))info.version=
-1}catch(e){info.version=-1}this.navigator=function(){return info};
return info};
jindo.$Agent.prototype.os=function(){var info=new Object;var u=this._navigator.userAgent;var p=this._navigator.platform;
var f=function(s,h){return h.indexOf(s)>-1};
info.getName=function(){var name="";for(x in info)if(typeof info[x]=="boolean"&&info[x]&&info.hasOwnProperty(x))name=
x;return name};
info.win=f("Win",p);info.mac=f("Mac",p);info.linux=f("Linux",p);info.win2000=info.win&&(f("NT 5.0",u)||
f("2000",u));info.winxp=info.win&&f("NT 5.1",u);info.xpsp2=info.winxp&&f("SV1",u);info.vista=info.win&&
f("NT 6.0",u);info.win7=info.win&&f("NT 6.1",u);info.ipad=f("iPad",u);info.iphone=f("iPhone",u)&&!info.ipad;
info.android=f("Android",u);info.nokia=f("Nokia",u);info.webos=f("webOS",u);info.blackberry=f("BlackBerry",
u);info.mwin=f("PPC",u)||f("Smartphone",u)||f("IEMobile",u);this.os=function(){return info};
return info};
jindo.$Agent.prototype.flash=function(){var info=new Object;var p=this._navigator.plugins;var m=this._navigator.mimeTypes;
var f=null;info.installed=false;info.version=-1;if(typeof p!="undefined"&&p.length){f=p["Shockwave Flash"];
if(f){info.installed=true;if(f.description)info.version=parseFloat(f.description.match(/[0-9.]+/)[0])}if(p["Shockwave Flash 2.0"]){info.installed=
true;info.version=2}}else if(typeof m!="undefined"&&m.length){f=m["application/x-shockwave-flash"];info.installed=
f&&f.enabledPlugin}else for(var i=10;i>1;i--)try{f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+
i);info.installed=true;info.version=i;break}catch(e){}this.flash=function(){return info};
this.info=this.flash;return info};
jindo.$Agent.prototype.silverlight=function(){var info=new Object;var p=this._navigator.plugins;var s=
null;info.installed=false;info.version=-1;if(typeof p!="undefined"&&p.length){s=p["Silverlight Plug-In"];
if(s){info.installed=true;info.version=parseInt(s.description.split(".")[0],10);if(s.description=="1.0.30226.2")info.version=
2}}else try{s=new ActiveXObject("AgControl.AgControl");info.installed=true;if(s.isVersionSupported("3.0"))info.version=
3;else if(s.isVersionSupported("2.0"))info.version=2;else if(s.isVersionSupported("1.0"))info.version=
1}catch(e){}this.silverlight=function(){return info};
return info};
jindo.$A=function(array){var cl=arguments.callee;if(typeof array=="undefined"||array==null)array=[];if(array instanceof
cl)return array;if(!(this instanceof cl))return new cl(array);this._array=[];if(array.constructor!=String){this._array=
[];for(var i=0;i<array.length;i++)this._array[this._array.length]=array[i]}};
jindo.$A.prototype.toString=function(){return this._array.toString()};
jindo.$A.prototype.get=function(nIndex){return this._array[nIndex]};
jindo.$A.prototype.length=function(nLen,oValue){if(typeof nLen=="number"){var l=this._array.length;this._array.length=
nLen;if(typeof oValue!="undefined")for(var i=l;i<nLen;i++)this._array[i]=oValue;return this}else return this._array.length};
jindo.$A.prototype.has=function(oValue){return this.indexOf(oValue)>-1};
jindo.$A.prototype.indexOf=function(oValue){if(typeof this._array.indexOf!="undefined")jindo.$A.prototype.indexOf=
function(oValue){return this._array.indexOf(oValue)};
else jindo.$A.prototype.indexOf=function(oValue){for(var i=0;i<this._array.length;i++)if(this._array[i]==
oValue)return i;return-1};
return this.indexOf(oValue)};
jindo.$A.prototype.$value=function(){return this._array};
jindo.$A.prototype.push=function(oValue1){return this._array.push.apply(this._array,Array.prototype.slice.apply(arguments))};
jindo.$A.prototype.pop=function(){return this._array.pop()};
jindo.$A.prototype.shift=function(){return this._array.shift()};
jindo.$A.prototype.unshift=function(oValue1){this._array.unshift.apply(this._array,Array.prototype.slice.apply(arguments));
return this._array.length};
jindo.$A.prototype.forEach=function(fCallback,oThis){if(typeof this._array.forEach=="function")jindo.$A.prototype.forEach=
function(fCallback,oThis){var arr=this._array;var errBreak=this.constructor.Break;var errContinue=this.constructor.Continue;
function f(v,i,a){try{fCallback.call(oThis,v,i,a)}catch(e){if(!(e instanceof errContinue))throw e;}}
try{this._array.forEach(f)}catch(e){if(!(e instanceof errBreak))throw e;}return this};
else jindo.$A.prototype.forEach=function(fCallback,oThis){var arr=this._array;var errBreak=this.constructor.Break;
var errContinue=this.constructor.Continue;function f(v,i,a){try{fCallback.call(oThis,v,i,a)}catch(e){if(!(e instanceof
errContinue))throw e;}}
for(var i=0;i<arr.length;i++)try{f(arr[i],i,arr)}catch(e){if(e instanceof errBreak)break;throw e;}return this};
return this.forEach(fCallback,oThis)};
jindo.$A.prototype.slice=function(nStart,nEnd){var a=this._array.slice.call(this._array,nStart,nEnd);
return jindo.$A(a)};
jindo.$A.prototype.splice=function(nIndex,nHowMany){var a=this._array.splice.apply(this._array,Array.prototype.slice.apply(arguments));
return jindo.$A(a)};
jindo.$A.prototype.shuffle=function(){this._array.sort(function(a,b){return Math.random()>Math.random()?
1:-1});
return this};
jindo.$A.prototype.reverse=function(){this._array.reverse();return this};
jindo.$A.prototype.empty=function(){return this.length(0)};
jindo.$A.Break=function(){if(!(this instanceof arguments.callee))throw new arguments.callee;};
jindo.$A.Continue=function(){if(!(this instanceof arguments.callee))throw new arguments.callee;};
jindo.$A.prototype.map=function(fCallback,oThis){if(typeof this._array.map=="function")jindo.$A.prototype.map=
function(fCallback,oThis){var arr=this._array;var errBreak=this.constructor.Break;var errContinue=this.constructor.Continue;
function f(v,i,a){try{return fCallback.call(oThis,v,i,a)}catch(e){if(e instanceof errContinue)return v;
else throw e;}}
try{this._array=this._array.map(f)}catch(e){if(!(e instanceof errBreak))throw e;}return this};
else jindo.$A.prototype.map=function(fCallback,oThis){var arr=this._array;var returnArr=[];var errBreak=
this.constructor.Break;var errContinue=this.constructor.Continue;function f(v,i,a){try{return fCallback.call(oThis,
v,i,a)}catch(e){if(e instanceof errContinue)return v;else throw e;}}
for(var i=0;i<this._array.length;i++)try{returnArr[i]=f(arr[i],i,arr)}catch(e){if(e instanceof errBreak)return this;
else throw e;}this._array=returnArr;return this};
return this.map(fCallback,oThis)};
jindo.$A.prototype.filter=function(fCallback,oThis){if(typeof this._array.filter!="undefined")jindo.$A.prototype.filter=
function(fCallback,oThis){return jindo.$A(this._array.filter(fCallback,oThis))};
else jindo.$A.prototype.filter=function(fCallback,oThis){var ar=[];this.forEach(function(v,i,a){if(fCallback.call(oThis,
v,i,a)===true)ar[ar.length]=v});
return jindo.$A(ar)};
return this.filter(fCallback,oThis)};
jindo.$A.prototype.every=function(fCallback,oThis){if(typeof this._array.every!="undefined")jindo.$A.prototype.every=
function(fCallback,oThis){return this._array.every(fCallback,oThis)};
else jindo.$A.prototype.every=function(fCallback,oThis){var result=true;this.forEach(function(v,i,a){if(fCallback.call(oThis,
v,i,a)===false){result=false;jindo.$A.Break()}});
return result};
return this.every(fCallback,oThis)};
jindo.$A.prototype.some=function(fCallback,oThis){if(typeof this._array.some!="undefined")jindo.$A.prototype.some=
function(fCallback,oThis){return this._array.some(fCallback,oThis)};
else jindo.$A.prototype.some=function(fCallback,oThis){var result=false;this.forEach(function(v,i,a){if(fCallback.call(oThis,
v,i,a)===true){result=true;jindo.$A.Break()}});
return result};
return this.some(fCallback,oThis)};
jindo.$A.prototype.refuse=function(oValue1){var a=jindo.$A(Array.prototype.slice.apply(arguments));return this.filter(function(v,
i){return!a.has(v)})};
jindo.$A.prototype.unique=function(){var a=this._array,b=[],l=a.length;var i,j;for(i=0;i<l;i++){for(j=
0;j<b.length;j++)if(a[i]==b[j])break;if(j>=b.length)b[j]=a[i]}this._array=b;return this};
jindo.$Ajax=function(url,option){var cl=arguments.callee;if(!(this instanceof cl))return new cl(url,option);
function _getXHR(){if(window.XMLHttpRequest)return new XMLHttpRequest;else if(ActiveXObject){try{return new ActiveXObject("MSXML2.XMLHTTP")}catch(e){return new ActiveXObject("Microsoft.XMLHTTP")}return null}}
var loc=location.toString();var domain="";try{domain=loc.match(/^https?:\/\/([a-z0-9_\-\.]+)/i)[1]}catch(e){}this._status=
0;this._url=url;this._options=new Object;this._headers=new Object;this._options={type:"xhr",method:"post",
proxy:"",timeout:0,onload:function(req){},
onerror:null,ontimeout:function(req){},
jsonp_charset:"utf-8",callbackid:"",callbackname:"",sendheader:true,async:true,decode:true,postBody:false};
this.option(option);if(jindo.$Ajax.CONFIG)this.option(jindo.$Ajax.CONFIG);var _opt=this._options;_opt.type=
_opt.type.toLowerCase();_opt.method=_opt.method.toLowerCase();if(typeof window.__jindo2_callback=="undefined")window.__jindo2_callback=
new Array;switch(_opt.type){case "put":case "delete":case "get":case "post":_opt.method=_opt.type;_opt.type=
"xhr";case "xhr":this._request=_getXHR();break;case "flash":if(!jindo.$Ajax.SWFRequest)throw Error("Require jindo.$Ajax.SWFRequest");
this._request=new jindo.$Ajax.SWFRequest(jindo.$Fn(this.option,this).bind());break;case "jsonp":if(!jindo.$Ajax.JSONPRequest)throw Error("Require jindo.$Ajax.JSONPRequest");
_opt.method="get";this._request=new jindo.$Ajax.JSONPRequest(jindo.$Fn(this.option,this).bind());break;
case "iframe":if(!jindo.$Ajax.FrameRequest)throw Error("Require jindo.$Ajax.FrameRequest");this._request=
new jindo.$Ajax.FrameRequest(jindo.$Fn(this.option,this).bind());break}};
jindo.$Ajax.prototype._onload=function(isIE){if(isIE)return function(){var bSuccess=this._request.readyState==
4&&this._request.status==200;var oResult;if(this._request.readyState==4)try{if(this._request.status!=
200&&typeof this._options.onerror=="function"){if(!this._request.status==0)this._options.onerror(jindo.$Ajax.Response(this._request))}else if(!this._is_abort)oResult=
this._options.onload(jindo.$Ajax.Response(this._request))}finally{if(typeof this._oncompleted=="function")this._oncompleted(bSuccess,
oResult);if(this._options.type=="xhr"){this.abort();try{delete this._request.onload}catch(e){this._request.onload=
undefined}}delete this._request.onreadystatechange}};
else return function(){var bSuccess=this._request.readyState==4&&this._request.status==200;var oResult;
if(this._request.readyState==4)try{if(this._request.status!=200&&typeof this._options.onerror=="function")this._options.onerror(jindo.$Ajax.Response(this._request));
else oResult=this._options.onload(jindo.$Ajax.Response(this._request))}finally{this._status--;if(typeof this._oncompleted==
"function")this._oncompleted(bSuccess,oResult)}}}(/MSIE/.test(window.navigator.userAgent));
jindo.$Ajax.prototype.request=function(oData){this._status++;var t=this;var req=this._request;var opt=
this._options;var data,v,a=[],data="";var _timer=null;var url=this._url;this._is_abort=false;if(opt.postBody&&
opt.type.toUpperCase()=="XHR"&&opt.method.toUpperCase()!="GET")if(typeof oData=="string")data=oData;else data=
jindo.$Json(oData).toString();else if(typeof oData=="undefined"||!oData)data=null;else{for(var k in oData)if(oData.hasOwnProperty(k)){v=
oData[k];if(typeof v=="function")v=v();if(v instanceof Array||v instanceof jindo.$A)jindo.$A(v).forEach(function(value,
index,array){a[a.length]=k+"\x3d"+encodeURIComponent(value)});
else a[a.length]=k+"\x3d"+encodeURIComponent(v)}data=a.join("\x26")}if(data&&opt.type.toUpperCase()==
"XHR"&&opt.method.toUpperCase()=="GET"){if(url.indexOf("?")==-1)url+="?";else url+="\x26";url+=data;data=
null}req.open(opt.method.toUpperCase(),url,opt.async);if(opt.type.toUpperCase()=="XHR"&&opt.method.toUpperCase()==
"GET"&&/MSIE/.test(window.navigator.userAgent))req.setRequestHeader("If-Modified-Since","Thu, 1 Jan 1970 00:00:00 GMT");
if(opt.sendheader){if(!this._headers["Content-Type"])req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset\x3dutf-8");
req.setRequestHeader("charset","utf-8");for(var x in this._headers)if(this._headers.hasOwnProperty(x)){if(typeof this._headers[x]==
"function")continue;req.setRequestHeader(x,String(this._headers[x]))}}var navi=navigator.userAgent;if(req.addEventListener&&
!(navi.indexOf("Opera")>-1)&&!jindo.$Agent().navigator().ie){if(this._loadFunc)req.removeEventListener("load",
this._loadFunc,false);this._loadFunc=function(rq){clearTimeout(_timer);_timer=undefined;t._onload(rq)};
req.addEventListener("load",this._loadFunc,false)}else if(typeof req.onload!="undefined")req.onload=function(rq){if(req.readyState==
4&&!t._is_abort){clearTimeout(_timer);_timer=undefined;t._onload(rq)}};
else if(window.navigator.userAgent.match(/(?:MSIE) ([0-9.]+)/)[1]==6&&opt.async){var onreadystatechange=
function(rq){if(req.readyState==4&&!t._is_abort){if(_timer){clearTimeout(_timer);_timer=undefined}t._onload(rq);
clearInterval(t._interval);t._interval=undefined}};
this._interval=setInterval(onreadystatechange,300)}else req.onreadystatechange=function(rq){if(req.readyState==
4){clearTimeout(_timer);_timer=undefined;t._onload(rq)}};
if(opt.timeout>0){if(this._timer)clearTimeout(this._timer);_timer=setTimeout(function(){t._is_abort=true;
if(t._interval){clearInterval(t._interval);t._interval=undefined}try{req.abort()}catch(e){}opt.ontimeout(req);
if(typeof t._oncompleted=="function")t._oncompleted(false)},opt.timeout*1E3);
this._timer=_timer}this._test_url=url;req.send(data);return this};
jindo.$Ajax.prototype.isIdle=function(){return this._status==0};
jindo.$Ajax.prototype.abort=function(){try{if(this._interval)clearInterval(this._interval);if(this._timer)clearTimeout(this._timer);
this._interval=undefined;this._timer=undefined;this._is_abort=true;this._request.abort()}finally{this._status--}return this};
jindo.$Ajax.prototype.option=function(name,value){if(typeof name=="undefined")return"";if(typeof name==
"string"){if(typeof value=="undefined")return this._options[name];this._options[name]=value;return this}try{for(var x in name)if(name.hasOwnProperty(x))this._options[x]=
name[x]}catch(e){}return this};
jindo.$Ajax.prototype.header=function(name,value){if(typeof name=="undefined")return"";if(typeof name==
"string"){if(typeof value=="undefined")return this._headers[name];this._headers[name]=value;return this}try{for(var x in name)if(name.hasOwnProperty(x))this._headers[x]=
name[x]}catch(e){}return this};
jindo.$Ajax.Response=function(req){if(this===jindo.$Ajax)return new jindo.$Ajax.Response(req);this._response=
req};
jindo.$Ajax.Response.prototype.xml=function(){return this._response.responseXML};
jindo.$Ajax.Response.prototype.text=function(){return this._response.responseText};
jindo.$Ajax.Response.prototype.status=function(){return this._response.status};
jindo.$Ajax.Response.prototype.readyState=function(){return this._response.readyState};
jindo.$Ajax.Response.prototype.json=function(){if(this._response.responseJSON)return this._response.responseJSON;
else if(this._response.responseText)try{return eval("("+this._response.responseText+")")}catch(e){return{}}return{}};
jindo.$Ajax.Response.prototype.header=function(name){if(typeof name=="string")return this._response.getResponseHeader(name);
return this._response.getAllResponseHeaders()};
jindo.$Ajax.RequestBase=jindo.$Class({_respHeaderString:"",callbackid:"",callbackname:"",responseXML:null,
responseJSON:null,responseText:"",status:404,readyState:0,$init:function(fpOption){},
onload:function(){},
abort:function(){},
open:function(){},
send:function(){},
setRequestHeader:function(sName,sValue){this._headers[sName]=sValue},
getResponseHeader:function(sName){return this._respHeaders[sName]||""},
getAllResponseHeaders:function(){return this._respHeaderString},
_getCallbackInfo:function(){var id="";if(this.option("callbackid")!=""){var idx=0;do{id="_"+this.option("callbackid")+
"_"+idx;idx++}while(window.__jindo2_callback[id])}else{do id="_"+Math.floor(Math.random()*1E4);while(window.__jindo2_callback[id])
}if(this.option("callbackname")=="")this.option("callbackname","_callback");return{callbackname:this.option("callbackname"),
id:id,name:"window.__jindo2_callback."+id}}});
jindo.$Ajax.JSONPRequest=jindo.$Class({_headers:{},_respHeaders:{},_script:null,_onerror:null,$init:function(fpOption){this.option=
fpOption},
_callback:function(data){if(this._onerror){clearTimeout(this._onerror);this._onerror=null}var self=this;
this.responseJSON=data;this.onload(this);setTimeout(function(){self.abort()},10)},
abort:function(){if(this._script)try{this._script.parentNode.removeChild(this._script)}catch(e){}},
open:function(method,url){this.responseJSON=null;this._url=url},
send:function(data){var t=this;var info=this._getCallbackInfo();var head=document.getElementsByTagName("head")[0];
this._script=jindo.$("\x3cscript\x3e");this._script.type="text/javascript";this._script.charset=this.option("jsonp_charset");
if(head)head.appendChild(this._script);else if(document.body)document.body.appendChild(this._script);
window.__jindo2_callback[info.id]=function(data){try{t.readyState=4;t.status=200;t._callback(data)}finally{delete window.__jindo2_callback[info.id]}};
var agent=jindo.$Agent(navigator);if(agent.navigator().ie||agent.navigator().opera)this._script.onreadystatechange=
function(){if(this.readyState=="loaded"){if(!t.responseJSON){t.readyState=4;t.status=500;t._onerror=setTimeout(function(){t._callback(null)},
200)}this.onreadystatechange=null}};
else{this._script.onload=function(){if(!t.responseJSON){t.readyState=4;t.status=500;t._onerror=setTimeout(function(){t._callback(null)},
200)}this.onload=null;
this.onerror=null};
this._script.onerror=function(){if(!t.responseJSON){t.readyState=4;t.status=404;t._onerror=setTimeout(function(){t._callback(null)},
200)}this.onerror=null;
this.onload=null}}var delimiter="\x26";
if(this._url.indexOf("?")==-1)delimiter="?";if(data)data="\x26"+data;else data="";this._test_url=this._url+
delimiter+info.callbackname+"\x3d"+info.name+data;this._script.src=this._url+delimiter+info.callbackname+
"\x3d"+info.name+data}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.SWFRequest=jindo.$Class({$init:function(fpOption){this.option=fpOption},
_headers:{},_respHeaders:{},_getFlashObj:function(){var navi=jindo.$Agent(window.navigator).navigator();
var obj;if(navi.ie&&navi.version==9)obj=document.getElementById(jindo.$Ajax.SWFRequest._tmpId);else obj=
window.document[jindo.$Ajax.SWFRequest._tmpId];return(this._getFlashObj=function(){return obj})()},
_callback:function(status,data,headers){this.readyState=4;if((typeof status).toLowerCase()=="number")this.status=
status;else if(status==true)this.status=200;if(this.status==200){if(typeof data=="string")try{this.responseText=
this.option("decode")?decodeURIComponent(data):data;if(!this.responseText||this.responseText=="")this.responseText=
data}catch(e){if(e.name=="URIError"){this.responseText=data;if(!this.responseText||this.responseText==
"")this.responseText=data}}if(typeof headers=="object")this._respHeaders=headers}this.onload(this)},
open:function(method,url){var re=/https?:\/\/([a-z0-9_\-\.]+)/i;this._url=url;this._method=method},
send:function(data){this.responseXML=false;this.responseText="";var t=this;var dat={};var info=this._getCallbackInfo();
var swf=this._getFlashObj();function f(arg){switch(typeof arg){case "string":return'"'+arg.replace(/\"/g,
'\\"')+'"';break;case "number":return arg;break;case "object":var ret="",arr=[];if(arg instanceof Array){for(var i=
0;i<arg.length;i++)arr[i]=f(arg[i]);ret="["+arr.join(",")+"]"}else{for(var x in arg)if(arg.hasOwnProperty(x))arr[arr.length]=
f(x)+":"+f(arg[x]);ret="{"+arr.join(",")+"}"}return ret;default:return'""'}}
data=(data||"").split("\x26");for(var i=0;i<data.length;i++){pos=data[i].indexOf("\x3d");key=data[i].substring(0,
pos);val=data[i].substring(pos+1);dat[key]=decodeURIComponent(val)}this._current_callback_id=info.id;
window.__jindo2_callback[info.id]=function(success,data){try{t._callback(success,data)}finally{delete window.__jindo2_callback[info.id]}};
var oData={url:this._url,type:this._method,data:dat,charset:"UTF-8",callback:info.name,header_json:this._headers};
swf.requestViaFlash(f(oData))},
abort:function(){if(this._current_callback_id)window.__jindo2_callback[this._current_callback_id]=function(){delete window.__jindo2_callback[info.id]}}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.SWFRequest.write=function(swf_path){if(typeof swf_path=="undefined")swf_path="./ajax.swf";
jindo.$Ajax.SWFRequest._tmpId="tmpSwf"+(new Date).getMilliseconds()+Math.floor(Math.random()*1E5);var activeCallback=
"jindo.$Ajax.SWFRequest.loaded";jindo.$Ajax._checkFlashLoad();document.write('\x3cdiv style\x3d"position:absolute;top:-1000px;left:-1000px"\x3e\x3cobject id\x3d"'+
jindo.$Ajax.SWFRequest._tmpId+'" width\x3d"1" height\x3d"1" classid\x3d"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase\x3d"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version\x3d6,0,0,0"\x3e\x3cparam name\x3d"movie" value\x3d"'+
swf_path+'"\x3e\x3cparam name \x3d "FlashVars" value \x3d "activeCallback\x3d'+activeCallback+'" /\x3e\x3cparam name \x3d "allowScriptAccess" value \x3d "always" /\x3e\x3cembed name\x3d"'+
jindo.$Ajax.SWFRequest._tmpId+'" src\x3d"'+swf_path+'" type\x3d"application/x-shockwave-flash" pluginspage\x3d"http://www.macromedia.com/go/getflashplayer" width\x3d"1" height\x3d"1" allowScriptAccess\x3d"always" swLiveConnect\x3d"true" FlashVars\x3d"activeCallback\x3d'+
activeCallback+'"\x3e\x3c/embed\x3e\x3c/object\x3e\x3c/div\x3e')};
jindo.$Ajax._checkFlashLoad=function(){jindo.$Ajax._checkFlashKey=setTimeout(function(){},5E3);
jindo.$Ajax._checkFlashLoad=function(){}};
jindo.$Ajax.SWFRequest.activeFlash=false;
jindo.$Ajax.SWFRequest.loaded=function(){clearTimeout(jindo.$Ajax._checkFlashKey);jindo.$Ajax.SWFRequest.activeFlash=
true};
jindo.$Ajax.FrameRequest=jindo.$Class({_headers:{},_respHeaders:{},_frame:null,_domain:"",$init:function(fpOption){this.option=
fpOption},
_callback:function(id,data,header){var self=this;this.readyState=4;this.status=200;this.responseText=
data;this._respHeaderString=header;header.replace(/^([\w\-]+)\s*:\s*(.+)$/m,function($0,$1,$2){self._respHeaders[$1]=
$2});
this.onload(this);setTimeout(function(){self.abort()},10)},
abort:function(){if(this._frame)try{this._frame.parentNode.removeChild(this._frame)}catch(e){}},
open:function(method,url){var re=/https?:\/\/([a-z0-9_\-\.]+)/i;var dom=document.location.toString().match(re);
this._method=method;this._url=url;this._remote=String(url).match(/(https?:\/\/[a-z0-9_\-\.]+)(:[0-9]+)?/i)[0];
this._frame=null;this._domain=dom[1]!=document.domain?document.domain:""},
send:function(data){this.responseXML="";this.responseText="";var t=this;var re=/https?:\/\/([a-z0-9_\-\.]+)/i;
var info=this._getCallbackInfo();var url;var _aStr=[];_aStr.push(this._remote+"/ajax_remote_callback.html?method\x3d"+
this._method);var header=new Array;window.__jindo2_callback[info.id]=function(id,data,header){try{t._callback(id,
data,header)}finally{delete window.__jindo2_callback[info.id]}};
for(var x in this._headers)if(this._headers.hasOwnProperty(x))header[header.length]="'"+x+"':'"+this._headers[x]+
"'";header="{"+header.join(",")+"}";_aStr.push("\x26id\x3d"+info.id);_aStr.push("\x26header\x3d"+encodeURIComponent(header));
_aStr.push("\x26proxy\x3d"+encodeURIComponent(this.option("proxy")));_aStr.push("\x26domain\x3d"+this._domain);
_aStr.push("\x26url\x3d"+encodeURIComponent(this._url.replace(re,"")));_aStr.push("#"+encodeURIComponent(data));
var fr=this._frame=jindo.$("\x3ciframe\x3e");fr.style.position="absolute";fr.style.visibility="hidden";
fr.style.width="1px";fr.style.height="1px";var body=document.body||document.documentElement;if(body.firstChild)body.insertBefore(fr,
body.firstChild);else body.appendChild(fr);fr.src=_aStr.join("")}}).extend(jindo.$Ajax.RequestBase);
jindo.$Ajax.Queue=function(option){var cl=arguments.callee;if(!(this instanceof cl))return new cl(option);
this._options={async:false,useResultAsParam:false,stopOnFailure:false};this.option(option);this._queue=
[]};
jindo.$Ajax.Queue.prototype.option=function(name,value){if(typeof name=="undefined")return"";if(typeof name==
"string"){if(typeof value=="undefined")return this._options[name];this._options[name]=value;return this}try{for(var x in name)if(name.hasOwnProperty(x))this._options[x]=
name[x]}catch(e){}return this};
jindo.$Ajax.Queue.prototype.add=function(oAjax,oParam){this._queue.push({obj:oAjax,param:oParam})};
jindo.$Ajax.Queue.prototype.request=function(){if(this.option("async"))this._requestAsync();else this._requestSync(0)};
jindo.$Ajax.Queue.prototype._requestSync=function(nIdx,oParam){var t=this;if(this._queue.length>nIdx+
1)this._queue[nIdx].obj._oncompleted=function(bSuccess,oResult){if(!t.option("stopOnFailure")||bSuccess)t._requestSync(nIdx+
1,oResult)};
var _oParam=this._queue[nIdx].param||{};if(this.option("useResultAsParam")&&oParam)try{for(var x in oParam)if(typeof _oParam[x]==
"undefined"&&oParam.hasOwnProperty(x))_oParam[x]=oParam[x]}catch(e){}this._queue[nIdx].obj.request(_oParam)};
jindo.$Ajax.Queue.prototype._requestAsync=function(){for(var i=0;i<this._queue.length;i++)this._queue[i].obj.request(this._queue[i].param)};
jindo.$H=function(hashObject){var cl=arguments.callee;if(typeof hashObject=="undefined")hashObject=new Object;
if(hashObject instanceof cl)return hashObject;if(!(this instanceof cl))return new cl(hashObject);this._table=
{};for(var k in hashObject)if(hashObject.hasOwnProperty(k))this._table[k]=hashObject[k]};
jindo.$H.prototype.$value=function(){return this._table};
jindo.$H.prototype.$=function(key,value){if(typeof value=="undefined")return this._table[key];this._table[key]=
value;return this};
jindo.$H.prototype.length=function(){var i=0;for(var k in this._table)if(this._table.hasOwnProperty(k)){if(typeof Object.prototype[k]!=
"undeifned"&&Object.prototype[k]===this._table[k])continue;i++}return i};
jindo.$H.prototype.forEach=function(callback,thisObject){var t=this._table;var h=this.constructor;for(var k in t)if(t.hasOwnProperty(k)){if(!t.propertyIsEnumerable(k))continue;
try{callback.call(thisObject,t[k],k,t)}catch(e){if(e instanceof h.Break)break;if(e instanceof h.Continue)continue;
throw e;}}return this};
jindo.$H.prototype.filter=function(callback,thisObject){var h=jindo.$H();this.forEach(function(v,k,o){if(callback.call(thisObject,
v,k,o)===true)h.add(k,v)});
return h};
jindo.$H.prototype.map=function(callback,thisObject){var t=this._table;this.forEach(function(v,k,o){t[k]=
callback.call(thisObject,v,k,o)});
return this};
jindo.$H.prototype.add=function(key,value){this._table[key]=value;return this};
jindo.$H.prototype.remove=function(key){if(typeof this._table[key]=="undefined")return null;var val=this._table[key];
delete this._table[key];return val};
jindo.$H.prototype.search=function(value){var result=false;this.forEach(function(v,k,o){if(v===value){result=
k;jindo.$H.Break()}});
return result};
jindo.$H.prototype.hasKey=function(key){var result=false;return typeof this._table[key]!="undefined"};
jindo.$H.prototype.hasValue=function(value){return this.search(value)!==false};
jindo.$H.prototype.sort=function(){var o=new Object;var a=this.values();var k=false;a.sort();for(var i=
0;i<a.length;i++){k=this.search(a[i]);o[k]=a[i];delete this._table[k]}this._table=o;return this};
jindo.$H.prototype.ksort=function(){var o=new Object;var a=this.keys();a.sort();for(var i=0;i<a.length;i++)o[a[i]]=
this._table[a[i]];this._table=o;return this};
jindo.$H.prototype.keys=function(){var keys=new Array;for(var k in this._table)if(this._table.hasOwnProperty(k))keys.push(k);
return keys};
jindo.$H.prototype.values=function(){var values=[];for(var k in this._table)if(this._table.hasOwnProperty(k))values[values.length]=
this._table[k];return values};
jindo.$H.prototype.toQueryString=function(){var buf=[],val=null,idx=0;for(var k in this._table)if(this._table.hasOwnProperty(k))if(typeof(val=
this._table[k])=="object"&&val.constructor==Array)for(i=0;i<val.length;i++)buf[buf.length]=encodeURIComponent(k)+
"[]\x3d"+encodeURIComponent(val[i]+"");else buf[buf.length]=encodeURIComponent(k)+"\x3d"+encodeURIComponent(this._table[k]+
"");return buf.join("\x26")};
jindo.$H.prototype.empty=function(){var keys=this.keys();for(var i=0;i<keys.length;i++)delete this._table[keys[i]];
return this};
jindo.$H.Break=function(){if(!(this instanceof arguments.callee))throw new arguments.callee;};
jindo.$H.Continue=function(){if(!(this instanceof arguments.callee))throw new arguments.callee;};
jindo.$Json=function(sObject){var cl=arguments.callee;if(typeof sObject=="undefined")sObject={};if(sObject instanceof
cl)return sObject;if(!(this instanceof cl))return new cl(sObject);if(typeof sObject=="string")this._object=
jindo.$Json._oldMakeJSON(sObject);else this._object=sObject};
jindo.$Json._oldMakeJSON=function(sObject){try{if(/^(?:\s*)[\{\[]/.test(sObject))sObject=eval("("+sObject+
")");else sObject=sObject}catch(e){sObject={}}return sObject};
jindo.$Json.fromXML=function(sXML){var o={};var re=/\s*<(\/?[\w:\-]+)((?:\s+[\w:\-]+\s*=\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'))*)\s*((?:\/>)|(?:><\/\1>|\s*))|\s*<!\[CDATA\[([\w\W]*?)\]\]>\s*|\s*>?([^<]*)/ig;
var re2=/^[0-9]+(?:\.[0-9]+)?$/;var ec={"\x26amp;":"\x26","\x26nbsp;":" ","\x26quot;":'"',"\x26lt;":"\x3c",
"\x26gt;":"\x3e"};var fg={tags:["/"],stack:[o]};var es=function(s){if(typeof s=="undefined")return"";
return s.replace(/&[a-z]+;/g,function(m){return typeof ec[m]=="string"?ec[m]:m})};
var at=function(s,c){s.replace(/([\w\:\-]+)\s*=\s*(?:"((?:\\"|[^"])*)"|'((?:\\'|[^'])*)')/g,function($0,
$1,$2,$3){c[$1]=es(($2?$2.replace(/\\"/g,'"'):undefined)||($3?$3.replace(/\\'/g,"'"):undefined))})};
var em=function(o){for(var x in o)if(o.hasOwnProperty(x)){if(Object.prototype[x])continue;return false}return true};
var cb=function($0,$1,$2,$3,$4,$5){var cur,cdata="";var idx=fg.stack.length-1;if(typeof $1=="string"&&
$1)if($1.substr(0,1)!="/"){var has_attr=typeof $2=="string"&&$2;var closed=typeof $3=="string"&&$3;var newobj=
!has_attr&&closed?"":{};cur=fg.stack[idx];if(typeof cur[$1]=="undefined"){cur[$1]=newobj;cur=fg.stack[idx+
1]=cur[$1]}else if(cur[$1]instanceof Array){var len=cur[$1].length;cur[$1][len]=newobj;cur=fg.stack[idx+
1]=cur[$1][len]}else{cur[$1]=[cur[$1],newobj];cur=fg.stack[idx+1]=cur[$1][1]}if(has_attr)at($2,cur);fg.tags[idx+
1]=$1;if(closed){fg.tags.length--;fg.stack.length--}}else{fg.tags.length--;fg.stack.length--}else if(typeof $4==
"string"&&$4)cdata=$4;else if(typeof $5=="string"&&$5)cdata=es($5);if(cdata.replace(/^\s+/g,"").length>
0){var par=fg.stack[idx-1];var tag=fg.tags[idx];if(re2.test(cdata))cdata=parseFloat(cdata);else if(cdata==
"true")cdata=true;else if(cdata=="false")cdata=false;if(typeof par=="undefined")return;if(par[tag]instanceof
Array){var o=par[tag];if(typeof o[o.length-1]=="object"&&!em(o[o.length-1])){o[o.length-1].$cdata=cdata;
o[o.length-1].toString=function(){return cdata}}else o[o.length-1]=cdata}else if(typeof par[tag]=="object"&&
!em(par[tag])){par[tag].$cdata=cdata;
par[tag].toString=function(){return cdata}}else par[tag]=cdata}};
sXML=sXML.replace(/<(\?|\!-)[^>]*>/g,"");sXML.replace(re,cb);return jindo.$Json(o)};
jindo.$Json.prototype.get=function(sPath){var o=this._object;var p=sPath.split("/");var re=/^([\w:\-]+)\[([0-9]+)\]$/;
var stack=[[o]],cur=stack[0];var len=p.length,c_len,idx,buf,j,e;for(var i=0;i<len;i++){if(p[i]=="."||
p[i]=="")continue;if(p[i]=="..")stack.length--;else{buf=[];idx=-1;c_len=cur.length;if(c_len==0)return[];
if(re.test(p[i]))idx=+RegExp.$2;for(j=0;j<c_len;j++){e=cur[j][p[i]];if(typeof e=="undefined")continue;
if(e instanceof Array)if(idx>-1){if(idx<e.length)buf[buf.length]=e[idx]}else buf=buf.concat(e);else if(idx==
-1)buf[buf.length]=e}stack[stack.length]=buf}cur=stack[stack.length-1]}return cur};
jindo.$Json.prototype.toString=function(){if(window.JSON&&window.JSON.stringify)jindo.$Json.prototype.toString=
function(){try{return window.JSON.stringify(this._object)}catch(e){return jindo.$Json._oldToString(this._object)}};
else jindo.$Json.prototype.toString=function(){return jindo.$Json._oldToString(this._object)};
return this.toString()};
jindo.$Json._oldToString=function(oObj){var func={$:function($){if(typeof $=="object"&&$==null)return"null";
if(typeof $=="undefined")return'""';if(typeof $=="boolean")return $?"true":"false";if(typeof $=="string")return this.s($);
if(typeof $=="number")return $;if($ instanceof Array)return this.a($);if($ instanceof Object)return this.o($)},
s:function(s){var e={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","\t":"\\t"};var c=function(m){return typeof e[m]!=
"undefined"?e[m]:m};
return'"'+s.replace(/[\\"'\n\r\t]/g,c)+'"'},
a:function(a){var s="[",c="",n=a.length;for(var i=0;i<n;i++){if(typeof a[i]=="function")continue;s+=c+
this.$(a[i]);if(!c)c=","}return s+"]"},
o:function(o){o=jindo.$H(o).ksort().$value();var s="{",c="";for(var x in o)if(o.hasOwnProperty(x)){if(typeof o[x]==
"function")continue;s+=c+this.s(x)+":"+this.$(o[x]);if(!c)c=","}return s+"}"}};
return func.$(oObj)};
jindo.$Json.prototype.toXML=function(){var f=function($,tag){var t=function(s,at){return"\x3c"+tag+(at||
"")+"\x3e"+s+"\x3c/"+tag+"\x3e"};
switch(typeof $){case "undefined":case "null":return t("");case "number":return t($);case "string":if($.indexOf("\x3c")<
0)return t($.replace(/&/g,"\x26amp;"));else return t("\x3c![CDATA["+$+"]]\x3e");case "boolean":return t(String($));
case "object":var ret="";if($ instanceof Array){var len=$.length;for(var i=0;i<len;i++)ret+=f($[i],tag)}else{var at=
"";for(var x in $)if($.hasOwnProperty(x)){if(x=="$cdata"||typeof $[x]=="function")continue;ret+=f($[x],
x)}if(tag)ret=t(ret,at)}return ret}};
return f(this._object,"")};
jindo.$Json.prototype.toObject=function(){return this._object};
jindo.$Json.prototype.compare=function(oData){return jindo.$Json._oldToString(this._object).toString()==
jindo.$Json._oldToString(jindo.$Json(oData).$value()).toString()};
jindo.$Json.prototype.$value=jindo.$Json.prototype.toObject;
jindo.$Cookie=function(){var cl=arguments.callee;var cached=cl._cached;if(cl._cached)return cl._cached;
if(!(this instanceof cl))return new cl;if(typeof cl._cached=="undefined")cl._cached=this};
jindo.$Cookie.prototype.keys=function(){var ca=document.cookie.split(";");var re=/^\s+|\s+$/g;var a=new Array;
for(var i=0;i<ca.length;i++)a[a.length]=ca[i].substr(0,ca[i].indexOf("\x3d")).replace(re,"");return a};
jindo.$Cookie.prototype.get=function(sName){var ca=document.cookie.split(/\s*;\s*/);var re=new RegExp("^(\\s*"+
sName+"\\s*\x3d)");for(var i=0;i<ca.length;i++)if(re.test(ca[i]))return unescape(ca[i].substr(RegExp.$1.length));
return null};
jindo.$Cookie.prototype.set=function(sName,sValue,nDays,sDomain,sPath){var sExpire="";if(typeof nDays==
"number")sExpire=";expires\x3d"+(new Date((new Date).getTime()+nDays*1E3*60*60*24)).toGMTString();if(typeof sDomain==
"undefined")sDomain="";if(typeof sPath=="undefined")sPath="/";document.cookie=sName+"\x3d"+escape(sValue)+
sExpire+"; path\x3d"+sPath+(sDomain?"; domain\x3d"+sDomain:"");return this};
jindo.$Cookie.prototype.remove=function(sName,sDomain,sPath){if(this.get(sName)!=null)this.set(sName,
"",-1,sDomain,sPath);return this};
jindo.$Element=function(el){var cl=arguments.callee;if(el&&el instanceof cl)return el;if(el===null||typeof el==
"undefined")return null;else{el=jindo.$(el);if(el===null)return null}if(!(this instanceof cl))return new cl(el);
this._element=typeof el=="string"?jindo.$(el):el;var tag=this._element.tagName;this.tag=typeof tag!="undefined"?
tag.toLowerCase():""};
var _j_ag=navigator.userAgent;var IS_IE=/(MSIE|Trident)/.test(_j_ag);
var IS_FF=_j_ag.indexOf("Firefox")>-1;var IS_OP=_j_ag.indexOf("Opera")>-1;
var IS_SF=_j_ag.indexOf("Apple")>-1;var IS_CH=_j_ag.indexOf("Chrome")>-1;
jindo.$Element.prototype.$value=function(){return this._element};
jindo.$Element.prototype.visible=function(bVisible,sDisplay){if(typeof bVisible!="undefined"){this[bVisible?
"show":"hide"](sDisplay);return this}return this.css("display")!="none"};
jindo.$Element.prototype.show=function(sDisplay){var s=this._element.style;var b="block";var c={p:b,div:b,
form:b,h1:b,h2:b,h3:b,h4:b,ol:b,ul:b,fieldset:b,td:"table-cell",th:"table-cell",li:"list-item",table:"table",
thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",col:"table-column",
colgroup:"table-column-group",caption:"table-caption",dl:b,dt:b,dd:b};try{if(sDisplay)s.display=sDisplay;
else{var type=c[this.tag];s.display=type||"inline"}}catch(e){s.display="block"}return this};
jindo.$Element.prototype.hide=function(){this._element.style.display="none";return this};
jindo.$Element.prototype.toggle=function(sDisplay){this[this.visible()?"hide":"show"](sDisplay);return this};
jindo.$Element.prototype.opacity=function(value){var v,e=this._element,b=this._getCss(e,"display")!="none";
value=parseFloat(value);e.style.zoom=1;if(!isNaN(value)){value=Math.max(Math.min(value,1),0);if(typeof e.filters!=
"undefined"){value=Math.ceil(value*100);if(typeof e.filters!="unknown"&&typeof e.filters.alpha!="undefined")e.filters.alpha.opacity=
value;else e.style.filter=e.style.filter+" alpha(opacity\x3d"+value+")"}else e.style.opacity=value;return value}if(typeof e.filters!=
"undefined"){v=typeof e.filters.alpha=="undefined"?b?100:0:e.filters.alpha.opacity;v=v/100}else{v=parseFloat(e.style.opacity);
if(isNaN(v))v=b?1:0}return v};
jindo.$Element.prototype.css=function(sName,sValue){var e=this._element;var type_v=typeof sValue;if(sName==
"opacity")return type_v=="undefined"?this.opacity():this.opacity(sValue);var type_n=typeof sName;if(type_n==
"string"){var view;if(type_v=="string"||type_v=="number"){var obj={};obj[sName]=sValue;sName=obj}else{var _getCss=
this._getCss;if((IS_FF||IS_OP)&&(sName=="backgroundPositionX"||sName=="backgroundPositionY")){var bp=
_getCss(e,"backgroundPosition").split(/\s+/);return sName=="backgroundPositionX"?bp[0]:bp[1]}if(IS_IE&&
sName=="backgroundPosition")return _getCss(e,"backgroundPositionX")+" "+_getCss(e,"backgroundPositionY");
if((IS_FF||IS_SF||IS_CH)&&(sName=="padding"||sName=="margin")){var top=_getCss(e,sName+"Top");var right=
_getCss(e,sName+"Right");var bottom=_getCss(e,sName+"Bottom");var left=_getCss(e,sName+"Left");if(top==
right&&bottom==left)return top;else if(top==bottom)if(right==left)return top+" "+right;else return top+
" "+right+" "+bottom+" "+left;else return top+" "+right+" "+bottom+" "+left}return _getCss(e,sName)}}var h=
jindo.$H;if(typeof h!="undefined"&&sName instanceof h)sName=sName._table;if(typeof sName=="object"){var v,
type;for(var k in sName)if(sName.hasOwnProperty(k)){v=sName[k];type=typeof v;if(type!="string"&&type!=
"number")continue;if(k=="opacity"){type=="undefined"?this.opacity():this.opacity(v);continue}if(k=="cssFloat"&&
IS_IE)k="styleFloat";if((IS_FF||IS_OP)&&(k=="backgroundPositionX"||k=="backgroundPositionY")){var bp=
this.css("backgroundPosition").split(/\s+/);v=k=="backgroundPositionX"?v+" "+bp[1]:bp[0]+" "+v;this._setCss(e,
"backgroundPosition",v)}else this._setCss(e,k,v)}}return this};
jindo.$Element.prototype._getCss=function(e,sName){var fpGetCss;if(e.currentStyle)fpGetCss=function(e,
sName){try{if(sName=="cssFloat")sName="styleFloat";var sStyle=e.style[sName];if(sStyle)return sStyle;
else{var oCurrentStyle=e.currentStyle;if(oCurrentStyle)return oCurrentStyle[sName]}return sStyle}catch(ex){throw new Error((e.tagName||
"document")+"\ub294 css\ub97c \uc0ac\uc6a9 \ud560\uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");}};
else if(window.getComputedStyle)fpGetCss=function(e,sName){try{if(sName=="cssFloat")sName="float";var d=
e.ownerDocument||e.document||document;var sVal=e.style[sName]||d.defaultView.getComputedStyle(e,null).getPropertyValue(sName.replace(/([A-Z])/g,
"-$1").toLowerCase());if(sName=="textDecoration")sVal=sVal.replace(",","");return sVal}catch(ex){throw new Error((e.tagName||
"document")+"\ub294 css\ub97c \uc0ac\uc6a9 \ud560\uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");}};
else fpGetCss=function(e,sName){try{if(sName=="cssFloat"&&IS_IE)sName="styleFloat";return e.style[sName]}catch(ex){throw new Error((e.tagName||
"document")+"\ub294 css\ub97c \uc0ac\uc6a9 \ud560\uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");}};
jindo.$Element.prototype._getCss=fpGetCss;return fpGetCss(e,sName)};
jindo.$Element.prototype._setCss=function(e,k,v){if("#top#left#right#bottom#".indexOf(k+"#")>0&&(typeof v==
"number"||/\d$/.test(v)))e.style[k]=parseInt(v,10)+"px";else e.style[k]=v};
jindo.$Element.prototype.attr=function(sName,sValue){var e=this._element;if(typeof sName=="string")if(typeof sValue!=
"undefined"){var obj={};obj[sName]=sValue;sName=obj}else{if(sName=="class"||sName=="className")return e.className;
else if(sName=="style")return e.style.cssText;else if(sName=="checked"||sName=="disabled")return!!e[sName];
else if(sName=="value")return e.value;else if(sName=="href")return e.getAttribute(sName,2);return e.getAttribute(sName)}if(typeof jindo.$H!=
"undefined"&&sName instanceof jindo.$H)sName=sName.$value();if(typeof sName=="object")for(var k in sName)if(sName.hasOwnProperty(k))if(typeof sValue!=
"undefined"&&sValue===null)e.removeAttribute(k);else if(k=="class"||k=="className")e.className=sName[k];
else if(k=="style")e.style.cssText=sName[k];else if(k=="checked"||k=="disabled")e[k]=sName[k];else if(k==
"value")e.value=sName[k];else e.setAttribute(k,sName[k]);return this};
jindo.$Element.prototype.width=function(width){if(typeof width=="number"){var e=this._element;e.style.width=
width+"px";var off=e.offsetWidth;if(off!=width&&off!==0){var w=width*2-off;if(w>0)e.style.width=w+"px"}return this}return this._element.offsetWidth};
jindo.$Element.prototype.height=function(height){if(typeof height=="number"){var e=this._element;e.style.height=
height+"px";var off=e.offsetHeight;if(off!=height&&off!==0){var height=height*2-off;if(height>0)e.style.height=
height+"px"}return this}return this._element.offsetHeight};
jindo.$Element.prototype.className=function(sClass){var e=this._element;if(typeof sClass=="undefined")return e.className;
e.className=sClass;return this};
jindo.$Element.prototype.hasClass=function(sClass){if(this._element.classList)jindo.$Element.prototype.hasClass=
function(sClass){return this._element.classList.contains(sClass)};
else jindo.$Element.prototype.hasClass=function(sClass){return(" "+this._element.className+" ").indexOf(" "+
sClass+" ")>-1};
return this.hasClass(sClass)};
jindo.$Element.prototype.addClass=function(sClass){if(this._element.classList)jindo.$Element.prototype.addClass=
function(sClass){var aClass=sClass.split(/\s+/);var flistApi=this._element.classList;for(var i=aClass.length;i--;)flistApi.add(aClass[i]);
return this};
else jindo.$Element.prototype.addClass=function(sClass){var e=this._element;var aClass=sClass.split(/\s+/);
var eachClass;for(var i=aClass.length-1;i>=0;i--){eachClass=aClass[i];if(!this.hasClass(eachClass))e.className=
(e.className+" "+eachClass).replace(/^\s+/,"")}return this};
return this.addClass(sClass)};
jindo.$Element.prototype.removeClass=function(sClass){if(this._element.classList)jindo.$Element.prototype.removeClass=
function(sClass){var flistApi=this._element.classList;var aClass=sClass.split(" ");for(var i=aClass.length;i--;)flistApi.remove(aClass[i]);
return this};
else jindo.$Element.prototype.removeClass=function(sClass){var e=this._element;var aClass=sClass.split(/\s+/);
var eachClass;for(var i=aClass.length-1;i>=0;i--){eachClass=aClass[i];if(this.hasClass(eachClass))e.className=
(" "+e.className.replace(/\s+$/,"").replace(/^\s+/,"")+" ").replace(" "+eachClass+" "," ").replace(/\s+$/,
"").replace(/^\s+/,"")}return this};
return this.removeClass(sClass)};
jindo.$Element.prototype.toggleClass=function(sClass,sClass2){if(this._element.classList)jindo.$Element.prototype.toggleClass=
function(sClass,sClass2){if(typeof sClass2=="undefined")this._element.classList.toggle(sClass);else if(this.hasClass(sClass)){this.removeClass(sClass);
this.addClass(sClass2)}else{this.addClass(sClass);this.removeClass(sClass2)}return this};
else jindo.$Element.prototype.toggleClass=function(sClass,sClass2){sClass2=sClass2||"";if(this.hasClass(sClass)){this.removeClass(sClass);
if(sClass2)this.addClass(sClass2)}else{this.addClass(sClass);if(sClass2)this.removeClass(sClass2)}return this};
return this.toggleClass(sClass,sClass2)};
jindo.$Element.prototype.text=function(sText){var ele=this._element;var tag=this.tag;var prop=typeof ele.innerText!=
"undefined"?"innerText":"textContent";if(tag=="textarea"||tag=="input")prop="value";var type=typeof sText;
if(type!="undefined"&&(type=="string"||type=="number"||type=="boolean")){sText+="";try{if(prop!="value")prop=
typeof ele.textContent!="undefined"?"textContent":"innerText";ele[prop]=sText}catch(e){return this.html(sText.replace(/&/g,
"\x26amp;").replace(/</g,"\x26lt;"))}return this}return ele[prop]};
jindo.$Element.prototype.html=function(sHTML){var isIe=IS_IE;var isFF=IS_FF;if(isIe)jindo.$Element.prototype.html=
function(sHTML){if(typeof sHTML!="undefined"&&arguments.length){sHTML+="";jindo.$$.release();var oEl=
this._element;while(oEl.firstChild)oEl.removeChild(oEl.firstChild);var sId="R"+(new Date).getTime()+parseInt(Math.random()*
1E5,10);var oDoc=oEl.ownerDocument||oEl.document||document;var oDummy;var sTag=oEl.tagName.toLowerCase();
switch(sTag){case "select":case "table":oDummy=oDoc.createElement("div");oDummy.innerHTML="\x3c"+sTag+
' class\x3d"'+sId+'"\x3e'+sHTML+"\x3c/"+sTag+"\x3e";break;case "tr":case "thead":case "tbody":case "colgroup":oDummy=
oDoc.createElement("div");oDummy.innerHTML="\x3ctable\x3e\x3c"+sTag+' class\x3d"'+sId+'"\x3e'+sHTML+"\x3c/"+
sTag+"\x3e\x3c/table\x3e";break;default:oEl.innerHTML=sHTML;break}if(oDummy){var oFound;for(oFound=oDummy.firstChild;oFound;oFound=
oFound.firstChild)if(oFound.className==sId)break;if(oFound){var notYetSelected=true;for(var oChild;oChild=
oEl.firstChild;)oChild.removeNode(true);for(var oChild=oFound.firstChild;oChild;oChild=oFound.firstChild)if(sTag==
"select"){var cloneNode=oChild.cloneNode(true);if(oChild.selected&&notYetSelected){notYetSelected=false;
cloneNode.selected=true}oEl.appendChild(cloneNode);oChild.removeNode(true)}else oEl.appendChild(oChild);
oDummy.removeNode&&oDummy.removeNode(true)}oDummy=null}return this}return this._element.innerHTML};
else if(isFF)jindo.$Element.prototype.html=function(sHTML){if(typeof sHTML!="undefined"&&arguments.length){sHTML+=
"";var oEl=this._element;if(!oEl.parentNode){var sId="R"+(new Date).getTime()+parseInt(Math.random()*
1E5,10);var oDoc=oEl.ownerDocument||oEl.document||document;var oDummy;var sTag=oEl.tagName.toLowerCase();
switch(sTag){case "select":case "table":oDummy=oDoc.createElement("div");oDummy.innerHTML="\x3c"+sTag+
' class\x3d"'+sId+'"\x3e'+sHTML+"\x3c/"+sTag+"\x3e";break;case "tr":case "thead":case "tbody":case "colgroup":oDummy=
oDoc.createElement("div");oDummy.innerHTML="\x3ctable\x3e\x3c"+sTag+' class\x3d"'+sId+'"\x3e'+sHTML+"\x3c/"+
sTag+"\x3e\x3c/table\x3e";break;default:oEl.innerHTML=sHTML;break}if(oDummy){var oFound;for(oFound=oDummy.firstChild;oFound;oFound=
oFound.firstChild)if(oFound.className==sId)break;if(oFound){for(var oChild;oChild=oEl.firstChild;)oChild.removeNode(true);
for(var oChild=oFound.firstChild;oChild;oChild=oFound.firstChild)oEl.appendChild(oChild);oDummy.removeNode&&
oDummy.removeNode(true)}oDummy=null}}else oEl.innerHTML=sHTML;return this}return this._element.innerHTML};
else jindo.$Element.prototype.html=function(sHTML){if(typeof sHTML!="undefined"&&arguments.length){sHTML+=
"";var oEl=this._element;oEl.innerHTML=sHTML;return this}return this._element.innerHTML};
return this.html(sHTML)};
jindo.$Element.prototype.outerHTML=function(){var e=this._element;if(typeof e.outerHTML!="undefined")return e.outerHTML;
var oDoc=e.ownerDocument||e.document||document;var div=oDoc.createElement("div");var par=e.parentNode;
if(!par)return e.innerHTML;par.insertBefore(div,e);div.style.display="none";div.appendChild(e);var s=
div.innerHTML;par.insertBefore(e,div);par.removeChild(div);return s};
jindo.$Element.prototype.toString=jindo.$Element.prototype.outerHTML;
jindo.$Element._getTransition=function(){var hasTransition=false,sTransitionName="";if(typeof document.body.style.trasition!=
"undefined"){hasTransition=true;sTransitionName="trasition"}else if(typeof document.body.style.webkitTransition!==
"undefined"){hasTransition=true;sTransitionName="webkitTransition"}else if(typeof document.body.style.OTransition!==
"undefined"){hasTransition=true;sTransitionName="OTransition"}return(jindo.$Element._getTransition=function(){return{"hasTransition":hasTransition,
"name":sTransitionName}})()};
jindo.$Element.prototype.appear=function(duration,callback){var oTransition=jindo.$Element._getTransition();
if(oTransition.hasTransition)jindo.$Element.prototype.appear=function(duration,callback){duration=duration||
.3;callback=callback||function(){};
var bindFunc=function(){callback();this.show();this.removeEventListener(oTransition.name+"End",arguments.callee,
false)};
var ele=this._element;var self=this;if(!this.visible()){ele.style.opacity=ele.style.opacity||0;self.show()}ele.addEventListener(oTransition.name+
"End",bindFunc,false);ele.style[oTransition.name+"Property"]="opacity";ele.style[oTransition.name+"Duration"]=
duration+"s";ele.style[oTransition.name+"TimingFunction"]="linear";setTimeout(function(){ele.style.opacity=
"1"},1);
return this};
else jindo.$Element.prototype.appear=function(duration,callback){var self=this;var op=this.opacity();
if(!this.visible())op=0;if(op==1)return this;try{clearTimeout(this._fade_timer)}catch(e){}callback=callback||
function(){};
var step=(1-op)/((duration||.3)*100);var func=function(){op+=step;self.opacity(op);if(op>=1)callback(self);
else self._fade_timer=setTimeout(func,10)};
this.show();func();return this};
return this.appear(duration,callback)};
jindo.$Element.prototype.disappear=function(duration,callback){var oTransition=jindo.$Element._getTransition();
if(oTransition.hasTransition)jindo.$Element.prototype.disappear=function(duration,callback){duration=
duration||.3;var self=this;callback=callback||function(){};
var bindFunc=function(){callback();this.removeEventListener(oTransition.name+"End",arguments.callee,false);
self.hide()};
var ele=this._element;ele.addEventListener(oTransition.name+"End",bindFunc,false);ele.style[oTransition.name+
"Property"]="opacity";ele.style[oTransition.name+"Duration"]=duration+"s";ele.style[oTransition.name+
"TimingFunction"]="linear";setTimeout(function(){ele.style.opacity="0"},1);
return this};
else jindo.$Element.prototype.disappear=function(duration,callback){var self=this;var op=this.opacity();
if(op==0)return this;try{clearTimeout(this._fade_timer)}catch(e){}callback=callback||function(){};
var step=op/((duration||.3)*100);var func=function(){op-=step;self.opacity(op);if(op<=0){self.hide();
self.opacity(1);callback(self)}else self._fade_timer=setTimeout(func,10)};
func();return this};
return this.disappear(duration,callback)};
jindo.$Element.prototype.offset=function(nTop,nLeft){var oEl=this._element;var oPhantom=null;if(typeof nTop==
"number"&&typeof nLeft=="number"){if(isNaN(parseInt(this.css("top"),10)))this.css("top",0);if(isNaN(parseInt(this.css("left"),
10)))this.css("left",0);var oPos=this.offset();var oGap={top:nTop-oPos.top,left:nLeft-oPos.left};oEl.style.top=
parseInt(this.css("top"),10)+oGap.top+"px";oEl.style.left=parseInt(this.css("left"),10)+oGap.left+"px";
return this}var bSafari=/Safari/.test(navigator.userAgent);var bIE=/MSIE/.test(navigator.userAgent);var nVer=
bIE?navigator.userAgent.match(/(?:MSIE) ([0-9.]+)/)[1]:0;var fpSafari=function(oEl){var oPos={left:0,
top:0};for(var oParent=oEl,oOffsetParent=oParent.offsetParent;oParent=oParent.parentNode;){if(oParent.offsetParent){oPos.left-=
oParent.scrollLeft;oPos.top-=oParent.scrollTop}if(oParent==oOffsetParent){oPos.left+=oEl.offsetLeft+oParent.clientLeft;
oPos.top+=oEl.offsetTop+oParent.clientTop;if(!oParent.offsetParent){oPos.left+=oParent.offsetLeft;oPos.top+=
oParent.offsetTop}oOffsetParent=oParent.offsetParent;oEl=oParent}}return oPos};
var fpOthers=function(oEl){var oPos={left:0,top:0};var oDoc=oEl.ownerDocument||oEl.document||document;
var oHtml=oDoc.documentElement;var oBody=oDoc.body;if(oEl.getBoundingClientRect){if(!oPhantom){var bHasFrameBorder=
window==top;if(!bHasFrameBorder)try{bHasFrameBorder=window.frameElement&&window.frameElement.frameBorder==
1}catch(e){}if(bIE&&nVer<8&&window.external&&bHasFrameBorder){oPhantom={left:2,top:2};oBase=null}else oPhantom=
{left:0,top:0}}var box=oEl.getBoundingClientRect();if(oEl!==oHtml&&oEl!==oBody){oPos.left=box.left-oPhantom.left;
oPos.top=box.top-oPhantom.top;oPos.left+=oHtml.scrollLeft||oBody.scrollLeft;oPos.top+=oHtml.scrollTop||
oBody.scrollTop}}else if(oDoc.getBoxObjectFor){var box=oDoc.getBoxObjectFor(oEl);var vpBox=oDoc.getBoxObjectFor(oHtml||
oBody);oPos.left=box.screenX-vpBox.screenX;oPos.top=box.screenY-vpBox.screenY}else{for(var o=oEl;o;o=
o.offsetParent){oPos.left+=o.offsetLeft;oPos.top+=o.offsetTop}for(var o=oEl.parentNode;o;o=o.parentNode){if(o.tagName==
"BODY")break;if(o.tagName=="TR")oPos.top+=2;oPos.left-=o.scrollLeft;oPos.top-=o.scrollTop}}return oPos};
return(bSafari?fpSafari:fpOthers)(oEl)};
jindo.$Element.prototype.evalScripts=function(sHTML){var aJS=[];sHTML=sHTML.replace(new RegExp("\x3cscript(\\s[^\x3e]+)*\x3e(.*?)\x3c/"+
"script\x3e","gi"),function(_1,_2,sPart){aJS.push(sPart);return""});
eval(aJS.join("\n"));return this};
jindo.$Element._append=function(oParent,oChild){if(typeof oChild=="string")oChild=jindo.$(oChild);else if(oChild instanceof
jindo.$Element)oChild=oChild.$value();oParent._element.appendChild(oChild);return oParent};
jindo.$Element._prepend=function(oParent,oChild){if(typeof oParent=="string")oParent=jindo.$(oParent);
else if(oParent instanceof jindo.$Element)oParent=oParent.$value();var nodes=oParent.childNodes;if(nodes.length>
0)oParent.insertBefore(oChild._element,nodes[0]);else oParent.appendChild(oChild._element);return oChild};
jindo.$Element.prototype.append=function(oElement){return jindo.$Element._append(this,oElement)};
jindo.$Element.prototype.prepend=function(oElement){return jindo.$Element._prepend(this._element,jindo.$Element(oElement))};
jindo.$Element.prototype.replace=function(oElement){jindo.$$.release();var e=this._element;var oParentNode=
e.parentNode;var o=jindo.$Element(oElement);if(oParentNode&&oParentNode.replaceChild){oParentNode.replaceChild(o.$value(),
e);return o}var o=o.$value();oParentNode.insertBefore(o,e);oParentNode.removeChild(e);return o};
jindo.$Element.prototype.appendTo=function(oElement){var ele=jindo.$Element(oElement);jindo.$Element._append(ele,
this._element);return ele};
jindo.$Element.prototype.prependTo=function(oElement){jindo.$Element._prepend(oElement,this);return jindo.$Element(oElement)};
jindo.$Element.prototype.before=function(oElement){var oRich=jindo.$Element(oElement);var o=oRich.$value();
this._element.parentNode.insertBefore(o,this._element);return oRich};
jindo.$Element.prototype.after=function(oElement){var o=this.before(oElement);o.before(this);return o};
jindo.$Element.prototype.parent=function(pFunc,limit){var e=this._element;var a=[],p=null;if(typeof pFunc==
"undefined")return jindo.$Element(e.parentNode);if(typeof limit=="undefined"||limit==0)limit=-1;while(e.parentNode&&
limit--!=0){p=jindo.$Element(e.parentNode);if(e.parentNode==document.documentElement)break;if(!pFunc||
pFunc&&pFunc(p))a[a.length]=p;e=e.parentNode}return a};
jindo.$Element.prototype.child=function(pFunc,limit){var e=this._element;var a=[],c=null,f=null;if(typeof pFunc==
"undefined")return jindo.$A(e.childNodes).filter(function(v){return v.nodeType==1}).map(function(v){return jindo.$Element(v)}).$value();
if(typeof limit=="undefined"||limit==0)limit=-1;(f=function(el,lim){var ch=null,o=null;for(var i=0;i<
el.childNodes.length;i++){ch=el.childNodes[i];if(ch.nodeType!=1)continue;o=jindo.$Element(el.childNodes[i]);
if(!pFunc||pFunc&&pFunc(o))a[a.length]=o;if(lim!=0)f(el.childNodes[i],lim-1)}})(e,limit-1);
return a};
jindo.$Element.prototype.prev=function(pFunc){var e=this._element;var a=[];var b=typeof pFunc=="undefined";
if(!e)return b?jindo.$Element(null):a;do{e=e.previousSibling;if(!e||e.nodeType!=1)continue;if(b)return jindo.$Element(e);
if(!pFunc||pFunc(e))a[a.length]=jindo.$Element(e)}while(e);return b?jindo.$Element(e):a};
jindo.$Element.prototype.next=function(pFunc){var e=this._element;var a=[];var b=typeof pFunc=="undefined";
if(!e)return b?jindo.$Element(null):a;do{e=e.nextSibling;if(!e||e.nodeType!=1)continue;if(b)return jindo.$Element(e);
if(!pFunc||pFunc(e))a[a.length]=jindo.$Element(e)}while(e);return b?jindo.$Element(e):a};
jindo.$Element.prototype.first=function(){var el=this._element.firstElementChild||this._element.firstChild;
if(!el)return null;while(el&&el.nodeType!=1)el=el.nextSibling;return el?jindo.$Element(el):null};
jindo.$Element.prototype.last=function(){var el=this._element.lastElementChild||this._element.lastChild;
if(!el)return null;while(el&&el.nodeType!=1)el=el.previousSibling;return el?jindo.$Element(el):null};
jindo.$Element.prototype.isChildOf=function(element){return jindo.$Element._contain(jindo.$Element(element).$value(),
this._element)};
jindo.$Element.prototype.isParentOf=function(element){return jindo.$Element._contain(this._element,jindo.$Element(element).$value())};
jindo.$Element._contain=function(eParent,eChild){if(document.compareDocumentPosition)jindo.$Element._contain=
function(eParent,eChild){return!!(eParent.compareDocumentPosition(eChild)&16)};
else if(document.body.contains)jindo.$Element._contain=function(eParent,eChild){return eParent!==eChild&&
(eParent.contains?eParent.contains(eChild):true)};
else jindo.$Element._contain=function(eParent,eChild){var e=eParent;var el=eChild;while(e&&e.parentNode){e=
e.parentNode;if(e==el)return true}return false};
return jindo.$Element._contain(eParent,eChild)};
jindo.$Element.prototype.isEqual=function(element){try{return this._element===jindo.$Element(element).$value()}catch(e){return false}};
jindo.$Element.prototype.fireEvent=function(sEvent,oProps){function IE(sEvent,oProps){sEvent=(sEvent+
"").toLowerCase();var oEvent=document.createEventObject();if(oProps){for(k in oProps)if(oProps.hasOwnProperty(k))oEvent[k]=
oProps[k];oEvent.button=(oProps.left?1:0)+(oProps.middle?4:0)+(oProps.right?2:0);oEvent.relatedTarget=
oProps.relatedElement||null}this._element.fireEvent("on"+sEvent,oEvent);return this}
function DOM2(sEvent,oProps){var sType="HTMLEvents";sEvent=(sEvent+"").toLowerCase();if(sEvent=="click"||
sEvent.indexOf("mouse")==0){sType="MouseEvent";if(sEvent=="mousewheel")sEvent="dommousescroll"}else if(sEvent.indexOf("key")==
0)sType="KeyboardEvent";var evt;if(oProps){oProps.button=0+(oProps.middle?1:0)+(oProps.right?2:0);oProps.ctrl=
oProps.ctrl||false;oProps.alt=oProps.alt||false;oProps.shift=oProps.shift||false;oProps.meta=oProps.meta||
false;switch(sType){case "MouseEvent":evt=document.createEvent(sType);evt.initMouseEvent(sEvent,true,
true,null,oProps.detail||0,oProps.screenX||0,oProps.screenY||0,oProps.clientX||0,oProps.clientY||0,oProps.ctrl,
oProps.alt,oProps.shift,oProps.meta,oProps.button,oProps.relatedElement||null);break;case "KeyboardEvent":if(window.KeyEvent){evt=
document.createEvent("KeyEvents");evt.initKeyEvent(sEvent,true,true,window,oProps.ctrl,oProps.alt,oProps.shift,
oProps.meta,oProps.keyCode,oProps.keyCode)}else try{evt=document.createEvent("Events")}catch(e){evt=document.createEvent("UIEvents")}finally{evt.initEvent(sEvent,
true,true);evt.ctrlKey=oProps.ctrl;evt.altKey=oProps.alt;evt.shiftKey=oProps.shift;evt.metaKey=oProps.meta;
evt.keyCode=oProps.keyCode;evt.which=oProps.keyCode}break;default:evt=document.createEvent(sType);evt.initEvent(sEvent,
true,true)}}else{evt=document.createEvent(sType);evt.initEvent(sEvent,true,true)}this._element.dispatchEvent(evt);
return this}
jindo.$Element.prototype.fireEvent=typeof this._element.dispatchEvent!="undefined"?DOM2:IE;return this.fireEvent(sEvent,
oProps)};
jindo.$Element.prototype.empty=function(){jindo.$$.release();this.html("");return this};
jindo.$Element.prototype.remove=function(oChild){jindo.$$.release();jindo.$Element(oChild).leave();return this};
jindo.$Element.prototype.leave=function(){var e=this._element;if(e.parentNode){jindo.$$.release();e.parentNode.removeChild(e)}jindo.$Fn.freeElement(this._element);
return this};
jindo.$Element.prototype.wrap=function(wrapper){var e=this._element;wrapper=jindo.$Element(wrapper).$value();
if(e.parentNode)e.parentNode.insertBefore(wrapper,e);wrapper.appendChild(e);return this};
jindo.$Element.prototype.ellipsis=function(stringTail){stringTail=stringTail||"...";var txt=this.text();
var len=txt.length;var padding=parseInt(this.css("paddingTop"),10)+parseInt(this.css("paddingBottom"),
10);var cur_h=this.height()-padding;var i=0;var h=this.text("A").height()-padding;if(cur_h<h*1.5)return this.text(txt);
cur_h=h;while(cur_h<h*1.5){i+=Math.max(Math.ceil((len-i)/2),1);cur_h=this.text(txt.substring(0,i)+stringTail).height()-
padding}while(cur_h>h*1.5){i--;cur_h=this.text(txt.substring(0,i)+stringTail).height()-padding}};
jindo.$Element.prototype.indexOf=function(element){try{var e=jindo.$Element(element).$value();var n=this._element.childNodes;
var c=0;var l=n.length;for(var i=0;i<l;i++){if(n[i].nodeType!=1)continue;if(n[i]===e)return c;c++}}catch(e){}return-1};
jindo.$Element.prototype.queryAll=function(sSelector){return jindo.$$(sSelector,this._element)};
jindo.$Element.prototype.query=function(sSelector){return jindo.$$.getSingle(sSelector,this._element)};
jindo.$Element.prototype.test=function(sSelector){return jindo.$$.test(this._element,sSelector)};
jindo.$Element.prototype.xpathAll=function(sXPath){return jindo.$$.xpath(sXPath,this._element)};
jindo.$Element.insertAdjacentHTML=function(ins,html,insertType,type,fn){var _ele=ins._element;if(_ele.insertAdjacentHTML&&
!/^<(option|tr|td|th|col)(?:.*?)>/.test(html.replace(/^(\s|\u3000)+|(\s|\u3000)+$/g,"").toLowerCase()))_ele.insertAdjacentHTML(insertType,
html);else{var oDoc=_ele.ownerDocument||_ele.document||document;var fragment=oDoc.createDocumentFragment();
var defaultElement;var sTag=html.replace(/^(\s|\u3000)+|(\s|\u3000)+$/g,"");var oParentTag={"option":"select",
"tr":"tbody","thead":"table","tbody":"table","col":"table","td":"tr","th":"tr","div":"div"};var aMatch=
/^\<(option|tr|thead|tbody|td|th|col)(?:.*?)\>/i.exec(sTag);var sChild=aMatch===null?"div":aMatch[1].toLowerCase();
var sParent=oParentTag[sChild];defaultElement=jindo._createEle(sParent,sTag,oDoc,true);var scripts=defaultElement.getElementsByTagName("script");
for(var i=0,l=scripts.length;i<l;i++)scripts[i].parentNode.removeChild(scripts[i]);while(defaultElement[type])fragment.appendChild(defaultElement[type]);
fn(fragment.cloneNode(true))}return ins};
jindo.$Element.prototype.appendHTML=function(sHTML){return jindo.$Element.insertAdjacentHTML(this,sHTML,
"beforeEnd","firstChild",jindo.$Fn(function(oEle){this.append(oEle)},this).bind())};
jindo.$Element.prototype.prependHTML=function(sHTML){return jindo.$Element.insertAdjacentHTML(this,sHTML,
"afterBegin","lastChild",jindo.$Fn(function(oEle){this.prepend(oEle)},this).bind())};
jindo.$Element.prototype.beforeHTML=function(sHTML){return jindo.$Element.insertAdjacentHTML(this,sHTML,
"beforeBegin","firstChild",jindo.$Fn(function(oEle){this.before(oEle)},this).bind())};
jindo.$Element.prototype.afterHTML=function(sHTML){return jindo.$Element.insertAdjacentHTML(this,sHTML,
"afterEnd","lastChild",jindo.$Fn(function(oEle){this._element.parentNode.insertBefore(oEle,this._element.nextSibling)},
this).bind())};
jindo.$Element.prototype.delegate=function(sEvent,vFilter,fpCallback){if(!this._element["_delegate_"+
sEvent]){this._element["_delegate_"+sEvent]={};var fAroundFunc=jindo.$Fn(function(sEvent,wEvent){wEvent=
wEvent||window.event;if(typeof wEvent.currentTarget=="undefined")wEvent.currentTarget=this._element;var oEle=
wEvent.target||wEvent.srcElement;var aData=this._element["_delegate_"+sEvent];var data,func,event,resultFilter;
for(var i in aData){data=aData[i];resultFilter=data.checker(oEle);if(resultFilter[0]){func=data.func;
event=jindo.$Event(wEvent);event.element=resultFilter[1];for(var j=0,l=func.length;j<l;j++)func[j](event)}}},
this).bind(sEvent);
jindo.$Element._eventBind(this._element,sEvent,fAroundFunc);var oEle=this._element;oEle["_delegate_"+
sEvent+"_func"]=fAroundFunc;if(this._element["_delegate_events"])this._element["_delegate_events"].push(sEvent);
else this._element["_delegate_events"]=[sEvent];oEle=null}this._bind(sEvent,vFilter,fpCallback);return this};
jindo.$Element._eventBind=function(oEle,sEvent,fAroundFunc){if(oEle.addEventListener)jindo.$Element._eventBind=
function(oEle,sEvent,fAroundFunc){oEle.addEventListener(sEvent,fAroundFunc,false)};
else jindo.$Element._eventBind=function(oEle,sEvent,fAroundFunc){oEle.attachEvent("on"+sEvent,fAroundFunc)};
jindo.$Element._eventBind(oEle,sEvent,fAroundFunc)};
jindo.$Element.prototype.undelegate=function(sEvent,vFilter,fpCallback){this._unbind(sEvent,vFilter,fpCallback);
return this};
jindo.$Element.prototype._bind=function(sEvent,vFilter,fpCallback){var _aDataOfEvent=this._element["_delegate_"+
sEvent];if(_aDataOfEvent){var fpCheck;if(typeof vFilter=="string")fpCheck=jindo.$Fn(function(sCssquery,
oEle){var eIncludeEle=oEle;var isIncludeEle=jindo.$$.test(oEle,sCssquery);if(!isIncludeEle){var aPropagationElements=
this._getParent(oEle);for(var i=0,leng=aPropagationElements.length;i<leng;i++){eIncludeEle=aPropagationElements[i];
if(jindo.$$.test(eIncludeEle,sCssquery)){isIncludeEle=true;break}}}return[isIncludeEle,eIncludeEle]},
this).bind(vFilter);
else if(typeof vFilter=="function")fpCheck=jindo.$Fn(function(fpFilter,oEle){var eIncludeEle=oEle;var isIncludeEle=
fpFilter(this._element,oEle);if(!isIncludeEle){var aPropagationElements=this._getParent(oEle);for(var i=
0,leng=aPropagationElements.length;i<leng;i++){eIncludeEle=aPropagationElements[i];if(fpFilter(this._element,
eIncludeEle)){isIncludeEle=true;break}}}return[isIncludeEle,eIncludeEle]},this).bind(vFilter);
this._element["_delegate_"+sEvent]=jindo.$Element._addBind(_aDataOfEvent,vFilter,fpCallback,fpCheck)}else alert("check your delegate event.")};
jindo.$Element.prototype._getParent=function(oEle){var e=this._element;var a=[],p=null;while(oEle.parentNode&&
p!=e){p=oEle.parentNode;if(p==document.documentElement)break;a[a.length]=p;oEle=p}return a};
jindo.$Element._addBind=function(aDataOfEvent,vFilter,fpCallback,fpCheck){var aEvent=aDataOfEvent[vFilter];
if(aEvent){var fpFuncs=aEvent.func;fpFuncs.push(fpCallback);aEvent.func=fpFuncs}else aEvent={checker:fpCheck,
func:[fpCallback]};aDataOfEvent[vFilter]=aEvent;return aDataOfEvent};
jindo.$Element.prototype._unbind=function(sEvent,vFilter,fpCallback){var oEle=this._element;if(sEvent&&
vFilter&&fpCallback){var oEventInfo=oEle["_delegate_"+sEvent];if(oEventInfo&&oEventInfo[vFilter]){var fpFuncs=
oEventInfo[vFilter].func;fpFuncs=oEventInfo[vFilter].func=jindo.$A(fpFuncs).refuse(fpCallback).$value();
if(!fpFuncs.length)jindo.$Element._deleteFilter(oEle,sEvent,vFilter)}}else if(sEvent&&vFilter)jindo.$Element._deleteFilter(oEle,
sEvent,vFilter);else if(sEvent)jindo.$Element._deleteEvent(oEle,sEvent,vFilter);else{var aEvents=oEle["_delegate_events"];
var sEachEvent;for(var i=0,l=aEvents.length;i<l;i++){sEachEvent=aEvents[i];jindo.$Element._unEventBind(oEle,
sEachEvent,oEle["_delegate_"+sEachEvent+"_func"]);jindo.$Element._delDelegateInfo(oEle,"_delegate_"+sEachEvent);
jindo.$Element._delDelegateInfo(oEle,"_delegate_"+sEachEvent+"_func")}jindo.$Element._delDelegateInfo(oEle,
"_delegate_events")}return this};
jindo.$Element._delDelegateInfo=function(oObj,sType){try{oObj[sType]=null;delete oObj[sType]}catch(e){}return oObj};
jindo.$Element._deleteFilter=function(oEle,sEvent,vFilter){var oEventInfo=oEle["_delegate_"+sEvent];if(oEventInfo&&
oEventInfo[vFilter])if(jindo.$H(oEventInfo).keys().length==1)jindo.$Element._deleteEvent(oEle,sEvent,
vFilter);else jindo.$Element._delDelegateInfo(oEventInfo,vFilter)};
jindo.$Element._deleteEvent=function(oEle,sEvent,vFilter){var aEvents=oEle["_delegate_events"];jindo.$Element._unEventBind(oEle,
sEvent,oEle["_delegate_"+sEvent+"_func"]);jindo.$Element._delDelegateInfo(oEle,"_delegate_"+sEvent);jindo.$Element._delDelegateInfo(oEle,
"_delegate_"+sEvent+"_func");aEvents=jindo.$A(aEvents).refuse(sEvent).$value();if(!aEvents.length)jindo.$Element._delDelegateInfo(oEle,
"_delegate_events");else oEle["_delegate_events"]=jindo.$A(aEvents).refuse(sEvent).$value()};
jindo.$Element._unEventBind=function(oEle,sType,fAroundFunc){if(oEle.removeEventListener)jindo.$Element._unEventBind=
function(oEle,sType,fAroundFunc){oEle.removeEventListener(sType,fAroundFunc,false)};
else jindo.$Element._unEventBind=function(oEle,sType,fAroundFunc){oEle.detachEvent("on"+sType,fAroundFunc)};
jindo.$Element._unEventBind(oEle,sType,fAroundFunc)};
jindo.$Fn=function(func,thisObject){var cl=arguments.callee;if(func instanceof cl)return func;if(!(this instanceof
cl))return new cl(func,thisObject);this._events=[];this._tmpElm=null;this._key=null;if(typeof func=="function"){this._func=
func;this._this=thisObject}else if(typeof func=="string"&&typeof thisObject=="string")this._func=eval("false||function("+
func+"){"+thisObject+"}")};
var _ua=navigator.userAgent;jindo.$Fn.prototype.$value=function(){return this._func};
jindo.$Fn.prototype.bind=function(){var a=jindo.$A(arguments).$value();var f=this._func;var t=this._this;
var b=function(){var args=jindo.$A(arguments).$value();if(a.length)args=a.concat(args);return f.apply(t,
args)};
return b};
jindo.$Fn.prototype.bindForEvent=function(){var a=arguments;var f=this._func;var t=this._this;var m=this._tmpElm||
null;var b=function(e){var args=Array.prototype.slice.apply(a);if(typeof e=="undefined")e=window.event;
if(typeof e.currentTarget=="undefined")e.currentTarget=m;var oEvent=jindo.$Event(e);args.unshift(oEvent);
var returnValue=f.apply(t,args);if(typeof returnValue!="undefined"&&oEvent.type=="beforeunload")e.returnValue=
returnValue;return returnValue};
return b};
jindo.$Fn.prototype.attach=function(oElement,sEvent,bUseCapture){var fn=null,l,ev=sEvent,el=oElement,
ua=_ua;if(typeof bUseCapture=="undefined")bUseCapture=false;this._bUseCapture=bUseCapture;if(el instanceof
Array||jindo.$A&&el instanceof jindo.$A&&(el=el.$value())){for(var i=0;i<el.length;i++)this.attach(el[i],
ev,bUseCapture);return this}if(!el||!ev)return this;if(typeof el.$value=="function")el=el.$value();el=
jindo.$(el);ev=ev.toLowerCase();this._tmpElm=el;fn=this.bindForEvent();this._tmpElm=null;var bIsIE=jindo.$Agent().navigator().ie;
if(typeof el.addEventListener!="undefined"){if(ev=="domready")ev="DOMContentLoaded";else if(ev=="mousewheel"&&
ua.indexOf("WebKit")<0&&!/Opera/.test(ua)&&!bIsIE)ev="DOMMouseScroll";else if(ev=="mouseenter"&&!bIsIE){ev=
"mouseover";fn=jindo.$Fn._fireWhenElementBoundary(el,fn)}else if(ev=="mouseleave"&&!bIsIE){ev="mouseout";
fn=jindo.$Fn._fireWhenElementBoundary(el,fn)}else if(ev=="transitionend"||ev=="transitionstart"){var sPrefix,
sPostfix=ev.replace("transition","");sPostfix=sPostfix.substr(0,1).toUpperCase()+sPostfix.substr(1);if(typeof document.body.style.WebkitTransition!==
"undefined")sPrefix="webkit";else if(typeof document.body.style.OTransition!=="undefined")sPrefix="o";
else if(typeof document.body.style.MsTransition!=="undefined")sPrefix="ms";ev=(sPrefix?sPrefix+"Transition":
"transition")+sPostfix;this._for_test_attach=ev;this._for_test_detach=""}else if(ev=="animationstart"||
ev=="animationend"||ev=="animationiteration"){var sPrefix,sPostfix=ev.replace("animation","");sPostfix=
sPostfix.substr(0,1).toUpperCase()+sPostfix.substr(1);if(typeof document.body.style.WebkitAnimationName!==
"undefined")sPrefix="webkit";else if(typeof document.body.style.OAnimationName!=="undefined")sPrefix=
"o";else if(typeof document.body.style.MsTransitionName!=="undefined")sPrefix="ms";ev=(sPrefix?sPrefix+
"Animation":"animation")+sPostfix;this._for_test_attach=ev;this._for_test_detach=""}el.addEventListener(ev,
fn,bUseCapture)}else if(typeof el.attachEvent!="undefined")if(ev=="domready"){jindo.$Fn._domready(el,
fn);return this}else el.attachEvent("on"+ev,fn);if(!this._key){this._key="$"+jindo.$Fn.gc.count++;jindo.$Fn.gc.pool[this._key]=
this}this._events[this._events.length]={element:el,event:sEvent.toLowerCase(),func:fn};return this};
jindo.$Fn.prototype.detach=function(oElement,sEvent){var fn=null,l,el=oElement,ev=sEvent,ua=_ua;if(el instanceof
Array||jindo.$A&&el instanceof jindo.$A&&(el=el.$value())){for(var i=0;i<el.length;i++)this.detach(el[i],
ev);return this}if(!el||!ev)return this;if(jindo.$Element&&el instanceof jindo.$Element)el=el.$value();
el=jindo.$(el);ev=ev.toLowerCase();var e=this._events;for(var i=0;i<e.length;i++){if(e[i].element!==el||
e[i].event!==ev)continue;fn=e[i].func;this._events=jindo.$A(this._events).refuse(e[i]).$value();break}if(typeof el.removeEventListener!=
"undefined"){if(ev=="domready")ev="DOMContentLoaded";else if(ev=="mousewheel"&&ua.indexOf("WebKit")<0)ev=
"DOMMouseScroll";else if(ev=="mouseenter")ev="mouseover";else if(ev=="mouseleave")ev="mouseout";else if(ev==
"transitionend"||ev=="transitionstart"){var sPrefix,sPostfix=ev.replace("transition","");sPostfix=sPostfix.substr(0,
1).toUpperCase()+sPostfix.substr(1);if(typeof document.body.style.WebkitTransition!=="undefined")sPrefix=
"webkit";else if(typeof document.body.style.OTransition!=="undefined")sPrefix="o";else if(typeof document.body.style.MsTransition!==
"undefined")sPrefix="ms";ev=(sPrefix?sPrefix+"Transition":"transition")+sPostfix;this._for_test_detach=
ev;this._for_test_attach=""}else if(ev=="animationstart"||ev=="animationend"||ev=="animationiteration"){var sPrefix,
sPostfix=ev.replace("animation","");sPostfix=sPostfix.substr(0,1).toUpperCase()+sPostfix.substr(1);if(typeof document.body.style.WebkitAnimationName!==
"undefined")sPrefix="webkit";else if(typeof document.body.style.OAnimationName!=="undefined")sPrefix=
"o";else if(typeof document.body.style.MsTransitionName!=="undefined")sPrefix="ms";ev=(sPrefix?sPrefix+
"Animation":"animation")+sPostfix;this._for_test_detach=ev;this._for_test_attach=""}if(fn)el.removeEventListener(ev,
fn,false)}else if(typeof el.detachEvent!="undefined")if(ev=="domready"){jindo.$Fn._domready.list=jindo.$Fn._domready.list.refuse(fn);
return this}else el.detachEvent("on"+ev,fn);return this};
jindo.$Fn.prototype.delay=function(nSec,args){if(typeof args=="undefined")args=[];this._delayKey=setTimeout(this.bind.apply(this,
args),nSec*1E3);return this};
jindo.$Fn.prototype.setInterval=function(nSec,args){if(typeof args=="undefined")args=[];this._repeatKey=
setInterval(this.bind.apply(this,args),nSec*1E3);return this._repeatKey};
jindo.$Fn.prototype.repeat=jindo.$Fn.prototype.setInterval;
jindo.$Fn.prototype.stopDelay=function(){if(typeof this._delayKey!="undefined"){window.clearTimeout(this._delayKey);
delete this._delayKey}return this};
jindo.$Fn.prototype.stopRepeat=function(){if(typeof this._repeatKey!="undefined"){window.clearInterval(this._repeatKey);
delete this._repeatKey}return this};
jindo.$Fn.prototype.free=function(oElement){var len=this._events.length;while(len>0){var el=this._events[--len].element;
var sEvent=this._events[len].event;var fn=this._events[len].func;if(oElement&&el!==oElement)continue;
this.detach(el,sEvent);var isGCCall=!oElement;if(isGCCall&&window===el&&sEvent=="unload"&&!jindo.$Agent().navigator().ie)this._func.call(this._this);
delete this._events[len]}if(this._events.length==0)try{delete jindo.$Fn.gc.pool[this._key]}catch(e){}};
jindo.$Fn._domready=function(doc,func){if(typeof jindo.$Fn._domready.list=="undefined"){var f=null,l=
jindo.$Fn._domready.list=jindo.$A([func]);var done=false,execFuncs=function(){if(!done){done=true;var evt=
{type:"domready",target:doc,currentTarget:doc};while(f=l.shift())f(evt)}};
(function(){try{doc.documentElement.doScroll("left")}catch(e){setTimeout(arguments.callee,50);return}})();
doc.onreadystatechange=function(){if(doc.readyState=="complete"){doc.onreadystatechange=null;execFuncs()}}}else jindo.$Fn._domready.list.push(func)};
jindo.$Fn._fireWhenElementBoundary=function(doc,func){return function(evt){var oEvent=jindo.$Event(evt);
var relatedElement=jindo.$Element(oEvent.relatedElement);if(relatedElement&&(relatedElement.isEqual(this)||
relatedElement.isChildOf(this)))return;func.call(this,evt)}};
jindo.$Fn.gc=function(){var p=jindo.$Fn.gc.pool;for(var key in p)if(p.hasOwnProperty(key))try{p[key].free()}catch(e){}jindo.$Fn.gc.pool=
p={}};
jindo.$Fn.freeElement=function(oElement){var p=jindo.$Fn.gc.pool;for(var key in p)if(p.hasOwnProperty(key))try{p[key].free(oElement)}catch(e){}};
jindo.$Fn.gc.count=0;jindo.$Fn.gc.pool={};var _ua=navigator.userAgent;
if(typeof window!="undefined"&&!(_ua.indexOf("IEMobile")==-1&&_ua.indexOf("Mobile")>-1&&_ua.indexOf("Safari")>
-1))jindo.$Fn(jindo.$Fn.gc).attach(window,"unload");
jindo.$Event=function(e){var cl=arguments.callee;if(e instanceof cl)return e;if(!(this instanceof cl))return new cl(e);
if(typeof e=="undefined")e=window.event;if(e===window.event&&document.createEventObject)e=document.createEventObject(e);
this._event=e;this._globalEvent=window.event;this.type=e.type.toLowerCase();if(this.type=="dommousescroll")this.type=
"mousewheel";else if(this.type=="domcontentloaded")this.type="domready";this.canceled=false;this.element=
e.target||e.srcElement;this.currentElement=e.currentTarget;this.relatedElement=null;if(typeof e.relatedTarget!=
"undefined")this.relatedElement=e.relatedTarget;else if(e.fromElement&&e.toElement)this.relatedElement=
e[this.type=="mouseout"?"toElement":"fromElement"]};
jindo.$Event.prototype.mouse=function(){var e=this._event;var delta=0;var left=false,mid=false,right=
false;var left=e.which?e.button==0:!!(e.button&1);var mid=e.which?e.button==1:!!(e.button&4);var right=
e.which?e.button==2:!!(e.button&2);var ret={};if(e.wheelDelta)delta=e.wheelDelta/120;else if(e.detail)delta=
-e.detail/3;ret={delta:delta,left:left,middle:mid,right:right};this.mouse=function(){return ret};
return ret};
jindo.$Event.prototype.key=function(){var e=this._event;var k=e.keyCode||e.charCode;var ret={keyCode:k,
alt:e.altKey,ctrl:e.ctrlKey,meta:e.metaKey,shift:e.shiftKey,up:k==38,down:k==40,left:k==37,right:k==39,
enter:k==13,esc:k==27};this.key=function(){return ret};
return ret};
jindo.$Event.prototype.pos=function(bGetOffset){var e=this._event;var b=(this.element.ownerDocument||
document).body;var de=(this.element.ownerDocument||document).documentElement;var pos=[b.scrollLeft||de.scrollLeft,
b.scrollTop||de.scrollTop];var ret={clientX:e.clientX,clientY:e.clientY,pageX:"pageX"in e?e.pageX:e.clientX+
pos[0]-b.clientLeft,pageY:"pageY"in e?e.pageY:e.clientY+pos[1]-b.clientTop,layerX:"offsetX"in e?e.offsetX:
e.layerX-1,layerY:"offsetY"in e?e.offsetY:e.layerY-1};if(bGetOffset&&jindo.$Element){var offset=jindo.$Element(this.element).offset();
ret.offsetX=ret.pageX-offset.left;ret.offsetY=ret.pageY-offset.top}return ret};
jindo.$Event.prototype.stop=function(nCancel){nCancel=nCancel||jindo.$Event.CANCEL_ALL;var e=window.event&&
window.event==this._globalEvent?this._globalEvent:this._event;var b=!!(nCancel&jindo.$Event.CANCEL_BUBBLE);
var d=!!(nCancel&jindo.$Event.CANCEL_DEFAULT);this.canceled=true;if(typeof e.preventDefault!="undefined"&&
d)e.preventDefault();if(typeof e.stopPropagation!="undefined"&&b)e.stopPropagation();if(d)e.returnValue=
false;if(b)e.cancelBubble=true;return this};
jindo.$Event.prototype.stopDefault=function(){return this.stop(jindo.$Event.CANCEL_DEFAULT)};
jindo.$Event.prototype.stopBubble=function(){return this.stop(jindo.$Event.CANCEL_BUBBLE)};
jindo.$Event.prototype.$value=function(){return this._event};
jindo.$Event.CANCEL_BUBBLE=1;jindo.$Event.CANCEL_DEFAULT=2;jindo.$Event.CANCEL_ALL=3;
jindo.$ElementList=function(els){var cl=arguments.callee;if(els instanceof cl)return els;if(!(this instanceof
cl))return new cl(els);if(els instanceof Array)els=jindo.$A(els);else if(jindo.$A&&els instanceof jindo.$A)els=
jindo.$A(els.$value());else if(typeof els=="string"&&jindo.cssquery)els=jindo.$A(jindo.cssquery(els));
else els=jindo.$A();this._elements=els.map(function(v,i,a){return jindo.$Element(v)})};
jindo.$ElementList.prototype.get=function(idx){return this._elements.$value()[idx]};
jindo.$ElementList.prototype.getFirst=function(){return this.get(0)};
jindo.$ElementList.prototype.length=function(nLen,oValue){return this._elements.length(nLen,oValue)};
jindo.$ElementList.prototype.getLast=function(){return this.get(Math.max(this._elements.length()-1,0))};
jindo.$ElementList.prototype.$value=function(){return this._elements.$value()};
(function(proto){var setters=["show","hide","toggle","addClass","removeClass","toggleClass","fireEvent",
"leave","empty","appear","disappear","className","width","height","text","html","css","attr"];jindo.$A(setters).forEach(function(name){proto[name]=
function(){var args=jindo.$A(arguments).$value();this._elements.forEach(function(el){el[name].apply(el,
args)});
return this}});
jindo.$A(["appear","disappear"]).forEach(function(name){proto[name]=function(duration,callback){var len=
this._elements.length;var self=this;this._elements.forEach(function(el,idx){if(idx==len-1)el[name](duration,
function(){callback(self)});
else el[name](duration)});
return this}})})(jindo.$ElementList.prototype);
jindo.$S=function(str){var cl=arguments.callee;if(typeof str=="undefined")str="";if(str instanceof cl)return str;
if(!(this instanceof cl))return new cl(str);this._str=str+""};
jindo.$S.prototype.$value=function(){return this._str};
jindo.$S.prototype.toString=jindo.$S.prototype.$value;
jindo.$S.prototype.trim=function(){if("".trim)jindo.$S.prototype.trim=function(){return jindo.$S(this._str.trim())};
else jindo.$S.prototype.trim=function(){return jindo.$S(this._str.replace(/^(\s|\u3000)+/g,"").replace(/(\s|\u3000)+$/g,
""))};
return jindo.$S(this.trim())};
jindo.$S.prototype.escapeHTML=function(){var entities={'"':"quot","\x26":"amp","\x3c":"lt","\x3e":"gt",
"'":"#39"};var s=this._str.replace(/[<>&"']/g,function(m0){return entities[m0]?"\x26"+entities[m0]+";":
m0});
return jindo.$S(s)};
jindo.$S.prototype.stripTags=function(){return jindo.$S(this._str.replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/ig,
""))};
jindo.$S.prototype.times=function(nTimes){var buf=[];for(var i=0;i<nTimes;i++)buf[buf.length]=this._str;
return jindo.$S(buf.join(""))};
jindo.$S.prototype.unescapeHTML=function(){var entities={"quot":'"',"amp":"\x26","lt":"\x3c","gt":"\x3e",
"#39":"'"};var s=this._str.replace(/&([a-z]+|#[0-9]+);/g,function(m0,m1){return entities[m1]?entities[m1]:
m0});
return jindo.$S(s)};
jindo.$S.prototype.escape=function(){var s=this._str.replace(/([\u0080-\uFFFF]+)|[\n\r\t"'\\]/g,function(m0,
m1,_){if(m1)return escape(m1).replace(/%/g,"\\");return(_={"\n":"\\n","\r":"\\r","\t":"\\t"})[m0]?_[m0]:
"\\"+m0});
return jindo.$S(s)};
jindo.$S.prototype.bytes=function(vConfig){var code=0,bytes=0,i=0,len=this._str.length;var charset=(document.charset||
document.characterSet||document.defaultCharset)+"";var cut,nBytes;if(typeof vConfig=="undefined")cut=
false;else if(vConfig.constructor==Number){cut=true;nBytes=vConfig}else if(vConfig.constructor==Object){charset=
vConfig.charset||charset;nBytes=vConfig.size||false;cut=!!nBytes}else cut=false;if(charset.toLowerCase()==
"utf-8")for(i=0;i<len;i++){code=this._str.charCodeAt(i);if(code<128)bytes+=1;else if(code<2048)bytes+=
2;else if(code<65536)bytes+=3;else bytes+=4;if(cut&&bytes>nBytes){this._str=this._str.substr(0,i);break}}else for(i=
0;i<len;i++){bytes+=this._str.charCodeAt(i)>128?2:1;if(cut&&bytes>nBytes){this._str=this._str.substr(0,
i);break}}return cut?this:bytes};
jindo.$S.prototype.parseString=function(){if(this._str=="")return{};var str=this._str.split(/&/g),pos,
key,val,buf={},isescape=false;for(var i=0;i<str.length;i++){key=str[i].substring(0,pos=str[i].indexOf("\x3d")),
isescape=false;try{val=decodeURIComponent(str[i].substring(pos+1))}catch(e){isescape=true;val=decodeURIComponent(unescape(str[i].substring(pos+
1)))}if(key.substr(key.length-2,2)=="[]"){key=key.substring(0,key.length-2);if(typeof buf[key]=="undefined")buf[key]=
[];buf[key][buf[key].length]=isescape?escape(val):val}else buf[key]=isescape?escape(val):val}return buf};
jindo.$S.prototype.escapeRegex=function(){var s=this._str;var r=/([\?\.\*\+\-\/\(\)\{\}\[\]\:\!\^\$\\\|])/g;
return jindo.$S(s.replace(r,"\\$1"))};
jindo.$S.prototype.format=function(){var args=arguments;var idx=0;var s=this._str.replace(/%([ 0])?(-)?([1-9][0-9]*)?([bcdsoxX])/g,
function(m0,m1,m2,m3,m4){var a=args[idx++];var ret="",pad="";m3=m3?+m3:0;if(m4=="s")ret=a+"";else if(" bcdoxX".indexOf(m4)>
0){if(typeof a!="number")return"";ret=m4=="c"?String.fromCharCode(a):a.toString({b:2,d:10,o:8,x:16,X:16}[m4]);
if(" X".indexOf(m4)>0)ret=ret.toUpperCase()}if(ret.length<m3)pad=jindo.$S(m1||" ").times(m3-ret.length).toString();
m2=="-"?ret+=pad:ret=pad+ret;return ret});
return jindo.$S(s)};
jindo.$Document=function(el){var cl=arguments.callee;if(el instanceof cl)return el;if(!(this instanceof
cl))return new cl(el);this._doc=el||document;this._docKey=this.renderingMode()=="Standards"?"documentElement":
"body"};
jindo.$Document.prototype.$value=function(){return this._doc};
jindo.$Document.prototype.scrollSize=function(){var isWebkit=navigator.userAgent.indexOf("WebKit")>-1;
var oDoc=this._doc[isWebkit?"body":this._docKey];return{width:Math.max(oDoc.scrollWidth,oDoc.clientWidth),
height:Math.max(oDoc.scrollHeight,oDoc.clientHeight)}};
jindo.$Document.prototype.scrollPosition=function(){var isWebkit=navigator.userAgent.indexOf("WebKit")>
-1;var oDoc=this._doc[isWebkit?"body":this._docKey];return{left:oDoc.scrollLeft||window.pageXOffset||
window.scrollX||0,top:oDoc.scrollTop||window.pageYOffset||window.scrollY||0}};
jindo.$Document.prototype.clientSize=function(){var agent=navigator.userAgent;var oDoc=this._doc[this._docKey];
var isSafari=agent.indexOf("WebKit")>-1&&agent.indexOf("Chrome")==-1;return isSafari?{width:window.innerWidth,
height:window.innerHeight}:{width:oDoc.clientWidth,height:oDoc.clientHeight}};
jindo.$Document.prototype.renderingMode=function(){var agent=navigator.userAgent;var isIe=typeof window.opera==
"undefined"&&jindo.$Agent().navigator().ie;var isSafari=agent.indexOf("WebKit")>-1&&agent.indexOf("Chrome")<
0&&navigator.vendor.indexOf("Apple")>-1;var sRet;if("compatMode"in this._doc)sRet=this._doc.compatMode==
"CSS1Compat"?"Standards":isIe?"Quirks":"Almost";else sRet=isSafari?"Standards":"Quirks";return sRet};
jindo.$Document.prototype.queryAll=function(sSelector){return jindo.$$(sSelector,this._doc)};
jindo.$Document.prototype.query=function(sSelector){return jindo.$$.getSingle(sSelector,this._doc)};
jindo.$Document.prototype.xpathAll=function(sXPath){return jindo.$$.xpath(sXPath,this._doc)};
jindo.$Form=function(el){var cl=arguments.callee;if(el instanceof cl)return el;if(!(this instanceof cl))return new cl(el);
el=jindo.$(el);if(!el.tagName||el.tagName.toUpperCase()!="FORM")throw new Error("The element should be a FORM element");
this._form=el};
jindo.$Form.prototype.$value=function(){return this._form};
jindo.$Form.prototype.serialize=function(){var self=this;var oRet={};var nLen=arguments.length;var fpInsert=
function(sKey){var sVal=self.value(sKey);if(typeof sVal!="undefined")oRet[sKey]=sVal};
if(nLen==0)jindo.$A(this.element()).forEach(function(o){if(o.name)fpInsert(o.name)});
else for(var i=0;i<nLen;i++)fpInsert(arguments[i]);return jindo.$H(oRet).toQueryString()};
jindo.$Form.prototype.element=function(sKey){if(arguments.length>0)return this._form[sKey];return this._form.elements};
jindo.$Form.prototype.enable=function(){var sKey=arguments[0];if(typeof sKey=="object"){var self=this;
jindo.$H(sKey).forEach(function(bFlag,sKey){self.enable(sKey,bFlag)});
return this}var aEls=this.element(sKey);if(!aEls)return this;aEls=aEls.nodeType==1?[aEls]:aEls;if(arguments.length<
2){var bEnabled=true;jindo.$A(aEls).forEach(function(o){if(o.disabled){bEnabled=false;jindo.$A.Break()}});
return bEnabled}else{var sFlag=arguments[1];jindo.$A(aEls).forEach(function(o){o.disabled=!sFlag});
return this}};
jindo.$Form.prototype.value=function(sKey){if(typeof sKey=="object"){var self=this;jindo.$H(sKey).forEach(function(bFlag,
sKey){self.value(sKey,bFlag)});
return this}var aEls=this.element(sKey);if(!aEls)throw new Error("\uc5d8\ub9ac\uba3c\ud2b8\ub294 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");
aEls=aEls.nodeType==1?[aEls]:aEls;if(arguments.length>1){var sVal=arguments[1];jindo.$A(aEls).forEach(function(o){switch(o.type){case "radio":o.checked=
o.value==sVal;break;case "checkbox":if(sVal.constructor==Array)o.checked=jindo.$A(sVal).has(o.value);
else o.checked=o.value==sVal;break;case "select-one":var nIndex=-1;for(var i=0,len=o.options.length;i<
len;i++)if(o.options[i].value==sVal)nIndex=i;o.selectedIndex=nIndex;break;case "select-multiple":var nIndex=
-1;if(sVal.constructor==Array){var waVal=jindo.$A(sVal);for(var i=0,len=o.options.length;i<len;i++)o.options[i].selected=
waVal.has(o.options[i].value)}else{for(var i=0,len=o.options.length;i<len;i++)if(o.options[i].value==
sVal)nIndex=i;o.selectedIndex=nIndex}break;default:o.value=sVal;break}});
return this}var aRet=[];jindo.$A(aEls).forEach(function(o){switch(o.type){case "radio":case "checkbox":if(o.checked)aRet.push(o.value);
break;case "select-one":if(o.selectedIndex!=-1)aRet.push(o.options[o.selectedIndex].value);break;case "select-multiple":if(o.selectedIndex!=
-1)for(var i=0,len=o.options.length;i<len;i++)if(o.options[i].selected)aRet.push(o.options[i].value);
break;default:aRet.push(o.value);break}});
return aRet.length>1?aRet:aRet[0]};
jindo.$Form.prototype.submit=function(sTargetName,fValidation){var sOrgTarget=null;if(typeof sTargetName==
"string"){sOrgTarget=this._form.target;this._form.target=sTargetName}if(typeof sTargetName=="function")fValidation=
sTargetName;if(typeof fValidation!="undefined")if(!fValidation(this._form))return this;this._form.submit();
if(sOrgTarget!==null)this._form.target=sOrgTarget;return this};
jindo.$Form.prototype.reset=function(fValidation){if(typeof fValidation!="undefined")if(!fValidation(this._form))return this;
this._form.reset();return this};
jindo.$Template=function(str){var obj=null,tag="";var cl=arguments.callee;if(str instanceof cl)return str;
if(!(this instanceof cl))return new cl(str);if(typeof str=="undefined")str="";else if((obj=document.getElementById(str)||
str)&&obj.tagName&&(tag=obj.tagName.toUpperCase())&&(tag=="TEXTAREA"||tag=="SCRIPT"&&obj.getAttribute("type")==
"text/template"))str=(obj.value||obj.innerHTML).replace(/^\s+|\s+$/g,"");this._str=str+""};
jindo.$Template.splitter=/(?!\\)[\{\}]/g;jindo.$Template.pattern=/^(?:if (.+)|elseif (.+)|for (?:(.+)\:)?(.+) in (.+)|(else)|\/(if|for)|=(.+)|js (.+)|set (.+))$/;
jindo.$Template.prototype.process=function(data){var key="\u0001";var leftBrace="\u0002";var rightBrace=
"\u0003";var tpl=(" "+this._str+" ").replace(/\\{/g,leftBrace).replace(/\\}/g,rightBrace).replace(/(?!\\)\}\{/g,
"}"+key+"{").split(jindo.$Template.splitter),i=tpl.length;var map={'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r",
"\t":"\\t","\f":"\\f"};var reg=[/(["'](?:(?:\\.)+|[^\\["']+)*["']|[a-zA-Z_][\w\.]*)/g,/[\n\r\t\f"\\]/g,
/^\s+/,/\s+$/,/#/g];var cb=[function(m){return m.substring(0,1)=='"'||m.substring(0,1)=="'"||m=="null"?
m:"d."+m},
function(m){return map[m]||m},
"",""];var stm=[];var lev=0;tpl[0]=tpl[0].substr(1);tpl[i-1]=tpl[i-1].substr(0,tpl[i-1].length-1);if(i<
2)return tpl[0];tpl=jindo.$A(tpl).reverse().$value();var delete_info;while(i--)if(i%2)tpl[i]=tpl[i].replace(jindo.$Template.pattern,
function(){var m=arguments;if(m[10])return m[10].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g,
function(){var mm=arguments;var str="d."+mm[1]+"\x3d";if(mm[2])str+="d."+mm[2];else str+=mm[3].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,
function(m){return m.substring(0,1)=="\x3d"?"d."+m.replace("\x3d",""):m});
return str})+";";
if(m[9])return"s[i++]\x3d"+m[9].replace(/(=(?:[a-zA-Z_][\w\.]*)+)/g,function(m){return m.substring(0,
1)=="\x3d"?"d."+m.replace("\x3d",""):m})+";";
if(m[8])return"s[i++]\x3d d."+m[8]+";";if(m[1])return"if("+m[1].replace(reg[0],cb[0]).replace(/d\.(typeof) /,
"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){";if(m[2])return"}else if("+m[2].replace(reg[0],cb[0]).replace(/d\.(typeof) /,
"$1 ").replace(/ d\.(instanceof) d\./," $1 ")+"){";if(m[5]){delete_info=m[4];var _aStr=[];_aStr.push("var t#\x3dd."+
m[5]+"||{},p#\x3disArray(t#),i#\x3d0;");_aStr.push("for(var x# in t#){");_aStr.push("if(!t#.hasOwnProperty(x#)){continue;}");
_aStr.push("\tif( (p# \x26\x26 isNaN(i#\x3dparseInt(x#,10))) || (!p# \x26\x26 !t#.propertyIsEnumerable(x#)) ) continue;");
_aStr.push("\td."+m[4]+"\x3dt#[x#];");_aStr.push(m[3]?"d."+m[3]+"\x3dp#?i#:x#;":"");return _aStr.join("").replace(reg[4],
lev++)}if(m[6])return"}else{";if(m[7])if(m[7]=="for")return"delete d."+delete_info+"; };";else return"};";
return m[0]});
else if(tpl[i]==key)tpl[i]="";else if(tpl[i])tpl[i]='s[i++]\x3d"'+tpl[i].replace(reg[1],cb[1])+'";';tpl=
jindo.$A(tpl).reverse().$value().join("").replace(new RegExp(leftBrace,"g"),"{").replace(new RegExp(rightBrace,
"g"),"}");var _aStr=[];_aStr.push("var s\x3d[],i\x3d0;");_aStr.push('function isArray(o){ return Object.prototype.toString.call(o) \x3d\x3d "[object Array]" };');
_aStr.push(tpl);_aStr.push('return s.join("");');tpl=eval("false||function(d){"+_aStr.join("")+"}");tpl=
tpl(data);return tpl};
jindo.$Date=function(src){var a=arguments,t="";var cl=arguments.callee;if(src&&src instanceof cl)return src;
if(!(this instanceof cl))return new cl(a[0],a[1],a[2],a[3],a[4],a[5],a[6]);if((t=typeof src)=="string")if(/(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d)))/.test(src))try{this._date=
new Date(src);if(!this._date.toISOString)this._date=jindo.$Date.makeISO(src);else if(this._date.toISOString()==
"Invalid Date")this._date=jindo.$Date.makeISO(src)}catch(e){this._date=jindo.$Date.makeISO(src)}else this._date=
cl.parse(src);else if(t=="number")if(typeof a[1]=="undefined")this._date=new Date(src);else{for(var i=
0;i<7;i++)if(typeof a[i]!="number")a[i]=1;this._date=new Date(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}else if(t==
"object"&&src.constructor==Date){(this._date=new Date).setTime(src.getTime());this._date.setMilliseconds(src.getMilliseconds())}else this._date=
new Date;this._names={};for(var i in jindo.$Date.names)if(jindo.$Date.names.hasOwnProperty(i))this._names[i]=
jindo.$Date.names[i]};
jindo.$Date.makeISO=function(src){var match=src.match(/(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d)(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|(?:([-+])(\d\d)(?::?(\d\d))?)?)?)?)?)?/);
var hour=parseInt(match[4]||0,10);var min=parseInt(match[5]||0,10);if(match[8]=="Z")hour+=jindo.$Date.utc;
else if(match[9]=="+"||match[9]=="-"){hour+=jindo.$Date.utc-parseInt(match[9]+match[10],10);min+=parseInt(match[9]+
match[11],10)}return new Date(match[1]||0,parseInt(match[2]||0,10)-1,match[3]||0,hour,min,match[6]||0,
match[7]||0)};
jindo.$Date.names={month:["January","Febrary","March","April","May","June","July","August","September",
"October","Novermber","December"],s_month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct",
"Nov","Dec"],day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s_day:["Sun",
"Mon","Tue","Wed","Thu","Fri","Sat"],ampm:["AM","PM"]};jindo.$Date.utc=9;jindo.$Date.now=function(){return Date.now()};
jindo.$Date.prototype.name=function(oNames){if(arguments.length)for(var i in oNames){if(oNames.hasOwnProperty(i))this._names[i]=
oNames[i]}else return this._names};
jindo.$Date.parse=function(strDate){return new Date(Date.parse(strDate))};
jindo.$Date.prototype.$value=function(){return this._date};
jindo.$Date.prototype.format=function(strFormat){var o={};var d=this._date;var name=this.name();var self=
this;return(strFormat||"").replace(/[a-z]/ig,function callback(m){if(typeof o[m]!="undefined")return o[m];
switch(m){case "d":case "j":o.j=d.getDate();o.d=(o.j>9?"":"0")+o.j;return o[m];case "l":case "D":case "w":case "N":o.w=
d.getDay();o.N=o.w?o.w:7;o.D=name.s_day[o.w];o.l=name.day[o.w];return o[m];case "S":return!!(o.S=["st",
"nd","rd"][d.getDate()])?o.S:o.S="th";case "z":o.z=Math.floor((d.getTime()-(new Date(d.getFullYear(),
0,1)).getTime())/(3600*24*1E3));return o.z;case "m":case "n":o.n=d.getMonth()+1;o.m=(o.n>9?"":"0")+o.n;
return o[m];case "L":o.L=self.isLeapYear();return o.L;case "o":case "Y":case "y":o.o=o.Y=d.getFullYear();
o.y=(o.o+"").substr(2);return o[m];case "a":case "A":case "g":case "G":case "h":case "H":o.G=d.getHours();
o.g=(o.g=o.G%12)?o.g:12;o.A=o.G<12?name.ampm[0]:name.ampm[1];o.a=o.A.toLowerCase();o.H=(o.G>9?"":"0")+
o.G;o.h=(o.g>9?"":"0")+o.g;return o[m];case "i":o.i=((o.i=d.getMinutes())>9?"":"0")+o.i;return o.i;case "s":o.s=
((o.s=d.getSeconds())>9?"":"0")+o.s;return o.s;case "u":o.u=d.getMilliseconds();return o.u;case "U":o.U=
self.time();return o.U;default:return m}})};
jindo.$Date.prototype.time=function(nTime){if(typeof nTime=="number"){this._date.setTime(nTime);return this}return this._date.getTime()};
jindo.$Date.prototype.year=function(nYear){if(typeof nYear=="number"){this._date.setFullYear(nYear);return this}return this._date.getFullYear()};
jindo.$Date.prototype.month=function(nMon){if(typeof nMon=="number"){this._date.setMonth(nMon);return this}return this._date.getMonth()};
jindo.$Date.prototype.date=function(nDate){if(typeof nDate=="number"){this._date.setDate(nDate);return this}return this._date.getDate()};
jindo.$Date.prototype.day=function(){return this._date.getDay()};
jindo.$Date.prototype.hours=function(nHour){if(typeof nHour=="number"){this._date.setHours(nHour);return this}return this._date.getHours()};
jindo.$Date.prototype.minutes=function(nMin){if(typeof nMin=="number"){this._date.setMinutes(nMin);return this}return this._date.getMinutes()};
jindo.$Date.prototype.seconds=function(nSec){if(typeof nSec=="number"){this._date.setSeconds(nSec);return this}return this._date.getSeconds()};
jindo.$Date.prototype.isLeapYear=function(){var y=this._date.getFullYear();return!(y%4)&&!!(y%100)||!(y%
400)};
jindo.$Window=function(el){var cl=arguments.callee;if(el instanceof cl)return el;if(!(this instanceof
cl))return new cl(el);this._win=el||window};
jindo.$Window.prototype.$value=function(){return this._win};
jindo.$Window.prototype.resizeTo=function(nWidth,nHeight){this._win.resizeTo(nWidth,nHeight);return this};
jindo.$Window.prototype.resizeBy=function(nWidth,nHeight){this._win.resizeBy(nWidth,nHeight);return this};
jindo.$Window.prototype.moveTo=function(nLeft,nTop){this._win.moveTo(nLeft,nTop);return this};
jindo.$Window.prototype.moveBy=function(nLeft,nTop){this._win.moveBy(nLeft,nTop);return this};
jindo.$Window.prototype.sizeToContent=function(nWidth,nHeight){if(typeof this._win.sizeToContent=="function")this._win.sizeToContent();
else{if(arguments.length!=2){var innerX,innerY;var self=this._win;var doc=this._win.document;if(self.innerHeight){innerX=
self.innerWidth;innerY=self.innerHeight}else if(doc.documentElement&&doc.documentElement.clientHeight){innerX=
doc.documentElement.clientWidth;innerY=doc.documentElement.clientHeight}else if(doc.body){innerX=doc.body.clientWidth;
innerY=doc.body.clientHeight}var pageX,pageY;var test1=doc.body.scrollHeight;var test2=doc.body.offsetHeight;
if(test1>test2){pageX=doc.body.scrollWidth;pageY=doc.body.scrollHeight}else{pageX=doc.body.offsetWidth;
pageY=doc.body.offsetHeight}nWidth=pageX-innerX;nHeight=pageY-innerY}this.resizeBy(nWidth,nHeight)}return this};
if(typeof window!="undefined")for(prop in jindo)if(jindo.hasOwnProperty(prop))window[prop]=jindo[prop];
function namespace(sKeys,pCode){var aKeys=sKeys.split("."),obj=window;for(var i=0,sKey;sKey=aKeys[i];i++){if(typeof obj[sKey]==
"undefined")obj[sKey]={};obj=obj[sKey]}if(typeof pCode=="object"){for(var k in pCode)obj[k]=pCode[k];
return}pCode._object=obj;pCode()}
namespace.errorMessage="namespace: Only constant values can be exported";
namespace.imports=function(){var sCode="";for(var i=0,s;s=arguments[i];i++)try{for(var k in eval(s))sCode+=
"var "+k+" \x3d "+s+"."+k+";"}catch(e){}return sCode};
namespace.exports=function(){var sCode="";for(var i=0,s;s=arguments[i];i++){var bConstStyle=/^[A-Z_]+$/.test(s);
sCode+="if (typeof "+s+' !\x3d "function" \x26\x26 !'+bConstStyle+") throw new Error(namespace.errorMessage);\n"+
"arguments.callee._object."+s+" \x3d "+s+";\n\n"}return sCode};
jindo.Component=jindo.$Class({_htEventHandler:null,_htOption:null,$init:function(){var aInstance=this.constructor.getInstance();
aInstance.push(this);this._htEventHandler={};this._htOption={};this._htOption._htSetter={}},
option:function(sName,vValue){switch(typeof sName){case "undefined":var oOption={};for(var i in this._htOption)if(!(i==
"htCustomEventHandler"||i=="_htSetter"))oOption[i]=this._htOption[i];return oOption;case "string":if(typeof vValue!=
"undefined"){if(sName=="htCustomEventHandler")if(typeof this._htOption[sName]=="undefined")this.attach(vValue);
else return this;this._htOption[sName]=vValue;if(typeof this._htOption._htSetter[sName]=="function")this._htOption._htSetter[sName](vValue)}else return this._htOption[sName];
break;case "object":for(var sKey in sName){if(sKey=="htCustomEventHandler")if(typeof this._htOption[sKey]==
"undefined")this.attach(sName[sKey]);else continue;if(sKey!=="_htSetter")this._htOption[sKey]=sName[sKey];
if(typeof this._htOption._htSetter[sKey]=="function")this._htOption._htSetter[sKey](sName[sKey])}break}return this},
optionSetter:function(sName,fSetter){switch(typeof sName){case "undefined":return this._htOption._htSetter;
case "string":if(typeof fSetter!="undefined")this._htOption._htSetter[sName]=jindo.$Fn(fSetter,this).bind();
else return this._htOption._htSetter[sName];break;case "object":for(var sKey in sName)this._htOption._htSetter[sKey]=
jindo.$Fn(sName[sKey],this).bind();break}return this},
fireEvent:function(sEvent,oEvent){oEvent=oEvent||{};var fInlineHandler=this["on"+sEvent],aHandlerList=
this._htEventHandler[sEvent]||[],bHasInlineHandler=typeof fInlineHandler=="function",bHasHandlerList=
aHandlerList.length>0;if(!bHasInlineHandler&&!bHasHandlerList)return true;aHandlerList=aHandlerList.concat();
oEvent.sType=sEvent;if(typeof oEvent._aExtend=="undefined"){oEvent._aExtend=[];oEvent.stop=function(){if(oEvent._aExtend.length>
0)oEvent._aExtend[oEvent._aExtend.length-1].bCanceled=true}}oEvent._aExtend.push({sType:sEvent,
bCanceled:false});var aArg=[oEvent],i,nLen;for(i=2,nLen=arguments.length;i<nLen;i++)aArg.push(arguments[i]);
if(bHasInlineHandler)fInlineHandler.apply(this,aArg);if(bHasHandlerList){var fHandler;for(i=0,fHandler;fHandler=
aHandlerList[i];i++)fHandler.apply(this,aArg)}return!oEvent._aExtend.pop().bCanceled},
attach:function(sEvent,fHandlerToAttach){if(arguments.length==1){jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler,
sEvent){this.attach(sEvent,fHandler)},this).bind());
return this}var aHandler=this._htEventHandler[sEvent];if(typeof aHandler=="undefined")aHandler=this._htEventHandler[sEvent]=
[];aHandler.push(fHandlerToAttach);return this},
detach:function(sEvent,fHandlerToDetach){if(arguments.length==1){jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler,
sEvent){this.detach(sEvent,fHandler)},this).bind());
return this}var aHandler=this._htEventHandler[sEvent];if(aHandler)for(var i=0,fHandler;fHandler=aHandler[i];i++)if(fHandler===
fHandlerToDetach){aHandler=aHandler.splice(i,1);break}return this},
detachAll:function(sEvent){var aHandler=this._htEventHandler;if(arguments.length){if(typeof aHandler[sEvent]==
"undefined")return this;delete aHandler[sEvent];return this}for(var o in aHandler)delete aHandler[o];
return this}});
jindo.Component.factory=function(aObject,htOption){var aReturn=[],oInstance;if(typeof htOption=="undefined")htOption=
{};for(var i=0,el;el=aObject[i];i++){oInstance=new this(el,htOption);aReturn[aReturn.length]=oInstance}return aReturn};
jindo.Component.getInstance=function(){if(typeof this._aInstance=="undefined")this._aInstance=[];return this._aInstance};
jindo.UIComponent=jindo.$Class({$init:function(){this._bIsActivating=false},
isActivating:function(){return this._bIsActivating},
activate:function(){if(this.isActivating())return this;this._bIsActivating=true;if(arguments.length>0)this._onActivate.apply(this,
arguments);else this._onActivate();return this},
deactivate:function(){if(!this.isActivating())return this;this._bIsActivating=false;if(arguments.length>
0)this._onDeactivate.apply(this,arguments);else this._onDeactivate();return this}}).extend(jindo.Component);
jindo.HTMLComponent=jindo.$Class({sTagName:"",$init:function(){},
paint:function(){this._onPaint();return this}}).extend(jindo.UIComponent);
jindo.HTMLComponent.paint=function(){var aInstance=this.getInstance();for(var i=0,oInstance;oInstance=
aInstance[i];i++)oInstance.paint()};
jindo.ScrollBar=(new jindo.$Class({_bMouseEnter:false,_bIsEventAttachedForCommon:false,_bIsEventAttachedForVertical:false,
_bIsEventAttachedForHorizontal:false,$init:function(el,oOption){this.option({sClassPrefix:"scrollbar-",
nDelta:16,sClassNameForRollover:"rollover",bActivateOnload:true});this.option(oOption||{});this._el=jindo.$(el);
this._oTimer=new jindo.Timer;this._oTransition=(new jindo.Transition).fps(30);this._wfOnMouseEnter=jindo.$Fn(this._onMouseEnter,
this);this._wfOnMouseLeave=jindo.$Fn(this._onMouseLeave,this);this._wfOnWheel=jindo.$Fn(this._onWheel,
this);this._wfOnMouseUp=jindo.$Fn(this._onMouseUp,this);this._assignHTMLElements();this._initialize4Tablet();
if(this.option("bActivateOnload"))this.activate()},
_assignHTMLElements:function(){var el=this._el,sClassPrefix=this.option("sClassPrefix");this._elBox=jindo.$$.getSingle("."+
sClassPrefix+"box",el);this._elContent=jindo.$$.getSingle("."+sClassPrefix+"content",el);var welBox=jindo.$Element(this._elBox),
welContent=jindo.$Element(this._elContent);this._oBoxSize={nWidth:welBox.width(),nHeight:welBox.height()};
this._oContentSize={nWidth:welContent.width(),nHeight:welContent.height()};this._oHorizontal={elScrollBar:jindo.$$.getSingle("."+
sClassPrefix+"h",el)};var oH=this._oHorizontal;if(oH.elScrollBar){oH.elTrack=jindo.$$.getSingle("."+sClassPrefix+
"track",oH.elScrollBar);oH.elThumb=jindo.$$.getSingle("."+sClassPrefix+"thumb",oH.elTrack);oH.elThumbHead=
jindo.$$.getSingle("."+sClassPrefix+"thumb-head",oH.elThumb);oH.elThumbBody=jindo.$$.getSingle("."+sClassPrefix+
"thumb-body",oH.elThumb);oH.elThumbFoot=jindo.$$.getSingle("."+sClassPrefix+"thumb-foot",oH.elThumb);
oH.elButtonLeft=jindo.$$.getSingle("."+sClassPrefix+"button-left",oH.elScrollBar);oH.elButtonRight=jindo.$$.getSingle("."+
sClassPrefix+"button-right",oH.elScrollBar)}this._oVertical={elScrollBar:jindo.$$.getSingle("."+sClassPrefix+
"v",el)};var oV=this._oVertical;if(oV.elScrollBar){oV.elTrack=jindo.$$.getSingle("."+sClassPrefix+"track",
oV.elScrollBar);oV.elThumb=jindo.$$.getSingle("."+sClassPrefix+"thumb",oV.elTrack);oV.elThumbHead=jindo.$$.getSingle("."+
sClassPrefix+"thumb-head",oV.elThumb);oV.elThumbBody=jindo.$$.getSingle("."+sClassPrefix+"thumb-body",
oV.elThumb);oV.elThumbFoot=jindo.$$.getSingle("."+sClassPrefix+"thumb-foot",oV.elThumb);oV.elButtonUp=
jindo.$$.getSingle("."+sClassPrefix+"button-up",oV.elScrollBar);oV.elButtonDown=jindo.$$.getSingle("."+
sClassPrefix+"button-down",oV.elScrollBar)}},
getBox:function(){return this._elBox},
getContent:function(){return this._elContent},
getDefaultBoxSize:function(){return this._oBoxSize},
getDefaultContentSize:function(){return this._oContentSize},
getScrollBarHorizontal:function(){return this._oHorizontal},
getScrollBarVertical:function(){return this._oVertical},
getSliderHorizontal:function(){return this._oSliderHorizontal||null},
getSliderVertical:function(){return this._oSliderVertical||null},
getRolloverArea:function(){return this._oRolloverArea},
_attachEvent:function(sDirection){var sClassPrefix=this.option("sClassPrefix"),self=this,oH=this.getScrollBarHorizontal(),
oV=this.getScrollBarVertical();function attach(o){if(o.elScrollBar){var sClassNameForRollover=self.option("sClassNameForRollover");
jindo.$Element(o.elTrack).addClass(sClassNameForRollover);jindo.$Element(o.elThumb).addClass(sClassNameForRollover);
if(o.elButtonLeft)jindo.$Element(o.elButtonLeft).addClass(sClassNameForRollover);if(o.elButtonRight)jindo.$Element(o.elButtonRight).addClass(sClassNameForRollover);
if(o.elButtonUp)jindo.$Element(o.elButtonUp).addClass(sClassNameForRollover);if(o.elButtonDown)jindo.$Element(o.elButtonDown).addClass(sClassNameForRollover)}}
function attachH(){if(!self._bIsEventAttachedForHorizontal)attach(oH);self._bIsEventAttachedForHorizontal=
true}
function attachV(){if(!self._bIsEventAttachedForVertical)attach(oV);self._bIsEventAttachedForVertical=
true}
if(!this._bIsEventAttachedForCommon){this._initSliders();this._initRolloverArea();this._wfOnMouseEnter.attach(this._el,
"mouseenter");this._wfOnMouseLeave.attach(this._el,"mouseleave");this._wfOnWheel.attach(document,"mousewheel");
this._wfOnMouseUp.attach(document,"mouseup");this._bIsEventAttachedForCommon=true;jindo.$Element(this._el).removeClass(sClassPrefix+
"noscript")}if(!sDirection){attachH();attachV()}if(sDirection=="horizontal")attachH();if(sDirection==
"vertical")attachV()},
_detachEvent:function(sDirection){var sClassPrefix=this.option("sClassPrefix"),self=this,oH=this.getScrollBarHorizontal(),
oV=this.getScrollBarVertical();function detach(o){if(o.elScrollBar){var sClassNameForRollover=self.option("sClassNameForRollover");
jindo.$Element(o.elTrack).removeClass(sClassNameForRollover);jindo.$Element(o.elThumb).removeClass(sClassNameForRollover);
if(o.elButtonLeft)jindo.$Element(o.elButtonLeft).removeClass(sClassNameForRollover);if(o.elButtonRight)jindo.$Element(o.elButtonRight).removeClass(sClassNameForRollover);
if(o.elButtonUp)jindo.$Element(o.elButtonUp).removeClass(sClassNameForRollover);if(o.elButtonDown)jindo.$Element(o.elButtonDown).removeClass(sClassNameForRollover)}}
function detachH(){if(self._bIsEventAttachedForHorizontal)detach(oH);self._bIsEventAttachedForHorizontal=
false}
function detachV(){if(self._bIsEventAttachedForVertical)detach(oV);self._bIsEventAttachedForVertical=
false}
if(!sDirection){detachH();detachV()}else if(sDirection=="horizontal")detachH();else if(sDirection=="vertical")detachV();
if(this._bIsEventAttachedForCommon&&!this._bIsEventAttachedForHorizontal&&!this._bIsEventAttachedForVertical){this._wfOnMouseEnter.detach(this._el,
"mouseenter");this._wfOnMouseLeave.detach(this._el,"mouseleave");this._wfOnWheel.detach(document,"mousewheel");
this._wfOnMouseUp.detach(document,"mouseup");this._bMouseEnter=false;this._bIsEventAttachedForCommon=
false;this.getRolloverArea().deactivate();jindo.$Element(this._el).addClass(sClassPrefix+"noscript")}},
_activateH:function(){var oSliderH=this.getSliderHorizontal();if(oSliderH){oSliderH.activate();this.getBox().scrollLeft=
0;this.setScrollLeft(0)}},
_activateV:function(){var oSliderV=this.getSliderVertical();if(oSliderV){oSliderV.activate();this.getBox().scrollTop=
0;this.setScrollTop(0)}},
_onActivate:function(sDirection){this._attachEvent(sDirection||null);this._activate4Tablet();if(!sDirection){this._activateH();
this._activateV();jindo.$Element(this._el).removeClass(this.option("sClassPrefix")+"noscript");return}if(sDirection==
"horizontal"){this._activateH();return}if(sDirection=="vertical"){this._activateV();return}},
_deactivateH:function(){var oSliderH=this.getSliderHorizontal();if(oSliderH){oSliderH.deactivate();this.getContent().style.left=
"0px";this.getBox().scrollLeft=0}},
_deactivateV:function(){var oSliderV=this.getSliderVertical();if(oSliderV){oSliderV.deactivate();this.getContent().style.top=
"0px";this.getBox().scrollTop=0}},
_onDeactivate:function(sDirection){this._detachEvent(sDirection||null);this._deactivate4Tablet();if(!sDirection){this._deactivateH();
this._deactivateV();jindo.$Element(this._el).addClass(this.option("sClassPrefix")+"noscript");return}if(sDirection==
"horizontal"){this._deactivateH();return}if(sDirection=="vertical"){this._deactivateV();return}},
_initSliders:function(){var self=this,sClassPrefix=this.option("sClassPrefix"),oH=this.getScrollBarHorizontal(),
oV=this.getScrollBarVertical();if(oH.elScrollBar){this._nScrollWidth=jindo.$Element(this._elContent).width()-
jindo.$Element(this._elBox).width();this._oSliderHorizontal=new jindo.Slider(oH.elTrack,{sClassPrefix:sClassPrefix,
bVertical:false,nMinValue:0,nMaxValue:this._nScrollWidth});this._oSliderHorizontal._oTransition=(new jindo.Transition).fps(30);
this._oSliderHorizontal.attach({beforeChange:function(oCustomEvent){var nTrackWidth=jindo.$Element(this.getTrack()).width(),
nThumbWidth=jindo.$Element(this.getThumb(oCustomEvent.nIndex)).width(),nAvailWidth=nTrackWidth-nThumbWidth;
oCustomEvent.nPos=Math.min(oCustomEvent.nPos,nAvailWidth);oCustomEvent.nPos=Math.max(oCustomEvent.nPos,
0);if(oCustomEvent.bJump){oCustomEvent.stop();this._oTransition.abort().start(200,this.getThumb(oCustomEvent.nIndex),
{"@left":jindo.Effect.easeOut(oCustomEvent.nPos+"px")}).attach({playing:function(oCustomEvent2){self.setScrollLeft(self._oSliderHorizontal._getValue(0,
parseInt(oCustomEvent2.sValue,10)))}})}else self.setScrollLeft(this._getValue(0,oCustomEvent.nPos))}})}if(oV.elScrollBar){this._nScrollHeight=
jindo.$Element(this._elContent).height()-jindo.$Element(this._elBox).height();
this._oSliderVertical=new jindo.Slider(oV.elTrack,{sClassPrefix:sClassPrefix,bVertical:true,nMinValue:0,
nMaxValue:this._nScrollHeight});this._oSliderVertical._oTransition=(new jindo.Transition).fps(30);this._oSliderVertical.attach({beforeChange:function(oCustomEvent){var nTrackHeight=
jindo.$Element(this.getTrack()).height(),nThumbHeight=jindo.$Element(this.getThumb(oCustomEvent.nIndex)).height(),
nAvailHeight=nTrackHeight-nThumbHeight;oCustomEvent.nPos=Math.min(oCustomEvent.nPos,nAvailHeight);oCustomEvent.nPos=
Math.max(oCustomEvent.nPos,0);if(oCustomEvent.bJump){oCustomEvent.stop();this._oTransition.abort().start(200,
this.getThumb(oCustomEvent.nIndex),{"@top":jindo.Effect.easeOut(oCustomEvent.nPos+"px")}).attach({playing:function(oCustomEvent2){self.setScrollTop(self._oSliderVertical.values(0))}})}else self.setScrollTop(this._getValue(0,
oCustomEvent.nPos))}})}},
_initRolloverArea:function(){var self=this,sClassPrefix=this.option("sClassPrefix"),sClassNameForRollover=
this.option("sClassNameForRollover");this._oRolloverArea=(new jindo.RolloverArea(this._el,{sClassName:sClassNameForRollover,
sClassPrefix:sClassPrefix})).attach({over:function(oCustomEvent){oCustomEvent.stop();self._onRollover("over",
oCustomEvent.element)},
down:function(oCustomEvent){oCustomEvent.stop();self._onMouseDown(oCustomEvent.element);self._onRollover("down",
oCustomEvent.element)},
up:function(oCustomEvent){oCustomEvent.stop();self._onMouseUp(oCustomEvent.element);self._onRollover("up",
oCustomEvent.element)},
out:function(oCustomEvent){oCustomEvent.stop();self._onRollover("out",oCustomEvent.element)}})},
reset:function(){var oSliderH=this.getSliderHorizontal(),oSliderV=this.getSliderVertical();if(oSliderH){this._nScrollWidth=
jindo.$Element(this._elContent).width()-jindo.$Element(this._elBox).width();oSliderH.option("nMaxValue",
this._nScrollWidth);this.setScrollLeft(0)}if(oSliderV){this._nScrollHeight=jindo.$Element(this._elContent).height()-
jindo.$Element(this._elBox).height();oSliderV.option("nMaxValue",this._nScrollHeight);this.setScrollTop(0)}this._elBox.scrollLeft=
0;this._elBox.scrollTop=0},
hasScrollBarHorizontal:function(){var sClassPrefix=this.option("sClassPrefix"),o=this.getScrollBarHorizontal();
if(o.elScrollBar){var welScrollBar=jindo.$Element(o.elScrollBar);return welScrollBar.visible()||welScrollBar.hasClass(sClassPrefix+
"show")}return false},
hasScrollBarVertical:function(){var sClassPrefix=this.option("sClassPrefix"),o=this.getScrollBarVertical();
if(o.elScrollBar){var welScrollBar=jindo.$Element(o.elScrollBar);return welScrollBar.visible()||welScrollBar.hasClass(sClassPrefix+
"show")}return false},
setScrollTop:function(n){n=Math.min(n,this._nScrollHeight);n=Math.max(n,0);n=Math.round(n);var htParam=
{sDirection:"top",nPosition:n};jindo.$Element(this._elContent).css("top",htParam.nPosition*-1+"px");var oSliderV=
this.getSliderVertical();if(oSliderV)oSliderV.values(0,htParam.nPosition,false);this._fireScrollEvent(htParam)},
setScrollLeft:function(n){n=Math.min(n,this._nScrollWidth);n=Math.max(n,0);n=Math.round(n);var htParam=
{sDirection:"left",nPosition:n};jindo.$Element(this._elContent).css("left",htParam.nPosition*-1+"px");
var oSliderH=this.getSliderHorizontal();if(oSliderH)oSliderH.values(0,htParam.nPosition,false);this._fireScrollEvent(htParam)},
setScrollTopBy:function(n){this.setScrollTop(this.getScrollTop()+n)},
setScrollLeftBy:function(n){this.setScrollLeft(this.getScrollLeft()+n)},
getScrollTop:function(n){return parseInt(jindo.$Element(this._elContent).css("top"),10)*-1},
getScrollLeft:function(n){return parseInt(jindo.$Element(this._elContent).css("left"),10)*-1},
_getElementType:function(wel){var sClassPrefix=this.option("sClassPrefix");if(wel.hasClass(sClassPrefix+
"track"))return"track";else if(wel.hasClass(sClassPrefix+"thumb"))return"thumb";else if(wel.hasClass(sClassPrefix+
"button-up"))return"button-up";else if(wel.hasClass(sClassPrefix+"button-up"))return"button-up";else if(wel.hasClass(sClassPrefix+
"button-down"))return"button-down";else if(wel.hasClass(sClassPrefix+"button-left"))return"button-left";
else if(wel.hasClass(sClassPrefix+"button-right"))return"button-right";else return false},
_fireScrollEvent:function(htParam){this.fireEvent("scroll",htParam)},
_onWheel:function(we){if(!this._bMouseEnter)return;we.stop(jindo.$Event.CANCEL_DEFAULT);var nDelta=we.mouse().delta,
nDirection=nDelta/Math.abs(nDelta)*-1,n=Math.ceil(Math.abs(nDelta))*nDirection*this.option("nDelta"),
bH=this.hasScrollBarHorizontal(),bV=this.hasScrollBarVertical();if(!bH&&!bV)return;if(this.hasScrollBarVertical()&&
this._bIsEventAttachedForVertical){this.setScrollTop(this.getScrollTop()+n);return}this.setScrollLeft(this.getScrollLeft()+
n)},
_onMouseDown:function(el){var wel=jindo.$Element(el),self=this,setScrollBy,sElementType=this._getElementType(wel);
switch(sElementType){case "button-up":setScrollBy=function(n){self.setScrollTopBy(~~(n*-1))};
break;case "button-down":setScrollBy=function(n){self.setScrollTopBy(n)};
break;case "button-left":setScrollBy=function(n){self.setScrollLeftBy(~~(n*-1))};
break;case "button-right":setScrollBy=function(n){self.setScrollLeftBy(n)};
break;default:return}this._oTimer.start(function(){setScrollBy(16);return true},100)},
_onMouseUp:function(el){this._oTimer.abort()},
_onMouseEnter:function(we){this._bMouseEnter=true},
_onMouseLeave:function(we){this._bMouseEnter=false},
_onRollover:function(sType,el){var wel=jindo.$Element(el),sClassPrefix=this.option("sClassPrefix"),sElementType=
this._getElementType(wel);switch(sType){case "over":wel.addClass(sClassPrefix+sElementType+"-over");break;
case "down":wel.addClass(sClassPrefix+sElementType+"-hold");break;case "up":wel.removeClass(sClassPrefix+
sElementType+"-hold");break;case "out":wel.removeClass(sClassPrefix+sElementType+"-over");break}},
_initialize4Tablet:function(){this._fpOnTouchDragStart=jindo.$Fn(function(oEvent){this._oPos4Tablet=oEvent.pos()},
this);
this._fpOnTouchDragMove=jindo.$Fn(function(oEvent){if(!this._oPos4Tablet)return;var oOldPos=this._oPos4Tablet;
var oNewPos=oEvent.pos();this.setScrollLeftBy(oOldPos.pageX-oNewPos.pageX);this.setScrollTopBy(oOldPos.pageY-
oNewPos.pageY);this._oPos4Tablet=oNewPos;oEvent.stopDefault()},this);
this._fpOnTouchDragEnd=jindo.$Fn(function(oEvent){this._oPos4Tablet=null},this)},
_activate4Tablet:function(){var elEl=this._elContent;jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._el).preventTapHighlight(true);
this._fpOnTouchDragStart.attach(elEl,"touchstart");this._fpOnTouchDragMove.attach(elEl,"touchmove");this._fpOnTouchDragEnd.attach(elEl,
"touchend")},
_deactivate4Tablet:function(){var elEl=this._elContent;jindo.$Element.prototype.preventTapHighlight&&
jindo.$Element(this._el).preventTapHighlight(false);this._fpOnTouchDragStart.detach(elEl,"touchstart");
this._fpOnTouchDragMove.detach(elEl,"touchmove");this._fpOnTouchDragEnd.detach(elEl,"touchend")}})).extend(jindo.UIComponent);
jindo.Slider=jindo.$Class({_elTrack:null,_aThumbs:null,_aPoses:null,_htSwap:null,$init:function(el,oOptions){this.option({sClassPrefix:"slider-",
bVertical:false,bJump:true,bDragOnTrack:true,fAdjustValue:null,nMinValue:0,nMaxValue:1,bActivateOnload:true});
this.option(oOptions||{});if(!this.option("bVertical"))this._htSwap={y:"nY",x:"nX",clientX:"clientX",
pageX:"pageX",offsetWidth:"offsetWidth",left:"left"};else this._htSwap={y:"nX",x:"nY",clientX:"clientY",
pageX:"pageY",offsetWidth:"offsetHeight",left:"top"};this._elTrack=jindo.$(el);this._aThumbs=jindo.$$("."+
this.option("sClassPrefix")+"thumb",this._elTrack);this._sRand="S"+parseInt(Math.random()*1E8,10);jindo.$ElementList(this._aThumbs).addClass(this._sRand);
this._aPoses=this.positions();this._onTrackMouseDownFn=jindo.$Fn(this._onTrackMouseDown,this);this._initDragArea();
if(this.option("bActivateOnload"))this.activate()},
getTrack:function(){return this._elTrack},
getThumb:function(nIndex){return this._aThumbs[nIndex]},
_initDragArea:function(){var self=this;var htSwap=this._htSwap;this._oDragArea=(new jindo.DragArea(this._elTrack,
{sClassName:this._sRand,bFlowOut:false})).attach({beforeDrag:function(oCustomEvent){var nIndex=self._getThumbIndex(oCustomEvent.elHandle);
var htParam={nIndex:nIndex,nPos:oCustomEvent[htSwap.x],bJump:false};if(!self.fireEvent("beforeChange",
htParam)){oCustomEvent.stop();return false}oCustomEvent[htSwap.x]=self._getAdjustedPos(nIndex,htParam.nPos);
oCustomEvent[htSwap.y]=null},
drag:function(oCustomEvent){var nIndex=self._getThumbIndex(oCustomEvent.elHandle);var nPos=oCustomEvent[htSwap.x];
if(nPos!=self._aPoses[nIndex]){self._aPoses[nIndex]=nPos;self._fireChangeEvent(nIndex)}}})},
getDragArea:function(){return this._oDragArea},
_fireChangeEvent:function(nIndex){var nPos=this._getPosition(nIndex);this.fireEvent("change",{nIndex:nIndex,
nPos:nPos,nValue:this._getValue(nIndex,nPos)})},
_onActivate:function(){this.getDragArea().activate();jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elTrack).preventTapHighlight(true);
this._onTrackMouseDownFn.attach(this._elTrack,"mousedown")},
_onDeactivate:function(){this.getDragArea().deactivate();jindo.$Element.prototype.preventTapHighlight&&
jindo.$Element(this._elTrack).preventTapHighlight(false);this._onTrackMouseDownFn.detach(this._elTrack,
"mousedown")},
_onTrackMouseDown:function(we){if(!this.option("bJump"))return;we.stop(jindo.$Event.CANCEL_DEFAULT);var nIndex=
0;var htSwap=this._htSwap;var el=we.element;var sClass="."+this.option("sClassPrefix")+"thumb";var bThumb=
jindo.$$.test(el,sClass)||jindo.$$.getSingle("! "+sClass,el);if(bThumb)return;var nPos=we.pos()[htSwap.pageX];
nPos-=jindo.$Element(this._elTrack).offset()[htSwap.left];var nMaxDistance=9999999;for(var i=0,oThumb;oThumb=
this._aThumbs[i];i++){var nThumbPos=parseInt(jindo.$Element(oThumb).css(htSwap.left),10)||0;nThumbPos+=
parseInt(oThumb[htSwap.offsetWidth]/2,10);var nDistance=Math.abs(nPos-nThumbPos);if(nDistance<nMaxDistance){nMaxDistance=
nDistance;nIndex=i}}nPos-=parseInt(this._aThumbs[nIndex][htSwap.offsetWidth]/2,10);this.positions(nIndex,
nPos);if(this.option("bDragOnTrack"))this.getDragArea().startDragging(this._aThumbs[nIndex])},
_getTrackInfo:function(nIndex){var htSwap=this._htSwap;var oThumb=this._aThumbs[nIndex];var nThumbSize=
oThumb[htSwap.offsetWidth];var nTrackSize=this._elTrack[htSwap.offsetWidth];var nMaxPos=nTrackSize-nThumbSize;
var nMax=this.option("nMaxValue");var nMin=this.option("nMinValue");return{maxPos:nMaxPos,max:nMax,min:nMin}},
_getValue:function(nIndex,nPos){if(typeof nPos=="undefined")nPos=this._getPosition(nIndex);var oInfo=
this._getTrackInfo(nIndex);var nValue=Math.min(Math.max(nPos*(oInfo.max-oInfo.min)/oInfo.maxPos+oInfo.min,
oInfo.min),oInfo.max);var fAdjust=this.option("fAdjustValue");if(fAdjust)nValue=fAdjust.call(this,nValue);
return nValue},
_getAdjustedPos:function(nIndex,nPos){var nAdjustedPos=nPos;var oInfo=this._getTrackInfo(nIndex);var fAdjust=
this.option("fAdjustValue");if(fAdjust){var nValue=Math.min(Math.max(nAdjustedPos*(oInfo.max-oInfo.min)/
oInfo.maxPos+oInfo.min,oInfo.min),oInfo.max);var nAfterValue=fAdjust.call(this,nValue);if(nValue!=nAfterValue)nAdjustedPos=
oInfo.maxPos*(nAfterValue-oInfo.min)/(oInfo.max-oInfo.min)}nAdjustedPos=Math.max(nAdjustedPos,0);nAdjustedPos=
Math.min(nAdjustedPos,oInfo.maxPos);return nAdjustedPos},
_getThumbIndex:function(oThumb){for(var i=0,len=this._aThumbs.length;i<len;i++)if(this._aThumbs[i]==oThumb)return i;
return-1},
_getPosition:function(nIndex){var sPos=jindo.$Element(this._aThumbs[nIndex]).css(this._htSwap.left);return sPos==
"auto"?0:parseInt(sPos,10)},
_setPosition:function(nIndex,nPos){this._aPoses[nIndex]=nPos;jindo.$Element(this._aThumbs[nIndex]).css(this._htSwap.left,
nPos+"px")},
positions:function(nIndex,nPos,bFireEvent){if(typeof bFireEvent=="undefined")bFireEvent=true;switch(arguments.length){case 0:var aPoses=
[];jindo.$A(this._aThumbs).forEach(function(el,i){aPoses[i]=this._getPosition(i)},this);
return aPoses;case 1:return this._getPosition(nIndex);default:if(bFireEvent){var htParam={nIndex:nIndex,
nPos:nPos,bJump:true};if(this.fireEvent("beforeChange",htParam)){var nAfterPos=this._getAdjustedPos(nIndex,
htParam.nPos);var bChanged=nAfterPos!=this._aPoses[nIndex];this._setPosition(nIndex,nAfterPos);if(bChanged)this._fireChangeEvent(nIndex)}return this}this._setPosition(nIndex,
this._getAdjustedPos(nIndex,nPos));return this}},
values:function(nIndex,nValue,bFireEvent){if(typeof bFireEvent=="undefined")bFireEvent=true;switch(arguments.length){case 0:var aValues=
[];for(var i=0,len=this._aThumbs.length;i<len;i++)aValues[i]=this._getValue(i);return aValues;case 1:return this._getValue(nIndex,
this.positions(nIndex));default:var oInfo=this._getTrackInfo(nIndex);this.positions(nIndex,(nValue-oInfo.min)*
oInfo.maxPos/(oInfo.max-oInfo.min)||0,bFireEvent);return this}}}).extend(jindo.UIComponent);
jindo.RolloverArea=jindo.$Class({$init:function(el,htOption){this.option({sClassName:"rollover",sClassPrefix:"rollover-",
bCheckMouseDown:true,bActivateOnload:true,htStatus:{sOver:"over",sDown:"down"}});this.option(htOption||
{});this._elArea=jindo.$(el);this._aOveredElements=[];this._aDownedElements=[];this._wfMouseOver=jindo.$Fn(this._onMouseOver,
this);this._wfMouseOut=jindo.$Fn(this._onMouseOut,this);this._wfMouseDown=jindo.$Fn(this._onMouseDown,
this);this._wfMouseUp=jindo.$Fn(this._onMouseUp,this);if(this.option("bActivateOnload"))this.activate()},
_addOvered:function(el){this._aOveredElements.push(el)},
_removeOvered:function(el){this._aOveredElements.splice(jindo.$A(this._aOveredElements).indexOf(el),1)},
_addStatus:function(el,sStatus){jindo.$Element(el).addClass(this.option("sClassPrefix")+sStatus)},
_removeStatus:function(el,sStatus){jindo.$Element(el).removeClass(this.option("sClassPrefix")+sStatus)},
_isInnerElement:function(elParent,elChild){return elParent===elChild?true:jindo.$Element(elParent).isParentOf(elChild)},
_onActivate:function(){jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elArea).preventTapHighlight(true);
this._wfMouseOver.attach(this._elArea,"mouseover");this._wfMouseOut.attach(this._elArea,"mouseout");if(this.option("bCheckMouseDown")){this._wfMouseDown.attach(this._elArea,
"mousedown");this._wfMouseUp.attach(document,"mouseup")}},
_onDeactivate:function(){jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._elArea).preventTapHighlight(false);
this._wfMouseOver.detach(this._elArea,"mouseover");this._wfMouseOut.detach(this._elArea,"mouseout");this._wfMouseDown.detach(this._elArea,
"mousedown");this._wfMouseUp.detach(document,"mouseup");this._aOveredElements.length=0;this._aDownedElements.length=
0},
_findRollover:function(el){var sClassName=this.option("sClassName");return jindo.$$.test(el,"."+sClassName)?
el:jindo.$$.getSingle("! ."+sClassName,el)},
_onMouseOver:function(we){var el=we.element,elRelated=we.relatedElement,htParam;for(;el=this._findRollover(el);el=
el.parentNode){if(elRelated&&this._isInnerElement(el,elRelated))continue;this._addOvered(el);htParam=
{element:el,htStatus:this.option("htStatus"),weEvent:we};if(this.fireEvent("over",htParam))this._addStatus(htParam.element,
htParam.htStatus.sOver)}},
_onMouseOut:function(we){var el=we.element,elRelated=we.relatedElement,htParam;for(;el=this._findRollover(el);el=
el.parentNode){if(elRelated&&this._isInnerElement(el,elRelated))continue;this._removeOvered(el);htParam=
{element:el,htStatus:this.option("htStatus"),weEvent:we};if(this.fireEvent("out",htParam))this._removeStatus(htParam.element,
htParam.htStatus.sOver)}},
_onMouseDown:function(we){var el=we.element,htParam;while(el=this._findRollover(el)){htParam={element:el,
htStatus:this.option("htStatus"),weEvent:we};this._aDownedElements.push(el);if(this.fireEvent("down",
htParam))this._addStatus(htParam.element,htParam.htStatus.sDown);el=el.parentNode}},
_onMouseUp:function(we){var el=we.element,aTargetElementDatas=[],aDownedElements=this._aDownedElements,
htParam,elMouseDown,i;for(i=0;elMouseDown=aDownedElements[i];i++)aTargetElementDatas.push({element:elMouseDown,
htStatus:this.option("htStatus"),weEvent:we});for(;el=this._findRollover(el);el=el.parentNode){if(jindo.$A(aDownedElements).indexOf(el)>
-1)continue;aTargetElementDatas.push({element:el,htStatus:this.option("htStatus"),weEvent:we})}for(i=
0;htParam=aTargetElementDatas[i];i++)if(this.fireEvent("up",htParam))this._removeStatus(htParam.element,
htParam.htStatus.sDown);this._aDownedElements=[]}}).extend(jindo.UIComponent);
jindo.Transition=jindo.$Class({_nFPS:30,_aTaskQueue:null,_oTimer:null,_bIsWaiting:true,_bIsPlaying:false,
$init:function(htOption){this._aTaskQueue=[];this._oTimer=new jindo.Timer;this._oSleepTimer=new jindo.Timer;
this.option({fEffect:jindo.Effect.linear,bCorrection:false});this.option(htOption||{})},
fps:function(nFPS){if(arguments.length>0){this._nFPS=nFPS;return this}return this._nFPS},
isPlaying:function(){return this._bIsPlaying},
abort:function(){this._aTaskQueue=[];this._oTimer.abort();this._oSleepTimer.abort();if(this._bIsPlaying)this.fireEvent("abort");
this._bIsWaiting=true;this._bIsPlaying=false;this._htTaskToDo=null;return this},
start:function(nDuration,elTarget,htInfo){if(arguments.length>0)this.queue.apply(this,arguments);this._prepareNextTask();
return this},
queue:function(nDuration,aCommand){var htTask;if(typeof arguments[0]=="function")htTask={sType:"function",
fTask:arguments[0]};else{var a=[];if(arguments[1]instanceof Array)a=arguments[1];else{var aInner=[];jindo.$A(arguments).forEach(function(v,
i){if(i>0){aInner.push(v);if(i%2===0){a.push(aInner.concat());aInner=[]}}})}htTask={sType:"task",
nDuration:nDuration,aList:[]};for(var i=0,nLen=a.length;i<nLen;i++){var aValue=[],htArg=a[i][1],sEnd;
for(var sKey in htArg){sEnd=htArg[sKey];if(/^(@|style\.)(\w+)/i.test(sKey))aValue.push(["style",RegExp.$2,
sEnd]);else aValue.push(["attr",sKey,sEnd])}htTask.aList.push({elTarget:a[i][0],aValue:aValue})}}this._queueTask(htTask);
return this},
pause:function(){if(this._oTimer.abort())this.fireEvent("pause");return this},
resume:function(){if(this._htTaskToDo){if(this._bIsWaiting===false&&this._bIsPlaying===true)this.fireEvent("resume");
this._doTask();this._bIsWaiting=false;this._bIsPlaying=true;var self=this;this._oTimer.start(function(){var bEnd=
!self._doTask();if(bEnd){self._bIsWaiting=true;setTimeout(function(){self._prepareNextTask()},0)}return!bEnd},
this._htTaskToDo.nInterval)}return this},
precede:function(nDuration,elTarget,htInfo){this.start.apply(this,arguments);return this},
sleep:function(nDuration,fCallback){if(typeof fCallback=="undefined")fCallback=function(){};
this._queueTask({sType:"sleep",nDuration:nDuration,fCallback:fCallback});this._prepareNextTask();return this},
_queueTask:function(v){this._aTaskQueue.push(v)},
_dequeueTask:function(){var htTask=this._aTaskQueue.shift();if(htTask){if(htTask.sType=="task"){var aList=
htTask.aList;for(var i=0,nLength=aList.length;i<nLength;i++){var elTarget=aList[i].elTarget,welTarget=
null;for(var j=0,aValue=aList[i].aValue,nJLen=aValue.length;j<nJLen;j++){var sType=aValue[j][0],sKey=
aValue[j][1],fFunc=aValue[j][2];if(typeof fFunc!="function"){var fEffect=this.option("fEffect");if(fFunc instanceof
Array)fFunc=fEffect(fFunc[0],fFunc[1]);else fFunc=fEffect(fFunc);aValue[j][2]=fFunc}if(fFunc.setStart)if(this._isHTMLElement(elTarget)){welTarget=
welTarget||jindo.$Element(elTarget);switch(sType){case "style":fFunc.setStart(welTarget.css(sKey));break;
case "attr":fFunc.setStart(welTarget.$value()[sKey]);break}}else fFunc.setStart(elTarget.getter(sKey))}}}return htTask}else return null},
_prepareNextTask:function(){if(this._bIsWaiting){var htTask=this._dequeueTask();if(htTask)switch(htTask.sType){case "task":if(!this._bIsPlaying)this.fireEvent("start");
var nInterval=1E3/this._nFPS,nGap=nInterval/htTask.nDuration;this._htTaskToDo={aList:htTask.aList,nRatio:0,
nInterval:nInterval,nGap:nGap,nStep:0,nTotalStep:Math.ceil(htTask.nDuration/nInterval)};this.resume();
break;case "function":if(!this._bIsPlaying)this.fireEvent("start");htTask.fTask();this._prepareNextTask();
break;case "sleep":if(this._bIsPlaying){this.fireEvent("sleep",{nDuration:htTask.nDuration});htTask.fCallback()}var self=
this;this._oSleepTimer.start(function(){self.fireEvent("awake");self._prepareNextTask()},htTask.nDuration);
break}else if(this._bIsPlaying){this._bIsPlaying=false;this.abort();this.fireEvent("end")}}},
_isHTMLElement:function(el){return"tagName"in el},
_doTask:function(){if(!this._htTaskToDo)return false;var htTaskToDo=this._htTaskToDo,nRatio=parseFloat(htTaskToDo.nRatio.toFixed(5),
1),nStep=htTaskToDo.nStep,nTotalStep=htTaskToDo.nTotalStep,aList=htTaskToDo.aList,htCorrection={},bCorrection=
this.option("bCorrection");for(var i=0,nLength=aList.length;i<nLength;i++){var elTarget=aList[i].elTarget,
welTarget=null;for(var j=0,aValue=aList[i].aValue,nJLen=aValue.length;j<nJLen;j++){var sType=aValue[j][0],
sKey=aValue[j][1],sValue=aValue[j][2](nRatio);if(this._isHTMLElement(elTarget)){if(bCorrection){var sUnit=
/^\-?[0-9\.]+(%|px|pt|em)?$/.test(sValue)&&RegExp.$1||"";if(sUnit){var nValue=parseFloat(sValue);nValue+=
htCorrection[sKey]||0;nValue=parseFloat(nValue.toFixed(5));if(i==nLength-1)sValue=Math.round(nValue)+
sUnit;else{htCorrection[sKey]=nValue-Math.floor(nValue);sValue=parseInt(nValue,10)+sUnit}}}welTarget=
welTarget||jindo.$Element(elTarget);switch(sType){case "style":welTarget.css(sKey,sValue);break;case "attr":welTarget.$value()[sKey]=
sValue;break}}else elTarget.setter(sKey,sValue);if(this._bIsPlaying)this.fireEvent("playing",{element:elTarget,
sKey:sKey,sValue:sValue,nStep:nStep,nTotalStep:nTotalStep})}}htTaskToDo.nRatio=Math.min(htTaskToDo.nRatio+
htTaskToDo.nGap,1);htTaskToDo.nStep+=1;return nRatio!=1}}).extend(jindo.Component);
(function(){var b=jindo.$Element.prototype.css;jindo.$Element.prototype.css=function(k,v){if(k=="opacity")return typeof v!=
"undefined"?this.opacity(parseFloat(v)):this.opacity();else return typeof v!="undefined"?b.call(this,
k,v):b.call(this,k)}})();
jindo.DragArea=jindo.$Class({$init:function(el,htOption){this.option({sClassName:"draggable",bFlowOut:true,
bSetCapture:true,nThreshold:0});this.option(htOption||{});this._el=el;this._bIE=jindo.$Agent().navigator().ie;
this._htDragInfo={"bIsDragging":false,"bPrepared":false,"bHandleDown":false,"bForceDrag":false};this._wfOnMouseDown=
jindo.$Fn(this._onMouseDown,this);this._wfOnMouseMove=jindo.$Fn(this._onMouseMove,this);this._wfOnMouseUp=
jindo.$Fn(this._onMouseUp,this);this._wfOnDragStart=jindo.$Fn(this._onDragStart,this);this._wfOnSelectStart=
jindo.$Fn(this._onSelectStart,this);this.activate()},
_findDraggableElement:function(el){if(el.nodeType===1&&jindo.$$.test(el,"input[type\x3dtext], textarea, select"))return null;
var self=this;var sClass="."+this.option("sClassName");var isChildOfDragArea=function(el){if(el===null)return false;
if(self._el===document||self._el===el)return true;return jindo.$Element(self._el).isParentOf(el)};
var elReturn=jindo.$$.test(el,sClass)?el:jindo.$$.getSingle("! "+sClass,el);if(!isChildOfDragArea(elReturn))elReturn=
null;return elReturn},
isDragging:function(){var htDragInfo=this._htDragInfo;return htDragInfo.bIsDragging&&!htDragInfo.bPrepared},
stopDragging:function(){this._stopDragging(true);return this},
_stopDragging:function(bInterupted){this._wfOnMouseMove.detach(document,"mousemove");this._wfOnMouseUp.detach(document,
"mouseup");if(this.isDragging()){var htDragInfo=this._htDragInfo,welDrag=jindo.$Element(htDragInfo.elDrag);
htDragInfo.bIsDragging=false;htDragInfo.bForceDrag=false;htDragInfo.bPrepared=false;if(this._bIE&&this._elSetCapture){this._elSetCapture.releaseCapture();
this._elSetCapture=null}this.fireEvent("dragEnd",{"elArea":this._el,"elHandle":htDragInfo.elHandle,"elDrag":htDragInfo.elDrag,
"nX":parseInt(welDrag.css("left"),10)||0,"nY":parseInt(welDrag.css("top"),10)||0,"bInterupted":bInterupted})}},
_onActivate:function(){this._wfOnMouseDown.attach(this._el,"mousedown");this._wfOnDragStart.attach(this._el,
"dragstart");this._wfOnSelectStart.attach(this._el,"selectstart")},
_onDeactivate:function(){this._wfOnMouseDown.detach(this._el,"mousedown");this._wfOnDragStart.detach(this._el,
"dragstart");this._wfOnSelectStart.detach(this._el,"selectstart")},
attachEvent:function(){this.activate()},
detachEvent:function(){this.deactivate()},
isEventAttached:function(){return this.isActivating()},
startDragging:function(el){var elDrag=this._findDraggableElement(el);if(elDrag){this._htDragInfo.bForceDrag=
true;this._htDragInfo.bPrepared=true;this._htDragInfo.elHandle=elDrag;this._htDragInfo.elDrag=elDrag;
this._wfOnMouseMove.attach(document,"mousemove");this._wfOnMouseUp.attach(document,"mouseup");return true}return false},
_onMouseDown:function(we){var mouse=we.mouse(true);if(!mouse.left||mouse.right||mouse.scrollbar){this._stopDragging(true);
return}var el=this._findDraggableElement(we.element);if(el){var oPos=we.pos(),htDragInfo=this._htDragInfo;
htDragInfo.bHandleDown=true;htDragInfo.bPrepared=true;htDragInfo.nButton=we._event.button;htDragInfo.elHandle=
el;htDragInfo.elDrag=el;htDragInfo.nPageX=oPos.pageX;htDragInfo.nPageY=oPos.pageY;if(this.fireEvent("handleDown",
{elHandle:el,elDrag:el,weEvent:we}))this._wfOnMouseMove.attach(document,"mousemove");this._wfOnMouseUp.attach(document,
"mouseup");we.stop(jindo.$Event.CANCEL_DEFAULT)}},
_onMouseMove:function(we){var htDragInfo=this._htDragInfo,htParam,htRect,oPos=we.pos(),htGap={"nX":oPos.pageX-
htDragInfo.nPageX,"nY":oPos.pageY-htDragInfo.nPageY};if(htDragInfo.bPrepared){var nThreshold=this.option("nThreshold"),
htDiff={};if(!htDragInfo.bForceDrag&&nThreshold){htDiff.nPageX=oPos.pageX-htDragInfo.nPageX;htDiff.nPageY=
oPos.pageY-htDragInfo.nPageY;var nDistance=Math.sqrt(htDiff.nPageX*htDiff.nPageX+htDiff.nPageY*htDiff.nPageY);
if(nThreshold>nDistance)return}if(this._bIE&&this.option("bSetCapture")){this._elSetCapture=this._el===
document?document.body:this._findDraggableElement(we.element);if(this._elSetCapture)this._elSetCapture.setCapture(false)}htParam=
{elArea:this._el,elHandle:htDragInfo.elHandle,elDrag:htDragInfo.elDrag,htDiff:htDiff,weEvent:we};htDragInfo.bIsDragging=
true;htDragInfo.bPrepared=false;if(this.fireEvent("dragStart",htParam)){var welDrag=jindo.$Element(htParam.elDrag),
htOffset=welDrag.offset();htDragInfo.elHandle=htParam.elHandle;htDragInfo.elDrag=htParam.elDrag;htDragInfo.nX=
parseInt(welDrag.css("left"),10)||0;htDragInfo.nY=parseInt(welDrag.css("top"),10)||0;htDragInfo.nClientX=
htOffset.left+welDrag.width()/2;htDragInfo.nClientY=htOffset.top+welDrag.height()/2}else{htDragInfo.bPrepared=
true;return}}if(htDragInfo.bForceDrag){htGap.nX=oPos.clientX-htDragInfo.nClientX;htGap.nY=oPos.clientY-
htDragInfo.nClientY}htParam={"elArea":this._el,"elFlowOut":htDragInfo.elDrag.parentNode,"elHandle":htDragInfo.elHandle,
"elDrag":htDragInfo.elDrag,"weEvent":we,"nX":htDragInfo.nX+htGap.nX,"nY":htDragInfo.nY+htGap.nY,"nGapX":htGap.nX,
"nGapY":htGap.nY};if(this.fireEvent("beforeDrag",htParam)){var elDrag=htDragInfo.elDrag;if(this.option("bFlowOut")===
false){var elParent=htParam.elFlowOut,aSize=[elDrag.offsetWidth,elDrag.offsetHeight],nScrollLeft=0,nScrollTop=
0;if(elParent==document.body){nScrollLeft=document.body.scrollLeft||document.documentElement.scrollLeft;
nScrollTop=document.body.scrollTop||document.documentElement.scrollTop;elParent=null}if(elParent&&aSize[0]<=
elParent.scrollWidth&&aSize[1]<=elParent.scrollHeight){htRect={nWidth:elParent.clientWidth,nHeight:elParent.clientHeight};
nScrollLeft=elParent.scrollLeft;nScrollTop=elParent.scrollTop}else{var htClientSize=jindo.$Document().clientSize();
htRect={nWidth:htClientSize.width,nHeight:htClientSize.height}}if(htParam.nX!==null){htParam.nX=Math.max(htParam.nX,
nScrollLeft);htParam.nX=Math.min(htParam.nX,htRect.nWidth-aSize[0]+nScrollLeft)}if(htParam.nY!==null){htParam.nY=
Math.max(htParam.nY,nScrollTop);htParam.nY=Math.min(htParam.nY,htRect.nHeight-aSize[1]+nScrollTop)}}if(htParam.nX!==
null)elDrag.style.left=htParam.nX+"px";if(htParam.nY!==null)elDrag.style.top=htParam.nY+"px";this.fireEvent("drag",
htParam)}else htDragInfo.bIsDragging=false},
_onMouseUp:function(we){this._stopDragging(false);var htDragInfo=this._htDragInfo;htDragInfo.bHandleDown=
false;this.fireEvent("handleUp",{weEvent:we,elHandle:htDragInfo.elHandle,elDrag:htDragInfo.elDrag})},
_onDragStart:function(we){if(this._findDraggableElement(we.element))we.stop(jindo.$Event.CANCEL_DEFAULT)},
_onSelectStart:function(we){if(this.isDragging()||this._findDraggableElement(we.element))we.stop(jindo.$Event.CANCEL_DEFAULT)}}).extend(jindo.UIComponent);
jindo.Effect=function(fEffect){if(this instanceof arguments.callee)throw new Error("You can't create a instance of this");
var rxNumber=/^(\-?[0-9\.]+)(%|px|pt|em)?$/,rxRGB=/^rgb\(([0-9]+)\s?,\s?([0-9]+)\s?,\s?([0-9]+)\)$/i,
rxHex=/^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,rx3to6=/^#([0-9A-F])([0-9A-F])([0-9A-F])$/i;var getUnitAndValue=
function(v){var nValue=v,sUnit;if(rxNumber.test(v)){nValue=parseFloat(v);sUnit=RegExp.$2||""}else if(rxRGB.test(v)){nValue=
[parseInt(RegExp.$1,10),parseInt(RegExp.$2,10),parseInt(RegExp.$3,10)];sUnit="color"}else if(rxHex.test(v=
v.replace(rx3to6,"#$1$1$2$2$3$3"))){nValue=[parseInt(RegExp.$1,16),parseInt(RegExp.$2,16),parseInt(RegExp.$3,
16)];sUnit="color"}return{nValue:nValue,sUnit:sUnit}};
return function(nStart,nEnd){var sUnit;if(arguments.length>1){nStart=getUnitAndValue(nStart);nEnd=getUnitAndValue(nEnd);
sUnit=nEnd.sUnit}else{nEnd=getUnitAndValue(nStart);nStart=null;sUnit=nEnd.sUnit}if(nStart&&nEnd&&nStart.sUnit!=
nEnd.sUnit)throw new Error("unit error");nStart=nStart&&nStart.nValue;nEnd=nEnd&&nEnd.nValue;var fReturn=
function(p){var nValue=fEffect(p),getResult=function(s,d){return(d-s)*nValue+s+sUnit};
if(sUnit=="color"){var r=Math.max(0,Math.min(255,parseInt(getResult(nStart[0],nEnd[0]),10)))<<16;r|=Math.max(0,
Math.min(255,parseInt(getResult(nStart[1],nEnd[1]),10)))<<8;r|=Math.max(0,Math.min(255,parseInt(getResult(nStart[2],
nEnd[2]),10)));r=r.toString(16).toUpperCase();for(var i=0;6-r.length;i++)r="0"+r;return"#"+r}return getResult(nStart,
nEnd)};
if(nStart===null)fReturn.setStart=function(s){s=getUnitAndValue(s);if(s.sUnit!=sUnit)throw new Error("unit eror");
nStart=s.nValue};
return fReturn}};
jindo.Effect.linear=jindo.Effect(function(s){return s});
jindo.Effect.easeInSine=jindo.Effect(function(s){return s==1?1:-Math.cos(s*(Math.PI/2))+1});
jindo.Effect.easeOutSine=jindo.Effect(function(s){return Math.sin(s*(Math.PI/2))});
jindo.Effect.easeInOutSine=jindo.Effect(function(s){return s<.5?jindo.Effect.easeInSine(0,1)(2*s)*.5:
jindo.Effect.easeOutSine(0,1)(2*s-1)*.5+.5});
jindo.Effect.easeOutInSine=jindo.Effect(function(s){return s<.5?jindo.Effect.easeOutSine(0,1)(2*s)*.5:
jindo.Effect.easeInSine(0,1)(2*s-1)*.5+.5});
jindo.Effect.easeInQuad=jindo.Effect(function(s){return s*s});
jindo.Effect.easeOutQuad=jindo.Effect(function(s){return-(s*(s-2))});
jindo.Effect.easeInOutQuad=jindo.Effect(function(s){return s<.5?jindo.Effect.easeInQuad(0,1)(2*s)*.5:
jindo.Effect.easeOutQuad(0,1)(2*s-1)*.5+.5});
jindo.Effect.easeOutInQuad=jindo.Effect(function(s){return s<.5?jindo.Effect.easeOutQuad(0,1)(2*s)*.5:
jindo.Effect.easeInQuad(0,1)(2*s-1)*.5+.5});
jindo.Effect.easeInCubic=jindo.Effect(function(s){return Math.pow(s,3)});
jindo.Effect.easeOutCubic=jindo.Effect(function(s){return Math.pow(s-1,3)+1});
jindo.Effect.easeInOutCubic=jindo.Effect(function(s){return s<.5?jindo.Effect.easeIn(0,1)(2*s)*.5:jindo.Effect.easeOut(0,
1)(2*s-1)*.5+.5});
jindo.Effect.easeOutInCubic=jindo.Effect(function(s){return s<.5?jindo.Effect.easeOut(0,1)(2*s)*.5:jindo.Effect.easeIn(0,
1)(2*s-1)*.5+.5});
jindo.Effect.easeInQuart=jindo.Effect(function(s){return Math.pow(s,4)});
jindo.Effect.easeOutQuart=jindo.Effect(function(s){return-(Math.pow(s-1,4)-1)});
jindo.Effect.easeInOutQuart=jindo.Effect(function(s){return s<.5?jindo.Effect.easeInQuart(0,1)(2*s)*.5:
jindo.Effect.easeOutQuart(0,1)(2*s-1)*.5+.5});
jindo.Effect.easeOutInQuart=jindo.Effect(function(s){return s<.5?jindo.Effect.easeOutQuart(0,1)(2*s)*
.5:jindo.Effect.easeInQuart(0,1)(2*s-1)*.5+.5});
jindo.Effect.easeInQuint=jindo.Effect(function(s){return Math.pow(s,5)});
jindo.Effect.easeOutQuint=jindo.Effect(function(s){return Math.pow(s-1,5)+1});
jindo.Effect.easeInOutQuint=jindo.Effect(function(s){return s<.5?jindo.Effect.easeInQuint(0,1)(2*s)*.5:
jindo.Effect.easeOutQuint(0,1)(2*s-1)*.5+.5});
jindo.Effect.easeOutInQuint=jindo.Effect(function(s){return s<.5?jindo.Effect.easeOutQuint(0,1)(2*s)*
.5:jindo.Effect.easeInQuint(0,1)(2*s-1)*.5+.5});
jindo.Effect.easeInCircle=jindo.Effect(function(s){return-(Math.sqrt(1-s*s)-1)});
jindo.Effect.easeOutCircle=jindo.Effect(function(s){return Math.sqrt(1-(s-1)*(s-1))});
jindo.Effect.easeInOutCircle=jindo.Effect(function(s){return s<.5?jindo.Effect.easeInCircle(0,1)(2*s)*
.5:jindo.Effect.easeOutCircle(0,1)(2*s-1)*.5+.5});
jindo.Effect.easeOutInCircle=jindo.Effect(function(s){return s<.5?jindo.Effect.easeOutCircle(0,1)(2*s)*
.5:jindo.Effect.easeInCircle(0,1)(2*s-1)*.5+.5});
jindo.Effect.easeInBack=jindo.Effect(function(s){var n=1.70158;return s==1?1:s/1*(s/1)*((1+n)*s-n)});
jindo.Effect.easeOutBack=jindo.Effect(function(s){var n=1.70158;return s===0?0:(s=s/1-1)*s*((n+1)*s+n)+
1});
jindo.Effect.easeInOutBack=jindo.Effect(function(s){return s<.5?jindo.Effect.easeInBack(0,1)(2*s)*.5:
jindo.Effect.easeOutBack(0,1)(2*s-1)*.5+.5});
jindo.Effect.easeInElastic=jindo.Effect(function(s){var p=0,a=0,n;if(s===0)return 0;if((s/=1)==1)return 1;
if(!p)p=.3;if(!a||a<1){a=1;n=p/4}else n=p/(2*Math.PI)*Math.asin(1/a);return-(a*Math.pow(2,10*(s-=1))*
Math.sin((s-1)*(2*Math.PI)/p))});
jindo.Effect.easeOutElastic=jindo.Effect(function(s){var p=0,a=0,n;if(s===0)return 0;if((s/=1)==1)return 1;
if(!p)p=.3;if(!a||a<1){a=1;n=p/4}else n=p/(2*Math.PI)*Math.asin(1/a);return a*Math.pow(2,-10*s)*Math.sin((s-
n)*(2*Math.PI)/p)+1});
jindo.Effect.easeInOutElastic=jindo.Effect(function(s){var p=0,a=0,n;if(s===0)return 0;if((s/=1/2)==2)return 1;
if(!p)p=.3*1.5;if(!a||a<1){a=1;n=p/4}else n=p/(2*Math.PI)*Math.asin(1/a);if(s<1)return-.5*(a*Math.pow(2,
10*(s-=1))*Math.sin((s-n)*(2*Math.PI)/p));return a*Math.pow(2,-10*(s-=1))*Math.sin((s-n)*(2*Math.PI)/
p)*.5+1});
jindo.Effect.easeOutBounce=jindo.Effect(function(s){if(s<1/2.75)return 7.5625*s*s;else if(s<2/2.75)return 7.5625*
(s-=1.5/2.75)*s+.75;else if(s<2.5/2.75)return 7.5625*(s-=2.25/2.75)*s+.9375;else return 7.5625*(s-=2.625/
2.75)*s+.984375});
jindo.Effect.easeInBounce=jindo.Effect(function(s){return 1-jindo.Effect.easeOutBounce(0,1)(1-s)});
jindo.Effect.easeInOutBounce=jindo.Effect(function(s){return s<.5?jindo.Effect.easeInBounce(0,1)(2*s)*
.5:jindo.Effect.easeOutBounce(0,1)(2*s-1)*.5+.5});
jindo.Effect.easeInExpo=jindo.Effect(function(s){return s===0?0:Math.pow(2,10*(s-1))});
jindo.Effect.easeOutExpo=jindo.Effect(function(s){return s==1?1:-Math.pow(2,-10*s/1)+1});
jindo.Effect.easeInOutExpo=jindo.Effect(function(s){return s<.5?jindo.Effect.easeInExpo(0,1)(2*s)*.5:
jindo.Effect.easeOutExpo(0,1)(2*s-1)*.5+.5});
jindo.Effect.easeOutInExpo=jindo.Effect(function(s){return s<.5?jindo.Effect.easeOutExpo(0,1)(2*s)*.5:
jindo.Effect.easeInExpo(0,1)(2*s-1)*.5+.5});
jindo.Effect._cubicBezier=function(x1,y1,x2,y2){return function(t){var cx=3*x1,bx=3*(x2-x1)-cx,ax=1-cx-
bx,cy=3*y1,by=3*(y2-y1)-cy,ay=1-cy-by;function sampleCurveX(t){return((ax*t+bx)*t+cx)*t}
function sampleCurveY(t){return((ay*t+by)*t+cy)*t}
function sampleCurveDerivativeX(t){return(3*ax*t+2*bx)*t+cx}
function solveCurveX(x,epsilon){var t0,t1,t2,x2,d2,i;for(t2=x,i=0;i<8;i++){x2=sampleCurveX(t2)-x;if(Math.abs(x2)<
epsilon)return t2;d2=sampleCurveDerivativeX(t2);if(Math.abs(d2)<1E-6)break;t2=t2-x2/d2}t0=0;t1=1;t2=x;
if(t2<t0)return t0;if(t2>t1)return t1;while(t0<t1){x2=sampleCurveX(t2);if(Math.abs(x2-x)<epsilon)return t2;
if(x>x2)t0=t2;else t1=t2;t2=(t1-t0)*.5+t0}return t2}
return sampleCurveY(solveCurveX(t,1/200))}};
jindo.Effect.cubicBezier=function(x1,y1,x2,y2){return jindo.Effect(jindo.Effect._cubicBezier(x1,y1,x2,
y2))};
jindo.Effect.cubicEase=jindo.Effect.cubicBezier(.25,.1,.25,1);
jindo.Effect.cubicEaseIn=jindo.Effect.cubicBezier(.42,0,1,1);
jindo.Effect.cubicEaseOut=jindo.Effect.cubicBezier(0,0,.58,1);
jindo.Effect.cubicEaseInOut=jindo.Effect.cubicBezier(.42,0,.58,1);
jindo.Effect.cubicEaseOutIn=jindo.Effect.cubicBezier(0,.42,1,.58);
jindo.Effect.overphase=jindo.Effect(function(s){s/=.652785;return(Math.sqrt((2-s)*s)+.1*s).toFixed(5)});
jindo.Effect.sinusoidal=jindo.Effect(function(s){return-Math.cos(s*Math.PI)/2+.5});
jindo.Effect.mirror=jindo.Effect(function(s){return s<.5?jindo.Effect.sinusoidal(0,1)(s*2):jindo.Effect.sinusoidal(0,
1)(1-(s-.5)*2)});
jindo.Effect.pulse=function(nPulse){return jindo.Effect(function(s){return-Math.cos(s*(nPulse-.5)*2*Math.PI)/
2+.5})};
jindo.Effect.wave=function(nPeriod,nHeight){return jindo.Effect(function(s){return(nHeight||1)*Math.sin(nPeriod*
(s*360)*Math.PI/180).toFixed(5)})};
jindo.Effect.easeIn=jindo.Effect.easeInCubic;jindo.Effect.easeOut=jindo.Effect.easeOutCubic;
jindo.Effect.easeInOut=jindo.Effect.easeInOutCubic;jindo.Effect.easeOutIn=jindo.Effect.easeOutInCubic;
jindo.Effect.bounce=jindo.Effect.easeOutBounce;jindo.Effect.elastic=jindo.Effect.easeInElastic;
jindo.Timer=jindo.$Class({$init:function(){this._nTimer=null;this._nLatest=null;this._nRemained=0;this._nDelay=
null;this._fRun=null;this._bIsRunning=false},
start:function(fRun,nDelay){this.abort();this._nRemained=0;this._nDelay=nDelay;this._fRun=fRun;this._bIsRunning=
true;this._nLatest=this._getTime();this.fireEvent("wait");this._excute(this._nDelay,false);return true},
isRunning:function(){return this._bIsRunning},
_getTime:function(){return(new Date).getTime()},
_clearTimer:function(){var bFlag=false;if(this._nTimer){clearInterval(this._nTimer);this._bIsRunning=
false;bFlag=true}this._nTimer=null;return bFlag},
abort:function(){var bReturn=this._clearTimer();if(bReturn){this.fireEvent("abort");this._fRun=null}return bReturn},
pause:function(){var nPassed=this._getTime()-this._nLatest;this._nRemained=Math.max(this._nDelay-nPassed,
0);return this._clearTimer()},
_excute:function(nDelay,bResetDelay){var self=this;this._clearTimer();this._bIsRunning=true;var launcher=
function(bDontUseTimer){if(self._nTimer||bDontUseTimer){self.fireEvent("run");var r=self._fRun();self._nLatest=
self._getTime();if(!r){if(!bDontUseTimer)clearInterval(self._nTimer);self._nTimer=null;self._bIsRunning=
false;self.fireEvent("end");return}self.fireEvent("wait");if(bResetDelay||bDontUseTimer)self._excute(self._nDelay,
false)}};
if(nDelay>-1)this._nTimer=setInterval(launcher,nDelay);else launcher(true)},
resume:function(){if(!this._fRun||this.isRunning())return false;this._bIsRunning=true;this.fireEvent("wait");
this._excute(this._nRemained,true);this._nRemained=0;return true}}).extend(jindo.Component);
jindo.LayerManager=jindo.$Class({_bIsActivating:false,_bIsHiding:false,_bIsShowing:false,_aLink:null,
$init:function(el,htOption){this.option({sCheckEvent:"click",nCheckDelay:100,nShowDelay:0,nHideDelay:100});
this.option(htOption||{});this.setLayer(el);this._aLink=[];this._oShowTimer=new jindo.Timer;this._oHideTimer=
new jindo.Timer;this._oEventTimer=new jindo.Timer;this._wfOnEvent=jindo.$Fn(this._onEvent,this);this.getVisible();
this.activate()},
_onActivate:function(){this._wfOnEvent.attach(document,this.option("sCheckEvent"))},
_onDeactivate:function(){this._wfOnEvent.detach(document,this.option("sCheckEvent"))},
getVisible:function(){return this._wel.visible()},
_check:function(el){var wel=jindo.$Element(el);for(var i=0,elLink,welLink;elLink=this._aLink[i];i++){welLink=
jindo.$Element(elLink);if(welLink){elLink=welLink.$value();if(elLink&&(el==elLink||wel.isChildOf(elLink)))return true}}return false},
_find:function(el){for(var i=0,elLink;elLink=this._aLink[i];i++)if(elLink==el)return i;return-1},
getLayer:function(){return this._el},
setLayer:function(el){this._el=jindo.$(el);this._wel=jindo.$Element(el);return this},
getLinks:function(){return this._aLink},
setLinks:function(a){this._aLink=jindo.$A(a).unique().$value();return this},
link:function(vElement){if(arguments.length>1){for(var i=0,len=arguments.length;i<len;i++)this.link(arguments[i]);
return this}if(this._find(vElement)!=-1)return this;this._aLink.push(vElement);return this},
unlink:function(vElement){if(arguments.length>1){for(var i=0,len=arguments.length;i<len;i++)this.unlink(arguments[i]);
return this}var nIndex=this._find(vElement);if(nIndex>-1)this._aLink.splice(nIndex,1);return this},
_fireEventBeforeShow:function(){return this.fireEvent("beforeShow",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()})},
_fireEventShow:function(){this._bIsShowing=false;this.fireEvent("show",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()})},
_fireEventBeforeHide:function(){var bRet=this.fireEvent("beforeHide",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()});
if(!bRet)this._bIsHiding=false;return bRet},
_fireEventHide:function(){this._bIsHiding=false;this.fireEvent("hide",{elLayer:this.getLayer(),aLinkedElement:this.getLinks()})},
_show:function(fShow,nDelay){var self=this;this._oEventTimer.abort();this._bIsShowing=true;this._bIsHiding=
false;if(nDelay<=0)self._oHideTimer.abort();this._oShowTimer.start(function(){fShow()},nDelay)},
_hide:function(fHide,nDelay){var self=this;this._bIsShowing=false;this._bIsHiding=true;if(nDelay<=0)self._oShowTimer.abort();
this._oHideTimer.start(function(){fHide()},nDelay)},
show:function(nDelay){if(typeof nDelay=="undefined")nDelay=this.option("nShowDelay");var self=this;this._show(function(){if(!self.getVisible())if(self._fireEventBeforeShow()){self._wel.show();
self._fireEventShow()}},nDelay);
return this},
hide:function(nDelay){if(typeof nDelay=="undefined")nDelay=this.option("nHideDelay");var self=this;this._hide(function(){if(self.getVisible())if(self._fireEventBeforeHide()){self._wel.hide();
self._fireEventHide()}},nDelay);
return this},
toggle:function(nDelay){if(!this.getVisible()||this._bIsHiding)this.show(nDelay||this.option("nShowDelay"));
else this.hide(nDelay||this.option("nHideDelay"));return this},
_onEvent:function(we){var el=we.element,self=this;this._oEventTimer.start(function(){if(!self._bIsHiding&&
self.getVisible())if(self._check(el)){if(!self._bIsShowing){self.fireEvent("ignore",{sCheckEvent:self.option("sCheckEvent")});
self._oHideTimer.abort();self._bIsHiding=false}}else if(typeof el.tagName!="undefined")self.hide()},this.option("nCheckDelay"))}}).extend(jindo.UIComponent);
jindo.LayerPosition=jindo.$Class({$init:function(el,elLayer,htOption){this.option({sPosition:"outside-bottom",
sAlign:"left",sValign:"",nTop:0,nLeft:0,bAuto:false});this.option(htOption||{});this.setElement(el);if(elLayer)this.setLayer(elLayer);
if(el&&elLayer)this.setPosition();this._wfSetPosition=jindo.$Fn(function(){var el=this._elLayer;if(el&&
this._welLayer.visible())if(this.fireEvent("beforeAdjust",{elLayer:el,htCurrentPosition:this.getCurrentPosition(),
htAdjustedPosition:this._adjustPosition(this.getCurrentPosition())})){this.setPosition();this.fireEvent("adjust",
{elLayer:el,htCurrentPosition:this.getCurrentPosition()})}},this);
if(this.option("bAuto"))this._wfSetPosition.attach(window,"scroll").attach(window,"resize")},
getElement:function(){return this._el},
setElement:function(el){this._wel=this._el=jindo.$(el);if(this._el)this._wel=jindo.$Element(el);return this},
getLayer:function(){return this._elLayer},
setLayer:function(elLayer){this._elLayer=jindo.$(elLayer);this._welLayer=jindo.$Element(elLayer);if(this._elLayer.parentNode!=
document.body)document.body.appendChild(this._elLayer);return this},
_isPosition:function(htOption,sWord){if(htOption.sPosition.indexOf(sWord)>-1)return true;return false},
_setLeftRight:function(htOption,htPosition){var el=this.getElement(),elLayer=this.getLayer(),nWidth=el.offsetWidth,
nLayerWidth=elLayer.offsetWidth;if(el==document.body)nWidth=jindo.$Document().clientSize().width;var bLeft=
this._isPosition(htOption,"left"),bRight=this._isPosition(htOption,"right"),bInside=this._isPosition(htOption,
"inside");if(bLeft)if(bInside)htPosition.nLeft+=htOption.nLeft;else{htPosition.nLeft-=nLayerWidth;htPosition.nLeft-=
htOption.nLeft}else if(bRight){htPosition.nLeft+=nWidth;if(bInside){htPosition.nLeft-=nLayerWidth;htPosition.nLeft-=
htOption.nLeft}else htPosition.nLeft+=htOption.nLeft}else{if(htOption.sAlign=="left")htPosition.nLeft+=
htOption.nLeft;if(htOption.sAlign=="center")htPosition.nLeft+=(nWidth-nLayerWidth)/2;if(htOption.sAlign==
"right"){htPosition.nLeft+=nWidth-nLayerWidth;htPosition.nLeft-=htOption.nLeft}}return htPosition},
_setVerticalAlign:function(htOption,htPosition){var el=this.getElement(),elLayer=this.getLayer(),nHeight=
el.offsetHeight,nLayerHeight=elLayer.offsetHeight;if(el==document.body)nHeight=jindo.$Document().clientSize().height;
switch(htOption.sValign){case "top":htPosition.nTop+=htOption.nTop;break;case "middle":htPosition.nTop+=
(nHeight-nLayerHeight)/2;break;case "bottom":htPosition.nTop+=nHeight-nLayerHeight-htOption.nTop;break}return htPosition},
_adjustScrollPosition:function(htPosition){if(this.getElement()==document.body){var htScrollPosition=
jindo.$Document().scrollPosition();htPosition.nTop+=htScrollPosition.top;htPosition.nLeft+=htScrollPosition.left}return htPosition},
getPosition:function(htOption){if(typeof htOption!="object")htOption=this.option();if(typeof htOption.nTop==
"undefined")htOption.nTop=0;if(typeof htOption.nLeft=="undefined")htOption.nLeft=0;var sArea,bCenter=
this._isPosition(htOption,"center"),bInside=this._isPosition(htOption,"inside"),bTop=this._isPosition(htOption,
"top"),bBottom=this._isPosition(htOption,"bottom"),bLeft=this._isPosition(htOption,"left"),bRight=this._isPosition(htOption,
"right");if(bLeft)sArea="left";if(bRight)sArea="right";if(bTop)sArea="top";if(bBottom)sArea="bottom";
if(bCenter)sArea="center";var el=this.getElement(),wel=jindo.$Element(el),elLayer=this.getLayer(),welLayer=
jindo.$Element(elLayer),htElementPosition=wel.offset(),nWidth=el.offsetWidth,nHeight=el.offsetHeight,
oClientSize,nLayerWidth=elLayer.offsetWidth,nLayerHeight=elLayer.offsetHeight,htPosition={nTop:htElementPosition.top,
nLeft:htElementPosition.left};if(el==document.body){oClientSize=jindo.$Document().clientSize();nWidth=
oClientSize.width;nHeight=oClientSize.height}nLayerWidth+=parseInt(welLayer.css("marginLeft"),10)+parseInt(welLayer.css("marginRight"),
10)||0;nLayerHeight+=parseInt(welLayer.css("marginTop"),10)+parseInt(welLayer.css("marginBottom"),10)||
0;switch(sArea){case "center":htPosition.nTop+=(nHeight-nLayerHeight)/2;htPosition.nTop+=htOption.nTop;
htPosition.nLeft+=(nWidth-nLayerWidth)/2;htPosition.nLeft+=htOption.nLeft;break;case "top":if(bInside)htPosition.nTop+=
htOption.nTop;else htPosition.nTop-=htOption.nTop+nLayerHeight;htPosition=this._setLeftRight(htOption,
htPosition);break;case "bottom":htPosition.nTop+=nHeight;if(bInside)htPosition.nTop-=htOption.nTop+nLayerHeight;
else htPosition.nTop+=htOption.nTop;htPosition=this._setLeftRight(htOption,htPosition);break;case "left":if(bInside)htPosition.nLeft+=
htOption.nLeft;else htPosition.nLeft-=htOption.nLeft+nLayerWidth;htPosition=this._setVerticalAlign(htOption,
htPosition);break;case "right":htPosition.nLeft+=nWidth;if(bInside)htPosition.nLeft-=htOption.nLeft+nLayerWidth;
else htPosition.nLeft+=htOption.nLeft;htPosition=this._setVerticalAlign(htOption,htPosition);break}htPosition=
this._adjustScrollPosition(htPosition);if(jindo.$Agent().navigator().ie&&jindo.$Agent().navigator().version<
8&&window.external)try{var bHasFrameBorder=window!=top&&window.frameElement&&!window.frameElement.frameBorder;
if(bHasFrameBorder){htPosition.nLeft-=2;htPosition.nTop-=2}}catch(e){}return htPosition},
setPosition:function(htPosition){var welLayer=jindo.$Element(this.getLayer()),bVisible=welLayer.visible();
if(!bVisible)welLayer.show();welLayer.css("left","-9999px").css("top","0px");if(typeof htPosition=="undefined")htPosition=
this.getPosition();if(this.option("bAuto"))htPosition=this._adjustPosition(htPosition);welLayer.css("left",
htPosition.nLeft+"px").css("top",htPosition.nTop+"px");if(!bVisible)welLayer.hide();return this},
getCurrentPosition:function(){var welLayer=jindo.$Element(this.getLayer());return{nTop:parseInt(welLayer.css("top"),
10),nLeft:parseInt(welLayer.css("left"),10)}},
_isFullyVisible:function(htPosition){var elLayer=this.getLayer(),welLayer=jindo.$Element(elLayer),oScrollPosition=
jindo.$Document().scrollPosition(),nScrollTop=oScrollPosition.top,nScrollLeft=oScrollPosition.left,oClientSize=
jindo.$Document().clientSize(),nLayerWidth=elLayer.offsetWidth+(parseInt(welLayer.css("marginLeft"),10)+
parseInt(welLayer.css("marginRight"),10)||0),nLayerHeight=elLayer.offsetHeight+(parseInt(welLayer.css("marginTop"),
10)+parseInt(welLayer.css("marginBottom"),10)||0);if(htPosition.nLeft>=0&&htPosition.nTop>=0&&oClientSize.width>=
htPosition.nLeft-nScrollLeft+nLayerWidth&&oClientSize.height>=htPosition.nTop-nScrollTop+nLayerHeight)return true;
return false},
_mirrorHorizontal:function(htOption){if(htOption.sAlign=="center"||htOption.sPosition=="inside-center")return htOption;
var htConvertedOption={};for(var i in htOption)htConvertedOption[i]=htOption[i];if(this._isPosition(htConvertedOption,
"right"))htConvertedOption.sPosition=htConvertedOption.sPosition.replace(/right/,"left");else if(this._isPosition(htConvertedOption,
"left"))htConvertedOption.sPosition=htConvertedOption.sPosition.replace(/left/,"right");else if(htConvertedOption.sAlign==
"right")htConvertedOption.sAlign="left";else if(htConvertedOption.sAlign=="left")htConvertedOption.sAlign=
"right";return htConvertedOption},
_mirrorVertical:function(htOption){if(htOption.sValign=="middle"||htOption.sPosition=="inside-center")return htOption;
var htConvertedOption={};for(var i in htOption)htConvertedOption[i]=htOption[i];if(this._isPosition(htConvertedOption,
"top"))htConvertedOption.sPosition=htConvertedOption.sPosition.replace(/top/,"bottom");else if(this._isPosition(htConvertedOption,
"bottom"))htConvertedOption.sPosition=htConvertedOption.sPosition.replace(/bottom/,"top");else if(htConvertedOption.sValign==
"top")htConvertedOption.sValign="bottom";else if(htConvertedOption.sValign=="bottom")htConvertedOption.sValign=
"top";return htConvertedOption},
_adjustPosition:function(htPosition){var htOption=this.option(),aCandidatePosition=[];aCandidatePosition.push(htPosition);
aCandidatePosition.push(this.getPosition(this._mirrorHorizontal(htOption)));aCandidatePosition.push(this.getPosition(this._mirrorVertical(htOption)));
aCandidatePosition.push(this.getPosition(this._mirrorVertical(this._mirrorHorizontal(htOption))));for(var i=
0,htCandidatePosition;htCandidatePosition=aCandidatePosition[i];i++)if(this._isFullyVisible(htCandidatePosition)){htPosition=
htCandidatePosition;break}return htPosition}}).extend(jindo.Component);
jindo.RolloverClick=jindo.$Class({$init:function(el,htOption){this.option({bActivateOnload:true,sCheckEvent:"click",
bCheckDblClick:false,RolloverArea:{sClassName:"rollover",sClassPrefix:"rollover-",bCheckMouseDown:false,
bActivateOnload:false,htStatus:{sOver:"over",sDown:"down"}}});this.option(htOption||{});var self=this;
this._oRolloverArea=(new jindo.RolloverArea(el,this.option("RolloverArea"))).attach({over:function(oCustomEvent){if(!self.fireEvent("over",
oCustomEvent))oCustomEvent.stop()},
out:function(oCustomEvent){if(!self.fireEvent("out",oCustomEvent))oCustomEvent.stop()}});
this._wfClick=jindo.$Fn(this._onClick,this);this._wfDblClick=jindo.$Fn(this._onClick,this);if(this.option("bActivateOnload"))this.activate()},
_onClick:function(we){var elRollover=we.element,sType="click";if(we.type=="dblclick")sType=we.type;while(elRollover=
this._oRolloverArea._findRollover(elRollover)){this.fireEvent(sType,{element:elRollover,htStatus:this._oRolloverArea.option("htStatus"),
weEvent:we});elRollover=elRollover.parentNode}},
_onActivate:function(){this._wfClick.attach(this._oRolloverArea._elArea,this.option("sCheckEvent"));if(this.option("bCheckDblClick"))this._wfDblClick.attach(this._oRolloverArea._elArea,
"dblclick");this._oRolloverArea.activate()},
_onDeactivate:function(){this._wfClick.detach(this._oRolloverArea._elArea,this.option("sCheckEvent"));
this._wfDblClick.detach(this._oRolloverArea._elArea,"dblclick");this._oRolloverArea.deactivate()}}).extend(jindo.UIComponent);
jindo.AjaxHistory=jindo.$Class({_htEventHandler:{},_htHistoryData:{},_oAgent:null,_welIFrame:null,_nIntervalId:0,
_sCheckType:"",_sComponentId:"",$static:{checkIFrameChange:function(oLocation){var htQueryString=jindo.$S(oLocation.search.substring(1)).parseString();
this.getInstance()[0]._checkLocationChange(encodeURIComponent(htQueryString.hash))}},
$init:function(htOption){this._oAgent=jindo.$Agent().navigator();this._sComponentId="AjaxHistory"+(new Date).getTime();
this.option({sIFrameUrl:"history.html",nCheckInterval:100});this.option(htOption||{})},
initialize:function(){var sHash=this._getLocationHash();if(this._oAgent.ie&&(document.documentMode||this._oAgent.version)>=
8&&jindo.$Document().renderingMode()=="Standards"||this._oAgent.firefox&&this._oAgent.version>=3.6||this._oAgent.chrome&&
this._oAgent.version>3||this._oAgent.safari&&this._oAgent.version>=5||this._oAgent.opera&&this._oAgent.version>=
10.6){this._htEventHandler["hashchange"]=jindo.$Fn(this._checkLocationChange,this).attach(window,"hashchange");
this._sCheckType="hashchangeevent"}else if(this._oAgent.ie){this._welIFrame=jindo.$Element("\x3cIFRAME\x3e");
this._welIFrame.hide();this._welIFrame.appendTo(document.body);this._sCheckType="iframe"}else{this._nIntervalId=
setInterval(jindo.$Fn(this._checkLocationChange,this).bind(),this.option("nCheckInterval"));this._sCheckType=
"setinterval"}if(sHash&&sHash!="%7B%7D")if(this._sCheckType=="iframe")this._welIFrame.$value().src=this.option("sIFrameUrl")+
"?hash\x3d"+sHash;else{this._htHistoryData=this._getDecodedData(sHash);this.fireEvent("change",{htHistoryData:this._htHistoryData})}else{var that=
this;if(this._oAgent.ie&&(document.documentMode||this._oAgent.version)<8){var ifr=this._welIFrame.$value();
ifr.onreadystatechange=function(){if(ifr.readyState=="complete"){that.fireEvent("load");ifr.onreadystatechange=
function(){}}};
ifr.src=this.option("sIFrameUrl")}else setTimeout(function(){that.fireEvent("load")},0)}return this},
getComponentId:function(){return this._sComponentId},
_getLocationHash:function(){return this._oAgent.firefox?encodeURIComponent(location.hash.substring(1)):
location.hash.substring(1)||"%7B%7D"},
_setLocationHash:function(sHash){location.hash=sHash=="%7B%7D"?"":sHash},
addHistory:function(htHistoryData){if(htHistoryData&&typeof htHistoryData=="object"&&jindo.$H(htHistoryData).length()>
0){this._htHistoryData=jindo.$Json(jindo.$Json(htHistoryData).toString()).toObject();var sHash=this._getEncodedData(htHistoryData);
if(this._getLocationHash()!=sHash){this._setLocationHash(sHash);if(this._sCheckType=="iframe")this._welIFrame.$value().src=
this.option("sIFrameUrl")+"?hash\x3d"+sHash;return true}else return false}else return false},
_checkLocationChange:function(sHash){sHash=sHash=="undefined"?"%7B%7D":sHash;sHash=sHash&&typeof sHash==
"string"?sHash:this._getLocationHash();var htCurrentHistoryData=this._getDecodedData(sHash);if(!this._compareData(this._htHistoryData,
htCurrentHistoryData)){this._htHistoryData=htCurrentHistoryData;if(this._sCheckType=="iframe")this._setLocationHash(sHash);
this.fireEvent("change",{htHistoryData:this._htHistoryData})}},
_getEncodedData:function(htHistoryData){if(htHistoryData)if(typeof JSON=="object"&&typeof JSON.stringify==
"function")return encodeURIComponent(JSON.stringify(htHistoryData));else return encodeURIComponent(jindo.$Json(htHistoryData).toString());
else return""},
_getDecodedData:function(sEncodedHash){try{if(sEncodedHash){var sHashString=decodeURIComponent(sEncodedHash);
if(typeof JSON=="object"&&typeof JSON.parse=="function")return JSON.parse(sHashString);else return jindo.$Json(sHashString).toObject()}}catch(e){}return{}},
_compareData:function(htBase,htComparison){if(!htBase||!htComparison)return false;var wBase=htBase instanceof
Array?jindo.$A(htBase):jindo.$H(htBase);var wComparison=htComparison instanceof Array?jindo.$A(htComparison):
jindo.$H(htComparison);if(wBase.length()!=wComparison.length())return false;var bRet=true;var fpCallee=
arguments.callee;wBase.forEach(function(v,k){if(typeof v=="object"){if(!fpCallee(v,htComparison[k])){bRet=
false;return}}else if(v!=htComparison[k]){bRet=false;return}});
return bRet},
destroy:function(){if(this._sCheckType=="hashchangeevent")this._htEventHandler["hashchange"].detach(window,
"hashchange");else if(this._sCheckType=="iframe")this._welIFrame.leave();else clearInterval(this._nIntervalId);
this._htEventHandler=null;this._htHistoryData=null;this._oAgent=null;this._welIFrame=null;this._nIntervalId=
null;this._sCheckType=null;this._sComponentId=null}}).extend(jindo.Component);
jindo.Rolling=jindo.$Class({_oTransition:null,$init:function(el,htOption){this._el=jindo.$(el);this._elList=
jindo.$$.test(this._el,"ul, ol")?this._el:jindo.$$.getSingle("\x3e ul, \x3e ol",el);this.option({nFPS:50,
nDuration:800,sDirection:"horizontal",fEffect:jindo.Effect.linear});this.option(htOption||{});this._oKeys=
this.option("sDirection")=="horizontal"?{offsetWidth:"offsetWidth",marginLeft:"marginLeft",marginRight:"marginRight",
clientWidth:"clientWidth",scrollLeft:"scrollLeft"}:{offsetWidth:"offsetHeight",marginLeft:"marginTop",
marginRight:"marginBottom",clientWidth:"clientHeight",scrollLeft:"scrollTop"};this._initTransition()},
_initTransition:function(){var self=this;this._oTransition=(new jindo.Transition).fps(this.option("nFPS")).attach({end:function(oCustomEvent){self.fireEvent("afterMove",
{nIndex:self.getIndex()})}})},
getTransition:function(){return this._oTransition},
getList:function(){return this._elList},
getItems:function(){return jindo.$$("\x3e li",this._elList)},
_offsetSize:function(el){var eEl=jindo.$Element(el),oKeys=this._oKeys,nMarginLeft=parseInt(eEl.css(oKeys.marginLeft),
10)||0,nMarginRight=parseInt(eEl.css(oKeys.marginRight),10)||0;return el[oKeys.offsetWidth]+nMarginLeft+
nMarginRight},
getIndex:function(){if(this.isMoving())return this._nMoveTo;var el=this._el,oKeys=this._oKeys,nScroll=
el[oKeys.scrollLeft],aItems=this.getItems(),nSize=0,n=0,nMinDistance=99999999;for(var i=0;i<aItems.length;i++){var nDistance=
Math.abs(nScroll-nSize);if(nDistance<nMinDistance){nMinDistance=nDistance;n=i}nSize+=this._offsetSize(aItems[i])}return n},
_getPosition:function(n){var el=this._el,oKeys=this._oKeys,aItems=this.getItems(),nPos=0,nSize=this._getSize();
for(var i=0;i<n;i++)nPos+=this._offsetSize(aItems[i]);if(nPos+el[oKeys.clientWidth]>nSize)nPos=nSize-
el[oKeys.clientWidth];return nPos},
_getSize:function(){var aItems=this.getItems(),nSize=0;for(var i=0;i<aItems.length;i++)nSize+=this._offsetSize(aItems[i]);
return this._nSize=nSize},
_move:function(n){var el=this._el,oKeys=this._oKeys,aItems=this.getItems(),nPos=this._getPosition(n),
nSize=this._getSize();var htParam={element:el,nIndex:n,nScroll:nPos};if(this.fireEvent("beforeMove",htParam)&&
el[oKeys.scrollLeft]!=htParam.nScroll){var htDest={};htDest[oKeys.scrollLeft]=this.option("fEffect")(htParam.nScroll);
this._nMoveTo=n;this.getTransition().abort().start(this.option("nDuration"),htParam.element,htDest);return true}return false},
moveTo:function(n){n=Math.min(n,this.getItems().length-1);n=Math.max(n,0);return this._move(n)},
moveLastTo:function(n){return this.moveTo(this.getItems().length-1-n)},
moveBy:function(n){return this.moveTo(this.getIndex()+n)},
isMoving:function(){return this._oTransition.isPlaying()},
isOverflowed:function(){return this._getSize()>this._el[this._oKeys.clientWidth]},
getDisplayedItemCount:function(){var nDisplayed=0,aItems=this.getItems(),nPos=0;for(var i=0;i<aItems.length;i++){nPos+=
this._offsetSize(aItems[i]);if(nPos<=this._el[this._oKeys.clientWidth])nDisplayed++;else break}return nDisplayed}}).extend(jindo.Component);
jindo.CircularRolling=jindo.$Class({$init:function(){this.refresh()},
refresh:function(){this.getTransition().abort();this._el[this._oKeys.scrollLeft]=0;this._nDuplicateCount=
0;this._nItemCount=this.getItems().length;this._nDisplayedCount=this.getDisplayedItemCount();if(this.isOverflowed()){this._nDuplicateCount=
this._nDisplayedCount<=this._nItemCount/2?1:2;this._duplicate(this._nDuplicateCount)}return this},
_duplicate:function(n){var elList=this._elList,elDuplicatedList=jindo.$("\x3c"+elList.tagName+"\x3e"),
sListInnerHTML=elList.innerHTML,aItem;var sItemClassQuery="\x3e"+(this._bUsedClassPrefix?"."+this.option("sClassPrefix")+
"item":"li");for(var i=0;i<n;i++){elDuplicatedList.innerHTML=sListInnerHTML;aItem=jindo.$$(sItemClassQuery,
elDuplicatedList);for(var j=0;j<aItem.length;j++)elList.appendChild(aItem[j])}},
_setStartPosition:function(n,nTo){var oKeys=this._oKeys;var nNewPosition=n%this._nItemCount||0;if(n+nTo<
0){var nTimes=this._nDuplicateCount;if(nNewPosition+this._nDisplayedCount>this._nItemCount)nTimes-=1;
nNewPosition+=this._nItemCount*nTimes}this._el[oKeys.scrollLeft]=this._getPosition(nNewPosition)},
moveBy:function(n){if(this.isMoving())return false;var bBig=n>=this._nItemCount;n=n%this._nItemCount;
if(bBig)n+=this._nItemCount;this._setStartPosition(this.getIndex(),n);var nTarget=this.getIndex()+n;if(!this._move(nTarget))return false;
return true}}).extend(jindo.Rolling);
jindo.TabControl=jindo.$Class({_bIsActivating:false,_nCurrentIndex:null,_welSelectedTab:null,_welSelectedPanel:null,
$init:function(el,htOption){var htDefaultOption={sClassPrefix:"tc-",sCheckEvent:"click",bActivateOnload:true};
this.option(htDefaultOption);this.option(htOption||{});this._el=jindo.$(el);this._wfEventTab=jindo.$Fn(this._onEventTab,
this);this._assignHTMLElements();if(this.option("bActivateOnload")){this._selectTab(this._elSelectedTab);
this.activate()}},
_assignHTMLElements:function(){var sPrefix=this.option("sClassPrefix"),el=this._el;this._aTab=jindo.$$("."+
sPrefix+"tab",el);this._aPanel=jindo.$$("."+sPrefix+"panel",el);this._elSelectedTab=jindo.$$.getSingle("."+
sPrefix+"tab."+sPrefix+"selected",el)||this.getTab(0);this._waTab=jindo.$A(this._aTab)},
getTab:function(n){return this.getTabs()[n]},
getTabs:function(){return this._aTab},
getPanel:function(n){return this.getPanels()[n]},
getPanels:function(){return this._aPanel},
selectTab:function(n,bFireEvent){if(typeof bFireEvent=="undefined")bFireEvent=true;this._selectTab(this.getTab(n),
bFireEvent)},
getIndex:function(elTab){return this._waTab.indexOf(elTab)},
getCurrentIndex:function(){return this._nCurrentIndex},
_selectTab:function(elTab,bFireEvent){if(typeof bFireEvent=="undefined")bFireEvent=true;var sPrefix=this.option("sClassPrefix"),
nIndex=this.getIndex(elTab),elPanel=this.getPanel(nIndex);if(bFireEvent)if(!this.fireEvent("beforeSelect",
{nIndex:nIndex,elTab:elTab,elPanel:elPanel}))return;var welTab=jindo.$Element(elTab);if(this._welSelectedTab)this._welSelectedTab.removeClass(sPrefix+
"selected");this._welSelectedTab=welTab;welTab.addClass(sPrefix+"selected");var welPanel=jindo.$Element(elPanel);
if(this._welSelectedPanel)this._welSelectedPanel.removeClass(sPrefix+"selected");this._welSelectedPanel=
welPanel;welPanel.addClass(sPrefix+"selected");this._nCurrentIndex=nIndex;if(bFireEvent)this.fireEvent("select",
{nIndex:nIndex,elTab:elTab,elPanel:elPanel})},
getBaseElement:function(){return this._el},
_onActivate:function(){jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._el).preventTapHighlight(true);
this._wfEventTab.attach(this._el,this.option("sCheckEvent"))},
_onDeactivate:function(){jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this._el).preventTapHighlight(false);
this._wfEventTab.detach(this._el,this.option("sCheckEvent"))},
_onEventTab:function(we){if(this.fireEvent(we.type,{weEvent:we})){var sPrefix=this.option("sClassPrefix"),
el=we.element,elTab=jindo.$$.test(el,"."+sPrefix+"tab")?el:jindo.$$.getSingle("! ."+sPrefix+"tab",el);
if(elTab)this._selectTab(elTab)}}}).extend(jindo.UIComponent);
jindo.WatchInput=jindo.$Class({_bTimerRunning:false,_bFocused:false,_sPrevValue:"",$init:function(sInputId,
htOption){var htDefaultOption={nInterval:100,bUseTimerOnIE:false,sKeyEvent:"keyup",bPermanent:false,bActivateOnload:true};
this.option(htDefaultOption);this.option(htOption||{});this._elInput=jindo.$(sInputId);this._oTimer=new jindo.Timer;
this._bIE=jindo.$Agent().navigator().ie;this._wfFocus=jindo.$Fn(this._onFocus,this);this._wfBlur=jindo.$Fn(this._onBlur,
this);this._wfKeyEvent=jindo.$Fn(this._onKeyEvent,this);this._wfStartTimer=jindo.$Fn(this._startTimer,
this);this._wfStopTimer=jindo.$Fn(this._stopTimer,this);if(this.option("bActivateOnload"))this.activate(true)},
getInput:function(){return this._elInput},
setInputValue:function(s){this.getInput().value=s;this.setCompareValue(s);return this},
getCompareValue:function(){return this._sPrevValue},
setCompareValue:function(s){this._sPrevValue=s;return this},
fireChangeEvent:function(){var elInput=this.getInput(),sValue=elInput.value;this.setCompareValue(sValue);
this.fireEvent("change",{elInput:elInput,sText:sValue});return this},
start:function(bCompareOnce){return this.activate(bCompareOnce||false)},
stop:function(){return this.deactivate()},
_onActivate:function(bCompareOnce){this.setCompareValue("");var elInput=this.getInput();this._wfFocus.attach(elInput,
"focus");if(this._bIE&&!this.option("bUseTimerOnIE")){this.fireEvent("start");this._wfKeyEvent.attach(elInput,
this.option("sKeyEvent"))}else{if(this._isTimerRunning())return;this.fireEvent("start");if(this.option("bPermanent"))this._startTimer();
else{this._wfStartTimer.attach(elInput,"focus");this._wfStopTimer.attach(elInput,"blur")}}this._wfBlur.attach(elInput,
"blur");if(bCompareOnce||false)this.compare()},
_onDeactivate:function(){var elInput=this.getInput();this._wfFocus.detach(elInput,"focus");this._wfKeyEvent.detach(elInput,
this.option("sKeyEvent"));this._stopTimer();this._wfStartTimer.detach(elInput,"focus");this._wfStopTimer.detach(elInput,
"blur");this._wfBlur.detach(elInput,"blur");this.fireEvent("stop")},
getInterval:function(){return this.option("nInterval")},
setInterval:function(n){this.option("nInterval",n);return this},
_isTimerRunning:function(){return this._bTimerRunning},
_startTimer:function(){if(this._isTimerRunning())return;this._bTimerRunning=true;this.fireEvent("timerStart");
this.compare();var self=this;this._oTimer.start(function(){self.compare();return true},this.getInterval())},
_stopTimer:function(){if(this._isTimerRunning()){this._oTimer.abort();this._bTimerRunning=false;this.compare();
this.fireEvent("timerStop")}},
_onKeyEvent:function(){this.compare()},
_onFocus:function(){this._bFocused=true;this.fireEvent("focus")},
_onBlur:function(){this._bFocused=false;this.fireEvent("blur")},
compare:function(){if(this.getInput().value!=this.getCompareValue())this.fireChangeEvent();return this}}).extend(jindo.UIComponent);
jindo.ScrollBox=(new jindo.$Class({$init:function(el,htOption){this.option({sClassPrefix:"scrollbar-",
bActivateOnload:true,sOverflowX:"auto",sOverflowY:"auto",bAdjustThumbSize:true,nMinThumbSize:50,nDelta:16});
this.option(htOption||{});this._el=jindo.$(el);if(this.option("bActivateOnload")){this.activate();this.reset()}},
reset:function(){this._autoToggleScrollBar();var oStatusH=this.hasScrollBarHorizontal();var oStatusV=
this.hasScrollBarVertical();this._adjustBoxSize();this._adjustContentSize();this._autoToggleScrollBar();
if(oStatusH!=this.hasScrollBarHorizontal()||oStatusV!=this.hasScrollBarVertical()){this._adjustBoxSize();
this._adjustContentSize()}this._autoToggleAvailability();this._adjustTrackSize();this._adjustThumbSize();
this.$super.reset()},
_onActivate:function(){this.$super._onActivate();this.reset()},
_onDeactivate:function(){this.$super._onDeactivate();this._adjustBoxSize()},
setSize:function(nWidth,nHeight){if(nWidth)jindo.$Element(this._el).css("width",nWidth+"px");if(nHeight)jindo.$Element(this._el).css("height",
nHeight+"px");this.setBoxSize(nWidth,nHeight);this._oBoxSize={nWidth:jindo.$Element(this._elBox).width(),
nHeight:jindo.$Element(this._elBox).height()};this.reset()},
getContentSize:function(){var welContent=jindo.$Element(this._elContent);return{nWidth:parseInt(welContent.width(),
10),nHeight:parseInt(welContent.height(),10)}},
setContentSize:function(nWidth,nHeight){var welContent=jindo.$Element(this._elContent);if(nWidth)if(nWidth==
Infinity)welContent.css("width","");else welContent.css("width",nWidth+"px");if(nHeight)if(nHeight==Infinity)welContent.css("height",
"auto");else welContent.css("height",nHeight+"px");this.$super.reset()},
getBoxSize:function(){var welBox=jindo.$Element(this._elBox);return{nWidth:parseInt(welBox.width(),10),
nHeight:parseInt(welBox.height(),10)}},
setBoxSize:function(nWidth,nHeight){var welBox=jindo.$Element(this._elBox);if(nWidth)welBox.css("width",
nWidth+"px");if(nHeight)welBox.css("height",nHeight+"px");this.$super.reset()},
getTrackSize:function(ht){if(!ht.elScrollBar)return{nWidth:0,nHeight:0};var welTrack=jindo.$Element(ht.elTrack);
return{nWidth:parseInt(welTrack.width(),10),nHeight:parseInt(welTrack.height(),10)}},
setTrackSize:function(o,nWidth,nHeight){var welTrack=jindo.$Element(o.elTrack);if(nWidth)welTrack.css("width",
nWidth+"px");if(nHeight)welTrack.css("height",nHeight+"px")},
isNeededScrollBarHorizontal:function(){if(this.option("sOverflowX")=="scroll")return true;var oContentSize=
this.getContentSize();var oBoxSize=this.getDefaultBoxSize();if(this.getScrollBarHorizontal().elScrollBar&&
this.option("sOverflowX")!="hidden"){if(this.hasScrollBarVertical())if(oContentSize.nWidth>oBoxSize.nWidth-
jindo.$Element(this.getScrollBarVertical().elScrollBar).width())return true;if(oContentSize.nWidth>oBoxSize.nWidth)return true}return false},
isNeededScrollBarVertical:function(){if(this.option("sOverflowY")=="scroll")return true;var oContentSize=
this.getContentSize();var oBoxSize=this.getDefaultBoxSize();if(this.getScrollBarVertical().elScrollBar&&
this.option("sOverflowY")!="hidden"){if(this.hasScrollBarHorizontal())if(oContentSize.nHeight>oBoxSize.nHeight-
jindo.$Element(this.getScrollBarHorizontal().elScrollBar).height())return true;if(oContentSize.nHeight>
oBoxSize.nHeight)return true}return false},
_autoToggleScrollBar:function(){if(!this.isActivating())return;var sClassPrefix=this.option("sClassPrefix");
var oH=this.getScrollBarHorizontal();var oV=this.getScrollBarVertical();var welScrollBar;var bAjustThumbSize=
this.option("bAdjustThumbSize");var bV=this.isNeededScrollBarVertical();if(oV.elScrollBar){welScrollBar=
jindo.$Element(oV.elScrollBar);if(bV)welScrollBar.addClass(sClassPrefix+"show");else welScrollBar.removeClass(sClassPrefix+
"show");if(oV.elThumb&&bAjustThumbSize)jindo.$Element(oV.elThumb).css("height","0px")}var bH=this.isNeededScrollBarHorizontal();
if(oH.elScrollBar){welScrollBar=jindo.$Element(oH.elScrollBar);if(bH)welScrollBar.addClass(sClassPrefix+
"show");else welScrollBar.removeClass(sClassPrefix+"show");if(oH.elThumb&&bAjustThumbSize)jindo.$Element(oH.elThumb).css("width",
"0px")}if(oV.elScrollBar){welScrollBar=jindo.$Element(oV.elScrollBar);if(this.isNeededScrollBarVertical())welScrollBar.addClass(sClassPrefix+
"show");else welScrollBar.removeClass(sClassPrefix+"show");if(oV.elThumb&&bAjustThumbSize)jindo.$Element(oV.elThumb).css("height",
"0px")}},
_adjustTrackSize:function(){if(!this.isActivating())return;var oBoxSize=this.getDefaultBoxSize();var oH=
this.getScrollBarHorizontal();var oV=this.getScrollBarVertical();var bH=this.isNeededScrollBarHorizontal();
if(bH&&oH.elScrollBar){var nTrackWidth=oBoxSize.nWidth;var wel=jindo.$Element(oH.elScrollBar);wel.css("top",
oBoxSize.nHeight-wel.height()+"px");var nVerticalWidth=0;if(this.hasScrollBarVertical()&&oV.elScrollBar){nVerticalWidth=
parseInt(jindo.$Element(oV.elScrollBar).width(),10);nTrackWidth-=nVerticalWidth}wel.width(nTrackWidth);
var nButtonLeftWidth=0;if(oH.elButtonLeft){nButtonLeftWidth=parseInt(jindo.$Element(oH.elButtonLeft).width(),
10);nTrackWidth-=nButtonLeftWidth}if(oH.elButtonRight)nTrackWidth-=parseInt(jindo.$Element(oH.elButtonRight).width(),
10);jindo.$Element(oH.elTrack).css("left",nButtonLeftWidth+"px");this.setTrackSize(oH,nTrackWidth,null)}var bV=
this.isNeededScrollBarVertical();if(bV&&oV.elScrollBar){var nTrackHeight=oBoxSize.nHeight;var nHorizontalHeight=
0;if(this.hasScrollBarHorizontal()&&oH.elScrollBar){nHorizontalHeight=parseInt(jindo.$Element(oH.elScrollBar).height(),
10);nTrackHeight-=nHorizontalHeight}if(oV.elButtonUp)nTrackHeight-=parseInt(jindo.$Element(oV.elButtonUp).height(),
10);if(oV.elButtonDown)nTrackHeight-=parseInt(jindo.$Element(oV.elButtonDown).height(),10);this.setTrackSize(oV,
null,nTrackHeight)}},
_adjustBoxSize:function(){var oBoxSize=this.getDefaultBoxSize();var oH=this.getScrollBarHorizontal();
var oV=this.getScrollBarVertical();var bV=this.hasScrollBarVertical();var bH=this.hasScrollBarHorizontal();
this.setBoxSize(oBoxSize.nWidth,oBoxSize.nHeight);if(this.isActivating()){if(bH&&oH.elScrollBar){var nHeight=
oBoxSize.nHeight;nHeight-=parseInt(jindo.$Element(oH.elScrollBar).height(),10);this.setBoxSize(null,nHeight)}if(bV&&
oV.elScrollBar){var nWidth=oBoxSize.nWidth;nWidth-=parseInt(jindo.$Element(oV.elScrollBar).width(),10);
this.setBoxSize(nWidth,null)}}},
_adjustContentSize:function(){if(!this.isActivating())return;var oBoxSize=this.getBoxSize();var bV=this.option("sOverflowY")!=
"hidden";var bH=this.option("sOverflowX")!="hidden";var nWidth,nHeight;if(bV&&!bH)nWidth=oBoxSize.nWidth;
if(bH&&!bV)nHeight=oBoxSize.nHeight;this.setContentSize(nWidth||Infinity,nHeight||Infinity)},
_adjustThumbSize:function(){if(!this.isActivating())return;if(!this.option("bAdjustThumbSize"))return;
var nMinThumbSize=this.option("nMinThumbSize");if(typeof nMinThumbSize=="undefined")nMinThumbSize=50;
var oContentSize=this.getContentSize();var oBoxSize=this.getBoxSize();var nGap;var oH=this.getScrollBarHorizontal();
var oV=this.getScrollBarVertical();if(oV.elScrollBar){var oTrackSizeV=this.getTrackSize(oV);var nThumbHeight=
Math.floor(parseInt(oTrackSizeV.nHeight*oBoxSize.nHeight/oContentSize.nHeight,10));if(isNaN(nThumbHeight))nThumbHeight=
0;if(nThumbHeight<nMinThumbSize)nThumbHeight=nMinThumbSize;if(nThumbHeight>=oTrackSizeV.nHeight)nThumbHeight=
oTrackSizeV.nHeight;jindo.$Element(oV.elThumb).height(nThumbHeight);nGap=0;if(oV.elThumbHead)nGap+=jindo.$Element(oV.elThumbHead).height();
if(oV.elThumbFoot)nGap+=jindo.$Element(oV.elThumbFoot).height();if(oV.elThumbBody)jindo.$Element(oV.elThumbBody).height(nThumbHeight-
nGap)}if(oH.elScrollBar){var oTrackSizeH=this.getTrackSize(oH);var nThumbWidth=Math.floor(parseInt(oTrackSizeH.nWidth*
oBoxSize.nWidth/oContentSize.nWidth,10));if(isNaN(nThumbWidth))nThumbWidth=0;if(nThumbWidth<nMinThumbSize)nThumbWidth=
nMinThumbSize;if(nThumbWidth>=oTrackSizeH.nWidth)nThumbWidth=oTrackSizeH.nWidth;jindo.$Element(oH.elThumb).width(nThumbWidth);
nGap=0;if(oH.elThumbHead)nGap+=jindo.$Element(oH.elThumbHead).width();if(oH.elThumbFoot)nGap+=jindo.$Element(oH.elThumbFoot).width();
if(oH.elThumbBody)jindo.$Element(oH.elThumbBody).width(nThumbWidth-nGap)}},
_autoToggleAvailability:function(){var sClassPrefix=this.option("sClassPrefix");var oContentSize=this.getContentSize();
var oBoxSize=this.getBoxSize();var oH=this.getScrollBarHorizontal();var oV=this.getScrollBarVertical();
if(oH.elScrollBar)if(this.option("sOverflowX")=="scroll"&&oBoxSize.nWidth>=oContentSize.nWidth){jindo.$Element(oH.elScrollBar).addClass(sClassPrefix+
"disabled");this.$super._onDeactivate("horizontal");if(this.isActivating())jindo.$Element(this._el).removeClass(sClassPrefix+
"noscript")}else{jindo.$Element(oH.elScrollBar).removeClass(sClassPrefix+"disabled");if(this.isActivating())this.$super._onActivate("horizontal")}if(oV.elScrollBar)if(this.option("sOverflowY")==
"scroll"&&oBoxSize.nHeight>=oContentSize.nHeight){jindo.$Element(oV.elScrollBar).addClass(sClassPrefix+
"disabled");this.$super._onDeactivate("vertical");if(this.isActivating())jindo.$Element(this._el).removeClass(sClassPrefix+
"noscript")}else{jindo.$Element(oV.elScrollBar).removeClass(sClassPrefix+"disabled");if(this.isActivating())this.$super._onActivate("vertical")}}})).extend(jindo.ScrollBar);
jindo.FloatingLayer=jindo.$Class({$init:function(el,htOption){this._el=jindo.$(el);this._wel=jindo.$Element(el);
this.option({nDelay:0,nDuration:500,fEffect:jindo.Effect.easeOut,bActivateOnload:true});this.option(htOption||
{});this._htPos=this._getPosition();this._oTransition=(new jindo.Transition).fps(60);this._oTimer=new jindo.Timer;
this._wfScroll=jindo.$Fn(this._onScroll,this);if(this.option("bActivateOnload"))this.activate()},
getTransition:function(){return this._oTransition},
getTimer:function(){return this._oTimer},
_onActivate:function(){var self=this;setTimeout(function(){self._onScroll()},0);
this._wfScroll.attach(window,"scroll").attach(window,"resize")},
_onDeactivate:function(){this._wfScroll.detach(window,"scroll").detach(window,"resize")},
_getPosition:function(){var el=this._el,wel=this._wel,sLeft=el.style.left,sRight=el.style.right,sTop=
el.style.top,sBottom=el.style.bottom,htPos={sAlignX:sLeft?"left":sRight?"right":null,sAlignY:sTop?"top":
sBottom?"bottom":null},htOffset=wel.offset(),htClientSize=jindo.$Document().clientSize();switch(htPos.sAlignX){case "left":htPos.nX=
htOffset.left;break;case "right":htPos.nX=Math.max(htClientSize.width-htOffset.left-wel.width(),parseFloat(sRight));
break}switch(htPos.sAlignY){case "top":htPos.nY=htOffset.top;break;case "bottom":htPos.nY=Math.max(htClientSize.height-
htOffset.top-wel.height(),parseFloat(sBottom));break}return htPos},
_onScroll:function(){var self=this;this._oTimer.start(function(){self._paint()},this.option("nDelay"))},
_paint:function(){var oDoc=document.documentElement||document,elBody=document.body,el=this._el,wel=this._wel,
htPos=this._htPos,htScrollPos={},htOffset=jindo.$Element(el).offset(),nPosX,nPosY,htParam={nX:null,nY:null};
if(htPos.sAlignX){switch(htPos.sAlignX){case "left":htScrollPos.x=oDoc.scrollLeft||elBody.scrollLeft;
nPosX=htOffset.left-htScrollPos.x;break;case "right":htScrollPos.x=(oDoc.scrollLeft||elBody.scrollLeft)+
jindo.$Document().clientSize().width;nPosX=htScrollPos.x-(htOffset.left+wel.width());break}htParam.nX=
parseFloat(wel.css(htPos.sAlignX))+(htPos.nX-nPosX)}if(htPos.sAlignY){switch(htPos.sAlignY){case "top":htScrollPos.y=
oDoc.scrollTop||elBody.scrollTop;nPosY=htOffset.top-htScrollPos.y;break;case "bottom":htScrollPos.y=(oDoc.scrollTop||
elBody.scrollTop)+jindo.$Document().clientSize().height;nPosY=htScrollPos.y-(htOffset.top+wel.height());
break}htParam.nY=parseFloat(wel.css(htPos.sAlignY))+(htPos.nY-nPosY)}if(this.fireEvent("beforeMove",htParam)){var htTransition=
{},fEffect=this.option("fEffect");if(htParam.nX!==null)htTransition["@"+htPos.sAlignX]=fEffect(htParam.nX+
"px");if(htParam.nY!==null)htTransition["@"+htPos.sAlignY]=fEffect(htParam.nY+"px");var self=this;this._oTransition.abort().start(this.option("nDuration"),
el,htTransition).start(function(){self.fireEvent("move")})}}}).extend(jindo.UIComponent);
jindo.Pagination=jindo.$Class({$init:function(sId,htOption){this._elPageList=jindo.$(sId);this._welPageList=
jindo.$Element(this._elPageList);this._waPage=jindo.$A([]);this._fClickPage=jindo.$Fn(this._onClickPageList,
this);this.option({bActivateOnload:true,nItem:10,nItemPerPage:10,nPagePerPageList:10,nPage:1,sMoveUnit:"pagelist",
bAlignCenter:false,sInsertTextNode:"",sClassPrefix:"",sClassFirst:"first-child",sClassLast:"last-child",
sPageTemplate:"\x3ca href\x3d'#'\x3e{\x3dpage}\x3c/a\x3e",sCurrentPageTemplate:"\x3cstrong\x3e{\x3dpage}\x3c/strong\x3e",
elFirstPageLinkOn:jindo.$$.getSingle("a."+this._wrapPrefix("pre_end"),this._elPageList),elPrevPageLinkOn:jindo.$$.getSingle("a."+
this._wrapPrefix("pre"),this._elPageList),elNextPageLinkOn:jindo.$$.getSingle("a."+this._wrapPrefix("next"),
this._elPageList),elLastPageLinkOn:jindo.$$.getSingle("a."+this._wrapPrefix("next_end"),this._elPageList),
elFirstPageLinkOff:jindo.$$.getSingle("span."+this._wrapPrefix("pre_end"),this._elPageList),elPrevPageLinkOff:jindo.$$.getSingle("span."+
this._wrapPrefix("pre"),this._elPageList),elNextPageLinkOff:jindo.$$.getSingle("span."+this._wrapPrefix("next"),
this._elPageList),elLastPageLinkOff:jindo.$$.getSingle("span."+this._wrapPrefix("next_end"),this._elPageList)});
this.option(htOption||{});if(this.option("bActivateOnload"))this.activate()},
option:function(sName,vValue){var oThis=jindo.Component.prototype.option.apply(this,arguments);if(typeof sName===
"object"||typeof vValue!="undefined"){var sMoveUnit=this.option("sMoveUnit");var bAlignCenter=this.option("bAlignCenter");
if(bAlignCenter&&sMoveUnit==="pageunit")throw new Error('Invalid Option : sMoveUnit can\'t be set to "pageunit" when bAlignCenter is true.');
}return oThis},
_wrapPrefix:function(sClassName){var sClassPrefix=this.option("sClassPrefix");return sClassPrefix?sClassPrefix+
sClassName.replace(/_/g,"-"):sClassName},
getBaseElement:function(){return this._elPageList},
getItemCount:function(){return this.option("nItem")},
setItemCount:function(n){this.option({"nItem":n})},
getItemPerPage:function(){return this.option("nItemPerPage")},
setItemPerPage:function(n){this.option("nItemPerPage",n)},
getCurrentPage:function(){return this._nCurrentPage},
getFirstItemOfPage:function(n){return this.getItemPerPage()*(n-1)+1},
getPageOfItem:function(n){return Math.ceil(n/this.getItemPerPage())},
_getLastPage:function(){return Math.ceil(this.getItemCount()/this.getItemPerPage())},
_getRelativePage:function(sRelative){var nPage=null;var bMovePage=this.option("sMoveUnit")=="page";var nThisPageList=
this._getPageList(this.getCurrentPage());switch(sRelative){case "pre_end":nPage=1;break;case "next_end":nPage=
this._getLastPage();break;case "pre":nPage=bMovePage?this.getCurrentPage()-1:(nThisPageList-1)*this.option("nPagePerPageList");
break;case "next":nPage=bMovePage?this.getCurrentPage()+1:nThisPageList*this.option("nPagePerPageList")+
1;break}return nPage},
_getPageList:function(nThisPage){if(this.option("bAlignCenter")){var nLeft=Math.floor(this.option("nPagePerPageList")/
2);var nPageList=nThisPage-nLeft;nPageList=Math.max(nPageList,1);nPageList=Math.min(nPageList,this._getLastPage());
return nPageList}return Math.ceil(nThisPage/this.option("nPagePerPageList"))},
_isIn:function(el,elParent){if(!elParent)return false;return el===elParent?true:jindo.$Element(el).isChildOf(elParent)},
_getPageElement:function(el){for(var i=0,nLength=this._waPage.$value().length;i<nLength;i++){var elPage=
this._waPage.get(i);if(this._isIn(el,elPage))return elPage}return null},
_onClickPageList:function(we){we.stop(jindo.$Event.CANCEL_DEFAULT);var nPage=null,htOption=this.option(),
el=we.element;if(this._isIn(el,htOption.elFirstPageLinkOn))nPage=this._getRelativePage("pre_end");else if(this._isIn(el,
htOption.elPrevPageLinkOn))nPage=this._getRelativePage("pre");else if(this._isIn(el,htOption.elNextPageLinkOn))nPage=
this._getRelativePage("next");else if(this._isIn(el,htOption.elLastPageLinkOn))nPage=this._getRelativePage("next_end");
else{var elPage=this._getPageElement(el);if(elPage)nPage=parseInt(jindo.$Element(elPage).text(),10);else return}if(!this.fireEvent("click",
{nPage:nPage,weEvent:we}))return;this.movePageTo(nPage)},
_convertToAvailPage:function(nPage){var nLastPage=this._getLastPage();nPage=Math.max(nPage,1);nPage=Math.min(nPage,
nLastPage);return nPage},
movePageTo:function(nPage,bFireEvent){if(typeof bFireEvent=="undefined")bFireEvent=true;nPage=this._convertToAvailPage(nPage);
this._nCurrentPage=nPage;if(bFireEvent)if(!this.fireEvent("beforeMove",{nPage:nPage}))return;this._paginate(nPage);
if(bFireEvent)this.fireEvent("move",{nPage:nPage})},
reset:function(nItemCount){if(typeof nItemCount=="undefined")nItemCount=this.option("nItem");this.setItemCount(nItemCount);
this.movePageTo(1,false)},
_onActivate:function(){jindo.$Element.prototype.preventTapHighlight&&this._welPageList.preventTapHighlight(true);
this._fClickPage.attach(this._elPageList,"click");this.setItemCount(this.option("nItem"));this.movePageTo(this.option("nPage"),
false);this._welPageList.addClass(this._wrapPrefix("loaded"))},
_onDeactivate:function(){jindo.$Element.prototype.preventTapHighlight&&this._welPageList.preventTapHighlight(false);
this._fClickPage.detach(this._elPageList,"click");this._welPageList.removeClass(this._wrapPrefix("loaded"))},
_addTextNode:function(){var sTextNode=this.option("sInsertTextNode");this._elPageList.appendChild(document.createTextNode(sTextNode))},
_paginate:function(nPage){this._empty();this._addTextNode();var htOption=this.option(),elFirstPageLinkOn=
htOption.elFirstPageLinkOn,elPrevPageLinkOn=htOption.elPrevPageLinkOn,elNextPageLinkOn=htOption.elNextPageLinkOn,
elLastPageLinkOn=htOption.elLastPageLinkOn,elFirstPageLinkOff=htOption.elFirstPageLinkOff,elPrevPageLinkOff=
htOption.elPrevPageLinkOff,elNextPageLinkOff=htOption.elNextPageLinkOff,elLastPageLinkOff=htOption.elLastPageLinkOff,
nLastPage=this._getLastPage(),nThisPageList=this._getPageList(nPage),nLastPageList=this._getPageList(nLastPage);
if(nLastPage===0)this._welPageList.addClass(this._wrapPrefix("no-result"));else if(nLastPage==1)this._welPageList.addClass(this._wrapPrefix("only-one")).removeClass(this._wrapPrefix("no-result"));
else this._welPageList.removeClass(this._wrapPrefix("only-one")).removeClass(this._wrapPrefix("no-result"));
var nFirstPageOfThisPageList,nLastPageOfThisPageList;if(htOption.bAlignCenter){var nLeft=Math.floor(htOption.nPagePerPageList/
2);nFirstPageOfThisPageList=nPage-nLeft;nFirstPageOfThisPageList=Math.max(nFirstPageOfThisPageList,1);
nLastPageOfThisPageList=nFirstPageOfThisPageList+htOption.nPagePerPageList-1;if(nLastPageOfThisPageList>
nLastPage){nFirstPageOfThisPageList=nLastPage-htOption.nPagePerPageList+1;nFirstPageOfThisPageList=Math.max(nFirstPageOfThisPageList,
1);nLastPageOfThisPageList=nLastPage}}else{nFirstPageOfThisPageList=(nThisPageList-1)*htOption.nPagePerPageList+
1;nLastPageOfThisPageList=nThisPageList*htOption.nPagePerPageList;nLastPageOfThisPageList=Math.min(nLastPageOfThisPageList,
nLastPage)}if(htOption.sMoveUnit=="page"){nThisPageList=nPage;nLastPageList=nLastPage}if(nPage>1){if(elFirstPageLinkOn){this._welPageList.append(elFirstPageLinkOn);
this._addTextNode()}}else if(elFirstPageLinkOff){this._welPageList.append(elFirstPageLinkOff);this._addTextNode()}if(nThisPageList>
1){if(elPrevPageLinkOn){this._welPageList.append(elPrevPageLinkOn);this._addTextNode()}}else if(elPrevPageLinkOff){this._welPageList.append(elPrevPageLinkOff);
this._addTextNode()}var el,wel;for(var i=nFirstPageOfThisPageList;i<=nLastPageOfThisPageList;i++){if(i==
nPage)el=jindo.$(jindo.$Template(htOption.sCurrentPageTemplate).process({page:i.toString()}));else{el=
jindo.$(jindo.$Template(htOption.sPageTemplate).process({page:i.toString()}));this._waPage.push(el)}wel=
jindo.$Element(el);if(i==nFirstPageOfThisPageList)wel.addClass(this._wrapPrefix(this.option("sClassFirst")));
if(i==nLastPageOfThisPageList)wel.addClass(this._wrapPrefix(this.option("sClassLast")));this._welPageList.append(el);
this._addTextNode()}if(nThisPageList<nLastPageList){if(elNextPageLinkOn){this._welPageList.append(elNextPageLinkOn);
this._addTextNode()}}else if(elNextPageLinkOff){this._welPageList.append(elNextPageLinkOff);this._addTextNode()}if(nPage<
nLastPage){if(elLastPageLinkOn){this._welPageList.append(elLastPageLinkOn);this._addTextNode()}}else if(elLastPageLinkOff){this._welPageList.append(elLastPageLinkOff);
this._addTextNode()}},
_empty:function(){var htOption=this.option(),elFirstPageLinkOn=htOption.elFirstPageLinkOn,elPrevPageLinkOn=
htOption.elPrevPageLinkOn,elNextPageLinkOn=htOption.elNextPageLinkOn,elLastPageLinkOn=htOption.elLastPageLinkOn,
elFirstPageLinkOff=htOption.elFirstPageLinkOff,elPrevPageLinkOff=htOption.elPrevPageLinkOff,elNextPageLinkOff=
htOption.elNextPageLinkOff,elLastPageLinkOff=htOption.elLastPageLinkOff;htOption.elFirstPageLinkOn=this._clone(elFirstPageLinkOn);
htOption.elPrevPageLinkOn=this._clone(elPrevPageLinkOn);htOption.elLastPageLinkOn=this._clone(elLastPageLinkOn);
htOption.elNextPageLinkOn=this._clone(elNextPageLinkOn);htOption.elFirstPageLinkOff=this._clone(elFirstPageLinkOff);
htOption.elPrevPageLinkOff=this._clone(elPrevPageLinkOff);htOption.elLastPageLinkOff=this._clone(elLastPageLinkOff);
htOption.elNextPageLinkOff=this._clone(elNextPageLinkOff);this._waPage.empty();this._welPageList.empty()},
_clone:function(el){if(el&&el.cloneNode)return el.cloneNode(true);return el}}).extend(jindo.UIComponent);
jindo.SelectBox=jindo.$Class({sTagName:"select",_bDisabled:false,_sPrevValue:null,_nSelectedIndex:0,_bRealFocused:false,
$init:function(el,htOption){this._aItemData=[];this._aListItem=[];this._aOptions=[];this.option({sClassPrefix:"selectbox-",
nWidth:null,nHeight:null,bUseLayerPosition:true,aOptionHTML:[],aOptionLabel:[],LayerPosition:{sPosition:"outside-bottom",
sAlign:"left",nTop:0,nLeft:0},LayerManager:{sCheckEvent:"mousedown",nShowDelay:20,nHideDelay:0}});this.option(htOption||
{});this._el=jindo.$(el);this._assignHTMLElements();if(this.option("bUseLayerPosition"))this._initLayerPosition();
this._initLayerManager();this._initRolloverClick();this._oTimer=new jindo.Timer;this._wfOnFocusSelect=
jindo.$Fn(this._onFocusSelect,this);this._wfOnBlurSelect=jindo.$Fn(this._onBlurSelect,this);this._wfOnMouseDownBox=
jindo.$Fn(this._onMouseDownBox,this);this._wfOnMouseDownList=jindo.$Fn(this._onMouseDownList,this);this._wfOnKeyDown=
jindo.$Fn(this._onKeyDown,this);this._wfOnMouseWheel=jindo.$Fn(function(e){e.stop(jindo.$Event.CANCEL_DEFAULT);
this._elLayer.scrollTop-=e.mouse().delta*16},this);
this._wfOnMouseWheelOnBody=jindo.$Fn(this.close,this);this._oAgent=jindo.$Agent();this.activate()},
_assignHTMLElements:function(){var sPrefix=this.option("sClassPrefix"),el=this._el;this._wel=jindo.$Element(el);
this._elSelect=jindo.$$.getSingle("select."+sPrefix+"source",el);this._sSelectInnerHTML=this._elSelect.innerHTML;
this._elOptionDefault=jindo.$$.getSingle("option."+sPrefix+"default",el);this._elSelectOptionGroup=jindo.$$.getSingle("select."+
sPrefix+"source-option-group",el);this._elBox=jindo.$$.getSingle("."+sPrefix+"box",el);this._elLabel=
jindo.$$.getSingle("."+sPrefix+"label",el);this._elLayer=jindo.$$.getSingle("."+sPrefix+"layer",el);this._elList=
jindo.$$.getSingle("."+sPrefix+"list",el);this._elList.innerHTML="";this._elSelectList=jindo.$("\x3cul\x3e");
this._elList.insertBefore(this._elSelectList,this._elList.firstChild)},
getSelectElement:function(){return this._elSelect},
getBoxElement:function(){return this._elBox},
getLabelElement:function(){return this._elLabel},
getLayerElement:function(){return this._elLayer},
getListElement:function(){return this._elList},
getSelectListElement:function(){return this._elSelectList},
_limitWidth:function(){var nWidth=this.option("nWidth");if(nWidth){jindo.$Element(this.getBoxElement()).css({"width":nWidth+
"px","overflowX":"hidden"});jindo.$Element(this.getLayerElement()).css({"width":nWidth+"px","overflowX":"hidden",
"overflowY":"auto"})}},
_limitHeight:function(){var nHeight=this.option("nHeight");if(nHeight){var welLayer=jindo.$Element(this.getLayerElement()),
elToMeasure=welLayer.$value().cloneNode(true),welToMeasure=jindo.$Element(elToMeasure),nLayerHeight;welToMeasure.opacity(0);
welLayer.after(welToMeasure);welToMeasure.show();nLayerHeight=welToMeasure.height();welToMeasure.leave();
if(nHeight<nLayerHeight)welLayer.css({"height":nHeight+"px","overflowX":"hidden","overflowY":"auto"})}},
_initLayerManager:function(){var self=this,sPrefix=this.option("sClassPrefix"),elSelect=this.getSelectElement();
this._oLayerManager=(new jindo.LayerManager(this.getLayerElement(),this.option("LayerManager"))).attach({beforeShow:function(oCustomEvent){if(self.fireEvent("open")){self._limitWidth();
self._limitHeight();setTimeout(function(){try{elSelect.focus()}catch(e){}},10);
self._wel.addClass(sPrefix+"open");if(self.option("bUseLayerPosition"))self.getLayerPosition().setPosition()}else oCustomEvent.stop()},
show:function(oCustomEvent){self._paintSelected()},
beforeHide:function(oCustomEvent){if(self.fireEvent("close")){self._wel.removeClass(sPrefix+"open").removeClass(sPrefix+
"focused");setTimeout(function(){try{self.getSelectElement().blur()}catch(e){}},10)}else{oCustomEvent.stop();
setTimeout(function(){try{elSelect.focus()}catch(e){}},10)}}}).link(this.getBoxElement()).link(this.getLayerElement())},
getLayerManager:function(){return this._oLayerManager},
_initRolloverClick:function(){var self=this,sPrefix=this.option("sClassPrefix");this._oRolloverClick=
(new jindo.RolloverClick(this.getSelectListElement(),{sCheckEvent:"mouseup",RolloverArea:{sClassName:sPrefix+
"item",sClassPrefix:sPrefix+"item-"}})).attach({over:function(oCustomEvent){if(self._welOvered)self._welOvered.removeClass(sPrefix+
"item-over");var wel=jindo.$Element(oCustomEvent.element);wel.addClass(sPrefix+"item-over");self._welOvered=
wel},
out:function(oCustomEvent){oCustomEvent.stop()},
click:function(oCustomEvent){var nLastSelectedIndex=self._nSelectedIndex;var nSelectedIndex=-1;jindo.$A(self._aItemData).forEach(function(htData,
nIndex){if(htData.elItem===oCustomEvent.element){nSelectedIndex=nIndex;jindo.$A.Break()}});
if(!self.fireEvent("click",{nIndex:nSelectedIndex,weEvent:oCustomEvent.weEvent}))return;if(nSelectedIndex!==
-1)self.setValue(self._aItemData[nSelectedIndex].sValue);nSelectedIndex=self.getSelectedIndex();if(nSelectedIndex!=
nLastSelectedIndex){jindo.$Element(self.getSelectElement()).fireEvent("change");self.fireEvent("change",
{nIndex:nSelectedIndex,nLastIndex:nLastSelectedIndex})}if(!jindo.$Element(oCustomEvent.element).hasClass(sPrefix+
"notclose"))self.getLayerManager().hide()}})},
getRolloverClick:function(){return this._oRolloverClick},
_initLayerPosition:function(){this._oLayerPosition=new jindo.LayerPosition(this.getBoxElement(),this.getLayerElement(),
this.option("LayerPosition"))},
getLayerPosition:function(){return this._oLayerPosition},
_onActivate:function(){var sPrefix=this.option("sClassPrefix"),elSelect=this.getSelectElement();this._limitWidth();
this._wel.removeClass(sPrefix+"noscript");jindo.$Element.prototype.preventTapHighlight&&jindo.$Element(this.getListElement()).preventTapHighlight(true);
this._wfOnFocusSelect.attach(elSelect,"focus");this._wfOnBlurSelect.attach(elSelect,"blur");this._wfOnMouseDownBox.attach(this.getBoxElement(),
"mousedown");this._wfOnMouseDownList.attach(this.getListElement(),"mousedown");this._wfOnKeyDown.attach(elSelect,
"keydown");this._wfOnMouseWheel.attach(elSelect,"mousewheel");this._wfOnMouseWheelOnBody.attach(document,
"mousewheel");this.paint();this._sPrevValue=this.getValue()},
_onDeactivate:function(){this.getLayerManager().hide();var sPrefix=this.option("sClassPrefix"),elSelect=
this.getSelectElement();this._wel.addClass(sPrefix+"noscript");jindo.$Element.prototype.preventTapHighlight&&
jindo.$Element(this.getListElement()).preventTapHighlight(false);this._wfOnFocusSelect.detach(elSelect,
"focus");this._wfOnBlurSelect.detach(elSelect,"blur");this._wfOnMouseDownBox.detach(this.getBoxElement(),
"mousedown");this._wfOnMouseDownList.detach(this.getListElement(),"mousedown");this._wfOnKeyDown.detach(elSelect,
"keydown");this._wfOnMouseWheel.detach(elSelect,"mousewheel");this._wfOnMouseWheelOnBody.detach(document,
"mousewheel")},
getValueOf:function(sText){for(var i=0,oItemData;oItemData=this._aItemData[i];i++)if(oItemData.sText==
sText)return oItemData.sValue;return null},
getValue:function(){return this.getSelectElement().value},
getText:function(){var oData=this._aItemData[this._nSelectedIndex];return oData&&oData.sText||""},
getHTML:function(){return this.getLabelElement().innerHTML},
setValue:function(sValue){this.getSelectElement().value=sValue;this._sPrevValue=this.getValue();this._paint()},
getSelectedIndex:function(){return this.getSelectElement().selectedIndex},
setSelectedIndex:function(nIndex,bFireEvent){if(typeof bFireEvent=="undefined")bFireEvent=true;if(this._isSelectable(nIndex)){var nLastSelectedIndex=
this.getSelectedIndex();this._setSelectedIndex(nIndex);this._paint();if(bFireEvent&&nLastSelectedIndex!=
nIndex)this.fireEvent("change",{nIndex:nIndex,nLastIndex:nLastSelectedIndex});return true}return false},
_setSelectedIndex:function(nIndex){this.getSelectElement().selectedIndex=nIndex},
_isSelectable:function(nIndex){var htItem=this._aItemData[nIndex];if(!htItem||htItem.bDisabled||htItem.bDefault)return false;
else return true},
getOptions:function(){return this._aOptions},
getListItems:function(){return this._aListItem},
getDisabled:function(){return this._bDisabled},
setOptionGroup:function(sName){if(!this._elSelectOptionGroup||!this._elOptionDefault)return false;var elSelect=
this.getSelectElement(),sPrefix=this.option("sClassPrefix"),aGroupOption=jindo.$$("."+sPrefix+"option-group-"+
sName,this._elSelectOptionGroup),elOptionDefault=this._elOptionDefault=this._elOptionDefault.cloneNode(true);
elSelect.innerHTML="";elSelect.appendChild(elOptionDefault);this._nSelectedIndex=0;for(var i=0;i<aGroupOption.length;i++)elSelect.appendChild(aGroupOption[i].cloneNode(true));
this._sPrevValue=this.getValue();this.paint();return true},
isSelected:function(){return!this._aItemData[this.getSelectedIndex()].bDefault},
setDefault:function(){var nDefaultOption=-1;jindo.$A(this._aItemData).forEach(function(o,i){if(o.bDefault||
o.bSelected)nDefaultOption=i});
if(nDefaultOption<0)nDefaultOption=0;this._nSelectedIndex=nDefaultOption;this._setSelectedIndex(nDefaultOption);
this._sPrevValue=this.getValue();this._paint()},
paint:function(){this._paintList();this._paintSelected();this._paintLabel();this.getLayerManager().setLayer(this.getLayerElement())},
_paint:function(){this._paintSelected();this._paintLabel()},
_paintLabel:function(){var welLabel=jindo.$Element(this.getLabelElement()),sHTML=this.option("aOptionHTML")[this._nSelectedIndex]||
"",sLabel=this.option("aOptionLabel")[this._nSelectedIndex]||"",sText=this.getText();if(sHTML)if(sLabel)welLabel.html(sLabel);
else welLabel.html(sHTML);else welLabel.text(sText);welLabel.attr("unselectable","on")},
_paintList:function(){var sPrefix=this.option("sClassPrefix");this._aOptions=jindo.$$("option",this.getSelectElement());
var aOptions=this._aOptions;this._aItemData=[];this._aListItem=[];this._nSelectedIndex=0;var elList=this.getSelectListElement();
elList.innerHTML="";if(this.option("nHeight"))jindo.$Element(this.getLayerElement()).css("height","auto");
for(var i=0,elOption;elOption=aOptions[i];i++){var welOption=jindo.$Element(elOption),bDefault=welOption.hasClass(sPrefix+
"default"),bSelected=welOption.attr("selected")=="selected",bDisabled=bDefault||elOption.disabled,sHTML=
this.option("aOptionHTML")[i]||"",sText=welOption.text()||"",sValue=welOption.attr("value");if(!sValue){welOption.attr("value",
sText);sValue=sText}this._aItemData[i]={elOption:elOption,elItem:null,sHTML:sHTML,sText:sText,sValue:sValue,
bDisabled:bDisabled,bSelected:bSelected,bDefault:bDefault};var elItem=null,htItem=this._aItemData[i];
if(!htItem.bDefault){elItem=jindo.$("\x3cli\x3e");elItem.style.cssText=htItem.elOption.style.cssText;
elItem.className=htItem.elOption.className;var welItem=jindo.$Element(elItem);if(htItem.sHTML)welItem.html(htItem.sHTML);
else welItem.text(htItem.sText);welItem.attr("unselectable","on");if(htItem.bDisabled)welItem.addClass(sPrefix+
"item-disabled");else welItem.addClass(sPrefix+"item");elList.appendChild(elItem);this._aListItem.push(elItem);
this._aItemData[i].elItem=elItem}}if(jindo.$Element(this.getLayerElement()).visible()){this._limitWidth();
this._limitHeight()}if(this._elSelect.disabled){this.disable();return}this.enable()},
_paintSelected:function(){var sPrefix=this.option("sClassPrefix"),n=this.getSelectedIndex(),htItem,nPrevSelectedIndex=
this._nSelectedIndex;if(this._welSelected){this._welSelected.removeClass(sPrefix+"item-selected");this._welSelected=
null}if(this._welOvered){this._welOvered.removeClass(sPrefix+"item-over");this._welOvered=null}n=Math.min(n,
this._aItemData.length-1);this._nSelectedIndex=n;htItem=this._aItemData[n];if(htItem&&htItem.elItem){var elSelected=
htItem.elItem,welSelected=jindo.$Element(elSelected);this._welSelected=this._welOvered=welSelected;welSelected.addClass(sPrefix+
"item-selected").addClass(sPrefix+"item-over");if(this.isLayerOpened()){var elLayerElement=this.getLayerElement();
var nHeight=parseInt(jindo.$Element(elLayerElement).css("height"),10),nOffsetTop=elSelected.offsetTop,
nOffsetHeight=elSelected.offsetHeight,nScrollTop=elLayerElement.scrollTop,bDown;if(nPrevSelectedIndex<
n)bDown=true;else bDown=false;if(nOffsetTop<nScrollTop||nOffsetTop>nScrollTop+nHeight)elLayerElement.scrollTop=
nOffsetTop;if(bDown){if(nOffsetTop+nOffsetHeight>nHeight+nScrollTop)elLayerElement.scrollTop=nOffsetTop+
nOffsetHeight-nHeight}else if(nOffsetTop<nScrollTop)elLayerElement.scrollTop=nOffsetTop}}},
isLayerOpened:function(){return this.getLayerManager().getVisible()},
disable:function(){this.getLayerManager().hide();var sPrefix=this.option("sClassPrefix");this._wel.addClass(sPrefix+
"disabled");this.getSelectElement().disabled=true;this._bDisabled=true},
enable:function(){var sPrefix=this.option("sClassPrefix");this._wel.removeClass(sPrefix+"disabled");this.getSelectElement().disabled=
false;this._bDisabled=false},
open:function(){if(!this._bDisabled)this.getLayerManager().show();return this},
close:function(){this.getLayerManager().hide();return this},
_onMouseDownBox:function(we){we.stop(jindo.$Event.CANCEL_DEFAULT);if(!this._bDisabled)this.getLayerManager().toggle()},
_onMouseDownList:function(we){if(!jindo.$$.getSingle("! ."+this.option("sClassPrefix")+"notclose",we.element))we.stop(jindo.$Event.CANCEL_DEFAULT)},
_getSelectableIndex:function(nIndex,nDirection,nTargetIndex){var nFirst=-1,nLast=this._aItemData.length-
1,i;for(i=0;i<this._aItemData.length;i++)if(this._isSelectable(i))if(nFirst<0)nFirst=i;else nLast=i;switch(nDirection){case -1:if(nIndex==
nFirst)return nIndex;for(i=nIndex-1;i>nFirst;i--)if(this._isSelectable(i))return i;return nFirst;case 1:if(nIndex==
nLast)return nIndex;for(i=nIndex+1;i<nLast;i++)if(this._isSelectable(i))return i;return nLast;case Infinity:return nLast;
case -Infinity:return nFirst}},
_onKeyDown:function(we){var htKey=we.key();var nKeyCode=htKey.keyCode;var sPrefix=this.option("sClassPrefix");
if(!this.isLayerOpened()){if(nKeyCode!==13)return;this.open();this._bRealFocused=false;return}var nSelectedIndex=
this.getSelectedIndex(),nTargetIndex=nSelectedIndex;switch(nKeyCode){case 37:nTargetIndex=this._getSelectableIndex(nSelectedIndex,
-1);break;case 38:nTargetIndex=this._getSelectableIndex(nSelectedIndex,-1);break;case 39:nTargetIndex=
this._getSelectableIndex(nSelectedIndex,1);break;case 40:nTargetIndex=this._getSelectableIndex(nSelectedIndex,
1);break;case 9:if(htKey.shift===false)nTargetIndex=this._getSelectableIndex(nSelectedIndex,1);else nTargetIndex=
this._getSelectableIndex(nSelectedIndex,-1);break;case 33:nTargetIndex=this._getSelectableIndex(nSelectedIndex,
-Infinity);break;case 34:nTargetIndex=this._getSelectableIndex(nSelectedIndex,Infinity);break;case 13:this.getLayerManager().hide();
break}var oParam={nIndex:nTargetIndex,nLastIndex:parseInt(this._nSelectedIndex,10)};this._setSelectedIndex(nTargetIndex);
this._paint();if(oParam.nIndex!==oParam.nLastIndex){we.stop(jindo.$Event.CANCEL_DEFAULT);this.fireEvent("change",
oParam)}else{if(oParam.nIndex===0&&htKey.shift&&nKeyCode===9)$Element(this._el).removeClass(sPrefix+"focused");
if(oParam.nIndex!==0&&nKeyCode===9){we.stop(jindo.$Event.CANCEL_DEFAULT);oParam.nIndex=-1;this.fireEvent("change",
oParam)}}},
_onFocusSelect:function(we){var sPrefix=this.option("sClassPrefix"),wel=this._wel;if(!this.isLayerOpened())if(this.fireEvent("focus"))this._bRealFocused=
true;else{this.getSelectElement().blur();return}else this.fireEvent("focus");wel.addClass(sPrefix+"focused");
if(!(this._oAgent.os().mac&&this._oAgent.navigator().safari)){var self=this;this._oTimer.start(function(){var sValue=
self.getValue();if(!!self._sPrevValue&&self._sPrevValue!=sValue){var nSelectedIndex=self.getSelectElement().selectedIndex;
if(!self._isSelectable(nSelectedIndex)){var nDiff=-(self._nSelectedIndex-nSelectedIndex);nDiff=nDiff>
0?1:-1;self._setSelectedIndex(self._getSelectableIndex(self._nSelectedIndex,nDiff,nSelectedIndex));return true}var oParam=
{nIndex:nSelectedIndex,nLastIndex:parseInt(self._nSelectedIndex,10)};self._paint();if(oParam.nIndex!=
oParam.nLastIndex)self.fireEvent("change",oParam);self._sPrevValue=sValue}return true},10)}},
_onBlurSelect:function(we){var self=this,sPrefix=this.option("sClassPrefix");if(this._bRealFocused){this.fireEvent("blur");
this._wel.removeClass(sPrefix+"focused");this._bRealFocused=false}setTimeout(function(){self._oTimer.abort()},
10)}}).extend(jindo.HTMLComponent);
jindo.LazyLoading={_waLoading:jindo.$A([]),_waLoaded:jindo.$A([]),_whtScript:jindo.$H({}),_whtCallback:jindo.$H({})};
jindo.LazyLoading.load=function(sUrl,fCallback,sCharset){if(typeof fCallback!="function")fCallback=function(){};
if(sUrl instanceof Array){var fLoad=arguments.callee;var bRet=true;var nLen=sUrl.length;var nRemained=
nLen;for(var i=0;i<nLen;i++)bRet&=this.load(sUrl[i],function(){nRemained--;if(nRemained===0)fCallback()},
sCharset);
return bRet}this._queueCallback(sUrl,fCallback);if(this._checkIsLoading(sUrl))return false;if(this._checkAlreadyLoaded(sUrl)){this._doCallback(sUrl);
return true}this._waLoading.push(sUrl);var self=this;var elHead=document.getElementsByTagName("head")[0];
var elScript=document.createElement("script");elScript.type="text/javascript";elScript.charset=sCharset||
"utf-8";elScript.src=sUrl;this._whtScript.add(sUrl,elScript);if("onload"in elScript)elScript.onload=function(){self._waLoaded.push(sUrl);
self._waLoading=self._waLoading.refuse(sUrl);self._doCallback(sUrl)};
else elScript.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){self._waLoaded.push(sUrl);
self._waLoading=self._waLoading.refuse(sUrl);self._doCallback(sUrl);this.onreadystatechange=null}};
elHead.appendChild(elScript);return true};
jindo.LazyLoading._queueCallback=function(sUrl,fCallback){var aCallback=this._whtCallback.$(sUrl);if(aCallback)aCallback.push(fCallback);
else this._whtCallback.$(sUrl,[fCallback])};
jindo.LazyLoading._doCallback=function(sUrl){var aCallback=this._whtCallback.$(sUrl).concat();for(var i=
0;i<aCallback.length;i++){this._whtCallback.$(sUrl).splice(i,1);aCallback[i]()}};
jindo.LazyLoading.abort=function(sUrl){if(this._checkIsLoading(sUrl)){var elScript=this.getScriptElement(sUrl);
this._waLoading=this._waLoading.refuse(sUrl);if("onload"in elScript)elScript.onload=null;else elScript.onreadystatechange=
null;jindo.$Element(elScript).leave();this._whtScript.remove(sUrl);this._whtCallback.remove(sUrl);return true}else return false};
jindo.LazyLoading._checkAlreadyLoaded=function(sUrl){return this._waLoaded.has(sUrl)};
jindo.LazyLoading._checkIsLoading=function(sUrl){return this._waLoading.has(sUrl)};
jindo.LazyLoading.getLoaded=function(){return this._waLoaded.$value()};
jindo.LazyLoading.getLoading=function(){return this._waLoading.$value()};
jindo.LazyLoading.getScriptElement=function(sUrl){return this._whtScript.$(sUrl)||null};
if(typeof nhn=="undefined")nhn={};
nhn.FlashObject=function(){var FlashObject={};var sClassPrefix="F"+(new Date).getTime()+parseInt(Math.random()*
1E6);var bIE=/MSIE/i.test(navigator.userAgent);var bFF=/FireFox/i.test(navigator.userAgent);var bChrome=
/Chrome/i.test(navigator.userAgent);var bind=function(oElement,sEvent,fHandler){if(typeof oElement.attachEvent!=
"undefined")oElement.attachEvent("on"+sEvent,fHandler);else oElement.addEventListener(sEvent,fHandler,
true)};
var objectToString=function(oObj,sSeparator){var s="";var first=true;var name="";var value;for(var p in oObj){if(first)first=
false;else s+=sSeparator;value=oObj[p];switch(typeof value){case "string":s+=p+"\x3d"+encodeURIComponent(value);
break;case "number":s+=p+"\x3d"+encodeURIComponent(value.toString());break;case "boolean":s+=p+"\x3d"+
(value?"true":"false");break;default:}}return s};
var unloadHandler=function(){obj=document.getElementsByTagName("OBJECT");for(var i=0,theObj;theObj=obj[i];i++){theObj.style.display=
"none";for(var prop in theObj)if(typeof theObj[prop]=="function")try{if(theObj.hasOwnProperty(prop))theObj[prop]=
null}catch(e){}}};
var wheelHandler=function(e){e=e||window.event;var nDelta=e.wheelDelta/(bChrome?360:120);if(!nDelta)nDelta=
-e.detail/3;var oEl=e.target||e.srcElement;if(!(new RegExp("(^|\b)"+sClassPrefix+"_([a-z0-9_$]+)(\b|$)",
"i")).test(oEl.className))return;var sMethod=RegExp.$2;var nX="layerX"in e?e.layerX:e.offsetX;var nY=
"layerY"in e?e.layerY:e.offsetY;try{if(!oEl[sMethod](nDelta,nX,nY))if(e.preventDefault)e.preventDefault();
else e.returnValue=false}catch(err){}};
var getAbsoluteXY=function(oEl){var oPhantom=null;var bSafari=/Safari/.test(navigator.userAgent);var bIE=
/MSIE/.test(navigator.userAgent);var fpSafari=function(oEl){var oPos={left:0,top:0};if(oEl.parentNode.tagName.toLowerCase()==
"object")oEl=oEl.parentNode;for(var oParent=oEl,oOffsetParent=oParent.offsetParent;oParent=oParent.parentNode;){if(oParent.offsetParent){oPos.left-=
oParent.scrollLeft;oPos.top-=oParent.scrollTop}if(oParent==oOffsetParent){oPos.left+=oEl.offsetLeft+oParent.clientLeft;
oPos.top+=oEl.offsetTop+oParent.clientTop;if(!oParent.offsetParent){oPos.left+=oParent.offsetLeft;oPos.top+=
oParent.offsetTop}oOffsetParent=oParent.offsetParent;oEl=oParent}}return oPos};
var fpOthers=function(oEl){var oPos={left:0,top:0};for(var o=oEl;o;o=o.offsetParent){oPos.left+=o.offsetLeft;
oPos.top+=o.offsetTop}for(var o=oEl.parentNode;o;o=o.parentNode){if(o.tagName=="BODY")break;if(o.tagName==
"TR")oPos.top+=2;oPos.left-=o.scrollLeft;oPos.top-=o.scrollTop}return oPos};
return(bSafari?fpSafari:fpOthers)(oEl)};
var getScroll=function(){var bIE=/MSIE/.test(navigator.userAgent);if(bIE){var sX=document.documentElement.scrollLeft||
document.body.scrollLeft;var sY=document.documentElement.scrollTop||document.body.scrollTop;return{scrollX:sX,
scrollY:sY}}else return{scrollX:window.pageXOffset,scrollY:window.pageYOffset}};
var getInnerWidthHeight=function(){var bIE=/MSIE/.test(navigator.userAgent);var obj={};if(bIE){obj.nInnerWidth=
document.documentElement.clientWidth||document.body.clientWidth;obj.nInnerHeight=document.documentElement.clientHeight||
document.body.clientHeight}else{obj.nInnerWidth=window.innerWidth;obj.nInnerHeight=window.innerHeight}return obj};
FlashObject.showAt=function(sDiv,sTag){document.getElementById(sDiv).innerHTML=sTag};
FlashObject.show=function(sURL,sID,nWidth,nHeight,oParam,sAlign,sFPVersion){document.write(FlashObject.generateTag(sURL,
sID,nWidth,nHeight,oParam,sAlign,sFPVersion))};
FlashObject.generateTag=function(sURL,sID,nWidth,nHeight,oParam,sAlign,sFPVersion){nWidth=nWidth||"100%";
nHeight=nHeight||"100%";sFPVersion=sFPVersion||"9,0,0,0";sAlign=sAlign||"middle";var oOptions=FlashObject.getDefaultOption();
if(oParam){if(oParam.flashVars){if(typeof oParam.flashVars=="object")oParam.flashVars=objectToString(oParam.flashVars,
"\x26");oParam.flashVars+="\x26"}else oParam.flashVars="";oParam.flashVars+="__flashID\x3d"+sID;for(var key in oParam)oOptions[key]=
oParam[key]}var sClsID="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";var sCodeBase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version\x3d"+
sFPVersion;var sStyle="position:relative !important;";var sClassName=sClassPrefix+"_"+oOptions.wheelHandler;
var objCode=[];var embedCode=[];objCode.push('\x3cobject classid\x3d"'+sClsID+'" codebase\x3d"'+sCodeBase+
'" class\x3d"'+sClassName+'" style\x3d"'+sStyle+'" '+'" width\x3d"'+nWidth+'" height\x3d"'+nHeight+'" id\x3d"'+
sID+'" align\x3d"'+sAlign+'"\x3e');objCode.push('\x3cparam name\x3d"movie" value\x3d"'+sURL+'" /\x3e');
embedCode.push('\x3cembed width\x3d"'+nWidth+'" height\x3d"'+nHeight+'" name\x3d"'+sID+'" class\x3d"'+
sClassName+'" style\x3d"'+sStyle+'" '+'" src\x3d"'+sURL+'" align\x3d"'+sAlign+'" ');for(var vars in oOptions){objCode.push('\x3cparam name\x3d"'+
vars+'" value\x3d"'+oOptions[vars]+'" /\x3e');embedCode.push(vars+'\x3d"'+oOptions[vars]+'" ')}embedCode.push('type\x3d"application/x-shockwave-flash" pluginspage\x3d"http://www.macromedia.com/go/getflashplayer" /\x3e');
objCode.push(embedCode.join(""));objCode.push("\x3c/object\x3e");if(bind){bind(window,"unload",unloadHandler);
bind(document,!bFF?"mousewheel":"DOMMouseScroll",wheelHandler);bind=null}return bIE?objCode.join(""):
embedCode.join("")};
FlashObject.getDefaultOption=function(){return{quality:"high",bgColor:"#FFFFFF",allowScriptAccess:"always",
wmode:"window",menu:"false",allowFullScreen:"true"}};
FlashObject.find=function(sID,oDoc){oDoc=oDoc||document;return oDoc[sID]||oDoc.all[sID]};
FlashObject.setWidth=function(sID,value){FlashObject.find(sID).width=value};
FlashObject.setHeight=function(sID,value){FlashObject.find(sID).height=value};
FlashObject.setSize=function(sID,nWidth,nHeight){FlashObject.find(sID).height=nHeight;FlashObject.find(sID).width=
nWidth};
FlashObject.getPositionObj=function(sID){var targetObj=FlashObject.find(sID);if(targetObj==null)return null;
var absPosi=getAbsoluteXY(targetObj);var scrollPosi=getScroll();var obj={};obj.absoluteX=absPosi.left;
obj.absoluteY=absPosi.top;obj.scrolledX=obj.absoluteX-scrollPosi.scrollX;obj.scrolledY=obj.absoluteY-
scrollPosi.scrollY;obj.browserWidth=getInnerWidthHeight().nInnerWidth;return obj};
return FlashObject}();
(function(nclkExports){var nclk=function(e,a,i,r,opt,g,pid){var m,l,tU,sc;var evt=e;var o=e;if("nodeType"in
e&&e.nodeType>=1)evt=window.event||e;else if(e){var target=e.srcElement||e.currentTarget||e.target;if(target)o=
nclk.findLink(target)}if(!g)g="";sc=nclk.gcp(o,evt);tU=nclk.gl(a,i,r,sc,"",0,nclk.st,g,pid);l=nclk.l(o,
tU);nclk.sd(l);return true};
var ccsrv=nclkExports.ccsrv||"cc.naver.com";var nsc=nclkExports.nsc||"decide.me";nclk.vs="0.4.1";nclk.md=
"cc";nclk.pt=window.location.protocol=="https:"?"https:":"http:";nclk.ct=0;nclk.ec=encodeURIComponent;
nclk.st=1;function nclk_proxy(o,a,i,r,opt,g){var g_nclk_proxy=nclkExports.g_nclk_proxy||"";if(g_nclk_proxy&&
o.href)o.href=g_nclk_proxy+nclk.ec(o.href);return nclk(o,a,i,r,opt,g)}
function nclk_v2(e,a,i,r,g,pid){var m,l,tU,sc;var evt=e;var o=e;if("nodeType"in e&&e.nodeType>=1)evt=
window.event||e;else if(e){var target=e.srcElement||e.currentTarget||e.target;if(target)o=nclk.findLink(target)}if(!g)g=
"";sc=nclk.gcp(o,evt);tU=nclk.gl(a,i,r,sc,"",0,nclk.st,g,pid);l=nclk.l(o,tU);nclk.sd(l);return true}
nclk.findLink=function(_el){var el=_el;while(el&&el.tagName!=="BODY"&&el.tagName!=="HTML"){if(el.tagName===
"A")break;el=el.parentNode}if(el.tagName!=="A")el=_el;return el};
nclk.l=function(o,tU){var l,tN,tH;if(o&&o.href){tN=o.tagName.toLowerCase();tH=o.href.toLowerCase();if(tH&&
tH.indexOf(nclk.pt+"//"+ccsrv)==0)l=o.href;else if(tH&&tH.indexOf(nclk.pt+"//"+ccsrv)!=0&&tN&&tN!="img")l=
tU+"\x26u\x3d"+nclk.ec(o.href);return l}return tU+"\x26u\x3dabout%3Ablank"};
nclk.sd=function(l,func){var f=0;var timer;if(nclk.ct>0){var t=(new Date).getTime();l+="\x26nt\x3d"+t}if(typeof func==
"function")f=1;var o=new Image;o.src=l;o.onload=function(){if(timer)clearTimeout(timer);if(f)func();o.onload=
null;return};
o.onerror=function(){if(timer)clearTimeout(timer);if(f)func();o.onerror=null;return};
if(f)timer=setTimeout(function(){func()},5E3);
nclk.ct++};
nclk.gl=function(a,i,r,sc,u,m,s,g,pid){var g_ssc=nclkExports.g_ssc||"";var g_query=nclkExports.g_query||
"";var lcs_get_lpid=nclkExports.lcs_get_lpid||null;var g_pid=nclkExports.g_pid||"";var g_sid=nclkExports.g_sid||
"";if(m==undefined)m=1;if(s==undefined)s=1;var l=nclk.pt+"//"+ccsrv+"/"+nclk.md+"?a\x3d"+a+"\x26r\x3d"+
r+"\x26i\x3d"+i+"\x26m\x3d"+m;if(s==1){if(g_ssc)l+="\x26ssc\x3d"+g_ssc;if(g_query)l+="\x26q\x3d"+nclk.ec(g_query);
if(g_sid)l+="\x26s\x3d"+g_sid;if(pid)l+="\x26p\x3d"+pid;else if(g_pid)l+="\x26p\x3d"+g_pid;else if(lcs_get_lpid)l+=
"\x26p\x3d"+lcs_get_lpid();else console.warn("'g_pid / lcs_get_lpid' is not exist.")}else{l+="\x26nsc\x3d"+
nsc;console.warn("[DEPRECATED] NSC mode")}if(g)l+="\x26g\x3d"+g;if(u)l+="\x26u\x3d"+nclk.ec(u);if(sc)l+=
sc;return l};
nclk.al=function(sType,fn){var w=window;if(w.addEventListener)w.addEventListener(sType,fn,false);else if(w.attachEvent)w.attachEvent("on"+
sType,fn)};
nclk.oo="";nclk.of="";if("onpageshow"in window)nclk.al("pageshow",function(){nclk.oo.onclick=nclk.of});
nclk.go=function(o){var cevt;var old=o.onclick;o.onclick="";nclk.oo=o;nclk.of=old;if(document.createEvent){cevt=
document.createEvent("MouseEvents");cevt.initMouseEvent("click",false,false,window,0,0,0,0,0,false,false,
false,false,0,null);o.dispatchEvent(cevt)}else if(document.createEventObject)o.fireEvent("onclick");else if(MouseEvent){cevt=
new MouseEvent("click",{"bubbles":false,"cancelable":false,"view":window});o.dispatchEvent(cevt)}o.onclick=
old};
nclk.gsbw=function(){var inner=document.createElement("p");inner.style.width="200px";inner.style.height=
"200px";var outer=document.createElement("div");outer.style.position="absolute";outer.style.top="0px";
outer.style.left="0px";outer.style.visibility="hidden";outer.style.width="200px";outer.style.height="150px";
outer.style.overflow="hidden";outer.appendChild(inner);document.body.appendChild(outer);var w1=inner.offsetWidth;
outer.style.overflow="scroll";var w2=inner.offsetWidth;if(w1==w2)w2=outer.clientWidth;document.body.removeChild(outer);
return w1-w2};
nclk.fp=function(obj){var curleft=curtop=0;try{if(obj.offsetParent){do{curleft+=obj.offsetLeft;curtop+=
obj.offsetTop}while(obj=obj.offsetParent)}else if(obj.x||obj.y){if(obj.x)curleft+=obj.x;if(obj.y)curtop+=
obj.y}}catch(e){}return[curleft,curtop]};
nclk.ws=function(win){if(!win)win=window;var winWidth=0;if(win.innerWidth){winWidth=win.innerWidth;if(typeof win.innerWidth==
"number"){var scrollbarWidth=nclk.gsbw();winWidth=win.innerWidth-scrollbarWidth}}else if(document.documentElement&&
document.documentElement.clientWidth)winWidth=document.documentElement.clientWidth;else if(document.body&&
(document.body.clientWidth||document.body.clientHeight))winWidth=document.body.clientWidth;return winWidth};
nclk.ci=function(obj){var oriURL=document.URL;var p=obj.parentNode;var docObj;var ifrId;var l;if(p==null||
p==undefined)return false;while(1)if(p.nodeName.toLowerCase()=="#document"){if(p.parentWindow)docObj=
p.parentWindow;else docObj=p.defaultView;try{if(docObj.frameElement!=null&&docObj.frameElement!=undefined)if(docObj.frameElement.nodeName.toLowerCase()==
"iframe"){ifrId=docObj.frameElement.id;if(!ifrId)return false;return ifrId}else return false;else return false}catch(e){return false}}else{p=
p.parentNode;if(p==null||p==undefined)return false}};
nclk.gcp=function(obj,e){var sx=-1;var sy=-1;var px=-1;var py=-1;var dBody,dElement,ifrId;var l="";var theEvent=
window.event?window.event:obj;if(e)theEvent=e||window.event;try{bw=nclk.ws(window);ifrId=nclk.ci(obj);
if(ifrId){var ifrOffset=nclk.fp(document.getElementById(ifrId));if(theEvent.clientX&&theEvent.clientX!=
undefined){dBody=document.body;if(dBody.clientLeft&&dBody.clientTop){ifrSx=theEvent.clientX-dBody.clientLeft;
ifrSy=theEvent.clientY-dBody.clientTop}else{ifrSx=theEvent.clientX;ifrSy=theEvent.clientY}}px=ifrOffset[0]+
ifrSx;py=ifrOffset[1]+ifrSy;if(document.body&&(document.body.scrollTop||document.body.scrollLeft)){dBody=
document.body;sx=px-dBody.scrollLeft;sy=py-dBody.scrollTop}else if(document.documentElement&&(document.documentElement.scrollTop||
document.documentElement.scrollLeft)){dElement=document.documentElement;sx=px-dElement.scrollLeft;sy=
py-dElement.scrollTop}else{sx=px;sy=py}}else{if(theEvent.clientX&&theEvent.clientX!=undefined){dBody=
document.body;if(dBody.clientLeft&&dBody.clientTop){sx=theEvent.clientX-dBody.clientLeft;sy=theEvent.clientY-
dBody.clientTop}else{sx=theEvent.clientX;sy=theEvent.clientY}}if(document.body&&(document.body.scrollTop||
document.body.scrollLeft)){px=document.body.scrollLeft+(sx<0?0:sx);py=document.body.scrollTop+(sy<0?0:
sy)}else if(document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)){dElement=
document.documentElement;if(dElement.scrollLeft!=undefined)px=dElement.scrollLeft+(sx<0?0:sx);if(dElement.scrollTop!=
undefined)py=dElement.scrollTop+(sy<0?0:sy)}else{px=sx<0?0:sx;py=sy<0?0:sy}if(theEvent.pageX)px=theEvent.pageX;
if(theEvent.pageY)py=theEvent.pageY}}catch(e){}if(px!=-1&&py!=-1)l+="\x26px\x3d"+px+"\x26py\x3d"+py;if(sx!=
-1&&sy!=-1)l+="\x26sx\x3d"+sx+"\x26sy\x3d"+sy;return l};
function nclkR(a,i,r,u,g){window.location.href=nclk.gl(a,i,r,u,1,nclk.st,g)}
function nclkF(a,i,r,f,g,u){var u=u||"about:blank";var l=nclk.gl(a,i,r,u,0,nclk.st,g);nclk.sd(l,f)}
nclkExports.nclk_proxy=nclk_proxy;nclkExports.nclk=nclk;nclkExports.nclk_v2=nclk_v2;nclkExports.nclkR=
nclkR;nclkExports.nclkF=nclkF})(window);
(function(exportTarget){var lcs_options={nnb:true};var lcs_version="v0.7.0";var lcs_add={};var lcs_bc=
{};var lcs_perf={};var lcs_do_count=0;var lcs_waiting_pageshow=false;function lcs_do(etc){if(lcs_waiting_pageshow)return;
if(document.readyState!=="complete"){var eventName="onpageshow"in window?"pageshow":"load";var retry=
function(__etc){return function(){window.setTimeout(function(){lcs_waiting_pageshow=false;lcs_do(__etc)},
10)}}(etc);
if(document.addEventListener)window.addEventListener(eventName,retry,false);else window.attachEvent("on"+
eventName,retry);lcs_waiting_pageshow=true;return}if(!window.lcs_SerName)window.lcs_SerName="lcs.naver.com";
var rs="";var index;var itarVal;var doc=document;var wlt=window.location;var lcsServerAddr;try{lcsServerAddr=
(wlt.protocol?wlt.protocol:"http:")+"//"+window.lcs_SerName+"/m?"}catch(e){return}try{rs=lcsServerAddr+
"u\x3d"+encodeURIComponent(wlt.href)+"\x26e\x3d"+(doc.referrer?encodeURIComponent(doc.referrer):"")}catch(e){}try{if(typeof lcs_add.i==
"undefined")lcs_add.i="";if(lcs_do_count<1){lcs_setBrowserCapa();if(lcs_options.nnb)lcs_setNNB();lcs_add["ct"]=
lcs_getConnectType();lcs_setNavigationTiming();lcs_setPaintTiming();lcs_setNavigationType()}for(index in lcs_bc)if(typeof lcs_bc[index]!==
"function")rs+="\x26"+index+"\x3d"+encodeURIComponent(lcs_bc[index]);for(index in lcs_add){itarVal=lcs_add[index];
if(itarVal!==undefined&&typeof itarVal!=="function")rs+="\x26"+index+"\x3d"+encodeURIComponent(itarVal)}if(lcs_do_count<
1)for(index in lcs_perf){itarVal=lcs_perf[index];if(itarVal)rs+="\x26"+index+"\x3d"+encodeURIComponent(itarVal)}for(index in etc)if(index.length>=
3&&typeof etc[index]!=="function"||index==="qy")rs+="\x26"+index+"\x3d"+encodeURIComponent(etc[index]);
if(!!etc===false||!!etc.pid===false){var pidFallback;if(window.g_pid)pidFallback=g_pid;else pidFallback=
lcs_get_lpid();rs+="\x26pid\x3d"+encodeURIComponent(pidFallback)}var timeStr=(new Date).getTime();rs+=
"\x26ts\x3d"+timeStr;rs+="\x26EOU";var obj=document.createElement("img");obj.src=rs;obj.onload=function(){obj.onload=
null;return};
lcs_do_count++}catch(e){return}}
function lcs_do_gdid(gdid,etc){try{if(gdid){lcs_add["i"]=gdid;if(etc)lcs_do(etc);else lcs_do()}}catch(e){}}
function lcs_setNNB(){try{var lsg=localStorage;if(lsg){if(lsg.ls){var lc=lsg.ls;if(lc.length==13){lcs_add["ls"]=
lc;return}}var nnb=lcs_getNNBfromCookie();if(nnb!=null&&nnb!=""){lsg.ls=nnb;lcs_add["ls"]=nnb}}}catch(e){}}
function lcs_setBrowserCapa(){lcs_bc["os"]=lcs_getOS();lcs_bc["ln"]=lcs_getlanguage();lcs_bc["sr"]=lcs_getScreen();
lcs_bc["pr"]=window.devicePixelRatio||1;var windowSize=lcs_getWindowSize();lcs_bc["bw"]=windowSize["bw"];
lcs_bc["bh"]=windowSize["bh"];lcs_bc["c"]=lcs_getColorDepth();lcs_bc["j"]=lcs_getJavaEnabled();lcs_bc["k"]=
lcs_getCookieEnabled()}
function lcs_getOS(){var lcs_os="";try{navigator.platform?lcs_os=navigator.platform:""}catch(e){}return lcs_os}
function lcs_getlanguage(){var lcs_ln="";try{navigator.userLanguage?lcs_ln=navigator.userLanguage:navigator.language?
lcs_ln=navigator.language:""}catch(e){}return lcs_ln}
function lcs_getScreen(){var lcs_sr="";try{if(window.screen&&screen.width&&screen.height)lcs_sr=screen.width+
"x"+screen.height;else if(window.java||self.java){var sr=java.awt.Toolkit.getDefaultToolkit().getScreenSize();
lcs_sr=sr.width+"x"+sr.height}}catch(e){lcs_sr=""}return lcs_sr}
function lcs_getWindowSize(){var doc=document;var size={bw:"",bh:""};try{size["bw"]=doc.documentElement.clientWidth?
doc.documentElement.clientWidth:doc.body.clientWidth;size["bh"]=doc.documentElement.clientHeight?doc.documentElement.clientHeight:
doc.body.clientHeight}catch(e){}return size}
function lcs_getColorDepth(){var colorDepth="";try{if(window.screen)colorDepth=screen.colorDepth?screen.colorDepth:
screen.pixelDepth;else if(window.java||self.java){var c=java.awt.Toolkit.getDefaultToolkit().getColorModel().getPixelSize();
colorDepth=c}}catch(e){colorDepth=""}return colorDepth}
function lcs_getJavaEnabled(){var jsEnable="";try{jsEnable=navigator.javaEnabled()?"Y":"N"}catch(e){}return jsEnable}
function lcs_getCookieEnabled(){var cookieEnable="";try{cookieEnable=navigator.cookieEnabled?"Y":"N"}catch(e){}return cookieEnable}
function lcs_getNNBfromCookie(){try{var ck=document.cookie;var k,v,i,ArrCookies=ck.split(";");for(i=0;i<
ArrCookies.length;i++){k=ArrCookies[i].substr(0,ArrCookies[i].indexOf("\x3d"));v=ArrCookies[i].substr(ArrCookies[i].indexOf("\x3d")+
1);k=k.replace(/^\s+|\s+$/g,"");if(k=="NNB")return unescape(v)}}catch(e){}}
function lcs_getConnectType(){var ct="";try{var conn=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
if(conn&&typeof conn.type!="undefined")switch(conn.type){case conn.CELL_2G:ct="2g";break;case conn.CELL_3G:ct=
"3g";break;case conn.CELL_4G:ct="4g";break;case conn.WIFI:ct="wifi";break;case conn.ETHERNET:ct="eth";
break;case conn.UNKNOWN:ct="unknown";break;case conn.NONE:ct="none";break;default:ct=""}else if(typeof blackberry!=
"undefined"&&typeof blackberry.network!="undefined"){var bnet=blackberry.network;if(bnet=="Wi-Fi")ct=
"wifi";else if(bnet=="3G")ct="3g";else ct=bnet}else{var lcs_isie=navigator.appName=="Microsoft Internet Explorer";
var lcs_ismac=navigator.userAgent.indexOf("MAC")>=0;if(lcs_isie&&!lcs_ismac&&bd&&bd.addBehavior){var bd=
document.body;var lcs_ct="";var obj=bd.addBehavior("#default#clientCaps");ct=bd.connectionType;bd.removeBehavior(obj)}}}catch(e){console.warn(e)}return ct}
function lcs_setNavigationTiming(){var performance=window.performance||{};if(performance.timing){var pt=
performance.timing;for(var key in pt){var value=pt[key];if(typeof value==="number")lcs_perf[key]=value}}}
function lcs_setPaintTiming(){var performance=window.performance||{};try{if(performance.getEntriesByType){var performanceEntries=
performance.getEntriesByType("paint");performanceEntries.forEach(function(performanceEntry,i,entries){var name=
performanceEntry.name;switch(name){case "first-paint":case "first-contentful-paint":lcs_perf[name]=performanceEntry.startTime;
break;default:break}})}else;
}catch(e){console.warn(e)}}
function lcs_setNavigationType(){var ngt=getNavigationType();if(ngt!==undefined)lcs_perf["ngt"]=ngt}
function getNavigationType(){var performance=window.performance||{};if(performance.navigation)return performance.navigation.type;
return}
var lpid=null;function lcs_create_lpid(){var uaID;var nnb=localStorage.ls;if(nnb)uaID=nnb;else{var nnbFallback;
nnbFallback=navigator.userAgent+Math.random();uaID=nnbFallback}var performance=window.performance||{};
var pageURL=location.href;var currentTime;if(performance.now)currentTime=performance.now();else currentTime=
(new Date).getTime();lpid=hashFunction.md5(uaID+pageURL+currentTime);return lpid}
function lcs_get_lpid(){if(lpid===null)lpid=lcs_create_lpid();return lpid}
function lcs_update_lpid(){lpid=lcs_create_lpid();return lpid}
var hashFunction={};(function(exportTarget){function safeAdd(x,y){var lsw=(x&65535)+(y&65535);var msw=
(x>>16)+(y>>16)+(lsw>>16);return msw<<16|lsw&65535}
function bitRotateLeft(num,cnt){return num<<cnt|num>>>32-cnt}
function md5cmn(q,a,b,x,s,t){return safeAdd(bitRotateLeft(safeAdd(safeAdd(a,q),safeAdd(x,t)),s),b)}
function md5ff(a,b,c,d,x,s,t){return md5cmn(b&c|~b&d,a,b,x,s,t)}
function md5gg(a,b,c,d,x,s,t){return md5cmn(b&d|c&~d,a,b,x,s,t)}
function md5hh(a,b,c,d,x,s,t){return md5cmn(b^c^d,a,b,x,s,t)}
function md5ii(a,b,c,d,x,s,t){return md5cmn(c^(b|~d),a,b,x,s,t)}
function binlMD5(x,len){x[len>>5]|=128<<len%32;x[(len+64>>>9<<4)+14]=len;var i;var olda;var oldb;var oldc;
var oldd;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(i=0;i<x.length;i+=16){olda=
a;oldb=b;oldc=c;oldd=d;a=md5ff(a,b,c,d,x[i],7,-680876936);d=md5ff(d,a,b,c,x[i+1],12,-389564586);c=md5ff(c,
d,a,b,x[i+2],17,606105819);b=md5ff(b,c,d,a,x[i+3],22,-1044525330);a=md5ff(a,b,c,d,x[i+4],7,-176418897);
d=md5ff(d,a,b,c,x[i+5],12,1200080426);c=md5ff(c,d,a,b,x[i+6],17,-1473231341);b=md5ff(b,c,d,a,x[i+7],22,
-45705983);a=md5ff(a,b,c,d,x[i+8],7,1770035416);d=md5ff(d,a,b,c,x[i+9],12,-1958414417);c=md5ff(c,d,a,
b,x[i+10],17,-42063);b=md5ff(b,c,d,a,x[i+11],22,-1990404162);a=md5ff(a,b,c,d,x[i+12],7,1804603682);d=
md5ff(d,a,b,c,x[i+13],12,-40341101);c=md5ff(c,d,a,b,x[i+14],17,-1502002290);b=md5ff(b,c,d,a,x[i+15],22,
1236535329);a=md5gg(a,b,c,d,x[i+1],5,-165796510);d=md5gg(d,a,b,c,x[i+6],9,-1069501632);c=md5gg(c,d,a,
b,x[i+11],14,643717713);b=md5gg(b,c,d,a,x[i],20,-373897302);a=md5gg(a,b,c,d,x[i+5],5,-701558691);d=md5gg(d,
a,b,c,x[i+10],9,38016083);c=md5gg(c,d,a,b,x[i+15],14,-660478335);b=md5gg(b,c,d,a,x[i+4],20,-405537848);
a=md5gg(a,b,c,d,x[i+9],5,568446438);d=md5gg(d,a,b,c,x[i+14],9,-1019803690);c=md5gg(c,d,a,b,x[i+3],14,
-187363961);b=md5gg(b,c,d,a,x[i+8],20,1163531501);a=md5gg(a,b,c,d,x[i+13],5,-1444681467);d=md5gg(d,a,
b,c,x[i+2],9,-51403784);c=md5gg(c,d,a,b,x[i+7],14,1735328473);b=md5gg(b,c,d,a,x[i+12],20,-1926607734);
a=md5hh(a,b,c,d,x[i+5],4,-378558);d=md5hh(d,a,b,c,x[i+8],11,-2022574463);c=md5hh(c,d,a,b,x[i+11],16,1839030562);
b=md5hh(b,c,d,a,x[i+14],23,-35309556);a=md5hh(a,b,c,d,x[i+1],4,-1530992060);d=md5hh(d,a,b,c,x[i+4],11,
1272893353);c=md5hh(c,d,a,b,x[i+7],16,-155497632);b=md5hh(b,c,d,a,x[i+10],23,-1094730640);a=md5hh(a,b,
c,d,x[i+13],4,681279174);d=md5hh(d,a,b,c,x[i],11,-358537222);c=md5hh(c,d,a,b,x[i+3],16,-722521979);b=
md5hh(b,c,d,a,x[i+6],23,76029189);a=md5hh(a,b,c,d,x[i+9],4,-640364487);d=md5hh(d,a,b,c,x[i+12],11,-421815835);
c=md5hh(c,d,a,b,x[i+15],16,530742520);b=md5hh(b,c,d,a,x[i+2],23,-995338651);a=md5ii(a,b,c,d,x[i],6,-198630844);
d=md5ii(d,a,b,c,x[i+7],10,1126891415);c=md5ii(c,d,a,b,x[i+14],15,-1416354905);b=md5ii(b,c,d,a,x[i+5],
21,-57434055);a=md5ii(a,b,c,d,x[i+12],6,1700485571);d=md5ii(d,a,b,c,x[i+3],10,-1894986606);c=md5ii(c,
d,a,b,x[i+10],15,-1051523);b=md5ii(b,c,d,a,x[i+1],21,-2054922799);a=md5ii(a,b,c,d,x[i+8],6,1873313359);
d=md5ii(d,a,b,c,x[i+15],10,-30611744);c=md5ii(c,d,a,b,x[i+6],15,-1560198380);b=md5ii(b,c,d,a,x[i+13],
21,1309151649);a=md5ii(a,b,c,d,x[i+4],6,-145523070);d=md5ii(d,a,b,c,x[i+11],10,-1120210379);c=md5ii(c,
d,a,b,x[i+2],15,718787259);b=md5ii(b,c,d,a,x[i+9],21,-343485551);a=safeAdd(a,olda);b=safeAdd(b,oldb);
c=safeAdd(c,oldc);d=safeAdd(d,oldd)}return[a,b,c,d]}
function binl2rstr(input){var i;var output="";var length32=input.length*32;for(i=0;i<length32;i+=8)output+=
String.fromCharCode(input[i>>5]>>>i%32&255);return output}
function rstr2binl(input){var i;var output=[];output[(input.length>>2)-1]=undefined;for(i=0;i<output.length;i+=
1)output[i]=0;var length8=input.length*8;for(i=0;i<length8;i+=8)output[i>>5]|=(input.charCodeAt(i/8)&
255)<<i%32;return output}
function rstrMD5(s){return binl2rstr(binlMD5(rstr2binl(s),s.length*8))}
function rstrHMACMD5(key,data){var i;var bkey=rstr2binl(key);var ipad=[];var opad=[];var hash;ipad[15]=
opad[15]=undefined;if(bkey.length>16)bkey=binlMD5(bkey,key.length*8);for(i=0;i<16;i+=1){ipad[i]=bkey[i]^
909522486;opad[i]=bkey[i]^1549556828}hash=binlMD5(ipad.concat(rstr2binl(data)),512+data.length*8);return binl2rstr(binlMD5(opad.concat(hash),
512+128))}
function rstr2hex(input){var hexTab="0123456789abcdef";var output="";var x;var i;for(i=0;i<input.length;i+=
1){x=input.charCodeAt(i);output+=hexTab.charAt(x>>>4&15)+hexTab.charAt(x&15)}return output}
function str2rstrUTF8(input){return unescape(encodeURIComponent(input))}
function rawMD5(s){return rstrMD5(str2rstrUTF8(s))}
function hexMD5(s){return rstr2hex(rawMD5(s))}
function rawHMACMD5(k,d){return rstrHMACMD5(str2rstrUTF8(k),str2rstrUTF8(d))}
function hexHMACMD5(k,d){return rstr2hex(rawHMACMD5(k,d))}
function md5(string,key,raw){if(!key){if(!raw)return hexMD5(string);return rawMD5(string)}if(!raw)return hexHMACMD5(key,
string);return rawHMACMD5(key,string)}
exportTarget.md5=md5})(hashFunction);
exportTarget.lcs_do=lcs_do;exportTarget.lcs_do_gdid=lcs_do_gdid;exportTarget.lcs_get_lpid=lcs_get_lpid;
exportTarget.lcs_update_lpid=lcs_update_lpid;exportTarget.lcs_version=lcs_version})(window);
var bJindo2=typeof $Jindo!="undefined";
var PWFilterDelegator={_jobCompleteFlag:{},_jobName:{},_jobUgcTypeId:{},_onceBlocked:"false",_blockLayerAppended:["false",
"false"],_iframeId:"",_sContent:"",setFrame:function(v){this._iframeId=v},
_destory:function(){this._onceBlocked="false";this._jobCompleteFlag={};this._jobName={};this.jobUgcTypeId=
{};FormSubmitBroker._finalized=false},
setContent:function(content){this._sContent=content},
initialize:function(jobs){this._destory();var jobArray=jobs.split("|");for(var i=0;i<jobArray.length;i++){var jobInfo=
jobArray[i].split(":");this._jobCompleteFlag[jobInfo[0]]=0;this._jobName[jobInfo[0]]=jobInfo[1];this._jobUgcTypeId[jobInfo[0]]=
jobInfo[2]}this._run()},
_run:function(){for(key in this._jobCompleteFlag)if(this._jobCompleteFlag[key]==0){var contentText="";
if(this._sContent)contentText=this._sContent;else if(this._iframeId){var w=document.getElementById(this._iframeId);
contentText=w.contentWindow.document.getElementById(key).value}else{contentText=$(key).value;if(key==
"textbox")contentText+=" "+this._getTags()}new PWFilter(key,this._jobName[key],contentText,this._jobUgcTypeId[key])}},
_getTags:function(){var sTags="";var oTags=document.getElementsByName("tag");if(oTags)for(i=0;i<oTags.length;i++){if(i>
0)sTags+=" ";sTags+=oTags[i].value}return sTags},
completeJob:function(job){this._jobCompleteFlag[job]=1;this._checkAllJobCompleted()},
uncompleteJob:function(job){this._jobCompleteFlag[job]=0},
_checkAllJobCompleted:function(){var contentsClean=true;for(key in this._jobCompleteFlag)if(this._jobCompleteFlag[key]==
0){contentsClean=false;break}if(contentsClean)FormSubmitBroker.completeJob("PWFilter")},
showNoticeLayer:function(key,pwWords,layerId){this.hideNoticeLayer();this._appendBlockLayer(layerId);
var obj=$("pwFindLayer"+layerId),pwFindLayerBackIframe=$("pwFindLayerBackIframe"+layerId);var objW=420,
objH=385;$("jobName"+layerId).innerHTML=this._jobName[key];if(layerId==2)$("detectedWords"+layerId).innerHTML=
pwWords;var nTop=document.body.scrollTop+150;var wElTarget=jindo.$Element(key);if(wElTarget&&wElTarget.hasClass("_focusPwLayer"))nTop=
wElTarget.offset().top-190;var nLeft=(document.body.clientWidth-objW)/2;pwFindLayerBackIframe.style.top=
obj.style.top=nTop+"px";pwFindLayerBackIframe.style.left=obj.style.left=nLeft+"px";pwFindLayerBackIframe.style.display=
obj.style.display="block"},
_appendBlockLayer:function(v){if(this._blockLayerAppended[v-1]=="true")return;var div=document.createElement("div");
var html=v==1?this._blockLayerHTML1.join(""):this._blockLayerHTML2.join("");div.innerHTML=html;document.body.appendChild(div);
this._blockLayerAppended[v-1]=true},
hideNoticeLayer:function(){try{document.getElementById("pwFindLayer1").style.display="none"}catch(e){}try{document.getElementById("pwFindLayer2").style.display=
"none"}catch(e){}try{$("pwFindLayerBackIframe1").style.display="none"}catch(e){}try{$("pwFindLayerBackIframe2").style.display=
"none"}catch(e){}try{nhn.Kin.Editor.showHideSubmitButton(true)}catch(e){}},
_getPageEncoding:function(){var useragent=navigator.appName;if(useragent=="Microsoft Internet Explorer")return document.charset;
else return document.characterSet},
_blockLayerHTML1:['\x3ciframe id\x3d"pwFindLayerBackIframe1" style\x3d"position:absolute" title\x3d"\ub4f1\ub85d\uc81c\ud55c\ubb38\uad6c \uc548\ub0b4"\x3e\x3c/iframe\x3e',
'\x3cdiv id\x3d"pwFindLayer1" style\x3d"position:absolute"\x3e','\x3cp class\x3d"c_desc00"\x3e\uc791\uc131\ud558\uc2e0 \x3cstrong\x3e\x3cspan id\x3d"jobName1"\x3e\ub0b4\uc6a9\x3c/span\x3e\uc5d0 \uc0ac\uc6a9\uc774 \uc81c\ud55c\ub41c \ubb38\uad6c\uac00 \ud3ec\ud568\x3c/strong\x3e\ub418\uc5b4\x3cbr\x3e \uc77c\uc2dc\uc801\uc73c\ub85c \ub4f1\ub85d\uc774 \uc81c\ud55c\ub429\ub2c8\ub2e4.\x3c/p\x3e',
'\x3cdiv class\x3d"c_contents"\x3e','\x3cp class\x3d"c_desc01"\x3e\uc774\uc6a9\uc790 \ubd84\ub4e4\uc774 \ud64d\ubcf4\uc131 \ub3c4\ubc30, \uc2a4\ud338 \uac8c\uc2dc\ubb3c\ub85c \ubd88\ud3b8\uc744 \uacaa\uc9c0 \uc54a\ub3c4\ub85d\x3cbr\x3e \ub2e4\uc74c\uacfc \uac19\uc740 \uacbd\uc6b0 \ud574\ub2f9 \uac8c\uc2dc\ubb3c \ub4f1\ub85d\uc774 \uc77c\uc2dc\uc801\uc73c\ub85c \uc81c\ud55c\ub429\ub2c8\ub2e4.\x3c/p\x3e',
'\x3cul class\x3d"c_desc02"\x3e',"\x3cli\x3e\ud2b9\uc815 \uac8c\uc2dc\ubb3c \ub300\ub7c9\uc73c\ub85c \ub4f1\ub85d\ub418\uac70\ub098 \ud574\ub2f9 \uac8c\uc2dc\ubb3c\uc5d0\uc11c \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294\x3cbr\x3e\ubb38\uad6c\uac00 \ud3ec\ud568\ub41c \uacbd\uc6b0\x3c/li\x3e",
"\x3cli\x3e\ud2b9\uc815 \uac8c\uc2dc\ubb3c\uc774 \uacfc\ub3c4\ud558\uac8c \ubc18\ubcf5 \uc791\uc131\ub418\uac70\ub098 \ud574\ub2f9 \uac8c\uc2dc\ubb3c\uc5d0\uc11c \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294\x3cbr\x3e\ubb38\uad6c\uac00 \ud3ec\ud568\ub41c \uacbd\uc6b0\x3c/li\x3e",
"\x3c/ul\x3e",'\x3cp class\x3d"c_desc03"\x3e\uc2a4\ud338 \uac8c\uc2dc\ubb3c\uc774 \ud655\ub300 \uc0dd\uc131\ub418\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud558\uc5ec \ubb38\uad6c \ubc0f \uc0ac\uc6a9 \uc81c\ud55c\uae30\uac04\uc744\x3cbr\x3e\uc0c1\uc138\ud558\uac8c \uc548\ub0b4\ud574 \ub4dc\ub9ac\uc9c0 \ubabb\ud558\ub294 \uc810 \uc591\ud574 \ubd80\ud0c1 \ub4dc\ub9bd\ub2c8\ub2e4.',
"\ubaa8\ub450\uac00 \ud589\ubcf5\ud55c \uc778\ud130\ub137\x3cbr\x3e\ubb38\ud654\ub97c \ub9cc\ub4e4\uae30 \uc704\ud55c \ub124\uc774\ubc84\uc758 \ub178\ub825\uc774\uc624\ub2c8 \ud68c\uc6d0\ub2d8\uc758 \uc591\ud574\uc640 \ud611\uc870 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.\x3c/p\x3e",
'\x3cp class\x3d"c_desc04"\x3e\ub124\uc774\ubc84 \uc11c\ube44\uc2a4\uad00\ub828 \uad81\uae08\ud558\uc2e0 \uc0ac\ud56d\uc740 \x3ca href\x3d"https://help.naver.com/support/service/main.nhn?serviceNo\x3d1003" target\x3d"_blank"\x3e\ub124\uc774\ubc84\ub3c4\uc6c0\ub9d0\x3c/a\x3e\uc5d0\uc11c \ud655\uc778\ud574 \uc8fc\uc138\uc694.\x3c/p\x3e',
'\x3cp class\x3d"c_desc05"\x3e\uc218\uc815\ud558\uc2e0 \ud6c4 \ub2e4\uc2dc \ub4f1\ub85d\ud574 \uc8fc\uc138\uc694.\x3c/p\x3e',
"\x3c/div\x3e",'\x3cdiv class\x3d"c_footer"\x3e\x3cbutton type\x3d"button"  onclick\x3d"PWFilterDelegator.hideNoticeLayer()"\x3e\ud655\uc778\x3c/button\x3e',
'\x3cbutton type\x3d"button" class\x3d"c_close"  onclick\x3d"PWFilterDelegator.hideNoticeLayer()"\x3e\x3cimg src\x3d"https://ssl.pstatic.net/static/common/popup/btn_close3.gif" width\x3d"15" height\x3d"14" alt\x3d"\ub2eb\uae30"\x3e\x3c/button\x3e',
"\x3c/div\x3e","\x3c/div\x3e"],_blockLayerHTML2:['\x3ciframe id\x3d"pwFindLayerBackIframe2" style\x3d"position:absolute" title\x3d"\uc774\uc6a9\uc790\uc758 \uc2e0\uace0\uac00 \ub9ce\uc740 \ud45c\ud604 \uc81c\ud55c \uc548\ub0b4"\x3e\x3c/iframe\x3e',
'\x3cdiv id\x3d"pwFindLayer2" style\x3d"position:absolute"\x3e','\x3cdiv id\x3d"bw_header"\x3e\x3ch1\x3e\uc774\uc6a9\uc790\uc758 \uc2e0\uace0\uac00 \ub9ce\uc740 \ud45c\ud604\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4\x3c/h1\x3e\x3c/div\x3e',
'\x3cdiv id\x3d"bw_content"\x3e','\t\x3cp class\x3d"bw_desc5"\x3e\uc791\uc131\ud558\uc2e0 \x3cstrong\x3e\x3cspan id\x3d"jobName2"\x3e\ub0b4\uc6a9\x3c/span\x3e\uc5d0 \uc774\uc6a9\uc790\uc758 \uc2e0\uace0\uac00 \ub9ce\uc740 \ud45c\ud604\uc774 \ud3ec\ud568\x3c/strong\x3e\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\x3c/p\x3e',
'\t\x3cdiv class\x3d"bw_bx1"\x3e','\t\x3cdiv class\x3d"bw_bx1_shadow"\x3e',"\t\t\x3cstrong\x3e\uc774\uc6a9\uc790\uc758 \uc2e0\uace0\uac00 \ub9ce\uc740 \ud45c\ud604\x3c/strong\x3e ",
'\t\t\x3cdiv class\x3d"bw_bx1_shadow_in" id\x3d"detectedWords2"\x3e\uc774\uc6a9\uc790\uc758 \uc2e0\uace0\uac00 \ub9ce\uc740 \ud45c\ud604 \ubaa9\ub85d\x3c/div\x3e',
"\t\x3c/div\x3e","\t\x3c/div\x3e",'\t\x3cdiv class\x3d"bw_bx2"\x3e','\t\t\x3cp class\x3d"bw_desc3"\x3e\uc774\uc6a9\uc790\uc758 \uc2e0\uace0\uac00 \ub9ce\uc740 \ud45c\ud604\uc744 \uc0ad\uc81c\ud558\uc2e0 \ud6c4 \ub2e4\uc2dc \uae00\uc744 \ub4f1\ub85d\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.\x3cbr\x3e',
"\t\t\uac74\uc804\ud55c \uc778\ud130\ub137 \ubb38\ud654 \uc870\uc131\uc744 \uc704\ud574 \ud68c\uc6d0\ub2d8\uc758 \uc801\uadf9\uc801\uc778 \ud611\uc870\ub97c \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.\x3c/p\x3e",
"\t\x3c/div\x3e",'\t\x3cp class\x3d"bw_desc4"\x3e\ub124\uc774\ubc84 \uc11c\ube44\uc2a4\uad00\ub828 \uad81\uae08\ud558\uc2e0 \uc0ac\ud56d\uc740 \x3ca href\x3d"https://help.naver.com/support/service/main.nhn?serviceNo\x3d1003" target\x3d"_blank"\x3e\ub124\uc774\ubc84\ub3c4\uc6c0\ub9d0\x3c/a\x3e\uc5d0\uc11c \ud655\uc778\ud574 \uc8fc\uc138\uc694.\x3c/p\x3e',
"\x3c/div\x3e",'\x3cdiv id\x3d"bw_btn_footer"\x3e\x3cbutton type\x3d"button" onclick\x3d"PWFilterDelegator.hideNoticeLayer()"\x3e\ud655\uc778\x3c/button\x3e',
'\x3cbutton type\x3d"button" class\x3d"c_close" onclick\x3d"PWFilterDelegator.hideNoticeLayer()"\x3e\x3cimg src\x3d"https://ssl.pstatic.net/static/common/popup/btn_close3.gif" width\x3d"15" height\x3d"14" alt\x3d"\ub2eb\uae30"\x3e\x3c/button\x3e',
"\x3c/div\x3e","\x3c/div\x3e"]};
var PWFilter={_PWM_FILTER_URL:"",_SERVICE_ID:"AA",_PW_CATEGORY_P:new Array("\uac80\uc0c9\uc5b4\ubdf0\uc9d5/\ub3c4\ubc30"),_fieldId:"",
_jobName:"",_ugcType:"",_content:"",_messageKey:"",_responseDoc:null,_resultPwCount:0,_resultPwList:[],
_resultPwReasonList:"",__init:function(fieldId,jobName,content,ugcType){this._PWM_FILTER_URL="/ajax/pwfilter.nhn";
this._fieldId=fieldId;this._jobName=jobName;this._ugcType=ugcType;this._content=content;this._messageKey=
this._createMessageKey();this._doFiltering()},
_createMessageKey:function(){return this._fieldId+":"+(new Date).getTime()},
_doFiltering:function(){var t=this;var params={"serviceId":this._SERVICE_ID,"ugcTypeId":this._ugcType,
"messageKey":this._messageKey,"content":this._content};if(bJindo2)$Ajax(this._PWM_FILTER_URL,{method:"POST",
timeout:3,onload:function(req){t._onDoFilteringUpdate(req);t._parseResult();t._doPostAction()},
ontimeout:function(req){if(window.buttonClick)window.buttonClick=false;if(nhn&&nhn.Kin&&nhn.Kin.oMessage&&
nhn.Kin.oMessage.TIMEOUT)alert(nhn.Kin.oMessage.TIMEOUT)},
onerror:function(req){if(window.buttonClick)window.buttonClick=false;if(nhn&&nhn.Kin&&nhn.Kin.oMessage&&
nhn.Kin.oMessage.ERROR)alert(nhn.Kin.oMessage.ERROR)}}).request(params);
else new Ajax(this._PWM_FILTER_URL,{method:"POST",params:params,onLoad:function(req){t._onDoFiltering(req);
t._parseResult();t._doPostAction()}})},
_onDoFiltering:function(req){this._responseDoc=req.responseXML},
_onDoFilteringUpdate:function(req){this._responseDoc=req.xml()},
_parseResult:function(){this._resultPwCount=this._getResponseValue("count",0);this._resultPwList=this._getResponseList("name");
this._resultPwReasonList=this._getResponseList("pwReason")},
_doPostAction:function(){if(this._resultPwCount>0){window.buttonClick=false;if(PWFilterDelegator._onceBlocked==
"false"){PWFilterDelegator._onceBlocked="true";var layerId=this._getBlockNoticeMode();PWFilterDelegator.showNoticeLayer(this._fieldId,
this._getConcatedPwWords(),layerId)}}else PWFilterDelegator.completeJob(this._fieldId)},
_getConcatedPwWords:function(){var aStr=[];for(var i=0,len=this._resultPwList.length;i<len;i++){if(aStr.length>
0)aStr.push(", ");aStr.push(this._resultPwList[i])}return aStr.join("")},
_getResponseValue:function(tagName,idx){var rvalue;try{var objs=this._responseDoc.getElementsByTagName(tagName);
rvalue=objs[idx].firstChild.nodeValue}catch(e){}return rvalue},
_getResponseList:function(tagName){var tempList=new Array;try{var objs=this._responseDoc.getElementsByTagName(tagName);
for(var i=0;i<objs.length;i++)tempList[i]=objs[i].firstChild.nodeValue}catch(e){}return tempList},
_getBlockNoticeMode:function(){var mode="2";for(var i=0;i<this._PW_CATEGORY_P.length;i++)for(var j=0;j<
this._resultPwReasonList.length;j++)if(this._PW_CATEGORY_P[i]==this._resultPwReasonList[j]){mode="1";
break}return mode}};
if(bJindo2){PWFilter.$init=PWFilter.__init;PWFilter=$Class(PWFilter)}else PWFilter=Class(PWFilter);
var FormSubmitBroker={_jobs:{},_formName:null,_callback:function(){},
_mode:"",_finalized:false,_savedJobs:"",initSubmit:function(jobs,formName){this._finalized=false;this._formName=
formName;this._mode="submit";this._savedJobs=jobs;this._initializeJobs(jobs)},
initCallback:function(jobs,callback){this._finalized=false;this._callback=callback;this._mode="callback";
this._initializeJobs(jobs)},
completeJob:function(job){this._jobs[job]=1;var canSubmit=true;for(key in this._jobs)if(this._jobs[key]==
0){canSubmit=false;window.buttonClick=false;break}if(canSubmit&&this._finalized==false){this._finalized=
true;if(this._mode=="submit"){window.buttonClick=true;document.forms[this._formName].submit()}else if(this._mode==
"callback")this._callback()}},
uncompleteJob:function(job){this._jobs[job]=0},
reset:function(){this.initSubmit(this._savedJobs,this._formName)},
_initializeJobs:function(jobs){var jobArray=jobs.split(":");for(var i=0;i<jobArray.length;i++)this._jobs[jobArray[i]]=
0}};
var OPS=function(){var g=970;var f=600;var a=500;var c=screen.availHeight>f?f:a;var b="http://help.naver.com";
var e={};e.MAIN={url:"/",name:"webcc_naver",isLink:true};e.QUERY_UNSOUND={url:"http://help.naver.com/ops/step2/query.nhn?serviceType\x3dunsound"};
e.QUERY_INDIVIDUAL={url:"http://help.naver.com/ops/step2/query.nhn?serviceType\x3dindividual"};e.QUERY_QUERY=
{url:"http://help.naver.com/ops/step2/query.nhn?serviceType\x3dquery"};e.QUERY_CLOSEID={url:"http://help.naver.com/ops/step2/query.nhn?serviceType\x3dcloseid"};
e.QUERY_BANNINGUSE={url:"http://help.naver.com/ops/step2/query.nhn?serviceType\x3dbanninguse"};e.OPS=
{url:""};function h(i,t,m,r){var p="";if(i)p=i;else return;var n=t||"_blank";var j=m||true;var k=r||false;
var l=g;var q=c;var u="";if(j){var s=(screen.availWidth-l)/2;var o=(screen.availHeight-q)/2;u="left\x3d"+
s+", top\x3d"+o+","}var w=u+" toolbar\x3dno, scrollbars\x3dno, location\x3dno, status\x3dyes, menubar\x3dno, resizable\x3dno, width\x3d"+
l+", height\x3d"+q;var v=window.open(p,n,w);v.focus();if(k)d(v)}
function d(i){self.opener=self;window.open("about:blank","_self").close()}
return{viewOPS:function(j,l){var m=l||{};var i=j||"";var r=e[i.toUpperCase()];var q={};for(var t in r)q[t]=
r[t];for(var s in m)q[s]=m[s];var n=q.name||"ops";var p=q.parentClose||false;var k=q.url;if(q.param)k=
k+"?"+q.param;if(q.isLink){var o=window.open(k,n);o.focus();if(p)d(o)}else h(k,n,true,p)},
viewMailOPS:function(i,j){viewOPS("OPS",{url:b+"/ops/step2/mail.nhn",param:"serviceType\x3dmail\x26upCatg\x3d"+
i,parentClose:j||false})}}}();
SearchComponent=$Class({_eventHandlers:null,_options:null,$init:function(){var a=this.constructor._instances;
if(typeof a=="undefined")this.constructor._instances=a=[];a[a.length]=this;this._eventHandlers={};this._options=
{}},
option:function(d,f){var b=typeof d;if(b=="undefined")return this._options;else if(b=="string")if(typeof f!=
"undefined"){this._options[d]=f;return this}else return this._options[d];else if(b=="object"){try{for(var a in d)this._options[a]=
d[a]}catch(c){}return this}},
fireEvent:function(a,j){var f=j&&j instanceof $Event?j._event:{};var h="boundElements"in f||"cancelBubble"in
f||typeof Event!="undefined"&&f instanceof Event;if(h)f=$Event(f);else{f.type=f.type||a;f.canceled=false;
f.stop=function(){this.canceled=true}}var e=[f];
for(var b=2,c=arguments.length;b<c;b++)e.push(arguments[b]);var d=this["on"+a];if(typeof d=="function")d.apply(this,
e);var g=this._eventHandlers[a];if(typeof g!="undefined")for(var b=0,k;k=g[b];b++)k.apply(this,e);return!f.canceled},
attach:function(c,a){if(arguments.length==1){$H(arguments[0]).forEach($Fn(function(d,e){this.attach(e,
d)},this).bind());
return this}var b=this._eventHandlers[c];if(typeof b=="undefined")b=this._eventHandlers[c]=[];b.push(a);
return this},
detach:function(e,a){if(arguments.length==1){$H(arguments[0]).forEach($Fn(function(f,g){this.detach(g,
f)},this).bind());
return this}var b=this._eventHandlers[e];if(typeof b=="undefined")return this;for(var c=0,d;d=b[c];c++)if(d===
a){b=b.splice(c,1);break}return this}});
nhn.ObserveInput=$Class({_oTimer:null,_nInterval:100,_nTimerStopCall:0,_bTimerRunning:false,_bIE:$Agent().navigator().ie,
_elInput:null,_sPrevValue:null,_htFunction:{},$init:function(a,b){this._oTimer=new nhn.ObserveTimer;this._elInput=
$(a);this._setInterval(b);this._assignFunction()},
start:function(){this._sPrevValue=this._getInputValue();this._attachEvent();this.fireEvent("start")},
stop:function(){this._detachEvent();this._setTimerRunning(false);this.fireEvent("stop")},
_onKeyUp:function(){this._compare()},
_onFocus:function(){if(this._getTimerRunning()){clearTimeout(this._nTimerStopCall);this._nTimerStopCall=
null;return}this._bTimerRunning=true;this.fireEvent("timerStart");this._compare();var a=this;this._oTimer.start(function(){a._compare();
return true},this._getInterval())},
_onBlur:function(){var b=this;var a=this._getInterval();this._nTimerStopCall=setTimeout(function(){b._oTimer.abort();
b._setTimerRunning(false);b.fireEvent("timerStop")},a)},
_compare:function(){var b=this._getInputValue();var a=this._getPrevValue();if(b!=a){this.fireEvent("change",
{text:b});this._setPreValue(b)}},
_assignFunction:function(){this._htFunction.focus=$Fn(this._onFocus,this);this._htFunction.blur=$Fn(this._onBlur,
this);this._htFunction.keyup=$Fn(this._onKeyUp,this)},
_attachEvent:function(){var b=this._bIE;var c=this._elInput;var a=this._getTimerRunning();if(b)this._htFunction.keyup.attach(c,
"keyup");else{if(a)return;this._htFunction.focus.attach(c,"focus");this._htFunction.blur.attach(c,"blur")}},
_detachEvent:function(){var a=this._bIE;var b=this._elInput;if(a)this._htFunction.keyup.detach(b,"keyup");
else{this._htFunction.focus.detach(b,"focus");this._htFunction.blur.detach(b,"blur")}},
_getInputValue:function(){return this._elInput.value},
_setPreValue:function(a){this._sPrevValue=a},
_getPrevValue:function(){return this._sPrevValue},
_setInterval:function(b){var a=b||this._nInterval;this._nInterval=a},
_getInterval:function(){return this._nInterval},
_setTimerRunning:function(a){this._bTimerRunning=a},
_getTimerRunning:function(){return this._bTimerRunning}}).extend(SearchComponent);
nhn.ObserveTimer=$Class({_timer:null,_lastest:null,_remained:0,_delay:null,_callback:null,$init:function(){},
start:function(b,a){this.abort();this.fireEvent("wait");this._remained=0;this._callback=b;this._setLastest();
this._setDelay(a);this._resume();return true},
abort:function(){var a;if(a=this._clearTimer())this.fireEvent("abort");return a},
pause:function(){var b=this._getLastest();var a=this._getDelay();this._remained=parseInt(a-((new Date).getTime()-
b),10);if(this._remained<0)this._remained=0;return this._clearTimer()},
_resume:function(){var a=this._getDelay();var b=this._remained;if(b){this._recursive(b,true);this._remained=
0}else this._recursive(a,false)},
_recursive:function(a,d){this._clearTimer();var b=this;var c=this._getDelay();this._timer=setInterval(function(){b.fireEvent("run");
b._setLastest();var e=b._callback();if(!e){b._clearTimer();b.fireEvent("end");return}else{b.fireEvent("wait");
if(d)b._recursive(c,false)}},a)},
_clearTimer:function(){var a=false;if(this._timer){clearInterval(this._timer);a=true}this._timer=null;
return a},
_setLastest:function(){this._lastest=(new Date).getTime()},
_getLastest:function(){return this._lastest},
_setDelay:function(a){this._delay=a},
_getDelay:function(){return this._delay}}).extend(SearchComponent);
var acAjax={};
acAjax.$Ajax=function(c,f){var a=arguments.callee;if(!(this instanceof a))return new a(c,f);function b(){if(window.XMLHttpRequest)return new XMLHttpRequest;
else if(ActiveXObject){try{return new ActiveXObject("MSXML2.XMLHTTP")}catch(j){return new ActiveXObject("Microsoft.XMLHTTP")}return null}}
var i=location.toString();var g="";try{g=i.match(/^https?:\/\/([a-z0-9_\-\.]+)/i)[1]}catch(h){}this._url=
c;this._options=new Object;this._headers=new Object;this._options={type:"xhr",method:"post",proxy:"",
timeout:0,onload:function(e){},
onerror:null,ontimeout:function(e){},
jsonp_charset:"utf-8",callbackid:""};this.option(f);var d=this._options;d.type=d.type.toLowerCase();d.method=
d.method.toLowerCase();if(typeof window.__jindo2_callback=="undefined")window.__jindo2_callback=new Array;
switch(d.type){case "jsonp":d.method="get";this._oRequest=new acAjax.$Ajax.JSONPRequest;this._oRequest.charset=
d.jsonp_charset;this._oRequest.callbackid=d.callbackid;break}};
acAjax.$Ajax.prototype._onload=function(){if(this._oRequest.readyState==4)if(this._oRequest.status!=200&&
typeof this._options.onerror=="function")this._options.onerror(acAjax.$Ajax.Response(this._oRequest));
else this._options.onload(acAjax.$Ajax.Response(this._oRequest))};
acAjax.$Ajax.prototype.request=function(b){var l=this;var g=this._oRequest;var c=this._options;var f,
j,i=[],f="";var d=null;if(typeof b=="undefined"||!b)f=null;else{for(var e in b){j=b[e];if(typeof j=="function")j=
j();i[i.length]=e+"\x3d"+encodeURIComponent(j)}f=i.join("\x26")}g.open(c.method.toUpperCase(),this._url,
true);g.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset\x3dutf-8");g.setRequestHeader("charset",
"utf-8");for(var h in this._headers){if(typeof this._headers[h]=="function")continue;g.setRequestHeader(h,
String(this._headers[h]))}if(typeof g.onload!="undefined")g.onload=function(a){clearTimeout(d);l._onload(a)};
else g.onreadystatechange=function(a){clearTimeout(d);l._onload(a)};
if(c.timeout>0)d=setTimeout(function(){try{g.abort()}catch(a){}c.ontimeout(g)},c.timeout*1E3);
g.send(f);return this};
acAjax.$Ajax.prototype.abort=function(){this._oRequest.abort();return this};
acAjax.$Ajax.prototype.option=function(b,c){if(typeof b=="undefined")return"";if(typeof b=="string"){if(typeof c==
"undefined")return this._options[b];this._options[b]=c;return this}try{for(var a in b)this._options[a]=
b[a]}catch(d){}return this};
acAjax.$Ajax.prototype.header=function(b,c){if(typeof b=="undefined")return"";if(typeof b=="string"){if(typeof c==
"undefined")return this._headers[b];this._headers[b]=c;return this}try{for(var a in b)this._headers[a]=
b[a]}catch(d){}return this};
acAjax.$Ajax.Response=function(a){if(this===acAjax.$Ajax)return new acAjax.$Ajax.Response(a);this._oRequest=
a};
acAjax.$Ajax.Response.prototype.json=function(){if(this._oRequest.responseJSON)return this._oRequest.responseJSON;
else if(this._oRequest.responseText)try{return eval("("+this._oRequest.responseText+")")}catch(e){return{}}return{}};
acAjax.$Ajax.RequestBase=$Class({_headers:{},_respHeaders:{},_respHeaderString:"",callbackid:"",responseXML:null,
responseJSON:null,responseText:"",status:404,readyState:0,$init:function(){},
onload:function(){},
abort:function(){},
open:function(){},
send:function(){},
setRequestHeader:function(a,b){this._headers[a]=b},
getResponseHeader:function(a){return this._respHeaders[a]||""},
getAllResponseHeaders:function(){return this._respHeaderString},
_getCallbackInfo:function(){var b="";if(this.callbackid!=""){var a=0;do{b="$"+this.callbackid+"_"+a;a++}while(window.__jindo2_callback[b])}else{do b=
"$"+Math.floor(Math.random()*1E4);while(window.__jindo2_callback[b])}return{id:b,name:"window.__jindo2_callback."+
b}}});
acAjax.$Ajax.JSONPRequest=$Class({charset:"utf-8",_script:null,_onerror:null,_callback:function(b){if(this._onerror){clearTimeout(this._onerror);
this._onerror=null}var a=this;this.responseJSON=b;this.onload(this);setTimeout(function(){a.abort()},
10)},
abort:function(){if(this._script)try{this._script.parentNode.removeChild(this._script)}catch(a){}},
open:function(b,a){this.responseJSON=null;this._url=a},
send:function(d){var b=this;var e=this._getCallbackInfo();var a=document.getElementsByTagName("head")[0];
this._script=$("\x3cscript\x3e");this._script.type="text/javascript";this._script.charset=this.charset;
if(a)a.appendChild(this._script);else if(document.body)document.body.appendChild(this._script);window.__jindo2_callback[e.id]=
function(f){try{b.readyState=4;b.status=200;b._callback(f)}finally{delete window.__jindo2_callback[e.id]}};
var c=$Agent();if(c.navigator().ie||c.navigator().opera)this._script.onreadystatechange=function(){if(this.readyState==
"loaded"){if(!b.responseJSON){b.readyState=4;b.status=500;b._onerror=setTimeout(function(){b._callback(null)},
200)}this.onreadystatechange=null}};
else{this._script.onload=function(){if(!b.responseJSON){b.readyState=4;b.status=500;b._onerror=setTimeout(function(){b._callback(null)},
200)}this.onload=null;
this.onerror=null};
this._script.onerror=function(){if(!b.responseJSON){b.readyState=4;b.status=404;b._onerror=setTimeout(function(){b._callback(null)},
200)}this.onerror=null;
this.onload=null}}this._script.src=this._url+"?_callback\x3d"+e.name+"\x26"+d}}).extend(acAjax.$Ajax.RequestBase);
nhn.AutoComplete=$Class({_aData:[],_aDataErr:[],_elInput:null,_elSuggest:null,_oObserve:null,_elListbox:null,
_elTemplate:null,_elTiangleImg:null,_nListCnt:0,_elFrameDiv:null,_bCheckTemplate:false,_sSearchStatus:null,
$init:function(e,b,a){this.option({async:false,disabled:false,query:function(g,f){return[]}});
this.option(a);var d=this.getCookie(this.option("cookieName"));if(d)this._options.disabled=d=="use"?false:
true;this._elInput=$Element(e).attr("autocomplete","off");this._elSuggest=$Element(b);this._oObserve=
new nhn.ObserveInput(e);this._oObserve.attach("change",$Fn(this.onInput,this).bind());$Fn(this.onClick,
this).attach(this._elInput,"focus");$Fn(this._setClickDisplay,this).attach(document,"click");if(this.option("triangleBtn")){var elTriangleBtn=
$(this.option("triangleBtn"));var wel=$Element(elTriangleBtn);if(wel&&wel.parent)$Fn(this._setClickTriangle,
this).attach(wel.parent().$value(),"click");this._elTiangleImg=elTriangleBtn;if(this.option("disabled"))this._setTriangleImg("hide")}this._oObserve.start()},
_setTriangleImg:function(a){var welTiangleImg=$Element(this._elTiangleImg);if(a=="show"){if(!welTiangleImg.hasClass("on"))welTiangleImg.addClass("on")}else if(welTiangleImg.hasClass("on"))welTiangleImg.removeClass("on")},
_setClickTriangle:function(a){if(!this._elListbox)this._checkTemplate();var b=this._elInput.$value().value;
if(this.option("disabled")){this.useSuggest();this._setTriangleImg("show");if(b){this._nListCnt=0;this._sSearchStatus=
"Triangle_false";this.onInput();a.stop()}else{this._getFrameElement("atcmpStart").show();this.show();
a.stop()}}else{if(this._elSuggest.visible())this.hide();else if(b){this._sSearchStatus="Triangle_true";
this.onInput()}else{this._getFrameElement("atcmpIng").show();this.show()}a.stop()}},
_setClickDisplay:function(b){var c=b.element;var a=$Element(c);if(!a){this.hide();this.fireEvent("onBlur");
return false}if(a.attr("id")==this._elInput.attr("id")){if(this._elInput.$value().value)if(this._elSuggest.visible())this.hide();
else this.onInput()}else{this.hide();this.fireEvent("onBlur")}},
query:function(a){if(typeof a=="undefined")return this._options.query;this._options.query=a;return this},
async:function(a){if(typeof a=="undefined")return this._options.async;this._options.async=!!a;return this},
disabled:function(a){if(typeof a=="undefined")return this._options.disabled;this._options.disabled=a=
!!a;if(a)this._oObserve.stop();else this._oObserve.start();this._aData=[];if(!!a&&this._elSuggest.visible())this.hide();
this.paint();return this},
_getFrameElement:function(a){var j=this._elSuggest._element.contentWindow.document;var f=j.getElementsByTagName("div");
var h,d="";for(var c=0,b=f.length;c<b;c++)try{var h=f[c];var d=h.getAttribute("id");if(d)h.style.display=
"none"}catch(g){}return $Element(j.getElementById(a))},
_findElement:function(g,f){var e=f||document;var d=$A();var b="";var c="";if(!/^(\w+|\*)?(?:\.(\w+))?$/.test(g))return[];
b=RegExp.$1||"*";c=RegExp.$2?RegExp.$2+" ":"";var a=b=="*"?e.all||e.getElementsByTagName(b):e.getElementsByTagName(b);
$A(a).forEach(function(j,k,h){if(c){if((j.className+" ").indexOf(c)>-1)d.push(j)}else d.push(j)});
return d.$value()},
show:function(){var d=this._options.disabled;if(d)return false;if(this._elSuggest.height()<1)this._elSuggest.height(1);
this._elSuggest.show();this._setTriangleImg("show");if(d)this._elSuggest.height(0);else{var b=$Agent().navigator().ie;
var c=this._elSuggest._element.contentWindow.document.body;var a=b?c.scrollHeight:c.clientHeight;this._elSuggest.height(a);
this.fireEvent("acShow")}this._elInput.$value().focus();this._elInput.attr("aria-expanded","true");return this},
hide:function(){if(this._options.disabled)return false;this._elSelected=null;this._elSuggest.hide();this._setTriangleImg("hide");
this.fireEvent("acHide");this._elInput.attr("aria-expanded","false");return this},
onInput:function(b){this._aData=[];var a=this;var c=this._options;var d=this._elInput.$value().value;
if(c.async)c.query(d,function(e){a.onDataLoad(e)});
else this.onDataLoad(c.query(d))},
onDataLoad:function(a){this._aData=a;this._elSelected=null;this.paint()},
onClick:function(){if(!this._bCheckTemplate)this._checkTemplate();this.fireEvent("onFocus")},
highlight:function(a,e,c,b){var d=this.makeHighPre(a,e);return d==""?a:d},
makeHighPre:function(c,k){var j=new RegExp("[.*+?|()\\[\\]{}\\\\]","g");var h=k.replace(/()/g," ").replace(/^\s+|\s+$/g,
"");var e=h.match(/\S/g);var a=[];for(var g=0,b=e.length;g<b;g++)a.push(e[g].replace(/[\S]+/g,"["+e[g].toLowerCase().replace(j,
"\\$\x26")+"|"+e[g].toUpperCase().replace(j,"\\$\x26")+"] ").replace(/[\s]+/g,"[\\s]*"));h="("+a.join("")+
")";var f="";var d=new RegExp(h);if(d.test(c))f=c.replace(d,"\x3cstrong\x3e"+RegExp.$1+"\x3c/strong\x3e");
return f},
cutStr:function(e,h,k,g,j,b){var c=0;var f=e.length;for(var d=0,c=e.length;d<c;d++){var a=e.charAt(d).charCodeAt(0);
if(a>=44032&&a<=552013||a>=12593&&a<=12643)c+=k;else if(a>=65&&a<=90)if(a==73&&a==74)c+=j;else c+=g;else if(a>=
97&&a<=122)c+=j;else c+=b;if(Math.floor(c)>h){f=d;break}}return f<e.length?e.substring(0,f)+"...":e},
callCutStr:function(b,a){return this.cutStr(b,a,2,2,1,1)},
_getElementFirst:function(b){var a=b._element.firstElementChild||b._element.firstChild;if(!a)return null;
while(a&&a.nodeType!=1)a=a.nextSibling;return a?$Element(a):null},
_getElementLast:function(b){var a=b._element.lastElementChild||b._element.lastChild;if(!a)return null;
while(a&&a.nodeType!=1)a=a.previousSibling;return a?$Element(a):null},
getCookie:function(e){var a=document.cookie.split(/\s*;\s*/);var d=new RegExp("^(\\s*"+e+"\\s*\x3d)");
for(var c=0,b=a.length;c<b;c++)if(d.test(a[c]))return a[c].substr(RegExp.$1.length);return null},
setCookie:function(c,d,b,a){if(b==0)document.cookie=c+"\x3d"+escape(d)+"; path\x3d/; domain\x3d"+a+";";
else document.cookie=c+"\x3d"+escape(d)+"; path\x3d/; expires\x3d"+(new Date((new Date).getTime()+b*1E3*
60*60*24)).toGMTString()+"; domain\x3d"+a+";"}}).extend(SearchComponent);
nhn.AjaxSuggestUS=$Class({_oRequest:null,_htCache:{},_elSelected:null,_elForm:null,_aQuery:[],_sLastKey:null,
_nTotalListCnt:0,_htHelpImg:{},_nListCnt:0,_elFunoffBtn:null,$init:function(d,c,a){this.option({area:"searchResult",
suggestbox:"colgroup",query_var:"{query}",request_method:"get",request_data:{},sListMaxLength:60});this.option(a);
var b=this._options;b.async=true;b.query=$Fn(this._remoteQuery,this).bind();this.query_var(b.query_var);
this._elForm=document.forms[b.sFromName];$Fn(this.onKeyDown,this).attach(this._elInput,"keydown");if($Agent().navigator().opera){$Fn(this.handleBlur,
this).attach(this._elInput,"blur");$Fn(this.handleFocus,this).attach(this._elInput,"focus")}this._sLastKeyword=
""},
query_var:function(a){var b=this._options;if(typeof a=="undefined")return b.query_var;b.query_var=a;b.query_var_regexp=
new RegExp(a.replace(/([\?\.\*\+\-\/\(\)\{\}\[\]\:\!\^\$\\])/g,"\\$1"),"g");return this},
disabled:function(a){if(typeof a=="undefined")return this._options.disabled;a=!!a;return this.$super.disabled(a)},
_remoteQuery:function(c,i){var f=this._options;if(f.disabled)return false;c=c.replace(/^\s+/g,"");if(!c){this._elSelected=
null;return i([])}else this._sLastKeyword=c;this._aQuery=[];this._aData=[];this._aDataErr=[];if(typeof this._htCache[c]!=
"undefined"&&typeof this._htCache[c]=="object")if(c.toLowerCase()==this._htCache[c].aQuery[0]){this._aQuery=
this._htCache[c].aQuery;this._aData=this._htCache[c].aData;this._aDataErr=this._htCache[c].aDataErr;return i(this._aData)}try{this._oRequest.abort();
this._oRequest=null}catch(h){}var g=$H(f.request_data);g.map(function(j,e,l){if(typeof j=="string")return j.replace(f.query_var_regexp,
c);else return j});
function a(e){return e.replace(/^\s+|\s+$/g,"")}
var b=this;var d=f.url.replace(f.query_var_regexp,c);this._oRequest=$Ajax(d,{jsonp_charset:"UTF-8",type:f.request_type,
method:f.request_method,onload:function(p){try{var n=p.json();var j=n.items;b._aQuery=n.query;for(var m=
0,l=j.length;m<l;m++){var k=j[m];var o=parseInt(k.length,10);if(o>0)$A(k).forEach(function(r,s,e){b._aData[b._aData.length]=
{encoded:encodeURIComponent(r[0]),txt:a(b.callCutStr(r[0],f.sListMaxLength)),in_txt:a(r[0])}})}if(n.query)if(c.toLowerCase()==
b._aQuery[0])b._htCache[c]={aQuery:b._aQuery,
aData:b._aData,aDataErr:b._aDataErr};i(b._aData)}catch(q){}}}).request(g.$value())},
handleFocus:function(a){this._sLastKey=null},
handleBlur:function(a){if(this._sLastKey==9)this._elInput.$value().focus()},
handleKeyDown:function(a){this._sLastKey=a.key().keyCode},
_runHotkeyFunctionWithCtrl:function(c){var b=c.key();var d=b.keyCode;if(d===49){c.stop();window.open("https://help.naver.com/support/contents/contents.nhn?serviceNo\x3d606\x26categoryNo\x3d1994",
"_blank")}if(d===50){c.stop();this.unuseSuggest();var a=this._elInput.$value();a.focus()}if(d===51){c.stop();
this.useSuggest();this._setFunctionOffImg("on");this._setTriangleImg("hide")}},
_getDefaultInputValue:function(){var a=this._sLastKeyword;if(typeof a==="string"&&a!=="")return a;else return this._elInput.$value().defaultValue},
onKeyDown:function(f){if(!this._oObserve._getTimerRunning())if(!this._bCheckTemplate){this._checkTemplate();
this._oObserve._onFocus()}var c=f.key();if($Agent().navigator().opera)this.handleKeyDown(f);if(this._elSuggest.visible()===
false){if(c.keyCode===9)return;if(c.down===true)if(this._elInput.$value().value!==""&&this._aData.length===
0){this.onInput();return}}if(c.ctrl){this._runHotkeyFunctionWithCtrl(f);return}if(!this._elInput.$value().value||
this._options.disabled){this.hide();return}if(!c.down&&!c.up&&c.keyCode!=9){if(c.enter)this.hide();return}if(this._nTotalListCnt>
0)this.show();else{this.hide();return}if($Agent().os().mac){this._elInput.$value().focus();this._elInput.$value().blur();
this._elInput.$value().focus();this._oObserve._onFocus()}if(this._elSelected&&!this._elSelected.$value().parentNode)this._elSelected=
null;var a=0;try{a=this._elListbox.$value().childNodes.length}catch(g){return false}if(!this._elSelected){if(c.down||
c.keyCode==9&&!c.shift){if(a)this._elSelected=this._getElementFirst(this._elListbox)}else{this.hide();
return}f.stop();if(this._elSelected){$Element(this._elSelected._element).addClass("atcmp_on");$Element(this._elSelected._element).attr("aria-selected",
"true");$Element(this._elSelected._element).attr("tabindex","0");this._oObserve.stop();this._elInput.$value().value=
this._getElementLast(this._elSelected).text();this._oObserve.start();this.show()}f.stop();var b=$Element(this._elSelected.$value().parentNode).className();
if(b)this._setParameter(this._elSelected.child()[0]);return}$Element(this._elSelected._element).removeClass("atcmp_on");
this._elSelected._element.removeAttribute("aria-selected");$Element(this._elSelected._element).attr("tabindex",
"-1");var d=this._getElementFirst(this._elSelected).removeClass("atcmp_on").parent().$value();if(c.down||
c.keyCode==9&&!c.shift){if(d.nextSibling)this._elSelected=this._elSelected.next()}else if(d.previousSibling)this._elSelected=
this._elSelected.prev();f.stop();if(d===this._elSelected.$value()){this._elSelected=null;this._oObserve.stop();
this._elInput.$value().value=this._getDefaultInputValue();this._elInput.$value().select();var nextElement=
this._elListbox.$value().parentNode.nextElementSibling;$$("._searchBoxEndBtn",nextElement)[0].focus();
this._oObserve.start();return}if(this._elSelected){$Element(this._elSelected._element).addClass("atcmp_on");
$Element(this._elSelected._element).attr("aria-selected","true");$Element(this._elSelected._element).attr("tabindex",
"0");this._oObserve.stop();this._elInput.$value().value=this._getElementLast(this._elSelected).text();
this._oObserve.start()}else this.hide();var b=$Element(this._elSelected.$value().parentNode).className();
if(b)this._setParameter(this._elSelected.child()[0])},
_setParameter:function(f){var d=typeof f._element=="undefined"?f.element:f._element;var b="";var c="";
try{if(d.tagName=="STRONG")d=d.parentNode;if(d.parentNode.tagName=="LI"||d.tagName=="EM"){if(d.parentNode.tagName==
"LI"){var a=d.parentNode.parentNode.className.replace(/ other/g,"");a=a.replace(/^\s+|\s+$/g,"");if(a==
this._options.listbox)c="tab_sug.pre"}if(d.tagName=="EM")c="tab_sug.tx";return true}return false}catch(g){return false}},
_setLinkMove:function(a){if(this._setParameter(a)){this._oObserve.stop();this._elInput.$value().value=
this._getElementLast(this._elSelected).text();this._oObserve.start();this.hide();this.fireEvent("actSubmit")}},
onMouseOver:function(b){var a=b.element;if(!a||!a.tagName||a.tagName.toUpperCase()!="A")return false;
if(!a.parentNode||!a.parentNode.tagName||a.parentNode.tagName.toUpperCase()!="LI")return false;if(this._elSelected){$Element(this._elSelected._element).removeClass("atcmp_on");
this._elSelected._element.removeAttribute("aria-selected");$Element(this._elSelected._element).attr("tabindex",
"-1")}$Element(a.parentNode).addClass("atcmp_on");$Element(a.parentNode).attr("aria-selected","true");
$Element(a.parentNode).attr("tabindex","0");this._elSelected=$Element(a.parentNode)},
_onKeydownSelectBoxEnd:function(e){if($Element(e.currentElement).hasClass("funoff")){e.stop(jindo.$Event.CANCEL_DEFAULT);
this.hide();this._elInput.$value().focus();return}},
_checkTemplate:function(){this._elListbox="";this._elTemplate="";var b=this._options;var g=this._elSuggest._element.contentWindow.document;
var x=g.getElementById("atcmp");if(x&&x.innerHTML.indexOf("@txt@")>-1){this._htHelpImg.helpimg1=g.getElementById("help_tooltip1");
this._htHelpImg.helpimg2=g.getElementById("help_tooltip2");this._htHelpImg.helpimg3=g.getElementById("help_tooltip3");
var i=$Element(g.getElementById("atcmp"));var d=$Element(g.getElementById("atcmpIng"));var h=$Element(g.getElementById("atcmpStart"));
var selectBoxEnd=$A($$("._searchBoxEndBtn",x));$Fn(this.onMouseOver,this).attach(i,"mouseover");$Fn(this._setLinkMove,
this).attach(i,"click");$Fn(this._onKeydownSelectBoxEnd,this).attach(selectBoxEnd,"keydown");var c=this._findElement("."+
b.listbox,i.$value())[0];this._elListbox=c?$Element(c):null;this._elTemplate=c?this._elListbox.html().replace(/^\s+|\s+$/g,
""):null;var f=this._findElement(".funoff",i.$value())[0];$Fn($Fn(this._setFunctionOffImg,this).bind("on",
"1"),this).attach(f,"mouseover");$Fn($Fn(this._setFunctionOffImg,this).bind("off"),this).attach(f,"mouseout");
$Fn($Fn(this._setFunctionOffImg,this).bind("on","1"),this).attach(f,"focus");$Fn($Fn(this._setFunctionOffImg,
this).bind("off"),this).attach(f,"blur");this._elFunoffBtn=f;var e=this._findElement(".funoff",d.$value())[0];
$Fn($Fn(this._setFunctionOffImg,this).bind("on","2"),this).attach(e,"mouseover");$Fn($Fn(this._setFunctionOffImg,
this).bind("off"),this).attach(e,"mouseout");$Fn($Fn(this._setFunctionOffImg,this).bind("on","2"),this).attach(e,
"focus");$Fn($Fn(this._setFunctionOffImg,this).bind("off"),this).attach(e,"blur");var a=this._findElement(".funoff",
h.$value())[0];$Fn($Fn(this._setFunctionOffImg,this).bind("on","3"),this).attach(a,"mouseover");$Fn($Fn(this._setFunctionOffImg,
this).bind("off"),this).attach(a,"mouseout");$Fn($Fn(this._setFunctionOffImg,this).bind("on","3"),this).attach(a,
"focus");$Fn($Fn(this._setFunctionOffImg,this).bind("off"),this).attach(a,"blur");this._bCheckTemplate=
true}else this._elSuggest._element.src=this._elSuggest._element.src},
setTplReplace:function(e,f,c,d){var g=new Object;if(typeof c!="object")g=f;else if(typeof f!="object")g=
c;else g=f;var b=[];for(var a in g){b[a]=g[a];if(a=="txt")b.txt=this.highlight(g.txt,this._aQuery[0],
this._aQuery[1],d);if(!g.propertyIsEnumerable(a))continue;e=e.replace(new RegExp("@"+a+"@","g"),b[a])}return e},
_setFunctionOffImg:function(c,d){if(c=="on"){var a=d?d:1;var b=this._htHelpImg["helpimg"+a];$Element(b).show();
$Element(b).css({bottom:"27px",right:"2px"})}else{$Element(this._htHelpImg.helpimg1).hide();$Element(this._htHelpImg.helpimg2).hide();
$Element(this._htHelpImg.helpimg3).hide()}},
paint:function(){var d=this._options;if(d.disabled)return false;if(!this._elListbox)this._checkTemplate();
if(!this._elListbox)return false;this._setFunctionOffImg("off");var b=[];var g=this._aData;var f=this._aDataErr;
var a=0;var e=d.listMaxCount;a=g.length>0?g.length<e?g.length:e:f.length<e?f.length:e;this._nListCnt=
0;if(a>0){this._elListbox.show();for(var c=0;c<a;c++)b[b.length]=this.setTplReplace(this._elTemplate,
g[c],f[c],false);this._nListCnt++;this._elListbox.html(b.join(""))}else{this._elListbox.hide();this._elListbox.html("")}this._nTotalListCnt=
a;if(this._nTotalListCnt>0){this._getFrameElement("atcmp").show();this.show();this._sSearchStatus=""}else{this.hide();
this._setStatusLayer()}return this},
_setStatusLayer:function(){if(this._sSearchStatus)if(this._sSearchStatus=="Triangle_false"||this._sSearchStatus==
"Triangle_true"){var a=this._sSearchStatus=="Triangle_false"?"atcmpStart":"atcmpIng";this._getFrameElement(a).show();
this.show()}this._sSearchStatus=""},
unuseSuggest:function(b){this.setCookie(this.option("cookieName"),"unuse",21900,"naver.com");var a=this._options;
this._setFunctionOffImg("off");this.hide();a.disabled=true;this._setTriangleImg("hide");this._elInput.$value().focus();
this._elInput.$value().blur()},
useSuggest:function(){this.setCookie(this.option("cookieName"),"use",21900,"naver.com");var a=this._options;
a.disabled=false;if($Agent().navigator().opera)$Element(this._elFunoffBtn).$value().focus()}}).extend(nhn.AutoComplete);
/*
 * NHN corp. <http://www.nhncorp.com> @name nhn.Kin.Common.js @author icebelle
 */
try{document.domain="naver.com"}catch(e){}
if($Agent().navigator().version==6)try{document.execCommand("BackgroundImageCache",false,true)}catch(e){}
if(!window.console){window.console={};console.log=function(){};
console.warn=function(){};
console.error=function(){}}
oInitialData={"sURL":(window.location.protocol==="https:"||window.location.protocol==="http:"?window.location.protocol:
"http:")+"//"+location.hostname+":"+location.port};
nhn.Kin={_oInstance:{},_oAgent:$Agent(),_oLocalData:{},_oElement:{},sBaseUrl:oInitialData?oInitialData.sURL:
"",sAjaxUrl:oInitialData?oInitialData.sURL+"/ajax/":"",sImagePath:"https://ssl.pstatic.net/static/kin/09renewal/",
sImagePathSearch:"https://ssl.pstatic.net/static/kin/09renewal/",oMessage:{"MAIN_001":"\uc9c8\ubb38\uc744 \ub4f1\ub85d\ud558\ub824\uba74 \ub85c\uadf8\uc778\ud574 \uc8fc\uc138\uc694.",
"MAIN_002":"\uc9c8\ubb38 \uc81c\ubaa9\uc744 \uc368 \uc8fc\uc138\uc694 (\ucd5c\ub300 80\uc790)","MAIN_003":"\ub2f5\ubcc0\ud560 \uc9c8\ubb38\uc744 \ucc3e\uc744 \uc218 \uc788\ub294 \ud0a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
"MYACTIVITY_001":"1:1\uc9c8\ubb38 \uc54c\ub9bc\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
"MYACTIVITY_002":"\uac1c\ud3b8 \ud6c4 \ubcc0\uacbd \uc54c\ub9bc\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
"MYACTIVITY_003":"\uc644\ub8cc\ub41c \uc9c8\ubb38 \uc54c\ub9bc\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
"MYACTIVITY_004":"1:1\uc9c8\ubb38 \ubc18\ub824 \uc54c\ub9bc\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
"INTEREST_001":"\uc120\ud0dd\ud55c \uad00\uc2ec\uc124\uc815 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc801\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
"INTEREST_002":"\ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4.","INTEREST_003":"\uc9c0\uc2ddiN\uc5d0 \uac8c\uc2dc\ubb3c\uc744 1\uac1c \uc774\uc0c1 \uc791\uc131\ud558\uc5ec\uc57c \uad00\uc2ec\ubd84\uc57c\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
"INTEREST_004":"{DIRNAME}\uc740(\ub294) \uc774\ubbf8 \ub4f1\ub85d\ub41c \uad00\uc2ec\ubd84\uc57c \uc785\ub2c8\ub2e4.",
"INTEREST_005":"14\uc138 \ubbf8\ub9cc\uc758 \uc0ac\uc6a9\uc790\ub294 \uc774 \ub514\ub809\ud1a0\ub9ac\ub97c \uad00\uc2ec\ubd84\uc57c\ub85c \uc124\uc815\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
"INTEREST_006":"\ub0b4 \uad00\uc2ec\ubd84\uc57c\ub85c \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud504\ub85c\ud544\x3e\ub098\uc758\uad00\uc2ec\uc9c8\ubb38\uc5d0\uc11c \ucd94\uac00\ub41c \ub514\ub809\ud1a0\ub9ac\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694.",
"INTEREST_007":"\ub0b4 \uad00\uc2ec\ubd84\uc57c\ub85c \ucd94\uac00\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ud655\uc778 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.",
"LOCAL_001":"{DIRNAME}\uc740(\ub294) \uc774\ubbf8 \ub4f1\ub85d\ub41c \uad00\uc2ec\uc9c0\uc5ed\uc785\ub2c8\ub2e4.",
"LOCAL_002":"\ub0b4 \uad00\uc2ec\uc9c0\uc5ed\uc73c\ub85c \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud504\ub85c\ud544\x3e\ub098\uc758\uad00\uc2ec\uc9c8\ubb38\uc5d0\uc11c \ucd94\uac00\ub41c \ub514\ub809\ud1a0\ub9ac\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694.",
"LOCAL_003":"\ub0b4 \uad00\uc2ec\uc9c0\uc5ed\uc73c\ub85c \ucd94\uac00\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ud655\uc778 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.",
"KEYWORD_001":"\uc9c0\uc2ddiN\uc5d0 \uac8c\uc2dc\ubb3c\uc744 1\uac1c \uc774\uc0c1 \uc791\uc131\ud558\uc5ec\uc57c \uad00\uc2ec\ud0a4\uc6cc\ub4dc\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
"KEYWORD_002":"\ud0a4\uc6cc\ub4dc\ub85c \uc815\ud655\ud558\uac8c \uc785\ub825\ud574 \uc8fc\uc138\uc694.\n\uacf5\ubc31\uc774 \uc788\ub294 \ubb38\uc7a5\uc740 \uc785\ub825\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
"KEYWORD_003":"\uad00\uc2ec\ud0a4\uc6cc\ub4dc\ub97c \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",
"COMMON_DELETE":"\ud655\uc778\ud558\uc2e0 \uc54c\ub9bc\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
"TIMEOUT":"\ub124\ud2b8\uc6cc\ud06c \uc9c0\uc5f0\uc774 \ubc1c\uc0dd\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",
"ERROR":"\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."},
initialize:function(){this._oAgent=$Agent();this._oElement["kin_header"]=jindo.$$.getSingle("div.header_wrap");
this._oElement["kin_container"]=$("container");this._oElement["kin_location"]=$("au_location");this._oElement["kin_content"]=
$("content");this._oElement["kin_aside"]=$("au_aside");this._oElement["kin_footer"]=jindo.$$.getSingle("div.footer_wrap");
this._initializeMain();this._attachEvent();$Fn(this.destroy,this).attach(window,"unload")},
destroy:function(){this._oInstance=null;this._oAgent=null;this._oLocalData=null;this._oElement=null;this.sBaseUrl=
null;this.sAjaxUrl=null;this.sImagePath=null;this.oMessage=null},
_initializeMain:function(){},
_attachEvent:function(){$Fn(function(e){try{var bReturn=nhn.Kin.Utility.callNclick(e)}catch(e){}if(!bReturn){e.stop();
return false}},this).attach(document.body,"click")},
getAgent:function(){return this._oAgent},
getElement:function(sElementId){return this._oElement["kin_"+sElementId]},
getAjaxUrl:function(){return this.sAjaxUrl},
getImagePath:function(){return this.sImagePath},
getMessage:function(sMessageId){if(!sMessageId||!this.oMessage[sMessageId])return false;return this.oMessage[sMessageId]},
getInstance:function(sInstanceId){if(!sInstanceId)return false;if(!this._oInstance[sInstanceId])switch(sInstanceId){case "ajaxManager":this._oInstance["ajaxManager"]=
new nhn.Kin.Utility.AjaxManager;break;case "cache":this._oInstance["cache"]=new nhn.Kin.Utility.Cache({"nCacheLimit":12});
break;case "profile":this._oInstance["profile"]=new nhn.Kin.Utility.ProfileManager;break;case "tooltip":this._oInstance["tooltip"]=
new nhn.Kin.Utility.TooltipManager;break;case "base64encode":this._oInstance["base64encode"]=new nhn.Kin.Utility.Base64Encode;
break}if(sInstanceId&&this._oInstance[sInstanceId])return this._oInstance[sInstanceId];else return null},
alertRos:function(e,bRosCheck){e=e||window.event;var we=$Event(e);nhn.Kin.Utility.callClickCode(we);if(this.checkRos(bRosCheck)){we.stop();
return false}},
checkRos:function(bRosCheck){bRosCheck=bRosCheck||true;try{if(bRosCheck&&kinRos&&kinRos.bIsActionNoticeDisplay){alert(kinRos.sAlertMsg||
"\uc11c\ube44\uc2a4 \uc815\uae30 \uc810\uac80 \uc911\uc73c\ub85c \uc120\ud0dd\ud558\uc2e0 \uc791\uc5c5\uc744 \uc2e4\ud589\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n \ubd88\ud3b8\uc744 \ub4dc\ub824\uc11c \uc8c4\uc1a1\ud569\ub2c8\ub2e4.\n \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");
return true}}catch(e){}return false},
checkD1Ros:function(sUrl){try{if(kinRos&&kinRos.bIsActionNoticeDisplay){alert(kinRos.sAlertMsg||"\uc11c\ube44\uc2a4 \uc815\uae30 \uc810\uac80 \uc911\uc73c\ub85c \uc120\ud0dd\ud558\uc2e0 \uc791\uc5c5\uc744 \uc2e4\ud589\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n \ubd88\ud3b8\uc744 \ub4dc\ub824\uc11c \uc8c4\uc1a1\ud569\ub2c8\ub2e4.\n \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");
return true}}catch(e){}return false},
checkRosAndGoUrl:function(e,sUrl,sRosUrl,bNewWindow){e=e||window.event;if(typeof sRosUrl=="undefined")sRosUrl=
sUrl;var we=$Event(e);nhn.Kin.Utility.callClickCode(we);if(this.checkD1Ros(sRosUrl)){we.stop();return false}try{if(bNewWindow)window.open(sUrl,
"NEW_KIN");else location.href=sUrl}catch(e){}},
checkRosAndGoUrlWhenLoggedIn:function(e,sUrl,sRosUrl,bNewWindow){e=e||window.event;if(typeof sRosUrl==
"undefined")sRosUrl=sUrl;var we=$Event(e);nhn.Kin.Utility.callClickCode(we);if(this.checkD1Ros(sRosUrl)){we.stop();
return false}if(nhn.isLogin==false)sUrl="https://nid.naver.com/nidlogin.login?mode\x3dform\x26url\x3d"+
encodeURIComponent(location.href);try{if(bNewWindow)window.open(sUrl,"NEW_KIN");else location.href=sUrl}catch(e){}},
getBetPointCssClassName:function(nBetPoint){var isNumber=typeof nBetPoint==="number"&&isFinite(nBetPoint);
if(!isNumber||nBetPoint<1)return"";if(nBetPoint>=100)return"type5";else if(nBetPoint>=80)return"type4";
else if(nBetPoint>=55)return"type3";else if(nBetPoint>=30)return"type2";else return"type1"},
drawMaleFemaleDountChart:function(id,male,female){jindo.LazyLoading.load(nhn.jsDir+"/kin.c3p.chart.js",
$Fn(function(){if(typeof c3p==="undefined")return;var wElTarget=$Element(id);if(!wElTarget)return;c3p.__c3Hack("getSvgArc",
"d3.svg.arc()","$1.padAngle("+.056+")");c3p.generate("#"+id,"datalab.donut1",{data:{columns:[["female",
female],["male",male]]},color:{pattern:["#FF6D6D","#78C1FF"]},donut:{padAngle:.056,width:19.5},size:{height:$Element(id).height()}});
var aSiblingLableArea=wElTarget.next(function(oElCurrent){return $Element(oElCurrent).hasClass("_lableArea")});
if(aSiblingLableArea&&aSiblingLableArea.length>0){var wLabelArea=aSiblingLableArea[0];var wMalePercentBlindText=
$Element($$.getSingle("span._malePercentBlindText",wLabelArea.$value()));if(wMalePercentBlindText)wMalePercentBlindText.text(male+
"%");var wFemalePercentBlindText=$Element($$.getSingle("span._femalePercentBlindText",wLabelArea.$value()));
if(wFemalePercentBlindText)wFemalePercentBlindText.text(female+"%")}},this).bind())},
toggleAriaHidden:function(el){var oElem=jindo.$Element(el);if(!oElem)return;var bAriaHidden=oElem.attr("aria-hidden");
if(bAriaHidden===null)return;if(bAriaHidden=="true")oElem.attr({"aria-hidden":"false"});else oElem.attr({"aria-hidden":"true"})},
toggleAriaChecked:function(el){var oElem=jindo.$Element(el);if(!oElem)return;var bAriaChecked=oElem.attr("aria-checked");
if(bAriaChecked===null)return;if(bAriaChecked=="true")oElem.attr({"aria-checked":"false"});else oElem.attr({"aria-checked":"true"})}};
$Fn(function(){nhn.Kin.initialize();if($("au_board_list")&&!nhn.isPortableDevice)nhn.Kin.Utility.initializeTooltip()}).attach(document,
"domready");
if(typeof nhn.Kin=="undefined")nhn.Kin={};
if(typeof Object.keys==="undefined")Object.keys=function(oObject){if(!oObject)return null;var aKeys=[];
for(var sKey in oObject)if(oObject.hasOwnProperty(sKey))aKeys.push(sKey);return aKeys.length>0?aKeys:
null};
nhn.Kin.Utility={KEY:{STRING:{"TAB":"Tab","LEFT":"ArrowLeft","UP":"ArrowUp","RIGHT":"ArrowRight","DOWN":"ArrowDown",
"ENTER":"Enter","ESC":"Escape","SPACE":" ","SHIFT":"Shift"},CODE:{"TAB":9,"LEFT":37,"UP":38,"RIGHT":39,
"DOWN":40,"ENTER":13,"ESC":27,"SPACE":32,"SHIFT":16}},getWhitespaceMergedString:function(sString){if(!sString||
typeof sString!=="string")return sString;return sString.replace(/[\t\r\n]/g," ").replace(/[\s]{2,}/g,
" ")},
getDomain:function(){return location.href.match(/http:\/\/([^\/]*)/i)[0]},
getSimpleURL:function(sSourceURL){sSourceURL=sSourceURL||window.location.toString();if(sSourceURL.indexOf("?")>
-1)sSourceURL=sSourceURL.split("?")[0];if(sSourceURL.indexOf("#")>-1)sSourceURL=sSourceURL.split("#")[0];
return sSourceURL},
getURLParameter:function(sURL){var sSourceURL=sURL||window.location.toString();var sURLParams="";if(sSourceURL.indexOf("?")>
-1){sURLParams=sSourceURL.split("?")[1];if(sURLParams.indexOf("#")>-1)sURLParams=sURLParams.split("#")[0]}return sURLParams},
getURLParameterObject:function(sURL){var sURLParams=this.getURLParameter(sURL),oURLParams={};if(sURLParams){var i,
len,aTemp;aParams=sURLParams.split("\x26");for(i=0,len=aParams.length;i<len;i++)try{aTemp=aParams[i].split("\x3d");
oURLParams[aTemp[0]]=aTemp[1]||""}catch(e){}}return oURLParams},
setOption:function(oUserOptions,oDefaultOptions){if(typeof oDefaultOptions=="undefined")oDefaultOptions=
{};for(var p in oUserOptions)oDefaultOptions[p]=oUserOptions[p];return oDefaultOptions},
getTagNumberString:function(sNumberString,sTagId){var oTpls={"comma":jindo.$Template('\x3cimg width\x3d"1" height\x3d"1" class\x3d"num{\x3dnum}" src\x3d"https://ssl.pstatic.net/static/kin/09renewal/blank.gif" alt\x3d"{\x3dalt}"/\x3e\n'),
"percent":jindo.$Template('\x3cimg width\x3d"1" height\x3d"1" class\x3d"num{\x3dnum}" src\x3d"https://ssl.pstatic.net/static/kin/09renewal/blank.gif" alt\x3d"{\x3dalt}"/\x3e\n'),
"none":jindo.$Template('\x3cimg width\x3d"1" height\x3d"1" class\x3d"num{\x3dnum}" src\x3d"https://ssl.pstatic.net/static/kin/09renewal/blank.gif" alt\x3d"{\x3dalt}"/\x3e\n')};
var sTagNumberHTML="";if(sTagId&&oTpls[sTagId]){if(typeof sNumberString!="String")sNumberString=String(sNumberString);
var sChar;if(sTagId=="percent"){for(var i=0,len=sNumberString.length;i<len;i++){sChar=sNumberString.charAt(i);
if(sChar=="."){sTagNumberHTML+=oTpls[sTagId].process({"num":"_dot","alt":"\uc810"});try{sChar=sNumberString.charAt(i+
1);if(sChar){sTagNumberHTML+=oTpls[sTagId].process({"num":sChar,"alt":sChar});break}}catch(e){}}else sTagNumberHTML+=
oTpls[sTagId].process({"num":sChar,"alt":sChar})}sTagNumberHTML+=oTpls[sTagId].process({"num":"_per",
"alt":"\ud37c\uc13c\ud2b8"})}else if(sTagId=="comma"){sNumberString=nhn.Kin.Utility.getCommaNumberString(sNumberString);
for(var i=0,len=sNumberString.length;i<len;i++){sChar=sNumberString.charAt(i);if(sChar==",")sTagNumberHTML+=
oTpls[sTagId].process({num:"_comma","alt":"\ucf64\ub9c8"});else sTagNumberHTML+=oTpls[sTagId].process({num:sChar,
"alt":sChar})}}else for(var i=0,len=sNumberString.length;i<len;i++){sChar=sNumberString.charAt(i);sTagNumberHTML+=
oTpls[sTagId].process({num:sChar,"alt":"\ud37c\uc13c\ud2b8"})}}return sTagNumberHTML},
getCommaNumberString:function(sNumberString){if(typeof sNumberString=="undefined")return"0";if(typeof sNumberString!=
"String")sNumberString=String(sNumberString);var reg=/(\d)(?=(\d\d\d)+$)/igm;sNumberString=sNumberString.replace(reg,
"$1,");return sNumberString},
removeWhiteSpace:function(sText){return typeof sText=="string"?sText.replace(/\s/g,""):""},
replaceWhiteSpace:function(sText){return typeof sText=="string"?sText.replace(/\s{2}/g,"\x26nbsp;\x26nbsp;"):
""},
restoreWhiteSpace:function(sValue){sValue=sValue.replace(/\&nbsp\;/g," ");sValue=jindo.$S(sValue).unescapeHTML().$value();
return sValue},
getDateString:function(oDate){var month=oDate.getMonth()+1;month=month>=10?""+month:"0"+month;var day=
oDate.getDate();day=day>=10?""+day:"0"+day;return oDate.getFullYear()+month+day},
getDateObjectFromDate:function(dDate){var oRet={};if(dDate)oRet={"time":dDate.getTime(),"minutes":dDate.getMinutes(),
"seconds":dDate.getSeconds(),"hours":dDate.getHours(),"month":dDate.getMonth()+1,"year":String(dDate.getFullYear()).substring(2,
4),"timezoneOffset":dDate.getTimezoneOffset(),"day":dDate.getDay(),"date":dDate.getDate()};return oRet},
getFullStringNumber:function(num,length){var isMinus=num<0;var sNum=String(isMinus?-1*num:num);var sPrefix=
"";var sRet=num;for(var idx=0;idx<length-sNum.length;idx++)sPrefix+="0";sRet=isMinus?"-"+sPrefix+sNum:
sPrefix+sNum;return sRet},
getPostDate:function(oNowDate,oPostedDate,oFormat){var nTimeStampToday,nTimeStampPosted;if(oNowDate&&
oNowDate.time)nTimeStampToday=oNowDate.time;if(oPostedDate&&oPostedDate.time)nTimeStampPosted=oPostedDate.time;
var dPostedDate=new Date;var dNowDate=new Date;dPostedDate.setTime(nTimeStampPosted);dNowDate.setTime(nTimeStampToday);
oPostedDate=nhn.Kin.Utility.getDateObjectFromDate(dPostedDate);oNowDate=nhn.Kin.Utility.getDateObjectFromDate(dNowDate);
if(!oFormat)oFormat={c1:{start:86400,end:864E6,format:"{\x3dyear}.{\x3dmonth}.{\x3ddate}."},c2:{start:1200,
end:86400,format:"{\x3dhours}:{\x3dminutes}"},c3:{start:20,end:1200,format:"\x3cem\x3e{\x3daftermin}\x3c/em\x3e\ubd84 \uc804"},
c4:{start:-1E5,end:20,format:"\x3cem\x3e{\x3daftersec}\x3c/em\x3e\ucd08 \uc804"}};if(typeof nTimeStampToday!=
"number")nTimeStampToday=Number(nTimeStampToday);if(typeof nTimeStampPosted!="number")nTimeStampPosted=
Number(nTimeStampPosted);var nRemainder=Math.ceil((nTimeStampToday-nTimeStampPosted)/1E3);var year=nhn.Kin.Utility.getFullStringNumber(oPostedDate.year,
2);var month=nhn.Kin.Utility.getFullStringNumber(oPostedDate.month,2);var hours12=oPostedDate.hours>12?
oPostedDate.hours-12:oPostedDate.hours;hours12=nhn.Kin.Utility.getFullStringNumber(hours12,2);var hours=
nhn.Kin.Utility.getFullStringNumber(oPostedDate.hours,2);var date=nhn.Kin.Utility.getFullStringNumber(oPostedDate.date,
2);var minutes=nhn.Kin.Utility.getFullStringNumber(oPostedDate.minutes,2);var aftermin=Math.ceil(nRemainder/
60);var aftersec=Math.ceil(nRemainder);var afterhour=Math.ceil(aftermin/60);aftermin=aftermin==0?1:aftermin;
aftersec=aftersec<1?1:aftersec;afterhour=afterhour==0?1:afterhour;var meridiem=oPostedDate.hours>12?"\uc624\ud6c4":
"\uc624\uc804";var oData={year:year,month:month,date:date,hours:hours,hours12:hours12,minutes:minutes,
aftermin:aftermin,aftersec:aftersec,afterhour:afterhour,meridiem:meridiem};var oReturn={};var x;if(oPostedDate.date!=
oNowDate.date){x="c1";var tpl=new jindo.$Template(oFormat[x].format);oReturn={strHtml:tpl.process(oData),
type:x}}else for(x in oFormat){var obj=oFormat[x];if(nRemainder>=obj.start&&nRemainder<obj.end){var tpl=
new jindo.$Template(obj.format);oReturn={strHtml:tpl.process(oData),type:x}}}oReturn.isOver24=oData.afterhour>=
24;oReturn.isOver20Sec=oData.aftersec>20;return oReturn},
changeJavascriptDate:function(sNormalDate){var aMatchedValue=sNormalDate.match(/^([0-9]{4,})-([01][0-9])-([0-3][0-9]) ([0-2][0-9]):([0-5][0-9]):([0-5][0-9])/);
if(aMatchedValue)return new Date(aMatchedValue[1],Number(aMatchedValue[2])-1,aMatchedValue[3],aMatchedValue[4],
aMatchedValue[5],aMatchedValue[6]);aMatchedValue=sNormalDate.match(/^([0-9]{4,})-([01][0-9])-([0-3][0-9])/);
if(aMatchedValue)return new Date(aMatchedValue[1],Number(aMatchedValue[2])-1,aMatchedValue[3]);aMatchedValue=
sNormalDate.match(/^([0-9]{4,})\.([01][0-9])\.([0-3][0-9])\. ([0-2][0-9]):([0-5][0-9]):([0-5][0-9])/);
if(aMatchedValue)return new Date(aMatchedValue[1],Number(aMatchedValue[2])-1,aMatchedValue[3],aMatchedValue[4],
aMatchedValue[5],aMatchedValue[6]);aMatchedValue=sNormalDate.match(/^([0-9]{4,})\.([01][0-9])\.([0-3][0-9])\./);
if(aMatchedValue)return new Date(aMatchedValue[1],Number(aMatchedValue[2])-1,aMatchedValue[3]);return null},
changeDateFormat:function(sDate,sFormat){var sFormatReg=/(Y{0,4})[^YMDhms]*(M{0,2})[^YMDhms]*(D{0,2})[^YMDhms]*(h{0,2})[^YMDhms]*(m{0,2})[^YMDhms]*(s{0,2})[^YMDhms]*/;
var aFormatMatch=sFormat.match(sFormatReg);if(!aFormatMatch)return false;var sYearFormat=aFormatMatch[1];
var sMonthFormat=aFormatMatch[2];var sDayFormat=aFormatMatch[3];var sHourFormat=aFormatMatch[4];var sMinuteFormat=
aFormatMatch[5];var sSecondFormat=aFormatMatch[6];var sDateReg=/(\d\d\d\d)-(\d\d)-(\d\d)[ ](\d\d):(\d\d):(\d\d)/i;
var aDateMatch=sDate.match(sDateReg);if(!aDateMatch)return false;var sChangedDate=sFormat;if(sYearFormat){var sYear=
aDateMatch[1];if(sYearFormat=="YY")sYear=sYear.slice(2);sChangedDate=sChangedDate.replace(sYearFormat,
sYear)}if(sMonthFormat){var sMonth=aDateMatch[2];if(sMonthFormat=="M")sMonth=parseInt(sMonth,10)<10?sMonth.slice(1):
sMonth;sChangedDate=sChangedDate.replace(sMonthFormat,sMonth)}if(sDayFormat){var sDay=aDateMatch[3];if(sDayFormat==
"D")sDay=parseInt(sDay,10)<10?sDay.slice(1):sDay;sChangedDate=sChangedDate.replace(sDayFormat,sDay)}if(sHourFormat){var sHour=
aDateMatch[4];if(sHourFormat=="h"){sHour=parseInt(sHour,10)<10?sHour.slice(1):sHour;sHour=parseInt(sHour,
10)<12?"\uc624\uc804 "+sHour:"\uc624\ud6c4 "+sHour}sChangedDate=sChangedDate.replace(sHourFormat,sHour)}if(sMinuteFormat){var sMinute=
aDateMatch[5];if(sMinuteFormat=="m")sMinute=parseInt(sMinute,10)<10?sMinute.slice(1):sMinute;sChangedDate=
sChangedDate.replace(sMinuteFormat,sMinute)}if(sSecondFormat){var sSecond=aDateMatch[6];if(sSecondFormat==
"s")sSecond=parseInt(sSecond,10)<10?sSecond.slice(1):sSecond;sChangedDate=sChangedDate.replace(sSecondFormat,
sSecond)}return sChangedDate},
cutString:function(sTargetString,nLength,sTailString){if(!sTargetString)return false;if(!sTailString)sTailString=
"...";if(typeof sTargetString!="String")sTargetString.toString();sTargetString=sTargetString.length>nLength?
sTargetString.substring(0,nLength)+sTailString:sTargetString;return sTargetString},
cutStringByByte:function(sTargetString,nByte,sTailString,bFlag){if(!sTargetString)return"";if(!sTailString)sTailString=
"...";var aResultString=[];var sTmpChar="";var b2Byte=bFlag||false;sTargetString=sTargetString.replace(/\r?\n/gim,
" ");var totalByte=this.getByteString(sTargetString,b2Byte);if(totalByte<=nByte)return sTargetString;
var nCalByte=0;for(var i=0;i<sTargetString.length;i++){sTmpChar=sTargetString.charAt(i);if(sTmpChar===
" "){aResultString.push("");continue}else aResultString.push(sTmpChar);nCalByte+=this.getByteString(sTmpChar,
b2Byte);if(nCalByte>nByte)return sTargetString.substring(0,aResultString.length-1)+sTailString}return sTargetString},
getByteString:function(sTargetString,bFlag){if(!sTargetString)return 0;var b2Byte=bFlag||false;var nByte=
0;for(i=0,len=sTargetString.length;i<len;i++)if(b2Byte){var sUnitChar=sTargetString.charAt(i);if(/[A-Z]|[\$]|[\@]/.test(sUnitChar))nByte+=
2;else nByte+=sTargetString.charCodeAt(i)>128?2:1}else nByte+=sTargetString.charCodeAt(i)>128?2:1;return nByte},
cutStringByPixel:function(sTargetString,nPixel,sTailString){if(!sTargetString)return false;if(!sTailString)sTailString=
"...";var aResultString=[];var sTmpChar="";if(!this.welMeasure){this.welMeasure=jindo.$Element("\x3cspan\x3e");
this.welMeasure.css({"position":"absolute","top":"-1000px","left":"-1000px"});this.welMeasure.appendTo(document.body)}else this.welMeasure.empty();
sTargetString=sTargetString.replace(/\r?\n/gim," ");for(var i=0;i<sTargetString.length;i++){sTmpChar=
sTargetString.charAt(i);if(sTmpChar===" ")aResultString.push(";");else aResultString.push(sTmpChar);this.welMeasure.text(aResultString.join("")+
sTailString);if(this.welMeasure.width()>nPixel)return sTargetString.substring(0,aResultString.length-
1)+sTailString}return sTargetString},
cutHTMLStringByPixel:function(sTargetString,nPixel,sTailString){if(!sTargetString)return false;if(!sTailString)sTailString=
"...";return jindo.$S(nhn.Kin.Utility.cutStringByPixel(jindo.$S(sTargetString).unescapeHTML().$value(),
nPixel,sTailString)).escapeHTML().$value()},
cutHTMLString:function(sTargetString,nLength){if(!sTargetString)return false;return jindo.$S(nhn.Kin.Utility.cutString(jindo.$S(sTargetString).unescapeHTML().$value(),
nLength)).escapeHTML().$value()},
getConstructorName:function(oTarget){if(oTarget&&oTarget.constructor){var sCode=oTarget.constructor.toString();
var aMatch=sCode.match(/function ([^\(]*)/);return aMatch&&aMatch[1]||null}return null},
checkEqualObject:function(oBase,oComparison){if(!oBase||!oComparison)return false;if(jindo.$H(oBase).length()!=
jindo.$H(oComparison).length())return false;for(var x in oBase)if(oBase[x]instanceof Object){if(!this.checkEqualObject(oBase[x],
oComparison[x]))return false}else if(oBase[x]!=oComparison[x])return false;return true},
deepObjectCopy:function(oSourceTarget){var sConstructor;var oDestinationTarget;if(typeof oSourceTarget==
"object"&&(sConstructor=this.getConstructorName(oSourceTarget))){oDestinationTarget=eval("new "+sConstructor+
"()");var key;if(oSourceTarget.prototype)for(key in oSourceTarget.prototype)oDestinationTarget.prototype[key]=
this.deepObjectCopy(oSourceTarget.prototype[key]);for(key in oSourceTarget)oDestinationTarget[key]=this.deepObjectCopy(oSourceTarget[key]);
return oDestinationTarget}oDestinationTarget=oSourceTarget;return oDestinationTarget},
deepArrayCopy:function(aArray){var retArray=[];var newarray=[];for(var i=0,len=aArray.length;i<len;i++)if(aArray[i]==
null)retArray.push(aArray[i]);else retArray.push(typeof aArray[i]=="object"?nhn.Kin.Utility.deepObjectCopy(aArray[i]):
aArray[i]);return retArray},
replaceHTML:function(oOldElement,sHTML){var oNewElement=document.createElement(oOldElement.nodeName);
oNewElement.id=oOldElement.id;oNewElement.className=oOldElement.className;oNewElement.innerHTML=sHTML;
oOldElement.parentNode.replaceChild(oNewElement,oOldElement);return oNewElement},
request:function(sMethod,sURL,oParameter,fpCallback,bCache){nhn.Kin.getInstance("ajaxManager").request(sMethod,
sURL,oParameter,jindo.$Fn(fpCallback,this).bind(),bCache)},
base64Encoding:function(sString){var oBase64Encode=nhn.Kin.getInstance("base64encode");var sEncoded=oBase64Encode.encode(sString);
return sEncoded},
base64Decoding:function(sString){var oBase64Encode=nhn.Kin.getInstance("base64encode");var sDecoded=oBase64Encode.decode(sString);
return sDecoded},
insertFlash:function(sSWFUrl,sFlashId,nWidth,nHeight,sWMode,sFlashVars,sBGColor,bReturn){if(!sWMode)sWMode=
"transparent";if(!sBGColor)sBGColor="#FFFFFF";window.__tmpDocumentTitle=document.title;if(jindo.$Agent().navigator().ie){var aHTML=
[];aHTML.push('\x3cobject onmouseup\x3d"document.title \x3d window.__tmpDocumentTitle;return false;" classid\x3d"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase\x3d"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version\x3d9,0,0,0" width\x3d"'+
nWidth+'" height\x3d"'+nHeight+'" id\x3d"'+sFlashId+'" align\x3d"middle"\x3e');aHTML.push('\x3cparam name\x3d"allowScriptAccess" value\x3d"always" /\x3e');
aHTML.push('\x3cparam name\x3d"quality" value\x3d"high" /\x3e');aHTML.push('\x3cparam name\x3d"movie" value\x3d"'+
sSWFUrl+'" /\x3e');aHTML.push('\x3cparam name\x3d"wmode" value\x3d"'+sWMode+'" /\x3e');aHTML.push('\x3cparam name\x3d"bgcolor" value\x3d"'+
sBGColor+'" /\x3e');aHTML.push('\x3cparam name\x3d"FlashVars" value\x3d"'+sFlashVars+'"\x3e');aHTML.push("\x3c/object\x3e");
if(!bReturn)document.write(aHTML.join(""));else return aHTML.join("")}else{var sHTML='\x3cembed src\x3d"'+
sSWFUrl+'" quality\x3d"high" wmode\x3d"'+sWMode+'" FlashVars\x3d"'+sFlashVars+'" bgcolor\x3d"'+sBGColor+
'" width\x3d"'+nWidth+'" height\x3d"'+nHeight+'" name\x3d"'+sFlashId+'" align\x3d"middle" allowScriptAccess\x3d"always" type\x3d"application/x-shockwave-flash" pluginspage\x3d"http://www.macromedia.com/go/getflashplayer" /\x3e';
if(!bReturn)document.write(sHTML);else return sHTML}},
initializeProfile:function(){nhn.Kin.getInstance("profile")},
initializeProfileBySPS:function(elRoot){if(!this._arrayProfileManager)this._arrayProfileManager=[];this._arrayProfileManager[this._arrayProfileManager.length]=
new nhn.Kin.Utility.ProfileManager(elRoot)},
hideProfile:function(){if(this._arrayProfileManager)for(var i=0;i<this._arrayProfileManager.length;i++)this._arrayProfileManager[i].hideProfileLayer()},
initializePageRolling:function(el,oOption){return new nhn.Kin.Utility.PageRolling(el,oOption)},
initializeTooltip:function(el,type){return new nhn.Kin.Utility.TooltipManager(el,type)},
initializeLayerPopup:function(elBtn,layer){return new nhn.Kin.Utility.LayerPopup(elBtn,layer)},
openMyKeywordLayer:function(elTarget,sKeyword,isReload,oLayerInstance){if(!elTarget)return;else if(/(?:img)/i.test(elTarget.tagName))elTarget=
elTarget.parentNode;nhn.Kin.Utility.closeMyKeywordLayer();this.setKeywordManageButton(elTarget);if(nhn.Kin.checkRos())return false;
var bLogin=nhn.isLogin;if(!bLogin){nhn.Kin.Utility.openLoginPopup();return false}if(!nhn.isKinUser){alert(nhn.Kin.getMessage("KEYWORD_001"));
return false}oLayerInstance.initializeList(elTarget,sKeyword,isReload);try{lcs_do({sti:"kin_keyword"})}catch(e){}},
getKeywordManageButton:function(){return this._elButton},
setKeywordManageButton:function(el){this._elButton=el},
initializeInterestKeyword:function(elRoot,sType){if(!this._arrayInterestKeyword)this._arrayInterestKeyword=
[];var nLength=this._arrayInterestKeyword.length;this._arrayInterestKeyword[nLength]=new nhn.Kin.Utility.InterestKeyword(elRoot,
sType);return this._arrayInterestKeyword[nLength]},
closeMyKeywordLayer:function(){if(this._arrayInterestKeyword)for(var i=0;i<this._arrayInterestKeyword.length;i++)this._arrayInterestKeyword[i].hideLayer()},
openMyInterestPopup:function(isReload,sReturnUrl,sDefaultTab,sPopupType){sDefaultTab=sDefaultTab||"key";
sPopupType=sPopupType||"dir";isReload=isReload===true?1:0;var bLogin=nhn.isLogin;if(!bLogin){nhn.Kin.Utility.openLoginPopup();
return false}if(!nhn.isKinUser){alert(nhn.Kin.getMessage("INTEREST_003"));return false}var sUrl="/popup/interest.nhn?popupType\x3d"+
sPopupType+"\x26isReload\x3d"+isReload+"\x26isJunior\x3d"+nhn.isJunior+"\x26defaultTab\x3d"+sDefaultTab+
"\x26overflow\x3d0\x26dirId\x3d0";if(sReturnUrl)sUrl+="\x26retUrl\x3d"+sReturnUrl;var sPopupName="interestPopup";
var nHeight=nhn.Kin.getAgent().navigator().ie?850:868;if(window.screen.width<=800||window.screen.height<=
600)this.popup(sUrl,sPopupName,{"width":800,"height":nHeight,"scrollbars":"yes","resizable":1});else this.popup(sUrl,
sPopupName,{"width":800,"height":nHeight,"scrollbars":"yes"})},
addMyInterestDirectory:function(nDirId,isReload,sDefaultTab){if(!nDirId)return false;isReload=isReload===
true?1:0;var bLogin=nhn.isLogin;if(!bLogin){nhn.Kin.Utility.openLoginPopup();return false}if(!nhn.isKinUser){alert(nhn.Kin.getMessage("INTEREST_003"));
return false}var fpGetDirListCallback=jindo.$Fn(function(oResponse){oResponse=oResponse.result[0]["list"]||
[];var sUrl,sPopupName;if(oResponse.length<20){sUrl="/popup/interest.nhn?popupType\x3dadd\x26isReload\x3d"+
isReload+"\x26dirId\x3d"+nDirId;sPopupName="addInterestPopup";this.popup(sUrl,sPopupName,{"width":390,
"height":213})}else{sDefaultTab=sDefaultTab||"key";sUrl="/popup/interest.nhn?popupType\x3ddir\x26isReload\x3d"+
isReload+"\x26isJunior\x3d"+nhn.isJunior+"\x26defaultTab\x3d"+sDefaultTab+"\x26overflow\x3d1\x26dirId\x3d0";
sPopupName="interestPopup";var nHeight=nhn.Kin.getAgent().navigator().ie?630:648;if(window.screen.width<=
800||window.screen.height<=600)this.popup(sUrl,sPopupName,{"width":800,"height":nHeight,"scrollbars":"yes",
"resizable":1});else this.popup(sUrl,sPopupName,{"width":800,"height":nHeight,"scrollbars":"yes"})}},
this).bind();
nhn.Kin.Utility.request("POST","existInterest.nhn",{"dirId":nDirId},jindo.$Fn(function(oResponse){if(oResponse.isSuccess){oResponse=
oResponse.result[0]||[{}];if(oResponse.isExist){var sMessage=nhn.Kin.getMessage("INTEREST_004").replace("{DIRNAME}",
oResponse.dirName);alert(sMessage);return false}else nhn.Kin.Utility.request("POST","getInterestList.nhn",
{},fpGetDirListCallback,false)}else{if(oResponse.errorMsg=="FAIL_JUNIOR_DENIED_DIR")alert(nhn.Kin.getMessage("INTEREST_005"));
return false}},this).bind(),false)},
openMyLocalPopup:function(isReload,sReturnUrl,sDefaultTab){sDefaultTab=sDefaultTab||"key";isReload=isReload===
true?1:0;var bLogin=nhn.isLogin;if(!bLogin){nhn.Kin.Utility.openLoginPopup();return false}if(!nhn.isKinUser){alert(nhn.Kin.getMessage("INTEREST_003"));
return false}var sUrl="/popup/interest.nhn?popupType\x3dlocal\x26isReload\x3d"+isReload+"\x26isJunior\x3d"+
nhn.isJunior+"\x26defaultTab\x3d"+sDefaultTab+"\x26overflow\x3d0\x26dirId\x3d0";if(sReturnUrl)sUrl+="\x26retUrl\x3d"+
sReturnUrl;var sPopupName="interestPopup";var nHeight=nhn.Kin.getAgent().navigator().ie?630:648;if(window.screen.width<=
800||window.screen.height<=600)this.popup(sUrl,sPopupName,{"width":800,"height":nHeight,"scrollbars":"yes",
"resizable":1});else this.popup(sUrl,sPopupName,{"width":800,"height":nHeight,"scrollbars":"yes"})},
addMyLocalDirectory:function(nDirId,isReload){if(!nDirId)return false;isReload=isReload===true?1:0;var bLogin=
nhn.isLogin;if(!bLogin){nhn.Kin.Utility.openLoginPopup();return false}if(!nhn.isKinUser){alert(nhn.Kin.getMessage("INTEREST_003"));
return false}var sUrl="/popup/interest.nhn?popupType\x3daddLocal\x26isReload\x3d"+isReload+"\x26dirId\x3d"+
nDirId;this.popup(sUrl,"addLocalInterestPopup",{"width":390,"height":213})},
openMyInterestKeywordPopup:function(bIsReload,sReturnUrl){bIsReload=bIsReload?1:0;if(!nhn.isLogin){nhn.Kin.Utility.openLoginPopup();
return false}if(!nhn.isKinUser){alert(nhn.Kin.getMessage("INTEREST_003"));return false}var sUrl="/popup/interest.nhn?popupType\x3dkeyword"+
"\x26isReload\x3d"+bIsReload+"\x26isJunior\x3d"+nhn.isJunior;if(sReturnUrl)sUrl+="\x26retUrl\x3d"+sReturnUrl;
var sPopupName="interestPopup";var nHeight=nhn.Kin.getAgent().navigator().ie?850:868;if(window.screen.width<=
800||window.screen.height<=600)this.popup(sUrl,sPopupName,{"width":800,"height":nHeight,"scrollbars":"yes",
"resizable":1});else this.popup(sUrl,sPopupName,{"width":800,"height":nHeight,"scrollbars":"yes"})},
appendMyInterestDirectory:function(dirs,isReload){if(!dirs)return false;isReload=isReload===true?1:0;
var bLogin=nhn.isLogin;if(!bLogin){nhn.Kin.Utility.openLoginPopup();return false}if(!nhn.isKinUser){alert(nhn.Kin.getMessage("INTEREST_003"));
return false}nhn.Kin.Utility.request("POST","appendInterest.nhn",{"dirs":dirs},jindo.$Fn(function(oResponse){if(oResponse.isSuccess){alert(nhn.Kin.getMessage("INTEREST_006"));
try{nhn.Kin.Utility.refreshMyInterest("dir",isReload)}catch(e){}try{nhn.Kin.Utility.Bingo.checkAndShowBingoCompleteLayer(oResponse)}catch(e){}return false}else{alert(nhn.Kin.getMessage("INTEREST_007"));
return false}},this).bind(),false)},
appendMyInterestLocal:function(dirs,isReload){if(!dirs)return false;isReload=isReload===true?1:0;var bLogin=
nhn.isLogin;if(!bLogin){nhn.Kin.Utility.openLoginPopup();return false}if(!nhn.isKinUser){alert(nhn.Kin.getMessage("INTEREST_003"));
return false}nhn.Kin.Utility.request("POST","appendLocalInterest.nhn",{"dirs":dirs},jindo.$Fn(function(oResponse){if(oResponse.isSuccess){alert(nhn.Kin.getMessage("LOCAL_002"));
try{nhn.Kin.Utility.refreshMyInterest("local",isReload)}catch(e){}return false}else{alert(oResponse.errorMsg||
nhn.Kin.getMessage("LOCAL_002"));return false}},this).bind(),false)},
addCallbackInterestRefresh:function(sType,fnCallback){if(!nhn.oCallbackInterestRefresh)nhn.oCallbackInterestRefresh=
{};if(!nhn.oCallbackInterestRefresh[sType])nhn.oCallbackInterestRefresh[sType]=[];return nhn.oCallbackInterestRefresh[sType].push(fnCallback)},
destroyCallbackInterestRefresh:function(){if(nhn.oCallbackInterestRefresh)nhn.oCallbackInterestRefresh=
null},
refreshMyInterest:function(sType,isReload,sReturnUrl){if(isReload)if(sReturnUrl)location.href=sReturnUrl;
else location.reload();else if(nhn.oCallbackInterestRefresh&&nhn.oCallbackInterestRefresh[sType])for(var i=
0,len=nhn.oCallbackInterestRefresh[sType].length;i<len;i++)nhn.oCallbackInterestRefresh[sType][i]()},
getKinNumber2ImageTag:function(nNumber,sPartition){if(typeof nNumber=="undefined")return false;var sNumber=
String(nNumber);var aImageHtml=[];for(var i=0;i<sNumber.length;i++){sTmpChar=sNumber.charAt(i);aImageHtml.push('\x3cimg class\x3d"num'+
sTmpChar+'" width\x3d"1" height \x3d"1" alt\x3d"'+sTmpChar+'" src\x3d"'+nhn.Kin.getImagePath()+'blank.gif" /\x3e')}return aImageHtml.join(sPartition||
"")},
getKinGetDetailURI:function(sType,nDirId,nDocId){sType=(sType||"KIN").toUpperCase();var sURL;switch(sType){case "KIN":sURL=
"/qna/detail.naver?d1id\x3d"+this.getD1Id(nDirId)+"\x26dirId\x3d"+nDirId+"\x26docId\x3d"+nDocId;break;
case "OPEN100":sURL="/open100/detail.naver?d1id\x3d"+this.getD1Id(nDirId)+"\x26dirId\x3d"+nDirId+"\x26docId\x3d"+
nDocId;break;case "KNOWHOW":sURL="/knowhow/detail.naver?docId\x3d"+nDirId;break}return sURL},
getKinGetAnswerFormURI:function(sType,nDirId,nDocId){sType=(sType||"KIN").toUpperCase();var sURL;switch(sType){case "KIN":sURL=
"/qna/answer.nhn?serviceId\x3dkin\x26d1id\x3d"+this.getD1Id(nDirId)+"\x26dirId\x3d"+nDirId+"\x26docId\x3d"+
nDocId;break}return sURL},
getD1Id:function(nDirId){var sDirId=typeof nDirId=="string"?nDirId:String(nDirId);sDirId=sDirId.length%
2==1?"0"+sDirId:sDirId;var nRetD1Id=Number(sDirId.substr(0,2));return nRetD1Id},
getDirDepth:function(nDirId){var nMaxDepth=5;if(nDirId<=0)return-1;var nDepth=0;for(var i=nMaxDepth-1;i>=
0;i--){var nId=Math.floor(nDirId/Math.pow(100,i));if(nId>0){nDepth=i+1;break}}return nDepth},
resizeIframe:function(sFrameId,sCssQuery,nOffsetPx){var el=$(sFrameId);if(!el)return;var elStyle=el.style;
var elDocument=el.contentWindow.document;var elBody=elDocument[elDocument.compatMode=="CSS1Compat"?"documentElement":
"body"];var elStandardHeight=elBody;if(sCssQuery)elStandardHeight=$$(sCssQuery,elBody)[0]||elBody;var navigator=
jindo.$Agent().navigator();if(navigator.ie||navigator.webkit)elStyle.height=elStandardHeight.clientHeight+
(nOffsetPx?nOffsetPx:0)+"px";elStyle.height=elBody[navigator.ie||navigator.opera||navigator.firefox?"scrollHeight":
"offsetHeight"]+"px"},
popup:function(sUrl,sName,oUserSetting){oUserSetting=oUserSetting||null;var sSetting="";if(oUserSetting){var oSetting=
{"width":0,"height":0,"top":(screen.height-oUserSetting.height)/2,"left":(screen.width-oUserSetting.width)/
2,"resizable":0,"alwaysRaised":1,"toolbar":0,"scrollbars":oUserSetting.scrollbars||0,"status":1},aSetting=
[];for(var i in oSetting){if(aSetting[0])aSetting.push(",");aSetting.push(i);aSetting.push("\x3d");aSetting.push(i in
oUserSetting?oUserSetting[i]:oSetting[i])}sSetting=aSetting.join("")}var win=window.open(sUrl,sName,sSetting);
if(win===null||typeof win=="undefined")alert("\ud31d\uc5c5 \ucc28\ub2e8\uc744 \ud574\uc81c\ud558\uc5ec \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.\n\ud31d\uc5c5\uc774 \ucc28\ub2e8\ub418\uc5b4 \uc788\uc73c\uba74 \ubaa8\ub4e0 \uc11c\ube44\uc2a4\ub97c \uc62c\ubc14\ub85c \uc774\uc6a9\ud558\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");
else win.focus();return win},
_DETAIL_IMG_RESIZE_WIDTH:620,resizeImage:function(sName,nWidth,sTarget){var oTargetWin=sTarget?window.frames[sTarget]:
window;if(typeof oTargetWin=="undefined")return;var oImage=oTargetWin.document.images[sName],nHeight=
0;nWidth=nWidth||this._DETAIL_IMG_RESIZE_WIDTH;if(typeof oImage=="undefined")return;oImage.style.cursor=
"pointer";if(typeof oImage.complete!="undefined"&&oImage.complete){nHeight=oImage.height;if(oImage.width>
nWidth){oImage.style.height=nWidth*(oImage.height/oImage.width)+"px";oImage.style.width=nWidth+"px";if(nHeight>
0&&oImage.height<1)oImage.style.height=nHeight+"px"}}else setTimeout(function(){try{(parent&&typeof parent.nhn.Kin.Utility!=
"undefined"?parent:window).nhn.Kin.Utility.resizeImage(sName,nWidth,sTarget)}catch(e){}},100)},
_cPhotoViewer:null,loadAllDetailImage:function(bUsePhotoViewer){var aElDummySpan=$$("#container span._waitingForReplaceImage");
if(!aElDummySpan)return;var wImageTemplate=jindo.$Template('{if isShowWatermark}\x3cdiv class\x3d"watermark"{if !isEquation} onclick\x3d"imgOriginalView(\'{\x3dimgId}\')"{/if}\x3e{/if}\x3cimg {if isEnablePhotoViewer}class\x3d"_rolling_{\x3danswerNo}" {/if}name\x3d"{\x3dimgId}" {if width}width\x3d"{\x3dwidth}" {/if}{if height}height\x3d"{\x3dheight}" {/if}{if align !\x3d null}align\x3d"{\x3dalign}" {/if}src\x3d"{\x3dimageSrcUrl}"{if !isEquation} onload\x3d"imgAutoResize(\'{\x3dimgId}\')" onerror\x3d"imgError(\'{\x3dimgId}\')"{if !isShowWatermark} onclick\x3d"imgOriginalView(\'{\x3dimgId}\')"{/if}{/if} alt\x3d"\ucca8\ubd80 \uc774\ubbf8\uc9c0"\x3e{if isShowWatermark}\x3cspan class\x3d"mask" aria-hidden\x3d"true"\x3e\x3c/span\x3e\x3c/div\x3e{/if}');
for(var i=0,len=aElDummySpan.length;i<len;i++){var wElDummySpan=$Element(aElDummySpan[i]);if(!wElDummySpan)continue;
try{var sAlignAttribute=wElDummySpan.attr("data-align");if(sAlignAttribute&&!/^(left|right|middle|top|bottom)$/i.test(sAlignAttribute))sAlignAttribute=
null;wElDummySpan.replace(wImageTemplate.process({"answerNo":wElDummySpan.attr("data-answer-no")||"",
"imgId":wElDummySpan.attr("data-image-id")||"","width":wElDummySpan.attr("data-width"),"height":wElDummySpan.attr("data-height"),
"align":sAlignAttribute||null,"imageSrcUrl":wElDummySpan.attr("data-thumb-image-src")||"","isEnablePhotoViewer":bUsePhotoViewer&&
wElDummySpan.attr("data-photoviewer-yn")==="Y","isEquation":wElDummySpan.attr("data-equation-yn")==="Y",
"isShowWatermark":wElDummySpan.attr("data-watermark-yn")==="Y"}))}catch(e){}}},
viewImage:function(imgName){var oImage=window.document.images[imgName];if(oImage&&oImage.src!=="undefined"){var sClassName=
oImage.className;if(sClassName&&sClassName.indexOf("_rolling")>-1){var sUrl=oImage.src;if(!this._cPhotoViewer)this._cPhotoViewer=
new nhn.Kin.PhotoViewer($("photoviewerWrap"));if(this._cPhotoViewer)this._cPhotoViewer.doPlay(oImage)}else{var aAttrs=
oImage.attributes;if(aAttrs)for(var i=0,aLen=aAttrs.length;i<aLen;i++)if(aAttrs[i].name=="nhn_extra_image")return true;
try{nhn.Kin.Utility.openImage(imgName)}catch(e){}}}else return false},
openImage:function(sName,nWidth,sTarget){var oTargetWin=sTarget?window.frames[sTarget]:window;if(typeof oTargetWin==
"undefined")return;var oImage=oTargetWin.document.images[sName];nWidth=nWidth||this._DETAIL_IMG_RESIZE_WIDTH;
if(typeof oImage!="undefined"&&oImage.width<=nWidth){var sImgSrc=oImage.src.replace(/\?type=(.*)$/,"");
window.open(sImgSrc)}},
notfoundImage:function(sName,sTmp,sTarget){var oTargetWin=sTarget?window.frames[sTarget]:window;if(typeof oTargetWin==
"undefined")return;var oImage=oTargetWin.document.images[sName];if(typeof oImage!="undefined"){oImage.src=
"https://ssl.pstatic.net/static/kin/09renewal/img_nophoto2.gif";if(oImage.width>140||oImage.height>140){oImage.style.width=
140+"px";oImage.style.height=140+"px"}}},
openLoginPopup:function(sDestUrl){var sUrl="/popup/login.nhn?destUrl\x3d"+encodeURIComponent(sDestUrl||
location.href);this.popup(sUrl,"loginPopup",{width:410,height:337,top:200,left:300})},
openConnectMe2DayPopup:function(type,sDestUrl){var sUrl="";if(type=="reg")sUrl="https://nid.naver.com/new_me2day/new_me2day.nhn?consumer_name\x3dme2day\x26service_name\x3dkin";
else if(type=="mod")sUrl="https://nid.naver.com/new_me2day/new_me2day.nhn?consumer_name\x3dme2day\x26service_name\x3dkin";
else if(type=="del")sUrl="https://nid.naver.com/new_me2day/match_delete.nhn?consumer_name\x3dme2day\x26service_name\x3dkin";
sUrl+="\x26ret_url\x3d"+encodeURIComponent(sDestUrl||location.href);this.popup(sUrl,"me2dayCheck",{width:440,
height:317,top:200,left:300})},
clickBody:function(){jindo.$Element(document.body).fireEvent("click")},
getRandom:function(nMax){return Math.ceil(Math.random()*nMax)},
stripHTML:function(sHTML){return sHTML.replace(/(?:<[^>]*>|&nbsp;|\s*)/g,"")},
trim:function(sStr){if(!sStr)return sStr;return sStr.replace(/^[\t\s\u3000]+/,"").replace(/[\t\s\u3000]+$/,
"")},
getNClicksClass:function(sArea,sCid,nRank){var aClass=[];aClass.push("_nclicks:"+sArea);if(sCid)aClass.push("i:"+
sCid);if(nRank)aClass.push("r:"+nRank);if(aClass.length)return aClass.join(",")},
nClicks:function(sArea,sCid,nRank,oCustomEvent,gField){if(typeof sArea=="undefined")return false;if(typeof oCustomEvent==
"undefined")return false;if(typeof oCustomEvent._event=="undefined")oCustomEvent=$Event(oCustomEvent);
if(typeof oCustomEvent._event=="undefined")return false;sCid=sCid||"";nRank=nRank||"";var oEvent=oCustomEvent._event;
var elClick=oCustomEvent.element;var aLcs=sCid.match(/^(\d+)_(\d+)$/);if(aLcs&&aLcs[1]!="0"){var oParam=
{dirId:aLcs[1],docId:aLcs[2]};var oAjax=new $Ajax("/ajax/getGdidAjax.nhn",{async:false,method:"get",onload:$Fn(function(oResponse){oResponse=
oResponse.json();var sGdId=oResponse.isSuccess?oResponse.result[0].gdId:sCid;nclk_v2(elClick,sArea,sGdId,
nRank)},this).bind(),
timeout:2,onerror:$Fn(function(oResponse){oAjax.abort();nclk_v2(elClick,sArea,sCid,nRank)},this).bind(),
ontimeout:$Fn(function(oResponse){oAjax.abort();nclk_v2(elClick,sArea,sCid,nRank)},this).bind()});
oAjax.request(oParam)}else nclk_v2(elClick,sArea,sCid,nRank)},
getNclickRegExp:function(){return/_nclicks:([^\s"'>]*)/i},
getClickCodeRegExp:function(){return/_clickcode:([^\s"'>]*)/i},
callNclick:function(oEvent){return this.nClicksByRegExp(oEvent,this.getNclickRegExp())},
callClickCode:function(oEvent){return this.nClicksByRegExp(oEvent,this.getClickCodeRegExp())},
nClicksByRegExp:function(oEvent,sRegExp){var el=oEvent.element,re=sRegExp||this.getClickCodeRegExp(),
sType=el.className.match(re),sCurrentHref=location.href;if(!sCurrentHref.match(/[#]$/))sCurrentHref+=
"#";if(!sType&&el.parentNode){el=el.parentNode;sType=el.className.match(re)}if(sType){var sArea=sType[1],
sCid="",nRank="",aParam=sType[1].split(",");if(aParam.length>1){sArea=aParam.shift();for(var i=0,len=
aParam.length;i<len;i++)if(aParam[i].indexOf("i:")>-1)sCid=aParam[i].replace("i:","");else if(aParam[i].indexOf("r:")>
-1)nRank=aParam[i].replace("r:","")}nhn.Kin.Utility.nClicks(sArea,sCid,nRank,oEvent)}if(el.tagName.toLowerCase()==
"a"&&el.href==sCurrentHref&&!jindo.$Element(oEvent.element).hasClass("_btn_profile")&&!jindo.$Element(oEvent.element).hasClass("_btn_profile_close")){oEvent.stop();
return false}return true},
parseQueryString:function(){var sQuery=window.location.search.substring(1);var aQuery=sQuery.split("\x26");
var oParams={};for(var i=0;i<aQuery.length;i++){var aPair=aQuery[i].split("\x3d");oParams[aPair[0]]=aPair[1]}return oParams},
openDreamtreeDonationPopup:function(){var sUrl="/dreamtree/donationPopup.nhn";this.popup(sUrl,"_blank",
{"width":400,"height":600})},
getLevelPercent:function(min,max,current,isMaxLevel){if(min<0)min=0;if(current<0)return 0;if(current>=
max||isMaxLevel)return 100;if(max<=0)return 0;var denominator=max-min;var numerator=current-min;return Math.round(numerator/
denominator*100)},
startGradeGraph:function(elGuage,min,max,current,isMaxLevel){if(!elGuage)return;var elGuagePercent=jindo.$$.getSingle(".inner",
elGuage);var welGuageBalloon=jindo.$Element(jindo.$$.getSingle("div.detail_info",elGuagePercent));var percent=
this.getLevelPercent(min,max,current,isMaxLevel);var _oBarTransition=new jindo.Transition;_oBarTransition.start(9*
percent+100,elGuagePercent,{"@width":jindo.Effect.cubicEaseInOut("0%",percent+"%")});if(welGuageBalloon)_oBarTransition.attach("end",
function(){welGuageBalloon.show()})},
startGradeGraphNumberChange:function(elTotalAnswer,nTotalAnswer,elTotalBest,nTotalBest,elBestRate,nBestRate){if(!elTotalAnswer||
!elTotalBest||!elBestRate)return;var welTotalAnswer=jindo.$Element(elTotalAnswer);var welTotalBest=jindo.$Element(elTotalBest);
var welBestRate=jindo.$Element(elBestRate);var cnt=0;var digitTotalAnswer=Math.floor(Math.log(nTotalAnswer)/
Math.LN10)+1;var tempTotalBest=0;var tempBestRate=0;var bestStep=Math.floor(nTotalBest/10);var rateStep=
nBestRate/10;var interval=setInterval(function(){if(cnt++>8){clearInterval(interval);welTotalAnswer.html(nhn.Kin.Utility.getCommaNumberString(nTotalAnswer));
welTotalBest.html(nhn.Kin.Utility.getCommaNumberString(nTotalBest));welBestRate.html(Number(nBestRate).toFixed(1)+
"%")}else{tempTotalBest+=bestStep;tempBestRate+=rateStep;welTotalAnswer.html(nhn.Kin.Utility.getCommaNumberString(nhn.Kin.Utility.getRandomNumberByDigit(digitTotalAnswer)));
welTotalBest.html(nhn.Kin.Utility.getCommaNumberString(tempTotalBest));welBestRate.html(Number(tempBestRate).toFixed(1)+
"%")}},100)},
startRollingCount:function(elTodayQuestion,nTodayQuestion,elMobileQuestion,nMobileQuestion,elTodayAnswer,
nTodayAnswer){if(!elTodayQuestion||!elMobileQuestion||!elTodayAnswer)return;var welTodayQuestion=jindo.$Element(elTodayQuestion);
var welMobileQuestion=jindo.$Element(elMobileQuestion);var welTodayAnswer=jindo.$Element(elTodayAnswer);
var cnt=0;var digitTodayQuestion=Math.floor(Math.log(nTodayQuestion)/Math.LN10)+1;var digitMobileQuestion=
Math.floor(Math.log(nMobileQuestion)/Math.LN10)+1;var digitTodayAnswer=Math.floor(Math.log(nTodayAnswer)/
Math.LN10)+1;var interval=setInterval(function(){if(cnt++>8){clearInterval(interval);welTodayQuestion.html(nhn.Kin.Utility.getCommaNumberString(nTodayQuestion));
welMobileQuestion.html(nhn.Kin.Utility.getCommaNumberString(nMobileQuestion));welTodayAnswer.html(nhn.Kin.Utility.getCommaNumberString(nTodayAnswer))}else{welTodayQuestion.html(nhn.Kin.Utility.getCommaNumberString(nhn.Kin.Utility.getRandomNumberByDigit(digitTodayQuestion)));
welMobileQuestion.html(nhn.Kin.Utility.getCommaNumberString(nhn.Kin.Utility.getRandomNumberByDigit(digitMobileQuestion)));
welTodayAnswer.html(nhn.Kin.Utility.getCommaNumberString(nhn.Kin.Utility.getRandomNumberByDigit(digitTodayAnswer)))}},
100)},
rollingCount:function(aObj){if(!aObj)return;var i,len=aObj.length,cnt,wel,digit,interval,obj;for(i=0;i<
len;i++){if(!aObj[i].el)continue;obj=aObj[i];cnt=0;wel=jindo.$Element(obj.el);digit=Math.floor(Math.log(obj.number)/
Math.LN10)+1;interval=setInterval(function(){if(cnt++>8){clearInterval(interval);wel.html(nhn.Kin.Utility.getCommaNumberString(obj.number))}else wel.html(nhn.Kin.Utility.getCommaNumberString(nhn.Kin.Utility.getRandomNumberByDigit(digit)))},
100)}},
getRandomNumberByDigit:function(nDigit){return Math.floor(Math.random()*(Math.pow(10,nDigit)-Math.pow(10,
nDigit-1)))+Math.pow(10,nDigit-1)},
insertPageInfo:function(nTotalCount,nCurrentPage,nCountPerPage,nPage,tTemplate,weNavigate,oOption){var nPage=
nPage||10;var hasPre=nCurrentPage>nPage?"Y":"N";var lastPage=Math.floor((nTotalCount+nCountPerPage-1)/
nCountPerPage);var hasNext=Math.floor((nCurrentPage-1)/nPage)<Math.floor((lastPage-1)/nPage)?"Y":"N";
var prePage=Math.floor((nCurrentPage-1)/nPage)*nPage;var nextPage=Math.floor((nCurrentPage-1)/nPage)*
nPage+nPage+1;pageList=new Array;for(i=prePage+1,j=0;i<(nextPage<=lastPage+1?nextPage:lastPage+1);i++,
j++)pageList[j]=i;if(oOption==null)oOption={};var oPageInfo={"page":nCurrentPage,"hasPre":hasPre,"hasNext":hasNext,
"prePage":prePage,"nextPage":nextPage,"lastPage":lastPage,"pageList":pageList,"option":oOption};var tTemplateId=
tTemplate||jindo.$Template("pageTemplate");var weNavigateId=weNavigate||jindo.$Element("paginate");var result=
tTemplateId.process({"pageInfo":oPageInfo,"nclickCode":nhn.isLogin?"nql_lgd":"nql_nlg"});weNavigateId.empty();
weNavigateId.appendHTML(result)},
insertOnlyPreNextPageInfo:function(nTotalCount,nCurrentPage,nCountPerPage,tTemplate,weNavigate,nCurrentPageOffset,
nPrevPageOffset,nNextPageOffset,bIsSearch,oOption){var lastPage=Math.floor((nTotalCount+nCountPerPage-
1)/nCountPerPage);var hasPre=nCurrentPage>1?"Y":"N";var hasNext="Y";if(nCurrentPage>=lastPage||nNextPageOffset>
nTotalCount)hasNext="N";var prePage=nCurrentPage-1;var nextPage=nCurrentPage+1;if(oOption==null)oOption=
{};var oPageInfo={"page":nCurrentPage,"hasPre":hasPre,"hasNext":hasNext,"prePage":prePage,"nextPage":nextPage,
"option":oOption,"currentPageOffset":nCurrentPageOffset,"prevPageOffset":nPrevPageOffset,"nextPageOffset":nNextPageOffset,
"isSearch":bIsSearch};var tTemplateId=tTemplate||jindo.$Template("pageTemplate");var weNavigateId=weNavigate||
jindo.$Element("paginate");var result=tTemplateId.process({"pageInfo":oPageInfo,"nclickCode":nhn.isLogin?
"nql_lgd":"nql_nlg"});weNavigateId.empty();weNavigateId.appendHTML(result)},
extractParam:function(str){return str.replace(/.*_param\('([^\)]+)'\).*/g,"$1").split(",")},
isNumber:function(sChar){return!isNaN(parseInt(sChar))&&isFinite(sChar)},
extractCssSelectorForLookUpChildElement:function(el){if(!el)return null;var className=el.className;if(!className||
className.indexOf("_lookUpChildElement")<0)return null;return className.replace(/.*_lookUpChildElement\('([^\)]+)'\).*/g,
"$1")},
getElementByLookUpChildElment:function(elTarget){var sCssSelectorForLookUpChildElement=this.extractCssSelectorForLookUpChildElement(elTarget);
if(!sCssSelectorForLookUpChildElement)return elTarget;var aChildElements=$$(sCssSelectorForLookUpChildElement,
elTarget);if(aChildElements&&aChildElements.length>0)return aChildElements[0];return elTarget},
skipNavigation:function(sElementId){var oElement=$(sElementId);if(!oElement)return;oElement.tabIndex=
-1;oElement.focus()},
containSuicideKeywords:function(sString){if(!sString)return false;if(sString.indexOf("\uc790\uc0b4")==
0)return true;sString=nhn.Kin.Utility.removeWhiteSpace(sString);if(!sString)return false;var aSuicideKeywords=
["\uac19\uc774\uc790\uc0b4","\uac19\uc774\uc790\uc0b4\uc5f0\ub77d","\uac19\uc774\uc790\uc0b4\ud558\uc2e4\ubd84",
"\uac19\uc774\uc8fd\uc744\uc0ac\ub78c","\uac19\uc774\uc8fd\uc744\uc5f0\ub77d","\uac19\uc774\uc8fd\uc790",
"\uace0\ud1b5\uc5c6\ub294\uc790\uc0b4","\uace0\ud1b5\uc5c6\ub294\uc790\uc0b4\ubc29\ubc95","\uace0\ud1b5\uc5c6\uc774\uc790\uc0b4",
"\uace0\ud1b5\uc5c6\uc774\uc8fd\ub294","\uace0\ud1b5\uc5c6\uc774\uc8fd\ub294\ubc95","\uae54\ub054\ud558\uac8c\uc8fd\ub294\ubc29\ubc95",
"\ub18d\uc57d\uc790\uc0b4","\ub3d9\ub9e5\ub04a\uae30","\ub3d9\ubc18\uc790\uc0b4","\ub3d9\ubc18\uc790\uc0b4\uc0ac\uc774\ud2b8",
"\ub3d9\ubc18\uc790\uc0b4\uce74\ud398","\ub3d9\ubc18\uc790\uc0b4\ud558\uc2e4\ubd84","\ubaa9\ub9e4\uace0\uc790\uc0b4",
"\ubaa9\ub9e4\ub294\ubc29\ubc95","\ubaa9\ub9e4\ub294\ubc95","\ubaa9\ub9e4\ub2e4\ub294\ubc95","\ubaa9\ub9e4\uc11c\uc790\uc0b4",
"\ubaa9\ub9e4\uc790\uc0b4","\ubc29\ubc95\uc790\uc0b4","\ubc88\uac1c\ud0c4\uc790\uc0b4","\ubd84\uc2e0\uc790\uc0b4",
"\uc0b4\uae30\uc2eb\ub2e4","\uc0b4\ud558\uc2e4\ubd84","\uc0b6\uc744\ub05d\ub0bc\ucabd\uc9c0","\uc0dd\uc744\uac19\uc774\ub9c8\uac10",
"\uc190\ubaa9\uae0b\uae30","\uc218\uba74\uc81c\uc790\uc0b4","\uc218\uba74\uc81c\uce58\uc0ac\ub7c9","\uc26c\uc6b4\uc790\uc0b4\ubc29\ubc95",
"\uc27d\uac8c\uc8fd\ub294\ubc29\ubc95","\uc27d\uac8c\uc8fd\ub294\ubc95","\uc544\uc8fd\uace0\uc2f6\ub2e4",
"\uc544\ud504\uc9c0\uc54a\uac8c\uc8fd\ub294\ubc29\ubc95","\uc548\uc544\ud504\uac8c\uc790\uc0b4","\uc548\uc544\ud504\uac8c\uc8fd\ub294\ubc29\ubc95",
"\uc5f0\ud0c4\uc790\uc0b4","\uc628\ub77c\uc778\uc0dd\uba85\uc0ac\ub791\ucea0\ud398\uc778","\uc778\ud130\ub137\uc790\uc0b4\ubaa8\uc784",
"\uc790*\uc0b4","\uc790+\uc0b4","\uc790+\uc0b4\uc0ac\uc774\ud2b8","\uc790+\uc0b4\ud558\uc2e4","\uc790+\uc0b4\ud558\uc2e4\ubd84",
"\uc790-\uc0b4","\uc790-\uc0b4\ud558\uc2e4\ubd84","\uc790.\uc0b4","\uc790/\uc0b4","\uc7901\uc0b4\ubc29\ubc95",
"\uc790\uc0b4","\uc790\uc0b4\uacb0\uc2ec","\uc790\uc0b4\uae4c\ud398","\uc790\uc0b4\ub3d9\ubc18\ucabd\uc9c0",
"\uc790\uc0b4\ubaa8\uc784","\uc790\uc0b4\ubb38\uc758","\uc790\uc0b4\ubc29\ubc95","\uc790\uc0b4\ubc95",
"\uc790\uc0b4\ube14\ub85c\uadf8","\uc790\uc0b4\uc0ac\uc774\ud2b8","\uc790\uc0b4\uc0dd\uac01\ucabd\uc9c0",
"\uc790\uc0b4\uc0dd\uac01\ucabd\uc9c0\uc5f0\ub77d","\uc790\uc0b4\uc2f8\uc774\ud2b8","\uc790\uc0b4\uc57d",
"\uc790\uc0b4\uc5f0\ub77d","\uc790\uc0b4\uc608\ubc29","\uc790\uc0b4\uc744\ud558\uace0\uc2f6\uc5b4\uc694",
"\uc790\uc0b4\uc885\ub958","\uc790\uc0b4\ucabd\uc9c0","\uc790\uc0b4\ucda9\ub3d9","\uc790\uc0b4\uce74\ud398",
"\uc790\uc0b4\ud338","\uc790\uc0b4\ud558\uace0\uc2dc\ud37c\uc694","\uc790\uc0b4\ud558\uace0\uc2f6\ub2e4",
"\uc790\uc0b4\ud558\uace0\uc2f6\uc5b4\uc694","\uc790\uc0b4\ud558\ub294\ubc29\ubc95","\uc790\uc0b4\ud558\ub294\ubc95",
"\uc790\uc0b4\ud558\ub824\ud569\ub2c8\ub2e4","\uc790\uc0b4\ud558\uc2e4\ubd84","\uc790\uc0b4\ud558\uc2e4\ubd84\ucabd\uc9c0",
"\uc790\uc0b4\ud560\uae4c","\uc790\uc0b4\ud560\uae4c?","\uc790\uc0b4\ud560\uae4c?\ub9d0\uae4c?","\uc790\uc0b4\ud560\uae4c\ub9d0\uae4c",
"\uc790\uc0b4\ud560\uae4c\ub9d0\uae4c..","\uc790\uc0b4\ud560\uae4c\ub9d0\uae4c?","\uc790\uc0b4\ud560\ubd84",
"\uc790\uc0b4\ud560\uc0ac\ub78c","\uc790\uc0b4\ud569\ub2c8\ub2e4","\uc790\uc0b4\ud655\uc2e4\ubc29\ubc95",
"\uc8fd\uace0\uc2f6\ub2e4","\uc8fd\uace0\uc2f6\uc2b5\ub2c8\ub2e4","\uc8fd\uace0\uc2f6\uc5b4","\uc8fd\uace0\uc2f6\uc5b4\uc694",
"\uc8fd\uace0\uc2f6\uc5b4\uc694.\uc815\ub9d0","\uc8fd\uace0\uc2f6\uc5b4\uc694\uc815\ub9d0","\uc8fd\uace0\uc2f6\uc744\ub54c",
"\uc8fd\ub294\ubc29\ubc95","\uc8fd\ub294\ubc95","\uc8fd\ub294\uc57d","\uc8fd\uc744\uae4c","\uc8fd\uc744\uae4c\ub9d0\uae4c",
"\uc8fd\uc744\uae4c\ub9d0\uae4c?","\uc8fd\uc790","\uc9c0\ud558\ucca0\uc790\uc0b4","\uc9c0\ud558\ucca0\ud22c\uc2e0",
"\uc9c0\ud558\ucca0\ud22c\uc2e0\uc790\uc0b4","\uc9c4\uc9c0\ud558\uac8c\uc790\uc0b4","\uc9d1\ub2e8\uc790\uc0b4",
"\ucabd\uc9c0\uc790\uc0b4","\ud22c\uc2e0\uc790\uc0b4","\ud3b8\ud558\uac8c\uc8fd\ub294\ubc29\ubc95","\ud3b8\ud558\uac8c\uc8fd\ub294\ubc95",
"\ud3b8\ud788\uc790\uc0b4","\ud55c\uac15\uc790\uc0b4","\ud55c\uac15\ud22c\uc2e0","\ud55c\uac15\ud22c\uc2e0\uc790\uc0b4",
"\ud568\uaed8\uc790\uc0b4","\ud568\uaed8\uc8fd\uc790","\ud655\uc2e4\ud55c\uc8fd\ub294\ubc29\ubc95","\ud655\uc2e4\ud788\uc8fd\ub294\ubc29\ubc95"];
for(var i in aSuicideKeywords)if(aSuicideKeywords[i]==sString)return true;return false},
containBeachKeywords:function(sString){if(!sString)return false;sString=nhn.Kin.Utility.removeWhiteSpace(sString);
if(!sString)return false;var aBeachKeywords=["\ud574\uc218\uc695\uc7a5","\ud574\ubcc0","\uc5ec\ub984\ud734\uac00",
"\ud734\uac00\uc9c0","\uc5ec\ud589\uc9c0","\ud734\uc591\uc9c0","\ubc14\ub2f7\uac00"];for(var i in aBeachKeywords)if(sString.indexOf(aBeachKeywords[i])>
-1)return true;return false},
getStringFromObject:function(oData){if(oData)if(typeof JSON==="object"&&typeof JSON.stringify==="function")return encodeURIComponent(JSON.stringify(oData));
else return encodeURIComponent(jindo.$Json(oData).toString());else return""},
getObjectFromString:function(sString){if(sString){try{sString=decodeURIComponent(sString)}catch(e){}try{return typeof JSON==
"object"&&typeof JSON.parse=="function"?JSON.parse(sString):jindo.$Json(sString).toObject()}catch(e){}}return null},
isIntoScreen:function(oBoundaryElement){if(!oBoundaryElement)return false;var nTop=jindo.$Document().scrollPosition().top;
var nBottom=nTop+jindo.$Document().clientSize().height;var nTopOfBoundaryElement=jindo.$Element(oBoundaryElement).offset().top;
var nBottomOfBoundaryElement=nTopOfBoundaryElement+jindo.$Element(oBoundaryElement).height();return nBottomOfBoundaryElement>=
nTop&&nTopOfBoundaryElement<=nBottom},
checkLoginAndRedirectToLoginForm:function(sReturnUrl){if(nhn.isLogin)return;sReturnUrl=sReturnUrl||location.href;
location.href="https://nid.naver.com/nidlogin.login?mode\x3dform\x26url\x3d"+encodeURIComponent(sReturnUrl)},
redirectUrlAfterLogIn:function(sUrl){if(!sUrl)return;if(sUrl===location.href){location.reload();return}var oRegExpForUrlValidation=
new RegExp("^(?:https?://[^/]*kin.naver.com)?/(?:.*?)$","i");if(oRegExpForUrlValidation.test(sUrl))location.href=
sUrl;else location.reload()},
LocalStorage:{KEY:{PCWEB_COMMON_LOCAL_STORAGE_GETTER_SETTER_SUPPORT_FLAG:"kin.common.localStorageGetterSetterSupportFlag",
PCWEB_COMMON_USER_LAST_VISIT_TIME:"kin.common.userLastVisitTime",PCWEB_HOME_VIEW_TYPE:"kin.home.viewType",
PCWEB_HOME_VIEW_TYPE_TOOLTIP_CLOSE_FLAG:"kin.home.layerNoanswerViewTypeTooltipClose",PCWEB_HOME_COUNT_PER_PAGE:"kin.home.noanswerCountPerPage",
PCWEB_HOME_RECOMMEND_TAG_LAYER_CLOSED_TIME:"kin.home.recommendTagLayerClosedTime",PCWEB_QUESTION_LIST_VIEW_TYPE:"kin.questionList.viewType",
PCWEB_QUESTION_LIST_VIEW_TYPE_TOOLTIP_CLOSE_FLAG:"kin.questionList.layerNoanswerViewTypeTooltipClose",
PCWEB_QUESTION_LIST_COUNT_PER_PAGE:"kin.questionList.noanswerCountPerPage",PCWEB_QUESTION_LIST_RECOMMEND_TAG_LAYER_CLOSED_TIME:"kin.questionList.recommendTagLayerClosedTime",
PCWEB_VOLUNTEER_VIEW_TYPE:"kin.volunteer.viewType",PCWEB_VOLUNTEER_VIEW_TYPE_TOOLTIP_CLOSE_FLAG:"kin.volunteer.layerNoanswerViewTypeTooltipClose",
PCWEB_VOLUNTEER_COUNT_PER_PAGE:"kin.volunteer.noanswerCountPerPage",PCWEB_VOLUNTEER_SORT_OPTION:"kin.volunteer.noanswerSortOption",
PCWEB_END_THANKS_MESSAGE_CLICKED:"kin.detail.thanksMessageClicked",PCWEB_TODAY_KINUP:"kin.today.kinup",
PCWEB_WAIT_FOR_SELECTION:"kin.detail.waitForSelection",PCWEB_BINGO_LAYER_CLOSED_TIME:"kin.bingo.bingoLayerClosedTime",
PCWEB_LNB_NEW_ALMIGHTY_GOD_INFO:"kin.lnb.newAlmightyGodInfo",PCWEB_LICENSE_PROMOTION_LAYER:"kin.license.promotionLayer",
PCWEB_TAX_ADJUSTMENT_EVENT_LAYER:"kin.detail.taxAdjustmentEventLayer",PCWEB_HALL_DIRECTORY_ELITE_USER_LAYER_CLOSED:"kin.hall.hallDirectoryEliteUserLayerClosed",
PCWEB_LIKE_LIKE_LAYER_CLOSED:"kin.like.likeLayerClosed",PCWEB_LIKE_USEFUL_LAYER_CLOSED:"kin.like.usefulLayerClosed",
PCWEB_LIKE_HAHA_LAYER_CLOSED:"kin.like.hahaLayerClosed",PCWEB_LNB_NEW_ELITE_MARK_INFO:"kin.lnb.newEliteMarkInfo",
PCWEB_END_PROMOTION_LAYER_CLOSED:"kin.detail.promotionLayerClosed",PCWEB_QUSTION_WAIT_FOR_SELECTION_LAYER_CLOSED:"kin.question.waitForSelectionLayerClosed",
PCWEB_LAYER_CLOSED_TIME:"kin.common.layerClosedTime",PCWEB_PARTNER_CENTER_ACTIVITY_LAYER:"kin.partnerCenter.activityLayer",
PCWEB_ROULETTE_TICKET_LAYER_CLOSED_TIME:"kin.detail.rouletteTicketLayerClosedTime",PCWEB_ROULETTE_END_ALERT_LAYER_CLOSED_ROULETTE_NO:"kin.roulette.endAlertLayerRouletteNo"},
_nExceedCheckLimit:0,_oRemoveTimeOut:null,_EXCEED_CHECK_BUFFER_SIZE:5,isSupportLocalStorage:function(){try{if(typeof localStorage!==
"undefined"){localStorage.setItem(this.KEY.PCWEB_COMMON_LOCAL_STORAGE_GETTER_SETTER_SUPPORT_FLAG,"Y");
return true}}catch(e){}return false},
setItem:function(sKey,value){if(!this.isSupportLocalStorage())return false;try{if(this._isExceedLimit()){if(this._oRemoveTimeOut){clearTimeout(this._oRemoveTimeOut);
this._oRemoveTimeOut=null}this._oRemoveTimeOut=setTimeout($Fn(function(){this._removeExpiredItem()},this).bind(),
200)}localStorage.setItem(sKey,value);
return true}catch(e){this._checkExceededError(e)}return false},
getItem:function(sKey){if(!this.isSupportLocalStorage())return null;try{return localStorage.getItem(sKey)}catch(e){}return null},
removeItem:function(sKey){if(!this.isSupportLocalStorage())return false;try{localStorage.removeItem(sKey);
return true}catch(e){}return false},
_checkExceededError:function(oError){if(!oError)return;var sErrorName=oError.name;if(/exceeded/i.test(sErrorName)||
sErrorName==="NS_ERROR_DOM_QUOTA_REACHED")localStorage.clear()},
_isExceedLimit:function(){try{if(!this._nExceedCheckLimit)this._nExceedCheckLimit=Object.keys(this.KEY).length+
this._EXCEED_CHECK_BUFFER_SIZE}catch(e){return false}return localStorage.length>this._nExceedCheckLimit},
_removeExpiredItem:function(){if(!this.isSupportLocalStorage())return;try{var nLocalStorageKeyCount=localStorage.length;
if(nLocalStorageKeyCount<1)return;var aValidKey=$A($H(this.KEY).values());if(!aValidKey||aValidKey.length()<
1){localStorage.clear();return}var aRemoveTargetKey=[];for(var i=0;i<nLocalStorageKeyCount;i++){var sKey=
localStorage.key(i);if(sKey&&aValidKey.has(sKey)===false)aRemoveTargetKey.push(sKey)}for(var j=0,len=
aRemoveTargetKey.length;j<len;j++)localStorage.removeItem(aRemoveTargetKey[j])}catch(e){}}},
SessionStorage:{KEY:{LIST_INFO:"kin.common.listInfo",ANSWER_FOLDER_MODULE_EXPANDED_LIST:"kin.detail.answer.folder_module.expand.list",
ROULETTE_FROM_HISTORY_BACK_YN:"kin.roulette.from_history_back_yn"},isSupportSessionStorage:function(){try{if(typeof sessionStorage!==
"undefined")return true}catch(e){}return false},
setItem:function(sKey,value){if(!this.isSupportSessionStorage())return false;try{sessionStorage.setItem(sKey,
value);return true}catch(e){}return false},
getItem:function(sKey){if(!this.isSupportSessionStorage())return null;try{return sessionStorage.getItem(sKey)}catch(e){}return null},
removeItem:function(sKey){if(!this.isSupportSessionStorage())return false;try{sessionStorage.removeItem(sKey);
return true}catch(e){}return false}},
_AFTERLOGGING_TYPE:{"LIST_NOANSWER_HOME":79,"LIST_INTEREST_DIRECTORY_HOME":80,"LIST_INTEREST_LOCATION_HOME":81,
"LIST_INTEREST_KEYWORD_HOME":82,"LIST_RECEIVE_ONE2ONE_HOME":83,"SEARCH_TAG_NOANSWER_LIST_HOME":84},saveListInfo:function(sAfterLoggingType,
nPage,nDirId,nDocId,sSort){if(!sAfterLoggingType)return;var nType=this._AFTERLOGGING_TYPE[sAfterLoggingType];
if(!nType||!nPage||!nDirId||!nDocId)return;var sItem=nType+"_"+nPage+"_"+nDirId+"_"+nDocId+"_"+sSort;
this.SessionStorage.setItem(this.SessionStorage.KEY.LIST_INFO,sItem)},
sendListInfo:function(nCurrDirId,nCurrDocId){if(!nCurrDirId||!nCurrDocId)return;var sItem=this.SessionStorage.getItem(this.SessionStorage.KEY.LIST_INFO);
if(!sItem)return;var sItemArr=sItem.split("_");if(!sItemArr||sItemArr.length!=5){this.SessionStorage.removeItem(this.SessionStorage.KEY.LIST_INFO);
return}var nType=sItemArr[0];var nPage=sItemArr[1];var nDirId=sItemArr[2];var nDocId=sItemArr[3];var sSort=
sItemArr[4];this.SessionStorage.removeItem(this.SessionStorage.KEY.LIST_INFO);if(nDirId!=nCurrDirId||
nDocId!=nCurrDocId)return;var postUrl=pcKinServiceProtocol+"://"+location.hostname+"/ajax/kplog.nhn?dirId\x3d"+
nDirId+"\x26docId\x3d"+nDocId+"\x26type\x3d"+nType+"\x26page\x3d"+nPage+"\x26sort\x3d"+sSort;this.sendUrl(postUrl)},
sendUrl:function(postUrl){try{if(document.images){var obj=new Image;obj.src=postUrl;obj.width=1;obj.height=
1}else document.write('\x3cimg src\x3d"'+postUrl+'" width\x3d"1" height\x3d"1" border\x3d"0" /\x3e')}catch(e){return}},
removeServiceDefinedClassFromContents:function(){var aServiceDefinedClassList=["blind","highlight"];var nServiceDefinedClassCount=
aServiceDefinedClassList.length;for(var i=0;i<nServiceDefinedClassCount;i++){var sServiceDefinedClass=
aServiceDefinedClassList[i];if(sServiceDefinedClass){var aTargetElementList=$$("#container div._endContents ."+
sServiceDefinedClass);if(aTargetElementList){var nTargetElementCount=aTargetElementList.length;for(var j=
0;j<nTargetElementCount;j++)jindo.$Element(aTargetElementList[j]).removeClass(sServiceDefinedClass)}}}},
getLikeContentsInfo:function(sLikeContentsId){if(!sLikeContentsId)return null;var aLikeContentsInfo=sLikeContentsId.split("_");
if(aLikeContentsInfo.length<2)return null;var sGdId=aLikeContentsInfo[0]+"_"+aLikeContentsInfo[1];var nAnswerNo=
0;if(aLikeContentsInfo.length>2){nAnswerNo=parseInt(aLikeContentsInfo[2],10)||-1;if(nAnswerNo<0)return null}return{"gdId":sGdId,
"answerNo":nAnswerNo}},
getLikeContentsGdId:function(sLikeContentsId){var oLikeContentsInfo=this.getLikeContentsInfo(sLikeContentsId);
if(!oLikeContentsInfo)return null;return oLikeContentsInfo["gdId"]||null},
getLikeContentsAnswerNo:function(sLikeContentsId){var oLikeContentsInfo=this.getLikeContentsInfo(sLikeContentsId);
if(!oLikeContentsInfo)return-1;return oLikeContentsInfo["answerNo"]},
isExpiredLayerClosedTime:function(sLayerElementId,nMaxHideTime){var sLayerClosedTimeList=this.LocalStorage.getItem(this.LocalStorage.KEY.PCWEB_LAYER_CLOSED_TIME);
if(!sLayerClosedTimeList)return true;var oRegExpForLayerClosedTime=new RegExp(";("+sLayerElementId+"):([0-9]+);");
var aLayerClosedInfo=sLayerClosedTimeList.match(oRegExpForLayerClosedTime);if(!aLayerClosedInfo||aLayerClosedInfo.length<
3)return true;if(!nMaxHideTime)return false;var nLayerClosedTime=parseInt(aLayerClosedInfo[2]||0,10);
var bIsExpired=false;if(typeof nMaxHideTime==="string"&&nMaxHideTime==="today")bIsExpired=this.getDateString(new Date)!==
this.getDateString(new Date(nLayerClosedTime*1E3));else if(this.isNumber(nMaxHideTime)){var nCurrentTime=
Math.round((new Date).getTime()/1E3);bIsExpired=nCurrentTime>nLayerClosedTime+nMaxHideTime}else return false;
if(bIsExpired===false)return false;else{setTimeout($Fn(function(){sLayerClosedTimeList=sLayerClosedTimeList.replace(oRegExpForLayerClosedTime,
function(sMatch,sElementId,nLayerClosedTime,nOffset,sTotalString){return";"});
this.LocalStorage.setItem(this.LocalStorage.KEY.PCWEB_LAYER_CLOSED_TIME,sLayerClosedTimeList)},this).bind(),
0);
return true}},
checkLayerClosedTimeAndShow:function(sLayerElementId,nMaxHideTime){var wElement=$Element(sLayerElementId);
if(!wElement)return;if(this.isExpiredLayerClosedTime(sLayerElementId,nMaxHideTime))wElement.show();else wElement.hide()},
hideAndSaveLayerClosedTime:function(sLayerElementId){var wElement=$Element(sLayerElementId);if(!wElement)return;
wElement.hide();this.saveLayerClosedTime(sLayerElementId)},
saveLayerClosedTime:function(sLayerElementId){if(!sLayerElementId)return;setTimeout($Fn(function(){var sLayerClosedTimeList=
this.LocalStorage.getItem(this.LocalStorage.KEY.PCWEB_LAYER_CLOSED_TIME);var nCurrentTime=Math.round((new Date).getTime()/
1E3);if(!sLayerClosedTimeList)sLayerClosedTimeList=";"+sLayerElementId+":"+nCurrentTime+";";else{var oRegExpForLayerClosedTime=
new RegExp(";("+sLayerElementId+"):([0-9]+);");if(oRegExpForLayerClosedTime.test(sLayerClosedTimeList))sLayerClosedTimeList=
sLayerClosedTimeList.replace(oRegExpForLayerClosedTime,function(sMatch,sElementId,nLayerClosedTime,nOffset,
sTotalString){return";"+sLayerElementId+":"+nCurrentTime+";"});
else sLayerClosedTimeList=sLayerClosedTimeList+sLayerElementId+":"+nCurrentTime+";"}this.LocalStorage.setItem(this.LocalStorage.KEY.PCWEB_LAYER_CLOSED_TIME,
sLayerClosedTimeList)},this).bind(),0)},
scrollToElement:function(sName){var wScrollTargetElement=$Element($$.getSingle("a[name\x3d"+sName+"]"))||
$Element(sName);if(wScrollTargetElement){var nOffsetTop=wScrollTargetElement.offset().top||0;setTimeout(function(){window.scrollTo(0,
nOffsetTop)},100)}},
encodeHtmlEntity:function(sStr){if(!sStr)return;var oHtmlEntityEncodeRule={"\x26":"\x26amp;","\x3c":"\x26lt;",
"\x3e":"\x26gt;",'"':"\x26quot;","'":"\x26#39;","(":"\x26#40;",")":"\x26#41;","/":"\x26#47;","`":"\x26#96;"};
return sStr.replace(/[&<>"'\(\)\/`]/g,$Fn(function(oHtmlEntityEncodeRule,sMatched){return oHtmlEntityEncodeRule&&
oHtmlEntityEncodeRule[sMatched]||sMatched},this).bind(oHtmlEntityEncodeRule))},
getAutoTitle:function(sTitle,sContents){if(!sTitle||sTitle===""||!sContents||sContents==="")return sTitle;
return jindo.$S(sTitle||"").trim().toString()!=jindo.$S(sContents||"").trim().toString()?sTitle+"...":
sTitle}};
nhn.Kin.Utility.AjaxManager=jindo.$Class({_oData:{},_oAjaxID:{},$init:function(){this._oData={};this._oAjaxID=
{};this._oCacheInstance=nhn.Kin.getInstance("cache")},
_getRandomId:function(){return String(parseInt(Math.random()*1E10,10))},
_checkEqualObject:function(oBase,oComparison){if(!oBase||!oComparison)return false;if(jindo.$H(oBase).length()!=
jindo.$H(oComparison).length())return false;for(var x in oBase){if(x=="dummy")continue;if(typeof oBase[x]==
"object"){if(!this._checkEqualObject(oBase[x],oComparison[x]))return false}else if(oBase[x]!=oComparison[x])return false}return true},
request:function(sMethod,sURL,oParameter,callback,bCache){sMethod=sMethod||"POST";oParameter=oParameter||
{};if(typeof oParameter=="object"&&"toJSON"in oParameter)oParameter.toJSON=null;if(bCache){var oCacheKey=
oParameter;oCacheKey["url"]=sURL;var oCachedData=this._oCacheInstance.get(oCacheKey);if(oCachedData){callback(oCachedData,
oParameter);return false}}for(var x in this._oData)if(!this._oData[x].requested&&this._oData[x].url==
sURL&&this._checkEqualObject(this._oData[x].parameter,oParameter))return false;var fpCallback=function(){};
var sRandomId=this._getRandomId();var oRequestParameter={"method":sMethod,"url":sURL,"parameter":oParameter};
this._oData[sRandomId]={"requested":false,"method":sMethod,"url":sURL,"parameter":oRequestParameter.parameter,
"fCallback":callback};fpCallback=jindo.$Fn(function(sRandomId,oResponseData){this._oAjaxID[sRandomId]=
null;delete this._oAjaxID[sRandomId];if(oResponseData._response.status=="200"){this._oData[sRandomId]["requested"]=
true;oResponseData=oResponseData.json();callback(oResponseData,oParameter);if(bCache&&oResponseData.isSuccess)this._saveCache(sRandomId,
oResponseData)}else{this._oData[sRandomId]=null;delete this._oData[sRandomId]}},this).bind(sRandomId);
if(sMethod.toUpperCase()=="GET"){sURL+=sURL.indexOf("?")!=-1?"\x26":"?";sURL+=jindo.$H(oParameter).toQueryString()}this._oAjaxID[sRandomId]=
(new jindo.$Ajax(nhn.Kin.getAjaxUrl("sAjaxURL")+sURL,{method:sMethod,onload:fpCallback})).request(oParameter)},
_saveCache:function(sRandomId,oResponseData){var oCacheKey=this._oData[sRandomId]["parameter"];oCacheKey["url"]=
this._oData[sRandomId]["url"];this._oCacheInstance.add(oCacheKey,oResponseData)}});
if(jindo.Component)nhn.Kin.Utility.Cache=jindo.$Class({$init:function(oOptions){this._oCacheData={};this._oExpireTime=
{};this._waKeyList=jindo.$A();this._oOption=oOptions||{"nCacheLimit":3}},
_checkCacheData:function(){for(var x in this._oExpireTime)if(this._checkExpireTime(x)===false)this.remove(x)},
add:function(vKey,vValue,nExpireTime){if(!vKey||!vValue)return false;vKey=this._getKeyString(vKey);this._oCacheData[vKey]=
vValue;this._checkCacheData();if(nExpireTime)this._oExpireTime[vKey]=this._getTime()+nExpireTime*1E3;
if(this._waKeyList.length()==this._oOption.nCacheLimit)this.remove(this._waKeyList.$value()[0]);this._waKeyList.push(vKey);
return true},
remove:function(vKey){if(!vKey||!this._oCacheData[vKey])return false;vKey=this._getKeyString(vKey);this._waKeyList=
this._waKeyList.refuse(vKey);delete this._oExpireTime[vKey];delete this._oCacheData[vKey];return this._oCacheData[vKey]?
false:true},
clear:function(){this._oCacheData={};this._oExpireTime={};this._waKeyList=jindo.$A()},
get:function(vKey){if(!vKey)return false;vKey=this._getKeyString(vKey);if(this._oCacheData[vKey]&&this._checkExpireTime(vKey))return this._oCacheData[vKey]},
check:function(vKey){if(!vKey)return false;vKey=this._getKeyString(vKey);if(this._oCacheData[vKey]&&this._checkExpireTime(vKey))return true;
else return false},
getCacheLimit:function(){return this._oOption.nCacheLimit},
setCacheLimit:function(nLimit){if(nLimit){var nDifferent=this._oOption.nCacheLimit-nLimit;if(nDifferent>
0){var oTmpCacheData={};var oTmpExpireTime={};var waTmpKeyList=jindo.$A();for(var i=nDifferent;i<this._waKeyList.length();i++){oTmpCacheData[this._waKeyList.$value()[i]]=
this._oCacheData[this._waKeyList.$value()[i]];oTmpExpireTime[this._waKeyList.$value()[i]]=this._oExpireTime[this._waKeyList.$value()[i]];
waTmpKeyList.push(this._waKeyList.$value()[i])}this._oCacheData=oTmpCacheData;this._oExpireTime=oTmpExpireTime;
this._waKeyList=waTmpKeyList}this._oOption.nCacheLimit=nLimit}},
_checkExpireTime:function(sKey){if(this._oExpireTime[sKey])if(this._getTime()<this._oExpireTime[sKey])return true;
else{this.remove(sKey);return false}else return true},
_getKeyString:function(vKey){if(typeof vKey=="string")return vKey;var aList=[];for(var x in vKey)aList.push(x+
"\x3d"+vKey[x]);return aList.join("\x26")},
_getTime:function(){return(new Date).getTime()}}).extend(jindo.Component);
nhn.Kin.Utility.ProfileManager=jindo.$Class({_oElement:null,_oEvent:null,_oProfileHTML:null,$init:function(elRoot){this._oElement=
{};this._oEvent={};this._sBtnProfileClassName="_btn_profile";this._sProfileLayerId="au_layer_profile";
this._oClickedTarget={};this._oProfileHTML={};this._oLastClickedElement=null;this._oFirstElementOFLayer=
null;this._oLastElementOFLayer=null;this._elRoot=elRoot;this._setElement();this._attachEvent();jindo.$Fn(this.destroy,
this).attach(window,"unload")},
destroy:function(){this._detachEvent();this._oElement=null;this._oEvent=null},
_setElement:function(){if(this._elRoot){this._oElement["profile_layer_holder"]=jindo.$$.getSingle("._au_layer_profile_holder",
this._elRoot);this._oElement["profile_layer"]=jindo.$$.getSingle("._au_layer_profile",this._elRoot);this._oElement["profile_iframe"]=
jindo.$$.getSingle("._au_iframe_profile",this._elRoot)}else{this._oElement["profile_layer_holder"]=$("au_layer_profile_holder");
this._oElement["profile_layer"]=$("au_layer_profile");this._oElement["profile_iframe"]=$("au_iframe_profile")}},
_attachEvent:function(){if(this._elRoot)this._oEvent["document_click"]={"action":"click","target":this._elRoot,
"event":jindo.$Fn(this._clickDocument,this).attach(this._elRoot,"click")};else this._oEvent["document_click"]=
{"action":"click","target":document,"event":jindo.$Fn(this._clickDocument,this).attach(document,"click")};
this._oEvent["layer_click"]={"action":"click","target":this._oElement["profile_layer_holder"],"event":jindo.$Fn(this._clickDocument,
this).attach(this._oElement["profile_layer_holder"],"click")}},
_detachEvent:function(){for(var x in this._oEvent)this._oEvent[x]["event"].detach(this._oEvent[x]["target"],
this._oEvent[x]["action"])},
_clickDocument:function(oEvent){var elClickedTarget=nhn.Kin.Utility.getElementByLookUpChildElment(oEvent.element);
if(jindo.$$.test(elClickedTarget,"img._btn_profile")){this._oLastClickedElement=oEvent.element;var sEditorUserKey=
this._getEditorUserKey(elClickedTarget);if(sEditorUserKey){this._oClickedTarget["sEditorUserKey"]=sEditorUserKey;
this._oClickedTarget["elProfileBtn"]=elClickedTarget;this._oClickedTarget["elProfilePhoto"]=jindo.$$.getSingle("! ._photo_profile",
elClickedTarget)}if(this._oProfileHTML[sEditorUserKey])if(this._oProfileHTML[sEditorUserKey].bHasErrorMsg)alert(this._oProfileHTML[sEditorUserKey].errorMsg);
else{jindo.$Element(this._oElement["profile_layer"]).html(this._oProfileHTML[sEditorUserKey]);this.showProfileLayer()}else this.getProfileData();
oEvent.stop()}else if(jindo.$$.test(elClickedTarget,"img._btn_profile_close")){this.hideProfileLayer(true);
oEvent.stop()}else;},
_getEditorUserKey:function(elClickedTarget){return jindo.$Element(elClickedTarget).className().replace(/.*_param\('([^\)]+)'\).*/g,
"$1")},
getProfileData:function(fpCallback){var sEditorUserKey=this._oClickedTarget["sEditorUserKey"];if(!sEditorUserKey)return false;
var sUrl="userActivity.nhn";nhn.Kin.Utility.request("POST",sUrl,{"u":sEditorUserKey},fpCallback||jindo.$Fn(this.refreshProfileLayer,
this).bind(),true)},
refreshProfileLayer:function(oResponse){var sEditorUserKey,sProfileHtml;if(oResponse)if(oResponse.isSuccess){sEditorUserKey=
this._oClickedTarget["sEditorUserKey"];sProfileHtml=this._oProfileHTML[sEditorUserKey]||this.makeProfileHTML(oResponse);
if(sProfileHtml){this._oProfileHTML[sEditorUserKey]=sProfileHtml;jindo.$Element(this._oElement["profile_layer"]).html(sProfileHtml);
this.showProfileLayer()}}else{if(oResponse.errorMsg=="FAIL_NOT_EXISTS"&&this._oClickedTarget["sEditorUserKey"]){sEditorUserKey=
this._oClickedTarget["sEditorUserKey"];this._oProfileHTML[sEditorUserKey]={};this._oProfileHTML[sEditorUserKey].errorMsg=
"\uc9c0\uc2dd\uc778 \uc815\ubcf4\ub97c \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.";this._oProfileHTML[sEditorUserKey].bHasErrorMsg=
true;alert(this._oProfileHTML[sEditorUserKey].errorMsg)}}else alert("\uc9c0\uc2dd\uc778 \uc815\ubcf4\ub97c \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")},
_setFirstElementAndLastElement:function(){var aAnchorsOfLayer=$$("a",this._oElement["profile_layer"]);
if(!aAnchorsOfLayer||aAnchorsOfLayer.length<1)return;this._oFirstElementOFLayer=aAnchorsOfLayer[0];this._oLastElementOFLayer=
aAnchorsOfLayer[aAnchorsOfLayer.length-1];this._oEvent["keyDownForFirstElement"]={"action":"keyDown",
"target":this._oFirstElementOFLayer,"event":jindo.$Fn(this._focusOutToBeforeElement,this).attach(this._oFirstElementOFLayer,
"keyDown")};this._oEvent["keyDownForLastElement"]={"action":"keyDown","target":this._oLastElementOFLayer,
"event":jindo.$Fn(this._focusOutToAfterElement,this).attach(this._oLastElementOFLayer,"keyDown")};if(this._oFirstElementOFLayer)this._oFirstElementOFLayer.focus()},
_focusOutToBeforeElement:function(we){var oKey=we.key();if(oKey.shift==false||oKey.keyCode!=9)return;
this.hideProfileLayer(true);we.stop()},
_focusOutToAfterElement:function(we){var oKey=we.key();if(oKey.shift||oKey.keyCode!=9)return;this.hideProfileLayer(true);
we.stop()},
makeProfileHTML:function(oResponse){if(oResponse.isSuccess===false||!oResponse.result.length)return false;
var oResult=oResponse.result[0]||{};var sUserType=oResult.type;var sHTML=[];if(sUserType=="EXPERT"){sHTML.push('\x3cp class\x3d"id"\x3e\x3ca href\x3d"/profile/index.naver?u\x3d'+
oResult.encodedU+'?p\x3d1" class\x3d"_profile_id" target\x3d"_blank"\x3e');sHTML.push("\x3cstrong\x3e"+
oResult.name+"\x3c/strong\x3e("+oResult.viewUserId+")");if(oResult.occupation==="\ucc3d\uc5c5\uc131\uc7a5\uc804\ubb38\uac00")sHTML.push("\x3c/a\x3e\x3c/p\x3e");
else sHTML.push("\x3c/a\x3e "+oResult.occupation+"\x3c/p\x3e");sHTML.push('\x3cdl class\x3d"pro"\x3e');
sHTML.push('\x3cdt class\x3d"belong"\x3e\x3cstrong\x3e'+oResult.companyText+"\x3c/strong\x3e\x3c/dt\x3e");
sHTML.push("\x3cdt\x3e\x3cstrong\x3e"+oResult.answerName+"\ub2f5\ubcc0\x3c/strong\x3e\x3c/dt\x3e");sHTML.push("\x3cdd\x3e\x3cstrong\x3e"+
oResult.answerCount+"\x3c/strong\x3e\x3c/dd\x3e");sHTML.push("\x3c/dl\x3e");sHTML.push('\x3cul class\x3d"etc_link"\x3e');
sHTML.push('\x3cli\x3e\x3ca href\x3d"/profile/index.naver?u\x3d'+oResult.encodedU+'?p\x3d1" class\x3d"_profile_id" target\x3d"_blank"\x3e\ud504\ub85c\ud544\x3c/a\x3e\x3c/li\x3e');
var sExpType="";if(oResult.answerName==="\uc758\uc0ac")sExpType="doctor";else if(oResult.answerName===
"\ud55c\uc758\uc0ac")sExpType="oriental";else if(oResult.answerName==="\ubcc0\ud638\uc0ac"||oResult.answerName===
"\ubcc0\ub9ac\uc0ac")sExpType="lawyer";else if(oResult.answerName==="\ub178\ubb34\uc0ac")sExpType="laboragent";
else if(oResult.answerName==="\uc218\uc758\uc0ac")sExpType="animalDoctor";else if(oResult.answerName===
"\uc57d\uc0ac")sExpType="pharmacist";var sExpertLink="/qna/question.nhn?expertType\x3d"+sExpType;sHTML.push('\x3cli class\x3d"pro"\x3e\x3ca class\x3d"q '+
nhn.Kin.Utility.getNClicksClass("prl.exp")+'" href\x3d"'+sExpertLink+'" target\x3d"_blank"\x3e\uc804\ubb38\uac00\uc5d0\uac8c \uc9c8\ubb38\ud558\uae30\x3c/a\x3e\x3c/li\x3e');
sHTML.push("\x3c/ul\x3e");sHTML.push('\x3ca href\x3d"#" class\x3d"close2 _lookUpChildElement(\'img\')"\x3e');
sHTML.push('\x3cimg class\x3d"_btn_profile_close" src\x3d"'+nhn.Kin.getImagePath()+'btn_close_layer3.gif" width\x3d"19" height\x3d"19" alt\x3d"\ub2eb\uae30"\x3e');
sHTML.push("\x3c/a\x3e")}else{sHTML.push('\x3cp class\x3d"id"\x3e\x3ca href\x3d"/profile/index.naver?u\x3d'+
oResult.encodedU+'?p\x3d1" class\x3d"_profile_id" target\x3d"_blank"\x3e');if(oResult.useNickname)sHTML.push("\x3cstrong\x3e"+
oResult.nickname+"\x3c/strong\x3e\x3cbr\x3e("+oResult.viewUserId+")\ub2d8");else sHTML.push("\x3cstrong\x3e"+
oResult.viewUserId+"\x3c/strong\x3e\ub2d8");sHTML.push("\x3c/a\x3e\x3c/p\x3e");sHTML.push("\x3cdl\x3e");
sHTML.push("\x3cdt\x3e\x3cstrong\x3e\ub4f1\uae09\x3c/strong\x3e (\uc21c\uc704)\x3c/dt\x3e");sHTML.push("\x3cdd\x3e\x3cstrong\x3e");
sHTML.push(oResult.levelName);sHTML.push("\x3c/strong\x3e (");sHTML.push(oResult.ranking);sHTML.push("\uc704)\x3c/dd\x3e");
sHTML.push("\x3cdt\x3e\x3cstrong\x3e\uc9c8\ubb38\x3c/strong\x3e (\ub9c8\uac10\ub960)\x3c/dt\x3e");sHTML.push("\x3cdd\x3e\x3cstrong\x3e");
var nQuestionCnt=oResult.questionCnt||oResult.questionCnt===0?oResult.questionCnt:"-";sHTML.push(nQuestionCnt);
sHTML.push("\x3c/strong\x3e (");var nQuestionRate=oResult.questionRate||oResult.questionRate===0?oResult.questionRate:
"-";sHTML.push(nQuestionRate);sHTML.push("%)\x3c/dd\x3e");sHTML.push("\x3cdt\x3e\x3cstrong\x3e\ub2f5\ubcc0\x3c/strong\x3e (\ucc44\ud0dd\ub960)\x3c/dt\x3e");
sHTML.push("\x3cdd\x3e\x3cstrong\x3e");var nAnswerCnt=oResult.answerCnt||oResult.answerCnt===0?oResult.answerCnt:
"-";sHTML.push(nAnswerCnt);sHTML.push("\x3c/strong\x3e (");var nBestRate=oResult.bestRate||oResult.bestRate===
0?oResult.bestRate:"-";sHTML.push(nBestRate);sHTML.push("%)\x3c/dd\x3e");sHTML.push("\x3c/dl\x3e");sHTML.push('\x3cul class\x3d"etc_link"\x3e');
sHTML.push('\x3cli\x3e\x3ca href\x3d"/profile/index.naver?u\x3d'+oResult.encodedU+'?p\x3d1" class\x3d"_profile_id" target\x3d"_blank"\x3e\ud504\ub85c\ud544\x3c/a\x3e\x3c/li\x3e');
sHTML.push("\x3c/ul\x3e");sHTML.push('\x3ca href\x3d"#" class\x3d"close2 _lookUpChildElement(\'img\')"\x3e');
sHTML.push('\x3cimg class\x3d"_btn_profile_close" src\x3d"'+nhn.Kin.getImagePath()+'btn_close_layer3.gif" width\x3d"19" height\x3d"19" alt\x3d"\ub2eb\uae30"\x3e');
sHTML.push("\x3c/a\x3e")}var sEditorUserKey=this._oClickedTarget["sEditorUserKey"];this._oProfileHTML[sEditorUserKey]=
sHTML.join("");return this._oProfileHTML[sEditorUserKey]},
showProfileLayer:function(){var welProfileLayerHolder=jindo.$Element(this._oElement["profile_layer_holder"]);
var welProfileLayer=jindo.$Element(this._oElement["profile_layer"]);var welProfileIframe=jindo.$Element(this._oElement["profile_iframe"]);
welProfileLayerHolder.show();welProfileLayer.show();welProfileIframe.show();this.profilePosition(this._oClickedTarget["elProfilePhoto"],
welProfileLayerHolder.$value());this._setFirstElementAndLastElement()},
profilePosition:function(el,elLayer){if(!el||!elLayer)return;var oLayerPosition=new jindo.LayerPosition(el,
elLayer,{sPosition:"outside-top-right",nTop:0,nLeft:0,bAuto:false})},
hideProfileLayer:function(bIsReturnFocus){var welProfileLayerHolder=jindo.$Element(this._oElement["profile_layer_holder"]);
var welProfileIframe=jindo.$Element(this._oElement["profile_iframe"]);welProfileLayerHolder.hide();welProfileIframe.hide();
if(bIsReturnFocus&&this._oLastClickedElement)this._oLastClickedElement.focus();if(this._oEvent["keyDownForFirstElement"]&&
this._oEvent["keyDownForFirstElement"]["event"])this._oEvent["keyDownForFirstElement"]["event"].detach(this._oEvent["keyDownForFirstElement"]["target"],
this._oEvent["keyDownForFirstElement"]["action"]);if(this._oEvent["keyDownForLastElement"]&&this._oEvent["keyDownForLastElement"]["event"])this._oEvent["keyDownForLastElement"]["event"].detach(this._oEvent["keyDownForLastElement"]["target"],
this._oEvent["keyDownForLastElement"]["action"])}});
if(jindo.Component)nhn.Kin.Utility.PageRolling=jindo.$Class({_nCurrentIndex:null,_oElement:null,_oEvent:null,
$init:function(el,oOption){if(!el)return false;this._oElement={};this._oEvent={};this._nCurrentIndex=
0;var oDefaultOption={classPrefix:"pr-",checkEvent:"click",defaultPage:0,movePageCnt:1,bDynamicDelete:false};
this.option(oDefaultOption);this.option(oOption||{});this._oElement={};this._setElement(el);this._setInitializeInfo();
this._wfEventButton=jindo.$Fn(this._onEventButton,this);this._oEvent=this._wfEventButton.attach(this._oElement["holder"],
this.option("checkEvent"))},
destroy:function(){if(this._oElement&&this._oElement["holder"])this._oEvent.detach(this._oElement["holder"],
this.option("checkEvent"));this.option=null;this._nCurrentIndex=null;this._oElement=null;this._nPrevIndex=
null;this._nCurrentIndex=null;this._nMaxIndex=null;this._wfEventButton=null},
_setElement:function(elHolder){var sPrefix=this.option("classPrefix");this._oElement["holder"]=elHolder;
this._oElement["prev_btn"]=jindo.$$.getSingle("."+sPrefix+"prev",this._oElement["holder"]);this._oElement["next_btn"]=
jindo.$$.getSingle("."+sPrefix+"next",this._oElement["holder"]);this._oElement["arr_content"]=jindo.$$("."+
sPrefix+"content",this._oElement["holder"]);this._oElement["page"]=jindo.$$.getSingle("."+sPrefix+"page",
this._oElement["holder"])},
_setInitializeInfo:function(){var _nCurrentIndexForDynamicDelete=0;if(this.option("bDynamicDelete")===
true&&this._nCurrentIndex)_nCurrentIndexForDynamicDelete=this._nCurrentIndex;this._nPrevIndex=0;this._nCurrentIndex=
_nCurrentIndexForDynamicDelete;this._nMaxIndex=this._oElement["arr_content"].length-1;if(this._nMaxIndex>
0){for(var i=0;i<=this._nMaxIndex;i++){this._oElement["arr_content"][i]=jindo.$Element(this._oElement["arr_content"][i]);
this._oElement["arr_content"][i].hide()}this._showPage()}else{this._oElement["arr_content"][0]=jindo.$Element(this._oElement["arr_content"][0]);
if(this.option("bDynamicDelete")===true&&this._oElement["arr_content"][this._nCurrentIndex])this._oElement["arr_content"][this._nCurrentIndex].show()}},
getCurrentPageElement:function(){return this._oElement["arr_content"][this._nCurrentIndex]},
getNextPageElement:function(){return this._oElement["arr_content"][this._nCurrentIndex+1]},
resetElement:function(){var sPrefix=this.option("classPrefix");this._oElement["prev_btn"]=jindo.$$.getSingle("."+
sPrefix+"prev",this._oElement["holder"]);this._oElement["next_btn"]=jindo.$$.getSingle("."+sPrefix+"next",
this._oElement["holder"]);this._oElement["arr_content"]=jindo.$$("."+sPrefix+"content",this._oElement["holder"]);
this._setInitializeInfo()},
_onEventButton:function(oEvent){var elTarget=oEvent.element;elTarget=jindo.$$.getSingle("! a",elTarget)?
jindo.$$.getSingle("! a",elTarget):elTarget;var sPrefix=this.option("classPrefix");this.fireEvent(oEvent.type,
{event:oEvent});if(jindo.$$.test(elTarget,"."+sPrefix+"prev")){nhn.Kin.Utility.hideProfile();this._movePage("prev");
oEvent.stop()}else if(jindo.$$.test(elTarget,"."+sPrefix+"next")){nhn.Kin.Utility.hideProfile();this._movePage("next");
oEvent.stop()}else;},
getPageRollingHolder:function(){return this._oElement["holder"]},
refreshContent:function(sHTML){if(!sHTML)return false;this._oElement["arr_content"][0].html(sHTML)},
_movePage:function(sMoveType,nIndex){if(!this.fireEvent("beforeMovePage",{movetype:sMoveType,index:nIndex||
this._nCurrentIndex,content:this._oElement["arr_content"][nIndex||this._nCurrentIndex]}))return;if(this._nMaxIndex>
0){this._nPrevIndex=this._nCurrentIndex;if(nIndex)this._nCurrentIndex=nIndex;else{this._nCurrentIndex=
sMoveType=="prev"?this._nCurrentIndex-this.option("movePageCnt"):this._nCurrentIndex+this.option("movePageCnt");
if(this._nCurrentIndex<0)this._nCurrentIndex=this._nMaxIndex+this._nCurrentIndex+1;if(this._nCurrentIndex>
this._nMaxIndex)this._nCurrentIndex=0}this._showPage()}else this.refreshContent();if(!this.fireEvent("afterMovePage",
{movetype:sMoveType,index:nIndex||this._nCurrentIndex,content:this._oElement["arr_content"][nIndex||this._nCurrentIndex]}))return},
_showPage:function(){if(this.option("movePageCnt")==1){this._oElement["arr_content"][this._nPrevIndex].hide();
this._oElement["arr_content"][this._nCurrentIndex].show()}else for(var i=0;i<this.option("movePageCnt");i++){var nHideIndex=
this._nPrevIndex+i;nHideIndex=nHideIndex%(this._nMaxIndex+1);this._oElement["arr_content"][nHideIndex].hide();
var nShowIndex=this._nCurrentIndex+i;nShowIndex=nShowIndex%(this._nMaxIndex+1);this._oElement["arr_content"][nShowIndex].show()}if(this._oElement["page"])jindo.$Element(this._oElement["page"]).html(String(this._nCurrentIndex+
1));var nStartIndex=this._nCurrentIndex;var nEndIndex=this._nCurrentIndex+this.option("movePageCnt")}}).extend(jindo.Component);
nhn.Kin.Utility.TooltipManager=jindo.$Class({_oElement:null,_oEvent:null,$init:function(el,type){this._oElement=
{};this._oEvent={};this._elTargetArea=el||$("au_board_list");this._elBackupTargetArea=this._elTargetArea;
this._wsParam=null;this._bMouseout=false;this._oTimer=null;this._nInterval=500;this._sType=type||"normal";
this._oErrMsg={FAIL_NOT_EXISTS:"\ubcf8 \uac8c\uc2dc\ubb3c\uc740 \uc874\uc7ac\ud558\uc9c0 \uc54a\uac70\ub098 \uc0ad\uc81c\ub41c \uac8c\uc2dc\ubb3c\uc785\ub2c8\ub2e4.",
FAIL_NOT_AUTHORIZED:"\ub124\uc774\ubc84\uc758 \uadf8\ub9b0\uc778\ud130\ub137 \ucea0\ud398\uc778\uc5d0 \ub530\ub77c \uc5f0\ub839 \ud655\uc778\uc744 \ud558\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790\ub294 \uc774\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
FAIL_ADULT_ONLY:"\ub124\uc774\ubc84\uc758 \uadf8\ub9b0\uc778\ud130\ub137 \ucea0\ud398\uc778\uc5d0 \ub530\ub77c \uc5f0\ub839 \ud655\uc778\uc744 \ud558\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790\ub294 \uc774\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."};
this._attachEvent();jindo.$Fn(this.destroy,this).attach(window,"unload")},
_setPos:function(el){var nLeft=parseInt(jindo.$Element(el).css("paddingLeft"),10)||el.offsetLeft||0;el=
el.offsetParent;if(el.previousSibling)nLeft+=parseInt(jindo.$Element(el.previousSibling).css("width"),
10)||0;this._oPos={"left":nLeft,"marginTop":"16px"}},
_setIE6css:function(el,elLayer,elIfrm){if(jindo.$Agent().navigator().version==6){if(!el.parentNode.parentNode.nextSibling||
!el.parentNode.parentNode.nextSibling.nextSibling)this._oElement.bLast=true;if(elLayer&&!elLayer.first().hasClass("img"))elLayer.css("paddingBottom",
0);if(elIfrm)elIfrm.css("height",this._oElement.ie6_ifrm_css.height+1)}},
destroy:function(){this._detachEvent();this._oElement=this._oEvent=this._elTargetArea=this._elBackupTargetArea=
this._oPos=this._wsParam=this._bMouseout=this._oTimer=this._nInterval=this._oErrMsg=null},
_attachEvent:function(){this._oEvent["board_mouseover"]={"action":"mouseover","target":this._elTargetArea,
"event":jindo.$Fn(this._mouseOverOutBoard,this).attach(this._elTargetArea,"mouseover")};this._oEvent["board_mouseout"]=
{"action":"mouseout","target":this._elTargetArea,"event":jindo.$Fn(this._mouseOverOutBoard,this).attach(this._elTargetArea,
"mouseout")}},
_detachEvent:function(){for(var x in this._oEvent)this._oEvent[x]["event"].detach(this._oEvent[x]["target"],
this._oEvent[x]["action"])},
_mouseOverOutBoard:function(oEvent){var el=oEvent.element;if(!el.href||!el.rel||jindo.$Agent().os().ipad)return;
this._oElement["current_board"]=el;var elLayer=this._getLayer(),elIfrm=this._oElement.ie6_ifrm,that=this,
elIframe=null;if(oEvent.type=="mouseover"){if(!this._oPos&&jindo.$Agent().navigator().ie&&!window.JSON)this._setPos(el);
this._bMouseout=false;if(that._sType!="small")this._setIE6css(el,elLayer,elIfrm);this._oTimer=setTimeout(function(){if(elLayer)!elLayer.hasClass("_empty_content")&&
elLayer.show();else that._getTooltipData(el);if(that._sType=="small")elIframe=jindo.$$.getSingle("!li iframe",
el);else elIframe=jindo.$$.getSingle("!td iframe",el);if(elIframe&&that._oElement.bLast||this._sType==
"small")jindo.$Element(elIframe).show();el=elLayer=elIframe=elIfrm=that=null},this._nInterval)}else{this._bMouseout=
true;
this._oElement.bLast=false;clearTimeout(this._oTimer);if(elLayer){elLayer.hide();if(that._sType=="small")elIframe=
jindo.$$.getSingle("!li iframe",el);else elIframe=jindo.$$.getSingle("!td iframe",el);if(elIframe)jindo.$Element(elIframe).hide()}var aTooltipLayer=
jindo.$$("._tooltip_layer_base",this._elTargetArea);for(var n=0;n<aTooltipLayer.length;n++){var wTooltip=
jindo.$Element(aTooltipLayer[n]);if(wTooltip.visible()===true)wTooltip.hide()}}},
_getParameter:function(){var el=this._oElement["current_board"],sRel=el.rel,sHref=el.href,wsParam,aSvcAnswerNo;
wsParam=jindo.$S(sHref.replace(/^[^\?]*\?/i,"")).parseString()||0;aSvcAnswerNo=sRel.split(":");wsParam.svc=
aSvcAnswerNo[0];if(aSvcAnswerNo.length>1)wsParam.answerNo=aSvcAnswerNo[1];wsParam.idx=el.className.replace(/.*_param\('([^\)]+)'\).*/g,
"$1").split(",")[1]||"";return wsParam},
_getLayer:function(){this._wsParam=this._getParameter();var sParameter=this._wsParam.docId+this._wsParam.idx;
var elLayer=this._oElement[sParameter];if(!elLayer)elLayer=jindo.$Element(jindo.$$.getSingle("~ ._layer_base",
this._oElement["current_board"]));return this._wsParam&&elLayer},
_getTooltipData:function(oEl){if(!this._wsParam)return;var sSVC=this._wsParam.svc;var sUrl="";if(sSVC===
"KIN")sUrl="previewKIN.nhn";else if(sSVC==="KNOWHOW"||sSVC==="knowhow")sUrl="previewKnowhow.nhn";else if(sSVC===
"OPEN100"||sSVC==="open100")sUrl="previewOpen100.nhn";nhn.Kin.Utility.request("POST",sUrl,{m:this._wsParam.svc,
dirId:this._wsParam.dirId||0,docId:this._wsParam.docId||0,answerNo:this._wsParam.answerNo||0},jindo.$Fn(this._showTooltipData,
this).bind(oEl,this._wsParam.docId,this._wsParam.idx),false)},
_showTooltipData:function(oEl,sDocId,sIdx,oResponse){var elLayer=this._getLayer();if(elLayer)!elLayer.hasClass("_empty_content")&&
elLayer.show();else{var sParameter=sDocId+sIdx;elLayer=this._oElement[sParameter]=this._makeHTML(oResponse.isSuccess?
oResponse.result[0]:{contents:this._oErrMsg[oResponse.errorMsg]});jindo.$Element(oEl.parentNode).append(elLayer);
if(this._sType=="small"&&jindo.$Agent().navigator().version==6){var nth=oEl.className.replace(/.*_param\('([^\)]+)'\).*/g,
"$1").split(",")[0];var nTop=18+Number(nth)*20;elLayer.css({"top":nTop+"px"})}}if(this._oElement.bLast){var elIframe=
this._oElement.ie6_ifrm=jindo.$Element("\x3ciframe frameborder\x3d'0' scrolling\x3d'no' marginwidth\x3d'0' marginheight\x3d'0' title\x3d\"\ub0b4\uc6a9\uc5c6\uc74c\"\x3e");
this._oElement.ie6_ifrm_css={border:0,left:this._oPos.left,marginTop:this._oPos.marginTop,position:"absolute",
zIndex:1,width:elLayer.width(),height:elLayer.height()};elIframe.css(this._oElement.ie6_ifrm_css);jindo.$Element(oEl.parentNode).append(elIframe)}if(this._bMouseout)elLayer.hide()},
_makeHTML:function(oResponse){var el=this._oElement["current_board"],nth,elDiv,aHTML=[];var emptyContent=
oResponse.contents.trim()==="";var elDivHtml;var elDivEmptyContentClass=emptyContent?" _empty_content":
"";if(this._sType=="normal"){elDivHtml="\x3cdiv class\x3d'_tooltip_layer_base layer_base layer_detail"+
elDivEmptyContentClass+"'\x3e";elDiv=jindo.$Element(elDivHtml);if(!oResponse.thumbnail)aHTML.push("\x3cp class\x3d'txt'\x3e");
else{aHTML.push("\x3cp class\x3d'img'\x3e\x3cimg src\x3d'");aHTML.push(oResponse.thumbnail);aHTML.push("' /\x3e\x3c/p\x3e\x3cp class\x3d'txt is_img'\x3e")}aHTML.push(oResponse.contents);
aHTML.push("\x3c/p\x3e")}else{if(!el.className)return;nth=el.className.replace(/.*_param\('([^\)]+)'\).*/g,
"$1");var elDivHtml="\x3cdiv class\x3d'layer_base ly_sprt"+elDivEmptyContentClass+"'\x3e";elDiv=jindo.$Element(elDivHtml);
aHTML.push(oResponse.contents)}if(this._oPos&&this._sType=="normal")elDiv.css({left:this._oPos.left,marginTop:this._oPos.marginTop});
if(emptyContent)elDiv.css({display:"none"});return elDiv.html(aHTML.join(""))}});
nhn.Kin.Utility.Base64Encode=jindo.$Class({_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",
$init:function(){},
encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=this._utf8_encode(input);
while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);
enc1=chr1>>2;enc2=(chr1&3)<<4|chr2>>4;enc3=(chr2&15)<<2|chr3>>6;enc4=chr3&63;if(isNaN(chr2))enc3=enc4=
64;else if(isNaN(chr3))enc4=64;output=output+this._keyStr.charAt(enc1)+this._keyStr.charAt(enc2)+this._keyStr.charAt(enc3)+
this._keyStr.charAt(enc4)}return output},
decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,
"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));
enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=enc1<<
2|enc2>>4;chr2=(enc2&15)<<4|enc3>>2;chr3=(enc3&3)<<6|enc4;output=output+String.fromCharCode(chr1);if(enc3!=
64)output=output+String.fromCharCode(chr2);if(enc4!=64)output=output+String.fromCharCode(chr3)}output=
this._utf8_decode(output);return output},
_utf8_encode:function(string){string=typeof string!="String"?String(string):string;string=string.replace(/\r\n/g,
"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128)utftext+=String.fromCharCode(c);
else if(c>127&&c<2048){utftext+=String.fromCharCode(c>>6|192);utftext+=String.fromCharCode(c&63|128)}else{utftext+=
String.fromCharCode(c>>12|224);utftext+=String.fromCharCode(c>>6&63|128);utftext+=String.fromCharCode(c&
63|128)}}return utftext},
_utf8_decode:function(utftext){var string="";var i=0;var c=0,c1=0,c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);
if(c<128){string+=String.fromCharCode(c);i++}else if(c>191&&c<224){c2=utftext.charCodeAt(i+1);string+=
String.fromCharCode((c&31)<<6|c2&63);i+=2}else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);
string+=String.fromCharCode((c&15)<<12|(c2&63)<<6|c3&63);i+=3}}return string}});
nhn.Kin.Utility.LayerPopup=jindo.$Class({$init:function(elBtn,layer){this._oElement={};this._oEvent={};
this._oElement["helpBtn"]=elBtn;this.layer=layer;this._setupEvent()},
_setupEvent:function(){if(this._oElement["helpBtn"]instanceof Array){this._oEvent["helpBtn"]=[];for(var i=
0,len=this._oElement["helpBtn"].length;i<len;i++)this._oEvent["helpBtn"][i]=jindo.$Fn(this._onHelpLayer,
this).attach(this._oElement["helpBtn"][i],"click")}else this._oEvent["helpBtn"]=jindo.$Fn(this._onHelpLayer,
this).attach(this._oElement["helpBtn"],"click")},
showLayer:function(){if(this._oElement["popup"].style.display=="none"){this._oElement["popup"].style.display=
"block";this._eventAttach()}},
hideLayer:function(){this._oElement["popup"].style.display="none";this._destroyLayer()},
isShow:function(){if(this._oElement["popup"]&&this._oElement["popup"].style.display!="none")return true;
else return false},
_onHelpLayer:function(we){if(this.isShow())this.hideLayer();this._oElement["popup"]=this._searchPopup(we);
this.showLayer();we.stop();return false},
_searchPopup:function(we){var el=null;if(typeof this.layer=="object")el=this.layer;else if(typeof this.layer==
"string"){var elTarget=we.currentElement;el=jindo.$$.getSingle(this.layer,elTarget);elTarget=null}return el},
_eventAttach:function(){this._oEvent["popup"]=jindo.$Fn(this._onClickLayer,this).attach(this._oElement["popup"],
"click")},
_onClickLayer:function(we){var elTarget=nhn.Kin.Utility.getElementByLookUpChildElment(we.element);var sClassname=
jindo.$Element(elTarget).className();if(sClassname.match(/_close/ig)){this._oElement["popup"].style.display=
"none";this._destroyLayer();if(this._oElement["helpBtn"]instanceof Array==false)this._oElement["helpBtn"].focus()}elTarget=
null;we.stop();return false},
_destroyLayer:function(){this._oEvent["popup"].detach(this._oElement["popup"],"click")},
destroy:function(){if(this._oElement["helpBtn"]instanceof Array)for(var i=0,len=this._oElement["helpBtn"].length;i<
len;i++)this._oEvent["helpBtn"][i].detach(this._oElement["helpBtn"][i],"click");else this._oEvent["helpBtn"].detach(this._oElement["helpBtn"],
"click");this._oEvent=this._oElement=null}});
nhn.Kin.Utility.InterestKeyword=jindo.$Class({_MAX_TAG_SIZE:20,$init:function(elRoot,sType){this.elRoot=
elRoot;this.sType=sType||"user";this.isReload=false;this.keywordCount=0;this.assignElement();this.setEvent();
this.baseElement=null},
assignElement:function(){var elRoot=this.elRoot;this._wTemplate={};this._wElement={};this._keywordLayer=
jindo.$$.getSingle("._keywordLayer",elRoot);this._keywordInput=jindo.$$.getSingle("._keywordInput",elRoot);
this._keywordList=jindo.$$.getSingle("._keywordList",elRoot);this._keywordCloseButton=$$("._keywordLayerLastButton",
elRoot);this._wElement["defaultMsg"]=jindo.$Element(jindo.$$.getSingle("._defaultMsg",elRoot));this._wElement["overMsg"]=
jindo.$Element(jindo.$$.getSingle("._overMsg",elRoot));this._wElement["errorMsg"]=jindo.$Element(jindo.$$.getSingle("._errorMsg",
elRoot));this._wTemplate["errorMsgTpl"]=jindo.$Template("errorMsgTpl")},
initializeList:function(elTarget,sKeyword,isReload){var url="getKeyword.nhn";var oParam={"type":this.sType};
nhn.Kin.Utility.request("post",url,oParam,jindo.$Fn(function(oResponse){var data=oResponse.result[0].list||
[];this._aOrgKeywordList=data;this._aKeywordList=nhn.Kin.Utility.deepArrayCopy(this._aOrgKeywordList);
this.setList(data);this.showLayer(elTarget,sKeyword,isReload)},this).bind(),false)},
setEvent:function(){jindo.$Fn(this.initializeList,this).attach(this._elTarget,"click");jindo.$Fn(this.doClick,
this).attach(this._keywordLayer,"click");jindo.$Fn(this.doKeyDown,this).attach(this._keywordInput,"keydown");
jindo.$Fn(this.keyDownOnCloseButton,this).attach(this._keywordCloseButton,"keydown")},
setKeywordCount:function(cnt){this.keywordCount=cnt},
setStatusMessage:function(sMessageType){var welLayer=jindo.$Element(this._keywordLayer);welLayer.css({"width":"277px",
"height":""});if(sMessageType=="default"){this._wElement["defaultMsg"].show();this._wElement["overMsg"].hide();
this._wElement["errorMsg"].hide()}else if(sMessageType=="over"){this._wElement["defaultMsg"].hide();this._wElement["overMsg"].show();
this._wElement["errorMsg"].hide()}else{this._wElement["defaultMsg"].hide();this._wElement["overMsg"].hide();
this._wElement["errorMsg"].html(this._wTemplate["errorMsgTpl"].process({"errorMsg":sMessageType}));this._wElement["errorMsg"].show()}},
requestEditMyKeyword:function(sMode,sKeyword,sType){var sUrl=sMode=="add"?"addKeyword.nhn":"deleteKeyword.nhn";
var oParam={"keyword":sKeyword,"type":this.sType};var fpCallback=sMode=="add"?this.fpAddCallback:this.fpRemoveCallback;
nhn.Kin.Utility.request("post",sUrl,oParam,jindo.$Fn(fpCallback,this).bind(),false)},
fpAddCallback:function(oResponse){if(oResponse.isSuccess){var data=oResponse.result[0].list||[];this._keywordInput.value=
"";this.setKeywordCount(data.length);this.setList(data);this._aKeywordList=data;this.setStatusMessage("default")}else if(oResponse.errorMsg)if(oResponse.errorMsg==
"ON_ROS")alert(oResponse.rosMsg);else this.setStatusMessage(oResponse.errorMsg)},
fpRemoveCallback:function(oResponse){if(oResponse.isSuccess){var data=oResponse.result[0].list||[];this.setKeywordCount(data.length);
if(data.length<10)this.setStatusMessage("default");this.setList(data);this._aKeywordList=data}else if(oResponse.errorMsg==
"ON_ROS")alert(oResponse.rosMsg);if(this._keywordInput)this._keywordInput.focus()},
checkWhiteSpace:function(sKeyword){return String(sKeyword).match(/\s+/g)},
doClick:function(evt){var elTarget=evt.element;var wEl=jindo.$Element(elTarget);var sKeyword;if(wEl.hasClass("_keywordAddBtn"))if(this.keywordCount<=
this._MAX_TAG_SIZE){sKeyword=jindo.$S(this._keywordInput.value).trim().$value();if(!sKeyword){alert("\uad00\uc2ec\ud0a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694");
this._keywordInput.focus();return false}var bCheckSpace=this.checkWhiteSpace(sKeyword);if(bCheckSpace){alert(nhn.Kin.getMessage("KEYWORD_002"));
return false}sKeyword=nhn.Kin.Utility.base64Encoding(sKeyword);this.requestEditMyKeyword("add",sKeyword)}else this.setStatusMessage("over");
else if(wEl.hasClass("_closeLayer"))this.hideLayer();else if(wEl.hasClass("_confirm")){var sUrl=location.href.replace(/[?&](from|query|page)=[^&]+/ig,
"").replace("nhn(\x26|#)","nhn?");location.href=sUrl}if(wEl.hasClass("_del")){sKeyword=nhn.Kin.Utility.base64Encoding(this.getDelTargetText(elTarget));
this.requestEditMyKeyword("delete",sKeyword)}evt.stop()},
doKeyDown:function(evt){var oKey=evt.key();if(oKey.enter){var sKeyword=jindo.$S(this._keywordInput.value).trim().$value();
var bCheckSpace=this.checkWhiteSpace(sKeyword);if(bCheckSpace){alert(nhn.Kin.getMessage("KEYWORD_002"));
return false}sKeyword=nhn.Kin.Utility.base64Encoding(sKeyword);if(sKeyword)this.requestEditMyKeyword("add",
sKeyword);evt.stop();return}if(oKey.shift&&oKey.keyCode===9){this._keywordCloseButton[0].focus();evt.stop()}},
keyDownOnCloseButton:function(evt){var oKey=evt.key();if(!oKey.shift&&oKey.keyCode===9){this._keywordInput.focus();
evt.stop()}},
getDelTargetText:function(el){var tEl=jindo.$$.getSingle("!li",el);var title=jindo.$Element(jindo.$$.getSingle("span:nth-child(1)",
tEl)).text();tEl=null;return title},
setList:function(data){var oList=this._keywordList;var tmp='\x3cli#{F_CLASS}\x3e\x3cspan\x3e#{TITLE}\x3c/span\x3e \x3ca href\x3d"#" class\x3d"btn_del _del"\x3e\x3cimg src\x3d"'+
nhn.Kin.getImagePath()+'btn_delete_list3.gif" width\x3d"12" height\x3d"12" alt\x3d"\uc0ad\uc81c" class\x3d"_del"\x3e\x3c/a\x3e\x3c/li\x3e';
var arr=[];var count=data.length<=this._MAX_TAG_SIZE?data.length:this._MAX_TAG_SIZE;for(var i=0;i<count;i++){var temp=
tmp;temp=temp.replace(/#{TITLE}/g,jindo.$S(data[i]).escapeHTML().$value());if(i==0)temp=temp.replace(/#{F_CLASS}/g,
' class\x3d"first"');else temp=temp.replace(/#{F_CLASS}/g,"");arr.push(temp)}oList.innerHTML=arr.join("");
var welLayer=jindo.$Element(this._keywordLayer);welLayer.css({"width":"277px","height":""})},
doResize:function(oEvent){var nLeft=this.baseElement.offset().left;if(!this.baseElement.$value().id)nLeft-=
286;this.oLayerPosition.getLayer().style.left=nLeft+"px"},
showLayer:function(elTarget,sKeyword,isReload){this.isReload=isReload||false;this.baseElement=jindo.$Element(elTarget);
var welLayer=jindo.$Element(this._keywordLayer);welLayer.show();this._nHeight=welLayer.height()-19;welLayer.css({"width":"277px",
"height":this._nHeight+"px"});this.oLayerPosition=new jindo.LayerPosition(elTarget,welLayer.$value(),
{sPosition:"outside-left",sValign:"top",nLeft:3,bAuto:true});if(sKeyword)this._keywordInput.value=sKeyword;
this._keywordInput.focus();if(!this.oResizeEvent)this.oResizeEvent=jindo.$Fn(this.doResize,this).attach(window,
"resize")},
hideLayer:function(){var elKeywordLayer=jindo.$Element(this._keywordLayer);if(!elKeywordLayer.visible())return false;
this.setStatusMessage("default");var bEqual=nhn.Kin.Utility.checkEqualObject(this._aOrgKeywordList,this._aKeywordList);
elKeywordLayer.hide();if(!bEqual)nhn.Kin.Utility.refreshMyInterest("keyword",this.isReload);this._aOrgKeywordList=
null;this._aKeywordList=null;if(this.oResizeEvent){this.oResizeEvent.detach(window,"resize");this.oResizeEvent=
null}var elKeywordManageButton=nhn.Kin.Utility.getKeywordManageButton();if(elKeywordManageButton){elKeywordManageButton.focus();
nhn.Kin.Utility.setKeywordManageButton(null)}}});
nhn.Kin.Utility.Rolling=jindo.$Class({$init:function(aEl,nNum){if(aEl=="undefined"||aEl.length===0)return;
this.aElRolling=aEl;this.nNum=nNum||4;this.nLength=aEl.length;this.nNowIndex=0;this.nPreIndex=0},
next:function(){this.nPreIndex=this.nNowIndex;this.nNowIndex+=this.nNum;if(this.nNowIndex>=this.nLength)this.nNowIndex=
this.nNowIndex-this.nLength;this._moving()},
prev:function(){this.nPreIndex=this.nNowIndex;this.nNowIndex-=this.nNum;if(this.nNowIndex<0)this.nNowIndex=
this.nLength-Math.abs(this.nNowIndex);this._moving()},
_moving:function(){var i,noneIndex,showIndex,elLI;for(i=0;i<this.nNum;i++){noneIndex=this.nPreIndex+i;
if(noneIndex>=this.nLength)noneIndex-=this.nLength;if(this.aElRolling[noneIndex]){elLI=this.aElRolling[noneIndex];
this._unloadImg(elLI);jindo.$Element(elLI).hide()}}for(i=0;i<this.nNum;i++){showIndex=this.nNowIndex+
i;if(showIndex>=this.nLength)showIndex-=this.nLength;if(this.aElRolling[showIndex]){elLI=this.aElRolling[showIndex];
this._loadImg(elLI);jindo.$Element(elLI).show()}}},
_loadImg:function(elLI){var elA=jindo.$$.getSingle("a",elLI);var elImg=jindo.$$.getSingle("img",elA);
if(elImg&&elA)elImg.src=elA.rel},
_unloadImg:function(elLI){var elImg=jindo.$$.getSingle("a \x3e img",elLI);if(elImg)elImg.src=""}});
nhn.Kin.Utility.SocialManager={postToMe2day:function(sTitle,sUrl,bNewWindow){if(!sTitle)return;sUrl=sUrl||
location.href;bNewWindow=typeof bNewWindow==="undefined"?true:bNewWindow;var me2dayUrl="http://me2day.net/posts/new?new_post[body]\x3d"+
encodeURIComponent('"'+sTitle+'":'+sUrl);if(bNewWindow)window.open(me2dayUrl,"ME2DAY");else location.replace(me2dayUrl)},
postToFacebook:function(sTitle,sDesc,sImageUrl,sUrl,bNewWindow){bNewWindow=typeof bNewWindow==="undefined"?
true:bNewWindow;sUrl=sUrl||location.href;var facebookUrl="http://www.facebook.com/sharer.php?s\x3d100\x26p[url]\x3d"+
encodeURIComponent(sUrl)+"\x26p[images][0]\x3d"+encodeURIComponent(sImageUrl)+"\x26p[title]\x3d"+encodeURIComponent(sTitle)+
"\x26p[summary]\x3d"+encodeURIComponent(sDesc);if(bNewWindow)window.open(facebookUrl,"FACEBOOK");else location.replace(facebookUrl)},
postToTwitter:function(sTitle,sUrl,bNewWindow){if(!sTitle)return;sUrl=sUrl||location.href;bNewWindow=
typeof bNewWindow==="undefined"?true:bNewWindow;var twitterUrl="http://twitter.com/home?status\x3d"+encodeURIComponent(sTitle+
" : "+sUrl);if(bNewWindow)window.open(twitterUrl,"TWITTER");else location.replace(twitterUrl)}};
nhn.Kin.Utility.Bingo={checkAndShowBingoCompleteLayer:function(oJson){if(oJson.isSuccess&&(oJson.completeBingo||
oJson.completeQuest))jindo.LazyLoading.load(nhn.jsDir+"/naver.kin.bingo.BingoCompleteLayer.js",$Fn(function(){if(typeof naver.kin.bingo.BingoCompleteLayer===
"undefined")return;if(oJson.completeBingo)new naver.kin.bingo.BingoCompleteLayer({bingoId:oJson.completeBingo.bingoId,
questId:-1,isBingoComplete:true});else if(oJson.completeQuest)new naver.kin.bingo.BingoCompleteLayer({bingoId:oJson.completeQuest.bingoId,
questId:oJson.completeQuest.questId,isQuestComplete:true})},this).bind())},
checkAndShowBingoCompleteLayerFromCookie:function(){var oCookie=new $Cookie;var sFeedBack=oCookie.get("bingo_feedback");
oCookie.remove("bingo_feedback",".kin.naver.com","/qna/");oCookie.remove("bingo_feedback",".naver.com",
"/");if(sFeedBack){sFeedBack=sFeedBack.replace(/\\/g,"");if(sFeedBack!==""&&sFeedBack.slice(0,1)==='"')sFeedBack=
sFeedBack.substring(1,sFeedBack.length-1);var oFeedBackJson=JSON.parse(sFeedBack);var oJson={isSuccess:true};
if(oFeedBackJson.completeQuest===true)oJson.completeQuest={completeQuest:true,bingoId:oFeedBackJson.bingoId,
questId:oFeedBackJson.questId};if(oFeedBackJson.completeBingo===true)oJson.completeBingo={completeBingo:true,
bingoId:oFeedBackJson.bingoId,questId:oFeedBackJson.questId};nhn.Kin.Utility.Bingo.checkAndShowBingoCompleteLayer(oJson)}},
saveLayerClosedTimeToLocalStorage:function(sId){var oLocalStorage=nhn.Kin.Utility.LocalStorage;if(oLocalStorage.isSupportLocalStorage()==
false)return;var sLayerClosedTimeList=oLocalStorage.getItem(oLocalStorage.KEY.PCWEB_BINGO_LAYER_CLOSED_TIME);
var nCurrentTime=Math.round((new Date).getTime()/1E3);if(!sLayerClosedTimeList)sLayerClosedTimeList=";"+
sId+":"+nCurrentTime+";";else{var oRegExpForLayerClosedTime=new RegExp(";("+sId+"):([0-9]+);");if(oRegExpForLayerClosedTime.test(sLayerClosedTimeList))sLayerClosedTimeList=
sLayerClosedTimeList.replace(oRegExpForLayerClosedTime,";"+sId+":"+nCurrentTime+";");else sLayerClosedTimeList=
sLayerClosedTimeList+";"+sId+":"+nCurrentTime+";"}oLocalStorage.setItem(oLocalStorage.KEY.PCWEB_BINGO_LAYER_CLOSED_TIME,
sLayerClosedTimeList)}};
if(typeof nhn.Kin=="undefined")nhn.Kin={};if(typeof nhn.Kin.RNB=="undefined")nhn.Kin.RNB={};
namespace("nhn.Kin.RNB.MonthlyKinArea",function(){var _oInstance={};function initialize(){var oAuMonthlyKin=
$("au_monthly_kin");if(oAuMonthlyKin!=null){_oInstance["pr_monthly_kin"]=nhn.Kin.Utility.initializePageRolling(oAuMonthlyKin);
$Fn(destroy,this).attach(window,"unload")}}
function destroy(){_oInstance=null}
eval(namespace.exports("initialize","destroy"))});
nhn.Kin.RNB.LoginMyArea=$Class({_oElement:null,_oEvent:null,_oTemplate:null,_oTabManager:null,_nSelectedTab:null,
_nSelectedSubTab:null,_aTabType:["myinfo","newQuestion","interest"],_aSubTabType:["dir","local","keyword"],
_aTabHasContent:null,_bSetElement:null,_oMyAreaHtml:null,$init:function(oKeywordLayer){this._bSetElement=
false;if(this._setElement(oKeywordLayer)){this._initializeCallbackInterestRefresh();this._initializeTabManager();
this._attachEvent();$Fn(this.destroy,this).attach(window,"unload")}},
destroy:function(){nhn.Kin.Utility.destroyCallbackInterestRefresh();this._detachEvent();this._oElement=
null;this._oTemplate=null;this._oEvent=null;this._oTabManager=null;this._nSelectedTab=null;this._nSelectedSubTab=
null;this._aTabType=null;this._aSubTabType=null;this._aTabHasContent=null;this._bSetElement=null;this._oMyAreaHtml=
null},
_setElement:function(oKeywordLayer){this._oElement={};this._oTemplate={};this._oMyAreaHtml={};this._aTabHasContent=
[];this._oElement["keywordLayer"]=oKeywordLayer;this._oElement["holder"]=$$.getSingle("._tab_myarea",
nhn.Kin.getElement("aside"));if(!this._oElement["holder"])return false;this._oElement["arr_tab"]=$$(".tc-tab",
this._oElement["holder"]);this._oElement["arr_panel"]=$$(".tc-panel",this._oElement["holder"]);for(var i=
0,len=this._oElement["arr_panel"].length;i<len;i++)if($Element(this._oElement["arr_panel"][i]).hasClass("tc-selected")){this._nSelectedTab=
i;this._nSelectedSubTab=0;break}this._bSetElement=true;this._oTemplate["myKinGrade"]=$Template("myKinGradeTpl");
this._oTemplate["newQuestionDir"]=$Template("newQuestionDirTpl");this._oTemplate["newQuestionLocal"]=
$Template("newQuestionLocalTpl");this._oTemplate["newQuestionKeyword"]=$Template("newQuestionKeywordTpl");
this._oTemplate["interestDir"]=$Template("interestDirTpl");this._oTemplate["interestLocal"]=$Template("interestLocalTpl");
this._oTemplate["interestKeyword"]=$Template("interestKeywordTpl");this._oTemplate["editor"]=$Template("editorTpl");
return true},
_attachEvent:function(){if(!this._bSetElement)return false;this._oEvent={};this._oEvent["click"]={"action":"click",
"target":this._oElement["holder"],"event":$Fn(this._fireClick,this).attach(this._oElement["holder"],"click")}},
_detachEvent:function(){for(var x in this._oEvent)this._oEvent[x]["event"].detach(this._oEvent[x]["target"],
this._oEvent[x]["action"])},
_initializeCallbackInterestRefresh:function(){nhn.Kin.Utility.addCallbackInterestRefresh("dir",$Fn(this.refreshMyInterest,
this).bind());nhn.Kin.Utility.addCallbackInterestRefresh("local",$Fn(this.refreshMyInterest,this).bind());
nhn.Kin.Utility.addCallbackInterestRefresh("keyword",$Fn(this.refreshMyInterest,this).bind())},
_fireClick:function(oEvent){var elTarget=nhn.Kin.Utility.getElementByLookUpChildElment(oEvent.element);
var welTarget=$Element(elTarget);var params,sTabType;var nTabIndex=this._oTabManager.getCurrentIndex();
nhn.Kin.Utility.callClickCode(oEvent);if(welTarget.hasClass("_ros")&&nhn.Kin.checkRos()){oEvent.stop();
return false}if(welTarget.hasClass("_subtab")){params=nhn.Kin.Utility.extractParam(elTarget.className);
var nSubIndex=parseInt(params[0]);sTabType=this._getTabType(nTabIndex,nSubIndex);if(this._oMyAreaHtml[sTabType]){this._nSelectedSubTab=
nSubIndex;$Element($$.getSingle("._panel",this._oElement["arr_panel"][nTabIndex])).html(this._oMyAreaHtml[sTabType]);
var aFocusTargetElement=$$("a._subtab",this._oElement["arr_panel"][nTabIndex]);if(aFocusTargetElement&&
aFocusTargetElement.length>nSubIndex)aFocusTargetElement[nSubIndex].focus()}else this._requestMyAreaData(nTabIndex,
nSubIndex);nhn.Kin.Utility.closeMyKeywordLayer();oEvent.stop()}else if(welTarget.hasClass("_mng_dir")){nhn.Kin.Utility.openMyInterestPopup();
oEvent.stop()}else if(welTarget.hasClass("_mng_local")){nhn.Kin.Utility.openMyLocalPopup();oEvent.stop()}else if(welTarget.hasClass("_mng_keyword")){nhn.Kin.Utility.openMyKeywordLayer(welTarget.$value(),
null,null,this._oElement["keywordLayer"]);oEvent.stop()}else if(welTarget.hasClass("_add_dir")){var sDirs=
this._getCheckedDirs(elTarget);if(sDirs&&sDirs.length)nhn.Kin.Utility.appendMyInterestDirectory(sDirs,
false);else alert("\uc6d0\ud558\ub294 \ub514\ub809\ud1a0\ub9ac\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");
oEvent.stop()}else if(welTarget.hasClass("_add_local")){var sDirs=this._getCheckedDirs(elTarget);if(sDirs&&
sDirs.length)nhn.Kin.Utility.appendMyInterestLocal(sDirs,false);else alert("\uc6d0\ud558\ub294 \ub514\ub809\ud1a0\ub9ac\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");
oEvent.stop()}else if(welTarget.attr("type")!==null&&welTarget.attr("type").toLowerCase()==="checkbox"){var wLi=
welTarget.parent().parent();if(wLi.hasClass("is_active"))wLi.removeClass("is_active");else wLi.addClass("is_active")}},
_getCheckedDirs:function(el){var checkedEls=$$("input[type\x3dcheckbox][checked\x3dtrue]",el.parentNode.parentNode);
var i,len,sDirs="";if(checkedEls&&checkedEls.length)for(i=0,len=checkedEls.length;i<len;i++){if(sDirs.length)sDirs+=
",";sDirs+=checkedEls[i].value}return sDirs},
_initializeTabManager:function(){if(!this._bSetElement)return false;this._oTabManager=(new jindo.TabControl(this._oElement["holder"],
{sClassPrefix:"tc-",sCheckEvent:"click",bActivateOnload:true})).attach({beforeSelect:$Fn(function(e){nhn.Kin.Utility.closeMyKeywordLayer();
var nTabIndex=this._oTabManager.getCurrentIndex();var sTabType=this._getTabType(nTabIndex,this._nSelectedSubTab);
if(!this._oMyAreaHtml[sTabType])this._oMyAreaHtml[sTabType]=$Element($$.getSingle("._panel",this._oElement["arr_panel"][nTabIndex])).html();
var nNextTabIndex=e.nIndex;if(!this._aTabHasContent[nNextTabIndex])this._requestMyAreaData(nNextTabIndex,
0)},this).bind(),
select:$Fn(function(e){var elSubTab,aParam;var aWeTab=$ElementList("div._tab_myarea li.tc-tab");aWeTab.removeClass("on");
$Element($$.getSingle("div._tab_myarea li.tc-selected")).addClass("on");this._nSelectedTab=e.nIndex;elSubTab=
$$.getSingle("ul.interest_menu \x3e li[class\x3don] \x3e a",this._oElement["arr_panel"][this._nSelectedTab]);
if(elSubTab)aParam=nhn.Kin.Utility.extractParam(elSubTab.className);this._nSelectedSubTab=aParam?aParam[0]:
0;e.stop()},this).bind()});
this._aTabHasContent[this._oTabManager.getCurrentIndex()]=true},
_getTabType:function(nIndex,nSubIndex){nSubIndex=nSubIndex||0;if(nIndex==0)return this._aTabType[nIndex];
else return this._aTabType[nIndex]+"_"+this._aSubTabType[nSubIndex]||false},
_requestMyAreaData:function(nIndex,nSubIndex,bEnforce){nSubIndex=nSubIndex||0;bEnforce=bEnforce||false;
if(!bEnforce&&this._nSelectedTab==nIndex&&this._nSelectedSubTab==nSubIndex)return false;var sTabType=
this._getTabType(nIndex,nSubIndex);if(!bEnforce&&this._oMyAreaHtml[sTabType]){$Element(this._oElement["arr_panel"][nIndex]).html(this._oMyAreaHtml[sTabType]);
var aFocusTargetElement=$$("a._subtab",this._oElement["arr_panel"][nIndex]);if(aFocusTargetElement&&aFocusTargetElement.length>
nSubIndex)aFocusTargetElement[nSubIndex].focus();return false}this._nSelectedTab=nIndex;this._nSelectedSubTab=
nSubIndex;var oParam={"tabType":this._aTabType[nIndex],"subType":this._aSubTabType[nSubIndex]};nhn.Kin.Utility.request("POST",
"loginContents.naver",oParam,$Fn(this._refreshContent,this).bind(nIndex,nSubIndex),false)},
_refreshContent:function(nIndex,nSubIndex,oResponse){if(oResponse&&oResponse.isSuccess){var sMyAreaHtml=
"";var sTabType=this._getTabType(nIndex,nSubIndex);this._aTabHasContent[nIndex]=true;if(nIndex==0){this._oMyAreaHtml[sTabType]=
this._makeHtmlMyKinGrade(oResponse.result[0]);var oData=oResponse.result[0];var oTimer=setTimeout(function(){nhn.Kin.Utility.startGradeGraph($("level_guage"),
oData.currentLevelMinPoint,oData.currentLevelMaxPoint,oData.totalPoint,oData.isMaxLevel)},100)}else if(nIndex==
1)if(nSubIndex==0)this._oMyAreaHtml[sTabType]=this._makeHtmlNewQuestionDir(oResponse.result[0]);
else if(nSubIndex==1)this._oMyAreaHtml[sTabType]=this._makeHtmlNewQuestionLocal(oResponse.result[0]);
else this._oMyAreaHtml[sTabType]=this._makeHtmlNewQuestionKeyword(oResponse.result[0]);else if(nIndex==
2){this._oMyAreaHtml["interest_dir"]=this._makeHtmlInterestDir(oResponse.result[0]);this._oMyAreaHtml["interest_local"]=
this._makeHtmlInterestLocal(oResponse.result[0]);this._oMyAreaHtml["interest_keyword"]=this._makeHtmlInterestKeyword(oResponse.result[0])}$Element($$.getSingle("._panel",
this._oElement["arr_panel"][nIndex])).html(this._oMyAreaHtml[sTabType]);var aFocusTargetElement=$$("a._subtab",
this._oElement["arr_panel"][nIndex]);if(aFocusTargetElement&&aFocusTargetElement.length>nSubIndex)aFocusTargetElement[nSubIndex].focus()}},
_makeHtmlMyKinGrade:function(oMyKinGrade){oMyKinGrade.formattedTotalPoint=nhn.Kin.Utility.getCommaNumberString(oMyKinGrade.totalPoint);
oMyKinGrade.formattedRemainPoint=nhn.Kin.Utility.getCommaNumberString(Math.max(0,oMyKinGrade.nextLevelMinPoint-
oMyKinGrade.totalPoint));oMyKinGrade.formattedTotalPointRank=nhn.Kin.Utility.getCommaNumberString(oMyKinGrade.totalPointRank);
oMyKinGrade.formattedTotalBest=nhn.Kin.Utility.getCommaNumberString(oMyKinGrade.totalBest);oMyKinGrade.formattedRemainBestCnt=
nhn.Kin.Utility.getCommaNumberString(Math.max(0,oMyKinGrade.nextLevelBestCnt-oMyKinGrade.totalBest));
oMyKinGrade.formattedTotalQuestion=nhn.Kin.Utility.getCommaNumberString(oMyKinGrade.totalQuestion);oMyKinGrade.formattedTotalAnswer=
nhn.Kin.Utility.getCommaNumberString(oMyKinGrade.totalAnswer);return this._oTemplate["myKinGrade"].process(oMyKinGrade)},
_makeHtmlNewQuestionDir:function(oMyNewQuestionData){var aNewQuestion=oMyNewQuestionData.qList;var nQuestionLen=
aNewQuestion&&aNewQuestion.length||0;var aRecommendDir=nQuestionLen>0?null:oMyNewQuestionData.listRecommendInterestDirs;
var nRecommendLen=aRecommendDir&&aRecommendDir.length||0;var aInterestDir=oMyNewQuestionData.interestDirs;
var nInterestDirLen=aInterestDir&&aInterestDir.length||0;var sHtml="",aTempDir=[],i;if(nQuestionLen>0)for(i=
0;i<nQuestionLen;i++){aNewQuestion[i].formattedWriteTime=nhn.Kin.Utility.changeDateFormat(aNewQuestion[i].writeTime,
"YY.MM.DD.");aNewQuestion[i].detailUrl=nhn.Kin.Utility.getKinGetDetailURI("KIN",aNewQuestion[i].dirId,
aNewQuestion[i].docId)}sHtml=this._oTemplate["newQuestionDir"].process({bHasNewQuestion:nQuestionLen>
0,bHasRecommend:nRecommendLen>0,bHasInterest:nInterestDirLen>0,newQuestions:aNewQuestion,recommendDirs:aRecommendDir});
return sHtml},
_makeHtmlNewQuestionLocal:function(oMyNewQuestionData){var aNewQuestion=oMyNewQuestionData.qList;var nQuestionLen=
aNewQuestion&&aNewQuestion.length||0;var aRecommendLocal=nQuestionLen>0?null:oMyNewQuestionData.listRecommendInterestSpots;
var nRecommendLen=aRecommendLocal&&aRecommendLocal.length||0;var aInterestLocal=oMyNewQuestionData.interestSpots;
var nInterestLocalLen=aInterestLocal&&aInterestLocal.length||0;var sHtml="",aTempLocal=[],i;if(nQuestionLen>
0)for(i=0;i<nQuestionLen;i++){aNewQuestion[i].formattedWriteTime=nhn.Kin.Utility.changeDateFormat(aNewQuestion[i].writeTime,
"YY.MM.DD.");aNewQuestion[i].detailUrl=nhn.Kin.Utility.getKinGetDetailURI("KIN",aNewQuestion[i].dirId,
aNewQuestion[i].docId)}sHtml=this._oTemplate["newQuestionLocal"].process({bHasNewQuestion:nQuestionLen>
0,bHasRecommend:nRecommendLen>0,bHasInterest:nInterestLocalLen>0,newQuestions:aNewQuestion,recommendLocals:aRecommendLocal});
return sHtml},
_makeHtmlNewQuestionKeyword:function(oMyNewQuestionData){var aNewQuestion=oMyNewQuestionData.qList;var nQuestionLen=
aNewQuestion&&aNewQuestion.length||0;var sInterestKeyword=oMyNewQuestionData.interestKeyword;var sHtml=
"",i;if(nQuestionLen>0)for(i=0;i<nQuestionLen;i++){aNewQuestion[i].formattedWriteTime=aNewQuestion[i].date.substr(2,
8).split("-").join(".")+".";aNewQuestion[i].detailUrl=nhn.Kin.Utility.getKinGetDetailURI("KIN",aNewQuestion[i].dirId,
aNewQuestion[i].docId)}sHtml=this._oTemplate["newQuestionKeyword"].process({bHasNewQuestion:nQuestionLen>
0,bHasInterest:sInterestKeyword&&sInterestKeyword.length?true:false,newQuestions:aNewQuestion,sKeyword:sInterestKeyword});
return sHtml},
_makeHtmlInterestDir:function(oInterestData){var aInterestDir=oInterestData.interestDirs;var nDirLen=
aInterestDir&&aInterestDir.length||0;var aRecommendDir=nDirLen>2?null:oInterestData.listRecommendInterestDirs;
var nRecommendLen=aRecommendDir&&aRecommendDir.length||0;var sHtml="",aTempDir=[],i;sHtml+=this._oTemplate["interestDir"].process({bHasInterestDir:nDirLen>
0,bHasRecommendDir:nRecommendLen>0,bIsDirEditor:oInterestData.isDirEditor,interestDirs:aInterestDir,recommendDirs:aRecommendDir});
return sHtml},
_makeHtmlInterestLocal:function(oInterestData){var aInterestLocal=oInterestData.interestSpots;var nDirLen=
aInterestLocal&&aInterestLocal.length||0;var aRecommendLocal=nDirLen>2?null:oInterestData.listRecommendInterestSpots;
var nRecommendLen=aRecommendLocal&&aRecommendLocal.length||0;var sHtml="",aTempLocal=[],i;sHtml+=this._oTemplate["interestLocal"].process({bHasInterestLocal:nDirLen>
0,bHasRecommendLocal:nRecommendLen>0,bIsDirEditor:oInterestData.isDirEditor,interestLocals:aInterestLocal,
recommendLocals:aRecommendLocal});return sHtml},
_makeHtmlInterestKeyword:function(oInterestData){var aInterestKeyword=oInterestData.interestKeywords;
var sHtml="",i,len,oKeyword;if(aInterestKeyword&&aInterestKeyword.length>0)for(i=0,len=aInterestKeyword.length;i<
len;i++){oKeyword={"encodedQuery":encodeURIComponent(aInterestKeyword[i]),"query":$S(aInterestKeyword[i]).escapeHTML().$value()};
aInterestKeyword[i]=oKeyword}sHtml+=this._oTemplate["interestKeyword"].process({bIsDirEditor:oInterestData.isDirEditor,
interestKeywords:aInterestKeyword});return sHtml},
_makeHtmlInterestEditor:function(oInterestData){return this._oTemplate["editor"].process({bIsDirEditor:oInterestData.isDirEditor})},
refreshMyInterest:function(){if(this._oTabManager){var nTabIndex=this._oTabManager.getCurrentIndex();
var sTabType=this._getTabType(nTabIndex,this._nSelectedSubTab);if(sTabType&&this._oMyAreaHtml[sTabType]){delete this._oMyAreaHtml[sTabType];
this._aTabHasContent[nTabIndex]=false;if(sTabType.indexOf("newQuestion")==0||sTabType.indexOf("interest")==
0){var _sType,i,j,iLen=this._aTabType.length,jLen=this._aSubTabType.length;for(i=1;i<iLen;i++){this._aTabHasContent[i]=
false;for(j=0;j<jLen;j++){_sType=this._getTabType(i,j);delete this._oMyAreaHtml[_sType]}}}}this._requestMyAreaData(nTabIndex,
this._nSelectedSubTab,true)}}});
namespace("nhn.Kin.RNB.PeopleArea",function(){var _nDirId=null;var _oElement={};var _wTemplate={};var _oTabManager=
null;var _nSelectedTab=null;var _sTabType=null;var _aTabType=["expert","partner","elite"];var _bSetElement=
null;var _oPeopleHTML={};var _oPeopleAjax=null;function initialize(nDirId){_nDirId=nDirId;_bSetElement=
false;_nSelectedTab=null;_sTabType=null;if(_setElement()){_initializeTabManager();$Fn(destroy,this).attach(window,
"unload")}}
function destroy(){_nDirId=null;_oElement=null;_wTemplate=null;_oTabManager=null;_nSelectedTab=null;_sTabType=
null;_aTabType=null;_bSetElement=null;_oPeopleHTML=null;_oPeopleAjax=null}
function _setElement(){if(!_oElement)_oElement={};_oElement["holder"]=$$.getSingle("._tab_people_area",
nhn.Kin.getElement("aside"));if(!_oElement["holder"])return false;_oElement["arr_tab"]=$$(".tc-tab",_oElement["holder"]);
_oElement["arr_panel"]=$$(".tc-panel",_oElement["holder"]);_oElement["elitePeopleTemplate"]=$("tpl_elite_people_tab");
var wEl=$Element($$.getSingle(".tc-tab.tc-selected",_oElement["holder"]));if(wEl){_nSelectedTab=wEl.attr("data-tab-index")||
0;_sTabType=wEl.attr("data-tab-type")||null}if(!_wTemplate)_wTemplate={};if(_oElement["elitePeopleTemplate"])_wTemplate["elitePeopleTemplate"]=
$Template(_oElement["elitePeopleTemplate"]);_bSetElement=true;return true}
function _initializeTabManager(){if(!_bSetElement)return false;_oTabManager=(new jindo.TabControl(_oElement["holder"],
{sClassPrefix:"tc-",sCheckEvent:"click",bActivateOnload:true})).attach({beforeSelect:function(e){var wElOldTab=
$Element(_oElement["arr_tab"][_nSelectedTab]);if(wElOldTab){wElOldTab.attr("aria-selected",false);wElOldTab.removeClass("tc-selected");
wElOldTab.removeClass("is_active")}var wElNewTab=$Element(e.elTab);if(wElNewTab){wElNewTab.attr("aria-selected",
true);wElNewTab.addClass("tc-selected");wElNewTab.addClass("is_active");var sTabType=wElNewTab.attr("data-tab-type");
var nIndex=wElNewTab.attr("data-tab-index")}if(_oPeopleHTML[sTabType]){var oEl=_oElement["arr_panel"][nIndex];
if(oEl)$Element(oEl).html(_oPeopleHTML[sTabType])}else requestPeopleAreaData(nIndex,sTabType,null)},
select:function(e){_nSelectedTab=e.nIndex;var wElTab=$Element(e.elTab);if(wElTab)_sTabType=wElTab.attr("data-tab-type")||
_sTabType;e.stop()},
click:function(oEvent){var elTarget=oEvent.weEvent.element;var wElClick=$Element(elTarget);if(wElClick){var sTabType=
wElClick.attr("data-tab-type");switch(sTabType){case "expert":nhn.Kin.Utility.nClicks("peo.expert","",
"",oEvent.weEvent);break;case "partner":nhn.Kin.Utility.nClicks("peo.partner","","",oEvent.weEvent);break}}if(elTarget.tagName.toUpperCase()===
"A"&&elTarget.getAttribute("href")==="#")oEvent.weEvent.stop()}})}
function requestPeopleAreaData(nIndex,sTabType,fpCallback){if(_sTabType===sTabType)return false;if(_oPeopleHTML[sTabType])return false;
if(_oPeopleAjax)return false;var sAjaxUrl=null;switch(sTabType){case "expert":sAjaxUrl="/ajax/expertPeopleAjax.naver";
break;case "partner":sAjaxUrl="/ajax/partnerPeopleAjax.naver";break;default:sAjaxUrl="/ajax/elitePeopleAjax.naver";
break}var oParam=_nDirId?{"dirId":_nDirId}:{};_oPeopleAjax=new $Ajax(sAjaxUrl,{method:"POST",timeout:3,
onload:fpCallback||$Fn(_refreshContent,this).bind(nIndex,sTabType),ontimeout:$Fn(function(res){_oPeopleAjax=
null},this).bind(),
onerror:$Fn(function(res){_oPeopleAjax=null},this).bind()});
_oPeopleAjax.request(oParam)}
function _refreshContent(nIndex,sTabType,oResponse){_oPeopleAjax=null;var oJson=oResponse.json();if(oJson&&
oJson.isSuccess){var oData=oJson.result;var sPeopleAreaHTML="";switch(sTabType){case "expert":sPeopleAreaHTML=
_makeExpertHTML(oData);break;case "partner":sPeopleAreaHTML=_makePartnerHTML(oData);break;default:sPeopleAreaHTML=
_makeEliteHTML(oData);break}if(sPeopleAreaHTML){_oPeopleHTML[sTabType]=sPeopleAreaHTML;var oEl=_oElement["arr_panel"][nIndex];
if(oEl)$Element(oEl).html(sPeopleAreaHTML)}}}
function _makeExpertHTML(oExpertData){var aExpertHTML=[];if(oExpertData.photo==null||oExpertData.photo==
"")oExpertData.photo="https://ssl.pstatic.net/static/kin/09renewal/avatar/200x200_m_gray/profilePlaceholder_191121.png";
aExpertHTML.push("\x3ch4\x3e\uac80\uc99d\ub41c \uc804\ubb38\uac00\uc758 \ubbff\uc744 \uc218 \uc788\ub294 \ub2f5\ubcc0\x3c/h4\x3e");
aExpertHTML.push('\x3cp class\x3d"more"\x3e\x3ca href\x3d"/people/expert/index.naver" class\x3d"'+nhn.Kin.Utility.getNClicksClass("peo*x.more")+
'"\x3e\x3cspan class\x3d"blind"\x3e\uc804\ubb38\uac00\x3c/span\x3e\ub354\ubcf4\uae30\x3c/a\x3e\x3c/p\x3e');
aExpertHTML.push('\x3cdiv class\x3d"thumb"\x3e');aExpertHTML.push('\x3ca href\x3d"/profile/index.naver?u\x3d'+
oExpertData.encodedU+'" class\x3d"'+nhn.Kin.Utility.getNClicksClass("peo*x.who",oExpertData.u)+'"\x3e');
aExpertHTML.push('\x3cimg src\x3d"'+oExpertData.photo+'" width\x3d"100" height\x3d"100" alt\x3d"'+oExpertData.viewUserId+
' \ub2d8\uc758 \ud504\ub85c\ud544"\x3e');aExpertHTML.push("\x3c/a\x3e");aExpertHTML.push("\x3c/div\x3e");
aExpertHTML.push('\x3cdl class\x3d"detail_exp"\x3e');aExpertHTML.push('\x3cdt\x3e\x3ca href\x3d"/profile/index.naver?u\x3d'+
oExpertData.encodedU+'" class\x3d"'+nhn.Kin.Utility.getNClicksClass("peo*x.who",oExpertData.u)+'"\x3e\x3cstrong\x3e'+
oExpertData.name+"\x3c/strong\x3e \ub2d8\x3c/a\x3e\x3c/dt\x3e");if(oExpertData.expertType=="DOCTOR")var sExpertType=
"\uc758\uc0ac";else if(oExpertData.expertType=="LAWYER")var sExpertType="\ubcc0\ud638\uc0ac";else if(oExpertData.expertType==
"LABOR")var sExpertType="\ub178\ubb34\uc0ac";else if(oExpertData.expertType=="PATENTLAWYER")var sExpertType=
"\ubcc0\ub9ac\uc0ac";else if(oExpertData.expertType=="ANIMALDOCTOR")var sExpertType="\uc218\uc758\uc0ac";
else if(oExpertData.expertType=="PHARMACIST")var sExpertType="\uc57d\uc0ac";else if(oExpertData.expertType==
"TAXACC")var sExpertType="\uc138\ubb34\uc0ac";else if(oExpertData.expertType=="DIETITIAN")var sExpertType=
"\uc601\uc591\uc0ac";else if(oExpertData.expertType=="STARTUP")var sExpertType="\ucc3d\uc5c5\uc131\uc7a5\uc804\ubb38\uac00";
else if(oExpertData.expertType=="CUSTOMSBROKER")var sExpertType="\uad00\uc138\uc0ac";aExpertHTML.push('\x3cdd\x3e\x3ca href\x3d"/profile/index.naver?u\x3d'+
oExpertData.encodedU+'" class\x3d"'+nhn.Kin.Utility.getNClicksClass("peo*x.who",oExpertData.u)+'"\x3e'+
sExpertType+"\x3c/a\x3e\x3c/dd\x3e");aExpertHTML.push("\x3c/dl\x3e");aExpertHTML.push('\x3cul class\x3d"detail3"\x3e');
if(oExpertData.companyName)aExpertHTML.push("\x3cli\x3e"+oExpertData.companyName+" "+oExpertData.companyPosition+
"\x3c/li\x3e");if(oExpertData.expertType=="DOCTOR"){if(oExpertData.specialityName)aExpertHTML.push("\x3cli\x3e\uc138\ubd80\uc804\uacf5 : "+
nhn.Kin.Utility.cutStringByByte(oExpertData.specialityName,15,"...")+"\x3c/li\x3e")}else if(oExpertData.edirName!=
"")aExpertHTML.push("\x3cli\x3e"+nhn.Kin.Utility.cutStringByByte(oExpertData.edirName,20,"...")+"\x3c/li\x3e");
aExpertHTML.push("\x3c/ul\x3e");aExpertHTML.push('\x3cul class\x3d"list_qna"\x3e');if(oExpertData.qnaList)for(var i=
0,len=oExpertData.qnaList.length;i<len;i++){var oQna=oExpertData.qnaList[i];aExpertHTML.push('\x3cli\x3e\x3ca href\x3d"'+
oQna.url+'" class\x3d"'+nhn.Kin.Utility.getNClicksClass("peo*x.qna",oQna.dirId+"_"+oQna.docId)+'"\x3e'+
nhn.Kin.Utility.cutStringByByte(oQna.title,30,"...")+"\x3c/a\x3e\x3c/li\x3e")}aExpertHTML.push("\x3c/ul\x3e");
aExpertHTML.push('\x3cdiv class\x3d"btn_area2"\x3e');aExpertHTML.push('\x3ca href\x3d"/people/expert/index.naver" class\x3d"btn_all '+
nhn.Kin.Utility.getNClicksClass("peo*x.all")+'"\x3e\uc804\ubb38\uac00 \uc804\uccb4\ubcf4\uae30\x3c/a\x3e');
if(oExpertData.expertType=="DOCTOR")aExpertHTML.push('\x3ca href\x3d"#" onClick\x3d"nhn.Kin.checkRosAndGoUrl(event, \'/qna/question.naver?expertType\x3ddoctor\', \'/qna/question.naver?m\x3dinit\x26dirId\x3d7\');" class\x3d"btn_help _clickcode:peo*x.doctor"\x3e\uc758\uc0ac\uc5d0\uac8c \uc9c8\ubb38\ud558\uae30\x3c/a\x3e');
else if(oExpertData.expertType=="LAWYER")aExpertHTML.push('\x3ca href\x3d"#" onClick\x3d"nhn.Kin.checkRosAndGoUrl(event, \'/qna/question.naver?expertType\x3dlawyer\', \'/qna/question.naver?m\x3dinit\x26dirId\x3d6\');" class\x3d"btn_help _clickcode:peo*x.lawyer"\x3e\ubcc0\ud638\uc0ac\uc5d0\uac8c \uc9c8\ubb38\ud558\uae30\x3c/a\x3e');
else if(oExpertData.expertType=="LABOR")aExpertHTML.push('\x3ca href\x3d"#" onClick\x3d"nhn.Kin.checkRosAndGoUrl(event, \'/qna/question.naver?expertType\x3dlaboragent\', \'/qna/question.naver?m\x3dinit\');" class\x3d"btn_help _clickcode:peo*x.cpla"\x3e\ub178\ubb34\uc0ac\uc5d0\uac8c \uc9c8\ubb38\ud558\uae30\x3c/a\x3e');
else if(oExpertData.expertType=="ANIMALDOCTOR")aExpertHTML.push('\x3ca href\x3d"#" onClick\x3d"nhn.Kin.checkRosAndGoUrl(event, \'/qna/question.naver?expertType\x3danimalDoctor\', \'/qna/question.naver?m\x3dinit\');" class\x3d"btn_help _clickcode:peo*x.vet"\x3e\uc218\uc758\uc0ac\uc5d0\uac8c \uc9c8\ubb38\ud558\uae30\x3c/a\x3e');
else if(oExpertData.expertType=="PHARMACIST")aExpertHTML.push('\x3ca href\x3d"#" onClick\x3d"nhn.Kin.checkRosAndGoUrl(event, \'/qna/question.naver?expertType\x3dpharmacist\', \'/qna/question.naver?m\x3dinit\');" class\x3d"btn_help _clickcode:peo*x.phm"\x3e\uc57d\uc0ac\uc5d0\uac8c \uc9c8\ubb38\ud558\uae30\x3c/a\x3e');
else if(oExpertData.expertType=="TAXACC")aExpertHTML.push('\x3ca href\x3d"#" onClick\x3d"nhn.Kin.checkRosAndGoUrl(event, \'/qna/question.naver?expertType\x3dtaxacc\', \'/qna/question.naver?m\x3dinit\');" class\x3d"btn_help _clickcode:peo*x.tax"\x3e\uc138\ubb34\uc0ac\uc5d0\uac8c \uc9c8\ubb38\ud558\uae30\x3c/a\x3e');
else if(oExpertData.expertType=="DIETITIAN")aExpertHTML.push('\x3ca href\x3d"#" onClick\x3d"nhn.Kin.checkRosAndGoUrl(event, \'/qna/question.naver?expertType\x3ddietitian\', \'/qna/question.naver?m\x3dinit\');" class\x3d"btn_help _clickcode:peo*x.ntr"\x3e\uc601\uc591\uc0ac\uc5d0\uac8c \uc9c8\ubb38\ud558\uae30\x3c/a\x3e');
else if(oExpertData.expertType=="CUSTOMSBROKER")aExpertHTML.push('\x3ca href\x3d"#" onClick\x3d"nhn.Kin.checkRosAndGoUrl(event, \'/qna/question.naver?expertType\x3dcustomsbroker\', \'/qna/question.naver?m\x3dinit\');" class\x3d"btn_help "\x3e\uad00\uc138\uc0ac\uc5d0\uac8c \uc9c8\ubb38\ud558\uae30\x3c/a\x3e');
aExpertHTML.push("\x3c/div\x3e");return aExpertHTML.join("")}
function _makePartnerHTML(oPartnerData){var aPartnerHTML=[];aPartnerHTML.push("\x3ch4\x3e\uc774\ub2ec\uc758 \uc9c0\uc2dd\ud30c\ud2b8\ub108\x3c/h4\x3e");
aPartnerHTML.push('\x3cp class\x3d"more"\x3e\x3ca href\x3d"/people/partner/index.naver" class\x3d"'+nhn.Kin.Utility.getNClicksClass("peo*s.more")+
'"\x3e\x3cspan class\x3d"blind"\x3e\uc9c0\uc2dd\ud30c\ud2b8\ub108\x3c/span\x3e\ub354\ubcf4\uae30\x3c/a\x3e\x3c/p\x3e');
aPartnerHTML.push('\x3cdiv class\x3d"thumb"\x3e');aPartnerHTML.push('\x3ca href\x3d"/profile/index.naver?u\x3d'+
oPartnerData.encodedU+'" class\x3d"'+nhn.Kin.Utility.getNClicksClass("peo*s.who",oPartnerData.u)+'"\x3e');
aPartnerHTML.push('\x3cimg src\x3d"'+oPartnerData.photo+'" width\x3d"100" height\x3d"100" alt\x3d"'+oPartnerData.viewUserId+
' \ub2d8\uc758 \ud504\ub85c\ud544"\x3e');aPartnerHTML.push("\x3c/a\x3e");aPartnerHTML.push("\x3c/div\x3e");
aPartnerHTML.push("\x3cdl\x3e");aPartnerHTML.push("\x3cdt\x3e");aPartnerHTML.push('\x3ca href\x3d"/profile/index.naver?u\x3d'+
oPartnerData.encodedU+'" class\x3d"'+nhn.Kin.Utility.getNClicksClass("peo*s.who",oPartnerData.u)+'"');
if(oPartnerData.userName){aPartnerHTML.push(' title\x3d"'+oPartnerData.userName+" ("+oPartnerData.viewUserId+
')"');aPartnerHTML.push("\x3e\x3cstrong\x3e"+nhn.Kin.Utility.cutStringByByte(oPartnerData.userName,18,
"...")+"\x3c/strong\x3e\x3cbr\x3e("+oPartnerData.viewUserId+")")}else aPartnerHTML.push("\x3e\x3cstrong\x3e"+
oPartnerData.viewUserId+"\x3c/strong\x3e");aPartnerHTML.push(" \ub2d8\x3c/a\x3e\x3c/dt\x3e");aPartnerHTML.push("\x3c/dl\x3e");
aPartnerHTML.push('\x3cdl class\x3d"detail other2"\x3e');aPartnerHTML.push("\x3cdt\x3e\ubd84\uc57c\x3c/dt\x3e");
aPartnerHTML.push('\x3cdd\x3e\x3ca href\x3d"/profile/index.naver?u\x3d'+oPartnerData.encodedU+'" class\x3d"'+
nhn.Kin.Utility.getNClicksClass("peo*s.who",oPartnerData.u)+'"\x3e'+oPartnerData.mainDirName+"\x3c/a\x3e\x3c/dd\x3e");
aPartnerHTML.push("\x3cdt\x3e\ub2f5\ubcc0\uc218\x3c/dt\x3e");aPartnerHTML.push("\x3cdd\x3e"+oPartnerData.totalAnswerCount+
"\x3c/dd\x3e");aPartnerHTML.push("\x3c/dl\x3e");aPartnerHTML.push('\x3cul class\x3d"aside_list"\x3e');
if(oPartnerData.qnaList)for(var i=0,len=oPartnerData.qnaList.length;i<len;i++){var oQna=oPartnerData.qnaList[i];
aPartnerHTML.push('\x3cli\x3e\x3ca href\x3d"'+oQna.url+'" class\x3d"'+nhn.Kin.Utility.getNClicksClass("peo*s.qna",
oQna.dirId+"_"+oQna.docId)+'"\x3ere : '+nhn.Kin.Utility.cutStringByByte(oQna.title,25,"...")+"\x3c/a\x3e\x3c/li\x3e")}aPartnerHTML.push("\x3c/ul\x3e");
aPartnerHTML.push('\x3cdiv class\x3d"btn_area2"\x3e');aPartnerHTML.push('\x3ca href\x3d"/people/partner/index.naver" class\x3d"btn_all '+
nhn.Kin.Utility.getNClicksClass("peo*s.all")+'"\x3e\uc9c0\uc2dd\ud30c\ud2b8\ub108 \uc804\uccb4\ubcf4\uae30\x3c/a\x3e');
aPartnerHTML.push('\x3ca href\x3d"/partnercenter/index.naver" class\x3d"btn_help '+nhn.Kin.Utility.getNClicksClass("peo*s.help")+
'"\x3e\uc9c0\uc2dd\ud30c\ud2b8\ub108\ub780?\x3c/a\x3e');aPartnerHTML.push("\x3c/div\x3e");return aPartnerHTML.join("")}
function _makeEliteHTML(oEliteData){if(!_wTemplate["elitePeopleTemplate"]||!oEliteData)return false;if(oEliteData.qnaList){var nItemCount=
oEliteData.qnaList.length;for(var i=0;i<nItemCount;i++){var sTitle=oEliteData.qnaList[i].title||"";oEliteData.qnaList[i].title=
nhn.Kin.Utility.cutStringByByte(sTitle,32,"...")}}return _wTemplate["elitePeopleTemplate"].process(oEliteData)}
eval(namespace.exports("initialize","destroy"))});
namespace("nhn.Kin.RNB.NoticeArea",function(){var _oInstance={};function initialize(){var oAuNotice=$("au_notice");
if(oAuNotice!=null){_oInstance["pr_notice"]=nhn.Kin.Utility.initializePageRolling(oAuNotice);$Fn(destroy,
this).attach(window,"unload")}}
function destroy(){_oInstance=null}
eval(namespace.exports("initialize","destroy"))});
namespace("nhn.Kin.RNB.CampaignArea",function(){var _oInstance={};function initialize(){var oAuCompaign=
$("au_campaign");if(oAuCompaign!=null){_oInstance["pr_campaign"]=nhn.Kin.Utility.initializePageRolling(oAuCompaign);
$Fn(destroy,this).attach(window,"unload")}}
function destroy(){_oInstance=null}
eval(namespace.exports("initialize","destroy"))});
namespace("nhn.Kin.RNB.ExpertRankingArea",function(){var _oElement={};var _oTabManager=null;var _bSetElement=
null;function initialize(nDirDepth){_bSetElement=false;if(_setElement()){_initializeTabManager(nDirDepth);
$Fn(destroy,this).attach(window,"unload")}}
function destroy(){_oElement=null;_oTabManager=null;_bSetElement=null}
function _setElement(){if(!_oElement)_oElement={};_oElement["holder"]=cssquery.getSingle("._tab_expert_ranking_area",
nhn.Kin.getElement("aside"));if(!_oElement["holder"])return false;_oElement["arr_tab"]=cssquery(".tc-tab",
_oElement["holder"]);_oElement["arr_panel"]=cssquery(".tc-panel",_oElement["holder"]);_bSetElement=true;
return true}
function _initializeTabManager(nDirDepth){if(!_bSetElement)return false;_oTabManager=(new jindo.TabControl(_oElement["holder"],
{sClassPrefix:"tc-",sCheckEvent:"click",bActivateOnload:true})).attach({beforeSelect:function(oEvent){nhn.Kin.Utility.hideProfile()},
select:function(oEvent){var wel=$Element($$.getSingle("._more a",_oElement["holder"]));if(nDirDepth==
1)wel.className("_nclicks:rr"+nDirDepth+"*"+(oEvent.nIndex===0?"a":"w")+".more");wel=null},
click:function(oEvent){var elTarget=oEvent.weEvent.element,elTargetTab=$$.getSingle("! li.tc-tab",elTarget);
var nIndex=_oTabManager.getIndex(elTargetTab);var welAnchorOfSelectedTab=jindo.$Element($$.getSingle("li.tc-selected a",
_oElement["holder"]));if(welAnchorOfSelectedTab){welAnchorOfSelectedTab.attr("aria-selected","false");
welAnchorOfSelectedTab.removeClass("is_active")}var elAnchorOfSelectedTab=elTarget;var welAnchorOfSelectTab=
jindo.$Element(elAnchorOfSelectedTab);if(welAnchorOfSelectTab){welAnchorOfSelectTab.attr("aria-selected",
"true");welAnchorOfSelectTab.addClass("is_active")}if(nIndex==0)nhn.Kin.Utility.nClicks("rr"+nDirDepth+
".all","","",oEvent.weEvent);else if(nIndex==1)nhn.Kin.Utility.nClicks("rr"+nDirDepth+".week","","",oEvent.weEvent)}})}
eval(namespace.exports("initialize","destroy"))});
namespace("nhn.Kin.RNB.PointRankingArea",function(){var _oElement={};var _oTabManager=null;var _bSetElement=
null;function initialize(nDirDepth){_bSetElement=false;if(_setElement()){_initializeTabManager(nDirDepth);
$Fn(destroy,this).attach(window,"unload")}}
function destroy(){_oElement=null;_oTabManager=null;_bSetElement=null}
function _setElement(){if(!_oElement)_oElement={};_oElement["holder"]=cssquery.getSingle("._tab_point_ranking_area",
nhn.Kin.getElement("aside"));if(!_oElement["holder"])return false;_oElement["arr_tab"]=cssquery(".tc-tab",
_oElement["holder"]);_oElement["arr_panel"]=cssquery(".tc-panel",_oElement["holder"]);_oElement["more_btn"]=
cssquery("._more",_oElement["holder"]);_bSetElement=true;return true}
function _initializeTabManager(nDirDepth){if(!_bSetElement)return false;_oTabManager=(new jindo.TabControl(_oElement["holder"],
{sClassPrefix:"tc-",sCheckEvent:"click",bActivateOnload:true})).attach({beforeSelect:function(oEvent){nhn.Kin.Utility.hideProfile()},
select:function(oEvent){var wel=$Element(cssquery.getSingle("._more a",_oElement["holder"]));if(oEvent.nIndex===
0){wel.attr({"href":"/people/rank/index.naver"});if(nDirDepth==1)wel.className("_nclicks:rr"+nDirDepth+
"*a.more")}else if(oEvent.nIndex==1){wel.attr({"href":"/people/rank/index.naver?svc\x3dKIN\x26mode\x3dlweek"});
if(nDirDepth==1)wel.className("_nclicks:rr"+nDirDepth+"*w.more")}wel=null},
click:function(oEvent){var elTarget=oEvent.weEvent.element,elTargetTab=$$.getSingle("! li.tc-tab",elTarget);
if(elTargetTab){var nIndex=_oTabManager.getIndex(elTargetTab);if(nIndex==0)nhn.Kin.Utility.nClicks("rr"+
nDirDepth+".all","","",oEvent.weEvent);else if(nIndex==1)nhn.Kin.Utility.nClicks("rr"+nDirDepth+".week",
"","",oEvent.weEvent);var welAnchorOfSelectedTab=jindo.$Element($$.getSingle("li.tc-selected a",_oElement["holder"]));
if(welAnchorOfSelectedTab){welAnchorOfSelectedTab.attr("title",null);welAnchorOfSelectedTab.attr("aria-selected",
"false");welAnchorOfSelectedTab.removeClass("is_active")}var elAnchorOfSelectedTab=elTarget;var welAnchorOfSelectTab=
jindo.$Element(elAnchorOfSelectedTab);if(welAnchorOfSelectTab){welAnchorOfSelectTab.attr("title","\uc120\ud0dd\ub428");
welAnchorOfSelectTab.attr("aria-selected","true");welAnchorOfSelectTab.addClass("is_active")}var sTextOfSelectedTab=
jindo.$Element($$.getSingle("span",elAnchorOfSelectedTab)).html();welSpanOfRankMoreBtn=jindo.$Element($$.getSingle("span",
$$.getSingle("._more")));welSpanOfRankMoreBtn.html(sTextOfSelectedTab)}}})}
eval(namespace.exports("initialize","destroy"))});
nhn.Kin.RNB.AhaArea=$Class({_oElement:null,_oTabManager:null,_bSetElement:null,$init:function(){this._bSetElement=
false;if(this._setElement()){this._initializeTabManager();$Fn(this.destroy,this).attach(window,"unload")}},
destroy:function(){this._oElement=null;this._oTabManager=null;this._bSetElement=null},
_setElement:function(){if(!this._oElement)this._oElement={};this._oElement["holder"]=$$.getSingle("._tab_aha_area",
nhn.Kin.getElement("aside"));if(!this._oElement["holder"])return false;this._oElement["btn_aha_more"]=
$$.getSingle("._btn_aha_more",this._oElement["holder"]);this._bSetElement=true;this._oElement["arr_aha_tabs"]=
$$(".tc-tab",this._oElement["holder"]);return true},
_initializeTabManager:function(){if(!this._bSetElement)return false;this._oTabManager=(new jindo.TabControl(this._oElement["holder"],
{sClassPrefix:"tc-",sCheckEvent:"click",bActivateOnload:true})).attach({beforeSelect:$Fn(function(oEvent){var nPrevIndex=
this._oTabManager.getCurrentIndex();var nIndex=oEvent.nIndex;if(nPrevIndex==nIndex){oEvent.stop();return false}var welAnchorOfSelectedTab=
jindo.$Element($$.getSingle("li.tc-selected a",this._oElement["holder"]));if(welAnchorOfSelectedTab)welAnchorOfSelectedTab.attr("title",
null);var welAnchorOfSelectTab=jindo.$Element($$.getSingle("a",oEvent.elTab));if(welAnchorOfSelectTab){welAnchorOfSelectTab.attr("title",
"\uc120\ud0dd\ub428");var sTextOfSelectedTab=welAnchorOfSelectTab.html();var welEmOfAhaMoreBtn=jindo.$Element($$.getSingle("em",
this._oElement["btn_aha_more"]));if(welEmOfAhaMoreBtn)welEmOfAhaMoreBtn.html(sTextOfSelectedTab)}if(nIndex==
0)this._oElement["btn_aha_more"].href="/best/listaha.naver?svc\x3dOPEN100";else if(nIndex==1)this._oElement["btn_aha_more"].href=
"/best/listaha.naver?svc\x3dKNOWHOW"},this).bind()})}});
namespace("nhn.Kin.RNB.DoctorSearchArea",function(){var _oElement={};var _oEvent={};function initialize(){if(_setElement()){_setEvent();
$Fn(destroy,this).attach(window,"unload")}}
function destroy(){_detachEvent();_oEvent=_oElement=null}
function _setElement(){if(!_oElement)_oElement={};var oHanLI=$("hanLI");if(oHanLI==null)return false;
_oElement["hanLI"]=cssquery.getSingle("a",oHanLI);_oElement["dentalLI"]=cssquery.getSingle("a",$("dentalLI"));
_oElement["yangLI"]=cssquery.getSingle("a",$("yangLI"));return true}
function _setEvent(){if(!_oEvent)_oEvent={};_oEvent["hanLI"]=$Fn(_onToggle).attach(_oElement["hanLI"],
"click");_oEvent["dentalLI"]=$Fn(_onToggle).attach(_oElement["dentalLI"],"click");_oEvent["yangLI"]=$Fn(_onToggle).attach(_oElement["yangLI"],
"click")}
function _onToggle(we){var sType=we.element.className.replace(/.*_param\('([^\)]+)'\).*/g,"$1");$Element(sType+
"UL").toggle();$Element(sType+"LI").toggleClass("on");we.stop();return false}
function _detachEvent(){_oEvent["hanLI"].detach(_oElement["hanLI"],"click");_oEvent["dentalLI"].detach(_oElement["dentalLI"],
"click");_oEvent["yangLI"].detach(_oElement["yangLI"],"click")}
eval(namespace.exports("initialize","destroy"))});
if(typeof nhn.Kin=="undefined")nhn.Kin={};if(typeof nhn.Kin.Search=="undefined")nhn.Kin.Search={};
nhn.Kin.Search.NumberInputBox=$Class({wel:null,_bComplete:false,_bActive:false,$init:function(el,htOptions){this.wel=
$Element(el);this.option({nCheckInterval:10,sCheckRule:"####",bActivate:true,sNumberReplcement:"#"});
this.option(htOptions||{});this.wel.css("imeMode","disabled");this.activate(this.option("bActivate"));
this.checkValue();this._setEvent()},
_setEvent:function(){$Fn(this._onKeydown,this).attach(this.wel,"keydown");$Fn(this._onKeyup,this).attach(this.wel,
"keyup")},
_onKeydown:function(we){var oKey=we.key();if(this._bComplete&&!this._isFunctionKey(oKey)||!(this._isNumberKey(oKey)||
this._isFunctionKey(oKey)))we.stopDefault();oKey=we=null},
_onKeyup:function(we){var oKey=we.key();if(!this._isFunctionKey(oKey))this.checkValue();this._checkValidate();
oKey=we=null},
_isFunctionKey:function(oKey){return oKey.left||oKey.right||oKey.up||oKey.down||oKey.ctrl||oKey.alt||
oKey.keyCode==8||oKey.keyCode==9||oKey.keyCode==16||oKey.keyCode==46||oKey.keyCode==36||oKey.keyCode==
35},
_isNumberKey:function(oKey){var nKeyCode=oKey.keyCode;return nKeyCode>=48&&nKeyCode<=57||nKeyCode>=96&&
nKeyCode<=105},
_getValueForRule:function(sUserInput,sCheckRule,nOriginValueLength){var nPosUser,nPosRule,nValueLength,
aNewValue,sOtherChar;aNewValue=[];for(nPosUser=0,nPosRule=0,nValueLength=sUserInput.length;nPosUser<nValueLength;nPosUser++,
nPosRule++)if(sCheckRule.charAt(nPosRule)==this.option("sNumberReplcement"))aNewValue.push(sUserInput.charAt(nPosUser));
else{sOtherChar=this._getOtherChar(sCheckRule,nPosRule);aNewValue.push(sOtherChar);nPosRule+=sOtherChar.length;
aNewValue.push(sUserInput.charAt(nPosUser))}if(nOriginValueLength>=aNewValue.length){sOtherChar=this._getOtherChar(sCheckRule,
nPosRule);aNewValue.push(sOtherChar)}nPosUser=nPosRule=nValueLength=sOtherChar=null;return aNewValue.join("")},
_getOtherChar:function(sCheckRule,nPos){var aTemp,sChar,nLength;aTemp=[];for(nLength=sCheckRule.length;nPos<
nLength;nPos++)if(sCheckRule.charAt(nPos)==this.option("sNumberReplcement"))return aTemp.join("");else aTemp.push(sCheckRule.charAt(nPos));
sChar=nLength=null;return aTemp.join("")},
_getNumberCount:function(sCheckRule){var nLength,nCount,i;for(i=0,nCount=0,nLength=sCheckRule.length;i<
nLength;i++)if(sCheckRule.charAt(i)==this.option("sNumberReplcement"))nCount++;nLength=i=null;return nCount},
_getOnlyNumber:function(sValue){var i,nLength,sCharValue,aOnlyNumber;aOnlyNumber=[];for(i=0,nLength=sValue.length;i<
nLength;i++){sCharValue=sValue.charAt(i);if(this._isNumber(sCharValue))aOnlyNumber.push(sCharValue)}sValue=
aOnlyNumber.join("");nNumberCount=this._getNumberCount(this.option("sCheckRule"));if(sValue.length>nNumberCount)sValue=
sValue.substring(0,nNumberCount);sCharValue=i=nLength=null;return sValue},
_isNumber:function(sChar){return/\d/.test(sChar)},
activate:function(bFlag){this._bActive=bFlag},
checkValue:function(){var el,sValue;el=this.wel.$value();sValue=el.value;el.value=this._getValueForRule(this._getOnlyNumber(sValue),
this.option("sCheckRule"),sValue.length);el=sValue=null},
_checkValidate:function(){el=this.wel.$value();sValue=el.value;if(sValue.length<this.option("sCheckRule").length||
sValue.length>this.option("sCheckRule").length)this._bComplete=false;else this._bComplete=true},
getCheckRule:function(){return this.option("sCheckRule")}}).extend(jindo.Component);
if(typeof nhn.Kin=="undefined")nhn.Kin={};if(typeof nhn.Kin.Search=="undefined")nhn.Kin.Search={};
nhn.Kin.Search.DetailSearch=$Class({$init:function(eEl){this.eTargetEl=eEl;this.bEvt=false;this.aSRangeForSelect=
["r_range2","r_range3","r_range4","r_range5","r_range6"];this.aSelect=cssquery("select",$("sRange"));
this.WORRY_DIRID=20;this.DEFUALT_MSG="\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694";
this.sSection=null;this.sDirectory=null;this.sSelection=null;this.sArea=null;this.sPeriod=null;this.sType=
null;this.setEvent();this.setInputInit();new nhn.Kin.Search.NumberInputBox("periodS",{nCheckInterval:10,
sCheckRule:"####.##.##."});new nhn.Kin.Search.NumberInputBox("periodE",{nCheckInterval:10,sCheckRule:"####.##.##."})},
setInputInit:function(){$("r_range1").checked=true;$("r_section1").checked=true;$("r_period1").checked=
true;var i=0;while(this.aSelect[i]){this.aSelect[i].disabled=true;i++}},
getIsEvt:function(){return this.bEvt},
setIsEvt:function(evt){this.bEvt=evt},
getTargetEl:function(){return this.eTargetEl},
getSRangeForSelect:function(){return this.aSRangeForSelect},
setEvent:function(){if(this.eTargetEl){$Fn(this.doClick,this).attach(this.eTargetEl,"click");$Fn(this.doEnter,
this).attach(this.eTargetEl,"keypress");$Fn(this.doChangeSelect,this).attach(this.aSelect,"change");$Fn(this.doToggleOperatorLayer,
this).attach($("operator_open"),"click");$Fn(this.doCloseOperatorLayer,this).attach($("operator_open"),
"blur");this.setIsEvt(true)}},
doToggleOperatorLayer:function(we){var wOperatorLayer=$Element($("operator_layer"));if(!wOperatorLayer)return;
if(wOperatorLayer.visible())wOperatorLayer.hide();else{wOperatorLayer.show();for(var i=0,len=this.aSelect.length;i<
len;i++)this.aSelect[i].blur()}},
doCloseOperatorLayer:function(we){var wOperatorLayer=$Element($("operator_layer"));if(!wOperatorLayer)return;
wOperatorLayer.hide()},
doEnter:function(evt){var tEl=evt.element;if(evt.key().enter&&tEl.tagName.toLowerCase()=="input"){if(tEl.id==
"sQuery")this.allSubmit();evt.stop();return false}},
doClick:function(evt){var tEl=evt.element;var eEl=cssquery.getSingle("! a",tEl)||tEl;if(eEl.type=="radio"||
eEl.tagName.toLowerCase()=="label"||eEl.tagName.toLowerCase()=="span"&&eEl.parentNode.tagName.toLowerCase()==
"label")if(eEl.tagName.toLowerCase()=="label")return;else{var oTd=cssquery.getSingle("! td",eEl);var i;
if($Element(oTd).hasClass("range")){var aSelId=this.getSRangeForSelect();var aSel=cssquery("select",$("sRange"));
var flag=false;for(i=0;i<aSelId.length;i++)if(aSelId[i]==eEl.id)flag=true;this.sSelection=eEl.value;if(flag){for(i=
0;i<aSel.length;i++)aSel[i].removeAttribute("disabled");this.sType=tEl.className.replace(/.*_param\('([^\)]+)'\).*/g,
"$1").replace(/_/ig,"");this.initSelectBox();var nWorryDirId=eEl.value=="worry"?this.WORRY_DIRID:"";this.directorySetting("first",
nWorryDirId)}else for(i=0;i<aSel.length;i++){aSel[i].length=1;aSel[i].options[0].selected=true;aSel[i].disabled=
true}}else if($Element(oTd).hasClass("section"))this.sArea=eEl.value;else if($Element(oTd).hasClass("period")){var aInput=
cssquery("input[type\x3dtext]",$("sPeriod"));if(eEl.id=="r_period4")for(i=0;i<aInput.length;i++)aInput[i].removeAttribute("disabled");
else{for(i=0;i<aInput.length;i++)aInput[i].disabled=true;var today,destDay;if(eEl.value=="1w"){today=
this.makeDate();destDay=this.makeDate(today.year,Number(today.month-1),Number(today.date-7));$("periodS").value=
destDay.year+"."+destDay.month+"."+destDay.date+".";$("periodE").value=today.year+"."+today.month+"."+
today.date+"."}else if(eEl.value=="1m"){today=this.makeDate();destDay=this.makeDate(today.year,Number(today.month-
2),today.date);$("periodS").value=destDay.year+"."+destDay.month+"."+destDay.date+".";$("periodE").value=
today.year+"."+today.month+"."+today.date+"."}else if(eEl.value=="all"){today=this.makeDate();destDay=
this.makeDate(2002,0,1);$("periodS").value=destDay.year+"."+destDay.month+"."+destDay.date+".";$("periodE").value=
today.year+"."+today.month+"."+today.date+"."}}this.sPeriod=eEl.value}}else if(eEl.id=="sQuery"){if(eEl.value==
this.DEFUALT_MSG){eEl.value="";$Element(eEl).removeClass("text_dim")}}else if(eEl.id=="operator_open")evt.stop();
else if(eEl.id=="close_layer");else if(eEl.id=="dSearchClose"||eEl.id=="dSearchClose2"){$Element($("operator_layer")).hide();
$Element($("detailSearchArea")).hide();var oPremiumSearch=$$.getSingle("a.premium_search",$("topSearch"));
if(oPremiumSearch)oPremiumSearch.focus();evt.stop()}else if(eEl.id=="dSearchSubmit"||eEl.id=="sQuerySubmit"){this.allSubmit();
evt.stop()}},
allSubmit:function(){if(!this.checkDateValidation())return;var url=this.makeQuery();var elForm=$("au_complex_Search");
try{elForm.submit()}catch(e){}elForm=null;if($("editor"))return false},
checkDateValidation:function(){if(!$("r_period4").checked)return true;var elS=$("periodS"),elE=$("periodE"),
sValueS=elS.value,sValueE=elE.value;var oMsg={wrong:"\uc798\ubabb\ub41c \ub0a0\uc9dc \ud615\uc2dd\uc785\ub2c8\ub2e4.( YYYY.MM.DD. )",
error:"\uc124\uc815\ub41c \uae30\uac04\uc5d0 \uc624\ub958\uac00 \uc788\uc2b5\ub2c8\ub2e4."};if(sValueS==
""||!sValueS.match(/\d{4}\.\d{2}\.\d{2}\./))this.displayAlert(elS,oMsg["wrong"]);else if(sValueE==""||
!sValueE.match(/\d{4}\.\d{2}\.\d{2}\./))this.displayAlert(elE,oMsg["wrong"]);else if(!this.checkDate(sValueS.split(".")))this.displayAlert(elS,
oMsg["error"]);else if(!this.checkDate(sValueE.split(".")))this.displayAlert(elE,oMsg["error"]);else if(Number(sValueS.replace(/./g,
""))-Number(sValueE.replace(/./g,""))>0)this.displayAlert(elS,oMsg["error"]);else{elS=elE=oMsg=null;return true}elS=
elE=oMsg=null;return false},
checkDate:function(aDate){if(aDate.length<3)return false;var year=Number(aDate[0]),month=Number(aDate[1]),
day=Number(aDate[2]);var aMonth=[31,28,31,30,31,30,31,31,30,31,30,31];if(this.isLeafMonth(year))aMonth[1]=
29;var oToday=this.makeDate();if(Number(aDate.join(""))>Number(oToday.year+""+oToday.month+""+oToday.date))return false;
else if(month>12)return false;else if(day>aMonth[month-1])return false;else return true},
isLeafMonth:function(year){var bLeaf=false;if(year%4===0)bLeaf=true;if(year%100===0)bLeaf=false;if(year%
400===0)bLeaf=true;return bLeaf},
displayAlert:function(el,str){alert(str);if(el)el.focus()},
initSelectBox:function(num){var cnt=num||0;for(var i=cnt+1;i<5;i++){$("dir_"+i).length=1;$("dir_"+i).options[0].selected=
true}},
doChangeSelect:function(evt){var tEl=evt.element;var nIdx=tEl.selectedIndex;var sValue=tEl.options[nIdx].value;
this.sDirectory=sValue<10?"0"+sValue:sValue;var oSelId=tEl.id;var cnt=Number(oSelId.split("_")[1]);this.initSelectBox(cnt);
if(tEl.options[nIdx].className!="_NONLEAF")return;this.directorySetting("dir_"+(cnt+1),sValue)},
makeDate:function(year,month,date){date=year?new Date(year,month,date):new Date;year=date.getFullYear();
month=date.getMonth()+1<10?"0"+Number(date.getMonth()+1):Number(date.getMonth()+1);date=date.getDate()<
10?"0"+date.getDate():date.getDate();return{"year":year,"month":month,"date":date}},
directorySetting:function(order,dirId){var url="/ajax/directory.naver";var params={"type":this.sType,
"mode":"CHILD","dirId":dirId||0};var ajax=(new $Ajax(url,{onload:$Fn(function(pRes){var res=pRes.json();
if(res.isSuccess)if(order=="first")this.makeDirectorySelect($("dir_1"),res.result[0].list[0]);else this.makeDirectorySelect($(order),
res.result[0].list[0]);else if(res.errorMsg=="FAIL_NOT_EXISTS")alert("\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ub514\ub809\ud1a0\ub9ac\uc785\ub2c8\ub2e4.\n\ub2e4\uc2dc \ud655\uc778\ud574\uc8fc\uc138\uc694")},
this).bind()})).request(params)},
makeDirectorySelect:function(oSel,data){oSel.length=1;var cnt=1;for(var i=0,len=data.length;i<len;i++){var sDirName=
data[i].dirName;if(sDirName.indexOf("@")==-1){oSel.options[cnt]=new Option(sDirName,data[i].dirId,true);
oSel.options[cnt].className="_"+data[i].dirType;oSel.options[cnt].selected=false;cnt++}}oSel.options[0].selected=
true},
makeQuery:function(type,query){var queryStr="/search/list.naver?";var qt="qt\x3dba";var today=this.makeDate();
var elForm=$("au_complex_Search");elForm["query"].value=$("sQuery").value!=this.DEFUALT_MSG?$("sQuery").value:
"";elForm["qt"].value="ba";elForm["section"].value=this.sSelection||"";if(this.sPeriod=="")this.sPeriod=
$("periodS").value+"|"+$("periodE").value;elForm["period"].value=this.sPeriod||"all";elForm["sr"].value=
this.sArea||"all";elForm["dirId"].value=this.sDirectory||0;elForm=null}});
if(typeof naver==="undefined")naver={};if(typeof naver.kin==="undefined")naver.kin={};
naver.kin.LNB=$Class({_CHECK_NEW_ALMIGHTY_GOD_URL:"/ajax/hasNewAlmightyGodAjax.nhn",_CHECK_NEW_ELITE_MARK_URL:"/people/elite/checkNewEliteMarkAjax.nhn",
_oElement:null,_wElement:null,_wEvent:null,_bMouseOver:false,_elCurrentLNBMenu:null,_oTimer:null,_nRollingDurationTime:1E3,
_nRollingIntervalTime:4E3,_nMouseOverInterval:100,_nMouseOutInterval:50,_bPeopleLnbMarked:false,_elMenuOnInit:false,
_oCircularRolling:null,_oRollingTimer:null,_oDirectoryToIdx:{home:1,qna:{kin:2,12:2,13:2,20:2},questionList:3,
other:{volunteer:4,people:5,best:6,hall:7,myinfo:8,userinfo:8,profile:8,partnercenter:9,roulette:10,opendic:2,
open100:2,knowhow:2}},$init:function(htOption){this._oElement={};this._wElement={};this._wEvent={};this._setElement();
this._setEvent();this._setCurrentMenu(htOption?htOption.questionType:null);this._setNewAlmightyGodMark();
this._setNewEliteMark();this._exposeOneItem();$Fn(this._destroy,this).attach(window,"unload")},
_setElement:function(){this._oElement["lnb"]=$("au_lnb");this._wElement["lnb"]=$Element(this._oElement["lnb"]);
this._oElement["lnbMenu"]=$A($$("\x3eli",this._oElement["lnb"]));this._oElement["lnbMenuAnchor"]=$A($$("\x3eli\x3ea",
this._oElement["lnb"]));this._oElement["rollingBanner"]=$$.getSingle("ul._rolling_banner");this._oElement["rollingBannerList"]=
$$("li._rollingItem",this._oElement["rollingBanner"]);this._wElement["rollingBannerList"]=$ElementList(this._oElement["rollingBannerList"]);
this._oElement["containerFluidContentInner"]=$$.getSingle("div._containerFluidContentInner");this._wElement["containerFluidContentInner"]=
$Element(this._oElement["containerFluidContentInner"]);this._oElement["lnbSubMenuAnchor"]=$A($$("\x3eli\x3ea",
$$.getSingle("._lnbSubMenu")));var oLastLnbMenu=this._oElement["lnbMenu"].get(this._oElement["lnbMenu"].length()-
1);if(oLastLnbMenu){var oUlLnbSubMenu=$$.getSingle("ul._lnbSubMenu",oLastLnbMenu);if(oUlLnbSubMenu)this._oElement["lastLnbSubMenuAnchor"]=
$$.getSingle("li:last-child a",oUlLnbSubMenu)}},
_setEvent:function(){if(this._oElement["lnbMenu"]){this._wEvent["mouseOverLNB"]=$Fn(this._eventOnLNBMenu,
this).attach(this._oElement["lnbMenu"],"mouseover");this._wEvent["mouseOutLNB"]=$Fn(this._eventOnLNBMenu,
this).attach(this._oElement["lnbMenu"],"mouseout")}if(this._oElement["lnbMenuAnchor"]){this._wEvent["focusLNB"]=
$Fn(this._eventOnLNBMenu,this).attach(this._oElement["lnbMenuAnchor"],"focus");this._wEvent["blurLNB"]=
$Fn(this._eventOnLNBMenu,this).attach(this._oElement["lnbMenuAnchor"],"blur");this._wEvent["keyDownLNBMenuAnchor"]=
$Fn(this._keyDownOnLnbMenu,this).attach(this._oElement["lnbMenuAnchor"],"keydown");this._wEvent["keyDownLNBSubMenuAnchor"]=
$Fn(this._keyDownOnLnbSubMenu,this).attach(this._oElement["lnbSubMenuAnchor"],"keydown")}if(this._oElement["lastLnbSubMenuAnchor"])this._wEvent["keydownFromLastLnbSubMenu"]=
$Fn(this._keydownFromLastLnbSubMenu,this).attach(this._oElement["lastLnbSubMenuAnchor"],"keydown")},
_setNewAlmightyGodMark:function(){var sNewAlmightyGodInfo=nhn.Kin.Utility.LocalStorage.getItem(nhn.Kin.Utility.LocalStorage.KEY.PCWEB_LNB_NEW_ALMIGHTY_GOD_INFO);
if(sNewAlmightyGodInfo){var oNewAlmightyGodInfo=nhn.Kin.Utility.getObjectFromString(sNewAlmightyGodInfo);
if((new $Date).time()-parseInt(oNewAlmightyGodInfo.checkTime||0,10)<864E5){if(oNewAlmightyGodInfo.flag==
"Y")this._showNewAlmightyGodMark();return}}var oAjax=(new $Ajax(this._CHECK_NEW_ALMIGHTY_GOD_URL,{method:"get",
timeout:5,onload:$Fn(function(oResponse){var oJson=oResponse.json();if(oJson){var bHasNewAlmightyGod=
oJson.hasNewAlmightyGod||false;if(bHasNewAlmightyGod)this._showNewAlmightyGodMark();nhn.Kin.Utility.LocalStorage.setItem(nhn.Kin.Utility.LocalStorage.KEY.PCWEB_LNB_NEW_ALMIGHTY_GOD_INFO,
nhn.Kin.Utility.getStringFromObject({flag:bHasNewAlmightyGod?"Y":"N",checkTime:(new $Date).time()}))}},
this).bind()})).request()},
_showNewAlmightyGodMark:function(){var wElPeopleLnbBtn=$Element("peopleLnbBtn");if(wElPeopleLnbBtn&&!this._bPeopleLnbMarked){wElPeopleLnbBtn.html(wElPeopleLnbBtn.html()+
'\x3cspan class\x3d"sp_common ico_new2"\x3eNEW\x3c/span\x3e');this._bPeopleLnbMarked=true}var wElKinRankMenuBtn=
$Element("kinRankMenuBtn");if(wElKinRankMenuBtn){var wElChild=wElKinRankMenuBtn.first();if(wElChild)wElChild.html(wElChild.html()+
'\x3cem class\x3d"new"\x3e\x3cspan class\x3d"blind"\x3eNEW\x3c/span\x3e\x3c/em\x3e')}},
_setNewEliteMark:function(){var sNewEliteMarkInfo=nhn.Kin.Utility.LocalStorage.getItem(nhn.Kin.Utility.LocalStorage.KEY.PCWEB_LNB_NEW_ELITE_MARK_INFO);
if(sNewEliteMarkInfo){var oNewEliteMarkInfo=nhn.Kin.Utility.getObjectFromString(sNewEliteMarkInfo);if((new $Date).time()-
parseInt(oNewEliteMarkInfo.checkTime||0,10)<36E5){if(oNewEliteMarkInfo.mark)this._showNewEliteMark(oNewEliteMarkInfo.mark);
return}}var oAjax=(new $Ajax(this._CHECK_NEW_ELITE_MARK_URL,{method:"get",timeout:5,onload:$Fn(function(oResponse){var oJson=
oResponse.json();if(oJson){var oMark={bLnbPeopleNewMark:oJson.isLnbPeopleNewMark||false,bSnbEliteNewMark:oJson.isSnbEliteNewMark||
false,bSnbEliteIngMark:oJson.isSnbEliteIngMark||false,voteEndAt:oJson.voteEndAt||0};this._showNewEliteMark(oMark);
nhn.Kin.Utility.LocalStorage.setItem(nhn.Kin.Utility.LocalStorage.KEY.PCWEB_LNB_NEW_ELITE_MARK_INFO,nhn.Kin.Utility.getStringFromObject({mark:oMark||
{},checkTime:(new $Date).time()}))}},this).bind()})).request()},
_showNewEliteMark:function(oMark){if(oMark.bLnbPeopleNewMark){var wElPeopleLnbBtn=$Element("peopleLnbBtn");
if(wElPeopleLnbBtn&&!this._bPeopleLnbMarked){wElPeopleLnbBtn.html(wElPeopleLnbBtn.html()+'\x3cspan class\x3d"sp_common ico_new2"\x3eNEW\x3c/span\x3e');
this._bPeopleLnbMarked=true}}if(oMark.bSnbEliteNewMark||oMark.bSnbEliteIngMark){if(oMark.hasOwnProperty("voteEndAt")&&
oMark.voteEndAt<(new Date).getTime())return;var wElEliteMenuBtn=$Element("kinEliteMenuBtn");if(wElEliteMenuBtn){var wElChild=
wElEliteMenuBtn.first();if(wElChild)if(oMark.bSnbEliteNewMark)wElChild.html(wElChild.html()+'\x3cem class\x3d"new"\x3e\x3cspan class\x3d"blind"\x3eNEW\x3c/span\x3e\x3c/em\x3e');
else wElChild.html(wElChild.html()+'\x3ci class\x3d"ing"\x3e\ud22c\ud45c\uc911\x3c/i\x3e')}}},
_exposeOneItem:function(){var nItemSize=this._oElement["rollingBannerList"].length;var nUserLastVisitTime=
null;var oLocalStorage=nhn.Kin.Utility.LocalStorage;if(oLocalStorage.isSupportLocalStorage()){nUserLastVisitTime=
oLocalStorage.getItem(oLocalStorage.KEY.PCWEB_COMMON_USER_LAST_VISIT_TIME);if(!nUserLastVisitTime)nUserLastVisitTime=
0;oLocalStorage.setItem(oLocalStorage.KEY.PCWEB_COMMON_USER_LAST_VISIT_TIME,(new Date).getTime())}if(nItemSize>
0){var nItemIndex=Math.floor(Math.random()*nItemSize);var oElBannerItem=this._oElement["rollingBannerList"][nItemIndex];
var wElBannerItem=this._wElement["rollingBannerList"].get(nItemIndex);if(wElBannerItem){var nBannerItemStartTime=
(new Date(wElBannerItem.attr("data-start-time"))).getTime();if(nUserLastVisitTime!==null&&nBannerItemStartTime>
nUserLastVisitTime)$Element($$.getSingle("._newMark",oElBannerItem)).css("display","");wElBannerItem.show()}}},
_setRollingAnimation:function(){if(this._oElement["rollingBanner"]&&this._oElement["rollingBannerList"].length>
1){this._oCircularRolling=new jindo.CircularRolling(this._oElement["rollingBanner"],{nDuration:this._nRollingDurationTime,
sDirection:"vertical"});this._oRollingTimer=setInterval($Fn(function(){this._oCircularRolling.moveBy(1)},
this).bind(),this._nRollingIntervalTime)}},
_showLNBMenu:function(el){if(!el)return;var aElUlList=el.getElementsByTagName("ul");if(aElUlList&&aElUlList.length>
0){var wElAnchor=$Element($$.getSingle("\x3ea",el));if(wElAnchor){wElAnchor.attr("aria-expanded",true);
wElAnchor.addClass("_ariaExpanded")}var elMenu=aElUlList[0];if(elMenu){var wElNavSubList=$Element(elMenu);
wElNavSubList.show();var nNavSubListWidth=wElNavSubList.width();wElNavSubList.css("marginLeft","-"+nNavSubListWidth/
2+"px")}}var oNavigator=$Agent().navigator();if(oNavigator&&oNavigator.ie&&oNavigator.version==6){var aElIframeList=
el.getElementsByTagName("iframe");if(aElIframeList&&aElIframeList.length>0){var elMenuIframe=aElIframeList[0];
if(elMenuIframe)$Element(elMenuIframe).show()}}},
_hideLNBMenu:function(el){if(!el)return;var aElUlList=el.getElementsByTagName("ul");if(aElUlList&&aElUlList.length>
0){var wElAnchor=$Element($$.getSingle("\x3ea",el));if(wElAnchor){wElAnchor.attr("aria-expanded",false);
wElAnchor.removeClass("_ariaExpanded")}var elMenu=aElUlList[0];if(elMenu)$Element(elMenu).hide()}var oNavigator=
$Agent().navigator();if(oNavigator&&oNavigator.ie&&oNavigator.version==6){var aElIframeList=el.getElementsByTagName("iframe");
if(aElIframeList&&aElIframeList.length>0){var elMenuIframe=aElIframeList[0];if(elMenuIframe)$Element(elMenuIframe).hide()}}},
_eventOnLNBMenu:function(we){if(nhn.isPortableDevice){we.stop();return}var sEventType=we.type;if(!sEventType){we.stop();
return}var el;if(sEventType==="focus"||sEventType==="blur")el=we.element.parentNode;else el=we.currentElement;
if(!el){we.stop();return}var wEl=$Element(el);var bAriaExpanded=false;var wElAnchor=$Element($$.getSingle("\x3ea",
el));if(wElAnchor)bAriaExpanded=wElAnchor.hasClass("_ariaExpanded");if(sEventType==="mouseover"){this._bMouseOver=
true;if(bAriaExpanded)return;else this._hideLNBMenu(this._elCurrentLNBMenu);this._elCurrentLNBMenu=el;
wEl.addClass("on");this._oTimer=setTimeout($Fn(function(){this._showLNBMenu(el)},this).bind(),this._nMouseOverInterval)}else if(sEventType===
"focus"){this._bMouseOver=true;
if(bAriaExpanded)return;else this._hideLNBMenu(this._elCurrentLNBMenu);this._elCurrentLNBMenu=el;wEl.addClass("on")}else{this._bMouseOver=
false;if(this._oTimer){clearTimeout(this._oTimer);this._oTimer=null}if(el!==this._elMenuOnInit){wEl.removeClass("on");
if(wElAnchor){var wElSpanList=$ElementList($$("span._selected",wElAnchor.$value()));if(wElSpanList)wElSpanList.leave()}}setTimeout($Fn(function(){if(this._bMouseOver&&
el==this._elCurrentLNBMenu)return;if(sEventType==="blur"&&bAriaExpanded)return;this._hideLNBMenu(el)},
this).bind(),this._nMouseOutInterval);
we.stop()}},
_keyDownOnLnbMenu:function(we){var el=we.currentElement;var oAnchors=null;var wElParent=$Element(el).parent();
if(wElParent.hasClass("menu"))oAnchors=this._oElement["lnbMenuAnchor"];else return;var oLastAnchors=oAnchors;
var oAnchorIndex=oAnchors.indexOf(el);if(oAnchorIndex==null)return;var oNextAnchorIndex=null;switch(we.key().keyCode){case nhn.Kin.Utility.KEY.CODE.RIGHT:oNextAnchorIndex=
oAnchorIndex+1;if(oNextAnchorIndex===oAnchors.length())oNextAnchorIndex=0;break;case nhn.Kin.Utility.KEY.CODE.LEFT:oNextAnchorIndex=
oAnchorIndex-1;if(oNextAnchorIndex<0)oNextAnchorIndex=oAnchors.length()-1;break;case nhn.Kin.Utility.KEY.CODE.DOWN:case nhn.Kin.Utility.KEY.CODE.ENTER:if(el.getAttribute("aria-haspopup")!=
"true")return;this._showLNBMenu(wElParent._element);oAnchors=$A($$("\x3eul\x3eli\x3ea",wElParent._element));
oAnchors.get(0).focus();we.stop();return}if(oNextAnchorIndex!=null){oLastAnchors.get(oAnchorIndex).setAttribute("tabindex",
"-1");oAnchors.get(oNextAnchorIndex).setAttribute("tabindex","0");oAnchors.get(oNextAnchorIndex).focus();
we.stop()}},
_keyDownOnLnbSubMenu:function(we){var el=we.currentElement;var oAnchors=null;var wElParent=$Element(el).parent();
if(wElParent.hasClass("sub_menu"))oAnchors=$A($$("\x3eli\x3ea",wElParent.parent()._element));else return;
var oAnchorIndex=oAnchors.indexOf(el);var oNextAnchorIndex=null;switch(we.key().keyCode){case nhn.Kin.Utility.KEY.CODE.DOWN:oNextAnchorIndex=
oAnchorIndex+1;if(oNextAnchorIndex===oAnchors.length())oNextAnchorIndex=0;break;case nhn.Kin.Utility.KEY.CODE.UP:oNextAnchorIndex=
oAnchorIndex-1;if(oNextAnchorIndex<0)oNextAnchorIndex=oAnchors.length()-1;break;case nhn.Kin.Utility.KEY.CODE.ESC:var parentLnbMenu=
el.parentElement.parentElement.parentElement;$Element(parentLnbMenu).addClass("on");$$.getSingle("\x3ea",
parentLnbMenu).focus();this._hideLNBMenu(parentLnbMenu);break;case nhn.Kin.Utility.KEY.CODE.LEFT:var parentLnbMenu=
el.parentElement.parentElement.parentElement;var parentLnbPrevMenu=parentLnbMenu.previousElementSibling;
$Element(parentLnbPrevMenu).addClass("on");$$.getSingle("\x3ea",parentLnbPrevMenu).focus();this._hideLNBMenu(parentLnbMenu);
break;case nhn.Kin.Utility.KEY.CODE.RIGHT:var parentLnbMenu=el.parentElement.parentElement.parentElement;
var parentLnbNextMenu=parentLnbMenu.nextElementSibling;this._hideLNBMenu(parentLnbMenu);$Element(parentLnbNextMenu).addClass("on");
$$.getSingle("\x3ea",parentLnbNextMenu).focus();break;default:return}el.setAttribute("tabindex","-1");
we.stop();if(oNextAnchorIndex!=null){oAnchors.get(oNextAnchorIndex).setAttribute("tabindex","0");oAnchors.get(oNextAnchorIndex).focus()}},
_keydownFromLastLnbSubMenu:function(we){var oKey=we.key();if(oKey.shift||oKey.keyCode!=9)return;var oLastLnbMenu=
this._oElement["lnbMenu"].get(this._oElement["lnbMenu"].length()-1);if(oLastLnbMenu){this._elCurrentLNBMenu=
null;setTimeout($Fn(function(oLastLnbMenu){if(this._bMouseOver&&oLastLnbMenu==this._elCurrentLNBMenu)return;
this._hideLNBMenu(oLastLnbMenu)},this).bind(oLastLnbMenu),this._nMouseOutInterval)}},
_setCurrentMenu:function(questionType){var nLnbIdx=this._oDirectoryToIdx.home||1;var sLocationPathName=
location.pathname;var oMatches=sLocationPathName.match(/^\/([^\/]+)\//);if(oMatches){var sPath=oMatches[1];
if(sPath==="qna")if(sLocationPathName==="/qna/questionList.nhn"||sLocationPathName==="/qna/questionList.naver")nLnbIdx=
this._oDirectoryToIdx.questionList||2;else if(questionType&&(questionType==="TODAY"||questionType==="SUGGESTION"))nLnbIdx=
-1;else if(oMatches=location.search.match(/dirId=([0-9]+)/))nLnbIdx=this._oDirectoryToIdx["qna"][nhn.Kin.Utility.getD1Id(oMatches[1])]||
2;else nLnbIdx=this._oDirectoryToIdx["qna"]["kin"]||2;else if(sPath==="scholarship")nLnbIdx=this._oDirectoryToIdx["other"]["volunteer"];
else nLnbIdx=this._oDirectoryToIdx["other"][sPath]||-1}try{if(nLnbIdx>0){this._elMenuOnInit=this._oElement["lnbMenu"].$value()[nLnbIdx-
1];this._wElement["lnb"].child()[nLnbIdx-1].addClass("on");this._setBlindMenuName(this._elMenuOnInit);
var wElAnchor=$Element($$.getSingle("\x3ea",this._elMenuOnInit));if(wElAnchor)wElAnchor.attr("aria-current",
"page")}}catch(e){}},
_setBlindMenuName:function(elLi){var elEm=$$.getSingle("\x3ea\x3eem",elLi);if(elEm){var menuName=elEm.innerText;
var wElDiv=this._wElement["containerFluidContentInner"];if(wElDiv&&menuName&&menuName.length!==0)wElDiv.prependHTML('\x3ch3 class\x3d"blind"\x3e'+
menuName+" \uc601\uc5ed\x3c/h3\x3e")}},
_destroy:function(){if(!this._oElement||!this._wEvent)return;if(this._wEvent["mouseOverLNB"])this._wEvent["mouseOverLNB"].detach(this._oElement["lnbMenu"],
"mouseover");if(this._wEvent["mouseOutLNB"])this._wEvent["mouseOutLNB"].detach(this._oElement["lnbMenu"],
"mouseout");if(this._wEvent["focusLNB"])this._wEvent["focusLNB"].detach(this._oElement["lnbMenuAnchor"],
"focus");if(this._wEvent["blurLNB"])this._wEvent["blurLNB"].detach(this._oElement["lnbMenuAnchor"],"blur");
if(this._wEvent["keydownFromLastLnbSubMenu"])this._wEvent["keydownFromLastLnbSubMenu"].detach(this._oElement["lastLnbSubMenuAnchor"],
"keydown");if(this._wEvent["keyDownLNBMenuAnchor"])this._wEvent["keyDownLNBMenuAnchor"].detach(this._wEvent["keyDownLNBMenuAnchor"],
"keydown");if(this._wEvent["keyDownLNBSubMenuAnchor"])this._wEvent["keyDownLNBSubMenuAnchor"].detach(this._wEvent["keyDownLNBSubMenuAnchor"],
"keydown");this._oElement=this._wElement=this._wEvent=this._bMouseOver=this._elCurrentLNBMenu=this._oTimer=
this._nMouseOverInterval=this._nMouseOutInterval=this._oCircularRolling=this._oRollingTimer=this._oDirectoryToIdx=
null}});
function checkQuery(){var aform=document.topSearch;try{aform.submit()}catch(e){}return $("editor")?false:
true}
function goSearch(){var sUrl="http://search.naver.com/search.naver?sm\x3dsta_hty.kin\x26where\x3dnexearch";
var aform=document.topSearch;if(aform&&aform.query)sUrl+="\x26query\x3d"+encodeURIComponent(aform.query.value);
var win=window.open(sUrl,"_blank");if(!win)alert("\ud31d\uc5c5 \ucc28\ub2e8\uc744 \ud574\uc81c\ud558\uc5ec \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.\n\ud31d\uc5c5\uc774 \ucc28\ub2e8\ub418\uc5b4 \uc788\uc73c\uba74 \ubaa8\ub4e0 \uc11c\ube44\uc2a4\ub97c \uc62c\ubc14\ub85c \uc774\uc6a9\ud558\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");
else win.focus();return true}
function showComplexSearchLayer(){$Element($("detailSearchArea")).show();try{lcs_do({sti:"kin_search"})}catch(e){}if(!$("au_interest_keyword_help_layer"))return;
if($("au_interest_keyword_help_layer").style.display!="none")$("au_interest_keyword_help_layer").style.display=
"none";if($("keywordLayer")&&$("keywordLayer").style.display!="none")$("keywordLayer").style.display=
"none"}
;
if(typeof nhn.Kin=="undefined")nhn.Kin={};if(typeof nhn.Kin.Main=="undefined")nhn.Kin.Main={};
nhn.Kin.DirectoryLocation=$Class({_oElement:null,_wElement:null,_oEvent:null,_oData:null,$init:function(){if(this._setElement()){this._oData=
{bHasData:false};this._attachEvent();$Fn(this.destroy,this).attach(window,"unload")}},
destroy:function(){nhn.Kin.Utility.destroyCallbackInterestRefresh();this._detachEvent();this._oElement=
null;this._wElement=null;this._oEvent=null;this._oData=null},
_setElement:function(){this._oElement={};this._wElement={};this._oElement.location=$("au_location");if(this._oElement.location==
null)return false;this._oElement.menu_dir=$A($$("\x3eli",this._oElement.location).slice(1));this._oElement.menu_dir_submenu_lastchild=
$A($$("\x3eli\x3ediv\x3eul\x3eli:last-child\x3ea",this._oElement.location));this._oElement.add_dir=$("au_add_directory");
this._oElement.add_local=$("au_add_local");this._wElement.add_btn_area=$Element($$.getSingle("._btn_add_area",
this._oElement.location));return true},
_attachEvent:function(){this._oEvent={"DIR_click":{"action":"click","target":this._oElement.menu_dir,
"event":$Fn(this._clickDirMenu,this).attach(this._oElement.menu_dir,"click")},"DIR_blur":{"action":"blur",
"target":this._oElement.menu_dir_submenu_lastchild,"event":$Fn(this._closeDirMenu,this).attach(this._oElement.menu_dir_submenu_lastchild,
"blur")},"BODY_click":{"action":"click","target":document.body,"event":$Fn(this._clickBody,this).attach(document.body,
"click")}};if(this._oElement.add_dir)this._oEvent.ADD_DIRECTORY_click={"action":"click","target":this._oElement.add_dir,
"event":$Fn(this._onPopupAddInterest,this).attach(this._oElement.add_dir,"click")};if(this._oElement.add_local)this._oEvent.ADD_LOCAL_click=
{"action":"click","target":this._oElement.add_local,"event":$Fn(this._onPopupAddInterest,this).attach(this._oElement.add_local,
"click")}},
_detachEvent:function(){for(var x in this._oEvent)this._oEvent[x].event.detach(this._oEvent[x].target,
this._oEvent[x].action)},
_initializeMyInterest:function(fnSuccessCallback){if(nhn.isLogin){var oParam={type:this._oElement.add_local?
"LOCAL":"KIN"};var oAjax=new $Ajax("/ajax/getInterestList.nhn",{method:"get",onload:$Fn(function(oResponse){oResponse=
oResponse.json();if(oResponse.isSuccess){this._oData.bHasData=true;this._oData.list=oResponse.result[0].list;
if(typeof fnSuccessCallback==="function")fnSuccessCallback()}},this).bind(),
ontimeout:$Fn(function(oResponse){},this).bind(),
timeout:3});oAjax.request(oParam)}},
_existMyInterest:function(nDirId){if(this._oData.bHasData){var i,len=this._oData.list.length,sMessage;
for(i=0;i<len;i++){if(this._oData.list[i].poiId&&this._oData.list[i].poiId>0)continue;if(this._oData.list[i].dirId==
nDirId){sMessage=this._oElement.add_local?nhn.Kin.getMessage("LOCAL_001"):nhn.Kin.getMessage("INTEREST_004");
sMessage=sMessage.replace("{DIRNAME}",this._oData.list[i].dirName);alert(sMessage);return true}}}return false},
_onPopupAddInterest:function(we){nhn.Kin.Utility.callClickCode(we);if(nhn.Kin.checkRos()){we.stop();return false}if(!nhn.isLogin){nhn.Kin.Utility.openLoginPopup();
we.stop();return false}var elTarget=we.element;var nDirId=elTarget.getAttribute("dirid");if(!nDirId){var wel=
jindo.$Element(elTarget);if(wel&&wel.child()&&wel.child()[0])nDirId=wel.child()[0].attr("dirid")}if(this._oData.bHasData)this._addInterestByCondition(nDirId);
else this._initializeMyInterest($Fn(this._addInterestByCondition,this).bind(nDirId));we.stop();return false},
_addInterestByCondition:function(nDirId){if(!nDirId)return;if(this._existMyInterest(nDirId));else if(this._oElement.add_dir)nhn.Kin.Utility.addMyInterestDirectory(nDirId);
else if(this._oElement.add_local)nhn.Kin.Utility.addMyLocalDirectory(nDirId)},
_closeDirMenu:function(){var aEl=this._oElement["menu_dir"].$value();for(var i=0,wel;wel=$Element(aEl[i]);i++){elIframe=
wel.$value().getElementsByTagName("iframe")[0];if(wel.hasClass("on"))wel.removeClass("on");if(elIframe&&
elIframe.style.display!="none")elIframe.style.display="none"}},
_clickDirMenu:function(e){var el=nhn.Kin.Utility.getElementByLookUpChildElment(e.element);if(el.tagName.toLowerCase()===
"a")return true;else if(/(?:img)/i.test(el.tagName)){var elLi=e.currentElement;var welLi=$Element(elLi);
if(welLi.hasClass("on")){welLi.removeClass("on");elIframe=elLi.getElementsByTagName("iframe")[0];if(elIframe&&
elIframe.style.display!="none")elIframe.style.display="none";elLi.focus();e.stop();return false}this._closeDirMenu();
welLi.addClass("on");if($Agent().navigator().ie&&$Agent().navigator().version==6){var elIframe=elLi.getElementsByTagName("iframe")[0];
if(elIframe){var elDiv=cssquery.getSingle("div",elLi);var nWidth=elDiv.offsetWidth;var nHeight=elDiv.offsetHeight;
elIframe.style.width=nWidth+"px";elIframe.style.height=nHeight+"px";elIframe.style.display="block";elIframe=
elDiv=null}}welLi=null}e.stop();return false},
_extractParam:function(str){return str.replace(/.*_param\('([^\)]+)'\).*/g,"$1").split(",")},
_clickBody:function(e){this._closeDirMenu()},
hideAddBtn:function(){if(!this._wElement.add_btn_area)return;this._wElement.add_btn_area.hide()}});
$Fn(function(){new nhn.Kin.DirectoryLocation}).attach(window,"load");
if(typeof naver==="undefined")naver={};if(typeof naver.kin==="undefined")naver.kin={};
naver.kin.SimpleBanner=$Class({_oElement:null,_wElement:null,_oEvent:null,$init:function(htOption){this._oOption=
htOption||{};if(!this._oOption)return;this._setElement();this._setEvent();this._setInitDisplay()},
_setElement:function(){this._oElement={};this._oElement["bannerArea"]=$(this._oOption.sBannerId);this._oElement["bannerCloseBtnList"]=
$$("._bannerClose",this._oElement["bannerArea"]);this._wElement={};this._wElement["bannerArea"]=$Element(this._oElement["bannerArea"]);
this._wElement["bannerCloseBtnList"]=$ElementList(this._oElement["bannerCloseBtnList"])},
_setEvent:function(){this._oEvent={};if(this._oElement["bannerCloseBtnList"])this._oEvent["bannerCloseBtnList"]=
$Fn(this._onClickBannerCloseBtn,this).attach(this._oElement["bannerCloseBtnList"],"click")},
_setInitDisplay:function(){if(this._wElement["bannerArea"]&&!this._wElement["bannerArea"].visible())this._wElement["bannerArea"].show()},
_onClickBannerCloseBtn:function(we){we.stop();if(this._wElement["bannerArea"].visible())this._wElement["bannerArea"].hide()}});
if(typeof nhn=="undefined")nhn={};if(typeof nhn.Kin=="undefined")nhn.Kin={};
nhn.Kin.ChatMenu=jindo.$Class({_oElement:null,_wElement:null,_wEvent:null,_bIsCounselor:false,_AJAX_URL:"/ajax/counseling/hasUnreadMessagesAjax.naver",
_bIsLoaded:false,$init:function(){this._setElement();this._setEvent()},
_setElement:function(){this._oElement={};this._oElement["chatButtonArea"]=jindo.$$.getSingle("div._chatButtonArea");
this._oElement["chatButton"]=jindo.$$.getSingle("#chatButton",this._oElement["chatButtonArea"]);this._oElement["chatMenu"]=
jindo.$$.getSingle("#chatMenu",this._oElement["chatButtonArea"]);this._wElement={};this._wElement["chatButton"]=
jindo.$Element(this._oElement["chatButton"]);this._wElement["chatMenu"]=jindo.$Element(this._oElement["chatMenu"]);
this._requestAjax()},
_requestAjax:function(){var oOption={method:"get",timeout:5,onload:jindo.$Fn(this._setNewIcons,this).bind(),
ontimeout:jindo.$Fn(function(){},this).bind(),
onerror:jindo.$Fn(function(){},this).bind()};
var oAjax=new jindo.$Ajax(this._AJAX_URL,oOption);oAjax.request()},
_setNewIcons:function(response){var oResponse=response.json();if(!response||!oResponse||!oResponse.result)return;
var oResult=oResponse.result;this._bIsLoaded=true;this._bIsCounselor=oResult.isCounselor;var oElButtonNewIcon=
jindo.$$.getSingle("i.icon_new",this._oElement["chatButton"]);var wElButtonNewIcon=jindo.$Element(oElButtonNewIcon);
if(oResult.hasCounseleeUnreadMessage||oResult.hasCounselorUnreadMessage)wElButtonNewIcon.show();if(!this._bIsCounselor)return;
if(oResult.hasCounseleeUnreadMessage){var oElCounseleeNewIcon=jindo.$$.getSingle("i._counseleeNewIcon",
this._oElement["chatMenu"]);var wElCounseleeNewIcon=jindo.$Element(oElCounseleeNewIcon);wElCounseleeNewIcon.attr("style",
"")}if(oResult.hasCounselorUnreadMessage){var oElCounselorNewIcon=jindo.$$.getSingle("i._counselorNewIcon",
this._oElement["chatMenu"]);var wElCounselorNewIcon=jindo.$Element(oElCounselorNewIcon);wElCounselorNewIcon.attr("style",
"")}},
_setEvent:function(){this._wEvent={};if(this._wElement["chatButton"])this._wEvent["clickChatButton"]=
jindo.$Fn(this._onClickChatButton,this).attach(this._wElement["chatButton"].$value(),"click")},
_onClickChatButton:function(event){if(!this._bIsLoaded)this._requestAjax();if(this._bIsCounselor)this._toggleChatMenu();
else window.open("/counseling/purchases","_blank")},
_toggleChatMenu:function(){var wElChatMenu=this._wElement["chatMenu"];if(wElChatMenu.visible()){wElChatMenu.hide();
wElChatMenu.attr("aria-hidden","true")}else{wElChatMenu.show();wElChatMenu.attr("aria-hidden","false")}},
destroy:function(){if(this._wEvent)if(this._wEvent["clickChatButton"])this._wEvent["clickChatButton"].detach(this._wElement["chatButton"].$value(),
"click");this._wEvent=this._oElement=this._wElement=null}});
