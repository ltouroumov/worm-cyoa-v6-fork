import{c as K}from"./Be1fzYNM.js";import{af as ee,ag as F,aL as te,ai as ne,ah as H,ak as ie,aE as se,bj as G,aj as g,al as le,am as oe,an as re,ao as ae,ap as de,aM as ce,aN as ue,bk as pe,ay as fe,ar as O,g as b,as as he,t as d,v as r,at as f,X as I,x as y,z as k,av as o,B as P,y as m,a1 as S,a2 as R,W as T,A as w,aw as be,aO as ye,ax as ge,Z as A,$ as me,a9 as ve}from"./BZwby5eq.js";import{Z as z}from"./DGEOgZpe.js";import{C as Oe}from"./CCuWngGr.js";import{s as Ie}from"./Cj8KXOdI.js";import{s as ke}from"./BgEszZzB.js";import{s as Se}from"./C0XwZ0WI.js";import{s as we}from"./Dl-FfnPv.js";import{s as Le}from"./Dj9yx6eE.js";import{s as Fe}from"./DRn55na0.js";import Ce from"./B6wuaAbC.js";import Me from"./CBqxw3RV.js";import Ve from"./Be9sZJ3c.js";import{O as xe}from"./DBvVJ12i.js";import{s as Ke}from"./O7tkZITQ.js";import{R as Te}from"./Bo6d7Niz.js";import De from"./D-lL7Gxo.js";import{s as Ee}from"./D26rcb5C.js";import"./4MKSu4WY.js";import"./CcoDSO_5.js";import"./OozJoKSM.js";import"./DRVuadwS.js";import"./DmfvTtO6.js";var $e=({dt:e})=>`
.p-select {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${e("select.background")};
    border: 1px solid ${e("select.border.color")};
    transition: background ${e("select.transition.duration")}, color ${e("select.transition.duration")}, border-color ${e("select.transition.duration")},
        outline-color ${e("select.transition.duration")}, box-shadow ${e("select.transition.duration")};
    border-radius: ${e("select.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("select.shadow")};
}

.p-select:not(.p-disabled):hover {
    border-color: ${e("select.hover.border.color")};
}

.p-select:not(.p-disabled).p-focus {
    border-color: ${e("select.focus.border.color")};
    box-shadow: ${e("select.focus.ring.shadow")};
    outline: ${e("select.focus.ring.width")} ${e("select.focus.ring.style")} ${e("select.focus.ring.color")};
    outline-offset: ${e("select.focus.ring.offset")};
}

.p-select.p-variant-filled {
    background: ${e("select.filled.background")};
}

.p-select.p-variant-filled:not(.p-disabled):hover {
    background: ${e("select.filled.hover.background")};
}

.p-select.p-variant-filled:not(.p-disabled).p-focus {
    background: ${e("select.filled.focus.background")};
}

.p-select.p-invalid {
    border-color: ${e("select.invalid.border.color")};
}

.p-select.p-disabled {
    opacity: 1;
    background: ${e("select.disabled.background")};
}

.p-select-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: ${e("select.clear.icon.color")};
    inset-inline-end: ${e("select.dropdown.width")};
}

.p-select-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${e("select.dropdown.color")};
    width: ${e("select.dropdown.width")};
    border-start-end-radius: ${e("select.border.radius")};
    border-end-end-radius: ${e("select.border.radius")};
}

.p-select-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: ${e("select.padding.y")} ${e("select.padding.x")};
    text-overflow: ellipsis;
    cursor: pointer;
    color: ${e("select.color")};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-select-label.p-placeholder {
    color: ${e("select.placeholder.color")};
}

.p-select.p-invalid .p-select-label.p-placeholder {
    color: ${e("select.invalid.placeholder.color")};
}

.p-select:has(.p-select-clear-icon) .p-select-label {
    padding-inline-end: calc(1rem + ${e("select.padding.x")});
}

.p-select.p-disabled .p-select-label {
    color: ${e("select.disabled.color")};
}

.p-select-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-select-label {
    cursor: default;
}

.p-select .p-select-overlay {
    min-width: 100%;
}

.p-select-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: ${e("select.overlay.background")};
    color: ${e("select.overlay.color")};
    border: 1px solid ${e("select.overlay.border.color")};
    border-radius: ${e("select.overlay.border.radius")};
    box-shadow: ${e("select.overlay.shadow")};
}

.p-select-header {
    padding: ${e("select.list.header.padding")};
}

.p-select-filter {
    width: 100%;
}

.p-select-list-container {
    overflow: auto;
}

.p-select-option-group {
    cursor: auto;
    margin: 0;
    padding: ${e("select.option.group.padding")};
    background: ${e("select.option.group.background")};
    color: ${e("select.option.group.color")};
    font-weight: ${e("select.option.group.font.weight")};
}

.p-select-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${e("select.list.padding")};
    gap: ${e("select.list.gap")};
    display: flex;
    flex-direction: column;
}

.p-select-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${e("select.option.padding")};
    border: 0 none;
    color: ${e("select.option.color")};
    background: transparent;
    transition: background ${e("select.transition.duration")}, color ${e("select.transition.duration")}, border-color ${e("select.transition.duration")},
            box-shadow ${e("select.transition.duration")}, outline-color ${e("select.transition.duration")};
    border-radius: ${e("select.option.border.radius")};
}

.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
    background: ${e("select.option.focus.background")};
    color: ${e("select.option.focus.color")};
}

.p-select-option.p-select-option-selected {
    background: ${e("select.option.selected.background")};
    color: ${e("select.option.selected.color")};
}

.p-select-option.p-select-option-selected.p-focus {
    background: ${e("select.option.selected.focus.background")};
    color: ${e("select.option.selected.focus.color")};
}

.p-select-option-blank-icon {
    flex-shrink: 0;
}

.p-select-option-check-icon {
    position: relative;
    flex-shrink: 0;
    margin-inline-start: ${e("select.checkmark.gutter.start")};
    margin-inline-end: ${e("select.checkmark.gutter.end")};
    color: ${e("select.checkmark.color")};
}

.p-select-empty-message {
    padding: ${e("select.empty.message.padding")};
}

.p-select-fluid {
    display: flex;
    width: 100%;
}

.p-select-sm .p-select-label {
    font-size: ${e("select.sm.font.size")};
    padding-block: ${e("select.sm.padding.y")};
    padding-inline: ${e("select.sm.padding.x")};
}

.p-select-sm .p-select-dropdown .p-icon {
    font-size: ${e("select.sm.font.size")};
    width: ${e("select.sm.font.size")};
    height: ${e("select.sm.font.size")};
}

.p-select-lg .p-select-label {
    font-size: ${e("select.lg.font.size")};
    padding-block: ${e("select.lg.padding.y")};
    padding-inline: ${e("select.lg.padding.x")};
}

.p-select-lg .p-select-dropdown .p-icon {
    font-size: ${e("select.lg.font.size")};
    width: ${e("select.lg.font.size")};
    height: ${e("select.lg.font.size")};
}
`,Pe={root:function(t){var n=t.instance,s=t.props,l=t.state;return["p-select p-component p-inputwrapper",{"p-disabled":s.disabled,"p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-focus":l.focused,"p-inputwrapper-filled":n.$filled,"p-inputwrapper-focus":l.focused||l.overlayVisible,"p-select-open":l.overlayVisible,"p-select-fluid":n.$fluid,"p-select-sm p-inputfield-sm":s.size==="small","p-select-lg p-inputfield-lg":s.size==="large"}]},label:function(t){var n=t.instance,s=t.props;return["p-select-label",{"p-placeholder":!s.editable&&n.label===s.placeholder,"p-select-label-empty":!s.editable&&!n.$slots.value&&(n.label==="p-emptylabel"||n.label.length===0)}]},clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingicon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:function(t){var n=t.instance,s=t.props,l=t.state,i=t.option,c=t.focusedOption;return["p-select-option",{"p-select-option-selected":n.isSelected(i)&&s.highlightOnSelect,"p-focus":l.focusedOptionIndex===c,"p-disabled":n.isOptionDisabled(i)}]},optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},Ae=ee.extend({name:"select",style:$e,classes:Pe}),ze={name:"BaseSelect",extends:Ee,props:{options:Array,optionLabel:[String,Function],optionValue:[String,Function],optionDisabled:[String,Function],optionGroupLabel:[String,Function],optionGroupChildren:[String,Function],scrollHeight:{type:String,default:"14rem"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},dataKey:null,showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},labelId:{type:String,default:null},labelClass:{type:[String,Object],default:null},labelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},appendTo:{type:[String,Object],default:"body"},loading:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},resetFilterOnHide:{type:Boolean,default:!1},resetFilterOnClear:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!0},checkmark:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Ae,provide:function(){return{$pcSelect:this,$parentInstance:this}}};function C(e){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(e)}function Be(e){return je(e)||Re(e)||Ge(e)||He()}function He(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ge(e,t){if(e){if(typeof e=="string")return B(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}function Re(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function je(e){if(Array.isArray(e))return B(e)}function B(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=Array(t);n<t;n++)s[n]=e[n];return s}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,s)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?j(Object(n),!0).forEach(function(s){v(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function v(e,t,n){return(t=Ue(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ue(e){var t=Ne(e,"string");return C(t)=="symbol"?t:t+""}function Ne(e,t){if(C(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t);if(C(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var qe={name:"Select",extends:ze,inheritAttrs:!1,emits:["change","focus","blur","before-show","before-hide","show","hide","filter"],outsideClickListener:null,scrollHandler:null,resizeListener:null,labelClickListener:null,matchMediaOrientationListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,data:function(){return{clicked:!1,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1,queryOrientation:null}},watch:{modelValue:function(){this.isModelValueChanged=!0},options:function(){this.autoUpdateModel()}},mounted:function(){this.autoUpdateModel(),this.bindLabelClickListener(),this.bindMatchMediaOrientationListener()},updated:function(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindLabelClickListener(),this.unbindMatchMediaOrientationListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(z.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(t,n){return this.virtualScrollerDisabled?t:n&&n(t).index},getOptionLabel:function(t){return this.optionLabel?O(t,this.optionLabel):t},getOptionValue:function(t){return this.optionValue?O(t,this.optionValue):t},getOptionRenderKey:function(t,n){return(this.dataKey?O(t,this.dataKey):this.getOptionLabel(t))+"_"+n},getPTItemOptions:function(t,n,s,l){return this.ptm(l,{context:{option:t,index:s,selected:this.isSelected(t),focused:this.focusedOptionIndex===this.getOptionIndex(s,n),disabled:this.isOptionDisabled(t)}})},isOptionDisabled:function(t){return this.optionDisabled?O(t,this.optionDisabled):!1},isOptionGroup:function(t){return this.optionGroupLabel&&t.optionGroup&&t.group},getOptionGroupLabel:function(t){return O(t,this.optionGroupLabel)},getOptionGroupChildren:function(t){return O(t,this.optionGroupChildren)},getAriaPosInset:function(t){var n=this;return(this.optionGroupLabel?t-this.visibleOptions.slice(0,t).filter(function(s){return n.isOptionGroup(s)}).length:t)+1},show:function(t){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex(),t&&g(this.$refs.focusInput)},hide:function(t){var n=this,s=function(){n.$emit("before-hide"),n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,n.searchValue="",n.resetFilterOnHide&&(n.filterValue=null),t&&g(n.$refs.focusInput)};setTimeout(function(){s()},0)},onFocus:function(t){this.disabled||(this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex(),this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",t))},onBlur:function(t){var n=this;setTimeout(function(){var s,l;n.focused=!1,n.focusedOptionIndex=-1,n.searchValue="",n.$emit("blur",t),(s=(l=n.formField).onBlur)===null||s===void 0||s.call(l,t)},100)},onKeyDown:function(t){if(this.disabled||pe()){t.preventDefault();return}var n=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(t,this.editable);break;case"Home":this.onHomeKey(t,this.editable);break;case"End":this.onEndKey(t,this.editable);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Space":this.onSpaceKey(t,this.editable);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"Backspace":this.onBackspaceKey(t,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!n&&fe(t.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(t,t.key));break}this.clicked=!1},onEditableInput:function(t){var n=t.target.value;this.searchValue="";var s=this.searchOptions(t,n);!s&&(this.focusedOptionIndex=-1),this.updateModel(t,n),!this.overlayVisible&&F(n)&&this.show()},onContainerClick:function(t){this.disabled||this.loading||t.target.tagName==="INPUT"||t.target.getAttribute("data-pc-section")==="clearicon"||t.target.closest('[data-pc-section="clearicon"]')||((!this.overlay||!this.overlay.contains(t.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.clicked=!0)},onClearClick:function(t){this.updateModel(t,null),this.resetFilterOnClear&&(this.filterValue=null)},onFirstHiddenFocus:function(t){var n=t.relatedTarget===this.$refs.focusInput?ue(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;g(n)},onLastHiddenFocus:function(t){var n=t.relatedTarget===this.$refs.focusInput?ce(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;g(n)},onOptionSelect:function(t,n){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,l=this.getOptionValue(n);this.updateModel(t,l),s&&this.hide(!0)},onOptionMouseMove:function(t,n){this.focusOnHover&&this.changeFocusedOptionIndex(t,n)},onFilterChange:function(t){var n=t.target.value;this.filterValue=n,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:t,value:n}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(t){if(!t.isComposing)switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(t,!0);break;case"Home":this.onHomeKey(t,!0);break;case"End":this.onEndKey(t,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(t){xe.emit("overlay-click",{originalEvent:t,target:this.$el})},onOverlayKeyDown:function(t){switch(t.code){case"Escape":this.onEscapeKey(t);break}},onArrowDownKey:function(t){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(t,this.findSelectedOptionIndex());else{var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(t,n)}t.preventDefault()},onArrowUpKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(t.altKey&&!n)this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),t.preventDefault();else{var s=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(t,s),!this.overlayVisible&&this.show(),t.preventDefault()}},onArrowLeftKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&(this.focusedOptionIndex=-1)},onHomeKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var s=t.currentTarget;t.shiftKey?s.setSelectionRange(0,t.target.selectionStart):(s.setSelectionRange(0,0),this.focusedOptionIndex=-1)}else this.changeFocusedOptionIndex(t,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();t.preventDefault()},onEndKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var s=t.currentTarget;if(t.shiftKey)s.setSelectionRange(t.target.selectionStart,s.value.length);else{var l=s.value.length;s.setSelectionRange(l,l),this.focusedOptionIndex=-1}}else this.changeFocusedOptionIndex(t,this.findLastOptionIndex()),!this.overlayVisible&&this.show();t.preventDefault()},onPageUpKey:function(t){this.scrollInView(0),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.visibleOptions.length-1),t.preventDefault()},onEnterKey:function(t){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(t)),t.preventDefault()},onSpaceKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;!n&&this.onEnterKey(t)},onEscapeKey:function(t){this.overlayVisible&&this.hide(!0),t.preventDefault(),t.stopPropagation()},onTabKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n||(this.overlayVisible&&this.hasFocusableElements()?(g(this.$refs.firstHiddenFocusableElementOnOverlay),t.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&!this.overlayVisible&&this.show()},onOverlayEnter:function(t){var n=this;z.set("overlay",t,this.$primevue.config.zIndex.overlay),de(t,{position:"absolute",top:"0"}),this.alignOverlay(),this.scrollInView(),setTimeout(function(){n.autoFilterFocus&&n.filter&&g(n.$refs.filterInput.$el),n.autoUpdateModel()},1)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){var t=this;this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.autoFilterFocus&&this.filter&&!this.editable&&this.$nextTick(function(){t.$refs.filterInput&&g(t.$refs.filterInput.$el)}),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(t){z.clear(t)},alignOverlay:function(){this.appendTo==="self"?oe(this.overlay,this.$el):this.overlay&&(this.overlay.style.minWidth=re(this.$el)+"px",ae(this.overlay,this.$el))},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){var s=n.composedPath();t.overlayVisible&&t.overlay&&!s.includes(t.$el)&&!s.includes(t.overlay)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new Oe(this.$refs.container,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!le()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindLabelClickListener:function(){var t=this;if(!this.editable&&!this.labelClickListener){var n=document.querySelector('label[for="'.concat(this.labelId,'"]'));n&&G(n)&&(this.labelClickListener=function(){g(t.$refs.focusInput)},n.addEventListener("click",this.labelClickListener))}},unbindLabelClickListener:function(){if(this.labelClickListener){var t=document.querySelector('label[for="'.concat(this.labelId,'"]'));t&&G(t)&&t.removeEventListener("click",this.labelClickListener)}},bindMatchMediaOrientationListener:function(){var t=this;if(!this.matchMediaOrientationListener){var n=matchMedia("(orientation: portrait)");this.queryOrientation=n,this.matchMediaOrientationListener=function(){t.alignOverlay()},this.queryOrientation.addEventListener("change",this.matchMediaOrientationListener)}},unbindMatchMediaOrientationListener:function(){this.matchMediaOrientationListener&&(this.queryOrientation.removeEventListener("change",this.matchMediaOrientationListener),this.queryOrientation=null,this.matchMediaOrientationListener=null)},hasFocusableElements:function(){return se(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionExactMatched:function(t){var n;return this.isValidOption(t)&&typeof this.getOptionLabel(t)=="string"&&((n=this.getOptionLabel(t))===null||n===void 0?void 0:n.toLocaleLowerCase(this.filterLocale))==this.searchValue.toLocaleLowerCase(this.filterLocale)},isOptionStartsWith:function(t){var n;return this.isValidOption(t)&&typeof this.getOptionLabel(t)=="string"&&((n=this.getOptionLabel(t))===null||n===void 0?void 0:n.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(t){return F(t)&&!(this.isOptionDisabled(t)||this.isOptionGroup(t))},isValidSelectedOption:function(t){return this.isValidOption(t)&&this.isSelected(t)},isSelected:function(t){return ie(this.d_value,this.getOptionValue(t),this.equalityKey)},findFirstOptionIndex:function(){var t=this;return this.visibleOptions.findIndex(function(n){return t.isValidOption(n)})},findLastOptionIndex:function(){var t=this;return H(this.visibleOptions,function(n){return t.isValidOption(n)})},findNextOptionIndex:function(t){var n=this,s=t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(function(l){return n.isValidOption(l)}):-1;return s>-1?s+t+1:t},findPrevOptionIndex:function(t){var n=this,s=t>0?H(this.visibleOptions.slice(0,t),function(l){return n.isValidOption(l)}):-1;return s>-1?s:t},findSelectedOptionIndex:function(){var t=this;return this.$filled?this.visibleOptions.findIndex(function(n){return t.isValidSelectedOption(n)}):-1},findFirstFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findFirstOptionIndex():t},findLastFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findLastOptionIndex():t},searchOptions:function(t,n){var s=this;this.searchValue=(this.searchValue||"")+n;var l=-1,i=!1;return F(this.searchValue)&&(l=this.visibleOptions.findIndex(function(c){return s.isOptionExactMatched(c)}),l===-1&&(l=this.visibleOptions.findIndex(function(c){return s.isOptionStartsWith(c)})),l!==-1&&(i=!0),l===-1&&this.focusedOptionIndex===-1&&(l=this.findFirstFocusedOptionIndex()),l!==-1&&this.changeFocusedOptionIndex(t,l)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500),i},changeFocusedOptionIndex:function(t,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(t,this.visibleOptions[n],!1))},scrollInView:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var s=n!==-1?"".concat(t.$id,"_").concat(n):t.focusedOptionId,l=ne(t.list,'li[id="'.concat(s,'"]'));l?l.scrollIntoView&&l.scrollIntoView({block:"nearest",inline:"nearest"}):t.virtualScrollerDisabled||t.virtualScroller&&t.virtualScroller.scrollToIndex(n!==-1?n:t.focusedOptionIndex)})},autoUpdateModel:function(){this.autoOptionFocus&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex()),this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1)},updateModel:function(t,n){this.writeValue(n,t),this.$emit("change",{originalEvent:t,value:n})},flatOptions:function(t){var n=this;return(t||[]).reduce(function(s,l,i){s.push({optionGroup:l,group:!0,index:i});var c=n.getOptionGroupChildren(l);return c&&c.forEach(function(L){return s.push(L)}),s},[])},overlayRef:function(t){this.overlay=t},listRef:function(t,n){this.list=t,n&&n(t)},virtualScrollerRef:function(t){this.virtualScroller=t}},computed:{visibleOptions:function(){var t=this,n=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var s=te.filter(n,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var l=this.options||[],i=[];return l.forEach(function(c){var L=t.getOptionGroupChildren(c),M=L.filter(function(D){return s.includes(D)});M.length>0&&i.push(U(U({},c),{},v({},typeof t.optionGroupChildren=="string"?t.optionGroupChildren:"items",Be(M))))}),this.flatOptions(i)}return s}return n},hasSelectedOption:function(){return this.$filled},label:function(){var t=this.findSelectedOptionIndex();return t!==-1?this.getOptionLabel(this.visibleOptions[t]):this.placeholder||"p-emptylabel"},editableInputValue:function(){var t=this.findSelectedOptionIndex();return t!==-1?this.getOptionLabel(this.visibleOptions[t]):this.d_value||""},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},filterResultMessageText:function(){return F(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.$id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var t=this;return this.visibleOptions.filter(function(n){return!t.isOptionGroup(n)}).length},isClearIconVisible:function(){return this.showClear&&this.d_value!=null&&F(this.options)},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},containerDataP:function(){return K(v({invalid:this.$invalid,disabled:this.disabled,focus:this.focused,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))},labelDataP:function(){return K(v(v({placeholder:!this.editable&&this.label===this.placeholder,clearable:this.showClear,disabled:this.disabled,editable:this.editable},this.size,this.size),"empty",!this.editable&&!this.$slots.value&&(this.label==="p-emptylabel"||this.label.length===0)))},dropdownIconDataP:function(){return K(v({},this.size,this.size))},overlayDataP:function(){return K(v({},"portal-"+this.appendTo,"portal-"+this.appendTo))}},directives:{ripple:Te},components:{InputText:Ve,VirtualScroller:De,Portal:Ke,InputIcon:Me,IconField:Ce,TimesIcon:Fe,ChevronDownIcon:Se,SpinnerIcon:Le,SearchIcon:we,CheckIcon:ke,BlankIcon:Ie}},We=["id","data-p"],Ze=["name","id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid","data-p"],Xe=["name","id","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid","aria-disabled","data-p"],Je=["data-p"],Qe=["id"],Ye=["id"],_e=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onMousedown","onMousemove","data-p-selected","data-p-focused","data-p-disabled"];function et(e,t,n,s,l,i){var c=b("SpinnerIcon"),L=b("InputText"),M=b("SearchIcon"),D=b("InputIcon"),N=b("IconField"),q=b("CheckIcon"),W=b("BlankIcon"),Z=b("VirtualScroller"),X=b("Portal"),J=he("ripple");return r(),d("div",o({ref:"container",id:e.$id,class:e.cx("root"),onClick:t[11]||(t[11]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)}),"data-p":i.containerDataP},e.ptmi("root")),[e.editable?(r(),d("input",o({key:0,ref:"focusInput",name:e.name,id:e.labelId||e.inputId,type:"text",class:[e.cx("label"),e.inputClass,e.labelClass],style:[e.inputStyle,e.labelStyle],value:i.editableInputValue,placeholder:e.placeholder,tabindex:e.disabled?-1:e.tabindex,disabled:e.disabled,autocomplete:"off",role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":l.overlayVisible,"aria-controls":e.$id+"_list","aria-activedescendant":l.focused?i.focusedOptionId:void 0,"aria-invalid":e.invalid||void 0,onFocus:t[0]||(t[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)}),onInput:t[3]||(t[3]=function(){return i.onEditableInput&&i.onEditableInput.apply(i,arguments)}),"data-p":i.labelDataP},e.ptm("label")),null,16,Ze)):(r(),d("span",o({key:1,ref:"focusInput",name:e.name,id:e.labelId||e.inputId,class:[e.cx("label"),e.inputClass,e.labelClass],style:[e.inputStyle,e.labelStyle],tabindex:e.disabled?-1:e.tabindex,role:"combobox","aria-label":e.ariaLabel||(i.label==="p-emptylabel"?void 0:i.label),"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":l.overlayVisible,"aria-controls":e.$id+"_list","aria-activedescendant":l.focused?i.focusedOptionId:void 0,"aria-invalid":e.invalid||void 0,"aria-disabled":e.disabled,onFocus:t[4]||(t[4]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[5]||(t[5]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:t[6]||(t[6]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)}),"data-p":i.labelDataP},e.ptm("label")),[f(e.$slots,"value",{value:e.d_value,placeholder:e.placeholder},function(){var u;return[P(m(i.label==="p-emptylabel"?" ":(u=i.label)!==null&&u!==void 0?u:"empty"),1)]})],16,Xe)),i.isClearIconVisible?f(e.$slots,"clearicon",{key:2,class:T(e.cx("clearIcon")),clearCallback:i.onClearClick},function(){return[(r(),S(R(e.clearIcon?"i":"TimesIcon"),o({ref:"clearIcon",class:[e.cx("clearIcon"),e.clearIcon],onClick:i.onClearClick},e.ptm("clearIcon"),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):I("",!0),y("div",o({class:e.cx("dropdown")},e.ptm("dropdown")),[e.loading?f(e.$slots,"loadingicon",{key:0,class:T(e.cx("loadingIcon"))},function(){return[e.loadingIcon?(r(),d("span",o({key:0,class:[e.cx("loadingIcon"),"pi-spin",e.loadingIcon],"aria-hidden":"true"},e.ptm("loadingIcon")),null,16)):(r(),S(c,o({key:1,class:e.cx("loadingIcon"),spin:"","aria-hidden":"true"},e.ptm("loadingIcon")),null,16,["class"]))]}):f(e.$slots,"dropdownicon",{key:1,class:T(e.cx("dropdownIcon"))},function(){return[(r(),S(R(e.dropdownIcon?"span":"ChevronDownIcon"),o({class:[e.cx("dropdownIcon"),e.dropdownIcon],"aria-hidden":"true","data-p":i.dropdownIconDataP},e.ptm("dropdownIcon")),null,16,["class","data-p"]))]})],16),k(X,{appendTo:e.appendTo},{default:w(function(){return[k(be,o({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},e.ptm("transition")),{default:w(function(){return[l.overlayVisible?(r(),d("div",o({key:0,ref:i.overlayRef,class:[e.cx("overlay"),e.panelClass,e.overlayClass],style:[e.panelStyle,e.overlayStyle],onClick:t[9]||(t[9]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:t[10]||(t[10]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)}),"data-p":i.overlayDataP},e.ptm("overlay")),[y("span",o({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[7]||(t[7]=function(){return i.onFirstHiddenFocus&&i.onFirstHiddenFocus.apply(i,arguments)})},e.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),f(e.$slots,"header",{value:e.d_value,options:i.visibleOptions}),e.filter?(r(),d("div",o({key:0,class:e.cx("header")},e.ptm("header")),[k(N,{unstyled:e.unstyled,pt:e.ptm("pcFilterContainer")},{default:w(function(){return[k(L,{ref:"filterInput",type:"text",value:l.filterValue,onVnodeMounted:i.onFilterUpdated,onVnodeUpdated:i.onFilterUpdated,class:T(e.cx("pcFilter")),placeholder:e.filterPlaceholder,variant:e.variant,unstyled:e.unstyled,role:"searchbox",autocomplete:"off","aria-owns":e.$id+"_list","aria-activedescendant":i.focusedOptionId,onKeydown:i.onFilterKeyDown,onBlur:i.onFilterBlur,onInput:i.onFilterChange,pt:e.ptm("pcFilter"),formControl:{novalidate:!0}},null,8,["value","onVnodeMounted","onVnodeUpdated","class","placeholder","variant","unstyled","aria-owns","aria-activedescendant","onKeydown","onBlur","onInput","pt"]),k(D,{unstyled:e.unstyled,pt:e.ptm("pcFilterIconContainer")},{default:w(function(){return[f(e.$slots,"filtericon",{},function(){return[e.filterIcon?(r(),d("span",o({key:0,class:e.filterIcon},e.ptm("filterIcon")),null,16)):(r(),S(M,ye(o({key:1},e.ptm("filterIcon"))),null,16))]})]}),_:3},8,["unstyled","pt"])]}),_:3},8,["unstyled","pt"]),y("span",o({role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),m(i.filterResultMessageText),17)],16)):I("",!0),y("div",o({class:e.cx("listContainer"),style:{"max-height":i.virtualScrollerDisabled?e.scrollHeight:""}},e.ptm("listContainer")),[k(Z,o({ref:i.virtualScrollerRef},e.virtualScrollerOptions,{items:i.visibleOptions,style:{height:e.scrollHeight},tabindex:-1,disabled:i.virtualScrollerDisabled,pt:e.ptm("virtualScroller")}),ge({content:w(function(u){var E=u.styleClass,Q=u.contentRef,V=u.items,h=u.getItemOptions,Y=u.contentStyle,x=u.itemSize;return[y("ul",o({ref:function(p){return i.listRef(p,Q)},id:e.$id+"_list",class:[e.cx("list"),E],style:Y,role:"listbox"},e.ptm("list")),[(r(!0),d(A,null,me(V,function(a,p){return r(),d(A,{key:i.getOptionRenderKey(a,i.getOptionIndex(p,h))},[i.isOptionGroup(a)?(r(),d("li",o({key:0,id:e.$id+"_"+i.getOptionIndex(p,h),style:{height:x?x+"px":void 0},class:e.cx("optionGroup"),role:"option",ref_for:!0},e.ptm("optionGroup")),[f(e.$slots,"optiongroup",{option:a.optionGroup,index:i.getOptionIndex(p,h)},function(){return[y("span",o({class:e.cx("optionGroupLabel"),ref_for:!0},e.ptm("optionGroupLabel")),m(i.getOptionGroupLabel(a.optionGroup)),17)]})],16,Ye)):ve((r(),d("li",o({key:1,id:e.$id+"_"+i.getOptionIndex(p,h),class:e.cx("option",{option:a,focusedOption:i.getOptionIndex(p,h)}),style:{height:x?x+"px":void 0},role:"option","aria-label":i.getOptionLabel(a),"aria-selected":i.isSelected(a),"aria-disabled":i.isOptionDisabled(a),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(p,h)),onMousedown:function($){return i.onOptionSelect($,a)},onMousemove:function($){return i.onOptionMouseMove($,i.getOptionIndex(p,h))},"data-p-selected":!e.checkmark&&i.isSelected(a),"data-p-focused":l.focusedOptionIndex===i.getOptionIndex(p,h),"data-p-disabled":i.isOptionDisabled(a),ref_for:!0},i.getPTItemOptions(a,h,p,"option")),[e.checkmark?(r(),d(A,{key:0},[i.isSelected(a)?(r(),S(q,o({key:0,class:e.cx("optionCheckIcon"),ref_for:!0},e.ptm("optionCheckIcon")),null,16,["class"])):(r(),S(W,o({key:1,class:e.cx("optionBlankIcon"),ref_for:!0},e.ptm("optionBlankIcon")),null,16,["class"]))],64)):I("",!0),f(e.$slots,"option",{option:a,selected:i.isSelected(a),index:i.getOptionIndex(p,h)},function(){return[y("span",o({class:e.cx("optionLabel"),ref_for:!0},e.ptm("optionLabel")),m(i.getOptionLabel(a)),17)]})],16,_e)),[[J]])],64)}),128)),l.filterValue&&(!V||V&&V.length===0)?(r(),d("li",o({key:0,class:e.cx("emptyMessage"),role:"option"},e.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[f(e.$slots,"emptyfilter",{},function(){return[P(m(i.emptyFilterMessageText),1)]})],16)):!e.options||e.options&&e.options.length===0?(r(),d("li",o({key:1,class:e.cx("emptyMessage"),role:"option"},e.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[f(e.$slots,"empty",{},function(){return[P(m(i.emptyMessageText),1)]})],16)):I("",!0)],16,Qe)]}),_:2},[e.$slots.loader?{name:"loader",fn:w(function(u){var E=u.options;return[f(e.$slots,"loader",{options:E})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),f(e.$slots,"footer",{value:e.d_value,options:i.visibleOptions}),!e.options||e.options&&e.options.length===0?(r(),d("span",o({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),m(i.emptyMessageText),17)):I("",!0),y("span",o({role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),m(i.selectedMessageText),17),y("span",o({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[8]||(t[8]=function(){return i.onLastHiddenFocus&&i.onLastHiddenFocus.apply(i,arguments)})},e.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16,Je)):I("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16,We)}qe.render=et;export{qe as default};
