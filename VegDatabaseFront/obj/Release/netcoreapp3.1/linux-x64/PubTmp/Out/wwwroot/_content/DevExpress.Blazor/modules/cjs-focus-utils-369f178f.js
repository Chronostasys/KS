DxBlazorInternal.define("cjs-focus-utils-369f178f.js",(function(e,n,s){e("./cjs-chunk-9eab2df8.js");var c=e("./cjs-dom-utils-b1fad850.js"),t=e("./cjs-chunk-c4d681da.js"),o=e("./cjs-chunk-ac3aa63b.js");function d(e){function n(n){e.contains(n.srcElement)&&c.AddClassNameToElement(e,"dxbs-focus-hidden")}var s=document.documentElement;s.addEventListener(o.TouchUIHelper.touchMouseDownEventName,n),e.addEventListener("keydown",(function(n){9===n.keyCode&&c.RemoveClassNameFromElement(e,"dxbs-focus-hidden")})),e.addEventListener("focusout",(function(n){!e.contains(n.relatedTarget)&&document.hasFocus()&&c.RemoveClassNameFromElement(e,"dxbs-focus-hidden")})),t.whenDeleted(e).then((function(){s.removeEventListener(o.TouchUIHelper.touchMouseDownEventName,n)}))}var a={AttachEventsForFocusHiding:d};s.AttachEventsForFocusHiding=d,s.default=a}),["cjs-chunk-9eab2df8.js","cjs-dom-utils-b1fad850.js","cjs-chunk-c4d681da.js","cjs-chunk-ac3aa63b.js"]);
