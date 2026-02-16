import{an as z,ae as u,ar as P,as as y,aq as h,aN as K,ao as f,a_ as O,ay as H,bP as S,aE as W,g as T,aA as q,z as m,A as c,a0 as k,a1 as x,Y as I,B as g,D as E,a6 as L,a3 as b,a4 as v,Z as D,C as V,E as _,ac as N,aC as j,ad as J}from"./DnoyKoxn.js";import{s as B}from"./DDEVnlz5.js";import{s as U}from"./CT9BO7gz.js";import{s as C}from"./_HAkkcDx.js";import{R as Q}from"./a7gYkR0q.js";import"./B5C-AtoX.js";import"./CbA-0jCt.js";import"./jc0MLXVe.js";var Y=`
    .p-panelmenu {
        display: flex;
        flex-direction: column;
        gap: dt('panelmenu.gap');
    }

    .p-panelmenu-panel {
        background: dt('panelmenu.panel.background');
        border-width: dt('panelmenu.panel.border.width');
        border-style: solid;
        border-color: dt('panelmenu.panel.border.color');
        color: dt('panelmenu.panel.color');
        border-radius: dt('panelmenu.panel.border.radius');
        padding: dt('panelmenu.panel.padding');
    }

    .p-panelmenu-panel:first-child {
        border-width: dt('panelmenu.panel.first.border.width');
        border-start-start-radius: dt('panelmenu.panel.first.top.border.radius');
        border-start-end-radius: dt('panelmenu.panel.first.top.border.radius');
    }

    .p-panelmenu-panel:last-child {
        border-width: dt('panelmenu.panel.last.border.width');
        border-end-start-radius: dt('panelmenu.panel.last.bottom.border.radius');
        border-end-end-radius: dt('panelmenu.panel.last.bottom.border.radius');
    }

    .p-panelmenu-header {
        outline: 0 none;
    }

    .p-panelmenu-header-content {
        border-radius: dt('panelmenu.item.border.radius');
        transition:
            background dt('panelmenu.transition.duration'),
            color dt('panelmenu.transition.duration'),
            outline-color dt('panelmenu.transition.duration'),
            box-shadow dt('panelmenu.transition.duration');
        outline-color: transparent;
        color: dt('panelmenu.item.color');
    }

    .p-panelmenu-header-link {
        display: flex;
        gap: dt('panelmenu.item.gap');
        padding: dt('panelmenu.item.padding');
        align-items: center;
        user-select: none;
        cursor: pointer;
        position: relative;
        text-decoration: none;
        color: inherit;
    }

    .p-panelmenu-header-icon,
    .p-panelmenu-item-icon {
        color: dt('panelmenu.item.icon.color');
    }

    .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.color');
    }

    .p-panelmenu-submenu-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-submenu {
        margin: 0;
        padding: 0 0 0 dt('panelmenu.submenu.indent');
        outline: 0;
        list-style: none;
    }

    .p-panelmenu-submenu:dir(rtl) {
        padding: 0 dt('panelmenu.submenu.indent') 0 0;
    }

    .p-panelmenu-item-link {
        display: flex;
        gap: dt('panelmenu.item.gap');
        padding: dt('panelmenu.item.padding');
        align-items: center;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        position: relative;
        overflow: hidden;
    }

    .p-panelmenu-item-label {
        line-height: 1;
    }

    .p-panelmenu-item-content {
        border-radius: dt('panelmenu.item.border.radius');
        transition:
            background dt('panelmenu.transition.duration'),
            color dt('panelmenu.transition.duration'),
            outline-color dt('panelmenu.transition.duration'),
            box-shadow dt('panelmenu.transition.duration');
        color: dt('panelmenu.item.color');
        outline-color: transparent;
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panelmenu-content-wrapper {
        min-height: 0;
    }
`,Z={root:"p-panelmenu p-component",panel:"p-panelmenu-panel",header:function(e){var t=e.instance,i=e.item;return["p-panelmenu-header",{"p-panelmenu-header-active":t.isItemActive(i)&&!!i.items,"p-disabled":t.isItemDisabled(i)}]},headerContent:"p-panelmenu-header-content",headerLink:"p-panelmenu-header-link",headerIcon:"p-panelmenu-header-icon",headerLabel:"p-panelmenu-header-label",contentContainer:"p-panelmenu-content-container",contentWrapper:"p-panelmenu-content-wrapper",content:"p-panelmenu-content",rootList:"p-panelmenu-root-list",item:function(e){var t=e.instance,i=e.processedItem;return["p-panelmenu-item",{"p-focus":t.isItemFocused(i),"p-disabled":t.isItemDisabled(i)}]},itemContent:"p-panelmenu-item-content",itemLink:"p-panelmenu-item-link",itemIcon:"p-panelmenu-item-icon",itemLabel:"p-panelmenu-item-label",submenuIcon:"p-panelmenu-submenu-icon",submenu:"p-panelmenu-submenu",separator:"p-menuitem-separator"},X=z.extend({name:"panelmenu",style:Y,classes:Z}),$={name:"BasePanelMenu",extends:C,props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},multiple:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},style:X,provide:function(){return{$pcPanelMenu:this,$parentInstance:this}}},G={name:"PanelMenuSub",hostName:"PanelMenu",extends:C,emits:["item-toggle","item-mousemove"],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:-1}},methods:{getItemId:function(e){return"".concat(this.panelId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,i){return e&&e.item?O(e.item[t],i):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,t,i){return this.ptm(e,{context:{item:t.item,index:i,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return f(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-toggle",{processedItem:t,expanded:!this.isItemActive(t)})},onItemToggle:function(e){this.$emit("item-toggle",e)},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(i){return t.isItemVisible(i)&&t.getItemProp(i,"separator")}).length+1},getMenuItemProps:function(e,t){return{action:u({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions("itemLink",e,t)),icon:u({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,t)),label:u({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,t)),submenuicon:u({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,t))}}},components:{ChevronRightIcon:U,ChevronDownIcon:B},directives:{ripple:Q}},ee=["tabindex"],te=["id","aria-label","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-focused","data-p-disabled"],ne=["onClick","onMousemove"],ae=["href","target"];function ie(n,e,t,i,s,a){var l=T("PanelMenuSub",!0),o=q("ripple");return c(),m("ul",{class:D(n.cx("submenu")),tabindex:t.tabindex},[(c(!0),m(k,null,x(t.items,function(r,d){return c(),m(k,{key:a.getItemKey(r)},[a.isItemVisible(r)&&!a.getItemProp(r,"separator")?(c(),m("li",u({key:0,id:a.getItemId(r),class:[n.cx("item",{processedItem:r}),a.getItemProp(r,"class")],style:a.getItemProp(r,"style"),role:"treeitem","aria-label":a.getItemLabel(r),"aria-expanded":a.isItemGroup(r)?a.isItemActive(r):void 0,"aria-level":t.level+1,"aria-setsize":a.getAriaSetSize(),"aria-posinset":a.getAriaPosInset(d)},{ref_for:!0},a.getPTOptions("item",r,d),{"data-p-focused":a.isItemFocused(r),"data-p-disabled":a.isItemDisabled(r)}),[g("div",u({class:n.cx("itemContent"),onClick:function(A){return a.onItemClick(A,r)},onMousemove:function(A){return a.onItemMouseMove(A,r)}},{ref_for:!0},a.getPTOptions("itemContent",r,d)),[t.templates.item?(c(),b(v(t.templates.item),{key:1,item:r.item,root:!1,active:a.isItemActive(r),hasSubmenu:a.isItemGroup(r),label:a.getItemLabel(r),props:a.getMenuItemProps(r,d)},null,8,["item","active","hasSubmenu","label","props"])):L((c(),m("a",u({key:0,href:a.getItemProp(r,"url"),class:n.cx("itemLink"),target:a.getItemProp(r,"target"),tabindex:"-1"},{ref_for:!0},a.getPTOptions("itemLink",r,d)),[a.isItemGroup(r)?(c(),m(k,{key:0},[t.templates.submenuicon?(c(),b(v(t.templates.submenuicon),u({key:0,class:n.cx("submenuIcon"),active:a.isItemActive(r)},{ref_for:!0},a.getPTOptions("submenuIcon",r,d)),null,16,["class","active"])):(c(),b(v(a.isItemActive(r)?"ChevronDownIcon":"ChevronRightIcon"),u({key:1,class:n.cx("submenuIcon")},{ref_for:!0},a.getPTOptions("submenuIcon",r,d)),null,16,["class"]))],64)):I("",!0),t.templates.itemicon?(c(),b(v(t.templates.itemicon),{key:1,item:r.item,class:D(n.cx("itemIcon"))},null,8,["item","class"])):a.getItemProp(r,"icon")?(c(),m("span",u({key:2,class:[n.cx("itemIcon"),a.getItemProp(r,"icon")]},{ref_for:!0},a.getPTOptions("itemIcon",r,d)),null,16)):I("",!0),g("span",u({class:n.cx("itemLabel")},{ref_for:!0},a.getPTOptions("itemLabel",r,d)),V(a.getItemLabel(r)),17)],16,ae)),[[o]])],16,ne),E(j,u({name:"p-collapsible"},{ref_for:!0},n.ptm("transition")),{default:_(function(){return[L(g("div",u({class:n.cx("contentContainer")},{ref_for:!0},n.ptm("contentContainer")),[g("div",u({class:n.cx("contentWrapper")},{ref_for:!0},n.ptm("contentWrapper")),[a.isItemVisible(r)&&a.isItemGroup(r)?(c(),b(l,u({key:0,id:a.getItemId(r)+"_list",role:"group",panelId:t.panelId,focusedItemId:t.focusedItemId,items:r.items,level:t.level+1,templates:t.templates,activeItemPath:t.activeItemPath,onItemToggle:a.onItemToggle,onItemMousemove:e[0]||(e[0]=function(p){return n.$emit("item-mousemove",p)}),pt:n.pt,unstyled:n.unstyled},{ref_for:!0},n.ptm("submenu")),null,16,["id","panelId","focusedItemId","items","level","templates","activeItemPath","onItemToggle","pt","unstyled"])):I("",!0)],16)],16),[[N,a.isItemActive(r)]])]}),_:2},1040)],16,te)):I("",!0),a.isItemVisible(r)&&a.getItemProp(r,"separator")?(c(),m("li",u({key:1,style:a.getItemProp(r,"style"),class:[n.cx("separator"),a.getItemProp(r,"class")],role:"separator"},{ref_for:!0},n.ptm("separator")),null,16)):I("",!0)],64)}),128))],10,ee)}G.render=ie;function re(n,e){return le(n)||ue(n,e)||oe(n,e)||se()}function se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(n,e){if(n){if(typeof n=="string")return F(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?F(n,e):void 0}}function F(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}function ue(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,s,a,l,o=[],r=!0,d=!1;try{if(a=(t=t.call(n)).next,e!==0)for(;!(r=(i=a.call(t)).done)&&(o.push(i.value),o.length!==e);r=!0);}catch(p){d=!0,s=p}finally{try{if(!r&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(d)throw s}}return o}}function le(n){if(Array.isArray(n))return n}var R={name:"PanelMenuList",hostName:"PanelMenu",extends:C,emits:["item-toggle","header-focus"],props:{panelId:{type:String,default:null},items:{type:Array,default:null},templates:{type:Object,default:null},expandedKeys:{type:Object,default:null}},searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys:function(e){this.autoUpdateActiveItemPath(e)}},created:function(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp:function(e,t){return e&&e.item?O(e.item[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.parentKey})},isItemGroup:function(e){return f(e.items)},onFocus:function(e){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(e,e.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur:function(){this.focused=!1,this.focusedItem=null,this.searchValue=""},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&W(e.key)&&this.searchItems(e,e.key);break}},onArrowDownKey:function(e){var t=f(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:t,focusOnNext:!0}),e.preventDefault()},onArrowUpKey:function(e){var t=f(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:t,selfCheck:!0}),e.preventDefault()},onArrowLeftKey:function(e){var t=this;if(f(this.focusedItem)){var i=this.activeItemPath.some(function(s){return s.key===t.focusedItem.key});i?this.activeItemPath=this.activeItemPath.filter(function(s){return s.key!==t.focusedItem.key}):this.focusedItem=f(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,e.preventDefault()}},onArrowRightKey:function(e){var t=this;if(f(this.focusedItem)){var i=this.isItemGroup(this.focusedItem);if(i){var s=this.activeItemPath.some(function(a){return a.key===t.focusedItem.key});s?this.onArrowDownKey(e):(this.activeItemPath=this.activeItemPath.filter(function(a){return a.parentKey!==t.focusedItem.parentKey}),this.activeItemPath.push(this.focusedItem))}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()},onEndKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()},onEnterKey:function(e){if(f(this.focusedItem)){var t=h(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]')),i=t&&(h(t,'[data-pc-section="itemlink"]')||h(t,"a,button"));i?i.click():t&&t.click()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onItemToggle:function(e){var t=e.processedItem,i=e.expanded;this.expandedKeys?this.$emit("item-toggle",{item:t.item,expanded:i}):(this.activeItemPath=this.activeItemPath.filter(function(s){return s.parentKey!==t.parentKey}),i&&this.activeItemPath.push(t)),this.focusedItem=t,P(this.$el)},onItemMouseMove:function(e){this.focused&&(this.focusedItem=e.processedItem)},isElementInPanel:function(e,t){var i=e.currentTarget.closest('[data-pc-section="panel"]');return i&&i.contains(t)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isVisibleItem:function(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)},isValidItem:function(e){return!!e&&!this.isItemDisabled(e)&&!this.getItemProp(e,"separator")},findFirstItem:function(){var e=this;return this.visibleItems.find(function(t){return e.isValidItem(t)})},findLastItem:function(){var e=this;return S(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItem:function(e){var t=this,i=this.visibleItems.findIndex(function(a){return a.key===e.key}),s=i<this.visibleItems.length-1?this.visibleItems.slice(i+1).find(function(a){return t.isValidItem(a)}):void 0;return s||e},findPrevItem:function(e){var t=this,i=this.visibleItems.findIndex(function(a){return a.key===e.key}),s=i>0?S(this.visibleItems.slice(0,i),function(a){return t.isValidItem(a)}):void 0;return s||e},searchItems:function(e,t){var i=this;this.searchValue=(this.searchValue||"")+t;var s=null,a=!1;if(f(this.focusedItem)){var l=this.visibleItems.findIndex(function(o){return o.key===i.focusedItem.key});s=this.visibleItems.slice(l).find(function(o){return i.isItemMatched(o)}),s=H(s)?this.visibleItems.slice(0,l).find(function(o){return i.isItemMatched(o)}):s}else s=this.visibleItems.find(function(o){return i.isItemMatched(o)});return f(s)&&(a=!0),H(s)&&H(this.focusedItem)&&(s=this.findFirstItem()),f(s)&&this.changeFocusedItem({originalEvent:e,processedItem:s,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500),a},changeFocusedItem:function(e){var t=e.originalEvent,i=e.processedItem,s=e.focusOnNext,a=e.selfCheck,l=e.allowHeaderFocus,o=l===void 0?!0:l;f(this.focusedItem)&&this.focusedItem.key!==i.key?(this.focusedItem=i,this.scrollInView()):o&&this.$emit("header-focus",{originalEvent:t,focusOnNext:s,selfCheck:a})},scrollInView:function(){var e=h(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]'));e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateActiveItemPath:function(e){var t=this;this.activeItemPath=Object.entries(e||{}).reduce(function(i,s){var a=re(s,2),l=a[0],o=a[1];if(o){var r=t.findProcessedItemByItemKey(l);r&&i.push(r)}return i},[])},findProcessedItemByItemKey:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(t=t||i===0&&this.processedItems,!t)return null;for(var s=0;s<t.length;s++){var a=t[s];if(this.getItemProp(a,"key")===e)return a;var l=this.findProcessedItemByItemKey(e,a.items,i+1);if(l)return l}},createProcessedItems:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",l=[];return e&&e.forEach(function(o,r){var d=(a!==""?a+"_":"")+r,p={item:o,index:r,level:i,key:d,parent:s,parentKey:a};p.items=t.createProcessedItems(o.items,i+1,p,d),l.push(p)}),l},flatItems:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e&&e.forEach(function(s){t.isVisibleItem(s)&&(i.push(s),t.flatItems(s.items,i))}),i}},computed:{processedItems:function(){return this.createProcessedItems(this.items||[])},visibleItems:function(){return this.flatItems(this.processedItems)},focusedItemId:function(){return f(this.focusedItem)?"".concat(this.panelId,"_").concat(this.focusedItem.key):null}},components:{PanelMenuSub:G}};function ce(n,e,t,i,s,a){var l=T("PanelMenuSub");return c(),b(l,u({id:t.panelId+"_list",class:n.cx("rootList"),role:"tree",tabindex:-1,"aria-activedescendant":s.focused?a.focusedItemId:void 0,panelId:t.panelId,focusedItemId:s.focused?a.focusedItemId:void 0,items:a.processedItems,templates:t.templates,activeItemPath:s.activeItemPath,onFocus:a.onFocus,onBlur:a.onBlur,onKeydown:a.onKeyDown,onItemToggle:a.onItemToggle,onItemMousemove:a.onItemMouseMove,pt:n.pt,unstyled:n.unstyled},n.ptm("rootList")),null,16,["id","class","aria-activedescendant","panelId","focusedItemId","items","templates","activeItemPath","onFocus","onBlur","onKeydown","onItemToggle","onItemMousemove","pt","unstyled"])}R.render=ce;function w(n){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(n)}function M(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,i)}return t}function de(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?M(Object(t),!0).forEach(function(i){me(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function me(n,e,t){return(e=fe(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function fe(n){var e=pe(n,"string");return w(e)=="symbol"?e:e+""}function pe(n,e){if(w(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(w(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var he={name:"PanelMenu",extends:$,inheritAttrs:!1,emits:["update:expandedKeys","panel-open","panel-close"],data:function(){return{activeItem:null,activeItems:[]}},methods:{getItemProp:function(e,t){return e?O(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,t,i){return this.ptm(e,{context:{index:i,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(e){return this.expandedKeys?this.expandedKeys[this.getItemProp(e,"key")]:this.multiple?this.activeItems.some(function(t){return y(e,t)}):y(e,this.activeItem)},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return y(e,this.activeItem)},isItemGroup:function(e){return f(e.items)},getPanelId:function(e){return"".concat(this.$id,"_").concat(e)},getPanelKey:function(e){return this.getPanelId(e)},getHeaderId:function(e){return"".concat(this.getPanelId(e),"_header")},getContentId:function(e){return"".concat(this.getPanelId(e),"_content")},onHeaderClick:function(e,t){if(this.isItemDisabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.changeActiveItem(e,t),P(e.currentTarget)},onHeaderKeyDown:function(e,t){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onHeaderEnterKey(e,t);break}},onHeaderArrowDownKey:function(e){var t=K(e.currentTarget,"data-p-active")===!0?h(e.currentTarget.nextElementSibling,'[data-pc-section="rootlist"]'):null;t?P(t):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()},onHeaderArrowUpKey:function(e){var t=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),i=K(t,"data-p-active")===!0?h(t.nextElementSibling,'[data-pc-section="rootlist"]'):null;i?P(i):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()},onHeaderHomeKey:function(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()},onHeaderEndKey:function(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()},onHeaderEnterKey:function(e,t){var i=h(e.currentTarget,'[data-pc-section="headerlink"]');i?i.click():this.onHeaderClick(e,t),e.preventDefault()},findNextHeader:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=t?e:e.nextElementSibling,s=h(i,'[data-pc-section="header"]');return s?K(s,"data-p-disabled")?this.findNextHeader(s.parentElement):s:null},findPrevHeader:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=t?e:e.previousElementSibling,s=h(i,'[data-pc-section="header"]');return s?K(s,"data-p-disabled")?this.findPrevHeader(s.parentElement):s:null},findFirstHeader:function(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader:function(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader:function(e){var t=e.originalEvent,i=e.focusOnNext,s=e.selfCheck,a=t.currentTarget.closest('[data-pc-section="panel"]'),l=s?h(a,'[data-pc-section="header"]'):i?this.findNextHeader(a):this.findPrevHeader(a);l?this.changeFocusedHeader(t,l):i?this.onHeaderHomeKey(t):this.onHeaderEndKey(t)},changeActiveItem:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(!this.isItemDisabled(t)){var s=this.isItemActive(t),a=s?"panel-close":"panel-open";this.activeItem=i?t:this.activeItem&&y(t,this.activeItem)?null:t,this.multiple&&(this.activeItems.some(function(l){return y(t,l)})?this.activeItems=this.activeItems.filter(function(l){return!y(t,l)}):this.activeItems.push(t)),this.changeExpandedKeys({item:t,expanded:!s}),this.$emit(a,{originalEvent:e,item:t})}},changeExpandedKeys:function(e){var t=e.item,i=e.expanded,s=i===void 0?!1:i;if(this.expandedKeys){var a=de({},this.expandedKeys);s?a[t.key]=!0:delete a[t.key],this.$emit("update:expandedKeys",a)}},changeFocusedHeader:function(e,t){t&&P(t)},getMenuItemProps:function(e,t){return{icon:u({class:[this.cx("headerIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("headerIcon",e,t)),label:u({class:this.cx("headerLabel")},this.getPTOptions("headerLabel",e,t))}}},components:{PanelMenuList:R,ChevronRightIcon:U,ChevronDownIcon:B}},Ie=["id"],ge=["id","tabindex","aria-label","aria-expanded","aria-controls","aria-disabled","onClick","onKeydown","data-p-active","data-p-disabled"],be=["href"],ve=["id","aria-labelledby"];function ye(n,e,t,i,s,a){var l=T("PanelMenuList");return c(),m("div",u({id:n.$id,class:n.cx("root")},n.ptmi("root")),[(c(!0),m(k,null,x(n.model,function(o,r){return c(),m(k,{key:a.getPanelKey(r)},[a.isItemVisible(o)?(c(),m("div",u({key:0,style:a.getItemProp(o,"style"),class:[n.cx("panel"),a.getItemProp(o,"class")]},{ref_for:!0},n.ptm("panel")),[g("div",u({id:a.getHeaderId(r),class:[n.cx("header",{item:o}),a.getItemProp(o,"headerClass")],tabindex:a.isItemDisabled(o)?-1:n.tabindex,role:"button","aria-label":a.getItemLabel(o),"aria-expanded":a.isItemActive(o),"aria-controls":a.getContentId(r),"aria-disabled":a.isItemDisabled(o),onClick:function(p){return a.onHeaderClick(p,o)},onKeydown:function(p){return a.onHeaderKeyDown(p,o)}},{ref_for:!0},a.getPTOptions("header",o,r),{"data-p-active":a.isItemActive(o),"data-p-disabled":a.isItemDisabled(o)}),[g("div",u({class:n.cx("headerContent")},{ref_for:!0},a.getPTOptions("headerContent",o,r)),[n.$slots.item?(c(),b(v(n.$slots.item),{key:1,item:o,root:!0,active:a.isItemActive(o),hasSubmenu:a.isItemGroup(o),label:a.getItemLabel(o),props:a.getMenuItemProps(o,r)},null,8,["item","active","hasSubmenu","label","props"])):(c(),m("a",u({key:0,href:a.getItemProp(o,"url"),class:n.cx("headerLink"),tabindex:-1},{ref_for:!0},a.getPTOptions("headerLink",o,r)),[a.getItemProp(o,"items")?J(n.$slots,"submenuicon",{key:0,active:a.isItemActive(o)},function(){return[(c(),b(v(a.isItemActive(o)?"ChevronDownIcon":"ChevronRightIcon"),u({class:n.cx("submenuIcon")},{ref_for:!0},a.getPTOptions("submenuIcon",o,r)),null,16,["class"]))]}):I("",!0),n.$slots.headericon?(c(),b(v(n.$slots.headericon),{key:1,item:o,class:D([n.cx("headerIcon"),a.getItemProp(o,"icon")])},null,8,["item","class"])):a.getItemProp(o,"icon")?(c(),m("span",u({key:2,class:[n.cx("headerIcon"),a.getItemProp(o,"icon")]},{ref_for:!0},a.getPTOptions("headerIcon",o,r)),null,16)):I("",!0),g("span",u({class:n.cx("headerLabel")},{ref_for:!0},a.getPTOptions("headerLabel",o,r)),V(a.getItemLabel(o)),17)],16,be))],16)],16,ge),E(j,u({name:"p-collapsible"},{ref_for:!0},n.ptm("transition")),{default:_(function(){return[L(g("div",u({id:a.getContentId(r),class:n.cx("contentContainer"),role:"region","aria-labelledby":a.getHeaderId(r)},{ref_for:!0},n.ptm("contentContainer")),[g("div",u({class:n.cx("contentWrapper")},{ref_for:!0},n.ptm("contentWrapper")),[a.getItemProp(o,"items")?(c(),m("div",u({key:0,class:n.cx("content")},{ref_for:!0},n.ptm("content")),[E(l,{panelId:a.getPanelId(r),items:a.getItemProp(o,"items"),templates:n.$slots,expandedKeys:n.expandedKeys,onItemToggle:a.changeExpandedKeys,onHeaderFocus:a.updateFocusedHeader,pt:n.pt,unstyled:n.unstyled},null,8,["panelId","items","templates","expandedKeys","onItemToggle","onHeaderFocus","pt","unstyled"])],16)):I("",!0)],16)],16,ve),[[N,a.isItemActive(o)]])]}),_:2},1040)],16)):I("",!0)],64)}),128))],16,Ie)}he.render=ye;export{he as default};
