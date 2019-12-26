(this["webpackJsonprecordlinkage-annotator"]=this["webpackJsonprecordlinkage-annotator"]||[]).push([[0],{47:function(e,t,a){e.exports=a(59)},52:function(e,t,a){},53:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(11),c=a.n(o),i=(a(52),a(13)),l=(a(10),a(53),a(42)),s=a(41),d={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},u={borderColor:"#2196f3"},m={borderColor:"#00e676"},p={borderColor:"#ff1744"};function g(e){var t=Object(r.useCallback)((function(t){if(1===t.length){console.log(t[0]);var a=new FileReader;a.onabort=function(){return console.log("file reading was aborted")},a.onerror=function(){return console.log("file reading has failed")},a.onload=function(){var t=JSON.parse(a.result);e.reviewData(t),e.reviewState("review")},a.readAsText(t[0])}else console.log("No valid files provided.")}),[e]),a=Object(s.a)({onDrop:t,accept:"application/json,.json",multiple:!1}),o=a.getRootProps,c=a.getInputProps,i=a.isDragActive,g=a.isDragAccept,f=a.isDragReject,v=Object(r.useMemo)((function(){return Object(l.a)({},d,{},i?u:{},{},g?m:{},{},f?p:{})}),[i,g,f]);return n.a.createElement("div",o({style:v}),n.a.createElement("input",c()),g&&!f&&n.a.createElement("p",null,"Drop the file here"),f&&n.a.createElement("p",null,"Reject - Please drop a .json file"),!i&&n.a.createElement("p",null,"Drag 'n' drop annotation file here, or click to select"))}var f=a(37),v=a(88),b=Object(f.a)((function(e){return{button:{margin:e.spacing(1)},center:{}}}));function E(e){var t=b();return n.a.createElement("div",{className:t.center},n.a.createElement(v.a,{variant:"contained",color:"primary",className:t.button,onClick:e.isMatch},"Match"),n.a.createElement(v.a,{variant:"contained",color:"secondary",className:t.button,onClick:e.isDistinct},"Distinct"))}var h=a(18),w=a(103);function x(e){return n.a.createElement(w.a,{alignItems:"flex-start"},n.a.createElement(h.a,{component:"p"},e.itemText))}var j=a(89),D=a(91),y=a(90),O=a(92),S=a(93),k=Object(f.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},title:{fontSize:8}}}));function R(e){var t=k();return n.a.createElement(j.a,{className:t.paper},n.a.createElement(y.a,{title:"undefined"!==typeof e.recordData.identifiers[e.recordSource].record?"Record "+e.recordData.identifiers[e.recordSource].record:"",subheader:e.recordData.identifiers[e.recordSource].dataset}),n.a.createElement(D.a,null,n.a.createElement(O.a,{className:t.root},e.recordData.fields.map((function(t,a){return n.a.createElement(n.a.Fragment,{key:a.toString()},n.a.createElement(x,{itemText:t[e.recordSource].value}),n.a.createElement(S.a,{component:"li"}))})))))}var N=a(94),C=Object(f.a)((function(e){return{root:{flexGrow:1}}}));function T(e){var t=C(),a=Object(r.useState)(0),o=Object(i.a)(a,2),c=o[0],l=o[1],s=Object(r.useState)(e.reviewData),d=Object(i.a)(s,1)[0],u=function(){c<d.pairs.length-1?l(c+1):(console.log("Last record, we are done."),console.log(function(){var e=0,t=0;for(var a in d.pairs)1===d.pairs[a].label&&(e+=1),0===d.pairs[a].label&&(t+=1);return{matchCount:e,distinctCount:t}}()),e.reviewState("export"))};return n.a.createElement("div",{className:t.root},n.a.createElement(N.a,{container:!0,spacing:1},n.a.createElement(N.a,{item:!0,xs:12,sm:6},n.a.createElement(R,{recordData:d.pairs[c],recordSource:"a"})),n.a.createElement(N.a,{item:!0,xs:12,sm:6},n.a.createElement(R,{recordData:d.pairs[c],recordSource:"b"})),n.a.createElement(N.a,{item:!0,xs:12,sm:6},n.a.createElement(E,{isMatch:function(){console.log("Records match"),d.pairs[c].label=1,d.pairs[c].label_str="Match",u()},isDistinct:function(){console.log("Records are distinct"),d.pairs[c].label=0,d.pairs[c].label_str="Distinct",u()}}))))}var B=a(95),A=a(96),F=a(97),I=a(25),J=a.n(I),L=a(39),M=a.n(L),P=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},saveButton:{marginRight:e.spacing(2)}}}));function G(e){var t=P();return n.a.createElement("div",{className:t.root},n.a.createElement(B.a,{position:"static"},n.a.createElement(A.a,null,n.a.createElement(h.a,{variant:"h6",className:t.title},"RecordLinkage ANNOTATOR"),"never"===e.reviewState&&n.a.createElement(v.a,{color:"inherit"},n.a.createElement(J.a,{className:t.extendedIcon}),"Export"),n.a.createElement(F.a,{color:"default",onClick:e.onToggleDark},n.a.createElement(M.a,null)))))}function W(e){return n.a.createElement(v.a,{color:"secondary",href:function(){var t=JSON.stringify(e.reviewData,null,2),a=new Blob([t],{type:"application/json"});return window.URL.createObjectURL(a)}(),download:"result.json"},n.a.createElement(J.a,null),"Export")}var _=a(100),U=a(101),Y=a(102),z=a(40),$=a(99),q=a(29),H=a.n(q),K=a(98);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement((function(){var e=Object(r.useState)("upload"),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)(void 0),l=Object(i.a)(c,2),s=l[0],d=l[1],u=function(e){o(e)},m=Object(K.a)("(prefers-color-scheme: dark)"),p=Object(r.useState)({palette:{primary:H.a,type:m?"light":"dark"}}),f=Object(i.a)(p,2),v=f[0],b=f[1],E=Object(z.a)(v);return n.a.createElement(n.a.Fragment,null,n.a.createElement($.a,{theme:E},n.a.createElement(G,{reviewState:a,onToggleDark:function(){var e="light"===v.palette.type?"dark":"light";b({palette:{primary:H.a,type:e}})}}),n.a.createElement(_.a,null),n.a.createElement(U.a,{maxWidth:"md",fixed:!0},n.a.createElement(h.a,{component:"div",style:{paddingTop:"50px"}},"upload"===a&&n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{component:"h2",variant:"h3",align:"center",color:"textPrimary",gutterBottom:!0},"Record pair labeling for record linkage and data matching"),n.a.createElement(h.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Turn your record pairs into golden record pairs with this intuitive labeling tool. Labeled record pairs are important for training and validation record linkage and data matching processes. ",n.a.createElement(Y.a,{href:"https://github.com/J535D165/recordlinkage-annotator#create-annotation-file",target:"_blank"},"Create an annotation file")," and start labeling your data!"),n.a.createElement(g,{reviewData:function(e){console.log(e),d(e)},reviewState:u})),"review"===a&&n.a.createElement(T,{reviewState:u,reviewData:s}),"export"===a&&n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{component:"h2",variant:"h3",align:"center",color:"textPrimary",gutterBottom:!0},"Done!"),n.a.createElement(h.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"You finished the annotation. You can now export the data and save it for further analysis."),n.a.createElement(W,{reviewData:s}))))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.f5c668ea.chunk.js.map