import{am as N,an as f,ap as q,ax as G,ar as R,ao as F,as as U,at as $,au as W,av as Y,aw as J,aq as P,aD as X,ay as y,aE as Q,g as k,az as Z,y as v,z as d,$ as _,a0 as ee,ac as l,a9 as te,a2 as O,X as x,a3 as V,B as K,Y as I,A as g,ab as m,C as E,E as ne,D as A,aB as ie}from"./DKPM-x0c.js";import{x as D}from"./CLs7nh7g.js";import{C as oe}from"./CfifvqGG.js";import{s as B}from"./2essDdzJ.js";import{s as se}from"./WBHKFAd2.js";import{s as ae}from"./DsbzfPNq.js";import{s as re}from"./DeUlfLlV.js";import{O as le}from"./CNKSPqs-.js";import{s as ce}from"./BYWC1ZsX.js";import{s as de}from"./5GknnxE_.js";import{s as ue}from"./DOKo9Z5P.js";import{R as pe}from"./DsMfNAGv.js";import"./CLpHadom.js";import"./BatOrcQe.js";import"./CIcfw3sJ.js";import"./jc0MLXVe.js";var he=`
    .p-cascadeselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('cascadeselect.background');
        border: 1px solid dt('cascadeselect.border.color');
        transition:
            background dt('cascadeselect.transition.duration'),
            color dt('cascadeselect.transition.duration'),
            border-color dt('cascadeselect.transition.duration'),
            outline-color dt('cascadeselect.transition.duration'),
            box-shadow dt('cascadeselect.transition.duration');
        border-radius: dt('cascadeselect.border.radius');
        outline-color: transparent;
        box-shadow: dt('cascadeselect.shadow');
    }

    .p-cascadeselect:not(.p-disabled):hover {
        border-color: dt('cascadeselect.hover.border.color');
    }

    .p-cascadeselect:not(.p-disabled).p-focus {
        border-color: dt('cascadeselect.focus.border.color');
        box-shadow: dt('cascadeselect.focus.ring.shadow');
        outline: dt('cascadeselect.focus.ring.width') dt('cascadeselect.focus.ring.style') dt('cascadeselect.focus.ring.color');
        outline-offset: dt('cascadeselect.focus.ring.offset');
    }

    .p-cascadeselect.p-variant-filled {
        background: dt('cascadeselect.filled.background');
    }

    .p-cascadeselect.p-variant-filled:not(.p-disabled):hover {
        background: dt('cascadeselect.filled.hover.background');
    }

    .p-cascadeselect.p-variant-filled.p-focus {
        background: dt('cascadeselect.filled.focus.background');
    }

    .p-cascadeselect.p-invalid {
        border-color: dt('cascadeselect.invalid.border.color');
    }

    .p-cascadeselect.p-disabled {
        opacity: 1;
        background: dt('cascadeselect.disabled.background');
    }

    .p-cascadeselect-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('cascadeselect.dropdown.color');
        width: dt('cascadeselect.dropdown.width');
        border-start-end-radius: dt('border.radius.md');
        border-end-end-radius: dt('border.radius.md');
    }

    .p-cascadeselect-clear-icon {
        align-self: center;
        color: dt('cascadeselect.clear.icon.color');
        inset-inline-end: dt('cascadeselect.dropdown.width');
    }

    .p-cascadeselect-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        text-overflow: ellipsis;
        cursor: pointer;
        padding: dt('cascadeselect.padding.y') dt('cascadeselect.padding.x');
        background: transparent;
        border: 0 none;
        outline: 0 none;
    }

    .p-cascadeselect-label.p-placeholder {
        color: dt('cascadeselect.placeholder.color');
    }

    .p-cascadeselect.p-invalid .p-cascadeselect-label.p-placeholder {
        color: dt('cascadeselect.invalid.placeholder.color');
    }

    .p-cascadeselect.p-disabled .p-cascadeselect-label {
        color: dt('cascadeselect.disabled.color');
    }

    .p-cascadeselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-cascadeselect-overlay {
        background: dt('cascadeselect.overlay.background');
        color: dt('cascadeselect.overlay.color');
        border: 1px solid dt('cascadeselect.overlay.border.color');
        border-radius: dt('cascadeselect.overlay.border.radius');
        box-shadow: dt('cascadeselect.overlay.shadow');
    }

    .p-cascadeselect .p-cascadeselect-overlay {
        min-width: 100%;
    }

    .p-cascadeselect-option-list {
        display: none;
        min-width: 100%;
        position: absolute;
        z-index: 1;
    }

    .p-cascadeselect-list {
        min-width: 100%;
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('cascadeselect.list.padding');
        display: flex;
        flex-direction: column;
        gap: dt('cascadeselect.list.gap');
    }

    .p-cascadeselect-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        border: 0 none;
        color: dt('cascadeselect.option.color');
        background: transparent;
        border-radius: dt('cascadeselect.option.border.radius');
    }

    .p-cascadeselect-option-active {
        overflow: visible;
    }

    .p-cascadeselect-option-active > .p-cascadeselect-option-content {
        background: dt('cascadeselect.option.focus.background');
        color: dt('cascadeselect.option.focus.color');
    }

    .p-cascadeselect-option:not(.p-cascadeselect-option-selected):not(.p-disabled).p-focus > .p-cascadeselect-option-content {
        background: dt('cascadeselect.option.focus.background');
        color: dt('cascadeselect.option.focus.color');
    }

    .p-cascadeselect-option:not(.p-cascadeselect-option-selected):not(.p-disabled).p-focus > .p-cascadeselect-option-content > .p-cascadeselect-group-icon-container > .p-cascadeselect-group-icon {
        color: dt('cascadeselect.option.icon.focus.color');
    }

    .p-cascadeselect-option-selected > .p-cascadeselect-option-content {
        background: dt('cascadeselect.option.selected.background');
        color: dt('cascadeselect.option.selected.color');
    }

    .p-cascadeselect-option-selected.p-focus > .p-cascadeselect-option-content {
        background: dt('cascadeselect.option.selected.focus.background');
        color: dt('cascadeselect.option.selected.focus.color');
    }

    .p-cascadeselect-option-active > .p-cascadeselect-option-list {
        inset-inline-start: 100%;
        inset-block-start: 0;
    }

    .p-cascadeselect-option-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        position: relative;
        padding: dt('cascadeselect.option.padding');
        border-radius: dt('cascadeselect.option.border.radius');
        transition:
            background dt('cascadeselect.transition.duration'),
            color dt('cascadeselect.transition.duration'),
            border-color dt('cascadeselect.transition.duration'),
            box-shadow dt('cascadeselect.transition.duration'),
            outline-color dt('cascadeselect.transition.duration');
    }

    .p-cascadeselect-group-icon {
        font-size: dt('cascadeselect.option.icon.size');
        width: dt('cascadeselect.option.icon.size');
        height: dt('cascadeselect.option.icon.size');
        color: dt('cascadeselect.option.icon.color');
    }

    .p-cascadeselect-group-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-cascadeselect-mobile-active .p-cascadeselect-option-list {
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');
        padding-inline-end: 0;
    }

    .p-cascadeselect-mobile-active .p-cascadeselect-group-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-cascadeselect-mobile-active .p-cascadeselect-option-active > .p-cascadeselect-option-content .p-cascadeselect-group-icon {
        transform: rotate(-90deg);
    }

    .p-cascadeselect-sm .p-cascadeselect-label {
        font-size: dt('cascadeselect.sm.font.size');
        padding-block: dt('cascadeselect.sm.padding.y');
        padding-inline: dt('cascadeselect.sm.padding.x');
    }

    .p-cascadeselect-sm .p-cascadeselect-dropdown .p-icon {
        font-size: dt('cascadeselect.sm.font.size');
        width: dt('cascadeselect.sm.font.size');
        height: dt('cascadeselect.sm.font.size');
    }

    .p-cascadeselect-lg .p-cascadeselect-label {
        font-size: dt('cascadeselect.lg.font.size');
        padding-block: dt('cascadeselect.lg.padding.y');
        padding-inline: dt('cascadeselect.lg.padding.x');
    }

    .p-cascadeselect-lg .p-cascadeselect-dropdown .p-icon {
        font-size: dt('cascadeselect.lg.font.size');
        width: dt('cascadeselect.lg.font.size');
        height: dt('cascadeselect.lg.font.size');
    }

    .p-cascadeselect-fluid {
        display: flex;
    }

    .p-cascadeselect-fluid .p-cascadeselect-label {
        width: 1%;
    }

    .p-cascadeselect-fluid .p-cascadeselect-overlay .p-cascadeselect-overlay {
         min-width: 12.5rem;
    }
`,fe={root:function(e){var n=e.props;return{position:n.appendTo==="self"?"relative":void 0}}},ve={root:function(e){var n=e.instance,i=e.props;return["p-cascadeselect p-component p-inputwrapper",{"p-cascadeselect-mobile":n.queryMatches,"p-disabled":i.disabled,"p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-focus":n.focused,"p-inputwrapper-filled":n.$filled,"p-inputwrapper-focus":n.focused||n.overlayVisible,"p-cascadeselect-open":n.overlayVisible,"p-cascadeselect-fluid":n.$fluid,"p-cascadeselect-sm p-inputfield-sm":i.size==="small","p-cascadeselect-lg p-inputfield-lg":i.size==="large"}]},label:function(e){var n,i=e.instance,s=e.props;return["p-cascadeselect-label",{"p-placeholder":i.label===s.placeholder,"p-cascadeselect-label-empty":!i.$slots.value&&(i.label==="p-emptylabel"||((n=i.label)===null||n===void 0?void 0:n.length)===0)}]},clearIcon:"p-cascadeselect-clear-icon",dropdown:"p-cascadeselect-dropdown",loadingIcon:"p-cascadeselect-loading-icon",dropdownIcon:"p-cascadeselect-dropdown-icon",overlay:function(e){var n=e.instance;return["p-cascadeselect-overlay p-component",{"p-cascadeselect-mobile-active":n.queryMatches}]},listContainer:"p-cascadeselect-list-container",list:"p-cascadeselect-list",option:function(e){var n=e.instance,i=e.processedOption;return["p-cascadeselect-option",{"p-cascadeselect-option-active":n.isOptionActive(i),"p-cascadeselect-option-selected":n.isOptionSelected(i),"p-focus":n.isOptionFocused(i),"p-disabled":n.isOptionDisabled(i)}]},optionContent:"p-cascadeselect-option-content",optionText:"p-cascadeselect-option-text",groupIconContainer:"p-cascadeselect-group-icon-container",groupIcon:"p-cascadeselect-group-icon",optionList:"p-cascadeselect-overlay p-cascadeselect-option-list"},ye=N.extend({name:"cascadeselect",style:he,classes:ve,inlineStyles:fe}),be={name:"BaseCascadeSelect",extends:de,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,placeholder:String,breakpoint:{type:String,default:"960px"},dataKey:null,showClear:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},overlayClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayProps:{type:null,default:null},appendTo:{type:[String,Object],default:"body"},loading:{type:Boolean,default:!1},dropdownIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},optionGroupIcon:{type:String,default:void 0},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ye,provide:function(){return{$pcCascadeSelect:this,$parentInstance:this}}},H={name:"CascadeSelectSub",hostName:"CascadeSelect",extends:ue,emits:["option-change","option-focus-change","option-focus-enter-change"],container:null,props:{selectId:String,focusedOptionId:String,options:Array,optionLabel:String|Function,optionValue:String,optionDisabled:null,optionGroupIcon:String,optionGroupLabel:String,optionGroupChildren:{type:[String,Array],default:null},activeOptionPath:Array,level:Number,templates:null,value:null},methods:{getOptionId:function(e){return"".concat(this.selectId,"_").concat(e.key)},getOptionLabel:function(e){return this.optionLabel?y(e.option,this.optionLabel):e.option},getOptionValue:function(e){return this.optionValue?y(e.option,this.optionValue):e.option},getPTOptions:function(e,n,i){return this.ptm(i,{context:{option:e,index:n,level:this.level,optionGroup:this.isOptionGroup(e),active:this.isOptionActive(e),focused:this.isOptionFocused(e),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?y(e.option,this.optionDisabled):!1},getOptionGroupLabel:function(e){return this.optionGroupLabel?y(e.option,this.optionGroupLabel):null},getOptionGroupChildren:function(e){return e.children},isOptionGroup:function(e){return f(e.children)},isOptionSelected:function(e){return R(this.value,e?.option)},isOptionActive:function(e){return this.activeOptionPath&&this.activeOptionPath.some(function(n){return n.key===e.key})},isOptionFocused:function(e){return this.focusedOptionId===this.getOptionId(e)},getOptionLabelToRender:function(e){return this.isOptionGroup(e)?this.getOptionGroupLabel(e):this.getOptionLabel(e)},onOptionClick:function(e,n){this.$emit("option-change",{originalEvent:e,processedOption:n,isFocus:!0})},onOptionMouseEnter:function(e,n){this.$emit("option-focus-enter-change",{originalEvent:e,processedOption:n})},onOptionMouseMove:function(e,n){this.$emit("option-focus-change",{originalEvent:e,processedOption:n})},containerRef:function(e){this.container=e},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0}},directives:{ripple:pe},components:{AngleRightIcon:B}},ge=["id","aria-label","aria-selected","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-option-group","data-p-active","data-p-focus","data-p-disabled"],Oe=["onClick","onMouseenter","onMousemove"];function me(t,e,n,i,s,o){var r=k("AngleRightIcon"),u=k("CascadeSelectSub",!0),h=Z("ripple");return d(),v("ul",l({ref:o.containerRef,class:t.cx("list")},n.level===0?t.ptm("list"):t.ptm("optionList")),[(d(!0),v(_,null,ee(n.options,function(a,c){return d(),v("li",l({key:o.getOptionLabelToRender(a),id:o.getOptionId(a),class:t.cx("option",{processedOption:a}),role:"treeitem","aria-label":o.getOptionLabelToRender(a),"aria-selected":o.isOptionGroup(a)?void 0:o.isOptionSelected(a),"aria-expanded":o.isOptionGroup(a)?o.isOptionActive(a):void 0,"aria-level":n.level+1,"aria-setsize":n.options.length,"aria-posinset":c+1},{ref_for:!0},o.getPTOptions(a,c,"option"),{"data-p-option-group":o.isOptionGroup(a),"data-p-active":o.isOptionActive(a),"data-p-focus":o.isOptionFocused(a),"data-p-disabled":o.isOptionDisabled(a)}),[te((d(),v("div",l({class:t.cx("optionContent"),onClick:function(b){return o.onOptionClick(b,a)},onMouseenter:function(b){return o.onOptionMouseEnter(b,a)},onMousemove:function(b){return o.onOptionMouseMove(b,a)}},{ref_for:!0},o.getPTOptions(a,c,"optionContent")),[n.templates.option?(d(),O(V(n.templates.option),{key:0,option:a.option,selected:o.isOptionGroup(a)?!1:o.isOptionSelected(a)},null,8,["option","selected"])):(d(),v("span",l({key:1,class:t.cx("optionText")},{ref_for:!0},o.getPTOptions(a,c,"optionText")),K(o.getOptionLabelToRender(a)),17)),o.isOptionGroup(a)?(d(),v("span",{key:2,class:I(t.cx("groupIconContainer"))},[n.templates.optiongroupicon?(d(),O(V(n.templates.optiongroupicon),{key:0,class:I(t.cx("groupIcon"))},null,8,["class"])):n.optionGroupIcon?(d(),v("span",l({key:1,class:[t.cx("groupIcon"),n.optionGroupIcon],"aria-hidden":"true"},{ref_for:!0},o.getPTOptions(a,c,"groupIcon")),null,16)):(d(),O(r,l({key:2,class:t.cx("groupIcon"),"aria-hidden":"true"},{ref_for:!0},o.getPTOptions(a,c,"groupIcon")),null,16,["class"]))],2)):x("",!0)],16,Oe)),[[h]]),o.isOptionGroup(a)&&o.isOptionActive(a)?(d(),O(u,{key:0,role:"group",class:I(t.cx("optionList")),selectId:n.selectId,focusedOptionId:n.focusedOptionId,options:o.getOptionGroupChildren(a),activeOptionPath:n.activeOptionPath,level:n.level+1,templates:n.templates,optionLabel:n.optionLabel,optionValue:n.optionValue,optionDisabled:n.optionDisabled,optionGroupIcon:n.optionGroupIcon,optionGroupLabel:n.optionGroupLabel,optionGroupChildren:n.optionGroupChildren,value:n.value,onOptionChange:e[0]||(e[0]=function(p){return t.$emit("option-change",p)}),onOptionFocusChange:e[1]||(e[1]=function(p){return t.$emit("option-focus-change",p)}),onOptionFocusEnterChange:e[2]||(e[2]=function(p){return t.$emit("option-focus-enter-change",p)}),pt:t.pt,unstyled:t.unstyled},null,8,["class","selectId","focusedOptionId","options","activeOptionPath","level","templates","optionLabel","optionValue","optionDisabled","optionGroupIcon","optionGroupLabel","optionGroupChildren","value","pt","unstyled"])):x("",!0)],16,ge)}),128))],16)}H.render=me;function L(t){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(t)}function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z(Object(n),!0).forEach(function(i){Ie(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Ie(t,e,n){return(e=we(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function we(t){var e=ke(t,"string");return L(e)=="symbol"?e:e+""}function ke(t,e){if(L(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(L(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Le={name:"CascadeSelect",extends:be,inheritAttrs:!1,emits:["change","focus","blur","click","group-change","before-show","before-hide","hide","show"],outsideClickListener:null,matchMediaListener:null,scrollHandler:null,resizeListener:null,overlay:null,searchTimeout:null,searchValue:null,data:function(){return{clicked:!1,focused:!1,focusedOptionInfo:{index:-1,level:0,parentKey:""},activeOptionPath:[],overlayVisible:!1,dirty:!1,mobileActive:!1,query:null,queryMatches:!1}},watch:{options:function(){this.autoUpdateModel()}},mounted:function(){this.autoUpdateModel(),this.bindMatchMediaListener()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(D.clear(this.overlay),this.overlay=null),this.mobileActive&&(this.mobileActive=!1)},methods:{getOptionLabel:function(e){return this.optionLabel?y(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?y(e,this.optionValue):e},isOptionDisabled:function(e){return this.optionDisabled?y(e,this.optionDisabled):!1},getOptionGroupLabel:function(e){return this.optionGroupLabel?y(e,this.optionGroupLabel):null},getOptionGroupChildren:function(e,n){return Q(this.optionGroupChildren)?y(e,this.optionGroupChildren):y(e,this.optionGroupChildren[n])},isOptionGroup:function(e,n){return Object.prototype.hasOwnProperty.call(e,this.optionGroupChildren[n])},getProccessedOptionLabel:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=this.isProccessedOptionGroup(e);return n?this.getOptionGroupLabel(e.option,e.level):this.getOptionLabel(e.option)},isProccessedOptionGroup:function(e){return f(e?.children)},show:function(e){if(this.$emit("before-show"),this.overlayVisible=!0,this.activeOptionPath=this.$filled?this.findOptionPathByValue(this.d_value):this.activeOptionPath,this.$filled&&f(this.activeOptionPath)){var n=this.activeOptionPath[this.activeOptionPath.length-1];this.focusedOptionInfo={index:n.index,level:n.level,parentKey:n.parentKey}}else this.focusedOptionInfo={index:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),level:0,parentKey:""};e&&P(this.$refs.focusInput)},hide:function(e){var n=this,i=function(){n.$emit("before-hide"),n.overlayVisible=!1,n.clicked=!1,n.activeOptionPath=[],n.focusedOptionInfo={index:-1,level:0,parentKey:""},e&&P(n.$refs.focusInput)};setTimeout(function(){i()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.$emit("focus",e))},onBlur:function(e){var n,i;this.focused=!1,this.focusedOptionInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e),(n=(i=this.formField).onBlur)===null||n===void 0||n.call(i)},onKeyDown:function(e){if(this.disabled||this.loading){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&X(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e,e.key));break}this.clicked=!1},onOptionChange:function(e){var n=e.processedOption,i=e.type;if(!G(n)){var s=n.index,o=n.key,r=n.level,u=n.parentKey,h=n.children,a=f(h),c=this.activeOptionPath?this.activeOptionPath.filter(function(p){return p.parentKey!==u&&p.parentKey!==o}):[];this.focusedOptionInfo={index:s,level:r,parentKey:u},!(i=="hover"&&this.queryMatches)&&(a&&c.push(n),this.activeOptionPath=c)}},onOptionClick:function(e){var n=e.originalEvent,i=e.processedOption,s=e.isFocus,o=e.isHide,r=e.preventSelection,u=i.index,h=i.key,a=i.level,c=i.parentKey,p=this.isProccessedOptionGroup(i),b=this.isSelected(i);if(b)this.activeOptionPath=this.activeOptionPath.filter(function(C){return h!==C.key&&h.startsWith(C.key)}),this.focusedOptionInfo={index:u,level:a,parentKey:c};else if(p)this.onOptionChange(e),this.onOptionGroupSelect(n,i);else{var T=this.activeOptionPath.filter(function(C){return C.parentKey!==c});T.push(i),this.focusedOptionInfo={index:u,level:a,parentKey:c},(!r||i?.children.length!==0)&&(this.activeOptionPath=T,this.onOptionSelect(n,i,o))}s&&P(this.$refs.focusInput)},onOptionMouseEnter:function(e){this.focusOnHover&&(e.processedOption.level===0&&(this.dirty=!0),this.dirty||!this.dirty&&f(this.d_value)?this.onOptionChange(M(M({},e),{},{type:"hover"})):!this.dirty&&e.processedOption.level===0&&this.onOptionClick(M(M({},e),{},{type:"hover"})))},onOptionMouseMove:function(e){this.focused&&this.focusOnHover&&this.changeFocusedOptionIndex(e,e.processedOption.index)},onOptionSelect:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=this.getOptionValue(n?.option);this.activeOptionPath.forEach(function(o){return o.selected=!0}),this.updateModel(e,s),i&&this.hide(!0)},onOptionGroupSelect:function(e,n){this.dirty=!0,this.$emit("group-change",{originalEvent:e,value:n.option})},onContainerClick:function(e){this.disabled||this.loading||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]')||((!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide():this.show(),P(this.$refs.focusInput)),this.clicked=!0,this.$emit("click",e))},onClearClick:function(e){this.updateModel(e,null)},onOverlayClick:function(e){le.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(!this.overlayVisible)this.show();else{var n=this.focusedOptionInfo.index!==-1?this.findNextOptionIndex(this.focusedOptionInfo.index):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n,!0)}e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedOptionInfo.index!==-1){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);!i&&this.onOptionChange({originalEvent:e,processedOption:n})}this.overlayVisible&&this.hide(),e.preventDefault()}else{var s=this.focusedOptionInfo.index!==-1?this.findPrevOptionIndex(this.focusedOptionInfo.index):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,s,!0),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){var n=this;if(this.overlayVisible){var i=this.visibleOptions[this.focusedOptionInfo.index],s=this.activeOptionPath.find(function(u){return u.key===i?.parentKey}),o=this.focusedOptionInfo.parentKey===""||s&&s.key===this.focusedOptionInfo.parentKey,r=G(i?.parent);o&&(this.activeOptionPath=this.activeOptionPath.filter(function(u){return u.parentKey!==n.focusedOptionInfo.parentKey})),r||(this.focusedOptionInfo={index:-1,parentKey:s?s.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()}},onArrowRightKey:function(e){if(this.overlayVisible){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);if(i){var s=this.activeOptionPath.some(function(o){return n?.key===o.key});s?(this.focusedOptionInfo={index:-1,parentKey:n?.key},this.searchValue="",this.onArrowDownKey(e)):this.onOptionChange({originalEvent:e,processedOption:n})}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show(),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show(),e.preventDefault()},onEnterKey:function(e){if(!this.overlayVisible)this.focusedOptionInfo.index,this.onArrowDownKey(e);else if(this.focusedOptionInfo.index!==-1){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);this.onOptionClick({originalEvent:e,processedOption:n,preventSelection:!1}),!i&&this.hide()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){if(this.focusedOptionInfo.index!==-1){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);!i&&this.onOptionChange({originalEvent:e,processedOption:n})}this.overlayVisible&&this.hide()},onOverlayEnter:function(e){D.set("overlay",e,this.$primevue.config.zIndex.overlay),J(e,{position:"absolute",top:"0"}),this.alignOverlay(),this.scrollInView(),this.$attrSelector&&e.setAttribute(this.$attrSelector,"")},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null,this.dirty=!1},onOverlayAfterLeave:function(e){D.clear(e)},alignOverlay:function(){this.appendTo==="self"?$(this.overlay,this.$el):(this.overlay.style.minWidth=W(this.$el)+"px",Y(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&!e.$el.contains(n.target)&&!e.overlay.contains(n.target)&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new oe(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!U()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isOptionMatched:function(e){var n;return this.isValidOption(e)&&((n=this.getProccessedOptionLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isValidOption:function(e){return f(e)&&!this.isOptionDisabled(e.option)},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){return this.activeOptionPath&&this.activeOptionPath.some(function(n){return n.key===e.key})},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return F(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,i=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(s){return n.isValidOption(s)}):-1;return i>-1?i+e+1:e},findPrevOptionIndex:function(e){var n=this,i=e>0?F(this.visibleOptions.slice(0,e),function(s){return n.isValidOption(s)}):-1;return i>-1?i:e},findSelectedOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)})},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},findOptionPathByValue:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n=n||i===0&&this.processedOptions,!n)return null;if(G(e))return[];for(var s=0;s<n.length;s++){var o=n[s];if(R(e,this.getOptionValue(o.option),this.equalityKey))return[o];var r=this.findOptionPathByValue(e,o.children,i+1);if(r)return r.unshift(o),r}},searchOptions:function(e,n){var i=this;this.searchValue=(this.searchValue||"")+n;var s=-1,o=!1;return f(this.searchValue)&&(this.focusedOptionInfo.index!==-1?(s=this.visibleOptions.slice(this.focusedOptionInfo.index).findIndex(function(r){return i.isOptionMatched(r)}),s=s===-1?this.visibleOptions.slice(0,this.focusedOptionInfo.index).findIndex(function(r){return i.isOptionMatched(r)}):s+this.focusedOptionInfo.index):s=this.visibleOptions.findIndex(function(r){return i.isOptionMatched(r)}),s!==-1&&(o=!0),s===-1&&this.focusedOptionInfo.index===-1&&(s=this.findFirstFocusedOptionIndex()),s!==-1&&this.changeFocusedOptionIndex(e,s)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500),o},changeFocusedOptionIndex:function(e,n,i){this.focusedOptionInfo.index!==n&&(this.focusedOptionInfo.index=n,this.scrollInView(),this.focusOnHover&&this.onOptionClick({originalEvent:e,processedOption:this.visibleOptions[n],isHide:!1,preventSelection:i}),this.selectOnFocus&&this.onOptionChange({originalEvent:e,processedOption:this.visibleOptions[n],isHide:!1}))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var i=n!==-1?"".concat(e.$id,"_").concat(n):e.focusedOptionId,s=q(e.list,'li[id="'.concat(i,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&(this.focusedOptionInfo.index=this.findFirstFocusedOptionIndex(),this.onOptionChange({processedOption:this.visibleOptions[this.focusedOptionInfo.index],isHide:!1}),!this.overlayVisible&&(this.focusedOptionInfo={index:-1,level:0,parentKey:""}))},updateModel:function(e,n){this.writeValue(n,e),this.$emit("change",{originalEvent:e,value:n})},createProcessedOptions:function(e){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",r=[];return e&&e.forEach(function(u,h){var a=(o!==""?o+"_":"")+h,c={option:u,index:h,level:i,key:a,parent:s,parentKey:o};c.children=n.createProcessedOptions(n.getOptionGroupChildren(u,i),i+1,c,a),r.push(c)}),r},overlayRef:function(e){this.overlay=e}},computed:{hasSelectedOption:function(){return this.$filled},label:function(){var e=this.placeholder||"p-emptylabel";if(this.$filled){var n=this.findOptionPathByValue(this.d_value),i=f(n)?n[n.length-1]:null;return i?this.getOptionLabel(i.option):e}return e},processedOptions:function(){return this.createProcessedOptions(this.options||[])},visibleOptions:function(){var e=this,n=this.activeOptionPath&&this.activeOptionPath.find(function(i){return i.key===e.focusedOptionInfo.parentKey});return n?n.children:this.processedOptions},equalityKey:function(){return this.optionValue?null:this.dataKey},searchResultMessageText:function(){return f(this.visibleOptions)?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionInfo.index!==-1?"".concat(this.$id).concat(f(this.focusedOptionInfo.parentKey)?"_"+this.focusedOptionInfo.parentKey:"","_").concat(this.focusedOptionInfo.index):null},isClearIconVisible:function(){return this.showClear&&this.d_value!=null&&f(this.options)&&!this.disabled&&!this.loading}},components:{CascadeSelectSub:H,Portal:ce,ChevronDownIcon:se,SpinnerIcon:ae,AngleRightIcon:B,TimesIcon:re}};function S(t){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(t)}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?j(Object(n),!0).forEach(function(i){Se(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Se(t,e,n){return(e=Ce(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ce(t){var e=Pe(t,"string");return S(e)=="symbol"?e:e+""}function Pe(t,e){if(S(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(S(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Me=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"];function Ke(t,e,n,i,s,o){var r=k("SpinnerIcon"),u=k("CascadeSelectSub"),h=k("Portal");return d(),v("div",l({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[5]||(e[5]=function(a){return o.onContainerClick(a)})},t.ptmi("root")),[g("div",l({class:"p-hidden-accessible"},t.ptm("hiddenInputContainer"),{"data-p-hidden-accessible":!0}),[g("input",l({ref:"focusInput",id:t.inputId,type:"text",class:t.inputClass,style:t.inputStyle,readonly:"",disabled:t.disabled,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"tree","aria-expanded":s.overlayVisible,"aria-controls":s.overlayVisible?t.$id+"_tree":void 0,"aria-activedescendant":s.focused?o.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)})},w(w({},t.inputProps),t.ptm("hiddenInput"))),null,16,Me)],16),g("span",l({class:t.cx("label")},t.ptm("label")),[m(t.$slots,"value",{value:t.d_value,placeholder:t.placeholder},function(){return[ne(K(o.label),1)]})],16),o.isClearIconVisible?m(t.$slots,"clearicon",{key:0,class:I(t.cx("clearIcon")),clearCallback:o.onClearClick},function(){return[(d(),O(V(t.clearIcon?"i":"TimesIcon"),l({ref:"clearIcon",class:[t.cx("clearIcon"),t.clearIcon],onClick:o.onClearClick},t.ptm("clearIcon"),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):x("",!0),g("div",l({class:t.cx("dropdown"),role:"button",tabindex:"-1"},t.ptm("dropdown")),[t.loading?m(t.$slots,"loadingicon",{key:0,class:I(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(d(),v("span",l({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(d(),O(r,l({key:1,class:t.cx("loadingIcon"),spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):m(t.$slots,"dropdownicon",{key:1,class:I(t.cx("dropdownIcon"))},function(){return[(d(),O(V(t.dropdownIcon?"span":"ChevronDownIcon"),l({class:[t.cx("dropdownIcon"),t.dropdownIcon],"aria-hidden":"true"},t.ptm("dropdownIcon")),null,16,["class"]))]})],16),g("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),K(o.searchResultMessageText),17),E(h,{appendTo:t.appendTo},{default:A(function(){return[E(ie,l({name:"p-connected-overlay",onEnter:o.onOverlayEnter,onAfterEnter:o.onOverlayAfterEnter,onLeave:o.onOverlayLeave,onAfterLeave:o.onOverlayAfterLeave},t.ptm("transition")),{default:A(function(){return[s.overlayVisible?(d(),v("div",l({key:0,ref:o.overlayRef,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:[t.panelStyle,t.overlayStyle],onClick:e[3]||(e[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),onKeydown:e[4]||(e[4]=function(){return o.onOverlayKeyDown&&o.onOverlayKeyDown.apply(o,arguments)})},w(w(w({},t.panelProps),t.overlayProps),t.ptm("overlay"))),[m(t.$slots,"header",{value:t.d_value,options:t.options}),g("div",l({class:t.cx("listContainer")},t.ptm("listContainer")),[E(u,{id:t.$id+"_tree",role:"tree","aria-orientation":"horizontal",selectId:t.$id,focusedOptionId:s.focused?o.focusedOptionId:void 0,options:o.processedOptions,activeOptionPath:s.activeOptionPath,level:0,templates:t.$slots,optionLabel:t.optionLabel,optionValue:t.optionValue,optionDisabled:t.optionDisabled,optionGroupIcon:t.optionGroupIcon,optionGroupLabel:t.optionGroupLabel,optionGroupChildren:t.optionGroupChildren,value:t.d_value,onOptionChange:o.onOptionClick,onOptionFocusChange:o.onOptionMouseMove,onOptionFocusEnterChange:o.onOptionMouseEnter,pt:t.pt,unstyled:t.unstyled},null,8,["id","selectId","focusedOptionId","options","activeOptionPath","templates","optionLabel","optionValue","optionDisabled","optionGroupIcon","optionGroupLabel","optionGroupChildren","value","onOptionChange","onOptionFocusChange","onOptionFocusEnterChange","pt","unstyled"])],16),g("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),K(o.selectedMessageText),17),m(t.$slots,"footer",{value:t.d_value,options:t.options})],16)):x("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}Le.render=Ke;export{Le as default};
