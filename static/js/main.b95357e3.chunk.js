(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){e.exports=a(133)},109:function(e,t,a){},110:function(e,t,a){},124:function(e,t,a){var n={"./blackbutteporter.png":125,"./default.png":126,"./freshhaze.png":127,"./freshsqueezed.png":128,"./mirrorpond.png":129,"./twilight.png":130};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=124},125:function(e,t,a){e.exports=a.p+"static/media/blackbutteporter.e475104b.png"},126:function(e,t,a){e.exports=a.p+"static/media/default.1c3a43e8.png"},127:function(e,t,a){e.exports=a.p+"static/media/freshhaze.0a33b0a0.png"},128:function(e,t,a){e.exports=a.p+"static/media/freshsqueezed.a094f50c.png"},129:function(e,t,a){e.exports=a.p+"static/media/mirrorpond.b978bf37.png"},130:function(e,t,a){e.exports=a.p+"static/media/twilight.31291e7a.png"},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),i=(a(109),a(24)),c=a(77),s=a(37),d=a(92),u=a(78),m=a(91),g=(a(110),a(19)),p=a(170),f=a(172),b=a(173),E=a(40),h=a(174),v=a(83),k=a.n(v),y=a(90),x=a(191),C=a(44),w=a(79),S=a.n(w),O=Object(p.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},navLink:{textDecoration:"none",color:"black"},logo:{width:150}}}),T={backgroundColor:"rgb(17, 13, 1)",fontFamily:"'Roboto Condensed', sans-serif",color:"rgb(230, 225, 206)"},B={color:"#e6e1ce"};function N(e){var t=O(),a=r.a.useState(null),n=Object(g.a)(a,2),l=n[0],o=n[1];function i(){o(null)}return r.a.createElement("div",{className:t.root},r.a.createElement(f.a,{position:"static",color:"default",style:T},r.a.createElement(b.a,{style:{justifyContent:"space-between"}},r.a.createElement(h.a,{edge:"start",className:t.menuButton,style:B,"aria-label":"Menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},r.a.createElement(k.a,null)),r.a.createElement(y.a,{id:"simple-menu",anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:i},r.a.createElement(x.a,{onClick:i},r.a.createElement(C.b,{className:t.navLink,to:"/"},"PatronView")),r.a.createElement(x.a,{onClick:i},r.a.createElement(C.b,{className:t.navLink,to:"/admin"},"AdminView"))),r.a.createElement("div",{style:{display:"flex",alignItems:"center",marginRight:"5%"}},r.a.createElement(E.a,{style:{fontFamily:"'Roboto Condensed', sans-serif",fontWeight:"bolder"}},"What's On Tap@"),r.a.createElement("img",{className:t.logo,src:S.a,alt:"Deschutes Brewery"})))))}var K=a(35),j=a(3),D=a(175),L=a(176),P=a(180),I=a(177),A=a(179),F=a(56),R=a(85),V=a.n(R),z=a(134),M=Object(z.a)({container:{width:"25%",textAlign:"center"}}),U=function(e){var t=e.price,a=M();return r.a.createElement("div",{className:a.container,style:t>5.5?{backgroundColor:"#dcb332"}:{backgroundColor:"#b3b8b8"}},r.a.createElement("p",null,"$",t))},q=Object(z.a)({container:{backgroundColor:"#ffbaba",width:"50%",textAlign:"center"}}),W=function(e){var t=e.abv,a=q();return r.a.createElement("div",{className:a.container,style:t>6?{backgroundColor:"#ed8a19"}:{backgroundColor:"#3fb3db"}},r.a.createElement("p",null,"ABV: ",t,"%"))},H=Object(z.a)({colorBoxItem2:{width:"100%",textAlign:"center"}}),$=function(e){var t=e.pintsLeft,a=H(),n={height:"100%",backgroundImage:"linear-gradient(to right, ".concat(t<115?"#973737":t<120?"#eeb43d":"#74ab63"," ").concat(t/1.24,"%, white ").concat(t/1.24-100,"%)")};return r.a.createElement("div",{className:a.colorBoxItem2},r.a.createElement("div",{style:n},r.a.createElement("p",{style:{margin:0,padding:16}},"pints Left: ",t)))},G=a(178),J=a(93),_=Object(p.a)(function(e){return{card:{margin:"5px auto",width:"100%",zIndex:"100"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:F.a[500]},colorBoxContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between"},noPadding:{padding:"0"},title:{maxWidth:"20%"},cardRow:{display:"flex"},actionBox:{height:"105px",alignContent:"center",display:"flex",justifyContent:"center",borderRadius:"20px",width:"90px",zIndex:"1",marginLeft:"-61px",padding:"10px 0px 10px 10px",boxShadow:"1px 3px 10px -2px black",marginTop:14,backgroundColor:"rgb(230, 225, 206)"}}}),Q={padding:0},X={padding:"8px"},Y={backgroundColor:"rgb(17, 13, 1)",color:"#e6e1ce"};var Z=function(e){var t=_(),a=r.a.useState(!1),n=Object(g.a)(a,2),l=n[0],o=n[1];return r.a.createElement("div",{className:t.cardRow},r.a.createElement(D.a,{className:t.card,raised:!0},r.a.createElement(L.a,{style:e.bg,title:r.a.createElement(E.a,{variant:"h6",className:t.title},e.name),subheader:e.style,action:"pos"===e.view&&r.a.createElement(I.a,null,r.a.createElement(G.a,{variant:"outlined",onClick:function(){return e.onSellPint(e.uid)}},"Sell Pint"))}),r.a.createElement(A.a,{in:l,timeout:"auto",unmountOnExit:!0},r.a.createElement(P.a,{style:Y},r.a.createElement(E.a,{variant:"h5"},e.description)),r.a.createElement(P.a,{className:t.noPadding,style:Q},r.a.createElement(J.a,{className:t.colorBoxContainer,square:!0},r.a.createElement(U,{price:e.price}),r.a.createElement(W,{abv:e.abv}),r.a.createElement($,{pintsLeft:e.pintsLeft}))))),r.a.createElement("div",{className:t.actionBox},r.a.createElement(h.a,{style:X,className:Object(j.a)(t.expand,Object(K.a)({},t.expandOpen,l)),onClick:function(){o(!l)},"aria-expanded":l,"aria-label":"Show more"},r.a.createElement(V.a,null))))},ee=a(181),te=Object(z.a)(function(e){return{centered:{margin:"0 auto"}}});function ae(e){var t=e.kegs,n=te(),l=a(124);return r.a.createElement(ee.a,{container:!0},r.a.createElement(ee.a,{item:!0,xs:12,sm:8,className:n.centered},t.map(function(e){var t=l("./".concat(e.imageKey,".png")),a={backgroundImage:"url(".concat(t,")"),backgroundPosition:"125px center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:110,backgroundColor:"rgb(230, 225, 206)"};return r.a.createElement(Z,{name:e.name,brewery:e.brewery,style:e.style,abv:e.abv,pintsLeft:e.pintsLeft,price:e.price,description:e.description,key:e.uid,view:"patron",bg:a})})))}Object(z.a)(function(e){return{centered:{margin:"0 auto"}}});var ne=Object(p.a)({adminCard:{margin:"5px 0",padding:5,display:"flex",justifyContent:"space-between",textAlign:"center",flexWrap:"wrap"},adminCardText:{margin:"0 auto",width:150},adminCardAction:{margin:"0 auto"}}),re=function(e){var t=e.keg,a=e.tapStatus,n=e.onToggleTapStatus,l=e.onRefillKeg,o=e.onSetViewedBeer,i=e.onSellPint,c=ne(),s={backgroundImage:"linear-gradient(to right, ".concat(t.pintsLeft<115?"#973737":t.pintsLeft<120?"#eeb43d":"#74ab63"," ").concat(t.pintsLeft/1.24,"%, white ").concat(t.pintsLeft/1.24-100,"%)")};return r.a.createElement(D.a,{className:c.adminCard,style:t.onTap&&"notOnTap"===a?{display:"none"}:{display:"flex"}},r.a.createElement(P.a,{className:c.adminCardText},t.name),r.a.createElement(I.a,{className:c.adminCardAction},t.onTap&&r.a.createElement(G.a,{variant:"outlined",size:"small",onClick:function(){i(t.uid)}},"Sell Pint"),t.onTap&&"onTap"===a?r.a.createElement(G.a,{variant:"contained",size:"small",onClick:function(){n(t.uid)}},"UnTap"):r.a.createElement(G.a,{variant:"contained",size:"small",onClick:function(){n(t.uid)}},"Tap"),t.pintsLeft>120?r.a.createElement(G.a,{disabled:!0,variant:"outlined",size:"small",style:s},t.pintsLeft):r.a.createElement(G.a,{variant:"outlined",size:"small",style:s,onClick:function(){return l(t.uid)}},"Reset"),r.a.createElement(G.a,{variant:"outlined",size:"small",onClick:function(){return o(t.uid)}},"View")))},le=function(e){var t=e.kegs,a=e.tapStatus,n=e.onToggleTapStatus,l=e.onRefillKeg,o=e.onSetViewedBeer,i=e.onSellPint;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(re,{keg:e,tapStatus:a,onToggleTapStatus:n,onRefillKeg:l,onSetViewedBeer:o,key:e.uid,onSellPint:i})}))},oe=Object(p.a)({adminPaper:{margin:10},header:{textAlign:"center",backgroundColor:"#979797cc",borderRadius:5}}),ie=function(e){var t=e.kegsOnTap,a=e.kegs,n=e.onToggleTapStatus,l=e.onRefillKeg,o=e.onSetViewedBeer,i=e.onSellPint,c=oe();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:c.header},"Beers On Tap"),r.a.createElement(le,{kegs:t,tapStatus:"onTap",onToggleTapStatus:n,onRefillKeg:l,onSetViewedBeer:o,onSellPint:i}),r.a.createElement("h2",{className:c.header},"Stock"),r.a.createElement(le,{kegs:a,tapStatus:"notOnTap",onToggleTapStatus:n,onRefillKeg:l,onSetViewedBeer:o}))},ce=a(182),se=a(86),de=a.n(se),ue=Object(z.a)({card:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",margin:"0 auto"}}),me=function(e){e.editMode;var t=e.onSetEditMode,a=(e.formOpen,e.onClickOpenForm),n=(e.onCloseForm,e.onCreateKeg,e.onSetViewedBeer,ue());return r.a.createElement(D.a,{className:n.card},r.a.createElement(P.a,null,r.a.createElement(E.a,{className:n.title,color:"textSecondary",gutterBottom:!0},"Create New Keg")),r.a.createElement(I.a,null,r.a.createElement(ce.a,{color:"inherit","aria-label":"Add",size:"small",className:n.fab,onClick:function(){t("create"),a()}},r.a.createElement(de.a,null))))},ge=a(190),pe=a(186),fe=a(184),be=a(185),Ee=a(183),he=Object(z.a)({root:{marginTop:5},cardContent:{padding:"5px 10px"},cardActions:{justifyContent:"right"}}),ve=function(e){var t=e.keg,a=e.viewedBeer,n=e.onDeleteKeg,l=e.onSetViewedBeer,o=(e.editMode,e.onSetEditMode),i=e.onClickOpenForm,c=he(),s=r.a.useState(!1),d=Object(g.a)(s,2),u=d[0],m=d[1];function p(){m(!1)}return r.a.createElement(D.a,{className:c.root},"default"!==a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:c.cardContent,variant:"h4"},"Name: ",t.name),r.a.createElement(E.a,{className:c.cardContent,variant:"h6"},"Brewery: ",t.brewery),r.a.createElement(E.a,{className:c.cardContent,variant:"h6"},"Style: ",t.style),r.a.createElement(E.a,{className:c.cardContent,variant:"h6"},"Description: ",t.description),r.a.createElement(E.a,{className:c.cardContent,variant:"h6"},"ABV: ",t.abv,"%"),r.a.createElement(E.a,{className:c.cardContent,variant:"h6"},"Price: $",t.price),r.a.createElement(I.a,{className:c.cardActions},r.a.createElement(G.a,{variant:"outlined",onClick:function(){return o("edit"),void i()}},"Edit"),r.a.createElement(G.a,{variant:"contained",onClick:function(){m(!0)}},"Delete")),r.a.createElement(ge.a,{open:u,onClose:p,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Ee.a,{id:"alert-dialog-title"},"Delete this keg?"),r.a.createElement(fe.a,null,r.a.createElement(be.a,{id:"alert-dialog-description"},"Deleting this keg will remove it from stock of ",r.a.createElement("em",null,"ALL")," locations.")),r.a.createElement(pe.a,null,r.a.createElement(G.a,{onClick:function(){return p()},color:"primary"},"Disagree"),r.a.createElement(G.a,{onClick:function(){return function(e){var t=e;l("default"),n(t),p()}(t.uid)},color:"black",autoFocus:!0},"Agree")))))},ke=a(87),ye=a(89),xe=a.n(ye),Ce=a(187),we=a(188),Se=a(88),Oe=Object(p.a)(function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}}),Te=r.a.forwardRef(function(e,t){return r.a.createElement(Ce.a,Object.assign({direction:"up",ref:t},e))}),Be=function(e){var t=e.editMode,a=e.onSetEditMode,n=e.onCloseForm,l=e.formOpen,o=e.onCreateKeg,i=e.onSetViewedBeer,c=e.keg,s=e.onUpdateKeg,d=Oe(),u={name:"",brewery:"Deschutes",style:"",abv:"",pintsLeft:124,price:"",description:"",onTap:!1,imageKey:"default",uid:Object(Se.v4)()},m=r.a.useState(u),p=Object(g.a)(m,2),v=p[0],k=p[1];r.a.useEffect(function(){"edit"===t&&k(c)},[t,c]);var y=function(e){return function(t){k(Object(ke.a)({},v,Object(K.a)({},e,t.target.value)))}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge.a,{fullScreen:!0,open:l,onClose:n,TransitionComponent:Te},r.a.createElement(f.a,{className:d.appBar,style:{background:"rgb(17, 13, 1)",color:"rgb(230, 225, 206)"}},r.a.createElement(b.a,null,r.a.createElement(h.a,{edge:"start",color:"inherit",onClick:n,"aria-label":"Close"},r.a.createElement(xe.a,null)),r.a.createElement(E.a,{variant:"h6",className:d.title},"create"===t?"Create New Keg":"Update Keg"),"create"===t?r.a.createElement(G.a,{color:"inherit",variant:"outlined",onClick:function(){o(v),i(v.uid),n(),a(""),k(u)}},"Submit"):r.a.createElement(G.a,{color:"inherit",onClick:function(){s(v),i(v.uid),n(),a(""),k(u)}},"Update"))),r.a.createElement(fe.a,null,r.a.createElement(be.a,null,"Fill out form and press submit to add a new keg to stock"),r.a.createElement("form",null,r.a.createElement(we.a,{id:"nameInput",label:"Beer Name",placeholder:"Beer Name",className:d.textField,margin:"normal",required:!0,value:v.name,onChange:y("name")}),r.a.createElement("br",null),r.a.createElement(we.a,{id:"breweryInput",label:"Brewery",placeholder:"Deschutes",helperText:"Only change if keg is a guest tap",className:d.textField,margin:"normal",value:v.brewery,onChange:y("brewery")}),r.a.createElement("br",null),r.a.createElement(we.a,{id:"styleInput",label:"Beer Style",placeholder:"Ale",className:d.textField,margin:"normal",required:!0,value:v.style,onChange:y("style")}),r.a.createElement("br",null),r.a.createElement(we.a,{id:"abvInput",label:"ABV",placeholder:"ABV",className:d.textField,helperText:"Number only - Do not include % symbol",margin:"normal",required:!0,value:v.abv,onChange:y("abv")}),r.a.createElement("br",null),r.a.createElement(we.a,{id:"priceInput",label:"Price",placeholder:"Price",className:d.textField,helperText:"Number only - Do not include $ symbol",margin:"normal",required:!0,value:v.price,onChange:y("price")}),r.a.createElement("br",null),r.a.createElement(we.a,{id:"descInput",multiline:!0,label:"Description",placeholder:"Damn Tasty",helperText:"Descriptions will show in beer display drop down ",className:d.textField,margin:"normal",required:!0,value:v.description,onChange:y("description")}),r.a.createElement("br",null)))))},Ne=Object(z.a)({header:{textAlign:"center",backgroundColor:"#979797cc",borderRadius:5}}),Ke=function(e){var t=e.viewedBeer,a=e.kegs,n=e.onDeleteKeg,l=e.onSetViewedBeer,o=e.onCreateKeg,i=e.onUpdateKeg,c=r.a.useState("view"),s=Object(g.a)(c,2),d=s[0],u=s[1],m=r.a.useState(!1),p=Object(g.a)(m,2),f=p[0],b=p[1];function E(){b(!0)}var h=function(){return a[(e=t,a.findIndex(function(t){return t.uid===e}))];var e},v=Ne();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:v.header},"Keg Manager"),r.a.createElement(me,{onSetEditMode:u,onClickOpenForm:E}),r.a.createElement(ve,{keg:h(),viewedBeer:t,onDeleteKeg:n,onSetViewedBeer:l,onSetEditMode:u,onClickOpenForm:E}),r.a.createElement(Be,{keg:h(),editMode:d,onSetEditMode:u,onCloseForm:function(){b(!1)},formOpen:f,onCreateKeg:o,onSetViewedBeer:l,onUpdateKeg:i}))},je=Object(z.a)(function(e){return{root:{flexGrow:1,justifyContent:"space-around",flexWrap:"wrap"},paper:{width:"100%"}}});function De(e){var t=e.kegsOnTap,a=e.kegs,l=e.onToggleTapStatus,o=e.onRefillKeg,i=e.onDeleteKeg,c=e.onCreateKeg,s=e.onUpdateKeg,d=e.onSellPint,u=je(),m=Object(n.useState)("default"),p=Object(g.a)(m,2),f=p[0],b=p[1],E=function(e){b(e)};return r.a.createElement(ee.a,{container:!0,className:u.root},r.a.createElement(ee.a,{item:!0,xs:12,sm:5},r.a.createElement(ie,{kegsOnTap:t,kegs:a,onToggleTapStatus:l,onRefillKeg:o,onSetViewedBeer:E,onSellPint:d})),r.a.createElement(ee.a,{item:!0,xs:12,sm:6},r.a.createElement(Ke,{kegsOnTap:t,kegs:a,viewedBeer:f,onDeleteKeg:i,onSetViewedBeer:E,onCreateKeg:c,onUpdateKeg:s})))}var Le=a(27),Pe=[{name:"Twilight",brewery:"Deschutes",style:"Pale Ale",abv:"5.5",pintsLeft:124,price:"6",description:"Cool, Light Bodied Summer Ale.",onTap:!0,imageKey:"twilight",uid:"1"},{name:"Mirror Pond",brewery:"Deschutes",style:"Pale Ale",abv:"5",pintsLeft:124,price:"5",description:"Classic, Style Defining Pale Ale",onTap:!0,imageKey:"mirrorpond",uid:"2"},{name:"Fresh Squeezed",brewery:"Deschutes",style:"IPA",abv:"6.8",pintsLeft:124,price:"6.5",description:"Citra and Mosiac Hops",onTap:!0,imageKey:"freshsqueezed",uid:"3"},{name:"Fresh Haze",brewery:"Deschutes",style:"Hazy IPA",abv:"6.2",pintsLeft:124,price:"6.5",description:"Citra and Mosiac Hops, but Hazy",onTap:!0,imageKey:"freshhaze",uid:"4"},{name:"Black Butte Porter",brewery:"Deschutes",style:"Porter",abv:"5.2",pintsLeft:124,price:"5.5",description:"Chocolate and Coffee Notes",onTap:!0,imageKey:"blackbutteporter",uid:"5"}],Ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={kegs:Pe},a.getBeerIndex=function(e){return a.state.kegs.findIndex(function(t){return t.uid===e})},a.handleSellPint=function(e){var t=Object(i.a)(a.state.kegs);t[a.getBeerIndex(e)].pintsLeft=t[a.getBeerIndex(e)].pintsLeft-1,a.setState({kegs:t})},a.handleToggleTapStatus=function(e){var t=Object(i.a)(a.state.kegs);t[a.getBeerIndex(e)].onTap=!t[a.getBeerIndex(e)].onTap,a.setState({kegs:t})},a.handleRefillKeg=function(e){var t=Object(i.a)(a.state.kegs);t[a.getBeerIndex(e)].pintsLeft=124,a.setState({kegs:t})},a.handleDeleteKeg=function(e){var t=Object(i.a)(a.state.kegs);t.splice(a.getBeerIndex(e),1),a.setState({kegs:t})},a.handleCreateKeg=function(e){var t=[].concat(Object(i.a)(a.state.kegs),[e]);a.setState({kegs:t})},a.handleUpdateKeg=function(e){var t=Object(i.a)(a.state.kegs);t[a.getBeerIndex(e.uid)]=e,a.setState({kegs:t})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getKegsOnTap",value:function(){return this.state.kegs.filter(function(e){return e.onTap})}},{key:"render",value:function(){var e=this;return r.a.createElement(C.a,null,r.a.createElement(N,null),r.a.createElement(Le.a,{exact:!0,path:"/",render:function(){return r.a.createElement(ae,{kegs:e.getKegsOnTap()})}}),r.a.createElement(Le.a,{path:"/admin",render:function(){return r.a.createElement(De,{kegsOnTap:e.getKegsOnTap(),kegs:e.state.kegs,onToggleTapStatus:e.handleToggleTapStatus,onRefillKeg:e.handleRefillKeg,onDeleteKeg:e.handleDeleteKeg,onCreateKeg:e.handleCreateKeg,onUpdateKeg:e.handleUpdateKeg,onSellPint:e.handleSellPint})}}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,a){e.exports=a.p+"static/media/deschuteslogo.a74fa3c8.png"}},[[104,1,2]]]);
//# sourceMappingURL=main.b95357e3.chunk.js.map