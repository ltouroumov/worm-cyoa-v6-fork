import{s as I}from"./ohbBRPhN.js";import{s as g}from"./DtRQ--so.js";import{am as C,ac as i,y as m,X as l,z as a,a2 as d,Y as B,a3 as p,B as w,g as h,A as O,$ as f,a0 as L,C as y,ab as P}from"./CRyIMHD9.js";import"./DQnnyGUv.js";var x=`
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
    }

    .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.color');
        transition: inherit;
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.hover.color');
    }
`,N={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(n){var t=n.instance;return["p-breadcrumb-item",{"p-disabled":t.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},S=C.extend({name:"breadcrumb",style:x,classes:N}),U={name:"BaseBreadcrumb",extends:g,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:S,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},k={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:g,props:{item:null,templates:null,index:null},methods:{onClick:function(n){this.item.command&&this.item.command({originalEvent:n,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var n=this.item,t=n.to,s=n.url,o=typeof window<"u"?window.location.pathname:"";return t===o||s===o?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var n=this;return{action:i({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(s){return n.onClick(s)}},this.ptm("itemLink",this.ptmOptions)),icon:i({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:i({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},A=["href","target","aria-current"];function M(e,n,t,s,o,r){return r.visible()?(a(),m("li",i({key:0,class:[e.cx("item"),t.item.class]},e.ptm("item",r.ptmOptions)),[t.templates.item?(a(),d(p(t.templates.item),{key:1,item:t.item,label:r.label(),props:r.getMenuItemProps},null,8,["item","label","props"])):(a(),m("a",i({key:0,href:t.item.url||"#",class:e.cx("itemLink"),target:t.item.target,"aria-current":r.isCurrentUrl(),onClick:n[0]||(n[0]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},e.ptm("itemLink",r.ptmOptions)),[t.templates&&t.templates.itemicon?(a(),d(p(t.templates.itemicon),{key:0,item:t.item,class:B(e.cx("itemIcon",r.ptmOptions))},null,8,["item","class"])):t.item.icon?(a(),m("span",i({key:1,class:[e.cx("itemIcon"),t.item.icon]},e.ptm("itemIcon",r.ptmOptions)),null,16)):l("",!0),t.item.label?(a(),m("span",i({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",r.ptmOptions)),w(r.label()),17)):l("",!0)],16,A))],16)):l("",!0)}k.render=M;var R={name:"Breadcrumb",extends:U,inheritAttrs:!1,components:{BreadcrumbItem:k,ChevronRightIcon:I}};function V(e,n,t,s,o,r){var u=h("BreadcrumbItem"),v=h("ChevronRightIcon");return a(),m("nav",i({class:e.cx("root")},e.ptmi("root")),[O("ol",i({class:e.cx("list")},e.ptm("list")),[e.home?(a(),d(u,i({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):l("",!0),(a(!0),m(f,null,L(e.model,function(b,c){return a(),m(f,{key:b.label+"_"+c},[e.home||c!==0?(a(),m("li",i({key:0,class:e.cx("separator")},{ref_for:!0},e.ptm("separator")),[P(e.$slots,"separator",{},function(){return[y(v,i({"aria-hidden":"true",class:e.cx("separatorIcon")},{ref_for:!0},e.ptm("separatorIcon")),null,16,["class"])]})],16)):l("",!0),y(u,{item:b,index:c,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}R.render=V;export{R as default};
