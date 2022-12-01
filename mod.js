// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,o=t.__lookupGetter__,f=t.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(o.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,a.get),v&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var v=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;var b="function"==typeof Symbol?Symbol.toStringTag:"";var s=y&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,i;if(null==r)return v.call(r);t=r[b],i=b,n=null!=(u=r)&&p.call(u,i);try{r[b]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[b]=t:delete r[b],e}:function(r){return v.call(r)},w="function"==typeof Uint32Array;var A="function"==typeof Uint32Array?Uint32Array:null;var _,m="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(w&&t instanceof Uint32Array||"[object Uint32Array]"===s(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var d=_,N="function"==typeof Float64Array;var U="function"==typeof Float64Array?Float64Array:null;var g,h="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U([1,3.14,-3.14,NaN]),t=n,r=(N&&t instanceof Float64Array||"[object Float64Array]"===s(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var j=g,I="function"==typeof Uint8Array;var O="function"==typeof Uint8Array?Uint8Array:null;var S,E="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,256,257]),t=n,r=(I&&t instanceof Uint8Array||"[object Uint8Array]"===s(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F=S,H="function"==typeof Uint16Array;var T="function"==typeof Uint16Array?Uint16Array:null;var G,P="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,65536,65537]),t=n,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===s(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,M={uint16:G,uint8:F};(L=new M.uint16(1))[0]=4660;var V=52===new M.uint8(L.buffer)[0],W=!0===V?1:0,x=new j(1),k=new d(x.buffer);function Y(r){return x[0]=r,k[W]}var q=!0===V?1:0,C=new j(1),z=new d(C.buffer);function B(r,n){return C[0]=r,z[q]=n>>>0,C[0]}var D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY;var K=.6931471803691238,Q=1.9082149292705877e-10;function R(r){var n,t,e,u,i,o,f,a,c,y,v,p;if(r===D||l(r))return r;if(r===J)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return D}if(i=0|Y(f),f>.34657359027997264)f<1.0397207708399179?t?(e=r+K,u=-Q,p=-1):(e=r-K,u=Q,p=1):(p=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(y=p|=0)*K,u=y*Q),c=e-(r=e-u)-u;else{if(i<1016070144)return r;p=0}return o=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),v=a*((o-(y=3-o*n))/(6-r*y)),0===p?r-(r*v-a):(v=r*(v-c)-c,v-=a,-1===p?.5*(r-v)-.5:1===p?r<-.25?-2*(v-(r+.5)):1+2*(r-v):p<=-2||p>56?(f=B(f=1-(v-r),e=Y(f)+(p<<20)|0))-1:(y=1,p<20?f=(y=B(y,e=1072693248-(2097152>>p)|0))-(v-r):(f=r-(v+(y=B(y,e=1023-p<<20|0))),f+=1),B(f,e=Y(f)+(p<<20)|0)))}var X=.6931471803691238,Z=1.9082149292705877e-10;function $(r){var n,t,e,u,i,o,f,a,c,y;if(r<-1||l(r))return NaN;if(-1===r)return J;if(r===D)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,u=r,t=1)}return 0!==y&&(e<9007199254740992?(i=(y=((t=Y(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),i/=c):(y=((t=Y(c=r))>>20)-1023,i=0),(t&=1048575)<434334?c=B(c,1072693248|t):(y+=1,c=B(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?y*X+(i+=y*Z):y*X-((a=n*(1-.6666666666666666*u))-(y*Z+i)-u):(a=(f=(o=u/(2+u))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===y?u-(n-o*(n+a)):y*X-(n-(o*(n+a)+(y*Z+i))-u))}var rr=Math.floor,nr=Math.ceil;function tr(r){return r<0?nr(r):rr(r)}function er(r){return r===D||r===J}var ur,ir;!0===V?(ur=1,ir=0):(ur=0,ir=1);var or,fr,ar={HIGH:ur,LOW:ir},cr=new j(1),lr=new d(cr.buffer),yr=ar.HIGH,vr=ar.LOW;function pr(r,n,t,e){return cr[0]=r,n[e]=lr[yr],n[e+t]=lr[vr],n}function br(r){return pr(r,[0,0],1,0)}c(br,"assign",pr),!0===V?(or=1,fr=0):(or=0,fr=1);var sr={HIGH:or,LOW:fr},wr=new j(1),Ar=new d(wr.buffer),_r=sr.HIGH,mr=sr.LOW;function dr(r,n){return Ar[_r]=r,Ar[mr]=n,wr[0]}var Nr=[0,0];function Ur(r,n){var t,e;return br.assign(r,Nr,1,0),t=Nr[0],t&=2147483647,e=Y(n),dr(t|=e&=2147483648,Nr[1])}function gr(r){return Math.abs(r)}function hr(r,n,t,e){return l(r)||er(r)?(n[e]=r,n[e+t]=0,n):0!==r&&gr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return hr(r,[0,0],1,0)}),"assign",hr);var jr=[0,0],Ir=[0,0];function Or(r,n){var t,e;return 0===n||0===r||l(r)||er(r)?r:(hr(r,jr,1,0),n+=jr[1],n+=function(r){var n=Y(r);return(n=(2146435072&n)>>>20)-1023|0}(r=jr[0]),n<-1074?Ur(0,r):n>1023?r<0?J:D:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,br.assign(r,Ir,1,0),t=Ir[0],t&=2148532223,e*dr(t|=n+1023<<20,Ir[1])))}function Sr(r){var n;return l(r)||r===D?r:r===J?0:r>709.782712893384?D:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,i,o;return Or(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=tr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Er(r){return rr(r)===r}function Fr(r){return Er(r/2)}function Hr(r){return Fr(r>0?r-1:r+1)}var Tr=Math.sqrt,Gr=!0===V?0:1,Pr=new j(1),Lr=new d(Pr.buffer);function Mr(r,n){return Pr[0]=r,Lr[Gr]=n>>>0,Pr[0]}function Vr(r){return 0|r}var Wr=[1,1.5],xr=[0,.5849624872207642],kr=[0,1.350039202129749e-8];var Yr=1e300,qr=1e-300,Cr=[0,0],zr=[0,0];function Br(r,n){var t,e,u,i,o,f,a,c,y,v,p,b,s,w;if(l(r)||l(n))return NaN;if(br.assign(n,Cr,1,0),o=Cr[0],0===Cr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Tr(r);if(-.5===n)return 1/Tr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(er(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:gr(r)<1==(n===D)?0:D}(r,n)}if(br.assign(r,Cr,1,0),i=Cr[0],0===Cr[1]){if(0===i)return function(r,n){return n===J?D:n===D?0:n>0?Hr(n)?r:0:Hr(n)?Ur(D,r):D}(r,n);if(1===r)return 1;if(-1===r&&Hr(n))return-1;if(er(r))return r===J?Br(-0,-n):n<0?0:D}if(r<0&&!1===Er(n))return(r-r)/(r-r);if(u=gr(r),t=2147483647&i|0,e=2147483647&o|0,a=o>>>31|0,f=(f=i>>>31|0)&&Hr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Y(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Yr*Yr:f*qr*qr;if(t>1072693248)return 0===a?f*Yr*Yr:f*qr*qr;p=function(r,n){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Mr(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r}(zr,u)}else p=function(r,n,t){var e,u,i,o,f,a,c,l,y,v,p,b,s,w,A,_,m,d,N,U,g;return d=0,t<1048576&&(d-=53,t=Y(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(N=1048575&t|0),N<=235662?U=0:N<767610?U=1:(U=0,d+=1,t-=1048576),o=Mr(u=(_=(n=B(n,t))-(c=Wr[U]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=B(0,e+=U<<18),A=(i=u*u)*i*(0===(g=i)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=Mr(a=3+(i=o*o)+(A+=(f=m*(_-o*a-o*(n-(a-c))))*(o+u)),0),s=(p=-7.028461650952758e-9*(y=Mr(y=(_=o*a)+(m=f*a+(A-(a-3-i))*u),0))+.9617966939259756*(m-(y-_))+kr[U])-((b=Mr(b=(v=.9617967009544373*y)+p+(l=xr[U])+(w=d),0))-w-l-v),r[0]=b,r[1]=s,r}(zr,u,t);if(b=(v=(n-(c=Mr(n,0)))*p[0]+n*p[1])+(y=c*p[0]),br.assign(b,Cr,1,0),s=Vr(Cr[0]),w=Vr(Cr[1]),s>=1083179008){if(0!=(s-1083179008|w))return f*Yr*Yr;if(v+8008566259537294e-32>b-y)return f*Yr*Yr}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|w))return f*qr*qr;if(v<=b-y)return f*qr*qr}return b=function(r,n,t){var e,u,i,o,f,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=i=B(0,e)),r=Vr(r=Y(c=1-((c=(o=.6931471824645996*(i=Mr(i=t+n,0)))+(f=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=f-(c-o))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?Or(c,l):B(c,r)}(s,y,v),f*b}var Dr=.6931471803691238,Jr=1.9082149292705877e-10;function Kr(r){var n,t,e,u,i,o,f,a,c,y,v,p;return 0===r?J:l(r)||r<0?NaN:(i=0,(t=Y(r))<1048576&&(i-=54,t=Y(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-1023|0,i+=(a=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=B(r,t|1072693248^a))-1,(1048575&2+t)<3?0===f?0===i?0:i*Dr+i*Jr:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*Dr-(o-i*Jr-f)):(a=t-398458|0,c=440401-t|0,u=(v=(p=(y=f/(2+f))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),o=e+u,(a|=c)>0?(n=.5*f*f,0===i?f-(n-y*(n+o)):i*Dr-(n-(y*(n+o)+i*Jr)-f)):0===i?f-y*(f-o):i*Dr-(y*(f-o)-i*Jr-f))))}function Qr(r,n,t){var e;return l(n)||l(t)||n<=0||t<=0?NaN:r<0?J:(e=-Br(r/t,n))<-.6931471805599453?$(-Sr(e)):Kr(-R(e))}function Rr(r,n){return l(r)||l(n)||r<=0||n<=0?(t=NaN,function(){return t}):function(t){var e;if(l(t))return NaN;if(t<0)return J;return(e=-Br(t/n,r))<-.6931471805599453?$(-Sr(e)):Kr(-R(e))};var t}c(Qr,"factory",Rr);export{Qr as default,Rr as factory};
//# sourceMappingURL=mod.js.map
