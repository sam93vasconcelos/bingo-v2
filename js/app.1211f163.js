(function(t){function a(a){for(var o,s,i=a[0],l=a[1],u=a[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(a);while(m.length)m.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],o=!0,i=1;i<e.length;i++){var l=e[i];0!==n[l]&&(o=!1)}o&&(r.splice(a--,1),t=s(s.s=e[0]))}return t}var o={},n={app:0},r=[];function s(a){if(o[a])return o[a].exports;var e=o[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=o,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)s.d(e,o,function(a){return t[a]}.bind(null,o));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="https://sam93vasconcelos.github.io/bingo-v2/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var u=0;u<i.length;u++)a(i[u]);var c=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var o=e("85ec"),n=e.n(o);n.a},"057c":function(t,a,e){},"177b":function(t,a,e){},2891:function(t,a,e){"use strict";var o=e("177b"),n=e.n(o);n.a},3522:function(t,a){t.exports="data:image/png;base64,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"},"47ae":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),n=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"container",attrs:{id:"app"}},[o("img",{staticClass:"fleft",attrs:{src:e("3522"),alt:""}}),o("h1",[o("router-link",{staticClass:"black",attrs:{to:"/"}},[t._v("BingOnline")])],1),o("hr"),o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("router-view")],1)],1)},r=[],s=(e("034f"),e("2877")),i={},l=Object(s["a"])(i,n,r,!1,null,null,null),u=l.exports,c=e("8c4f"),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",{staticClass:"text-center"},[t._v("Bem vindo ao bingOnline!")]),e("hr"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("router-link",{staticClass:"btn btn-primary element-full",attrs:{to:"/sorteio"}},[t._v("Tela de sorteio")])],1),e("div",{staticClass:"col-md-6"},[e("router-link",{staticClass:"btn btn-success element-full",attrs:{to:"/cartela"}},[t._v("Modo de cartela")])],1)])])},m=[],h=(e("caad"),e("4e82"),e("2532"),{name:"home",components:{},data:function(){return{numerosSorteados:[],sorteando:!1,ultimoSorteado:"--"}},methods:{iniciar:function(){this.sorteando=!0},terminar:function(){confirm("Deseja mesmo terminar este sorteio?")&&(this.sorteando=!1,this.numerosSorteados=[],this.ultimoSorteado="--")},sortNumber:function(t,a){return t-a},sortear:function(){var t=75,a=Math.ceil(Math.random()*t);if(this.numerosSorteados.length<t){while(this.numerosSorteados.includes(a))a=Math.ceil(Math.random()*t);this.ultimoSorteado=a;var e=this.numerosSorteados;e.push(a),e=e.sort(this.sortNumber),this.numerosSorteados=e}else alert("Todos os números foram sorteados!")}}}),f=h,v=(e("cccb"),Object(s["a"])(f,d,m,!1,null,null,null)),p=v.exports,A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-button",{attrs:{block:"",variant:"danger"},on:{click:t.terminar}},[t._v("Terminar Bingo")]),e("b-button",{attrs:{block:"",variant:"success"},on:{click:t.sortear}},[t._v("Sortear número")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("p",{staticClass:"ultimoSorteado"},[t._v(" "+t._s(t.coluna)+" - "+t._s(t.ultimoSorteado)+" ")])])]),t._l(t.numerosSorteados,(function(a){return e("span",{key:a,staticClass:"numeros"},[t._v(t._s(a))])}))],2)},b=[],g=(e("a15b"),e("ac1f"),e("1276"),{name:"home",components:{},data:function(){return{numerosSorteados:localStorage.getItem("numerosSorteados")?localStorage.getItem("numerosSorteados").split(","):[],ultimoSorteado:localStorage.getItem("ultimoSorteado")||"--"}},computed:{coluna:function(){return this.ultimoSorteado>=1&&this.ultimoSorteado<=15?"B":this.ultimoSorteado>=16&&this.ultimoSorteado<=30?"I":this.ultimoSorteado>=31&&this.ultimoSorteado<=45?"N":this.ultimoSorteado>=46&&this.ultimoSorteado<=60?"G":this.ultimoSorteado>=61&&this.ultimoSorteado<=75?"O":"--"}},methods:{terminar:function(){confirm("Deseja mesmo terminar este sorteio?")&&(this.numerosSorteados=[],this.ultimoSorteado="--",localStorage.removeItem("numerosSorteados"),localStorage.removeItem("ultimoSorteado"),this.$router.push("/"))},sortNumber:function(t,a){return t-a},sortear:function(){var t=75,a=Math.ceil(Math.random()*t);if(this.numerosSorteados.length<t){while(this.numerosSorteados.includes(a))a=Math.ceil(Math.random()*t);this.ultimoSorteado=a,localStorage.setItem("ultimoSorteado",this.ultimoSorteado);var e=this.numerosSorteados;e.push(a),e=e.sort(this.sortNumber),this.numerosSorteados=e,localStorage.setItem("numerosSorteados",this.numerosSorteados.join())}else alert("Todos os números foram sorteados!")}}}),S=g,C=(e("2891"),Object(s["a"])(S,A,b,!1,null,null,null)),w=C.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",[e("button",{staticClass:"btn btn-danger element-full",on:{click:t.refazer}},[t._v("Refazer")]),e("div",{staticClass:"linha-cartelas"},[e("div",[e("RenderLinha",{attrs:{cartao_atual:"1"}})],1),e("div",[e("RenderLinha",{attrs:{cartao_atual:"2"}})],1),e("div",[e("RenderLinha",{attrs:{cartao_atual:"3"}})],1),e("div",[e("RenderLinha",{attrs:{cartao_atual:"4"}})],1)])])])},O=[],_=(e("99af"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cartao"},[e("span",{staticClass:"letras-guia"},[t._v("B")]),e("span",{staticClass:"letras-guia"},[t._v("I")]),e("span",{staticClass:"letras-guia"},[t._v("N")]),e("span",{staticClass:"letras-guia"},[t._v("G")]),e("span",{staticClass:"letras-guia"},[t._v("O")]),e("br"),e("Linha",{attrs:{cartao_atual:t.cartao_atual,min:"1",linha_atual:"1",max:"15"}}),e("Linha",{attrs:{cartao_atual:t.cartao_atual,min:"16",linha_atual:"2",max:"30"}}),e("Linha",{attrs:{cartao_atual:t.cartao_atual,min:"31",linha_atual:"3",max:"45"}}),e("Linha",{attrs:{cartao_atual:t.cartao_atual,min:"46",linha_atual:"4",max:"60"}}),e("Linha",{attrs:{cartao_atual:t.cartao_atual,min:"61",linha_atual:"5",max:"75"}})],1)}),B=[],D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"coluna-cartela"},t._l(t.linha,(function(a,o){return e("p",{key:o,class:"linha-"+t.linha_atual+"-index-"+o+" num num-linha",attrs:{id:"cartao-"+t.cartao_atual+"-linha-"+t.linha_atual+"-index-"+o},on:{click:function(a){return t.selecionar("cartao-"+t.cartao_atual+"-linha-"+t.linha_atual+"-index-"+o)}}},[t._v(t._s(a))])})),0)},k=[],I=(e("e25e"),{props:["min","max","linha_atual","cartao_atual"],mounted:function(){var t=5;while(this.linha.length<t){var a=null;a=this.getRndInteger(parseInt(this.min),parseInt(this.max));while(this.linha.includes(a))a=this.getRndInteger(parseInt(this.min),parseInt(this.max));this.linha.push(a),this.linha=this.linha.sort(this.sortNumber)}},updated:function(){for(var t=document.querySelectorAll(".linha-3-index-2"),a=0;a<4;a++)t[a].classList.add("imagem-bingo")},data:function(){return{linha:[]}},methods:{getRndInteger:function(t,a){return Math.floor(Math.random()*(a-t))+t},sortNumber:function(t,a){return t-a},selecionar:function(t){var a=document.getElementById(t);a.classList.contains("marcado")?(a.style.backgroundColor="inherit",a.classList.remove("marcado")):(a.style.backgroundColor="#aca25b",a.className+=" marcado")}}}),E=I,R=(e("8beb"),Object(s["a"])(E,D,k,!1,null,null,null)),N=R.exports,U={props:["cartao_atual"],components:{Linha:N}},L=U,M=(e("f698"),Object(s["a"])(L,_,B,!1,null,null,null)),x=M.exports,Q={components:{RenderLinha:x},data:function(){return{qtdCartoes:4}},methods:{sortNumber:function(t,a){return t-a},refazer:function(){confirm("Deseja mesmo recomeçar?")&&this.$router.push("/")},selecionar:function(t,a){var e=document.getElementById("cartao".concat(t,"index").concat(a));e.classList.contains("marcado")?(e.style.backgroundColor="inherit",e.classList.remove("marcado")):(e.style.backgroundColor="#aca25b",e.className+=" marcado")}}},P=Q,K=(e("e5b7"),Object(s["a"])(P,y,O,!1,null,null,null)),j=K.exports;o["default"].use(c["a"]);var q=[{path:"/",name:"home",component:p},{path:"/sorteio",name:"sorteio",component:w},{path:"/cartela",name:"cartela",component:j}],G=new c["a"]({routes:q}),X=G,Y=e("5f5b");e("f9e3"),e("2dd8");o["default"].use(Y["a"]),o["default"].config.productionTip=!1,new o["default"]({router:X,render:function(t){return t(u)}}).$mount("#app")},"5ced":function(t,a,e){},"85ec":function(t,a,e){},"8beb":function(t,a,e){"use strict";var o=e("057c"),n=e.n(o);n.a},b4c0:function(t,a,e){},cccb:function(t,a,e){"use strict";var o=e("5ced"),n=e.n(o);n.a},e5b7:function(t,a,e){"use strict";var o=e("47ae"),n=e.n(o);n.a},f698:function(t,a,e){"use strict";var o=e("b4c0"),n=e.n(o);n.a}});
//# sourceMappingURL=app.1211f163.js.map