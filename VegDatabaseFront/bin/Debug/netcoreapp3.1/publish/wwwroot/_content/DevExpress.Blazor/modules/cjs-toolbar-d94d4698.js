DxBlazorInternal.define("cjs-toolbar-d94d4698.js",(function(t,e,i){t("./cjs-chunk-9eab2df8.js");var o=t("./cjs-dom-utils-b1fad850.js");t("./cjs-chunk-c4d681da.js");var n=t("./cjs-chunk-95b0a0fe.js");t("./cjs-chunk-ac3aa63b.js");var r=t("./cjs-focus-utils-369f178f.js"),s=t("./cjs-chunk-11e7f58b.js"),a=function(t,e){if(!e)throw new Error("Collection should be able to create item");this.items=[],this.itemCreateFunc=e,this.subscriptions=[],this.isLocked=!1,this.isCollection=!0,this.subjectsCache={},t&&this.addRange(t)};a.prototype.subscribe=function(t){this.isLocked||t(this.getChanges(this.items)),this.subscriptions.push(t)},a.prototype.getChanges=function(t,e){return{addedItems:t||[],removedItems:e||[]}},a.prototype.forEach=function(t){this.items.forEach(t)},a.prototype.selectMany=function(t){return this.map(t).reduce((function(t,e){return t.concat(e.items||e)}),[])},a.prototype.reduce=function(t,e){return this.items.reduce(t)},a.prototype.map=function(t){return this.items.map(t)},a.prototype.filter=function(t){return this.items.filter(t)},a.prototype.any=function(){return this.count()>0},a.prototype.count=function(){return this.items.length},a.prototype.countAsSubject=function(){return this.getMethodAsSubject(this.count)},a.prototype.withSorting=function(t){return new Components.SortedCollection(this,t)},a.prototype.withGrouping=function(t){return new Components.GroupedCollection(this,t)},a.prototype.withFilter=function(t){return new Components.FilteredCollection(this,t)},a.prototype.withMapping=function(t){return new Components.MappedCollection(this,t)},a.prototype.anyAsSubject=function(t){return t?this.withFilter(t).anyAsSubject():this.getMethodAsSubject(this.any)},a.prototype.getMethodAsSubject=function(t){if(!this.subjectsCache[t]){var e=t.bind(this),i=this.subjectsCache[t]=new Components.Subject(e());this.subscribe((function(){i.setValue(e())}))}return this.subjectsCache[t]},a.prototype.get=function(t){return this.items[t]},a.prototype.add=function(t){this.addItemCore(t)&&this.raiseChanges([t],[])},a.prototype.remove=function(t){this.removeItemCore(t)&&this.raiseChanges([],[t])},a.prototype.addRange=function(t){this.raiseChanges(t.map(this.addItemCore.bind(this)).filter((function(t){return!!t})),[])},a.prototype.removeRange=function(t){this.raiseChanges([],t.map(this.removeItemCore.bind(this)).filter((function(t){return!!t})))},a.prototype.addItemCore=function(t){return this.items.indexOf(t)>-1?null:this.items[this.items.length]=t},a.prototype.removeItemCore=function(t){var e=this.items.indexOf(t);return-1===e?null:this.items.splice(e,1)},a.prototype.raiseChanges=function(t,e){var i=this.getChanges(t,e);(i.addedItems.length>0||i.removedItems.length>0)&&this.subscriptions.forEach((function(t){t(i)}))},a.prototype.serialize=function(){var t=Array(this.items.length),e=!1,i=getIndexSequence(this.items.length-1);return(e=serialize(this.items,t,i)||e)?t:void 0},a.prototype.update=function(t){var e=t.length<this.items.length?this.items.splice(t.length):[],i=getIndexSequence(Math.max(-1,t.length-this.items.length-1)).map(function(e){var i=e+this.items.length;return this.itemCreateFunc(i,t[i])}.bind(this));this.items=this.items.concat(i),deserialize(t,this.items,getIndexSequence(this.items.length-1)),this.raiseChanges(i,e)},a.prototype.lock=function(){this.isLocked=!0},a.prototype.unlock=function(){this.isLocked=!1};var u=function(t,e,i){this.block=e,this.layer=t,this.width=0,i.subscribe(e,function(t,i){null===t&&(t=this.layer.getPrevLayer().getActualBlocks().filter((function(t){return t.block===e}))[0].width),t!==this.width&&(this.width=t,i||this.layer.requestUpdateLayoutModel())}.bind(this))};u.prototype.getMinWidth=function(){return this.width},u.prototype.getMaxWidth=function(){return this.getMinWidth()};var c=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getMaxWidth=function(t){return t===this.layer?this.layer.getPrevLayer().getActualBlocks().filter(function(t){return t.block===this.block}.bind(this))[0].getMinWidth():this.getMinWidth()},e}(u),l=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(u),p=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(u),h=function(t,e){this.widthCalculator=t,this.triggersResolver=e};h.prototype.subscribe=function(t,e){var i=this.widthCalculator.bind(this);this.triggersResolver(t).forEach((function(n){n.subscribe((function(){t.isWidthCalculationLocked||o.calculateStyles((function(){e(i(t))}))}),!0)})),o.calculateStyles((function(){e(i(t),!0)}))};var d={fullWidthItem:new h((function(t){return t.getWidth()}),A),fullWidthSystemItem:new h((function(t){return t.getWidth()}),(function(t){return[]})),titleItem:new h((function(t){return t.getWidth()}),(function(t){return[t.toolbar.title.HasTitle,t.toolbar.title.Text]})),noTextItem:new h((function(t){return t.getNoTextWidth()}),A),contextItem:function(t){return new h((function(e){return t.items.filter((function(t){return"item"===t.getName()&&t.index<e.index&&t.isVisible()})).length>=e.toolbar.MinRootItems||!e.isVisible()?0:null}),A)},hiddenItem:new h((function(){return 0}),(function(){return[]}))},f=function(t,e,i,o){this.stateName=t,this.nextLayer=null,this.prevLayer=i,i&&(i.nextLayer=this),this.layoutBlocks=[],this.blockUpdaterGetter=e,this.latestRange=null,this.canApply=o};f.prototype.getNextLayer=function(){return null!=this.nextLayer?this.nextLayer.canApply()?this.nextLayer:this.nextLayer.getNextLayer():null},f.prototype.getPrevLayer=function(){return null!=this.prevLayer?this.prevLayer.canApply()?this.prevLayer:this.prevLayer.getPrevLayer():null},f.prototype.requestUpdateLayoutModel=function(){this.getPrevLayer().requestUpdateLayoutModel()},f.prototype.isValidWidth=function(t){if(!this.canApply())return!1;var e=this.getRange();return!this.getNextLayer()&&e.min>t||!this.getPrevLayer()&&e.max<t||e.min<=t&&e.max>=t},f.prototype.getRange=function(){return this.latestRange=this.getActualBlocks().reduce(function(t,e){return{min:t.min+e.getMinWidth(),max:t.max+e.getMaxWidth(this)}}.bind(this),{min:0,max:0})},f.prototype.getActualBlocks=function(){return this.getPrevLayer()?this.getPrevLayer().getActualBlocks().map(function(t){return this.layoutBlocks.filter((function(e){return e.block===t.block}))[0]||t}.bind(this)):this.layoutBlocks},f.prototype.activate=function(t){this.layoutBlocks.forEach(function(t){t.block.updateStateCore(this.stateName)}.bind(this))},f.prototype.addBlock=function(t){var e=this.blockUpdaterGetter(t);e&&this.layoutBlocks.push(this.createBlock(t,e))},f.prototype.removeBlock=function(t){},f.prototype.createBlock=function(t,e){};var m=function(t){function e(e,i,o,n){t.call(this,e,i,null,n),this.layoutModel=o}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.requestUpdateLayoutModel=function(){this.layoutModel.updateLayout()},e.prototype.createBlock=function(t,e){return new p(this,t,e)},e}(f),y=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.activate=function(t){for(var e=this.getActualBlocks(),i=this.latestRange.max,o=this.stateName,n=e.length-1;n>=0;n--){var r=e[n];if(i>t)if((i-=r.getMaxWidth(this)-r.getMinWidth())<=t){r.block.updateStateCore(o),o=this.getPrevLayer().stateName;continue}r.block.updateStateCore(o)}},e.prototype.getRange=function(){return this.latestRange=this.getActualBlocks().reduce(function(t,e){return{min:t.min+e.getMinWidth(),max:t.max+e.getMaxWidth(this)}}.bind(this),{min:0,max:0})},e.prototype.createBlock=function(t,e){return new c(this,t,e)},e}(f),g=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.createBlock=function(t,e){return new l(this,t,e)},e.prototype.getRange=function(){return this.latestRange={min:this.getActualBlocks().reduce((function(t,e){return t+e.getMinWidth()}),0),max:this.getPrevLayer().getRange().max-1}},e}(f),b=function(t){this.layers=[],this.currentWidth=null,this.onLayerApplied=t};b.prototype.initialize=function(t,e,i){var n=this;this.elementContentWidthSubscription=o.subscribeElementContentWidth(e,(function(e){n.currentWidth!==e&&(null===n.currentWidth&&t.subscribe(function(t){t.addedItems.forEach(this.addBlock.bind(this)),t.removedItems.forEach(this.removeBlock.bind(this))}.bind(n)),n.currentWidth=e,n.updateLayout(),i&&i())}))},b.prototype.dispose=function(){this.elementContentWidthSubscription&&o.unsubscribeElementContentWidth(this.elementContentWidthSubscription)},b.prototype.getLastLayer=function(){return this.layers[this.layers.length-1]||null},b.prototype.defaultLayer=function(t,e){this.layers.push(new m("default",t,this,e))},b.prototype.simultaneousTransitionLayer=function(t,e,i){this.layers.push(new g(t,e,this.getLastLayer(),i))},b.prototype.sequentialTransitionLayer=function(t,e,i){this.layers.push(new y(t,e,this.getLastLayer(),i))},b.prototype.addBlock=function(t){this.layers.forEach((function(e){e.addBlock(t)}))},b.prototype.removeBlock=function(t){this.layers.forEach((function(e){e.removeBlock(t)}))},b.prototype.updateLayout=function(){var t=this.findLayersForWidth(this.currentWidth);t.length>0&&this.applyLayer(t[0])},b.prototype.resetToDefault=function(){this.applyLayer(this.layers[0])},b.prototype.applyLayer=function(t){t.activate(this.currentWidth),this.onLayerApplied&&this.onLayerApplied(t)},b.prototype.findLayersForWidth=function(t){return this.layers.filter((function(e){return e.isValidWidth(t)}))},b.prototype.forceUpdate=function(){null!==this.currentWidth&&this.updateLayout()};var v=function(){this.state=null,this.isWidthCalculationLocked=!1};v.prototype.updateStateCore=function(t){this.state=t,this.updateState(t)},v.prototype.updateState=function(t){},v.prototype.getElement=function(){},v.prototype.getGlobalRefreshTrigger=function(){};var I=function(t){function e(e,i){t.call(this),this.element=i,this.toolbar=e}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getWidth=function(){return this.isVisible()?B(this.getElement()):0},e.prototype.isVisible=function(){return!0},e.prototype.getName=function(){},e.prototype.getElement=function(){return this.element},e.prototype.getGlobalRefreshTrigger=function(){return this.toolbar.RefreshTrigger},e}(v),C=function(t){function e(e,i){t.call(this,e),this.item=i,this.index=-1}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getElement=function(){return this.item.getElement()},e.prototype.updateState=function(t){this.item.IsDisplayed.update(t.indexOf("has-"+this.getName())>-1)},e}(I),x=function(t){function e(e,i){t.call(this,e,i)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getNoTextWidth=function(){return this.item.IsDisplayed.value?function(t){var e=B(t);if(t){var i=t.querySelector(".image");if(i){e-=N(i);for(var n=i;n=n.nextElementSibling;)o.ElementHasCssClass(n,"popout")||"absolute"===o.GetCurrentStyle(n).position||(e-=B(n))}}return e}(this.getElement()):0},e.prototype.getName=function(){return"item"},e.prototype.isVisible=function(){return this.item.IsDisplayed.value},e.prototype.updateState=function(t){var e=this.item.toolbar;this.updateVisible(e.MinRootItems>0?-1===t.indexOf("has-ellipsis")||this.index<e.MinRootItems:-1===t.indexOf("has-ellipsis")&&-1===t.indexOf("has-sidemenu"))},e.prototype.updateVisible=function(t){t||(this.isWidthCalculationLocked=!0),this.item.updateVisible(t),t&&(this.isWidthCalculationLocked=!1)},e}(C),k=function(t){function e(e,i){t.call(this,e,i)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getName=function(){return"ellipsis"},e.prototype.updateState=function(e){t.prototype.updateState.call(this,e),this.updateVisible(this.item.IsDisplayed.value)},e.prototype.updateVisible=function(t){t||(this.isWidthCalculationLocked=!0),this.item.updateVisible(t),t&&(this.isWidthCalculationLocked=!1)},e}(C),L=function(t){function e(e,i){t.call(this,e,i),this.itemBlocks=[],this.addItem(i)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.addItem=function(e){this.itemBlocks.push(new t(this.toolbar,e))},e.prototype.isVisible=function(){return this.itemBlocks.reduce((function(t,e){return t&&e.isVisible()}),!0)},e.prototype.getWidth=function(){return this.itemBlocks.reduce((function(t,e){return t+e.getWidth()}),0)},e.prototype.getNoTextWidth=function(){return this.itemBlocks.reduce((function(t,e){return t+e.getNoTextWidth()}),0)},e.prototype.updateVisible=function(t){this.itemBlocks.forEach((function(e){e.updateVisible(t)}))},e.prototype.tryAddItem=function(t){var e,i=this.itemBlocks[this.itemBlocks.length-1].item;return(e=i.GroupName===t.GroupName&&i.group===t.group&&i.AdaptivePriority.value===t.AdaptivePriority.value)&&this.addItem(t),e},e}(x),j=function(t){function e(e,i,o){t.call(this,e,i),this.item=o}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getName=function(){return"title"},e.prototype.getWidth=function(){return B(this.getElement(),!0)},e.prototype.getElement=function(){return this.item.getElement()},e}(I),S=function(t,e){this.element=t,this.toolbar=e,this.isVisible=!0,this.IsVisible=new s.Subject(null),this.IsVisible.subscribe(function(t){this.onIsVisibleChanged(t)}.bind(this),!0)};S.prototype.getElement=function(){return this.element},S.prototype.updateVisible=function(t){this.IsVisible.update(t)},S.prototype.onIsVisibleChanged=function(t){var e=this.getElement();e&&(t?this.show(e):this.hide(e))},S.prototype.show=function(t){t.classList.remove("ta-hidden-item")},S.prototype.hide=function(t){t.classList.add("ta-hidden-item")};var _=function(t){function e(e,i,o){t.call(this,e,o),this.group=i,this.IsDisplayed=new s.Subject(!0),this.Text=new s.Subject,this.GroupName=new s.Subject,this.AdaptivePriority=new s.Subject,this.Index=new s.Subject,this.IconCssClass=new s.Subject}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.onIsVisibleChanged=function(e){t.prototype.onIsVisibleChanged.call(this,e),this.group.onItemVisibleChanged()},e.prototype.getElement=function(){return document.querySelector(V("data-dxtoolbar-item-id",this.Id))},e.prototype.getParent=function(){var t=this.getElement();if(t&&t.parentNode)return t.parentNode},e}(S),w=function(t){function e(e,i){t.call(this,e,i),this.items=[]}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.addItem=function(t){this.items.push(t)},e.prototype.onItemVisibleChanged=function(){if(0!==this.items.length){var t=this.items.some((function(t){return t.IsVisible.value}));this.updateVisible(t)}},e.prototype.getElement=function(){if(0===this.items.length)return null;var t=o.findParentBySelector(this.items[0].getElement(),V("data-dxtoolbar-group-id",this.toolbar.id));return t||this.items[0].getParent()},e}(S),M=function(t){this.element=t,this._refreshTrigger=new s.Subject(!1),this.itemMap=new Map,this.groupMap=new Map,this.items=[]},E={RefreshTrigger:{configurable:!0}};M.prototype.setEllipses=function(t){this.ellipses=t},E.RefreshTrigger.get=function(){return this._refreshTrigger.asTrigger((function(t){return!t}))},M.prototype.refresh=function(){this._refreshTrigger.update(this.refreshTrigger.value)},Object.defineProperties(M.prototype,E);var T=function(t){function e(e,i){t.call(this,e,i),this.toolbar=i,this.element=e,this.IsDisplayed=new s.Subject(!0),this.Text=new s.Subject,this.IsVisible.update(!1)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(S),W=function(t){function e(e,i,o){t.call(this,e,i),this.toolbar=i,this.HasTitle=new s.Subject,this.Text=new s.Subject,this.Text.subscribe(function(t){this.HasTitle.update(null!=t&&""!=t)}.bind(this)),this.elementSelector=o}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.getElement=function(){return document.querySelector(this.elementSelector)},e}(S),R=function(){this.IsLoading=!0};function A(t){return[t.item.Text,t.item.IsDisplayed,t.item.IconCssClass]}function B(t,e){var i=t?Math.ceil(t.offsetWidth+(e?0:N(t))):0;if(t){if(t.parentElement.lastElementChild===t){var n=o.GetCurrentStyle(t.parentElement);i+=o.PxToInt(n.marginRight)}if(t.parentElement.firstElementChild===t){n=o.GetCurrentStyle(t.parentElement);i+=o.PxToInt(n.marginLeft)}}return i}function N(t){return e=t,n=i||o.GetCurrentStyle(e),o.PxToInt(n.marginLeft)+o.PxToInt(n.marginRight);var e,i,n}function V(t,e){return"["+t+"="+e+"]"}R.prototype.init=function(t,e){this.isLayoutCalculated=!1;var i=e.dotNetComponentReference,n=t.dataset.dxtoolbarId,r=V("data-dxtoolbar-title-id",n),s=V("data-dxtoolbar-ellipses-id",n),u=document.querySelector(s),c=this.toolbar=new M(t),l=c.groupMap;c.id=n,Array.from(e.items).forEach((function(t,e){var i=document.querySelector(V("data-dxtoolbar-item-id",t.id)),r=o.findParentBySelector(i,V("data-dxtoolbar-group-id",n)),s=null;l.has(r)?s=l.get(r):(s=new w(r,c),l.set(r,s));var a=new _(i,s,c);a.Text.update(t.text),a.GroupName.update(t.groupName),a.AdaptivePriority.update(t.adaptivePriority),a.IconCssClass.update(t.iconCssClass),a.IsDisplayed.update(t.visible),a.Index.update(t.index),a.Id=t.id,c.itemMap.set(a.Id,a),c.items.some((function(t){return t.Index.value==a.Index.value}))||(s.addItem(a),c.items.push(a))})),c.setEllipses(u),c.CanHideRootItems=e.canHideRootItems,c.CanCollapseToIcons=e.canCollapseToIcons,c.MinRootItems=e.minRootItems,c.ItemSize=e.itemSize;var p=new a([],(function(t){}));c.title=new W(c.title,c,r),p.add(new j(c,c.title,c.title)),p.addRange(this.getItemsBlocks(c,new a(Array.from(l.values()),(function(){})))),p.add(new k(c,new T(c.ellipses,c)));var h=d.contextItem(p),f=this.Model=new b(function(e){if(!this.isLayoutCalculated){this.isLayoutCalculated=!0;var n=c.element;o.calculateStyles(function(){var t=n.querySelector(".btn-toolbar");this.updateControlStyles(c,Math.ceil(!this.IsLoading&&t?t.offsetHeight:n.offsetHeight)),this.IsLoading=!1,this.trackToolbarControl(this)}.bind(this))}e.stateName.indexOf("no-item-text")>-1?o.AddClassNameToElement(c.element,"no-item-text"):o.RemoveClassNameFromElement(c.element,"no-item-text"),o.RemoveClassNameFromElement(t,"dxbs-loading");var r=c.items.map((function(t){return{Index:parseInt(t.Index.value),Hidden:!t.IsVisible.value}}));i.invokeMethodAsync("OnModelUpdated",Array.from(r))}.bind(this));f.defaultLayer((function(t){switch(t.getName()){case"item":return d.fullWidthItem;case"title":return d.titleItem}return d.hiddenItem}),(function(){return!0})),f.sequentialTransitionLayer("has-ellipsis",(function(t){switch(t.getName()){case"ellipsis":return d.fullWidthSystemItem;case"item":return h}}),(function(){return c.CanHideRootItems&&c.MinRootItems>0})),f.simultaneousTransitionLayer("no-item-text",(function(t){switch(t.getName()){case"item":return d.noTextItem;case"ellipsis":return d.hiddenItem}}),(function(){return c.CanCollapseToIcons})),f.sequentialTransitionLayer(c.CanCollapseToIcons?"no-item-text has-ellipsis":"has-ellipsis",(function(t){switch(t.getName()){case"item":return h;case"ellipsis":return d.fullWidthSystemItem}}),(function(){return c.CanHideRootItems})),f.initialize(p,c.element,function(){}.bind(this)),this.layoutModel=f},R.prototype.reinit=function(t){this.reinitRequested||(this.reinitRequested=!0,o.RequestAnimationFrame(function(){this.reinitRequested=!1,this.resetToDefault(),this.disposeModel(),o.RequestAnimationFrame(function(){this.init(t.mainElement,t)}.bind(this))}.bind(this)))},R.prototype.resetToDefault=function(){this.layoutModel.resetToDefault()},R.prototype.update=function(t){var e=this,i=!1;this.toolbar.CanHideRootItems!==t.canHideRootItems&&(this.toolbar.CanHideRootItems=t.canHideRootItems,i=!0),this.toolbar.CanCollapseToIcons!=t.canCollapseToIcons&&(this.toolbar.CanCollapseToIcons=t.canCollapseToIcons,i=!0),this.toolbar.MinRootItems!==t.minRootItems&&(this.toolbar.MinRootItems=t.minRootItems,i=!0),this.toolbar.ItemSize!==t.itemSize&&(this.toolbar.ItemSize=t.itemSize,this.isLayoutCalculated=!1,i=!0),this.toolbar.title.Text.update(t.title);var o,n,r=Array.from(t.items).map((function(t){return t.id})),s=Array.from(this.toolbar.itemMap.values()).map((function(t){return t.Id}));if(!((o=r).length==(n=s).length&&o.every((function(t,e){return t===n[e]}))))return this.reinit(t),void 0;Array.from(t.items).forEach((function(t,i){var o=e.toolbar.itemMap.get(t.id);o&&(o.Text.update(t.text),o.GroupName.update(t.groupName),o.AdaptivePriority.update(t.adaptivePriority),o.Index.update(t.index),o.IconCssClass.update(t.iconCssClass),o.IsDisplayed.update(t.visible))})),i&&this.layoutModel.forceUpdate()},R.prototype.disposeModel=function(){this.layoutModel&&this.layoutModel.dispose()},R.prototype.dispose=function(){this.disposeModel()},R.prototype.trackToolbarControl=function(t){},R.prototype.getItemsBlocks=function(t,e){return e.selectMany((function(t){return t.items})).reduce(function(e,i){return e.group&&e.group.tryAddItem(i)?e:i.GroupName?{group:e.blocks[e.blocks.length]=new L(t,i),blocks:e.blocks}:{group:null,blocks:e.blocks.concat([new x(t,i)])}}.bind(this),{blocks:[],group:null}).blocks.sort((function(t,e){return t.item.AdaptivePriority.value-e.item.AdaptivePriority.value})).map((function(t,e){return t.index=e,t}))},R.prototype.updateControlStyles=function(t,e){o.SetStylesCore(t.element,"height",e+"px")};var P=new Map;function O(t){var e=t.mainElement;if(null!==e){var i;if(e=o.EnsureElement(e),n.DisposeEvents(e),i=P.get(e))i.update(t);else(i=new R).init(e,t),P.set(e,i);var s=e.querySelector(".btn-toolbar")||e;return r.AttachEventsForFocusHiding(s),Promise.resolve("ok")}}function q(t){if(t=o.EnsureElement(t)){n.DisposeEvents(t);var e=P.get(t);e&&(e.dispose(),P.delete(t))}return Promise.resolve("ok")}var D={Init:O,Dispose:q};i.Dispose=q,i.Init=O,i.default=D}),["cjs-chunk-9eab2df8.js","cjs-dom-utils-b1fad850.js","cjs-chunk-c4d681da.js","cjs-chunk-95b0a0fe.js","cjs-chunk-ac3aa63b.js","cjs-focus-utils-369f178f.js","cjs-chunk-11e7f58b.js"]);