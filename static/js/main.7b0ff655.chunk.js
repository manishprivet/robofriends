(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{15:function(e,t,a){e.exports=a(30)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),s=a(6),i=a(1),l=a(14),u=a(4),h=a(5),d=a(7),m=a(8);var E=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"Search Robots",onChange:t}))};var b=function(e){var t=e.id,a=e.name,n=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"".concat(a,"-RobotImage")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("h3",null,n)))};var v=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(b,{key:e.id.toString(),id:e.id,name:e.name,email:e.email})})))};a(26);var p=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"70vh"}},e.children)},f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={hasError:!1},e}return Object(h.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops"):this.props.children}}]),a}(n.Component),g=(a(27),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,a=e.onSearchChange,n=e.robots,o=e.isPending,c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?r.a.createElement("div",{className:"loadingAnimation"},r.a.createElement("div",{className:"sk-chase"},r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}),r.a.createElement("div",{className:"sk-chase-dot"}))):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"ROBOFRIENDS"),r.a.createElement(E,{searchChange:a}),r.a.createElement(p,null,r.a.createElement(f,null,r.a.createElement(v,{robots:c}))))}}]),a}(r.a.Component)),O=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(g);a(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(29);var R=a(2),S={searchField:""},y={isPending:!1,robots:[],error:""},N=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object(R.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(R.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(R.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(R.a)({},e,{error:t.payload,isPending:!1});default:return e}}}),j=Object(i.d)(N,Object(i.a)(l.a));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:j},r.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.7b0ff655.chunk.js.map