(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be7409e6"],{"0cb2":function(e,t,n){var r=n("7b0b"),a=Math.floor,c="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,u,l,s){var f=n+e.length,d=u.length,p=o;return void 0!==l&&(l=r(l),p=i),c.call(s,p,(function(r,c){var i;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(f);case"<":i=l[c.slice(1,-1)];break;default:var o=+c;if(0===o)return r;if(o>d){var s=a(o/10);return 0===s?r:s<=d?void 0===u[s-1]?c.charAt(1):u[s-1]+c.charAt(1):r}i=u[o-1]}return void 0===i?"":i}))}},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"380f":function(e,t,n){"use strict";n("41b8")},"41b8":function(e,t,n){},5319:function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),c=n("50c4"),i=n("a691"),o=n("1d80"),u=n("8aa5"),l=n("0cb2"),s=n("14c3"),f=Math.max,d=Math.min,p=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,x=v?"$":"$0";return[function(n,r){var a=o(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,a,r):t.call(String(a),n,r)},function(e,r){if(!v&&g||"string"===typeof r&&-1===r.indexOf(x)){var o=n(t,e,this,r);if(o.done)return o.value}var h=a(e),E=String(this),b="function"===typeof r;b||(r=String(r));var R=h.global;if(R){var y=h.unicode;h.lastIndex=0}var I=[];while(1){var S=s(h,E);if(null===S)break;if(I.push(S),!R)break;var m=String(S[0]);""===m&&(h.lastIndex=u(E,c(h.lastIndex),y))}for(var _="",w=0,O=0;O<I.length;O++){S=I[O];for(var $=String(S[0]),P=f(d(i(S.index),E.length),0),T=[],A=1;A<S.length;A++)T.push(p(S[A]));var U=S.groups;if(b){var j=[$].concat(T,P,E);void 0!==U&&j.push(U);var k=String(r.apply(void 0,j))}else k=l($,E,P,T,U,r);P>=w&&(_+=E.slice(w,P)+k,w=P+$.length)}return _+E.slice(w)}]}))},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),c=RegExp.prototype.exec,i=String.prototype.replace,o=c,u=function(){var e=/a/,t=/b*/g;return c.call(e,"a"),c.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],f=u||s||l;f&&(o=function(e){var t,n,a,o,f=this,d=l&&f.sticky,p=r.call(f),v=f.source,g=0,x=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),x=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(v="(?: "+v+")",x=" "+x,g++),n=new RegExp("^(?:"+v+")",p)),s&&(n=new RegExp("^"+v+"$(?!\\s)",p)),u&&(t=f.lastIndex),a=c.call(d?n:f,x),d?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:u&&a&&(f.lastIndex=f.global?a.index+a[0].length:t),s&&a&&a.length>1&&i.call(a[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(a[o]=void 0)})),a}),e.exports=o},"9f7f":function(e,t,n){"use strict";var r=n("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),c=n("b622"),i=n("9263"),o=n("9112"),u=c("species"),l=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),f=c("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var v=c(e),g=!a((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),x=g&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return t=!0,null},n[v](""),!t}));if(!g||!x||"replace"===e&&(!l||!s||d)||"split"===e&&!p){var h=/./[v],E=n(v,""[e],(function(e,t,n,r,a){return t.exec===i?g&&!a?{done:!0,value:h.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=E[0],R=E[1];r(String.prototype,e,b),r(RegExp.prototype,v,2==t?function(e,t){return R.call(e,this,t)}:function(e){return R.call(e,this)})}f&&o(RegExp.prototype[v],"sham",!0)}},dac3:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"fix-container"},c=["src"];function i(e,t,n,i,o,u){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createElementVNode"])("iframe",{width:"100%",height:"100%",src:e.htmldata,frameborder:"0"},null,8,c)])}var o=n("5530"),u=(n("5319"),n("ac1f"),n("6c02")),l={name:"index",props:{},components:{},setup:function(){var e=Object(u["c"])();Object(r["onMounted"])((function(){var n=e.query;console.log("资讯详情",e,n);var r=n.newsUrl.replace("http://static.youjiankang.net","https://www.youjiankang.net");t.htmldata=r}));var t=Object(r["reactive"])({todo:"",htmldata:""});return Object(o["a"])({},Object(r["toRefs"])(t))}};n("380f");l.render=i,l.__scopeId="data-v-5b3b73e4";t["default"]=l}}]);