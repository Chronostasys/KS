DxBlazorInternal.define("cjs-chunk-ac3aa63b.js",(function(o,e,n){var t=o("./cjs-chunk-9eab2df8.js"),u=o("./cjs-dom-utils-b1fad850.js"),c={};function r(o,e,n,t){t&&i(e)&&s(e),void 0===c[e]&&(c[e]=setTimeout((function(){o(),c[e]=void 0}),n))}function i(o){return!!c[o]}function s(o){clearTimeout(c[o]),c[o]=void 0}var a={touchMouseDownEventName:t.Browser.WebKitTouchUI?"touchstart":t.Browser.Edge&&t.Browser.MSTouchUI&&window.PointerEvent?"pointerdown":"mousedown",touchMouseUpEventName:t.Browser.WebKitTouchUI?"touchend":t.Browser.Edge&&t.Browser.MSTouchUI&&window.PointerEvent?"pointerup":"mouseup",touchMouseMoveEventName:t.Browser.WebKitTouchUI?"touchmove":t.Browser.Edge&&t.Browser.MSTouchUI&&window.PointerEvent?"pointermove":"mousemove"},h=function(){var o,e,n=0;function t(o,e,n,t){o[t=t||n.name]||(o[t]=n),u.DetachEventFromElement(o,e,n=o[t]),u.AttachEventToElement(o,e,n)}function c(e){m(e)&&(n++,r((function(){!function(e){1===n&&(n=0,o.call(this,e))}(e)}),"longPress",500,!0))}function a(o){m(o)&&(n=0,s("longPress"))}function h(o){i("longPress")&&(n=0,s("longPress"))}function m(o){return o.timeStamp!==e&&(e=o.timeStamp,!0)}return{attachEventToElement:t,attachLongTabEventToElement:function(e,n){o=n,t(e,"touchstart",c,"ts"),t(e,"touchend",a,"te"),t(e,"touchmove",h,"tm")},longTouchTimeout:500}}();n.LongTabEventHelper=h,n.TouchUIHelper=a,n.clearUnforcedFunctionByKey=s,n.hasUnforcedFunction=i,n.unforcedFunctionCall=r}),["cjs-chunk-9eab2df8.js","cjs-dom-utils-b1fad850.js"]);
