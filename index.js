// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,o=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,a.get),p&&o&&o.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,b=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",s=p&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return v.call(r);t=r[d],o=d,n=null!=(u=r)&&b.call(u,o);try{r[d]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[d]=t:delete r[d],e}:function(r){return v.call(r)},w="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,_="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(w&&t instanceof Uint32Array||"[object Uint32Array]"===s(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,h=y,N="function"==typeof Float64Array,U="function"==typeof Float64Array?Float64Array:null,g="function"==typeof Float64Array?Float64Array:void 0;m=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U([1,3.14,-3.14,NaN]),t=n,r=(N&&t instanceof Float64Array||"[object Float64Array]"===s(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j,I=m,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;j=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,256,257]),t=n,r=(O&&t instanceof Uint8Array||"[object Uint8Array]"===s(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=j,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===s(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var x,L={uint16:F,uint8:T};(x=new L.uint16(1))[0]=4660;var M=52===new L.uint8(x.buffer)[0],V=!0===M?1:0,W=new I(1),k=new h(W.buffer);function Y(r){return W[0]=r,k[V]}var q=!0===M?1:0,C=new I(1),z=new h(C.buffer);function B(r,n){return C[0]=r,z[q]=n>>>0,C[0]}var D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY,K=1023,Q=.6931471803691238,R=1.9082149292705877e-10,X=1.4426950408889634;function Z(r){var n,t,e,u,o,i,f,a,c,y,p,v;if(r===D||l(r))return r;if(r===J)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return D}if(o=0|Y(f),f>.34657359027997264)f<1.0397207708399179?t?(e=r+Q,u=-R,v=-1):(e=r-Q,u=R,v=1):(v=t?X*r-.5:X*r+.5,e=r-(y=v|=0)*Q,u=y*R),c=e-(r=e-u)-u;else{if(o<1016070144)return r;v=0}return i=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),p=a*((i-(y=3-i*n))/(6-r*y)),0===v?r-(r*p-a):(p=r*(p-c)-c,p-=a,-1===v?.5*(r-p)-.5:1===v?r<-.25?-2*(p-(r+.5)):1+2*(r-p):v<=-2||v>56?(f=B(f=1-(p-r),e=Y(f)+(v<<20)|0))-1:(y=1,v<20?f=(y=B(y,e=1072693248-(2097152>>v)|0))-(p-r):(f=r-(p+(y=B(y,e=K-v<<20|0))),f+=1),B(f,e=Y(f)+(v<<20)|0)))}var $=.6931471803691238,rr=1.9082149292705877e-10;function nr(r){var n,t,e,u,o,i,f,a,c,y;if(r<-1||l(r))return NaN;if(-1===r)return J;if(r===D)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,u=r,t=1)}return 0!==y&&(e<9007199254740992?(o=(y=((t=Y(c=1+r))>>20)-K)>0?1-(c-r):r-(c-1),o/=c):(y=((t=Y(c=r))>>20)-K,o=0),(t&=1048575)<434334?c=B(c,1072693248|t):(y+=1,c=B(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?y*$+(o+=y*rr):y*$-((a=n*(1-.6666666666666666*u))-(y*rr+o)-u):(a=(f=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===y?u-(n-i*(n+a)):y*$-(n-(i*(n+a)+(y*rr+o))-u))}var tr,er,ur=Math.floor,or=Math.ceil;function ir(r){return r<0?or(r):ur(r)}function fr(r){return r===D||r===J}!0===M?(tr=1,er=0):(tr=0,er=1);var ar,cr,lr={HIGH:tr,LOW:er},yr=new I(1),pr=new h(yr.buffer),vr=lr.HIGH,br=lr.LOW;function dr(r,n){return yr[0]=n,r[0]=pr[vr],r[1]=pr[br],r}function sr(r,n){return 1===arguments.length?dr([0,0],r):dr(r,n)}!0===M?(ar=1,cr=0):(ar=0,cr=1);var wr={HIGH:ar,LOW:cr},Ar=new I(1),_r=new h(Ar.buffer),mr=wr.HIGH,hr=wr.LOW;function Nr(r,n){return _r[mr]=r,_r[hr]=n,Ar[0]}var Ur=[0,0];function gr(r,n){var t,e;return sr(Ur,r),t=Ur[0],t&=2147483647,e=Y(n),Nr(t|=e&=2147483648,Ur[1])}function jr(r){return Math.abs(r)}function Ir(r,n,t,e){return l(r)||fr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&jr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Ir(r,[0,0],1,0)}),"assign",Ir);var Or=[0,0],Sr=[0,0];function Er(r,n){var t,e;return 0===n||0===r||l(r)||fr(r)?r:(Ir(r,Or,1,0),n+=Or[1],n+=function(r){var n=Y(r);return(n=(2146435072&n)>>>20)-K|0}(r=Or[0]),n<-1074?gr(0,r):n>1023?r<0?J:D:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,sr(Sr,r),t=Sr[0],t&=2148532223,e*Nr(t|=n+K<<20,Sr[1])))}var Fr=1.4426950408889634,Tr=1/(1<<28);function Hr(r){var n;return l(r)||r===D?r:r===J?0:r>709.782712893384?D:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Tr?1+r:function(r,n,t){var e,u,o,i;return Er(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=ir(r<0?Fr*r-.5:Fr*r+.5)),1.9082149292705877e-10*n,n)}function Gr(r){return ur(r)===r}function Pr(r){return Gr(r/2)}function xr(r){return Pr(r>0?r-1:r+1)}var Lr=Math.sqrt,Mr=!0===M?0:1,Vr=new I(1),Wr=new h(Vr.buffer);function kr(r,n){return Vr[0]=r,Wr[Mr]=n>>>0,Vr[0]}function Yr(r){return 0|r}var qr=1048576,Cr=[1,1.5],zr=[0,.5849624872207642],Br=[0,1.350039202129749e-8],Dr=2147483647,Jr=1048575,Kr=1048576,Qr=2147483647,Rr=1083179008,Xr=1e300,Zr=1e-300,$r=[0,0],rn=[0,0];function nn(r,n){var t,e,u,o,i,f,a,c,y,p,v,b,d,s;if(l(r)||l(n))return NaN;if(sr($r,n),i=$r[0],0===$r[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Lr(r);if(-.5===n)return 1/Lr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(fr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:jr(r)<1==(n===D)?0:D}(r,n)}if(sr($r,r),o=$r[0],0===$r[1]){if(0===o)return function(r,n){return n===J?D:n===D?0:n>0?xr(n)?r:0:xr(n)?gr(D,r):D}(r,n);if(1===r)return 1;if(-1===r&&xr(n))return-1;if(fr(r))return r===J?nn(-0,-n):n<0?0:D}if(r<0&&!1===Gr(n))return(r-r)/(r-r);if(u=jr(r),t=o&Qr|0,e=i&Qr|0,a=i>>>31|0,f=(f=o>>>31|0)&&xr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Y(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Xr*Xr:f*Zr*Zr;if(t>1072693248)return 0===a?f*Xr*Xr:f*Zr*Zr;v=function(r,n){var t,e,u,o,i,f;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=kr(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r}(rn,u)}else v=function(r,n,t){var e,u,o,i,f,a,c,l,y,p,v,b,d,s,w,A,_,m,h,N,U;return m=0,t<qr&&(m-=53,t=Y(n*=9007199254740992)),m+=(t>>20)-K|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,m+=1,t-=qr),i=kr(u=(A=(n=B(n,t))-(c=Cr[N]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=B(0,e+=N<<18),w=(o=u*u)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=kr(a=3+(o=i*i)+(w+=(f=_*(A-i*a-i*(n-(a-c))))*(i+u)),0),d=(v=-7.028461650952758e-9*(y=kr(y=(A=i*a)+(_=f*a+(w-(a-3-o))*u),0))+.9617966939259756*(_-(y-A))+Br[N])-((b=kr(b=(p=.9617967009544373*y)+v+(l=zr[N])+(s=m),0))-s-l-p),r[0]=b,r[1]=d,r}(rn,u,t);if(p=(n-(c=kr(n,0)))*v[0]+n*v[1],y=c*v[0],sr($r,b=p+y),d=Yr($r[0]),s=Yr($r[1]),d>=Rr){if(0!=(d-Rr|s))return f*Xr*Xr;if(p+8008566259537294e-32>b-y)return f*Xr*Xr}else if((d&Qr)>=1083231232){if(0!=(d-3230714880|s))return f*Zr*Zr;if(p<=b-y)return f*Zr*Zr}return b=function(r,n,t){var e,u,o,i,f,a,c,l,y,p;return y=((l=r&Dr|0)>>20)-K|0,c=0,l>1071644672&&(u=B(0,((c=r+(Kr>>y+1)>>>0)&~(Jr>>(y=((c&Dr)>>20)-K|0)))>>>0),c=(c&Jr|Kr)>>20-y>>>0,r<0&&(c=-c),n-=u),r=Yr(r=Y(a=1-((a=(o=.6931471824645996*(u=kr(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-o))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Er(a,c):B(a,r)}(d,y,p),f*b}var tn=.6931471803691238,en=1.9082149292705877e-10,un=1048575;function on(r){var n,t,e,u,o,i,f,a,c,y,p,v;return 0===r?J:l(r)||r<0?NaN:(o=0,(t=Y(r))<1048576&&(o-=54,t=Y(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-K|0,o+=(a=614244+(t&=un)&1048576|0)>>20|0,f=(r=B(r,t|1072693248^a))-1,(un&2+t)<3?0===f?0===o?0:o*tn+o*en:(i=f*f*(.5-.3333333333333333*f),0===o?f-i:o*tn-(i-o*en-f)):(a=t-398458|0,c=440401-t|0,u=(p=(v=(y=f/(2+f))*y)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),i=e+u,(a|=c)>0?(n=.5*f*f,0===o?f-(n-y*(n+i)):o*tn-(n-(y*(n+i)+o*en)-f)):0===o?f-y*(f-i):o*tn-(y*(f-i)-o*en-f))))}var fn=-.6931471805599453;function an(r,n,t){var e;return l(n)||l(t)||n<=0||t<=0?NaN:r<0?J:(e=-nn(r/t,n))<fn?nr(-Hr(e)):on(-Z(e))}return c(an,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?(t=NaN,function(){return t}):function(t){var e;return l(t)?NaN:t<0?J:(e=-nn(t/n,r))<fn?nr(-Hr(e)):on(-Z(e))};var t})),an},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logcdf=n();
//# sourceMappingURL=index.js.map
