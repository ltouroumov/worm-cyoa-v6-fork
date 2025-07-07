import{s as I}from"./e-Y3xTfP.js";import{s as g}from"./CA5aLBJS.js";import{af as C,av as i,t as m,X as l,v as a,a1 as u,W as B,a2 as p,y as $,g as h,x as w,Z as f,$ as O,z as y,at as L}from"./DEES2_7q.js";import"./ByGRW8N_.js";var x=({dt:e})=>`
.p-breadcrumb {
    background: ${e("breadcrumb.background")};
    padding: ${e("breadcrumb.padding")};
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: ${e("breadcrumb.gap")};
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    color: ${e("breadcrumb.separator.color")};
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
    gap: ${e("breadcrumb.item.gap")};
    transition: background ${e("breadcrumb.transition.duration")}, color ${e("breadcrumb.transition.duration")}, outline-color ${e("breadcrumb.transition.duration")}, box-shadow ${e("breadcrumb.transition.duration")};
    border-radius: ${e("breadcrumb.item.border.radius")};
    outline-color: transparent;
    color: ${e("breadcrumb.item.color")};
}

.p-breadcrumb-item-link:focus-visible {
    box-shadow: ${e("breadcrumb.item.focus.ring.shadow")};
    outline: ${e("breadcrumb.item.focus.ring.width")} ${e("breadcrumb.item.focus.ring.style")} ${e("breadcrumb.item.focus.ring.color")};
    outline-offset: ${e("breadcrumb.item.focus.ring.offset")};
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
    color: ${e("breadcrumb.item.hover.color")};
}

.p-breadcrumb-item-label {
    transition: inherit;
}

.p-breadcrumb-item-icon {
    color: ${e("breadcrumb.item.icon.color")};
    transition: inherit;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
    color: ${e("breadcrumb.item.icon.hover.color")};
}
`,P={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(r){var t=r.instance;return["p-breadcrumb-item",{"p-disabled":t.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},N=C.extend({name:"breadcrumb",style:x,classes:P}),S={name:"BaseBreadcrumb",extends:g,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:N,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},v={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:g,props:{item:null,templates:null,index:null},methods:{onClick:function(r){this.item.command&&this.item.command({originalEvent:r,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var r=this.item,t=r.to,s=r.url,o=typeof window<"u"?window.location.pathname:"";return t===o||s===o?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var r=this;return{action:i({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(s){return r.onClick(s)}},this.ptm("itemLink",this.ptmOptions)),icon:i({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:i({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},U=["href","target","aria-current"];function M(e,r,t,s,o,n){return n.visible()?(a(),m("li",i({key:0,class:[e.cx("item"),t.item.class]},e.ptm("item",n.ptmOptions)),[t.templates.item?(a(),u(p(t.templates.item),{key:1,item:t.item,label:n.label(),props:n.getMenuItemProps},null,8,["item","label","props"])):(a(),m("a",i({key:0,href:t.item.url||"#",class:e.cx("itemLink"),target:t.item.target,"aria-current":n.isCurrentUrl(),onClick:r[0]||(r[0]=function(){return n.onClick&&n.onClick.apply(n,arguments)})},e.ptm("itemLink",n.ptmOptions)),[t.templates&&t.templates.itemicon?(a(),u(p(t.templates.itemicon),{key:0,item:t.item,class:B(e.cx("itemIcon",n.ptmOptions))},null,8,["item","class"])):t.item.icon?(a(),m("span",i({key:1,class:[e.cx("itemIcon"),t.item.icon]},e.ptm("itemIcon",n.ptmOptions)),null,16)):l("",!0),t.item.label?(a(),m("span",i({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",n.ptmOptions)),$(n.label()),17)):l("",!0)],16,U))],16)):l("",!0)}v.render=M;var R={name:"Breadcrumb",extends:S,inheritAttrs:!1,components:{BreadcrumbItem:v,ChevronRightIcon:I}};function V(e,r,t,s,o,n){var d=h("BreadcrumbItem"),k=h("ChevronRightIcon");return a(),m("nav",i({class:e.cx("root")},e.ptmi("root")),[w("ol",i({class:e.cx("list")},e.ptm("list")),[e.home?(a(),u(d,i({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):l("",!0),(a(!0),m(f,null,O(e.model,function(b,c){return a(),m(f,{key:b.label+"_"+c},[e.home||c!==0?(a(),m("li",i({key:0,class:e.cx("separator"),ref_for:!0},e.ptm("separator")),[L(e.$slots,"separator",{},function(){return[y(k,i({"aria-hidden":"true",class:e.cx("separatorIcon"),ref_for:!0},e.ptm("separatorIcon")),null,16,["class"])]})],16)):l("",!0),y(d,{item:b,index:c,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}R.render=V;export{R as default};
