!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).gwm=e()}(this,function(){"use strict";function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function M(t){var e=t.txt,n=void 0===e?"".concat("".concat(D).concat(O).concat(k)," Top secret"):e,o=t.x,r=void 0===o?0:o,i=t.y,a=void 0===i?50:i,c=t.font,s=void 0===c?"microsoft yahe":c,u=t.color,d=void 0===u?"#000":u,h=t.fontSize,f=void 0===h?12:h,l=t.alpha,v=void 0===l?.1:l,m=t.width,p=void 0===m?158:m,w=t.height,g=void 0===w?100:w,b=t.angle,x=void 0===b?-15:b;y(this,M),this.txt=n,this.width=p,this.height=g,this.x=r,this.y=a,this.font=s,this.fontSize=f,this.color=d,this.alpha=v,this.angle=x}function l(e,n){return Object.keys(n).forEach(function(t){e.style[t]=n[t]}),e}var t=new Date,D=t.getFullYear(),O="".concat(9<=t.getMonth()?"":"0").concat(t.getMonth()+1),k="0".concat(t.getDate()),c=function(){function o(t){y(this,o);var e=(this.watermark=t).width,n=t.height;this.canvas=document.createElement("canvas"),this.canvas.setAttribute("width","".concat(e)),this.canvas.setAttribute("height","".concat(n))}return n(o,[{key:"render",value:function(){var t=this.watermark,e=t.txt,n=t.x,o=t.y,r=t.width,i=t.height,a=t.font,c=t.color,s=t.fontSize,u=t.alpha,d=t.angle,h=this.canvas.getContext("2d");return h.clearRect(0,0,r,i),h.textBaseline="top",h.textAlign="left",h.fillStyle=c,h.globalAlpha=u,h.font="".concat(s,"px ").concat(a),h.translate(n,o),h.rotate(Math.PI/180*d),h.translate(-n,-o-s),h.fillText(e,n,o+s),this.canvas.toDataURL()}}]),o}(),s=function(){function e(t){y(this,e),this.watermark=t}return n(e,[{key:"_createItem",value:function(){var t=this.watermark,e=t.txt,n=t.x,o=t.y,r=t.font,i=t.color,a=t.fontSize,c=t.alpha,s=t.angle,u=t.width,d=t.height,h=document.createElement("div");l(h,{position:"relative",width:u,height:d,flex:"0 0 ".concat(u,"px"),overflow:"hidden",pointerEvents:"none"});var f=document.createElement("span");return f.innerHTML=e,l(f,{position:"absolute",top:"".concat(o,"px"),left:"".concat(n,"px"),fontFamily:r,fontSize:"".concat(a,"px"),color:i,lineHeight:1.5,opacity:c,fontWeight:400,transform:"rotate(".concat(s,"deg)"),transformOrigin:"0 0",userSelect:"none",whiteSpace:"nowrap",overflow:"hidden"}),h.appendChild(f),h}},{key:"render",value:function(){var t=0,e=this.watermark,n=e.width,o=e.height,r=document.documentElement||document.body,i=r.clientWidth,a=r.clientHeight,c=Math.ceil(i/n),s=Math.ceil(a/o),u=document.createElement("div");for(l(u,{display:"flex",flexWrap:"wrap",width:"".concat(n*c,"px"),height:"".concat(o*s,"px")});t<c*s;t++)u.appendChild(this._createItem());return u}}]),e}(),u=function(){function e(t){y(this,e),this.watermark=t}return n(e,[{key:"render",value:function(){var t=this.watermark,e=t.txt,n=t.x,o=t.y,r=t.width,i=t.height,a=t.color,c=t.font,s=t.fontSize,u=t.alpha,d=t.angle,h='<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(r,'px" height="').concat(i,'px">\n                <text x="').concat(n,'px" y="').concat(o,'px" dy="').concat(s,'px"\n                    text-anchor="start"\n                    stroke="').concat(a,'"\n                    stroke-opacity="').concat(u,'"\n                    fill="none"\n                    transform="rotate(').concat(d,",").concat(n," ").concat(o,')"\n                    font-weight="100"\n                    font-size="').concat(s,'"\n                    font-family="').concat(c,'"\n                    >\n                    ').concat(e,"\n                </text>\n            </svg>");return"data:image/svg+xml;base64,".concat(window.btoa(unescape(encodeURIComponent(h))))}}]),e}(),i="__gwm_".concat(+new Date),a=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;function e(e,t,n){if(!a)return function(e,t,n){var o=["DOMAttrModified","DOMAttributeNameChanged","DOMCharacterDataModified","DOMElementNameChanged","DOMNodeInserted","DOMNodeInsertedIntoDocument","DOMNodeRemoved","DOMNodeRemovedFromDocument","DOMSubtreeModified"];return o.map(function(t){return e.addEventListener(t,function(){return n()},!1)}),document.body.addEventListener("DOMSubtreeModified",function(){return n()},!1),{containerObserver:{disconnect:function(){return t.removeEventListener("DOMSubtreeModified",function(){return n()},!1)}},targetObserver:{disconnect:function(){return o.map(function(t){return e.removeEventListener(t,function(){return n()},!1)})}}}}(e,t,n);var o=new a(function(t){t.forEach(function(t){t.removedNodes.forEach(function(t){t===e&&n()})})});o.observe(t,{childList:!0});var r=new MutationObserver(n);return r.observe(e,{characterData:!0,attributes:!0,childList:!0,subtree:!0}),{containerObserver:o,targetObserver:r}}function d(t){var e=t.gwmDom,n=t.opts.css,o=e||document.getElementById(i);o&&o.remove();var r=document.createElement("div");return function(t){return t in document.documentElement.style}("pointerEvents")&&(n.pointerEvents="none",n.zIndex=n.zIndex<0?"999999":n.zIndex),l(r,n),r.id=i,r}var h="canvas",f="element",v={position:"fixed",top:0,right:0,bottom:0,left:0,overflow:"hidden",zIndex:-10,backgroundRepeat:"no-repeat"};return new(function(){function t(){y(this,t)}return n(t,[{key:"creation",value:function(t){t.css=Object.assign({},v,t.css),this.opts=t,this.cancel();var e=t.mode,n=t.watch,o=t.container,r=void 0===o?document.body:o;this.wrap=function(t){if("string"!=typeof t)return t;var e=document.querySelector(t);return e||document.body}(r),this.wrap!==document.body&&(this.opts.css.position="absolute",l(this.wrap,{position:"relative"})),this.gwmDom=d(this);var i=function(t,e){var n=null,o=[h,"svg",f];switch(t&&(t=t.toLowerCase(),t=0<=o.indexOf(t)?t:""),t=t||"svg"){case h:n=new c(e);break;case"svg":n=new u(e);break;default:n=new s(e)}return n}(e,new M(t)).render();e===f?this.gwmDom.appendChild(i):this.gwmDom.style.background='url("'.concat(i,'")');var a=this.wrap.firstChild;a?this.wrap.insertBefore(this.gwmDom,a):this.wrap.appendChild(this.gwmDom),!1!==n&&(this.observer=this.observing()),t.destroy&&(this.creation=function(t){return t})}},{key:"observing",value:function(){var t=this;return e(this.gwmDom,this.wrap,function(){return t.creation(t.opts)})}},{key:"cancel",value:function(){this.observer&&function(t){var e=t.containerObserver,n=t.targetObserver;e.disconnect(),n.disconnect()}(this.observer)}}]),t}())});
