(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{31:function(e,t,a){e.exports=a(45)},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),s=a.n(r),c=(a(36),a(4)),i=a(5),u=a(7),o=a(6),m=a(8),d=(a(37),a(12)),p=a(11),h=function(e){return{type:"User_Data",payload:e}},E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={fname:"",lname:"",email:"",password:"",address:"",redirect:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){e.preventDefault();var t;console.log("values : ",this.state.fname,this.state.lname,this.state.email,this.state.password,this.state.address),t={fname:this.state.fname,lname:this.state.lname,email:this.state.email,password:this.state.password,address:this.state.address},this.props.getResultByAction(t),this.setState({redirect:!0})}},{key:"render",value:function(){var e=this;return this.state.redirect?l.a.createElement(d.a,{to:"/"}):l.a.createElement("div",null,l.a.createElement("h1",null,"Register"),l.a.createElement("form",null,l.a.createElement("label",null,"First Name:",l.a.createElement("input",{type:"text",name:"fname",value:this.state.fname,onChange:function(t){return e.setState({fname:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("label",null,"Last Name:",l.a.createElement("input",{type:"text",name:"lname",value:this.state.lname,onChange:function(t){return e.setState({lname:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("label",null,"Email:",l.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("label",null,"Password:",l.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("label",null,"Address:",l.a.createElement("input",{type:"text",name:"address",value:this.state.address,onChange:function(t){return e.setState({address:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit",onClick:function(t){return e.handleClick(t)}})))}}]),t}(l.a.Component),b=Object(p.b)((function(e){return console.log(e),{WeatherDataBind:e.UserData}}),(function(e){return{getResultByAction:function(t){e(h(t))}}}))(E),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={email:"",password:"",reEmail:"",rePassword:"",loginFlag:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),this.state.email===this.props.UserDataBind.email&&this.state.password===this.props.UserDataBind.password?this.setState({loginFlag:!0}):alert("Please check credential")}},{key:"render",value:function(){var e=this;return this.state.loginFlag?l.a.createElement(d.a,{to:"/welcome"}):l.a.createElement("div",null,l.a.createElement("h1",null," Login "),l.a.createElement("form",null,l.a.createElement("label",null,"Email:",l.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("label",null,"Password:",l.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit",onClick:function(t){return e.handleClick(t)}})))}}]),t}(l.a.Component),f=Object(p.b)((function(e){return console.log("Login page : ",e),{UserDataBind:e.UserData.userData}}))(v),g=a(47),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={email:"",password:"",reEmail:"",rePassword:"",loginFlag:!1,editflag:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"logoutHandler",value:function(){this.props.history.push("/")}},{key:"editBtnClick",value:function(e){this.setState({editflag:!0,fname:this.props.UserDataBind.fname,lname:this.props.UserDataBind.lname,email:this.props.UserDataBind.email,password:this.props.UserDataBind.password,address:this.props.UserDataBind.address})}},{key:"editClick",value:function(e){e.preventDefault();var t;t={fname:this.state.fname,lname:this.state.lname,email:this.state.email,password:this.state.password,address:this.state.address},this.props.getResultByAction(t)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4 "}),l.a.createElement("div",{className:"col-lg-4 "}),l.a.createElement("div",{className:"col-lg-4 "},l.a.createElement("button",{onClick:function(){return e.logoutHandler()}},"Logout"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 "},l.a.createElement("h1",null," Welcome "),l.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Password"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,this.props.UserDataBind.fname),l.a.createElement("td",null,this.props.UserDataBind.lname),l.a.createElement("td",null,this.props.UserDataBind.email),l.a.createElement("td",null,this.props.UserDataBind.password),l.a.createElement("td",null,this.props.UserDataBind.address),l.a.createElement("td",null,l.a.createElement("input",{type:"submit",value:"Edit",onClick:function(t){return e.editBtnClick(t)}}))))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"}),this.state.editflag?l.a.createElement("div",{className:"col-lg-4 "},l.a.createElement("div",{className:"card bg-transparent mt-5 border-0",style:{width:"20rem"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",null,l.a.createElement("label",null,"First Name:",l.a.createElement("input",{type:"text",name:"fname",value:this.state.fname,onChange:function(t){return e.setState({fname:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("label",null,"Last Name:",l.a.createElement("input",{type:"text",name:"lname",value:this.state.lname,onChange:function(t){return e.setState({lname:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("label",null,"Email:",l.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("label",null,"Password:",l.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("label",null,"Address:",l.a.createElement("input",{type:"text",name:"address",value:this.state.address,onChange:function(t){return e.setState({address:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit",onClick:function(t){return e.editClick(t)}}))))):null,l.a.createElement("div",{className:"col-lg-4"})))}}]),t}(l.a.Component),y=Object(p.b)((function(e){return console.log("welcome page : ",e),{UserDataBind:e.UserData.userData}}),(function(e){return{getResultByAction:function(t){e(h(t))}}}))(w),O=a(13);var j=Object(d.f)((function(e){return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper",style:{background:"red"}},l.a.createElement("a",{href:"#",className:"brand-logo"},"Demo App"),l.a.createElement("ul",{id:"nav-mobile",className:"right"},l.a.createElement("ul",null,l.a.createElement(O.b,{to:"/"},"Login")),l.a.createElement("ul",null,l.a.createElement(O.b,{to:"/Register"},"Register")))))})),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={selectedOption:"Select City"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Back"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(O.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(j,null),l.a.createElement(d.b,{exact:!0,path:"/",component:f}),l.a.createElement(d.b,{path:"/Register",component:b}),l.a.createElement(d.b,{path:"/Welcome",component:y})))))))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(C,null)}}]),t}(n.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(k,null)}}]),t}(n.Component);a(43),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44);var N=a(15),B=a(29),U=a(30),S={userData:[],editflag:!1},x=Object(N.c)({UserData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"User_Data":return Object(U.a)({},e,{userData:t.payload});default:return e}}}),A=Object(N.d)(x,Object(N.a)(B.a));s.a.render(l.a.createElement(p.a,{store:A},l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.de82d1b1.chunk.js.map