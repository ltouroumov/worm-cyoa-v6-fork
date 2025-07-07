import{c as k}from"./Be1fzYNM.js";import{af as x,bl as f,ak as m,g as h,t as g,v as d,x as s,av as r,at as y,a1 as b,X as v,W as $}from"./DEES2_7q.js";import{s as C}from"./nrGGw7OG.js";import{s as w}from"./-en613jl.js";import{s as P}from"./2YUoSFiK.js";import"./ByGRW8N_.js";import"./CA5aLBJS.js";import"./BMopskjG.js";var S=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,z={root:function(n){var o=n.instance,t=n.props;return["p-checkbox p-component",{"p-checkbox-checked":o.checked,"p-disabled":t.disabled,"p-invalid":o.$pcCheckboxGroup?o.$pcCheckboxGroup.$invalid:o.$invalid,"p-variant-filled":o.$variant==="filled","p-checkbox-sm p-inputfield-sm":t.size==="small","p-checkbox-lg p-inputfield-lg":t.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},B=x.extend({name:"checkbox",style:S,classes:z}),_={name:"BaseCheckbox",extends:P,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:B,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function a(e){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a(e)}function I(e,n,o){return(n=A(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function A(e){var n=T(e,"string");return a(n)=="symbol"?n:n+""}function T(e,n){if(a(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var t=o.call(e,n);if(a(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function G(e){return F(e)||N(e)||j(e)||O()}function O(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(e,n){if(e){if(typeof e=="string")return l(e,n);var o={}.toString.call(e).slice(8,-1);return o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set"?Array.from(e):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?l(e,n):void 0}}function N(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function F(e){if(Array.isArray(e))return l(e)}function l(e,n){(n==null||n>e.length)&&(n=e.length);for(var o=0,t=Array(n);o<n;o++)t[o]=e[o];return t}var V={name:"Checkbox",extends:_,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(n){this.d_indeterminate=n}},methods:{getPTOptions:function(n){var o=n==="root"?this.ptmi:this.ptm;return o(n,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(n){var o=this;if(!this.disabled&&!this.readonly){var t=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,c;this.binary?c=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?c=t.filter(function(i){return!m(i,o.value)}):c=t?[].concat(G(t),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(c,n):this.writeValue(c,n),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){var o,t;this.$emit("blur",n),(o=(t=this.formField).onBlur)===null||o===void 0||o.call(t,n)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var n=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?n===this.trueValue:f(this.value,n)},dataP:function(){return k(I({invalid:this.$invalid,checked:this.checked,disabled:this.disabled,filled:this.$variant==="filled"},this.size,this.size))}},components:{CheckIcon:C,MinusIcon:w}},q=["data-p-checked","data-p-indeterminate","data-p-disabled","data-p"],L=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"],E=["data-p"];function W(e,n,o,t,c,i){var u=h("CheckIcon"),p=h("MinusIcon");return d(),g("div",r({class:e.cx("root")},i.getPTOptions("root"),{"data-p-checked":i.checked,"data-p-indeterminate":c.d_indeterminate||void 0,"data-p-disabled":e.disabled,"data-p":i.dataP}),[s("input",r({id:e.inputId,type:"checkbox",class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.value,name:i.groupName,checked:i.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,required:e.required,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,"aria-checked":c.d_indeterminate?"mixed":void 0,onFocus:n[0]||(n[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:n[1]||(n[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onChange:n[2]||(n[2]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},i.getPTOptions("input")),null,16,L),s("div",r({class:e.cx("box")},i.getPTOptions("box"),{"data-p":i.dataP}),[y(e.$slots,"icon",{checked:i.checked,indeterminate:c.d_indeterminate,class:$(e.cx("icon")),dataP:i.dataP},function(){return[i.checked?(d(),b(u,r({key:0,class:e.cx("icon")},i.getPTOptions("icon"),{"data-p":i.dataP}),null,16,["class","data-p"])):c.d_indeterminate?(d(),b(p,r({key:1,class:e.cx("icon")},i.getPTOptions("icon"),{"data-p":i.dataP}),null,16,["class","data-p"])):v("",!0)]})],16,E)],16,q)}V.render=W;export{V as default};
