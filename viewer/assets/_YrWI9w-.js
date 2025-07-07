import{c as K}from"./Be1fzYNM.js";import{af as z,bn as j,bo as A,ag as L,g as G,t as S,v as f,z as _,X as P,at as b,au as W,W as q,av as h,x as R,a1 as D,a2 as C,bp as k}from"./DEES2_7q.js";import{s as H}from"./DBnSOLgI.js";import{s as X}from"./DGUWaFOr.js";import J from"./Dcto6AXF.js";import{s as Q}from"./2YUoSFiK.js";import"./ByGRW8N_.js";import"./CA5aLBJS.js";import"./BMopskjG.js";var Y=({dt:t})=>`
.p-inputnumber {
    display: inline-flex;
    position: relative;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    cursor: pointer;
    background: ${t("inputnumber.button.background")};
    color: ${t("inputnumber.button.color")};
    width: ${t("inputnumber.button.width")};
    transition: background ${t("inputnumber.transition.duration")}, color ${t("inputnumber.transition.duration")}, border-color ${t("inputnumber.transition.duration")}, outline-color ${t("inputnumber.transition.duration")};
}

.p-inputnumber-button:disabled {
    cursor: auto;
}

.p-inputnumber-button:not(:disabled):hover {
    background: ${t("inputnumber.button.hover.background")};
    color: ${t("inputnumber.button.hover.color")};
}

.p-inputnumber-button:not(:disabled):active {
    background: ${t("inputnumber.button.active.background")};
    color: ${t("inputnumber.button.active.color")};
}

.p-inputnumber-stacked .p-inputnumber-button {
    position: relative;
    border: 0 none;
}

.p-inputnumber-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
    position: absolute;
    inset-block-start: 1px;
    inset-inline-end: 1px;
    height: calc(100% - 2px);
    z-index: 1;
}

.p-inputnumber-stacked .p-inputnumber-increment-button {
    padding: 0;
    border-start-end-radius: calc(${t("inputnumber.button.border.radius")} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-decrement-button {
    padding: 0;
    border-end-end-radius: calc(${t("inputnumber.button.border.radius")} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-button {
    flex: 1 1 auto;
    border: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-button {
    border: 1px solid ${t("inputnumber.button.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-button:hover {
    border-color: ${t("inputnumber.button.hover.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-button:active {
    border-color: ${t("inputnumber.button.active.border.color")};
}

.p-inputnumber-horizontal .p-inputnumber-increment-button {
    order: 3;
    border-start-end-radius: ${t("inputnumber.button.border.radius")};
    border-end-end-radius: ${t("inputnumber.button.border.radius")};
    border-inline-start: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-horizontal .p-inputnumber-decrement-button {
    order: 1;
    border-start-start-radius: ${t("inputnumber.button.border.radius")};
    border-end-start-radius: ${t("inputnumber.button.border.radius")};
    border-inline-end: 0 none;
}

.p-floatlabel:has(.p-inputnumber-horizontal) label {
    margin-inline-start: ${t("inputnumber.button.width")};
}

.p-inputnumber-vertical {
    flex-direction: column;
}

.p-inputnumber-vertical .p-inputnumber-button {
    border: 1px solid ${t("inputnumber.button.border.color")};
    padding: ${t("inputnumber.button.vertical.padding")};
}

.p-inputnumber-vertical .p-inputnumber-button:hover {
    border-color: ${t("inputnumber.button.hover.border.color")};
}

.p-inputnumber-vertical .p-inputnumber-button:active {
    border-color: ${t("inputnumber.button.active.border.color")};
}

.p-inputnumber-vertical .p-inputnumber-increment-button {
    order: 1;
    border-start-start-radius: ${t("inputnumber.button.border.radius")};
    border-start-end-radius: ${t("inputnumber.button.border.radius")};
    width: 100%;
    border-block-end: 0 none;
}

.p-inputnumber-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-vertical .p-inputnumber-decrement-button {
    order: 3;
    border-end-start-radius: ${t("inputnumber.button.border.radius")};
    border-end-end-radius: ${t("inputnumber.button.border.radius")};
    width: 100%;
    border-block-start: 0 none;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-inputnumber-fluid {
    width: 100%;
}

.p-inputnumber-fluid .p-inputnumber-input {
    width: 1%;
}

.p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
    width: 100%;
}

.p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
    font-size: ${t("form.field.sm.font.size")};
    width: ${t("form.field.sm.font.size")};
    height: ${t("form.field.sm.font.size")};
}

.p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
    font-size: ${t("form.field.lg.font.size")};
    width: ${t("form.field.lg.font.size")};
    height: ${t("form.field.lg.font.size")};
}
`,Z={root:function(e){var n=e.instance,i=e.props;return["p-inputnumber p-component p-inputwrapper",{"p-invalid":n.$invalid,"p-inputwrapper-filled":n.$filled||i.allowEmpty===!1,"p-inputwrapper-focus":n.focused,"p-inputnumber-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-vertical":i.showButtons&&i.buttonLayout==="vertical","p-inputnumber-fluid":n.$fluid}]},pcInputText:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:function(e){var n=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":i.showButtons&&i.max!==null&&n.maxBoundry()}]},decrementButton:function(e){var n=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":i.showButtons&&i.min!==null&&n.minBoundry()}]}},ee=z.extend({name:"inputnumber",style:Y,classes:Z}),te={name:"BaseInputNumber",extends:Q,props:{format:{type:Boolean,default:!0},showButtons:{type:Boolean,default:!1},buttonLayout:{type:String,default:"stacked"},incrementButtonClass:{type:String,default:null},decrementButtonClass:{type:String,default:null},incrementButtonIcon:{type:String,default:void 0},incrementIcon:{type:String,default:void 0},decrementButtonIcon:{type:String,default:void 0},decrementIcon:{type:String,default:void 0},locale:{type:String,default:void 0},localeMatcher:{type:String,default:void 0},mode:{type:String,default:"decimal"},prefix:{type:String,default:null},suffix:{type:String,default:null},currency:{type:String,default:void 0},currencyDisplay:{type:String,default:void 0},useGrouping:{type:Boolean,default:!0},minFractionDigits:{type:Number,default:void 0},maxFractionDigits:{type:Number,default:void 0},roundingMode:{type:String,default:"halfExpand",validator:function(e){return["ceil","floor","expand","trunc","halfCeil","halfFloor","halfExpand","halfTrunc","halfEven"].includes(e)}},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:1},allowEmpty:{type:Boolean,default:!0},highlightOnFocus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},placeholder:{type:String,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},required:{type:Boolean,default:!1}},style:ee,provide:function(){return{$pcInputNumber:this,$parentInstance:this}}};function $(t){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(t)}function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?O(Object(n),!0).forEach(function(i){V(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function V(t,e,n){return(e=ne(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ne(t){var e=ie(t,"string");return $(e)=="symbol"?e:e+""}function ie(t,e){if($(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if($(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function re(t){return oe(t)||ae(t)||se(t)||ue()}function ue(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(t,e){if(t){if(typeof t=="string")return F(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(t,e):void 0}}function ae(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function oe(t){if(Array.isArray(t))return F(t)}function F(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var le={name:"InputNumber",extends:te,inheritAttrs:!1,emits:["input","focus","blur"],inject:{$pcFluid:{default:null}},numberFormat:null,_numeral:null,_decimal:null,_group:null,_minusSign:null,_currency:null,_suffix:null,_prefix:null,_index:null,groupChar:"",isSpecialChar:null,prefixChar:null,suffixChar:null,timer:null,data:function(){return{d_modelValue:this.d_value,focused:!1}},watch:{d_value:function(e){this.d_modelValue=e},locale:function(e,n){this.updateConstructParser(e,n)},localeMatcher:function(e,n){this.updateConstructParser(e,n)},mode:function(e,n){this.updateConstructParser(e,n)},currency:function(e,n){this.updateConstructParser(e,n)},currencyDisplay:function(e,n){this.updateConstructParser(e,n)},useGrouping:function(e,n){this.updateConstructParser(e,n)},minFractionDigits:function(e,n){this.updateConstructParser(e,n)},maxFractionDigits:function(e,n){this.updateConstructParser(e,n)},suffix:function(e,n){this.updateConstructParser(e,n)},prefix:function(e,n){this.updateConstructParser(e,n)}},created:function(){this.constructParser()},methods:{getOptions:function(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits,maximumFractionDigits:this.maxFractionDigits,roundingMode:this.roundingMode}},constructParser:function(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());var e=re(new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)).reverse(),n=new Map(e.map(function(i,s){return[i,s]}));this._numeral=new RegExp("[".concat(e.join(""),"]"),"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=function(i){return n.get(i)}},updateConstructParser:function(e,n){e!==n&&this.constructParser()},escapeRegExp:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},getDecimalExpression:function(){var e=new Intl.NumberFormat(this.locale,U(U({},this.getOptions()),{},{useGrouping:!1}));return new RegExp("[".concat(e.format(1.1).replace(this._currency,"").trim().replace(this._numeral,""),"]"),"g")},getGroupingExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp("[".concat(this.groupChar,"]"),"g")},getMinusSignExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp("[".concat(e.format(-1).trim().replace(this._numeral,""),"]"),"g")},getCurrencyExpression:function(){if(this.currency){var e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0,roundingMode:this.roundingMode});return new RegExp("[".concat(e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,""),"]"),"g")}return new RegExp("[]","g")},getPrefixExpression:function(){if(this.prefix)this.prefixChar=this.prefix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp("".concat(this.escapeRegExp(this.prefixChar||"")),"g")},getSuffixExpression:function(){if(this.suffix)this.suffixChar=this.suffix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0,roundingMode:this.roundingMode});this.suffixChar=e.format(1).split("1")[1]}return new RegExp("".concat(this.escapeRegExp(this.suffixChar||"")),"g")},formatValue:function(e){if(e!=null){if(e==="-")return e;if(this.format){var n=new Intl.NumberFormat(this.locale,this.getOptions()),i=n.format(e);return this.prefix&&(i=this.prefix+i),this.suffix&&(i=i+this.suffix),i}return e.toString()}return""},parseValue:function(e){var n=e.replace(this._suffix,"").replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(n){if(n==="-")return n;var i=+n;return isNaN(i)?null:i}return null},repeat:function(e,n,i){var s=this;if(!this.readonly){var r=n||500;this.clearTimer(),this.timer=setTimeout(function(){s.repeat(e,40,i)},r),this.spin(e,i)}},spin:function(e,n){if(this.$refs.input){var i=this.step*n,s=this.parseValue(this.$refs.input.$el.value)||0,r=this.validateValue(s+i);this.updateInput(r,null,"spin"),this.updateModel(e,r),this.handleOnInput(e,s,r)}},onUpButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,1),e.preventDefault())},onUpButtonMouseUp:function(){this.disabled||this.clearTimer()},onUpButtonMouseLeave:function(){this.disabled||this.clearTimer()},onUpButtonKeyUp:function(){this.disabled||this.clearTimer()},onUpButtonKeyDown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&this.repeat(e,null,1)},onDownButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,-1),e.preventDefault())},onDownButtonMouseUp:function(){this.disabled||this.clearTimer()},onDownButtonMouseLeave:function(){this.disabled||this.clearTimer()},onDownButtonKeyUp:function(){this.disabled||this.clearTimer()},onDownButtonKeyDown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&this.repeat(e,null,-1)},onUserInput:function(){this.isSpecialChar&&(this.$refs.input.$el.value=this.lastValue),this.isSpecialChar=!1},onInputKeyDown:function(e){if(!this.readonly){if(e.altKey||e.ctrlKey||e.metaKey){this.isSpecialChar=!0,this.lastValue=this.$refs.input.$el.value;return}this.lastValue=e.target.value;var n=e.target.selectionStart,i=e.target.selectionEnd,s=i-n,r=e.target.value,u=null,a=e.code||e.key;switch(a){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":if(s>1){var m=this.isNumeralChar(r.charAt(n))?n+1:n+2;this.$refs.input.$el.setSelectionRange(m,m)}else this.isNumeralChar(r.charAt(n-1))||e.preventDefault();break;case"ArrowRight":if(s>1){var c=i-1;this.$refs.input.$el.setSelectionRange(c,c)}else this.isNumeralChar(r.charAt(n))||e.preventDefault();break;case"Tab":case"Enter":case"NumpadEnter":u=this.validateValue(this.parseValue(r)),this.$refs.input.$el.value=this.formatValue(u),this.$refs.input.$el.setAttribute("aria-valuenow",u),this.updateModel(e,u);break;case"Backspace":{if(e.preventDefault(),n===i){var g=r.charAt(n-1),o=this.getDecimalCharIndexes(r),p=o.decimalCharIndex,l=o.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(g)){var v=this.getDecimalLength(r);if(this._group.test(g))this._group.lastIndex=0,u=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(g))this._decimal.lastIndex=0,v?this.$refs.input.$el.setSelectionRange(n-1,n-1):u=r.slice(0,n-1)+r.slice(n);else if(p>0&&n>p){var I=this.isDecimalMode()&&(this.minFractionDigits||0)<v?"":"0";u=r.slice(0,n-1)+I+r.slice(n)}else l===1?(u=r.slice(0,n-1)+"0"+r.slice(n),u=this.parseValue(u)>0?u:""):u=r.slice(0,n-1)+r.slice(n)}this.updateValue(e,u,null,"delete-single")}else u=this.deleteRange(r,n,i),this.updateValue(e,u,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===i){var d=r.charAt(n),y=this.getDecimalCharIndexes(r),w=y.decimalCharIndex,M=y.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(d)){var x=this.getDecimalLength(r);if(this._group.test(d))this._group.lastIndex=0,u=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(d))this._decimal.lastIndex=0,x?this.$refs.input.$el.setSelectionRange(n+1,n+1):u=r.slice(0,n)+r.slice(n+1);else if(w>0&&n>w){var B=this.isDecimalMode()&&(this.minFractionDigits||0)<x?"":"0";u=r.slice(0,n)+B+r.slice(n+1)}else M===1?(u=r.slice(0,n)+"0"+r.slice(n+1),u=this.parseValue(u)>0?u:""):u=r.slice(0,n)+r.slice(n+1)}this.updateValue(e,u,null,"delete-back-single")}else u=this.deleteRange(r,n,i),this.updateValue(e,u,null,"delete-range");break;case"Home":e.preventDefault(),L(this.min)&&this.updateModel(e,this.min);break;case"End":e.preventDefault(),L(this.max)&&this.updateModel(e,this.max);break}}},onInputKeyPress:function(e){if(!this.readonly){var n=e.key,i=this.isDecimalSign(n),s=this.isMinusSign(n);e.code!=="Enter"&&e.preventDefault(),(Number(n)>=0&&Number(n)<=9||s||i)&&this.insert(e,n,{isDecimalSign:i,isMinusSign:s})}},onPaste:function(e){e.preventDefault();var n=(e.clipboardData||window.clipboardData).getData("Text");if(n){var i=this.parseValue(n);i!=null&&this.insert(e,i.toString())}},allowMinusSign:function(){return this.min===null||this.min<0},isMinusSign:function(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1},isDecimalSign:function(e){var n;return(n=this.locale)!==null&&n!==void 0&&n.includes("fr")&&[".",","].includes(e)||this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1},isDecimalMode:function(){return this.mode==="decimal"},getDecimalCharIndexes:function(e){var n=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,""),s=i.search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:s}},getCharIndexes:function(e){var n=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.search(this._minusSign);this._minusSign.lastIndex=0;var s=e.search(this._suffix);this._suffix.lastIndex=0;var r=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:i,suffixCharIndex:s,currencyCharIndex:r}},insert:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{isDecimalSign:!1,isMinusSign:!1},s=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!(!this.allowMinusSign()&&s!==-1)){var r=this.$refs.input.$el.selectionStart,u=this.$refs.input.$el.selectionEnd,a=this.$refs.input.$el.value.trim(),m=this.getCharIndexes(a),c=m.decimalCharIndex,g=m.minusCharIndex,o=m.suffixCharIndex,p=m.currencyCharIndex,l;if(i.isMinusSign){var v=g===-1;(r===0||r===p+1)&&(l=a,(v||u!==0)&&(l=this.insertText(a,n,0,u)),this.updateValue(e,l,n,"insert"))}else if(i.isDecimalSign)c>0&&r===c?this.updateValue(e,a,n,"insert"):c>r&&c<u?(l=this.insertText(a,n,r,u),this.updateValue(e,l,n,"insert")):c===-1&&this.maxFractionDigits&&(l=this.insertText(a,n,r,u),this.updateValue(e,l,n,"insert"));else{var I=this.numberFormat.resolvedOptions().maximumFractionDigits,d=r!==u?"range-insert":"insert";if(c>0&&r>c){if(r+n.length-(c+1)<=I){var y=p>=r?p-1:o>=r?o:a.length;l=a.slice(0,r)+n+a.slice(r+n.length,y)+a.slice(y),this.updateValue(e,l,n,d)}}else l=this.insertText(a,n,r,u),this.updateValue(e,l,n,d)}}},insertText:function(e,n,i,s){var r=n==="."?n:n.split(".");if(r.length===2){var u=e.slice(i,s).search(this._decimal);return this._decimal.lastIndex=0,u>0?e.slice(0,i)+this.formatValue(n)+e.slice(s):this.formatValue(n)||e}else return s-i===e.length?this.formatValue(n):i===0?n+e.slice(s):s===e.length?e.slice(0,i)+n:e.slice(0,i)+n+e.slice(s)},deleteRange:function(e,n,i){var s;return i-n===e.length?s="":n===0?s=e.slice(i):i===e.length?s=e.slice(0,n):s=e.slice(0,n)+e.slice(i),s},initCursor:function(){var e=this.$refs.input.$el.selectionStart,n=this.$refs.input.$el.value,i=n.length,s=null,r=(this.prefixChar||"").length;n=n.replace(this._prefix,""),e=e-r;var u=n.charAt(e);if(this.isNumeralChar(u))return e+r;for(var a=e-1;a>=0;)if(u=n.charAt(a),this.isNumeralChar(u)){s=a+r;break}else a--;if(s!==null)this.$refs.input.$el.setSelectionRange(s+1,s+1);else{for(a=e;a<i;)if(u=n.charAt(a),this.isNumeralChar(u)){s=a+r;break}else a++;s!==null&&this.$refs.input.$el.setSelectionRange(s,s)}return s||0},onInputClick:function(){var e=this.$refs.input.$el.value;!this.readonly&&e!==A()&&this.initCursor()},isNumeralChar:function(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1},resetRegex:function(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0},updateValue:function(e,n,i,s){var r=this.$refs.input.$el.value,u=null;n!=null&&(u=this.parseValue(n),u=!u&&!this.allowEmpty?this.min||0:u,this.updateInput(u,i,s,n),this.handleOnInput(e,r,u))},handleOnInput:function(e,n,i){if(this.isValueChanged(n,i)){var s,r;this.$emit("input",{originalEvent:e,value:i,formattedValue:n}),(s=(r=this.formField).onInput)===null||s===void 0||s.call(r,{originalEvent:e,value:i})}},isValueChanged:function(e,n){if(n===null&&e!==null)return!0;if(n!=null){var i=typeof e=="string"?this.parseValue(e):e;return n!==i}return!1},validateValue:function(e){return e==="-"||e==null?null:this.min!=null&&e<this.min?this.min:this.max!=null&&e>this.max?this.max:e},updateInput:function(e,n,i,s){n=n||"";var r=this.$refs.input.$el.value,u=this.formatValue(e),a=r.length;if(u!==s&&(u=this.concatValues(u,s)),a===0){this.$refs.input.$el.value=u,this.$refs.input.$el.setSelectionRange(0,0);var m=this.initCursor(),c=m+n.length;this.$refs.input.$el.setSelectionRange(c,c)}else{var g=this.$refs.input.$el.selectionStart,o=this.$refs.input.$el.selectionEnd;this.$refs.input.$el.value=u;var p=u.length;if(i==="range-insert"){var l=this.parseValue((r||"").slice(0,g)),v=l!==null?l.toString():"",I=v.split("").join("(".concat(this.groupChar,")?")),d=new RegExp(I,"g");d.test(u);var y=n.split("").join("(".concat(this.groupChar,")?")),w=new RegExp(y,"g");w.test(u.slice(d.lastIndex)),o=d.lastIndex+w.lastIndex,this.$refs.input.$el.setSelectionRange(o,o)}else if(p===a)i==="insert"||i==="delete-back-single"?this.$refs.input.$el.setSelectionRange(o+1,o+1):i==="delete-single"?this.$refs.input.$el.setSelectionRange(o-1,o-1):(i==="delete-range"||i==="spin")&&this.$refs.input.$el.setSelectionRange(o,o);else if(i==="delete-back-single"){var M=r.charAt(o-1),x=r.charAt(o),B=a-p,N=this._group.test(x);N&&B===1?o+=1:!N&&this.isNumeralChar(M)&&(o+=-1*B+1),this._group.lastIndex=0,this.$refs.input.$el.setSelectionRange(o,o)}else if(r==="-"&&i==="insert"){this.$refs.input.$el.setSelectionRange(0,0);var T=this.initCursor(),E=T+n.length+1;this.$refs.input.$el.setSelectionRange(E,E)}else o=o+(p-a),this.$refs.input.$el.setSelectionRange(o,o)}this.$refs.input.$el.setAttribute("aria-valuenow",e)},concatValues:function(e,n){if(e&&n){var i=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?i!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(i)+this.suffixChar:e:i!==-1?e.split(this._decimal)[0]+n.slice(i):e}return e},getDecimalLength:function(e){if(e){var n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0},updateModel:function(e,n){this.writeValue(n,e)},onInputFocus:function(e){this.focused=!0,!this.disabled&&!this.readonly&&this.$refs.input.$el.value!==A()&&this.highlightOnFocus&&e.target.select(),this.$emit("focus",e)},onInputBlur:function(e){var n,i;this.focused=!1;var s=e.target,r=this.validateValue(this.parseValue(s.value));this.$emit("blur",{originalEvent:e,value:s.value}),(n=(i=this.formField).onBlur)===null||n===void 0||n.call(i,e),s.value=this.formatValue(r),s.setAttribute("aria-valuenow",r),this.updateModel(e,r),!this.disabled&&!this.readonly&&this.highlightOnFocus&&j()},clearTimer:function(){this.timer&&clearTimeout(this.timer)},maxBoundry:function(){return this.d_value>=this.max},minBoundry:function(){return this.d_value<=this.min}},computed:{upButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onUpButtonMouseDown(i)},mouseup:function(i){return e.onUpButtonMouseUp(i)},mouseleave:function(i){return e.onUpButtonMouseLeave(i)},keydown:function(i){return e.onUpButtonKeyDown(i)},keyup:function(i){return e.onUpButtonKeyUp(i)}}},downButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onDownButtonMouseDown(i)},mouseup:function(i){return e.onDownButtonMouseUp(i)},mouseleave:function(i){return e.onDownButtonMouseLeave(i)},keydown:function(i){return e.onDownButtonKeyDown(i)},keyup:function(i){return e.onDownButtonKeyUp(i)}}},formattedValue:function(){var e=!this.d_value&&!this.allowEmpty?0:this.d_value;return this.formatValue(e)},getFormatter:function(){return this.numberFormat},dataP:function(){return K(V(V({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size),this.buttonLayout,this.showButtons&&this.buttonLayout))}},components:{InputText:J,AngleUpIcon:X,AngleDownIcon:H}},ce=["data-p"],pe=["data-p"],de=["disabled","data-p"],he=["disabled","data-p"],me=["disabled","data-p"],fe=["disabled","data-p"];function be(t,e,n,i,s,r){var u=G("InputText");return f(),S("span",h({class:t.cx("root")},t.ptmi("root"),{"data-p":r.dataP}),[_(u,{ref:"input",id:t.inputId,name:t.$formName,role:"spinbutton",class:q([t.cx("pcInputText"),t.inputClass]),style:W(t.inputStyle),value:r.formattedValue,"aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":t.d_value,inputmode:t.mode==="decimal"&&!t.minFractionDigits?"numeric":"decimal",disabled:t.disabled,readonly:t.readonly,placeholder:t.placeholder,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,required:t.required,size:t.size,invalid:t.invalid,variant:t.variant,onInput:r.onUserInput,onKeydown:r.onInputKeyDown,onKeypress:r.onInputKeyPress,onPaste:r.onPaste,onClick:r.onInputClick,onFocus:r.onInputFocus,onBlur:r.onInputBlur,pt:t.ptm("pcInputText"),unstyled:t.unstyled,"data-p":r.dataP},null,8,["id","name","class","style","value","aria-valuemin","aria-valuemax","aria-valuenow","inputmode","disabled","readonly","placeholder","aria-labelledby","aria-label","required","size","invalid","variant","onInput","onKeydown","onKeypress","onPaste","onClick","onFocus","onBlur","pt","unstyled","data-p"]),t.showButtons&&t.buttonLayout==="stacked"?(f(),S("span",h({key:0,class:t.cx("buttonGroup")},t.ptm("buttonGroup"),{"data-p":r.dataP}),[b(t.$slots,"incrementbutton",{listeners:r.upButtonListeners},function(){return[R("button",h({class:[t.cx("incrementButton"),t.incrementButtonClass]},k(r.upButtonListeners),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},t.ptm("incrementButton"),{"data-p":r.dataP}),[b(t.$slots,t.$slots.incrementicon?"incrementicon":"incrementbuttonicon",{},function(){return[(f(),D(C(t.incrementIcon||t.incrementButtonIcon?"span":"AngleUpIcon"),h({class:[t.incrementIcon,t.incrementButtonIcon]},t.ptm("incrementIcon"),{"data-pc-section":"incrementicon"}),null,16,["class"]))]})],16,de)]}),b(t.$slots,"decrementbutton",{listeners:r.downButtonListeners},function(){return[R("button",h({class:[t.cx("decrementButton"),t.decrementButtonClass]},k(r.downButtonListeners),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},t.ptm("decrementButton"),{"data-p":r.dataP}),[b(t.$slots,t.$slots.decrementicon?"decrementicon":"decrementbuttonicon",{},function(){return[(f(),D(C(t.decrementIcon||t.decrementButtonIcon?"span":"AngleDownIcon"),h({class:[t.decrementIcon,t.decrementButtonIcon]},t.ptm("decrementIcon"),{"data-pc-section":"decrementicon"}),null,16,["class"]))]})],16,he)]})],16,pe)):P("",!0),b(t.$slots,"incrementbutton",{listeners:r.upButtonListeners},function(){return[t.showButtons&&t.buttonLayout!=="stacked"?(f(),S("button",h({key:0,class:[t.cx("incrementButton"),t.incrementButtonClass]},k(r.upButtonListeners),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},t.ptm("incrementButton"),{"data-p":r.dataP}),[b(t.$slots,t.$slots.incrementicon?"incrementicon":"incrementbuttonicon",{},function(){return[(f(),D(C(t.incrementIcon||t.incrementButtonIcon?"span":"AngleUpIcon"),h({class:[t.incrementIcon,t.incrementButtonIcon]},t.ptm("incrementIcon"),{"data-pc-section":"incrementicon"}),null,16,["class"]))]})],16,me)):P("",!0)]}),b(t.$slots,"decrementbutton",{listeners:r.downButtonListeners},function(){return[t.showButtons&&t.buttonLayout!=="stacked"?(f(),S("button",h({key:0,class:[t.cx("decrementButton"),t.decrementButtonClass]},k(r.downButtonListeners),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},t.ptm("decrementButton"),{"data-p":r.dataP}),[b(t.$slots,t.$slots.decrementicon?"decrementicon":"decrementbuttonicon",{},function(){return[(f(),D(C(t.decrementIcon||t.decrementButtonIcon?"span":"AngleDownIcon"),h({class:[t.decrementIcon,t.decrementButtonIcon]},t.ptm("decrementIcon"),{"data-pc-section":"decrementicon"}),null,16,["class"]))]})],16,fe)):P("",!0)]})],16,ce)}le.render=be;export{le as default};
