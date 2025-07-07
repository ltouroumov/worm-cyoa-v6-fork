import k from"./DhFkTboF.js";import{s as O}from"./A8AViyYJ.js";import{af as $,g as C,t as f,v as h,x as m,Z as x,$ as V,av as l,at as v,z as S,A,W as b}from"./BJ_rnWsM.js";import"./Be1fzYNM.js";import"./DyMONeEM.js";import"./Dka6TfxS.js";var B=({dt:n})=>`
.p-inputchips {
    display: inline-flex;
}

.p-inputchips-input {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(${n("inputchips.padding.y")} / 2) ${n("inputchips.padding.x")};
    gap: calc(${n("inputchips.padding.y")} / 2);
    color: ${n("inputchips.color")};
    background: ${n("inputchips.background")};
    border: 1px solid ${n("inputchips.border.color")};
    border-radius: ${n("inputchips.border.radius")};
    width: 100%;
    transition: background ${n("inputchips.transition.duration")}, color ${n("inputchips.transition.duration")}, border-color ${n("inputchips.transition.duration")}, outline-color ${n("inputchips.transition.duration")}, box-shadow ${n("inputchips.transition.duration")};
    outline-color: transparent;
    box-shadow: ${n("inputchips.shadow")};
}

.p-inputchips:not(.p-disabled):hover .p-inputchips-input {
    border-color: ${n("inputchips.hover.border.color")};
}

.p-inputchips:not(.p-disabled).p-focus .p-inputchips-input {
    border-color: ${n("inputchips.focus.border.color")};
    box-shadow: ${n("inputchips.focus.ring.shadow")};
    outline: ${n("inputchips.focus.ring.width")} ${n("inputchips.focus.ring.style")} ${n("inputchips.focus.ring.color")};
    outline-offset: ${n("inputchips.focus.ring.offset")};
}

.p-inputchips.p-invalid .p-inputchips-input {
    border-color: ${n("inputchips.invalid.border.color")};
}

.p-variant-filled.p-inputchips-input {
    background: ${n("inputchips.filled.background")};
}

.p-inputchips:not(.p-disabled).p-focus .p-variant-filled.p-inputchips-input  {
    background: ${n("inputchips.filled.focus.background")};
}

.p-inputchips.p-disabled .p-inputchips-input {
    opacity: 1;
    background: ${n("inputchips.disabled.background")};
    color: ${n("inputchips.disabled.color")};
}

.p-inputchips-chip.p-chip {
    padding-top: calc(${n("inputchips.padding.y")} / 2);
    padding-bottom: calc(${n("inputchips.padding.y")} / 2);
    border-radius: ${n("inputchips.chip.border.radius")};
    transition: background ${n("inputchips.transition.duration")}, color ${n("inputchips.transition.duration")};
}

.p-inputchips-chip-item.p-focus .p-inputchips-chip {
    background: ${n("inputchips.chip.focus.background")};
    color: ${n("inputchips.chip.focus.color")};
}

.p-inputchips-input:has(.p-inputchips-chip) {
    padding-left: calc(${n("inputchips.padding.y")} / 2);
    padding-right: calc(${n("inputchips.padding.y")} / 2);
}

.p-inputchips-input-item {
    flex: 1 1 auto;
    display: inline-flex;
    padding-top: calc(${n("inputchips.padding.y")} / 2);
    padding-bottom: calc(${n("inputchips.padding.y")} / 2);
}

.p-inputchips-input-item input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-inputchips-input-item input::placeholder {
    color: ${n("inputchips.placeholder.color")};
}
`,P={root:function(e){var t=e.instance,i=e.props;return["p-inputchips p-component p-inputwrapper",{"p-disabled":i.disabled,"p-invalid":i.invalid,"p-focus":t.focused,"p-inputwrapper-filled":i.modelValue&&i.modelValue.length||t.inputValue&&t.inputValue.length,"p-inputwrapper-focus":t.focused}]},input:function(e){var t=e.props,i=e.instance;return["p-inputchips-input",{"p-variant-filled":t.variant?t.variant==="filled":i.$primevue.config.inputStyle==="filled"||i.$primevue.config.inputVariant==="filled"}]},chipItem:function(e){var t=e.state,i=e.index;return["p-inputchips-chip-item",{"p-focus":t.focusedIndex===i}]},pcChip:"p-inputchips-chip",chipIcon:"p-inputchips-chip-icon",inputItem:"p-inputchips-input-item"},j=$.extend({name:"inputchips",style:B,classes:P}),K={name:"BaseInputChips",extends:O,props:{modelValue:{type:Array,default:null},max:{type:Number,default:null},separator:{type:[String,Object],default:null},addOnBlur:{type:Boolean,default:null},allowDuplicate:{type:Boolean,default:!0},placeholder:{type:String,default:null},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},removeTokenIcon:{type:String,default:void 0},chipIcon:{type:String,default:void 0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:j,provide:function(){return{$pcInputChips:this,$parentInstance:this}}};function d(n){return E(n)||L(n)||F(n)||D()}function D(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(n,e){if(n){if(typeof n=="string")return y(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(n,e):void 0}}function L(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function E(n){if(Array.isArray(n))return y(n)}function y(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}var T={name:"InputChips",extends:K,inheritAttrs:!1,emits:["update:modelValue","add","remove","focus","blur"],data:function(){return{inputValue:null,focused:!1,focusedIndex:null}},mounted:function(){console.warn("Deprecated since v4. Use AutoComplete component instead with its typeahead property.")},methods:{onWrapperClick:function(){this.$refs.input.focus()},onInput:function(e){this.inputValue=e.target.value,this.focusedIndex=null},onFocus:function(e){this.focused=!0,this.focusedIndex=null,this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedIndex=null,this.addOnBlur&&this.addItem(e,e.target.value,!1),this.$emit("blur",e)},onKeyDown:function(e){var t=e.target.value;switch(e.code){case"Backspace":t.length===0&&this.modelValue&&this.modelValue.length>0&&(this.focusedIndex!==null?this.removeItem(e,this.focusedIndex):this.removeItem(e,this.modelValue.length-1));break;case"Enter":case"NumpadEnter":t&&t.trim().length&&!this.maxedOut&&this.addItem(e,t,!0);break;case"ArrowLeft":t.length===0&&this.modelValue&&this.modelValue.length>0&&this.$refs.container.focus();break;case"ArrowRight":e.stopPropagation();break;default:this.separator&&(this.separator===e.key||e.key.match(this.separator))&&this.addItem(e,t,!0);break}},onPaste:function(e){var t=this;if(this.separator){var i=this.separator.replace("\\n",`
`).replace("\\r","\r").replace("\\t","	"),r=(e.clipboardData||window.clipboardData).getData("Text");if(r){var o=this.modelValue||[],p=r.split(i);p=p.filter(function(a){return t.allowDuplicate||o.indexOf(a)===-1}),o=[].concat(d(o),d(p)),this.updateModel(e,o,!0)}}},onContainerFocus:function(){this.focused=!0},onContainerBlur:function(){this.focusedIndex=-1,this.focused=!1},onContainerKeyDown:function(e){switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOn(e);break;case"ArrowRight":this.onArrowRightKeyOn(e);break;case"Backspace":this.onBackspaceKeyOn(e);break}},onArrowLeftKeyOn:function(){this.inputValue.length===0&&this.modelValue&&this.modelValue.length>0&&(this.focusedIndex=this.focusedIndex===null?this.modelValue.length-1:this.focusedIndex-1,this.focusedIndex<0&&(this.focusedIndex=0))},onArrowRightKeyOn:function(){this.inputValue.length===0&&this.modelValue&&this.modelValue.length>0&&(this.focusedIndex===this.modelValue.length-1?(this.focusedIndex=null,this.$refs.input.focus()):this.focusedIndex++)},onBackspaceKeyOn:function(e){this.focusedIndex!==null&&this.removeItem(e,this.focusedIndex)},updateModel:function(e,t,i){var r=this;this.$emit("update:modelValue",t),this.$emit("add",{originalEvent:e,value:t}),this.$refs.input.value="",this.inputValue="",setTimeout(function(){r.maxedOut&&(r.focused=!1)},0),i&&e.preventDefault()},addItem:function(e,t,i){if(t&&t.trim().length){var r=this.modelValue?d(this.modelValue):[];(this.allowDuplicate||r.indexOf(t)===-1)&&(r.push(t),this.updateModel(e,r,i))}},removeItem:function(e,t){if(!this.disabled){var i=d(this.modelValue),r=i.splice(t,1);this.focusedIndex=null,this.$refs.input.focus(),this.$emit("update:modelValue",i),this.$emit("remove",{originalEvent:e,value:r})}}},computed:{maxedOut:function(){return this.max&&this.modelValue&&this.max===this.modelValue.length},focusedOptionId:function(){return this.focusedIndex!==null?"".concat(this.$id,"_inputchips_item_").concat(this.focusedIndex):null}},components:{Chip:k}};function c(n){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(n)}function I(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function w(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?I(Object(t),!0).forEach(function(i){R(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function R(n,e,t){return(e=z(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function z(n){var e=M(n,"string");return c(e)=="symbol"?e:e+""}function M(n,e){if(c(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(c(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var N=["aria-labelledby","aria-label","aria-activedescendant"],W=["id","aria-label","aria-setsize","aria-posinset","data-p-focused"],U=["id","disabled","placeholder","aria-invalid"];function H(n,e,t,i,r,o){var p=C("Chip");return h(),f("div",l({class:n.cx("root")},n.ptmi("root")),[m("ul",l({ref:"container",class:n.cx("input"),tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-activedescendant":r.focused?o.focusedOptionId:void 0,onClick:e[5]||(e[5]=function(a){return o.onWrapperClick()}),onFocus:e[6]||(e[6]=function(){return o.onContainerFocus&&o.onContainerFocus.apply(o,arguments)}),onBlur:e[7]||(e[7]=function(){return o.onContainerBlur&&o.onContainerBlur.apply(o,arguments)}),onKeydown:e[8]||(e[8]=function(){return o.onContainerKeyDown&&o.onContainerKeyDown.apply(o,arguments)})},n.ptm("input")),[(h(!0),f(x,null,V(n.modelValue,function(a,u){return h(),f("li",l({key:"".concat(u,"_").concat(a),id:n.$id+"_inputchips_item_"+u,role:"option",class:n.cx("chipItem",{index:u}),"aria-label":a,"aria-selected":!0,"aria-setsize":n.modelValue.length,"aria-posinset":u+1,ref_for:!0},n.ptm("chipItem"),{"data-p-focused":r.focusedIndex===u}),[v(n.$slots,"chip",{class:b(n.cx("pcChip")),index:u,value:a,removeCallback:function(s){return n.removeOption(s,u)}},function(){return[S(p,{class:b(n.cx("pcChip")),label:a,removeIcon:n.chipIcon||n.removeTokenIcon,removable:"",unstyled:n.unstyled,onRemove:function(s){return o.removeItem(s,u)},pt:n.ptm("pcChip")},{removeicon:A(function(){return[v(n.$slots,n.$slots.chipicon?"chipicon":"removetokenicon",{class:b(n.cx("chipIcon")),index:u,removeCallback:function(s){return o.removeItem(s,u)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16,W)}),128)),m("li",l({class:n.cx("inputItem"),role:"option"},n.ptm("inputItem")),[m("input",l({ref:"input",id:n.inputId,type:"text",class:n.inputClass,style:n.inputStyle,disabled:n.disabled||o.maxedOut,placeholder:n.placeholder,"aria-invalid":n.invalid||void 0,onFocus:e[0]||(e[0]=function(a){return o.onFocus(a)}),onBlur:e[1]||(e[1]=function(a){return o.onBlur(a)}),onInput:e[2]||(e[2]=function(){return o.onInput&&o.onInput.apply(o,arguments)}),onKeydown:e[3]||(e[3]=function(a){return o.onKeyDown(a)}),onPaste:e[4]||(e[4]=function(a){return o.onPaste(a)})},w(w({},n.inputProps),n.ptm("inputItemField"))),null,16,U)],16)],16,N)],16)}T.render=H;export{T as default};
