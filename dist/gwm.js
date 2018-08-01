"use strict";var now=new Date,fullYear=now.getFullYear(),month=9<=now.getMonth()?now.getMonth()+1:"0"+(now.getMonth()+1),date=now.getDate(),dateConvert=function(){return""+fullYear+month+date},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),Watermark=function e(t){var n=t.txt,r=void 0===n?"":n,a=t.x,o=void 0===a?0:a,i=t.y,c=void 0===i?50:i,s=t.font,l=void 0===s?"microsoft yahe":s,d=t.color,h=void 0===d?"#000":d,u=t.fontSize,v=void 0===u?12:u,f=t.alpha,w=void 0===f?.1:f,m=t.width,b=void 0===m?158:m,p=t.height,g=void 0===p?100:p,y=t.angle,x=void 0===y?-15:y;classCallCheck(this,e),this.txt=r||dateConvert()+" 内部资料 请勿外传",this.width=b,this.height=g,this.x=o,this.y=c,this.font=l,this.fontSize=v,this.color=h,this.alpha=w,this.angle=x},CanvasWay=function(){function r(e){classCallCheck(this,r);var t=(this.watermark=e).width,n=e.height;this.canvas=document.createElement("canvas"),this.canvas.setAttribute("width",t),this.canvas.setAttribute("height",n)}return createClass(r,[{key:"render",value:function(){var e=this.watermark,t=e.txt,n=e.x,r=e.y,a=e.width,o=e.height,i=e.font,c=e.color,s=e.fontSize,l=e.alpha,d=e.angle,h=this.canvas.getContext("2d");return h.clearRect(0,0,a,o),h.textBaseline="top",h.textAlign="left",h.fillStyle=c,h.globalAlpha=l,h.font=s+"px "+i,h.translate(n,r),h.rotate(Math.PI/180*d),h.translate(-n,-r-s),h.fillText(t,n,r+s),this.canvas.toDataURL()}}]),r}();function setStyle(e,t,n){e.style[t]=n}var bindCSS=function(t,n){return Object.keys(n).forEach(function(e){return setStyle(t,e,n[e])})},ElementWay=function(){function t(e){classCallCheck(this,t),this.watermark=e}return createClass(t,[{key:"_createItem",value:function(){var e=this.watermark,t=e.txt,n=e.x,r=e.y,a=e.font,o=e.color,i=e.fontSize,c=e.alpha,s=e.angle,l=e.width,d=e.height,h=document.createElement("div");bindCSS(h,{position:"relative",width:l,height:d,flex:"0 0 "+l+"px",overflow:"hidden",pointerEvents:"none"});var u=document.createElement("span");return u.innerHTML=t,bindCSS(u,{position:"absolute",top:r+"px",left:n+"px",fontFamily:a,fontSize:i+"px",color:o,lineHeight:1.5,opacity:c,fontWeight:400,transform:"rotate("+s+"deg)",transformOrigin:"0 0",userSelect:"none",whiteSpace:"nowrap",overflow:"hidden"}),h.appendChild(u),h}},{key:"render",value:function(){var e=this.watermark,t=e.width,n=e.height,r=document.documentElement||document.body,a=r.clientWidth,o=r.clientHeight,i=Math.ceil(a/t),c=Math.ceil(o/n),s=document.createElement("div");bindCSS(s,{display:"flex",flexWrap:"wrap",width:t*i+"px",height:n*c+"px"});for(var l=0;l<i*c;l++)s.appendChild(this._createItem());return s}}]),t}(),SvgWay=function(){function t(e){classCallCheck(this,t),this.watermark=e}return createClass(t,[{key:"render",value:function(){var e=this.watermark,t=e.txt,n=e.x,r=e.y,a=e.width,o=e.height,i=e.color,c=e.font,s=e.fontSize,l='<svg xmlns="http://www.w3.org/2000/svg" width="'+a+'px" height="'+o+'px">\n                <text x="'+n+'px" y="'+r+'px" dy="'+s+'px"\n                    text-anchor="start"\n                    stroke="'+i+'"\n                    stroke-opacity="'+e.alpha+'"\n                    fill="none"\n                    transform="rotate('+e.angle+","+n+" "+r+')"\n                    font-weight="100"\n                    font-size="'+s+'"\n                    font-family="'+c+'"\n                    >\n                    '+t+"\n                </text>\n            </svg>";return"data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(l)))}}]),t}(),_id="__gwm_"+ +new Date,MutationObserver=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,observer=function(t){if(!MutationObserver)return!1;var e=new MutationObserver(function(e){return e.forEach(function(e){return e.removedNodes.forEach(function(e){return e.id===_id&&t()})})});e.observe(document.body,{childList:!0});var n=document.getElementById(_id),r=new MutationObserver(t);return r.observe(n,{characterData:!0,attributes:!0,childList:!0,subtree:!0}),{bodyObserver:e,observer:r}},disconnect=function(e){return e.disconnect()},creator=function(){var e=document.getElementById(_id);e&&document.body.removeChild(e);var t=document.createElement("div");return bindCSS(t,{position:"fixed",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",zIndex:-100,backgroundRepeat:"no-repeat"}),t.id=_id,t},CANVAS="canvas",SVG="svg",ELEMENT="element",wayFactory=function(e,t){var n=[CANVAS,SVG,ELEMENT],r=null;switch(e&&(e=e.toLowerCase(),e=0<=n.indexOf(e)?e:""),e||(e="canvas"),e){case CANVAS:r=new CanvasWay(t);break;case SVG:r=new SvgWay(t);break;default:r=new ElementWay(t)}return r};!function(){var c={num:1,creation:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};c.opts=e,c.cancel();var t,n=e.mode,r=e.watch,a=creator(),o=new Watermark(e);t=wayFactory(n,o).render(),n===ELEMENT?a.appendChild(t):a.style.background='url("'+t+'")';var i=document.body.firstChild;return i?document.body.insertBefore(a,i):document.body.appendChild(a),!1!==r&&(c.observer=c.observing()),c},observing:function(){return observer(function(){c.cancel(),c.creation(c.opts)})},cancel:function(){c.observer&&(disconnect(c.observer.bodyObserver),disconnect(c.observer.observer),c.observer=void 0)}};window.gwm=c}();
//# sourceMappingURL=gwm.js.map
