(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,n){e.exports=n(213)},133:function(e,t,n){},134:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},213:function(e,t,n){"use strict";n.r(t);var a,o,r=n(0),l=n.n(r),i=n(7),s=n.n(i),c=(n(133),n(124)),u=n(38),d=n(22),m=n(27),h=n(30),p=n(28),g=n(31),f=n(37),b=n(216),v=(n(134),["home","models"]),E=n(114),w=n(115),y=(n(135),n(90)),j=n(13),O=(a=function e(){Object(d.a)(this,e),this.sb=void 0,Object(E.a)(this,"loggedIn",o,this),this.sb=new y.SkyeBrowse},o=Object(w.a)(a.prototype,"loggedIn",[j.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),a);window.sb=new y.SkyeBrowse;var k,C,P,S,x=new O,M=Object(f.a)(k=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).menuClick=function(e){n.setState({selectedKey:e.key},function(){var e=parseInt(n.state.selectedKey);window.location.hash="#/".concat(v[e])})},n.state={selectedKey:"0"},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.createElement("div",{id:"nav-menu"},r.createElement(b.b,{theme:"dark",onClick:this.menuClick,mode:"inline",selectedKeys:[this.state.selectedKey]},v.map(function(e,t){return r.createElement(b.b.Item,{key:t+"",disabled:!x.loggedIn},e.toUpperCase())})))}}]),t}(r.Component))||k,U=n(34),I=n.n(U),K=n(53),L=n(214),N=null,B=Object(f.a)(C=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).loadProfile=function(){n.state.loading||n.setState({loading:!0},Object(K.a)(I.a.mark(function e(){return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.sb.getProfile();case 2:N=e.sent,n.setState({user:N,loading:!1});case 4:case"end":return e.stop()}},e)})))},n.state={loading:!1,user:N},setTimeout(n.loadProfile,10),n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){e.history.location.hash!=this.props.history.location.hash&&this.loadProfile()}},{key:"render",value:function(){return this.state.user?r.createElement("div",{className:"page"},r.createElement("h1",null,"Welcome ",this.state.user.name),r.createElement(L.a,{title:"My Stats",style:{width:600}},r.createElement("h2",null,"Email: ",this.state.user.email),r.createElement("h2",null,"Approved: ",this.state.user.approved+""),r.createElement("h2",null,"Model Count: ",this.state.user.modelCount)),r.createElement(L.a,{title:"".concat(this.state.user.org.name,"'s Stats"),style:{width:600}},r.createElement("h2",null,"Credits: ",this.state.user.org.credits),r.createElement("h2",null,"Credits Expire: ",this.state.user.org.creditsExpire),r.createElement("h2",null,"Model Count: ",this.state.user.org.modelCount))):r.createElement("div",null,"Loading...")}}]),t}(r.Component))||C,D=n(215),W=function(e){function t(e){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).call(this,e))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.model;return r.createElement(L.a,{title:e.name,loading:this.props.loading,className:"modelCard"},r.createElement("p",null,"Created: ",e.created.toLocaleString()),r.createElement("ul",null,"Upload statuses:",r.createElement("li",null,"Video: ",e.vidUploaded+""),r.createElement("li",null,"GPS: ",e.gpsUploaded+""),r.createElement("li",null,"Model: ",e.modelCreated+"")),e.modelCreated&&r.createElement("p",null,r.createElement("a",{href:e.modelUrl,target:"_blank"},"View Model")),e.vidUploaded&&r.createElement("video",{className:"modelVideo",controls:!0,src:e.vidUrl}))}}]),t}(r.PureComponent),V=(n(208),Object(f.a)(P=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).refreshPage=function(){n.setState({modelCount:x.sb.profile.modelCount}),n.loadModels(n.state.page+1)},n.loadModels=function(){var e=Object(K.a)(I.a.mark(function e(t){var a;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.loading){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.setState({loading:!0,page:t-1});case 4:return e.next=6,x.sb.getModels(n.state.page);case 6:a=e.sent,n.setState({loading:!1,page:a.page,models:a.models});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.state={modelCount:0,models:[],page:0,loading:!1},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){x.sb.profile?this.refreshPage():x.sb.getProfile().then(this.refreshPage)}},{key:"componentDidUpdate",value:function(e){e.history.location.hash!=this.props.history.location.hash&&this.refreshPage()}},{key:"render",value:function(){var e=this;return r.createElement("div",{className:"page",id:"modelPage"},r.createElement(D.a,{simple:!0,defaultPageSize:10,current:this.state.page+1,total:this.state.modelCount,onChange:this.loadModels}),r.createElement("div",{id:"modelList"},this.state.models.map(function(t,n){return r.createElement(W,{key:t.id,model:t,loading:e.state.loading})})))}}]),t}(r.Component))||P),z=(n(209),n(218)),J=n(217),A=n(74),F=n(11),G=Object(f.a)(S=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).login=Object(K.a)(I.a.mark(function e(){return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.sb.login(n.state.email,n.state.password);case 3:x.loggedIn=!0,n.props.history.replace("/home"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),z.a.error(e.t0.message);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),n.state={email:"",password:""},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.sb.getModels(0).then(function(t){console.log("auto login successful"),x.loggedIn=!0,e.props.history.replace("/home")}).catch(function(e){console.error("no auto login for you: ",e)})}},{key:"render",value:function(){var e=this;return r.createElement("div",{id:"loginPage",className:"page"},r.createElement("div",{id:"loginForm"},r.createElement("img",{src:"logo.png",style:{width:300,maxWidth:"50%",marginLeft:"auto",marginRight:"auto"}}),r.createElement(J.a,{placeholder:"email",onChange:function(t){return e.setState({email:t.target.value})},onPressEnter:this.login}),r.createElement(J.a.Password,{placeholder:"password",onChange:function(t){return e.setState({password:t.target.value})},onPressEnter:this.login}),r.createElement(A.a,{type:"primary",onClick:this.login},"Login",r.createElement(F.a,{type:"right"}))))}}]),t}(r.Component))||S,R=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{id:"content"},l.a.createElement(M,null),l.a.createElement("section",{style:{width:"100%",height:"100%"}},l.a.createElement(u.b,{path:"/home",component:B}),l.a.createElement(u.b,{path:"/models",component:V}),l.a.createElement(u.b,{path:"/login",component:G})),l.a.createElement(u.a,{to:"/login"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(212);s.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[128,1,2]]]);
//# sourceMappingURL=main.f03bd448.chunk.js.map