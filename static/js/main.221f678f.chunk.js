(this.webpackJsonptutorial=this.webpackJsonptutorial||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),u=a.n(c),o=(a(11),a(1)),l=a(2),s=a.n(l),i=a(5),m=r.a.memo((function(e){var t=e.products,a=e.addToCart;return r.a.createElement("section",{className:"products"},t.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e,{addToCart:a}))})))})),d=function(e){var t=e.fields,a=e.addToCart,n=t.name,c=t.price;c/=100;var u=t.image[0].url;return r.a.createElement("article",{className:"product"},r.a.createElement("img",{src:u,alt:n}),r.a.createElement("h4",null,n),r.a.createElement("p",null,"$",c),r.a.createElement("button",{onClick:a},"add to cart"))},p=function(){var e=function(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)([]),l=Object(o.a)(u,2),m=l[0],d=l[1],p=Object(n.useCallback)(Object(i.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,d(n),c(!1);case 8:case"end":return t.stop()}}),t)}))),[e]);return Object(n.useEffect)((function(){p()}),[e,p]),{loading:r,products:m}}("https://course-api.com/javascript-store-products").products,t=Object(n.useState)(0),a=Object(o.a)(t,2),c=a[0],u=a[1],l=Object(n.useState)(0),d=Object(o.a)(l,2),p=d[0],f=d[1],b=Object(n.useCallback)((function(){f(p+1)}),[p]),E=Object(n.useMemo)((function(){return e.reduce((function(e,t){var a=t.fields.price;return a>=e&&(e=a),e}),0)/100}),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Count : ",c),r.a.createElement("button",{className:"btn",onClick:function(){return u(c+1)}},"click me"),r.a.createElement("h1",{style:{marginTop:"3rem"}},"cart : ",p),r.a.createElement("h2",null,"Most Expensive : $",E),r.a.createElement(m,{products:e,addToCart:b}))};var f=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(p,null))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.221f678f.chunk.js.map