import{s as A}from"./CKqUVX48.js";import{s as P}from"./BuGdX6Tg.js";import k from"./trNWF-Vv.js";import _ from"./CxgyJBqd.js";import C from"./Duh67KYe.js";import{s as I}from"./DOKo9Z5P.js";import{am as $,ac as s,g as v,y as f,z as i,ab as x,$ as B,a0 as S,a2 as l,D as u,C as g,Y as w,X as b,a3 as p,B as N}from"./DKPM-x0c.js";import"./CLpHadom.js";import"./WBHKFAd2.js";import"./DsMfNAGv.js";import"./CIcfw3sJ.js";import"./jc0MLXVe.js";import"./ZhWAdK_X.js";var H=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,D={root:"p-accordion p-component"},E=$.extend({name:"accordion",style:H,classes:D}),z={name:"BaseAccordion",extends:I,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:E,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},K={name:"Accordion",extends:z,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e},activeIndex:{immediate:!0,handler:function(e){this.hasAccordionTab&&(this.d_value=this.multiple?e?.map(String):e?.toString())}}},methods:{isItemActive:function(e){var o;return this.multiple?(o=this.d_value)===null||o===void 0?void 0:o.includes(e):this.d_value===e},updateValue:function(e){var o,a=this.isItemActive(e);this.multiple?a?this.d_value=this.d_value.filter(function(d){return d!==e}):this.d_value?this.d_value.push(e):this.d_value=[e]:this.d_value=a?null:e,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(o=this.d_value)===null||o===void 0?void 0:o.map(Number):Number(this.d_value)),this.$emit(a?"tab-close":"tab-open",{originalEvent:void 0,index:Number(e)})},isAccordionTab:function(e){return e.type.name==="AccordionTab"},getTabProp:function(e,o){return e.props?e.props[o]:void 0},getKey:function(e,o){return this.getTabProp(e,"header")||o},getHeaderPT:function(e,o){var a=this;return{root:s({onClick:function(t){return a.onTabClick(t,o)}},this.getTabProp(e,"headerProps"),this.getTabPT(e,"header",o)),toggleicon:s(this.getTabProp(e,"headeractionprops"),this.getTabPT(e,"headeraction",o))}},getContentPT:function(e,o){return{root:s(this.getTabProp(e,"contentProps"),this.getTabPT(e,"toggleablecontent",o)),transition:this.getTabPT(e,"transition",o),content:this.getTabPT(e,"content",o)}},getTabPT:function(e,o,a){var d=this.tabs.length,t={props:e.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:a,count:d,first:a===0,last:a===d-1,active:this.isItemActive("".concat(a))}};return s(this.ptm("accordiontab.".concat(o),t),this.ptmo(this.getTabProp(e,"pt"),o,t))},onTabClick:function(e,o){this.$emit("tab-click",{originalEvent:e,index:o})}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(o,a){return e.isAccordionTab(a)?o.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(d){e.isAccordionTab(d)&&o.push(d)}),o},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:C,AccordionHeader:_,AccordionContent:k,ChevronUpIcon:P,ChevronRightIcon:A}};function F(n,e,o,a,d,t){var m=v("AccordionHeader"),T=v("AccordionContent"),y=v("AccordionPanel");return i(),f("div",s({class:n.cx("root")},n.ptmi("root")),[t.hasAccordionTab?(i(!0),f(B,{key:0},S(t.tabs,function(r,c){return i(),l(y,{key:t.getKey(r,c),value:"".concat(c),pt:{root:t.getTabPT(r,"root",c)},disabled:t.getTabProp(r,"disabled")},{default:u(function(){return[g(m,{class:w(t.getTabProp(r,"headerClass")),pt:t.getHeaderPT(r,c)},{toggleicon:u(function(h){return[h.active?(i(),l(p(n.$slots.collapseicon?n.$slots.collapseicon:n.collapseIcon?"span":"ChevronDownIcon"),s({key:0,class:[n.collapseIcon,h.class],"aria-hidden":"true"},{ref_for:!0},t.getTabPT(r,"headericon",c)),null,16,["class"])):(i(),l(p(n.$slots.expandicon?n.$slots.expandicon:n.expandIcon?"span":"ChevronUpIcon"),s({key:1,class:[n.expandIcon,h.class],"aria-hidden":"true"},{ref_for:!0},t.getTabPT(r,"headericon",c)),null,16,["class"]))]}),default:u(function(){return[r.children&&r.children.headericon?(i(),l(p(r.children.headericon),{key:0,isTabActive:t.isItemActive("".concat(c)),active:t.isItemActive("".concat(c)),index:c},null,8,["isTabActive","active","index"])):b("",!0),r.props&&r.props.header?(i(),f("span",s({key:1,ref_for:!0},t.getTabPT(r,"headertitle",c)),N(r.props.header),17)):b("",!0),r.children&&r.children.header?(i(),l(p(r.children.header),{key:2})):b("",!0)]}),_:2},1032,["class","pt"]),g(T,{pt:t.getContentPT(r,c)},{default:u(function(){return[(i(),l(p(r)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):x(n.$slots,"default",{key:1})],16)}K.render=F;export{K as default};
