(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{55:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(32),i=n.n(c),s=n(20),l=n(9),o=n(41),u=n(16),d=n.n(u),b=n(4),m=n(21),p=n(26),h=n(27),j=n(29),g=n(28),O=n(7),f=n(6),v=n(22),x=(n(55),n(1));var y=Object(O.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,a=e.history,c=e.linkUrl,i=e.match;return Object(x.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){return a.push("".concat(i.url).concat(c))},children:[Object(x.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(x.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),w=Object(f.a)([function(e){return e.directory}],(function(e){return e.sections})),k=(n(58),Object(f.b)({sections:w})),N=Object(l.b)(k)((function(e){var t=e.sections;return Object(x.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(v.a)(e,["id"]);return Object(x.jsx)(y,Object(b.a)({},n),t)}))})}));n(59);var C=function(){return Object(x.jsx)("div",{className:"homepage",children:Object(x.jsx)(N,{})})},E=n(42),I=n.n(E),U=Object(f.a)([function(e){return e.shop}],(function(e){return e.collections})),T=Object(f.a)([U],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),S=I()((function(e){return Object(f.a)([U],(function(t){return t[e]}))})),M={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"},B=function(){return{type:M.TOGGLE_CART_HIDDEN}},A=function(e){return{type:M.ADD_ITEM,payload:e}};n(60);var P=function(e){var t=e.children,n=e.isGoogleSignIn,r=e.inverted,a=Object(v.a)(e,["children","isGoogleSignIn","inverted"]);return Object(x.jsx)("button",Object(b.a)(Object(b.a)({className:"".concat(n?"google-sign-in":""," ").concat(r?"inverted":""," custom-button")},a),{},{children:t}))};n(61);var R=Object(l.b)(null,(function(e){return{addItem:function(t){return e(A(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,a=t.price,c=t.imageUrl;return Object(x.jsxs)("div",{className:"collection-item",children:[Object(x.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),Object(x.jsxs)("div",{className:"collection-footer",children:[Object(x.jsx)("span",{className:"name",children:r}),Object(x.jsx)("span",{className:"price",children:a})]}),Object(x.jsx)(P,{onClick:function(){return n(t)},inverted:!0,children:"Add to Cart"})]})}));n(62);var _=function(e){var t=e.title,n=e.items;return Object(x.jsxs)("div",{className:"collection-preview",children:[Object(x.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(x.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(x.jsx)(R,{item:e},e.id)}))})]})};n(63);var D=Object(f.b)({collections:T}),G=Object(l.b)(D)((function(e){var t=e.collections;return Object(x.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(v.a)(e,["id"]);return Object(x.jsx)(_,Object(b.a)({},n),t)}))})}));n(64);var W=Object(l.b)((function(e,t){return{collection:S(t.match.params.collectionId)(e)}}))((function(e){var t=e.collection,n=t.title,r=t.items;return Object(x.jsxs)("div",{className:"collection",children:[Object(x.jsx)("h2",{className:"title",children:n}),Object(x.jsx)("div",{className:"items",children:r.map((function(e){return Object(x.jsx)(R,{item:e},e.id)}))})]})})),H=function(e){var t=e.match;return Object(x.jsxs)("div",{className:"shop-page",children:[Object(x.jsx)(O.b,{exact:!0,path:"".concat(t.path),component:G}),Object(x.jsx)(O.b,{path:"".concat(t.path,"/:collectionId"),component:W})]})};function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var V=r.createElement("desc",null,"Created with Sketch."),F=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function z(e,t){var n=e.title,a=e.titleId,c=q(e,["title","titleId"]);return r.createElement("svg",L({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":a},c),void 0===n?r.createElement("title",{id:a},"Group"):n?r.createElement("title",{id:a},n):null,V,F)}var J=r.forwardRef(z),K=(n.p,n(30)),Q=(n(84),n(66),function(){var e=Object(m.a)(d.a.mark((function e(t,n){var r,a,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=X.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(b.a)({displayName:a,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("Error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());K.a.initializeApp({apiKey:"AIzaSyC5MHnTwXahgvxf2V5oo_H7xV7ko6QNN3c",authDomain:"crown-db-d51bd.firebaseapp.com",projectId:"crown-db-d51bd",storageBucket:"crown-db-d51bd.appspot.com",messagingSenderId:"91915700180",appId:"1:91915700180:web:663aed8b0c036e9f743841"});var Y=K.a.auth(),X=K.a.firestore(),Z=new K.a.auth.GoogleAuthProvider;Z.setCustomParameters({prompt:"select_account"});var $=function(){return Y.signInWithPopup(Z)},ee=(K.a,function(e){return e.cart}),te=Object(f.a)([ee],(function(e){return e.cartItems})),ne=Object(f.a)([ee],(function(e){return e.hidden})),re=Object(f.a)([te],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ae=Object(f.a)([te],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}));n(68);var ce=function(e){var t=e.item,n=t.imageUrl,r=t.price,a=t.name,c=t.quantity;return Object(x.jsxs)("div",{className:"cart-item",children:[Object(x.jsx)("img",{src:n,alt:"item"}),Object(x.jsxs)("div",{className:"item-details",children:[Object(x.jsx)("span",{className:"name",children:a}),Object(x.jsxs)("span",{className:"price",children:[c," x $",r]})]})]})};n(69);var ie=Object(f.b)({cartItems:te}),se=Object(O.g)(Object(l.b)(ie)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return Object(x.jsxs)("div",{className:"cart-dropdown",children:[Object(x.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(x.jsx)(ce,{item:e},e.id)})):Object(x.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(x.jsx)(P,{onClick:function(){n.push("/checkout"),r(B())},children:"GO TO CHECKOUT"})]})})));function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ue=r.createElement("g",null),de=r.createElement("g",null),be=r.createElement("g",null),me=r.createElement("g",null),pe=r.createElement("g",null),he=r.createElement("g",null),je=r.createElement("g",null),ge=r.createElement("g",null),Oe=r.createElement("g",null),fe=r.createElement("g",null),ve=r.createElement("g",null),xe=r.createElement("g",null),ye=r.createElement("g",null),we=r.createElement("g",null),ke=r.createElement("g",null);function Ne(e,t){var n=e.title,a=e.titleId,c=oe(e,["title","titleId"]);return r.createElement("svg",le({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ue,de,be,me,pe,he,je,ge,Oe,fe,ve,xe,ye,we,ke)}var Ce=r.forwardRef(Ne);n.p,n(70);var Ee=Object(f.b)({itemCount:re}),Ie=Object(l.b)(Ee,(function(e){return{toggleCartHidden:function(){return e(B())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(x.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(x.jsx)(Ce,{className:"shopping-icon"}),Object(x.jsx)("span",{className:"item-count",children:n})]})})),Ue=Object(f.a)([function(e){return e.user}],(function(e){return e.currentUser}));n(71);var Te=Object(f.b)({currentUser:Ue,hidden:ne}),Se=Object(l.b)(Te)((function(e){var t=e.currentUser,n=e.hidden;return Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)(s.b,{to:"/",className:"logo-container",children:Object(x.jsx)(J,{className:"logo"})}),Object(x.jsxs)("div",{className:"options",children:[Object(x.jsx)(s.b,{className:"option",to:"/shop",children:"SHOP"}),Object(x.jsx)(s.b,{className:"option",to:"/contact",children:"CONTACT"}),t?Object(x.jsx)("div",{className:"option",onClick:function(){return Y.signOut()},children:"SIGN OUT"}):Object(x.jsx)(s.b,{className:"option",to:"/signIn",children:"SIGN IN"}),Object(x.jsx)(Ie,{})]}),n?null:Object(x.jsx)(se,{})]})})),Me=n(19);n(72);var Be=function(e){var t=e.handleChange,n=e.label,r=Object(v.a)(e,["handleChange","label"]);return Object(x.jsxs)("div",{className:"group",children:[Object(x.jsx)("input",Object(b.a)({className:"form-input",onChange:t},r)),n?Object(x.jsx)("label",{className:"".concat(r.value.lenght?"shrink":""," form-input-label"),children:n}):null]})},Ae=(n(73),function(e){Object(j.a)(n,e);var t=Object(g.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,a=n.email,c=n.password,e.prev=2,e.next=5,Y.signInWithEmailAndPassword(a,c);case 5:r.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,a=t.name;r.setState(Object(Me.a)({},a,n))},r.state={email:"",password:""},r}return Object(h.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"sign-in",children:[Object(x.jsx)("h2",{className:"title",children:"I already have an account"}),Object(x.jsx)("span",{children:"Sign in with your email and password"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsx)(Be,{type:"email",name:"email",value:this.state.email,handleChange:this.handleChange,required:!0,label:"Email"}),Object(x.jsx)(Be,{type:"password",name:"password",value:this.state.password,handleChange:this.handleChange,required:!0,label:"Password"}),Object(x.jsxs)("div",{className:"buttons",children:[Object(x.jsx)(P,{type:"submit",children:"Sign In"}),Object(x.jsx)(P,{type:"button",onClick:$,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),n}(r.Component)),Pe=(n(74),function(e){Object(j.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(m.a)(d.a.mark((function t(n){var r,a,c,i,s,l,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,a=r.displayName,c=r.email,i=r.password,s=r.confirmPassword,i===s){t.next=5;break}return alert("Passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,Y.createUserWithEmailAndPassword(c,i);case 8:return l=t.sent,o=l.user,t.next=12,Q(o,{displayName:a});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(Me.a)({},r,a))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,a=e.confirmPassword;return Object(x.jsxs)("div",{className:"sign-up",children:[Object(x.jsx)("h2",{className:"title",children:"I do not have an account"}),Object(x.jsx)("span",{children:"Sign up with your email and password"}),Object(x.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(x.jsx)(Be,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(x.jsx)(Be,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(x.jsx)(Be,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),Object(x.jsx)(Be,{type:"password",name:"confirmPassword",value:a,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(x.jsx)(P,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(r.Component));n(75);var Re=function(){return Object(x.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(x.jsx)(Ae,{}),Object(x.jsx)(Pe,{})]})},_e="SET_CURRENT_USER";n(76),n(77);var De=Object(l.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:M.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(A(t))},removeItem:function(t){return e(function(e){return{type:M.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,r=e.addItem,a=e.removeItem,c=t.name,i=t.imageUrl,s=t.price,l=t.quantity;return Object(x.jsxs)("div",{className:"checkout-item",children:[Object(x.jsx)("div",{className:"image-container",children:Object(x.jsx)("img",{src:i,alt:"item"})}),Object(x.jsx)("span",{className:"name",children:c}),Object(x.jsxs)("span",{className:"quantity",children:[Object(x.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276e"}),Object(x.jsx)("span",{className:"value",children:l}),Object(x.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276f"})]}),Object(x.jsx)("span",{className:"price",children:s}),Object(x.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})})),Ge=(n(78),n(43)),We=n.n(Ge);var He=function(e){var t=e.price,n=100*t;return Object(x.jsx)(We.a,{label:"Pay Now",name:"CRWN Clothing Ld.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_51IVggKIZeBxF4eRBuqPYraSarhQeTxFBwNAv5Dyx08g6c7BoLauh10ygmiguQHiCoqeN8G1Wtom9MDTdzUALBOCM00KO6nob8u"})};var Le=Object(f.b)({cartItems:te,total:ae}),qe=Object(l.b)(Le)((function(e){var t=e.cartItems,n=e.total;return Object(x.jsxs)("div",{className:"checkout-page",children:[Object(x.jsxs)("div",{className:"checkout-header",children:[Object(x.jsx)("div",{className:"header-block",children:Object(x.jsx)("span",{children:"Product"})}),Object(x.jsx)("div",{className:"header-block",children:Object(x.jsx)("span",{children:"Description"})}),Object(x.jsx)("div",{className:"header-block",children:Object(x.jsx)("span",{children:"Quantity"})}),Object(x.jsx)("div",{className:"header-block",children:Object(x.jsx)("span",{children:"Price"})}),Object(x.jsx)("div",{className:"header-block",children:Object(x.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(x.jsx)(De,{cartItem:e},e.id)})),Object(x.jsx)("div",{className:"total",children:Object(x.jsxs)("span",{children:["Total $",n]})}),Object(x.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(x.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/22 - CVV: 123"]}),Object(x.jsx)(He,{price:n})]})})),Ve=function(e){Object(j.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).unsuscribeFromAuth=null,e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsuscribeFromAuth=Y.onAuthStateChanged(function(){var t=Object(m.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,Q(n);case 3:t.sent.onSnapshot((function(t){e(Object(b.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsuscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{children:[Object(x.jsx)(Se,{}),Object(x.jsxs)(O.d,{children:[Object(x.jsx)(O.b,{exact:!0,path:"/",component:C}),Object(x.jsx)(O.b,{path:"/shop",component:H}),Object(x.jsx)(O.b,{exact:!0,path:"/checkout",component:qe}),Object(x.jsx)(O.b,{exact:!0,path:"/signIn",render:function(){return e.props.currentUser?Object(x.jsx)(O.a,{to:"/"}):Object(x.jsx)(Re,{})}})]})]})}}]),n}(r.Component),Fe=Object(f.b)({currentUser:Ue}),ze=Object(l.b)(Fe,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:_e,payload:e}}(t))}}}))(Ve),Je=n(18),Ke=n(34),Qe=(n(79),n(44)),Ye=n.n(Qe),Xe={currentUser:null},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(b.a)(Object(b.a)({},e),{},{currentUser:t.payload});default:return e}},$e=n(45),et=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(b.a)(Object(b.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object($e.a)(e),[Object(b.a)(Object(b.a)({},t),{},{quantity:1})])},tt=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(b.a)(Object(b.a)({},e),{},{quantity:e.quantity-1}):e}))},nt={hidden:!0,cartItems:[]},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.TOGGLE_CART_HIDDEN:return Object(b.a)(Object(b.a)({},e),{},{hidden:!e.hidden});case M.ADD_ITEM:return Object(b.a)(Object(b.a)({},e),{},{cartItems:et(e.cartItems,t.payload)});case M.CLEAR_ITEM_FROM_CART:return Object(b.a)(Object(b.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case M.REMOVE_ITEM:return Object(b.a)(Object(b.a)({},e),{},{cartItems:tt(e.cartItems,t.payload)});default:return e}},at={sections:[{title:"Hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"Jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"Sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},Object(Me.a)({title:"Womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},"size","large"),Object(Me.a)({title:"Mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"},"size","large")]},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;return t.type,e},it={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;return t.type,e},lt={key:"root",storage:Ye.a,whitelist:["cart"]},ot=Object(Je.c)({user:Ze,cart:rt,directory:ct,shop:st}),ut=Object(Ke.a)(lt,ot);var dt=Object(Je.d)(ut,Je.a.apply(void 0,[])),bt=Object(Ke.b)(dt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var mt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};n(82);i.a.render(Object(x.jsx)(l.a,{store:dt,children:Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(s.a,{children:Object(x.jsx)(o.a,{persistor:bt,children:Object(x.jsx)(ze,{})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),mt()}},[[83,1,2]]]);
//# sourceMappingURL=main.4833633d.chunk.js.map