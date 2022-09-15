// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,u=e.toString,i=e.__defineGetter__,o=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,t.get),v&&o&&o.call(r,n,t.set),r};var c=n;function l(r){return r!=r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var v=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;var b,w="function"==typeof Symbol?Symbol.toStringTag:"";b=y&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,i;if(null==r)return v.call(r);t=r[w],i=w,n=null!=(u=r)&&p.call(u,i);try{r[w]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[w]=t:delete r[w],e}:function(r){return v.call(r)};var A=b,_="function"==typeof Uint32Array;var m="function"==typeof Uint32Array?Uint32Array:null;var s,d="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(_&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h=s,N="function"==typeof Float64Array;var U="function"==typeof Float64Array?Float64Array:null;var j,g="function"==typeof Float64Array?Float64Array:void 0;j=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U([1,3.14,-3.14,NaN]),t=n,r=(N&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var I=j,O="function"==typeof Uint8Array;var S="function"==typeof Uint8Array?Uint8Array:null;var E,F="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,256,257]),t=n,r=(O&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var H=E,T="function"==typeof Uint16Array;var G="function"==typeof Uint16Array?Uint16Array:null;var P,L="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(T&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M,V={uint16:P,uint8:H};(M=new V.uint16(1))[0]=4660;var W=52===new V.uint8(M.buffer)[0],x=!0===W?1:0,k=new I(1),Y=new h(k.buffer);function q(r){return k[0]=r,Y[x]}var C=!0===W?1:0,z=new I(1),B=new h(z.buffer);function D(r,n){return z[0]=r,B[C]=n>>>0,z[0]}var J=Number.POSITIVE_INFINITY,K=Number.NEGATIVE_INFINITY;var Q=.6931471803691238,R=1.9082149292705877e-10;function X(r){var n,t,e,u,i,o,f,a,c,y,v,p;if(r===J||l(r))return r;if(r===K)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return J}if(i=0|q(f),f>.34657359027997264)f<1.0397207708399179?t?(e=r+Q,u=-R,p=-1):(e=r-Q,u=R,p=1):(p=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(y=p|=0)*Q,u=y*R),c=e-(r=e-u)-u;else{if(i<1016070144)return r;p=0}return o=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),v=a*((o-(y=3-o*n))/(6-r*y)),0===p?r-(r*v-a):(v=r*(v-c)-c,v-=a,-1===p?.5*(r-v)-.5:1===p?r<-.25?-2*(v-(r+.5)):1+2*(r-v):p<=-2||p>56?(f=D(f=1-(v-r),e=q(f)+(p<<20)|0))-1:(y=1,p<20?f=(y=D(y,e=1072693248-(2097152>>p)|0))-(v-r):(f=r-(v+(y=D(y,e=1023-p<<20|0))),f+=1),D(f,e=q(f)+(p<<20)|0)))}var Z=.6931471803691238,$=1.9082149292705877e-10;function rr(r){var n,t,e,u,i,o,f,a,c,y;if(r<-1||l(r))return NaN;if(-1===r)return K;if(r===J)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,u=r,t=1)}return 0!==y&&(e<9007199254740992?(i=(y=((t=q(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),i/=c):(y=((t=q(c=r))>>20)-1023,i=0),(t&=1048575)<434334?c=D(c,1072693248|t):(y+=1,c=D(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?y*Z+(i+=y*$):y*Z-((a=n*(1-.6666666666666666*u))-(y*$+i)-u):(a=(f=(o=u/(2+u))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===y?u-(n-o*(n+a)):y*Z-(n-(o*(n+a)+(y*$+i))-u))}var nr=Math.floor,tr=Math.ceil;function er(r){return r<0?tr(r):nr(r)}var ur,ir;function or(r){return r===J||r===K}!0===W?(ur=1,ir=0):(ur=0,ir=1);var fr,ar,cr={HIGH:ur,LOW:ir},lr=new I(1),yr=new h(lr.buffer),vr=cr.HIGH,pr=cr.LOW;function br(r,n){return lr[0]=n,r[0]=yr[vr],r[1]=yr[pr],r}function wr(r,n){return 1===arguments.length?br([0,0],r):br(r,n)}!0===W?(fr=1,ar=0):(fr=0,ar=1);var Ar={HIGH:fr,LOW:ar},_r=new I(1),mr=new h(_r.buffer),sr=Ar.HIGH,dr=Ar.LOW;function hr(r,n){return mr[sr]=r,mr[dr]=n,_r[0]}var Nr=[0,0];function Ur(r,n){var t,e;return wr(Nr,r),t=Nr[0],t&=2147483647,e=q(n),hr(t|=e&=2147483648,Nr[1])}function jr(r){return Math.abs(r)}function gr(r,n){return l(n)||or(n)?(r[0]=n,r[1]=0,r):0!==n&&jr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Ir=[0,0],Or=[0,0];function Sr(r,n){var t,e;return 0===n||0===r||l(r)||or(r)?r:(function(r,n){1===arguments.length?gr([0,0],r):gr(r,n)}(Ir,r),n+=Ir[1],n+=function(r){var n=q(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Ir[0]),n<-1074?Ur(0,r):n>1023?r<0?K:J:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,wr(Or,r),t=Or[0],t&=2148532223,e*hr(t|=n+1023<<20,Or[1])))}function Er(r){var n;return l(r)||r===J?r:r===K?0:r>709.782712893384?J:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,i,o;return Sr(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=er(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Fr(r){return nr(r)===r}function Hr(r){return Fr(r/2)}function Tr(r){return Hr(r>0?r-1:r+1)}var Gr=Math.sqrt,Pr=!0===W?0:1,Lr=new I(1),Mr=new h(Lr.buffer);function Vr(r,n){return Lr[0]=r,Mr[Pr]=n>>>0,Lr[0]}function Wr(r){return 0|r}var xr=[1,1.5],kr=[0,.5849624872207642],Yr=[0,1.350039202129749e-8];var qr=1e300,Cr=1e-300,zr=[0,0],Br=[0,0];function Dr(r,n){var t,e,u,i,o,f,a,c,y,v,p,b,w,A;if(l(r)||l(n))return NaN;if(wr(zr,n),o=zr[0],0===zr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Gr(r);if(-.5===n)return 1/Gr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(or(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:jr(r)<1==(n===J)?0:J}(r,n)}if(wr(zr,r),i=zr[0],0===zr[1]){if(0===i)return function(r,n){return n===K?J:n===J?0:n>0?Tr(n)?r:0:Tr(n)?Ur(J,r):J}(r,n);if(1===r)return 1;if(-1===r&&Tr(n))return-1;if(or(r))return r===K?Dr(-0,-n):n<0?0:J}if(r<0&&!1===Fr(n))return(r-r)/(r-r);if(u=jr(r),t=2147483647&i|0,e=2147483647&o|0,a=o>>>31|0,f=(f=i>>>31|0)&&Tr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&q(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*qr*qr:f*Cr*Cr;if(t>1072693248)return 0===a?f*qr*qr:f*Cr*Cr;p=function(r,n){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Vr(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r}(Br,u)}else p=function(r,n,t){var e,u,i,o,f,a,c,l,y,v,p,b,w,A,_,m,s,d,h,N,U;return d=0,t<1048576&&(d-=53,t=q(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,d+=1,t-=1048576),o=Vr(u=(m=(n=D(n,t))-(c=xr[N]))*(s=1/(n+c)),0),e=524288+(t>>1|536870912),a=D(0,e+=N<<18),_=(i=u*u)*i*(0===(U=i)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=Vr(a=3+(i=o*o)+(_+=(f=s*(m-o*a-o*(n-(a-c))))*(o+u)),0),w=(p=-7.028461650952758e-9*(y=Vr(y=(m=o*a)+(s=f*a+(_-(a-3-i))*u),0))+.9617966939259756*(s-(y-m))+Yr[N])-((b=Vr(b=(v=.9617967009544373*y)+p+(l=kr[N])+(A=d),0))-A-l-v),r[0]=b,r[1]=w,r}(Br,u,t);if(v=(n-(c=Vr(n,0)))*p[0]+n*p[1],y=c*p[0],wr(zr,b=v+y),w=Wr(zr[0]),A=Wr(zr[1]),w>=1083179008){if(0!=(w-1083179008|A))return f*qr*qr;if(v+8008566259537294e-32>b-y)return f*qr*qr}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|A))return f*Cr*Cr;if(v<=b-y)return f*Cr*Cr}return b=function(r,n,t){var e,u,i,o,f,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=i=D(0,e)),r=Wr(r=q(c=1-((c=(o=.6931471824645996*(i=Vr(i=t+n,0)))+(f=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=f-(c-o))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?Sr(c,l):D(c,r)}(w,y,v),f*b}var Jr=.6931471803691238,Kr=1.9082149292705877e-10;function Qr(r){var n,t,e,u,i,o,f,a,c,y,v,p;return 0===r?K:l(r)||r<0?NaN:(i=0,(t=q(r))<1048576&&(i-=54,t=q(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-1023|0,i+=(a=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=D(r,t|1072693248^a))-1,(1048575&2+t)<3?0===f?0===i?0:i*Jr+i*Kr:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*Jr-(o-i*Kr-f)):(a=t-398458|0,c=440401-t|0,u=(v=(p=(y=f/(2+f))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),o=e+u,(a|=c)>0?(n=.5*f*f,0===i?f-(n-y*(n+o)):i*Jr-(n-(y*(n+o)+i*Kr)-f)):0===i?f-y*(f-o):i*Jr-(y*(f-o)-i*Kr-f))))}function Rr(r,n,t){var e;return l(n)||l(t)||n<=0||t<=0?NaN:r<0?K:(e=-Dr(r/t,n))<-.6931471805599453?rr(-Er(e)):Qr(-X(e))}function Xr(r,n){return l(r)||l(n)||r<=0||n<=0?(t=NaN,function(){return t}):function(t){var e;if(l(t))return NaN;if(t<0)return K;return(e=-Dr(t/n,r))<-.6931471805599453?rr(-Er(e)):Qr(-X(e))};var t}c(Rr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Xr});export{Rr as default,Xr as factory};
//# sourceMappingURL=mod.js.map
