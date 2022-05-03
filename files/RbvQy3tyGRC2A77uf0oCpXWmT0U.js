;if(CloudflareApps.matchPage(CloudflareApps.installs['2wDWgfj9lnMF'].URLPatterns)){(function(){'use strict';if(!window.addEventListener)return;var options=CloudflareApps.installs['2wDWgfj9lnMF'].options;var isPreview=("2wDWgfj9lnMF"==='preview');function updateElement(){if(isPreview&&!options.application){options.appID=2885;options.appKey='gcaxFFvRz0SrO1cDRsvSDCPSC5rTj8h1eck4nKNiSLTNZcOdJ8m1Y0z4kh6j28PE';}else if(options.application){var parts=options.application.split('-');if(parts.length===2){options.appID=parts[0];options.appKey=parts[1];}}
if(!options.appID||!options.appKey){return;}
if(window.doorbell){window.doorbell.remove();delete window.doorbell;}
if(!window.doorbellOptions){window.doorbellOptions={};}
window.doorbellOptions.appKey=options.appKey;window.doorbellOptions.windowLoaded=true;var d=document;var g=d.createElement('script');g.id='doorbellScript';g.type='text/javascript';g.async=true;g.src='https://embed.doorbell.io/button/'+options.appID+'?t='+(new Date().getTime());(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(g);}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateElement);}else{updateElement();}
window.CloudflareApps.installs['2wDWgfj9lnMF'].scope={setOptions:function(nextOptions){options=nextOptions;updateElement();}}}());};if(CloudflareApps.matchPage(CloudflareApps.installs['7EAuLsooR8uH'].URLPatterns)){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter});}};__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if((mode&4)&&typeof value==='object'&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,'default',{enumerable:true,value:value});if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));return ns;};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s="./src/index.js");})
({"./src/index.js":(function(module,exports,__webpack_require__){"use strict";function get_host_name(){if("7EAuLsooR8uH"=='preview'){console.log('preview mode');return CloudflareApps.proxy.originalURL.parsed.host;}else{return window.location.hostname;}}
function check_plan(){var options=CloudflareApps.installs['7EAuLsooR8uH'].options;var product=CloudflareApps.installs['7EAuLsooR8uH'].product;if(product&&product.id==='google-analytics-pro'){console.log('CF-GA: Thank you for installing pro :)');}else{console.log('CF-GA: Please update to pro in order to get more features.');}}
function init(){check_plan();var current_host=get_host_name();var sub_domain_tracker_ids=CloudflareApps.installs['7EAuLsooR8uH'].options.subdomain_tracker_ids;var options=CloudflareApps.installs['7EAuLsooR8uH'].options;var product=CloudflareApps.installs['7EAuLsooR8uH'].product;if(product&&product.id==='google-analytics-pro'&&true){var subdomain_tracker=sub_domain_tracker_ids.filter(function(item){return item.subdomain==current_host;});if(subdomain_tracker[0]&&subdomain_tracker[0].tracker_id){send_to_google_analytics(subdomain_tracker[0].tracker_id);}else{send_to_google_analytics(CloudflareApps.installs['7EAuLsooR8uH'].options.tracker_id);}}else{send_to_google_analytics(CloudflareApps.installs['7EAuLsooR8uH'].options.tracker_id);}}
function send_to_google_analytics(tracker_id){console.log('CF-GA: '+get_host_name()+" is using "+tracker_id);if(tracker_id!="UA-XXXXX-Y"){var gtag=function gtag(){dataLayer.push(arguments);};var url="https://www.googletagmanager.com/gtag/js?id="+tracker_id;(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);})(window,document,'script',url,'ga');window.dataLayer=window.dataLayer||[];gtag('js',new Date());gtag('config',tracker_id);}}
init();})});};if(CloudflareApps.matchPage(CloudflareApps.installs['fHvTcnVf6zN9'].URLPatterns)){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.i=function(value){return value;};__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter});}};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=4);})
([(function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,'__esModule',{value:true})
exports.default=easeInOutQuad
function easeInOutQuad(t,b,c,d){t/=d/2
if(t<1)return c/2*t*t+b
t--
return-c/2*(t*(t-2)-1)+b}}),(function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,'__esModule',{value:true})
var fancy=exports.fancy='M83.5244052,130.453237 L129.059785,84.9178576 L174.595164,130.453237 L144.213452,130.453237 L144.213452,186.792818 L113.896389,186.792818 L113.896389,130.453237 L83.5244052,130.453237 Z M64.431707,68.715835 L64.431707,75.0983746 L193.678134,75.0983746 L193.678134,68.715835 L64.431707,68.715835 Z'
var line=exports.line='M88.4020203,153.455844 L128,113.857864 L167.59798,153.455844 L173.254834,147.79899 L128,102.544156 L125.171573,105.372583 L82.745166,147.79899 L88.4020203,153.455844 Z'
var pointer=exports.pointer='M92.9062438,130.532138 C89.0010007,134.437382 82.6693513,134.437382 78.7641081,130.532138 C74.858865,126.626895 74.858865,120.295246 78.7641081,116.390003 L115.887214,79.2668969 L121.190515,73.963596 C125.095758,70.0583529 131.427408,70.0583529 135.332651,73.963596 L140.635951,79.2668969 L177.759058,116.390003 C181.664301,120.295246 181.664301,126.626895 177.759058,130.532138 C173.853814,134.437382 167.522165,134.437382 163.616922,130.532138 L138,104.915217 L138,175 C138,180.522848 133.522848,185 128,185 C122.477152,185 118,180.522848 118,175 L118,105.438382 L92.9062438,130.532138 Z'
var triangle=exports.triangle='M185.081032,156.382867 L128.006097,99.3079319 L70.9311613,156.382867 L185.081032,156.382867 Z'}),(function(module,exports){(function(Math){var trimLeft=/^\s+/,trimRight=/\s+$/,tinyCounter=0,mathRound=Math.round,mathMin=Math.min,mathMax=Math.max,mathRandom=Math.random
function tinycolor(color,opts){color=(color)||''
opts=opts||{}
if(color instanceof tinycolor){return color}
if(!(this instanceof tinycolor)){return new tinycolor(color,opts)}
var rgb=inputToRGB(color)
this._originalInput=color,this._r=rgb.r,this._g=rgb.g,this._b=rgb.b,this._a=rgb.a,this._roundA=mathRound(100*this._a)/100,this._format=opts.format||rgb.format
this._gradientType=opts.gradientType
if(this._r<1){this._r=mathRound(this._r)}
if(this._g<1){this._g=mathRound(this._g)}
if(this._b<1){this._b=mathRound(this._b)}
this._ok=rgb.ok
this._tc_id=tinyCounter++}
tinycolor.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var rgb=this.toRgb()
return(rgb.r*299+rgb.g*587+rgb.b*114)/1000},getLuminance:function(){var rgb=this.toRgb()
var RsRGB,GsRGB,BsRGB,R,G,B
RsRGB=rgb.r/255
GsRGB=rgb.g/255
BsRGB=rgb.b/255
if(RsRGB<=0.03928){R=RsRGB/12.92}else{R=Math.pow(((RsRGB+0.055)/1.055),2.4)}
if(GsRGB<=0.03928){G=GsRGB/12.92}else{G=Math.pow(((GsRGB+0.055)/1.055),2.4)}
if(BsRGB<=0.03928){B=BsRGB/12.92}else{B=Math.pow(((BsRGB+0.055)/1.055),2.4)}
return(0.2126*R)+(0.7152*G)+(0.0722*B)},setAlpha:function(value){this._a=boundAlpha(value)
this._roundA=mathRound(100*this._a)/100
return this},toHsv:function(){var hsv=rgbToHsv(this._r,this._g,this._b)
return{h:hsv.h*360,s:hsv.s,v:hsv.v,a:this._a}},toHsvString:function(){var hsv=rgbToHsv(this._r,this._g,this._b)
var h=mathRound(hsv.h*360),s=mathRound(hsv.s*100),v=mathRound(hsv.v*100)
return(this._a==1)?'hsv('+h+', '+s+'%, '+v+'%)':'hsva('+h+', '+s+'%, '+v+'%, '+this._roundA+')'},toHsl:function(){var hsl=rgbToHsl(this._r,this._g,this._b)
return{h:hsl.h*360,s:hsl.s,l:hsl.l,a:this._a}},toHslString:function(){var hsl=rgbToHsl(this._r,this._g,this._b)
var h=mathRound(hsl.h*360),s=mathRound(hsl.s*100),l=mathRound(hsl.l*100)
return(this._a==1)?'hsl('+h+', '+s+'%, '+l+'%)':'hsla('+h+', '+s+'%, '+l+'%, '+this._roundA+')'},toHex:function(allow3Char){return rgbToHex(this._r,this._g,this._b,allow3Char)},toHexString:function(allow3Char){return'#'+this.toHex(allow3Char)},toHex8:function(allow4Char){return rgbaToHex(this._r,this._g,this._b,this._a,allow4Char)},toHex8String:function(allow4Char){return'#'+this.toHex8(allow4Char)},toRgb:function(){return{r:mathRound(this._r),g:mathRound(this._g),b:mathRound(this._b),a:this._a}},toRgbString:function(){return(this._a==1)?'rgb('+mathRound(this._r)+', '+mathRound(this._g)+', '+mathRound(this._b)+')':'rgba('+mathRound(this._r)+', '+mathRound(this._g)+', '+mathRound(this._b)+', '+this._roundA+')'},toPercentageRgb:function(){return{r:mathRound(bound01(this._r,255)*100)+'%',g:mathRound(bound01(this._g,255)*100)+'%',b:mathRound(bound01(this._b,255)*100)+'%',a:this._a}},toPercentageRgbString:function(){return(this._a==1)?'rgb('+mathRound(bound01(this._r,255)*100)+'%, '+mathRound(bound01(this._g,255)*100)+'%, '+mathRound(bound01(this._b,255)*100)+'%)':'rgba('+mathRound(bound01(this._r,255)*100)+'%, '+mathRound(bound01(this._g,255)*100)+'%, '+mathRound(bound01(this._b,255)*100)+'%, '+this._roundA+')'},toName:function(){if(this._a===0){return'transparent'}
if(this._a<1){return false}
return hexNames[rgbToHex(this._r,this._g,this._b,true)]||false},toString:function(format){var formatSet=!!format
format=format||this._format
var formattedString=false
var hasAlpha=this._a<1&&this._a>=0
var needsAlphaFormat=!formatSet&&hasAlpha&&(format==='hex'||format==='hex6'||format==='hex3'||format==='hex4'||format==='hex8'||format==='name')
if(needsAlphaFormat){if(format==='name'&&this._a===0){return this.toName()}
return this.toRgbString()}
if(format==='rgb'){formattedString=this.toRgbString()}
if(format==='prgb'){formattedString=this.toPercentageRgbString()}
if(format==='hex'||format==='hex6'){formattedString=this.toHexString()}
if(format==='hex3'){formattedString=this.toHexString(true)}
if(format==='hex4'){formattedString=this.toHex8String(true)}
if(format==='hex8'){formattedString=this.toHex8String()}
if(format==='name'){formattedString=this.toName()}
if(format==='hsl'){formattedString=this.toHslString()}
if(format==='hsv'){formattedString=this.toHsvString()}
return formattedString||this.toHexString()},clone:function(){return tinycolor(this.toString())},_applyModification:function(fn,args){var color=fn.apply(null,[this].concat([].slice.call(args)))
this._r=color._r
this._g=color._g
this._b=color._b
this.setAlpha(color._a)
return this},lighten:function(){return this._applyModification(lighten,arguments)},brighten:function(){return this._applyModification(brighten,arguments)},darken:function(){return this._applyModification(darken,arguments)},desaturate:function(){return this._applyModification(desaturate,arguments)},saturate:function(){return this._applyModification(saturate,arguments)},greyscale:function(){return this._applyModification(greyscale,arguments)},spin:function(){return this._applyModification(spin,arguments)},_applyCombination:function(fn,args){return fn.apply(null,[this].concat([].slice.call(args)))},analogous:function(){return this._applyCombination(analogous,arguments)},complement:function(){return this._applyCombination(complement,arguments)},monochromatic:function(){return this._applyCombination(monochromatic,arguments)},splitcomplement:function(){return this._applyCombination(splitcomplement,arguments)},triad:function(){return this._applyCombination(triad,arguments)},tetrad:function(){return this._applyCombination(tetrad,arguments)}}
tinycolor.fromRatio=function(color,opts){if(typeof color==='object'){var newColor={}
for(var i in color){if(color.hasOwnProperty(i)){if(i==='a'){newColor[i]=color[i]}else{newColor[i]=convertToPercentage(color[i])}}}
color=newColor}
return tinycolor(color,opts)}
function inputToRGB(color){var rgb={r:0,g:0,b:0}
var a=1
var s=null
var v=null
var l=null
var ok=false
var format=false
if(typeof color==='string'){color=stringInputToObject(color)}
if(typeof color==='object'){if(isValidCSSUnit(color.r)&&isValidCSSUnit(color.g)&&isValidCSSUnit(color.b)){rgb=rgbToRgb(color.r,color.g,color.b)
ok=true
format=String(color.r).substr(-1)==='%'?'prgb':'rgb'}else if(isValidCSSUnit(color.h)&&isValidCSSUnit(color.s)&&isValidCSSUnit(color.v)){s=convertToPercentage(color.s)
v=convertToPercentage(color.v)
rgb=hsvToRgb(color.h,s,v)
ok=true
format='hsv'}else if(isValidCSSUnit(color.h)&&isValidCSSUnit(color.s)&&isValidCSSUnit(color.l)){s=convertToPercentage(color.s)
l=convertToPercentage(color.l)
rgb=hslToRgb(color.h,s,l)
ok=true
format='hsl'}
if(color.hasOwnProperty('a')){a=color.a}}
a=boundAlpha(a)
return{ok:ok,format:color.format||format,r:mathMin(255,mathMax(rgb.r,0)),g:mathMin(255,mathMax(rgb.g,0)),b:mathMin(255,mathMax(rgb.b,0)),a:a}}
function rgbToRgb(r,g,b){return{r:bound01(r,255)*255,g:bound01(g,255)*255,b:bound01(b,255)*255}}
function rgbToHsl(r,g,b){r=bound01(r,255)
g=bound01(g,255)
b=bound01(b,255)
var max=mathMax(r,g,b),min=mathMin(r,g,b)
var h,s,l=(max+min)/2
if(max==min){h=s=0}else{var d=max-min
s=l>0.5?d/(2-max-min):d/(max+min)
switch(max){case r:h=(g-b)/d+(g<b?6:0);break
case g:h=(b-r)/d+2;break
case b:h=(r-g)/d+4;break}
h/=6}
return{h:h,s:s,l:l}}
function hslToRgb(h,s,l){var r,g,b
h=bound01(h,360)
s=bound01(s,100)
l=bound01(l,100)
function hue2rgb(p,q,t){if(t<0)t+=1
if(t>1)t-=1
if(t<1/6)return p+(q-p)*6*t
if(t<1/2)return q
if(t<2/3)return p+(q-p)*(2/3-t)*6
return p}
if(s===0){r=g=b=l}else{var q=l<0.5?l*(1+s):l+s-l*s
var p=2*l-q
r=hue2rgb(p,q,h+1/3)
g=hue2rgb(p,q,h)
b=hue2rgb(p,q,h-1/3)}
return{r:r*255,g:g*255,b:b*255}}
function rgbToHsv(r,g,b){r=bound01(r,255)
g=bound01(g,255)
b=bound01(b,255)
var max=mathMax(r,g,b),min=mathMin(r,g,b)
var h,s,v=max
var d=max-min
s=max===0?0:d/max
if(max==min){h=0}else{switch(max){case r:h=(g-b)/d+(g<b?6:0);break
case g:h=(b-r)/d+2;break
case b:h=(r-g)/d+4;break}
h/=6}
return{h:h,s:s,v:v}}
function hsvToRgb(h,s,v){h=bound01(h,360)*6
s=bound01(s,100)
v=bound01(v,100)
var i=Math.floor(h),f=h-i,p=v*(1-s),q=v*(1-f*s),t=v*(1-(1-f)*s),mod=i%6,r=[v,q,p,p,t,v][mod],g=[t,v,v,q,p,p][mod],b=[p,p,t,v,v,q][mod]
return{r:r*255,g:g*255,b:b*255}}
function rgbToHex(r,g,b,allow3Char){var hex=[pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))]
if(allow3Char&&hex[0].charAt(0)==hex[0].charAt(1)&&hex[1].charAt(0)==hex[1].charAt(1)&&hex[2].charAt(0)==hex[2].charAt(1)){return hex[0].charAt(0)+hex[1].charAt(0)+hex[2].charAt(0)}
return hex.join('')}
function rgbaToHex(r,g,b,a,allow4Char){var hex=[pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16)),pad2(convertDecimalToHex(a))]
if(allow4Char&&hex[0].charAt(0)==hex[0].charAt(1)&&hex[1].charAt(0)==hex[1].charAt(1)&&hex[2].charAt(0)==hex[2].charAt(1)&&hex[3].charAt(0)==hex[3].charAt(1)){return hex[0].charAt(0)+hex[1].charAt(0)+hex[2].charAt(0)+hex[3].charAt(0)}
return hex.join('')}
function rgbaToArgbHex(r,g,b,a){var hex=[pad2(convertDecimalToHex(a)),pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))]
return hex.join('')}
tinycolor.equals=function(color1,color2){if(!color1||!color2){return false}
return tinycolor(color1).toRgbString()==tinycolor(color2).toRgbString()}
function desaturate(color,amount){amount=(amount===0)?0:(amount||10)
var hsl=tinycolor(color).toHsl()
hsl.s-=amount/100
hsl.s=clamp01(hsl.s)
return tinycolor(hsl)}
function saturate(color,amount){amount=(amount===0)?0:(amount||10)
var hsl=tinycolor(color).toHsl()
hsl.s+=amount/100
hsl.s=clamp01(hsl.s)
return tinycolor(hsl)}
function greyscale(color){return tinycolor(color).desaturate(100)}
function lighten(color,amount){amount=(amount===0)?0:(amount||10)
var hsl=tinycolor(color).toHsl()
hsl.l+=amount/100
hsl.l=clamp01(hsl.l)
return tinycolor(hsl)}
function brighten(color,amount){amount=(amount===0)?0:(amount||10)
var rgb=tinycolor(color).toRgb()
rgb.r=mathMax(0,mathMin(255,rgb.r-mathRound(255* -(amount/100))))
rgb.g=mathMax(0,mathMin(255,rgb.g-mathRound(255* -(amount/100))))
rgb.b=mathMax(0,mathMin(255,rgb.b-mathRound(255* -(amount/100))))
return tinycolor(rgb)}
function darken(color,amount){amount=(amount===0)?0:(amount||10)
var hsl=tinycolor(color).toHsl()
hsl.l-=amount/100
hsl.l=clamp01(hsl.l)
return tinycolor(hsl)}
function spin(color,amount){var hsl=tinycolor(color).toHsl()
var hue=(hsl.h+amount)%360
hsl.h=hue<0?360+hue:hue
return tinycolor(hsl)}
function complement(color){var hsl=tinycolor(color).toHsl()
hsl.h=(hsl.h+180)%360
return tinycolor(hsl)}
function triad(color){var hsl=tinycolor(color).toHsl()
var h=hsl.h
return[tinycolor(color),tinycolor({h:(h+120)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+240)%360,s:hsl.s,l:hsl.l})]}
function tetrad(color){var hsl=tinycolor(color).toHsl()
var h=hsl.h
return[tinycolor(color),tinycolor({h:(h+90)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+180)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+270)%360,s:hsl.s,l:hsl.l})]}
function splitcomplement(color){var hsl=tinycolor(color).toHsl()
var h=hsl.h
return[tinycolor(color),tinycolor({h:(h+72)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+216)%360,s:hsl.s,l:hsl.l})]}
function analogous(color,results,slices){results=results||6
slices=slices||30
var hsl=tinycolor(color).toHsl()
var part=360/slices
var ret=[tinycolor(color)]
for(hsl.h=((hsl.h-(part*results>>1))+720)%360;--results;){hsl.h=(hsl.h+part)%360
ret.push(tinycolor(hsl))}
return ret}
function monochromatic(color,results){results=results||6
var hsv=tinycolor(color).toHsv()
var h=hsv.h,s=hsv.s,v=hsv.v
var ret=[]
var modification=1/results
while(results--){ret.push(tinycolor({h:h,s:s,v:v}))
v=(v+modification)%1}
return ret}
var names=tinycolor.names={}
var hexNames=tinycolor.hexNames=flip(names)
function flip(o){var flipped={}
for(var i in o){if(o.hasOwnProperty(i)){flipped[o[i]]=i}}
return flipped}
function boundAlpha(a){a=parseFloat(a)
if(isNaN(a)||a<0||a>1){a=1}
return a}
function bound01(n,max){if(isOnePointZero(n)){n='100%'}
var processPercent=isPercentage(n)
n=mathMin(max,mathMax(0,parseFloat(n)))
if(processPercent){n=parseInt(n*max,10)/100}
if((Math.abs(n-max)<0.000001)){return 1}
return(n%max)/parseFloat(max)}
function clamp01(val){return mathMin(1,mathMax(0,val))}
function parseIntFromHex(val){return parseInt(val,16)}
function isOnePointZero(n){return typeof n==='string'&&n.indexOf('.')!=-1&&parseFloat(n)===1}
function isPercentage(n){return typeof n==='string'&&n.indexOf('%')!=-1}
function pad2(c){return c.length==1?'0'+c:''+c}
function convertToPercentage(n){if(n<=1){n=(n*100)+'%'}
return n}
function convertDecimalToHex(d){return Math.round(parseFloat(d)*255).toString(16)}
function convertHexToDecimal(h){return(parseIntFromHex(h)/255)}
var matchers=(function(){var CSS_INTEGER='[-\\+]?\\d+%?'
var CSS_NUMBER='[-\\+]?\\d*\\.\\d+%?'
var CSS_UNIT='(?:'+CSS_NUMBER+')|(?:'+CSS_INTEGER+')'
var PERMISSIVE_MATCH3='[\\s|\\(]+('+CSS_UNIT+')[,|\\s]+('+CSS_UNIT+')[,|\\s]+('+CSS_UNIT+')\\s*\\)?'
var PERMISSIVE_MATCH4='[\\s|\\(]+('+CSS_UNIT+')[,|\\s]+('+CSS_UNIT+')[,|\\s]+('+CSS_UNIT+')[,|\\s]+('+CSS_UNIT+')\\s*\\)?'
return{CSS_UNIT:new RegExp(CSS_UNIT),rgb:new RegExp('rgb'+PERMISSIVE_MATCH3),rgba:new RegExp('rgba'+PERMISSIVE_MATCH4),hsl:new RegExp('hsl'+PERMISSIVE_MATCH3),hsla:new RegExp('hsla'+PERMISSIVE_MATCH4),hsv:new RegExp('hsv'+PERMISSIVE_MATCH3),hsva:new RegExp('hsva'+PERMISSIVE_MATCH4),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}})()
function isValidCSSUnit(color){return!!matchers.CSS_UNIT.exec(color)}
function stringInputToObject(color){color=color.replace(trimLeft,'').replace(trimRight,'').toLowerCase()
var named=false
if(names[color]){color=names[color]
named=true}else if(color=='transparent'){return{r:0,g:0,b:0,a:0,format:'name'}}
var match
if((match=matchers.rgb.exec(color))){return{r:match[1],g:match[2],b:match[3]}}
if((match=matchers.rgba.exec(color))){return{r:match[1],g:match[2],b:match[3],a:match[4]}}
if((match=matchers.hsl.exec(color))){return{h:match[1],s:match[2],l:match[3]}}
if((match=matchers.hsla.exec(color))){return{h:match[1],s:match[2],l:match[3],a:match[4]}}
if((match=matchers.hsv.exec(color))){return{h:match[1],s:match[2],v:match[3]}}
if((match=matchers.hsva.exec(color))){return{h:match[1],s:match[2],v:match[3],a:match[4]}}
if((match=matchers.hex8.exec(color))){return{r:parseIntFromHex(match[1]),g:parseIntFromHex(match[2]),b:parseIntFromHex(match[3]),a:convertHexToDecimal(match[4]),format:named?'name':'hex8'}}
if((match=matchers.hex6.exec(color))){return{r:parseIntFromHex(match[1]),g:parseIntFromHex(match[2]),b:parseIntFromHex(match[3]),format:named?'name':'hex'}}
if((match=matchers.hex4.exec(color))){return{r:parseIntFromHex(match[1]+''+match[1]),g:parseIntFromHex(match[2]+''+match[2]),b:parseIntFromHex(match[3]+''+match[3]),a:convertHexToDecimal(match[4]+''+match[4]),format:named?'name':'hex8'}}
if((match=matchers.hex3.exec(color))){return{r:parseIntFromHex(match[1]+''+match[1]),g:parseIntFromHex(match[2]+''+match[2]),b:parseIntFromHex(match[3]+''+match[3]),format:named?'name':'hex'}}
return false}
if(typeof module!=='undefined'&&module.exports){module.exports=tinycolor}
else{window.tinycolor=tinycolor}})(Math)}),,(function(module,exports,__webpack_require__){"use strict";var _tinycolor=__webpack_require__(2)
var _tinycolor2=_interopRequireDefault(_tinycolor)
var _icons=__webpack_require__(1)
var ICONS=_interopRequireWildcard(_icons)
var _easeInOutQuad=__webpack_require__(0)
var _easeInOutQuad2=_interopRequireDefault(_easeInOutQuad)
function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key]}}newObj.default=obj;return newObj}}
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}
(function(){if(!window.addEventListener)return
var _window=window,requestAnimationFrame=_window.requestAnimationFrame,cancelAnimationFrame=_window.cancelAnimationFrame
var getComputedStyle=document.defaultView.getComputedStyle||window.getComputedStyle
var topThreshhold=100
var animation=null
var duration=null
var startTime=null
var startPosition=null
var backToTopping=false
var options=CloudflareApps.installs['fHvTcnVf6zN9'].options
var element=void 0
var xmlns='http://www.w3.org/2000/svg'
var icon=document.createElementNS(xmlns,'svg')
icon.setAttribute('class','cloudflare-icon')
icon.setAttributeNS(null,'viewBox','0 0 256 256')
icon.setAttributeNS(null,'version','1.1')
function getColors(){var strategy=options.color.strategy
var backgroundColor=(function(){if(strategy==='dark')return(0,_tinycolor2.default)('#878787')
if(strategy==='light')return(0,_tinycolor2.default)('#ededed')
if(strategy==='custom')return(0,_tinycolor2.default)(options.color.custom)
var _getComputedStyle=getComputedStyle(document.body),backgroundColor=_getComputedStyle.backgroundColor
var components=(0,_tinycolor2.default)(backgroundColor).toHsl()
components.l=Math.abs((components.l+0.5)%1)+(1-components.s)*0.15
return(0,_tinycolor2.default)(components)}())
var iconColor=backgroundColor.clone()
iconColor.setAlpha(0.9)
backgroundColor.setAlpha(options.shape.showBackground?0.2:0)
return{backgroundColor:backgroundColor.toRgbString(),iconColor:iconColor.toRgbString()}}
function resetPositions(){startTime=null
startPosition=null
backToTopping=false}
function animateLoop(time){if(!startTime)startTime=time
var timeSoFar=time-startTime
var easedPosition=(0,_easeInOutQuad2.default)(timeSoFar,startPosition,-startPosition,duration)
window.scrollTo(0,easedPosition)
if(timeSoFar<duration){animation=requestAnimationFrame(animateLoop)}else{resetPositions()}}
function backToTop(){if(backToTopping)return
backToTopping=true
startPosition=document.documentElement.scrollTop||document.body.scrollTop
duration=startPosition/2
requestAnimationFrame(animateLoop)}
function setVisibility(){if(!element)return
var visibility=window.scrollY>topThreshhold?'visible':'hidden'
element.setAttribute('visibility',visibility)}
function setColors(){if(!element)return
var _getColors=getColors(),backgroundColor=_getColors.backgroundColor,iconColor=_getColors.iconColor
element.style.backgroundColor=backgroundColor
icon.style.fill=iconColor}
function setIcon(){icon.innerHTML=''
var path=document.createElementNS(xmlns,'path')
path.setAttributeNS(null,'d',ICONS[options.shape.icon])
icon.appendChild(path)}
function setPosition(){if(!element)return
element.setAttribute('data-position',options.position.value)}
function setShape(){if(!element)return
element.style.borderRadius=(element.clientHeight/2*options.shape.radius).toFixed(2)+'px'}
function updateElement(){element=document.createElement('cloudflare-app')
element.setAttribute('app','back-to-top-button')
element.addEventListener('click',backToTop)
setVisibility()
setIcon()
setPosition()
element.appendChild(icon)
setColors()
document.body.appendChild(element)
requestAnimationFrame(setShape)}
function bootstrap(){updateElement()
window.addEventListener('blur',function(){if(backToTopping){cancelAnimationFrame(animation)
resetPositions()
window.scrollTo(0,0)}})
window.addEventListener('scroll',setVisibility)}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',bootstrap)}else{bootstrap()}
window.CloudflareApps.installs['fHvTcnVf6zN9'].scope={updateColors:function updateColors(nextOptions){options=nextOptions
setColors()},updateShape:function updateShape(nextOptions){options=nextOptions
setIcon()
setShape()
setColors()},updatePosition:function updatePosition(nextOptions){options=nextOptions
setPosition()}}})()})]);};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwPSJiYWNrLXRvLXRvcC1idXR0b24iXSB7CiAgYmFja2dyb3VuZDogI2NjYzsKICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xKTsKICBjdXJzb3I6IHBvaW50ZXI7CiAgZGlzcGxheTogYmxvY2s7CiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7CiAgZm9udC1zaXplOiA0MHB4OwogIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7CiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50YWxpYXNlZDsKICBmb250LXN0eWxlOiBub3JtYWw7CiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsKICBoZWlnaHQ6IDc1cHg7CiAgbGV0dGVyLXNwYWNpbmc6IDA7CiAgbGluZS1oZWlnaHQ6IDc1cHg7CiAgb3BhY2l0eTogMDsKICBwb2ludGVyLWV2ZW50czogbm9uZTsKICBwb3NpdGlvbjogZml4ZWQ7CiAgdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7CiAgdGV4dC1hbGlnbjogY2VudGVyOwogIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7CiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZS1pbi1vdXQ7CiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOwogICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICB3aWR0aDogNzVweDsKICB6LWluZGV4OiA3MDAwOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJhY2stdG8tdG9wLWJ1dHRvbiJdW2RhdGEtcG9zaXRpb25ePSJ0b3AiXSB7CiAgdG9wOiAyNXB4Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJhY2stdG8tdG9wLWJ1dHRvbiJdW2RhdGEtcG9zaXRpb25ePSJib3R0b20iXSB7CiAgYm90dG9tOiAyNXB4Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJhY2stdG8tdG9wLWJ1dHRvbiJdW2RhdGEtcG9zaXRpb24kPSJsZWZ0Il0gewogIGxlZnQ6IDI1cHg7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYmFjay10by10b3AtYnV0dG9uIl1bZGF0YS1wb3NpdGlvbiQ9InJpZ2h0Il0gewogIHJpZ2h0OiAyNXB4Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJhY2stdG8tdG9wLWJ1dHRvbiJdOmhvdmVyIHsKICAtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcygxMDglKTsKICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDglKTsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJiYWNrLXRvLXRvcC1idXR0b24iXTphY3RpdmUgewogIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxcHgsIDApOwogICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxcHgsIDApOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJhY2stdG8tdG9wLWJ1dHRvbiJdW3Zpc2liaWxpdHk9InZpc2libGUiXSB7CiAgcG9pbnRlci1ldmVudHM6IGFsbDsKICBvcGFjaXR5OiAxOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImJhY2stdG8tdG9wLWJ1dHRvbiJdW3NoYXBlPSJyb3VuZGVkIl0gewogIGJvcmRlci1yYWRpdXM6IDVweDsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJiYWNrLXRvLXRvcC1idXR0b24iXVtzaGFwZT0iY2lyY2xlIl0gewogIGJvcmRlci1yYWRpdXM6IDUwJTsKfQoKQG1lZGlhIChtYXgtd2lkdGg6IDc4NnB4KSB7CiAgY2xvdWRmbGFyZS1hcHBbYXBwPSJiYWNrLXRvLXRvcC1idXR0b24iXSB7CiAgICBoZWlnaHQ6IDUwcHg7CiAgICB3aWR0aDogNTBweDsKICAgIGZvbnQtc2l6ZTogMjVweDsKICAgIGxpbmUtaGVpZ2h0OiA1MHB4OwogICAgcmlnaHQ6IDEwcHg7CiAgICBib3R0b206IDEwcHg7CiAgfQoKICBjbG91ZGZsYXJlLWFwcFthcHA9ImJhY2stdG8tdG9wLWJ1dHRvbiJdW3NoYXBlPSJyb3VuZGVkIl0gewogICAgYm9yZGVyLXJhZGl1czogM3B4OwogIH0KCn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iYmFjay10by10b3AtYnV0dG9uIl0gLmNsb3VkZmxhcmUtaWNvbiB7CiAgYm90dG9tOiAwOwogIGRpc3BsYXk6IGJsb2NrOwogIGZpbGw6ICM2NjY2NjY7CiAgZmlsbDogcmdiYSgwLCAwLCAwLCAuNCk7CiAgaGVpZ2h0OiAxMDAlOwogIGxlZnQ6IDA7CiAgcG9pbnRlci1ldmVudHM6IG5vbmU7CiAgcG9zaXRpb246IGFic29sdXRlOwogIHJpZ2h0OiAwOwogIHRvcDogMDsKICB3aWR0aDogMTAwJTsKfQo=';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();