(this["webpackJsonpreact-excel-to-json-parser"]=this["webpackJsonpreact-excel-to-json-parser"]||[]).push([[0],{14:function(e,t){},16:function(e,t,n){e.exports=n(36)},27:function(e,t,n){},33:function(e,t){},34:function(e,t){},36:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(4),i=n(6),o=n(5),l=n(7),c=n(0),s=n.n(c),u=n(15),d=(n(27),n(10)),m=n.n(d),f=["xlsx","xlsb","xlsm","xls","xml","csv","txt","ods","fods","uos","sylk","dif","dbf","prn","qpw","123","wb*","wq*","html","htm"].map((function(e){return"."+e})).join(","),p=n(1),h=n.n(p),b=["word","similar","translation","link","examples"],v=function(e){return e?e.trim():e},y=function(e){var t={};return h.a.each(b,(function(n){return t[n]=function(e,t){var n=v(e[t]);return"word"===t?n:h.a.includes(["examples","similar"],t)?(n||"").split("<br>").slice(1):"translation"===t?h.a.map((n||"").split("<p>").slice(1),(function(e){var t=(e||"").split("<span>");return{word:t[0],comment:t[1]}})):"link"===t?v(e.word)+".png":void 0}(e,n)})),t},j=function(e,t){var n=t;void 0===t&&(n="");var a=document.createElement("a");a.href="data:text/plain;content-disposition=attachment;filename=file,"+n,a.download=e,a.style.display="none",a.id="download",document.body.appendChild(a),document.getElementById("download").click(),document.body.removeChild(a)},w=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){var t=e.target.files;if(t&&t[0]){var n=t[0],a=new FileReader,r=!!a.readAsBinaryString;a.onload=function(e){var t=e.target.result,n=m.a.read(t,{type:r?"binary":"array",bookVBA:!0}),a=n.SheetNames[0],i=n.Sheets[a],o=h.a.map(m.a.utils.sheet_to_json(i),(function(e){return y(e)}));j("words.json",JSON.stringify({data:o}))},r?a.readAsBinaryString(n):a.readAsArrayBuffer(n)}},n.state={data:[],cols:[]},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"file"},"\u0413\u0440\u0443\u0437\u0438"),s.a.createElement("br",null),s.a.createElement("input",{type:"file",className:"form-control",id:"file",accept:f,onChange:this.handleChange}))}}]),t}(c.Component),x=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(i.a)(this,Object(o.a)(t).call(this))).state={name:"React"},e}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(w,null))}}]),t}(c.Component);Object(u.render)(s.a.createElement(x,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5f408458.chunk.js.map