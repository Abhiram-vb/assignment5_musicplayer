(this.webpackJsonpnewapp=this.webpackJsonpnewapp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),s=i(4),l=i.n(s),c=(i(14),i(15),i(2)),r=i(7),d=i(5),o=i(6),u=i(9),h=i(8),j=(i(16),i(0)),b=function(){return Object(j.jsxs)("nav",{className:"navBar",children:[Object(j.jsx)("h1",{className:"goldColor",children:"ReactTracks"}),Object(j.jsx)("h1",{children:"Abhiram"}),Object(j.jsx)("h1",{className:"goldColor",children:"Signout"})]})},p=(i(18),function(e){var t=e.dataItems,i=e.likeStateChange,a=e.deleteItem,n=t.like,s=t.title,l=t.subtitle,c=t.id,r=t.isLiked,d=r?"https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png":"https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png",o=r?"h1Color":"";return Object(j.jsxs)("li",{className:"eachSong",children:[Object(j.jsxs)("h1",{className:o,children:[n," ",Object(j.jsx)("img",{src:d,onClick:function(){i(c)},className:"like",alt:"like"})]}),Object(j.jsxs)("div",{className:"titleAndSubtitle",children:[Object(j.jsx)("h1",{className:"title",children:s}),Object(j.jsx)("p",{className:"subtitle",children:l})]}),Object(j.jsx)("audio",{controls:!0,src:"http://docs.google.com/uc?export=open&id=1sanznJvP0Z5XDwDffpiGcoYhFAqZ4DHE"}),Object(j.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png",alt:"delete",className:"delete",onClick:function(){a(c)}})]})}),m=(i(19),[{id:1,like:3,title:"Com Truise - Flightwave",subtitle:"Reed",media:"",isLiked:!1},{id:2,like:3,title:"Claude Debussy - Clair de lune",subtitle:"Reed",media:"",isLiked:!1},{id:3,like:2,title:"Culture Shock - Troglodyte",subtitle:"Doug",media:"",isLiked:!1},{id:4,like:2,title:"Tycho - Montana",subtitle:"Reed",media:"",isLiked:!1}]),g=function(e){Object(u.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(d.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:m,searchData:"",newTitle:"",newSubtitle:"",para:""},e.addNewSong=function(t){var i=e.state,a=i.newTitle,n=i.newSubtitle,s=i.data;if(t.preventDefault(),""!==a&&""!==n){var l={id:s.length+1,like:0,title:a,subtitle:n,media:"",isLiked:!1};e.setState({data:[].concat(Object(r.a)(s),[l]),para:"",newTitle:"",newSubtitle:""})}else e.setState({para:"*Enter Correct Input"})},e.changeNewTitle=function(t){e.setState({newTitle:t.target.value})},e.changeNewSubtitle=function(t){e.setState({newSubtitle:t.target.value})},e.filterData=function(t){e.setState({searchData:t.target.value})},e.deleteItem=function(t){var i=e.state.data.filter((function(e){return e.id!==t}));e.setState({data:i})},e.likeStateChange=function(t){console.log(t),e.setState((function(e){return{data:e.data.map((function(e){return t===e.id&&!1===e.isLiked?(console.log(t,e.id),Object(c.a)(Object(c.a)({},e),{},{like:e.like+1,isLiked:!e.isLiked})):t===e.id&&!0===e.isLiked?(console.log(t,e.id),Object(c.a)(Object(c.a)({},e),{},{like:e.like-1,isLiked:!e.isLiked})):e}))}}))},e}return Object(o.a)(i,[{key:"render",value:function(){var e=this,t=this.state,i=t.data,a=t.searchData,n=t.newSubtitle,s=t.newTitle,l=t.para,c=i.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase().trim())}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"mainContainer",children:[Object(j.jsx)("div",{className:"search",children:Object(j.jsx)("input",{type:"search",onChange:this.filterData,value:a,className:"searchInput",placeholder:"Search All Tracks"})}),Object(j.jsx)("ul",{className:"songs",children:c.map((function(t){return Object(j.jsx)(p,{dataItems:t,deleteItem:e.deleteItem,likeStateChange:e.likeStateChange},t.id)}))}),Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{htmlFor:"titleId",children:" Title"}),Object(j.jsx)("input",{id:"titleId",onChange:this.changeNewTitle,type:"input",value:s,placeholder:"Enter song Title to add",className:"titleInput"}),Object(j.jsx)("label",{htmlFor:"subtitleId",children:" subtitle"}),Object(j.jsx)("input",{id:"subtitleId",onChange:this.changeNewSubtitle,type:"input",value:n,placeholder:"Enter song subtitle to add",className:"subtitleInput"}),Object(j.jsx)("p",{className:"alert",children:l}),Object(j.jsx)("button",{type:"submit",onClick:this.addNewSong,children:"Add song"})]})]})]})}}]),i}(a.Component),f=g;var k=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(f,{})})},O=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,21)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;i(e),a(e),n(e),s(e),l(e)}))};l.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),O()}],[[20,1,2]]]);
//# sourceMappingURL=main.c1ac624d.chunk.js.map