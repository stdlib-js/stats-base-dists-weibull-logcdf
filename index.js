// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n,t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,u=Object.prototype,o=u.toString,i=u.__defineGetter__,f=u.__defineSetter__,a=u.__lookupGetter__,c=u.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,n,t){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=u,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,t.get),p&&f&&f.call(r,n,t.set),r};var l=n;function y(r){return r!=r}var p,v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,d=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"";p=v&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return b.call(r);t=r[s],o=s,n=null!=(u=r)&&d.call(u,o);try{r[s]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[s]=t:delete r[s],e}:function(r){return b.call(r)};var w,_=p,A="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,h="function"==typeof Uint32Array?Uint32Array:void 0;w=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(A&&t instanceof Uint32Array||"[object Uint32Array]"===_(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var N,U=w,g="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,I="function"==typeof Float64Array?Float64Array:void 0;N=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j([1,3.14,-3.14,NaN]),t=n,r=(g&&t instanceof Float64Array||"[object Float64Array]"===_(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O,S=N,E="function"==typeof Uint8Array,F="function"==typeof Uint8Array?Uint8Array:null,T="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,256,257]),t=n,r=(E&&t instanceof Uint8Array||"[object Uint8Array]"===_(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var H,G=O,P="function"==typeof Uint16Array,x="function"==typeof Uint16Array?Uint16Array:null,M="function"==typeof Uint16Array?Uint16Array:void 0;H=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,65536,65537]),t=n,r=(P&&t instanceof Uint16Array||"[object Uint16Array]"===_(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var L,V={uint16:H,uint8:G};(L=new V.uint16(1))[0]=4660;var W=52===new V.uint8(L.buffer)[0],k=!0===W?1:0,Y=new S(1),q=new U(Y.buffer);function C(r){return Y[0]=r,q[k]}var z=!0===W?1:0,B=new S(1),D=new U(B.buffer);function J(r,n){return B[0]=r,D[z]=n>>>0,B[0]}var K=Number.POSITIVE_INFINITY,Q=Number.NEGATIVE_INFINITY,R=1023,X=.6931471803691238,Z=1.9082149292705877e-10,$=1.4426950408889634;function rr(r){var n,t,e,u,o,i,f,a,c,l,p,v;if(r===K||y(r))return r;if(r===Q)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return K}if(o=0|C(f),f>.34657359027997264)f<1.0397207708399179?t?(e=r+X,u=-Z,v=-1):(e=r-X,u=Z,v=1):(v=t?$*r-.5:$*r+.5,e=r-(l=v|=0)*X,u=l*Z),c=e-(r=e-u)-u;else{if(o<1016070144)return r;v=0}return i=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),p=a*((i-(l=3-i*n))/(6-r*l)),0===v?r-(r*p-a):(p=r*(p-c)-c,p-=a,-1===v?.5*(r-p)-.5:1===v?r<-.25?-2*(p-(r+.5)):1+2*(r-p):v<=-2||v>56?(f=J(f=1-(p-r),e=C(f)+(v<<20)|0))-1:(l=1,v<20?f=(l=J(l,e=1072693248-(2097152>>v)|0))-(p-r):(f=r-(p+(l=J(l,e=R-v<<20|0))),f+=1),J(f,e=C(f)+(v<<20)|0)))}var nr=.6931471803691238,tr=1.9082149292705877e-10;function er(r){var n,t,e,u,o,i,f,a,c,l;if(r<-1||y(r))return NaN;if(-1===r)return Q;if(r===K)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(o=(l=((t=C(c=1+r))>>20)-R)>0?1-(c-r):r-(c-1),o/=c):(l=((t=C(c=r))>>20)-R,o=0),(t&=1048575)<434334?c=J(c,1072693248|t):(l+=1,c=J(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*nr+(o+=l*tr):l*nr-((a=n*(1-.6666666666666666*u))-(l*tr+o)-u):(a=(f=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?u-(n-i*(n+a)):l*nr-(n-(i*(n+a)+(l*tr+o))-u))}var ur,or,ir=Math.floor,fr=Math.ceil;function ar(r){return r<0?fr(r):ir(r)}function cr(r){return r===K||r===Q}!0===W?(ur=1,or=0):(ur=0,or=1);var lr,yr,pr={HIGH:ur,LOW:or},vr=new S(1),br=new U(vr.buffer),dr=pr.HIGH,sr=pr.LOW;function wr(r,n){return vr[0]=n,r[0]=br[dr],r[1]=br[sr],r}function _r(r,n){return 1===arguments.length?wr([0,0],r):wr(r,n)}!0===W?(lr=1,yr=0):(lr=0,yr=1);var Ar={HIGH:lr,LOW:yr},mr=new S(1),hr=new U(mr.buffer),Nr=Ar.HIGH,Ur=Ar.LOW;function gr(r,n){return hr[Nr]=r,hr[Ur]=n,mr[0]}var jr=[0,0];function Ir(r,n){var t,e;return _r(jr,r),t=jr[0],t&=2147483647,e=C(n),gr(t|=e&=2147483648,jr[1])}function Or(r){return Math.abs(r)}function Sr(r,n){return y(n)||cr(n)?(r[0]=n,r[1]=0,r):0!==n&&Or(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Er=[0,0],Fr=[0,0];function Tr(r,n){var t,e;return 0===n||0===r||y(r)||cr(r)?r:(function(r,n){1===arguments.length?Sr([0,0],r):Sr(r,n)}(Er,r),n+=Er[1],n+=function(r){var n=C(r);return(n=(2146435072&n)>>>20)-R|0}(r=Er[0]),n<-1074?Ir(0,r):n>1023?r<0?Q:K:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,_r(Fr,r),t=Fr[0],t&=2148532223,e*gr(t|=n+R<<20,Fr[1])))}var Hr=1.4426950408889634,Gr=1/(1<<28);function Pr(r){var n;return y(r)||r===K?r:r===Q?0:r>709.782712893384?K:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Gr?1+r:function(r,n,t){var e,u,o,i;return Tr(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=ar(r<0?Hr*r-.5:Hr*r+.5)),1.9082149292705877e-10*n,n)}function xr(r){return ir(r)===r}function Mr(r){return xr(r/2)}function Lr(r){return Mr(r>0?r-1:r+1)}var Vr=Math.sqrt,Wr=!0===W?0:1,kr=new S(1),Yr=new U(kr.buffer);function qr(r,n){return kr[0]=r,Yr[Wr]=n>>>0,kr[0]}function Cr(r){return 0|r}var zr=1048576,Br=[1,1.5],Dr=[0,.5849624872207642],Jr=[0,1.350039202129749e-8],Kr=2147483647,Qr=1048575,Rr=1048576,Xr=2147483647,Zr=1083179008,$r=1e300,rn=1e-300,nn=[0,0],tn=[0,0];function en(r,n){var t,e,u,o,i,f,a,c,l,p,v,b,d,s;if(y(r)||y(n))return NaN;if(_r(nn,n),i=nn[0],0===nn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Vr(r);if(-.5===n)return 1/Vr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(cr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Or(r)<1==(n===K)?0:K}(r,n)}if(_r(nn,r),o=nn[0],0===nn[1]){if(0===o)return function(r,n){return n===Q?K:n===K?0:n>0?Lr(n)?r:0:Lr(n)?Ir(K,r):K}(r,n);if(1===r)return 1;if(-1===r&&Lr(n))return-1;if(cr(r))return r===Q?en(-0,-n):n<0?0:K}if(r<0&&!1===xr(n))return(r-r)/(r-r);if(u=Or(r),t=o&Xr|0,e=i&Xr|0,a=i>>>31|0,f=(f=o>>>31|0)&&Lr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&C(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*$r*$r:f*rn*rn;if(t>1072693248)return 0===a?f*$r*$r:f*rn*rn;v=function(r,n){var t,e,u,o,i,f;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=qr(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r}(tn,u)}else v=function(r,n,t){var e,u,o,i,f,a,c,l,y,p,v,b,d,s,w,_,A,m,h,N,U;return m=0,t<zr&&(m-=53,t=C(n*=9007199254740992)),m+=(t>>20)-R|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,m+=1,t-=zr),i=qr(u=(_=(n=J(n,t))-(c=Br[N]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),a=J(0,e+=N<<18),w=(o=u*u)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=qr(a=3+(o=i*i)+(w+=(f=A*(_-i*a-i*(n-(a-c))))*(i+u)),0),d=(v=-7.028461650952758e-9*(y=qr(y=(_=i*a)+(A=f*a+(w-(a-3-o))*u),0))+.9617966939259756*(A-(y-_))+Jr[N])-((b=qr(b=(p=.9617967009544373*y)+v+(l=Dr[N])+(s=m),0))-s-l-p),r[0]=b,r[1]=d,r}(tn,u,t);if(p=(n-(c=qr(n,0)))*v[0]+n*v[1],l=c*v[0],_r(nn,b=p+l),d=Cr(nn[0]),s=Cr(nn[1]),d>=Zr){if(0!=(d-Zr|s))return f*$r*$r;if(p+8008566259537294e-32>b-l)return f*$r*$r}else if((d&Xr)>=1083231232){if(0!=(d-3230714880|s))return f*rn*rn;if(p<=b-l)return f*rn*rn}return b=function(r,n,t){var e,u,o,i,f,a,c,l,y,p;return y=((l=r&Kr|0)>>20)-R|0,c=0,l>1071644672&&(u=J(0,((c=r+(Rr>>y+1)>>>0)&~(Qr>>(y=((c&Kr)>>20)-R|0)))>>>0),c=(c&Qr|Rr)>>20-y>>>0,r<0&&(c=-c),n-=u),r=Cr(r=C(a=1-((a=(o=.6931471824645996*(u=qr(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-o))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Tr(a,c):J(a,r)}(d,l,p),f*b}var un=.6931471803691238,on=1.9082149292705877e-10,fn=1048575;function an(r){var n,t,e,u,o,i,f,a,c,l,p,v;return 0===r?Q:y(r)||r<0?NaN:(o=0,(t=C(r))<1048576&&(o-=54,t=C(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-R|0,o+=(a=614244+(t&=fn)&1048576|0)>>20|0,f=(r=J(r,t|1072693248^a))-1,(fn&2+t)<3?0===f?0===o?0:o*un+o*on:(i=f*f*(.5-.3333333333333333*f),0===o?f-i:o*un-(i-o*on-f)):(a=t-398458|0,c=440401-t|0,u=(p=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),i=e+u,(a|=c)>0?(n=.5*f*f,0===o?f-(n-l*(n+i)):o*un-(n-(l*(n+i)+o*on)-f)):0===o?f-l*(f-i):o*un-(l*(f-i)-o*on-f))))}var cn=-.6931471805599453;function ln(r,n,t){var e;return y(n)||y(t)||n<=0||t<=0?NaN:r<0?Q:(e=-en(r/t,n))<cn?er(-Pr(e)):an(-rr(e))}function yn(r,n){return y(r)||y(n)||r<=0||n<=0?(t=NaN,function(){return t}):function(t){var e;return y(t)?NaN:t<0?Q:(e=-en(t/n,r))<cn?er(-Pr(e)):an(-rr(e))};var t}l(ln,"factory",{configurable:!1,enumerable:!1,writable:!1,value:yn}),r.default=ln,r.factory=yn,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).logcdf={});
//# sourceMappingURL=index.js.map
