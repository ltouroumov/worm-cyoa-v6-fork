import k from"./zP0XjUdE.js";import{s as O}from"./jw7iGpfZ.js";import{am as C,g as x,y as f,z as h,A as m,$ as V,a0 as S,ac as l,ab as v,C as A,D as B,Y as b}from"./BWIH5MBJ.js";import"./DFni3GdF.js";import"./tuLF93f7.js";import"./ZhWAdK_X.js";var P=`
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
        padding: calc(dt('inputchips.padding.y') / 2) dt('inputchips.padding.x');
        gap: calc(dt('inputchips.padding.y') / 2);
        color: dt('inputchips.color');
        background: dt('inputchips.background');
        border: 1px solid dt('inputchips.border.color');
        border-radius: dt('inputchips.border.radius');
        width: 100%;
        transition:
            background dt('inputchips.transition.duration'),
            color dt('inputchips.transition.duration'),
            border-color dt('inputchips.transition.duration'),
            outline-color dt('inputchips.transition.duration'),
            box-shadow dt('inputchips.transition.duration');
        outline-color: transparent;
        box-shadow: dt('inputchips.shadow');
    }

    .p-inputchips:not(.p-disabled):hover .p-inputchips-input {
        border-color: dt('inputchips.hover.border.color');
    }

    .p-inputchips:not(.p-disabled).p-focus .p-inputchips-input {
        border-color: dt('inputchips.focus.border.color');
        box-shadow: dt('inputchips.focus.ring.shadow');
        outline: dt('inputchips.focus.ring.width') dt('inputchips.focus.ring.style') dt('inputchips.focus.ring.color');
        outline-offset: dt('inputchips.focus.ring.offset');
    }

    .p-inputchips.p-invalid .p-inputchips-input {
        border-color: dt('inputchips.invalid.border.color');
    }

    .p-variant-filled.p-inputchips-input {
        background: dt('inputchips.filled.background');
    }

    .p-inputchips:not(.p-disabled).p-focus .p-variant-filled.p-inputchips-input {
        background: dt('inputchips.filled.focus.background');
    }

    .p-inputchips.p-disabled .p-inputchips-input {
        opacity: 1;
        background: dt('inputchips.disabled.background');
        color: dt('inputchips.disabled.color');
    }

    .p-inputchips-chip.p-chip {
        padding-top: calc(dt('inputchips.padding.y') / 2);
        padding-bottom: calc(dt('inputchips.padding.y') / 2);
        border-radius: dt('inputchips.chip.border.radius');
        transition:
            background dt('inputchips.transition.duration'),
            color dt('inputchips.transition.duration');
    }

    .p-inputchips-chip-item.p-focus .p-inputchips-chip {
        background: dt('inputchips.chip.focus.background');
        color: dt('inputchips.chip.focus.color');
    }

    .p-inputchips-input:has(.p-inputchips-chip) {
        padding-left: calc(dt('inputchips.padding.y') / 2);
        padding-right: calc(dt('inputchips.padding.y') / 2);
    }

    .p-inputchips-input-item {
        flex: 1 1 auto;
        display: inline-flex;
        padding-top: calc(dt('inputchips.padding.y') / 2);
        padding-bottom: calc(dt('inputchips.padding.y') / 2);
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
        color: dt('inputchips.placeholder.color');
    }
`,j={root:function(t){var e=t.instance,i=t.props;return["p-inputchips p-component p-inputwrapper",{"p-disabled":i.disabled,"p-invalid":i.invalid,"p-focus":e.focused,"p-inputwrapper-filled":i.modelValue&&i.modelValue.length||e.inputValue&&e.inputValue.length,"p-inputwrapper-focus":e.focused}]},input:function(t){var e=t.props,i=t.instance;return["p-inputchips-input",{"p-variant-filled":e.variant?e.variant==="filled":i.$primevue.config.inputStyle==="filled"||i.$primevue.config.inputVariant==="filled"}]},chipItem:function(t){var e=t.state,i=t.index;return["p-inputchips-chip-item",{"p-focus":e.focusedIndex===i}]},pcChip:"p-inputchips-chip",chipIcon:"p-inputchips-chip-icon",inputItem:"p-inputchips-input-item"},K=C.extend({name:"inputchips",style:P,classes:j}),D={name:"BaseInputChips",extends:O,props:{modelValue:{type:Array,default:null},max:{type:Number,default:null},separator:{type:[String,Object],default:null},addOnBlur:{type:Boolean,default:null},allowDuplicate:{type:Boolean,default:!0},placeholder:{type:String,default:null},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},removeTokenIcon:{type:String,default:void 0},chipIcon:{type:String,default:void 0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:K,provide:function(){return{$pcInputChips:this,$parentInstance:this}}};function c(n){return T(n)||E(n)||L(n)||F()}function F(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(n,t){if(n){if(typeof n=="string")return y(n,t);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?y(n,t):void 0}}function E(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function T(n){if(Array.isArray(n))return y(n)}function y(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,i=Array(t);e<t;e++)i[e]=n[e];return i}var R={name:"InputChips",extends:D,inheritAttrs:!1,emits:["update:modelValue","add","remove","focus","blur"],data:function(){return{inputValue:null,focused:!1,focusedIndex:null}},mounted:function(){console.warn("Deprecated since v4. Use AutoComplete component instead with its typeahead property.")},methods:{onWrapperClick:function(){this.$refs.input.focus()},onInput:function(t){this.inputValue=t.target.value,this.focusedIndex=null},onFocus:function(t){this.focused=!0,this.focusedIndex=null,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.focusedIndex=null,this.addOnBlur&&this.addItem(t,t.target.value,!1),this.$emit("blur",t)},onKeyDown:function(t){var e=t.target.value;switch(t.code){case"Backspace":e.length===0&&this.modelValue&&this.modelValue.length>0&&(this.focusedIndex!==null?this.removeItem(t,this.focusedIndex):this.removeItem(t,this.modelValue.length-1));break;case"Enter":case"NumpadEnter":e&&e.trim().length&&!this.maxedOut&&this.addItem(t,e,!0);break;case"ArrowLeft":e.length===0&&this.modelValue&&this.modelValue.length>0&&this.$refs.container.focus();break;case"ArrowRight":t.stopPropagation();break;default:this.separator&&(this.separator===t.key||t.key.match(this.separator))&&this.addItem(t,e,!0);break}},onPaste:function(t){var e=this;if(this.separator){var i=this.separator.replace("\\n",`
`).replace("\\r","\r").replace("\\t","	"),r=(t.clipboardData||window.clipboardData).getData("Text");if(r){var o=this.modelValue||[],p=r.split(i);p=p.filter(function(a){return e.allowDuplicate||o.indexOf(a)===-1}),o=[].concat(c(o),c(p)),this.updateModel(t,o,!0)}}},onContainerFocus:function(){this.focused=!0},onContainerBlur:function(){this.focusedIndex=-1,this.focused=!1},onContainerKeyDown:function(t){switch(t.code){case"ArrowLeft":this.onArrowLeftKeyOn(t);break;case"ArrowRight":this.onArrowRightKeyOn(t);break;case"Backspace":this.onBackspaceKeyOn(t);break}},onArrowLeftKeyOn:function(){this.inputValue.length===0&&this.modelValue&&this.modelValue.length>0&&(this.focusedIndex=this.focusedIndex===null?this.modelValue.length-1:this.focusedIndex-1,this.focusedIndex<0&&(this.focusedIndex=0))},onArrowRightKeyOn:function(){this.inputValue.length===0&&this.modelValue&&this.modelValue.length>0&&(this.focusedIndex===this.modelValue.length-1?(this.focusedIndex=null,this.$refs.input.focus()):this.focusedIndex++)},onBackspaceKeyOn:function(t){this.focusedIndex!==null&&this.removeItem(t,this.focusedIndex)},updateModel:function(t,e,i){var r=this;this.$emit("update:modelValue",e),this.$emit("add",{originalEvent:t,value:e}),this.$refs.input.value="",this.inputValue="",setTimeout(function(){r.maxedOut&&(r.focused=!1)},0),i&&t.preventDefault()},addItem:function(t,e,i){if(e&&e.trim().length){var r=this.modelValue?c(this.modelValue):[];(this.allowDuplicate||r.indexOf(e)===-1)&&(r.push(e),this.updateModel(t,r,i))}},removeItem:function(t,e){if(!this.disabled){var i=c(this.modelValue),r=i.splice(e,1);this.focusedIndex=null,this.$refs.input.focus(),this.$emit("update:modelValue",i),this.$emit("remove",{originalEvent:t,value:r})}}},computed:{maxedOut:function(){return this.max&&this.modelValue&&this.max===this.modelValue.length},focusedOptionId:function(){return this.focusedIndex!==null?"".concat(this.$id,"_inputchips_item_").concat(this.focusedIndex):null}},components:{Chip:k}};function d(n){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(n)}function I(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,i)}return e}function w(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?I(Object(e),!0).forEach(function(i){$(n,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):I(Object(e)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(e,i))})}return n}function $(n,t,e){return(t=z(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function z(n){var t=M(n,"string");return d(t)=="symbol"?t:t+""}function M(n,t){if(d(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t);if(d(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var N=["aria-labelledby","aria-label","aria-activedescendant"],W=["id","aria-label","aria-setsize","aria-posinset","data-p-focused"],U=["id","disabled","placeholder","aria-invalid"];function H(n,t,e,i,r,o){var p=x("Chip");return h(),f("div",l({class:n.cx("root")},n.ptmi("root")),[m("ul",l({ref:"container",class:n.cx("input"),tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-activedescendant":r.focused?o.focusedOptionId:void 0,onClick:t[5]||(t[5]=function(a){return o.onWrapperClick()}),onFocus:t[6]||(t[6]=function(){return o.onContainerFocus&&o.onContainerFocus.apply(o,arguments)}),onBlur:t[7]||(t[7]=function(){return o.onContainerBlur&&o.onContainerBlur.apply(o,arguments)}),onKeydown:t[8]||(t[8]=function(){return o.onContainerKeyDown&&o.onContainerKeyDown.apply(o,arguments)})},n.ptm("input")),[(h(!0),f(V,null,S(n.modelValue,function(a,u){return h(),f("li",l({key:"".concat(u,"_").concat(a),id:n.$id+"_inputchips_item_"+u,role:"option",class:n.cx("chipItem",{index:u}),"aria-label":a,"aria-selected":!0,"aria-setsize":n.modelValue.length,"aria-posinset":u+1},{ref_for:!0},n.ptm("chipItem"),{"data-p-focused":r.focusedIndex===u}),[v(n.$slots,"chip",{class:b(n.cx("pcChip")),index:u,value:a,removeCallback:function(s){return n.removeOption(s,u)}},function(){return[A(p,{class:b(n.cx("pcChip")),label:a,removeIcon:n.chipIcon||n.removeTokenIcon,removable:"",unstyled:n.unstyled,onRemove:function(s){return o.removeItem(s,u)},pt:n.ptm("pcChip")},{removeicon:B(function(){return[v(n.$slots,n.$slots.chipicon?"chipicon":"removetokenicon",{class:b(n.cx("chipIcon")),index:u,removeCallback:function(s){return o.removeItem(s,u)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16,W)}),128)),m("li",l({class:n.cx("inputItem"),role:"option"},n.ptm("inputItem")),[m("input",l({ref:"input",id:n.inputId,type:"text",class:n.inputClass,style:n.inputStyle,disabled:n.disabled||o.maxedOut,placeholder:n.placeholder,"aria-invalid":n.invalid||void 0,onFocus:t[0]||(t[0]=function(a){return o.onFocus(a)}),onBlur:t[1]||(t[1]=function(a){return o.onBlur(a)}),onInput:t[2]||(t[2]=function(){return o.onInput&&o.onInput.apply(o,arguments)}),onKeydown:t[3]||(t[3]=function(a){return o.onKeyDown(a)}),onPaste:t[4]||(t[4]=function(a){return o.onPaste(a)})},w(w({},n.inputProps),n.ptm("inputItemField"))),null,16,U)],16)],16,N)],16)}R.render=H;export{R as default};
