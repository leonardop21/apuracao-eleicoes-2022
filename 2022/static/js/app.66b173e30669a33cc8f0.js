webpackJsonp([1],{NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i=s("/ocq"),o=s("T1ft"),r=s.n(o),n={name:"Header",data:function(){return{currentUrl:"",urlShare:"",facebook:"facebook",twitter:"twitter",whatsapp:"whatsapp"}},methods:{socialShare:function(t){var a="Acompanhe no OBEMDITO a apuração das eleições no Brasil em tempo real",s="http://www.facebook.com/sharer.php?u="+this.baseUrl+"index.html%23/"+this.urlShare+"/&quote=2222&hashtag=%23OBEMDITOELEICOES2022&quote="+a,e="http://twitter.com/share?text="+a+"&url="+this.baseUrl+"index.html%23/"+this.urlShare,i="https://api.whatsapp.com/send?phone=&text="+a+" "+this.baseUrl+"index.html%23/"+this.urlShare+"%2F%3Futm_source%3DWhatsApp%26utm_medium%3DWhats%26utm_campaign%3DOBEMDITO-ELEICOES%26utm_term%3DWhatsApp";"facebook"==t?window.open(s,"facebookShare","width=626,height=436"):"twitter"==t?window.open(e,"twitterShare","width=626,height=436"):window.open(i,"_blank")}},mounted:function(){var t=this;this.$root.$on("share",function(a){t.urlShare=a})}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bg-red"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg-3 mt-3 mt-lg-4 d-flex justify-content-center"},[s("span",{staticClass:"share"},[s("a",{attrs:{href:"#"},on:{click:function(a){return t.socialShare(t.facebook)}}},[s("img",{attrs:{src:this.baseUrl+"static/img/facebook.png",alt:"Compartilhe no Facebook"}})]),t._v(" "),s("a",{attrs:{href:"#"},on:{click:function(a){return t.socialShare(t.whatsapp)}}},[s("img",{attrs:{src:this.baseUrl+"static/img/whatsapp.png",alt:"Compartilhe no WhatsApp"}})]),t._v(" "),s("a",{attrs:{href:"#"},on:{click:function(a){return t.socialShare(t.twitter)}}},[s("img",{attrs:{src:this.baseUrl+"static/img/twitter.png",alt:"Compartilhe no WhatsApp"}})])])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"col-12 col-lg-2"})])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-12 col-lg-6 mt-3 mb-3 d-flex justify-content-center"},[a("a",{attrs:{href:"https://obemdito.com.br?term=apuracao-eleicoes",target:"_blanl"}},[a("img",{staticClass:"w-50 d-block mx-auto",attrs:{src:"https://cdn-obemdito.obemdito.com.br/wp-content/uploads/2022/08/24154214/OBEMDITO.png",alt:"Logo"}})])])}]};var l=s("VU/8")(n,c,!1,function(t){s("p7AG")},null,null).exports,d=s("Xxa5"),u=s.n(d),v=s("exGp"),p=s.n(v),h={name:"CityConcilman",data:function(){return{searchQuery:null,vereadores:[],infoVereadores:[],cidadeSelecionada:{label:"",codigo:""}}},filters:{votePercentage:function(t,a){var s;return t>0?(s=100*t/a,s=(s=(s=parseFloat(s.toFixed(2))).toString()).replace(".",",")):0},politicalParty:function(t){return t.split(" - ")[0]},voteTotal:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a}},methods:{milhar:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a}},mounted:function(){var t=this;this.$root.$on("share",function(a){t.cidadeSelecionada.codigo=a}),this.$root.$on("dadosVereador",function(a){t.vereadores=a.cand,t.infoVereadores={cVotosBrancos:a.vb,pVotosBrancos:a.pvb,cVotosNulos:a.vn,pVotosNulos:a.ptvn,cVotosValidos:a.vv,pVotosValidos:a.pvvc,eleitoresTotal:a.e}})},computed:{rListarVereadores:function(){var t=this;function a(t,a){return Number(t.vap)>Number(a.vap)?-1:0}var s=this.vereadores.sort(a).slice(0,50);return this.searchQuery&&this.searchQuery.length>3?(s=this.vereadores.sort(a)).filter(function(a){return t.searchQuery.toLowerCase().split(" ").every(function(t){return a.nm.toLowerCase().includes(t)})||t.searchQuery.toLowerCase().split(" ").every(function(t){return a.cc.toLowerCase().includes(t)})}):s}}},_={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"row mt-4"},t._l(t.rListarVereadores,function(a,e){return s("div",{key:e,staticClass:"col-lg-6"},[e<=1?s("div",{staticClass:"card card-margin"},[s("div",{staticClass:"card-header no-border"},[s("div",{staticClass:"card-title mt-2"},[s("h5",["2º turno"==a.st?s("span",{staticClass:"candidate-status turno2"},[t._v("2º turno")]):"Anulado"==a.dvt?s("span",{staticClass:"candidate-status anulado"},[t._v("Anulado")]):"s"==a.e?s("span",{staticClass:"candidate-status eleito"},[t._v(t._s(a.st))]):t._e()])])]),t._v(" "),s("div",{staticClass:"card-body pt-0"},[s("div",{staticClass:"widget-49"},[s("div",{staticClass:"text-center"},[s("img",{staticClass:"d-block mx-auto img-candidate",attrs:{loading:"lazy",src:t.baseUrl+"static/fotos/oficial/"+a.sqcand+".jpeg",title:a.nm,alt:a.nm}}),t._v(" "),s("div",{staticClass:"mt-3"},[s("h4",[t._v(t._s(a.nm))]),t._v(" "),s("h6",[t._v(t._s(t._f("politicalParty")(a.cc)))]),t._v(" "),s("h5",[t._v(t._s(t._f("voteTotal")(a.vap))+" votos")]),t._v(" "),s("h5",[t._v(t._s(a.pvap)+"%")])])])])])]):t._e()])}),0)]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"main-box clearfix"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table user-list"},[s("tbody",t._l(t.rListarVereadores,function(a,e){return e>=2?s("tr",{key:e},[s("td",[s("img",{staticClass:"d-block mx-auto img-candidate img-table",attrs:{loading:"lazy",src:t.baseUrl+"static/fotos/oficial/"+a.sqcand+".jpeg",title:a.nm,alt:a.nm}})]),t._v(" "),s("td",[t._v(t._s(a.nm)+" ")]),t._v(" "),s("td",[t._v(t._s(t._f("politicalParty")(a.cc)))]),t._v(" "),s("td",[t._v(t._s(t._f("voteTotal")(a.vap))+" votos")]),t._v(" "),s("td",{staticClass:"text-center"},[s("span",{staticClass:"label label-default"},[t._v(t._s(a.pvap)+"%")])]),t._v(" "),s("td",["2º turno"==a.st?s("span",{staticClass:"candidate-status turno2"},[t._v("2º turno")]):"Anulado"==a.dvt?s("span",{staticClass:"candidate-status anulado"},[t._v("Anulado")]):"s"==a.e?s("span",{staticClass:"candidate-status eleito"},[t._v(t._s(a.st))]):t._e()])]):t._e()}),0)])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-12"},[a("h4",[this._v("GOVERNADOR")]),this._v(" "),a("span",{staticClass:"disputa governador"})])])}]},f=s("VU/8")(h,_,!1,null,null,null).exports,m={name:"CityConcilman",data:function(){return{searchQuery:null,depFederals:[],infoDepFed:[],cidadeSelecionada:{label:"",codigo:""}}},filters:{votePercentage:function(t,a){var s;return t>0?(s=100*t/a,s=(s=(s=parseFloat(s.toFixed(2))).toString()).replace(".",",")):0},politicalParty:function(t){return t.split(" - ")[0]},voteTotal:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a}},methods:{milhar:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a}},mounted:function(){var t=this;this.$root.$on("share",function(a){t.cidadeSelecionada.codigo=a}),this.$root.$on("dadosDepFed",function(a){t.depFederals=a.cand,t.infoDepFed={cVotosBrancos:a.vb,pVotosBrancos:a.pvb,cVotosNulos:a.vn,pVotosNulos:a.ptvn,cVotosValidos:a.vv,pVotosValidos:a.pvvc,eleitoresTotal:a.e}})},computed:{rListaDepFederal:function(){var t=this;function a(t,a){return Number(t.vap)>Number(a.vap)?-1:0}var s=this.depFederals.sort(a).slice(0,300);return this.searchQuery&&this.searchQuery.length>3?(s=this.depFederals.sort(a)).filter(function(a){return t.searchQuery.toLowerCase().split(" ").every(function(t){return a.nm.toLowerCase().includes(t)})||t.searchQuery.toLowerCase().split(" ").every(function(t){return a.cc.toLowerCase().includes(t)})}):s}}},C={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"row mt-4"},t._l(t.rListaDepFederal,function(a,e){return s("div",{key:e,staticClass:"col-lg-6"},[e<=1?s("div",{staticClass:"card card-margin"},[s("div",{staticClass:"card-header no-border"},[s("div",{staticClass:"card-title mt-2"},[s("h5",["2º turno"==a.st?s("span",{staticClass:"candidate-status turno2"},[t._v("2º turno")]):"Anulado"==a.dvt?s("span",{staticClass:"candidate-status anulado"},[t._v("Anulado")]):"s"==a.e?s("span",{staticClass:"candidate-status eleito"},[t._v(t._s(a.st))]):t._e()])])]),t._v(" "),s("div",{staticClass:"card-body pt-0"},[s("div",{staticClass:"widget-49"},[s("div",{staticClass:"text-center"},[s("img",{staticClass:"d-block mx-auto img-candidate",attrs:{loading:"lazy",src:t.baseUrl+"static/fotos/oficial/"+a.sqcand+".jpeg",title:a.nm,alt:a.nm}}),t._v(" "),s("div",{staticClass:"mt-3"},[s("h4",[t._v(t._s(a.nm))]),t._v(" "),s("h6",[t._v(t._s(t._f("politicalParty")(a.cc)))]),t._v(" "),s("h5",[t._v(t._s(t._f("voteTotal")(a.vap))+" votos")]),t._v(" "),s("h5",[t._v(t._s(a.pvap)+"%")])])])])])]):t._e()])}),0)]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"main-box clearfix"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table user-list"},[s("tbody",t._l(t.rListaDepFederal,function(a,e){return e>=2?s("tr",{key:e},[s("td",[s("img",{staticClass:"d-block mx-auto img-candidate img-table",attrs:{loading:"lazy",src:t.baseUrl+"static/fotos/oficial/"+a.sqcand+".jpeg",title:a.nm,alt:a.nm}})]),t._v(" "),s("td",[t._v(t._s(a.nm)+" ")]),t._v(" "),s("td",[t._v(t._s(t._f("politicalParty")(a.cc)))]),t._v(" "),s("td",[t._v(t._s(t._f("voteTotal")(a.vap))+" votos")]),t._v(" "),s("td",{staticClass:"text-center"},[s("span",{staticClass:"label label-default"},[t._v(t._s(a.pvap)+"%")])]),t._v(" "),s("td",["2º turno"==a.st?s("span",{staticClass:"candidate-status turno2"},[t._v("2º turno")]):"Anulado"==a.dvt?s("span",{staticClass:"candidate-status anulado"},[t._v(t._s(a.st))]):"s"==a.e?s("span",{staticClass:"candidate-status eleito"},[t._v(t._s(a.st))]):t._e()])]):t._e()}),0)])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-12"},[a("h4",[this._v("DEPUTADO FEDERAL")]),this._v(" "),a("span",{staticClass:"disputa federal"})])])}]},b=s("VU/8")(m,C,!1,null,null,null).exports,g={name:"deputadosEstaduais",data:function(){return{searchQuery:null,depEstaderals:[],infodepEstad:[],cidadeSelecionada:{label:"",codigo:""}}},filters:{votePercentage:function(t,a){var s;return t>0?(s=100*t/a,s=(s=(s=parseFloat(s.toFixed(2))).toString()).replace(".",",")):0},politicalParty:function(t){return t.split(" - ")[0]},voteTotal:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a}},methods:{milhar:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a}},mounted:function(){var t=this;this.$root.$on("share",function(a){t.cidadeSelecionada.codigo=a}),this.$root.$on("dadosDepEst",function(a){t.depEstaderals=a.cand,t.infodepEstad={cVotosBrancos:a.vb,pVotosBrancos:a.pvb,cVotosNulos:a.vn,pVotosNulos:a.ptvn,cVotosValidos:a.vv,pVotosValidos:a.pvvc,eleitoresTotal:a.e}})},computed:{rListaDepEstad:function(){var t=this;function a(t,a){return Number(t.vap)>Number(a.vap)?-1:0}var s=this.depEstaderals.sort(a).slice(0,300);return this.searchQuery&&this.searchQuery.length>3?(s=this.depEstaderals.sort(a)).filter(function(a){return t.searchQuery.toLowerCase().split(" ").every(function(t){return a.nm.toLowerCase().includes(t)})||t.searchQuery.toLowerCase().split(" ").every(function(t){return a.cc.toLowerCase().includes(t)})}):s}}},w={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"row mt-4"},t._l(t.rListaDepEstad,function(a,e){return s("div",{key:e,staticClass:"col-lg-6"},[e<=1?s("div",{staticClass:"card card-margin"},[s("div",{staticClass:"card-header no-border"},[s("div",{staticClass:"card-title mt-2"},[s("h5",["2º turno"==a.st?s("span",{staticClass:"candidate-status turno2"},[t._v("2º turno")]):"Anulado"==a.dvt?s("span",{staticClass:"candidate-status anulado"},[t._v("Anulado")]):"s"==a.e?s("span",{staticClass:"candidate-status eleito"},[t._v(t._s(a.st))]):t._e()])])]),t._v(" "),s("div",{staticClass:"card-body pt-0"},[s("div",{staticClass:"widget-49"},[s("div",{staticClass:"text-center"},[s("img",{staticClass:"d-block mx-auto img-candidate",attrs:{loading:"lazy",src:t.baseUrl+"static/fotos/oficial/"+a.sqcand+".jpeg",title:a.nm,alt:a.nm}}),t._v(" "),s("div",{staticClass:"mt-3"},[s("h4",[t._v(t._s(a.nm))]),t._v(" "),s("h6",[t._v(t._s(t._f("politicalParty")(a.cc)))]),t._v(" "),s("h5",[t._v(t._s(t._f("voteTotal")(a.vap))+" votos")]),t._v(" "),s("h5",[t._v(t._s(a.pvap)+"%")])])])])])]):t._e()])}),0)]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"main-box clearfix"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table user-list"},[s("tbody",t._l(t.rListaDepEstad,function(a,e){return e>=2?s("tr",{key:e},[s("td",[s("img",{staticClass:"d-block mx-auto img-candidate img-table",attrs:{loading:"lazy",src:t.baseUrl+"static/fotos/oficial/"+a.sqcand+".jpeg",title:a.nm,alt:a.nm}})]),t._v(" "),s("td",[t._v(t._s(a.nm)+" ")]),t._v(" "),s("td",[t._v(t._s(t._f("politicalParty")(a.cc)))]),t._v(" "),s("td",[t._v(t._s(t._f("voteTotal")(a.vap))+" votos")]),t._v(" "),s("td",{staticClass:"text-center"},[s("span",{staticClass:"label label-default"},[t._v(t._s(a.pvap)+"%")])]),t._v(" "),s("td",["2º turno"==a.st?s("span",{staticClass:"candidate-status turno2"},[t._v("2º turno")]):"Anulado"==a.dvt?s("span",{staticClass:"candidate-status anulado"},[t._v("Anulado")]):"s"==a.e?s("span",{staticClass:"candidate-status eleito"},[t._v(t._s(a.st))]):t._e()])]):t._e()}),0)])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-12"},[a("h4",[this._v("DEPUTADO ESTADUAL")]),this._v(" "),a("span",{staticClass:"disputa estadual"})])])}]};var y=s("VU/8")(g,w,!1,function(t){s("nrGB")},null,null).exports,x={name:"senador",data:function(){return{searchQuery:null,senadorerals:[],infosenador:[],cidadeSelecionada:{label:"",codigo:""}}},filters:{votePercentage:function(t,a){var s;return t>0?(s=100*t/a,s=(s=(s=parseFloat(s.toFixed(2))).toString()).replace(".",",")):0},politicalParty:function(t){return t.split(" - ")[0]},voteTotal:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a}},methods:{milhar:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a}},mounted:function(){var t=this;this.$root.$on("share",function(a){t.cidadeSelecionada.codigo=a}),this.$root.$on("dadosSen",function(a){t.senadorerals=a.cand,t.infosenador={cVotosBrancos:a.vb,pVotosBrancos:a.pvb,cVotosNulos:a.vn,pVotosNulos:a.ptvn,cVotosValidos:a.vv,pVotosValidos:a.pvvc,eleitoresTotal:a.e}})},computed:{rListaSenador:function(){var t=this;function a(t,a){return Number(t.vap)>Number(a.vap)?-1:0}var s=this.senadorerals.sort(a).slice(0,300);return this.searchQuery&&this.searchQuery.length>3?(s=this.senadorerals.sort(a)).filter(function(a){return t.searchQuery.toLowerCase().split(" ").every(function(t){return a.nm.toLowerCase().includes(t)})||t.searchQuery.toLowerCase().split(" ").every(function(t){return a.cc.toLowerCase().includes(t)})}):s}}},S={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"row mt-4"},t._l(t.rListaSenador,function(a,e){return s("div",{key:e,staticClass:"col-lg-6"},[e<=1?s("div",{staticClass:"card card-margin"},[s("div",{staticClass:"card-header no-border"},[s("div",{staticClass:"card-title mt-2"},[s("h5",["2º turno"==a.st?s("span",{staticClass:"candidate-status turno2"},[t._v("2º turno")]):"Anulado"==a.dvt?s("span",{staticClass:"candidate-status anulado"},[t._v("Anulado")]):"s"==a.e?s("span",{staticClass:"candidate-status eleito"},[t._v("Eleito")]):t._e()])])]),t._v(" "),s("div",{staticClass:"card-body pt-0"},[s("div",{staticClass:"widget-49"},[s("div",{staticClass:"text-center"},[s("img",{staticClass:"d-block mx-auto img-candidate",attrs:{loading:"lazy",src:t.baseUrl+"static/fotos/oficial/"+a.sqcand+".jpeg",title:a.nm,alt:a.nm}}),t._v(" "),s("div",{staticClass:"mt-3"},[s("h4",[t._v(t._s(a.nm))]),t._v(" "),s("h6",[t._v(t._s(t._f("politicalParty")(a.cc)))]),t._v(" "),s("h5",[t._v(t._s(t._f("voteTotal")(a.vap))+" votos")]),t._v(" "),s("h5",[t._v(t._s(a.pvap)+"%")])])])])])]):t._e()])}),0)]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"main-box clearfix"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table user-list"},[s("tbody",t._l(t.rListaSenador,function(a,e){return s("tr",{key:e},[s("td",[s("img",{staticClass:"d-block mx-auto img-candidate img-table",attrs:{loading:"lazy",src:t.baseUrl+"static/fotos/oficial/"+a.sqcand+".jpeg",title:a.nm,alt:a.nm}})]),t._v(" "),s("td",[t._v(t._s(a.nm)+" ")]),t._v(" "),s("td",[t._v(t._s(t._f("politicalParty")(a.cc)))]),t._v(" "),s("td",[t._v(t._s(t._f("voteTotal")(a.vap))+" votos")]),t._v(" "),s("td",{staticClass:"text-center"},[s("span",{staticClass:"label label-default"},[t._v(t._s(a.pvap)+"%")])]),t._v(" "),s("td",["2º turno"==a.st?s("span",{staticClass:"candidate-status situation-1"},[t._v("2º turno")]):"Anulado"==a.dvt?s("span",{staticClass:"candidate-status nulled situation-1"},[t._v("Anulado")]):"s"==a.e?s("span",{staticClass:"candidate-status situation-1"},[t._v("Eleito")]):t._e()])])}),0)])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-12"},[a("h4",[this._v("SENADOR")]),this._v(" "),a("span",{staticClass:"disputa senador"})])])}]};var k=s("VU/8")(x,S,!1,function(t){s("OxwB")},null,null).exports,E=s("chtd"),A=(s("qAob"),{name:"Prefeitos",data:function(){return{countdownFrase:"Atualizando",countdown:15,urnas:[],infoVereadores:[],noticias:[],infoDepFed:[],infoDepEst:[],infoSen:[],isActive:!1,apuracaoInit:!1,UniqueMayor:!1,finishLoadData:!1,finishLoadSite:!1,facebook:"facebook",twitter:"twitter",whatsapp:"whatsapp",estadoSelecionado:"br",cidadeSelecionada:{label:"Brasil",code:"br"},cidades:[]}},components:{Governador:f,DeputadoFed:b,DeputadoEst:y,Senador:k,Hooper:E.a,Slide:E.c,HooperNavigation:E.b},filters:{votePercentage:function(t,a){var s;return t>0?(s=100*t/a,s=(s=(s=parseFloat(s.toFixed(2))).toString()).replace(".",",")):0},politicalParty:function(t){return t.split(" - ")[0]},voteTotal:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a}},methods:{milhar:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a},listarCidades:function(){var t=this,a=this.baseUrl+"static/estados/estados.json";axios.get(a).then(function(a){t.cidades=a.data}).catch(function(a){t.errored=!0}).finally(function(){return t.setCidadeURL()})},setCidadeURL:function(){if(this.$router.history.current.params.id)var t=this.$router.history.current.params.id;else t=this.cidadeSelecionada.code;this.$root.$emit("share",this.cidadeSelecionada.code);var a=this.cidades.filter(function(a){return a.code===t});this.cidadeSelecionada.code=t,this.cidadeSelecionada.label=a[0].label},pegarCidadeSelecionada:function(t){this.$root.$emit("share",this.cidadeSelecionada.code),this.$router.push({path:"/"+t.code}),this.dadosUrna(this.$router.history.current.params.id)},dadosUrna:function(){var t=p()(u.a.mark(function t(){var a,s,e,i,o,r,n,c,l,d,v,p,h,_,f,m,C,b=this,g=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:!g&&this.$router.history.current.params.id&&(g=this.$router.history.current.params.id),this,this.estadoSelecionado=this.cidadeSelecionada.code,a=this.baseUrl+"static/eleicoes/1turno/json/pres/"+this.cidadeSelecionada.code+"/"+this.cidadeSelecionada.code+"-c0001-e000544-r.json",s=this.baseUrl+"static/eleicoes/1turno/json/gov/"+this.cidadeSelecionada.code+"/"+this.cidadeSelecionada.code+"-c0003-e000546-r.json",e=this.baseUrl+"static/eleicoes/1turno/json/federal/"+this.cidadeSelecionada.code+"/"+this.cidadeSelecionada.code+"-c0006-e000546-r.json",i=this.baseUrl+"static/eleicoes/1turno/json/estadual/"+this.cidadeSelecionada.code+"/"+this.cidadeSelecionada.code+"-c0007-e000546-r.json",o=this.baseUrl+"static/eleicoes/1turno/json/senador/"+this.cidadeSelecionada.code+"/"+this.cidadeSelecionada.code+"-c0005-e000546-r.json",r=this.baseUrl+"static/eleicoes/1turno/json/noticia/obemdito.json",n=axios.get(a),"br"==this.cidadeSelecionada.code?(c=axios.get(r),l=[n,c]):"df"==this.cidadeSelecionada.code?(d=axios.get(s),v=axios.get(e),p=axios.get(r),l=[n,d,v,p]):(h=axios.get(s),_=axios.get(e),f=axios.get(i),m=axios.get(o),C=axios.get(r),l=[n,h,_,f,m,C]),document.title="OBEMDITO - ATUALIZANDO...",this.finishLoadData=!0,this.finishLoadSite=!1,axios.all(l).then(axios.spread(function(){for(var t=arguments.length,a=Array(t),s=0;s<t;s++)a[s]=arguments[s];var e=a[0];if("br"==b.cidadeSelecionada.code&&(b.noticias=a[1].data),"br"!=b.cidadeSelecionada.code){var i=a[1].data,o=a[2].data,r=a[3].data;b.infoVereadores=i,b.infoDepFed=o,b.noticias=r,b.$root.$emit("dadosVereador",b.infoVereadores),b.$root.$emit("dadosDepFed",b.infoDepFed)}if("df"!=b.cidadeSelecionada.code&&"br"!=b.cidadeSelecionada.code){var n=a[3].data,c=a[4].data,l=a[5].data;b.infoDepEst=n,b.infoSen=c,b.noticias=l,b.$root.$emit("dadosDepEst",b.infoDepEst),b.$root.$emit("dadosSen",b.infoSen)}b.urnas={barraAtual:"Brasil",localAtual:b.cidadeSelecionada.label,totalDeUrnas:e.data.s,urnasApuradas:e.data.st,eleitoresTotal:e.data.e,eleitoresComparecimento:e.data.c,eleitoreAbstencao:e.data.a,candidatos:e.data.cand,cVotosBrancos:e.data.vb,pVotosBrancos:e.data.pvb,cVotosNulos:e.data.vn,pVotosNulos:e.data.ptvn,cVotosValidos:e.data.vv,pVotosValidos:e.data.pvvc},b.UniqueMayor=e.data.cand.length<2,b.urnas.votantes=100*b.urnas.eleitoresComparecimento/b.urnas.eleitoresTotal,isNaN(b.urnas.votantes)&&(b.urnas.votantes=0),b.urnas.votantes=parseFloat(b.urnas.votantes.toFixed(2)),b.urnas.votantesP=b.urnas.votantes.toString().split(",")[0],b.urnas.ausentes=100*b.urnas.eleitoreAbstencao/b.urnas.eleitoresTotal,isNaN(b.urnas.ausentes)&&(b.urnas.ausentes=0),b.urnas.ausentes=parseFloat(b.urnas.ausentes.toFixed(2)),b.urnas.ausentesP=b.urnas.ausentes.toString().split(",")[0],b.urnas.apuradas=100*b.urnas.urnasApuradas/b.urnas.totalDeUrnas,b.urnas.apuradas=parseFloat(b.urnas.apuradas.toFixed(2)),b.urnas.apuradas=b.urnas.apuradas.toString(),b.urnas.apuradas=b.urnas.apuradas.replace(".",","),b.urnas.tipo=1,0===parseInt(b.urnas.urnasApuradas)&&(b.apuracaoInit=!0)})).finally(function(){document.title="OBEMDITO ELEIÇÕES 2022: Apuração de votos, resultados e candidatos eleitos",b.finishLoadData=!1,b.finishLoadSite=!0}).catch(function(t){alert("Ocorreu um erro ao tentar exibir os dados da eleição, por favor, tente recarregar a página"),b.finishLoadData=!1,document.title="OBEMDITO ELEIÇÕES 2022: Apuração de votos, resultados e candidatos eleitos"});case 15:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),countDownUpdate:function(){var t=this;setInterval(function(){t.countdown-=1},1e3)},socialShare:function(t){var a="Acompanhe no #OBEMDITO a apuração das eleições no Brasil em tempo real",s="http://www.facebook.com/sharer.php?u="+this.baseUrl+"index.html%23/"+this.cidadeSelecionada.code+"&quote=2222&hashtag=%23OBEMDITO&quote="+a,e="http://twitter.com/share?text="+a+"}&url="+this.baseUrl+"index.html/%23/"+this.cidadeSelecionada.code,i="https://api.whatsapp.com/send?phone=&text="+a+" "+this.baseUrl+"%23/index.html"+this.cidadeSelecionada.code+"%2F%3Futm_source%3DWhatsApp%26utm_medium%3DWhats%26utm_campaign%3DOBEMDITO-ELEICOES%26utm_term%3DWhatsApp";"facebook"==t?window.open(s,"facebookShare","width=626,height=436"):"twitter"==t?window.open(e,"twitterShare","width=626,height=436"):window.open(i,"_blank")}},mounted:function(){var t=this;void 0==this.$router.history.current.params.id?this.cidadeSelecionada.code="br":this.cidadeSelecionada.code=this.$router.history.current.params.id,this.listarCidades(),this.dadosUrna(this.$router.history.current.params.id),setInterval(p()(u.a.mark(function a(){return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.dadosUrna(t.$router.history.current.params.id),t.countdown=16;case 2:case"end":return a.stop()}},a,t)})),15e3),this.countDownUpdate(),this.finishLoadSite=!0},computed:{listaPrefeitos:function(){if(void 0!==this.urnas.candidatos){return this.urnas.candidatos.sort(function(t,a){return Number(t.vap)>Number(a.vap)?-1:0})}}},beforeDestroy:function(){this.urnas.destroy(),this.infoVereadores.destroy()}}),D={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"loader"},[t.finishLoadSite?t._e():s("p",[t._v("\n        Atualizando...\n      ")]),t._v(" "),t.finishLoadSite?s("p",[t._v("\n       Próxima atualização em: "+t._s(t.countdown)+"\n      ")]):t._e()]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-12 col-lg-2"},[s("div",{staticStyle:{"background-color":"#28A745",height:"37px"},attrs:{id:"last-news-top-fade"}},[s("p",{staticClass:"text-white text-center",staticStyle:{padding:"8.3px 0",margin:"0","font-size":"14px"}},[s("img",{staticClass:"aovivo-news",attrs:{src:this.baseUrl+"static/img/live.png"}}),t._v("\n                AO VIVO\n              ")])])]),t._v(" "),s("div",{staticClass:"col-12 col-lg-10 last-news-transiction",staticStyle:{color:"#000"}},[s("div",{staticClass:"cycle-slide"},[s("hooper",{attrs:{autoPlay:!0,playSpeed:5e3}},t._l(t.noticias,function(a,e){return s("slide",{key:e},[s("a",{attrs:{href:a.link,target:"_blank",rel:"noopener"}},[t._v("\n                      "+t._s(a.title)+"\n                    ")])])}),1)],1),t._v(" "),t._m(0)])]),t._v(" "),s("div",{staticClass:"row mt-4 justify-content-end"},[s("div",{staticClass:"col-12 col-lg-3"},[s("div",{staticClass:"search-city"},[s("v-select",{attrs:{options:t.cidades,clearable:!1},on:{input:t.pegarCidadeSelecionada},model:{value:t.cidadeSelecionada,callback:function(a){t.cidadeSelecionada=a},expression:"cidadeSelecionada"}})],1)])]),t._v(" "),s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"mr-auto p-2"},[s("h3",[t._v(t._s(t.urnas.localAtual))])]),t._v(" "),s("div",{staticClass:"p-2"},[s("h5",[t._v("Urnas apuradas "+t._s(t.urnas.apuradas)+"%")])])]),t._v(" "),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar",style:"width: "+t.urnas.votantes+"%;",attrs:{role:"progressbar","data-percent":t.urnas.votantesP,"aria-valuenow":t.urnas.votantes,"aria-valuemin":"0","aria-valuemax":"100"}}),t._v(" "),s("div",{staticClass:"progress-bar bg-warning",style:"width: "+t.urnas.ausentes+"%;",attrs:{role:"progressbar","data-percent":t.urnas.ausentesP,"aria-valuenow":t.urnas.ausentes,"aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),s("div",{staticClass:"d-flex"},[s("div",{staticClass:"mr-auto p-2"},[t._v(t._s(t._f("voteTotal")(t.urnas.eleitoresTotal))+" eleitores")]),t._v(" "),s("div",{staticClass:"p-2"},[s("span",{staticClass:"circle-blue"}),t._v(" "+t._s(t.urnas.votantes)+"% votantes ")]),t._v(" "),s("div",{staticClass:"p-2"},[s("span",{staticClass:"circle-grey"}),t._v(" "+t._s(t.urnas.ausentes)+"% ausentes ")])])])])]),t._v(" "),s("div",{staticClass:"container"},[t._m(1),t._v(" "),s("div",{staticClass:"row mt-4"},t._l(t.listaPrefeitos,function(a,e){return s("div",{key:e,staticClass:"col-lg-6"},[e<=1?s("div",{staticClass:"card card-margin"},[s("div",{staticClass:"card-header no-border"},[s("div",{staticClass:"card-title mt-2"},[s("h5",["2º turno"==a.st?s("span",{staticClass:"candidate-status turno2"},[t._v("2º turno")]):"Anulado"==a.dvt?s("span",{staticClass:"candidate-status anulado"},[t._v("Anulado")]):"s"==a.e?s("span",{staticClass:"candidate-status other"},[t._v(t._s(a.st))]):t._e()])])]),t._v(" "),s("div",{staticClass:"card-body pt-0"},[s("div",{staticClass:"widget-49"},[s("div",{staticClass:"text-center"},[s("img",{staticClass:"d-block mx-auto img-candidate",attrs:{src:t.baseUrl+"static/fotos/oficial/"+a.sqcand+".jpeg",title:a.nm,alt:a.nm}}),t._v(" "),s("div",{staticClass:"mt-3"},[s("h4",[t._v(t._s(a.nm))]),t._v(" "),s("h6",[t._v(t._s(t._f("politicalParty")(a.cc)))]),t._v(" "),s("h5",[t._v(t._s(t._f("voteTotal")(a.vap))+" votos")]),t._v(" "),s("h5",[t._v(t._s(a.pvap)+"%")])])])])])]):t._e()])}),0)]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"main-box clearfix"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table user-list"},[s("tbody",t._l(t.listaPrefeitos,function(a,e){return e>=2?s("tr",{key:e},[s("td",[s("img",{staticClass:"d-block mx-auto img-candidate img-table",attrs:{src:t.baseUrl+"static/fotos/oficial/"+a.sqcand+".jpeg",title:a.nm,alt:a.nm}})]),t._v(" "),s("td",[t._v(t._s(a.nm)+" ")]),t._v(" "),s("td",[t._v(t._s(t._f("politicalParty")(a.cc)))]),t._v(" "),s("td",[t._v(t._s(t._f("voteTotal")(a.vap))+" votos")]),t._v(" "),s("td",{staticClass:"text-center"},[s("span",{staticClass:"label label-default"},[t._v(t._s(a.pvap)+"%")])]),t._v(" "),s("td",["2º turno"==a.st?s("span",{staticClass:"candidate-status turno2"},[t._v("2º turno")]):"Anulado"==a.dvt?s("span",{staticClass:"candidate-status anulado"},[t._v(t._s(a.dvt))]):"s"==a.e?s("span",{staticClass:"candidate-status other"},[t._v(t._s(a.st))]):t._e()])]):t._e()}),0)])])])])])]),t._v(" "),"df"==t.estadoSelecionado?s("div",[s("Governador"),t._v(" "),s("DeputadoFed")],1):"br"!=t.estadoSelecionado?s("div",[s("Governador"),t._v(" "),s("Senador"),t._v(" "),s("DeputadoFed"),t._v(" "),s("DeputadoEst")],1):t._e(),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticStyle:{float:"right","margin-top":"-5px",position:"inherit","text-decoration":"underline"},attrs:{href:"https://obemdito.com.br/tag/eleicoes-2022",target:"_blank",rel:"noopener"}},[a("small",[this._v("Cobertura completa...")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-12"},[a("h4",[this._v("PRESIDENTE")]),this._v(" "),a("span",{staticClass:"disputa presidente"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-12 text-center"},[a("small",[this._v("Fonte: TSE")])])])])}]};var V={name:"CheckMobile",data:function(){return{check:!1}},methods:{mobileCheck:function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var t=document.createElement("link");t.rel="stylesheet",t.href=this.baseUrl+"/static/template/css/bootstrap.min.css",document.head.appendChild(t)}else{var a=document.createElement("link");a.rel="stylesheet",a.href=this.baseUrl+"/static/template/css/bootstrap.min.css",document.head.appendChild(a)}console.log("%cOBEMDITO","font-family: 'Times New Roman', Arial, serif; font-weight: bold; color: #289DFD; font-size: 45px;"),console.log("%cSistema desenvolvido por: ","font-family: Arial, serif;color: #000; font-size: 15px;"),console.log("%cLeonardo Nascimento","font-family: Arial, serif; color: black; font-size: 18px; font-weight: bold;"),console.log("%cleonardo.nascimento21@gmail.com","font-family: Arial, serif; color: black; font-size: 18px; font-weight: bold;"),console.log=function(){},console.info=function(){},console.warn=function(){}}},created:function(){this.mobileCheck()}},$={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},U={name:"App",data:function(){return{apiPresident:[],apiVereadores:[]}},components:{Header:l,President:s("VU/8")(A,D,!1,function(t){s("QMDL")},null,null).exports,CheckMobile:s("VU/8")(V,$,!1,null,null,null).exports}},L={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),this._v(" "),a("div",{staticClass:"score-container fullscreen"},[a("div",{staticClass:"arrow-left"}),this._v(" "),a("div",{staticClass:"arrow-right"}),this._v(" "),a("div",{staticClass:"main-content-bar max-height",attrs:{"data-max-height-selector":"body"}},[a("div",{staticClass:"main-content-space fullheight clearfix"},[this._m(0),this._v(" "),a("div",{staticClass:"disclaimer-container"}),this._v(" "),a("President")],1),this._v(" "),a("div",{staticClass:"mt-5"},[a("Header")],1)])])],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main-content-loading loading"},[s("div",{staticClass:"mask"}),t._v(" "),s("div",{staticClass:"sk-fading-circle"},[s("div",{staticClass:"sk-circle1 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle2 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle3 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle4 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle5 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle6 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle7 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle8 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle9 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle10 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle11 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle12 sk-circle"})])])}]},F=s("VU/8")(U,L,!1,null,null,null).exports;s("mtWM"),s("R870");e.a.prototype.baseUrl="https://apuracao.obemdito.com.br/eleicoes/2022/",window.axios=s("mtWM"),e.a.config.productionTip=!1,e.a.use(i.a),e.a.component("v-select",r.a);var T=[{path:"/:id",component:F}],P=new i.a({routes:T});new e.a({router:P,el:"#app",components:{App:F},template:"<App/>"})},OxwB:function(t,a){},QMDL:function(t,a){},R870:function(t,a){},nrGB:function(t,a){},p7AG:function(t,a){},qAob:function(t,a){}},["NHnr"]);