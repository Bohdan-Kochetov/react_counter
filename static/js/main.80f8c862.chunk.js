(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var r=e(3),c=e.n(r),u=e(4),o=e(5),a=e(7),i=e(6),s=e(1),b=e.n(s),d=(e(12),e(0)),h=function(t){Object(a.a)(e,t);var n=Object(i.a)(e);function e(){var t;Object(u.a)(this,e);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=n.call.apply(n,[this].concat(c))).state={number:0},t.addOne=function(){t.setState((function(t){return{number:t.number+1}}))},t.add100=function(){t.setState((function(t){return{number:t.number+100}}))},t.increase=function(){t.state.number%5===0&&t.add100(),t.addOne()},t.reset=function(){t.setState((function(){return{number:0}}))},t}return Object(o.a)(e,[{key:"render",value:function(){var t=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h1",{children:["Count:"," ",this.state.number]}),Object(d.jsx)("button",{type:"button",onClick:this.addOne,children:"Add 1"}),Object(d.jsx)("button",{type:"button",onClick:this.add100,children:"Add 100"}),Object(d.jsx)("button",{type:"button",onClick:function(){t.increase()},children:"Special"}),Object(d.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"})]})}}]),e}(b.a.Component),j=h;c.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.80f8c862.chunk.js.map