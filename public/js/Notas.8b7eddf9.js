(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Notas"],{"1dde":function(t,n,e){var o=e("d039"),a=e("b622"),r=e("2d00"),i=a("species");t.exports=function(t){return r>=51||!o((function(){var n=[],e=n.constructor={};return e[i]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"65f0":function(t,n,e){var o=e("861d"),a=e("e8b5"),r=e("b622"),i=r("species");t.exports=function(t,n){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?o(e)&&(e=e[i],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},8418:function(t,n,e){"use strict";var o=e("c04e"),a=e("9bf2"),r=e("5c6c");t.exports=function(t,n,e){var i=o(n);i in t?a.f(t,i,r(0,e)):t[i]=e}},a434:function(t,n,e){"use strict";var o=e("23e7"),a=e("23cb"),r=e("a691"),i=e("50c4"),s=e("7b0b"),c=e("65f0"),d=e("8418"),u=e("1dde"),l=e("ae40"),m=u("splice"),f=l("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!m||!f},{splice:function(t,n){var e,o,u,l,m,f,g=s(this),_=i(g.length),x=a(t,_),w=arguments.length;if(0===w?e=o=0:1===w?(e=0,o=_-x):(e=w-2,o=v(p(r(n),0),_-x)),_+e-o>h)throw TypeError(b);for(u=c(g,o),l=0;l<o;l++)m=x+l,m in g&&d(u,l,g[m]);if(u.length=o,e<o){for(l=x;l<_-o;l++)m=l+o,f=l+e,m in g?g[f]=g[m]:delete g[f];for(l=_;l>_-o+e;l--)delete g[l-1]}else if(e>o)for(l=_-o;l>x;l--)m=l+o-1,f=l+e-1,m in g?g[f]=g[m]:delete g[f];for(l=0;l<e;l++)g[l+x]=arguments[l+2];return g.length=_-o+e,u}})},ae40:function(t,n,e){var o=e("83ab"),a=e("d039"),r=e("5135"),i=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,n){if(r(s,t))return s[t];n||(n={});var e=[][t],d=!!r(n,"ACCESSORS")&&n.ACCESSORS,u=r(n,0)?n[0]:c,l=r(n,1)?n[1]:void 0;return s[t]=!!e&&!a((function(){if(d&&!o)return!0;var t={length:-1};d?i(t,1,{enumerable:!0,get:c}):t[1]=1,e.call(t,u,l)}))}},b727:function(t,n,e){var o=e("0366"),a=e("44ad"),r=e("7b0b"),i=e("50c4"),s=e("65f0"),c=[].push,d=function(t){var n=1==t,e=2==t,d=3==t,u=4==t,l=6==t,m=5==t||l;return function(f,p,v,h){for(var b,g,_=r(f),x=a(_),w=o(p,v,3),y=i(x.length),C=0,E=h||s,N=n?E(f,y):e?E(f,0):void 0;y>C;C++)if((m||C in x)&&(b=x[C],g=w(b,C,_),t))if(n)N[C]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return C;case 2:c.call(N,b)}else if(u)return!1;return l?-1:d||u?u:N}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},c740:function(t,n,e){"use strict";var o=e("23e7"),a=e("b727").findIndex,r=e("44d2"),i=e("ae40"),s="findIndex",c=!0,d=i(s);s in[]&&Array(1)[s]((function(){c=!1})),o({target:"Array",proto:!0,forced:c||!d},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r(s)},c93e:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container mt-5"},[e("h1",{staticClass:"mb-5"},[t._v("Notas")]),e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.mensaje.color},on:{dismissed:function(n){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.mensaje.texto))]),t.modo_editar?e("form",{on:{submit:function(n){return n.preventDefault(),t.editarNota(t.notaEditar._id)}}},[e("h3",[t._v("Editar nota")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.notaEditar.nombre,expression:"notaEditar.nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre"},domProps:{value:t.notaEditar.nombre},on:{input:function(n){n.target.composing||t.$set(t.notaEditar,"nombre",n.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.notaEditar.descripcion,expression:"notaEditar.descripcion"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Descripcion"},domProps:{value:t.notaEditar.descripcion},on:{input:function(n){n.target.composing||t.$set(t.notaEditar,"descripcion",n.target.value)}}}),e("b-button",{staticClass:"btn-warning my-2 mr-2",attrs:{type:"submit"}},[t._v(" Editar ")]),e("b-button",{staticClass:"btn-info my-2",on:{click:function(n){t.modo_editar=!1}}},[t._v(" Cancelar ")])],1):t._e(),t.modo_editar?t._e():e("form",{on:{submit:function(n){return n.preventDefault(),t.agregarNota()}}},[e("h3",[t._v("Agregar nueva nota")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nota.nombre,expression:"nota.nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre"},domProps:{value:t.nota.nombre},on:{input:function(n){n.target.composing||t.$set(t.nota,"nombre",n.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nota.descripcion,expression:"nota.descripcion"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Descripcion"},domProps:{value:t.nota.descripcion},on:{input:function(n){n.target.composing||t.$set(t.nota,"descripcion",n.target.value)}}}),e("b-button",{staticClass:"btn-info my-2",attrs:{type:"submit"}},[t._v(" Agregar ")])],1),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.notas,(function(n,o){return e("tr",{key:o},[e("th",{attrs:{scope:"row"}},[t._v(t._s(n._id))]),e("td",[t._v(t._s(n.nombre))]),e("td",[t._v(t._s(n.descripcion))]),e("td",[e("b-button",{staticClass:"btn-warning mr-2 btn-sm",on:{click:function(e){return t.activarEdicion(n._id)}}},[t._v("Editar")]),e("b-button",{staticClass:"btn-danger btn-sm",on:{click:function(e){return t.eliminarNota(n._id)}}},[t._v("Eliminar")])],1)])})),0)])],1)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),e("th",{attrs:{scope:"col"}},[t._v("Nombre")]),e("th",{attrs:{scope:"col"}},[t._v("Descripcion")]),e("th",{attrs:{scope:"col"}},[t._v("Acciones")])])])}],r=(e("c740"),e("a434"),{name:"Nota",data:function(){return{notas:[],dismissCountDown:0,dismissSecs:8,mensaje:{texto:"",color:""},nota:{nombre:"",descripcion:""},notaEditar:{},modo_editar:!1}},created:function(){this.listarNotas()},methods:{listarNotas:function(){var t=this;this.axios.get("/notas").then((function(n){t.notas=n.data})).catch((function(t){console.log(t.response)}))},agregarNota:function(){var t=this;this.axios.post("/nueva-nota",this.nota).then((function(n){t.notas.push(n.data),t.nota.nombre="",t.nota.descripcion="",t.mensaje.color="success",t.mensaje.texto="Nota agregada satisfactoriamente!",t.showAlert()})).catch((function(n){n.response.data.error.errors.nombre.message?t.mensaje.texto=n.response.data.error.errors.nombre.message:t.mensaje.texto="Hubo un error al agregar la nota",t.mensaje.color="danger",t.showAlert()}))},eliminarNota:function(t){var n=this;this.axios.delete("/nota/".concat(t)).then((function(t){var e=n.notas.findIndex((function(n){return n._id===t.data._id}));n.notas.splice(e,1),n.mensaje.color="warning",n.mensaje.texto="Nota eliminada satisfactoriamente!",n.showAlert()})).catch((function(t){console.log(t)}))},activarEdicion:function(t){var n=this;this.modo_editar=!0,this.axios.get("/nota/".concat(t)).then((function(t){n.notaEditar=t.data})).catch((function(t){console.log(t)}))},editarNota:function(t){var n=this;this.axios.put("/nota/".concat(t),this.notaEditar).then((function(t){var e=n.notas.findIndex((function(n){return n._id===t.data._id}));n.notas[e].nombre=t.data.nombre,n.notas[e].descripcion=t.data.descripcion,n.mensaje.color="success",n.mensaje.texto="Nota editada satisfactoriamente!",n.showAlert(),n.modo_editar=!1})).catch((function(t){console.log(t)}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}),i=r,s=e("2877"),c=Object(s["a"])(i,o,a,!1,null,null,null);n["default"]=c.exports},e8b5:function(t,n,e){var o=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=Notas.8b7eddf9.js.map