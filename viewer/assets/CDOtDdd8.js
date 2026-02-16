import{an as c,ao as a,aA as p,a6 as f,z as d,A as g,B as u,ad as s,Z as h,Y as m,ae as i,C as v}from"./DnoyKoxn.js";import{R as y}from"./a7gYkR0q.js";import{s as k}from"./BROzlb8Y.js";import{f as B}from"./ZhWAdK_X.js";import"./CbA-0jCt.js";import"./jc0MLXVe.js";import"./_HAkkcDx.js";var S=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`,P={root:function(n){var o=n.instance,l=n.props;return["p-togglebutton p-component",{"p-togglebutton-checked":o.active,"p-invalid":o.$invalid,"p-togglebutton-fluid":l.fluid,"p-togglebutton-sm p-inputfield-sm":l.size==="small","p-togglebutton-lg p-inputfield-lg":l.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},w=c.extend({name:"togglebutton",style:S,classes:P}),L={name:"BaseToggleButton",extends:k,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:w,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}};function r(t){"@babel/helpers - typeof";return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(t)}function z(t,n,o){return(n=T(n))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}function T(t){var n=C(t,"string");return r(n)=="symbol"?n:n+""}function C(t,n){if(r(t)!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var l=o.call(t,n);if(r(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var I={name:"ToggleButton",extends:L,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(n){var o=n==="root"?this.ptmi:this.ptm;return o(n,{context:{active:this.active,disabled:this.disabled}})},onChange:function(n){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,n),this.$emit("change",n))},onBlur:function(n){var o,l;(o=(l=this.formField).onBlur)===null||o===void 0||o.call(l,n)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return a(this.onLabel)&&a(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "},dataP:function(){return B(z({checked:this.active,invalid:this.$invalid},this.size,this.size))}},directives:{ripple:y}},O=["tabindex","disabled","aria-pressed","aria-label","aria-labelledby","data-p-checked","data-p-disabled","data-p"],x=["data-p"];function N(t,n,o,l,j,e){var b=p("ripple");return f((g(),d("button",i({type:"button",class:t.cx("root"),tabindex:t.tabindex,disabled:t.disabled,"aria-pressed":t.d_value,onClick:n[0]||(n[0]=function(){return e.onChange&&e.onChange.apply(e,arguments)}),onBlur:n[1]||(n[1]=function(){return e.onBlur&&e.onBlur.apply(e,arguments)})},e.getPTOptions("root"),{"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"data-p-checked":e.active,"data-p-disabled":t.disabled,"data-p":e.dataP}),[u("span",i({class:t.cx("content")},e.getPTOptions("content"),{"data-p":e.dataP}),[s(t.$slots,"default",{},function(){return[s(t.$slots,"icon",{value:t.d_value,class:h(t.cx("icon"))},function(){return[t.onIcon||t.offIcon?(g(),d("span",i({key:0,class:[t.cx("icon"),t.d_value?t.onIcon:t.offIcon]},e.getPTOptions("icon")),null,16)):m("",!0)]}),u("span",i({class:t.cx("label")},e.getPTOptions("label")),v(e.label),17)]})],16,x)],16,O)),[[b]])}I.render=N;export{I as default};
