webpackJsonp([1],{NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i=s("/ocq"),o=s("T1ft"),r=s.n(o),n={name:"Header",data:function(){return{currentUrl:"",urlShare:"",facebook:"facebook",twitter:"twitter",whatsapp:"whatsapp"}},methods:{socialShare:function(t){var a="http://www.facebook.com/sharer.php?u="+this.baseUrl+"index.html%23/"+this.urlShare+"/&quote=2222&hashtag=%23CGNELEICOES2020&quote=Acompanhe em tempo real a apuração dos votos para prefeito e vereador",s="http://twitter.com/share?text=Acompanhe em tempo real a apuração dos votos para prefeito e vereador&url="+this.baseUrl+"index.html%23/"+this.urlShare,e="https://api.whatsapp.com/send?phone=&text=Acompanhe em tempo real a apuração dos votos para prefeito e vereador "+this.baseUrl+"index.html%23/"+this.urlShare+"%2F%3Futm_source%3DWhatsApp%26utm_medium%3DWhats%26utm_campaign%3DCGN%26utm_term%3DWhatsApp";"facebook"==t?window.open(a,"facebookShare","width=626,height=436"):"twitter"==t?window.open(s,"twitterShare","width=626,height=436"):window.open(e,"_blank")}},mounted:function(){var t=this;this.$root.$on("share",function(a){t.urlShare=a})}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"gate"}),t._v(" "),s("div",{staticClass:"overlay"}),t._v(" "),s("div",{staticClass:"loading-overlay"}),t._v(" "),s("div",{staticClass:"tooltip-container"}),t._v(" "),s("div",{staticClass:"header-bar"},[s("span",{staticClass:"share"},[s("a",{attrs:{href:"#"},on:{click:function(a){return t.socialShare(t.facebook)}}},[s("i",{staticClass:"icon icon-facebook"})]),t._v(" "),s("a",{attrs:{href:"#"},on:{click:function(a){return t.socialShare(t.twitter)}}},[s("i",{staticClass:"icon icon-twitter"})]),t._v(" "),s("a",{attrs:{href:"#"},on:{click:function(a){return t.socialShare(t.whatsapp)}}},[s("i",{staticClass:"icon icon-whatsapp"})])]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{staticClass:"title"},[a("span",{staticClass:"election"},[a("a",{attrs:{href:"https://cgn.inf.br/eleicoes","data-metrics-location":"header %page%","data-metrics-action":"home_eleicoes"}},[this._v("Eleições 2020")])]),this._v(" "),a("img",{staticClass:"cgn-logo",attrs:{src:"https://i.imgur.com/2xTRzO7.jpg"}}),this._v(" "),a("span",{staticClass:"shift"},[this._v(" \n          Apuração \n          "),a("a",{staticClass:"turno1 apuracao-desktop",attrs:{href:"https://cgn.inf.br","data-metrics-location":"header %page%","data-metrics-action":"home_placar","data-turno":"1turno"}},[this._v("1º turno")])]),this._v(" "),a("span",{staticClass:"font",attrs:{title:"Os dados exibidos durante a apuração são de responsabilidade do TSE, a CGN apenas reproduz esses dados sem efetuar nenhum tipo de alterção no conteúdo dos arquivos disponibilizados."}},[this._v("Fonte: TSE")])])}]},l=s("VU/8")(n,c,!1,null,null,null).exports,d=s("Xxa5"),u=s.n(d),v=s("exGp"),p=s.n(v),h={name:"CityMaior",data:function(){return{prefeitos:[],infoPrefeitos:[]}},filters:{votePercentage:function(t){var a;return t>0?(a=100*t/107050530,a=(a=(a=parseFloat(a.toFixed(2))).toString()).replace(".",",")):0},politicalParty:function(t){return t.split(" - ")[0]},voteTotal:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a}},methods:{milhar:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a},fetchUsers:function(){var t=this,a=this.baseUrl+"/static/1turno/estado/br/br-c0001-e00295.json";axios.get(a).then(function(a){t.prefeitos=a.data.cand,t.infoPrefeitos={cVotosBrancos:a.data.vb,cVotosNulos:a.data.vn,cVotosValidos:a.data.vv,eleitoresTotal:a.data.e},t.infoPrefeitos.pVotosBrancos=100*t.infoPrefeitos.cVotosBrancos/t.infoPrefeitos.eleitoresTotal,t.infoPrefeitos.pVotosBrancos=parseFloat(t.infoPrefeitos.pVotosBrancos.toFixed(2)),t.infoPrefeitos.pVotosBrancos=t.infoPrefeitos.pVotosBrancos.toString(),t.infoPrefeitos.pVotosBrancos=t.infoPrefeitos.pVotosBrancos.replace(".",","),t.infoPrefeitos.cVotosBrancos=t.milhar(t.infoPrefeitos.cVotosBrancos),t.infoPrefeitos.pVotosNulos=100*t.infoPrefeitos.cVotosNulos/t.infoPrefeitos.eleitoresTotal,t.infoPrefeitos.pVotosNulos=parseFloat(t.infoPrefeitos.pVotosNulos.toFixed(2)),t.infoPrefeitos.pVotosNulos=t.infoPrefeitos.pVotosNulos.toString(),t.infoPrefeitos.pVotosNulos=t.infoPrefeitos.pVotosNulos.replace(".",","),t.infoPrefeitos.cVotosNulos=t.milhar(t.infoPrefeitos.cVotosNulos),t.infoPrefeitos.pVotosValidos=100*t.infoPrefeitos.cVotosValidos/t.infoPrefeitos.eleitoresTotal,t.infoPrefeitos.pVotosValidos=parseFloat(t.infoPrefeitos.pVotosValidos.toFixed(2)),t.infoPrefeitos.pVotosValidos=t.infoPrefeitos.pVotosValidos.toString(),t.infoPrefeitos.pVotosValidos=t.infoPrefeitos.pVotosValidos.replace(".",","),t.infoPrefeitos.cVotosValidos=t.milhar(t.infoPrefeitos.cVotosValidos)}).catch(function(a){console.log(a),t.errored=!0}).finally(function(){return t.loading=!1})}},mounted:function(){var t=this;this.fetchUsers(),setInterval(p()(u.a.mark(function a(){return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.fetchUsers();case 1:case"end":return a.stop()}},a,t)})),1e4)},computed:{sortedArray:function(){return this.prefeitos.sort(function(t,a){return Number(t.v)>Number(a.v)?-1:Number(t.v)<Number(a.v)?1:0})}}},f={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("hr"),s("br"),s("br"),t._v(" "),s("div",{staticClass:"city-mayor fullheight"},[s("h2",{staticClass:"heading"},[t._v("PREFEITO")]),t._v(" "),s("div",{staticClass:"lift-box",attrs:{id:"presidente"}},[s("div",{staticClass:"avatares clearfix"},[t._l(t.sortedArray,function(a,e){return s("div",{key:e,staticClass:"avatar avatar-left"},[e<=1?s("div",{staticClass:"candidate-avatar candidate-avatar-type-big candidate-status-elected"},[s("span",[s("span",{staticClass:"candidate-mask"},[s("img",{staticClass:"candidate-image",attrs:{src:"http://divulgacandcontas.tse.jus.br/candidaturas/oficial/2020/PR/75230/426/candidatos/665468/foto.jpeg",title:a.nm,alt:a.nm}})])]),t._v(" "),t._m(0,!0),t._v(" "),s("span",{staticClass:"info-candidate"},[s("span",{staticClass:"candidate-votes"},[t._v("\n\t          \t\t"+t._s(t._f("votePercentage")(a.v))+"\n\t          \t\t"),s("span",{staticClass:"percent"},[t._v("%")])]),t._v(" "),s("span",{staticClass:"candidate-name"},[t._v(t._s(a.nm))]),t._v(" "),s("span",{staticClass:"candidate-party situation-1"},[t._v(t._s(t._f("politicalParty")(a.cc)))]),t._v(" "),s("span",{staticClass:"candidate-total-votes"},[t._v(t._s(t._f("voteTotal")(a.v))+"\n\t          \t\t"),s("span",{staticClass:"candidate-total-votes-label"},[t._v("votos")])])]),t._v(" "),t._m(1,!0)]):t._e()])}),t._v(" "),s("div",{staticClass:"avatares-bg"})],2),t._v(" "),s("div",{staticClass:"mayor-list list-content"},[s("span",[s("ul",{staticClass:"list-items type-mayor"},t._l(t.sortedArray,function(a,e){return s("li",{key:e,staticClass:"list-item candidate-running-true"},[e>=2?s("ul",[s("li",{staticClass:"item-name"},[t._v(t._s(a.nm))]),t._v(" "),t._m(2,!0),t._v(" "),s("li",{staticClass:"item-small-set"},[s("ul",[s("li",{staticClass:"item-party"},[t._v(" "+t._s(t._f("politicalParty")(a.cc))+" ")]),t._v(" "),s("li",{staticClass:"item-votes-v"},[t._v(" "+t._s(t._f("voteTotal")(a.v))+" ")])])]),t._v(" "),s("li",{staticClass:"item-votes-vp"},[t._v(t._s(t._f("votePercentage")(a.v))),s("span",[t._v("%")])]),t._v(" "),s("li",{staticClass:"item-notification elected-0"})]):t._e()])}),0)])])]),t._v(" "),s("div",{staticClass:"main-votes-count mayor-votes-count clearfix"},[s("div",{staticClass:"votes-count"},[s("div",{staticClass:"item white"},[s("span",{staticClass:"label"},[t._v("BRANCOS")]),s("span",{staticClass:"total"},[t._v(t._s(this.infoPrefeitos.cVotosBrancos))]),s("span",{staticClass:"percent"},[t._v(t._s(this.infoPrefeitos.pVotosBrancos)+"%")])]),t._v(" "),s("div",{staticClass:"item null"},[s("span",{staticClass:"label"},[t._v("NULOS")]),s("span",{staticClass:"total"},[t._v(t._s(this.infoPrefeitos.cVotosNulos))]),s("span",{staticClass:"percent"},[t._v(t._s(this.infoPrefeitos.pVotosNulos)+"%")])]),t._v(" "),s("div",{staticClass:"item valid"},[s("span",{staticClass:"label"},[t._v("VÁLIDOS")]),s("span",{staticClass:"total"},[t._v(t._s(this.infoPrefeitos.cVotosValidos))]),s("span",{staticClass:"percent"},[t._v(t._s(this.infoPrefeitos.pVotosValidos)+"%")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"gauge"},[a("canvas",{staticClass:"candidate-canvas",attrs:{width:"110",height:"110"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"share"},[a("i",{staticClass:"icon icon-facebook",attrs:{"data-metrics-location":"bloco prefeitos","data-metrics-action":"compartilhar_candidato_destaque_facebook","data-image":"https://dev.cgn.inf.br/assets/eleicoes/apuracao.png","data-title":"Apuração - Prefeito: `${$mayor.nm}`","data-desc":"Veja mais em: https://dev.cgn.inf.br/eleicoes/","data-url":"https://dev.cgn.inf.br/eleicoes/"}}),this._v(" "),a("i",{staticClass:"icon icon-twitter",attrs:{"data-metrics-location":"bloco prefeitos","data-metrics-action":"compartilhar_candidato_destaque_twitter","data-title":"Apuração - Prefeito: `${$mayor.nm}`","data-desc":"Veja mais em: https://dev.cgn.inf.br/eleicoes/","data-url":"https://dev.cgn.inf.br/eleicoes/"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"item-social"},[a("span",{staticClass:"icon-facebook",attrs:{"data-metrics-location":"bloco prefeitos","data-metrics-action":"compartilhar_candidato_facebook","data-image":"https://dev.cgn.inf.br/assets/eleicoes/apuracao.png","data-title":"Apuração - Presidente: CIRO GOMES","data-desc":"Veja mais em: https://dev.cgn.inf.br/eleicoes/","data-url":"https://dev.cgn.inf.br/eleicoes/br"}}),this._v(" "),a("span",{staticClass:"icon-twitter",attrs:{"data-metrics-location":"bloco prefeitos","data-metrics-action":"compartilhar_candidato_twitter","data-title":"Apuração - Presidente: CIRO GOMES","data-desc":"Veja mais em: https://dev.cgn.inf.br/eleicoes/","data-url":"https://dev.cgn.inf.br/eleicoes/br"}})])}]},m={name:"CityConcilman",data:function(){return{searchQuery:null,vereadores:[],infoVereadores:[],cidadeSelecionada:{label:"Cascavel",codigo:"74934"}}},filters:{votePercentage:function(t,a){var s;return t>0?(s=100*t/a,s=(s=(s=parseFloat(s.toFixed(2))).toString()).replace(".",",")):0},politicalParty:function(t){return t.split(" - ")[0]},voteTotal:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a}},methods:{milhar:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a}},mounted:function(){var t=this;this.$root.$on("dadosVereador",function(a){t.vereadores=a.cand,console.log(a),t.infoVereadores={cVotosBrancos:a.vb,pVotosBrancos:a.pvb,cVotosNulos:a.vn,pVotosNulos:a.ptvn,cVotosValidos:a.vv,pVotosValidos:a.pvvc,eleitoresTotal:a.e}})},computed:{rListarVereadores:function(){var t=this;function a(t,a){return Number(t.vap)>Number(a.vap)?-1:Number(t.vap)<Number(a.vap)?0:void 0}var s=this.vereadores.sort(a).slice(0,50);return this.searchQuery&&this.searchQuery.length>3?(s=this.vereadores.sort(a)).filter(function(a){return t.searchQuery.toLowerCase().split(" ").every(function(t){return a.nm.toLowerCase().includes(t)})||t.searchQuery.toLowerCase().split(" ").every(function(t){return a.cc.toLowerCase().includes(t)})}):s}}},_={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"city-councilman fullheight"},[s("h2",{staticClass:"heading"},[t._v("VEREADORES")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"councilman-content"},[s("div",{staticClass:"city-progress-elected"},[s("div",{staticClass:"councilman-header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"councilman-search disabled-false"},[s("i",{staticClass:"icon-close"}),t._v(" "),s("div",{staticClass:"ui-widget"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"councilman-search-input suggest-input",attrs:{type:"text",name:"q",autocomplete:"off",placeholder:"Encontre candidatos para seguir a apuração"},domProps:{value:t.searchQuery},on:{input:function(a){a.target.composing||(t.searchQuery=a.target.value)}}})]),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"suggest-area suggest-area-disabled"})])]),t._v(" "),s("div",{staticClass:"councilman-list list-content"},[s("span",[s("div",{staticClass:"candidates-content"},[s("ul",{staticClass:"list-items type-councilman container-governador"},t._l(t.rListarVereadores,function(a,e){return s("li",{key:e,staticClass:"list-item list-item-candidate candidates-running-true"},[s("ul",[s("li",{staticClass:"item-favorite"},[s("div",{staticClass:"favorite-star type-candidate has-id-true theme-dark is-favorite-false",attrs:{"data-item-id":"17517"}},[s("img",{staticClass:"candidate-image",attrs:{src:"https://resultados.tse.jus.br/publico/ele2020/divulgacao/simulado/8334/fotos/rr/230000001938.jpeg",title:a.nm,alt:a.nm}})])]),t._v(" "),s("li",{staticClass:"item-name"},[t._v(t._s(a.nm))]),t._v(" "),s("li",{staticClass:"item-small-set"},[s("ul",[s("li",{staticClass:"item-party"},[t._v(t._s(t._f("politicalParty")(a.cc)))]),t._v(" "),s("li",{staticClass:"item-votes-vp"},[t._v(t._s(a.pvap)),s("span",[t._v("%")])])])]),t._v(" "),s("li",{staticClass:"item-votes-v"},[t._v(t._s(t._f("voteTotal")(a.vap)))]),t._v(" "),"s"===a.e?s("li",{staticClass:"item-notification elected-1"}):t._e(),t._v(" "),"n"===a.e?s("li",{staticClass:"item-notification elected-0"}):t._e()])])}),0)])])])])]),t._v(" "),s("div",{staticClass:"main-votes-count councilman-votes-count clearfix"},[s("div",{staticClass:"votes-count"},[s("div",{staticClass:"item white"},[s("span",{staticClass:"label"},[t._v("BRANCOS")]),s("span",{staticClass:"total"},[t._v(t._s(this.infoVereadores.cVotosBrancos))]),s("span",{staticClass:"percent"},[t._v(t._s(this.infoVereadores.pVotosBrancos)+"%")])]),t._v(" "),s("div",{staticClass:"item null"},[s("span",{staticClass:"label"},[t._v("NULOS")]),s("span",{staticClass:"total"},[t._v(t._s(this.infoVereadores.cVotosNulos))]),s("span",{staticClass:"percent"},[t._v(t._s(this.infoVereadores.pVotosNulos)+"%")])]),t._v(" "),s("div",{staticClass:"item valid"},[s("span",{staticClass:"label"},[t._v("VÁLIDOS")]),s("span",{staticClass:"total"},[t._v(t._s(this.infoVereadores.cVotosValidos))]),s("span",{staticClass:"percent"},[t._v(t._s(this.infoVereadores.pVotosValidos)+"%")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"councilman-caption-virt-elected"},[this._v("Candidatos eleitos se a apuração terminasse agora "),a("span")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"councilman-caption-elected no-expand"},[this._v("Eleito "),a("span")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"fading-circle"},[s("div",{staticClass:"circle1 circle"}),t._v(" "),s("div",{staticClass:"circle2 circle"}),t._v(" "),s("div",{staticClass:"circle3 circle"}),t._v(" "),s("div",{staticClass:"circle4 circle"}),t._v(" "),s("div",{staticClass:"circle5 circle"}),t._v(" "),s("div",{staticClass:"circle6 circle"}),t._v(" "),s("div",{staticClass:"circle7 circle"}),t._v(" "),s("div",{staticClass:"circle8 circle"}),t._v(" "),s("div",{staticClass:"circle9 circle"}),t._v(" "),s("div",{staticClass:"circle10 circle"}),t._v(" "),s("div",{staticClass:"circle11 circle"}),t._v(" "),s("div",{staticClass:"circle12 circle"})])}]};var C={name:"Prefeitos",data:function(){return{urnas:[],infoVereadores:[],UniqueMayor:!1,finishLoadData:!1,finishLoadSite:!1,facebook:"facebook",twitter:"twitter",whatsapp:"whatsapp",cidadeSelecionada:{label:"Cascavel",code:"74934"},cidades:[]}},components:{CityMayor:s("VU/8")(h,f,!1,null,null,null).exports,CityCouncilman:s("VU/8")(m,_,!1,function(t){s("aniD")},null,null).exports},filters:{votePercentage:function(t,a){var s;return t>0?(s=100*t/a,s=(s=(s=parseFloat(s.toFixed(2))).toString()).replace(".",",")):0},politicalParty:function(t){return t.split(" - ")[0]},voteTotal:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a}},methods:{milhar:function(t){for(var a="",s=(t=""+t).length-1,e=1;s>=0;s--,e++){a=(e%3==0&&s>0?".":"")+t.charAt(s)+a}return a},listarCidades:function(){var t=this,a=this.baseUrl+"/static/cidades/pr.json";axios.get(a).then(function(a){t.cidades=a.data}).catch(function(a){console.log(a),t.errored=!0}).finally(function(){return t.setCidadeURL()})},setCidadeURL:function(){if(this.$router.history.current.params.id)var t=this.$router.history.current.params.id;else t=this.cidadeSelecionada.code;this.$root.$emit("share",this.cidadeSelecionada.code);var a=this.cidades.filter(function(a){return a.code===t});this.cidadeSelecionada.code=t,this.cidadeSelecionada.label=a[0].label},pegarCidadeSelecionada:function(t){this.$root.$emit("share",this.cidadeSelecionada.code),this.$router.push({path:"/"+t.code}),this.dadosUrna(this.$router.history.current.params.id)},dadosUrna:function(){var t=p()(u.a.mark(function t(){var a,s,e,i,o=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:!r&&this.$router.history.current.params.id&&(r=this.$router.history.current.params.id),this,a=this.baseUrl+"/static/eleicoes/1turno/pr/json/pref/"+this.cidadeSelecionada.code+"/pr"+this.cidadeSelecionada.code+"-c0011-e000426-v.json",s=this.baseUrl+"/static/eleicoes/1turno/pr/json/ver/"+this.cidadeSelecionada.code+"/pr"+this.cidadeSelecionada.code+"-c0013-e000426-v.json",e=axios.get(a),i=axios.get(s),document.title="CGN - ATUALIZANDO...",this.finishLoadData=!0,this.finishLoadSite=!1,axios.all([e,i]).then(axios.spread(function(){for(var t=arguments.length,a=Array(t),s=0;s<t;s++)a[s]=arguments[s];var e=a[0],i=a[1].data;o.infoVereadores=i,o.$root.$emit("dadosVereador",o.infoVereadores),o.urnas={barraAtual:"Brasil",localAtual:o.cidadeSelecionada.label,totalDeUrnas:e.data.s,urnasApuradas:e.data.st,eleitoresTotal:e.data.e,eleitoresComparecimento:e.data.c,eleitoreAbstencao:e.data.a,candidatos:e.data.cand,cVotosBrancos:e.data.vb,pVotosBrancos:e.data.pvb,cVotosNulos:e.data.vn,pVotosNulos:e.data.ptvn,cVotosValidos:e.data.vv,pVotosValidos:e.data.pvvc},o.UniqueMayor=e.data.cand.length<2,o.urnas.votantes=100*o.urnas.eleitoresComparecimento/o.urnas.eleitoresTotal,isNaN(o.urnas.votantes)&&(o.urnas.votantes=0),o.urnas.votantes=parseFloat(o.urnas.votantes.toFixed(2)),o.urnas.votantesP=o.urnas.votantes.toString().split(",")[0],o.urnas.ausentes=100*o.urnas.eleitoreAbstencao/o.urnas.eleitoresTotal,isNaN(o.urnas.ausentes)&&(o.urnas.ausentes=0),o.urnas.ausentes=parseFloat(o.urnas.ausentes.toFixed(2)),o.urnas.ausentesP=o.urnas.ausentes.toString().split(",")[0],o.urnas.apuradas=100*o.urnas.urnasApuradas/o.urnas.totalDeUrnas,o.urnas.apuradas=parseFloat(o.urnas.apuradas.toFixed(2)),o.urnas.apuradas=o.urnas.apuradas.toString(),o.urnas.apuradas=o.urnas.apuradas.replace(".",","),o.urnas.tipo=1,0===parseInt(o.urnas.urnasApuradas)&&(o.urnas.naoIniciouApuracao=!0)})).finally(function(){document.title="CGN Eleições 2020: Apuração de votos, resultado, candidatos eleitos",o.finishLoadData=!1,o.finishLoadSite=!0}).catch(function(t){alert("Ocorreu um erro ao tentar exibir os dados da eleição, por favor, tente recarregar a página"),o.finishLoadData=!1,console.error(t),document.title="CGN Eleições 2020: Apuração de votos, resultado, candidatos eleitos"});case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),socialShare:function(t){var a="http://www.facebook.com/sharer.php?u="+this.baseUrl+"index.html%23/"+this.cidadeSelecionada.code+"&quote=2222&hashtag=%23CGNELEICOES2020&quote=Acompanhe na CGN a apuração das eleições em tempo real",s="http://twitter.com/share?text=Acompanhe na CGN a apuração das eleições em tempo real&url="+this.baseUrl+"index.html/%23/"+this.cidadeSelecionada.code,e="https://api.whatsapp.com/send?phone=&text=Acompanhe na CGN a apuração das eleições em tempo real "+this.baseUrl+"%23/index.html"+this.cidadeSelecionada.code+"%2F%3Futm_source%3DWhatsApp%26utm_medium%3DWhats%26utm_campaign%3DCGN%26utm_term%3DWhatsApp";"facebook"==t?window.open(a,"facebookShare","width=626,height=436"):"twitter"==t?window.open(s,"twitterShare","width=626,height=436"):window.open(e,"_blank")}},mounted:function(){var t=this;void 0==this.$router.history.current.params.id?this.cidadeSelecionada.code="74934":this.cidadeSelecionada.code=this.$router.history.current.params.id,this.listarCidades(),this.dadosUrna(this.$router.history.current.params.id),setInterval(p()(u.a.mark(function a(){return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.dadosUrna(t.$router.history.current.params.id),console.log("atualizado");case 2:case"end":return a.stop()}},a,t)})),6e4),this.finishLoadSite=!0},computed:{listaPrefeitos:function(){if(void 0!==this.urnas.candidatos){return this.urnas.candidatos.sort(function(t,a){return Number(t.vap)>Number(a.vap)?-1:Number(t.vap)<Number(a.vap)?0:void 0})}}},beforeDestroy:function(){this.urnas.destroy(),this.infoVereadores.destroy()}},g={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{class:{loader:t.finishLoadData}}),t._v(" "),s("div",{staticClass:"main-city-header clearfix",attrs:{id:"main-city-header"}},[t._m(0),t._v(" "),s("div",{staticClass:"main-city-info"},[s("div",{staticClass:"city-info"},[s("h2",{staticClass:"city-name"},[t._v(t._s(t.urnas.localAtual)+"\n           "),t._m(1)]),t._v(" "),s("div",{staticClass:"progress-bar-container"},[s("span",{staticClass:"polls"},[s("span",{staticClass:"polls-label"},[t._v("URNAS APURADAS")]),t._v(" "),s("span",{staticClass:"polls-number"},[t._v(t._s(t.urnas.apuradas))]),t._v(" "),s("span",{staticClass:"polls-percent"},[t._v("%")])]),t._v(" "),s("span",{staticClass:"progress-bar-wrapper progress-bar-wrapper-full",staticStyle:{width:"100%"},attrs:{"data-percent":"100"}},[s("span",{staticClass:"progress-bar voters-bar",style:"width: "+t.urnas.votantes+"%;",attrs:{"data-percent":t.urnas.votantesP}}),t._v(" "),s("span",{staticClass:"progress-bar missing-voters-bar",style:"width: "+t.urnas.ausentes+"%;",attrs:{"data-percent":t.urnas.ausentesP}})]),t._v(" "),s("span",{staticClass:"progress-bar full-bar",staticStyle:{width:"0%"}}),t._v(" "),s("span",{staticClass:"progress-bar-labels"},[s("span",{staticClass:"progress-label label-total left"},[s("span",{staticClass:"total"},[t._v(t._s(t.urnas.eleitoresTotal))]),t._v(" "),s("span",{staticClass:"name"},[t._v("ELEITORES")])])]),t._v(" "),s("span",{staticClass:"progress-bar-labels votantes",staticStyle:{"min-width":"235px","max-width":"693px",width:"727.96px"}}),t._v(" "),s("span",{staticClass:"progress-bar-labels alinha",staticStyle:{"text-align":"right","min-width":"355px","max-width":"813px",width:"847.96px"}},[s("span",{staticClass:"progress-label label-percentage right"},[s("span",{staticClass:"total"},[s("span",{staticClass:"circle blue"}),t._v(" "+t._s(t.urnas.votantes)+"%")]),t._v(" "),s("span",{staticClass:"name"},[t._v("VOTANTES")])]),t._v(" "),s("span",{staticClass:"progress-label label-missing right"},[s("span",{staticClass:"total"},[s("span",{staticClass:"circle grey"}),t._v(" "+t._s(t.urnas.ausentes)+"%")]),t._v(" "),s("span",{staticClass:"name"},[t._v("AUSENTES")])])]),t._v(" "),t._m(2),t._v(" "),s("p",{staticClass:"awaiting"},[t._v("Apuração não iniciada")])])])]),t._v(" "),s("div",{staticClass:"main-search-city search-desktop"},[s("div",{staticClass:"search-city"},[s("v-select",{attrs:{options:t.cidades,clearable:!1},on:{input:t.pegarCidadeSelecionada},model:{value:t.cidadeSelecionada,callback:function(a){t.cidadeSelecionada=a},expression:"cidadeSelecionada"}})],1)])]),t._v(" "),s("div",{staticClass:"max-height"},[s("hr"),s("br"),s("br"),t._v(" "),s("div",{staticClass:"city-mayor fullheight"},[s("h2",{staticClass:"heading",class:{uniqueCandidate:t.UniqueMayor}},[t._v("PREFEITO")]),t._v(" "),s("div",{staticClass:"lift-box",attrs:{id:"presidente"}},[s("div",{staticClass:"avatares clearfix"},[t._l(t.listaPrefeitos,function(a,e){return s("div",{key:e,staticClass:"avatar avatar-left"},[e<=1?s("div",{staticClass:"candidate-avatar candidate-avatar-type-big candidate-status-elected",class:{uniqueMayorCss:t.UniqueMayor}},[s("span",[s("span",{staticClass:"candidate-mask"},[s("img",{staticClass:"candidate-image",attrs:{src:t.baseUrl+"/static/fotos/pref/"+t.cidadeSelecionada.code+"/"+a.sqcand+".jpeg",title:a.nm,alt:a.nm}})]),t._v(" "),"2º turno"==a.st?s("span",{staticClass:"candidate-status situation-1"},[t._v("2º turno")]):"Anulado"==a.dvt?s("span",{staticClass:"candidate-status nulled situation-1"},[t._v("Anulado")]):"s"==a.e?s("span",{staticClass:"candidate-status situation-1"},[t._v("Eleito")]):t._e()]),t._v(" "),t._m(3,!0),t._v(" "),s("span",{staticClass:"info-candidate"},[s("span",{staticClass:"candidate-votes"},[t._v("\n                   "+t._s(a.pvap)+"\n                   "),s("span",{staticClass:"percent"},[t._v("%")])]),t._v(" "),s("span",{staticClass:"candidate-name"},[t._v(t._s(a.nm))]),t._v(" "),s("span",{staticClass:"candidate-party situation-1"},[t._v(t._s(t._f("politicalParty")(a.cc)))]),t._v(" "),s("span",{staticClass:"candidate-total-votes"},[t._v(t._s(t._f("voteTotal")(a.vap))+"\n                   "),s("span",{staticClass:"candidate-total-votes-label"},[t._v("votos")])])]),t._v(" "),s("div",{staticClass:"share"},[s("a",{attrs:{href:"#"},on:{click:function(a){return t.socialShare(t.facebook)}}},[s("i",{staticClass:"icon icon-facebook"})]),t._v(" "),s("a",{attrs:{href:"#"},on:{click:function(a){return t.socialShare(t.twitter)}}},[s("i",{staticClass:"icon icon-twitter"})]),t._v(" "),s("a",{attrs:{href:"#"},on:{click:function(a){return t.socialShare(t.whatsapp)}}},[s("i",{staticClass:"icon icon-whatsapp"})])])]):t._e()])}),t._v(" "),s("div",{staticClass:"avatares-bg"})],2),t._v(" "),s("div",{staticClass:"mayor-list list-content"},[s("span",[s("ul",{staticClass:"list-items type-mayor"},t._l(t.listaPrefeitos,function(a,e){return s("li",{key:e,staticClass:"list-item candidate-running-true"},[e>=2?s("ul",[s("li",{staticClass:"item-name"},[t._v(t._s(a.nm))]),t._v(" "),s("li",{staticClass:"item-social"},[s("span",{staticClass:"icon-facebook",on:{click:function(a){return t.socialShare(t.facebook)}}}),t._v(" "),s("span",{staticClass:"icon-twitter",on:{click:function(a){return t.socialShare(t.twitter)}}}),t._v(" "),s("span",{staticClass:"icon-whatsapp",on:{click:function(a){return t.socialShare(t.whatsapp)}}})]),t._v(" "),s("li",{staticClass:"item-small-set"},[s("ul",[s("li",{staticClass:"item-party"},[t._v(" "+t._s(t._f("politicalParty")(a.cc))+" ")]),t._v(" "),s("li",{staticClass:"item-votes-v"},[t._v(" "+t._s(t._f("voteTotal")(a.vap))+" ")])])]),t._v(" "),s("li",{staticClass:"item-votes-vp"},[t._v(t._s(a.pvap)),s("span",[t._v("%")])]),t._v(" "),s("li",{staticClass:"item-notification elected-0"})]):t._e()])}),0)])])]),t._v(" "),s("div",{staticClass:"main-votes-count mayor-votes-count clearfix"},[s("div",{staticClass:"votes-count"},[s("div",{staticClass:"item white"},[s("span",{staticClass:"label"},[t._v("BRANCOS")]),s("span",{staticClass:"total"},[t._v(t._s(this.urnas.cVotosBrancos))]),s("span",{staticClass:"percent"},[t._v(t._s(this.urnas.pVotosBrancos)+"%")])]),t._v(" "),s("div",{staticClass:"item null"},[s("span",{staticClass:"label"},[t._v("NULOS")]),s("span",{staticClass:"total"},[t._v(t._s(this.urnas.cVotosNulos))]),s("span",{staticClass:"percent"},[t._v(t._s(this.urnas.pVotosNulos)+"%")])]),t._v(" "),s("div",{staticClass:"item valid"},[s("span",{staticClass:"label"},[t._v("VÁLIDOS")]),s("span",{staticClass:"total"},[t._v(t._s(this.urnas.cVotosValidos))]),s("span",{staticClass:"percent"},[t._v(t._s(this.urnas.pVotosValidos)+"%")])])])])]),t._v(" "),s("CityCouncilman")],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"main-search-city-input"},[a("div",{staticClass:"search-city-input is-favorite-false"},[a("div",{staticClass:"search-form-element search-form-close"},[a("i",{staticClass:"icon-search"}),this._v(" "),a("i",{staticClass:"icon-close"}),this._v(" "),a("input",{staticClass:"input suggest-input",attrs:{type:"text",autocomplete:"off",name:"q",placeholder:"Escreva o nome do estado",autofocus:""}}),this._v(" "),a("div",{staticClass:"suggest-area suggest-area-disabled"})])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"state-name"},[a("a",{attrs:{href:"#",id:"changeLocale","data-type":"1"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"ranges",staticStyle:{display:"none",position:"fixed",left:"113px",top:"-56px","z-index":"37"}},[a("br"),a("br"),this._v("\n           SAP \n           "),a("input",{staticClass:"range data-sap",staticStyle:{"margin-right":"10px"},attrs:{type:"range",min:"0",max:"100",step:"1"}}),this._v("\n           VOP \n           "),a("input",{staticClass:"range data-vop",staticStyle:{"margin-right":"10px"},attrs:{type:"range",min:"0",max:"100",step:"1"}}),this._v("\n           FIG \n           "),a("input",{staticClass:"range data-figures",attrs:{type:"range",min:"0",max:"100",step:"1"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"gauge"},[a("canvas",{staticClass:"candidate-canvas",attrs:{width:"110",height:"110"}})])}]};var b={name:"CheckMobile",data:function(){return{check:!1}},methods:{mobileCheck:function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var t=document.createElement("link");t.rel="stylesheet",t.href=this.baseUrl+"/static/template/css/mobile.css?v=2",document.head.appendChild(t)}else{var a=document.createElement("link");a.rel="stylesheet",a.href=this.baseUrl+"/static/template/css/style.css?v=2",document.head.appendChild(a)}console.log("%cCGN - CENTRAL GAZETA DE NOTÍCIAS","font-family: 'Times New Roman', Arial, serif; font-weight: bold; color: #289DFD; font-size: 45px;"),console.log("%cSistema desenvolvido por: ","font-family: Arial, serif;color: #000; font-size: 15px;"),console.log("%cGiuliano Saito, Leonardo Nascimento","font-family: Arial, serif; color: black; font-size: 18px; font-weight: bold;"),console.log("%cgiulianosaito@gmail.com, leonardo.nascimento21@gmail.com","font-family: Arial, serif; color: black; font-size: 18px; font-weight: bold;"),console.log=function(){},console.info=function(){},console.warn=function(){}}},created:function(){this.mobileCheck()}},y={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},V={name:"App",data:function(){return{apiPrefeitos:[],apiVereadores:[]}},components:{Header:l,Prefeitos:s("VU/8")(C,g,!1,function(t){s("ti9L")},null,null).exports,CheckMobile:s("VU/8")(b,y,!1,null,null,null).exports}},w={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("CheckMobile"),this._v(" "),a("Header"),this._v(" "),a("div",{staticClass:"score-container fullscreen"},[a("div",{staticClass:"arrow-left"}),this._v(" "),a("div",{staticClass:"arrow-right"}),this._v(" "),a("div",{staticClass:"main-content-bar max-height",attrs:{"data-max-height-selector":"body"}},[a("div",{staticClass:"main-content-space fullheight clearfix"},[this._m(0),this._v(" "),a("div",{staticClass:"disclaimer-container"}),this._v(" "),a("Prefeitos")],1)])])],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main-content-loading loading"},[s("div",{staticClass:"mask"}),t._v(" "),s("div",{staticClass:"sk-fading-circle"},[s("div",{staticClass:"sk-circle1 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle2 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle3 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle4 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle5 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle6 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle7 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle8 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle9 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle10 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle11 sk-circle"}),t._v(" "),s("div",{staticClass:"sk-circle12 sk-circle"})])])}]},S=s("VU/8")(V,w,!1,null,null,null).exports;s("mtWM"),s("R870");e.a.prototype.baseUrl="https://dev.cgn.inf.br/eleicoes/2020/",window.axios=s("mtWM"),e.a.config.productionTip=!1,e.a.use(i.a),e.a.component("v-select",r.a);var k=[{path:"/:id",component:S}],P=new i.a({routes:k});new e.a({router:P,el:"#app",components:{App:S},template:"<App/>"})},R870:function(t,a){},aniD:function(t,a){},ti9L:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.655d949067778b67f93f.js.map