// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,v,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var E=String.fromCharCode,N=isNaN,U=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,c,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,N(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!N(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R,M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Z=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"",z=M&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Z.call(r);n=r[q],a=q,e=null!=(i=r)&&X.call(i,a);try{r[q]=void 0}catch(e){return Z.call(r)}return t=Z.call(r),e?r[q]=n:delete r[q],t}:function(r){return Z.call(r)},B="function"==typeof Uint32Array,D="function"==typeof Uint32Array?Uint32Array:null,J="function"==typeof Uint32Array?Uint32Array:void 0;R=function(){var r,e,n;if("function"!=typeof D)return!1;try{e=new D(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(B&&n instanceof Uint32Array||"[object Uint32Array]"===z(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K,Q=R,rr="function"==typeof Float64Array,er="function"==typeof Float64Array?Float64Array:null,nr="function"==typeof Float64Array?Float64Array:void 0;K=function(){var r,e,n;if("function"!=typeof er)return!1;try{e=new er([1,3.14,-3.14,NaN]),n=e,r=(rr&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var tr,ir=K,ar="function"==typeof Uint8Array,or="function"==typeof Uint8Array?Uint8Array:null,ur="function"==typeof Uint8Array?Uint8Array:void 0;tr=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,256,257]),n=e,r=(ar&&n instanceof Uint8Array||"[object Uint8Array]"===z(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,cr=tr,sr="function"==typeof Uint16Array,lr="function"==typeof Uint16Array?Uint16Array:null,pr="function"==typeof Uint16Array?Uint16Array:void 0;fr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(sr&&n instanceof Uint16Array||"[object Uint16Array]"===z(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,gr={uint16:fr,uint8:cr};(yr=new gr.uint16(1))[0]=4660;var dr=52===new gr.uint8(yr.buffer)[0],vr=!0===dr?1:0,hr=new ir(1),wr=new Q(hr.buffer);function br(r){return hr[0]=r,wr[vr]}var mr,Ar,_r=!0===dr?1:0,Er=new ir(1),Nr=new Q(Er.buffer);function Ur(r,e){return Er[0]=r,Nr[_r]=e>>>0,Er[0]}!0===dr?(mr=1,Ar=0):(mr=0,Ar=1);var Ir={HIGH:mr,LOW:Ar},Sr=new ir(1),xr=new Q(Sr.buffer),kr=Ir.HIGH,Fr=Ir.LOW;function jr(r,e){return xr[kr]=r,xr[Fr]=e,Sr[0]}var Tr=Number.POSITIVE_INFINITY,Or=Number.NEGATIVE_INFINITY,Vr=1023,$r=.6931471803691238,Gr=1.9082149292705877e-10,Hr=1.4426950408889634;function Wr(r){var e,n,t,i,a,o,u,f,c,s,l,p,y;if(r===Tr||P(r))return r;if(r===Or)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return Tr}if(o=0|br(f),f>.34657359027997264)f<1.0397207708399179?t?(i=r+$r,a=-Gr,y=-1):(i=r-$r,a=Gr,y=1):(y=t?Hr*r-.5:Hr*r+.5,i=r-(l=y|=0)*$r,a=l*Gr),s=i-(r=i-a)-a;else{if(o<1016070144)return r;y=0}return u=1+(c=r*(e=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),p=c*((u-(l=3-u*e))/(6-r*l)),0===y?r-(r*p-c):(n=jr(Vr+y<<20,0),p=r*(p-s)-s,p-=c,-1===y?.5*(r-p)-.5:1===y?r<-.25?-2*(p-(r+.5)):1+2*(r-p):y<=-2||y>56?(f=1-(p-r),1024===y?f=Ur(f,i=br(f)+(y<<20)|0):f*=n,f-1):(l=1,y<20?f=(l=Ur(l,i=1072693248-(2097152>>y)|0))-(p-r):(f=r-(p+(l=Ur(l,i=Vr-y<<20|0))),f+=1),f*=n))}var Cr=.6931471803691238,Lr=1.9082149292705877e-10;function Pr(r){var e,n,t,i,a,o,u,f,c,s;if(r<-1||P(r))return NaN;if(-1===r)return Or;if(r===Tr)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,n=1)}return 0!==s&&(t<9007199254740992?(a=(s=((n=br(c=1+r))>>20)-Vr)>0?1-(c-r):r-(c-1),a/=c):(s=((n=br(c=r))>>20)-Vr,a=0),(n&=1048575)<434334?c=Ur(c,1072693248|n):(s+=1,c=Ur(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?s*Cr+(a+=s*Lr):s*Cr-((f=e*(1-.6666666666666666*i))-(s*Lr+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(e-o*(e+f)):s*Cr-(e-(o*(e+f)+(s*Lr+a))-i))}var Rr=Math.floor,Mr=Math.ceil;function Zr(r){return r<0?Mr(r):Rr(r)}function Xr(r){return r===Tr||r===Or}var Yr,qr,zr=2147483647;!0===dr?(Yr=1,qr=0):(Yr=0,qr=1);var Br={HIGH:Yr,LOW:qr},Dr=new ir(1),Jr=new Q(Dr.buffer),Kr=Br.HIGH,Qr=Br.LOW;function re(r,e,n,t){return Dr[0]=r,e[t]=Jr[Kr],e[t+n]=Jr[Qr],e}function ee(r){return re(r,[0,0],1,0)}L(ee,"assign",re);var ne=[0,0];function te(r,e){var n,t;return ee.assign(r,ne,1,0),n=ne[0],n&=zr,t=br(e),jr(n|=t&=2147483648,ne[1])}function ie(r){return Math.abs(r)}function ae(r,e,n,t){return P(r)||Xr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&ie(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return ae(r,[0,0],1,0)}),"assign",ae);var oe=[0,0],ue=[0,0];function fe(r,e){var n,t;return 0===e||0===r||P(r)||Xr(r)?r:(ae(r,oe,1,0),e+=oe[1],e+=function(r){var e=br(r);return(e=(2146435072&e)>>>20)-Vr|0}(r=oe[0]),e<-1074?te(0,r):e>1023?r<0?Or:Tr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ee.assign(r,ue,1,0),n=ue[0],n&=2148532223,t*jr(n|=e+Vr<<20,ue[1])))}var ce=1.4426950408889634,se=1/(1<<28);function le(r){var e;return P(r)||r===Tr?r:r===Or?0:r>709.782712893384?Tr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<se?1+r:function(r,e,n){var t,i,a,o;return fe(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=Zr(r<0?ce*r-.5:ce*r+.5)),1.9082149292705877e-10*e,e)}function pe(r){return Rr(r)===r}function ye(r){return pe(r/2)}function ge(r){return ye(r>0?r-1:r+1)}var de=Math.sqrt,ve=!0===dr?0:1,he=new ir(1),we=new Q(he.buffer);function be(r,e){return he[0]=r,we[ve]=e>>>0,he[0]}function me(r){return 0|r}var Ae=1048576,_e=[1,1.5],Ee=[0,.5849624872207642],Ne=[0,1.350039202129749e-8],Ue=1048575,Ie=1048576,Se=1083179008,xe=1e300,ke=1e-300,Fe=[0,0],je=[0,0];function Te(r,e){var n,t,i,a,o,u,f,c,s,l,p,y,g,d;if(P(r)||P(e))return NaN;if(ee.assign(e,Fe,1,0),o=Fe[0],0===Fe[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return de(r);if(-.5===e)return 1/de(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Xr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:ie(r)<1==(e===Tr)?0:Tr}(r,e)}if(ee.assign(r,Fe,1,0),a=Fe[0],0===Fe[1]){if(0===a)return function(r,e){return e===Or?Tr:e===Tr?0:e>0?ge(e)?r:0:ge(e)?te(Tr,r):Tr}(r,e);if(1===r)return 1;if(-1===r&&ge(e))return-1;if(Xr(r))return r===Or?Te(-0,-e):e<0?0:Tr}if(r<0&&!1===pe(e))return(r-r)/(r-r);if(i=ie(r),n=a&zr|0,t=o&zr|0,f=o>>>31|0,u=(u=a>>>31|0)&&ge(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(br(r)&zr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*xe*xe:u*ke*ke;if(n>1072693248)return 0===f?u*xe*xe:u*ke*ke;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=be(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(je,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,v,h,w,b,m,A,_,E;return m=0,n<Ae&&(m-=53,n=br(e*=9007199254740992)),m+=(n>>20)-Vr|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=Ae),o=be(i=(w=(e=Ur(e,n))-(c=_e[_]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=Ur(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=be(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=be(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+Ne[_])-((g=be(g=(p=.9617967009544373*l)+y+(s=Ee[_])+(v=m),0))-v-s-p),r[0]=g,r[1]=d,r}(je,i,n);if(y=(l=(e-(c=be(e,0)))*p[0]+e*p[1])+(s=c*p[0]),ee.assign(y,Fe,1,0),g=me(Fe[0]),d=me(Fe[1]),g>=Se){if(0!=(g-Se|d))return u*xe*xe;if(l+8008566259537294e-32>y-s)return u*xe*xe}else if((g&zr)>=1083231232){if(0!=(g-3230714880|d))return u*ke*ke;if(l<=y-s)return u*ke*ke}return y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&zr|0)>>20)-Vr|0,c=0,s>1071644672&&(i=Ur(0,((c=r+(Ie>>l+1)>>>0)&~(Ue>>(l=((c&zr)>>20)-Vr|0)))>>>0),c=(c&Ue|Ie)>>20-l>>>0,r<0&&(c=-c),e-=i),r=me(r=br(f=1-((f=(a=.6931471824645996*(i=be(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?fe(f,c):Ur(f,r)}(g,s,l),u*y}var Oe=.6931471803691238,Ve=1.9082149292705877e-10,$e=1048575;function Ge(r){var e,n,t,i,a,o,u,f,c,s,l,p;return 0===r?Or:P(r)||r<0?NaN:(a=0,(n=br(r))<1048576&&(a-=54,n=br(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-Vr|0,a+=(f=614244+(n&=$e)&1048576|0)>>20|0,u=(r=Ur(r,n|1072693248^f))-1,($e&2+n)<3?0===u?0===a?0:a*Oe+a*Ve:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Oe-(o-a*Ve-u)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Oe-(e-(s*(e+o)+a*Ve)-u)):0===a?u-s*(u-o):a*Oe-(s*(u-o)-a*Ve-u))))}var He=-.6931471805599453;function We(r,e,n){var t;return P(e)||P(n)||e<=0||n<=0?NaN:r<0?Or:(t=-Te(r/n,e))<He?Pr(-le(t)):Ge(-Wr(t))}return L(We,"factory",(function(r,e){return P(r)||P(e)||r<=0||e<=0?(n=NaN,function(){return n}):function(n){var t;return P(n)?NaN:n<0?Or:(t=-Te(n/e,r))<He?Pr(-le(t)):Ge(-Wr(t))};var n})),We},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).logcdf=e();
//# sourceMappingURL=index.js.map
