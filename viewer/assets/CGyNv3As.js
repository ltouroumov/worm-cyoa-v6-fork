import{am as g,ar as p,ay as d,g as v,y as b,z as c,$ as S,a0 as O,a2 as B,aC as L,D as w,ab as A,A as V,ac as y,B as K}from"./DKPM-x0c.js";import{R as T}from"./DsMfNAGv.js";import D from"./B81HNmbp.js";import{s as I}from"./BatOrcQe.js";import{f as R}from"./ZhWAdK_X.js";import"./CIcfw3sJ.js";import"./jc0MLXVe.js";import"./DOKo9Z5P.js";var k=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`,C={root:function(n){var t=n.props,l=n.instance;return["p-selectbutton p-component",{"p-invalid":l.$invalid,"p-selectbutton-fluid":t.fluid}]}},E=g.extend({name:"selectbutton",style:k,classes:C}),$={name:"BaseSelectButton",extends:I,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:E,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function x(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=h(e))||n){t&&(e=t);var l=0,s=function(){};return{s,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(u){throw u},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,i=!0,r=!1;return{s:function(){t=t.call(e)},n:function(){var u=t.next();return i=u.done,u},e:function(u){r=!0,a=u},f:function(){try{i||t.return==null||t.return()}finally{if(r)throw a}}}}function z(e){return P(e)||q(e)||h(e)||_()}function _(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(e,n){if(e){if(typeof e=="string")return f(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}function q(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function P(e){if(Array.isArray(e))return f(e)}function f(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,l=Array(n);t<n;t++)l[t]=e[t];return l}var j={name:"SelectButton",extends:$,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(n){return this.optionLabel?d(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?d(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?d(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?d(n,this.optionDisabled):!1},isOptionReadonly:function(n){if(this.allowEmpty)return!1;var t=this.isSelected(n);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(n,t,l){var s=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var a=this.isSelected(t),i=this.getOptionValue(t),r;if(this.multiple)if(a){if(r=this.d_value.filter(function(o){return!p(o,i,s.equalityKey)}),!this.allowEmpty&&r.length===0)return}else r=this.d_value?[].concat(z(this.d_value),[i]):[i];else{if(a&&!this.allowEmpty)return;r=a?null:i}this.writeValue(r,n),this.$emit("change",{event:n,value:r})}},isSelected:function(n){var t=!1,l=this.getOptionValue(n);if(this.multiple){if(this.d_value){var s=x(this.d_value),a;try{for(s.s();!(a=s.n()).done;){var i=a.value;if(p(i,l,this.equalityKey)){t=!0;break}}}catch(r){s.e(r)}finally{s.f()}}}else t=p(this.d_value,l,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return R({invalid:this.$invalid})}},directives:{ripple:T},components:{ToggleButton:D}},F=["aria-labelledby","data-p"];function H(e,n,t,l,s,a){var i=v("ToggleButton");return c(),b("div",y({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root"),{"data-p":a.dataP}),[(c(!0),b(S,null,O(e.options,function(r,o){return c(),B(i,{key:a.getOptionRenderKey(r),modelValue:a.isSelected(r),onLabel:a.getOptionLabel(r),offLabel:a.getOptionLabel(r),disabled:e.disabled||a.isOptionDisabled(r),unstyled:e.unstyled,size:e.size,readonly:a.isOptionReadonly(r),onChange:function(m){return a.onOptionSelect(m,r,o)},pt:e.ptm("pcToggleButton")},L({_:2},[e.$slots.option?{name:"default",fn:w(function(){return[A(e.$slots,"option",{option:r,index:o},function(){return[V("span",y({ref_for:!0},e.ptm("pcToggleButton").label),K(a.getOptionLabel(r)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,F)}j.render=H;export{j as default};
