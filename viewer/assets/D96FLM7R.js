import{c as u}from"./Be1fzYNM.js";import{af as b,ak as l,t as s,v as c,x as d,av as e}from"./BJ_rnWsM.js";import{s as p}from"./F_-wkkPL.js";import"./BlL-BYkC.js";import"./A8AViyYJ.js";var h=({dt:n})=>`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${n("radiobutton.width")};
    height: ${n("radiobutton.height")};
}

.p-radiobutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${n("radiobutton.border.color")};
    background: ${n("radiobutton.background")};
    width: ${n("radiobutton.width")};
    height: ${n("radiobutton.height")};
    transition: background ${n("radiobutton.transition.duration")}, color ${n("radiobutton.transition.duration")}, border-color ${n("radiobutton.transition.duration")}, box-shadow ${n("radiobutton.transition.duration")}, outline-color ${n("radiobutton.transition.duration")};
    outline-color: transparent;
    box-shadow: ${n("radiobutton.shadow")};
}

.p-radiobutton-icon {
    transition-duration: ${n("radiobutton.transition.duration")};
    background: transparent;
    font-size: ${n("radiobutton.icon.size")};
    width: ${n("radiobutton.icon.size")};
    height: ${n("radiobutton.icon.size")};
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${n("radiobutton.hover.border.color")};
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: ${n("radiobutton.checked.border.color")};
    background: ${n("radiobutton.checked.background")};
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${n("radiobutton.icon.checked.color")};
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${n("radiobutton.checked.hover.border.color")};
    background: ${n("radiobutton.checked.hover.background")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${n("radiobutton.icon.checked.hover.color")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${n("radiobutton.focus.border.color")};
    box-shadow: ${n("radiobutton.focus.ring.shadow")};
    outline: ${n("radiobutton.focus.ring.width")} ${n("radiobutton.focus.ring.style")} ${n("radiobutton.focus.ring.color")};
    outline-offset: ${n("radiobutton.focus.ring.offset")};
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${n("radiobutton.checked.focus.border.color")};
}

.p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: ${n("radiobutton.invalid.border.color")};
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: ${n("radiobutton.filled.background")};
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: ${n("radiobutton.checked.background")};
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: ${n("radiobutton.checked.hover.background")};
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: ${n("radiobutton.disabled.background")};
    border-color: ${n("radiobutton.checked.disabled.border.color")};
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: ${n("radiobutton.icon.disabled.color")};
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: ${n("radiobutton.sm.width")};
    height: ${n("radiobutton.sm.height")};
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: ${n("radiobutton.icon.sm.size")};
    width: ${n("radiobutton.icon.sm.size")};
    height: ${n("radiobutton.icon.sm.size")};
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: ${n("radiobutton.lg.width")};
    height: ${n("radiobutton.lg.height")};
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: ${n("radiobutton.icon.lg.size")};
    width: ${n("radiobutton.icon.lg.size")};
    height: ${n("radiobutton.icon.lg.size")};
}
`,f={root:function(t){var o=t.instance,r=t.props;return["p-radiobutton p-component",{"p-radiobutton-checked":o.checked,"p-disabled":r.disabled,"p-invalid":o.$pcRadioButtonGroup?o.$pcRadioButtonGroup.$invalid:o.$invalid,"p-variant-filled":o.$variant==="filled","p-radiobutton-sm p-inputfield-sm":r.size==="small","p-radiobutton-lg p-inputfield-lg":r.size==="large"}]},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},g=b.extend({name:"radiobutton",style:h,classes:f}),m={name:"BaseRadioButton",extends:p,props:{value:null,binary:Boolean,readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:g,provide:function(){return{$pcRadioButton:this,$parentInstance:this}}};function a(n){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(n)}function v(n,t,o){return(t=y(t))in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}function y(n){var t=$(n,"string");return a(t)=="symbol"?t:t+""}function $(n,t){if(a(n)!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var r=o.call(n,t);if(a(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var k={name:"RadioButton",extends:m,inheritAttrs:!1,emits:["change","focus","blur"],inject:{$pcRadioButtonGroup:{default:void 0}},methods:{getPTOptions:function(t){var o=t==="root"?this.ptmi:this.ptm;return o(t,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(t){if(!this.disabled&&!this.readonly){var o=this.binary?!this.checked:this.value;this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.writeValue(o,t):this.writeValue(o,t),this.$emit("change",t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){var o,r;this.$emit("blur",t),(o=(r=this.formField).onBlur)===null||o===void 0||o.call(r,t)}},computed:{groupName:function(){return this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.groupName:this.$formName},checked:function(){var t=this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.d_value:this.d_value;return t!=null&&(this.binary?!!t:l(t,this.value))},dataP:function(){return u(v({invalid:this.$invalid,checked:this.checked,disabled:this.disabled,filled:this.$variant==="filled"},this.size,this.size))}}},x=["data-p-checked","data-p-disabled","data-p"],B=["id","value","name","checked","tabindex","disabled","readonly","aria-labelledby","aria-label","aria-invalid"],w=["data-p"],P=["data-p"];function z(n,t,o,r,S,i){return c(),s("div",e({class:n.cx("root")},i.getPTOptions("root"),{"data-p-checked":i.checked,"data-p-disabled":n.disabled,"data-p":i.dataP}),[d("input",e({id:n.inputId,type:"radio",class:[n.cx("input"),n.inputClass],style:n.inputStyle,value:n.value,name:i.groupName,checked:i.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,onFocus:t[0]||(t[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onChange:t[2]||(t[2]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},i.getPTOptions("input")),null,16,B),d("div",e({class:n.cx("box")},i.getPTOptions("box"),{"data-p":i.dataP}),[d("div",e({class:n.cx("icon")},i.getPTOptions("icon"),{"data-p":i.dataP}),null,16,P)],16,w)],16,x)}k.render=z;export{k as default};
