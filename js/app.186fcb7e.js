(function(e){function t(t){for(var n,s,o=t[0],l=t[1],i=t[2],b=0,f=[];b<o.length;b++)s=o[b],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&f.push(c[s][0]),c[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==c[l]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},c={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"4d31":function(e,t,r){"use strict";r("b70c")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("1bad");var n=r("7a23"),c={class:"d-flex flex-column"};function a(e,t,r,a,s,o){var l=Object(n["m"])("Header"),i=Object(n["m"])("Main");return Object(n["h"])(),Object(n["c"])("div",c,[Object(n["f"])(l),Object(n["f"])(i)])}var s={class:"Header flex-justify-end"},o={class:"Header-item"},l={class:"Header-link",href:"https://github.com/wuuzw/gh-release"},i=Object(n["e"])(" Source code");function u(e,t,r,c,a,u){var b=Object(n["m"])("Octicon");return Object(n["h"])(),Object(n["c"])("header",s,[Object(n["f"])("div",o,[Object(n["f"])("a",l,[Object(n["f"])(b,{class:"mr-1",icon:"mark-github",size:"16"}),i])])])}var b=Object(n["s"])("data-v-eff0c504"),f=b((function(e,t,r,c,a,s){return Object(n["h"])(),Object(n["c"])("svg",{class:s.octiconClasses,height:r.size,viewBox:s.viewBox,width:r.size,"aria-hidden":"true",innerHTML:s.octicon.path},null,10,["height","viewBox","width","innerHTML"])})),d=r("ca7d"),p=r.n(d),O={name:"Octicon",props:{icon:{type:String,required:!0},size:{type:String,required:!0},label:{type:String,required:!1,default:""}},computed:{octicon:function(){return p.a[this.icon].heights[this.size]},viewBox:function(){return this.octicon.options.viewBox},octiconClasses:function(){return this.octicon.options.class}}};O.render=f,O.__scopeId="data-v-eff0c504";var j=O,h={name:"Header",components:{Octicon:j}};h.render=u;var m=h,v={class:"d-flex flex-column"};function g(e,t,r,c,a,s){var o=Object(n["m"])("SearchBar"),l=Object(n["m"])("Repo"),i=Object(n["m"])("Error");return Object(n["h"])(),Object(n["c"])("main",v,[Object(n["f"])(o),s.hasRepoDetail?(Object(n["h"])(),Object(n["c"])(l,{key:0})):Object(n["d"])("",!0),s.hasError?(Object(n["h"])(),Object(n["c"])(i,{key:1})):Object(n["d"])("",!0)])}r("b64b");var x={class:"blankslate my-3 text-gray"},w={class:"my-1"};function y(e,t,r,c,a,s){var o=Object(n["m"])("Octicon");return Object(n["h"])(),Object(n["c"])("div",x,[Object(n["f"])(o,{class:"text-red",icon:"x-circle",size:"24"}),Object(n["f"])("h3",w,Object(n["n"])(s.error),1)])}var R={name:"Error",components:{Octicon:j},computed:{error:function(){return this.$store.getters.error}}};R.render=y;var k=R,_=(r("a4d3"),r("e01a"),r("b0c0"),{class:"py-4 px-3"}),A={class:"d-flex flex-column mb-3"},S={class:"d-flex flex-items-center f3 text-normal"},z=Object(n["f"])("span",{class:"mx-1"},"/",-1),L={class:"mr-2"},E={class:"f4 my-2"},B={class:"d-flex flex-wrap text-small text-gray"},P={class:"mr-3"},N={class:"mr-3"},H={class:"mr-3"},M={class:"border-top"};function C(e,t,r,c,a,s){var o=Object(n["m"])("Octicon"),l=Object(n["m"])("ReleaseList"),i=Object(n["m"])("EmptyList");return Object(n["h"])(),Object(n["c"])("div",_,[Object(n["f"])("div",A,[Object(n["f"])("h1",S,[Object(n["f"])(o,{class:"mr-2",icon:"repo",size:"24"}),Object(n["f"])("a",{href:s.repo.owner_html_url},Object(n["n"])(s.repo.owner),9,["href"]),z,Object(n["f"])("strong",L,[Object(n["f"])("a",{href:s.repo.html_url},Object(n["n"])(s.repo.name),9,["href"])])]),Object(n["f"])("p",E,Object(n["n"])(s.repo.description),1),Object(n["f"])("div",B,[Object(n["f"])("div",P,[Object(n["f"])("span",null,[Object(n["f"])(o,{icon:"star",size:"16"}),Object(n["e"])(" "+Object(n["n"])(s.repo.stargazers_count),1)])]),Object(n["f"])("div",N,[Object(n["f"])("span",null,Object(n["n"])(s.repo.language),1)]),Object(n["f"])("div",H,[Object(n["f"])("span",null,[Object(n["f"])(o,{icon:"law",size:"16"}),Object(n["e"])(" "+Object(n["n"])(s.repo.license),1)])])])]),Object(n["f"])("div",M,[s.releases.length>0?(Object(n["h"])(),Object(n["c"])(l,{key:0})):(Object(n["h"])(),Object(n["c"])(i,{key:1}))])])}var D=Object(n["s"])("data-v-0456379c");Object(n["j"])("data-v-0456379c");var G={class:"blankslate text-gray"},J=Object(n["f"])("h3",null,"No releases published",-1);Object(n["i"])();var q=D((function(e,t,r,c,a,s){return Object(n["h"])(),Object(n["c"])("div",G,[J])})),I={name:"EmptyList"};I.render=q,I.__scopeId="data-v-0456379c";var T=I,F={class:"d-flex flex-column flex-items-center"},K={class:"flex-self-stretch"},Q=Object(n["f"])("span",null,"Next",-1);function U(e,t,r,c,a,s){var o=Object(n["m"])("Release"),l=Object(n["m"])("Octicon");return Object(n["h"])(),Object(n["c"])("div",F,[Object(n["f"])("ul",K,[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["l"])(s.releases,(function(e){return Object(n["h"])(),Object(n["c"])(o,{key:e["id"],release:e},null,8,["release"])})),128))]),s.hasNext?(Object(n["h"])(),Object(n["c"])("button",{key:0,class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=function(){return s.loadNext&&s.loadNext.apply(s,arguments)})},[Object(n["f"])(l,{class:"mr-2",icon:"plus-circle",size:"16"}),Q])):Object(n["d"])("",!0)])}var $={class:"py-3"},V={class:"d-flex flex-items-start"},X={class:"flex-auto text-normal"},Y={key:0,class:"flex-shrink-0 ml-2 Label Label--outline"},Z={key:1,class:"flex-shrink-0 ml-2 Label Label--outline"},W={key:0,class:"mt-2"},ee=Object(n["f"])("summary",{class:"text-bold"}," Change Log ",-1),te={class:"markdown-body"},re={class:"mt-3"},ne={class:"d-flex flex-justify-between"},ce=Object(n["f"])("span",{class:"text-bold"},"Assets",-1),ae={class:"Counter ml-1"},se={class:"Counter bg-green text-white mr-2"},oe={class:"Box mt-3"},le={class:"pl-2 flex-1 break-word text-bold"},ie={class:"Counter ml-2"},ue={class:"Counter bg-green text-white ml-2"};function be(e,t,r,c,a,s){var o=Object(n["m"])("Octicon");return Object(n["h"])(),Object(n["c"])("div",$,[Object(n["f"])("div",V,[Object(n["f"])("h3",X,[Object(n["f"])("a",{href:r.release["html_url"]},Object(n["n"])(r.release["name"]),9,["href"])]),r.release["prerelease"]?(Object(n["h"])(),Object(n["c"])("span",Y," Pre-release ")):Object(n["d"])("",!0),r.release["draft"]?(Object(n["h"])(),Object(n["c"])("span",Z," Draft ")):Object(n["d"])("",!0)]),""!==r.release["body"]?(Object(n["h"])(),Object(n["c"])("details",W,[ee,Object(n["f"])("div",te,[Object(n["f"])("div",{innerHTML:s.renderMarkdown()},null,8,["innerHTML"])])])):Object(n["d"])("",!0),Object(n["f"])("div",re,[Object(n["f"])("div",ne,[Object(n["f"])("div",null,[ce,Object(n["f"])("span",ae,Object(n["n"])(r.release["assets"].length),1)]),Object(n["f"])("span",se,[Object(n["f"])(o,{icon:"download",size:"16"}),Object(n["e"])(" "+Object(n["n"])(s.totalDownload()),1)])]),Object(n["f"])("div",oe,[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["l"])(r.release["assets"],(function(e){return Object(n["h"])(),Object(n["c"])("div",{key:e["id"],class:"d-flex flex-wrap flex-justify-between flex-items-center py-1 Box-body px-2"},[Object(n["f"])("a",{href:e["browser_download_url"],class:"d-flex flex-items-center"},[Object(n["f"])(o,{class:"text-gray",icon:"package",size:"16"}),Object(n["f"])("span",le,Object(n["n"])(e["name"]),1)],8,["href"]),Object(n["f"])("div",null,[Object(n["f"])("span",ie,Object(n["n"])(s.parseSize(e["size"])),1),Object(n["f"])("span",ue,[Object(n["f"])(o,{icon:"download",size:"16"}),Object(n["e"])(" "+Object(n["n"])(e["download_count"]),1)])])])})),128))])])])}r("13d5");var fe=r("d4cd"),de=r.n(fe),pe=r("94df"),Oe=r.n(pe),je={name:"Release",components:{Octicon:j},props:{release:{type:Object,required:!0}},methods:{renderMarkdown:function(){var e=new de.a;return e.render(this.release["body"])},totalDownload:function(){return this.release["assets"].reduce((function(e,t){return e+t["download_count"]}),0)},parseSize:function(e){return Oe()(e)}}};je.render=be;var he=je,me={name:"ReleaseList",components:{Octicon:j,Release:he},methods:{loadNext:function(){this.$store.dispatch("loadReleases")}},computed:{releases:function(){return this.$store.getters.releases},hasNext:function(){return this.$store.getters.hasNext}}};me.render=U;var ve=me,ge={name:"Repo",components:{EmptyList:T,ReleaseList:ve,Octicon:j},computed:{repo:function(){return this.$store.getters.repo},releases:function(){return this.$store.getters.releases}}};ge.render=C;var xe=ge,we=(r("ac1f"),r("841c"),r("cf05")),ye=r.n(we),Re=Object(n["s"])("data-v-ff963f76");Object(n["j"])("data-v-ff963f76");var ke={class:"d-flex flex-column flex-items-center"},_e=Object(n["f"])("div",{class:"d-flex my-3"},[Object(n["f"])("img",{alt:"GH-Release logo",class:"mr-1",src:ye.a}),Object(n["f"])("h1",null," GH-Release ")],-1);Object(n["i"])();var Ae=Re((function(e,t,r,c,a,s){return Object(n["h"])(),Object(n["c"])("div",ke,[_e,Object(n["f"])("form",{onSubmit:t[2]||(t[2]=Object(n["r"])((function(){return s.search&&s.search.apply(s,arguments)}),["prevent"]))},[Object(n["q"])(Object(n["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.query=e}),"aria-label":"Github Repository URL",class:"form-control p-3 input-lg input-block",placeholder:"Enter a repository url",type:"url"},null,512),[[n["o"],a.query,void 0,{trim:!0}]])],32)])})),Se=(r("5319"),r("1276"),r("96cf"),r("1da1")),ze={name:"SearchBar",data:function(){return{query:""}},methods:{search:function(){var e=this;return Object(Se["a"])(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.query.replace(/^(http(s)?(:\/\/))?(www\.)?(github\.com\/)/i,"").split("/"),n=r[0],c=r[1],t.next=5,e.$store.dispatch("loadRepoDetail",{owner:n,repo:c});case 5:case"end":return t.stop()}}),t)})))()}}};r("4d31");ze.render=Ae,ze.__scopeId="data-v-ff963f76";var Le=ze,Ee={name:"Main",components:{Error:k,Repo:xe,SearchBar:Le},computed:{hasRepoDetail:function(){return 0!==Object.keys(this.$store.getters.repo).length},hasError:function(){return""!==this.$store.state.error}}};Ee.render=g;var Be=Ee,Pe={name:"App",components:{Header:m,Main:Be}};r("900e");Pe.render=a;var Ne=Pe,He=(r("99af"),r("bc3a")),Me=r.n(He),Ce=r("5502"),De="https://api.github.com",Ge=30,Je=function(){return{repo:{},releases:[],hasNext:!0,page:1,error:""}},qe=Object(Ce["a"])({state:Je(),getters:{repo:function(e){return e.repo},releases:function(e){return e.releases},error:function(e){return e.error},hasNext:function(e){return e.hasNext}},mutations:{resetState:function(e){Object.assign(e,Je())},setRepoDetail:function(e,t){return e.repo={name:t["name"],html_url:t["html_url"],owner:t["owner"]["login"],owner_html_url:t["owner"]["html_url"],description:t["description"],stargazers_count:t["stargazers_count"],language:t["language"],license:t["license"]["name"]},e.repo},setReleases:function(e,t){t.length<Ge&&(e.hasNext=!1);for(var r=[],n=0;n<t.length;n++){for(var c=0;c<t[n]["assets"].length;c++){var a={id:t[n]["assets"][c]["id"],name:t[n]["assets"][c]["name"],size:t[n]["assets"][c]["size"],download_count:t[n]["assets"][c]["download_count"],browser_download_url:t[n]["assets"][c]["browser_download_url"]};r.push(a)}var s={id:t[n]["id"],html_url:t[n]["html_url"],name:t[n]["name"],draft:t[n]["draft"],prerelease:t[n]["prerelease"],assets:r,body:t[n]["body"]};r=[],e.releases.push(s)}return e.releases},setError:function(e,t){return e.error=t}},actions:{loadRepoDetail:function(){var e=Object(Se["a"])(regeneratorRuntime.mark((function e(t,r){var n,c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("resetState"),e.prev=2,e.next=5,Me.a.get("".concat(De,"/repos/").concat(r.owner,"/").concat(r.repo));case 5:return c=e.sent,n("setRepoDetail",c.data),e.next=9,Me.a.get("".concat(De,"/repos/").concat(r.owner,"/").concat(r.repo,"/releases?per_page=").concat(Ge));case 9:a=e.sent,n("setReleases",a.data),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](2),n("setError",e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));function t(t,r){return e.apply(this,arguments)}return t}(),loadReleases:function(){var e=Object(Se["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,console.log("called"),this.state.page+=1,e.next=5,Me.a.get("".concat(De,"/repos/").concat(this.state.repo.owner,"/").concat(this.state.repo.name,"/releases?per_page=").concat(Ge,"&page=").concat(this.state.page));case 5:n=e.sent,r("setReleases",n.data);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},modules:{}});Object(n["b"])(Ne).use(qe).mount("#app")},"900e":function(e,t,r){"use strict";r("a8bc")},a8bc:function(e,t,r){},b70c:function(e,t,r){},cf05:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAABfklEQVR42u2Wy0rDQBRAz6K/UCtSrYKorZqNH+e2j41/otCFO7PSn6ioaFXE1GqLorb7CGFmGLgwTnu3OVkdCvckt0kIJSUl+NTp80uOPOaktPTjP8kDx5QEn8R4NH0xMpRImBqPRSwnnLh0HosbApJj9+sXRwBUGVhXBIKJFa6tLx6o0GNERpcKlrZY1Cp31hcN9Jx1IJBY4976YoGRsxHhRdV5sL5c4BX+TQytxwe6ztoYAotq8Gw9/k/ukJHRpgIRiS1erEcEwshF2auwrggEE9tk4cRcbF0SXtQub6FFpeSKRAuAPd4Ln7CJYJ+pIpG6KR+Fn4EkUSRmWA6ZkPMNioQI+AMPisAPaBJyRadQ0DIrOgdFQoyf0DD30dj4DgGajMnNcRI1PrFPgu+KhBzvnmXnuoQcv8GT77qEHL/Oo++6hBxfZ+i7LiHH17hZdry8aeULrsatc4PiKsTZVxk4NyiuQpw9XPmuTIS/UPW0SJkx44Km+MYuKSkJwx8VCuCXa+OeGwAAAABJRU5ErkJggg=="}});