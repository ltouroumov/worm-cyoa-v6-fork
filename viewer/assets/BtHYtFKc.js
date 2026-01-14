import{am as _,bs as q,bt as L,ax as R,an as T,g as O,y as S,z as g,C as U,ab as f,X as B,aA as H,Y as z,ac as d,A as K,a2 as D,a3 as k,bu as M}from"./CatXm4QS.js";import{s as X}from"./C72d3mkp.js";import{s as Y}from"./D4jh_xiy.js";import{s as J}from"./CGT6q8W4.js";import Q from"./5a79p2cJ.js";import{s as Z}from"./DYgV5TvN.js";import{f as ee}from"./ZhWAdK_X.js";import"./D3dOpJCP.js";import"./EUShYJ0M.js";import"./CdxZ5cof.js";var ne=`
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
        background: dt('inputnumber.button.background');
        color: dt('inputnumber.button.color');
        width: dt('inputnumber.button.width');
        transition:
            background dt('inputnumber.transition.duration'),
            color dt('inputnumber.transition.duration'),
            border-color dt('inputnumber.transition.duration'),
            outline-color dt('inputnumber.transition.duration');
    }

    .p-inputnumber-button:disabled {
        cursor: auto;
    }

    .p-inputnumber-button:not(:disabled):hover {
        background: dt('inputnumber.button.hover.background');
        color: dt('inputnumber.button.hover.color');
    }

    .p-inputnumber-button:not(:disabled):active {
        background: dt('inputnumber.button.active.background');
        color: dt('inputnumber.button.active.color');
    }

    .p-inputnumber-stacked .p-inputnumber-button {
        position: relative;
        flex: 1 1 auto;
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
        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-decrement-button {
        padding: 0;
        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-horizontal .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-increment-button {
        order: 3;
        border-start-end-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        border-inline-start: 0 none;
    }

    .p-inputnumber-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-horizontal .p-inputnumber-decrement-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-inline-end: 0 none;
    }

    .p-floatlabel:has(.p-inputnumber-horizontal) label {
        margin-inline-start: dt('inputnumber.button.width');
    }

    .p-inputnumber-vertical {
        flex-direction: column;
    }

    .p-inputnumber-vertical .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
        padding: dt('inputnumber.button.vertical.padding');
    }

    .p-inputnumber-vertical .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-increment-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-start-end-radius: dt('inputnumber.button.border.radius');
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
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
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
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-inputnumber-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-inputnumber:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-stacked .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-stacked:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + (dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-horizontal .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }
`,te={root:function(e){var n=e.instance,i=e.props;return["p-inputnumber p-component p-inputwrapper",{"p-invalid":n.$invalid,"p-inputwrapper-filled":n.$filled||i.allowEmpty===!1,"p-inputwrapper-focus":n.focused,"p-inputnumber-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-vertical":i.showButtons&&i.buttonLayout==="vertical","p-inputnumber-fluid":n.$fluid}]},pcInputText:"p-inputnumber-input",clearIcon:"p-inputnumber-clear-icon",buttonGroup:"p-inputnumber-button-group",incrementButton:function(e){var n=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":i.showButtons&&i.max!==null&&n.maxBoundry()}]},decrementButton:function(e){var n=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":i.showButtons&&i.min!==null&&n.minBoundry()}]}},ie=_.extend({name:"inputnumber",style:ne,classes:te}),re={name:"BaseInputNumber",extends:Z,props:{format:{type:Boolean,default:!0},showButtons:{type:Boolean,default:!1},buttonLayout:{type:String,default:"stacked"},incrementButtonClass:{type:String,default:null},decrementButtonClass:{type:String,default:null},incrementButtonIcon:{type:String,default:void 0},incrementIcon:{type:String,default:void 0},decrementButtonIcon:{type:String,default:void 0},decrementIcon:{type:String,default:void 0},locale:{type:String,default:void 0},localeMatcher:{type:String,default:void 0},mode:{type:String,default:"decimal"},prefix:{type:String,default:null},suffix:{type:String,default:null},currency:{type:String,default:void 0},currencyDisplay:{type:String,default:void 0},useGrouping:{type:Boolean,default:!0},minFractionDigits:{type:Number,default:void 0},maxFractionDigits:{type:Number,default:void 0},roundingMode:{type:String,default:"halfExpand",validator:function(e){return["ceil","floor","expand","trunc","halfCeil","halfFloor","halfExpand","halfTrunc","halfEven"].includes(e)}},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:1},allowEmpty:{type:Boolean,default:!0},highlightOnFocus:{type:Boolean,default:!1},showClear:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},placeholder:{type:String,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},required:{type:Boolean,default:!1}},style:ie,provide:function(){return{$pcInputNumber:this,$parentInstance:this}}};function w(t){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(t)}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable})),n.push.apply(n,i)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?j(Object(n),!0).forEach(function(i){V(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function V(t,e,n){return(e=ue(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ue(t){var e=se(t,"string");return w(e)=="symbol"?e:e+""}function se(t,e){if(w(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(w(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ae(t){return pe(t)||ce(t)||le(t)||oe()}function oe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(t,e){if(t){if(typeof t=="string")return F(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(t,e):void 0}}function ce(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function pe(t){if(Array.isArray(t))return F(t)}function F(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var de={name:"InputNumber",extends:re,inheritAttrs:!1,emits:["input","focus","blur"],inject:{$pcFluid:{default:null}},numberFormat:null,_numeral:null,_decimal:null,_group:null,_minusSign:null,_currency:null,_suffix:null,_prefix:null,_index:null,groupChar:"",isSpecialChar:null,prefixChar:null,suffixChar:null,timer:null,data:function(){return{d_modelValue:this.d_value,focused:!1}},watch:{d_value:{immediate:!0,handler:function(e){var n;this.d_modelValue=e,(n=this.$refs.clearIcon)!==null&&n!==void 0&&(n=n.$el)!==null&&n!==void 0&&n.style&&(this.$refs.clearIcon.$el.style.display=R(e)?"none":"block")}},locale:function(e,n){this.updateConstructParser(e,n)},localeMatcher:function(e,n){this.updateConstructParser(e,n)},mode:function(e,n){this.updateConstructParser(e,n)},currency:function(e,n){this.updateConstructParser(e,n)},currencyDisplay:function(e,n){this.updateConstructParser(e,n)},useGrouping:function(e,n){this.updateConstructParser(e,n)},minFractionDigits:function(e,n){this.updateConstructParser(e,n)},maxFractionDigits:function(e,n){this.updateConstructParser(e,n)},suffix:function(e,n){this.updateConstructParser(e,n)},prefix:function(e,n){this.updateConstructParser(e,n)}},created:function(){this.constructParser()},mounted:function(){var e;(e=this.$refs.clearIcon)!==null&&e!==void 0&&(e=e.$el)!==null&&e!==void 0&&e.style&&(this.$refs.clearIcon.$el.style.display=this.$filled?"block":"none")},methods:{getOptions:function(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits,maximumFractionDigits:this.maxFractionDigits,roundingMode:this.roundingMode}},constructParser:function(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());var e=ae(new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)).reverse(),n=new Map(e.map(function(i,u){return[i,u]}));this._numeral=new RegExp("[".concat(e.join(""),"]"),"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=function(i){return n.get(i)}},updateConstructParser:function(e,n){e!==n&&this.constructParser()},escapeRegExp:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},getDecimalExpression:function(){var e=new Intl.NumberFormat(this.locale,G(G({},this.getOptions()),{},{useGrouping:!1}));return new RegExp("[".concat(e.format(1.1).replace(this._currency,"").trim().replace(this._numeral,""),"]"),"g")},getGroupingExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp("[".concat(this.groupChar,"]"),"g")},getMinusSignExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp("[".concat(e.format(-1).trim().replace(this._numeral,""),"]"),"g")},getCurrencyExpression:function(){if(this.currency){var e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0,roundingMode:this.roundingMode});return new RegExp("[".concat(e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,""),"]"),"g")}return new RegExp("[]","g")},getPrefixExpression:function(){if(this.prefix)this.prefixChar=this.prefix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp("".concat(this.escapeRegExp(this.prefixChar||"")),"g")},getSuffixExpression:function(){if(this.suffix)this.suffixChar=this.suffix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0,roundingMode:this.roundingMode});this.suffixChar=e.format(1).split("1")[1]}return new RegExp("".concat(this.escapeRegExp(this.suffixChar||"")),"g")},formatValue:function(e){if(e!=null){if(e==="-")return e;if(this.format){var n=new Intl.NumberFormat(this.locale,this.getOptions()),i=n.format(e);return this.prefix&&(i=this.prefix+i),this.suffix&&(i=i+this.suffix),i}return e.toString()}return""},parseValue:function(e){var n=e.replace(this._suffix,"").replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(n){if(n==="-")return n;var i=+n;return isNaN(i)?null:i}return null},repeat:function(e,n,i){var u=this;if(!this.readonly){var r=n||500;this.clearTimer(),this.timer=setTimeout(function(){u.repeat(e,40,i)},r),this.spin(e,i)}},addWithPrecision:function(e,n){var i=e.toString(),u=n.toString(),r=i.includes(".")?i.split(".")[1].length:0,s=u.includes(".")?u.split(".")[1].length:0,a=Math.max(r,s),c=Math.pow(10,a);return Math.round((e+n)*c)/c},spin:function(e,n){if(this.$refs.input){var i=this.step*n,u=this.parseValue(this.$refs.input.$el.value)||0,r=this.validateValue(this.addWithPrecision(u,i));this.updateInput(r,null,"spin"),this.updateModel(e,r),this.handleOnInput(e,u,r)}},onUpButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,1),e.preventDefault())},onUpButtonMouseUp:function(){this.disabled||this.clearTimer()},onUpButtonMouseLeave:function(){this.disabled||this.clearTimer()},onUpButtonKeyUp:function(){this.disabled||this.clearTimer()},onUpButtonKeyDown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&this.repeat(e,null,1)},onDownButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,-1),e.preventDefault())},onDownButtonMouseUp:function(){this.disabled||this.clearTimer()},onDownButtonMouseLeave:function(){this.disabled||this.clearTimer()},onDownButtonKeyUp:function(){this.disabled||this.clearTimer()},onDownButtonKeyDown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&this.repeat(e,null,-1)},onUserInput:function(){this.isSpecialChar&&(this.$refs.input.$el.value=this.lastValue),this.isSpecialChar=!1},onInputKeyDown:function(e){if(!this.readonly&&!e.isComposing){if(e.altKey||e.ctrlKey||e.metaKey){this.isSpecialChar=!0,this.lastValue=this.$refs.input.$el.value;return}this.lastValue=e.target.value;var n=e.target.selectionStart,i=e.target.selectionEnd,u=i-n,r=e.target.value,s=null,a=e.code||e.key;switch(a){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":if(u>1){var c=this.isNumeralChar(r.charAt(n))?n+1:n+2;this.$refs.input.$el.setSelectionRange(c,c)}else this.isNumeralChar(r.charAt(n-1))||e.preventDefault();break;case"ArrowRight":if(u>1){var p=i-1;this.$refs.input.$el.setSelectionRange(p,p)}else this.isNumeralChar(r.charAt(n))||e.preventDefault();break;case"Tab":case"Enter":case"NumpadEnter":s=this.validateValue(this.parseValue(r)),this.$refs.input.$el.value=this.formatValue(s),this.$refs.input.$el.setAttribute("aria-valuenow",s),this.updateModel(e,s);break;case"Backspace":{if(e.preventDefault(),n===i){n>=r.length&&this.suffixChar!==null&&(n=r.length-this.suffixChar.length,this.$refs.input.$el.setSelectionRange(n,n));var m=r.charAt(n-1),y=this.getDecimalCharIndexes(r),o=y.decimalCharIndex,l=y.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(m)){var v=this.getDecimalLength(r);if(this._group.test(m))this._group.lastIndex=0,s=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(m))this._decimal.lastIndex=0,v?this.$refs.input.$el.setSelectionRange(n-1,n-1):s=r.slice(0,n-1)+r.slice(n);else if(o>0&&n>o){var I=this.isDecimalMode()&&(this.minFractionDigits||0)<v?"":"0";s=r.slice(0,n-1)+I+r.slice(n)}else l===1?(s=r.slice(0,n-1)+"0"+r.slice(n),s=this.parseValue(s)>0?s:""):s=r.slice(0,n-1)+r.slice(n)}this.updateValue(e,s,null,"delete-single")}else s=this.deleteRange(r,n,i),this.updateValue(e,s,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===i){var b=r.charAt(n),h=this.getDecimalCharIndexes(r),x=h.decimalCharIndex,C=h.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(b)){var $=this.getDecimalLength(r);if(this._group.test(b))this._group.lastIndex=0,s=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(b))this._decimal.lastIndex=0,$?this.$refs.input.$el.setSelectionRange(n+1,n+1):s=r.slice(0,n)+r.slice(n+1);else if(x>0&&n>x){var P=this.isDecimalMode()&&(this.minFractionDigits||0)<$?"":"0";s=r.slice(0,n)+P+r.slice(n+1)}else C===1?(s=r.slice(0,n)+"0"+r.slice(n+1),s=this.parseValue(s)>0?s:""):s=r.slice(0,n)+r.slice(n+1)}this.updateValue(e,s,null,"delete-back-single")}else s=this.deleteRange(r,n,i),this.updateValue(e,s,null,"delete-range");break;case"Home":e.preventDefault(),T(this.min)&&this.updateModel(e,this.min);break;case"End":e.preventDefault(),T(this.max)&&this.updateModel(e,this.max);break}}},onInputKeyPress:function(e){if(!this.readonly){var n=e.key,i=this.isDecimalSign(n),u=this.isMinusSign(n);e.code!=="Enter"&&e.preventDefault(),(Number(n)>=0&&Number(n)<=9||u||i)&&this.insert(e,n,{isDecimalSign:i,isMinusSign:u})}},onPaste:function(e){if(!this.readonly){e.preventDefault();var n=(e.clipboardData||window.clipboardData).getData("Text");if(!(this.inputId==="integeronly"&&/[^\d-]/.test(n))&&n){var i=this.parseValue(n);i!=null&&this.insert(e,i.toString())}}},onClearClick:function(e){this.updateModel(e,null),this.$refs.input.$el.focus()},allowMinusSign:function(){return this.min===null||this.min<0},isMinusSign:function(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1},isDecimalSign:function(e){var n;return(n=this.locale)!==null&&n!==void 0&&n.includes("fr")&&[".",","].includes(e)||this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1},isDecimalMode:function(){return this.mode==="decimal"},getDecimalCharIndexes:function(e){var n=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,""),u=i.search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:u}},getCharIndexes:function(e){var n=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.search(this._minusSign);this._minusSign.lastIndex=0;var u=e.search(this._suffix);this._suffix.lastIndex=0;var r=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:i,suffixCharIndex:u,currencyCharIndex:r}},insert:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{isDecimalSign:!1,isMinusSign:!1},u=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!(!this.allowMinusSign()&&u!==-1)){var r=this.$refs.input.$el.selectionStart,s=this.$refs.input.$el.selectionEnd,a=this.$refs.input.$el.value.trim(),c=this.getCharIndexes(a),p=c.decimalCharIndex,m=c.minusCharIndex,y=c.suffixCharIndex,o=c.currencyCharIndex,l;if(i.isMinusSign){var v=m===-1;(r===0||r===o+1)&&(l=a,(v||s!==0)&&(l=this.insertText(a,n,0,s)),this.updateValue(e,l,n,"insert"))}else if(i.isDecimalSign)p>0&&r===p?this.updateValue(e,a,n,"insert"):p>r&&p<s?(l=this.insertText(a,n,r,s),this.updateValue(e,l,n,"insert")):p===-1&&this.maxFractionDigits&&(l=this.insertText(a,n,r,s),this.updateValue(e,l,n,"insert"));else{var I=this.numberFormat.resolvedOptions().maximumFractionDigits,b=r!==s?"range-insert":"insert";if(p>0&&r>p){if(r+n.length-(p+1)<=I){var h=o>=r?o-1:y>=r?y:a.length;l=a.slice(0,r)+n+a.slice(r+n.length,h)+a.slice(h),this.updateValue(e,l,n,b)}}else l=this.insertText(a,n,r,s),this.updateValue(e,l,n,b)}}},insertText:function(e,n,i,u){var r=n==="."?n:n.split(".");if(r.length===2){var s=e.slice(i,u).search(this._decimal);return this._decimal.lastIndex=0,s>0?e.slice(0,i)+this.formatValue(n)+e.slice(u):this.formatValue(n)||e}else return u-i===e.length?this.formatValue(n):i===0?n+e.slice(u):u===e.length?e.slice(0,i)+n:e.slice(0,i)+n+e.slice(u)},deleteRange:function(e,n,i){var u;return i-n===e.length?u="":n===0?u=e.slice(i):i===e.length?u=e.slice(0,n):u=e.slice(0,n)+e.slice(i),u},initCursor:function(){var e=this.$refs.input.$el.selectionStart,n=this.$refs.input.$el.value,i=n.length,u=null,r=(this.prefixChar||"").length;n=n.replace(this._prefix,""),e=e-r;var s=n.charAt(e);if(this.isNumeralChar(s))return e+r;for(var a=e-1;a>=0;)if(s=n.charAt(a),this.isNumeralChar(s)){u=a+r;break}else a--;if(u!==null)this.$refs.input.$el.setSelectionRange(u+1,u+1);else{for(a=e;a<i;)if(s=n.charAt(a),this.isNumeralChar(s)){u=a+r;break}else a++;u!==null&&this.$refs.input.$el.setSelectionRange(u,u)}return u||0},onInputClick:function(){var e=this.$refs.input.$el.value;!this.readonly&&e!==L()&&this.initCursor()},isNumeralChar:function(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1},resetRegex:function(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0},updateValue:function(e,n,i,u){var r=this.$refs.input.$el.value,s=null;n!=null&&(s=this.parseValue(n),s=!s&&!this.allowEmpty?0:s,this.updateInput(s,i,u,n),this.handleOnInput(e,r,s))},handleOnInput:function(e,n,i){if(this.isValueChanged(n,i)){var u,r;this.$emit("input",{originalEvent:e,value:i,formattedValue:n}),(u=(r=this.formField).onInput)===null||u===void 0||u.call(r,{originalEvent:e,value:i})}},isValueChanged:function(e,n){if(n===null&&e!==null)return!0;if(n!=null){var i=typeof e=="string"?this.parseValue(e):e;return n!==i}return!1},validateValue:function(e){return e==="-"||e==null?null:this.min!=null&&e<this.min?this.min:this.max!=null&&e>this.max?this.max:e},updateInput:function(e,n,i,u){var r;n=n||"";var s=this.$refs.input.$el.value,a=this.formatValue(e),c=s.length;if(a!==u&&(a=this.concatValues(a,u)),c===0){this.$refs.input.$el.value=a,this.$refs.input.$el.setSelectionRange(0,0);var p=this.initCursor(),m=p+n.length;this.$refs.input.$el.setSelectionRange(m,m)}else{var y=this.$refs.input.$el.selectionStart,o=this.$refs.input.$el.selectionEnd;this.$refs.input.$el.value=a;var l=a.length;if(i==="range-insert"){var v=this.parseValue((s||"").slice(0,y)),I=v!==null?v.toString():"",b=I.split("").join("(".concat(this.groupChar,")?")),h=new RegExp(b,"g");h.test(a);var x=n.split("").join("(".concat(this.groupChar,")?")),C=new RegExp(x,"g");C.test(a.slice(h.lastIndex)),o=h.lastIndex+C.lastIndex,this.$refs.input.$el.setSelectionRange(o,o)}else if(l===c)i==="insert"||i==="delete-back-single"?this.$refs.input.$el.setSelectionRange(o+1,o+1):i==="delete-single"?this.$refs.input.$el.setSelectionRange(o-1,o-1):(i==="delete-range"||i==="spin")&&this.$refs.input.$el.setSelectionRange(o,o);else if(i==="delete-back-single"){var $=s.charAt(o-1),P=s.charAt(o),N=c-l,E=this._group.test(P);E&&N===1?o+=1:!E&&this.isNumeralChar($)&&(o+=-1*N+1),this._group.lastIndex=0,this.$refs.input.$el.setSelectionRange(o,o)}else if(s==="-"&&i==="insert"){this.$refs.input.$el.setSelectionRange(0,0);var W=this.initCursor(),A=W+n.length+1;this.$refs.input.$el.setSelectionRange(A,A)}else o=o+(l-c),this.$refs.input.$el.setSelectionRange(o,o)}this.$refs.input.$el.setAttribute("aria-valuenow",e),(r=this.$refs.clearIcon)!==null&&r!==void 0&&(r=r.$el)!==null&&r!==void 0&&r.style&&(this.$refs.clearIcon.$el.style.display=R(a)?"none":"block")},concatValues:function(e,n){if(e&&n){var i=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?i!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(i)+this.suffixChar:e:i!==-1?e.split(this._decimal)[0]+n.slice(i):e}return e},getDecimalLength:function(e){if(e){var n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0},updateModel:function(e,n){this.writeValue(n,e)},onInputFocus:function(e){this.focused=!0,!this.disabled&&!this.readonly&&this.$refs.input.$el.value!==L()&&this.highlightOnFocus&&e.target.select(),this.$emit("focus",e)},onInputBlur:function(e){var n,i;this.focused=!1;var u=e.target,r=this.validateValue(this.parseValue(u.value));this.$emit("blur",{originalEvent:e,value:u.value}),(n=(i=this.formField).onBlur)===null||n===void 0||n.call(i,e),u.value=this.formatValue(r),u.setAttribute("aria-valuenow",r),this.updateModel(e,r),!this.disabled&&!this.readonly&&this.highlightOnFocus&&q()},clearTimer:function(){this.timer&&clearTimeout(this.timer)},maxBoundry:function(){return this.d_value>=this.max},minBoundry:function(){return this.d_value<=this.min}},computed:{upButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onUpButtonMouseDown(i)},mouseup:function(i){return e.onUpButtonMouseUp(i)},mouseleave:function(i){return e.onUpButtonMouseLeave(i)},keydown:function(i){return e.onUpButtonKeyDown(i)},keyup:function(i){return e.onUpButtonKeyUp(i)}}},downButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onDownButtonMouseDown(i)},mouseup:function(i){return e.onDownButtonMouseUp(i)},mouseleave:function(i){return e.onDownButtonMouseLeave(i)},keydown:function(i){return e.onDownButtonKeyDown(i)},keyup:function(i){return e.onDownButtonKeyUp(i)}}},formattedValue:function(){var e=!this.d_value&&!this.allowEmpty?0:this.d_value;return this.formatValue(e)},getFormatter:function(){return this.numberFormat},dataP:function(){return ee(V(V({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size),this.buttonLayout,this.showButtons&&this.buttonLayout))}},components:{InputText:Q,AngleUpIcon:Y,AngleDownIcon:X,TimesIcon:J}},he=["data-p"],fe=["data-p"],me=["disabled","data-p"],be=["disabled","data-p"],ge=["disabled","data-p"],ye=["disabled","data-p"];function ve(t,e,n,i,u,r){var s=O("InputText"),a=O("TimesIcon");return g(),S("span",d({class:t.cx("root")},t.ptmi("root"),{"data-p":r.dataP}),[U(s,{ref:"input",id:t.inputId,name:t.$formName,role:"spinbutton",class:z([t.cx("pcInputText"),t.inputClass]),style:H(t.inputStyle),defaultValue:r.formattedValue,"aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":t.d_value,inputmode:t.mode==="decimal"&&!t.minFractionDigits?"numeric":"decimal",disabled:t.disabled,readonly:t.readonly,placeholder:t.placeholder,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,required:t.required,size:t.size,invalid:t.invalid,variant:t.variant,onInput:r.onUserInput,onKeydown:r.onInputKeyDown,onKeypress:r.onInputKeyPress,onPaste:r.onPaste,onClick:r.onInputClick,onFocus:r.onInputFocus,onBlur:r.onInputBlur,pt:t.ptm("pcInputText"),unstyled:t.unstyled,"data-p":r.dataP},null,8,["id","name","class","style","defaultValue","aria-valuemin","aria-valuemax","aria-valuenow","inputmode","disabled","readonly","placeholder","aria-labelledby","aria-label","required","size","invalid","variant","onInput","onKeydown","onKeypress","onPaste","onClick","onFocus","onBlur","pt","unstyled","data-p"]),t.showClear&&t.buttonLayout!=="vertical"?f(t.$slots,"clearicon",{key:0,class:z(t.cx("clearIcon")),clearCallback:r.onClearClick},function(){return[U(a,d({ref:"clearIcon",class:[t.cx("clearIcon")],onClick:r.onClearClick},t.ptm("clearIcon")),null,16,["class","onClick"])]}):B("",!0),t.showButtons&&t.buttonLayout==="stacked"?(g(),S("span",d({key:1,class:t.cx("buttonGroup")},t.ptm("buttonGroup"),{"data-p":r.dataP}),[f(t.$slots,"incrementbutton",{listeners:r.upButtonListeners},function(){return[K("button",d({class:[t.cx("incrementButton"),t.incrementButtonClass]},M(r.upButtonListeners),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},t.ptm("incrementButton"),{"data-p":r.dataP}),[f(t.$slots,t.$slots.incrementicon?"incrementicon":"incrementbuttonicon",{},function(){return[(g(),D(k(t.incrementIcon||t.incrementButtonIcon?"span":"AngleUpIcon"),d({class:[t.incrementIcon,t.incrementButtonIcon]},t.ptm("incrementIcon"),{"data-pc-section":"incrementicon"}),null,16,["class"]))]})],16,me)]}),f(t.$slots,"decrementbutton",{listeners:r.downButtonListeners},function(){return[K("button",d({class:[t.cx("decrementButton"),t.decrementButtonClass]},M(r.downButtonListeners),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},t.ptm("decrementButton"),{"data-p":r.dataP}),[f(t.$slots,t.$slots.decrementicon?"decrementicon":"decrementbuttonicon",{},function(){return[(g(),D(k(t.decrementIcon||t.decrementButtonIcon?"span":"AngleDownIcon"),d({class:[t.decrementIcon,t.decrementButtonIcon]},t.ptm("decrementIcon"),{"data-pc-section":"decrementicon"}),null,16,["class"]))]})],16,be)]})],16,fe)):B("",!0),f(t.$slots,"incrementbutton",{listeners:r.upButtonListeners},function(){return[t.showButtons&&t.buttonLayout!=="stacked"?(g(),S("button",d({key:0,class:[t.cx("incrementButton"),t.incrementButtonClass]},M(r.upButtonListeners),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},t.ptm("incrementButton"),{"data-p":r.dataP}),[f(t.$slots,t.$slots.incrementicon?"incrementicon":"incrementbuttonicon",{},function(){return[(g(),D(k(t.incrementIcon||t.incrementButtonIcon?"span":"AngleUpIcon"),d({class:[t.incrementIcon,t.incrementButtonIcon]},t.ptm("incrementIcon"),{"data-pc-section":"incrementicon"}),null,16,["class"]))]})],16,ge)):B("",!0)]}),f(t.$slots,"decrementbutton",{listeners:r.downButtonListeners},function(){return[t.showButtons&&t.buttonLayout!=="stacked"?(g(),S("button",d({key:0,class:[t.cx("decrementButton"),t.decrementButtonClass]},M(r.downButtonListeners),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true",type:"button"},t.ptm("decrementButton"),{"data-p":r.dataP}),[f(t.$slots,t.$slots.decrementicon?"decrementicon":"decrementbuttonicon",{},function(){return[(g(),D(k(t.decrementIcon||t.decrementButtonIcon?"span":"AngleDownIcon"),d({class:[t.decrementIcon,t.decrementButtonIcon]},t.ptm("decrementIcon"),{"data-pc-section":"decrementicon"}),null,16,["class"]))]})],16,ye)):B("",!0)]})],16,he)}de.render=ve;export{de as default};
