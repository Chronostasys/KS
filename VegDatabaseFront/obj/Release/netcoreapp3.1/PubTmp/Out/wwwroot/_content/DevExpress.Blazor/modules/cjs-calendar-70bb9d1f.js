DxBlazorInternal.define("cjs-calendar-70bb9d1f.js",(function(e,t,n){e("./cjs-chunk-9eab2df8.js");var o=e("./cjs-dom-utils-b1fad850.js");e("./cjs-chunk-c4d681da.js");var a=e("./cjs-chunk-ac3aa63b.js"),c=e("./cjs-focus-utils-369f178f.js"),i=e("./cjs-chunk-85e9b555.js");function s(e,t,n){if(e=o.EnsureElement(e)){e.dayCells=void 0,function(e){a.LongTabEventHelper.attachEventToElement(e,"touchstart",h),a.LongTabEventHelper.attachEventToElement(e,"touchmove",g),a.LongTabEventHelper.attachEventToElement(e,"touchend",b),a.LongTabEventHelper.attachLongTabEventToElement(e,E),a.LongTabEventHelper.attachEventToElement(e,"mousedown",d),a.LongTabEventHelper.attachEventToElement(e,"mousemove",f),a.LongTabEventHelper.attachEventToElement(e,"mouseup",v)}(e),c.AttachEventsForFocusHiding(e.querySelector(".card-header.btn-group"));var s=t.getBoundingClientRect();return t.style.width=s.width+"px",t.style.height=s.height+"px",Promise.resolve("ok")}function u(t,n){for(var o,a=(e.dayCells||(e.dayCells=e.querySelectorAll(".dxbs-day")),e.dayCells),c=0;o=a[c];c++){var i=o.getBoundingClientRect();if(i.top<=n&&n<i.bottom&&i.left<=t&&t<i.right)return o}}function d(t){if(!a.hasUnforcedFunction("TouchStart")){var n=r(t.srcElement);n&&(e.inSelectionMode=!0,e.firstDate=l(n))}}function f(t){e.inSelectionMode&&(e.throttledDrag||(e.throttledDrag=i.Timer.Throttle((function(t){var o=u(t.clientX,t.clientY);if(o){var a=l(o);if(!a||!e.firstDate)return;e.lastDate?n.invokeMethodAsync("ChangeSelectionRange",a):(n.invokeMethodAsync("StartSelectionRange",e.firstDate,!t.ctrlKey),e.lastDate=a)}}),20)),e.throttledDrag(t))}function v(t){e.inSelectionMode&&e.lastDate&&n.invokeMethodAsync("EndSelectionRange",!1),e.firstDate=void 0,e.lastDate=void 0,e.inSelectionMode=!1}function h(e){a.unforcedFunctionCall((function(){}),"TouchStart",300,!0)}function E(t){var o=r(t.srcElement);if(o){e.inSelectionMode=!0;var a=l(o);e.lastDate=a,n.invokeMethodAsync("StartSelectionRange",a,!1)}}function g(t){if(e.inSelectionMode){var a=u(t.touches[0].clientX,t.touches[0].clientY);if(a){var c=l(a);c&&e.lastDate-c!=0&&n.invokeMethodAsync("ChangeSelectionRange",c)}o.PreventEventAndBubble(t)}}function b(t){e.inSelectionMode&&(n.invokeMethodAsync("EndSelectionRange",!0),o.PreventEventAndBubble(t)),e.inSelectionMode=!1}}function l(e){return new Date(parseInt(e.getAttribute("data-date")))}function r(e){return o.GetParentByClassName(e,"dxbs-day")}function u(e){if(e=o.EnsureElement(e))return DisposeEvents(e),Promise.resolve("ok")}var d={Init:s,Dispose:u};n.Dispose=u,n.Init=s,n.default=d}),["cjs-chunk-9eab2df8.js","cjs-dom-utils-b1fad850.js","cjs-chunk-c4d681da.js","cjs-chunk-ac3aa63b.js","cjs-focus-utils-369f178f.js","cjs-chunk-85e9b555.js"]);