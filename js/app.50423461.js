(function(){"use strict";var t={7380:function(t,e,s){var r=s(144),i=s(1096),n=s(3250),o=s(4202),a=s(5057),u=s(2469),l=s(3551),c=s(5234),p=function(){var t=this,e=t._self._c;return e(i.Z,[e(n.Z,{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(u.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e(u.Z,{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e(c.Z),e(o.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e(a.Z,[t._v("mdi-open-in-new")])],1)],1),e(l.Z,[e("GithubVuewer")],1)],1)},h=[],f=s(6035),d=function(){var t=this,e=t._self._c;return e(f.Z,[e("GithubRepo",{on:{reposelected:t.onRepoSelected}}),e("GithubArquivos",{attrs:{repo:t.repo}})],1)},v=[],m=s(4177),g=s(4437),b=s(5294),y=s(6069),_=function(){var t=this,e=t._self._c;return e("div",[e(b.Z,{staticClass:"text-center"},[e(g.Z,{attrs:{cols:"6"}},[e(m.Z,{attrs:{label:"Encontre seu usuário",items:t.userlist,loading:t.userloading,"search-input":t.usersearch,"item-text":"login"},on:{"update:searchInput":function(e){t.usersearch=e},"update:search-input":function(e){t.usersearch=e}},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),e(g.Z,{attrs:{cols:"6"}},[e(y.Z,{attrs:{items:t.repolist,loading:t.repoloading,"item-text":"name",label:"Selecione o repositorio","return-object":"","single-line":""},model:{value:t.repo,callback:function(e){t.repo=e},expression:"repo"}})],1)],1)],1)},w=[];function Z(t,e){let s=null;function r(){s&&clearTimeout(s);const r=this,i=arguments;s=setTimeout((()=>{t.apply(r,i),s=null}),e)}return r}async function x(t){let e=!0,s=[],r=1;while(e){const i=await fetch(`${t}?page=${r}`),n=await i.json();n.length>0?(s=s.concat(n),r++):e=!1}return s}const k={async search_users(t){const e=`https://api.github.com/search/users?q=${t}`,s=await fetch(e);return await s.json()},async lista_repos(t){const e=`https://api.github.com/users/${t}/repos`,s=await x(e);return s},async listaArquivos(t,e,s){const r=`https://api.github.com/repos/${t}/${e}/contents/${s}`,i=await fetch(r);return await i.json()}};var q={data:()=>({user:null,repo:null,usersearch:null,userlist:[],repolist:[],userloading:!1,repoloading:!1}),methods:{procuraUsuariosGithub:Z((async function(){this.userloading=!0;const t=await k.search_users(this.usersearch);this.userlist=t.items,this.userloading=!1}),500),async listaRepositorios(){this.repoloading=!0;const t=await k.lista_repos(this.user);this.repolist=t,this.repoloading=!1}},watch:{usersearch(){this.procuraUsuariosGithub()},user(){this.user&&this.listaRepositorios()},repo(){this.$emit("reposelected",this.repo)}}},j=q,O=s(1001),A=(0,O.Z)(j,_,w,!1,null,null,null),C=A.exports,S=s(6275),T=s(4397),$=function(){var t=this,e=t._self._c;return e("div",[e(b.Z,[e(g.Z,{attrs:{cols:"12"}},[t._l(t.pastasabertas,(function(s){return e("span",{key:s},[e(o.Z,{on:{click:function(e){return t.listaArquivos(s)}}},[t._v(" > "+t._s(s)+" ")])],1)})),e(T.Z,{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Type")]),e("th",{staticClass:"text-left"},[t._v("Title")])])]),e("tbody",t._l(t.arquivos,(function(s){return e("tr",{key:s.number},[e("td",[t._v(t._s(s.type))]),"dir"==s.type?e("td",[e(o.Z,{on:{click:function(e){return t.listaArquivos(s.path)}}},[t._v(t._s(s.path))])],1):e("td",[t._v(t._s(s.name))])])})),0)]},proxy:!0}])})],2)],1),e(b.Z,[e(g.Z,{attrs:{cols:"12"}},[t.loading?e(S.Z,{attrs:{indeterminate:"",color:"primary"}}):t._e()],1)],1)],1)},G=[],P=(s(7658),{props:["repo"],data:()=>({arquivos:[],pastasabertas:[],loading:!1,temmais:!1}),methods:{async listaArquivos(t){this.arquivos=[],this.loading=!0;const e=await k.listaArquivos(this.repo.owner.login,this.repo.name,t);if(this.arquivos=this.arquivos.concat(e),this.pastasabertas.includes(t))for(let s in this.pastasabertas)this.pastasabertas.indexOf(t)==s&&this.pastasabertas.splice(parseInt(s)+1,this.pastasabertas.length);else this.pastasabertas.push(t);this.loading=!1,this.temmais=e.length>0}},watch:{repo(){this.arquivos=[],this.repo?(this.temmais=!1,this.listaArquivos("")):(this.arquivos=[],this.temmais=!1)}}}),R=P,V=(0,O.Z)(R,$,G,!1,null,null,null),M=V.exports,E={components:{GithubRepo:C,GithubArquivos:M},data:()=>({repo:null}),methods:{onRepoSelected(t){this.repo=t}}},I=E,L=(0,O.Z)(I,d,v,!1,null,null,null),U=L.exports,F={name:"App",components:{GithubVuewer:U},data:()=>({})},N=F,z=(0,O.Z)(N,p,h,!1,null,null,null),B=z.exports,D=s(2250);r.ZP.use(D.Z);var H=new D.Z({});r.ZP.config.productionTip=!1,new r.ZP({vuetify:H,render:t=>t(B)}).$mount("#app")}},e={};function s(r){var i=e[r];if(void 0!==i)return i.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,r,i,n){if(!r){var o=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],n=t[c][2];for(var a=!0,u=0;u<r.length;u++)(!1&n||o>=n)&&Object.keys(s.O).every((function(t){return s.O[t](r[u])}))?r.splice(u--,1):(a=!1,n<o&&(o=n));if(a){t.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[r,i,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,n,o=r[0],a=r[1],u=r[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in a)s.o(a,i)&&(s.m[i]=a[i]);if(u)var c=u(s)}for(e&&e(r);l<o.length;l++)n=o[l],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(c)},r=self["webpackChunkgithub_vuewer"]=self["webpackChunkgithub_vuewer"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(7380)}));r=s.O(r)})();
//# sourceMappingURL=app.50423461.js.map