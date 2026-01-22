import{s as f}from"./jw7iGpfZ.js";import{am as y,y as s,z as l,ac as p,aO as b,ab as c}from"./BWIH5MBJ.js";var m=`
    .p-inplace-display {
        display: inline-block;
        cursor: pointer;
        border: 1px solid transparent;
        padding: dt('inplace.padding');
        border-radius: dt('inplace.border.radius');
        transition:
            background dt('inplace.transition.duration'),
            color dt('inplace.transition.duration'),
            outline-color dt('inplace.transition.duration'),
            box-shadow dt('inplace.transition.duration');
        outline-color: transparent;
    }

    .p-inplace-display:not(.p-disabled):hover {
        background: dt('inplace.display.hover.background');
        color: dt('inplace.display.hover.color');
    }

    .p-inplace-display:focus-visible {
        box-shadow: dt('inplace.focus.ring.shadow');
        outline: dt('inplace.focus.ring.width') dt('inplace.focus.ring.style') dt('inplace.focus.ring.color');
        outline-offset: dt('inplace.focus.ring.offset');
    }

    .p-inplace-content {
        display: block;
    }
`,v={root:"p-inplace p-component",display:function(t){var n=t.props;return["p-inplace-display",{"p-disabled":n.disabled}]},content:"p-inplace-content"},h=y.extend({name:"inplace",style:m,classes:v}),g={name:"BaseInplace",extends:f,props:{active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},displayProps:{type:null,default:null}},style:h,provide:function(){return{$pcInplace:this,$parentInstance:this}}},O={name:"Inplace",extends:g,inheritAttrs:!1,emits:["open","close","update:active"],data:function(){return{d_active:this.active}},watch:{active:function(t){this.d_active=t}},methods:{open:function(t){this.disabled||(this.d_active=!0,this.$emit("open",t),this.$emit("update:active",!0))},close:function(t){var n=this;this.d_active=!1,this.$emit("close",t),this.$emit("update:active",!1),setTimeout(function(){n.$refs.display.focus()},0)}}};function a(e){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(r){w(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function w(e,t,n){return(t=P(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){var t=j(e,"string");return a(t)=="symbol"?t:t+""}function j(e,t){if(a(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(a(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var S=["tabindex","data-p-disabled"];function k(e,t,n,r,o,i){return l(),s("div",p({class:e.cx("root"),"aria-live":"polite"},e.ptmi("root")),[o.d_active?(l(),s("div",p({key:1,class:e.cx("content")},e.ptm("content")),[c(e.$slots,"content",{closeCallback:i.close})],16)):(l(),s("div",p({key:0,ref:"display",class:e.cx("display"),tabindex:e.$attrs.tabindex||"0",role:"button",onClick:t[0]||(t[0]=function(){return i.open&&i.open.apply(i,arguments)}),onKeydown:t[1]||(t[1]=b(function(){return i.open&&i.open.apply(i,arguments)},["enter"])),"data-p-disabled":e.disabled},u(u({},e.displayProps),e.ptm("display"))),[c(e.$slots,"display")],16,S))],16)}O.render=k;export{O as default};
