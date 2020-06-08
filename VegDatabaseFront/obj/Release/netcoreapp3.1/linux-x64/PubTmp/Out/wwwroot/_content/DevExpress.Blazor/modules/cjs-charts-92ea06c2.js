DxBlazorInternal.define("cjs-charts-92ea06c2.js",(function(e,n,t){e("./cjs-chunk-9eab2df8.js");var o=e("./cjs-dom-utils-b1fad850.js");e("./cjs-chunk-c4d681da.js"),e("./cjs-chunk-e26655d2.js");var i=e("./cjs-popup-utils-0c7d618c.js"),r=[];function u(e){var n=r.indexOf(e);return n>-1?r[n+1]:Promise.reject()}function a(n,t,o){return-1===r.indexOf(n)?function(n,t,o){var i=new Promise((function(i){new Promise((function(n){n(e("./cjs-devexpress.viz-7df80a2d.js"))})).then((function(e){var r=c(e,n.querySelector(".dx-chart"),t,i);o(t,r)}))}));return r.push(n),r.push(i),i}(n,t,o):u(n).then((function(e){return new Promise((function(n){o(t,(function(t){t.animation={enabled:!1},e.option(t),n("ok")}))}))})).catch(console.error)}function c(e,n,t,o){var i=t.series.map((function(e){return e.category}))[0],r="pie"===i||"donut"===i?e.viz.dxPieChart:e.viz.dxChart;return function(e){e.type=i,o(new r(n,e))}}function l(e,n,t,i,r,u){r.forEach((function(r){o.AttachEventToElement(e,r,(function(e){var o=s(n,t,i);o&&u(o)}))}))}function s(e,n,t){var o=e.getSeriesByPos(n);return t&&(o=o.getPoints().filter((function(e){return e.tag===t}))[0]),o}function d(e,n,t,i,r){if(e){var u=s(n,t,i);if(u){var a=e.querySelector(".dx-chart-legend-icon");if(a){var c=u.getColor();o.ElementHasCssClass(a,"dx-chart-def-icon")&&(a.style.backgroundColor=c),a.style.color=c}r||(l(e,n,t,i,["mouseover","focusin"],(function(e){e.hover(n.option("legend.hoverMode"))})),l(e,n,t,i,["mouseout","focusout"],(function(e){e.clearHover()})))}}}function f(n,t){var i=null,r=null,u=null,a={},c={},l=-1;function s(e,n){clearTimeout(l),l=setTimeout((function(){i=e,t.invokeMethodAsync("GetTooltipTemplate",[e]).then((function(n){return n=o.EnsureElement(n),c[e]=n,function(e,n){return o.calculateStyles((function(){var t=e.getBoundingClientRect();return'<div id="_'+n+'" class="dx-chart-tooltip-wrapper" style="width: '+t.width+"px; height: "+t.height+'px;"></div>'}))}(n,e)})).then((function(t){a[e]=t,i===e&&n()})).catch((function(e){void 0}))}),100)}n.tooltip={enabled:!0,paddingLeftRight:0,paddingTopBottom:0,customizeTooltip:function(e){return a[e.point.tag]?{html:a[e.point.tag]}:(s(e.point.tag,(function(){e.point.showTooltip()})),{text:""})}},n.onTooltipHidden=function(n){var t;r=null,u&&(t=u,void new Promise((function(n){n(e("./cjs-popup-utils-0c7d618c.js"))})).then((function(e){e.hide(t)})),u=null)},n.onTooltipShown=function(n){if(n.target){var t=n.target.tag;a[t]&&(r=t,new Promise((function(n){n(e("./cjs-popup-utils-0c7d618c.js"))})).then((function(e){r==t&&e.show(u=c[t],document.getElementById("_"+t),"top-sides left-sides")})))}}}function p(e,n){return e._valueAxes.filter((function(e){return e.pane===n.name}))[0]}var h={Init:function(e,n,t){return a(e,n,(function(n,r){!function(e,n){if(e.palette)return n(e.palette);var t=["bg-primary","bg-success","bg-danger","bg-warning","bg-info","bg-secondary"],i=document.createElement("DIV");i.className="d-none position-absolute";for(var r=0;r<t.length;r++){var u=document.createElement("DIV");u.className=t[r],i.appendChild(u)}o.changeDom((function(){document.body.appendChild(i),o.calculateStyles((function(){for(var e=[],t=0;t<i.childNodes.length;t++)e.push(o.GetCurrentStyle(i.childNodes[t]).backgroundColor);o.changeDom((function(){document.body.removeChild(i),n(e)}))}))}))}(n,(function(u){var a=!1;var c={tooltip:n.tooltip,dataSource:n.dataSource,palette:u,rotated:n.rotated,size:n.size,commonAxisSettings:{label:{overlappingBehavior:"rotate",rotationAngle:45}},dataPrepareSettings:{sortingMethod:!1},commonSeriesSettings:{argumentField:"argument",valueField:"value",openValueField:"openValue",highValueField:"highValue",lowValueField:"lowValue",closeValueField:"closeValue",rangeValue1Field:"startValue",rangeValue2Field:"endValue",sizeField:"size",type:"bar"},adaptiveLayout:{width:0,height:0},seriesTemplate:{nameField:"seriesId",customizeSeries:function(e){return n.series.filter((function(n){return n.seriesId===e}))[0]}},customizeLabel:function(e){return e.data.pointLabel},customizePoint:function(e){return e.data.pointAppearance},legend:{visible:!1,hoverMode:(n.legend?n.legend.hoverMode:null)||"includepoints"},onDrawn:function(n){a||(a=!0,function(e,n){for(var t=e.querySelectorAll(".dx-chart-legend-item"),o=0;o<t.length;o++){var i=t[o],r=+i.getAttribute("data-series"),u=i.getAttribute("data-point");d(i,n,r,u,!0)}}(e,n.component),function(e,n){function t(e,n){o.changeDom((function(){i.translatePosition(e,0,n)}))}function r(e,n,o,i,r){t(e,i),e.marginTop="-"+r+"px",t(n,-r),t(o,-r)}n.panes&&0!==n.panes.filter((function(e){return"default"!==e.name})).length&&o.calculateStyles((function(){for(var u=0,a=n.panes.length-2;a>=0;a--){var c=n.panes[a],l=e.querySelector(".dx-chart-legend[data-pane='"+c.name+"']"),s=l.offsetHeight+u,d=p(n,c),f=d._axisGroup.element,h=d._axisGridGroup.element,g=h.getBoundingClientRect().bottom+10,m=i.parseTranslateInfo(l.style),v=l.getBoundingClientRect().top-m.top;n.series.filter((function(e){return e.pane===c.name})).forEach((function(e){t(e._group.element.style,-s)})),r(l.style,f.style,h.style,g-v,s),u+=s}o.changeDom((function(){n.option("margin",{top:u})}))}))}(e,n.component),o.toggleCssClass(e,"dx-loading",!1))},valueAxis:n.valueAxis,panes:n.panes,argumentAxis:n.argumentAxis,pathModified:!0};n.hasTooltipCustomization?f(c,t):c.tooltip=n.tooltip,r(c)}))})).then((function(){return Promise.resolve("ok")})).catch((function(e){void 0}))},Dispose:function(e){return function(e,n){e=o.EnsureElement(e);var t=r.indexOf(e);return t>-1&&(r[t+1].then((function(e){e.dispose()})),r[t+1]=null,n&&(r[t]=null)),Promise.resolve()}(e,!0)},OnSeriesLegendElementReceived:function(e,n,t,o){return u(e).then((function(e){return d(o,e,n,t),Promise.resolve()})).catch((function(e){void 0}))},OnSeriesVisibleChanged:function(e,n,t,o){return u(e).then((function(e){var i=s(e,n,t);return o?i.show():i.hide(),Promise.resolve()})).catch((function(e){void 0}))},DestroyTooltips:function(){return new Promise((function(e,n){for(var t=Array.prototype.slice.call(document.querySelectorAll(".dxc-tooltip")),o=0;o<t.length;o++){var i=t[o];i.parentNode.removeChild(i)}e(!0)}))}};t.createWidgetBuilder=c,t.default=h}),["cjs-chunk-9eab2df8.js","cjs-dom-utils-b1fad850.js","cjs-chunk-c4d681da.js","cjs-chunk-e26655d2.js","cjs-popup-utils-0c7d618c.js"]);