(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0bxy":function(e,t,n){var r=n("ax1l");e.exports=function(e){return e.listenToMidi=function(t,n){var o={},a=n||{},i=a.gain||function(e){return e/127};return t.onmidimessage=function(t){var n=t.messageType?t:r(t);if("noteon"===n.messageType&&0===n.velocity&&(n.messageType="noteoff"),!a.channel||n.channel===a.channel)switch(n.messageType){case"noteon":o[n.key]=e.play(n.key,0,{gain:i(n.velocity)});break;case"noteoff":o[n.key]&&(o[n.key].stop(),delete o[n.key])}},e},e}},"2LeX":function(e,t,n){"use strict";var r=n("kaZN"),o=function(e){return function(e){return null!==e&&e!==[]&&e>=0&&e<129}(e)?+e:r.midi(e)};e.exports=function(e){if(e.buffers){var t=e.opts.map,n="function"==typeof t?t:o,r=function(e){return e?n(e)||e:null};e.buffers=function(e,t){return Object.keys(e).reduce((function(n,r){return n[t(r)]=e[r],n}),{})}(e.buffers,r);var a=e.start;e.start=function(e,t,n){var o=r(e),i=o%1;return i&&(o=Math.floor(o),n=Object.assign(n||{},{cents:Math.floor(100*i)})),a(o,t,n)}}return e}},GcRm:function(e,t,n){"use strict";var r=Array.isArray,o={};e.exports=function(e){return e.schedule=function(t,n){var a,i,c,s,u=e.context.currentTime,l=t<u?u:t;return e.emit("schedule",l,n),n.map((function(t){return t?(r(t)?(a=t[0],i=t[1]):(a=t.time,i=t),!function(e){return e&&"object"==typeof e}(i)?(c=i,s=o):(c=i.name||i.key||i.note||i.midi||null,s=i),e.start(c,l+(a||0),s)):null}))},e}},Iz3U:function(e,t){function n(e,t){return function(n,r,o,a){e(n,r,o,a),t(n,r,o,a)}}e.exports=function(e){return e.on=function(t,r){if(1===arguments.length&&"function"==typeof t)return e.on("event",t);var o="on"+t,a=e[o];return e[o]=a?n(a,r):r,e},e}},No7r:function(e,t,n){"use strict";var r=n("ppUm");function o(e,t){if(console.warn("new Soundfont() is deprected"),console.log("Please use Soundfont.instrument() instead of new Soundfont().instrument()"),!(this instanceof o))return new o(e);this.nameToUrl=t||o.nameToUrl,this.ctx=e,this.instruments={},this.promises=[]}function a(e,t){return t=t||{},function(n,o,a,i){console.warn("The oscillator player is deprecated."),console.log("Starting with version 0.9.0 you will have to wait until the soundfont is loaded to play sounds.");var c=n>0&&n<129?+n:r.midi(n),s=c?r.midiToFreq(c,440):null;if(s){a=a||.2;var u=(i=i||{}).destination||t.destination||e.destination,l=i.vcoType||t.vcoType||"sine",f=i.gain||t.gain||.4,d=e.createOscillator();d.type=l,d.frequency.value=s;var h=e.createGain();return h.gain.value=f,d.connect(h),h.connect(u),d.start(o),a>0&&d.stop(o+a),d}}}o.prototype.onready=function(e){console.warn("deprecated API"),console.log("Please use Promise.all(Soundfont.instrument(), Soundfont.instrument()).then() instead of new Soundfont().onready()"),Promise.all(this.promises).then(e)},o.prototype.instrument=function(e,t){console.warn("new Soundfont().instrument() is deprecated."),console.log("Please use Soundfont.instrument() instead.");var n=this.ctx;if((e=e||"default")in this.instruments)return this.instruments[e];var r={name:e,play:a(n,t)};if(this.instruments[e]=r,"default"!==e){var i=o.instrument(n,e,t).then((function(e){return r.play=e.play,r}));this.promises.push(i),r.onready=function(e){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),i.then(e)}}else r.onready=function(e){console.warn("onready is deprecated. Use Soundfont.instrument().then()"),e()};return r},o.loadBuffers=function(e,t,n){return console.warn("Soundfont.loadBuffers is deprecate."),console.log("Use Soundfont.instrument(..) and get buffers properties from the result."),o.instrument(e,t,n).then((function(e){return e.buffers}))},o.noteToMidi=r.midi,e.exports=o},QF4U:function(e,t,n){"use strict";var r=n("QinL"),o=n("amcp");function a(e){return/\.js(\?.*)?$/i.test(e)}function i(e,t,n){return"https://gleitz.github.io/midi-js-soundfonts/"+(t="FluidR3_GM"===t?t:"MusyngKite")+"/"+e+"-"+(n="ogg"===n?n:"mp3")+".js"}var c=n("No7r");c.instrument=function e(t,n,c){if(1===arguments.length)return function(n,r){return e(t,n,r)};var s=c||{},u=s.isSoundfontURL||a,l=s.nameToUrl||i,f=u(n)?n:l(n,s.soundfont,s.format);return r(t,f,{only:s.only||s.notes}).then((function(e){var r=o(t,e,s).connect(s.destination?s.destination:t.destination);return r.url=f,r.name=n,r}))},c.nameToUrl=i,e.exports&&(e.exports=c),"undefined"!=typeof window&&(window.Soundfont=c)},QinL:function(e,t,n){"use strict";var r=n("wtHK"),o=n("gpy+");function a(e){return function(t){return"string"==typeof t&&e.test(t)}}function i(e,t){return"string"==typeof e?e+t:"function"==typeof e?e(t):t}function c(e,t,n,r){var o=t instanceof ArrayBuffer?s:u(t)?l:function(e){return e&&"function"==typeof e.then}(t)?f:d(t)?h:function(e){return e&&"object"==typeof e}(t)?p:m(t)?v:y(t)?g:b(t)?j:null;return o?o(e,t,n||{}):r?Promise.resolve(r):Promise.reject("Source not valid ("+t+")")}function s(e,t,n){return new Promise((function(n,r){e.decodeAudioData(t,(function(e){n(e)}),(function(){r("Can't decode audio data ("+t.slice(0,30)+"...)")}))}))}c.fetch=o;var u=a(/\.(mp3|wav|ogg)(\?.*)?$/i);function l(e,t,n){var r=i(n.from,t);return c(e,c.fetch(r,"arraybuffer"),n)}function f(e,t,n){return t.then((function(t){return c(e,t,n)}))}var d=Array.isArray;function h(e,t,n){return Promise.all(t.map((function(t){return c(e,t,n,t)})))}function p(e,t,n){var r={},o=Object.keys(t).map((function(o){if(n.only&&-1===n.only.indexOf(o))return null;var a=t[o];return c(e,a,n,a).then((function(e){r[o]=e}))}));return Promise.all(o).then((function(){return r}))}var m=a(/\.json(\?.*)?$/i);function v(e,t,n){var r=i(n.from,t);return c(e,c.fetch(r,"text").then(JSON.parse),n)}var y=a(/^data:audio/);function g(e,t,n){var o=t.indexOf(",");return c(e,r.decode(t.slice(o+1)).buffer,n)}var b=a(/\.js(\?.*)?$/i);function j(e,t,n){var r=i(n.from,t);return c(e,c.fetch(r,"text").then(x),n)}function x(e){var t=e.indexOf("MIDI.Soundfont.");if(t<0)throw Error("Invalid MIDI.js Soundfont format");t=e.indexOf("=",t)+2;var n=e.lastIndexOf(",");return JSON.parse(e.slice(t,n)+"}")}e.exports&&(e.exports=c),"undefined"!=typeof window&&(window.loadAudio=c)},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("nKUr"),o=n("q1tI"),a=function(e){var t=e.black,n=e.note,a=e.tone,i=e.ac,c=e.id,s=function(e){var t=Object(o.useState)(!1),n=t[0],r=t[1];function a(t){t.key===e&&r(!0)}var i=function(t){t.key===e&&r(!1)};return Object(o.useEffect)((function(){return window.addEventListener("keydown",a),window.addEventListener("keyup",i),function(){window.removeEventListener("keydown",a),window.removeEventListener("keyup",i)}}),[]),n}(e.keyCode);function u(){i.playNote(""+n+(c+parseInt(a)))}return s&&u(),t?Object(r.jsx)("div",{onClick:u,className:"black-keys-div ",children:Object(r.jsx)("div",{className:"black-key "+(s?"black-key-active":""),children:n})}):Object(r.jsx)("div",{onClick:u,className:"white-key "+(s?"white-key-active":""),children:n})},i=n("QF4U"),c=n.n(i),s={stop:function(){}},u={play:function(){return s}},l=function(e){var t=new e,n=u;return{setInstrument:function(e){c.a.instrument(t,e).then((function(e){n=e})).catch((function(e){n=u}))},playNote:function(e){n.play(e)}}};function f(e){var t=Object(o.useState)(1),n=t[0],i=t[1],c=Object(o.useState)(3),s=c[0],u=c[1],f=l(AudioContext);return f.setInstrument("acoustic_grand_piano"),document.addEventListener("keydown",(function(e){})),Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsxs)("div",{className:"options",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:"label",children:"Size"}),Object(r.jsxs)("select",{onChange:function(e){i(e.target.value)},name:"size",id:"size",value:n,children:[Object(r.jsx)("option",{value:1,children:"12"}),Object(r.jsx)("option",{value:2,children:"24"}),Object(r.jsx)("option",{value:3,children:"36"})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:"label",children:"Tone"}),Object(r.jsxs)("select",{onChange:function(e){u(e.target.value)},name:"size",id:"size",value:s,children:[Object(r.jsx)("option",{value:1,children:"1"}),Object(r.jsx)("option",{value:2,children:"2"}),Object(r.jsx)("option",{value:3,children:"3"}),Object(r.jsx)("option",{value:4,children:"4"})]})]})]}),Object(r.jsx)("div",{className:"keys-div",children:function(){for(var e,t=[],o=0;o<n;o++)t.push((e=o+1,[Object(r.jsx)(a,{ac:f,tone:s,keyCode:1==e?"a":"",id:e,note:"C"}),Object(r.jsx)(a,{ac:f,tone:s,keyCode:1==e?"w":"",id:e,note:"C#",black:!0}),Object(r.jsx)(a,{ac:f,tone:s,keyCode:1==e?"s":"",id:e,note:"D"}),Object(r.jsx)(a,{ac:f,tone:s,keyCode:1==e?"e":"",id:e,note:"D#",black:!0}),Object(r.jsx)(a,{ac:f,tone:s,keyCode:1==e?"d":"",id:e,note:"E"}),Object(r.jsx)(a,{ac:f,tone:s,keyCode:1==e?"f":"",id:e,note:"F"}),Object(r.jsx)(a,{ac:f,tone:s,keyCode:1==e?"t":"",id:e,note:"F#",black:!0}),Object(r.jsx)(a,{ac:f,tone:s,keyCode:1==e?"g":"",id:e,note:"G"}),Object(r.jsx)(a,{ac:f,tone:s,keyCode:1==e?"y":"",id:e,note:"G#",black:!0}),Object(r.jsx)(a,{ac:f,tone:s,keyCode:1==e?"h":"",id:e,note:"A"}),Object(r.jsx)(a,{ac:f,tone:s,keyCode:1==e?"u":"",id:e,note:"A#",black:!0}),Object(r.jsx)(a,{ac:f,tone:s,keyCode:1==e?"j":"",id:e,note:"B"})]));return t}()})]})}},amcp:function(e,t,n){"use strict";var r=n("nKdV"),o=n("Iz3U"),a=n("2LeX"),i=n("GcRm"),c=n("0bxy");function s(e,t,n){return c(i(a(o(r(e,t,n)))))}e.exports&&(e.exports=s),"undefined"!=typeof window&&(window.SamplePlayer=s)},ax1l:function(e,t,n){e.exports=function e(t,n,r){function o(i,c){if(!n[i]){if(!t[i]){if(a)return a(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[i]={exports:{}};t[i][0].call(u.exports,(function(e){var n=t[i][1][e];return o(n||e)}),u,u.exports,e,t,n,r)}return n[i].exports}for(var a=!1,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return new function(e){if(this._event=e,this._data=e.data,this.receivedTime=e.receivedTime,this._data&&this._data.length<2)console.warn("Illegal MIDI message of length",this._data.length);else switch(this._messageCode=240&e.data[0],this.channel=15&e.data[0],this._messageCode){case 128:this.messageType="noteoff",this.key=127&e.data[1],this.velocity=127&e.data[2];break;case 144:this.messageType="noteon",this.key=127&e.data[1],this.velocity=127&e.data[2];break;case 160:this.messageType="keypressure",this.key=127&e.data[1],this.pressure=127&e.data[2];break;case 176:this.messageType="controlchange",this.controllerNumber=127&e.data[1],this.controllerValue=127&e.data[2],120===this.controllerNumber&&0===this.controllerValue?this.channelModeMessage="allsoundoff":121===this.controllerNumber?this.channelModeMessage="resetallcontrollers":122===this.controllerNumber?0===this.controllerValue?this.channelModeMessage="localcontroloff":this.channelModeMessage="localcontrolon":123===this.controllerNumber&&0===this.controllerValue?this.channelModeMessage="allnotesoff":124===this.controllerNumber&&0===this.controllerValue?this.channelModeMessage="omnimodeoff":125===this.controllerNumber&&0===this.controllerValue?this.channelModeMessage="omnimodeon":126===this.controllerNumber?this.channelModeMessage="monomodeon":127===this.controllerNumber&&(this.channelModeMessage="polymodeon");break;case 192:this.messageType="programchange",this.program=e.data[1];break;case 208:this.messageType="channelpressure",this.pressure=127&e.data[1];break;case 224:this.messageType="pitchbendchange";var t=127&e.data[2],n=127&e.data[1];this.pitchBend=(t<<8)+n}}(e)},t.exports=n.default},{}]},{},[1])(1)},fIjt:function(e,t){e.exports=function(e){var t=e.createGain(),a=t._voltage=function(e){var t=e.createBufferSource(),n=e.createBuffer(1,2,e.sampleRate);return n.getChannelData(0).set(r),t.buffer=n,t.loop=!0,t}(e),i=o(a),c=o(a),s=o(a);return t._startAmount=o(c),t._endAmount=o(s),t._multiplier=o(i),t._multiplier.connect(t),t._startAmount.connect(t),t._endAmount.connect(t),t.value=i.gain,t.startValue=c.gain,t.endValue=s.gain,t.startValue.value=0,t.endValue.value=0,Object.defineProperties(t,n),t};var n={attack:{value:0,writable:!0},decay:{value:0,writable:!0},sustain:{value:1,writable:!0},release:{value:0,writable:!0},getReleaseDuration:{value:function(){return this.release}},start:{value:function(e){var t=this._multiplier.gain,n=this._startAmount.gain,r=this._endAmount.gain;this._voltage.start(e),this._decayFrom=this._decayFrom=e+this.attack,this._startedAt=e;var o=this.sustain;t.cancelScheduledValues(e),n.cancelScheduledValues(e),r.cancelScheduledValues(e),r.setValueAtTime(0,e),this.attack?(t.setValueAtTime(0,e),t.linearRampToValueAtTime(1,e+this.attack),n.setValueAtTime(1,e),n.linearRampToValueAtTime(0,e+this.attack)):(t.setValueAtTime(1,e),n.setValueAtTime(0,e)),this.decay&&t.setTargetAtTime(o,this._decayFrom,a(this.decay))}},stop:{value:function(e,t){t&&(e-=this.release);var n=e+this.release;if(this.release){var r=this._multiplier.gain,o=this._startAmount.gain,i=this._endAmount.gain;r.cancelScheduledValues(e),o.cancelScheduledValues(e),i.cancelScheduledValues(e);var c=a(this.release);if(this.attack&&e<this._decayFrom){var s=function(e,t,n,r,o){var a=e+(o-n)/(r-n)*(t-e);a<=e&&(a=e);a>=t&&(a=t);return a}(0,1,this._startedAt,this._decayFrom,e);r.linearRampToValueAtTime(s,e),o.linearRampToValueAtTime(1-s,e),o.setTargetAtTime(0,e,c)}i.setTargetAtTime(1,e,c),r.setTargetAtTime(0,e,c)}return this._voltage.stop(n),n}},onended:{get:function(){return this._voltage.onended},set:function(e){this._voltage.onended=e}}},r=new Float32Array([1,1]);function o(e){var t=e.context.createGain();return e.connect(t),t}function a(e){return Math.log(e+1)/Math.log(100)}},"gpy+":function(e,t,n){"use strict";e.exports=function(e,t){return new Promise((function(n,r){var o=new XMLHttpRequest;t&&(o.responseType=t),o.open("GET",e),o.onload=function(){200===o.status?n(o.response):r(Error(o.statusText))},o.onerror=function(){r(Error("Network Error"))},o.send()}))}},kaZN:function(e,t,n){"use strict";var r=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;var o=[0,2,4,5,7,9,11];function a(e,t,n){if("string"!=typeof e)return null;var a=r.exec(e);if(!a||!t&&a[4])return null;var c={letter:a[1].toUpperCase(),acc:a[2].replace(/x/g,"##")};return c.pc=c.letter+c.acc,c.step=(c.letter.charCodeAt(0)+3)%7,c.alt="b"===c.acc[0]?-c.acc.length:c.acc.length,c.chroma=o[c.step]+c.alt,a[3]&&(c.oct=+a[3],c.midi=c.chroma+12*(c.oct+1),c.freq=i(c.midi,n)),t&&(c.tonicOf=a[4]),c}function i(e,t){return Math.pow(2,(e-69)/12)*(t||440)}var c={parse:a,regex:function(){return r},midiToFreq:i};["letter","acc","pc","step","alt","chroma","oct","midi","freq"].forEach((function(e){c[e]=function(t){var n=a(t);return n&&void 0!==n[e]?n[e]:null}})),e.exports=c},nKdV:function(e,t,n){"use strict";var r=n("fIjt"),o={},a={gain:1,attack:.01,decay:.1,sustain:.9,release:.3,loop:!1,cents:0,loopStart:0,loopEnd:0};function i(e){return"number"==typeof e}var c=["attack","decay","sustain","release"];e.exports=function(e,t,n){var s=!1,u=0,l={},f=e.createGain();f.gain.value=1;var d=Object.assign({},a,n),h={context:e,out:f,opts:d};return t instanceof AudioBuffer?h.buffer=t:h.buffers=t,h.start=function(t,n,r){if(h.buffer&&null!==t)return h.start(null,t,n);var a=t?h.buffers[t]:h.buffer;if(a){if(s){var i=r||o;n=Math.max(e.currentTime,n||0),h.emit("start",n,t,i);var c=p(t,a,i);return c.id=function(t,n){return n.id=u++,l[n.id]=n,n.source.onended=function(){var t=e.currentTime;n.source.disconnect(),n.env.disconnect(),n.disconnect(),h.emit("ended",t,n.id,n)},n.id}(0,c),c.env.start(n),c.source.start(n),h.emit("started",n,c.id,c),i.duration&&c.stop(n+i.duration),c}console.warn("SamplePlayer not connected to any node.")}else console.warn("Buffer "+t+" not found.")},h.play=function(e,t,n){return h.start(e,t,n)},h.stop=function(e,t){var n;return(t=t||Object.keys(l)).map((function(t){return(n=l[t])?(n.stop(e),n.id):null}))},h.connect=function(e){return s=!0,f.connect(e),h},h.emit=function(e,t,n,r){h.onevent&&h.onevent(e,t,n,r);var o=h["on"+e];o&&o(t,n,r)},h;function p(t,n,o){var a,s=e.createGain();return s.gain.value=0,s.connect(f),s.env=function(e,t,n){var o=r(e),a=t.adsr||n.adsr;return c.forEach((function(e,r){o[e]=a?a[r]:t[e]||n[e]})),o.value.value=i(t.gain)?t.gain:i(n.gain)?n.gain:1,o}(e,o,d),s.env.connect(s.gain),s.source=e.createBufferSource(),s.source.buffer=n,s.source.connect(s),s.source.loop=o.loop||d.loop,s.source.playbackRate.value=(a=o.cents||d.cents)?Math.pow(2,a/1200):1,s.source.loopStart=o.loopStart||d.loopStart,s.source.loopEnd=o.loopEnd||d.loopEnd,s.stop=function(n){var r=n||e.currentTime;h.emit("stop",r,t);var o=s.env.stop(r);s.source.stop(o)},s}}},ppUm:function(e,t,n){"use strict";function r(e,t){return Array(t+1).join(e)}function o(e){return"number"==typeof e}function a(e,t){return Math.pow(2,(e-69)/12)*(t||440)}n.r(t),n.d(t,"regex",(function(){return c})),n.d(t,"parse",(function(){return u})),n.d(t,"build",(function(){return l})),n.d(t,"midi",(function(){return f})),n.d(t,"freq",(function(){return d})),n.d(t,"letter",(function(){return h})),n.d(t,"acc",(function(){return p})),n.d(t,"pc",(function(){return m})),n.d(t,"step",(function(){return v})),n.d(t,"alt",(function(){return y})),n.d(t,"chroma",(function(){return g})),n.d(t,"oct",(function(){return b}));var i=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/;function c(){return i}var s=[0,2,4,5,7,9,11];function u(e,t,n){if("string"!=typeof e)return null;var r=i.exec(e);if(!r||!t&&r[4])return null;var o={letter:r[1].toUpperCase(),acc:r[2].replace(/x/g,"##")};o.pc=o.letter+o.acc,o.step=(o.letter.charCodeAt(0)+3)%7,o.alt="b"===o.acc[0]?-o.acc.length:o.acc.length;var c=s[o.step]+o.alt;return o.chroma=c<0?12+c:c%12,r[3]&&(o.oct=+r[3],o.midi=c+12*(o.oct+1),o.freq=a(o.midi,n)),t&&(o.tonicOf=r[4]),o}function l(e,t,n){return null==e?null:e.step?l(e.step,e.alt,e.oct):e<0||e>6?null:"CDEFGAB".charAt(e)+(o(a=t)?a<0?r("b",-a):r("#",a):"")+function(e){return o(e)?""+e:""}(n);var a}function f(e){if((o(e)||"string"==typeof e)&&e>=0&&e<128)return+e;var t=u(e);return t&&function(e){return void 0!==e}(t.midi)?t.midi:null}function d(e,t){var n=f(e);return null===n?null:a(n,t)}function h(e){return(u(e)||{}).letter}function p(e){return(u(e)||{}).acc}function m(e){return(u(e)||{}).pc}function v(e){return(u(e)||{}).step}function y(e){return(u(e)||{}).alt}function g(e){return(u(e)||{}).chroma}function b(e){return(u(e)||{}).oct}},wtHK:function(e,t,n){"use strict";e.exports={decode:function(e,t){for(var n,r,o,a=e.replace(/[^A-Za-z0-9\+\/]/g,""),i=a.length,c=t?Math.ceil((3*i+1>>2)/t)*t:3*i+1>>2,s=new Uint8Array(c),u=0,l=0,f=0;f<i;f++)if(r=3&f,u|=((o=a.charCodeAt(f))>64&&o<91?o-65:o>96&&o<123?o-71:o>47&&o<58?o+4:43===o?62:47===o?63:0)<<18-6*r,3===r||i-f==1){for(n=0;n<3&&l<c;n++,l++)s[l]=u>>>(16>>>n&24)&255;u=0}return s}}}}]);
//# sourceMappingURL=component---src-pages-index-js-b5c2c8d66f3d652ffda6.js.map