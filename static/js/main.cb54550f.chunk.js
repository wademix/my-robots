(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,n){},15:function(e,a,n){},17:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(2),i=n.n(o),c=(n(14),n(3)),l=n(4),m=n(6),s=n(5),u=n(7),h=function(e){var a=e.name,n=e.email,t=e.id;return r.a.createElement("div",{className:"tc bg-light-yellow dib br4 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?100x100")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},d=function(e){var a=e.robots;return r.a.createElement("div",null,a.map(function(e,n){return r.a.createElement(h,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})}))},w=function(e){e.searchfield;var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--yellow bg--yellow",type:"search",placeholder:"search robots",onChange:a}))},g=[{id:1,name:"Ik ThankGod",username:"Richboy",email:"Richboy@new.co"},{id:2,name:"Igwe Favour",username:"Yumpkin",email:"Daddysgirl@new.co"},{id:3,name:"Udih Ovie",username:"Touchlight",email:"Rapking@new.co"},{id:4,name:"Micheal Imara",username:"Mimara",email:"Mimaraconcept@new.co"},{id:5,name:"Samuel Ehuwa",username:"Skart",email:"Singer@new.co"},{id:6,name:"Ufouma Pokoh",username:"Magic",email:"fingers@new.co"},{id:7,name:"Bassey Precious",username:"Pee-Drums",email:"drummerboy@new.co"},{id:8,name:"Wajey Gee",username:"Yellow",email:"pawpaw@new.co"},{id:9,name:"Wade Courage",username:"South",email:"south@new.com"},{id:10,name:"Ozedikus Nwanne",username:"Nwanne",email:"gunnerato@new.com"}],b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},f=(n(15),function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(m.a)(this,Object(s.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:g,searchfield:""},e}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.state,a=e.robots,n=e.searchfield,t=a.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return 0===a.length?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(w,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(d,{robots:t})))}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.cb54550f.chunk.js.map