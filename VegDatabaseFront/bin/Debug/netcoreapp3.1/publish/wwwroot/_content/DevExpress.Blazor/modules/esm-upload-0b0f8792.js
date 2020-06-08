import"./esm-chunk-eaca7b99.js";import{EnsureElement as e,AttachEventToElement as t,AddClassNameToElement as n,RemoveClassNameFromElement as o,DetachEventFromElement as i}from"./esm-dom-utils-0302a1f6.js";import"./esm-chunk-5735fd9a.js";import{D as r,R as s}from"./esm-chunk-b0b509fc.js";const a=0,u=1,l=2,f=3,c=4,d=5,h=6,p=0;function m(a,u,l,f,c){var d;a=e(a),l=e(l),f=u.buttonCssSelector?document.querySelector(u.buttonCssSelector):e(f),u.dropZoneCssSelector&&(d=document.querySelector(u.dropZoneCssSelector)),l&&r(l),f&&r(f),d&&r(d);var h,p=null,m=null,v=null,S=null;return a.files||(a.files=[]),l&&(u.multiple&&l.setAttribute("multiple",""),u.acceptedFileTypes&&l.setAttribute("accept",u.acceptedFileTypes.join(",")),p=function(e){g(l.files,c,u).then((function(e){y(e,u,a,c),l.value=""}))},t(l,"change",p),f&&t(f,"click",m=function(){l.click()}),d&&(v=function(e){e.preventDefault(),g(function(e,t){var n=[];if(e.items)for(var o=0,i=e.items[o];i;o++,i=e.items[o])"file"===i.kind&&i.type&&n.push(i.getAsFile());else for(var r=0,s=e.files[r];s;r++,s=e.files[r])n.push(s);return function(e,t){if(!e.length||!t)return e;const n=[],o=function(e){return e.map(e=>e.trim())}(t);for(let t=0,i=e.length;t<i;t++)I(e[t],o)&&n.push(e[t]);return n}(t.multiple?n:[n[0]],t.acceptedFileTypes)}(e.dataTransfer,u),c,u).then((function(e){y(e,u,a,c)})),h(e)},S=function(e){u.dragOverClassName&&n(e.srcElement,u.dragOverClassName),e.preventDefault()},h=function(e){u.dragOverClassName&&o(e.srcElement,u.dragOverClassName)},t(d,"drop",v),t(d,"dragover",S),t(d,"dragleave",h))),s(l,(function(){p&&i(l,"change",p)})),f&&s(f,(function(){i(f,"click",m)})),d&&s(d,(function(){i(d,"drop",v),i(d,"dragover",S),i(d,"dragover",h)})),Promise.resolve("ok")}function g(e,t,n){return new Promise((function(o,i){t.invokeMethodAsync("CreateFileGuids",e.length).then((function(t){for(var i=[],r=0,s=e[r];s;r++,s=e[r]){var a=v(s,t[r],n);i.push(a)}o(i)}))}))}function v(e,t,n){var o={value:e,fileInfo:{name:e.name,size:e.size,type:e.type,guid:t},status:n.uploadMode===p?u:a,loadedBytes:0,isFileExtensionValid:S(e,n),isMinSizeValid:F(e,n),isMaxSizeValid:E(e,n),isValid:function(){return this.isFileExtensionValid&&this.isMaxSizeValid&&this.isMinSizeValid},isUploadComplete:function(){return this.loadedBytes>=this.fileInfo.size},loadStart:function(){this.status!==l&&(this.status=l,this.onLoadStart&&this.onLoadStart.call(this))},progress:function(){this.onProgress&&this.onProgress.call(this)},pause:function(){this.status=f,this.onPause&&this.onPause.call(this)},loadEnd:function(){this.isUploadComplete()&&(this.status=c,this.onLoadEnd&&this.onLoadEnd.call(this))},abort:function(){this.status!==d&&(this.status=d,this.request&&this.request.abort(),this.onAbort&&this.onAbort.call(this))},error:function(e){this.status=h,this.onError&&this.onError.call(this,e)}};return o.isValid()&&n.uploadUrl||(o.status=h),o}function S(e,t){const n=t.allowedFileExtensions,o=e.name.substring(e.name.lastIndexOf(".")).toLowerCase();if(0===n.length)return!0;for(let e=0;e<n.length;e++)if(o===n[e].toLowerCase())return!0;return!1}function E(e,t){const n=t.maxFileSize;return!(n>0)||e.size<=n}function F(e,t){const n=t.minFileSize;return!(n>0)||e.size>=n}function I(e,t){return t.some((function(t){if("."===t[0]){if(t=t.replace(".","\\."),e.name.match(new RegExp(t+"$","i")))return!0}else if(t=t.replace("*",""),e.type.match(new RegExp(t,"i")))return!0}))}function y(e,t,n,o){0!==e.length&&(n.files=n.files.concat(e),C(n.files,o),e.forEach((function(e){z(e,t,n,o)})))}function z(e,t,n,o){e&&e.isValid()&&e.status!==a&&e.status!==h&&(!function(e,t){e.onLoadStart=function(){!function(e,t){L("FileUploadStarted",e,t)}(e,t)},e.onProgress=function(){!function(e,t){L("FileProgress",e,t)}(e,t)},e.onAbort=function(){!function(e,t){L("FileUploadAborted",e,t)}(e,t)},e.onPause=function(){!function(e,t){L("FileUploadPaused",e,t)}(e,t)},e.onError=function(n){!function(e,t,n,o){o.invokeMethodAsync("FileUploadError",A(e),t,n)}(e,n.status,n.statusText,t)},e.onLoadEnd=function(){!function(e,t){L("FileUploaded",e,t)}(e,t)}}(e,o),function(e){return e.chunkSize>0?k:b}(t).upload(e,t,(function(e){e.loadEnd(),e.isUploadComplete()||e.status!==l||z(e,t,n,o)})))}var k={upload:function(e,t,n){if(e){e.totalChunkCount||(e.chunkIndex=0,e.totalChunkCount=function(e,t){var n=Math.trunc(e/t.chunkSize);return e%t.chunkSize>0&&n++,n}(e.fileInfo.size,t));var o=t.chunkSize*e.chunkIndex,i=e.value.slice(o,o+t.chunkSize),r=function(e,t,n){let o=new FormData;return o.append(e,t),o.append("chunkMetadata",JSON.stringify({FileName:n.fileInfo.name,FileSize:n.fileInfo.size,FileType:n.fileInfo.type,FileGuid:n.fileInfo.guid,Index:n.chunkIndex,TotalCount:n.totalChunkCount})),o}(t.name,i,e);e.request=x.sendRequest(r,{url:t.uploadUrl,method:"POST",headers:[],onAbort:function(t){e.abort()},onProgress:function(e){},onError:function(t){e.error(t.target)},onLoadStart:function(t){e.loadStart()},onLoad:function(t){200===t.target.status?(e.chunkIndex++,e.loadedBytes+=i.size,e.progress(),n(e)):e.error(t.target)}})}}},b={upload:function(e,t,n){if(e){var o=function(e,t){let n=new FormData;return n.append(e,t.value),n}(t.name,e);e.request=x.sendRequest(o,{url:t.uploadUrl,method:"POST",headers:[],onProgress:function(t){e.loadedBytes=t.loaded>e.fileInfo.size?e.fileInfo.size:t.loaded,e.progress()},onAbort:function(t){e.abort()},onError:function(t){e.error(t.target)},onLoadStart:function(t){e.loadStart()},onLoad:function(t){200===t.target.status?n(e,t):e.error(t.target)}})}}},x={sendRequest:function(e,t,n){let o=new XMLHttpRequest;t.crossDomain=function(e){var t=!1,n=document.createElement("a"),o=document.createElement("a");n.href=window.location.href;try{o.href=e,o.href=o.href,t=n.protocol+"//"+n.host!=o.protocol+"//"+o.host}catch(e){t=!0}return t}(t.url);var i=function(e){var t=e.headers||{};return t.Accept=t.Accept||"*/*",e.crossDomain||t["X-Requested-With"]||(t["X-Requested-With"]="XMLHttpRequest"),t}(t);for(var r in o.open(t.method,t.url,!0),t.onLoadStart&&(o.upload.onloadstart=t.onLoadStart),t.onLoad&&(o.onload=t.onLoad),t.onLoadEnd&&(o.upload.onloadend=t.onLoadEnd),t.onProgress&&(o.upload.onprogress=t.onProgress),t.onError&&(o.upload.onerror=t.onError),t.onAbort&&(o.upload.onabort=t.onAbort),i)Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&o.setRequestHeader(r,i[r]);return o.send(e),{abort:function(){o.abort()}}}};function C(e,t){t.invokeMethodAsync("SelectedFilesChanged",e.map((function(e){return A(e)})))}function L(e,t,n){n.invokeMethodAsync(e,A(t))}function A(e){return{Name:e.fileInfo.name,Size:e.fileInfo.size,Type:e.fileInfo.type,Guid:e.fileInfo.guid,LoadedBytes:e.loadedBytes,Status:e.status,IsFileExtensionValid:e.isFileExtensionValid,IsMinSizeValid:e.isMinSizeValid,IsMaxSizeValid:e.isMaxSizeValid}}function P(e,t,n,o){n.files.forEach((function(i){e.forEach((function(e){i.fileInfo.guid===e&&(i.status=u,z(i,t,n,o))}))}))}function M(e,t,n,o){n.files.forEach((function(t){e.forEach((function(e){t.fileInfo.guid===e&&t.pause()}))}))}function V(e,t,n,o){n.files.forEach((function(t){e.forEach((function(e){t.fileInfo.guid===e&&t.abort()}))}))}function q(e,t,n,o){var i=n.files.filter((function(t){return e.indexOf(t.fileInfo.guid)>-1}));0!==!i.length&&(n.files=U(n.files,e),g(i.map((function(e){return e.value})),o,t).then((function(i){n.files=n.files.concat(i),function(e,t,n){n.invokeMethodAsync("FileReloaded",e,t)}(e,i.map((function(e){return e.fileInfo.guid})),o),i.forEach((function(e){e.status=u,z(e,t,n,o)}))})))}function R(e,t,n,o){n.files=U(n.files,e),C(n.files,o)}function U(e,t){return e.filter((function(e){return-1===t.indexOf(e.fileInfo.guid)}))}function w(t){if(t=e(t))return r(t),Promise.resolve("ok")}const O={Init:m,Dispose:w,StartFileUpload:P,PauseFileUpload:M,AbortFileUpload:V,RemoveFiles:R,ReloadFile:q};export default O;export{V as AbortFileUpload,w as Dispose,m as Init,M as PauseFileUpload,q as ReloadFile,R as RemoveFiles,P as StartFileUpload};
