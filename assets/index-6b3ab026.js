(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Qe(){}function ae(i,e){for(const t in e)i[t]=e[t];return i}function Gc(i){return i()}function Ia(){return Object.create(null)}function _t(i){i.forEach(Gc)}function qi(i){return typeof i=="function"}function Ue(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function ju(i){return Object.keys(i).length===0}function ha(i,...e){if(i==null)return Qe;const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function jn(i){let e;return ha(i,t=>e=t)(),e}function gt(i,e,t){i.$$.on_destroy.push(ha(e,t))}function ot(i,e,t,n){if(i){const s=Vc(i,e,t,n);return i[0](s)}}function Vc(i,e,t,n){return i[1]&&n?ae(t.ctx.slice(),i[1](n(e))):t.ctx}function lt(i,e,t,n){if(i[2]&&n){const s=i[2](n(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],a=Math.max(e.dirty.length,s.length);for(let o=0;o<a;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function ct(i,e,t,n,s,r){if(s){const a=Vc(e,t,n,r);i.p(a,s)}}function ut(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function qe(i){const e={};for(const t in i)t[0]!=="$"&&(e[t]=i[t]);return e}function Ce(i,e){const t={};e=new Set(e);for(const n in i)!e.has(n)&&n[0]!=="$"&&(t[n]=i[n]);return t}function ma(i){const e={};for(const t in i)e[t]=!0;return e}function Gt(i,e,t){return i.set(t),e}function qu(i){return i&&qi(i.destroy)?i.destroy:Qe}function Y(i,e){i.appendChild(e)}function Q(i,e,t){i.insertBefore(e,t||null)}function J(i){i.parentNode&&i.parentNode.removeChild(i)}function _s(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function le(i){return document.createElement(i)}function ft(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function Ne(i){return document.createTextNode(i)}function be(){return Ne(" ")}function Lt(){return Ne("")}function oe(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function Xu(i){return function(e){return e.stopPropagation(),i.call(this,e)}}function ee(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function Ie(i,e){const t=Object.getOwnPropertyDescriptors(i.__proto__);for(const n in e)e[n]==null?i.removeAttribute(n):n==="style"?i.style.cssText=e[n]:n==="__value"?i.value=i[n]=e[n]:t[n]&&t[n].set?i[n]=e[n]:ee(i,n,e[n])}function $t(i,e){for(const t in e)ee(i,t,e[t])}function Yu(i){return Array.from(i.childNodes)}function Ke(i,e){e=""+e,i.wholeText!==e&&(i.data=e)}function er(i,e,t,n){t===null?i.style.removeProperty(e):i.style.setProperty(e,t,n?"important":"")}function P(i,e,t){i.classList[t?"add":"remove"](e)}function Zu(i,e,{bubbles:t=!1,cancelable:n=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(i,t,n,e),s}function Gi(i,e){return new i(e)}let ds;function us(i){ds=i}function Zn(){if(!ds)throw new Error("Function called outside component initialization");return ds}function Ku(i){Zn().$$.before_update.push(i)}function Xi(i){Zn().$$.on_mount.push(i)}function sr(i){Zn().$$.after_update.push(i)}function yt(i){Zn().$$.on_destroy.push(i)}function bn(){const i=Zn();return(e,t,{cancelable:n=!1}={})=>{const s=i.$$.callbacks[e];if(s){const r=Zu(e,t,{cancelable:n});return s.slice().forEach(a=>{a.call(i,r)}),!r.defaultPrevented}return!0}}function Jt(i,e){return Zn().$$.context.set(i,e),e}function en(i){return Zn().$$.context.get(i)}function fe(i,e){const t=i.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Fi=[],Mt=[],Zs=[],ea=[],Hc=Promise.resolve();let ta=!1;function Wc(){ta||(ta=!0,Hc.then(jc))}function pa(){return Wc(),Hc}function tr(i){Zs.push(i)}function Un(i){ea.push(i)}const mr=new Set;let _i=0;function jc(){if(_i!==0)return;const i=ds;do{try{for(;_i<Fi.length;){const e=Fi[_i];_i++,us(e),Ju(e.$$)}}catch(e){throw Fi.length=0,_i=0,e}for(us(null),Fi.length=0,_i=0;Mt.length;)Mt.pop()();for(let e=0;e<Zs.length;e+=1){const t=Zs[e];mr.has(t)||(mr.add(t),t())}Zs.length=0}while(Fi.length);for(;ea.length;)ea.pop()();ta=!1,mr.clear(),us(i)}function Ju(i){if(i.fragment!==null){i.update(),_t(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(tr)}}const Ks=new Set;let ai;function $e(){ai={r:0,c:[],p:ai}}function et(){ai.r||_t(ai.c),ai=ai.p}function F(i,e){i&&i.i&&(Ks.delete(i),i.i(e))}function B(i,e,t,n){if(i&&i.o){if(Ks.has(i))return;Ks.add(i),ai.c.push(()=>{Ks.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function qc(i,e){B(i,1,1,()=>{e.delete(i.key)})}function Xc(i,e,t,n,s,r,a,o,l,c,u,f){let d=i.length,h=r.length,p=d;const m={};for(;p--;)m[i[p].key]=p;const g=[],v=new Map,M=new Map;for(p=h;p--;){const S=f(s,r,p),A=t(S);let x=a.get(A);x?n&&x.p(S,e):(x=c(A,S),x.c()),v.set(A,g[p]=x),A in m&&M.set(A,Math.abs(p-m[A]))}const b=new Set,y=new Set;function _(S){F(S,1),S.m(o,u),a.set(S.key,S),u=S.first,h--}for(;d&&h;){const S=g[h-1],A=i[d-1],x=S.key,T=A.key;S===A?(u=S.first,d--,h--):v.has(T)?!a.has(x)||b.has(x)?_(S):y.has(T)?d--:M.get(x)>M.get(T)?(y.add(x),_(S)):(b.add(T),d--):(l(A,a),d--)}for(;d--;){const S=i[d];v.has(S.key)||l(S,a)}for(;h;)_(g[h-1]);return g}function Xe(i,e){const t={},n={},s={$$scope:1};let r=i.length;for(;r--;){const a=i[r],o=e[r];if(o){for(const l in a)l in o||(n[l]=1);for(const l in o)s[l]||(t[l]=o[l],s[l]=1);i[r]=o}else for(const l in a)s[l]=1}for(const a in n)a in t||(t[a]=void 0);return t}function pi(i){return typeof i=="object"&&i!==null?i:{}}function Bn(i,e,t){const n=i.$$.props[e];n!==void 0&&(i.$$.bound[n]=t,t(i.$$.ctx[n]))}function ye(i){i&&i.c()}function ve(i,e,t,n){const{fragment:s,after_update:r}=i.$$;s&&s.m(e,t),n||tr(()=>{const a=i.$$.on_mount.map(Gc).filter(qi);i.$$.on_destroy?i.$$.on_destroy.push(...a):_t(a),i.$$.on_mount=[]}),r.forEach(tr)}function xe(i,e){const t=i.$$;t.fragment!==null&&(_t(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Qu(i,e){i.$$.dirty[0]===-1&&(Fi.push(i),Wc(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function Be(i,e,t,n,s,r,a,o=[-1]){const l=ds;us(i);const c=i.$$={fragment:null,ctx:[],props:r,update:Qe,not_equal:s,bound:Ia(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Ia(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let u=!1;if(c.ctx=t?t(i,e.props||{},(f,d,...h)=>{const p=h.length?h[0]:d;return c.ctx&&s(c.ctx[f],c.ctx[f]=p)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](p),u&&Qu(i,f)),d}):[],c.update(),u=!0,_t(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=Yu(e.target);c.fragment&&c.fragment.l(f),f.forEach(J)}else c.fragment&&c.fragment.c();e.intro&&F(i.$$.fragment),ve(i,e.target,e.anchor,e.customElement),jc()}us(l)}class Ge{$destroy(){xe(this,1),this.$destroy=Qe}$on(e,t){if(!qi(t))return Qe;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!ju(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const bi=[];function Yc(i,e){return{subscribe:ht(i,e).subscribe}}function ht(i,e=Qe){let t;const n=new Set;function s(o){if(Ue(i,o)&&(i=o,t)){const l=!bi.length;for(const c of n)c[1](),bi.push(c,i);if(l){for(let c=0;c<bi.length;c+=2)bi[c][0](bi[c+1]);bi.length=0}}}function r(o){s(o(i))}function a(o,l=Qe){const c=[o,l];return n.add(c),n.size===1&&(t=e(s)||Qe),o(i),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:s,update:r,subscribe:a}}function $u(i,e,t){const n=!Array.isArray(i),s=n?[i]:i,r=e.length<2;return Yc(t,a=>{let o=!1;const l=[];let c=0,u=Qe;const f=()=>{if(c)return;u();const h=e(n?l[0]:l,a);r?a(h):u=qi(h)?h:Qe},d=s.map((h,p)=>ha(h,m=>{l[p]=m,c&=~(1<<p),o&&f()},()=>{c|=1<<p}));return o=!0,f(),function(){_t(d),u()}})}function ka(i){let e,t;return{c(){e=ft("title"),t=Ne(i[1])},m(n,s){Q(n,e,s),Y(e,t)},p(n,s){s&2&&Ke(t,n[1])},d(n){n&&J(e)}}}function ef(i){let e,t,n=i[1]&&ka(i),s=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:i[0]},{height:i[0]},i[2],i[3]],r={};for(let a=0;a<s.length;a+=1)r=ae(r,s[a]);return{c(){e=ft("svg"),n&&n.c(),t=ft("path"),ee(t,"d","M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"),$t(e,r)},m(a,o){Q(a,e,o),n&&n.m(e,null),Y(e,t)},p(a,[o]){a[1]?n?n.p(a,o):(n=ka(a),n.c(),n.m(e,t)):n&&(n.d(1),n=null),$t(e,r=Xe(s,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},o&1&&{width:a[0]},o&1&&{height:a[0]},o&4&&a[2],o&8&&a[3]]))},i:Qe,o:Qe,d(a){a&&J(e),n&&n.d()}}}function tf(i,e,t){let n,s;const r=["size","title"];let a=Ce(e,r),{size:o=16}=e,{title:l=void 0}=e;return i.$$set=c=>{t(5,e=ae(ae({},e),qe(c))),t(3,a=Ce(e,r)),"size"in c&&t(0,o=c.size),"title"in c&&t(1,l=c.title)},i.$$.update=()=>{t(4,n=e["aria-label"]||e["aria-labelledby"]||l),t(2,s={"aria-hidden":n?void 0:!0,role:n?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=qe(e),[o,l,s,a,n]}class nf extends Ge{constructor(e){super(),Be(this,e,tf,ef,Ue,{size:0,title:1})}}const ga=nf;function Fa(i,e,t){const n=i.slice();return n[2]=e[t].width,n}function sf(i){let e,t,n,s,r=[i[4],{style:t="width: "+i[2]+";"+i[4].style}],a={};for(let o=0;o<r.length;o+=1)a=ae(a,r[o]);return{c(){e=le("p"),Ie(e,a),P(e,"bx--skeleton__text",!0),P(e,"bx--skeleton__heading",i[0])},m(o,l){Q(o,e,l),n||(s=[oe(e,"click",i[12]),oe(e,"mouseover",i[13]),oe(e,"mouseenter",i[14]),oe(e,"mouseleave",i[15])],n=!0)},p(o,l){Ie(e,a=Xe(r,[l&16&&o[4],l&20&&t!==(t="width: "+o[2]+";"+o[4].style)&&{style:t}])),P(e,"bx--skeleton__text",!0),P(e,"bx--skeleton__heading",o[0])},d(o){o&&J(e),n=!1,_t(s)}}}function rf(i){let e,t,n,s=i[3],r=[];for(let l=0;l<s.length;l+=1)r[l]=za(Fa(i,s,l));let a=[i[4]],o={};for(let l=0;l<a.length;l+=1)o=ae(o,a[l]);return{c(){e=le("div");for(let l=0;l<r.length;l+=1)r[l].c();Ie(e,o)},m(l,c){Q(l,e,c);for(let u=0;u<r.length;u+=1)r[u].m(e,null);t||(n=[oe(e,"click",i[8]),oe(e,"mouseover",i[9]),oe(e,"mouseenter",i[10]),oe(e,"mouseleave",i[11])],t=!0)},p(l,c){if(c&9){s=l[3];let u;for(u=0;u<s.length;u+=1){const f=Fa(l,s,u);r[u]?r[u].p(f,c):(r[u]=za(f),r[u].c(),r[u].m(e,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=s.length}Ie(e,o=Xe(a,[c&16&&l[4]]))},d(l){l&&J(e),_s(r,l),t=!1,_t(n)}}}function za(i){let e;return{c(){e=le("p"),er(e,"width",i[2]),P(e,"bx--skeleton__text",!0),P(e,"bx--skeleton__heading",i[0])},m(t,n){Q(t,e,n)},p(t,n){n&8&&er(e,"width",t[2]),n&1&&P(e,"bx--skeleton__heading",t[0])},d(t){t&&J(e)}}}function af(i){let e;function t(r,a){return r[1]?rf:sf}let n=t(i),s=n(i);return{c(){s.c(),e=Lt()},m(r,a){s.m(r,a),Q(r,e,a)},p(r,[a]){n===(n=t(r))&&s?s.p(r,a):(s.d(1),s=n(r),s&&(s.c(),s.m(e.parentNode,e)))},i:Qe,o:Qe,d(r){s.d(r),r&&J(e)}}}function of(i,e,t){let n,s,r;const a=["lines","heading","paragraph","width"];let o=Ce(e,a),{lines:l=3}=e,{heading:c=!1}=e,{paragraph:u=!1}=e,{width:f="100%"}=e;const d=[.973,.153,.567];function h(_){fe.call(this,i,_)}function p(_){fe.call(this,i,_)}function m(_){fe.call(this,i,_)}function g(_){fe.call(this,i,_)}function v(_){fe.call(this,i,_)}function M(_){fe.call(this,i,_)}function b(_){fe.call(this,i,_)}function y(_){fe.call(this,i,_)}return i.$$set=_=>{e=ae(ae({},e),qe(_)),t(4,o=Ce(e,a)),"lines"in _&&t(5,l=_.lines),"heading"in _&&t(0,c=_.heading),"paragraph"in _&&t(1,u=_.paragraph),"width"in _&&t(2,f=_.width)},i.$$.update=()=>{if(i.$$.dirty&4&&t(7,s=parseInt(f,10)),i.$$.dirty&4&&t(6,r=f.includes("px")),i.$$.dirty&238&&u)for(let _=0;_<l;_++){const S=r?s-75:0,A=r?s:75,x=Math.floor(d[_%3]*(A-S+1))+S+"px";t(3,n=[...n,{width:r?x:`calc(${f} - ${x})`}])}},t(3,n=[]),[c,u,f,n,o,l,r,s,h,p,m,g,v,M,b,y]}class lf extends Ge{constructor(e){super(),Be(this,e,of,af,Ue,{lines:5,heading:0,paragraph:1,width:2})}}const ss=lf;function Oa(i,e,t){const n=i.slice();return n[9]=e[t],n}function Na(i){let e,t,n,s,r,a,o,l,c,u,f,d,h;return n=new ga({props:{class:"bx--accordion__arrow"}}),r=new ss({props:{class:"bx--accordion__title"}}),l=new ss({props:{width:"90%"}}),u=new ss({props:{width:"80%"}}),d=new ss({props:{width:"95%"}}),{c(){e=le("li"),t=le("span"),ye(n.$$.fragment),s=be(),ye(r.$$.fragment),a=be(),o=le("div"),ye(l.$$.fragment),c=be(),ye(u.$$.fragment),f=be(),ye(d.$$.fragment),P(t,"bx--accordion__heading",!0),P(o,"bx--accordion__content",!0),P(e,"bx--accordion__item",!0),P(e,"bx--accordion__item--active",!0)},m(p,m){Q(p,e,m),Y(e,t),ve(n,t,null),Y(t,s),ve(r,t,null),Y(e,a),Y(e,o),ve(l,o,null),Y(o,c),ve(u,o,null),Y(o,f),ve(d,o,null),h=!0},i(p){h||(F(n.$$.fragment,p),F(r.$$.fragment,p),F(l.$$.fragment,p),F(u.$$.fragment,p),F(d.$$.fragment,p),h=!0)},o(p){B(n.$$.fragment,p),B(r.$$.fragment,p),B(l.$$.fragment,p),B(u.$$.fragment,p),B(d.$$.fragment,p),h=!1},d(p){p&&J(e),xe(n),xe(r),xe(l),xe(u),xe(d)}}}function Ua(i,e){let t,n,s,r,a,o,l;return s=new ga({props:{class:"bx--accordion__arrow"}}),a=new ss({props:{class:"bx--accordion__title"}}),{key:i,first:null,c(){t=le("li"),n=le("span"),ye(s.$$.fragment),r=be(),ye(a.$$.fragment),o=be(),P(n,"bx--accordion__heading",!0),P(t,"bx--accordion__item",!0),this.first=t},m(c,u){Q(c,t,u),Y(t,n),ve(s,n,null),Y(n,r),ve(a,n,null),Y(t,o),l=!0},p(c,u){},i(c){l||(F(s.$$.fragment,c),F(a.$$.fragment,c),l=!0)},o(c){B(s.$$.fragment,c),B(a.$$.fragment,c),l=!1},d(c){c&&J(t),xe(s),xe(a)}}}function cf(i){let e,t,n=[],s=new Map,r,a,o,l=i[3]&&Na(),c=Array.from({length:i[3]?i[0]-1:i[0]},Ba);const u=h=>h[9];for(let h=0;h<c.length;h+=1){let p=Oa(i,c,h),m=u(p);s.set(m,n[h]=Ua(m))}let f=[i[4]],d={};for(let h=0;h<f.length;h+=1)d=ae(d,f[h]);return{c(){e=le("ul"),l&&l.c(),t=be();for(let h=0;h<n.length;h+=1)n[h].c();Ie(e,d),P(e,"bx--skeleton",!0),P(e,"bx--accordion",!0),P(e,"bx--accordion--start",i[1]==="start"),P(e,"bx--accordion--end",i[1]==="end"),P(e,"bx--accordion--sm",i[2]==="sm"),P(e,"bx--accordion--xl",i[2]==="xl")},m(h,p){Q(h,e,p),l&&l.m(e,null),Y(e,t);for(let m=0;m<n.length;m+=1)n[m].m(e,null);r=!0,a||(o=[oe(e,"click",i[5]),oe(e,"mouseover",i[6]),oe(e,"mouseenter",i[7]),oe(e,"mouseleave",i[8])],a=!0)},p(h,[p]){h[3]?l?p&8&&F(l,1):(l=Na(),l.c(),F(l,1),l.m(e,t)):l&&($e(),B(l,1,1,()=>{l=null}),et()),p&9&&(c=Array.from({length:h[3]?h[0]-1:h[0]},Ba),$e(),n=Xc(n,p,u,1,h,c,s,e,qc,Ua,null,Oa),et()),Ie(e,d=Xe(f,[p&16&&h[4]])),P(e,"bx--skeleton",!0),P(e,"bx--accordion",!0),P(e,"bx--accordion--start",h[1]==="start"),P(e,"bx--accordion--end",h[1]==="end"),P(e,"bx--accordion--sm",h[2]==="sm"),P(e,"bx--accordion--xl",h[2]==="xl")},i(h){if(!r){F(l);for(let p=0;p<c.length;p+=1)F(n[p]);r=!0}},o(h){B(l);for(let p=0;p<n.length;p+=1)B(n[p]);r=!1},d(h){h&&J(e),l&&l.d();for(let p=0;p<n.length;p+=1)n[p].d();a=!1,_t(o)}}}const Ba=(i,e)=>e;function uf(i,e,t){const n=["count","align","size","open"];let s=Ce(e,n),{count:r=4}=e,{align:a="end"}=e,{size:o=void 0}=e,{open:l=!0}=e;function c(h){fe.call(this,i,h)}function u(h){fe.call(this,i,h)}function f(h){fe.call(this,i,h)}function d(h){fe.call(this,i,h)}return i.$$set=h=>{e=ae(ae({},e),qe(h)),t(4,s=Ce(e,n)),"count"in h&&t(0,r=h.count),"align"in h&&t(1,a=h.align),"size"in h&&t(2,o=h.size),"open"in h&&t(3,l=h.open)},[r,a,o,l,s,c,u,f,d]}class ff extends Ge{constructor(e){super(),Be(this,e,uf,cf,Ue,{count:0,align:1,size:2,open:3})}}const df=ff;function hf(i){let e,t,n,s;const r=i[6].default,a=ot(r,i,i[5],null);let o=[i[3]],l={};for(let c=0;c<o.length;c+=1)l=ae(l,o[c]);return{c(){e=le("ul"),a&&a.c(),Ie(e,l),P(e,"bx--accordion",!0),P(e,"bx--accordion--start",i[0]==="start"),P(e,"bx--accordion--end",i[0]==="end"),P(e,"bx--accordion--sm",i[1]==="sm"),P(e,"bx--accordion--xl",i[1]==="xl")},m(c,u){Q(c,e,u),a&&a.m(e,null),t=!0,n||(s=[oe(e,"click",i[7]),oe(e,"mouseover",i[8]),oe(e,"mouseenter",i[9]),oe(e,"mouseleave",i[10])],n=!0)},p(c,u){a&&a.p&&(!t||u&32)&&ct(a,r,c,c[5],t?lt(r,c[5],u,null):ut(c[5]),null),Ie(e,l=Xe(o,[u&8&&c[3]])),P(e,"bx--accordion",!0),P(e,"bx--accordion--start",c[0]==="start"),P(e,"bx--accordion--end",c[0]==="end"),P(e,"bx--accordion--sm",c[1]==="sm"),P(e,"bx--accordion--xl",c[1]==="xl")},i(c){t||(F(a,c),t=!0)},o(c){B(a,c),t=!1},d(c){c&&J(e),a&&a.d(c),n=!1,_t(s)}}}function mf(i){let e,t;const n=[i[3],{align:i[0]},{size:i[1]}];let s={};for(let r=0;r<n.length;r+=1)s=ae(s,n[r]);return e=new df({props:s}),e.$on("click",i[11]),e.$on("mouseover",i[12]),e.$on("mouseenter",i[13]),e.$on("mouseleave",i[14]),{c(){ye(e.$$.fragment)},m(r,a){ve(e,r,a),t=!0},p(r,a){const o=a&11?Xe(n,[a&8&&pi(r[3]),a&1&&{align:r[0]},a&2&&{size:r[1]}]):{};e.$set(o)},i(r){t||(F(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){xe(e,r)}}}function pf(i){let e,t,n,s;const r=[mf,hf],a=[];function o(l,c){return l[2]?0:1}return e=o(i),t=a[e]=r[e](i),{c(){t.c(),n=Lt()},m(l,c){a[e].m(l,c),Q(l,n,c),s=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):($e(),B(a[u],1,1,()=>{a[u]=null}),et(),t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),F(t,1),t.m(n.parentNode,n))},i(l){s||(F(t),s=!0)},o(l){B(t),s=!1},d(l){a[e].d(l),l&&J(n)}}}function gf(i,e,t){const n=["align","size","disabled","skeleton"];let s=Ce(e,n),{$$slots:r={},$$scope:a}=e,{align:o="end"}=e,{size:l=void 0}=e,{disabled:c=!1}=e,{skeleton:u=!1}=e;const f=ht(c);Jt("Accordion",{disableItems:f});function d(y){fe.call(this,i,y)}function h(y){fe.call(this,i,y)}function p(y){fe.call(this,i,y)}function m(y){fe.call(this,i,y)}function g(y){fe.call(this,i,y)}function v(y){fe.call(this,i,y)}function M(y){fe.call(this,i,y)}function b(y){fe.call(this,i,y)}return i.$$set=y=>{e=ae(ae({},e),qe(y)),t(3,s=Ce(e,n)),"align"in y&&t(0,o=y.align),"size"in y&&t(1,l=y.size),"disabled"in y&&t(4,c=y.disabled),"skeleton"in y&&t(2,u=y.skeleton),"$$scope"in y&&t(5,a=y.$$scope)},i.$$.update=()=>{i.$$.dirty&16&&f.set(c)},[o,l,u,s,c,a,r,d,h,p,m,g,v,M,b]}class _f extends Ge{constructor(e){super(),Be(this,e,gf,pf,Ue,{align:0,size:1,disabled:4,skeleton:2})}}const bf=_f,vf=i=>({}),Ga=i=>({});function xf(i){let e;return{c(){e=Ne(i[2])},m(t,n){Q(t,e,n)},p(t,n){n&4&&Ke(e,t[2])},d(t){t&&J(e)}}}function Mf(i){let e,t,n,s,r,a,o,l,c,u;n=new ga({props:{class:"bx--accordion__arrow","aria-label":i[3]}});const f=i[7].title,d=ot(f,i,i[6],Ga),h=d||xf(i),p=i[7].default,m=ot(p,i,i[6],null);let g=[i[5]],v={};for(let M=0;M<g.length;M+=1)v=ae(v,g[M]);return{c(){e=le("li"),t=le("button"),ye(n.$$.fragment),s=be(),r=le("div"),h&&h.c(),a=be(),o=le("div"),m&&m.c(),P(r,"bx--accordion__title",!0),ee(t,"type","button"),ee(t,"title",i[3]),ee(t,"aria-expanded",i[0]),t.disabled=i[1],P(t,"bx--accordion__heading",!0),P(o,"bx--accordion__content",!0),Ie(e,v),P(e,"bx--accordion__item",!0),P(e,"bx--accordion__item--active",i[0]),P(e,"bx--accordion__item--disabled",i[1]),P(e,"bx--accordion__item--expanding",i[4]==="expanding"),P(e,"bx--accordion__item--collapsing",i[4]==="collapsing")},m(M,b){Q(M,e,b),Y(e,t),ve(n,t,null),Y(t,s),Y(t,r),h&&h.m(r,null),Y(e,a),Y(e,o),m&&m.m(o,null),l=!0,c||(u=[oe(t,"click",i[9]),oe(t,"click",i[14]),oe(t,"mouseover",i[10]),oe(t,"mouseenter",i[11]),oe(t,"mouseleave",i[12]),oe(t,"keydown",i[13]),oe(t,"keydown",i[15]),oe(e,"animationend",i[8]),oe(e,"animationend",i[16])],c=!0)},p(M,[b]){const y={};b&8&&(y["aria-label"]=M[3]),n.$set(y),d?d.p&&(!l||b&64)&&ct(d,f,M,M[6],l?lt(f,M[6],b,vf):ut(M[6]),Ga):h&&h.p&&(!l||b&4)&&h.p(M,l?b:-1),(!l||b&8)&&ee(t,"title",M[3]),(!l||b&1)&&ee(t,"aria-expanded",M[0]),(!l||b&2)&&(t.disabled=M[1]),m&&m.p&&(!l||b&64)&&ct(m,p,M,M[6],l?lt(p,M[6],b,null):ut(M[6]),null),Ie(e,v=Xe(g,[b&32&&M[5]])),P(e,"bx--accordion__item",!0),P(e,"bx--accordion__item--active",M[0]),P(e,"bx--accordion__item--disabled",M[1]),P(e,"bx--accordion__item--expanding",M[4]==="expanding"),P(e,"bx--accordion__item--collapsing",M[4]==="collapsing")},i(M){l||(F(n.$$.fragment,M),F(h,M),F(m,M),l=!0)},o(M){B(n.$$.fragment,M),B(h,M),B(m,M),l=!1},d(M){M&&J(e),xe(n),h&&h.d(M),m&&m.d(M),c=!1,_t(u)}}}function yf(i,e,t){const n=["title","open","disabled","iconDescription"];let s=Ce(e,n),{$$slots:r={},$$scope:a}=e,{title:o="title"}=e,{open:l=!1}=e,{disabled:c=!1}=e,{iconDescription:u="Expand/Collapse"}=e,f=c;const h=en("Accordion").disableItems.subscribe(x=>{!x&&f||t(1,c=x)});let p;Xi(()=>()=>{h()});function m(x){fe.call(this,i,x)}function g(x){fe.call(this,i,x)}function v(x){fe.call(this,i,x)}function M(x){fe.call(this,i,x)}function b(x){fe.call(this,i,x)}function y(x){fe.call(this,i,x)}const _=()=>{t(0,l=!l),t(4,p=l?"expanding":"collapsing")},S=({key:x})=>{l&&x==="Escape"&&t(0,l=!1)},A=()=>{t(4,p=void 0)};return i.$$set=x=>{e=ae(ae({},e),qe(x)),t(5,s=Ce(e,n)),"title"in x&&t(2,o=x.title),"open"in x&&t(0,l=x.open),"disabled"in x&&t(1,c=x.disabled),"iconDescription"in x&&t(3,u=x.iconDescription),"$$scope"in x&&t(6,a=x.$$scope)},[l,c,o,u,p,s,a,r,m,g,v,M,b,y,_,S,A]}class Sf extends Ge{constructor(e){super(),Be(this,e,yf,Mf,Ue,{title:2,open:0,disabled:1,iconDescription:3})}}const Va=Sf;function wf(i){let e,t,n,s=[i[2]],r={};for(let a=0;a<s.length;a+=1)r=ae(r,s[a]);return{c(){e=le("div"),Ie(e,r),P(e,"bx--skeleton",!0),P(e,"bx--btn",!0),P(e,"bx--btn--field",i[1]==="field"),P(e,"bx--btn--sm",i[1]==="small"),P(e,"bx--btn--lg",i[1]==="lg"),P(e,"bx--btn--xl",i[1]==="xl")},m(a,o){Q(a,e,o),t||(n=[oe(e,"click",i[7]),oe(e,"mouseover",i[8]),oe(e,"mouseenter",i[9]),oe(e,"mouseleave",i[10])],t=!0)},p(a,o){Ie(e,r=Xe(s,[o&4&&a[2]])),P(e,"bx--skeleton",!0),P(e,"bx--btn",!0),P(e,"bx--btn--field",a[1]==="field"),P(e,"bx--btn--sm",a[1]==="small"),P(e,"bx--btn--lg",a[1]==="lg"),P(e,"bx--btn--xl",a[1]==="xl")},d(a){a&&J(e),t=!1,_t(n)}}}function Tf(i){let e,t="",n,s,r,a,o=[{href:i[0]},{rel:s=i[2].target==="_blank"?"noopener noreferrer":void 0},{role:"button"},i[2]],l={};for(let c=0;c<o.length;c+=1)l=ae(l,o[c]);return{c(){e=le("a"),n=Ne(t),Ie(e,l),P(e,"bx--skeleton",!0),P(e,"bx--btn",!0),P(e,"bx--btn--field",i[1]==="field"),P(e,"bx--btn--sm",i[1]==="small"),P(e,"bx--btn--lg",i[1]==="lg"),P(e,"bx--btn--xl",i[1]==="xl")},m(c,u){Q(c,e,u),Y(e,n),r||(a=[oe(e,"click",i[3]),oe(e,"mouseover",i[4]),oe(e,"mouseenter",i[5]),oe(e,"mouseleave",i[6])],r=!0)},p(c,u){Ie(e,l=Xe(o,[u&1&&{href:c[0]},u&4&&s!==(s=c[2].target==="_blank"?"noopener noreferrer":void 0)&&{rel:s},{role:"button"},u&4&&c[2]])),P(e,"bx--skeleton",!0),P(e,"bx--btn",!0),P(e,"bx--btn--field",c[1]==="field"),P(e,"bx--btn--sm",c[1]==="small"),P(e,"bx--btn--lg",c[1]==="lg"),P(e,"bx--btn--xl",c[1]==="xl")},d(c){c&&J(e),r=!1,_t(a)}}}function Ef(i){let e;function t(r,a){return r[0]?Tf:wf}let n=t(i),s=n(i);return{c(){s.c(),e=Lt()},m(r,a){s.m(r,a),Q(r,e,a)},p(r,[a]){n===(n=t(r))&&s?s.p(r,a):(s.d(1),s=n(r),s&&(s.c(),s.m(e.parentNode,e)))},i:Qe,o:Qe,d(r){s.d(r),r&&J(e)}}}function Af(i,e,t){const n=["href","size"];let s=Ce(e,n),{href:r=void 0}=e,{size:a="default"}=e;function o(m){fe.call(this,i,m)}function l(m){fe.call(this,i,m)}function c(m){fe.call(this,i,m)}function u(m){fe.call(this,i,m)}function f(m){fe.call(this,i,m)}function d(m){fe.call(this,i,m)}function h(m){fe.call(this,i,m)}function p(m){fe.call(this,i,m)}return i.$$set=m=>{e=ae(ae({},e),qe(m)),t(2,s=Ce(e,n)),"href"in m&&t(0,r=m.href),"size"in m&&t(1,a=m.size)},[r,a,s,o,l,c,u,f,d,h,p]}class Cf extends Ge{constructor(e){super(),Be(this,e,Af,Ef,Ue,{href:0,size:1})}}const Lf=Cf,Pf=i=>({props:i[0]&512}),Ha=i=>({props:i[9]});function Df(i){let e,t,n,s,r,a,o=i[8]&&Wa(i);const l=i[19].default,c=ot(l,i,i[18],null);var u=i[2];function f(p){return{props:{"aria-hidden":"true",class:"bx--btn__icon",style:p[8]?"margin-left: 0":void 0,"aria-label":p[3]}}}u&&(n=Gi(u,f(i)));let d=[i[9]],h={};for(let p=0;p<d.length;p+=1)h=ae(h,d[p]);return{c(){e=le("button"),o&&o.c(),t=be(),c&&c.c(),n&&ye(n.$$.fragment),Ie(e,h)},m(p,m){Q(p,e,m),o&&o.m(e,null),Y(e,t),c&&c.m(e,null),n&&ve(n,e,null),e.autofocus&&e.focus(),i[33](e),s=!0,r||(a=[oe(e,"click",i[24]),oe(e,"mouseover",i[25]),oe(e,"mouseenter",i[26]),oe(e,"mouseleave",i[27])],r=!0)},p(p,m){p[8]?o?o.p(p,m):(o=Wa(p),o.c(),o.m(e,t)):o&&(o.d(1),o=null),c&&c.p&&(!s||m[0]&262144)&&ct(c,l,p,p[18],s?lt(l,p[18],m,null):ut(p[18]),null);const g={};if(m[0]&256&&(g.style=p[8]?"margin-left: 0":void 0),m[0]&8&&(g["aria-label"]=p[3]),u!==(u=p[2])){if(n){$e();const v=n;B(v.$$.fragment,1,0,()=>{xe(v,1)}),et()}u?(n=Gi(u,f(p)),ye(n.$$.fragment),F(n.$$.fragment,1),ve(n,e,null)):n=null}else u&&n.$set(g);Ie(e,h=Xe(d,[m[0]&512&&p[9]]))},i(p){s||(F(c,p),n&&F(n.$$.fragment,p),s=!0)},o(p){B(c,p),n&&B(n.$$.fragment,p),s=!1},d(p){p&&J(e),o&&o.d(),c&&c.d(p),n&&xe(n),i[33](null),r=!1,_t(a)}}}function Rf(i){let e,t,n,s,r,a,o=i[8]&&ja(i);const l=i[19].default,c=ot(l,i,i[18],null);var u=i[2];function f(p){return{props:{"aria-hidden":"true",class:"bx--btn__icon","aria-label":p[3]}}}u&&(n=Gi(u,f(i)));let d=[i[9]],h={};for(let p=0;p<d.length;p+=1)h=ae(h,d[p]);return{c(){e=le("a"),o&&o.c(),t=be(),c&&c.c(),n&&ye(n.$$.fragment),Ie(e,h)},m(p,m){Q(p,e,m),o&&o.m(e,null),Y(e,t),c&&c.m(e,null),n&&ve(n,e,null),i[32](e),s=!0,r||(a=[oe(e,"click",i[20]),oe(e,"mouseover",i[21]),oe(e,"mouseenter",i[22]),oe(e,"mouseleave",i[23])],r=!0)},p(p,m){p[8]?o?o.p(p,m):(o=ja(p),o.c(),o.m(e,t)):o&&(o.d(1),o=null),c&&c.p&&(!s||m[0]&262144)&&ct(c,l,p,p[18],s?lt(l,p[18],m,null):ut(p[18]),null);const g={};if(m[0]&8&&(g["aria-label"]=p[3]),u!==(u=p[2])){if(n){$e();const v=n;B(v.$$.fragment,1,0,()=>{xe(v,1)}),et()}u?(n=Gi(u,f(p)),ye(n.$$.fragment),F(n.$$.fragment,1),ve(n,e,null)):n=null}else u&&n.$set(g);Ie(e,h=Xe(d,[m[0]&512&&p[9]]))},i(p){s||(F(c,p),n&&F(n.$$.fragment,p),s=!0)},o(p){B(c,p),n&&B(n.$$.fragment,p),s=!1},d(p){p&&J(e),o&&o.d(),c&&c.d(p),n&&xe(n),i[32](null),r=!1,_t(a)}}}function If(i){let e;const t=i[19].default,n=ot(t,i,i[18],Ha);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r[0]&262656)&&ct(n,t,s,s[18],e?lt(t,s[18],r,Pf):ut(s[18]),Ha)},i(s){e||(F(n,s),e=!0)},o(s){B(n,s),e=!1},d(s){n&&n.d(s)}}}function kf(i){let e,t;const n=[{href:i[7]},{size:i[1]},i[10],{style:i[8]&&"width: 3rem;"}];let s={};for(let r=0;r<n.length;r+=1)s=ae(s,n[r]);return e=new Lf({props:s}),e.$on("click",i[28]),e.$on("mouseover",i[29]),e.$on("mouseenter",i[30]),e.$on("mouseleave",i[31]),{c(){ye(e.$$.fragment)},m(r,a){ve(e,r,a),t=!0},p(r,a){const o=a[0]&1410?Xe(n,[a[0]&128&&{href:r[7]},a[0]&2&&{size:r[1]},a[0]&1024&&pi(r[10]),a[0]&256&&{style:r[8]&&"width: 3rem;"}]):{};e.$set(o)},i(r){t||(F(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){xe(e,r)}}}function Wa(i){let e,t;return{c(){e=le("span"),t=Ne(i[3]),P(e,"bx--assistive-text",!0)},m(n,s){Q(n,e,s),Y(e,t)},p(n,s){s[0]&8&&Ke(t,n[3])},d(n){n&&J(e)}}}function ja(i){let e,t;return{c(){e=le("span"),t=Ne(i[3]),P(e,"bx--assistive-text",!0)},m(n,s){Q(n,e,s),Y(e,t)},p(n,s){s[0]&8&&Ke(t,n[3])},d(n){n&&J(e)}}}function Ff(i){let e,t,n,s;const r=[kf,If,Rf,Df],a=[];function o(l,c){return l[5]?0:l[4]?1:l[7]&&!l[6]?2:3}return e=o(i),t=a[e]=r[e](i),{c(){t.c(),n=Lt()},m(l,c){a[e].m(l,c),Q(l,n,c),s=!0},p(l,c){let u=e;e=o(l),e===u?a[e].p(l,c):($e(),B(a[u],1,1,()=>{a[u]=null}),et(),t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),F(t,1),t.m(n.parentNode,n))},i(l){s||(F(t),s=!0)},o(l){B(t),s=!1},d(l){a[e].d(l),l&&J(n)}}}function zf(i,e,t){let n,s;const r=["kind","size","expressive","isSelected","icon","iconDescription","tooltipAlignment","tooltipPosition","as","skeleton","disabled","href","tabindex","type","ref"];let a=Ce(e,r),{$$slots:o={},$$scope:l}=e;const c=ma(o);let{kind:u="primary"}=e,{size:f="default"}=e,{expressive:d=!1}=e,{isSelected:h=!1}=e,{icon:p=void 0}=e,{iconDescription:m=void 0}=e,{tooltipAlignment:g="center"}=e,{tooltipPosition:v="bottom"}=e,{as:M=!1}=e,{skeleton:b=!1}=e,{disabled:y=!1}=e,{href:_=void 0}=e,{tabindex:S="0"}=e,{type:A="button"}=e,{ref:x=null}=e;const T=en("ComposedModal");function w(W){fe.call(this,i,W)}function k(W){fe.call(this,i,W)}function j(W){fe.call(this,i,W)}function D(W){fe.call(this,i,W)}function R(W){fe.call(this,i,W)}function X(W){fe.call(this,i,W)}function se(W){fe.call(this,i,W)}function $(W){fe.call(this,i,W)}function Z(W){fe.call(this,i,W)}function ce(W){fe.call(this,i,W)}function ue(W){fe.call(this,i,W)}function z(W){fe.call(this,i,W)}function O(W){Mt[W?"unshift":"push"](()=>{x=W,t(0,x)})}function de(W){Mt[W?"unshift":"push"](()=>{x=W,t(0,x)})}return i.$$set=W=>{e=ae(ae({},e),qe(W)),t(10,a=Ce(e,r)),"kind"in W&&t(11,u=W.kind),"size"in W&&t(1,f=W.size),"expressive"in W&&t(12,d=W.expressive),"isSelected"in W&&t(13,h=W.isSelected),"icon"in W&&t(2,p=W.icon),"iconDescription"in W&&t(3,m=W.iconDescription),"tooltipAlignment"in W&&t(14,g=W.tooltipAlignment),"tooltipPosition"in W&&t(15,v=W.tooltipPosition),"as"in W&&t(4,M=W.as),"skeleton"in W&&t(5,b=W.skeleton),"disabled"in W&&t(6,y=W.disabled),"href"in W&&t(7,_=W.href),"tabindex"in W&&t(16,S=W.tabindex),"type"in W&&t(17,A=W.type),"ref"in W&&t(0,x=W.ref),"$$scope"in W&&t(18,l=W.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&1&&T&&x&&T.declareRef(x),i.$$.dirty[0]&4&&t(8,n=p&&!c.default),t(9,s={type:_&&!y?void 0:A,tabindex:S,disabled:y===!0?!0:void 0,href:_,"aria-pressed":n&&u==="ghost"&&!_?h:void 0,...a,class:["bx--btn",d&&"bx--btn--expressive",(f==="small"&&!d||f==="sm"&&!d||f==="small"&&!d)&&"bx--btn--sm",f==="field"&&!d||f==="md"&&!d&&"bx--btn--md",f==="field"&&"bx--btn--field",f==="small"&&"bx--btn--sm",f==="lg"&&"bx--btn--lg",f==="xl"&&"bx--btn--xl",u&&`bx--btn--${u}`,y&&"bx--btn--disabled",n&&"bx--btn--icon-only",n&&"bx--tooltip__trigger",n&&"bx--tooltip--a11y",n&&v&&`bx--btn--icon-only--${v}`,n&&g&&`bx--tooltip--align-${g}`,n&&h&&u==="ghost"&&"bx--btn--selected",a.class].filter(Boolean).join(" ")})},[x,f,p,m,M,b,y,_,n,s,a,u,d,h,g,v,S,A,l,o,w,k,j,D,R,X,se,$,Z,ce,ue,z,O,de]}class Of extends Ge{constructor(e){super(),Be(this,e,zf,Ff,Ue,{kind:11,size:1,expressive:12,isSelected:13,icon:2,iconDescription:3,tooltipAlignment:14,tooltipPosition:15,as:4,skeleton:5,disabled:6,href:7,tabindex:16,type:17,ref:0},null,[-1,-1])}}const Zc=Of;function Nf(i){let e,t,n,s,r=[i[0]],a={};for(let o=0;o<r.length;o+=1)a=ae(a,r[o]);return{c(){e=le("div"),t=le("span"),P(t,"bx--checkbox-label-text",!0),P(t,"bx--skeleton",!0),Ie(e,a),P(e,"bx--form-item",!0),P(e,"bx--checkbox-wrapper",!0),P(e,"bx--checkbox-label",!0)},m(o,l){Q(o,e,l),Y(e,t),n||(s=[oe(e,"click",i[1]),oe(e,"mouseover",i[2]),oe(e,"mouseenter",i[3]),oe(e,"mouseleave",i[4])],n=!0)},p(o,[l]){Ie(e,a=Xe(r,[l&1&&o[0]])),P(e,"bx--form-item",!0),P(e,"bx--checkbox-wrapper",!0),P(e,"bx--checkbox-label",!0)},i:Qe,o:Qe,d(o){o&&J(e),n=!1,_t(s)}}}function Uf(i,e,t){const n=[];let s=Ce(e,n);function r(c){fe.call(this,i,c)}function a(c){fe.call(this,i,c)}function o(c){fe.call(this,i,c)}function l(c){fe.call(this,i,c)}return i.$$set=c=>{e=ae(ae({},e),qe(c)),t(0,s=Ce(e,n))},[s,r,a,o,l]}class Bf extends Ge{constructor(e){super(),Be(this,e,Uf,Nf,Ue,{})}}const Gf=Bf,Vf=i=>({}),qa=i=>({});function Hf(i){let e,t,n,s,r,a,o,l;const c=i[19].labelText,u=ot(c,i,i[18],qa),f=u||jf(i);let d=[i[16]],h={};for(let p=0;p<d.length;p+=1)h=ae(h,d[p]);return{c(){e=le("div"),t=le("input"),n=be(),s=le("label"),r=le("span"),f&&f.c(),ee(t,"type","checkbox"),t.value=i[4],t.checked=i[0],t.disabled=i[9],ee(t,"id",i[13]),t.indeterminate=i[5],ee(t,"name",i[12]),t.required=i[7],t.readOnly=i[8],P(t,"bx--checkbox",!0),P(r,"bx--checkbox-label-text",!0),P(r,"bx--visually-hidden",i[11]),ee(s,"for",i[13]),ee(s,"title",i[2]),P(s,"bx--checkbox-label",!0),Ie(e,h),P(e,"bx--form-item",!0),P(e,"bx--checkbox-wrapper",!0)},m(p,m){Q(p,e,m),Y(e,t),i[30](t),Y(e,n),Y(e,s),Y(s,r),f&&f.m(r,null),i[32](r),a=!0,o||(l=[oe(t,"change",i[31]),oe(t,"change",i[24]),oe(t,"blur",i[25]),oe(e,"click",i[20]),oe(e,"mouseover",i[21]),oe(e,"mouseenter",i[22]),oe(e,"mouseleave",i[23])],o=!0)},p(p,m){(!a||m[0]&16)&&(t.value=p[4]),(!a||m[0]&1)&&(t.checked=p[0]),(!a||m[0]&512)&&(t.disabled=p[9]),(!a||m[0]&8192)&&ee(t,"id",p[13]),(!a||m[0]&32)&&(t.indeterminate=p[5]),(!a||m[0]&4096)&&ee(t,"name",p[12]),(!a||m[0]&128)&&(t.required=p[7]),(!a||m[0]&256)&&(t.readOnly=p[8]),u?u.p&&(!a||m[0]&262144)&&ct(u,c,p,p[18],a?lt(c,p[18],m,Vf):ut(p[18]),qa):f&&f.p&&(!a||m[0]&1024)&&f.p(p,a?m:[-1,-1]),(!a||m[0]&2048)&&P(r,"bx--visually-hidden",p[11]),(!a||m[0]&8192)&&ee(s,"for",p[13]),(!a||m[0]&4)&&ee(s,"title",p[2]),Ie(e,h=Xe(d,[m[0]&65536&&p[16]])),P(e,"bx--form-item",!0),P(e,"bx--checkbox-wrapper",!0)},i(p){a||(F(f,p),a=!0)},o(p){B(f,p),a=!1},d(p){p&&J(e),i[30](null),f&&f.d(p),i[32](null),o=!1,_t(l)}}}function Wf(i){let e,t;const n=[i[16]];let s={};for(let r=0;r<n.length;r+=1)s=ae(s,n[r]);return e=new Gf({props:s}),e.$on("click",i[26]),e.$on("mouseover",i[27]),e.$on("mouseenter",i[28]),e.$on("mouseleave",i[29]),{c(){ye(e.$$.fragment)},m(r,a){ve(e,r,a),t=!0},p(r,a){const o=a[0]&65536?Xe(n,[pi(r[16])]):{};e.$set(o)},i(r){t||(F(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){xe(e,r)}}}function jf(i){let e;return{c(){e=Ne(i[10])},m(t,n){Q(t,e,n)},p(t,n){n[0]&1024&&Ke(e,t[10])},d(t){t&&J(e)}}}function qf(i){let e,t,n,s;const r=[Wf,Hf],a=[];function o(l,c){return l[6]?0:1}return e=o(i),t=a[e]=r[e](i),{c(){t.c(),n=Lt()},m(l,c){a[e].m(l,c),Q(l,n,c),s=!0},p(l,c){let u=e;e=o(l),e===u?a[e].p(l,c):($e(),B(a[u],1,1,()=>{a[u]=null}),et(),t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),F(t,1),t.m(n.parentNode,n))},i(l){s||(F(t),s=!0)},o(l){B(t),s=!1},d(l){a[e].d(l),l&&J(n)}}}function Xf(i,e,t){let n,s;const r=["value","checked","group","indeterminate","skeleton","required","readonly","disabled","labelText","hideLabel","name","title","id","ref"];let a=Ce(e,r),{$$slots:o={},$$scope:l}=e,{value:c=""}=e,{checked:u=!1}=e,{group:f=void 0}=e,{indeterminate:d=!1}=e,{skeleton:h=!1}=e,{required:p=!1}=e,{readonly:m=!1}=e,{disabled:g=!1}=e,{labelText:v=""}=e,{hideLabel:M=!1}=e,{name:b=""}=e,{title:y=void 0}=e,{id:_="ccs-"+Math.random().toString(36)}=e,{ref:S=null}=e;const A=bn();let x=null;function T(O){fe.call(this,i,O)}function w(O){fe.call(this,i,O)}function k(O){fe.call(this,i,O)}function j(O){fe.call(this,i,O)}function D(O){fe.call(this,i,O)}function R(O){fe.call(this,i,O)}function X(O){fe.call(this,i,O)}function se(O){fe.call(this,i,O)}function $(O){fe.call(this,i,O)}function Z(O){fe.call(this,i,O)}function ce(O){Mt[O?"unshift":"push"](()=>{S=O,t(3,S)})}const ue=()=>{n?t(1,f=f.includes(c)?f.filter(O=>O!==c):[...f,c]):t(0,u=!u)};function z(O){Mt[O?"unshift":"push"](()=>{x=O,t(14,x)})}return i.$$set=O=>{e=ae(ae({},e),qe(O)),t(16,a=Ce(e,r)),"value"in O&&t(4,c=O.value),"checked"in O&&t(0,u=O.checked),"group"in O&&t(1,f=O.group),"indeterminate"in O&&t(5,d=O.indeterminate),"skeleton"in O&&t(6,h=O.skeleton),"required"in O&&t(7,p=O.required),"readonly"in O&&t(8,m=O.readonly),"disabled"in O&&t(9,g=O.disabled),"labelText"in O&&t(10,v=O.labelText),"hideLabel"in O&&t(11,M=O.hideLabel),"name"in O&&t(12,b=O.name),"title"in O&&t(2,y=O.title),"id"in O&&t(13,_=O.id),"ref"in O&&t(3,S=O.ref),"$$scope"in O&&t(18,l=O.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&2&&t(15,n=Array.isArray(f)),i.$$.dirty[0]&32787&&t(0,u=n?f.includes(c):u),i.$$.dirty[0]&1&&A("check",u),i.$$.dirty[0]&16384&&t(17,s=(x==null?void 0:x.offsetWidth)<(x==null?void 0:x.scrollWidth)),i.$$.dirty[0]&147460&&t(2,y=!y&&s?x==null?void 0:x.innerText:y)},[u,f,y,S,c,d,h,p,m,g,v,M,b,_,x,n,a,s,l,o,T,w,k,j,D,R,X,se,$,Z,ce,ue,z]}class Yf extends Ge{constructor(e){super(),Be(this,e,Xf,qf,Ue,{value:4,checked:0,group:1,indeterminate:5,skeleton:6,required:7,readonly:8,disabled:9,labelText:10,hideLabel:11,name:12,title:2,id:13,ref:3},null,[-1,-1])}}const Zf=Yf;function Xa(i){let e,t;return{c(){e=ft("title"),t=Ne(i[1])},m(n,s){Q(n,e,s),Y(e,t)},p(n,s){s&2&&Ke(t,n[1])},d(n){n&&J(e)}}}function Kf(i){let e,t,n,s=i[1]&&Xa(i),r=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:i[0]},{height:i[0]},i[2],i[3]],a={};for(let o=0;o<r.length;o+=1)a=ae(a,r[o]);return{c(){e=ft("svg"),s&&s.c(),t=ft("path"),n=ft("path"),ee(t,"d","M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25	c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z"),ee(n,"fill","none"),ee(n,"d","M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22	C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z"),ee(n,"data-icon-path","inner-path"),ee(n,"opacity","0"),$t(e,a)},m(o,l){Q(o,e,l),s&&s.m(e,null),Y(e,t),Y(e,n)},p(o,[l]){o[1]?s?s.p(o,l):(s=Xa(o),s.c(),s.m(e,t)):s&&(s.d(1),s=null),$t(e,a=Xe(r,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},l&1&&{width:o[0]},l&1&&{height:o[0]},l&4&&o[2],l&8&&o[3]]))},i:Qe,o:Qe,d(o){o&&J(e),s&&s.d()}}}function Jf(i,e,t){let n,s;const r=["size","title"];let a=Ce(e,r),{size:o=16}=e,{title:l=void 0}=e;return i.$$set=c=>{t(5,e=ae(ae({},e),qe(c))),t(3,a=Ce(e,r)),"size"in c&&t(0,o=c.size),"title"in c&&t(1,l=c.title)},i.$$.update=()=>{t(4,n=e["aria-label"]||e["aria-labelledby"]||l),t(2,s={"aria-hidden":n?void 0:!0,role:n?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=qe(e),[o,l,s,a,n]}class Qf extends Ge{constructor(e){super(),Be(this,e,Jf,Kf,Ue,{size:0,title:1})}}const _a=Qf;function Ya(i){let e,t;return{c(){e=ft("title"),t=Ne(i[1])},m(n,s){Q(n,e,s),Y(e,t)},p(n,s){s&2&&Ke(t,n[1])},d(n){n&&J(e)}}}function $f(i){let e,t,n,s,r=i[1]&&Ya(i),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:i[0]},{height:i[0]},i[2],i[3]],o={};for(let l=0;l<a.length;l+=1)o=ae(o,a[l]);return{c(){e=ft("svg"),r&&r.c(),t=ft("path"),n=ft("path"),s=ft("path"),ee(t,"fill","none"),ee(t,"d","M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z"),ee(t,"data-icon-path","inner-path"),ee(n,"d","M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"),ee(s,"d","M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"),$t(e,o)},m(l,c){Q(l,e,c),r&&r.m(e,null),Y(e,t),Y(e,n),Y(e,s)},p(l,[c]){l[1]?r?r.p(l,c):(r=Ya(l),r.c(),r.m(e,t)):r&&(r.d(1),r=null),$t(e,o=Xe(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},c&1&&{width:l[0]},c&1&&{height:l[0]},c&4&&l[2],c&8&&l[3]]))},i:Qe,o:Qe,d(l){l&&J(e),r&&r.d()}}}function ed(i,e,t){let n,s;const r=["size","title"];let a=Ce(e,r),{size:o=16}=e,{title:l=void 0}=e;return i.$$set=c=>{t(5,e=ae(ae({},e),qe(c))),t(3,a=Ce(e,r)),"size"in c&&t(0,o=c.size),"title"in c&&t(1,l=c.title)},i.$$.update=()=>{t(4,n=e["aria-label"]||e["aria-labelledby"]||l),t(2,s={"aria-hidden":n?void 0:!0,role:n?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=qe(e),[o,l,s,a,n]}class td extends Ge{constructor(e){super(),Be(this,e,ed,$f,Ue,{size:0,title:1})}}const nd=td;function Za(i){let e,t;return{c(){e=ft("title"),t=Ne(i[1])},m(n,s){Q(n,e,s),Y(e,t)},p(n,s){s&2&&Ke(t,n[1])},d(n){n&&J(e)}}}function id(i){let e,t,n=i[1]&&Za(i),s=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:i[0]},{height:i[0]},i[2],i[3]],r={};for(let a=0;a<s.length;a+=1)r=ae(r,s[a]);return{c(){e=ft("svg"),n&&n.c(),t=ft("path"),ee(t,"d","M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"),$t(e,r)},m(a,o){Q(a,e,o),n&&n.m(e,null),Y(e,t)},p(a,[o]){a[1]?n?n.p(a,o):(n=Za(a),n.c(),n.m(e,t)):n&&(n.d(1),n=null),$t(e,r=Xe(s,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},o&1&&{width:a[0]},o&1&&{height:a[0]},o&4&&a[2],o&8&&a[3]]))},i:Qe,o:Qe,d(a){a&&J(e),n&&n.d()}}}function sd(i,e,t){let n,s;const r=["size","title"];let a=Ce(e,r),{size:o=16}=e,{title:l=void 0}=e;return i.$$set=c=>{t(5,e=ae(ae({},e),qe(c))),t(3,a=Ce(e,r)),"size"in c&&t(0,o=c.size),"title"in c&&t(1,l=c.title)},i.$$.update=()=>{t(4,n=e["aria-label"]||e["aria-labelledby"]||l),t(2,s={"aria-hidden":n?void 0:!0,role:n?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=qe(e),[o,l,s,a,n]}class rd extends Ge{constructor(e){super(),Be(this,e,sd,id,Ue,{size:0,title:1})}}const Kc=rd;function Ka(i){let e,t;return{c(){e=ft("title"),t=Ne(i[1])},m(n,s){Q(n,e,s),Y(e,t)},p(n,s){s&2&&Ke(t,n[1])},d(n){n&&J(e)}}}function ad(i){let e,t,n=i[1]&&Ka(i),s=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:i[0]},{height:i[0]},i[2],i[3]],r={};for(let a=0;a<s.length;a+=1)r=ae(r,s[a]);return{c(){e=ft("svg"),n&&n.c(),t=ft("path"),ee(t,"d","M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"),$t(e,r)},m(a,o){Q(a,e,o),n&&n.m(e,null),Y(e,t)},p(a,[o]){a[1]?n?n.p(a,o):(n=Ka(a),n.c(),n.m(e,t)):n&&(n.d(1),n=null),$t(e,r=Xe(s,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},o&1&&{width:a[0]},o&1&&{height:a[0]},o&4&&a[2],o&8&&a[3]]))},i:Qe,o:Qe,d(a){a&&J(e),n&&n.d()}}}function od(i,e,t){let n,s;const r=["size","title"];let a=Ce(e,r),{size:o=16}=e,{title:l=void 0}=e;return i.$$set=c=>{t(5,e=ae(ae({},e),qe(c))),t(3,a=Ce(e,r)),"size"in c&&t(0,o=c.size),"title"in c&&t(1,l=c.title)},i.$$.update=()=>{t(4,n=e["aria-label"]||e["aria-labelledby"]||l),t(2,s={"aria-hidden":n?void 0:!0,role:n?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=qe(e),[o,l,s,a,n]}class ld extends Ge{constructor(e){super(),Be(this,e,od,ad,Ue,{size:0,title:1})}}const ba=ld,cd=i=>({}),Ja=i=>({});function Qa(i){let e,t;const n=i[16].labelText,s=ot(n,i,i[15],Ja),r=s||ud(i);return{c(){e=le("span"),r&&r.c(),P(e,"bx--visually-hidden",i[7])},m(a,o){Q(a,e,o),r&&r.m(e,null),t=!0},p(a,o){s?s.p&&(!t||o&32768)&&ct(s,n,a,a[15],t?lt(n,a[15],o,cd):ut(a[15]),Ja):r&&r.p&&(!t||o&64)&&r.p(a,t?o:-1),(!t||o&128)&&P(e,"bx--visually-hidden",a[7])},i(a){t||(F(r,a),t=!0)},o(a){B(r,a),t=!1},d(a){a&&J(e),r&&r.d(a)}}}function ud(i){let e;return{c(){e=Ne(i[6])},m(t,n){Q(t,e,n)},p(t,n){n&64&&Ke(e,t[6])},d(t){t&&J(e)}}}function fd(i){let e,t,n,s,r,a,o,l,c,u=(i[6]||i[13].labelText)&&Qa(i),f=[i[12]],d={};for(let h=0;h<f.length;h+=1)d=ae(d,f[h]);return{c(){e=le("div"),t=le("input"),n=be(),s=le("label"),r=le("span"),a=be(),u&&u.c(),ee(t,"type","radio"),ee(t,"id",i[8]),ee(t,"name",i[9]),t.checked=i[0],t.disabled=i[3],t.required=i[4],t.value=i[2],P(t,"bx--radio-button",!0),P(r,"bx--radio-button__appearance",!0),ee(s,"for",i[8]),P(s,"bx--radio-button__label",!0),Ie(e,d),P(e,"bx--radio-button-wrapper",!0),P(e,"bx--radio-button-wrapper--label-left",i[5]==="left")},m(h,p){Q(h,e,p),Y(e,t),i[18](t),Y(e,n),Y(e,s),Y(s,r),Y(s,a),u&&u.m(s,null),o=!0,l||(c=[oe(t,"change",i[17]),oe(t,"change",i[19])],l=!0)},p(h,[p]){(!o||p&256)&&ee(t,"id",h[8]),(!o||p&512)&&ee(t,"name",h[9]),(!o||p&1)&&(t.checked=h[0]),(!o||p&8)&&(t.disabled=h[3]),(!o||p&16)&&(t.required=h[4]),(!o||p&4)&&(t.value=h[2]),h[6]||h[13].labelText?u?(u.p(h,p),p&8256&&F(u,1)):(u=Qa(h),u.c(),F(u,1),u.m(s,null)):u&&($e(),B(u,1,1,()=>{u=null}),et()),(!o||p&256)&&ee(s,"for",h[8]),Ie(e,d=Xe(f,[p&4096&&h[12]])),P(e,"bx--radio-button-wrapper",!0),P(e,"bx--radio-button-wrapper--label-left",h[5]==="left")},i(h){o||(F(u),o=!0)},o(h){B(u),o=!1},d(h){h&&J(e),i[18](null),u&&u.d(),l=!1,_t(c)}}}function dd(i,e,t){const n=["value","checked","disabled","required","labelPosition","labelText","hideLabel","id","name","ref"];let s=Ce(e,n),r,{$$slots:a={},$$scope:o}=e;const l=ma(a);let{value:c=""}=e,{checked:u=!1}=e,{disabled:f=!1}=e,{required:d=!1}=e,{labelPosition:h="right"}=e,{labelText:p=""}=e,{hideLabel:m=!1}=e,{id:g="ccs-"+Math.random().toString(36)}=e,{name:v=""}=e,{ref:M=null}=e;const b=en("RadioButtonGroup"),y=b?b.selectedValue:ht(u?c:void 0);gt(i,y,x=>t(14,r=x)),b&&b.add({id:g,checked:u,disabled:f,value:c});function _(x){fe.call(this,i,x)}function S(x){Mt[x?"unshift":"push"](()=>{M=x,t(1,M)})}const A=()=>{b&&b.update(c)};return i.$$set=x=>{e=ae(ae({},e),qe(x)),t(12,s=Ce(e,n)),"value"in x&&t(2,c=x.value),"checked"in x&&t(0,u=x.checked),"disabled"in x&&t(3,f=x.disabled),"required"in x&&t(4,d=x.required),"labelPosition"in x&&t(5,h=x.labelPosition),"labelText"in x&&t(6,p=x.labelText),"hideLabel"in x&&t(7,m=x.hideLabel),"id"in x&&t(8,g=x.id),"name"in x&&t(9,v=x.name),"ref"in x&&t(1,M=x.ref),"$$scope"in x&&t(15,o=x.$$scope)},i.$$.update=()=>{i.$$.dirty&16388&&t(0,u=r===c)},[u,M,c,f,d,h,p,m,g,v,b,y,s,l,r,o,a,_,S,A]}class hd extends Ge{constructor(e){super(),Be(this,e,dd,fd,Ue,{value:2,checked:0,disabled:3,required:4,labelPosition:5,labelText:6,hideLabel:7,id:8,name:9,ref:1})}}const md=hd;function $a(i){let e,t;return{c(){e=ft("title"),t=Ne(i[1])},m(n,s){Q(n,e,s),Y(e,t)},p(n,s){s&2&&Ke(t,n[1])},d(n){n&&J(e)}}}function pd(i){let e,t,n,s=i[1]&&$a(i),r=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:i[0]},{height:i[0]},i[2],i[3]],a={};for(let o=0;o<r.length;o+=1)a=ae(a,r[o]);return{c(){e=ft("svg"),s&&s.c(),t=ft("path"),n=ft("path"),ee(t,"d","M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM14,21.5908l-5-5L10.5906,15,14,18.4092,21.41,11l1.5957,1.5859Z"),ee(n,"fill","none"),ee(n,"d","M14 21.591L9 16.591 10.591 15 14 18.409 21.41 11 23.005 12.585 14 21.591z"),ee(n,"data-icon-path","inner-path"),$t(e,a)},m(o,l){Q(o,e,l),s&&s.m(e,null),Y(e,t),Y(e,n)},p(o,[l]){o[1]?s?s.p(o,l):(s=$a(o),s.c(),s.m(e,t)):s&&(s.d(1),s=null),$t(e,a=Xe(r,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},l&1&&{width:o[0]},l&1&&{height:o[0]},l&4&&o[2],l&8&&o[3]]))},i:Qe,o:Qe,d(o){o&&J(e),s&&s.d()}}}function gd(i,e,t){let n,s;const r=["size","title"];let a=Ce(e,r),{size:o=16}=e,{title:l=void 0}=e;return i.$$set=c=>{t(5,e=ae(ae({},e),qe(c))),t(3,a=Ce(e,r)),"size"in c&&t(0,o=c.size),"title"in c&&t(1,l=c.title)},i.$$.update=()=>{t(4,n=e["aria-label"]||e["aria-labelledby"]||l),t(2,s={"aria-hidden":n?void 0:!0,role:n?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=qe(e),[o,l,s,a,n]}class _d extends Ge{constructor(e){super(),Be(this,e,gd,pd,Ue,{size:0,title:1})}}const bd=_d;function vd(i){let e,t,n,s,r,a,o,l,c,u=i[0]&&eo(i),f=[{"aria-atomic":"true"},{"aria-labelledby":i[4]},{"aria-live":c=i[1]?"assertive":"off"},i[6]],d={};for(let h=0;h<f.length;h+=1)d=ae(d,f[h]);return{c(){e=le("div"),t=le("label"),n=Ne(i[3]),s=be(),r=ft("svg"),a=ft("title"),o=Ne(i[3]),u&&u.c(),l=ft("circle"),ee(t,"id",i[4]),P(t,"bx--visually-hidden",!0),ee(l,"cx","50%"),ee(l,"cy","50%"),ee(l,"r",i[5]),P(l,"bx--loading__stroke",!0),ee(r,"viewBox","0 0 100 100"),P(r,"bx--loading__svg",!0),Ie(e,d),P(e,"bx--loading",!0),P(e,"bx--loading--small",i[0]),P(e,"bx--loading--stop",!i[1])},m(h,p){Q(h,e,p),Y(e,t),Y(t,n),Y(e,s),Y(e,r),Y(r,a),Y(a,o),u&&u.m(r,null),Y(r,l)},p(h,p){p&8&&Ke(n,h[3]),p&16&&ee(t,"id",h[4]),p&8&&Ke(o,h[3]),h[0]?u?u.p(h,p):(u=eo(h),u.c(),u.m(r,l)):u&&(u.d(1),u=null),p&32&&ee(l,"r",h[5]),Ie(e,d=Xe(f,[{"aria-atomic":"true"},p&16&&{"aria-labelledby":h[4]},p&2&&c!==(c=h[1]?"assertive":"off")&&{"aria-live":c},p&64&&h[6]])),P(e,"bx--loading",!0),P(e,"bx--loading--small",h[0]),P(e,"bx--loading--stop",!h[1])},d(h){h&&J(e),u&&u.d()}}}function xd(i){let e,t,n,s,r,a,o,l,c,u,f=i[0]&&to(i),d=[i[6]],h={};for(let p=0;p<d.length;p+=1)h=ae(h,d[p]);return{c(){e=le("div"),t=le("div"),n=le("label"),s=Ne(i[3]),r=be(),a=ft("svg"),o=ft("title"),l=Ne(i[3]),f&&f.c(),c=ft("circle"),ee(n,"id",i[4]),P(n,"bx--visually-hidden",!0),ee(c,"cx","50%"),ee(c,"cy","50%"),ee(c,"r",i[5]),P(c,"bx--loading__stroke",!0),ee(a,"viewBox","0 0 100 100"),P(a,"bx--loading__svg",!0),ee(t,"aria-atomic","true"),ee(t,"aria-labelledby",i[4]),ee(t,"aria-live",u=i[1]?"assertive":"off"),P(t,"bx--loading",!0),P(t,"bx--loading--small",i[0]),P(t,"bx--loading--stop",!i[1]),Ie(e,h),P(e,"bx--loading-overlay",!0),P(e,"bx--loading-overlay--stop",!i[1])},m(p,m){Q(p,e,m),Y(e,t),Y(t,n),Y(n,s),Y(t,r),Y(t,a),Y(a,o),Y(o,l),f&&f.m(a,null),Y(a,c)},p(p,m){m&8&&Ke(s,p[3]),m&16&&ee(n,"id",p[4]),m&8&&Ke(l,p[3]),p[0]?f?f.p(p,m):(f=to(p),f.c(),f.m(a,c)):f&&(f.d(1),f=null),m&32&&ee(c,"r",p[5]),m&16&&ee(t,"aria-labelledby",p[4]),m&2&&u!==(u=p[1]?"assertive":"off")&&ee(t,"aria-live",u),m&1&&P(t,"bx--loading--small",p[0]),m&2&&P(t,"bx--loading--stop",!p[1]),Ie(e,h=Xe(d,[m&64&&p[6]])),P(e,"bx--loading-overlay",!0),P(e,"bx--loading-overlay--stop",!p[1])},d(p){p&&J(e),f&&f.d()}}}function eo(i){let e;return{c(){e=ft("circle"),ee(e,"cx","50%"),ee(e,"cy","50%"),ee(e,"r",i[5]),P(e,"bx--loading__background",!0)},m(t,n){Q(t,e,n)},p(t,n){n&32&&ee(e,"r",t[5])},d(t){t&&J(e)}}}function to(i){let e;return{c(){e=ft("circle"),ee(e,"cx","50%"),ee(e,"cy","50%"),ee(e,"r",i[5]),P(e,"bx--loading__background",!0)},m(t,n){Q(t,e,n)},p(t,n){n&32&&ee(e,"r",t[5])},d(t){t&&J(e)}}}function Md(i){let e;function t(r,a){return r[2]?xd:vd}let n=t(i),s=n(i);return{c(){s.c(),e=Lt()},m(r,a){s.m(r,a),Q(r,e,a)},p(r,[a]){n===(n=t(r))&&s?s.p(r,a):(s.d(1),s=n(r),s&&(s.c(),s.m(e.parentNode,e)))},i:Qe,o:Qe,d(r){s.d(r),r&&J(e)}}}function yd(i,e,t){let n;const s=["small","active","withOverlay","description","id"];let r=Ce(e,s),{small:a=!1}=e,{active:o=!0}=e,{withOverlay:l=!0}=e,{description:c="Active loading indicator"}=e,{id:u="ccs-"+Math.random().toString(36)}=e;return i.$$set=f=>{e=ae(ae({},e),qe(f)),t(6,r=Ce(e,s)),"small"in f&&t(0,a=f.small),"active"in f&&t(1,o=f.active),"withOverlay"in f&&t(2,l=f.withOverlay),"description"in f&&t(3,c=f.description),"id"in f&&t(4,u=f.id)},i.$$.update=()=>{i.$$.dirty&1&&t(5,n=a?"42":"44")},[a,o,l,c,u,n,r]}class Sd extends Ge{constructor(e){super(),Be(this,e,yd,Md,Ue,{small:0,active:1,withOverlay:2,description:3,id:4})}}const wd=Sd;function no(i){let e,t;const n=[{description:i[1]},i[3],{small:!0},{withOverlay:!1}];let s={};for(let r=0;r<n.length;r+=1)s=ae(s,n[r]);return e=new wd({props:s}),{c(){ye(e.$$.fragment)},m(r,a){ve(e,r,a),t=!0},p(r,a){const o=a&10?Xe(n,[a&2&&{description:r[1]},a&8&&pi(r[3]),n[2],n[3]]):{};e.$set(o)},i(r){t||(F(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){xe(e,r)}}}function io(i){let e,t,n,s,r,a,o=i[2]&&so();n=new ba({});let l=[{"aria-label":i[1]},{type:"button"},{tabindex:"0"},i[3]],c={};for(let u=0;u<l.length;u+=1)c=ae(c,l[u]);return{c(){o&&o.c(),e=be(),t=le("button"),ye(n.$$.fragment),Ie(t,c),P(t,"bx--file-close",!0)},m(u,f){o&&o.m(u,f),Q(u,e,f),Q(u,t,f),ve(n,t,null),t.autofocus&&t.focus(),s=!0,r||(a=[oe(t,"click",i[4]),oe(t,"keydown",i[5])],r=!0)},p(u,f){u[2]?o?f&4&&F(o,1):(o=so(),o.c(),F(o,1),o.m(e.parentNode,e)):o&&($e(),B(o,1,1,()=>{o=null}),et()),Ie(t,c=Xe(l,[(!s||f&2)&&{"aria-label":u[1]},{type:"button"},{tabindex:"0"},f&8&&u[3]])),P(t,"bx--file-close",!0)},i(u){s||(F(o),F(n.$$.fragment,u),s=!0)},o(u){B(o),B(n.$$.fragment,u),s=!1},d(u){o&&o.d(u),u&&J(e),u&&J(t),xe(n),r=!1,_t(a)}}}function so(i){let e,t;return e=new _a({props:{class:"bx--file-invalid"}}),{c(){ye(e.$$.fragment)},m(n,s){ve(e,n,s),t=!0},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){B(e.$$.fragment,n),t=!1},d(n){xe(e,n)}}}function ro(i){let e,t;const n=[{"aria-label":i[1]},{title:i[1]},{class:"bx--file-complete"},i[3]];let s={};for(let r=0;r<n.length;r+=1)s=ae(s,n[r]);return e=new bd({props:s}),{c(){ye(e.$$.fragment)},m(r,a){ve(e,r,a),t=!0},p(r,a){const o=a&10?Xe(n,[a&2&&{"aria-label":r[1]},a&2&&{title:r[1]},n[2],a&8&&pi(r[3])]):{};e.$set(o)},i(r){t||(F(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){xe(e,r)}}}function Td(i){let e,t,n,s,r=i[0]==="uploading"&&no(i),a=i[0]==="edit"&&io(i),o=i[0]==="complete"&&ro(i);return{c(){r&&r.c(),e=be(),a&&a.c(),t=be(),o&&o.c(),n=Lt()},m(l,c){r&&r.m(l,c),Q(l,e,c),a&&a.m(l,c),Q(l,t,c),o&&o.m(l,c),Q(l,n,c),s=!0},p(l,[c]){l[0]==="uploading"?r?(r.p(l,c),c&1&&F(r,1)):(r=no(l),r.c(),F(r,1),r.m(e.parentNode,e)):r&&($e(),B(r,1,1,()=>{r=null}),et()),l[0]==="edit"?a?(a.p(l,c),c&1&&F(a,1)):(a=io(l),a.c(),F(a,1),a.m(t.parentNode,t)):a&&($e(),B(a,1,1,()=>{a=null}),et()),l[0]==="complete"?o?(o.p(l,c),c&1&&F(o,1)):(o=ro(l),o.c(),F(o,1),o.m(n.parentNode,n)):o&&($e(),B(o,1,1,()=>{o=null}),et())},i(l){s||(F(r),F(a),F(o),s=!0)},o(l){B(r),B(a),B(o),s=!1},d(l){r&&r.d(l),l&&J(e),a&&a.d(l),l&&J(t),o&&o.d(l),l&&J(n)}}}function Ed(i,e,t){const n=["status","iconDescription","invalid"];let s=Ce(e,n),{status:r="uploading"}=e,{iconDescription:a=""}=e,{invalid:o=!1}=e;function l(u){fe.call(this,i,u)}function c(u){fe.call(this,i,u)}return i.$$set=u=>{e=ae(ae({},e),qe(u)),t(3,s=Ce(e,n)),"status"in u&&t(0,r=u.status),"iconDescription"in u&&t(1,a=u.iconDescription),"invalid"in u&&t(2,o=u.invalid)},[r,a,o,s,l,c]}class Ad extends Ge{constructor(e){super(),Be(this,e,Ed,Td,Ue,{status:0,iconDescription:1,invalid:2})}}const Jc=Ad,Cd=i=>({}),ao=i=>({});function Ld(i){let e;return{c(){e=Ne(i[2])},m(t,n){Q(t,e,n)},p(t,n){n&4&&Ke(e,t[2])},d(t){t&&J(e)}}}function Pd(i){let e,t,n,s,r,a,o,l;const c=i[15].labelText,u=ot(c,i,i[14],ao),f=u||Ld(i);let d=[{type:"file"},{tabindex:"-1"},{accept:i[3]},{disabled:i[5]},{id:i[10]},{multiple:i[4]},{name:i[11]},i[13]],h={};for(let p=0;p<d.length;p+=1)h=ae(h,d[p]);return{c(){e=le("label"),t=le("span"),f&&f.c(),s=be(),r=le("input"),ee(t,"role",i[8]),ee(e,"aria-disabled",i[5]),ee(e,"for",i[10]),ee(e,"tabindex",n=i[5]?"-1":i[9]),P(e,"bx--btn",!0),P(e,"bx--btn--sm",!0),P(e,"bx--btn--disabled",i[5]),P(e,"bx--btn--primary",i[7]==="primary"),P(e,"bx--btn--secondary",i[7]==="secondary"),P(e,"bx--btn--tertiary",i[7]==="tertiary"),P(e,"bx--btn--ghost",i[7]==="ghost"),P(e,"bx--btn--danger",i[7]==="danger"),Ie(r,h),P(r,"bx--visually-hidden",!0)},m(p,m){Q(p,e,m),Y(e,t),f&&f.m(t,null),Q(p,s,m),Q(p,r,m),r.autofocus&&r.focus(),i[19](r),a=!0,o||(l=[oe(e,"keydown",i[17]),oe(e,"keydown",i[18]),oe(r,"change",Xu(i[20])),oe(r,"click",i[16]),oe(r,"click",Dd)],o=!0)},p(p,[m]){u?u.p&&(!a||m&16384)&&ct(u,c,p,p[14],a?lt(c,p[14],m,Cd):ut(p[14]),ao):f&&f.p&&(!a||m&4)&&f.p(p,a?m:-1),(!a||m&256)&&ee(t,"role",p[8]),(!a||m&32)&&ee(e,"aria-disabled",p[5]),(!a||m&1024)&&ee(e,"for",p[10]),(!a||m&544&&n!==(n=p[5]?"-1":p[9]))&&ee(e,"tabindex",n),(!a||m&32)&&P(e,"bx--btn--disabled",p[5]),(!a||m&128)&&P(e,"bx--btn--primary",p[7]==="primary"),(!a||m&128)&&P(e,"bx--btn--secondary",p[7]==="secondary"),(!a||m&128)&&P(e,"bx--btn--tertiary",p[7]==="tertiary"),(!a||m&128)&&P(e,"bx--btn--ghost",p[7]==="ghost"),(!a||m&128)&&P(e,"bx--btn--danger",p[7]==="danger"),Ie(r,h=Xe(d,[{type:"file"},{tabindex:"-1"},(!a||m&8)&&{accept:p[3]},(!a||m&32)&&{disabled:p[5]},(!a||m&1024)&&{id:p[10]},(!a||m&16)&&{multiple:p[4]},(!a||m&2048)&&{name:p[11]},m&8192&&p[13]])),P(r,"bx--visually-hidden",!0)},i(p){a||(F(f,p),a=!0)},o(p){B(f,p),a=!1},d(p){p&&J(e),f&&f.d(p),p&&J(s),p&&J(r),i[19](null),o=!1,_t(l)}}}const Dd=({target:i})=>{i.value=null};function Rd(i,e,t){const n=["accept","files","multiple","disabled","disableLabelChanges","kind","labelText","role","tabindex","id","name","ref"];let s=Ce(e,n),{$$slots:r={},$$scope:a}=e,{accept:o=[]}=e,{files:l=[]}=e,{multiple:c=!1}=e,{disabled:u=!1}=e,{disableLabelChanges:f=!1}=e,{kind:d="primary"}=e,{labelText:h="Add file"}=e,{role:p="button"}=e,{tabindex:m="0"}=e,{id:g="ccs-"+Math.random().toString(36)}=e,{name:v=""}=e,{ref:M=null}=e;const b=bn();let y=h;function _(w){fe.call(this,i,w)}function S(w){fe.call(this,i,w)}const A=({key:w})=>{(w===" "||w==="Enter")&&M.click()};function x(w){Mt[w?"unshift":"push"](()=>{M=w,t(1,M),t(0,l),t(21,y)})}const T=({target:w})=>{t(0,l=[...w.files]),l&&!f&&t(2,h=l.length>1?`${l.length} files`:l[0].name),b("change",l)};return i.$$set=w=>{e=ae(ae({},e),qe(w)),t(13,s=Ce(e,n)),"accept"in w&&t(3,o=w.accept),"files"in w&&t(0,l=w.files),"multiple"in w&&t(4,c=w.multiple),"disabled"in w&&t(5,u=w.disabled),"disableLabelChanges"in w&&t(6,f=w.disableLabelChanges),"kind"in w&&t(7,d=w.kind),"labelText"in w&&t(2,h=w.labelText),"role"in w&&t(8,p=w.role),"tabindex"in w&&t(9,m=w.tabindex),"id"in w&&t(10,g=w.id),"name"in w&&t(11,v=w.name),"ref"in w&&t(1,M=w.ref),"$$scope"in w&&t(14,a=w.$$scope)},i.$$.update=()=>{i.$$.dirty&3&&M&&l.length===0&&(t(2,h=y),t(1,M.value=null,M))},[l,M,h,o,c,u,f,d,p,m,g,v,b,s,a,r,_,S,A,x,T]}class Id extends Ge{constructor(e){super(),Be(this,e,Rd,Pd,Ue,{accept:3,files:0,multiple:4,disabled:5,disableLabelChanges:6,kind:7,labelText:2,role:8,tabindex:9,id:10,name:11,ref:1})}}const Qc=Id;function oo(i,e,t){const n=i.slice();return n[10]=e[t].name,n[27]=t,n}function lo(i){let e,t,n=i[10]+"",s,r,a,o,l,c;function u(...d){return i[20](i[27],...d)}function f(){return i[22](i[27])}return o=new Jc({props:{iconDescription:i[9],status:i[1]}}),o.$on("keydown",i[19]),o.$on("keydown",u),o.$on("click",i[21]),o.$on("click",f),{c(){e=le("span"),t=le("p"),s=Ne(n),r=be(),a=le("span"),ye(o.$$.fragment),l=be(),P(t,"bx--file-filename",!0),P(a,"bx--file__state-container",!0),P(e,"bx--file__selected-file",!0)},m(d,h){Q(d,e,h),Y(e,t),Y(t,s),Y(e,r),Y(e,a),ve(o,a,null),Y(e,l),c=!0},p(d,h){i=d,(!c||h&1)&&n!==(n=i[10]+"")&&Ke(s,n);const p={};h&512&&(p.iconDescription=i[9]),h&2&&(p.status=i[1]),o.$set(p)},i(d){c||(F(o.$$.fragment,d),c=!0)},o(d){B(o.$$.fragment,d),c=!1},d(d){d&&J(e),xe(o)}}}function kd(i){let e,t,n,s,r,a,o,l,c,u,f,d,h;l=new Qc({props:{disabled:i[2],disableLabelChanges:!0,labelText:i[8],accept:i[3],name:i[10],multiple:i[4],kind:i[7]}}),l.$on("change",i[17]),l.$on("change",i[18]);let p=i[0],m=[];for(let b=0;b<p.length;b+=1)m[b]=lo(oo(i,p,b));const g=b=>B(m[b],1,1,()=>{m[b]=null});let v=[i[11]],M={};for(let b=0;b<v.length;b+=1)M=ae(M,v[b]);return{c(){e=le("div"),t=le("p"),n=Ne(i[6]),s=be(),r=le("p"),a=Ne(i[5]),o=be(),ye(l.$$.fragment),c=be(),u=le("div");for(let b=0;b<m.length;b+=1)m[b].c();P(t,"bx--file--label",!0),P(t,"bx--label-description--disabled",i[2]),P(r,"bx--label-description",!0),P(r,"bx--label-description--disabled",i[2]),P(u,"bx--file-container",!0),Ie(e,M),P(e,"bx--form-item",!0)},m(b,y){Q(b,e,y),Y(e,t),Y(t,n),Y(e,s),Y(e,r),Y(r,a),Y(e,o),ve(l,e,null),Y(e,c),Y(e,u);for(let _=0;_<m.length;_+=1)m[_].m(u,null);f=!0,d||(h=[oe(e,"click",i[13]),oe(e,"mouseover",i[14]),oe(e,"mouseenter",i[15]),oe(e,"mouseleave",i[16])],d=!0)},p(b,[y]){(!f||y&64)&&Ke(n,b[6]),(!f||y&4)&&P(t,"bx--label-description--disabled",b[2]),(!f||y&32)&&Ke(a,b[5]),(!f||y&4)&&P(r,"bx--label-description--disabled",b[2]);const _={};if(y&4&&(_.disabled=b[2]),y&256&&(_.labelText=b[8]),y&8&&(_.accept=b[3]),y&1024&&(_.name=b[10]),y&16&&(_.multiple=b[4]),y&128&&(_.kind=b[7]),l.$set(_),y&515){p=b[0];let S;for(S=0;S<p.length;S+=1){const A=oo(b,p,S);m[S]?(m[S].p(A,y),F(m[S],1)):(m[S]=lo(A),m[S].c(),F(m[S],1),m[S].m(u,null))}for($e(),S=p.length;S<m.length;S+=1)g(S);et()}Ie(e,M=Xe(v,[y&2048&&b[11]])),P(e,"bx--form-item",!0)},i(b){if(!f){F(l.$$.fragment,b);for(let y=0;y<p.length;y+=1)F(m[y]);f=!0}},o(b){B(l.$$.fragment,b),m=m.filter(Boolean);for(let y=0;y<m.length;y+=1)B(m[y]);f=!1},d(b){b&&J(e),xe(l),_s(m,b),d=!1,_t(h)}}}function Fd(i,e,t){const n=["status","disabled","accept","files","multiple","clearFiles","labelDescription","labelTitle","kind","buttonLabel","iconDescription","name"];let s=Ce(e,n),{status:r="uploading"}=e,{disabled:a=!1}=e,{accept:o=[]}=e,{files:l=[]}=e,{multiple:c=!1}=e;const u=()=>{t(0,l=[])};let{labelDescription:f=""}=e,{labelTitle:d=""}=e,{kind:h="primary"}=e,{buttonLabel:p=""}=e,{iconDescription:m="Provide icon description"}=e,{name:g=""}=e;const v=bn();let M=[];const b=R=>R.lastModified+R.name;sr(()=>{const R=l.map(b),X=M.map(b),se=R.filter(Z=>!X.includes(Z)),$=X.filter(Z=>!R.includes(Z));se.length>0&&v("add",se.map(Z=>l.find(ce=>Z===b(ce)))),$.length>0&&v("remove",$.map(Z=>M.find(ce=>Z===b(ce)))),M=[...l]});function y(R){fe.call(this,i,R)}function _(R){fe.call(this,i,R)}function S(R){fe.call(this,i,R)}function A(R){fe.call(this,i,R)}function x(R){fe.call(this,i,R)}const T=R=>{t(0,l=R.detail)};function w(R){fe.call(this,i,R)}const k=(R,{key:X})=>{(X===" "||X==="Enter")&&t(0,l=l.filter((se,$)=>$!==R))};function j(R){fe.call(this,i,R)}const D=R=>{t(0,l=l.filter((X,se)=>se!==R))};return i.$$set=R=>{e=ae(ae({},e),qe(R)),t(11,s=Ce(e,n)),"status"in R&&t(1,r=R.status),"disabled"in R&&t(2,a=R.disabled),"accept"in R&&t(3,o=R.accept),"files"in R&&t(0,l=R.files),"multiple"in R&&t(4,c=R.multiple),"labelDescription"in R&&t(5,f=R.labelDescription),"labelTitle"in R&&t(6,d=R.labelTitle),"kind"in R&&t(7,h=R.kind),"buttonLabel"in R&&t(8,p=R.buttonLabel),"iconDescription"in R&&t(9,m=R.iconDescription),"name"in R&&t(10,g=R.name)},[l,r,a,o,c,f,d,h,p,m,g,s,u,y,_,S,A,x,T,w,k,j,D]}class zd extends Ge{constructor(e){super(),Be(this,e,Fd,kd,Ue,{status:1,disabled:2,accept:3,files:0,multiple:4,clearFiles:12,labelDescription:5,labelTitle:6,kind:7,buttonLabel:8,iconDescription:9,name:10})}get clearFiles(){return this.$$.ctx[12]}}const Od=zd,Nd=i=>({props:i&2}),co=i=>({props:i[1]});function Ud(i){let e,t;const n=i[10].default,s=ot(n,i,i[9],null);let r=[i[1]],a={};for(let o=0;o<r.length;o+=1)a=ae(a,r[o]);return{c(){e=le("div"),s&&s.c(),Ie(e,a)},m(o,l){Q(o,e,l),s&&s.m(e,null),t=!0},p(o,l){s&&s.p&&(!t||l&512)&&ct(s,n,o,o[9],t?lt(n,o[9],l,null):ut(o[9]),null),Ie(e,a=Xe(r,[l&2&&o[1]]))},i(o){t||(F(s,o),t=!0)},o(o){B(s,o),t=!1},d(o){o&&J(e),s&&s.d(o)}}}function Bd(i){let e;const t=i[10].default,n=ot(t,i,i[9],co);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&514)&&ct(n,t,s,s[9],e?lt(t,s[9],r,Nd):ut(s[9]),co)},i(s){e||(F(n,s),e=!0)},o(s){B(n,s),e=!1},d(s){n&&n.d(s)}}}function Gd(i){let e,t,n,s;const r=[Bd,Ud],a=[];function o(l,c){return l[0]?0:1}return e=o(i),t=a[e]=r[e](i),{c(){t.c(),n=Lt()},m(l,c){a[e].m(l,c),Q(l,n,c),s=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):($e(),B(a[u],1,1,()=>{a[u]=null}),et(),t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),F(t,1),t.m(n.parentNode,n))},i(l){s||(F(t),s=!0)},o(l){B(t),s=!1},d(l){a[e].d(l),l&&J(n)}}}function Vd(i,e,t){let n;const s=["as","condensed","narrow","fullWidth","noGutter","noGutterLeft","noGutterRight","padding"];let r=Ce(e,s),{$$slots:a={},$$scope:o}=e,{as:l=!1}=e,{condensed:c=!1}=e,{narrow:u=!1}=e,{fullWidth:f=!1}=e,{noGutter:d=!1}=e,{noGutterLeft:h=!1}=e,{noGutterRight:p=!1}=e,{padding:m=!1}=e;return i.$$set=g=>{e=ae(ae({},e),qe(g)),t(11,r=Ce(e,s)),"as"in g&&t(0,l=g.as),"condensed"in g&&t(2,c=g.condensed),"narrow"in g&&t(3,u=g.narrow),"fullWidth"in g&&t(4,f=g.fullWidth),"noGutter"in g&&t(5,d=g.noGutter),"noGutterLeft"in g&&t(6,h=g.noGutterLeft),"noGutterRight"in g&&t(7,p=g.noGutterRight),"padding"in g&&t(8,m=g.padding),"$$scope"in g&&t(9,o=g.$$scope)},i.$$.update=()=>{t(1,n={...r,class:[r.class,"bx--grid",c&&"bx--grid--condensed",u&&"bx--grid--narrow",f&&"bx--grid--full-width",d&&"bx--no-gutter",h&&"bx--no-gutter--left",p&&"bx--no-gutter--right",m&&"bx--row-padding"].filter(Boolean).join(" ")})},[l,n,c,u,f,d,h,p,m,o,a]}class Hd extends Ge{constructor(e){super(),Be(this,e,Vd,Gd,Ue,{as:0,condensed:2,narrow:3,fullWidth:4,noGutter:5,noGutterLeft:6,noGutterRight:7,padding:8})}}const Wd=Hd,jd=i=>({props:i&2}),uo=i=>({props:i[1]});function qd(i){let e,t;const n=i[9].default,s=ot(n,i,i[8],null);let r=[i[1]],a={};for(let o=0;o<r.length;o+=1)a=ae(a,r[o]);return{c(){e=le("div"),s&&s.c(),Ie(e,a)},m(o,l){Q(o,e,l),s&&s.m(e,null),t=!0},p(o,l){s&&s.p&&(!t||l&256)&&ct(s,n,o,o[8],t?lt(n,o[8],l,null):ut(o[8]),null),Ie(e,a=Xe(r,[l&2&&o[1]]))},i(o){t||(F(s,o),t=!0)},o(o){B(s,o),t=!1},d(o){o&&J(e),s&&s.d(o)}}}function Xd(i){let e;const t=i[9].default,n=ot(t,i,i[8],uo);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&258)&&ct(n,t,s,s[8],e?lt(t,s[8],r,jd):ut(s[8]),uo)},i(s){e||(F(n,s),e=!0)},o(s){B(n,s),e=!1},d(s){n&&n.d(s)}}}function Yd(i){let e,t,n,s;const r=[Xd,qd],a=[];function o(l,c){return l[0]?0:1}return e=o(i),t=a[e]=r[e](i),{c(){t.c(),n=Lt()},m(l,c){a[e].m(l,c),Q(l,n,c),s=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):($e(),B(a[u],1,1,()=>{a[u]=null}),et(),t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),F(t,1),t.m(n.parentNode,n))},i(l){s||(F(t),s=!0)},o(l){B(t),s=!1},d(l){a[e].d(l),l&&J(n)}}}function Zd(i,e,t){let n;const s=["as","condensed","narrow","noGutter","noGutterLeft","noGutterRight","padding"];let r=Ce(e,s),{$$slots:a={},$$scope:o}=e,{as:l=!1}=e,{condensed:c=!1}=e,{narrow:u=!1}=e,{noGutter:f=!1}=e,{noGutterLeft:d=!1}=e,{noGutterRight:h=!1}=e,{padding:p=!1}=e;return i.$$set=m=>{e=ae(ae({},e),qe(m)),t(10,r=Ce(e,s)),"as"in m&&t(0,l=m.as),"condensed"in m&&t(2,c=m.condensed),"narrow"in m&&t(3,u=m.narrow),"noGutter"in m&&t(4,f=m.noGutter),"noGutterLeft"in m&&t(5,d=m.noGutterLeft),"noGutterRight"in m&&t(6,h=m.noGutterRight),"padding"in m&&t(7,p=m.padding),"$$scope"in m&&t(8,o=m.$$scope)},i.$$.update=()=>{t(1,n={...r,class:[r.class,"bx--row",c&&"bx--row--condensed",u&&"bx--row--narrow",f&&"bx--no-gutter",d&&"bx--no-gutter--left",h&&"bx--no-gutter--right",p&&"bx--row-padding"].filter(Boolean).join(" ")})},[l,n,c,u,f,d,h,p,o,a]}class Kd extends Ge{constructor(e){super(),Be(this,e,Zd,Yd,Ue,{as:0,condensed:2,narrow:3,noGutter:4,noGutterLeft:5,noGutterRight:6,padding:7})}}const Jd=Kd,Qd=i=>({props:i&2}),fo=i=>({props:i[1]});function $d(i){let e,t;const n=i[14].default,s=ot(n,i,i[13],null);let r=[i[1]],a={};for(let o=0;o<r.length;o+=1)a=ae(a,r[o]);return{c(){e=le("div"),s&&s.c(),Ie(e,a)},m(o,l){Q(o,e,l),s&&s.m(e,null),t=!0},p(o,l){s&&s.p&&(!t||l&8192)&&ct(s,n,o,o[13],t?lt(n,o[13],l,null):ut(o[13]),null),Ie(e,a=Xe(r,[l&2&&o[1]]))},i(o){t||(F(s,o),t=!0)},o(o){B(s,o),t=!1},d(o){o&&J(e),s&&s.d(o)}}}function eh(i){let e;const t=i[14].default,n=ot(t,i,i[13],fo);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&8194)&&ct(n,t,s,s[13],e?lt(t,s[13],r,Qd):ut(s[13]),fo)},i(s){e||(F(n,s),e=!0)},o(s){B(n,s),e=!1},d(s){n&&n.d(s)}}}function th(i){let e,t,n,s;const r=[eh,$d],a=[];function o(l,c){return l[0]?0:1}return e=o(i),t=a[e]=r[e](i),{c(){t.c(),n=Lt()},m(l,c){a[e].m(l,c),Q(l,n,c),s=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):($e(),B(a[u],1,1,()=>{a[u]=null}),et(),t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),F(t,1),t.m(n.parentNode,n))},i(l){s||(F(t),s=!0)},o(l){B(t),s=!1},d(l){a[e].d(l),l&&J(n)}}}function nh(i,e,t){let n,s;const r=["as","noGutter","noGutterLeft","noGutterRight","padding","aspectRatio","sm","md","lg","xlg","max"];let a=Ce(e,r),{$$slots:o={},$$scope:l}=e,{as:c=!1}=e,{noGutter:u=!1}=e,{noGutterLeft:f=!1}=e,{noGutterRight:d=!1}=e,{padding:h=!1}=e,{aspectRatio:p=void 0}=e,{sm:m=void 0}=e,{md:g=void 0}=e,{lg:v=void 0}=e,{xlg:M=void 0}=e,{max:b=void 0}=e;const y=["sm","md","lg","xlg","max"];return i.$$set=_=>{e=ae(ae({},e),qe(_)),t(16,a=Ce(e,r)),"as"in _&&t(0,c=_.as),"noGutter"in _&&t(2,u=_.noGutter),"noGutterLeft"in _&&t(3,f=_.noGutterLeft),"noGutterRight"in _&&t(4,d=_.noGutterRight),"padding"in _&&t(5,h=_.padding),"aspectRatio"in _&&t(6,p=_.aspectRatio),"sm"in _&&t(7,m=_.sm),"md"in _&&t(8,g=_.md),"lg"in _&&t(9,v=_.lg),"xlg"in _&&t(10,M=_.xlg),"max"in _&&t(11,b=_.max),"$$scope"in _&&t(13,l=_.$$scope)},i.$$.update=()=>{i.$$.dirty&3968&&t(12,n=[m,g,v,M,b].map((_,S)=>{const A=y[S];if(_===!0)return`bx--col-${A}`;if(typeof _=="number")return`bx--col-${A}-${_}`;if(typeof _=="object"){let x=[];return typeof _.span=="number"?x=[...x,`bx--col-${A}-${_.span}`]:_.span===!0&&(x=[...x,`bx--col-${A}`]),typeof _.offset=="number"&&(x=[...x,`bx--offset-${A}-${_.offset}`]),x.join(" ")}}).filter(Boolean).join(" ")),t(1,s={...a,class:[a.class,n,!n&&"bx--col",u&&"bx--no-gutter",f&&"bx--no-gutter--left",d&&"bx--no-gutter--right",p&&`bx--aspect-ratio bx--aspect-ratio--${p}`,h&&"bx--col-padding"].filter(Boolean).join(" ")})},[c,s,u,f,d,h,p,m,g,v,M,b,n,l,o]}class ih extends Ge{constructor(e){super(),Be(this,e,nh,th,Ue,{as:0,noGutter:2,noGutterLeft:3,noGutterRight:4,padding:5,aspectRatio:6,sm:7,md:8,lg:9,xlg:10,max:11})}}const ho=ih;function $c(){localStorage.clear()}function sh(i,e,t){let{key:n="local-storage-key"}=e,{value:s=""}=e;function r(){localStorage.removeItem(n)}const a=bn();let o=s;function l(){typeof s=="object"?localStorage.setItem(n,JSON.stringify(s)):localStorage.setItem(n,s)}return Xi(()=>{const c=localStorage.getItem(n);if(c!=null)try{t(0,s=JSON.parse(c))}catch{t(0,s=c)}else l(),a("save")}),sr(()=>{o!==s&&(l(),a("update",{prevValue:o,value:s})),o=s}),i.$$set=c=>{"key"in c&&t(1,n=c.key),"value"in c&&t(0,s=c.value)},[s,n,r,$c]}class rh extends Ge{constructor(e){super(),Be(this,e,sh,null,Ue,{key:1,value:0,clearItem:2,clearAll:3})}get clearItem(){return this.$$.ctx[2]}get clearAll(){return $c}}const ah=rh,oh=i=>({}),mo=i=>({});function po(i){let e,t;const n=i[26].labelText,s=ot(n,i,i[25],mo),r=s||lh(i);return{c(){e=le("label"),r&&r.c(),ee(e,"for",i[5]),P(e,"bx--label",!0),P(e,"bx--visually-hidden",i[14]),P(e,"bx--label--disabled",i[4])},m(a,o){Q(a,e,o),r&&r.m(e,null),t=!0},p(a,o){s?s.p&&(!t||o[0]&33554432)&&ct(s,n,a,a[25],t?lt(n,a[25],o,oh):ut(a[25]),mo):r&&r.p&&(!t||o[0]&8192)&&r.p(a,t?o:[-1,-1]),(!t||o[0]&32)&&ee(e,"for",a[5]),(!t||o[0]&16384)&&P(e,"bx--visually-hidden",a[14]),(!t||o[0]&16)&&P(e,"bx--label--disabled",a[4])},i(a){t||(F(r,a),t=!0)},o(a){B(r,a),t=!1},d(a){a&&J(e),r&&r.d(a)}}}function lh(i){let e;return{c(){e=Ne(i[13])},m(t,n){Q(t,e,n)},p(t,n){n[0]&8192&&Ke(e,t[13])},d(t){t&&J(e)}}}function go(i){let e,t,n,s,r,a,o,l,c,u,f,d,h,p,m,g,v;const M=i[26].default,b=ot(M,i,i[25],null);c=new Kc({props:{class:"bx--select__arrow"}});let y=i[7]&&_o(),_=i[7]&&bo(i),S=i[11]&&vo(i);return{c(){e=le("div"),t=le("div"),n=le("select"),b&&b.c(),l=be(),ye(c.$$.fragment),u=be(),y&&y.c(),d=be(),_&&_.c(),h=be(),S&&S.c(),p=Lt(),ee(n,"aria-describedby",s=i[7]?i[16]:void 0),ee(n,"aria-invalid",r=i[7]||void 0),n.disabled=a=i[4]||void 0,n.required=o=i[15]||void 0,ee(n,"id",i[5]),ee(n,"name",i[6]),P(n,"bx--select-input",!0),P(n,"bx--select-input--sm",i[1]==="sm"),P(n,"bx--select-input--xl",i[1]==="xl"),ee(t,"data-invalid",f=i[7]||void 0),P(t,"bx--select-input__wrapper",!0),P(e,"bx--select-input--inline__wrapper",!0)},m(A,x){Q(A,e,x),Y(e,t),Y(t,n),b&&b.m(n,null),i[35](n),Y(t,l),ve(c,t,null),Y(t,u),y&&y.m(t,null),Y(e,d),_&&_.m(e,null),Q(A,h,x),S&&S.m(A,x),Q(A,p,x),m=!0,g||(v=[oe(n,"change",i[21]),oe(n,"change",i[31]),oe(n,"input",i[32]),oe(n,"focus",i[33]),oe(n,"blur",i[34])],g=!0)},p(A,x){b&&b.p&&(!m||x[0]&33554432)&&ct(b,M,A,A[25],m?lt(M,A[25],x,null):ut(A[25]),null),(!m||x[0]&65664&&s!==(s=A[7]?A[16]:void 0))&&ee(n,"aria-describedby",s),(!m||x[0]&128&&r!==(r=A[7]||void 0))&&ee(n,"aria-invalid",r),(!m||x[0]&16&&a!==(a=A[4]||void 0))&&(n.disabled=a),(!m||x[0]&32768&&o!==(o=A[15]||void 0))&&(n.required=o),(!m||x[0]&32)&&ee(n,"id",A[5]),(!m||x[0]&64)&&ee(n,"name",A[6]),(!m||x[0]&2)&&P(n,"bx--select-input--sm",A[1]==="sm"),(!m||x[0]&2)&&P(n,"bx--select-input--xl",A[1]==="xl"),A[7]?y?x[0]&128&&F(y,1):(y=_o(),y.c(),F(y,1),y.m(t,null)):y&&($e(),B(y,1,1,()=>{y=null}),et()),(!m||x[0]&128&&f!==(f=A[7]||void 0))&&ee(t,"data-invalid",f),A[7]?_?_.p(A,x):(_=bo(A),_.c(),_.m(e,null)):_&&(_.d(1),_=null),A[11]?S?S.p(A,x):(S=vo(A),S.c(),S.m(p.parentNode,p)):S&&(S.d(1),S=null)},i(A){m||(F(b,A),F(c.$$.fragment,A),F(y),m=!0)},o(A){B(b,A),B(c.$$.fragment,A),B(y),m=!1},d(A){A&&J(e),b&&b.d(A),i[35](null),xe(c),y&&y.d(),_&&_.d(),A&&J(h),S&&S.d(A),A&&J(p),g=!1,_t(v)}}}function _o(i){let e,t;return e=new _a({props:{class:"bx--select__invalid-icon"}}),{c(){ye(e.$$.fragment)},m(n,s){ve(e,n,s),t=!0},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){B(e.$$.fragment,n),t=!1},d(n){xe(e,n)}}}function bo(i){let e,t;return{c(){e=le("div"),t=Ne(i[8]),ee(e,"id",i[16]),P(e,"bx--form-requirement",!0)},m(n,s){Q(n,e,s),Y(e,t)},p(n,s){s[0]&256&&Ke(t,n[8]),s[0]&65536&&ee(e,"id",n[16])},d(n){n&&J(e)}}}function vo(i){let e,t;return{c(){e=le("div"),t=Ne(i[11]),P(e,"bx--form__helper-text",!0),P(e,"bx--form__helper-text--disabled",i[4])},m(n,s){Q(n,e,s),Y(e,t)},p(n,s){s[0]&2048&&Ke(t,n[11]),s[0]&16&&P(e,"bx--form__helper-text--disabled",n[4])},d(n){n&&J(e)}}}function xo(i){let e,t,n,s,r,a,o,l,c,u,f,d,h,p,m,g,v,M;const b=i[26].default,y=ot(b,i,i[25],null);l=new Kc({props:{class:"bx--select__arrow"}});let _=i[7]&&Mo(),S=!i[7]&&i[9]&&yo(),A=!i[7]&&i[11]&&So(i),x=i[7]&&wo(i),T=!i[7]&&i[9]&&To(i);return{c(){e=le("div"),t=le("select"),y&&y.c(),o=be(),ye(l.$$.fragment),c=be(),_&&_.c(),u=be(),S&&S.c(),d=be(),A&&A.c(),h=be(),x&&x.c(),p=be(),T&&T.c(),m=Lt(),ee(t,"id",i[5]),ee(t,"name",i[6]),ee(t,"aria-describedby",n=i[7]?i[16]:void 0),t.disabled=s=i[4]||void 0,t.required=r=i[15]||void 0,ee(t,"aria-invalid",a=i[7]||void 0),P(t,"bx--select-input",!0),P(t,"bx--select-input--sm",i[1]==="sm"),P(t,"bx--select-input--xl",i[1]==="xl"),ee(e,"data-invalid",f=i[7]||void 0),P(e,"bx--select-input__wrapper",!0)},m(w,k){Q(w,e,k),Y(e,t),y&&y.m(t,null),i[36](t),Y(e,o),ve(l,e,null),Y(e,c),_&&_.m(e,null),Y(e,u),S&&S.m(e,null),Q(w,d,k),A&&A.m(w,k),Q(w,h,k),x&&x.m(w,k),Q(w,p,k),T&&T.m(w,k),Q(w,m,k),g=!0,v||(M=[oe(t,"change",i[21]),oe(t,"change",i[27]),oe(t,"input",i[28]),oe(t,"focus",i[29]),oe(t,"blur",i[30])],v=!0)},p(w,k){y&&y.p&&(!g||k[0]&33554432)&&ct(y,b,w,w[25],g?lt(b,w[25],k,null):ut(w[25]),null),(!g||k[0]&32)&&ee(t,"id",w[5]),(!g||k[0]&64)&&ee(t,"name",w[6]),(!g||k[0]&65664&&n!==(n=w[7]?w[16]:void 0))&&ee(t,"aria-describedby",n),(!g||k[0]&16&&s!==(s=w[4]||void 0))&&(t.disabled=s),(!g||k[0]&32768&&r!==(r=w[15]||void 0))&&(t.required=r),(!g||k[0]&128&&a!==(a=w[7]||void 0))&&ee(t,"aria-invalid",a),(!g||k[0]&2)&&P(t,"bx--select-input--sm",w[1]==="sm"),(!g||k[0]&2)&&P(t,"bx--select-input--xl",w[1]==="xl"),w[7]?_?k[0]&128&&F(_,1):(_=Mo(),_.c(),F(_,1),_.m(e,u)):_&&($e(),B(_,1,1,()=>{_=null}),et()),!w[7]&&w[9]?S?k[0]&640&&F(S,1):(S=yo(),S.c(),F(S,1),S.m(e,null)):S&&($e(),B(S,1,1,()=>{S=null}),et()),(!g||k[0]&128&&f!==(f=w[7]||void 0))&&ee(e,"data-invalid",f),!w[7]&&w[11]?A?A.p(w,k):(A=So(w),A.c(),A.m(h.parentNode,h)):A&&(A.d(1),A=null),w[7]?x?x.p(w,k):(x=wo(w),x.c(),x.m(p.parentNode,p)):x&&(x.d(1),x=null),!w[7]&&w[9]?T?T.p(w,k):(T=To(w),T.c(),T.m(m.parentNode,m)):T&&(T.d(1),T=null)},i(w){g||(F(y,w),F(l.$$.fragment,w),F(_),F(S),g=!0)},o(w){B(y,w),B(l.$$.fragment,w),B(_),B(S),g=!1},d(w){w&&J(e),y&&y.d(w),i[36](null),xe(l),_&&_.d(),S&&S.d(),w&&J(d),A&&A.d(w),w&&J(h),x&&x.d(w),w&&J(p),T&&T.d(w),w&&J(m),v=!1,_t(M)}}}function Mo(i){let e,t;return e=new _a({props:{class:"bx--select__invalid-icon"}}),{c(){ye(e.$$.fragment)},m(n,s){ve(e,n,s),t=!0},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){B(e.$$.fragment,n),t=!1},d(n){xe(e,n)}}}function yo(i){let e,t;return e=new nd({props:{class:"bx--select__invalid-icon bx--select__invalid-icon--warning"}}),{c(){ye(e.$$.fragment)},m(n,s){ve(e,n,s),t=!0},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){B(e.$$.fragment,n),t=!1},d(n){xe(e,n)}}}function So(i){let e,t;return{c(){e=le("div"),t=Ne(i[11]),P(e,"bx--form__helper-text",!0),P(e,"bx--form__helper-text--disabled",i[4])},m(n,s){Q(n,e,s),Y(e,t)},p(n,s){s[0]&2048&&Ke(t,n[11]),s[0]&16&&P(e,"bx--form__helper-text--disabled",n[4])},d(n){n&&J(e)}}}function wo(i){let e,t;return{c(){e=le("div"),t=Ne(i[8]),ee(e,"id",i[16]),P(e,"bx--form-requirement",!0)},m(n,s){Q(n,e,s),Y(e,t)},p(n,s){s[0]&256&&Ke(t,n[8]),s[0]&65536&&ee(e,"id",n[16])},d(n){n&&J(e)}}}function To(i){let e,t;return{c(){e=le("div"),t=Ne(i[10]),ee(e,"id",i[16]),P(e,"bx--form-requirement",!0)},m(n,s){Q(n,e,s),Y(e,t)},p(n,s){s[0]&1024&&Ke(t,n[10]),s[0]&65536&&ee(e,"id",n[16])},d(n){n&&J(e)}}}function ch(i){let e,t,n,s,r,a=!i[12]&&po(i),o=i[2]&&go(i),l=!i[2]&&xo(i),c=[i[22]],u={};for(let f=0;f<c.length;f+=1)u=ae(u,c[f]);return{c(){e=le("div"),t=le("div"),a&&a.c(),n=be(),o&&o.c(),s=be(),l&&l.c(),P(t,"bx--select",!0),P(t,"bx--select--inline",i[2]),P(t,"bx--select--light",i[3]),P(t,"bx--select--invalid",i[7]),P(t,"bx--select--disabled",i[4]),P(t,"bx--select--warning",i[9]),Ie(e,u),P(e,"bx--form-item",!0)},m(f,d){Q(f,e,d),Y(e,t),a&&a.m(t,null),Y(t,n),o&&o.m(t,null),Y(t,s),l&&l.m(t,null),r=!0},p(f,d){f[12]?a&&($e(),B(a,1,1,()=>{a=null}),et()):a?(a.p(f,d),d[0]&4096&&F(a,1)):(a=po(f),a.c(),F(a,1),a.m(t,n)),f[2]?o?(o.p(f,d),d[0]&4&&F(o,1)):(o=go(f),o.c(),F(o,1),o.m(t,s)):o&&($e(),B(o,1,1,()=>{o=null}),et()),f[2]?l&&($e(),B(l,1,1,()=>{l=null}),et()):l?(l.p(f,d),d[0]&4&&F(l,1)):(l=xo(f),l.c(),F(l,1),l.m(t,null)),(!r||d[0]&4)&&P(t,"bx--select--inline",f[2]),(!r||d[0]&8)&&P(t,"bx--select--light",f[3]),(!r||d[0]&128)&&P(t,"bx--select--invalid",f[7]),(!r||d[0]&16)&&P(t,"bx--select--disabled",f[4]),(!r||d[0]&512)&&P(t,"bx--select--warning",f[9]),Ie(e,u=Xe(c,[d[0]&4194304&&f[22]])),P(e,"bx--form-item",!0)},i(f){r||(F(a),F(o),F(l),r=!0)},o(f){B(a),B(o),B(l),r=!1},d(f){f&&J(e),a&&a.d(),o&&o.d(),l&&l.d()}}}function uh(i,e,t){let n;const s=["selected","size","inline","light","disabled","id","name","invalid","invalidText","warn","warnText","helperText","noLabel","labelText","hideLabel","ref","required"];let r=Ce(e,s),a,o,l,c,{$$slots:u={},$$scope:f}=e,{selected:d=void 0}=e,{size:h=void 0}=e,{inline:p=!1}=e,{light:m=!1}=e,{disabled:g=!1}=e,{id:v="ccs-"+Math.random().toString(36)}=e,{name:M=void 0}=e,{invalid:b=!1}=e,{invalidText:y=""}=e,{warn:_=!1}=e,{warnText:S=""}=e,{helperText:A=""}=e,{noLabel:x=!1}=e,{labelText:T=""}=e,{hideLabel:w=!1}=e,{ref:k=null}=e,{required:j=!1}=e;const D=bn(),R=ht(d);gt(i,R,K=>t(38,o=K));const X=ht(null);gt(i,X,K=>t(40,c=K));const se=ht(null);gt(i,se,K=>t(24,a=K));const $=ht({});gt(i,$,K=>t(39,l=K)),Jt("Select",{selectedValue:R,setDefaultValue:(K,je)=>{a===null?(X.set(K),se.set(je)):c===K&&R.set(je),$.update(We=>({...We,[je]:typeof je}))}});const Z=({target:K})=>{let je=K.value;l[je]==="number"&&(je=Number(je)),R.set(je)};let ce;sr(()=>{t(23,d=o),ce!==void 0&&d!==ce&&D("update",o),ce=d});function ue(K){fe.call(this,i,K)}function z(K){fe.call(this,i,K)}function O(K){fe.call(this,i,K)}function de(K){fe.call(this,i,K)}function W(K){fe.call(this,i,K)}function ge(K){fe.call(this,i,K)}function U(K){fe.call(this,i,K)}function Se(K){fe.call(this,i,K)}function Le(K){Mt[K?"unshift":"push"](()=>{k=K,t(0,k)})}function Fe(K){Mt[K?"unshift":"push"](()=>{k=K,t(0,k)})}return i.$$set=K=>{e=ae(ae({},e),qe(K)),t(22,r=Ce(e,s)),"selected"in K&&t(23,d=K.selected),"size"in K&&t(1,h=K.size),"inline"in K&&t(2,p=K.inline),"light"in K&&t(3,m=K.light),"disabled"in K&&t(4,g=K.disabled),"id"in K&&t(5,v=K.id),"name"in K&&t(6,M=K.name),"invalid"in K&&t(7,b=K.invalid),"invalidText"in K&&t(8,y=K.invalidText),"warn"in K&&t(9,_=K.warn),"warnText"in K&&t(10,S=K.warnText),"helperText"in K&&t(11,A=K.helperText),"noLabel"in K&&t(12,x=K.noLabel),"labelText"in K&&t(13,T=K.labelText),"hideLabel"in K&&t(14,w=K.hideLabel),"ref"in K&&t(0,k=K.ref),"required"in K&&t(15,j=K.required),"$$scope"in K&&t(25,f=K.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&32&&t(16,n=`error-${v}`),i.$$.dirty[0]&25165824&&R.set(d??a)},[k,h,p,m,g,v,M,b,y,_,S,A,x,T,w,j,n,R,X,se,$,Z,r,d,a,f,u,ue,z,O,de,W,ge,U,Se,Le,Fe]}class fh extends Ge{constructor(e){super(),Be(this,e,uh,ch,Ue,{selected:23,size:1,inline:2,light:3,disabled:4,id:5,name:6,invalid:7,invalidText:8,warn:9,warnText:10,helperText:11,noLabel:12,labelText:13,hideLabel:14,ref:0,required:15},null,[-1,-1])}}const dh=fh;function hh(i){let e,t=(i[1]||i[0])+"",n,s,r;return{c(){e=le("option"),n=Ne(t),e.__value=i[0],e.value=e.__value,e.disabled=i[3],e.hidden=i[2],e.selected=i[4],ee(e,"class",s=i[5].class),ee(e,"style",r=i[5].style),P(e,"bx--select-option",!0)},m(a,o){Q(a,e,o),Y(e,n)},p(a,[o]){o&3&&t!==(t=(a[1]||a[0])+"")&&Ke(n,t),o&1&&(e.__value=a[0],e.value=e.__value),o&8&&(e.disabled=a[3]),o&4&&(e.hidden=a[2]),o&16&&(e.selected=a[4]),o&32&&s!==(s=a[5].class)&&ee(e,"class",s),o&32&&r!==(r=a[5].style)&&ee(e,"style",r),o&32&&P(e,"bx--select-option",!0)},i:Qe,o:Qe,d(a){a&&J(e)}}}function mh(i,e,t){const n=["value","text","hidden","disabled"];let s=Ce(e,n),{value:r=""}=e,{text:a=""}=e,{hidden:o=!1}=e,{disabled:l=!1}=e;const c="ccs-"+Math.random().toString(36),u=en("Select")||en("TimePickerSelect");let f=!1;const d=u.selectedValue.subscribe(h=>{t(4,f=h===r)});return Xi(()=>()=>d()),i.$$set=h=>{e=ae(ae({},e),qe(h)),t(5,s=Ce(e,n)),"value"in h&&t(0,r=h.value),"text"in h&&t(1,a=h.text),"hidden"in h&&t(2,o=h.hidden),"disabled"in h&&t(3,l=h.disabled)},i.$$.update=()=>{var h;i.$$.dirty&1&&((h=u==null?void 0:u.setDefaultValue)==null||h.call(u,c,r))},[r,a,o,l,f,s]}class ph extends Ge{constructor(e){super(),Be(this,e,mh,hh,Ue,{value:0,text:1,hidden:2,disabled:3})}}const gh=ph,_h=i=>({}),Eo=i=>({});function Ao(i){let e,t;const n=i[11].legendText,s=ot(n,i,i[10],Eo),r=s||bh(i);return{c(){e=le("legend"),r&&r.c(),P(e,"bx--label",!0),P(e,"bx--visually-hidden",i[2])},m(a,o){Q(a,e,o),r&&r.m(e,null),t=!0},p(a,o){s?s.p&&(!t||o&1024)&&ct(s,n,a,a[10],t?lt(n,a[10],o,_h):ut(a[10]),Eo):r&&r.p&&(!t||o&2)&&r.p(a,t?o:-1),(!t||o&4)&&P(e,"bx--visually-hidden",a[2])},i(a){t||(F(r,a),t=!0)},o(a){B(r,a),t=!1},d(a){a&&J(e),r&&r.d(a)}}}function bh(i){let e;return{c(){e=Ne(i[1])},m(t,n){Q(t,e,n)},p(t,n){n&2&&Ke(e,t[1])},d(t){t&&J(e)}}}function vh(i){let e,t,n,s,r,a,o=(i[1]||i[8].legendText)&&Ao(i);const l=i[11].default,c=ot(l,i,i[10],null);let u=[{id:i[5]},i[7]],f={};for(let d=0;d<u.length;d+=1)f=ae(f,u[d]);return{c(){e=le("div"),t=le("fieldset"),o&&o.c(),n=be(),c&&c.c(),t.disabled=i[0],P(t,"bx--radio-button-group",!0),P(t,"bx--radio-button-group--vertical",i[4]==="vertical"),P(t,"bx--radio-button-group--label-left",i[3]==="left"),P(t,"bx--radio-button-group--label-right",i[3]==="right"),Ie(e,f),P(e,"bx--form-item",!0)},m(d,h){Q(d,e,h),Y(e,t),o&&o.m(t,null),Y(t,n),c&&c.m(t,null),s=!0,r||(a=[oe(e,"click",i[12]),oe(e,"mouseover",i[13]),oe(e,"mouseenter",i[14]),oe(e,"mouseleave",i[15])],r=!0)},p(d,[h]){d[1]||d[8].legendText?o?(o.p(d,h),h&258&&F(o,1)):(o=Ao(d),o.c(),F(o,1),o.m(t,n)):o&&($e(),B(o,1,1,()=>{o=null}),et()),c&&c.p&&(!s||h&1024)&&ct(c,l,d,d[10],s?lt(l,d[10],h,null):ut(d[10]),null),(!s||h&1)&&(t.disabled=d[0]),(!s||h&16)&&P(t,"bx--radio-button-group--vertical",d[4]==="vertical"),(!s||h&8)&&P(t,"bx--radio-button-group--label-left",d[3]==="left"),(!s||h&8)&&P(t,"bx--radio-button-group--label-right",d[3]==="right"),Ie(e,f=Xe(u,[(!s||h&32)&&{id:d[5]},h&128&&d[7]])),P(e,"bx--form-item",!0)},i(d){s||(F(o),F(c,d),s=!0)},o(d){B(o),B(c,d),s=!1},d(d){d&&J(e),o&&o.d(),c&&c.d(d),r=!1,_t(a)}}}function xh(i,e,t){const n=["selected","disabled","legendText","hideLegend","labelPosition","orientation","id"];let s=Ce(e,n),r,{$$slots:a={},$$scope:o}=e;const l=ma(a);let{selected:c=void 0}=e,{disabled:u=!1}=e,{legendText:f=""}=e,{hideLegend:d=!1}=e,{labelPosition:h="right"}=e,{orientation:p="horizontal"}=e,{id:m=void 0}=e;const g=bn(),v=ht(c);gt(i,v,S=>t(16,r=S)),Jt("RadioButtonGroup",{selectedValue:v,add:({checked:S,value:A})=>{S&&v.set(A)},update:S=>{t(9,c=S)}}),Xi(()=>{Gt(v,r=c,r)}),Ku(()=>{Gt(v,r=c,r)}),v.subscribe(S=>{t(9,c=S),g("change",S)});function M(S){fe.call(this,i,S)}function b(S){fe.call(this,i,S)}function y(S){fe.call(this,i,S)}function _(S){fe.call(this,i,S)}return i.$$set=S=>{e=ae(ae({},e),qe(S)),t(7,s=Ce(e,n)),"selected"in S&&t(9,c=S.selected),"disabled"in S&&t(0,u=S.disabled),"legendText"in S&&t(1,f=S.legendText),"hideLegend"in S&&t(2,d=S.hideLegend),"labelPosition"in S&&t(3,h=S.labelPosition),"orientation"in S&&t(4,p=S.orientation),"id"in S&&t(5,m=S.id),"$$scope"in S&&t(10,o=S.$$scope)},[u,f,d,h,p,m,v,s,l,c,o,a,M,b,y,_]}class Mh extends Ge{constructor(e){super(),Be(this,e,xh,vh,Ue,{selected:9,disabled:0,legendText:1,hideLegend:2,labelPosition:3,orientation:4,id:5})}}const yh=Mh,Sh=i=>({}),Co=i=>({}),wh=i=>({}),Lo=i=>({}),Th=i=>({}),Po=i=>({});function Eh(i){let e;return{c(){e=Ne(i[5])},m(t,n){Q(t,e,n)},p(t,n){n&32&&Ke(e,t[5])},d(t){t&&J(e)}}}function Ah(i){let e;return{c(){e=Ne(i[3])},m(t,n){Q(t,e,n)},p(t,n){n&8&&Ke(e,t[3])},d(t){t&&J(e)}}}function Ch(i){let e;return{c(){e=Ne(i[4])},m(t,n){Q(t,e,n)},p(t,n){n&16&&Ke(e,t[4])},d(t){t&&J(e)}}}function Lh(i){let e,t,n,s,r,a,o,l,c,u,f,d,h,p,m,g;const v=i[12].labelText,M=ot(v,i,i[11],Po),b=M||Eh(i),y=i[12].labelA,_=ot(y,i,i[11],Lo),S=_||Ah(i),A=i[12].labelB,x=ot(A,i,i[11],Co),T=x||Ch(i);let w=[i[9],{style:h=i[9].style+"; user-select: none"}],k={};for(let j=0;j<w.length;j+=1)k=ae(k,w[j]);return{c(){e=le("div"),t=le("input"),n=be(),s=le("label"),r=le("span"),b&&b.c(),a=be(),o=le("span"),l=le("span"),S&&S.c(),c=be(),u=le("span"),T&&T.c(),ee(t,"role","switch"),ee(t,"type","checkbox"),t.checked=i[0],t.disabled=i[2],ee(t,"id",i[7]),ee(t,"name",i[8]),P(t,"bx--toggle-input",!0),P(t,"bx--toggle-input--small",i[1]==="sm"),P(r,"bx--visually-hidden",i[6]),ee(l,"aria-hidden","true"),P(l,"bx--toggle__text--off",!0),ee(u,"aria-hidden","true"),P(u,"bx--toggle__text--on",!0),ee(o,"style",f=i[6]&&"margin-top: 0"),P(o,"bx--toggle__switch",!0),ee(s,"aria-label",d=i[5]?void 0:i[10]["aria-label"]||"Toggle"),ee(s,"for",i[7]),P(s,"bx--toggle-input__label",!0),Ie(e,k),P(e,"bx--form-item",!0)},m(j,D){Q(j,e,D),Y(e,t),Y(e,n),Y(e,s),Y(s,r),b&&b.m(r,null),Y(s,a),Y(s,o),Y(o,l),S&&S.m(l,null),Y(o,c),Y(o,u),T&&T.m(u,null),p=!0,m||(g=[oe(t,"change",i[21]),oe(t,"change",i[17]),oe(t,"keyup",i[22]),oe(t,"keyup",i[18]),oe(t,"focus",i[19]),oe(t,"blur",i[20]),oe(e,"click",i[13]),oe(e,"mouseover",i[14]),oe(e,"mouseenter",i[15]),oe(e,"mouseleave",i[16])],m=!0)},p(j,[D]){(!p||D&1)&&(t.checked=j[0]),(!p||D&4)&&(t.disabled=j[2]),(!p||D&128)&&ee(t,"id",j[7]),(!p||D&256)&&ee(t,"name",j[8]),(!p||D&2)&&P(t,"bx--toggle-input--small",j[1]==="sm"),M?M.p&&(!p||D&2048)&&ct(M,v,j,j[11],p?lt(v,j[11],D,Th):ut(j[11]),Po):b&&b.p&&(!p||D&32)&&b.p(j,p?D:-1),(!p||D&64)&&P(r,"bx--visually-hidden",j[6]),_?_.p&&(!p||D&2048)&&ct(_,y,j,j[11],p?lt(y,j[11],D,wh):ut(j[11]),Lo):S&&S.p&&(!p||D&8)&&S.p(j,p?D:-1),x?x.p&&(!p||D&2048)&&ct(x,A,j,j[11],p?lt(A,j[11],D,Sh):ut(j[11]),Co):T&&T.p&&(!p||D&16)&&T.p(j,p?D:-1),(!p||D&64&&f!==(f=j[6]&&"margin-top: 0"))&&ee(o,"style",f),(!p||D&1056&&d!==(d=j[5]?void 0:j[10]["aria-label"]||"Toggle"))&&ee(s,"aria-label",d),(!p||D&128)&&ee(s,"for",j[7]),Ie(e,k=Xe(w,[D&512&&j[9],(!p||D&512&&h!==(h=j[9].style+"; user-select: none"))&&{style:h}])),P(e,"bx--form-item",!0)},i(j){p||(F(b,j),F(S,j),F(T,j),p=!0)},o(j){B(b,j),B(S,j),B(T,j),p=!1},d(j){j&&J(e),b&&b.d(j),S&&S.d(j),T&&T.d(j),m=!1,_t(g)}}}function Ph(i,e,t){const n=["size","toggled","disabled","labelA","labelB","labelText","hideLabel","id","name"];let s=Ce(e,n),{$$slots:r={},$$scope:a}=e,{size:o="default"}=e,{toggled:l=!1}=e,{disabled:c=!1}=e,{labelA:u="Off"}=e,{labelB:f="On"}=e,{labelText:d=""}=e,{hideLabel:h=!1}=e,{id:p="ccs-"+Math.random().toString(36)}=e,{name:m=void 0}=e;const g=bn();function v(k){fe.call(this,i,k)}function M(k){fe.call(this,i,k)}function b(k){fe.call(this,i,k)}function y(k){fe.call(this,i,k)}function _(k){fe.call(this,i,k)}function S(k){fe.call(this,i,k)}function A(k){fe.call(this,i,k)}function x(k){fe.call(this,i,k)}const T=()=>{t(0,l=!l)},w=k=>{(k.key===" "||k.key==="Enter")&&(k.preventDefault(),t(0,l=!l))};return i.$$set=k=>{t(10,e=ae(ae({},e),qe(k))),t(9,s=Ce(e,n)),"size"in k&&t(1,o=k.size),"toggled"in k&&t(0,l=k.toggled),"disabled"in k&&t(2,c=k.disabled),"labelA"in k&&t(3,u=k.labelA),"labelB"in k&&t(4,f=k.labelB),"labelText"in k&&t(5,d=k.labelText),"hideLabel"in k&&t(6,h=k.hideLabel),"id"in k&&t(7,p=k.id),"name"in k&&t(8,m=k.name),"$$scope"in k&&t(11,a=k.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&g("toggle",{toggled:l})},e=qe(e),[l,o,c,u,f,d,h,p,m,s,e,a,r,v,M,b,y,_,S,A,x,T,w]}class Dh extends Ge{constructor(e){super(),Be(this,e,Ph,Lh,Ue,{size:1,toggled:0,disabled:2,labelA:3,labelB:4,labelText:5,hideLabel:6,id:7,name:8})}}const Rh=Dh,Ih=i=>({theme:i&1}),Do=i=>({theme:i[0]});function Ro(i,e,t){const n=i.slice();return n[0]=e[t],n}function Io(i){let e,t,n;function s(a){i[9](a)}let r={key:i[2]};return i[0]!==void 0&&(r.value=i[0]),e=new ah({props:r}),Mt.push(()=>Bn(e,"value",s)),{c(){ye(e.$$.fragment)},m(a,o){ve(e,a,o),n=!0},p(a,o){const l={};o&4&&(l.key=a[2]),!t&&o&1&&(t=!0,l.value=a[0],Un(()=>t=!1)),e.$set(l)},i(a){n||(F(e.$$.fragment,a),n=!0)},o(a){B(e.$$.fragment,a),n=!1},d(a){xe(e,a)}}}function kh(i){let e,t,n;const s=[i[5]];function r(o){i[11](o)}let a={$$slots:{default:[zh]},$$scope:{ctx:i}};for(let o=0;o<s.length;o+=1)a=ae(a,s[o]);return i[0]!==void 0&&(a.selected=i[0]),e=new dh({props:a}),Mt.push(()=>Bn(e,"selected",r)),{c(){ye(e.$$.fragment)},m(o,l){ve(e,o,l),n=!0},p(o,l){const c=l&32?Xe(s,[pi(o[5])]):{};l&4128&&(c.$$scope={dirty:l,ctx:o}),!t&&l&1&&(t=!0,c.selected=o[0],Un(()=>t=!1)),e.$set(c)},i(o){n||(F(e.$$.fragment,o),n=!0)},o(o){B(e.$$.fragment,o),n=!1},d(o){xe(e,o)}}}function Fh(i){let e,t;const n=[i[4],{toggled:i[0]===i[4].themes[1]}];let s={};for(let r=0;r<n.length;r+=1)s=ae(s,n[r]);return e=new Rh({props:s}),e.$on("toggle",i[10]),{c(){ye(e.$$.fragment)},m(r,a){ve(e,r,a),t=!0},p(r,a){const o=a&17?Xe(n,[a&16&&pi(r[4]),{toggled:r[0]===r[4].themes[1]}]):{};e.$set(o)},i(r){t||(F(e.$$.fragment,r),t=!0)},o(r){B(e.$$.fragment,r),t=!1},d(r){xe(e,r)}}}function ko(i,e){let t,n,s;return n=new gh({props:{value:e[0],text:e[6][e[0]]}}),{key:i,first:null,c(){t=Lt(),ye(n.$$.fragment),this.first=t},m(r,a){Q(r,t,a),ve(n,r,a),s=!0},p(r,a){e=r;const o={};a&32&&(o.value=e[0]),a&32&&(o.text=e[6][e[0]]),n.$set(o)},i(r){s||(F(n.$$.fragment,r),s=!0)},o(r){B(n.$$.fragment,r),s=!1},d(r){r&&J(t),xe(n,r)}}}function zh(i){let e=[],t=new Map,n,s,r=i[5].themes;const a=o=>o[0];for(let o=0;o<r.length;o+=1){let l=Ro(i,r,o),c=a(l);t.set(c,e[o]=ko(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=Lt()},m(o,l){for(let c=0;c<e.length;c+=1)e[c].m(o,l);Q(o,n,l),s=!0},p(o,l){l&96&&(r=o[5].themes,$e(),e=Xc(e,l,a,1,o,r,t,n.parentNode,qc,ko,n,Ro),et())},i(o){if(!s){for(let l=0;l<r.length;l+=1)F(e[l]);s=!0}},o(o){for(let l=0;l<e.length;l+=1)B(e[l]);s=!1},d(o){for(let l=0;l<e.length;l+=1)e[l].d(o);o&&J(n)}}}function Oh(i){let e,t,n,s,r,a=i[1]&&Io(i);const o=[Fh,kh],l=[];function c(d,h){return d[3]==="toggle"?0:d[3]==="select"?1:-1}~(t=c(i))&&(n=l[t]=o[t](i));const u=i[8].default,f=ot(u,i,i[12],Do);return{c(){a&&a.c(),e=be(),n&&n.c(),s=be(),f&&f.c()},m(d,h){a&&a.m(d,h),Q(d,e,h),~t&&l[t].m(d,h),Q(d,s,h),f&&f.m(d,h),r=!0},p(d,[h]){d[1]?a?(a.p(d,h),h&2&&F(a,1)):(a=Io(d),a.c(),F(a,1),a.m(e.parentNode,e)):a&&($e(),B(a,1,1,()=>{a=null}),et());let p=t;t=c(d),t===p?~t&&l[t].p(d,h):(n&&($e(),B(l[p],1,1,()=>{l[p]=null}),et()),~t?(n=l[t],n?n.p(d,h):(n=l[t]=o[t](d),n.c()),F(n,1),n.m(s.parentNode,s)):n=null),f&&f.p&&(!r||h&4097)&&ct(f,u,d,d[12],r?lt(u,d[12],h,Ih):ut(d[12]),Do)},i(d){r||(F(a),F(n),F(f,d),r=!0)},o(d){B(a),B(n),B(f,d),r=!1},d(d){a&&a.d(d),d&&J(e),~t&&l[t].d(d),d&&J(s),f&&f.d(d)}}}function Nh(i,e,t){let{$$slots:n={},$$scope:s}=e,{theme:r="white"}=e,{tokens:a={}}=e,{persist:o=!1}=e,{persistKey:l="theme"}=e,{render:c=void 0}=e,{toggle:u={themes:["white","g100"],labelA:"",labelB:"",labelText:"Dark mode",hideLabel:!1}}=e;const f={white:"White",g10:"Gray 10",g80:"Gray 80",g90:"Gray 90",g100:"Gray 100"},d=Object.keys(f);let{select:h={themes:d,labelText:"Themes",hideLabel:!1}}=e;const p=bn();function m(M){r=M,t(0,r)}const g=({detail:M})=>{t(0,r=M.toggled?u.themes[1]:u.themes[0])};function v(M){r=M,t(0,r)}return i.$$set=M=>{"theme"in M&&t(0,r=M.theme),"tokens"in M&&t(7,a=M.tokens),"persist"in M&&t(1,o=M.persist),"persistKey"in M&&t(2,l=M.persistKey),"render"in M&&t(3,c=M.render),"toggle"in M&&t(4,u=M.toggle),"select"in M&&t(5,h=M.select),"$$scope"in M&&t(12,s=M.$$scope)},i.$$.update=()=>{i.$$.dirty&129&&typeof window<"u"&&(Object.entries(a).forEach(([M,b])=>{document.documentElement.style.setProperty(`--cds-${M}`,b)}),r in f?(document.documentElement.setAttribute("theme",r),p("update",{theme:r})):console.warn(`[Theme.svelte] invalid theme "${r}". Value must be one of: ${JSON.stringify(Object.keys(f))}`))},[r,o,l,c,u,h,f,a,n,m,g,v,s]}class Uh extends Ge{constructor(e){super(),Be(this,e,Nh,Oh,Ue,{theme:0,tokens:7,persist:1,persistKey:2,render:3,toggle:4,select:5})}}const Bh=Uh;function Fo(i){let e,t;return{c(){e=ft("title"),t=Ne(i[1])},m(n,s){Q(n,e,s),Y(e,t)},p(n,s){s&2&&Ke(t,n[1])},d(n){n&&J(e)}}}function Gh(i){let e,t,n=i[1]&&Fo(i),s=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:i[0]},{height:i[0]},i[2],i[3]],r={};for(let a=0;a<s.length;a+=1)r=ae(r,s[a]);return{c(){e=ft("svg"),n&&n.c(),t=ft("path"),ee(t,"d","M4 6H28V8H4zM4 24H28V26H4zM4 12H28V14H4zM4 18H28V20H4z"),$t(e,r)},m(a,o){Q(a,e,o),n&&n.m(e,null),Y(e,t)},p(a,[o]){a[1]?n?n.p(a,o):(n=Fo(a),n.c(),n.m(e,t)):n&&(n.d(1),n=null),$t(e,r=Xe(s,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},o&1&&{width:a[0]},o&1&&{height:a[0]},o&4&&a[2],o&8&&a[3]]))},i:Qe,o:Qe,d(a){a&&J(e),n&&n.d()}}}function Vh(i,e,t){let n,s;const r=["size","title"];let a=Ce(e,r),{size:o=16}=e,{title:l=void 0}=e;return i.$$set=c=>{t(5,e=ae(ae({},e),qe(c))),t(3,a=Ce(e,r)),"size"in c&&t(0,o=c.size),"title"in c&&t(1,l=c.title)},i.$$.update=()=>{t(4,n=e["aria-label"]||e["aria-labelledby"]||l),t(2,s={"aria-hidden":n?void 0:!0,role:n?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=qe(e),[o,l,s,a,n]}class Hh extends Ge{constructor(e){super(),Be(this,e,Vh,Gh,Ue,{size:0,title:1})}}const eu=Hh,Wh=ht(!1),jh=ht(!1),qh=ht(!1);function Xh(i){let e,t,n,s,r;var a=i[0]?i[4]:i[3];function o(u){return{props:{size:20}}}a&&(t=Gi(a,o()));let l=[{type:"button"},{title:i[2]},{"aria-label":i[2]},i[5]],c={};for(let u=0;u<l.length;u+=1)c=ae(c,l[u]);return{c(){e=le("button"),t&&ye(t.$$.fragment),Ie(e,c),P(e,"bx--header__action",!0),P(e,"bx--header__menu-trigger",!0),P(e,"bx--header__menu-toggle",!0)},m(u,f){Q(u,e,f),t&&ve(t,e,null),e.autofocus&&e.focus(),i[7](e),n=!0,s||(r=[oe(e,"click",i[6]),oe(e,"click",i[8])],s=!0)},p(u,[f]){if(a!==(a=u[0]?u[4]:u[3])){if(t){$e();const d=t;B(d.$$.fragment,1,0,()=>{xe(d,1)}),et()}a?(t=Gi(a,o()),ye(t.$$.fragment),F(t.$$.fragment,1),ve(t,e,null)):t=null}Ie(e,c=Xe(l,[{type:"button"},(!n||f&4)&&{title:u[2]},(!n||f&4)&&{"aria-label":u[2]},f&32&&u[5]])),P(e,"bx--header__action",!0),P(e,"bx--header__menu-trigger",!0),P(e,"bx--header__menu-toggle",!0)},i(u){n||(t&&F(t.$$.fragment,u),n=!0)},o(u){t&&B(t.$$.fragment,u),n=!1},d(u){u&&J(e),t&&xe(t),i[7](null),s=!1,_t(r)}}}function Yh(i,e,t){const n=["ariaLabel","isOpen","iconMenu","iconClose","ref"];let s=Ce(e,n),{ariaLabel:r=void 0}=e,{isOpen:a=!1}=e,{iconMenu:o=eu}=e,{iconClose:l=ba}=e,{ref:c=null}=e;function u(h){fe.call(this,i,h)}function f(h){Mt[h?"unshift":"push"](()=>{c=h,t(1,c)})}const d=()=>t(0,a=!a);return i.$$set=h=>{e=ae(ae({},e),qe(h)),t(5,s=Ce(e,n)),"ariaLabel"in h&&t(2,r=h.ariaLabel),"isOpen"in h&&t(0,a=h.isOpen),"iconMenu"in h&&t(3,o=h.iconMenu),"iconClose"in h&&t(4,l=h.iconClose),"ref"in h&&t(1,c=h.ref)},[a,c,r,o,l,s,u,f,d]}class Zh extends Ge{constructor(e){super(),Be(this,e,Yh,Xh,Ue,{ariaLabel:2,isOpen:0,iconMenu:3,iconClose:4,ref:1})}}const Kh=Zh,Jh=i=>({}),zo=i=>({}),Qh=i=>({}),Oo=i=>({});function No(i){let e,t,n;function s(a){i[19](a)}let r={iconClose:i[8],iconMenu:i[7]};return i[0]!==void 0&&(r.isOpen=i[0]),e=new Kh({props:r}),Mt.push(()=>Bn(e,"isOpen",s)),{c(){ye(e.$$.fragment)},m(a,o){ve(e,a,o),n=!0},p(a,o){const l={};o&256&&(l.iconClose=a[8]),o&128&&(l.iconMenu=a[7]),!t&&o&1&&(t=!0,l.isOpen=a[0],Un(()=>t=!1)),e.$set(l)},i(a){n||(F(e.$$.fragment,a),n=!0)},o(a){B(e.$$.fragment,a),n=!1},d(a){xe(e,a)}}}function Uo(i){let e,t,n;return{c(){e=le("span"),t=Ne(i[3]),n=Ne(" "),P(e,"bx--header__name--prefix",!0)},m(s,r){Q(s,e,r),Y(e,t),Y(e,n)},p(s,r){r&8&&Ke(t,s[3])},d(s){s&&J(e)}}}function $h(i){let e;return{c(){e=Ne(i[4])},m(t,n){Q(t,e,n)},p(t,n){n&16&&Ke(e,t[4])},d(t){t&&J(e)}}}function em(i){let e,t,n,s,r,a,o,l,c;tr(i[18]);const u=i[16]["skip-to-content"],f=ot(u,i,i[15],Oo);let d=(i[11]&&i[9]<i[6]||i[5])&&No(i),h=i[3]&&Uo(i);const p=i[16].platform,m=ot(p,i,i[15],zo),g=m||$h(i);let v=[{href:i[2]},i[12]],M={};for(let _=0;_<v.length;_+=1)M=ae(M,v[_]);const b=i[16].default,y=ot(b,i,i[15],null);return{c(){e=le("header"),f&&f.c(),t=be(),d&&d.c(),n=be(),s=le("a"),h&&h.c(),r=be(),g&&g.c(),a=be(),y&&y.c(),Ie(s,M),P(s,"bx--header__name",!0),ee(e,"aria-label",i[10]),P(e,"bx--header",!0)},m(_,S){Q(_,e,S),f&&f.m(e,null),Y(e,t),d&&d.m(e,null),Y(e,n),Y(e,s),h&&h.m(s,null),Y(s,r),g&&g.m(s,null),i[20](s),Y(e,a),y&&y.m(e,null),o=!0,l||(c=[oe(window,"resize",i[18]),oe(s,"click",i[17])],l=!0)},p(_,[S]){f&&f.p&&(!o||S&32768)&&ct(f,u,_,_[15],o?lt(u,_[15],S,Qh):ut(_[15]),Oo),_[11]&&_[9]<_[6]||_[5]?d?(d.p(_,S),S&2656&&F(d,1)):(d=No(_),d.c(),F(d,1),d.m(e,n)):d&&($e(),B(d,1,1,()=>{d=null}),et()),_[3]?h?h.p(_,S):(h=Uo(_),h.c(),h.m(s,r)):h&&(h.d(1),h=null),m?m.p&&(!o||S&32768)&&ct(m,p,_,_[15],o?lt(p,_[15],S,Jh):ut(_[15]),zo):g&&g.p&&(!o||S&16)&&g.p(_,o?S:-1),Ie(s,M=Xe(v,[(!o||S&4)&&{href:_[2]},S&4096&&_[12]])),P(s,"bx--header__name",!0),y&&y.p&&(!o||S&32768)&&ct(y,b,_,_[15],o?lt(b,_[15],S,null):ut(_[15]),null),(!o||S&1024)&&ee(e,"aria-label",_[10])},i(_){o||(F(f,_),F(d),F(g,_),F(y,_),o=!0)},o(_){B(f,_),B(d),B(g,_),B(y,_),o=!1},d(_){_&&J(e),f&&f.d(_),d&&d.d(),h&&h.d(),g&&g.d(_),i[20](null),y&&y.d(_),l=!1,_t(c)}}}function tm(i,e,t){let n;const s=["expandedByDefault","isSideNavOpen","uiShellAriaLabel","href","company","platformName","persistentHamburgerMenu","expansionBreakpoint","ref","iconMenu","iconClose"];let r=Ce(e,s),a;gt(i,Wh,T=>t(11,a=T));let{$$slots:o={},$$scope:l}=e,{expandedByDefault:c=!0}=e,{isSideNavOpen:u=!1}=e,{uiShellAriaLabel:f=void 0}=e,{href:d=void 0}=e,{company:h=void 0}=e,{platformName:p=""}=e,{persistentHamburgerMenu:m=!1}=e,{expansionBreakpoint:g=1056}=e,{ref:v=null}=e,{iconMenu:M=eu}=e,{iconClose:b=ba}=e,y;function _(T){fe.call(this,i,T)}function S(){t(9,y=window.innerWidth)}function A(T){u=T,t(0,u),t(13,c),t(9,y),t(6,g),t(5,m)}function x(T){Mt[T?"unshift":"push"](()=>{v=T,t(1,v)})}return i.$$set=T=>{t(21,e=ae(ae({},e),qe(T))),t(12,r=Ce(e,s)),"expandedByDefault"in T&&t(13,c=T.expandedByDefault),"isSideNavOpen"in T&&t(0,u=T.isSideNavOpen),"uiShellAriaLabel"in T&&t(14,f=T.uiShellAriaLabel),"href"in T&&t(2,d=T.href),"company"in T&&t(3,h=T.company),"platformName"in T&&t(4,p=T.platformName),"persistentHamburgerMenu"in T&&t(5,m=T.persistentHamburgerMenu),"expansionBreakpoint"in T&&t(6,g=T.expansionBreakpoint),"ref"in T&&t(1,v=T.ref),"iconMenu"in T&&t(7,M=T.iconMenu),"iconClose"in T&&t(8,b=T.iconClose),"$$scope"in T&&t(15,l=T.$$scope)},i.$$.update=()=>{i.$$.dirty&8800&&t(0,u=c&&y>=g&&!m),t(10,n=h?`${h} `:""+(f||e["aria-label"]||p))},e=qe(e),[u,v,d,h,p,m,g,M,b,y,n,a,r,c,f,l,o,_,S,A,x]}class nm extends Ge{constructor(e){super(),Be(this,e,tm,em,Ue,{expandedByDefault:13,isSideNavOpen:0,uiShellAriaLabel:14,href:2,company:3,platformName:4,persistentHamburgerMenu:5,expansionBreakpoint:6,ref:1,iconMenu:7,iconClose:8})}}const im=nm;function sm(i){let e,t,n;const s=i[6].default,r=ot(s,i,i[5],null);let a=[{id:i[0]},i[2],{style:t=(i[1]?"margin-left: 0;":"")+" "+i[2].style}],o={};for(let l=0;l<a.length;l+=1)o=ae(o,a[l]);return{c(){e=le("main"),r&&r.c(),Ie(e,o),P(e,"bx--content",!0)},m(l,c){Q(l,e,c),r&&r.m(e,null),n=!0},p(l,[c]){r&&r.p&&(!n||c&32)&&ct(r,s,l,l[5],n?lt(s,l[5],c,null):ut(l[5]),null),Ie(e,o=Xe(a,[(!n||c&1)&&{id:l[0]},c&4&&l[2],(!n||c&6&&t!==(t=(l[1]?"margin-left: 0;":"")+" "+l[2].style))&&{style:t}])),P(e,"bx--content",!0)},i(l){n||(F(r,l),n=!0)},o(l){B(r,l),n=!1},d(l){l&&J(e),r&&r.d(l)}}}function rm(i,e,t){let n;const s=["id"];let r=Ce(e,s),a,o;gt(i,qh,f=>t(3,a=f)),gt(i,jh,f=>t(4,o=f));let{$$slots:l={},$$scope:c}=e,{id:u="main-content"}=e;return i.$$set=f=>{e=ae(ae({},e),qe(f)),t(2,r=Ce(e,s)),"id"in f&&t(0,u=f.id),"$$scope"in f&&t(5,c=f.$$scope)},i.$$.update=()=>{i.$$.dirty&24&&t(1,n=o&&!a)},[u,n,r,a,o,c,l]}class am extends Ge{constructor(e){super(),Be(this,e,rm,sm,Ue,{id:0})}}const om=am;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="148",vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lm=0,Bo=1,cm=2,tu=1,nu=2,rs=3,di=0,_n=1,xa=2,ws=3,qn=0,Ui=1,Go=2,Vo=3,Ho=4,um=5,zi=100,fm=101,dm=102,Wo=103,jo=104,hm=200,mm=201,pm=202,gm=203,iu=204,su=205,_m=206,bm=207,vm=208,xm=209,Mm=210,ym=0,Sm=1,wm=2,na=3,Tm=4,Em=5,Am=6,Cm=7,Ma=0,Lm=1,Pm=2,An=0,Dm=1,Rm=2,Im=3,ru=4,km=5,au=300,Vi=301,Hi=302,ia=303,sa=304,rr=306,ra=1e3,yn=1001,aa=1002,Yt=1003,qo=1004,pr=1005,pn=1006,Fm=1007,hs=1008,hi=1009,zm=1010,Om=1011,ou=1012,Nm=1013,oi=1014,li=1015,ms=1016,Um=1017,Bm=1018,Bi=1020,Gm=1021,Vm=1022,Sn=1023,Hm=1024,Wm=1025,ui=1026,Wi=1027,jm=1028,qm=1029,Xm=1030,Ym=1031,Zm=1033,gr=33776,_r=33777,br=33778,vr=33779,Xo=35840,Yo=35841,Zo=35842,Ko=35843,Km=36196,Jo=37492,Qo=37496,$o=37808,el=37809,tl=37810,nl=37811,il=37812,sl=37813,rl=37814,al=37815,ol=37816,ll=37817,cl=37818,ul=37819,fl=37820,dl=37821,hl=36492,Xn=3e3,vt=3001,Jm=3200,Qm=3201,ya=0,$m=1,wn="srgb",ps="srgb-linear",xr=7680,ep=519,ml=35044,pl="300 es",oa=1035;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mr=Math.PI/180,gl=180/Math.PI;function bs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Kt(i,e,t){return Math.max(e,Math.min(t,i))}function tp(i,e){return(i%e+e)%e}function yr(i,e,t){return(1-t)*i+t*e}function _l(i){return(i&i-1)===0&&i!==0}function la(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ts(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cn{constructor(){cn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],p=n[8],m=s[0],g=s[3],v=s[6],M=s[1],b=s[4],y=s[7],_=s[2],S=s[5],A=s[8];return r[0]=a*m+o*M+l*_,r[3]=a*g+o*b+l*S,r[6]=a*v+o*y+l*A,r[1]=c*m+u*M+f*_,r[4]=c*g+u*b+f*S,r[7]=c*v+u*y+f*A,r[2]=d*m+h*M+p*_,r[5]=d*g+h*b+p*S,r[8]=d*v+h*y+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,h=c*r-a*l,p=t*f+n*d+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return e[0]=f*m,e[1]=(s*c-u*n)*m,e[2]=(o*n-s*a)*m,e[3]=d*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-o*t)*m,e[6]=h*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sr.makeScale(e,t)),this}rotate(e){return this.premultiply(Sr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sr=new cn;function lu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const wr={[wn]:{[ps]:fi},[ps]:{[wn]:Js}},qt={legacyMode:!0,get workingColorSpace(){return ps},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(wr[e]&&wr[e][t]!==void 0){const n=wr[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rt={r:0,g:0,b:0},vn={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Tr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function As(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=qt.workingColorSpace){if(e=tp(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Tr(a,r,e+1/3),this.g=Tr(a,r,e),this.b=Tr(a,r,e-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(e,t=wn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,qt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,qt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,qt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,qt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=wn){const n=cu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return qt.fromWorkingColorSpace(As(this,Rt),e),Kt(Rt.r*255,0,255)<<16^Kt(Rt.g*255,0,255)<<8^Kt(Rt.b*255,0,255)<<0}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(As(this,Rt),t);const n=Rt.r,s=Rt.g,r=Rt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(As(this,Rt),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=wn){return qt.fromWorkingColorSpace(As(this,Rt),e),e!==wn?`color(${e} ${Rt.r} ${Rt.g} ${Rt.b})`:`rgb(${Rt.r*255|0},${Rt.g*255|0},${Rt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(vn),vn.h+=e,vn.s+=t,vn.l+=n,this.setHSL(vn.h,vn.s,vn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(Es);const n=yr(vn.h,Es.h,t),s=yr(vn.s,Es.s,t),r=yr(vn.l,Es.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}at.NAMES=cu;let Mi;class uu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=gs("canvas")),Mi.width=e.width,Mi.height=e.height;const n=Mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class fu{constructor(e=null){this.isSource=!0,this.uuid=bs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Er(s[a].image)):r.push(Er(s[a]))}else r=Er(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Er(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let np=0;class Qt extends gi{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,n=yn,s=yn,r=pn,a=hs,o=Sn,l=hi,c=Qt.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=bs(),this.name="",this.source=new fu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new cn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ra:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ra:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=au;Qt.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,s=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],p=l[9],m=l[2],g=l[6],v=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-m)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+m)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(h+1)/2,_=(v+1)/2,S=(u+d)/4,A=(f+m)/4,x=(p+g)/4;return b>y&&b>_?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=A/n):y>_?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=x/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=A/r,s=x/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-p)*(g-p)+(f-m)*(f-m)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(f-m)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yn extends gi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class du extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ip extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const d=r[a+0],h=r[a+1],p=r[a+2],m=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(f!==m||l!==d||c!==h||u!==p){let g=1-o;const v=l*d+c*h+u*p+f*m,M=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const _=Math.sqrt(b),S=Math.atan2(_,v*M);g=Math.sin(g*S)/_,o=Math.sin(o*S)/_}const y=o*M;if(l=l*g+d*y,c=c*g+h*y,u=u*g+p*y,f=f*g+m*y,g===1-o){const _=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=_,c*=_,u*=_,f*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],d=r[a+1],h=r[a+2],p=r[a+3];return e[t]=o*p+u*f+l*h-c*d,e[t+1]=l*p+u*d+c*f-o*h,e[t+2]=c*p+u*h+o*d-l*f,e[t+3]=u*p-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),d=l(n/2),h=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f-d*h*p;break;case"YXZ":this._x=d*u*f+c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f+d*h*p;break;case"ZXY":this._x=d*u*f-c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f-d*h*p;break;case"ZYX":this._x=d*u*f-c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f+d*h*p;break;case"YZX":this._x=d*u*f+c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f-d*h*p;break;case"XZY":this._x=d*u*f-c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f+d*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*s-o*n,u=l*n+o*t-r*s,f=l*s+r*n-a*t,d=-r*t-a*n-o*s;return this.x=c*l+d*-r+u*-o-f*-a,this.y=u*l+d*-a+f*-r-c*-o,this.z=f*l+d*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ar.copy(this).projectOnVector(e),this.sub(Ar)}reflect(e){return this.sub(Ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ar=new G,bl=new mi;class vs{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<t&&(t=u),f<n&&(n=f),d<s&&(s=d),u>r&&(r=u),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<t&&(t=u),f<n&&(n=f),d<s&&(s=d),u>r&&(r=u),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,s),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)ei.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ei)}else n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox),Cr.applyMatrix4(e.matrixWorld),this.union(Cr);const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Cs.subVectors(this.max,Ji),yi.subVectors(e.a,Ji),Si.subVectors(e.b,Ji),wi.subVectors(e.c,Ji),Gn.subVectors(Si,yi),Vn.subVectors(wi,Si),ti.subVectors(yi,wi);let t=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-ti.z,ti.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,ti.z,0,-ti.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-ti.y,ti.x,0];return!Lr(t,yi,Si,wi,Cs)||(t=[1,0,0,0,1,0,0,0,1],!Lr(t,yi,Si,wi,Cs))?!1:(Ls.crossVectors(Gn,Vn),t=[Ls.x,Ls.y,Ls.z],Lr(t,yi,Si,wi,Cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ei.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new G,new G,new G,new G,new G,new G,new G,new G],ei=new G,Cr=new vs,yi=new G,Si=new G,wi=new G,Gn=new G,Vn=new G,ti=new G,Ji=new G,Cs=new G,Ls=new G,ni=new G;function Lr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ni.fromArray(i,r);const o=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const sp=new vs,Qi=new G,Pr=new G;class xs{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(Pr)),this.expandByPoint(Qi.copy(e.center).sub(Pr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new G,Dr=new G,Ps=new G,Hn=new G,Rr=new G,Ds=new G,Ir=new G;class ar{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.direction).multiplyScalar(t).add(this.origin),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Dr.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(Dr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ps),o=Hn.dot(this.direction),l=-Hn.dot(Ps),c=Hn.lengthSq(),u=Math.abs(1-a*a);let f,d,h,p;if(u>0)if(f=a*l-o,d=a*o-l,p=r*u,f>=0)if(d>=-p)if(d<=p){const m=1/u;f*=m,d*=m,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),s&&s.copy(Ps).multiplyScalar(d).add(Dr),h}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){Rr.subVectors(t,e),Ds.subVectors(n,e),Ir.crossVectors(Rr,Ds);let a=this.direction.dot(Ir),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,e);const l=o*this.direction.dot(Ds.crossVectors(Hn,Ds));if(l<0)return null;const c=o*this.direction.dot(Rr.cross(Hn));if(c<0||l+c>a)return null;const u=-o*Hn.dot(Ir);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,a,o,l,c,u,f,d,h,p,m,g){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=s,v[1]=r,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=d,v[3]=h,v[7]=p,v[11]=m,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,h=a*f,p=o*u,m=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+p*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=p+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,p=c*u,m=c*f;t[0]=d+m*o,t[4]=p*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-p,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,p=c*u,m=c*f;t[0]=d-m*o,t[4]=-a*f,t[8]=p+h*o,t[1]=h+p*o,t[5]=a*u,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,p=o*u,m=o*f;t[0]=l*u,t[4]=p*c-h,t[8]=d*c+m,t[1]=l*f,t[5]=m*c+d,t[9]=h*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,p=o*l,m=o*c;t[0]=l*u,t[4]=m-d*f,t[8]=p*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+p,t[10]=d-m*f}else if(e.order==="XZY"){const d=a*l,h=a*c,p=o*l,m=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+m,t[5]=a*u,t[9]=h*f-p,t[2]=p*f-h,t[6]=o*u,t[10]=m*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rp,e,ap)}lookAt(e,t,n){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Wn.crossVectors(n,an),Wn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Wn.crossVectors(n,an)),Wn.normalize(),Rs.crossVectors(an,Wn),s[0]=Wn.x,s[4]=Rs.x,s[8]=an.x,s[1]=Wn.y,s[5]=Rs.y,s[9]=an.y,s[2]=Wn.z,s[6]=Rs.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],p=n[2],m=n[6],g=n[10],v=n[14],M=n[3],b=n[7],y=n[11],_=n[15],S=s[0],A=s[4],x=s[8],T=s[12],w=s[1],k=s[5],j=s[9],D=s[13],R=s[2],X=s[6],se=s[10],$=s[14],Z=s[3],ce=s[7],ue=s[11],z=s[15];return r[0]=a*S+o*w+l*R+c*Z,r[4]=a*A+o*k+l*X+c*ce,r[8]=a*x+o*j+l*se+c*ue,r[12]=a*T+o*D+l*$+c*z,r[1]=u*S+f*w+d*R+h*Z,r[5]=u*A+f*k+d*X+h*ce,r[9]=u*x+f*j+d*se+h*ue,r[13]=u*T+f*D+d*$+h*z,r[2]=p*S+m*w+g*R+v*Z,r[6]=p*A+m*k+g*X+v*ce,r[10]=p*x+m*j+g*se+v*ue,r[14]=p*T+m*D+g*$+v*z,r[3]=M*S+b*w+y*R+_*Z,r[7]=M*A+b*k+y*X+_*ce,r[11]=M*x+b*j+y*se+_*ue,r[15]=M*T+b*D+y*$+_*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],p=e[3],m=e[7],g=e[11],v=e[15];return p*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*h-n*l*h)+m*(+t*l*h-t*c*d+r*a*d-s*a*h+s*c*u-r*l*u)+g*(+t*c*f-t*o*h-r*a*f+n*a*h+r*o*u-n*c*u)+v*(-s*o*u-t*l*f+t*o*d+s*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],p=e[12],m=e[13],g=e[14],v=e[15],M=f*g*c-m*d*c+m*l*h-o*g*h-f*l*v+o*d*v,b=p*d*c-u*g*c-p*l*h+a*g*h+u*l*v-a*d*v,y=u*m*c-p*f*c+p*o*h-a*m*h-u*o*v+a*f*v,_=p*f*l-u*m*l-p*o*d+a*m*d+u*o*g-a*f*g,S=t*M+n*b+s*y+r*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=M*A,e[1]=(m*d*r-f*g*r-m*s*h+n*g*h+f*s*v-n*d*v)*A,e[2]=(o*g*r-m*l*r+m*s*c-n*g*c-o*s*v+n*l*v)*A,e[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*h-n*l*h)*A,e[4]=b*A,e[5]=(u*g*r-p*d*r+p*s*h-t*g*h-u*s*v+t*d*v)*A,e[6]=(p*l*r-a*g*r-p*s*c+t*g*c+a*s*v-t*l*v)*A,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*h+t*l*h)*A,e[8]=y*A,e[9]=(p*f*r-u*m*r-p*n*h+t*m*h+u*n*v-t*f*v)*A,e[10]=(a*m*r-p*o*r+p*n*c-t*m*c-a*n*v+t*o*v)*A,e[11]=(u*o*r-a*f*r-u*n*c+t*f*c+a*n*h-t*o*h)*A,e[12]=_*A,e[13]=(u*m*s-p*f*s+p*n*d-t*m*d-u*n*g+t*f*g)*A,e[14]=(p*o*s-a*m*s-p*n*l+t*m*l+a*n*g-t*o*g)*A,e[15]=(a*f*s-u*o*s+u*n*l-t*f*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,h=r*u,p=r*f,m=a*u,g=a*f,v=o*f,M=l*c,b=l*u,y=l*f,_=n.x,S=n.y,A=n.z;return s[0]=(1-(m+v))*_,s[1]=(h+y)*_,s[2]=(p-b)*_,s[3]=0,s[4]=(h-y)*S,s[5]=(1-(d+v))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(p+b)*A,s[9]=(g-M)*A,s[10]=(1-(d+m))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ti.set(s[0],s[1],s[2]).length();const a=Ti.set(s[4],s[5],s[6]).length(),o=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],xn.copy(this);const c=1/r,u=1/a,f=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,t.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a){const o=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),d=-(a+r)/(a-r),h=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=h,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,r,a){const o=this.elements,l=1/(t-e),c=1/(n-s),u=1/(a-r),f=(t+e)*l,d=(n+s)*c,h=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-h,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ti=new G,xn=new St,rp=new G(0,0,0),ap=new G(1,1,1),Wn=new G,Rs=new G,an=new G,vl=new St,xl=new mi;class Ms{constructor(e=0,t=0,n=0,s=Ms.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xl.setFromEuler(this),this.setFromQuaternion(xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ms.DefaultOrder="XYZ";Ms.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Sa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let op=0;const Ml=new G,Ei=new mi,In=new St,Is=new G,$i=new G,lp=new G,cp=new mi,yl=new G(1,0,0),Sl=new G(0,1,0),wl=new G(0,0,1),up={type:"added"},Tl={type:"removed"};class wt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DefaultUp.clone();const e=new G,t=new Ms,n=new mi,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new cn}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=wt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=wt.DefaultMatrixWorldAutoUpdate,this.layers=new Sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(yl,e)}rotateY(e){return this.rotateOnAxis(Sl,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return Ml.copy(e).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yl,e)}translateY(e){return this.translateOnAxis(Sl,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Is.copy(e):Is.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt($i,Is,this.up):In.lookAt(Is,$i,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(In),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(up)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Tl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DefaultUp=new G(0,1,0);wt.DefaultMatrixAutoUpdate=!0;wt.DefaultMatrixWorldAutoUpdate=!0;const Mn=new G,kn=new G,kr=new G,Fn=new G,Ai=new G,Ci=new G,El=new G,Fr=new G,zr=new G,Or=new G;class On{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mn.subVectors(e,t),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mn.subVectors(s,t),kn.subVectors(n,t),kr.subVectors(e,t);const a=Mn.dot(Mn),o=Mn.dot(kn),l=Mn.dot(kr),c=kn.dot(kn),u=kn.dot(kr),f=a*c-o*o;if(f===0)return r.set(-2,-1,-1);const d=1/f,h=(c*l-o*u)*d,p=(a*u-o*l)*d;return r.set(1-h-p,p,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fn),Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Fn),l.set(0,0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l}static isFrontFacing(e,t,n,s){return Mn.subVectors(n,t),kn.subVectors(e,t),Mn.cross(kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),Mn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return On.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ai.subVectors(s,n),Ci.subVectors(r,n),Fr.subVectors(e,n);const l=Ai.dot(Fr),c=Ci.dot(Fr);if(l<=0&&c<=0)return t.copy(n);zr.subVectors(e,s);const u=Ai.dot(zr),f=Ci.dot(zr);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ai,a);Or.subVectors(e,r);const h=Ai.dot(Or),p=Ci.dot(Or);if(p>=0&&h<=p)return t.copy(r);const m=h*c-l*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ci,o);const g=u*p-h*f;if(g<=0&&f-u>=0&&h-p>=0)return El.subVectors(r,s),o=(f-u)/(f-u+(h-p)),t.copy(s).addScaledVector(El,o);const v=1/(g+m+d);return a=m*v,o=d*v,t.copy(n).addScaledVector(Ai,a).addScaledVector(Ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let fp=0;class Cn extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=Ui,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=iu,this.blendDst=su,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hu extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new G,ks=new He;class un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ml,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ks.fromBufferAttribute(this,t),ks.applyMatrix3(e),this.setXY(t,ks.x,ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class mu extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pu extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dp=0;const hn=new St,Nr=new wt,Li=new G,on=new vs,es=new vs,Ut=new G;class tn extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lu(e)?pu:mu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new cn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Nr.lookAt(e),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(on.min,es.min),on.expandByPoint(Ut),Ut.addVectors(on.max,es.max),on.expandByPoint(Ut)):(on.expandByPoint(es.min),on.expandByPoint(es.max))}on.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ut.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),Ut.add(Li)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<o;w++)c[w]=new G,u[w]=new G;const f=new G,d=new G,h=new G,p=new He,m=new He,g=new He,v=new G,M=new G;function b(w,k,j){f.fromArray(s,w*3),d.fromArray(s,k*3),h.fromArray(s,j*3),p.fromArray(a,w*2),m.fromArray(a,k*2),g.fromArray(a,j*2),d.sub(f),h.sub(f),m.sub(p),g.sub(p);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(D),M.copy(h).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(D),c[w].add(v),c[k].add(v),c[j].add(v),u[w].add(M),u[k].add(M),u[j].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,k=y.length;w<k;++w){const j=y[w],D=j.start,R=j.count;for(let X=D,se=D+R;X<se;X+=3)b(n[X+0],n[X+1],n[X+2])}const _=new G,S=new G,A=new G,x=new G;function T(w){A.fromArray(r,w*3),x.copy(A);const k=c[w];_.copy(k),_.sub(A.multiplyScalar(A.dot(k))).normalize(),S.crossVectors(x,k);const D=S.dot(u[w])<0?-1:1;l[w*4]=_.x,l[w*4+1]=_.y,l[w*4+2]=_.z,l[w*4+3]=D}for(let w=0,k=y.length;w<k;++w){const j=y[w],D=j.start,R=j.count;for(let X=D,se=D+R;X<se;X+=3)T(n[X+0]),T(n[X+1]),T(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let d=0,h=e.count;d<h;d+=3){const p=e.getX(d+0),m=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,p=0;for(let m=0,g=l.length;m<g;m++){o.isInterleavedBufferAttribute?h=l[m]*o.data.stride+o.offset:h=l[m]*u;for(let v=0;v<u;v++)d[p++]=c[h++]}return new un(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new St,Pi=new ar,Ur=new xs,ts=new G,ns=new G,is=new G,Br=new G,Fs=new G,zs=new He,Os=new He,Ns=new He,Gr=new G,Us=new G;class gn extends wt{constructor(e=new tn,t=new hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Br.fromBufferAttribute(f,e),a?Fs.addScaledVector(Br,u):Fs.addScaledVector(Br.sub(t),u))}t.add(Fs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),e.ray.intersectsSphere(Ur)===!1)||(Al.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(Al),n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(s))for(let h=0,p=f.length;h<p;h++){const m=f[h],g=s[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,y=M;b<y;b+=3){const _=o.getX(b),S=o.getX(b+1),A=o.getX(b+2);a=Bs(this,g,e,Pi,c,u,_,S,A),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const h=Math.max(0,d.start),p=Math.min(o.count,d.start+d.count);for(let m=h,g=p;m<g;m+=3){const v=o.getX(m),M=o.getX(m+1),b=o.getX(m+2);a=Bs(this,s,e,Pi,c,u,v,M,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let h=0,p=f.length;h<p;h++){const m=f[h],g=s[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,y=M;b<y;b+=3){const _=b,S=b+1,A=b+2;a=Bs(this,g,e,Pi,c,u,_,S,A),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const h=Math.max(0,d.start),p=Math.min(l.count,d.start+d.count);for(let m=h,g=p;m<g;m+=3){const v=m,M=m+1,b=m+2;a=Bs(this,s,e,Pi,c,u,v,M,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function hp(i,e,t,n,s,r,a,o){let l;if(e.side===_n?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===di,o),l===null)return null;Us.copy(o),Us.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Us);return c<t.near||c>t.far?null:{distance:c,point:Us.clone(),object:i}}function Bs(i,e,t,n,s,r,a,o,l){i.getVertexPosition(a,ts),i.getVertexPosition(o,ns),i.getVertexPosition(l,is);const c=hp(i,e,t,n,ts,ns,is,Gr);if(c){s&&(zs.fromBufferAttribute(s,a),Os.fromBufferAttribute(s,o),Ns.fromBufferAttribute(s,l),c.uv=On.getUV(Gr,ts,ns,is,zs,Os,Ns,new He)),r&&(zs.fromBufferAttribute(r,a),Os.fromBufferAttribute(r,o),Ns.fromBufferAttribute(r,l),c.uv2=On.getUV(Gr,ts,ns,is,zs,Os,Ns,new He));const u={a,b:o,c:l,normal:new G,materialIndex:0};On.getNormal(ts,ns,is,u.normal),c.face=u}return c}class ys extends tn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(f,2));function p(m,g,v,M,b,y,_,S,A,x,T){const w=y/A,k=_/x,j=y/2,D=_/2,R=S/2,X=A+1,se=x+1;let $=0,Z=0;const ce=new G;for(let ue=0;ue<se;ue++){const z=ue*k-D;for(let O=0;O<X;O++){const de=O*w-j;ce[m]=de*M,ce[g]=z*b,ce[v]=R,c.push(ce.x,ce.y,ce.z),ce[m]=0,ce[g]=0,ce[v]=S>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(O/A),f.push(1-ue/x),$+=1}}for(let ue=0;ue<x;ue++)for(let z=0;z<A;z++){const O=d+z+X*ue,de=d+z+X*(ue+1),W=d+(z+1)+X*(ue+1),ge=d+(z+1)+X*ue;l.push(O,de,ge),l.push(de,W,ge),Z+=6}o.addGroup(h,Z,T),h+=Z,d+=$}}static fromJSON(e){return new ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=ji(i[t]);for(const s in n)e[s]=n[s]}return e}function mp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gu(i){return i.getRenderTarget()===null&&i.outputEncoding===vt?wn:ps}const _u={clone:ji,merge:Xt};var pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wa extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ln extends wa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=-90,Ri=1;class _p extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new ln(Di,Ri,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new ln(Di,Ri,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new ln(Di,Ri,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new ln(Di,Ri,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new ln(Di,Ri,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new ln(Di,Ri,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=An,e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class bu extends Qt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Vi,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bp extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new bu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ys(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:qn});r.uniforms.tEquirect.value=t;const a=new gn(s,r),o=t.minFilter;return t.minFilter===hs&&(t.minFilter=pn),new _p(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Vr=new G,vp=new G,xp=new cn;class ii{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Vr.subVectors(n,t).cross(vp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Vr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xp.getNormalMatrix(e),s=this.coplanarPoint(Vr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new xs,Gs=new G;class Ta{constructor(e=new ii,t=new ii,n=new ii,s=new ii,r=new ii,a=new ii){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],d=n[8],h=n[9],p=n[10],m=n[11],g=n[12],v=n[13],M=n[14],b=n[15];return t[0].setComponents(o-s,f-l,m-d,b-g).normalize(),t[1].setComponents(o+s,f+l,m+d,b+g).normalize(),t[2].setComponents(o+r,f+c,m+h,b+v).normalize(),t[3].setComponents(o-r,f-c,m-h,b-v).normalize(),t[4].setComponents(o-a,f-u,m-p,b-M).normalize(),t[5].setComponents(o+a,f+u,m+p,b+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Gs.x=s.normal.x>0?e.max.x:e.min.x,Gs.y=s.normal.y>0?e.max.y:e.min.y,Gs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mp(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const f=c.array,d=c.usage,h=i.createBuffer();i.bindBuffer(u,h),i.bufferData(u,f,d),c.onUploadCallback();let p;if(f instanceof Float32Array)p=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)p=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=5123;else if(f instanceof Int16Array)p=5122;else if(f instanceof Uint32Array)p=5125;else if(f instanceof Int32Array)p=5124;else if(f instanceof Int8Array)p=5120;else if(f instanceof Uint8Array)p=5121;else if(f instanceof Uint8ClampedArray)p=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:h,type:p,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const d=u.array,h=u.updateRange;i.bindBuffer(f,c),h.count===-1?i.bufferSubData(f,0,d):(t?i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,s(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Ea extends tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,h=[],p=[],m=[],g=[];for(let v=0;v<u;v++){const M=v*d-a;for(let b=0;b<c;b++){const y=b*f-r;p.push(y,-M,0),m.push(0,0,1),g.push(b/o),g.push(1-v/l)}}for(let v=0;v<l;v++)for(let M=0;M<o;M++){const b=M+c*v,y=M+c*(v+1),_=M+1+c*(v+1),S=M+1+c*v;h.push(b,y,S),h.push(y,_,S)}this.setIndex(h),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(m,3)),this.setAttribute("uv",new It(g,2))}static fromJSON(e){return new Ea(e.width,e.height,e.widthSegments,e.heightSegments)}}var yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ep=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp="vec3 transformed = vec3( position );",Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Dp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Vp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ag=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ug=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,dg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,_g=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Mg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ig=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,zg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,t_=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,n_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,r_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,f_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,d_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,h_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,m_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,p_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,g_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,__=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,b_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,v_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,E_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,A_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,C_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,L_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,R_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,U_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,G_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Q_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ye={alphamap_fragment:yp,alphamap_pars_fragment:Sp,alphatest_fragment:wp,alphatest_pars_fragment:Tp,aomap_fragment:Ep,aomap_pars_fragment:Ap,begin_vertex:Cp,beginnormal_vertex:Lp,bsdfs:Pp,iridescence_fragment:Dp,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Ip,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:Fp,clipping_planes_vertex:zp,color_fragment:Op,color_pars_fragment:Np,color_pars_vertex:Up,color_vertex:Bp,common:Gp,cube_uv_reflection_fragment:Vp,defaultnormal_vertex:Hp,displacementmap_pars_vertex:Wp,displacementmap_vertex:jp,emissivemap_fragment:qp,emissivemap_pars_fragment:Xp,encodings_fragment:Yp,encodings_pars_fragment:Zp,envmap_fragment:Kp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:Qp,envmap_pars_vertex:$p,envmap_physical_pars_fragment:fg,envmap_vertex:eg,fog_vertex:tg,fog_pars_vertex:ng,fog_fragment:ig,fog_pars_fragment:sg,gradientmap_pars_fragment:rg,lightmap_fragment:ag,lightmap_pars_fragment:og,lights_lambert_fragment:lg,lights_lambert_pars_fragment:cg,lights_pars_begin:ug,lights_toon_fragment:dg,lights_toon_pars_fragment:hg,lights_phong_fragment:mg,lights_phong_pars_fragment:pg,lights_physical_fragment:gg,lights_physical_pars_fragment:_g,lights_fragment_begin:bg,lights_fragment_maps:vg,lights_fragment_end:xg,logdepthbuf_fragment:Mg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:Sg,logdepthbuf_vertex:wg,map_fragment:Tg,map_pars_fragment:Eg,map_particle_fragment:Ag,map_particle_pars_fragment:Cg,metalnessmap_fragment:Lg,metalnessmap_pars_fragment:Pg,morphcolor_vertex:Dg,morphnormal_vertex:Rg,morphtarget_pars_vertex:Ig,morphtarget_vertex:kg,normal_fragment_begin:Fg,normal_fragment_maps:zg,normal_pars_fragment:Og,normal_pars_vertex:Ng,normal_vertex:Ug,normalmap_pars_fragment:Bg,clearcoat_normal_fragment_begin:Gg,clearcoat_normal_fragment_maps:Vg,clearcoat_pars_fragment:Hg,iridescence_pars_fragment:Wg,output_fragment:jg,packing:qg,premultiplied_alpha_fragment:Xg,project_vertex:Yg,dithering_fragment:Zg,dithering_pars_fragment:Kg,roughnessmap_fragment:Jg,roughnessmap_pars_fragment:Qg,shadowmap_pars_fragment:$g,shadowmap_pars_vertex:e_,shadowmap_vertex:t_,shadowmask_pars_fragment:n_,skinbase_vertex:i_,skinning_pars_vertex:s_,skinning_vertex:r_,skinnormal_vertex:a_,specularmap_fragment:o_,specularmap_pars_fragment:l_,tonemapping_fragment:c_,tonemapping_pars_fragment:u_,transmission_fragment:f_,transmission_pars_fragment:d_,uv_pars_fragment:h_,uv_pars_vertex:m_,uv_vertex:p_,uv2_pars_fragment:g_,uv2_pars_vertex:__,uv2_vertex:b_,worldpos_vertex:v_,background_vert:x_,background_frag:M_,backgroundCube_vert:y_,backgroundCube_frag:S_,cube_vert:w_,cube_frag:T_,depth_vert:E_,depth_frag:A_,distanceRGBA_vert:C_,distanceRGBA_frag:L_,equirect_vert:P_,equirect_frag:D_,linedashed_vert:R_,linedashed_frag:I_,meshbasic_vert:k_,meshbasic_frag:F_,meshlambert_vert:z_,meshlambert_frag:O_,meshmatcap_vert:N_,meshmatcap_frag:U_,meshnormal_vert:B_,meshnormal_frag:G_,meshphong_vert:V_,meshphong_frag:H_,meshphysical_vert:W_,meshphysical_frag:j_,meshtoon_vert:q_,meshtoon_frag:X_,points_vert:Y_,points_frag:Z_,shadow_vert:K_,shadow_frag:J_,sprite_vert:Q_,sprite_frag:$_},_e={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new cn},uv2Transform:{value:new cn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cn}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cn}}},Tn={basic:{uniforms:Xt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Xt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new at(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Xt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Xt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Xt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new at(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Xt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Xt([_e.points,_e.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Xt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Xt([_e.common,_e.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Xt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Xt([_e.sprite,_e.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new cn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Xt([_e.common,_e.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Xt([_e.lights,_e.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Tn.physical={uniforms:Xt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new He(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Vs={r:0,b:0,g:0};function e0(i,e,t,n,s,r,a){const o=new at(0);let l=r===!0?0:1,c,u,f=null,d=0,h=null;function p(g,v){let M=!1,b=v.isScene===!0?v.background:null;b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b));const y=i.xr,_=y.getSession&&y.getSession();_&&_.environmentBlendMode==="additive"&&(b=null),b===null?m(o,l):b&&b.isColor&&(m(b,1),M=!0),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===rr)?(u===void 0&&(u=new gn(new ys(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:ji(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=b.encoding!==vt,(f!==b||d!==b.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,f=b,d=b.version,h=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new gn(new Ea(2,2),new Nn({name:"BackgroundMaterial",uniforms:ji(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=b.encoding!==vt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=b,d=b.version,h=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function m(g,v){g.getRGB(Vs,gu(i)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(g,v=1){o.set(g),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,m(o,l)},render:p}}function t0(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null);let c=l,u=!1;function f(R,X,se,$,Z){let ce=!1;if(a){const ue=m($,se,X);c!==ue&&(c=ue,h(c.object)),ce=v(R,$,se,Z),ce&&M(R,$,se,Z)}else{const ue=X.wireframe===!0;(c.geometry!==$.id||c.program!==se.id||c.wireframe!==ue)&&(c.geometry=$.id,c.program=se.id,c.wireframe=ue,ce=!0)}Z!==null&&t.update(Z,34963),(ce||u)&&(u=!1,x(R,X,se,$),Z!==null&&i.bindBuffer(34963,t.get(Z).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function h(R){return n.isWebGL2?i.bindVertexArray(R):r.bindVertexArrayOES(R)}function p(R){return n.isWebGL2?i.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function m(R,X,se){const $=se.wireframe===!0;let Z=o[R.id];Z===void 0&&(Z={},o[R.id]=Z);let ce=Z[X.id];ce===void 0&&(ce={},Z[X.id]=ce);let ue=ce[$];return ue===void 0&&(ue=g(d()),ce[$]=ue),ue}function g(R){const X=[],se=[],$=[];for(let Z=0;Z<s;Z++)X[Z]=0,se[Z]=0,$[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:se,attributeDivisors:$,object:R,attributes:{},index:null}}function v(R,X,se,$){const Z=c.attributes,ce=X.attributes;let ue=0;const z=se.getAttributes();for(const O in z)if(z[O].location>=0){const W=Z[O];let ge=ce[O];if(ge===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(ge=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(ge=R.instanceColor)),W===void 0||W.attribute!==ge||ge&&W.data!==ge.data)return!0;ue++}return c.attributesNum!==ue||c.index!==$}function M(R,X,se,$){const Z={},ce=X.attributes;let ue=0;const z=se.getAttributes();for(const O in z)if(z[O].location>=0){let W=ce[O];W===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(W=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(W=R.instanceColor));const ge={};ge.attribute=W,W&&W.data&&(ge.data=W.data),Z[O]=ge,ue++}c.attributes=Z,c.attributesNum=ue,c.index=$}function b(){const R=c.newAttributes;for(let X=0,se=R.length;X<se;X++)R[X]=0}function y(R){_(R,0)}function _(R,X){const se=c.newAttributes,$=c.enabledAttributes,Z=c.attributeDivisors;se[R]=1,$[R]===0&&(i.enableVertexAttribArray(R),$[R]=1),Z[R]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,X),Z[R]=X)}function S(){const R=c.newAttributes,X=c.enabledAttributes;for(let se=0,$=X.length;se<$;se++)X[se]!==R[se]&&(i.disableVertexAttribArray(se),X[se]=0)}function A(R,X,se,$,Z,ce){n.isWebGL2===!0&&(se===5124||se===5125)?i.vertexAttribIPointer(R,X,se,Z,ce):i.vertexAttribPointer(R,X,se,$,Z,ce)}function x(R,X,se,$){if(n.isWebGL2===!1&&(R.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const Z=$.attributes,ce=se.getAttributes(),ue=X.defaultAttributeValues;for(const z in ce){const O=ce[z];if(O.location>=0){let de=Z[z];if(de===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const W=de.normalized,ge=de.itemSize,U=t.get(de);if(U===void 0)continue;const Se=U.buffer,Le=U.type,Fe=U.bytesPerElement;if(de.isInterleavedBufferAttribute){const K=de.data,je=K.stride,We=de.offset;if(K.isInstancedInterleavedBuffer){for(let ze=0;ze<O.locationSize;ze++)_(O.location+ze,K.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ze=0;ze<O.locationSize;ze++)y(O.location+ze);i.bindBuffer(34962,Se);for(let ze=0;ze<O.locationSize;ze++)A(O.location+ze,ge/O.locationSize,Le,W,je*Fe,(We+ge/O.locationSize*ze)*Fe)}else{if(de.isInstancedBufferAttribute){for(let K=0;K<O.locationSize;K++)_(O.location+K,de.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let K=0;K<O.locationSize;K++)y(O.location+K);i.bindBuffer(34962,Se);for(let K=0;K<O.locationSize;K++)A(O.location+K,ge/O.locationSize,Le,W,ge*Fe,ge/O.locationSize*K*Fe)}}else if(ue!==void 0){const W=ue[z];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(O.location,W);break;case 3:i.vertexAttrib3fv(O.location,W);break;case 4:i.vertexAttrib4fv(O.location,W);break;default:i.vertexAttrib1fv(O.location,W)}}}}S()}function T(){j();for(const R in o){const X=o[R];for(const se in X){const $=X[se];for(const Z in $)p($[Z].object),delete $[Z];delete X[se]}delete o[R]}}function w(R){if(o[R.id]===void 0)return;const X=o[R.id];for(const se in X){const $=X[se];for(const Z in $)p($[Z].object),delete $[Z];delete X[se]}delete o[R.id]}function k(R){for(const X in o){const se=o[X];if(se[R.id]===void 0)continue;const $=se[R.id];for(const Z in $)p($[Z].object),delete $[Z];delete se[R.id]}}function j(){D(),u=!0,c!==l&&(c=l,h(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:j,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:k,initAttributes:b,enableAttribute:y,disableUnusedAttributes:S}}function n0(i,e,t,n){const s=n.isWebGL2;let r;function a(c){r=c}function o(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let d,h;if(s)d=i,h="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[h](r,c,u,f),t.update(u,r,f)}this.setMode=a,this.render=o,this.renderInstances=l}function i0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),d=i.getParameter(35660),h=i.getParameter(3379),p=i.getParameter(34076),m=i.getParameter(34921),g=i.getParameter(36347),v=i.getParameter(36348),M=i.getParameter(36349),b=d>0,y=a||e.has("OES_texture_float"),_=b&&y,S=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:_,maxSamples:S}}function s0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ii,o=new cn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,h){const p=f.length!==0||d||n!==0||s;return s=d,t=u(f,h,0),n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(f,d,h){const p=f.clippingPlanes,m=f.clipIntersection,g=f.clipShadows,v=i.get(f);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{const M=r?0:n,b=M*4;let y=v.clippingState||null;l.value=y,y=u(p,d,b,h);for(let _=0;_!==b;++_)y[_]=t[_];v.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,p){const m=f!==null?f.length:0;let g=null;if(m!==0){if(g=l.value,p!==!0||g===null){const v=h+m*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<v)&&(g=new Float32Array(v));for(let b=0,y=h;b!==m;++b,y+=4)a.copy(f[b]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function r0(i){let e=new WeakMap;function t(a,o){return o===ia?a.mapping=Vi:o===sa&&(a.mapping=Hi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ia||o===sa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new bp(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Aa extends wa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ni=4,Cl=[.125,.215,.35,.446,.526,.582],ri=20,Hr=new Aa,Ll=new at;let Wr=null;const si=(1+Math.sqrt(5))/2,ki=1/si,Pl=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,si,ki),new G(0,si,-ki),new G(ki,0,si),new G(-ki,0,si),new G(si,ki,0),new G(-si,ki,0)];class Dl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Wr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wr),e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:ms,format:Sn,encoding:Xn,depthBuffer:!1},s=Rl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a0(r)),this._blurMaterial=o0(r,e,t)}return s}_compileMaterial(e){const t=new gn(this._lodPlanes[0],e);this._renderer.compile(t,Hr)}_sceneToCubeUV(e,t,n,s){const o=new ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ll),u.toneMapping=An,u.autoClear=!1;const h=new hu({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),p=new gn(new ys,h);let m=!1;const g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,m=!0):(h.color.copy(Ll),m=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):M===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const b=this._cubeSize;Hs(s,M*b,v>2?b:0,b,b),u.setRenderTarget(s),m&&u.render(p,o),u.render(e,o)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Vi||e.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Il());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new gn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Hs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Hr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pl[(s-1)%Pl.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new gn(this._lodPlanes[s],c),d=c.uniforms,h=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*ri-1),m=r/p,g=isFinite(r)?1+Math.floor(u*m):ri;g>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ri}`);const v=[];let M=0;for(let A=0;A<ri;++A){const x=A/m,T=Math.exp(-x*x/2);v.push(T),A===0?M+=T:A<g&&(M+=2*T)}for(let A=0;A<v.length;A++)v[A]=v[A]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=v,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=p,d.mipInt.value=b-n;const y=this._sizeLods[s],_=3*y*(s>b-Ni?s-b+Ni:0),S=4*(this._cubeSize-y);Hs(t,_,S,3*y,2*y),l.setRenderTarget(t),l.render(f,Hr)}}function a0(i){const e=[],t=[],n=[];let s=i;const r=i-Ni+1+Cl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ni?l=Cl[a-i+Ni-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,p=6,m=3,g=2,v=1,M=new Float32Array(m*p*h),b=new Float32Array(g*p*h),y=new Float32Array(v*p*h);for(let S=0;S<h;S++){const A=S%3*2/3-1,x=S>2?0:-1,T=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];M.set(T,m*p*S),b.set(d,g*p*S);const w=[S,S,S,S,S,S];y.set(w,v*p*S)}const _=new tn;_.setAttribute("position",new un(M,m)),_.setAttribute("uv",new un(b,g)),_.setAttribute("faceIndex",new un(y,v)),e.push(_),s>Ni&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rl(i,e,t){const n=new Yn(i,e,t);return n.texture.mapping=rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function o0(i,e,t){const n=new Float32Array(ri),s=new G(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Il(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function kl(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function l0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ia||l===sa,u=l===Vi||l===Hi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Dl(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new Dl(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function c0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function u0(i,e,t,n){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],34962);const h=f.morphAttributes;for(const p in h){const m=h[p];for(let g=0,v=m.length;g<v;g++)e.update(m[g],34962)}}function c(f){const d=[],h=f.index,p=f.attributes.position;let m=0;if(h!==null){const M=h.array;m=h.version;for(let b=0,y=M.length;b<y;b+=3){const _=M[b+0],S=M[b+1],A=M[b+2];d.push(_,S,S,A,A,_)}}else{const M=p.array;m=p.version;for(let b=0,y=M.length/3-1;b<y;b+=3){const _=b+0,S=b+1,A=b+2;d.push(_,S,S,A,A,_)}}const g=new(lu(d)?pu:mu)(d,1);g.version=m;const v=r.get(f);v&&e.remove(v),r.set(f,g)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function f0(i,e,t,n){const s=n.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,h){i.drawElements(r,h,o,d*l),t.update(h,r,1)}function f(d,h,p){if(p===0)return;let m,g;if(s)m=i,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,o,d*l,p),t.update(h,r,p)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function d0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function h0(i,e){return i[0]-e[0]}function m0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function p0(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new Bt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let se=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",se)};var p=se;v!==void 0&&v.texture.dispose();const y=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let w=0;y===!0&&(w=1),_===!0&&(w=2),S===!0&&(w=3);let k=u.attributes.position.count*w,j=1;k>e.maxTextureSize&&(j=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const D=new Float32Array(k*j*4*g),R=new du(D,k,j,g);R.type=li,R.needsUpdate=!0;const X=w*4;for(let $=0;$<g;$++){const Z=A[$],ce=x[$],ue=T[$],z=k*j*4*$;for(let O=0;O<Z.count;O++){const de=O*X;y===!0&&(a.fromBufferAttribute(Z,O),D[z+de+0]=a.x,D[z+de+1]=a.y,D[z+de+2]=a.z,D[z+de+3]=0),_===!0&&(a.fromBufferAttribute(ce,O),D[z+de+4]=a.x,D[z+de+5]=a.y,D[z+de+6]=a.z,D[z+de+7]=0),S===!0&&(a.fromBufferAttribute(ue,O),D[z+de+8]=a.x,D[z+de+9]=a.y,D[z+de+10]=a.z,D[z+de+11]=ue.itemSize===4?a.w:1)}}v={count:g,texture:R,size:new He(k,j)},r.set(u,v),u.addEventListener("dispose",se)}let M=0;for(let y=0;y<h.length;y++)M+=h[y];const b=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(i,"morphTargetBaseInfluence",b),d.getUniforms().setValue(i,"morphTargetInfluences",h),d.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const m=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<m;_++){const S=g[_];S[0]=_,S[1]=h[_]}g.sort(m0);for(let _=0;_<8;_++)_<m&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(h0);const v=u.morphAttributes.position,M=u.morphAttributes.normal;let b=0;for(let _=0;_<8;_++){const S=o[_],A=S[0],x=S[1];A!==Number.MAX_SAFE_INTEGER&&x?(v&&u.getAttribute("morphTarget"+_)!==v[A]&&u.setAttribute("morphTarget"+_,v[A]),M&&u.getAttribute("morphNormal"+_)!==M[A]&&u.setAttribute("morphNormal"+_,M[A]),s[_]=x,b+=x):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),M&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}const y=u.morphTargetsRelative?1:1-b;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function g0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const xu=new Qt,Mu=new du,yu=new ip,Su=new bu,Fl=[],zl=[],Ol=new Float32Array(16),Nl=new Float32Array(9),Ul=new Float32Array(4);function Yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Fl[s];if(r===void 0&&(r=new Float32Array(s),Fl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function or(i,e){let t=zl[e];t===void 0&&(t=new Int32Array(e),zl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function b0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function v0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function x0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function M0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(kt(t,n))return;Ul.set(n),i.uniformMatrix2fv(this.addr,!1,Ul),Ft(t,n)}}function y0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(kt(t,n))return;Nl.set(n),i.uniformMatrix3fv(this.addr,!1,Nl),Ft(t,n)}}function S0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(kt(t,n))return;Ol.set(n),i.uniformMatrix4fv(this.addr,!1,Ol),Ft(t,n)}}function w0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function T0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function E0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function A0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function C0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function L0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function P0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function D0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function R0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||xu,s)}function I0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yu,s)}function k0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Su,s)}function F0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Mu,s)}function z0(i){switch(i){case 5126:return _0;case 35664:return b0;case 35665:return v0;case 35666:return x0;case 35674:return M0;case 35675:return y0;case 35676:return S0;case 5124:case 35670:return w0;case 35667:case 35671:return T0;case 35668:case 35672:return E0;case 35669:case 35673:return A0;case 5125:return C0;case 36294:return L0;case 36295:return P0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return F0}}function O0(i,e){i.uniform1fv(this.addr,e)}function N0(i,e){const t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function U0(i,e){const t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function B0(i,e){const t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function G0(i,e){const t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function V0(i,e){const t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function H0(i,e){const t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function W0(i,e){i.uniform1iv(this.addr,e)}function j0(i,e){i.uniform2iv(this.addr,e)}function q0(i,e){i.uniform3iv(this.addr,e)}function X0(i,e){i.uniform4iv(this.addr,e)}function Y0(i,e){i.uniform1uiv(this.addr,e)}function Z0(i,e){i.uniform2uiv(this.addr,e)}function K0(i,e){i.uniform3uiv(this.addr,e)}function J0(i,e){i.uniform4uiv(this.addr,e)}function Q0(i,e,t){const n=this.cache,s=e.length,r=or(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||xu,r[a])}function $0(i,e,t){const n=this.cache,s=e.length,r=or(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||yu,r[a])}function eb(i,e,t){const n=this.cache,s=e.length,r=or(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Su,r[a])}function tb(i,e,t){const n=this.cache,s=e.length,r=or(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Mu,r[a])}function nb(i){switch(i){case 5126:return O0;case 35664:return N0;case 35665:return U0;case 35666:return B0;case 35674:return G0;case 35675:return V0;case 35676:return H0;case 5124:case 35670:return W0;case 35667:case 35671:return j0;case 35668:case 35672:return q0;case 35669:case 35673:return X0;case 5125:return Y0;case 36294:return Z0;case 36295:return K0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return tb}}class ib{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=z0(t.type)}}class sb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=nb(t.type)}}class rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function Bl(i,e){i.seq.push(e),i.map[e.id]=e}function ab(i,e,t){const n=i.name,s=n.length;for(jr.lastIndex=0;;){const r=jr.exec(n),a=jr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Bl(t,c===void 0?new ib(o,i,e):new sb(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new rb(o),Bl(t,f)),t=f}}}class Qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ab(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Gl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let ob=0;function lb(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function cb(i){switch(i){case Xn:return["Linear","( value )"];case vt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Vl(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+lb(i.getShaderSource(e),a)}else return s}function ub(i,e){const t=cb(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function fb(i,e){let t;switch(e){case Dm:t="Linear";break;case Rm:t="Reinhard";break;case Im:t="OptimizedCineon";break;case ru:t="ACESFilmic";break;case km:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function db(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(as).join(`
`)}function hb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mb(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function as(i){return i!==""}function Hl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(i){return i.replace(pb,gb)}function gb(i,e){const t=Ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ca(t)}const _b=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(i){return i.replace(_b,bb)}function bb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ql(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rs&&(e="SHADOWMAP_TYPE_VSM"),e}function xb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Hi:e="ENVMAP_TYPE_CUBE";break;case rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function yb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ma:e="ENVMAP_BLENDING_MULTIPLY";break;case Lm:e="ENVMAP_BLENDING_MIX";break;case Pm:e="ENVMAP_BLENDING_ADD";break}return e}function Sb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function wb(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=vb(t),c=xb(t),u=Mb(t),f=yb(t),d=Sb(t),h=t.isWebGL2?"":db(t),p=hb(r),m=s.createProgram();let g,v,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[p].filter(as).join(`
`),g.length>0&&(g+=`
`),v=[h,p].filter(as).join(`
`),v.length>0&&(v+=`
`)):(g=[ql(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),v=[h,ql(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Ye.tonemapping_pars_fragment:"",t.toneMapping!==An?fb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.encodings_pars_fragment,ub("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),a=ca(a),a=Hl(a,t),a=Wl(a,t),o=ca(o),o=Hl(o,t),o=Wl(o,t),a=jl(a),o=jl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["#define varying in",t.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=M+g+a,y=M+v+o,_=Gl(s,35633,b),S=Gl(s,35632,y);if(s.attachShader(m,_),s.attachShader(m,S),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){const T=s.getProgramInfoLog(m).trim(),w=s.getShaderInfoLog(_).trim(),k=s.getShaderInfoLog(S).trim();let j=!0,D=!0;if(s.getProgramParameter(m,35714)===!1){j=!1;const R=Vl(s,_,"vertex"),X=Vl(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+T+`
`+R+`
`+X)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(w===""||k==="")&&(D=!1);D&&(this.diagnostics={runnable:j,programLog:T,vertexShader:{log:w,prefix:g},fragmentShader:{log:k,prefix:v}})}s.deleteShader(_),s.deleteShader(S);let A;this.getUniforms=function(){return A===void 0&&(A=new Qs(s,m)),A};let x;return this.getAttributes=function(){return x===void 0&&(x=mb(s,m)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=ob++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=_,this.fragmentShader=S,this}let Tb=0;class Eb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ab(e),t.set(e,n)),n}}class Ab{constructor(e){this.id=Tb++,this.code=e,this.usedTimes=0}}function Cb(i,e,t,n,s,r,a){const o=new Sa,l=new Eb,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures;let h=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x,T,w,k,j){const D=k.fog,R=j.geometry,X=x.isMeshStandardMaterial?k.environment:null,se=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),$=se&&se.mapping===rr?se.image.height:null,Z=p[x.type];x.precision!==null&&(h=s.getMaxPrecision(x.precision),h!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ce=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ue=ce!==void 0?ce.length:0;let z=0;R.morphAttributes.position!==void 0&&(z=1),R.morphAttributes.normal!==void 0&&(z=2),R.morphAttributes.color!==void 0&&(z=3);let O,de,W,ge;if(Z){const je=Tn[Z];O=je.vertexShader,de=je.fragmentShader}else O=x.vertexShader,de=x.fragmentShader,l.update(x),W=l.getVertexShaderID(x),ge=l.getFragmentShaderID(x);const U=i.getRenderTarget(),Se=x.alphaTest>0,Le=x.clearcoat>0,Fe=x.iridescence>0;return{isWebGL2:u,shaderID:Z,shaderName:x.type,vertexShader:O,fragmentShader:de,defines:x.defines,customVertexShaderID:W,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:d,outputEncoding:U===null?i.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:Xn,map:!!x.map,matcap:!!x.matcap,envMap:!!se,envMapMode:se&&se.mapping,envMapCubeUVHeight:$,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===$m,tangentSpaceNormalMap:x.normalMapType===ya,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===vt,clearcoat:Le,clearcoatMap:Le&&!!x.clearcoatMap,clearcoatRoughnessMap:Le&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:Le&&!!x.clearcoatNormalMap,iridescence:Fe,iridescenceMap:Fe&&!!x.iridescenceMap,iridescenceThicknessMap:Fe&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Ui,alphaMap:!!x.alphaMap,alphaTest:Se,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:An,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xa,flipSided:x.side===_n,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function g(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const w in x.defines)T.push(w),T.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(v(T,x),M(T,x),T.push(i.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function v(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.map&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.lightMap&&o.enable(7),T.aoMap&&o.enable(8),T.emissiveMap&&o.enable(9),T.bumpMap&&o.enable(10),T.normalMap&&o.enable(11),T.objectSpaceNormalMap&&o.enable(12),T.tangentSpaceNormalMap&&o.enable(13),T.clearcoat&&o.enable(14),T.clearcoatMap&&o.enable(15),T.clearcoatRoughnessMap&&o.enable(16),T.clearcoatNormalMap&&o.enable(17),T.iridescence&&o.enable(18),T.iridescenceMap&&o.enable(19),T.iridescenceThicknessMap&&o.enable(20),T.displacementMap&&o.enable(21),T.specularMap&&o.enable(22),T.roughnessMap&&o.enable(23),T.metalnessMap&&o.enable(24),T.gradientMap&&o.enable(25),T.alphaMap&&o.enable(26),T.alphaTest&&o.enable(27),T.vertexColors&&o.enable(28),T.vertexAlphas&&o.enable(29),T.vertexUvs&&o.enable(30),T.vertexTangents&&o.enable(31),T.uvsVertexOnly&&o.enable(32),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.physicallyCorrectLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.specularIntensityMap&&o.enable(15),T.specularColorMap&&o.enable(16),T.transmission&&o.enable(17),T.transmissionMap&&o.enable(18),T.thicknessMap&&o.enable(19),T.sheen&&o.enable(20),T.sheenColorMap&&o.enable(21),T.sheenRoughnessMap&&o.enable(22),T.decodeVideoTexture&&o.enable(23),T.opaque&&o.enable(24),x.push(o.mask)}function b(x){const T=p[x.type];let w;if(T){const k=Tn[T];w=_u.clone(k.uniforms)}else w=x.uniforms;return w}function y(x,T){let w;for(let k=0,j=c.length;k<j;k++){const D=c[k];if(D.cacheKey===T){w=D,++w.usedTimes;break}}return w===void 0&&(w=new wb(i,T,x,r),c.push(w)),w}function _(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function S(x){l.remove(x)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:_,releaseShaderCache:S,programs:c,dispose:A}}function Lb(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Pb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,d,h,p,m,g){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:h,groupOrder:p,renderOrder:f.renderOrder,z:m,group:g},i[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=h,v.groupOrder=p,v.renderOrder=f.renderOrder,v.z=m,v.group=g),e++,v}function o(f,d,h,p,m,g){const v=a(f,d,h,p,m,g);h.transmission>0?n.push(v):h.transparent===!0?s.push(v):t.push(v)}function l(f,d,h,p,m,g){const v=a(f,d,h,p,m,g);h.transmission>0?n.unshift(v):h.transparent===!0?s.unshift(v):t.unshift(v)}function c(f,d){t.length>1&&t.sort(f||Pb),n.length>1&&n.sort(d||Xl),s.length>1&&s.sort(d||Xl)}function u(){for(let f=e,d=i.length;f<d;f++){const h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Db(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Yl,i.set(n,[a])):s>=r.length?(a=new Yl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Rb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new at};break;case"SpotLight":t={position:new G,direction:new G,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Ib(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let kb=0;function Fb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zb(i,e){const t=new Rb,n=Ib(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new G);const r=new G,a=new St,o=new St;function l(u,f){let d=0,h=0,p=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let m=0,g=0,v=0,M=0,b=0,y=0,_=0,S=0,A=0,x=0;u.sort(Fb);const T=f!==!0?Math.PI:1;for(let k=0,j=u.length;k<j;k++){const D=u[k],R=D.color,X=D.intensity,se=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=R.r*X*T,h+=R.g*X*T,p+=R.b*X*T;else if(D.isLightProbe)for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(D.sh.coefficients[Z],X);else if(D.isDirectionalLight){const Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const ce=D.shadow,ue=n.get(D);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,s.directionalShadow[m]=ue,s.directionalShadowMap[m]=$,s.directionalShadowMatrix[m]=D.shadow.matrix,y++}s.directional[m]=Z,m++}else if(D.isSpotLight){const Z=t.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(R).multiplyScalar(X*T),Z.distance=se,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,s.spot[v]=Z;const ce=D.shadow;if(D.map&&(s.spotLightMap[A]=D.map,A++,ce.updateMatrices(D),D.castShadow&&x++),s.spotLightMatrix[v]=ce.matrix,D.castShadow){const ue=n.get(D);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,s.spotShadow[v]=ue,s.spotShadowMap[v]=$,S++}v++}else if(D.isRectAreaLight){const Z=t.get(D);Z.color.copy(R).multiplyScalar(X),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),s.rectArea[M]=Z,M++}else if(D.isPointLight){const Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*T),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const ce=D.shadow,ue=n.get(D);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,ue.shadowCameraNear=ce.camera.near,ue.shadowCameraFar=ce.camera.far,s.pointShadow[g]=ue,s.pointShadowMap[g]=$,s.pointShadowMatrix[g]=D.shadow.matrix,_++}s.point[g]=Z,g++}else if(D.isHemisphereLight){const Z=t.get(D);Z.skyColor.copy(D.color).multiplyScalar(X*T),Z.groundColor.copy(D.groundColor).multiplyScalar(X*T),s.hemi[b]=Z,b++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=h,s.ambient[2]=p;const w=s.hash;(w.directionalLength!==m||w.pointLength!==g||w.spotLength!==v||w.rectAreaLength!==M||w.hemiLength!==b||w.numDirectionalShadows!==y||w.numPointShadows!==_||w.numSpotShadows!==S||w.numSpotMaps!==A)&&(s.directional.length=m,s.spot.length=v,s.rectArea.length=M,s.point.length=g,s.hemi.length=b,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=_,s.pointShadowMap.length=_,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=_,s.spotLightMatrix.length=S+A-x,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=x,w.directionalLength=m,w.pointLength=g,w.spotLength=v,w.rectAreaLength=M,w.hemiLength=b,w.numDirectionalShadows=y,w.numPointShadows=_,w.numSpotShadows=S,w.numSpotMaps=A,s.version=kb++)}function c(u,f){let d=0,h=0,p=0,m=0,g=0;const v=f.matrixWorldInverse;for(let M=0,b=u.length;M<b;M++){const y=u[M];if(y.isDirectionalLight){const _=s.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),d++}else if(y.isSpotLight){const _=s.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(v),p++}else if(y.isRectAreaLight){const _=s.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),o.identity(),a.copy(y.matrixWorld),a.premultiply(v),o.extractRotation(a),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const _=s.point[h];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(v),h++}else if(y.isHemisphereLight){const _=s.hemi[g];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(v),g++}}}return{setup:l,setupView:c,state:s}}function Zl(i,e){const t=new zb(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ob(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Zl(i,e),t.set(r,[l])):a>=o.length?(l=new Zl(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Nb extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ub extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vb(i,e,t){let n=new Ta;const s=new He,r=new He,a=new Bt,o=new Nb({depthPacking:Qm}),l=new Ub,c={},u=t.maxTextureSize,f={0:_n,1:di,2:xa},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Bb,fragmentShader:Gb}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const p=new tn;p.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new gn(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu,this.render=function(y,_,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;const A=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),w=i.state;w.setBlending(qn),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);for(let k=0,j=y.length;k<j;k++){const D=y[k],R=D.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;s.copy(R.mapSize);const X=R.getFrameExtents();if(s.multiply(X),r.copy(R.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,R.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,R.mapSize.y=r.y)),R.map===null){const $=this.type!==rs?{minFilter:Yt,magFilter:Yt}:{};R.map=new Yn(s.x,s.y,$),R.map.texture.name=D.name+".shadowMap",R.camera.updateProjectionMatrix()}i.setRenderTarget(R.map),i.clear();const se=R.getViewportCount();for(let $=0;$<se;$++){const Z=R.getViewport($);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),w.viewport(a),R.updateMatrices(D,$),n=R.getFrustum(),b(_,S,R.camera,D,this.type)}R.isPointLightShadow!==!0&&this.type===rs&&v(R,S),R.needsUpdate=!1}g.needsUpdate=!1,i.setRenderTarget(A,x,T)};function v(y,_){const S=e.update(m);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,h.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Yn(s.x,s.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(_,null,S,d,m,null),h.uniforms.shadow_pass.value=y.mapPass.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(_,null,S,h,m,null)}function M(y,_,S,A,x,T){let w=null;const k=S.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(k!==void 0)w=k;else if(w=S.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){const j=w.uuid,D=_.uuid;let R=c[j];R===void 0&&(R={},c[j]=R);let X=R[D];X===void 0&&(X=w.clone(),R[D]=X),w=X}return w.visible=_.visible,w.wireframe=_.wireframe,T===rs?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:f[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,S.isPointLight===!0&&w.isMeshDistanceMaterial===!0&&(w.referencePosition.setFromMatrixPosition(S.matrixWorld),w.nearDistance=A,w.farDistance=x),w}function b(y,_,S,A,x){if(y.visible===!1)return;if(y.layers.test(_.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===rs)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld);const k=e.update(y),j=y.material;if(Array.isArray(j)){const D=k.groups;for(let R=0,X=D.length;R<X;R++){const se=D[R],$=j[se.materialIndex];if($&&$.visible){const Z=M(y,$,A,S.near,S.far,x);i.renderBufferDirect(S,null,k,Z,y,se)}}}else if(j.visible){const D=M(y,j,A,S.near,S.far,x);i.renderBufferDirect(S,null,k,D,y,null)}}const w=y.children;for(let k=0,j=w.length;k<j;k++)b(w[k],_,S,A,x)}}function Hb(i,e,t){const n=t.isWebGL2;function s(){let N=!1;const ne=new Bt;let he=null;const Ee=new Bt(0,0,0,0);return{setMask:function(Re){he!==Re&&!N&&(i.colorMask(Re,Re,Re,Re),he=Re)},setLocked:function(Re){N=Re},setClear:function(Re,mt,Ot,Vt,Kn){Kn===!0&&(Re*=Vt,mt*=Vt,Ot*=Vt),ne.set(Re,mt,Ot,Vt),Ee.equals(ne)===!1&&(i.clearColor(Re,mt,Ot,Vt),Ee.copy(ne))},reset:function(){N=!1,he=null,Ee.set(-1,0,0,0)}}}function r(){let N=!1,ne=null,he=null,Ee=null;return{setTest:function(Re){Re?Se(2929):Le(2929)},setMask:function(Re){ne!==Re&&!N&&(i.depthMask(Re),ne=Re)},setFunc:function(Re){if(he!==Re){switch(Re){case ym:i.depthFunc(512);break;case Sm:i.depthFunc(519);break;case wm:i.depthFunc(513);break;case na:i.depthFunc(515);break;case Tm:i.depthFunc(514);break;case Em:i.depthFunc(518);break;case Am:i.depthFunc(516);break;case Cm:i.depthFunc(517);break;default:i.depthFunc(515)}he=Re}},setLocked:function(Re){N=Re},setClear:function(Re){Ee!==Re&&(i.clearDepth(Re),Ee=Re)},reset:function(){N=!1,ne=null,he=null,Ee=null}}}function a(){let N=!1,ne=null,he=null,Ee=null,Re=null,mt=null,Ot=null,Vt=null,Kn=null;return{setTest:function(xt){N||(xt?Se(2960):Le(2960))},setMask:function(xt){ne!==xt&&!N&&(i.stencilMask(xt),ne=xt)},setFunc:function(xt,Ln,dn){(he!==xt||Ee!==Ln||Re!==dn)&&(i.stencilFunc(xt,Ln,dn),he=xt,Ee=Ln,Re=dn)},setOp:function(xt,Ln,dn){(mt!==xt||Ot!==Ln||Vt!==dn)&&(i.stencilOp(xt,Ln,dn),mt=xt,Ot=Ln,Vt=dn)},setLocked:function(xt){N=xt},setClear:function(xt){Kn!==xt&&(i.clearStencil(xt),Kn=xt)},reset:function(){N=!1,ne=null,he=null,Ee=null,Re=null,mt=null,Ot=null,Vt=null,Kn=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,f=new WeakMap;let d={},h={},p=new WeakMap,m=[],g=null,v=!1,M=null,b=null,y=null,_=null,S=null,A=null,x=null,T=!1,w=null,k=null,j=null,D=null,R=null;const X=i.getParameter(35661);let se=!1,$=0;const Z=i.getParameter(7938);Z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Z)[1]),se=$>=1):Z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),se=$>=2);let ce=null,ue={};const z=i.getParameter(3088),O=i.getParameter(2978),de=new Bt().fromArray(z),W=new Bt().fromArray(O);function ge(N,ne,he){const Ee=new Uint8Array(4),Re=i.createTexture();i.bindTexture(N,Re),i.texParameteri(N,10241,9728),i.texParameteri(N,10240,9728);for(let mt=0;mt<he;mt++)i.texImage2D(ne+mt,0,6408,1,1,0,6408,5121,Ee);return Re}const U={};U[3553]=ge(3553,3553,1),U[34067]=ge(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(2929),l.setFunc(na),Dt(!1),Wt(Bo),Se(2884),zt(qn);function Se(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function Le(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Fe(N,ne){return h[N]!==ne?(i.bindFramebuffer(N,ne),h[N]=ne,n&&(N===36009&&(h[36160]=ne),N===36160&&(h[36009]=ne)),!0):!1}function K(N,ne){let he=m,Ee=!1;if(N)if(he=p.get(ne),he===void 0&&(he=[],p.set(ne,he)),N.isWebGLMultipleRenderTargets){const Re=N.texture;if(he.length!==Re.length||he[0]!==36064){for(let mt=0,Ot=Re.length;mt<Ot;mt++)he[mt]=36064+mt;he.length=Re.length,Ee=!0}}else he[0]!==36064&&(he[0]=36064,Ee=!0);else he[0]!==1029&&(he[0]=1029,Ee=!0);Ee&&(t.isWebGL2?i.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function je(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const We={[zi]:32774,[fm]:32778,[dm]:32779};if(n)We[Wo]=32775,We[jo]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(We[Wo]=N.MIN_EXT,We[jo]=N.MAX_EXT)}const ze={[hm]:0,[mm]:1,[pm]:768,[iu]:770,[Mm]:776,[vm]:774,[_m]:772,[gm]:769,[su]:771,[xm]:775,[bm]:773};function zt(N,ne,he,Ee,Re,mt,Ot,Vt){if(N===qn){v===!0&&(Le(3042),v=!1);return}if(v===!1&&(Se(3042),v=!0),N!==um){if(N!==M||Vt!==T){if((b!==zi||S!==zi)&&(i.blendEquation(32774),b=zi,S=zi),Vt)switch(N){case Ui:i.blendFuncSeparate(1,771,1,771);break;case Go:i.blendFunc(1,1);break;case Vo:i.blendFuncSeparate(0,769,0,1);break;case Ho:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ui:i.blendFuncSeparate(770,771,1,771);break;case Go:i.blendFunc(770,1);break;case Vo:i.blendFuncSeparate(0,769,0,1);break;case Ho:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,_=null,A=null,x=null,M=N,T=Vt}return}Re=Re||ne,mt=mt||he,Ot=Ot||Ee,(ne!==b||Re!==S)&&(i.blendEquationSeparate(We[ne],We[Re]),b=ne,S=Re),(he!==y||Ee!==_||mt!==A||Ot!==x)&&(i.blendFuncSeparate(ze[he],ze[Ee],ze[mt],ze[Ot]),y=he,_=Ee,A=mt,x=Ot),M=N,T=!1}function Pt(N,ne){N.side===xa?Le(2884):Se(2884);let he=N.side===_n;ne&&(he=!he),Dt(he),N.blending===Ui&&N.transparent===!1?zt(qn):zt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const Ee=N.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),pt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Se(32926):Le(32926)}function Dt(N){w!==N&&(N?i.frontFace(2304):i.frontFace(2305),w=N)}function Wt(N){N!==lm?(Se(2884),N!==k&&(N===Bo?i.cullFace(1029):N===cm?i.cullFace(1028):i.cullFace(1032))):Le(2884),k=N}function Tt(N){N!==j&&(se&&i.lineWidth(N),j=N)}function pt(N,ne,he){N?(Se(32823),(D!==ne||R!==he)&&(i.polygonOffset(ne,he),D=ne,R=he)):Le(32823)}function fn(N){N?Se(3089):Le(3089)}function Zt(N){N===void 0&&(N=33984+X-1),ce!==N&&(i.activeTexture(N),ce=N)}function L(N,ne,he){he===void 0&&(ce===null?he=33984+X-1:he=ce);let Ee=ue[he];Ee===void 0&&(Ee={type:void 0,texture:void 0},ue[he]=Ee),(Ee.type!==N||Ee.texture!==ne)&&(ce!==he&&(i.activeTexture(he),ce=he),i.bindTexture(N,ne||U[N]),Ee.type=N,Ee.texture=ne)}function E(){const N=ue[ce];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(N){de.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),de.copy(N))}function Pe(N){W.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),W.copy(N))}function tt(N,ne){let he=f.get(ne);he===void 0&&(he=new WeakMap,f.set(ne,he));let Ee=he.get(N);Ee===void 0&&(Ee=i.getUniformBlockIndex(ne,N.name),he.set(N,Ee))}function nt(N,ne){const Ee=f.get(ne).get(N);u.get(ne)!==Ee&&(i.uniformBlockBinding(ne,Ee,N.__bindingPointIndex),u.set(ne,Ee))}function bt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ce=null,ue={},h={},p=new WeakMap,m=[],g=null,v=!1,M=null,b=null,y=null,_=null,S=null,A=null,x=null,T=!1,w=null,k=null,j=null,D=null,R=null,de.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Se,disable:Le,bindFramebuffer:Fe,drawBuffers:K,useProgram:je,setBlending:zt,setMaterial:Pt,setFlipSided:Dt,setCullFace:Wt,setLineWidth:Tt,setPolygonOffset:pt,setScissorTest:fn,activeTexture:Zt,bindTexture:L,unbindTexture:E,compressedTexImage2D:te,compressedTexImage3D:me,texImage2D:Ae,texImage3D:we,updateUBOMapping:tt,uniformBlockBinding:nt,texStorage2D:V,texStorage3D:Te,texSubImage2D:pe,texSubImage3D:Me,compressedTexSubImage2D:Oe,compressedTexSubImage3D:I,scissor:De,viewport:Pe,reset:bt}}function Wb(i,e,t,n,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let m;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,E){return v?new OffscreenCanvas(L,E):gs("canvas")}function b(L,E,te,me){let pe=1;if((L.width>me||L.height>me)&&(pe=me/Math.max(L.width,L.height)),pe<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const Me=E?la:Math.floor,Oe=Me(pe*L.width),I=Me(pe*L.height);m===void 0&&(m=M(Oe,I));const V=te?M(Oe,I):m;return V.width=Oe,V.height=I,V.getContext("2d").drawImage(L,0,0,Oe,I),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Oe+"x"+I+")."),V}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return _l(L.width)&&_l(L.height)}function _(L){return o?!1:L.wrapS!==yn||L.wrapT!==yn||L.minFilter!==Yt&&L.minFilter!==pn}function S(L,E){return L.generateMipmaps&&E&&L.minFilter!==Yt&&L.minFilter!==pn}function A(L){i.generateMipmap(L)}function x(L,E,te,me,pe=!1){if(o===!1)return E;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Me=E;return E===6403&&(te===5126&&(Me=33326),te===5131&&(Me=33325),te===5121&&(Me=33321)),E===33319&&(te===5126&&(Me=33328),te===5131&&(Me=33327),te===5121&&(Me=33323)),E===6408&&(te===5126&&(Me=34836),te===5131&&(Me=34842),te===5121&&(Me=me===vt&&pe===!1?35907:32856),te===32819&&(Me=32854),te===32820&&(Me=32855)),(Me===33325||Me===33326||Me===33327||Me===33328||Me===34842||Me===34836)&&e.get("EXT_color_buffer_float"),Me}function T(L,E,te){return S(L,te)===!0||L.isFramebufferTexture&&L.minFilter!==Yt&&L.minFilter!==pn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function w(L){return L===Yt||L===qo||L===pr?9728:9729}function k(L){const E=L.target;E.removeEventListener("dispose",k),D(E),E.isVideoTexture&&p.delete(E)}function j(L){const E=L.target;E.removeEventListener("dispose",j),X(E)}function D(L){const E=n.get(L);if(E.__webglInit===void 0)return;const te=L.source,me=g.get(te);if(me){const pe=me[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&R(L),Object.keys(me).length===0&&g.delete(te)}n.remove(L)}function R(L){const E=n.get(L);i.deleteTexture(E.__webglTexture);const te=L.source,me=g.get(te);delete me[E.__cacheKey],a.memory.textures--}function X(L){const E=L.texture,te=n.get(L),me=n.get(E);if(me.__webglTexture!==void 0&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++)i.deleteFramebuffer(te.__webglFramebuffer[pe]),te.__webglDepthbuffer&&i.deleteRenderbuffer(te.__webglDepthbuffer[pe]);else{if(i.deleteFramebuffer(te.__webglFramebuffer),te.__webglDepthbuffer&&i.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&i.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let pe=0;pe<te.__webglColorRenderbuffer.length;pe++)te.__webglColorRenderbuffer[pe]&&i.deleteRenderbuffer(te.__webglColorRenderbuffer[pe]);te.__webglDepthRenderbuffer&&i.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let pe=0,Me=E.length;pe<Me;pe++){const Oe=n.get(E[pe]);Oe.__webglTexture&&(i.deleteTexture(Oe.__webglTexture),a.memory.textures--),n.remove(E[pe])}n.remove(E),n.remove(L)}let se=0;function $(){se=0}function Z(){const L=se;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),se+=1,L}function ce(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.encoding),E.join()}function ue(L,E){const te=n.get(L);if(L.isVideoTexture&&fn(L),L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(te,L,E);return}}t.bindTexture(3553,te.__webglTexture,33984+E)}function z(L,E){const te=n.get(L);if(L.version>0&&te.__version!==L.version){Le(te,L,E);return}t.bindTexture(35866,te.__webglTexture,33984+E)}function O(L,E){const te=n.get(L);if(L.version>0&&te.__version!==L.version){Le(te,L,E);return}t.bindTexture(32879,te.__webglTexture,33984+E)}function de(L,E){const te=n.get(L);if(L.version>0&&te.__version!==L.version){Fe(te,L,E);return}t.bindTexture(34067,te.__webglTexture,33984+E)}const W={[ra]:10497,[yn]:33071,[aa]:33648},ge={[Yt]:9728,[qo]:9984,[pr]:9986,[pn]:9729,[Fm]:9985,[hs]:9987};function U(L,E,te){if(te?(i.texParameteri(L,10242,W[E.wrapS]),i.texParameteri(L,10243,W[E.wrapT]),(L===32879||L===35866)&&i.texParameteri(L,32882,W[E.wrapR]),i.texParameteri(L,10240,ge[E.magFilter]),i.texParameteri(L,10241,ge[E.minFilter])):(i.texParameteri(L,10242,33071),i.texParameteri(L,10243,33071),(L===32879||L===35866)&&i.texParameteri(L,32882,33071),(E.wrapS!==yn||E.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,10240,w(E.magFilter)),i.texParameteri(L,10241,w(E.minFilter)),E.minFilter!==Yt&&E.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Yt||E.minFilter!==pr&&E.minFilter!==hs||E.type===li&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===ms&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(L,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Se(L,E){let te=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",k));const me=E.source;let pe=g.get(me);pe===void 0&&(pe={},g.set(me,pe));const Me=ce(E);if(Me!==L.__cacheKey){pe[Me]===void 0&&(pe[Me]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,te=!0),pe[Me].usedTimes++;const Oe=pe[L.__cacheKey];Oe!==void 0&&(pe[L.__cacheKey].usedTimes--,Oe.usedTimes===0&&R(E)),L.__cacheKey=Me,L.__webglTexture=pe[Me].texture}return te}function Le(L,E,te){let me=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=35866),E.isData3DTexture&&(me=32879);const pe=Se(L,E),Me=E.source;t.bindTexture(me,L.__webglTexture,33984+te);const Oe=n.get(Me);if(Me.version!==Oe.__version||pe===!0){t.activeTexture(33984+te),i.pixelStorei(37440,E.flipY),i.pixelStorei(37441,E.premultiplyAlpha),i.pixelStorei(3317,E.unpackAlignment),i.pixelStorei(37443,0);const I=_(E)&&y(E.image)===!1;let V=b(E.image,I,!1,u);V=Zt(E,V);const Te=y(V)||o,Ae=r.convert(E.format,E.encoding);let we=r.convert(E.type),De=x(E.internalFormat,Ae,we,E.encoding,E.isVideoTexture);U(me,E,Te);let Pe;const tt=E.mipmaps,nt=o&&E.isVideoTexture!==!0,bt=Oe.__version===void 0||pe===!0,N=T(E,V,Te);if(E.isDepthTexture)De=6402,o?E.type===li?De=36012:E.type===oi?De=33190:E.type===Bi?De=35056:De=33189:E.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ui&&De===6402&&E.type!==ou&&E.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=oi,we=r.convert(E.type)),E.format===Wi&&De===6402&&(De=34041,E.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Bi,we=r.convert(E.type))),bt&&(nt?t.texStorage2D(3553,1,De,V.width,V.height):t.texImage2D(3553,0,De,V.width,V.height,0,Ae,we,null));else if(E.isDataTexture)if(tt.length>0&&Te){nt&&bt&&t.texStorage2D(3553,N,De,tt[0].width,tt[0].height);for(let ne=0,he=tt.length;ne<he;ne++)Pe=tt[ne],nt?t.texSubImage2D(3553,ne,0,0,Pe.width,Pe.height,Ae,we,Pe.data):t.texImage2D(3553,ne,De,Pe.width,Pe.height,0,Ae,we,Pe.data);E.generateMipmaps=!1}else nt?(bt&&t.texStorage2D(3553,N,De,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,Ae,we,V.data)):t.texImage2D(3553,0,De,V.width,V.height,0,Ae,we,V.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&bt&&t.texStorage3D(35866,N,De,tt[0].width,tt[0].height,V.depth);for(let ne=0,he=tt.length;ne<he;ne++)Pe=tt[ne],E.format!==Sn?Ae!==null?nt?t.compressedTexSubImage3D(35866,ne,0,0,0,Pe.width,Pe.height,V.depth,Ae,Pe.data,0,0):t.compressedTexImage3D(35866,ne,De,Pe.width,Pe.height,V.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(35866,ne,0,0,0,Pe.width,Pe.height,V.depth,Ae,we,Pe.data):t.texImage3D(35866,ne,De,Pe.width,Pe.height,V.depth,0,Ae,we,Pe.data)}else{nt&&bt&&t.texStorage2D(3553,N,De,tt[0].width,tt[0].height);for(let ne=0,he=tt.length;ne<he;ne++)Pe=tt[ne],E.format!==Sn?Ae!==null?nt?t.compressedTexSubImage2D(3553,ne,0,0,Pe.width,Pe.height,Ae,Pe.data):t.compressedTexImage2D(3553,ne,De,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(3553,ne,0,0,Pe.width,Pe.height,Ae,we,Pe.data):t.texImage2D(3553,ne,De,Pe.width,Pe.height,0,Ae,we,Pe.data)}else if(E.isDataArrayTexture)nt?(bt&&t.texStorage3D(35866,N,De,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,Ae,we,V.data)):t.texImage3D(35866,0,De,V.width,V.height,V.depth,0,Ae,we,V.data);else if(E.isData3DTexture)nt?(bt&&t.texStorage3D(32879,N,De,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,Ae,we,V.data)):t.texImage3D(32879,0,De,V.width,V.height,V.depth,0,Ae,we,V.data);else if(E.isFramebufferTexture){if(bt)if(nt)t.texStorage2D(3553,N,De,V.width,V.height);else{let ne=V.width,he=V.height;for(let Ee=0;Ee<N;Ee++)t.texImage2D(3553,Ee,De,ne,he,0,Ae,we,null),ne>>=1,he>>=1}}else if(tt.length>0&&Te){nt&&bt&&t.texStorage2D(3553,N,De,tt[0].width,tt[0].height);for(let ne=0,he=tt.length;ne<he;ne++)Pe=tt[ne],nt?t.texSubImage2D(3553,ne,0,0,Ae,we,Pe):t.texImage2D(3553,ne,De,Ae,we,Pe);E.generateMipmaps=!1}else nt?(bt&&t.texStorage2D(3553,N,De,V.width,V.height),t.texSubImage2D(3553,0,0,0,Ae,we,V)):t.texImage2D(3553,0,De,Ae,we,V);S(E,Te)&&A(me),Oe.__version=Me.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Fe(L,E,te){if(E.image.length!==6)return;const me=Se(L,E),pe=E.source;t.bindTexture(34067,L.__webglTexture,33984+te);const Me=n.get(pe);if(pe.version!==Me.__version||me===!0){t.activeTexture(33984+te),i.pixelStorei(37440,E.flipY),i.pixelStorei(37441,E.premultiplyAlpha),i.pixelStorei(3317,E.unpackAlignment),i.pixelStorei(37443,0);const Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,I=E.image[0]&&E.image[0].isDataTexture,V=[];for(let ne=0;ne<6;ne++)!Oe&&!I?V[ne]=b(E.image[ne],!1,!0,c):V[ne]=I?E.image[ne].image:E.image[ne],V[ne]=Zt(E,V[ne]);const Te=V[0],Ae=y(Te)||o,we=r.convert(E.format,E.encoding),De=r.convert(E.type),Pe=x(E.internalFormat,we,De,E.encoding),tt=o&&E.isVideoTexture!==!0,nt=Me.__version===void 0||me===!0;let bt=T(E,Te,Ae);U(34067,E,Ae);let N;if(Oe){tt&&nt&&t.texStorage2D(34067,bt,Pe,Te.width,Te.height);for(let ne=0;ne<6;ne++){N=V[ne].mipmaps;for(let he=0;he<N.length;he++){const Ee=N[he];E.format!==Sn?we!==null?tt?t.compressedTexSubImage2D(34069+ne,he,0,0,Ee.width,Ee.height,we,Ee.data):t.compressedTexImage2D(34069+ne,he,Pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?t.texSubImage2D(34069+ne,he,0,0,Ee.width,Ee.height,we,De,Ee.data):t.texImage2D(34069+ne,he,Pe,Ee.width,Ee.height,0,we,De,Ee.data)}}}else{N=E.mipmaps,tt&&nt&&(N.length>0&&bt++,t.texStorage2D(34067,bt,Pe,V[0].width,V[0].height));for(let ne=0;ne<6;ne++)if(I){tt?t.texSubImage2D(34069+ne,0,0,0,V[ne].width,V[ne].height,we,De,V[ne].data):t.texImage2D(34069+ne,0,Pe,V[ne].width,V[ne].height,0,we,De,V[ne].data);for(let he=0;he<N.length;he++){const Re=N[he].image[ne].image;tt?t.texSubImage2D(34069+ne,he+1,0,0,Re.width,Re.height,we,De,Re.data):t.texImage2D(34069+ne,he+1,Pe,Re.width,Re.height,0,we,De,Re.data)}}else{tt?t.texSubImage2D(34069+ne,0,0,0,we,De,V[ne]):t.texImage2D(34069+ne,0,Pe,we,De,V[ne]);for(let he=0;he<N.length;he++){const Ee=N[he];tt?t.texSubImage2D(34069+ne,he+1,0,0,we,De,Ee.image[ne]):t.texImage2D(34069+ne,he+1,Pe,we,De,Ee.image[ne])}}}S(E,Ae)&&A(34067),Me.__version=pe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function K(L,E,te,me,pe){const Me=r.convert(te.format,te.encoding),Oe=r.convert(te.type),I=x(te.internalFormat,Me,Oe,te.encoding);n.get(E).__hasExternalTextures||(pe===32879||pe===35866?t.texImage3D(pe,0,I,E.width,E.height,E.depth,0,Me,Oe,null):t.texImage2D(pe,0,I,E.width,E.height,0,Me,Oe,null)),t.bindFramebuffer(36160,L),pt(E)?d.framebufferTexture2DMultisampleEXT(36160,me,pe,n.get(te).__webglTexture,0,Tt(E)):(pe===3553||pe>=34069&&pe<=34074)&&i.framebufferTexture2D(36160,me,pe,n.get(te).__webglTexture,0),t.bindFramebuffer(36160,null)}function je(L,E,te){if(i.bindRenderbuffer(36161,L),E.depthBuffer&&!E.stencilBuffer){let me=33189;if(te||pt(E)){const pe=E.depthTexture;pe&&pe.isDepthTexture&&(pe.type===li?me=36012:pe.type===oi&&(me=33190));const Me=Tt(E);pt(E)?d.renderbufferStorageMultisampleEXT(36161,Me,me,E.width,E.height):i.renderbufferStorageMultisample(36161,Me,me,E.width,E.height)}else i.renderbufferStorage(36161,me,E.width,E.height);i.framebufferRenderbuffer(36160,36096,36161,L)}else if(E.depthBuffer&&E.stencilBuffer){const me=Tt(E);te&&pt(E)===!1?i.renderbufferStorageMultisample(36161,me,35056,E.width,E.height):pt(E)?d.renderbufferStorageMultisampleEXT(36161,me,35056,E.width,E.height):i.renderbufferStorage(36161,34041,E.width,E.height),i.framebufferRenderbuffer(36160,33306,36161,L)}else{const me=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let pe=0;pe<me.length;pe++){const Me=me[pe],Oe=r.convert(Me.format,Me.encoding),I=r.convert(Me.type),V=x(Me.internalFormat,Oe,I,Me.encoding),Te=Tt(E);te&&pt(E)===!1?i.renderbufferStorageMultisample(36161,Te,V,E.width,E.height):pt(E)?d.renderbufferStorageMultisampleEXT(36161,Te,V,E.width,E.height):i.renderbufferStorage(36161,V,E.width,E.height)}}i.bindRenderbuffer(36161,null)}function We(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ue(E.depthTexture,0);const me=n.get(E.depthTexture).__webglTexture,pe=Tt(E);if(E.depthTexture.format===ui)pt(E)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,me,0,pe):i.framebufferTexture2D(36160,36096,3553,me,0);else if(E.depthTexture.format===Wi)pt(E)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,me,0,pe):i.framebufferTexture2D(36160,33306,3553,me,0);else throw new Error("Unknown depthTexture format")}function ze(L){const E=n.get(L),te=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");We(E.__webglFramebuffer,L)}else if(te){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(36160,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]=i.createRenderbuffer(),je(E.__webglDepthbuffer[me],L,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),je(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function zt(L,E,te){const me=n.get(L);E!==void 0&&K(me.__webglFramebuffer,L,L.texture,36064,3553),te!==void 0&&ze(L)}function Pt(L){const E=L.texture,te=n.get(L),me=n.get(E);L.addEventListener("dispose",j),L.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=E.version,a.memory.textures++);const pe=L.isWebGLCubeRenderTarget===!0,Me=L.isWebGLMultipleRenderTargets===!0,Oe=y(L)||o;if(pe){te.__webglFramebuffer=[];for(let I=0;I<6;I++)te.__webglFramebuffer[I]=i.createFramebuffer()}else{if(te.__webglFramebuffer=i.createFramebuffer(),Me)if(s.drawBuffers){const I=L.texture;for(let V=0,Te=I.length;V<Te;V++){const Ae=n.get(I[V]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&pt(L)===!1){const I=Me?E:[E];te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,te.__webglMultisampledFramebuffer);for(let V=0;V<I.length;V++){const Te=I[V];te.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(36161,te.__webglColorRenderbuffer[V]);const Ae=r.convert(Te.format,Te.encoding),we=r.convert(Te.type),De=x(Te.internalFormat,Ae,we,Te.encoding,L.isXRRenderTarget===!0),Pe=Tt(L);i.renderbufferStorageMultisample(36161,Pe,De,L.width,L.height),i.framebufferRenderbuffer(36160,36064+V,36161,te.__webglColorRenderbuffer[V])}i.bindRenderbuffer(36161,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),je(te.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(pe){t.bindTexture(34067,me.__webglTexture),U(34067,E,Oe);for(let I=0;I<6;I++)K(te.__webglFramebuffer[I],L,E,36064,34069+I);S(E,Oe)&&A(34067),t.unbindTexture()}else if(Me){const I=L.texture;for(let V=0,Te=I.length;V<Te;V++){const Ae=I[V],we=n.get(Ae);t.bindTexture(3553,we.__webglTexture),U(3553,Ae,Oe),K(te.__webglFramebuffer,L,Ae,36064+V,3553),S(Ae,Oe)&&A(3553)}t.unbindTexture()}else{let I=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?I=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(I,me.__webglTexture),U(I,E,Oe),K(te.__webglFramebuffer,L,E,36064,I),S(E,Oe)&&A(I),t.unbindTexture()}L.depthBuffer&&ze(L)}function Dt(L){const E=y(L)||o,te=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let me=0,pe=te.length;me<pe;me++){const Me=te[me];if(S(Me,E)){const Oe=L.isWebGLCubeRenderTarget?34067:3553,I=n.get(Me).__webglTexture;t.bindTexture(Oe,I),A(Oe),t.unbindTexture()}}}function Wt(L){if(o&&L.samples>0&&pt(L)===!1){const E=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],te=L.width,me=L.height;let pe=16384;const Me=[],Oe=L.stencilBuffer?33306:36096,I=n.get(L),V=L.isWebGLMultipleRenderTargets===!0;if(V)for(let Te=0;Te<E.length;Te++)t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Te,36161,null),t.bindFramebuffer(36160,I.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Te,3553,null,0);t.bindFramebuffer(36008,I.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,I.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){Me.push(36064+Te),L.depthBuffer&&Me.push(Oe);const Ae=I.__ignoreDepthValues!==void 0?I.__ignoreDepthValues:!1;if(Ae===!1&&(L.depthBuffer&&(pe|=256),L.stencilBuffer&&(pe|=1024)),V&&i.framebufferRenderbuffer(36008,36064,36161,I.__webglColorRenderbuffer[Te]),Ae===!0&&(i.invalidateFramebuffer(36008,[Oe]),i.invalidateFramebuffer(36009,[Oe])),V){const we=n.get(E[Te]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,we,0)}i.blitFramebuffer(0,0,te,me,0,0,te,me,pe,9728),h&&i.invalidateFramebuffer(36008,Me)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let Te=0;Te<E.length;Te++){t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Te,36161,I.__webglColorRenderbuffer[Te]);const Ae=n.get(E[Te]).__webglTexture;t.bindFramebuffer(36160,I.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Te,3553,Ae,0)}t.bindFramebuffer(36009,I.__webglMultisampledFramebuffer)}}function Tt(L){return Math.min(f,L.samples)}function pt(L){const E=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function fn(L){const E=a.render.frame;p.get(L)!==E&&(p.set(L,E),L.update())}function Zt(L,E){const te=L.encoding,me=L.format,pe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===oa||te!==Xn&&(te===vt?o===!1?e.has("EXT_sRGB")===!0&&me===Sn?(L.format=oa,L.minFilter=pn,L.generateMipmaps=!1):E=uu.sRGBToLinear(E):(me!==Sn||pe!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",te)),E}this.allocateTextureUnit=Z,this.resetTextureUnits=$,this.setTexture2D=ue,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=de,this.rebindTextures=zt,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=K,this.useMultisampledRTT=pt}function jb(i,e,t){const n=t.isWebGL2;function s(r,a=null){let o;if(r===hi)return 5121;if(r===Um)return 32819;if(r===Bm)return 32820;if(r===zm)return 5120;if(r===Om)return 5122;if(r===ou)return 5123;if(r===Nm)return 5124;if(r===oi)return 5125;if(r===li)return 5126;if(r===ms)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Gm)return 6406;if(r===Sn)return 6408;if(r===Hm)return 6409;if(r===Wm)return 6410;if(r===ui)return 6402;if(r===Wi)return 34041;if(r===Vm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===oa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===jm)return 6403;if(r===qm)return 36244;if(r===Xm)return 33319;if(r===Ym)return 33320;if(r===Zm)return 36249;if(r===gr||r===_r||r===br||r===vr)if(a===vt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===gr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_r)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===br)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===gr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_r)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===br)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xo||r===Yo||r===Zo||r===Ko)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Xo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ko)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Km)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Jo||r===Qo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Jo)return a===vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Qo)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$o||r===el||r===tl||r===nl||r===il||r===sl||r===rl||r===al||r===ol||r===ll||r===cl||r===ul||r===fl||r===dl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===$o)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===el)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===tl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===il)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===al)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ol)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ll)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ul)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dl)return a===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===hl)return a===vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Bi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class qb extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class os extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xb={type:"move"};class qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,n),v=this._getHandJoint(c,m);g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=g.radius),v.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,p=.005;c.inputState.pinching&&d>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xb)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new os;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Yb extends Qt{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:ui,u!==ui&&u!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ui&&(n=oi),n===void 0&&u===Wi&&(n=Bi),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1}}class Zb extends gi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,d=null,h=null;const p=t.getContextAttributes();let m=null,g=null;const v=[],M=[],b=new Set,y=new Map,_=new ln;_.layers.enable(1),_.viewport=new Bt;const S=new ln;S.layers.enable(2),S.viewport=new Bt;const A=[_,S],x=new qb;x.layers.enable(1),x.layers.enable(2);let T=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let O=v[z];return O===void 0&&(O=new qr,v[z]=O),O.getTargetRaySpace()},this.getControllerGrip=function(z){let O=v[z];return O===void 0&&(O=new qr,v[z]=O),O.getGripSpace()},this.getHand=function(z){let O=v[z];return O===void 0&&(O=new qr,v[z]=O),O.getHandSpace()};function k(z){const O=M.indexOf(z.inputSource);if(O===-1)return;const de=v[O];de!==void 0&&de.dispatchEvent({type:z.type,data:z.inputSource})}function j(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",D);for(let z=0;z<v.length;z++){const O=M[z];O!==null&&(M[z]=null,v[z].disconnect(O))}T=null,w=null,e.setRenderTarget(m),d=null,f=null,u=null,s=null,g=null,ue.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return h},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",j),s.addEventListener("inputsourceschange",D),p.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,O),s.updateRenderState({baseLayer:d}),g=new Yn(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:hi,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let O=null,de=null,W=null;p.depth&&(W=p.stencil?35056:33190,O=p.stencil?Wi:ui,de=p.stencil?Bi:oi);const ge={colorFormat:32856,depthFormat:W,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(ge),s.updateRenderState({layers:[f]}),g=new Yn(f.textureWidth,f.textureHeight,{format:Sn,type:hi,depthTexture:new Yb(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const U=e.properties.get(g);U.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await s.requestReferenceSpace(o),ue.setContext(s),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(z){for(let O=0;O<z.removed.length;O++){const de=z.removed[O],W=M.indexOf(de);W>=0&&(M[W]=null,v[W].disconnect(de))}for(let O=0;O<z.added.length;O++){const de=z.added[O];let W=M.indexOf(de);if(W===-1){for(let U=0;U<v.length;U++)if(U>=M.length){M.push(de),W=U;break}else if(M[U]===null){M[U]=de,W=U;break}if(W===-1)break}const ge=v[W];ge&&ge.connect(de)}}const R=new G,X=new G;function se(z,O,de){R.setFromMatrixPosition(O.matrixWorld),X.setFromMatrixPosition(de.matrixWorld);const W=R.distanceTo(X),ge=O.projectionMatrix.elements,U=de.projectionMatrix.elements,Se=ge[14]/(ge[10]-1),Le=ge[14]/(ge[10]+1),Fe=(ge[9]+1)/ge[5],K=(ge[9]-1)/ge[5],je=(ge[8]-1)/ge[0],We=(U[8]+1)/U[0],ze=Se*je,zt=Se*We,Pt=W/(-je+We),Dt=Pt*-je;O.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Dt),z.translateZ(Pt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Wt=Se+Pt,Tt=Le+Pt,pt=ze-Dt,fn=zt+(W-Dt),Zt=Fe*Le/Tt*Wt,L=K*Le/Tt*Wt;z.projectionMatrix.makePerspective(pt,fn,Zt,L,Wt,Tt)}function $(z,O){O===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(O.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;x.near=S.near=_.near=z.near,x.far=S.far=_.far=z.far,(T!==x.near||w!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,w=x.far);const O=z.parent,de=x.cameras;$(x,O);for(let ge=0;ge<de.length;ge++)$(de[ge],O);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),z.matrix.copy(x.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const W=z.children;for(let ge=0,U=W.length;ge<U;ge++)W[ge].updateMatrixWorld(!0);de.length===2?se(x,_,S):x.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(z){f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.getPlanes=function(){return b};let Z=null;function ce(z,O){if(c=O.getViewerPose(l||a),h=O,c!==null){const de=c.views;d!==null&&(e.setRenderTargetFramebuffer(g,d.framebuffer),e.setRenderTarget(g));let W=!1;de.length!==x.cameras.length&&(x.cameras.length=0,W=!0);for(let ge=0;ge<de.length;ge++){const U=de[ge];let Se=null;if(d!==null)Se=d.getViewport(U);else{const Fe=u.getViewSubImage(f,U);Se=Fe.viewport,ge===0&&(e.setRenderTargetTextures(g,Fe.colorTexture,f.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(g))}let Le=A[ge];Le===void 0&&(Le=new ln,Le.layers.enable(ge),Le.viewport=new Bt,A[ge]=Le),Le.matrix.fromArray(U.transform.matrix),Le.projectionMatrix.fromArray(U.projectionMatrix),Le.viewport.set(Se.x,Se.y,Se.width,Se.height),ge===0&&x.matrix.copy(Le.matrix),W===!0&&x.cameras.push(Le)}}for(let de=0;de<v.length;de++){const W=M[de],ge=v[de];W!==null&&ge!==void 0&&ge.update(W,O,l||a)}if(Z&&Z(z,O),O.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:O.detectedPlanes});let de=null;for(const W of b)O.detectedPlanes.has(W)||(de===null&&(de=[]),de.push(W));if(de!==null)for(const W of de)b.delete(W),y.delete(W),n.dispatchEvent({type:"planeremoved",data:W});for(const W of O.detectedPlanes)if(!b.has(W))b.add(W),y.set(W,O.lastChangedTime),n.dispatchEvent({type:"planeadded",data:W});else{const ge=y.get(W);W.lastChangedTime>ge&&(y.set(W,W.lastChangedTime),n.dispatchEvent({type:"planechanged",data:W}))}}h=null}const ue=new vu;ue.setAnimationLoop(ce),this.setAnimationLoop=function(z){Z=z},this.dispose=function(){}}}function Kb(i,e){function t(m,g){g.color.getRGB(m.fogColor.value,gu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,v,M,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),c(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,b)):g.isMeshMatcapMaterial?(s(m,g),h(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),p(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?o(m,g,v,M):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.bumpMap&&(m.bumpMap.value=g.bumpMap,m.bumpScale.value=g.bumpScale,g.side===_n&&(m.bumpScale.value*=-1)),g.displacementMap&&(m.displacementMap.value=g.displacementMap,m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap),g.normalMap&&(m.normalMap.value=g.normalMap,m.normalScale.value.copy(g.normalScale),g.side===_n&&m.normalScale.value.negate()),g.specularMap&&(m.specularMap.value=g.specularMap),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=e.get(g).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;const y=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*y}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity);let M;g.map?M=g.map:g.specularMap?M=g.specularMap:g.displacementMap?M=g.displacementMap:g.normalMap?M=g.normalMap:g.bumpMap?M=g.bumpMap:g.roughnessMap?M=g.roughnessMap:g.metalnessMap?M=g.metalnessMap:g.alphaMap?M=g.alphaMap:g.emissiveMap?M=g.emissiveMap:g.clearcoatMap?M=g.clearcoatMap:g.clearcoatNormalMap?M=g.clearcoatNormalMap:g.clearcoatRoughnessMap?M=g.clearcoatRoughnessMap:g.iridescenceMap?M=g.iridescenceMap:g.iridescenceThicknessMap?M=g.iridescenceThicknessMap:g.specularIntensityMap?M=g.specularIntensityMap:g.specularColorMap?M=g.specularColorMap:g.transmissionMap?M=g.transmissionMap:g.thicknessMap?M=g.thicknessMap:g.sheenColorMap?M=g.sheenColorMap:g.sheenRoughnessMap&&(M=g.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix));let b;g.aoMap?b=g.aoMap:g.lightMap&&(b=g.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function o(m,g,v,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=M*.5,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b;g.map?b=g.map:g.alphaMap&&(b=g.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map),g.alphaMap&&(m.alphaMap.value=g.alphaMap),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v;g.map?v=g.map:g.alphaMap&&(v=g.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.roughness.value=g.roughness,m.metalness.value=g.metalness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap),e.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),m.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===_n&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap)),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap)}function h(m,g){g.matcap&&(m.matcap.value=g.matcap)}function p(m,g){m.referencePosition.value.copy(g.referencePosition),m.nearDistance.value=g.nearDistance,m.farDistance.value=g.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Jb(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(35375):0;function l(M,b){const y=b.program;n.uniformBlockBinding(M,y)}function c(M,b){let y=s[M.id];y===void 0&&(p(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",g));const _=b.program;n.updateUBOMapping(M,_);const S=e.render.frame;r[M.id]!==S&&(d(M),r[M.id]=S)}function u(M){const b=f();M.__bindingPointIndex=b;const y=i.createBuffer(),_=M.__size,S=M.usage;return i.bindBuffer(35345,y),i.bufferData(35345,_,S),i.bindBuffer(35345,null),i.bindBufferBase(35345,b,y),y}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=s[M.id],y=M.uniforms,_=M.__cache;i.bindBuffer(35345,b);for(let S=0,A=y.length;S<A;S++){const x=y[S];if(h(x,S,_)===!0){const T=x.__offset,w=Array.isArray(x.value)?x.value:[x.value];let k=0;for(let j=0;j<w.length;j++){const D=w[j],R=m(D);typeof D=="number"?(x.__data[0]=D,i.bufferSubData(35345,T+k,x.__data)):D.isMatrix3?(x.__data[0]=D.elements[0],x.__data[1]=D.elements[1],x.__data[2]=D.elements[2],x.__data[3]=D.elements[0],x.__data[4]=D.elements[3],x.__data[5]=D.elements[4],x.__data[6]=D.elements[5],x.__data[7]=D.elements[0],x.__data[8]=D.elements[6],x.__data[9]=D.elements[7],x.__data[10]=D.elements[8],x.__data[11]=D.elements[0]):(D.toArray(x.__data,k),k+=R.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,T,x.__data)}}i.bindBuffer(35345,null)}function h(M,b,y){const _=M.value;if(y[b]===void 0){if(typeof _=="number")y[b]=_;else{const S=Array.isArray(_)?_:[_],A=[];for(let x=0;x<S.length;x++)A.push(S[x].clone());y[b]=A}return!0}else if(typeof _=="number"){if(y[b]!==_)return y[b]=_,!0}else{const S=Array.isArray(y[b])?y[b]:[y[b]],A=Array.isArray(_)?_:[_];for(let x=0;x<S.length;x++){const T=S[x];if(T.equals(A[x])===!1)return T.copy(A[x]),!0}}return!1}function p(M){const b=M.uniforms;let y=0;const _=16;let S=0;for(let A=0,x=b.length;A<x;A++){const T=b[A],w={boundary:0,storage:0},k=Array.isArray(T.value)?T.value:[T.value];for(let j=0,D=k.length;j<D;j++){const R=k[j],X=m(R);w.boundary+=X.boundary,w.storage+=X.storage}if(T.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,A>0){S=y%_;const j=_-S;S!==0&&j-w.boundary<0&&(y+=_-S,T.__offset=y)}y+=w.storage}return S=y%_,S>0&&(y+=_-S),M.__size=y,M.__cache={},this}function m(M){const b={boundary:0,storage:0};return typeof M=="number"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function g(M){const b=M.target;b.removeEventListener("dispose",g);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function v(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:v}}function Qb(){const i=gs("canvas");return i.style.display="block",i}function wu(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Qb(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,d=null;const h=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Xn,this.physicallyCorrectLights=!1,this.toneMapping=An,this.toneMappingExposure=1;const m=this;let g=!1,v=0,M=0,b=null,y=-1,_=null;const S=new Bt,A=new Bt;let x=null,T=e.width,w=e.height,k=1,j=null,D=null;const R=new Bt(0,0,T,w),X=new Bt(0,0,T,w);let se=!1;const $=new Ta;let Z=!1,ce=!1,ue=null;const z=new St,O=new He,de=new G,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return b===null?k:1}let U=t;function Se(C,q){for(let ie=0;ie<C.length;ie++){const H=C[ie],re=e.getContext(H,q);if(re!==null)return re}return null}try{const C={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${va}`),e.addEventListener("webglcontextlost",De,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",tt,!1),U===null){const q=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&q.shift(),U=Se(q,C),U===null)throw Se(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Le,Fe,K,je,We,ze,zt,Pt,Dt,Wt,Tt,pt,fn,Zt,L,E,te,me,pe,Me,Oe,I,V,Te;function Ae(){Le=new c0(U),Fe=new i0(U,Le,i),Le.init(Fe),I=new jb(U,Le,Fe),K=new Hb(U,Le,Fe),je=new d0,We=new Lb,ze=new Wb(U,Le,K,We,Fe,I,je),zt=new r0(m),Pt=new l0(m),Dt=new Mp(U,Fe),V=new t0(U,Le,Dt,Fe),Wt=new u0(U,Dt,je,V),Tt=new g0(U,Wt,Dt,je),pe=new p0(U,Fe,ze),E=new s0(We),pt=new Cb(m,zt,Pt,Le,Fe,V,E),fn=new Kb(m,We),Zt=new Db,L=new Ob(Le,Fe),me=new e0(m,zt,Pt,K,Tt,u,a),te=new Vb(m,Tt,Fe),Te=new Jb(U,je,Fe,K),Me=new n0(U,Le,je,Fe),Oe=new f0(U,Le,je,Fe),je.programs=pt.programs,m.capabilities=Fe,m.extensions=Le,m.properties=We,m.renderLists=Zt,m.shadowMap=te,m.state=K,m.info=je}Ae();const we=new Zb(m,U);this.xr=we,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Le.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Le.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(T,w,!1))},this.getSize=function(C){return C.set(T,w)},this.setSize=function(C,q,ie){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=C,w=q,e.width=Math.floor(C*k),e.height=Math.floor(q*k),ie!==!1&&(e.style.width=C+"px",e.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(T*k,w*k).floor()},this.setDrawingBufferSize=function(C,q,ie){T=C,w=q,k=ie,e.width=Math.floor(C*ie),e.height=Math.floor(q*ie),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(R)},this.setViewport=function(C,q,ie,H){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,q,ie,H),K.viewport(S.copy(R).multiplyScalar(k).floor())},this.getScissor=function(C){return C.copy(X)},this.setScissor=function(C,q,ie,H){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,q,ie,H),K.scissor(A.copy(X).multiplyScalar(k).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(C){K.setScissorTest(se=C)},this.setOpaqueSort=function(C){j=C},this.setTransparentSort=function(C){D=C},this.getClearColor=function(C){return C.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(C=!0,q=!0,ie=!0){let H=0;C&&(H|=16384),q&&(H|=256),ie&&(H|=1024),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Zt.dispose(),L.dispose(),We.dispose(),zt.dispose(),Pt.dispose(),Tt.dispose(),V.dispose(),Te.dispose(),pt.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ee),we.removeEventListener("sessionend",Re),ue&&(ue.dispose(),ue=null),mt.stop()};function De(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const C=je.autoReset,q=te.enabled,ie=te.autoUpdate,H=te.needsUpdate,re=te.type;Ae(),je.autoReset=C,te.enabled=q,te.autoUpdate=ie,te.needsUpdate=H,te.type=re}function tt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function nt(C){const q=C.target;q.removeEventListener("dispose",nt),bt(q)}function bt(C){N(C),We.remove(C)}function N(C){const q=We.get(C).programs;q!==void 0&&(q.forEach(function(ie){pt.releaseProgram(ie)}),C.isShaderMaterial&&pt.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ie,H,re,ke){q===null&&(q=W);const Ve=re.isMesh&&re.matrixWorld.determinant()<0,Ze=Gu(C,q,ie,H,re);K.setMaterial(H,Ve);let Je=ie.index,dt=1;H.wireframe===!0&&(Je=Wt.getWireframeAttribute(ie),dt=2);const it=ie.drawRange,st=ie.attributes.position;let Et=it.start*dt,nn=(it.start+it.count)*dt;ke!==null&&(Et=Math.max(Et,ke.start*dt),nn=Math.min(nn,(ke.start+ke.count)*dt)),Je!==null?(Et=Math.max(Et,0),nn=Math.min(nn,Je.count)):st!=null&&(Et=Math.max(Et,0),nn=Math.min(nn,st.count));const Pn=nn-Et;if(Pn<0||Pn===1/0)return;V.setup(re,H,Ze,ie,Je);let Jn,At=Me;if(Je!==null&&(Jn=Dt.get(Je),At=Oe,At.setIndex(Jn)),re.isMesh)H.wireframe===!0?(K.setLineWidth(H.wireframeLinewidth*ge()),At.setMode(1)):At.setMode(4);else if(re.isLine){let rt=H.linewidth;rt===void 0&&(rt=1),K.setLineWidth(rt*ge()),re.isLineSegments?At.setMode(1):re.isLineLoop?At.setMode(2):At.setMode(3)}else re.isPoints?At.setMode(0):re.isSprite&&At.setMode(4);if(re.isInstancedMesh)At.renderInstances(Et,Pn,re.count);else if(ie.isInstancedBufferGeometry){const rt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ur=Math.min(ie.instanceCount,rt);At.renderInstances(Et,Pn,ur)}else At.render(Et,Pn)},this.compile=function(C,q){function ie(H,re,ke){H.transparent===!0&&H.side===ws?(H.side=_n,H.needsUpdate=!0,dn(H,re,ke),H.side=di,H.needsUpdate=!0,dn(H,re,ke),H.side=ws):dn(H,re,ke)}d=L.get(C),d.init(),p.push(d),C.traverseVisible(function(H){H.isLight&&H.layers.test(q.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights(m.physicallyCorrectLights),C.traverse(function(H){const re=H.material;if(re)if(Array.isArray(re))for(let ke=0;ke<re.length;ke++){const Ve=re[ke];ie(Ve,C,H)}else ie(re,C,H)}),p.pop(),d=null};let ne=null;function he(C){ne&&ne(C)}function Ee(){mt.stop()}function Re(){mt.start()}const mt=new vu;mt.setAnimationLoop(he),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(C){ne=C,we.setAnimationLoop(C),C===null?mt.stop():mt.start()},we.addEventListener("sessionstart",Ee),we.addEventListener("sessionend",Re),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(q),q=we.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,q,b),d=L.get(C,p.length),d.init(),p.push(d),z.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),$.setFromProjectionMatrix(z),ce=this.localClippingEnabled,Z=E.init(this.clippingPlanes,ce,q),f=Zt.get(C,h.length),f.init(),h.push(f),Ot(C,q,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(j,D),Z===!0&&E.beginShadows();const ie=d.state.shadowsArray;if(te.render(ie,C,q),Z===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(f,C),d.setupLights(m.physicallyCorrectLights),q.isArrayCamera){const H=q.cameras;for(let re=0,ke=H.length;re<ke;re++){const Ve=H[re];Vt(f,C,Ve,Ve.viewport)}}else Vt(f,C,q);b!==null&&(ze.updateMultisampleRenderTarget(b),ze.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(m,C,q),V.resetDefaultState(),y=-1,_=null,p.pop(),p.length>0?d=p[p.length-1]:d=null,h.pop(),h.length>0?f=h[h.length-1]:f=null};function Ot(C,q,ie,H){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){H&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(z);const Ve=Tt.update(C),Ze=C.material;Ze.visible&&f.push(C,Ve,Ze,ie,de.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==je.render.frame&&(C.skeleton.update(),C.skeleton.frame=je.render.frame),!C.frustumCulled||$.intersectsObject(C))){H&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(z);const Ve=Tt.update(C),Ze=C.material;if(Array.isArray(Ze)){const Je=Ve.groups;for(let dt=0,it=Je.length;dt<it;dt++){const st=Je[dt],Et=Ze[st.materialIndex];Et&&Et.visible&&f.push(C,Ve,Et,ie,de.z,st)}}else Ze.visible&&f.push(C,Ve,Ze,ie,de.z,null)}}const ke=C.children;for(let Ve=0,Ze=ke.length;Ve<Ze;Ve++)Ot(ke[Ve],q,ie,H)}function Vt(C,q,ie,H){const re=C.opaque,ke=C.transmissive,Ve=C.transparent;d.setupLightsView(ie),ke.length>0&&Kn(re,q,ie),H&&K.viewport(S.copy(H)),re.length>0&&xt(re,q,ie),ke.length>0&&xt(ke,q,ie),Ve.length>0&&xt(Ve,q,ie),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Kn(C,q,ie){const H=Fe.isWebGL2;ue===null&&(ue=new Yn(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?ms:hi,minFilter:hs,samples:H&&r===!0?4:0})),m.getDrawingBufferSize(O),H?ue.setSize(O.x,O.y):ue.setSize(la(O.x),la(O.y));const re=m.getRenderTarget();m.setRenderTarget(ue),m.clear();const ke=m.toneMapping;m.toneMapping=An,xt(C,q,ie),m.toneMapping=ke,ze.updateMultisampleRenderTarget(ue),ze.updateRenderTargetMipmap(ue),m.setRenderTarget(re)}function xt(C,q,ie){const H=q.isScene===!0?q.overrideMaterial:null;for(let re=0,ke=C.length;re<ke;re++){const Ve=C[re],Ze=Ve.object,Je=Ve.geometry,dt=H===null?Ve.material:H,it=Ve.group;Ze.layers.test(ie.layers)&&Ln(Ze,q,ie,Je,dt,it)}}function Ln(C,q,ie,H,re,ke){C.onBeforeRender(m,q,ie,H,re,ke),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),re.onBeforeRender(m,q,ie,H,C,ke),re.transparent===!0&&re.side===ws?(re.side=_n,re.needsUpdate=!0,m.renderBufferDirect(ie,q,H,re,C,ke),re.side=di,re.needsUpdate=!0,m.renderBufferDirect(ie,q,H,re,C,ke),re.side=ws):m.renderBufferDirect(ie,q,H,re,C,ke),C.onAfterRender(m,q,ie,H,re,ke)}function dn(C,q,ie){q.isScene!==!0&&(q=W);const H=We.get(C),re=d.state.lights,ke=d.state.shadowsArray,Ve=re.state.version,Ze=pt.getParameters(C,re.state,ke,q,ie),Je=pt.getProgramCacheKey(Ze);let dt=H.programs;H.environment=C.isMeshStandardMaterial?q.environment:null,H.fog=q.fog,H.envMap=(C.isMeshStandardMaterial?Pt:zt).get(C.envMap||H.environment),dt===void 0&&(C.addEventListener("dispose",nt),dt=new Map,H.programs=dt);let it=dt.get(Je);if(it!==void 0){if(H.currentProgram===it&&H.lightsStateVersion===Ve)return Pa(C,Ze),it}else Ze.uniforms=pt.getUniforms(C),C.onBuild(ie,Ze,m),C.onBeforeCompile(Ze,m),it=pt.acquireProgram(Ze,Je),dt.set(Je,it),H.uniforms=Ze.uniforms;const st=H.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(st.clippingPlanes=E.uniform),Pa(C,Ze),H.needsLights=Hu(C),H.lightsStateVersion=Ve,H.needsLights&&(st.ambientLightColor.value=re.state.ambient,st.lightProbe.value=re.state.probe,st.directionalLights.value=re.state.directional,st.directionalLightShadows.value=re.state.directionalShadow,st.spotLights.value=re.state.spot,st.spotLightShadows.value=re.state.spotShadow,st.rectAreaLights.value=re.state.rectArea,st.ltc_1.value=re.state.rectAreaLTC1,st.ltc_2.value=re.state.rectAreaLTC2,st.pointLights.value=re.state.point,st.pointLightShadows.value=re.state.pointShadow,st.hemisphereLights.value=re.state.hemi,st.directionalShadowMap.value=re.state.directionalShadowMap,st.directionalShadowMatrix.value=re.state.directionalShadowMatrix,st.spotShadowMap.value=re.state.spotShadowMap,st.spotLightMatrix.value=re.state.spotLightMatrix,st.spotLightMap.value=re.state.spotLightMap,st.pointShadowMap.value=re.state.pointShadowMap,st.pointShadowMatrix.value=re.state.pointShadowMatrix);const Et=it.getUniforms(),nn=Qs.seqWithValue(Et.seq,st);return H.currentProgram=it,H.uniformsList=nn,it}function Pa(C,q){const ie=We.get(C);ie.outputEncoding=q.outputEncoding,ie.instancing=q.instancing,ie.skinning=q.skinning,ie.morphTargets=q.morphTargets,ie.morphNormals=q.morphNormals,ie.morphColors=q.morphColors,ie.morphTargetsCount=q.morphTargetsCount,ie.numClippingPlanes=q.numClippingPlanes,ie.numIntersection=q.numClipIntersection,ie.vertexAlphas=q.vertexAlphas,ie.vertexTangents=q.vertexTangents,ie.toneMapping=q.toneMapping}function Gu(C,q,ie,H,re){q.isScene!==!0&&(q=W),ze.resetTextureUnits();const ke=q.fog,Ve=H.isMeshStandardMaterial?q.environment:null,Ze=b===null?m.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Xn,Je=(H.isMeshStandardMaterial?Pt:zt).get(H.envMap||Ve),dt=H.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,it=!!H.normalMap&&!!ie.attributes.tangent,st=!!ie.morphAttributes.position,Et=!!ie.morphAttributes.normal,nn=!!ie.morphAttributes.color,Pn=H.toneMapped?m.toneMapping:An,Jn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,At=Jn!==void 0?Jn.length:0,rt=We.get(H),ur=d.state.lights;if(Z===!0&&(ce===!0||C!==_)){const sn=C===_&&H.id===y;E.setState(H,C,sn)}let Nt=!1;H.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==ur.state.version||rt.outputEncoding!==Ze||re.isInstancedMesh&&rt.instancing===!1||!re.isInstancedMesh&&rt.instancing===!0||re.isSkinnedMesh&&rt.skinning===!1||!re.isSkinnedMesh&&rt.skinning===!0||rt.envMap!==Je||H.fog===!0&&rt.fog!==ke||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==E.numPlanes||rt.numIntersection!==E.numIntersection)||rt.vertexAlphas!==dt||rt.vertexTangents!==it||rt.morphTargets!==st||rt.morphNormals!==Et||rt.morphColors!==nn||rt.toneMapping!==Pn||Fe.isWebGL2===!0&&rt.morphTargetsCount!==At)&&(Nt=!0):(Nt=!0,rt.__version=H.version);let Qn=rt.currentProgram;Nt===!0&&(Qn=dn(H,q,re));let Da=!1,Ki=!1,fr=!1;const jt=Qn.getUniforms(),$n=rt.uniforms;if(K.useProgram(Qn.program)&&(Da=!0,Ki=!0,fr=!0),H.id!==y&&(y=H.id,Ki=!0),Da||_!==C){if(jt.setValue(U,"projectionMatrix",C.projectionMatrix),Fe.logarithmicDepthBuffer&&jt.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),_!==C&&(_=C,Ki=!0,fr=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const sn=jt.map.cameraPosition;sn!==void 0&&sn.setValue(U,de.setFromMatrixPosition(C.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&jt.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||re.isSkinnedMesh)&&jt.setValue(U,"viewMatrix",C.matrixWorldInverse)}if(re.isSkinnedMesh){jt.setOptional(U,re,"bindMatrix"),jt.setOptional(U,re,"bindMatrixInverse");const sn=re.skeleton;sn&&(Fe.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),jt.setValue(U,"boneTexture",sn.boneTexture,ze),jt.setValue(U,"boneTextureSize",sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const dr=ie.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0&&Fe.isWebGL2===!0)&&pe.update(re,ie,H,Qn),(Ki||rt.receiveShadow!==re.receiveShadow)&&(rt.receiveShadow=re.receiveShadow,jt.setValue(U,"receiveShadow",re.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&($n.envMap.value=Je,$n.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),Ki&&(jt.setValue(U,"toneMappingExposure",m.toneMappingExposure),rt.needsLights&&Vu($n,fr),ke&&H.fog===!0&&fn.refreshFogUniforms($n,ke),fn.refreshMaterialUniforms($n,H,k,w,ue),Qs.upload(U,rt.uniformsList,$n,ze)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Qs.upload(U,rt.uniformsList,$n,ze),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&jt.setValue(U,"center",re.center),jt.setValue(U,"modelViewMatrix",re.modelViewMatrix),jt.setValue(U,"normalMatrix",re.normalMatrix),jt.setValue(U,"modelMatrix",re.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const sn=H.uniformsGroups;for(let hr=0,Wu=sn.length;hr<Wu;hr++)if(Fe.isWebGL2){const Ra=sn[hr];Te.update(Ra,Qn),Te.bind(Ra,Qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qn}function Vu(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Hu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,q,ie){We.get(C.texture).__webglTexture=q,We.get(C.depthTexture).__webglTexture=ie;const H=We.get(C);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=ie===void 0,H.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,q){const ie=We.get(C);ie.__webglFramebuffer=q,ie.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,ie=0){b=C,v=q,M=ie;let H=!0,re=null,ke=!1,Ve=!1;if(C){const Je=We.get(C);Je.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(36160,null),H=!1):Je.__webglFramebuffer===void 0?ze.setupRenderTarget(C):Je.__hasExternalTextures&&ze.rebindTextures(C,We.get(C.texture).__webglTexture,We.get(C.depthTexture).__webglTexture);const dt=C.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Ve=!0);const it=We.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(re=it[q],ke=!0):Fe.isWebGL2&&C.samples>0&&ze.useMultisampledRTT(C)===!1?re=We.get(C).__webglMultisampledFramebuffer:re=it,S.copy(C.viewport),A.copy(C.scissor),x=C.scissorTest}else S.copy(R).multiplyScalar(k).floor(),A.copy(X).multiplyScalar(k).floor(),x=se;if(K.bindFramebuffer(36160,re)&&Fe.drawBuffers&&H&&K.drawBuffers(C,re),K.viewport(S),K.scissor(A),K.setScissorTest(x),ke){const Je=We.get(C.texture);U.framebufferTexture2D(36160,36064,34069+q,Je.__webglTexture,ie)}else if(Ve){const Je=We.get(C.texture),dt=q||0;U.framebufferTextureLayer(36160,36064,Je.__webglTexture,ie||0,dt)}y=-1},this.readRenderTargetPixels=function(C,q,ie,H,re,ke,Ve){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=We.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ze=Ze[Ve]),Ze){K.bindFramebuffer(36160,Ze);try{const Je=C.texture,dt=Je.format,it=Je.type;if(dt!==Sn&&I.convert(dt)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=it===ms&&(Le.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&Le.has("EXT_color_buffer_float"));if(it!==hi&&I.convert(it)!==U.getParameter(35738)&&!(it===li&&(Fe.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-H&&ie>=0&&ie<=C.height-re&&U.readPixels(q,ie,H,re,I.convert(dt),I.convert(it),ke)}finally{const Je=b!==null?We.get(b).__webglFramebuffer:null;K.bindFramebuffer(36160,Je)}}},this.copyFramebufferToTexture=function(C,q,ie=0){const H=Math.pow(2,-ie),re=Math.floor(q.image.width*H),ke=Math.floor(q.image.height*H);ze.setTexture2D(q,0),U.copyTexSubImage2D(3553,ie,0,0,C.x,C.y,re,ke),K.unbindTexture()},this.copyTextureToTexture=function(C,q,ie,H=0){const re=q.image.width,ke=q.image.height,Ve=I.convert(ie.format),Ze=I.convert(ie.type);ze.setTexture2D(ie,0),U.pixelStorei(37440,ie.flipY),U.pixelStorei(37441,ie.premultiplyAlpha),U.pixelStorei(3317,ie.unpackAlignment),q.isDataTexture?U.texSubImage2D(3553,H,C.x,C.y,re,ke,Ve,Ze,q.image.data):q.isCompressedTexture?U.compressedTexSubImage2D(3553,H,C.x,C.y,q.mipmaps[0].width,q.mipmaps[0].height,Ve,q.mipmaps[0].data):U.texSubImage2D(3553,H,C.x,C.y,Ve,Ze,q.image),H===0&&ie.generateMipmaps&&U.generateMipmap(3553),K.unbindTexture()},this.copyTextureToTexture3D=function(C,q,ie,H,re=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ke=C.max.x-C.min.x+1,Ve=C.max.y-C.min.y+1,Ze=C.max.z-C.min.z+1,Je=I.convert(H.format),dt=I.convert(H.type);let it;if(H.isData3DTexture)ze.setTexture3D(H,0),it=32879;else if(H.isDataArrayTexture)ze.setTexture2DArray(H,0),it=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,H.flipY),U.pixelStorei(37441,H.premultiplyAlpha),U.pixelStorei(3317,H.unpackAlignment);const st=U.getParameter(3314),Et=U.getParameter(32878),nn=U.getParameter(3316),Pn=U.getParameter(3315),Jn=U.getParameter(32877),At=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;U.pixelStorei(3314,At.width),U.pixelStorei(32878,At.height),U.pixelStorei(3316,C.min.x),U.pixelStorei(3315,C.min.y),U.pixelStorei(32877,C.min.z),ie.isDataTexture||ie.isData3DTexture?U.texSubImage3D(it,re,q.x,q.y,q.z,ke,Ve,Ze,Je,dt,At.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(it,re,q.x,q.y,q.z,ke,Ve,Ze,Je,At.data)):U.texSubImage3D(it,re,q.x,q.y,q.z,ke,Ve,Ze,Je,dt,At),U.pixelStorei(3314,st),U.pixelStorei(32878,Et),U.pixelStorei(3316,nn),U.pixelStorei(3315,Pn),U.pixelStorei(32877,Jn),re===0&&H.generateMipmaps&&U.generateMipmap(it),K.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?ze.setTextureCube(C,0):C.isData3DTexture?ze.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ze.setTexture2DArray(C,0):ze.setTexture2D(C,0),K.unbindTexture()},this.resetState=function(){v=0,M=0,b=null,K.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class $b extends wu{}$b.prototype.isWebGL1Renderer=!0;class e1 extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class $s extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kl=new G,Jl=new G,Ql=new St,Xr=new ar,Ws=new xs;class t1 extends wt{constructor(e=new tn,t=new $s){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Kl.fromBufferAttribute(t,s-1),Jl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Kl.distanceTo(Jl);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),Ws.radius+=r,e.ray.intersectsSphere(Ws)===!1)return;Ql.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(Ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new G,u=new G,f=new G,d=new G,h=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const v=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let b=v,y=M-1;b<y;b+=h){const _=p.getX(b),S=p.getX(b+1);if(c.fromBufferAttribute(g,_),u.fromBufferAttribute(g,S),Xr.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let b=v,y=M-1;b<y;b+=h){if(c.fromBufferAttribute(g,b),u.fromBufferAttribute(g,b+1),Xr.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const $l=new G,ec=new G;class tc extends t1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)$l.fromBufferAttribute(t,s),ec.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$l.distanceTo(ec);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ls extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nc=new St,ua=new ar,js=new xs,qs=new G;class Yr extends wt{constructor(e=new tn,t=new ls){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(s),js.radius+=r,e.ray.intersectsSphere(js)===!1)return;nc.copy(s).invert(),ua.copy(e.ray).applyMatrix4(nc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let p=d,m=h;p<m;p++){const g=c.getX(p);qs.fromBufferAttribute(f,g),ic(qs,g,l,s,e,t,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let p=d,m=h;p<m;p++)qs.fromBufferAttribute(f,p),ic(qs,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ic(i,e,t,n,s,r,a){const o=ua.distanceSqToPoint(i);if(o<t){const l=new G;ua.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class n1 extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ya,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class i1 extends Cn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new at(16777215),this.specular=new at(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ya,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const nr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class s1{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],p=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null}}}const Tu=new s1;class Ss{constructor(e){this.manager=e!==void 0?e:Tu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const zn={};class r1 extends Error{constructor(e,t){super(e),this.response=t}}class Eu extends Ss{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=nr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:s});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=zn[e],f=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),h=d?parseInt(d):0,p=h!==0;let m=0;const g=new ReadableStream({start(v){M();function M(){f.read().then(({done:b,value:y})=>{if(b)v.close();else{m+=y.byteLength;const _=new ProgressEvent("progress",{lengthComputable:p,loaded:m,total:h});for(let S=0,A=u.length;S<A;S++){const x=u[S];x.onProgress&&x.onProgress(_)}v.enqueue(y),M()}})}}});return new Response(g)}else throw new r1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(p=>h.decode(p))}}}).then(c=>{nr.add(e,c);const u=zn[e];delete zn[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class a1 extends Ss{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=nr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=gs("img");function l(){u(),nr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class sc extends Ss{constructor(e){super(e)}load(e,t,n,s){const r=new Qt,a=new a1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Au extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Zr=new St,rc=new G,ac=new G;class o1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;rc.setFromMatrixPosition(e.matrixWorld),t.position.copy(rc),ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ac),t.updateMatrixWorld(),Zr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class l1 extends o1{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oc extends Au{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DefaultUp),this.updateMatrix(),this.target=new wt,this.shadow=new l1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class c1 extends Au{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class u1{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Cu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=lc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lc(){return(typeof performance>"u"?Date:performance).now()}class f1{constructor(e,t,n=0,s=1/0){this.ray=new ar(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return fa(e,this,n,t),n.sort(cc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)fa(e[s],this,n,t);return n.sort(cc),n}}function cc(i,e){return i.distance-e.distance}function fa(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)fa(s[r],e,t,!0)}}class uc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);const d1={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class lr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const h1=new Aa(-1,1,1,-1,0,1),La=new tn;La.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3));La.setAttribute("uv",new It([0,2,0,0,2,0],2));class m1{constructor(e){this._mesh=new gn(La,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,h1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class p1 extends lr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_u.clone(e.uniforms),this.material=new Nn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new m1(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class fc extends lr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class g1 extends lr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _1{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new He);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Yn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new p1(d1),this.clock=new Cu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}fc!==void 0&&(a instanceof fc?n=!0:a instanceof g1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Lu extends lr{constructor(e,t,n,s,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new at}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=s}}const b1=(i,e,t)=>{i.renderer=new wu({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),i.composer=new _1(i.renderer),i.composer.addPass(new Lu(i.scene,jn(i.camera)))},dc=(i,e,t)=>{i.renderer&&(e?i.renderer.outputEncoding=Xn:i.renderer.outputEncoding=vt,t?i.renderer.toneMapping=An:i.renderer.toneMapping=ru)},hc=(i,e,t)=>{var n,s,r,a,o,l,c,u;!i.renderer||!i.composer||((s=(n=i.renderer).setSize)==null||s.call(n,e.width,e.height),(a=(r=i.renderer).setPixelRatio)==null||a.call(r,t),(l=(o=i.composer).setSize)==null||l.call(o,e.width,e.height),(u=(c=i.composer).setPixelRatio)==null||u.call(c,t))},mc=(i,e,t)=>{i.renderer&&(i.renderer.shadowMap.enabled=e,i.renderer.shadowMap.type=t)},En=i=>i.userData,v1=(i,e)=>{i.pointer.update(t=>i.renderer?t.set(e.offsetX/i.renderer.domElement.clientWidth*2-1,-(e.offsetY/i.renderer.domElement.clientHeight)*2+1):t)},Pu=(i,e,t,n)=>(i.raycaster.setFromCamera(e,t),i.raycaster.intersectObjects(n,!1)),x1=(i,e)=>i.object.uuid!==e.object.uuid||i.instanceId!==e.instanceId,M1=(i,e,t)=>{let n=jn(i.camera);const s=i.camera.subscribe(c=>n=c);yt(s);let r=jn(i.pointer);const a=i.pointer.subscribe(c=>r=c);yt(a);let o;const l=c=>{var d,h;c.preventDefault();const u=c.type;i.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,v1(i,c);const f=y1(e,r,n);if(u==="pointerdown"&&(o=f?{object:f.object,instanceId:f.instanceId}:null),u==="click"){if(!S1(f,o)){o=null;return}o=null}f&&((h=(d=En(f.object)).eventDispatcher)==null||h.call(d,u,{...f,event:c}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function y1(i,e,t){if(i.interactiveObjects.size===0||i.raycastableObjects.size===0)return null;const n=Pu(i,e,t,Array.from(i.raycastableObjects));return n.length===0||!i.interactiveObjects.has(n[0].object)?null:n[0]}function S1(i,e){return!i||!e?!1:i.object.uuid===e.object.uuid&&i.instanceId===e.instanceId}const w1=(i,e)=>{let t=jn(i.pointerOverCanvas);const n=i.pointerOverCanvas.subscribe(c=>t=c);yt(n);let s=jn(i.camera);const r=i.camera.subscribe(c=>s=c);yt(r);let a=jn(i.pointer);const o=i.pointer.subscribe(c=>a=c);return yt(o),{raycast:()=>{var f,d,h,p,m,g,v,M;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Pu(e,a,s,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&x1(e.lastIntersection,u)&&((g=(m=En(e.lastIntersection.object)).eventDispatcher)==null||g.call(m,"pointerleave",e.lastIntersection),(M=(v=En(u.object)).eventDispatcher)==null||M.call(v,"pointerenter",u)):(p=(h=En(u.object)).eventDispatcher)==null||p.call(h,"pointerenter",u):e.lastIntersection&&((d=(f=En(e.lastIntersection.object)).eventDispatcher)==null||d.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},cr=typeof window<"u",T1=i=>{if(!cr)return;let e;const t=()=>{i(),e=requestAnimationFrame(t)};t(),yt(()=>{e&&cancelAnimationFrame(e)})},E1=(i,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let s=0;e.frameHandlers.forEach(r=>{r.debugFrameloopMessage?e.invalidations[r.debugFrameloopMessage]=r.debugFrameloopMessage in e.invalidations?e.invalidations[r.debugFrameloopMessage]+1:1:++s}),s>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((s,r)=>r.order?!0:s,!1),n=i.clock.getDelta();t?Array.from(e.frameHandlers).sort((s,r)=>(s.order??0)>(r.order??0)?1:-1).forEach(s=>s.fn(i,n)):e.frameHandlers.forEach(s=>s.fn(i,n))},A1=i=>{i.debugFrameloop&&(i.frame+=1,console.log(`frame: ${i.frame}${Object.keys(i.invalidations).length>0?", requested by ↴":""}`),Object.keys(i.invalidations).length>0&&console.table(i.invalidations),i.invalidations={})},C1=(i,e,t,n)=>{let s=jn(i.camera);const r=i.camera.subscribe(o=>s=o);yt(r);const{raycast:a}=w1(i,e);T1(()=>{n.dispose();const o=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(o||t.pointerInvalidated)&&(a(),t.pointerInvalidated=!1),o&&(!s||!i.composer||!i.renderer||(E1(i,t),i.composer.passes.length>1?i.composer.render():i.renderer.render(i.scene,s),A1(t),t.frameInvalidated=!1,t.advance=!1))})},L1=()=>{const i=new ln(75,0,.1,1e3);return En(i).threlteDefaultCamera=!0,i.position.z=5,i.lookAt(0,0,0),i},P1=i=>{const e=i.size.subscribe(t=>{En(jn(i.camera)).threlteDefaultCamera&&i.camera.update(n=>{const s=n;return s.aspect=t.width/t.height,s.updateProjectionMatrix(),i.invalidate("Default camera: aspect ratio changed"),s})});yt(e)},D1=(i,e,t,n,s,r,a)=>{const o={audioListeners:new Map,addAudioListener:(v,M)=>{if(M=M??"default",o.audioListeners.has(M)){console.warn(`An AudioListener with the id "${M}" has already been added, aborting.`);return}o.audioListeners.set(M,v)},removeAudioListener:v=>{if(v=v??"default",!o.audioListeners.has(v)){console.warn(`No AudioListener with the id "${v}" found, aborting.`);return}o.audioListeners.delete(v)},getAudioListener:v=>{if(v=v??"default",!o.audioListeners.has(v)){console.warn(`No AudioListener with the id "${v}" found, aborting.`);return}return o.audioListeners.get(v)}},l={debugFrameloop:r,frameloop:a,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:$u([n,s],([v,M])=>v||M),pointer:ht(new He),pointerOverCanvas:ht(!1),clock:new Cu,camera:ht(L1()),scene:new e1,renderer:void 0,composer:void 0,invalidate:v=>{l.frameInvalidated=!0,l.debugFrameloop&&v&&(l.invalidations[v]=l.invalidations[v]?l.invalidations[v]+1:1)},advance:()=>{l.advance=!0}},u={flat:ht(e),linear:ht(i),dpr:ht(t),setCamera:v=>{c.camera.set(v),c.composer&&(c.composer.passes.forEach(M=>{M instanceof Lu&&(M.camera=v)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new f1,lastIntersection:null,addRaycastableObject:v=>{u.raycastableObjects.add(v)},removeRaycastableObject:v=>{u.raycastableObjects.delete(v)},addInteractiveObject:v=>{u.interactiveObjects.add(v)},removeInteractiveObject:v=>{u.interactiveObjects.delete(v)},addPass:v=>{c.composer&&(c.composer.addPass(v),c.invalidate("Canvas: adding pass"))},removePass:v=>{c.composer&&(c.composer.removePass(v),c.invalidate("Canvas: removing pass"))}},f={dispose:async(v=!1)=>{await pa(),!(!f.shouldDispose&&!v)&&(f.disposableObjects.forEach((M,b)=>{var y;(M===0||v)&&((y=b==null?void 0:b.dispose)==null||y.call(b),f.disposableObjects.delete(b))}),f.shouldDispose=!1)},collectDisposableObjects:(v,M)=>{const b=M??[];return v&&(v!=null&&v.dispose&&typeof v.dispose=="function"&&v.type!=="Scene"&&b.push(v),Object.entries(v).forEach(([y,_])=>{if(y==="parent"||y==="children"||typeof _!="object")return;const S=_;S!=null&&S.dispose&&f.collectDisposableObjects(S,b)})),b},addDisposableObjects:v=>{v.forEach(M=>{const b=f.disposableObjects.get(M);b?f.disposableObjects.set(M,b+1):f.disposableObjects.set(M,1)})},removeDisposableObjects:v=>{v.length!==0&&(v.forEach(M=>{const b=f.disposableObjects.get(M);b&&b>0&&f.disposableObjects.set(M,b-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return Jt("threlte",c),Jt("threlte-root",u),Jt("threlte-render-context",l),Jt("threlte-audio-context",o),Jt("threlte-disposal-context",f),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:o,disposalCtx:f,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>o,getDisposalCtx:()=>f}};function Du(i,e){const t=ht(i);let n=i;const s=t.subscribe(o=>n=o);return yt(s),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const Zi=()=>en("threlte");function R1(i){let e;const t=i[8].default,n=ot(t,i,i[7],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,[r]){n&&n.p&&(!e||r&128)&&ct(n,t,s,s[7],e?lt(t,s[7],r,null):ut(s[7]),null)},i(s){e||(F(n,s),e=!0)},o(s){B(n,s),e=!1},d(s){n&&n.d(s)}}}const I1=()=>({onChildMount:en("threlte-hierarchical-object-on-mount"),onChildDestroy:en("threlte-hierarchical-object-on-destroy")}),Ru=()=>en("threlte-hierarchical-parent-context");function k1(i,e,t){var v;let n,{$$slots:s={},$$scope:r}=e,{object:a=void 0}=e,{children:o=[]}=e,{onChildMount:l=void 0}=e;const c=M=>{o.push(M),t(1,o),l==null||l(M)};let{onChildDestroy:u=void 0}=e;const f=M=>{const b=o.findIndex(y=>y.uuid===M.uuid);b!==-1&&o.splice(b,1),t(1,o),u==null||u(M)},{invalidate:d}=Zi(),h=Ru();gt(i,h,M=>t(6,n=M));let{parent:p=n}=e;const m=I1();a&&((v=m.onChildMount)==null||v.call(m,a),d("HierarchicalObject: object added"));const g=Du(a,(M,b)=>{var y,_;b&&((y=m.onChildDestroy)==null||y.call(m,b),d("HierarchicalObject: object added")),M&&((_=m.onChildMount)==null||_.call(m,M),d("HierarchicalObject: object removed"))});return yt(()=>{var M;a&&((M=m.onChildDestroy)==null||M.call(m,a),d("HierarchicalObject: object removed"))}),Jt("threlte-hierarchical-object-on-mount",c),Jt("threlte-hierarchical-object-on-destroy",f),Jt("threlte-hierarchical-parent-context",g),i.$$set=M=>{"object"in M&&t(3,a=M.object),"children"in M&&t(1,o=M.children),"onChildMount"in M&&t(4,l=M.onChildMount),"onChildDestroy"in M&&t(5,u=M.onChildDestroy),"parent"in M&&t(2,p=M.parent),"$$scope"in M&&t(7,r=M.$$scope)},i.$$.update=()=>{i.$$.dirty&64&&t(2,p=n),i.$$.dirty&8&&g.set(a)},[h,o,p,a,l,u,n,r,s]}class F1 extends Ge{constructor(e){super(),Be(this,e,k1,R1,Ue,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function z1(i){let e;const t=i[1].default,n=ot(t,i,i[4],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&16)&&ct(n,t,s,s[4],e?lt(t,s[4],r,null):ut(s[4]),null)},i(s){e||(F(n,s),e=!0)},o(s){B(n,s),e=!1},d(s){n&&n.d(s)}}}function O1(i){let e,t;return e=new F1({props:{object:i[0],onChildMount:i[2],onChildDestroy:i[3],$$slots:{default:[z1]},$$scope:{ctx:i}}}),{c(){ye(e.$$.fragment)},m(n,s){ve(e,n,s),t=!0},p(n,[s]){const r={};s&1&&(r.object=n[0]),s&1&&(r.onChildMount=n[2]),s&1&&(r.onChildDestroy=n[3]),s&16&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){B(e.$$.fragment,n),t=!1},d(n){xe(e,n)}}}function N1(i,e,t){let{$$slots:n={},$$scope:s}=e,{object:r}=e;const a=l=>r.add(l),o=l=>r.remove(l);return i.$$set=l=>{"object"in l&&t(0,r=l.object),"$$scope"in l&&t(4,s=l.$$scope)},[r,n,a,o,s]}class Iu extends Ge{constructor(e){super(),Be(this,e,N1,O1,Ue,{object:0})}}const U1=()=>{const i=ht({width:0,height:0});let e={width:0,height:0};const t=i.subscribe(a=>e=a);yt(t);let n;const s=()=>{const a=e;if(!n||!n.parentElement)return;const{clientWidth:o,clientHeight:l}=n.parentElement;(o!==a.width||l!==a.height)&&i.set({width:o,height:l})},r=a=>{n=a,s(),window.addEventListener("resize",s)};return cr?(yt(()=>{window.removeEventListener("resize",s)}),{parentSizeAction:r,parentSize:i}):{parentSize:i,parentSizeAction:r}};function pc(i){let e,t;return e=new Iu({props:{object:i[0].scene,$$slots:{default:[B1]},$$scope:{ctx:i}}}),{c(){ye(e.$$.fragment)},m(n,s){ve(e,n,s),t=!0},p(n,s){const r={};s[1]&4&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){B(e.$$.fragment,n),t=!1},d(n){xe(e,n)}}}function B1(i){let e;const t=i[29].default,n=ot(t,i,i[33],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r[1]&4)&&ct(n,t,s,s[33],e?lt(t,s[33],r,null):ut(s[33]),null)},i(s){e||(F(n,s),e=!0)},o(s){B(n,s),e=!1},d(s){n&&n.d(s)}}}function G1(i){let e,t,n,s,r=i[2]&&pc(i);return{c(){e=le("canvas"),r&&r.c(),ee(e,"class","svelte-o3oskp")},m(a,o){Q(a,e,o),r&&r.m(e,null),i[30](e),t=!0,n||(s=[qu(i[3].call(null,e)),oe(e,"click",i[9]),oe(e,"contextmenu",i[10]),oe(e,"pointerup",i[13]),oe(e,"pointerdown",i[11]),oe(e,"pointermove",i[12]),oe(e,"pointerenter",i[31]),oe(e,"pointerleave",i[32])],n=!0)},p(a,o){a[2]?r?(r.p(a,o),o[0]&4&&F(r,1)):(r=pc(a),r.c(),F(r,1),r.m(e,null)):r&&($e(),B(r,1,1,()=>{r=null}),et())},i(a){t||(F(r),t=!0)},o(a){B(r),t=!1},d(a){a&&J(e),r&&r.d(),i[30](null),n=!1,_t(s)}}}const gc=new Set;function V1(i,e,t){let n,s,r,a,{$$slots:o={},$$scope:l}=e,{dpr:c=cr?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:f=!1}=e,{frameloop:d="demand"}=e,{debugFrameloop:h=!1}=e,{shadows:p=!0}=e,{shadowMapType:m=nu}=e,{size:g=void 0}=e,{rendererParameters:v=void 0}=e,M,b=!1;const y=ht(g),{parentSize:_,parentSizeAction:S}=U1(),A=D1(f,u,c,y,_,h,d),{getCtx:x,renderCtx:T,disposalCtx:w}=A,{ctx:k,rootCtx:j,audioCtx:D}=A;P1(k),gc.add(k.invalidate),yt(()=>{gc.delete(k.invalidate)});const{size:R,scene:X}=k;gt(i,R,Se=>t(26,s=Se));const{flat:se,linear:$,dpr:Z}=j;gt(i,se,Se=>t(27,r=Se)),gt(i,$,Se=>t(28,a=Se)),gt(i,Z,Se=>t(25,n=Se)),Jt("threlte-parent",ht(X)),Xi(()=>{M&&(b1(k,M,v),dc(k,a,r),hc(k,s,n),mc(k,p,m),t(2,b=!0))}),C1(k,j,T,w);const{onClick:ce,onContextMenu:ue,onPointerDown:z,onPointerMove:O,onPointerUp:de}=M1(k,j,T);yt(()=>{w.dispose(!0)});function W(Se){Mt[Se?"unshift":"push"](()=>{M=Se,t(1,M)})}const ge=()=>x().pointerOverCanvas.set(!0),U=()=>x().pointerOverCanvas.set(!1);return i.$$set=Se=>{"dpr"in Se&&t(14,c=Se.dpr),"flat"in Se&&t(15,u=Se.flat),"linear"in Se&&t(16,f=Se.linear),"frameloop"in Se&&t(17,d=Se.frameloop),"debugFrameloop"in Se&&t(18,h=Se.debugFrameloop),"shadows"in Se&&t(19,p=Se.shadows),"shadowMapType"in Se&&t(20,m=Se.shadowMapType),"size"in Se&&t(21,g=Se.size),"rendererParameters"in Se&&t(22,v=Se.rendererParameters),"$$scope"in Se&&t(33,l=Se.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&2097152&&y.set(g),i.$$.dirty[0]&65536&&Gt($,a=f,a),i.$$.dirty[0]&32768&&Gt(se,r=u,r),i.$$.dirty[0]&16384&&Gt(Z,n=c,n),i.$$.dirty[0]&402653184&&dc(x(),a,r),i.$$.dirty[0]&100663296&&hc(x(),s,n),i.$$.dirty[0]&1572864&&mc(x(),p,m)},[k,M,b,S,x,R,se,$,Z,ce,ue,z,O,de,c,u,f,d,h,p,m,g,v,j,D,n,s,r,a,o,W,ge,U,l]}class H1 extends Ge{constructor(e){super(),Be(this,e,V1,G1,Ue,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const W1=()=>en("threlte-root"),j1=()=>en("threlte-disposal-context");function q1(i){let e;const t=i[9].default,n=ot(t,i,i[8],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,[r]){n&&n.p&&(!e||r&256)&&ct(n,t,s,s[8],e?lt(t,s[8],r,null):ut(s[8]),null)},i(s){e||(F(n,s),e=!0)},o(s){B(n,s),e=!1},d(s){n&&n.d(s)}}}const _c="threlte-disposable-object-context";function X1(i,e,t){let n,s,{$$slots:r={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=j1();let{object:u=void 0}=e,f=u,{dispose:d=void 0}=e;const h=en(_c);gt(i,h,g=>t(7,s=g));const p=ht(d??s??!0);gt(i,p,g=>t(6,n=g)),Jt(_c,p);let m=n?o(u):[];return l(m),yt(()=>{c(m)}),i.$$set=g=>{"object"in g&&t(2,u=g.object),"dispose"in g&&t(3,d=g.dispose),"$$scope"in g&&t(8,a=g.$$scope)},i.$$.update=()=>{i.$$.dirty&136&&p.set(d??s??!0),i.$$.dirty&116&&u!==f&&(c(m),t(5,m=n?o(u):[]),l(m),t(4,f=u))},[h,p,u,d,f,m,n,s,a,r]}class ku extends Ge{constructor(e){super(),Be(this,e,X1,q1,Ue,{object:2,dispose:3})}}const Fu=(i,e)=>{if(!cr)return{start:()=>{},stop:()=>{},started:Yc(!1)};const t=en("threlte-render-context"),n={fn:i,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},s=ht(!1),r=()=>{t.frameHandlers.delete(n),s.set(!1)},a=()=>{t.frameHandlers.add(n),s.set(!0)};return((e==null?void 0:e.autostart)??!0)&&a(),yt(()=>{r()}),{start:a,stop:r,started:{subscribe:s.subscribe}}},Y1=()=>{const i=ht(!1);return(async()=>{await pa(),i.set(!0)})(),i};function Z1(i,e,t){let n,s,{object:r}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new G,f=bn(),{invalidate:d}=Zi(),h=Y1();gt(i,h,b=>t(8,s=b));const p=async()=>{s||await pa(),f("transform")},m=async()=>{d("TransformableObject: transformed"),await p()};En(r).onTransform=m;const{start:g,stop:v}=Fu(async()=>{c&&!l&&c instanceof wt&&(c.getWorldPosition(u),r.lookAt(u),await p())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),M=Du(r);return gt(i,M,b=>t(7,n=b)),i.$$set=b=>{"object"in b&&t(2,r=b.object),"position"in b&&t(3,a=b.position),"scale"in b&&t(4,o=b.scale),"rotation"in b&&t(5,l=b.rotation),"lookAt"in b&&t(6,c=b.lookAt)},i.$$.update=()=>{i.$$.dirty&4&&M.set(r),i.$$.dirty&232&&(a&&(n.position.set(a.x??0,a.y??0,a.z??0),m()),c&&!l&&(c instanceof wt?g():(v(),n.lookAt(c.x??0,c.y??0,c.z??0),m())),c||v()),i.$$.dirty&144&&o&&(typeof o=="number"?n.scale.set(o,o,o):n.scale.set(o.x??1,o.y??1,o.z??1),m()),i.$$.dirty&160&&l&&(n.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),m())},[h,M,r,a,o,l,c,n]}class K1 extends Ge{constructor(e){super(),Be(this,e,Z1,null,Ue,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}const bc=[],da=(i,e)=>{const t=bc.find(s=>s instanceof i);if(t)return t;const n=e();return bc.push(n),n},vc={type:"change"},Kr={type:"start"},xc={type:"end"};let J1=class extends gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",Zt),this._domElementKeyEvents=I},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vc),n.update(),r=s.NONE},this.update=function(){const I=new G,V=new mi().setFromUnitVectors(e.up,new G(0,1,0)),Te=V.clone().invert(),Ae=new G,we=new mi,De=2*Math.PI;return function(){const tt=n.object.position;I.copy(tt).sub(n.target),I.applyQuaternion(V),o.setFromVector3(I),n.autoRotate&&r===s.NONE&&T(A()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let nt=n.minAzimuthAngle,bt=n.maxAzimuthAngle;return isFinite(nt)&&isFinite(bt)&&(nt<-Math.PI?nt+=De:nt>Math.PI&&(nt-=De),bt<-Math.PI?bt+=De:bt>Math.PI&&(bt-=De),nt<=bt?o.theta=Math.max(nt,Math.min(bt,o.theta)):o.theta=o.theta>(nt+bt)/2?Math.max(nt,o.theta):Math.min(bt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),I.setFromSpherical(o),I.applyQuaternion(Te),tt.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||Ae.distanceToSquared(n.object.position)>a||8*(1-we.dot(n.object.quaternion))>a?(n.dispatchEvent(vc),Ae.copy(n.object.position),we.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",te),n.domElement.removeEventListener("pointerdown",zt),n.domElement.removeEventListener("pointercancel",Wt),n.domElement.removeEventListener("wheel",fn),n.domElement.removeEventListener("pointermove",Pt),n.domElement.removeEventListener("pointerup",Dt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Zt)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new uc,l=new uc;let c=1;const u=new G;let f=!1;const d=new He,h=new He,p=new He,m=new He,g=new He,v=new He,M=new He,b=new He,y=new He,_=[],S={};function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function T(I){l.theta-=I}function w(I){l.phi-=I}const k=function(){const I=new G;return function(Te,Ae){I.setFromMatrixColumn(Ae,0),I.multiplyScalar(-Te),u.add(I)}}(),j=function(){const I=new G;return function(Te,Ae){n.screenSpacePanning===!0?I.setFromMatrixColumn(Ae,1):(I.setFromMatrixColumn(Ae,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(Te),u.add(I)}}(),D=function(){const I=new G;return function(Te,Ae){const we=n.domElement;if(n.object.isPerspectiveCamera){const De=n.object.position;I.copy(De).sub(n.target);let Pe=I.length();Pe*=Math.tan(n.object.fov/2*Math.PI/180),k(2*Te*Pe/we.clientHeight,n.object.matrix),j(2*Ae*Pe/we.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(Te*(n.object.right-n.object.left)/n.object.zoom/we.clientWidth,n.object.matrix),j(Ae*(n.object.top-n.object.bottom)/n.object.zoom/we.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(I){n.object.isPerspectiveCamera?c/=I:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*I)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(I){n.object.isPerspectiveCamera?c*=I:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/I)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function se(I){d.set(I.clientX,I.clientY)}function $(I){M.set(I.clientX,I.clientY)}function Z(I){m.set(I.clientX,I.clientY)}function ce(I){h.set(I.clientX,I.clientY),p.subVectors(h,d).multiplyScalar(n.rotateSpeed);const V=n.domElement;T(2*Math.PI*p.x/V.clientHeight),w(2*Math.PI*p.y/V.clientHeight),d.copy(h),n.update()}function ue(I){b.set(I.clientX,I.clientY),y.subVectors(b,M),y.y>0?R(x()):y.y<0&&X(x()),M.copy(b),n.update()}function z(I){g.set(I.clientX,I.clientY),v.subVectors(g,m).multiplyScalar(n.panSpeed),D(v.x,v.y),m.copy(g),n.update()}function O(I){I.deltaY<0?X(x()):I.deltaY>0&&R(x()),n.update()}function de(I){let V=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),V=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),V=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),V=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),V=!0;break}V&&(I.preventDefault(),n.update())}function W(){if(_.length===1)d.set(_[0].pageX,_[0].pageY);else{const I=.5*(_[0].pageX+_[1].pageX),V=.5*(_[0].pageY+_[1].pageY);d.set(I,V)}}function ge(){if(_.length===1)m.set(_[0].pageX,_[0].pageY);else{const I=.5*(_[0].pageX+_[1].pageX),V=.5*(_[0].pageY+_[1].pageY);m.set(I,V)}}function U(){const I=_[0].pageX-_[1].pageX,V=_[0].pageY-_[1].pageY,Te=Math.sqrt(I*I+V*V);M.set(0,Te)}function Se(){n.enableZoom&&U(),n.enablePan&&ge()}function Le(){n.enableZoom&&U(),n.enableRotate&&W()}function Fe(I){if(_.length==1)h.set(I.pageX,I.pageY);else{const Te=Oe(I),Ae=.5*(I.pageX+Te.x),we=.5*(I.pageY+Te.y);h.set(Ae,we)}p.subVectors(h,d).multiplyScalar(n.rotateSpeed);const V=n.domElement;T(2*Math.PI*p.x/V.clientHeight),w(2*Math.PI*p.y/V.clientHeight),d.copy(h)}function K(I){if(_.length===1)g.set(I.pageX,I.pageY);else{const V=Oe(I),Te=.5*(I.pageX+V.x),Ae=.5*(I.pageY+V.y);g.set(Te,Ae)}v.subVectors(g,m).multiplyScalar(n.panSpeed),D(v.x,v.y),m.copy(g)}function je(I){const V=Oe(I),Te=I.pageX-V.x,Ae=I.pageY-V.y,we=Math.sqrt(Te*Te+Ae*Ae);b.set(0,we),y.set(0,Math.pow(b.y/M.y,n.zoomSpeed)),R(y.y),M.copy(b)}function We(I){n.enableZoom&&je(I),n.enablePan&&K(I)}function ze(I){n.enableZoom&&je(I),n.enableRotate&&Fe(I)}function zt(I){n.enabled!==!1&&(_.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",Pt),n.domElement.addEventListener("pointerup",Dt)),me(I),I.pointerType==="touch"?L(I):Tt(I))}function Pt(I){n.enabled!==!1&&(I.pointerType==="touch"?E(I):pt(I))}function Dt(I){pe(I),_.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",Pt),n.domElement.removeEventListener("pointerup",Dt)),n.dispatchEvent(xc),r=s.NONE}function Wt(I){pe(I)}function Tt(I){let V;switch(I.button){case 0:V=n.mouseButtons.LEFT;break;case 1:V=n.mouseButtons.MIDDLE;break;case 2:V=n.mouseButtons.RIGHT;break;default:V=-1}switch(V){case vi.DOLLY:if(n.enableZoom===!1)return;$(I),r=s.DOLLY;break;case vi.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;Z(I),r=s.PAN}else{if(n.enableRotate===!1)return;se(I),r=s.ROTATE}break;case vi.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;se(I),r=s.ROTATE}else{if(n.enablePan===!1)return;Z(I),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Kr)}function pt(I){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;ce(I);break;case s.DOLLY:if(n.enableZoom===!1)return;ue(I);break;case s.PAN:if(n.enablePan===!1)return;z(I);break}}function fn(I){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(I.preventDefault(),n.dispatchEvent(Kr),O(I),n.dispatchEvent(xc))}function Zt(I){n.enabled===!1||n.enablePan===!1||de(I)}function L(I){switch(Me(I),_.length){case 1:switch(n.touches.ONE){case xi.ROTATE:if(n.enableRotate===!1)return;W(),r=s.TOUCH_ROTATE;break;case xi.PAN:if(n.enablePan===!1)return;ge(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case xi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(),r=s.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Le(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Kr)}function E(I){switch(Me(I),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Fe(I),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;K(I),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;We(I),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ze(I),n.update();break;default:r=s.NONE}}function te(I){n.enabled!==!1&&I.preventDefault()}function me(I){_.push(I)}function pe(I){delete S[I.pointerId];for(let V=0;V<_.length;V++)if(_[V].pointerId==I.pointerId){_.splice(V,1);return}}function Me(I){let V=S[I.pointerId];V===void 0&&(V=new He,S[I.pointerId]=V),V.set(I.pageX,I.pageY)}function Oe(I){const V=I.pointerId===_[0].pointerId?_[1]:_[0];return S[V.pointerId]}n.domElement.addEventListener("contextmenu",te),n.domElement.addEventListener("pointerdown",zt),n.domElement.addEventListener("pointercancel",Wt),n.domElement.addEventListener("wheel",fn,{passive:!1}),this.update()}};function Q1(i){let e,t,n,s;return e=new ku({props:{dispose:i[2],object:i[0]}}),n=new K1({props:{object:i[4],position:i[1]}}),n.$on("transform",i[5]),{c(){ye(e.$$.fragment),t=be(),ye(n.$$.fragment)},m(r,a){ve(e,r,a),Q(r,t,a),ve(n,r,a),s=!0},p(r,a){const o={};a[0]&4&&(o.dispose=r[2]),a[0]&1&&(o.object=r[0]),e.$set(o);const l={};a[0]&2&&(l.position=r[1]),n.$set(l)},i(r){s||(F(e.$$.fragment,r),F(n.$$.fragment,r),s=!0)},o(r){B(e.$$.fragment,r),B(n.$$.fragment,r),s=!1},d(r){xe(e,r),r&&J(t),xe(n,r)}}}function $1(i,e,t){let n,{autoRotate:s=void 0}=e,{autoRotateSpeed:r=void 0}=e,{dampingFactor:a=void 0}=e,{enableDamping:o=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:f=void 0}=e,{keyPanSpeed:d=void 0}=e,{keys:h=void 0}=e,{maxAzimuthAngle:p=void 0}=e,{maxDistance:m=void 0}=e,{maxPolarAngle:g=void 0}=e,{maxZoom:v=void 0}=e,{minAzimuthAngle:M=void 0}=e,{minDistance:b=void 0}=e,{minPolarAngle:y=void 0}=e,{minZoom:_=void 0}=e,{mouseButtons:S=void 0}=e,{panSpeed:A=void 0}=e,{rotateSpeed:x=void 0}=e,{screenSpacePanning:T=void 0}=e,{touches:w=void 0}=e,{zoomSpeed:k=void 0}=e,{target:j=void 0}=e,{dispose:D=void 0}=e;const R=Ru();gt(i,R,U=>t(30,n=U));const{renderer:X,invalidate:se}=Zi();if(!X)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof wa))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const $=bn(),Z=()=>{se("Orbitcontrols: change event"),$("change")},ce=()=>$("start"),ue=()=>$("end"),z=new J1(n,X.domElement);En(n).orbitControls=z,z.addEventListener("change",Z),z.addEventListener("start",ce),z.addEventListener("end",ue),yt(()=>{n&&delete En(n).orbitControls,z.removeEventListener("change",Z),z.removeEventListener("start",ce),z.removeEventListener("end",ue)});const{start:O,stop:de}=Fu(()=>z.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),W=new wt,ge=()=>{t(0,z.target=W.position,z),z.update(),se("OrbitControls: target changed")};return i.$$set=U=>{"autoRotate"in U&&t(6,s=U.autoRotate),"autoRotateSpeed"in U&&t(7,r=U.autoRotateSpeed),"dampingFactor"in U&&t(8,a=U.dampingFactor),"enableDamping"in U&&t(9,o=U.enableDamping),"enabled"in U&&t(10,l=U.enabled),"enablePan"in U&&t(11,c=U.enablePan),"enableRotate"in U&&t(12,u=U.enableRotate),"enableZoom"in U&&t(13,f=U.enableZoom),"keyPanSpeed"in U&&t(14,d=U.keyPanSpeed),"keys"in U&&t(15,h=U.keys),"maxAzimuthAngle"in U&&t(16,p=U.maxAzimuthAngle),"maxDistance"in U&&t(17,m=U.maxDistance),"maxPolarAngle"in U&&t(18,g=U.maxPolarAngle),"maxZoom"in U&&t(19,v=U.maxZoom),"minAzimuthAngle"in U&&t(20,M=U.minAzimuthAngle),"minDistance"in U&&t(21,b=U.minDistance),"minPolarAngle"in U&&t(22,y=U.minPolarAngle),"minZoom"in U&&t(23,_=U.minZoom),"mouseButtons"in U&&t(24,S=U.mouseButtons),"panSpeed"in U&&t(25,A=U.panSpeed),"rotateSpeed"in U&&t(26,x=U.rotateSpeed),"screenSpacePanning"in U&&t(27,T=U.screenSpacePanning),"touches"in U&&t(28,w=U.touches),"zoomSpeed"in U&&t(29,k=U.zoomSpeed),"target"in U&&t(1,j=U.target),"dispose"in U&&t(2,D=U.dispose)},i.$$.update=()=>{i.$$.dirty[0]&1073741761&&(s!==void 0&&t(0,z.autoRotate=s,z),r!==void 0&&t(0,z.autoRotateSpeed=r,z),a!==void 0&&t(0,z.dampingFactor=a,z),o!==void 0&&t(0,z.enableDamping=o,z),l!==void 0&&t(0,z.enabled=l,z),c!==void 0&&t(0,z.enablePan=c,z),u!==void 0&&t(0,z.enableRotate=u,z),f!==void 0&&t(0,z.enableZoom=f,z),d!==void 0&&t(0,z.keyPanSpeed=d,z),h!==void 0&&t(0,z.keys=h,z),p!==void 0&&t(0,z.maxAzimuthAngle=p,z),m!==void 0&&t(0,z.maxDistance=m,z),g!==void 0&&t(0,z.maxPolarAngle=g,z),v!==void 0&&t(0,z.maxZoom=v,z),M!==void 0&&t(0,z.minAzimuthAngle=M,z),b!==void 0&&t(0,z.minDistance=b,z),y!==void 0&&t(0,z.minPolarAngle=y,z),_!==void 0&&t(0,z.minZoom=_,z),S!==void 0&&t(0,z.mouseButtons=S,z),A!==void 0&&t(0,z.panSpeed=A,z),x!==void 0&&t(0,z.rotateSpeed=x,z),T!==void 0&&t(0,z.screenSpacePanning=T,z),w!==void 0&&t(0,z.touches=w,z),k!==void 0&&t(0,z.zoomSpeed=k,z),z.update(),se("OrbitControls: props changed")),i.$$.dirty[0]&576&&(s||o?O():de())},[z,j,D,R,W,ge,s,r,a,o,l,c,u,f,d,h,p,m,g,v,M,b,y,_,S,A,x,T,w,k]}class ev extends Ge{constructor(e){super(),Be(this,e,$1,Q1,Ue,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const zu=new wt;zu.scale.set(0,0,0);zu.matrix;new St().fromArray(new Array(16).fill(0));new at(16777215);const Ou=(i,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let s=0;s<t.length;s+=1)i=i[t[s]];return{target:i,key:n}}else return{target:i,key:e}},Jr=Symbol("initialValueBeforeAttach"),tv=()=>{const{invalidate:i}=Zi();let e=!1,t=Jr,n,s,r;const a=(l,c,u)=>{if(o(),!u){const f=l;((f==null?void 0:f.isMaterial)||!1)&&(u="material"),((f==null?void 0:f.isBufferGeometry)||(f==null?void 0:f.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(c,l);else{const{target:f,key:d}=Ou(c,u);t=f[d],f[d]=l,s=f,r=d}e=!0,i()}},o=()=>{e&&(n?(n(),n=void 0):s&&r&&t!==Jr&&(s[r]=t,t=Jr,s=void 0,r=void 0),e=!1,i())};return yt(()=>{o()}),{update:a}},nv=i=>i&&i.isCamera,Nu=i=>i&&i.isOrthographicCamera,Uu=i=>i&&i.isPerspectiveCamera,iv=i=>Uu(i)||Nu(i),sv=()=>{const{invalidate:i,size:e}=Zi(),{setCamera:t}=W1();let n,s;yt(()=>{s==null||s()});const r=l=>{n&&(Nu(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),i()):Uu(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),i()))};return{update:(l,c)=>{if(s==null||s(),c||!iv(l)){n=void 0;return}n=l,s=e.subscribe(r)},makeDefaultCamera:(l,c)=>{!nv(l)||!c||(t(l),i())}}},Mc=i=>!!(i!=null&&i.addEventListener),rv=()=>{const i=bn(),e=Zn(),t=d=>{d!=null&&d.type&&i(d.type,d)},n=(d,h)=>{Mc(d)&&h.forEach(p=>{d.removeEventListener(p,t)})},s=(d,h)=>{Mc(d)&&h.forEach(p=>{d.addEventListener(p,t)})};let r=[],a;const o=ht([]),l=o.subscribe(d=>{n(a,r),s(a,d),r=d});yt(l);const c=ht(),u=c.subscribe(d=>{n(a,r),s(d,r),a=d});return yt(u),yt(()=>{n(a,r)}),Xi(()=>{o.set(Object.keys(e.$$.callbacks))}),{updateRef:d=>{c.set(d)}}},av=["$$scope","$$slots","type","args","attach","instance"],ov=["fov","aspect","near","far","left","right","top","bottom","zoom"],lv=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean"||typeof i>"u"||i===null,cv=()=>{const{invalidate:i}=Zi(),e=new Map,t=(s,r,a,o)=>{var u,f;if(lv(a)){const d=e.get(r);if(d&&d.instance===s&&d.value===a)return;e.set(r,{instance:s,value:a})}const{key:l,target:c}=Ou(s,r);if(!Array.isArray(a)&&typeof a=="number"&&typeof((u=c[l])==null?void 0:u.setScalar)=="function")c[l].setScalar(a);else if(typeof((f=c[l])==null?void 0:f.set)=="function")Array.isArray(a)?c[l].set(...a):c[l].set(a);else{if(c[l]=a,o.manualCamera)return;ov.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(s,r,a)=>{for(const o in r)av.includes(o)||t(s,o,r[o],a),i()}}},uv=i=>({ref:i&1}),yc=i=>({ref:i[0]}),fv=i=>({ref:i&1}),Sc=i=>({ref:i[0]});function wc(i){let e,t;return e=new ku({props:{object:i[0],dispose:i[1]}}),{c(){ye(e.$$.fragment)},m(n,s){ve(e,n,s),t=!0},p(n,s){const r={};s&1&&(r.object=n[0]),s&2&&(r.dispose=n[1]),e.$set(r)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){B(e.$$.fragment,n),t=!1},d(n){xe(e,n)}}}function dv(i){let e;const t=i[12].default,n=ot(t,i,i[13],yc);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&8193)&&ct(n,t,s,s[13],e?lt(t,s[13],r,uv):ut(s[13]),yc)},i(s){e||(F(n,s),e=!0)},o(s){B(n,s),e=!1},d(s){n&&n.d(s)}}}function hv(i){let e,t;return e=new Iu({props:{object:i[0],$$slots:{default:[mv]},$$scope:{ctx:i}}}),{c(){ye(e.$$.fragment)},m(n,s){ve(e,n,s),t=!0},p(n,s){const r={};s&1&&(r.object=n[0]),s&8193&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){B(e.$$.fragment,n),t=!1},d(n){xe(e,n)}}}function mv(i){let e;const t=i[12].default,n=ot(t,i,i[13],Sc);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&8193)&&ct(n,t,s,s[13],e?lt(t,s[13],r,fv):ut(s[13]),Sc)},i(s){e||(F(n,s),e=!0)},o(s){B(n,s),e=!1},d(s){n&&n.d(s)}}}function pv(i){let e=i[4](i[0]),t,n,s,r,a,o,l=e&&wc(i);const c=[hv,dv],u=[];function f(d,h){return h&1&&(n=null),n==null&&(n=!!d[3](d[0])),n?0:1}return s=f(i,-1),r=u[s]=c[s](i),{c(){l&&l.c(),t=be(),r.c(),a=Lt()},m(d,h){l&&l.m(d,h),Q(d,t,h),u[s].m(d,h),Q(d,a,h),o=!0},p(d,[h]){h&1&&(e=d[4](d[0])),e?l?(l.p(d,h),h&1&&F(l,1)):(l=wc(d),l.c(),F(l,1),l.m(t.parentNode,t)):l&&($e(),B(l,1,1,()=>{l=null}),et());let p=s;s=f(d,h),s===p?u[s].p(d,h):($e(),B(u[p],1,1,()=>{u[p]=null}),et(),r=u[s],r?r.p(d,h):(r=u[s]=c[s](d),r.c()),F(r,1),r.m(a.parentNode,a))},i(d){o||(F(l),F(r),o=!0)},o(d){B(l),B(r),o=!1},d(d){l&&l.d(d),d&&J(t),u[s].d(d),d&&J(a)}}}function gv(i,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let s=Ce(e,n),r,{$$slots:a={},$$scope:o}=e,{type:l}=e,{args:c=void 0}=e,{attach:u=void 0}=e,{manual:f=void 0}=e,{makeDefault:d=void 0}=e,{dispose:h=void 0}=e;const p=en("threlte-hierarchical-parent-context");gt(i,p,w=>t(11,r=w));const m=w=>typeof w=="function"&&/^\s*class\s+/.test(w.toString()),g=w=>Array.isArray(w);let{ref:v=m(l)&&g(c)?new l(...c):m(l)?new l:l}=e,M=!1;const b=ht(v);Jt("threlte-hierarchical-parent-context",b);const y=cv(),_=sv(),S=tv(),A=rv(),x=w=>!!w.isObject3D,T=w=>w.dispose!==void 0;return i.$$set=w=>{e=ae(ae({},e),qe(w)),t(21,s=Ce(e,n)),"type"in w&&t(5,l=w.type),"args"in w&&t(6,c=w.args),"attach"in w&&t(7,u=w.attach),"manual"in w&&t(8,f=w.manual),"makeDefault"in w&&t(9,d=w.makeDefault),"dispose"in w&&t(1,h=w.dispose),"ref"in w&&t(0,v=w.ref),"$$scope"in w&&t(13,o=w.$$scope)},i.$$.update=()=>{i.$$.dirty&1120&&(M?t(0,v=m(l)&&g(c)?new l(...c):m(l)?new l:l):t(10,M=!0)),i.$$.dirty&1&&b.set(v),y.updateProps(v,s,{manualCamera:f}),i.$$.dirty&257&&_.update(v,f),i.$$.dirty&513&&_.makeDefaultCamera(v,d),i.$$.dirty&2177&&S.update(v,r,u),i.$$.dirty&1&&A.updateRef(v)},[v,h,p,x,T,l,c,u,f,d,M,r,a,o]}class ci extends Ge{constructor(e){super(),Be(this,e,gv,pv,Ue,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function _v(i){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class Tc extends Ge{constructor(e){super(),Be(this,e,_v,null,Ue,{})}}new Proxy(Tc,{get(i,e){return i[e]||Tc}});da(sc,()=>new sc(Tu));const Oi=ht({}),Qr=ht(0),Xs=ht(0),cs=ht({}),fs=ht({});function Bu(i){let e=[],t=[],n=[],s=[],r=[],a=[];for(const p in i){let m=i[p];e.push(m.boundingBox.max.x),t.push(m.boundingBox.max.y),n.push(m.boundingBox.max.z),s.push(m.boundingBox.min.x),r.push(m.boundingBox.min.y),a.push(m.boundingBox.min.z)}let o=Math.max(...e),l=Math.max(...t),c=Math.max(...n),u=Math.min(...s),f=Math.min(...r),d=Math.min(...a);return{min:{x:u,y:f,z:d},max:{x:o,y:l,z:c}}}function Ec(i){let e=Bu(i),t=.5*(e.max.x+e.min.x),n=.5*(e.max.y+e.min.y),s=.5*(e.max.z+e.min.z);return{x:t,y:n,z:s}}function Ac(i){let e=[0,0,0];if(Object.entries(i).length>0){let t=Bu(i),n=0*(t.max.x+t.min.x),s=.5*(t.max.y+t.min.y),r=t.max.x-t.min.x,a=t.max.y-t.min.y,o=t.max.z-t.min.z,l=4*Math.max(r,a,o);e=[n,s,l]}return e}function ir(i,e){let t="#808080";return e[i]&&(t=e[i]),t}function Cc(i,e,t){const n=i.slice();return n[3]=e[t][0],n[4]=e[t][1],n}function bv(i){let e,t;return e=new ev({props:{enableZoom:!0,target:Ec(i[0])}}),{c(){ye(e.$$.fragment)},m(n,s){ve(e,n,s),t=!0},p(n,s){const r={};s&1&&(r.target=Ec(n[0])),e.$set(r)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){B(e.$$.fragment,n),t=!1},d(n){xe(e,n)}}}function Lc(i){let e,t;return e=new ci({props:{type:gn,"position.x":.5,"position.y":.5,castShadow:!0,$$slots:{default:[vv,({ref:n})=>({7:n}),({ref:n})=>n?128:0]},$$scope:{ctx:i}}}),{c(){ye(e.$$.fragment)},m(n,s){ve(e,n,s),t=!0},p(n,s){const r={};s&261&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){B(e.$$.fragment,n),t=!1},d(n){xe(e,n)}}}function vv(i){let e,t,n,s,r;return e=new ci({props:{type:i[4]}}),n=new ci({props:{type:n1,color:ir(i[3],i[2])}}),{c(){ye(e.$$.fragment),t=be(),ye(n.$$.fragment),s=be()},m(a,o){ve(e,a,o),Q(a,t,o),ve(n,a,o),Q(a,s,o),r=!0},p(a,o){const l={};o&1&&(l.type=a[4]),e.$set(l);const c={};o&5&&(c.color=ir(a[3],a[2])),n.$set(c)},i(a){r||(F(e.$$.fragment,a),F(n.$$.fragment,a),r=!0)},o(a){B(e.$$.fragment,a),B(n.$$.fragment,a),r=!1},d(a){xe(e,a),a&&J(t),xe(n,a),a&&J(s)}}}function Pc(i){let e,t,n=i[1][i[3]]&&Lc(i);return{c(){n&&n.c(),e=Lt()},m(s,r){n&&n.m(s,r),Q(s,e,r),t=!0},p(s,r){s[1][s[3]]?n?(n.p(s,r),r&3&&F(n,1)):(n=Lc(s),n.c(),F(n,1),n.m(e.parentNode,e)):n&&($e(),B(n,1,1,()=>{n=null}),et())},i(s){t||(F(n),t=!0)},o(s){B(n),t=!1},d(s){n&&n.d(s),s&&J(e)}}}function xv(i){let e,t,n,s,r,a,o,l,c,u;e=new ci({props:{type:ln,makeDefault:!0,position:Ac(i[0]),fov:50,$$slots:{default:[bv]},$$scope:{ctx:i}}}),n=new ci({props:{type:oc,castShadow:!0,position:[3,10,10]}}),r=new ci({props:{type:oc,position:[-3,10,-10],intensity:.2}}),o=new ci({props:{type:c1,intensity:.2}});let f=Object.entries(i[0]),d=[];for(let p=0;p<f.length;p+=1)d[p]=Pc(Cc(i,f,p));const h=p=>B(d[p],1,1,()=>{d[p]=null});return{c(){ye(e.$$.fragment),t=be(),ye(n.$$.fragment),s=be(),ye(r.$$.fragment),a=be(),ye(o.$$.fragment),l=be();for(let p=0;p<d.length;p+=1)d[p].c();c=Lt()},m(p,m){ve(e,p,m),Q(p,t,m),ve(n,p,m),Q(p,s,m),ve(r,p,m),Q(p,a,m),ve(o,p,m),Q(p,l,m);for(let g=0;g<d.length;g+=1)d[g].m(p,m);Q(p,c,m),u=!0},p(p,m){const g={};if(m&1&&(g.position=Ac(p[0])),m&257&&(g.$$scope={dirty:m,ctx:p}),e.$set(g),m&7){f=Object.entries(p[0]);let v;for(v=0;v<f.length;v+=1){const M=Cc(p,f,v);d[v]?(d[v].p(M,m),F(d[v],1)):(d[v]=Pc(M),d[v].c(),F(d[v],1),d[v].m(c.parentNode,c))}for($e(),v=f.length;v<d.length;v+=1)h(v);et()}},i(p){if(!u){F(e.$$.fragment,p),F(n.$$.fragment,p),F(r.$$.fragment,p),F(o.$$.fragment,p);for(let m=0;m<f.length;m+=1)F(d[m]);u=!0}},o(p){B(e.$$.fragment,p),B(n.$$.fragment,p),B(r.$$.fragment,p),B(o.$$.fragment,p),d=d.filter(Boolean);for(let m=0;m<d.length;m+=1)B(d[m]);u=!1},d(p){xe(e,p),p&&J(t),xe(n,p),p&&J(s),xe(r,p),p&&J(a),xe(o,p),p&&J(l),_s(d,p),p&&J(c)}}}function Mv(i){let e,t,n;return t=new H1({props:{$$slots:{default:[xv]},$$scope:{ctx:i}}}),{c(){e=le("div"),ye(t.$$.fragment),ee(e,"class","viewer svelte-iyns3y")},m(s,r){Q(s,e,r),ve(t,e,null),n=!0},p(s,[r]){const a={};r&263&&(a.$$scope={dirty:r,ctx:s}),t.$set(a)},i(s){n||(F(t.$$.fragment,s),n=!0)},o(s){B(t.$$.fragment,s),n=!1},d(s){s&&J(e),xe(t)}}}function yv(i,e,t){let n,s,r;return gt(i,Oi,a=>t(0,n=a)),gt(i,cs,a=>t(1,s=a)),gt(i,fs,a=>t(2,r=a)),[n,s,r]}class Sv extends Ge{constructor(e){super(),Be(this,e,yv,Mv,Ue,{})}}class Dc extends Ss{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Eu(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){function t(c){const u=new DataView(c),f=32/8*3+32/8*3*3+16/8,d=u.getUint32(80,!0);if(80+32/8+d*f===u.byteLength)return!0;const p=[115,111,108,105,100];for(let m=0;m<5;m++)if(n(p,u,m))return!1;return!0}function n(c,u,f){for(let d=0,h=c.length;d<h;d++)if(c[d]!==u.getUint8(f+d))return!1;return!0}function s(c){const u=new DataView(c),f=u.getUint32(80,!0);let d,h,p,m=!1,g,v,M,b,y;for(let w=0;w<80-10;w++)u.getUint32(w,!1)==1129270351&&u.getUint8(w+4)==82&&u.getUint8(w+5)==61&&(m=!0,g=new Float32Array(f*3*3),v=u.getUint8(w+6)/255,M=u.getUint8(w+7)/255,b=u.getUint8(w+8)/255,y=u.getUint8(w+9)/255);const _=84,S=12*4+2,A=new tn,x=new Float32Array(f*3*3),T=new Float32Array(f*3*3);for(let w=0;w<f;w++){const k=_+w*S,j=u.getFloat32(k,!0),D=u.getFloat32(k+4,!0),R=u.getFloat32(k+8,!0);if(m){const X=u.getUint16(k+48,!0);X&32768?(d=v,h=M,p=b):(d=(X&31)/31,h=(X>>5&31)/31,p=(X>>10&31)/31)}for(let X=1;X<=3;X++){const se=k+X*12,$=w*3*3+(X-1)*3;x[$]=u.getFloat32(se,!0),x[$+1]=u.getFloat32(se+4,!0),x[$+2]=u.getFloat32(se+8,!0),T[$]=j,T[$+1]=D,T[$+2]=R,m&&(g[$]=d,g[$+1]=h,g[$+2]=p)}}return A.setAttribute("position",new un(x,3)),A.setAttribute("normal",new un(T,3)),m&&(A.setAttribute("color",new un(g,3)),A.hasColors=!0,A.alpha=y),A}function r(c){const u=new tn,f=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g;let h=0;const p=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+p+p+p,"g"),g=new RegExp("normal"+p+p+p,"g"),v=[],M=[],b=new G;let y,_=0,S=0,A=0;for(;(y=f.exec(c))!==null;){S=A;const x=y[0];for(;(y=d.exec(x))!==null;){let k=0,j=0;const D=y[0];for(;(y=g.exec(D))!==null;)b.x=parseFloat(y[1]),b.y=parseFloat(y[2]),b.z=parseFloat(y[3]),j++;for(;(y=m.exec(D))!==null;)v.push(parseFloat(y[1]),parseFloat(y[2]),parseFloat(y[3])),M.push(b.x,b.y,b.z),k++,A++;j!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+h),k!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+h),h++}const T=S,w=A-S;u.addGroup(T,w,_),_++}return u.setAttribute("position",new It(v,3)),u.setAttribute("normal",new It(M,3)),u}function a(c){return typeof c!="string"?u1.decodeText(new Uint8Array(c)):c}function o(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let f=0;f<c.length;f++)u[f]=c.charCodeAt(f)&255;return u.buffer||u}else return c}const l=o(e);return t(l)?s(l):r(a(e))}}const wv=/^[og]\s*(.+)?/,Tv=/^mtllib /,Ev=/^usemtl /,Av=/^usemap /,Rc=/\s+/,Ic=new G,$r=new G,kc=new G,Fc=new G,mn=new G,Ys=new at;function Cv(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;Ic.fromArray(s,e),$r.fromArray(s,t),kc.fromArray(s,n),mn.subVectors(kc,$r),Fc.subVectors(Ic,$r),mn.cross(Fc),mn.normalize(),r.push(mn.x,mn.y,mn.z),r.push(mn.x,mn.y,mn.z),r.push(mn.x,mn.y,mn.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,a,o,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),h=this.parseVertexIndex(n,u);if(this.addVertex(f,d,h),this.addColor(f,d,h),o!==void 0&&o!==""){const p=this.normals.length;f=this.parseNormalIndex(o,p),d=this.parseNormalIndex(l,p),h=this.parseNormalIndex(c,p),this.addNormal(f,d,h)}else this.addFaceNormal(f,d,h);if(s!==void 0&&s!==""){const p=this.uvs.length;f=this.parseUVIndex(s,p),d=this.parseUVIndex(r,p),h=this.parseUVIndex(a,p),this.addUV(f,d,h),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class zc extends Ss{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,a=new Eu(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Cv;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let o=0,l=n.length;o<l;o++){const c=n[o].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const f=c.split(Rc);switch(f[0]){case"v":t.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(Ys.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])).convertSRGBToLinear(),t.colors.push(Ys.r,Ys.g,Ys.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":t.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const d=c.slice(1).trim().split(Rc),h=[];for(let m=0,g=d.length;m<g;m++){const v=d[m];if(v.length>0){const M=v.split("/");h.push(M)}}const p=h[0];for(let m=1,g=h.length-1;m<g;m++){const v=h[m],M=h[m+1];t.addFace(p[0],v[0],M[0],p[1],v[1],M[1],p[2],v[2],M[2])}}else if(u==="l"){const f=c.substring(1).trim().split(" ");let d=[];const h=[];if(c.indexOf("/")===-1)d=f;else for(let p=0,m=f.length;p<m;p++){const g=f[p].split("/");g[0]!==""&&d.push(g[0]),g[1]!==""&&h.push(g[1])}t.addLineGeometry(d,h)}else if(u==="p"){const d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((s=wv.exec(c))!==null){const f=(" "+s[0].slice(1).trim()).slice(1);t.startObject(f)}else if(Ev.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(Tv.test(c))t.materialLibraries.push(c.substring(7).trim());else if(Av.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=c.split(" "),s.length>1){const d=s[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const f=t.object.currentMaterial();f&&(f.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new os;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){const c=t.objects[o],u=c.geometry,f=c.materials,d=u.type==="Line",h=u.type==="Points";let p=!1;if(u.vertices.length===0)continue;const m=new tn;m.setAttribute("position",new It(u.vertices,3)),u.normals.length>0&&m.setAttribute("normal",new It(u.normals,3)),u.colors.length>0&&(p=!0,m.setAttribute("color",new It(u.colors,3))),u.hasUVIndices===!0&&m.setAttribute("uv",new It(u.uvs,2));const g=[];for(let M=0,b=f.length;M<b;M++){const y=f[M],_=y.name+"_"+y.smooth+"_"+p;let S=t.materials[_];if(this.materials!==null){if(S=this.materials.create(y.name),d&&S&&!(S instanceof $s)){const A=new $s;Cn.prototype.copy.call(A,S),A.color.copy(S.color),S=A}else if(h&&S&&!(S instanceof ls)){const A=new ls({size:10,sizeAttenuation:!1});Cn.prototype.copy.call(A,S),A.color.copy(S.color),A.map=S.map,S=A}}S===void 0&&(d?S=new $s:h?S=new ls({size:1,sizeAttenuation:!1}):S=new i1,S.name=y.name,S.flatShading=!y.smooth,S.vertexColors=p,t.materials[_]=S),g.push(S)}let v;if(g.length>1){for(let M=0,b=f.length;M<b;M++){const y=f[M];m.addGroup(y.groupStart,y.groupCount,M)}d?v=new tc(m,g):h?v=new Yr(m,g):v=new gn(m,g)}else d?v=new tc(m,g[0]):h?v=new Yr(m,g[0]):v=new gn(m,g[0]);v.name=c.name,r.add(v)}else if(t.vertices.length>0){const o=new ls({size:1,sizeAttenuation:!1}),l=new tn;l.setAttribute("position",new It(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new It(t.colors,3)),o.vertexColors=!0);const c=new Yr(l,o);r.add(c)}return r}}function Oc(i,e,t){const n=i.slice();return n[9]=e[t].name,n[25]=e,n[26]=t,n}function Nc(i){let e,t,n=i[9]+"",s,r,a,o,l,c,u,f,d,h,p,m,g;o=new Jc({props:{iconDescription:i[8],status:""}});function v(b){i[21](b,i[9])}let M={};return i[10][i[9]]!==void 0&&(M.checked=i[10][i[9]]),h=new Zf({props:M}),Mt.push(()=>Bn(h,"checked",v)),{c(){e=le("span"),t=le("p"),s=Ne(n),r=be(),a=le("span"),ye(o.$$.fragment),l=be(),c=le("div"),u=le("span"),f=be(),d=le("div"),ye(h.$$.fragment),m=be(),P(t,"bx--file-filename",!0),ee(u,"class","dot svelte-lc8jip"),er(u,"background-color",ir(i[9],i[11])),ee(c,"class","padded svelte-lc8jip"),ee(d,"class","padded svelte-lc8jip"),P(a,"bx--file__state-container",!0),P(e,"bx--file__selected-file",!0)},m(b,y){Q(b,e,y),Y(e,t),Y(t,s),Y(e,r),Y(e,a),ve(o,a,null),Y(a,l),Y(a,c),Y(c,u),Y(a,f),Y(a,d),ve(h,d,null),Y(e,m),g=!0},p(b,y){i=b,(!g||y&1)&&n!==(n=i[9]+"")&&Ke(s,n);const _={};y&256&&(_.iconDescription=i[8]),o.$set(_),y&2049&&er(u,"background-color",ir(i[9],i[11]));const S={};!p&&y&1025&&(p=!0,S.checked=i[10][i[9]],Un(()=>p=!1)),h.$set(S)},i(b){g||(F(o.$$.fragment,b),F(h.$$.fragment,b),g=!0)},o(b){B(o.$$.fragment,b),B(h.$$.fragment,b),g=!1},d(b){b&&J(e),xe(o),xe(h)}}}function Lv(i){let e,t,n,s,r,a,o,l,c,u,f,d,h;l=new Qc({props:{disabled:i[1],disableLabelChanges:!0,labelText:i[7],accept:i[2],name:i[9],multiple:i[3],kind:i[6]}}),l.$on("change",i[20]);let p=i[0],m=[];for(let b=0;b<p.length;b+=1)m[b]=Nc(Oc(i,p,b));const g=b=>B(m[b],1,1,()=>{m[b]=null});let v=[i[13]],M={};for(let b=0;b<v.length;b+=1)M=ae(M,v[b]);return{c(){e=le("div"),t=le("p"),n=Ne(i[5]),s=be(),r=le("p"),a=Ne(i[4]),o=be(),ye(l.$$.fragment),c=be(),u=le("div");for(let b=0;b<m.length;b+=1)m[b].c();P(t,"bx--file--label",!0),P(t,"bx--label-description--disabled",i[1]),P(r,"bx--label-description",!0),P(r,"bx--label-description--disabled",i[1]),P(u,"bx--file-container",!0),Ie(e,M),P(e,"bx--form-item",!0),P(e,"svelte-lc8jip",!0)},m(b,y){Q(b,e,y),Y(e,t),Y(t,n),Y(e,s),Y(e,r),Y(r,a),Y(e,o),ve(l,e,null),Y(e,c),Y(e,u);for(let _=0;_<m.length;_+=1)m[_].m(u,null);f=!0,d||(h=[oe(e,"click",i[16]),oe(e,"mouseover",i[17]),oe(e,"mouseenter",i[18]),oe(e,"mouseleave",i[19])],d=!0)},p(b,[y]){(!f||y&32)&&Ke(n,b[5]),(!f||y&2)&&P(t,"bx--label-description--disabled",b[1]),(!f||y&16)&&Ke(a,b[4]),(!f||y&2)&&P(r,"bx--label-description--disabled",b[1]);const _={};if(y&2&&(_.disabled=b[1]),y&128&&(_.labelText=b[7]),y&4&&(_.accept=b[2]),y&512&&(_.name=b[9]),y&8&&(_.multiple=b[3]),y&64&&(_.kind=b[6]),l.$set(_),y&3329){p=b[0];let S;for(S=0;S<p.length;S+=1){const A=Oc(b,p,S);m[S]?(m[S].p(A,y),F(m[S],1)):(m[S]=Nc(A),m[S].c(),F(m[S],1),m[S].m(u,null))}for($e(),S=p.length;S<m.length;S+=1)g(S);et()}Ie(e,M=Xe(v,[y&8192&&b[13]])),P(e,"bx--form-item",!0),P(e,"svelte-lc8jip",!0)},i(b){if(!f){F(l.$$.fragment,b);for(let y=0;y<p.length;y+=1)F(m[y]);f=!0}},o(b){B(l.$$.fragment,b),m=m.filter(Boolean);for(let y=0;y<m.length;y+=1)B(m[y]);f=!1},d(b){b&&J(e),xe(l),_s(m,b),d=!1,_t(h)}}}function Pv(i,e,t){const n=["status","disabled","accept","files","multiple","clearFiles","labelDescription","labelTitle","kind","buttonLabel","iconDescription","name"];let s=Ce(e,n),r,a;gt(i,cs,D=>t(10,r=D)),gt(i,fs,D=>t(11,a=D));let{status:o="uploading"}=e,{disabled:l=!1}=e,{accept:c=[]}=e,{files:u=[]}=e,{multiple:f=!1}=e;const d=()=>{t(0,u=[])};let{labelDescription:h=""}=e,{labelTitle:p=""}=e,{kind:m="primary"}=e,{buttonLabel:g=""}=e,{iconDescription:v="Provide icon description"}=e,{name:M=""}=e;const b=bn();let y=[];const _=D=>D.lastModified+D.name;sr(()=>{const D=u.map(_),R=y.map(_),X=D.filter($=>!R.includes($)),se=R.filter($=>!D.includes($));X.length>0&&b("add",X.map($=>u.find(Z=>$===_(Z)))),se.length>0&&b("remove",se.map($=>y.find(Z=>$===_(Z)))),y=[...u]});function S(D){t(0,u=D.detail),Gt(cs,r={},r);for(const R of u)Gt(cs,r[R.name]=!0,r)}function A(D){fe.call(this,i,D)}function x(D){fe.call(this,i,D)}function T(D){fe.call(this,i,D)}function w(D){fe.call(this,i,D)}const k=D=>{S(D)};function j(D,R){i.$$.not_equal(r[R],D)&&(r[R]=D,cs.set(r))}return i.$$set=D=>{e=ae(ae({},e),qe(D)),t(13,s=Ce(e,n)),"status"in D&&t(14,o=D.status),"disabled"in D&&t(1,l=D.disabled),"accept"in D&&t(2,c=D.accept),"files"in D&&t(0,u=D.files),"multiple"in D&&t(3,f=D.multiple),"labelDescription"in D&&t(4,h=D.labelDescription),"labelTitle"in D&&t(5,p=D.labelTitle),"kind"in D&&t(6,m=D.kind),"buttonLabel"in D&&t(7,g=D.buttonLabel),"iconDescription"in D&&t(8,v=D.iconDescription),"name"in D&&t(9,M=D.name)},[u,l,c,f,h,p,m,g,v,M,r,a,S,s,o,d,A,x,T,w,k,j]}class Dv extends Ge{constructor(e){super(),Be(this,e,Pv,Lv,Ue,{status:14,disabled:1,accept:2,files:0,multiple:3,clearFiles:15,labelDescription:4,labelTitle:5,kind:6,buttonLabel:7,iconDescription:8,name:9})}get clearFiles(){return this.$$.ctx[15]}}function Uc(i){let e,t,n,s;return n=new Zc({props:{kind:"tertiary",$$slots:{default:[Rv]},$$scope:{ctx:i}}}),n.$on("click",function(){qi(i[0].clearFiles)&&i[0].clearFiles.apply(this,arguments)}),{c(){e=le("br"),t=be(),ye(n.$$.fragment)},m(r,a){Q(r,e,a),Q(r,t,a),ve(n,r,a),s=!0},p(r,a){i=r;const o={};a&262144&&(o.$$scope={dirty:a,ctx:i}),n.$set(o)},i(r){s||(F(n.$$.fragment,r),s=!0)},o(r){B(n.$$.fragment,r),s=!1},d(r){r&&J(e),r&&J(t),xe(n,r)}}}function Rv(i){let e;return{c(){e=Ne("Clear Mesh Files")},m(t,n){Q(t,e,n)},d(t){t&&J(e)}}}function Iv(i){let e,t,n,s,r,a,o;function l(f){i[11](f)}let c={multiple:!0,labelTitle:".stl",buttonLabel:"Load",accept:[".stl"],status:"complete"};i[2]!==void 0&&(c.files=i[2]),n=new Dv({props:c}),i[10](n),Mt.push(()=>Bn(n,"files",l)),n.$on("add",i[6]),n.$on("remove",i[7]);let u=i[2]&&i[2].length!==0&&Uc(i);return{c(){e=le("br"),t=be(),ye(n.$$.fragment),r=be(),u&&u.c(),a=Lt()},m(f,d){Q(f,e,d),Q(f,t,d),ve(n,f,d),Q(f,r,d),u&&u.m(f,d),Q(f,a,d),o=!0},p(f,d){const h={};!s&&d&4&&(s=!0,h.files=f[2],Un(()=>s=!1)),n.$set(h),f[2]&&f[2].length!==0?u?(u.p(f,d),d&4&&F(u,1)):(u=Uc(f),u.c(),F(u,1),u.m(a.parentNode,a)):u&&($e(),B(u,1,1,()=>{u=null}),et())},i(f){o||(F(n.$$.fragment,f),F(u),o=!0)},o(f){B(n.$$.fragment,f),B(u),o=!1},d(f){f&&J(e),f&&J(t),i[10](null),xe(n,f),f&&J(r),u&&u.d(f),f&&J(a)}}}function Bc(i){let e,t,n,s;return n=new Zc({props:{kind:"tertiary",$$slots:{default:[kv]},$$scope:{ctx:i}}}),n.$on("click",function(){qi(i[1].clearFiles)&&i[1].clearFiles.apply(this,arguments)}),{c(){e=le("br"),t=be(),ye(n.$$.fragment)},m(r,a){Q(r,e,a),Q(r,t,a),ve(n,r,a),s=!0},p(r,a){i=r;const o={};a&262144&&(o.$$scope={dirty:a,ctx:i}),n.$set(o)},i(r){s||(F(n.$$.fragment,r),s=!0)},o(r){B(n.$$.fragment,r),s=!1},d(r){r&&J(e),r&&J(t),xe(n,r)}}}function kv(i){let e;return{c(){e=Ne("Clear File")},m(t,n){Q(t,e,n)},d(t){t&&J(e)}}}function Fv(i){let e,t,n,s,r,a,o;function l(f){i[13](f)}let c={labelTitle:".json",buttonLabel:"Load",accept:[".json"],status:"complete"};i[3]!==void 0&&(c.files=i[3]),n=new Od({props:c}),i[12](n),Mt.push(()=>Bn(n,"files",l)),n.$on("add",i[8]),n.$on("remove",i[9]);let u=i[3]&&i[3].length!==0&&Bc(i);return{c(){e=le("br"),t=be(),ye(n.$$.fragment),r=be(),u&&u.c(),a=Lt()},m(f,d){Q(f,e,d),Q(f,t,d),ve(n,f,d),Q(f,r,d),u&&u.m(f,d),Q(f,a,d),o=!0},p(f,d){const h={};!s&&d&8&&(s=!0,h.files=f[3],Un(()=>s=!1)),n.$set(h),f[3]&&f[3].length!==0?u?(u.p(f,d),d&8&&F(u,1)):(u=Bc(f),u.c(),F(u,1),u.m(a.parentNode,a)):u&&($e(),B(u,1,1,()=>{u=null}),et())},i(f){o||(F(n.$$.fragment,f),F(u),o=!0)},o(f){B(n.$$.fragment,f),B(u),o=!1},d(f){f&&J(e),f&&J(t),i[12](null),xe(n,f),f&&J(r),u&&u.d(f),f&&J(a)}}}function zv(i){let e,t,n,s;return e=new Va({props:{title:"Mesh Files",$$slots:{default:[Iv]},$$scope:{ctx:i}}}),n=new Va({props:{title:"Color Map",$$slots:{default:[Fv]},$$scope:{ctx:i}}}),{c(){ye(e.$$.fragment),t=be(),ye(n.$$.fragment)},m(r,a){ve(e,r,a),Q(r,t,a),ve(n,r,a),s=!0},p(r,a){const o={};a&262149&&(o.$$scope={dirty:a,ctx:r}),e.$set(o);const l={};a&262154&&(l.$$scope={dirty:a,ctx:r}),n.$set(l)},i(r){s||(F(e.$$.fragment,r),F(n.$$.fragment,r),s=!0)},o(r){B(e.$$.fragment,r),B(n.$$.fragment,r),s=!1},d(r){xe(e,r),r&&J(t),xe(n,r)}}}function Ov(i){let e,t,n,s,r,a,o,l,c,u,f;return u=new bf({props:{$$slots:{default:[zv]},$$scope:{ctx:i}}}),{c(){e=le("div"),t=Ne("Loaded ("),n=Ne(i[4]),s=Ne("/"),r=Ne(i[5]),a=Ne(`) Files
  `),o=le("br"),l=le("br"),c=be(),ye(u.$$.fragment)},m(d,h){Q(d,e,h),Y(e,t),Y(e,n),Y(e,s),Y(e,r),Y(e,a),Y(e,o),Y(e,l),Y(e,c),ve(u,e,null),f=!0},p(d,[h]){(!f||h&16)&&Ke(n,d[4]),(!f||h&32)&&Ke(r,d[5]);const p={};h&262159&&(p.$$scope={dirty:h,ctx:d}),u.$set(p)},i(d){f||(F(u.$$.fragment,d),f=!0)},o(d){B(u.$$.fragment,d),f=!1},d(d){d&&J(e),xe(u)}}}function Nv(i,e,t){let n,s,r,a;gt(i,fs,_=>t(14,n=_)),gt(i,Xs,_=>t(4,s=_)),gt(i,Qr,_=>t(5,r=_)),gt(i,Oi,_=>t(15,a=_));let o,l,c=[],u=[];const f=da(Dc,()=>new Dc),d=da(zc,()=>new zc);async function h(){Gt(Oi,a={},a),Gt(Xs,s=0,s),Gt(Qr,r=c.length,r);for(let _=0;_<c.length;_++){let S=c[_],A=URL.createObjectURL(S),x=S.name.split(".").pop(),T;x==="stl"?T=f:T=d,await T.load(A,w=>{w.computeBoundingBox(),Gt(Oi,a[S.name]=w,a),Oi.set(a),Gt(Xs,s+=1,s)})}}async function p(){Gt(Oi,a={},a),Gt(Qr,r=0,r),Gt(Xs,s=0,s)}async function m(){if(u.length>0){let _=new FileReader;_.addEventListener("load",S=>{try{Gt(fs,n=JSON.parse(_.result),n)}catch(A){console.log("JSON parse error",A)}}),_.readAsText(u[0])}}async function g(){Gt(fs,n={},n)}function v(_){Mt[_?"unshift":"push"](()=>{o=_,t(0,o)})}function M(_){c=_,t(2,c)}function b(_){Mt[_?"unshift":"push"](()=>{l=_,t(1,l)})}function y(_){u=_,t(3,u)}return[o,l,c,u,s,r,h,p,m,g,v,M,b,y]}class Uv extends Ge{constructor(e){super(),Be(this,e,Nv,Ov,Ue,{})}}function Bv(i,e,t){const n=i.slice();return n[2]=e[t],n}function Gv(i){let e,t;return e=new md({props:{labelText:i[2],value:i[2]}}),{c(){ye(e.$$.fragment)},m(n,s){ve(e,n,s),t=!0},p:Qe,i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){B(e.$$.fragment,n),t=!1},d(n){xe(e,n)}}}function Vv(i){let e,t,n=["white","g10","g80","g100"],s=[];for(let r=0;r<4;r+=1)s[r]=Gv(Bv(i,n,r));return{c(){for(let r=0;r<4;r+=1)s[r].c();e=Lt()},m(r,a){for(let o=0;o<4;o+=1)s[o].m(r,a);Q(r,e,a),t=!0},p:Qe,i(r){if(!t){for(let a=0;a<4;a+=1)F(s[a]);t=!0}},o(r){s=s.filter(Boolean);for(let a=0;a<4;a+=1)B(s[a]);t=!1},d(r){_s(s,r),r&&J(e)}}}function Hv(i){let e,t,n;function s(a){i[1](a)}let r={legendText:"Carbon theme",$$slots:{default:[Vv]},$$scope:{ctx:i}};return i[0]!==void 0&&(r.selected=i[0]),e=new yh({props:r}),Mt.push(()=>Bn(e,"selected",s)),{c(){ye(e.$$.fragment)},m(a,o){ve(e,a,o),n=!0},p(a,[o]){const l={};o&32&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.selected=a[0],Un(()=>t=!1)),e.$set(l)},i(a){n||(F(e.$$.fragment,a),n=!0)},o(a){B(e.$$.fragment,a),n=!1},d(a){xe(e,a)}}}function Wv(i,e,t){let{theme:n="g80"}=e;function s(r){n=r,t(0,n)}return i.$$set=r=>{"theme"in r&&t(0,n=r.theme)},[n,s]}class jv extends Ge{constructor(e){super(),Be(this,e,Wv,Hv,Ue,{theme:0})}}function qv(i){let e,t,n,s,r,a,o,l,c;function u(d){i[2](d)}let f={};return i[0]!==void 0&&(f.theme=i[0]),e=new jv({props:f}),Mt.push(()=>Bn(e,"theme",u)),l=new Uv({}),{c(){ye(e.$$.fragment),n=be(),s=le("br"),r=be(),a=le("br"),o=be(),ye(l.$$.fragment)},m(d,h){ve(e,d,h),Q(d,n,h),Q(d,s,h),Q(d,r,h),Q(d,a,h),Q(d,o,h),ve(l,d,h),c=!0},p(d,h){const p={};!t&&h&1&&(t=!0,p.theme=d[0],Un(()=>t=!1)),e.$set(p)},i(d){c||(F(e.$$.fragment,d),F(l.$$.fragment,d),c=!0)},o(d){B(e.$$.fragment,d),B(l.$$.fragment,d),c=!1},d(d){xe(e,d),d&&J(n),d&&J(s),d&&J(r),d&&J(a),d&&J(o),xe(l,d)}}}function Xv(i){let e,t;return e=new Sv({}),{c(){ye(e.$$.fragment)},m(n,s){ve(e,n,s),t=!0},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){B(e.$$.fragment,n),t=!1},d(n){xe(e,n)}}}function Yv(i){let e,t,n,s;return e=new ho({props:{ls:{span:4,offset:0},padding:!0,$$slots:{default:[qv]},$$scope:{ctx:i}}}),n=new ho({props:{lg:{span:12,offset:0},padding:!0,$$slots:{default:[Xv]},$$scope:{ctx:i}}}),{c(){ye(e.$$.fragment),t=be(),ye(n.$$.fragment)},m(r,a){ve(e,r,a),Q(r,t,a),ve(n,r,a),s=!0},p(r,a){const o={};a&9&&(o.$$scope={dirty:a,ctx:r}),e.$set(o);const l={};a&8&&(l.$$scope={dirty:a,ctx:r}),n.$set(l)},i(r){s||(F(e.$$.fragment,r),F(n.$$.fragment,r),s=!0)},o(r){B(e.$$.fragment,r),B(n.$$.fragment,r),s=!1},d(r){xe(e,r),r&&J(t),xe(n,r)}}}function Zv(i){let e,t;return e=new Jd({props:{padding:!0,$$slots:{default:[Yv]},$$scope:{ctx:i}}}),{c(){ye(e.$$.fragment)},m(n,s){ve(e,n,s),t=!0},p(n,s){const r={};s&9&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){B(e.$$.fragment,n),t=!1},d(n){xe(e,n)}}}function Kv(i){let e,t;return e=new Wd({props:{fullWidth:!0,$$slots:{default:[Zv]},$$scope:{ctx:i}}}),{c(){ye(e.$$.fragment)},m(n,s){ve(e,n,s),t=!0},p(n,s){const r={};s&9&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(F(e.$$.fragment,n),t=!0)},o(n){B(e.$$.fragment,n),t=!1},d(n){xe(e,n)}}}function Jv(i){let e,t,n,s,r,a,o;function l(u){i[1](u)}let c={};return i[0]!==void 0&&(c.theme=i[0]),e=new Bh({props:c}),Mt.push(()=>Bn(e,"theme",l)),s=new im({props:{platformName:"3D Mesh Viewer"}}),a=new om({props:{$$slots:{default:[Kv]},$$scope:{ctx:i}}}),{c(){ye(e.$$.fragment),n=be(),ye(s.$$.fragment),r=be(),ye(a.$$.fragment)},m(u,f){ve(e,u,f),Q(u,n,f),ve(s,u,f),Q(u,r,f),ve(a,u,f),o=!0},p(u,[f]){const d={};!t&&f&1&&(t=!0,d.theme=u[0],Un(()=>t=!1)),e.$set(d);const h={};f&9&&(h.$$scope={dirty:f,ctx:u}),a.$set(h)},i(u){o||(F(e.$$.fragment,u),F(s.$$.fragment,u),F(a.$$.fragment,u),o=!0)},o(u){B(e.$$.fragment,u),B(s.$$.fragment,u),B(a.$$.fragment,u),o=!1},d(u){xe(e,u),u&&J(n),xe(s,u),u&&J(r),xe(a,u)}}}function Qv(i,e,t){let n="g80";function s(a){n=a,t(0,n)}function r(a){n=a,t(0,n)}return i.$$.update=()=>{i.$$.dirty&1&&document.documentElement.setAttribute("theme",n)},[n,s,r]}class $v extends Ge{constructor(e){super(),Be(this,e,Qv,Jv,Ue,{})}}new $v({target:document.getElementById("app")});
