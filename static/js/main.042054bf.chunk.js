(this.webpackJsonpthisdotchallenge=this.webpackJsonpthisdotchallenge||[]).push([[0],{13:function(e,t,a){e.exports={resultsContainer:"styles_resultsContainer__BhcSS",resultsList:"styles_resultsList__9JICr",noResults:"styles_noResults__3pWZQ"}},17:function(e,t,a){e.exports={mainContainer:"styles_mainContainer__3hOsD",loaderContainer:"styles_loaderContainer__2xtbd"}},30:function(e,t,a){e.exports={pagination:"styles_pagination__QlSL9"}},32:function(e,t,a){e.exports=a(83)},37:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},6:function(e,t,a){e.exports={userCard:"styles_userCard__2zX6k",userId:"styles_userId__3Kyb-",userLogin:"styles_userLogin__uH3h0",linksRow:"styles_linksRow__28jLS",additionalDetails:"styles_additionalDetails__3y_PH",additionalUserDetails:"styles_additionalUserDetails__35Eua",requestLimit:"styles_requestLimit__3TS9t"}},7:function(e,t,a){e.exports={queryMeter:"styles_queryMeter__fpnW9",red:"styles_red__BGXUY",yellow:"styles_yellow__2oq_-",wrappedProgress:"styles_wrappedProgress__2JVqF",green:"styles_green__U5QRW"}},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),l=a.n(s),c=(a(37),a(38),a(3)),i=a(8),o=a(10),u=a(11),m=new(function(){function e(){Object(o.a)(this,e),this.cache={}}return Object(u.a)(e,[{key:"set",value:function(e,t){this.cache[e]={results:t,date:new Date}}},{key:"get",value:function(e){var t=this.cache[e];if(t&&!this.isTooOldAndShouldRefetch(t))return console.info("We did this already < 8 hours ago...using saved results"),t.results}},{key:"isTooOldAndShouldRefetch",value:function(e){var t=new Date,a=e.date;return(t.valueOf()-a.valueOf())/1e3>288e5}}]),e}());var d=function(e,t,a,r){var s=Object(n.useState)(1),l=Object(c.a)(s,2),i=l[0],o=l[1],u=Object(n.useState)(t),m=Object(c.a)(u,2),d=m[0],f=(m[1],Math.ceil(e/d));return{currentPage:i,totalPages:f,nextPage:function(){i<f&&(r(i+1),o(i+1))},previousPage:function(){i>1&&(a(i-1),o(i-1))}}},f=a(30),h=a.n(f),g=function(e){var t=e.currentPage,a=e.totalPages,n=e.nextPage,s=e.previousPage;return r.a.createElement("div",{className:h.a.pagination},t>1&&r.a.createElement("button",{onClick:s},r.a.createElement("i",{className:"fas fa-chevron-left"})),"\xa0",r.a.createElement("span",null,t," of ",a),"\xa0",t<a&&r.a.createElement("button",{onClick:n},r.a.createElement("i",{className:"fas fa-chevron-right"})))},p=a(14),v=a.n(p),E=a(15),_=a(31),b=a(12),y=a.n(b);function O(e){var t=String(e);if(t.length<13){var a="0".repeat(13-t.length);return Number(t+a)}return e}var w=new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://api.github.com/search";Object(o.a)(this,e),this.baseUrl=t,this.resource="users",this.query=""}return Object(u.a)(e,[{key:"formulateQuery",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;if(!e||"string"!==typeof e)throw new Error("Invalid query provided");var n="".concat(this.baseUrl,"/").concat(this.resource,"?q=").concat(e);return a&&(n+="&per_page=".concat(a)),t&&(n+="&page=".concat(t)),n}},{key:"formulateUserDetailsQuery",value:function(e){return["https://api.github.com/users/".concat(e.login,"/followers?per_page=100"),"https://api.github.com/users/".concat(e.login,"/following?per_page=100"),"https://api.github.com/users/".concat(e.login,"/repos?per_page=100"),"https://api.github.com/users/".concat(e.login,"/starred?per_page=100")].map((function(e){return y.a.get(e)}))}},{key:"search",value:function(e){return y.a.get(e)}},{key:"searchMany",value:function(e){return Promise.all(e)}},{key:"rateLimit",value:function(){var e=Object(_.a)(v.a.mark((function e(){var t,a,n,r,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://api.github.com/rate_limit");case 3:return t=e.sent,a=t.data,n=a.resources,r=n.core,s=n.search,e.abrupt("return",{core:Object(E.a)({},r,{isLimited:r.remaining+4<r.limit,actualReset:new Date(O(r.reset))}),search:Object(E.a)({},s,{isLimited:s.remaining<s.limit,actualReset:new Date(O(s.reset))})});case 9:throw e.prev=9,e.t0=e.catch(0),new Error("Error fetching rate limit data");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()}]),e}()),j=a(6),D=a.n(j),N=function(e){var t=e.additionalDetails,a=t.followersData,n=t.followingData,s=t.reposData,l=t.starredData;return r.a.createElement("div",{className:D.a.additionalUserDetails},r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("i",{className:"far fa-file"}),"\xa0",r.a.createElement("strong",null,"Repos"),"\xa0"),100===s.length?"100+":s.length),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-star"}),"\xa0",r.a.createElement("strong",null,"Stars"),"\xa0"),100===l.length?"100+":l.length),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-user"}),"\xa0",r.a.createElement("strong",null,"Following"),"\xa0"),100===n.length?"100+":n.length),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-users"}),"\xa0",r.a.createElement("strong",null,"Followers"),"\xa0"),100===a.length?"100+":a.length))};var S=function(e){var t=e.user,a=e.incQueryCount,s=e.rateLimited,l=Object(n.useState)(!1),o=Object(c.a)(l,2),u=o[0],d=o[1],f=Object(n.useState)(null),h=Object(c.a)(f,2),g=h[0],p=h[1],v=Object(n.useState)(null),E=Object(c.a)(v,2),_=(E[0],E[1]),b="user-details:".concat(t.id);return Object(n.useEffect)((function(){var e=m.get(b);e&&p(e)}),[t.id]),console.log(g),r.a.createElement("div",{className:D.a.userCard},r.a.createElement("span",{className:D.a.userId},t.id),r.a.createElement("img",{src:t.avatar_url}),r.a.createElement("span",{className:D.a.userLogin},t.login),r.a.createElement("div",{className:D.a.linksRow},r.a.createElement("a",{href:t.url,target:"_blank"},"API Data"),r.a.createElement("a",{href:t.html_url,target:"_blank"},"Profile")),!u&&!g&&!s&&r.a.createElement("div",{className:D.a.additionalDetails},r.a.createElement("button",{type:"button",onClick:function(){var e=w.formulateUserDetailsQuery(t);a(),d(!0),w.searchMany(e).then((function(e){var t=Object(c.a)(e,4),a=t[0].data,n=t[1].data,r=t[2].data,s=t[3].data;d(!1),m.set(b,{followersData:a,followingData:n,reposData:r,starredData:s}),p({followersData:a,followingData:n,reposData:r,starredData:s})})).catch((function(e){d(!1),_("Error fetching additional details")}))}},"Load Additional Details")),u&&r.a.createElement(i.DotLoader,{color:"#FFFFFF"}),s&&r.a.createElement("span",{className:D.a.requestLimit},"You've reached the request limit!"),g&&r.a.createElement(N,{user:t,additionalDetails:g}))},P=a(13),k=a.n(P);var L=function(e){var t=e.loading,a=e.results,n=e.perPage,s=e.fetchPrevious,l=e.fetchNext,c=e.incQueryCount,o=e.rateLimited,u=d(a.total_count,n,s,l),m=u.currentPage,f=u.totalPages,h=u.previousPage,p=u.nextPage;return a.items&&0===a.items.length?r.a.createElement("strong",{className:k.a.noResults},"Sorry, it looks like there's no results with that term. Try another term!"):r.a.createElement("div",{className:k.a.resultsContainer},r.a.createElement("h3",null,a.total_count," results"),r.a.createElement(g,{currentPage:m,totalPages:f,nextPage:p,previousPage:h}),r.a.createElement("div",{className:k.a.resultsList},t?r.a.createElement(i.PacmanLoader,{color:"#FFFF00"}):a.items.map((function(e){return r.a.createElement(S,{key:e.id,user:e,incQueryCount:c,rateLimited:o})}))))},C=a(9),F=a.n(C);var x=function(e){var t=e.onSubmit,a=e.disabled,s=Object(n.useState)(""),l=Object(c.a)(s,2),i=l[0],o=l[1],u=Object(n.useState)(""),m=Object(c.a)(u,2),d=m[0],f=m[1];return r.a.createElement("div",{className:F.a.formContainer},r.a.createElement("h1",null,"Github search"),r.a.createElement("span",{className:F.a.madeFor},"Made for\xa0",r.a.createElement("img",{src:"https://uploads-ssl.webflow.com/5a9e6c4d3dd0520001f5b761/5e84f7055154236d4531a86e_td_media.svg"})),r.a.createElement("form",{className:F.a.searchForm,onSubmit:function(e){e.preventDefault(),f(""),i?t(i):f("It looks like your search was empty.")}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){return o(e.target.value)},placeholder:"Seach for a user"}),r.a.createElement("button",{disabled:a,type:"submit"},"Search!")),d&&r.a.createElement("p",{className:F.a.searchError},d))},R=a(5),M=a(16),q=a.n(M),U=a(7),Q=a.n(U),I=function(e){var t,a,n=e.remaining,s=e.limit,l=n/s;return r.a.createElement("div",{className:Q.a.wrappedProgress},r.a.createElement("progress",{className:q()((t={},Object(R.a)(t,Q.a.red,l>.85),Object(R.a)(t,Q.a.yellow,l>=.6&&l<=.85),Object(R.a)(t,Q.a.green,l<.6),t)),value:n,max:s}),r.a.createElement("span",{className:q()((a={},Object(R.a)(a,Q.a.red,l>.85),Object(R.a)(a,Q.a.yellow,l>=.6&&l<=.85),Object(R.a)(a,Q.a.green,l<.6),a))},n," / ",s))};var W=function(e){var t=e.rateLimitData,a=t.search,n=t.core;if(!a||!n)return null;var s=a.limit-a.remaining,l=n.limit-n.remaining,c=new Date,i=Math.abs(a.actualReset.getMinutes()-c.getMinutes()),o=60-Math.abs(n.actualReset.getMinutes()-c.getMinutes());return r.a.createElement("div",{className:Q.a.queryMeter},r.a.createElement("div",null,r.a.createElement("span",null,"Searches Used"),r.a.createElement("small",null,"Resets in ",i," minutes."),r.a.createElement(I,{remaining:s,limit:a.limit})),r.a.createElement("div",null,r.a.createElement("span",null,"Detail Requests Used"),r.a.createElement("small",null,"Reset in ",o," minutes"),r.a.createElement(I,{remaining:l,limit:n.limit})))},A=a(17),B=a.n(A);var H=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(null),o=Object(c.a)(l,2),u=(o[0],o[1]),d=Object(n.useState)(null),f=Object(c.a)(d,2),h=f[0],g=f[1],p=Object(n.useState)(20),v=Object(c.a)(p,2),E=v[0],_=(v[1],Object(n.useState)("")),b=Object(c.a)(_,2),y=b[0],O=b[1],j=Object(n.useState)(0),D=Object(c.a)(j,2),N=D[0],S=D[1],P=Object(n.useState)({}),k=Object(c.a)(P,2),C=k[0],F=k[1];function R(e){s(!0),q(y,e,E)}function M(){S(N+1)}function q(e,t,a){var n=w.formulateQuery(e,t,a),r=m.get(n);r?(g(r),u(null),s(!1)):(M(),w.search(n).then((function(e){g(e.data),u(null),s(!1),m.set(n,e.data)})).catch((function(e){g(null),u(e.response.data),s(!1)})))}return Object(n.useEffect)((function(){w.rateLimit().then((function(e){return F(e)})).catch((function(e){return console.error(e)}))}),[N]),r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{rateLimitData:C}),r.a.createElement("section",{className:B.a.mainContainer},r.a.createElement(x,{onSubmit:function(e){s(!0),g(null),O(e),q(e,1,E)},disabled:a}),!h&&a&&r.a.createElement("div",{className:B.a.loaderContainer},r.a.createElement(i.PacmanLoader,{color:"#FFFF00"})),h&&r.a.createElement(L,{loading:a,results:h,perPage:E,fetchPrevious:R,fetchNext:R,incQueryCount:M,rateLimited:C&&C.core&&!C.core.remaining})))};a(82);var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports={formContainer:"styles_formContainer__UkZNy",madeFor:"styles_madeFor__eYH0o",searchForm:"styles_searchForm__2f0wh",searchError:"styles_searchError__3DHV7"}}},[[32,1,2]]]);
//# sourceMappingURL=main.042054bf.chunk.js.map