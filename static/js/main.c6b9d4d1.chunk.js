(this.webpackJsonpsound_soloution=this.webpackJsonpsound_soloution||[]).push([[0],{33:function(t,e,n){},63:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n(0),i=n.n(a),s=n(24),c=n.n(s),o=(n(63),n(33),n(30)),u=n(4),l=n(16),d=n(7),b=n.n(d),j=n(15),f=n(19),p=n(56);function g(t){return h.apply(this,arguments)}function h(){return(h=Object(j.a)(b.a.mark((function t(e){var n,r,a,i,s,c,o,u=arguments;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},r=n.body,a=Object(p.a)(n,["body"]),i={"Content-Type":"application/json"},s=Object(f.a)(Object(f.a)({method:r?"POST":"GET"},a),{},{headers:Object(f.a)(Object(f.a)({},i),a.headers)}),r&&(s.body=JSON.stringify(r)),t.prev=4,t.next=7,window.fetch(e,s);case 7:if(204!==(o=t.sent).status){t.next=10;break}return t.abrupt("return",{});case 10:return t.next=12,o.json();case 12:if(c=t.sent,!o.ok){t.next=15;break}return t.abrupt("return",c);case 15:throw new Error(o.statusText);case 18:if(t.prev=18,t.t0=t.catch(4),"SyntaxError"!==t.t0.name){t.next=22;break}return t.abrupt("return",Promise.reject(""));case 22:return t.abrupt("return",Promise.reject(c||t.t0.message));case 23:case"end":return t.stop()}}),t,null,[[4,18]])})))).apply(this,arguments)}g.get=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g(t,Object(f.a)(Object(f.a)({},e),{},{method:"GET"}))},g.post=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g(t,Object(f.a)(Object(f.a)({},n),{},{body:e}))};var v,x=n(18),O="http://localhost:8000/search?q=",m="http://localhost:8000/artist",y=(Object(x.b)("artists/getArtists",function(){var t=Object(j.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get(O+e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Object(x.b)("artists/searchArtists",function(){var t=Object(j.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get(O+e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),w=Object(x.b)("artists/getExternalArtistDetailsForFanCount",function(){var t=Object(j.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get(m+e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),k=Object(x.b)("artists/getSingleArtistDetails",function(){var t=Object(j.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get(m+e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),S=Object(x.b)("artists/getTop5Tracks",function(){var t=Object(j.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("http://localhost:8000/top5tracks"+e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),A=Object(x.c)({name:"artists",initialState:{artists:[],searchedName:"",externalArtistsDetailsForFanCount:[],artistData:{},currentArtistsTop5Tracks:[],loadingTracksStatus:"idle",status:"idle",error:null,singleArtistDetailsStatus:"idle",artistDataStatus:"idle",gettingExternalArtistDetailsStatus:!1,artistsViewable:!1,isViewingArtist:!1},reducers:{setSearchName:function(t,e){t.searchedName=e.payload},setIsViewingArtist:function(t,e){t.isInFocus=e.payload}},extraReducers:(v={},Object(l.a)(v,y.pending,(function(t,e){t.status="loading",t.artistsDetails=[],t.artistsViewable=!1})),Object(l.a)(v,y.fulfilled,(function(t,e){t.status="succeeded",t.artists=e.payload,t.artistsViewable=!0})),Object(l.a)(v,y.rejected,(function(t,e){t.status="failed",t.error=e.error.message})),Object(l.a)(v,w.fulfilled,(function(t,e){var n;t.externalArtistsDetailsForFanCount.push(e.payload),null===(n=t.externalArtistsDetailsForFanCount)||void 0===n||n.forEach((function(e){t.gettingExternalArtistDetailsStatus=!t.gettingExternalArtistDetailsStatus}))})),Object(l.a)(v,k.fulfilled,(function(t,e){t.singleArtistDetailsStatus="succeeded",t.artistData=e.payload})),Object(l.a)(v,S.pending,(function(t,e){t.loadingTracksStatus="loading"})),Object(l.a)(v,S.fulfilled,(function(t,e){t.loadingTracksStatus="succeeded",t.currentArtistsTop5Tracks=e.payload})),v)}),_=A.actions,T=(_.setSearchName,_.setIsViewingArtist,A.reducer),D=function(t){return t.artists.artists},F=n(5),N=n(36),E=n(37),I=function(t){var e,n,a,i,s,c,o,u=t.artistId,l=Object(F.c)((function(t){return t.artists.externalArtistsDetailsForFanCount.find((function(t){return t.id===u}))}));return Object(r.jsxs)("span",{children:[l?Object(r.jsxs)("p",{children:["Fans count",l.nb_fan>1e3&&l.nb_fan<1e4?" "+(null===(e=l.nb_fan)||void 0===e?void 0:e.toString().slice(0,1))+"K":l.nb_fan>1e4&&l.nb_fan<1e5?" "+(null===(n=l.nb_fan)||void 0===n?void 0:n.toString().slice(0,2))+"K":l.nb_fan>1e5&&l.nb_fan<1e6?" "+(null===(a=l.nb_fan)||void 0===a?void 0:a.toString().slice(0,3))+"K":l.nb_fan>1e6&&l.nb_fan<1e7?" "+(null===(i=l.nb_fan)||void 0===i?void 0:i.toString().slice(0,1))+".".concat(null===(s=l.nb_fan)||void 0===s?void 0:s.toString().slice(1,2))+"M":l.nb_fan>1e7?" "+(null===(c=l.nb_fan)||void 0===c?void 0:c.toString().slice(0,2))+".".concat(null===(o=l.nb_fan)||void 0===o?void 0:o.toString().slice(2,3))+"M":l.nb_fan]}):"Unknown amount"," "]})};function C(){var t=Object(N.a)(["\n  padding: 20px;\n"]);return C=function(){return t},t}function R(){var t=Object(N.a)(["\n  background-color: rgb(88, 60, 153);\n  margin-bottom: 20px;\n"]);return R=function(){return t},t}var V=E.a.div(R()),K=E.a.div(C());var L=function(t){var e=t.id,n=t.artist,i=Object(F.c)((function(t){return t.artists.status})),s=n.album.cover_medium,c=n.artist.name,o=Object(F.c)((function(t){return t.artists.gettingExternalArtistDetailsStatus})),u=Object(F.b)();Object(a.useEffect)((function(){if(o)return"loaded";"succeeded"===i&&l(e)}),[]);var l=function(){var t=Object(j.a)(b.a.mark((function t(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(w(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"artistStyle",children:Object(r.jsxs)(V,{children:[Object(r.jsx)("img",{src:s,className:"_image",alt:""}),Object(r.jsxs)(K,{children:[Object(r.jsx)("p",{children:c}),Object(r.jsx)(I,{artistId:e})]})]})})};var M=function(){var t=Object(F.c)(D).data,e=Object(F.c)((function(t){return t.artists.artistsViewable})),n=null===t||void 0===t?void 0:t.map((function(t){return Object(r.jsx)(o.b,{to:"/artist/".concat(t.artist.id),children:Object(r.jsx)(L,{artist:t,id:t.artist.id})},t.id)}));return Object(r.jsx)("div",{children:e&&(null===t||void 0===t?void 0:t.length)>0?Object(r.jsx)("div",{style:{background:"#232323",paddingLeft:250,paddingRight:250,textAlign:"center",justifyContent:"space-between",display:"flex",flexWrap:"wrap",paddingTop:80},children:n}):Object(r.jsx)("h3",{style:{background:"#232323",color:"white",textAlign:"center",paddingTop:80},children:"Search to find artists"})})};var B=function(){return Object(r.jsx)("div",{style:{textAlign:"center",height:800,background:"#232323",overflow:"auto"},children:Object(r.jsx)(M,{})})};var P=function(t){var e=t.album,n=e.title,a=e.cover_medium;return Object(r.jsxs)("div",{className:"album",children:[Object(r.jsx)("img",{src:a,className:"_image",alt:""}),Object(r.jsx)("div",{className:"albumFooter",children:Object(r.jsx)("p",{className:"albumTtitle",children:n.length>25?n.slice(0,22)+"...":n})})]})};function W(t){var e=~~(t/3600),n=~~(t%3600/60),r=~~t%60,a="";return e>0&&(a+=e+":"+(n<10?"0":"")),a+=n+":"+(r<10?"0":""),a+=""+r}var J=function(t){var e=t.track,n=t.no;return Object(r.jsxs)("article",{className:"track",style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgb(88, 60, 153)",marginTop:5,height:40,width:280,paddingRight:10,paddingLeft:10,marginLeft:25,borderRadius:5},children:[Object(r.jsx)("h4",{children:n+1}),Object(r.jsx)("h6",{children:e.title}),Object(r.jsx)("p",{className:"track-content",children:W(e.duration)})]})};var G=function(t){var e,n,i=t.match,s=Object(F.c)((function(t){return t.artists.artistDataStatus})),c=Object(F.c)((function(t){return t.artists.loadingTracksStatus})),o=Object(F.c)((function(t){return t.artists.artistData})),u=Object(F.c)((function(t){return t.artists.currentArtistsTop5Tracks})),l=Object(F.c)((function(t){return t.artists.error})),d=i.params.artistId,b=Object(F.b)();if(Object(a.useEffect)((function(){"idle"===s&&(b(k(d)),b(S(d)))}),[]),"loading"===c)e=Object(r.jsx)("div",{className:"loader",children:"Loading..."});else if("succeeded"===c){e=(null===u||void 0===u?void 0:u.data.slice().sort((function(t,e){return t.rank-e.rank}))).map((function(t,e){return Object(r.jsx)(J,{no:e,track:t},t.id)})),n=null===u||void 0===u?void 0:u.data.map((function(t,e){return Object(r.jsx)(P,{album:t.album},e)}))}else"failed"===c&&(e=Object(r.jsx)("div",{children:l}));if(!o)return Object(r.jsx)("section",{children:Object(r.jsx)("h2",{children:"Artist not found!"})});var j=o.name,f=o.picture_big,p=o.nb_fan;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("section",{style:{color:"#fff",padding:40,display:"flex"},children:[Object(r.jsx)("div",{children:Object(r.jsxs)("div",{style:{textAlign:"center",display:"flex"},children:[Object(r.jsx)("img",{style:{height:400},src:f,className:"_image",alt:""}),Object(r.jsxs)("div",{style:{padding:20,background:"black",textAlign:"left",borderRadius:5,marginLeft:-5,width:200},children:[Object(r.jsx)("p",{children:j}),Object(r.jsxs)("p",{children:["Fans",p>1e3&&p<1e4?(null===p||void 0===p?void 0:p.toString().slice(0,1))+"K":p>1e4&&p<1e5?(null===p||void 0===p?void 0:p.toString().slice(0,2))+"K":p>1e5&&p<1e6?(null===p||void 0===p?void 0:p.toString().slice(0,3))+"K":p>1e6&&p<1e7?(null===p||void 0===p?void 0:p.toString().slice(0,1))+".".concat(null===p||void 0===p?void 0:p.toString().slice(1,2))+"M":p>1e7?(null===p||void 0===p?void 0:p.toString().slice(0,2))+".".concat(null===p||void 0===p?void 0:p.toString().slice(2,3))+"M":p]})]})]})}),Object(r.jsxs)("div",{style:{textAlign:"center"},children:[Object(r.jsx)("h3",{children:"Top Tracks"}),e]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{style:{color:"rgb(255, 255, 255)",position:"absolute",textAlign:"center",left:"50%",transform:"translateX(-50%)",borderBottom:"1px solid #fff"},children:"Albums"}),Object(r.jsx)("div",{style:{background:"#232138",paddingLeft:150,paddingRight:150,textAlign:"center",justifyContent:"space-between",display:"flex",flexWrap:"wrap",paddingTop:80,paddingBottom:200},children:n})]})]})},q=n(55),U=n(90),X=n(50),$=n.n(X),z=n(54),H=n.n(z),Q=n(49),Y=n.n(Q);var Z=function(){var t=Object(a.useState)(""),e=Object(q.a)(t,2),n=(e[0],e[1]),i=Object(a.useRef)(Y.a.debounce((function(t){return s(y(t))}),500)).current,s=Object(F.b)();return Object(r.jsxs)("div",{style:{display:"flex",alignItems:"center",color:"#fff"},children:[Object(r.jsx)($.a,{style:{marginRight:5}}),Object(r.jsxs)("div",{style:{display:"flex",alignItems:"center",background:"#7350c7",borderRadius:5,padding:5,height:20},children:[Object(r.jsx)(H.a,{}),Object(r.jsx)(U.a,{style:{color:"white"},onChange:function(t){n(t.target.value),i(t.target.value)},placeholder:"search for artists",inputProps:{"aria-label":"description"}})]})]})};var tt=function(){return Object(r.jsx)("div",{style:{background:"#583c99",padding:20},children:Object(r.jsx)(Z,{})})};var et=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(o.a,{children:[Object(r.jsx)(tt,{}),Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(i.a.Fragment,{children:Object(r.jsx)(B,{})})}}),Object(r.jsx)(u.b,{exact:!0,path:"/artist/:artistId",component:G}),Object(r.jsx)(u.a,{to:"/"})]})]})})},nt=Object(x.a)({reducer:{artists:T}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(F.a,{store:nt,children:Object(r.jsx)(et,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[73,1,2]]]);
//# sourceMappingURL=main.c6b9d4d1.chunk.js.map