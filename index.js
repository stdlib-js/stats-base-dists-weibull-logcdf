// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,o=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(o.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,a.get),p&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,s=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",d=p&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,i;if(null==r)return v.call(r);t=r[b],i=b,n=null!=(u=r)&&s.call(u,i);try{r[b]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[b]=t:delete r[b],e}:function(r){return v.call(r)},w="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,_="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(w&&t instanceof Uint32Array||"[object Uint32Array]"===d(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,g=y,h="function"==typeof Float64Array,N="function"==typeof Float64Array?Float64Array:null,U="function"==typeof Float64Array?Float64Array:void 0;m=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N([1,3.14,-3.14,NaN]),t=n,r=(h&&t instanceof Float64Array||"[object Float64Array]"===d(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var j,I=m,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;j=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,256,257]),t=n,r=(O&&t instanceof Uint8Array||"[object Uint8Array]"===d(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=j,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===d(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var x,L={uint16:F,uint8:T};(x=new L.uint16(1))[0]=4660;var M=52===new L.uint8(x.buffer)[0],V=!0===M?1:0,W=new I(1),k=new g(W.buffer);function Y(r){return W[0]=r,k[V]}var q=!0===M?1:0,C=new I(1),z=new g(C.buffer);function B(r,n){return C[0]=r,z[q]=n>>>0,C[0]}var D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY,K=1023,Q=.6931471803691238,R=1.9082149292705877e-10,X=1.4426950408889634;function Z(r){var n,t,e,u,i,o,f,a,c,y,p,v;if(r===D||l(r))return r;if(r===J)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return D}if(i=0|Y(f),f>.34657359027997264)f<1.0397207708399179?t?(e=r+Q,u=-R,v=-1):(e=r-Q,u=R,v=1):(v=t?X*r-.5:X*r+.5,e=r-(y=v|=0)*Q,u=y*R),c=e-(r=e-u)-u;else{if(i<1016070144)return r;v=0}return o=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),p=a*((o-(y=3-o*n))/(6-r*y)),0===v?r-(r*p-a):(p=r*(p-c)-c,p-=a,-1===v?.5*(r-p)-.5:1===v?r<-.25?-2*(p-(r+.5)):1+2*(r-p):v<=-2||v>56?(f=B(f=1-(p-r),e=Y(f)+(v<<20)|0))-1:(y=1,v<20?f=(y=B(y,e=1072693248-(2097152>>v)|0))-(p-r):(f=r-(p+(y=B(y,e=K-v<<20|0))),f+=1),B(f,e=Y(f)+(v<<20)|0)))}var $=.6931471803691238,rr=1.9082149292705877e-10;function nr(r){var n,t,e,u,i,o,f,a,c,y;if(r<-1||l(r))return NaN;if(-1===r)return J;if(r===D)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,u=r,t=1)}return 0!==y&&(e<9007199254740992?(i=(y=((t=Y(c=1+r))>>20)-K)>0?1-(c-r):r-(c-1),i/=c):(y=((t=Y(c=r))>>20)-K,i=0),(t&=1048575)<434334?c=B(c,1072693248|t):(y+=1,c=B(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?y*$+(i+=y*rr):y*$-((a=n*(1-.6666666666666666*u))-(y*rr+i)-u):(a=(f=(o=u/(2+u))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===y?u-(n-o*(n+a)):y*$-(n-(o*(n+a)+(y*rr+i))-u))}var tr=Math.floor,er=Math.ceil;function ur(r){return r<0?er(r):tr(r)}function ir(r){return r===D||r===J}var or,fr,ar=2147483647;!0===M?(or=1,fr=0):(or=0,fr=1);var cr,lr,yr={HIGH:or,LOW:fr},pr=new I(1),vr=new g(pr.buffer),sr=yr.HIGH,br=yr.LOW;function dr(r,n,t,e){return pr[0]=r,n[e]=vr[sr],n[e+t]=vr[br],n}function wr(r){return dr(r,[0,0],1,0)}c(wr,"assign",dr),!0===M?(cr=1,lr=0):(cr=0,lr=1);var Ar={HIGH:cr,LOW:lr},_r=new I(1),mr=new g(_r.buffer),gr=Ar.HIGH,hr=Ar.LOW;function Nr(r,n){return mr[gr]=r,mr[hr]=n,_r[0]}var Ur=[0,0];function jr(r,n){var t,e;return wr.assign(r,Ur,1,0),t=Ur[0],t&=ar,e=Y(n),Nr(t|=e&=2147483648,Ur[1])}function Ir(r){return Math.abs(r)}function Or(r,n,t,e){return l(r)||ir(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Ir(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Or(r,[0,0],1,0)}),"assign",Or);var Sr=[0,0],Er=[0,0];function Fr(r,n){var t,e;return 0===n||0===r||l(r)||ir(r)?r:(Or(r,Sr,1,0),n+=Sr[1],n+=function(r){var n=Y(r);return(n=(2146435072&n)>>>20)-K|0}(r=Sr[0]),n<-1074?jr(0,r):n>1023?r<0?J:D:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,wr.assign(r,Er,1,0),t=Er[0],t&=2148532223,e*Nr(t|=n+K<<20,Er[1])))}var Tr=1.4426950408889634,Hr=1/(1<<28);function Gr(r){var n;return l(r)||r===D?r:r===J?0:r>709.782712893384?D:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Hr?1+r:function(r,n,t){var e,u,i,o;return Fr(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=ur(r<0?Tr*r-.5:Tr*r+.5)),1.9082149292705877e-10*n,n)}function Pr(r){return tr(r)===r}function xr(r){return Pr(r/2)}function Lr(r){return xr(r>0?r-1:r+1)}var Mr=Math.sqrt,Vr=!0===M?0:1,Wr=new I(1),kr=new g(Wr.buffer);function Yr(r,n){return Wr[0]=r,kr[Vr]=n>>>0,Wr[0]}function qr(r){return 0|r}var Cr=1048576,zr=[1,1.5],Br=[0,.5849624872207642],Dr=[0,1.350039202129749e-8],Jr=1048575,Kr=1048576,Qr=1083179008,Rr=1e300,Xr=1e-300,Zr=[0,0],$r=[0,0];function rn(r,n){var t,e,u,i,o,f,a,c,y,p,v,s,b,d;if(l(r)||l(n))return NaN;if(wr.assign(n,Zr,1,0),o=Zr[0],0===Zr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Mr(r);if(-.5===n)return 1/Mr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(ir(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Ir(r)<1==(n===D)?0:D}(r,n)}if(wr.assign(r,Zr,1,0),i=Zr[0],0===Zr[1]){if(0===i)return function(r,n){return n===J?D:n===D?0:n>0?Lr(n)?r:0:Lr(n)?jr(D,r):D}(r,n);if(1===r)return 1;if(-1===r&&Lr(n))return-1;if(ir(r))return r===J?rn(-0,-n):n<0?0:D}if(r<0&&!1===Pr(n))return(r-r)/(r-r);if(u=Ir(r),t=i&ar|0,e=o&ar|0,a=o>>>31|0,f=(f=i>>>31|0)&&Lr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Y(r)&ar)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Rr*Rr:f*Xr*Xr;if(t>1072693248)return 0===a?f*Rr*Rr:f*Xr*Xr;v=function(r,n){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Yr(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r}($r,u)}else v=function(r,n,t){var e,u,i,o,f,a,c,l,y,p,v,s,b,d,w,A,_,m,g,h,N;return m=0,t<Cr&&(m-=53,t=Y(n*=9007199254740992)),m+=(t>>20)-K|0,t=1072693248|(g=1048575&t|0),g<=235662?h=0:g<767610?h=1:(h=0,m+=1,t-=Cr),o=Yr(u=(A=(n=B(n,t))-(c=zr[h]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=B(0,e+=h<<18),w=(i=u*u)*i*(0===(N=i)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=Yr(a=3+(i=o*o)+(w+=(f=_*(A-o*a-o*(n-(a-c))))*(o+u)),0),b=(v=-7.028461650952758e-9*(y=Yr(y=(A=o*a)+(_=f*a+(w-(a-3-i))*u),0))+.9617966939259756*(_-(y-A))+Dr[h])-((s=Yr(s=(p=.9617967009544373*y)+v+(l=Br[h])+(d=m),0))-d-l-p),r[0]=s,r[1]=b,r}($r,u,t);if(s=(p=(n-(c=Yr(n,0)))*v[0]+n*v[1])+(y=c*v[0]),wr.assign(s,Zr,1,0),b=qr(Zr[0]),d=qr(Zr[1]),b>=Qr){if(0!=(b-Qr|d))return f*Rr*Rr;if(p+8008566259537294e-32>s-y)return f*Rr*Rr}else if((b&ar)>=1083231232){if(0!=(b-3230714880|d))return f*Xr*Xr;if(p<=s-y)return f*Xr*Xr}return s=function(r,n,t){var e,u,i,o,f,a,c,l,y,p;return y=((l=r&ar|0)>>20)-K|0,c=0,l>1071644672&&(u=B(0,((c=r+(Kr>>y+1)>>>0)&~(Jr>>(y=((c&ar)>>20)-K|0)))>>>0),c=(c&Jr|Kr)>>20-y>>>0,r<0&&(c=-c),n-=u),r=qr(r=Y(a=1-((a=(i=.6931471824645996*(u=Yr(u=t+n,0)))+(o=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=o-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Fr(a,c):B(a,r)}(b,y,p),f*s}var nn=.6931471803691238,tn=1.9082149292705877e-10,en=1048575;function un(r){var n,t,e,u,i,o,f,a,c,y,p,v;return 0===r?J:l(r)||r<0?NaN:(i=0,(t=Y(r))<1048576&&(i-=54,t=Y(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-K|0,i+=(a=614244+(t&=en)&1048576|0)>>20|0,f=(r=B(r,t|1072693248^a))-1,(en&2+t)<3?0===f?0===i?0:i*nn+i*tn:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*nn-(o-i*tn-f)):(a=t-398458|0,c=440401-t|0,u=(p=(v=(y=f/(2+f))*y)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+u,(a|=c)>0?(n=.5*f*f,0===i?f-(n-y*(n+o)):i*nn-(n-(y*(n+o)+i*tn)-f)):0===i?f-y*(f-o):i*nn-(y*(f-o)-i*tn-f))))}var on=-.6931471805599453;function fn(r,n,t){var e;return l(n)||l(t)||n<=0||t<=0?NaN:r<0?J:(e=-rn(r/t,n))<on?nr(-Gr(e)):un(-Z(e))}return c(fn,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?(t=NaN,function(){return t}):function(t){var e;return l(t)?NaN:t<0?J:(e=-rn(t/n,r))<on?nr(-Gr(e)):un(-Z(e))};var t})),fn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logcdf=n();
//# sourceMappingURL=index.js.map
