(this["webpackJsonprecordlinkage-annotator"]=this["webpackJsonprecordlinkage-annotator"]||[]).push([[0],{62:function(e,t,a){e.exports=a(74)},67:function(e,t,a){},68:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(67),a(18)),l=(a(12),a(68),a(27)),s=a(52),u={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},m={borderColor:"#2196f3"},d={borderColor:"#00e676"},p={borderColor:"#ff1744"};function f(e){var t=Object(n.useCallback)((function(t){if(1===t.length){console.log(t[0]);var a=new FileReader;a.onabort=function(){return console.log("file reading was aborted")},a.onerror=function(){return console.log("file reading has failed")},a.onload=function(){var t=JSON.parse(a.result);e.reviewData(t),e.reviewState("review")},a.readAsText(t[0])}else console.log("No valid files provided.")}),[e]),a=Object(s.a)({onDrop:t,accept:"application/json,.json",multiple:!1}),o=a.getRootProps,c=a.getInputProps,i=a.isDragActive,f=a.isDragAccept,g=a.isDragReject,v=Object(n.useMemo)((function(){return Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)({},u),i?m:{}),f?d:{}),g?p:{})}),[i,f,g]);return r.a.createElement("div",o({style:v}),r.a.createElement("input",c()),f&&!g&&r.a.createElement("p",null,"Drop the file here"),g&&r.a.createElement("p",null,"Reject - Please drop a .json file"),!i&&r.a.createElement("p",null,"Drag 'n' drop annotation file here, or click to select"))}var g=a(55),v=a(28),b=a(100),h=a(102),E=a(103),x=a(45),w=a.n(x),k=a(46),O=a.n(k),y=a(47),j=a.n(y),N=a(49),D=a.n(N),S=a(35),C=a.n(S),R=a(48),T=a.n(R),A=Object(b.a)((function(e){return{button:{margin:e.spacing(1)},buttonNav:{margin:e.spacing(0)},center:{textAlign:"center"}}}));function L(e){var t=A(),a=function(t){e.actions[t]()};return r.a.createElement("div",{className:t.center},r.a.createElement(h.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){return a("match")}},"Match (1)"),r.a.createElement(h.a,{variant:"contained",color:"default",className:t.button,onClick:function(){return a("unknown")}},"Unknown (2)"),r.a.createElement(h.a,{variant:"contained",color:"secondary",className:t.button,onClick:function(){return a("distinct")}},"Distinct (3)"),r.a.createElement(h.a,{variant:"contained",color:"default",className:t.button,onClick:function(){return a("skip")}},"Skip (spacebar)"),r.a.createElement(E.a,{color:"default",variant:"outlined",className:t.buttonNav,onClick:function(){return a("first")}},r.a.createElement(w.a,null)),r.a.createElement(E.a,{color:"default",variant:"outlined",className:t.buttonNav,onClick:function(){return a("previous")}},r.a.createElement(O.a,null)),r.a.createElement(E.a,{color:"default",variant:"outlined",className:t.buttonNav,onClick:function(){return a("next")}},r.a.createElement(j.a,null)),r.a.createElement(E.a,{variant:"contained",color:"default",className:t.buttonNav,onClick:function(){return a("goToFirstUnmatched")}},r.a.createElement(T.a,null)),r.a.createElement(E.a,{color:"default",variant:"outlined",className:t.buttonNav,onClick:function(){return a("last")}},r.a.createElement(D.a,null)),r.a.createElement(E.a,{color:"default",variant:"outlined",className:t.buttonNav,style:{float:"right"},onClick:function(){return a("save")}},r.a.createElement(C.a,null)))}var P=a(117);function B(e){return r.a.createElement(P.a,{alignItems:"flex-start"},r.a.createElement(v.a,{component:"p"},e.itemText))}var F=a(104),U=a(106),I=a(105),J=a(107),M=a(108),G=Object(b.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},title:{fontSize:8}}}));function V(e){var t=G();return r.a.createElement(F.a,{className:t.paper},r.a.createElement(I.a,{title:"undefined"!==typeof e.recordData.identifiers[e.recordSource].record?"Record "+e.recordData.identifiers[e.recordSource].record:"",subheader:e.recordData.identifiers[e.recordSource].dataset}),r.a.createElement(U.a,null,r.a.createElement(J.a,{className:t.root},e.recordData.fields.map((function(t,a){return r.a.createElement(r.a.Fragment,{key:a.toString()},r.a.createElement(B,{itemText:t[e.recordSource].value}),r.a.createElement(M.a,{component:"li"}))})))))}var W=a(109),_=a(11),z=(a(42),function(e){return r.a.createElement(W.a,{item:!0},r.a.createElement(v.a,{color:"textPrimary",className:e.classValueBoxTitle},e.label),r.a.createElement(v.a,{variant:"h4",color:"textPrimary",className:e.classValueBoxValue},e.value))}),Y=Object(b.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},statusText:{textAlign:"center"},statusTextValue:{textAlign:"center"},textMatch:{color:e.palette.success.main},textDistinct:{color:e.palette.secondary.main},textUnknown:{color:e.palette.primary.main}}}));function H(e){var t=Y(),a=Object(n.useState)(0),o=Object(i.a)(a,2),c=o[0],l=o[1],s=Object(n.useState)(e.reviewData),u=Object(i.a)(s,1)[0],m=function(){console.log("Saving JSON:"),console.log(function(){var e=0,t=0;for(var a in u.pairs)1===u.pairs[a].label&&(e+=1),0===u.pairs[a].label&&(t+=1);return{matchCount:e,distinctCount:t}}()),e.reviewState("export")},d=function(){c<u.pairs.length-1?l(c+1):m()},p=function(e){switch(e){case"first":l(0),Object(_.c)("First record pair");break;case"previous":c>0&&l(c-1);break;case"previousLoop":c>0?l(c-1):(Object(_.c)("Reached start, looping from the end."),l(u.pairs.length-1));break;case"next":c<u.pairs.length-1&&l(c+1);break;case"nextLoop":c<u.pairs.length-1?l(c+1):(Object(_.c)("Reached end, looping from the start."),l(0));break;case"last":l(u.pairs.length-1),Object(_.c)("Last record pair");break;default:throw new Error("unknown direction in navigateTo")}},f={match:function(){console.log("Records match"),_.c.success("Records match"),u.pairs[c].label=1,u.pairs[c].label_str="Match",d()},distinct:function(){console.log("Records are distinct"),_.c.dark("Records are distinct"),u.pairs[c].label=0,u.pairs[c].label_str="Distinct",d()},unknown:function(){console.log("Records are unknown"),_.c.info("Records are unknown"),delete u.pairs[c].label,delete u.pairs[c].label_str,d()},first:function(){return p("first")},previous:function(){return p("previous")},previousLoop:function(){return p("previousLoop")},next:function(){return p("next")},nextLoop:function(){return p("nextLoop")},last:function(){return p("last")},skip:function(){console.log("Skipping record pair"),Object(_.c)("Skipping record pair"),d()},save:m,goToFirstUnmatched:function(){console.log("Seeking first unmatched pair.");var e=u.pairs.findIndex((function(e){return 0!==e.label&&1!==e.label}));-1===e?_.c.success("No more unmatched pairs!"):(Object(_.c)("Going to first unmatched pair"),l(e))}},b=function(e){switch(e){case 0:return{description:"distinct",class:"textDistinct"};case 1:return{description:"match",class:"textMatch"};default:return{description:"unknown",class:"textUnknown"}}};return r.a.createElement("div",{className:t.root,tabIndex:-1,onKeyDown:function(e){var t={1:"match",2:"unknown",3:"distinct"," ":"skip",ArrowRight:"nextLoop",ArrowUp:"first",ArrowDown:"last",ArrowLeft:"previousLoop",s:"save",m:"goToFirstUnmatched"};t.hasOwnProperty(e.key)&&f.hasOwnProperty(t[e.key])?(f[t[e.key]](),e.preventDefault()):console.log("No action defined for this key.")}},r.a.createElement(W.a,{container:!0,spacing:1},r.a.createElement(W.a,{item:!0,xs:12,sm:6},r.a.createElement(V,{recordData:u.pairs[c],recordSource:"a"})),r.a.createElement(W.a,{item:!0,xs:12,sm:6},r.a.createElement(V,{recordData:u.pairs[c],recordSource:"b"})),r.a.createElement(W.a,{item:!0,xs:12,sm:12},r.a.createElement(v.a,{color:"textPrimary",className:t.statusText},"This pair is"),r.a.createElement(v.a,{variant:"h5",style:{textAlign:"center"},className:t[b(u.pairs[c].label).class]},b(u.pairs[c].label).description)),r.a.createElement(W.a,{item:!0,xs:12,sm:12},r.a.createElement(L,{actions:f})),r.a.createElement(W.a,{item:!0,xs:12,sm:12},r.a.createElement(g.a,{className:t.paper},r.a.createElement(W.a,{container:!0,spacing:1},r.a.createElement(W.a,{item:!0,xs:12,sm:3},r.a.createElement(z,{label:"Current pair",value:"".concat(c+1,"/").concat(u.pairs.length)})),r.a.createElement(W.a,{item:!0,xs:12,sm:3},r.a.createElement(z,{label:"Matches",value:u.pairs.filter((function(e){return 1===e.label})).length})),r.a.createElement(W.a,{item:!0,xs:12,sm:3},r.a.createElement(z,{label:"Distinct",value:u.pairs.filter((function(e){return 0===e.label})).length})),r.a.createElement(W.a,{item:!0,xs:12,sm:3},r.a.createElement(z,{label:"To process",value:u.pairs.filter((function(e){return 0!==e.label&&1!==e.label})).length})))))))}function K(e){return r.a.createElement(h.a,{color:"default",href:function(){var t=JSON.stringify(e.reviewData,null,2),a=new Blob([t],{type:"application/json"});return window.URL.createObjectURL(a)}(),download:"result.json"},r.a.createElement(C.a,null),"Export")}var $=a(112),q=a(110),Q=a(111),X=a(50),Z=a.n(X),ee=Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},saveButton:{marginRight:e.spacing(2)}}}));function te(e){var t=ee();return r.a.createElement("div",{className:t.root},r.a.createElement(q.a,{position:"static"},r.a.createElement(Q.a,null,r.a.createElement(v.a,{variant:"h6",className:t.title},r.a.createElement($.a,{href:"/",variant:"inherit",color:"inherit"},"RecordLinkage ANNOTATOR")),"review"===e.reviewState&&r.a.createElement(K,{reviewData:e.reviewData}),r.a.createElement(E.a,{color:"default",onClick:e.onToggleDark},r.a.createElement(Z.a,null)))))}var ae=a(115),ne=a(116),re=a(51),oe=a(114),ce=a(36),ie=a.n(ce),le=a(113);function se(){var e=Object(n.useState)("upload"),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(void 0),l=Object(i.a)(c,2),s=l[0],u=l[1],m=function(e){o(e)},d=Object(le.a)("(prefers-color-scheme: dark)"),p=Object(n.useState)({palette:{primary:ie.a,type:d?"light":"dark"}}),g=Object(i.a)(p,2),b=g[0],h=g[1],E=Object(re.a)(b),x=Object(_.b)({enter:"zoomIn",exit:"zoomOut",duration:200,appendPosition:!1,collapse:!0,collapseDuration:200});return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{theme:E},r.a.createElement(te,{reviewState:a,onToggleDark:function(){var e="light"===b.palette.type?"dark":"light";h({palette:{primary:ie.a,type:e}})},reviewData:s}),r.a.createElement(ae.a,null),r.a.createElement(ne.a,{maxWidth:"md",fixed:!0},r.a.createElement(v.a,{component:"div",style:{paddingTop:"50px"}},"upload"===a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{component:"h2",variant:"h3",align:"center",color:"textPrimary",gutterBottom:!0},"Record pair labeling for record linkage and data matching"),r.a.createElement(v.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Turn your record pairs into golden record pairs with this intuitive labeling tool. Labeled record pairs are important for training and validation record linkage and data matching processes. ",r.a.createElement($.a,{href:"https://github.com/J535D165/recordlinkage-annotator#create-annotation-file",target:"_blank"},"Create an annotation file")," and start labeling your data!"),r.a.createElement(f,{reviewData:function(e){console.log(e),u(e)},reviewState:m})),"review"===a&&r.a.createElement(H,{reviewState:m,reviewData:s}),"export"===a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{component:"h2",variant:"h3",align:"center",color:"textPrimary",gutterBottom:!0},"Done!"),r.a.createElement(v.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"You finished the annotation. You can now export the data and save it for further analysis."),r.a.createElement(K,{reviewData:s}))),r.a.createElement(_.a,{position:"bottom-right",autoClose:1e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,transition:x}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[62,1,2]]]);
//# sourceMappingURL=main.1884e7ae.chunk.js.map