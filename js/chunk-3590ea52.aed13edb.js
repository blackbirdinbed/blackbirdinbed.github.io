(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3590ea52"],{"190a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard"},[n("Navbar"),n("Animation",{attrs:{id:t.id,userId:t.userId}}),n("Footer",{staticClass:"mt-5"})],1)},s=[],i=(n("d3b7"),n("ac1f"),n("3ca3"),n("841c"),n("ddb0"),n("2b3d"),n("d178")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"animation"},[n("b-breadcrumb",{staticClass:"breadcrumb mt-3 mb-4",attrs:{items:t.items}}),n("div",{staticClass:"container-animation mt-4"},[n("p",{staticClass:"bold header-text"},[t._v(t._s(t.animation.title))]),n("p",{staticClass:"bold subheader-text"},[t._v(t._s(t.animation.subtitle))]),n("p",{staticClass:"details-text"}),n("div",{staticClass:"container-player mx-auto"},[n("lottie-player",{staticClass:"player",attrs:{controls:"",mode:"normal",speed:t.speed}}),n("b-row",{staticClass:"container-controls rounded d-flex justify-content-between mt-2"},[n("b-col",{staticClass:"container-speed d-flex justify-content-center",attrs:{cols:"12",md:"4"}},[n("font-awesome-icon",{staticClass:"icon speed-minus",attrs:{type:"button",icon:["fas","caret-right"],size:"2x"},on:{click:function(e){return e.preventDefault(),t.setSpeed(-.1)}}}),n("div",{staticClass:"separator bold"},[t._v("Velocidad")]),n("font-awesome-icon",{staticClass:"icon speed-plus",attrs:{type:"button",icon:["fas","forward"],size:"lg"},on:{click:function(e){return e.preventDefault(),t.setSpeed(.1)}}})],1),n("b-col",{staticClass:"container-size d-flex justify-content-center",attrs:{cols:"12",md:"4"}},[n("font-awesome-icon",{staticClass:"icon size-minus",attrs:{type:"button",icon:["fas","search-minus"],size:"lg"},on:{click:function(e){return e.preventDefault(),t.setSize(-50)}}}),n("div",{staticClass:"separator bold"},[t._v("Tamaño")]),n("font-awesome-icon",{staticClass:"icon size-plus",attrs:{type:"button",icon:["fas","search-plus"],size:"lg"},on:{click:function(e){return e.preventDefault(),t.setSize(50)}}})],1)],1)],1)]),n("div",{staticClass:"container-comments mt-5 mx-auto"},[0!==t.userId?n("b-form-textarea",{staticClass:"mb-4",attrs:{id:"textarea",placeholder:"Escribe algo y pulsa enter...",rows:"3","max-rows":"6"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.addComment(e))}},model:{value:t.newComment,callback:function(e){t.newComment=e},expression:"newComment"}}):t._e(),t._l(this.comments,(function(e,a){return n("div",{key:a},[n("b-card",{staticClass:"mb-4 pointer card-text",attrs:{header:e.username}},[n("b-card-text",[t._v(t._s(e.comment))]),n("b-card-text",{staticClass:"small text-muted"},[t._v(t._s(new Date(e.created_at).toLocaleDateString("es-ES",t.options)))])],1)],1)}))],2)],1)},r=[],c=(n("a9e3"),n("1940")),l=n.n(c),d={data:function(){return{player:HTMLElement,animation:[],comments:[],newComment:"",speed:.5,size:700,options:{year:"numeric",month:"short",day:"numeric"},items:[{text:"Home",href:"/"},{text:"Secciones",href:"/sections"},{text:"Animación",active:!0}]}},mounted:function(){var t=this;this.$http.get("/animation/".concat(this.id)).then((function(e){t.animation=e.data.animation[0],void 0!==e.data.comments&&e.data.comments.length&&(t.comments=e.data.comments),t.player=document.querySelector("lottie-player"),document.querySelector(".details-text").innerHTML=t.animation.details,t.player.load(t.animation.url)})).catch((function(t){l()({text:"Algo fue mal...",icon:"error"}),console.log(t.response)}))},methods:{updateDetails:function(){document.querySelector(".details-text").innerHTML=this.animation.details},setSpeed:function(t){var e=this.speed;this.speed+=t,this.speed<.1||this.speed>1.5?this.speed=e:this.player.setSpeed(this.speed)},setSize:function(t){var e=this.size;this.size+=t,this.size<600||this.size>1e3?this.speed=e:document.querySelector(".container-player").style.width="".concat(this.size,"px")},addComment:function(){var t=this,e={comment:this.newComment,userId:this.userId};this.$http.post("/animation/".concat(this.id,"/new-comment"),e).then((function(e){void 0!==e.data.comments&&e.data.comments.length&&(t.comments=e.data.comments,t.newComment="",l()({text:"Comentario añadido!",icon:"success"}))})).catch((function(t){l()({text:"Algo fue mal...",icon:"error"}),console.log(t.response)}))}},props:{id:String,userId:Number}},u=d,m=(n("5ed0"),n("2877")),f=Object(m["a"])(u,o,r,!1,null,null,null),p=f.exports,h=n("fd2d"),b=n("fd8b"),v={beforeCreate:function(){document.body.className="home"},components:{Navbar:i["a"],Animation:p,Footer:h["a"]},data:function(){return{id:String,userId:b["a"].getUserId()}},beforeMount:function(){var t=new URLSearchParams(window.location.search);this.id=t.get("id")}},C=v,y=Object(m["a"])(C,a,s,!1,null,null,null);e["default"]=y.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),s=n("5899"),i="["+s+"]",o=RegExp("^"+i+i+"*"),r=RegExp(i+i+"*$"),c=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5ed0":function(t,e,n){"use strict";n("e62f")},7156:function(t,e,n){var a=n("861d"),s=n("d2bb");t.exports=function(t,e,n){var i,o;return s&&"function"==typeof(i=e.constructor)&&i!==n&&a(o=i.prototype)&&o!==n.prototype&&s(t,o),t}},a9e3:function(t,e,n){"use strict";var a=n("83ab"),s=n("da84"),i=n("94ca"),o=n("6eeb"),r=n("5135"),c=n("c6b6"),l=n("7156"),d=n("c04e"),u=n("d039"),m=n("7c73"),f=n("241c").f,p=n("06cf").f,h=n("9bf2").f,b=n("58a8").trim,v="Number",C=s[v],y=C.prototype,x=c(m(y))==v,w=function(t){var e,n,a,s,i,o,r,c,l=d(t,!1);if("string"==typeof l&&l.length>2)if(l=b(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,s=49;break;case 79:case 111:a=8,s=55;break;default:return+l}for(i=l.slice(2),o=i.length,r=0;r<o;r++)if(c=i.charCodeAt(r),c<48||c>s)return NaN;return parseInt(i,a)}return+l};if(i(v,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var g,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(x?u((function(){y.valueOf.call(n)})):c(n)!=v)?l(new C(w(e)),n,I):w(e)},_=a?f(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;_.length>N;N++)r(C,g=_[N])&&!r(I,g)&&h(I,g,p(C,g));I.prototype=y,y.constructor=I,o(s,v,I)}},e62f:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3590ea52.aed13edb.js.map