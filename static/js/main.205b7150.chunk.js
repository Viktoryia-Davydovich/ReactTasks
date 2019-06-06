(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{68:function(e,t,n){e.exports=n(85)},85:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),c=n.n(r),l=n(16),i=n(13),u=n(19),s=n(17),d=n(18),m=n(41),p=n(28),h=n(48),b=n(119),g=n(4),f={btnStyle:{border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(210, 215, 221, .3)",color:"white",height:48,padding:"0 30px",margin:"50px 30px",background:"rgb(52, 92, 186)"},delBtnStyle:{border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(226, 208, 210, .3)",color:"white",height:48,padding:"0 30px",margin:"50px 30px",background:"rgb(219, 24, 24)"}},v=n(121),y={incrementBtnStyle:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px",margin:"15px 30px"},resetBtnStyle:{background:"linear-gradient(45deg, #6bfec8 5%, #776bfe 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(146, 66, 244, .3)",color:"white",height:48,padding:"0 30px",margin:"15px 30px"},typographyStyle:{margin:"15px 30px",boxShadow:"0 3px 5px 2px rgba(109, 173, 219, .1)"}},C=Object(g.a)(y)(function(e){var t=e.count,n=e.increment,a=e.decrement,r=e.reset;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(b.a,{style:y.incrementBtnStyle,onClick:n},"increment"),o.a.createElement(b.a,{style:y.incrementBtnStyle,onClick:a},"decrement"),o.a.createElement(b.a,{style:y.resetBtnStyle,onClick:r},"reset")),o.a.createElement("div",null,o.a.createElement(v.a,{style:y.typographyStyle},t)))}),E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).isCountEven=function(){return n.state.count%2===0},n.increment=function(){n.setState(function(){return{count:n.state.count+1}})},n.decrement=function(){n.setState(function(){return{count:n.state.count-1}})},n.reset=function(){n.setState(function(){return{count:0}})},n.state={count:0},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log("render - CounterContainer");var e={increment:this.increment,decrement:this.decrement,reset:this.reset,count:this.state.count};return o.a.createElement(C,e)}},{key:"componentDidMount",value:function(){console.log("component did mount - CounterContainer")}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("should component update - CounterContainer"),this.state.count!==t.count}},{key:"componentWillReceiveProps",value:function(e){console.log("component will receive props - CounterContainer"),"add"===e.label&&this.isCountEven()&&this.setState({count:this.state.count+1}),"delete"!==e.label||this.isCountEven()||this.setState({count:this.state.count-1}),"reset"===e.label&&this.setState({count:0})}},{key:"componentDidUpdate",value:function(){console.log("component did update - CounterContainer")}},{key:"componentWillUnmount",value:function(){console.log("component will unmount - CounterContainer")}}]),t}(a.Component),w=Object(g.a)(f)(function(e){var t=e.label,n=(e.counters_count,e.counters),a=e.add_counter,r=e.delete_counter,c=e.reset_counters,l=n.map(function(e){var n=e.key;return o.a.createElement(E,{key:n,label:t})});return o.a.createElement("div",null,o.a.createElement(b.a,{style:f.btnStyle,onClick:a},"new counter"),o.a.createElement(b.a,{style:f.btnStyle,onClick:r},"delete last"),o.a.createElement(b.a,{style:f.delBtnStyle,onClick:c},"reset all"),Array.from(Array(1),function(){return l}))}),x=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).add_counter=function(){var e=n.state.counters.slice(0);n.setState({counters_count:n.state.counters_count+1,counters:[].concat(Object(h.a)(e),[{key:n.state.counters_count+1}]),label:"add"})},n.delete_counter=function(){var e=n.state.counters.slice(0);n.state.counters_count>1&&n.setState({counters_count:n.state.counters_count-1,counters:e.slice(0,-1),label:"delete"})},n.reset_counters=function(){var e=n.state.counters.slice(0);n.setState({counters_count:1,counters:e.slice(0,1),label:"reset"})},n.state={counters_count:1,counters:[{key:1}],label:""},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log("render - WrapCounterContainer");var e={label:this.state.label,counters_count:this.state.counters_count,counters:this.state.counters,add_counter:this.add_counter,delete_counter:this.delete_counter,reset_counters:this.reset_counters};return o.a.createElement(w,e)}},{key:"componentDidMount",value:function(){console.log("component did mount - WrapCounterContainer")}},{key:"shouldComponentUpdate",value:function(){return console.log("component should update - WrapCounterContainer"),!0}},{key:"componentWillReceiveProps",value:function(){return console.log("component will receive props - WrapCounterContainer"),!0}},{key:"componentDidUpdate",value:function(){console.log("component did update - WrapCounterContainer")}},{key:"componentWillUnmount",value:function(){console.log("component will unmount - WrapCounterContainer")}}]),t}(a.Component),S=n(122),O=n(123),j={cardStyle:{background:"linear-gradient(to right,#f41351,#eb1c23)"},headerStyle:{fontSize:"48px",fontWeight:"bold",color:"white",padding:"50px 50px",fontFamily:"Helvetica",marginBottom:"0"},textStyle:{padding:"0 80px 30px",fontSize:"24px",color:"white",fontFamily:"Helvetica",letterSpacing:"1.5px"}},k=Object(g.a)(j)(function(){return o.a.createElement(S.a,{style:j.cardStyle},o.a.createElement(O.a,{align:"center"},o.a.createElement(v.a,{gutterBottom:!0,variant:"h5",component:"h2",style:j.headerStyle},"Hey, we're iTechArt"),o.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"p",style:j.textStyle,align:"right"},"A top-tier, one-stop custom software development company. We provide dedicated teams packed with senior-level talent to help VC-backed startups and fast-growing tech companies build successful, scalable products that users love.")))}),_=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("render - AboutContainer"),o.a.createElement(k,null)}}]),t}(a.Component),W=function(){return o.a.createElement(v.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center"},"404 - Page Not Found")},B=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("render - NotFoundContainer"),o.a.createElement(W,null)}}]),t}(a.Component),F=n(124),P=n(127),A=function(e){var t=e.handleChange,n=e.value;return o.a.createElement(P.a,{indicatorColor:"primary",textColor:"primary",value:n,onChange:t},o.a.createElement(F.a,{label:"About us",to:"/about",component:m.b}),o.a.createElement(F.a,{label:"Counters",to:"/counters",component:m.b}),o.a.createElement(F.a,{label:"Log in",to:"/login",component:m.b}))},R=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e,t){n.setState({value:t})},n.state={value:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log("render - MenuContainer");var e={handleChange:this.handleChange,value:this.state.value};return o.a.createElement(A,e)}}]),t}(a.Component),U=n(64),D={email:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,password:/[^]{6,}/},z={email:"Invalid email",password:"Invalid password"},I=n(126),H=n(125),J=function(e){var t=e.email,n=e.password,a=e.errorEmail,r=e.errorPassword,c=e.handleChange,l=e.handleSubmit;return o.a.createElement(H.a,{maxWidth:"xs"},o.a.createElement(v.a,{component:"h1",variant:"h5"},"Log in"),o.a.createElement("form",{onSubmit:l},o.a.createElement(I.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:t,onChange:c}),o.a.createElement(v.a,{color:"error"},a),o.a.createElement(I.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:n,onChange:c}),o.a.createElement(v.a,{color:"error"},r),o.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary"},"Log In")))},L=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(U.a)({},e.target.name,e.target.value))},n.validateField=function(e,t){switch(e){case"email":return D.email.test(t)?"":z.email;case"password":return D.password.test(t)?"":z.password}return""},n.handleSubmit=function(e){e.preventDefault();var t=n.validateField("password",n.state.password),a=n.validateField("email",n.state.email);t||a?n.setState({errorPassword:t,errorEmail:a}):(console.log(JSON.stringify(n.state)),n.setState({password:"",email:"",errorPassword:"",errorEmail:""}))},n.state={password:"",email:"",errorPassword:"",errorEmail:""},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e={email:this.state.email,password:this.state.password,errorEmail:this.state.errorEmail,errorPassword:this.state.errorPassword,handleChange:this.handleChange,handleSubmit:this.handleSubmit};return o.a.createElement(J,e)}}]),t}(a.Component),M=function(){return o.a.createElement(m.a,null,o.a.createElement(p.d,null,o.a.createElement(p.b,{path:"/404",component:B}),o.a.createElement(p.b,null,o.a.createElement(R,null),o.a.createElement(p.d,null,o.a.createElement(p.b,{exact:!0,path:"/"}),o.a.createElement(p.b,{path:"/counters",component:x}),o.a.createElement(p.b,{path:"/about",component:_}),o.a.createElement(p.b,{path:"/login",component:L}),o.a.createElement(p.b,{component:function(){return o.a.createElement(p.a,{from:"*",to:"/404"})}})))))},N=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("render - RoutingContainer"),o.a.createElement(M,null)}}]),t}(a.Component);c.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.205b7150.chunk.js.map