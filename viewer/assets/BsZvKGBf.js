import{am as H,as as L,aF as b,aG as M,at as S,av as w,g as C,y as p,z as h,X as v,C as g,ac as a,D as m,aB as B,A as c}from"./CatXm4QS.js";import{x as f}from"./CLs7nh7g.js";import{C as D}from"./Bx90go0B.js";import{O}from"./BzLPc_86.js";import{s as x}from"./DQl_d7jh.js";import{s as E}from"./CdxZ5cof.js";import"./EUShYJ0M.js";var R=`
    .p-colorpicker {
        display: inline-block;
        position: relative;
    }

    .p-colorpicker-dragging {
        cursor: pointer;
    }

    .p-colorpicker-preview {
        width: dt('colorpicker.preview.width');
        height: dt('colorpicker.preview.height');
        padding: 0;
        border: 0 none;
        border-radius: dt('colorpicker.preview.border.radius');
        transition:
            background dt('colorpicker.transition.duration'),
            color dt('colorpicker.transition.duration'),
            border-color dt('colorpicker.transition.duration'),
            outline-color dt('colorpicker.transition.duration'),
            box-shadow dt('colorpicker.transition.duration');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-colorpicker-preview:enabled:focus-visible {
        border-color: dt('colorpicker.preview.focus.border.color');
        box-shadow: dt('colorpicker.preview.focus.ring.shadow');
        outline: dt('colorpicker.preview.focus.ring.width') dt('colorpicker.preview.focus.ring.style') dt('colorpicker.preview.focus.ring.color');
        outline-offset: dt('colorpicker.preview.focus.ring.offset');
    }

    .p-colorpicker-panel {
        background: dt('colorpicker.panel.background');
        border: 1px solid dt('colorpicker.panel.border.color');
        border-radius: dt('colorpicker.panel.border.radius');
        box-shadow: dt('colorpicker.panel.shadow');
        width: 193px;
        height: 166px;
        position: absolute;
        top: 0;
        left: 0;
    }

    .p-colorpicker-panel-inline {
        box-shadow: none;
        position: static;
    }

    .p-colorpicker-content {
        position: relative;
    }

    .p-colorpicker-color-selector {
        width: 150px;
        height: 150px;
        inset-block-start: 8px;
        inset-inline-start: 8px;
        position: absolute;
    }

    .p-colorpicker-color-background {
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    }

    .p-colorpicker-color-handle {
        position: absolute;
        inset-block-start: 0px;
        inset-inline-start: 150px;
        border-radius: 100%;
        width: 10px;
        height: 10px;
        border-width: 1px;
        border-style: solid;
        margin: -5px 0 0 -5px;
        cursor: pointer;
        opacity: 0.85;
        border-color: dt('colorpicker.handle.color');
    }

    .p-colorpicker-hue {
        width: 17px;
        height: 150px;
        inset-block-start: 8px;
        inset-inline-start: 167px;
        position: absolute;
        opacity: 0.85;
        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);
    }

    .p-colorpicker-hue-handle {
        position: absolute;
        inset-block-start: 150px;
        inset-inline-start: 0px;
        width: 21px;
        margin-inline-start: -2px;
        margin-block-start: -5px;
        height: 10px;
        border-width: 2px;
        border-style: solid;
        opacity: 0.85;
        cursor: pointer;
        border-color: dt('colorpicker.handle.color');
    }
`,V={root:"p-colorpicker p-component",preview:function(e){var t=e.props;return["p-colorpicker-preview",{"p-disabled":t.disabled}]},panel:function(e){var t=e.instance,i=e.props;return["p-colorpicker-panel",{"p-colorpicker-panel-inline":i.inline,"p-disabled":i.disabled,"p-invalid":t.$invalid}]},colorSelector:"p-colorpicker-color-selector",colorBackground:"p-colorpicker-color-background",colorHandle:"p-colorpicker-color-handle",hue:"p-colorpicker-hue",hueHandle:"p-colorpicker-hue-handle"},I=H.extend({name:"colorpicker",style:R,classes:V}),U={name:"BaseColorPicker",extends:E,props:{defaultColor:{type:null,default:"ff0000"},inline:{type:Boolean,default:!1},format:{type:String,default:"hex"},tabindex:{type:String,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},inputId:{type:String,default:null},panelClass:null,overlayClass:null},style:I,provide:function(){return{$pcColorPicker:this,$parentInstance:this}}},P={name:"ColorPicker",extends:U,inheritAttrs:!1,emits:["change","show","hide"],data:function(){return{overlayVisible:!1}},hsbValue:null,localHue:null,outsideClickListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,scrollHandler:null,resizeListener:null,hueDragging:null,colorDragging:null,selfUpdate:null,picker:null,colorSelector:null,colorHandle:null,hueView:null,hueHandle:null,watch:{modelValue:{immediate:!0,handler:function(e){this.hsbValue=this.toHSB(e),this.selfUpdate?this.selfUpdate=!1:this.updateUI()}}},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindDragListeners(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.picker&&this.autoZIndex&&f.clear(this.picker),this.clearRefs()},mounted:function(){this.updateUI()},methods:{pickColor:function(e){var t=this.colorSelector.getBoundingClientRect(),i=t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),s=t.left+document.body.scrollLeft,r=Math.floor(100*Math.max(0,Math.min(150,(e.pageX||e.changedTouches[0].pageX)-s))/150),l=Math.floor(100*(150-Math.max(0,Math.min(150,(e.pageY||e.changedTouches[0].pageY)-i)))/150);this.hsbValue=this.validateHSB({h:this.localHue,s:r,b:l}),this.selfUpdate=!0,this.updateColorHandle(),this.updateInput(),this.updateModel(e)},pickHue:function(e){var t=this.hueView.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0);this.localHue=Math.floor(360*(150-Math.max(0,Math.min(150,(e.pageY||e.changedTouches[0].pageY)-t)))/150),this.hsbValue=this.validateHSB({h:this.localHue,s:this.hsbValue.s,b:this.hsbValue.b}),this.selfUpdate=!0,this.updateColorSelector(),this.updateHue(),this.updateModel(e),this.updateInput()},updateModel:function(e){var t=this.d_value;switch(this.format){case"hex":t=this.HSBtoHEX(this.hsbValue);break;case"rgb":t=this.HSBtoRGB(this.hsbValue);break;case"hsb":t=this.hsbValue;break}this.writeValue(t,e),this.$emit("change",{event:e,value:t})},updateColorSelector:function(){if(this.colorSelector){var e=this.validateHSB({h:this.hsbValue.h,s:100,b:100});this.colorSelector.style.backgroundColor="#"+this.HSBtoHEX(e)}},updateColorHandle:function(){this.colorHandle&&(this.colorHandle.style.left=Math.floor(150*this.hsbValue.s/100)+"px",this.colorHandle.style.top=Math.floor(150*(100-this.hsbValue.b)/100)+"px")},updateHue:function(){this.hueHandle&&(this.hueHandle.style.top=Math.floor(150-150*this.hsbValue.h/360)+"px")},updateInput:function(){this.$refs.input&&(this.$refs.input.style.backgroundColor="#"+this.HSBtoHEX(this.hsbValue))},updateUI:function(){this.updateHue(),this.updateColorHandle(),this.updateInput(),this.updateColorSelector()},validateHSB:function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}},validateRGB:function(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}},validateHEX:function(e){var t=6-e.length;if(t>0){for(var i=[],s=0;s<t;s++)i.push("0");i.push(e),e=i.join("")}return e},HEXtoRGB:function(e){var t=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:t>>16,g:(t&65280)>>8,b:t&255}},HEXtoHSB:function(e){return this.RGBtoHSB(this.HEXtoRGB(e))},RGBtoHSB:function(e){var t={h:0,s:0,b:0},i=Math.min(e.r,e.g,e.b),s=Math.max(e.r,e.g,e.b),r=s-i;return t.b=s,t.s=s!==0?255*r/s:0,t.s!==0?e.r===s?t.h=(e.g-e.b)/r:e.g===s?t.h=2+(e.b-e.r)/r:t.h=4+(e.r-e.g)/r:t.h=-1,t.h*=60,t.h<0&&(t.h+=360),t.s*=100/255,t.b*=100/255,t},HSBtoRGB:function(e){var t={r:null,g:null,b:null},i=Math.round(e.h),s=Math.round(e.s*255/100),r=Math.round(e.b*255/100);if(s===0)t={r,g:r,b:r};else{var l=r,o=(255-s)*r/255,u=(l-o)*(i%60)/60;i===360&&(i=0),i<60?(t.r=l,t.b=o,t.g=o+u):i<120?(t.g=l,t.b=o,t.r=l-u):i<180?(t.g=l,t.r=o,t.b=o+u):i<240?(t.b=l,t.r=o,t.g=l-u):i<300?(t.b=l,t.g=o,t.r=o+u):i<360?(t.r=l,t.g=o,t.b=l-u):(t.r=0,t.g=0,t.b=0)}return{r:Math.round(t.r),g:Math.round(t.g),b:Math.round(t.b)}},RGBtoHEX:function(e){var t=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var i in t)t[i].length===1&&(t[i]="0"+t[i]);return t.join("")},HSBtoHEX:function(e){return this.RGBtoHEX(this.HSBtoRGB(e))},toHSB:function(e){var t;if(e)switch(this.format){case"hex":t=this.HEXtoHSB(e);break;case"rgb":t=this.RGBtoHSB(e);break;case"hsb":t=e;break}else t=this.HEXtoHSB(this.defaultColor);return t.s===0||t.b===0?t.h=this.localHue:this.localHue=t.h,t},onOverlayEnter:function(e){this.updateUI(),this.alignOverlay(),this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&f.set("overlay",e,this.baseZIndex,this.$primevue.config.zIndex.overlay),this.$attrSelector&&e.setAttribute(this.$attrSelector,""),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.clearRefs(),this.$emit("hide")},onOverlayAfterLeave:function(e){this.autoZIndex&&f.clear(e)},alignOverlay:function(){this.appendTo==="self"?S(this.picker,this.$refs.input):w(this.picker,this.$refs.input)},onInputClick:function(){this.disabled||(this.overlayVisible=!this.overlayVisible)},onInputKeydown:function(e){switch(e.code){case"Space":this.overlayVisible=!this.overlayVisible,e.preventDefault();break;case"Escape":case"Tab":this.overlayVisible=!1;break}},onInputBlur:function(e){var t,i;(t=(i=this.formField).onBlur)===null||t===void 0||t.call(i)},onColorMousedown:function(e){this.disabled||(this.bindDragListeners(),this.onColorDragStart(e))},onColorDragStart:function(e){this.disabled||(this.colorDragging=!0,this.pickColor(e),this.$el.setAttribute("p-colorpicker-dragging","true"),!this.isUnstyled&&b(this.$el,"p-colorpicker-dragging"),e.preventDefault())},onDrag:function(e){this.colorDragging&&(this.pickColor(e),e.preventDefault()),this.hueDragging&&(this.pickHue(e),e.preventDefault())},onDragEnd:function(){this.colorDragging=!1,this.hueDragging=!1,this.$el.setAttribute("p-colorpicker-dragging","false"),!this.isUnstyled&&M(this.$el,"p-colorpicker-dragging"),this.unbindDragListeners()},onHueMousedown:function(e){this.disabled||(this.bindDragListeners(),this.onHueDragStart(e))},onHueDragStart:function(e){this.disabled||(this.hueDragging=!0,this.pickHue(e),!this.isUnstyled&&b(this.$el,"p-colorpicker-dragging"),e.preventDefault())},isInputClicked:function(e){return this.$refs.input&&this.$refs.input.isSameNode(e.target)},bindDragListeners:function(){this.bindDocumentMouseMoveListener(),this.bindDocumentMouseUpListener()},unbindDragListeners:function(){this.unbindDocumentMouseMoveListener(),this.unbindDocumentMouseUpListener()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.overlayVisible&&e.picker&&!e.picker.contains(t.target)&&!e.isInputClicked(t)&&(e.overlayVisible=!1)},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new D(this.$refs.container,function(){e.overlayVisible&&(e.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!L()&&(e.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentMouseMoveListener:function(){this.documentMouseMoveListener||(this.documentMouseMoveListener=this.onDrag.bind(this),document.addEventListener("mousemove",this.documentMouseMoveListener))},unbindDocumentMouseMoveListener:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null)},bindDocumentMouseUpListener:function(){this.documentMouseUpListener||(this.documentMouseUpListener=this.onDragEnd.bind(this),document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseUpListener:function(){this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},pickerRef:function(e){this.picker=e},colorSelectorRef:function(e){this.colorSelector=e},colorHandleRef:function(e){this.colorHandle=e},hueViewRef:function(e){this.hueView=e},hueHandleRef:function(e){this.hueHandle=e},clearRefs:function(){this.picker=null,this.colorSelector=null,this.colorHandle=null,this.hueView=null,this.hueHandle=null},onOverlayClick:function(e){O.emit("overlay-click",{originalEvent:e,target:this.$el})}},components:{Portal:x}};function d(n){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(n)}function k(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,i)}return t}function y(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?k(Object(t),!0).forEach(function(i){T(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function T(n,e,t){return(e=X(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function X(n){var e=j(n,"string");return d(e)=="symbol"?e:e+""}function j(n,e){if(d(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(d(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var z=["id","tabindex","disabled"];function G(n,e,t,i,s,r){var l=C("Portal");return h(),p("div",a({ref:"container",class:n.cx("root")},n.ptmi("root")),[n.inline?v("",!0):(h(),p("input",a({key:0,ref:"input",id:n.inputId,type:"text",class:n.cx("preview"),readonly:"",tabindex:n.tabindex,disabled:n.disabled,onClick:e[0]||(e[0]=function(){return r.onInputClick&&r.onInputClick.apply(r,arguments)}),onKeydown:e[1]||(e[1]=function(){return r.onInputKeydown&&r.onInputKeydown.apply(r,arguments)}),onBlur:e[2]||(e[2]=function(){return r.onInputBlur&&r.onInputBlur.apply(r,arguments)})},n.ptm("preview")),null,16,z)),g(l,{appendTo:n.appendTo,disabled:n.inline},{default:m(function(){return[g(B,a({name:"p-connected-overlay",onEnter:r.onOverlayEnter,onLeave:r.onOverlayLeave,onAfterLeave:r.onOverlayAfterLeave},n.ptm("transition")),{default:m(function(){return[n.inline||s.overlayVisible?(h(),p("div",a({key:0,ref:r.pickerRef,class:[n.cx("panel"),n.panelClass,n.overlayClass],onClick:e[11]||(e[11]=function(){return r.onOverlayClick&&r.onOverlayClick.apply(r,arguments)})},y(y({},n.ptm("panel")),n.ptm("overlay"))),[c("div",a({class:n.cx("content")},n.ptm("content")),[c("div",a({ref:r.colorSelectorRef,class:n.cx("colorSelector"),onMousedown:e[3]||(e[3]=function(o){return r.onColorMousedown(o)}),onTouchstart:e[4]||(e[4]=function(o){return r.onColorDragStart(o)}),onTouchmove:e[5]||(e[5]=function(o){return r.onDrag(o)}),onTouchend:e[6]||(e[6]=function(o){return r.onDragEnd()})},n.ptm("colorSelector")),[c("div",a({class:n.cx("colorBackground")},n.ptm("colorBackground")),[c("div",a({ref:r.colorHandleRef,class:n.cx("colorHandle")},n.ptm("colorHandle")),null,16)],16)],16),c("div",a({ref:r.hueViewRef,class:n.cx("hue"),onMousedown:e[7]||(e[7]=function(o){return r.onHueMousedown(o)}),onTouchstart:e[8]||(e[8]=function(o){return r.onHueDragStart(o)}),onTouchmove:e[9]||(e[9]=function(o){return r.onDrag(o)}),onTouchend:e[10]||(e[10]=function(o){return r.onDragEnd()})},n.ptm("hue")),[c("div",a({ref:r.hueHandleRef,class:n.cx("hueHandle")},n.ptm("hueHandle")),null,16)],16)],16)],16)):v("",!0)]}),_:1},16,["onEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo","disabled"])],16)}P.render=G;export{P as default};
