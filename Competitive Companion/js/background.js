(()=>{"use strict";var e,t={8136:(e,t,o)=>{const n=o(6184),s=o(7072),r=o(4795),a=o(4336),i=o(3970);async function c(e,t){e.url.startsWith("https://codingcompetitions.withgoogle.com/")&&await n.browser.permissions.request({origins:["https://codejam.googleapis.com/dashboard/get_file/*"]});for(const t of["common","content"])await n.browser.tabs.executeScript(e.id,{file:`js/${t}.js`});i.sendToContent(e.id,r.MessageAction.Parse,{parserName:t})}n.browser.browserAction.onClicked.addListener((function(e){c(e,null)})),n.browser.contextMenus.onClicked.addListener((function(e,t){if(e.menuItemId.toString().startsWith("parse-with-")){c(t,e.menuItemId.toString().split("parse-with-").pop())}})),n.browser.runtime.onMessage.addListener((function(e,t){t.tab&&(e.action===r.MessageAction.SendTask?function(e,t){s.getHosts().then((async o=>{for(const e of o)try{await e.send(t)}catch(e){}i.sendToContent(e,r.MessageAction.TaskSent)}))}(t.tab.id,e.payload.message):e.action===r.MessageAction.SendGCCFile&&async function(e,t){try{if(await n.browser.permissions.contains({origins:["https://codejam.googleapis.com/dashboard/get_file/*"]})){const o=await fetch(t),n=await o.text();i.sendToContent(e,r.MessageAction.GCCFileResult,{content:n})}else i.sendToContent(e,r.MessageAction.GCCRequestFailed)}catch(t){i.sendToContent(e,r.MessageAction.GCCRequestFailed)}}(t.tab.id,e.payload.link))})),function(){n.browser.contextMenus.create({id:"parse-with",title:"Parse with",contexts:["browser_action"]}),n.browser.contextMenus.create({id:"problem-parser",parentId:"parse-with",title:"Problem parser",contexts:["browser_action"]}),n.browser.contextMenus.create({id:"contest-parser",parentId:"parse-with",title:"Contest parser",contexts:["browser_action"]});for(const e of a.parsers){const t=e.constructor.name,o=t.endsWith("ContestParser");n.browser.contextMenus.create({id:`parse-with-${t}`,parentId:(o?"contest":"problem")+"-parser",title:t,contexts:["browser_action"]})}}()},9107:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CHelperHost=void 0;const n=o(3645);t.CHelperHost=class CHelperHost{async send(e){const t=await n.config.get("requestTimeout");return new Promise((o=>{const n=new XMLHttpRequest;n.open("POST","http://localhost:4243/",!0),n.timeout=t,n.onload=()=>o(),n.ontimeout=()=>o(),n.onabort=()=>o(),n.onerror=()=>o();try{n.send("json\n"+e),n.send()}catch(e){}}))}}},8004:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CustomHost=void 0;const n=o(3645);t.CustomHost=class CustomHost{constructor(e){this.port=e}async send(e){const t=await n.config.get("requestTimeout");return new Promise((o=>{const n=new XMLHttpRequest;n.open("POST",`http://localhost:${this.port}`,!0),n.setRequestHeader("Content-Type","application/json"),n.timeout=t,n.onload=()=>o(),n.ontimeout=()=>o(),n.onabort=()=>o(),n.onerror=()=>o();try{n.send(e),n.send()}catch(e){}}))}}},7072:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getHosts=void 0;const n=o(3645),s=o(9107),r=o(8004),a=[new s.CHelperHost],i=[1327,4244,6174,10042,10043,10045,27121];t.getHosts=async function(){const e=await n.config.get("customPorts"),t=[...new Set(i.concat(e))];return a.concat(t.map((e=>new r.CustomHost(e))))}}},o={};function n(e){var s=o[e];if(void 0!==s)return s.exports;var r=o[e]={exports:{}};return t[e].call(r.exports,r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,o,s,r)=>{if(!o){var a=1/0;for(l=0;l<e.length;l++){for(var[o,s,r]=e[l],i=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(l--,1);var d=s();void 0!==d&&(t=d)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,s,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={352:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var s,r,[a,i,c]=o,d=0;for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(c)var l=c(n);for(t&&t(o);d<a.length;d++)r=a[d],n.o(e,r)&&e[r]&&e[r][0](),e[a[d]]=0;return n.O(l)},o=self.webpackChunkcompetitive_companion=self.webpackChunkcompetitive_companion||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var s=n.O(void 0,[592],(()=>n(8136)));s=n.O(s)})();