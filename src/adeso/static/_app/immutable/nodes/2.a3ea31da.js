import{s as q,n as U,r as H}from"../chunks/scheduler.9254f691.js";import{S as L,i as $,g as i,s as w,h as c,j as g,x as S,c as T,f as E,k as t,a as F,y as s,z as A,A as I}from"../chunks/index.fcfb5454.js";const J=!0,G=Object.freeze(Object.defineProperty({__proto__:null,prerender:J},Symbol.toStringTag,{value:"Module"}));function M(v){let a,r,f="A.D.E.S.O.",_,e,n,x,u,p,k="Password:",l,o,P,y,m,N="Encrypt",j,C,V="Decrypt",B,z;return{c(){a=i("div"),r=i("h2"),r.textContent=f,_=w(),e=i("div"),n=i("textarea"),x=w(),u=i("div"),p=i("label"),p.textContent=k,l=w(),o=i("input"),P=w(),y=i("div"),m=i("button"),m.textContent=N,j=w(),C=i("button"),C.textContent=V,this.h()},l(d){a=c(d,"DIV",{class:!0});var h=g(a);r=c(h,"H2",{class:!0,["data-svelte-h"]:!0}),S(r)!=="svelte-1viz2bh"&&(r.textContent=f),_=T(h),e=c(h,"DIV",{class:!0});var b=g(e);n=c(b,"TEXTAREA",{rows:!0,class:!0,placeholder:!0}),g(n).forEach(E),x=T(b),u=c(b,"DIV",{class:!0});var D=g(u);p=c(D,"LABEL",{for:!0,class:!0,["data-svelte-h"]:!0}),S(p)!=="svelte-1s22vuc"&&(p.textContent=k),l=T(D),o=c(D,"INPUT",{type:!0,id:!0,class:!0}),D.forEach(E),P=T(b),y=c(b,"DIV",{class:!0});var O=g(y);m=c(O,"BUTTON",{class:!0,["data-svelte-h"]:!0}),S(m)!=="svelte-7kye61"&&(m.textContent=N),j=T(O),C=c(O,"BUTTON",{class:!0,["data-svelte-h"]:!0}),S(C)!=="svelte-qr0xt9"&&(C.textContent=V),O.forEach(E),b.forEach(E),h.forEach(E),this.h()},h(){t(r,"class","title svelte-18i1tfs"),t(n,"rows","11"),t(n,"class","input-area svelte-18i1tfs"),t(n,"placeholder",`
    Input plain text data to encrypt here.
    Encryption algorithm uses AES-128 in CBC mode.
        
    Ciphertext will overwrite the plain text here upon Encrypt.
        
    You can Encrypt and Decrypt several times.
        
    Computational complexity of operations is O(n) where n is 
    the length of the data.
      `),t(p,"for","password"),t(p,"class","input-label svelte-18i1tfs"),t(o,"type","password"),t(o,"id","password"),t(o,"class","input-field svelte-18i1tfs"),t(u,"class","input-container svelte-18i1tfs"),t(m,"class","submit-button encrypt svelte-18i1tfs"),t(C,"class","submit-button decrypt svelte-18i1tfs"),t(y,"class","buttons-container svelte-18i1tfs"),t(e,"class","form-container svelte-18i1tfs"),t(a,"class","container svelte-18i1tfs")},m(d,h){F(d,a,h),s(a,r),s(a,_),s(a,e),s(e,n),A(n,v[0]),s(e,x),s(e,u),s(u,p),s(u,l),s(u,o),A(o,v[1]),s(e,P),s(e,y),s(y,m),s(y,j),s(y,C),B||(z=[I(n,"input",v[3]),I(o,"input",v[4]),I(m,"click",v[5]),I(C,"click",v[6])],B=!0)},p(d,[h]){h&1&&A(n,d[0]),h&2&&o.value!==d[1]&&A(o,d[1])},i:U,o:U,d(d){d&&E(a),B=!1,H(z)}}}function R(v,a,r){let f="",_="";const e=async k=>{await fetch("http://127.0.0.1:5000/encryption",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:f,password:_,action:k})}).then(l=>{if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);return l.json()}).then(l=>{r(0,f=l.data)}).catch(l=>{console.error(`Fetch Error: ${l}`)})};function n(){f=this.value,r(0,f)}function x(){_=this.value,r(1,_)}return[f,_,e,n,x,()=>e("Encrypt"),()=>e("Decrypt")]}class K extends L{constructor(a){super(),$(this,a,R,M,q,{})}}export{K as component,G as universal};
