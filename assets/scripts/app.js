!function(){"use strict";function e(e){d.push(e),1==d.length&&u()}function t(){for(;d.length;)d[0](),d.shift()}function n(e){this.a=f,this.b=void 0,this.f=[];var t=this;try{e(function(e){r(t,e)},function(e){o(t,e)})}catch(e){o(t,e)}}function a(e){return new n(function(t,n){n(e)})}function i(e){return new n(function(t){t(e)})}function r(e,t){if(e.a==f){if(t==e)throw new TypeError;var n=!1;try{var a=t&&t.then;if(null!=t&&"object"==typeof t&&"function"==typeof a)return void a.call(t,function(t){n||r(e,t),n=!0},function(t){n||o(e,t),n=!0})}catch(t){return void(n||o(e,t))}e.a=0,e.b=t,s(e)}}function o(e,t){if(e.a==f){if(t==e)throw new TypeError;e.a=1,e.b=t,s(e)}}function s(t){e(function(){if(t.a!=f)for(;t.f.length;){var e=t.f.shift(),n=e[0],a=e[1],i=e[2],e=e[3];try{0==t.a?i("function"==typeof n?n.call(void 0,t.b):t.b):1==t.a&&("function"==typeof a?i(a.call(void 0,t.b)):e(t.b))}catch(t){e(t)}}})}function l(e){return new n(function(t,n){function a(n){return function(a){o[n]=a,r+=1,r==e.length&&t(o)}}var r=0,o=[];0==e.length&&t(o);for(var s=0;s<e.length;s+=1)i(e[s]).c(a(s),n)})}function c(e){return new n(function(t,n){for(var a=0;a<e.length;a+=1)i(e[a]).c(t,n)})}var u,d=[];u=function(){setTimeout(t)};var f=2;n.prototype.g=function(e){return this.c(void 0,e)},n.prototype.c=function(e,t){var a=this;return new n(function(n,i){a.f.push([e,t,n,i]),s(a)})},window.Promise||(window.Promise=n,window.Promise.resolve=i,window.Promise.reject=a,window.Promise.race=c,window.Promise.all=l,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype.catch=n.prototype.g)}(),function(){function e(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function t(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),e()}):document.attachEvent("onreadystatechange",function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e())})}function n(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function a(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+t+";"}function i(e){var t=e.a.offsetWidth,n=t+100;return e.f.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t&&(e.g=t,!0)}function r(t,n){function a(){var e=r;i(e)&&e.a.parentNode&&n(e.g)}var r=t;e(t.b,a),e(t.c,a),i(t)}function o(e,t){var n=t||{};this.family=e,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}function s(){if(null===d){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(e){}d=""!==e.style.font}return d}function l(e,t){return[e.style,e.weight,s()?e.stretch:"","100px",t].join(" ")}var c=null,u=null,d=null,f=null;o.prototype.load=function(e,i){var o=this,s=e||"BESbswy",d=0,h=i||3e3,p=(new Date).getTime();return new Promise(function(e,i){var g;if(null===f&&(f=!!document.fonts),(g=f)&&(null===u&&(u=/OS X.*Version\/10\..*Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),g=!u),g){g=new Promise(function(e,t){function n(){(new Date).getTime()-p>=h?t():document.fonts.load(l(o,'"'+o.family+'"'),s).then(function(t){1<=t.length?e():setTimeout(n,25)},function(){t()})}n()});var m=new Promise(function(e,t){d=setTimeout(t,h)});Promise.race([m,g]).then(function(){clearTimeout(d),e(o)},function(){i(o)})}else t(function(){function t(){var t;(t=-1!=y&&-1!=v||-1!=y&&-1!=w||-1!=v&&-1!=w)&&((t=y!=v&&y!=w&&v!=w)||(null===c&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=c&&(y==b&&v==b&&w==b||y==P&&v==P&&w==P||y==k&&v==k&&w==k)),t=!t),t&&(x.parentNode&&x.parentNode.removeChild(x),clearTimeout(d),e(o))}function u(){if((new Date).getTime()-p>=h)x.parentNode&&x.parentNode.removeChild(x),i(o);else{var e=document.hidden;!0!==e&&void 0!==e||(y=f.a.offsetWidth,v=g.a.offsetWidth,w=m.a.offsetWidth,t()),d=setTimeout(u,50)}}var f=new n(s),g=new n(s),m=new n(s),y=-1,v=-1,w=-1,b=-1,P=-1,k=-1,x=document.createElement("div");x.dir="ltr",a(f,l(o,"sans-serif")),a(g,l(o,"serif")),a(m,l(o,"monospace")),x.appendChild(f.a),x.appendChild(g.a),x.appendChild(m.a),document.body.appendChild(x),b=f.a.offsetWidth,P=g.a.offsetWidth,k=m.a.offsetWidth,u(),r(f,function(e){y=e,t()}),a(f,l(o,'"'+o.family+'",sans-serif')),r(g,function(e){v=e,t()}),a(g,l(o,'"'+o.family+'",serif')),r(m,function(e){w=e,t()}),a(m,l(o,'"'+o.family+'",monospace'))})})},"undefined"!=typeof module?module.exports=o:(window.FontFaceObserver=o,window.FontFaceObserver.prototype.load=o.prototype.load)}();var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=_self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=n.util.type(e);switch(t){case"Object":var a={};for(var i in e)e.hasOwnProperty(i)&&(a[i]=n.util.clone(e[i]));return a;case"Array":return e.map&&e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var i in t)a[i]=t[i];return a},insertBefore:function(e,t,a,i){i=i||n.languages;var r=i[e];if(2==arguments.length){a=arguments[1];for(var o in a)a.hasOwnProperty(o)&&(r[o]=a[o]);return r}var s={};for(var l in r)if(r.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(s[o]=a[o]);s[l]=r[l]}return n.languages.DFS(n.languages,function(t,n){n===i[e]&&t!=e&&(this[t]=s)}),i[e]=s},DFS:function(e,t,a,i){i=i||{};for(var r in e)e.hasOwnProperty(r)&&(t.call(e,r,e[r],a||r),"Object"!==n.util.type(e[r])||i[n.util.objId(e[r])]?"Array"!==n.util.type(e[r])||i[n.util.objId(e[r])]||(i[n.util.objId(e[r])]=!0,n.languages.DFS(e[r],t,r,i)):(i[n.util.objId(e[r])]=!0,n.languages.DFS(e[r],t,null,i)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var i,r=a.elements||document.querySelectorAll(a.selector),o=0;i=r[o++];)n.highlightElement(i,e===!0,a.callback)},highlightElement:function(t,a,i){for(var r,o,s=t;s&&!e.test(s.className);)s=s.parentNode;s&&(r=(s.className.match(e)||[,""])[1].toLowerCase(),o=n.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,s=t.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var l=t.textContent,c={element:t,language:r,grammar:o,code:l};if(n.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return void n.hooks.run("complete",c);if(n.hooks.run("before-highlight",c),a&&_self.Worker){var u=new Worker(n.filename);u.onmessage=function(e){c.highlightedCode=e.data,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(c.element),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=n.highlight(c.code,c.grammar,c.language),n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(t),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},highlight:function(e,t,i){var r=n.tokenize(e,t);return a.stringify(n.util.encode(r),i)},tokenize:function(e,t,a){var i=n.Token,r=[e],o=t.rest;if(o){for(var s in o)t[s]=o[s];delete t.rest}e:for(var s in t)if(t.hasOwnProperty(s)&&t[s]){var l=t[s];l="Array"===n.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var u=l[c],d=u.inside,f=!!u.lookbehind,h=!!u.greedy,p=0,g=u.alias;u=u.pattern||u;for(var m=0;m<r.length;m++){var y=r[m];if(r.length>e.length)break e;if(!(y instanceof i)){u.lastIndex=0;var v=u.exec(y),w=1;if(!v&&h&&m!=r.length-1){var b=r[m+1].matchedStr||r[m+1],P=y+b;if(m<r.length-2&&(P+=r[m+2].matchedStr||r[m+2]),u.lastIndex=0,v=u.exec(P),!v)continue;var k=v.index+(f?v[1].length:0);if(k>=y.length)continue;var x=v.index+v[0].length,E=y.length+b.length;if(w=3,x<=E){if(r[m+1].greedy)continue;w=2,P=P.slice(0,E)}y=P}if(v){f&&(p=v[1].length);var k=v.index+p,v=v[0].slice(p),x=k+v.length,A=y.slice(0,k),S=y.slice(x),C=[m,w];A&&C.push(A);var T=new i(s,d?n.tokenize(v,d):v,g,v,h);C.push(T),S&&C.push(S),Array.prototype.splice.apply(r,C)}}}}}return r},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var i,r=0;i=a[r++];)i(t)}}},a=n.Token=function(e,t,n,a,i){this.type=e,this.content=t,this.alias=n,this.matchedStr=a||null,this.greedy=!!i};if(a.stringify=function(e,t,i){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var r={type:e.type,content:a.stringify(e.content,t,i),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:i};if("comment"==r.type&&(r.attributes.spellcheck="true"),e.alias){var o="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,o)}n.hooks.run("wrap",r);var s="";for(var l in r.attributes)s+=(s?" ":"")+l+'="'+(r.attributes[l]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+s+">"+r.content+"</"+r.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,i=t.code,r=t.immediateClose;_self.postMessage(n.highlight(i,n.languages[a],a)),r&&_self.close()},!1),_self.Prism):_self.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,document.addEventListener&&!i.hasAttribute("data-manual")&&("loading"!==document.readyState?requestAnimationFrame(n.highlightAll,0):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,a=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-(?!\*)(\w+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(t.className.match(r)||[,""])[1]),!n){var o=(a.match(/\.(\w+)$/)||[,""])[1];n=e[o]||o}var s=document.createElement("code");s.className="language-"+n,t.textContent="",s.textContent="Loading…",t.appendChild(s);var l=new XMLHttpRequest;l.open("GET",a,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(s.textContent=l.responseText,Prism.highlightElement(s)):l.status>=400?s.textContent="✖ Error "+l.status+" while fetching file: "+l.statusText:s.textContent="✖ Error: File does not exist or is empty")},l.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}(),function(){"use strict";var e=document.querySelector.bind(document),t=e('[href="#navigation"]'),n="navigation__drawer",a=e("#navigation__drawer"),i=function(e){t.setAttribute("aria-expanded",e),document.body.setAttribute("data-menu-expanded",e),a.setAttribute("aria-hidden",!e)};t&&(t.setAttribute("role","button"),t.setAttribute("aria-controls",n),t.setAttribute("aria-expanded",!1),a.setAttribute("aria-hidden",!0),t.addEventListener("click",function(e){var n="false"===t.getAttribute("aria-expanded");i(n),e.preventDefault()}),window.addEventListener("keyup",function(e){27==e.keyCode&&i(!1)}))}(),function(){"use strict";if(document.documentElement.classList)for(var e=document.querySelectorAll.bind(document),t=function(){this.className=this.className.replace(" js-mouseout","")},n=function(){this.className+=" js-mouseout"},a=e(".c-summary"),i=a.length-1;i>=0;i--)a[i].addEventListener("js-mouseover",t,!1),a[i].addEventListener("js-mouseout",n,!1)}(),function(e,t){"use strict";if(!(t.documentElement.className.indexOf("fonts-loaded")>-1)){var n=function(e,n,a){if(void 0===n){var i="; "+t.cookie,r=i.split("; "+e+"=");return 2===r.length?r.pop().split(";").shift():null}n===!1&&(a=-1);var o="";if(a){var s=new Date;s.setTime(s.getTime()+24*a*60*60*1e3),o="; expires="+s.toGMTString()}t.cookie=e+"="+n+o+"; path=/"};e.cookie=n;var a=new FontFaceObserver("Source Sans Pro",{weight:"normal",style:"normal"}),i=new FontFaceObserver("Source Sans Pro",{weight:"700",style:"normal"}),a=new FontFaceObserver("Source Serif Pro",{weight:"normal",style:"normal"}),r=new FontFaceObserver("Source Code Pro",{weight:"normal",style:"normal"});Promise.all([a.load(),i.load(),a.load(),r.load()]).then(function(){t.documentElement.className+=" fonts-loaded",n("fonts-loaded",!0,7)})}}(this,this.document);
//# sourceMappingURL=app.js.map
