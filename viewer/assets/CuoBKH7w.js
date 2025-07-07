import{af as h,aq as B,g as f,t as v,v as b,z as r,ax as c,A as o,at as i,W as u,x as w,av as s,a1 as $,a2 as S}from"./BJ_rnWsM.js";import{s as C}from"./DUlYJomC.js";import D from"./DY_ndVam.js";import k from"./Ckr8D6u1.js";import{s as I}from"./A8AViyYJ.js";import"./Dka6TfxS.js";import"./Be1fzYNM.js";import"./BSBFk0M8.js";import"./Djkz4vTg.js";import"./DsvhQ1oI.js";import"./CxD9S56h.js";import"./DmfvTtO6.js";import"./DGEOgZpe.js";import"./DPyv4_Uw.js";import"./DXy7lZUH.js";import"./D8X2o2Df.js";import"./BeRUHc8L.js";var g=({dt:n})=>`
.p-splitbutton {
    display: inline-flex;
    position: relative;
    border-radius: ${n("splitbutton.border.radius")};
}

.p-splitbutton-button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    border-inline-end: 0 none;
}

.p-splitbutton-button:focus-visible,
.p-splitbutton-dropdown:focus-visible {
    z-index: 1;
}

.p-splitbutton-button:not(:disabled):hover,
.p-splitbutton-button:not(:disabled):active {
    border-inline-end: 0 none;
}

.p-splitbutton-dropdown {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-splitbutton-fluid {
    display: flex;
}

.p-splitbutton-rounded .p-splitbutton-dropdown {
    border-start-end-radius: ${n("splitbutton.rounded.border.radius")};
    border-end-end-radius: ${n("splitbutton.rounded.border.radius")};
}

.p-splitbutton-rounded .p-splitbutton-button {
    border-start-start-radius: ${n("splitbutton.rounded.border.radius")};
    border-end-start-radius: ${n("splitbutton.rounded.border.radius")};
}

.p-splitbutton-raised {
    box-shadow: ${n("splitbutton.raised.shadow")};
}
`,z={root:function(t){var l=t.instance,a=t.props;return["p-splitbutton p-component",{"p-splitbutton-raised":a.raised,"p-splitbutton-rounded":a.rounded,"p-splitbutton-fluid":l.hasFluid}]},pcButton:"p-splitbutton-button",pcDropdown:"p-splitbutton-dropdown"},V=h.extend({name:"splitbutton",style:g,classes:z}),Z={name:"BaseSplitButton",extends:I,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1},fluid:{type:Boolean,default:null},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:V,provide:function(){return{$pcSplitButton:this,$parentInstance:this}}},E={name:"SplitButton",extends:Z,inheritAttrs:!1,emits:["click"],inject:{$pcFluid:{default:null}},data:function(){return{isExpanded:!1}},mounted:function(){var t=this;this.$watch("$refs.menu.visible",function(l){t.isExpanded=l})},methods:{onDropdownButtonClick:function(t){t&&t.preventDefault(),this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=this.$refs.menu.visible},onDropdownKeydown:function(t){(t.code==="ArrowDown"||t.code==="ArrowUp")&&(this.onDropdownButtonClick(),t.preventDefault())},onDefaultButtonClick:function(t){this.isExpanded&&this.$refs.menu.hide(t),this.$emit("click",t)}},computed:{containerClass:function(){return[this.cx("root"),this.class]},hasFluid:function(){return B(this.fluid)?!!this.$pcFluid:this.fluid}},components:{PVSButton:D,PVSMenu:k,ChevronDownIcon:C}},T=["data-p-severity"];function A(n,t,l,a,m,d){var p=f("PVSButton"),y=f("PVSMenu");return b(),v("div",s({class:d.containerClass,style:n.style},n.ptmi("root"),{"data-p-severity":n.severity}),[r(p,s({type:"button",class:n.cx("pcButton"),label:n.label,disabled:n.disabled,severity:n.severity,text:n.text,icon:n.icon,outlined:n.outlined,size:n.size,fluid:n.fluid,"aria-label":n.label,onClick:d.onDefaultButtonClick},n.buttonProps,{pt:n.ptm("pcButton"),unstyled:n.unstyled}),c({default:o(function(){return[i(n.$slots,"default")]}),_:2},[n.$slots.icon?{name:"icon",fn:o(function(e){return[i(n.$slots,"icon",{class:u(e.class)},function(){return[w("span",s({class:[n.icon,e.class]},n.ptm("pcButton").icon,{"data-pc-section":"buttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","label","disabled","severity","text","icon","outlined","size","fluid","aria-label","onClick","pt","unstyled"]),r(p,s({ref:"button",type:"button",class:n.cx("pcDropdown"),disabled:n.disabled,"aria-haspopup":"true","aria-expanded":m.isExpanded,"aria-controls":n.$id+"_overlay",onClick:d.onDropdownButtonClick,onKeydown:d.onDropdownKeydown,severity:n.severity,text:n.text,outlined:n.outlined,size:n.size,unstyled:n.unstyled},n.menuButtonProps,{pt:n.ptm("pcDropdown")}),{icon:o(function(e){return[i(n.$slots,n.$slots.dropdownicon?"dropdownicon":"menubuttonicon",{class:u(e.class)},function(){return[(b(),$(S(n.menuButtonIcon||n.dropdownIcon?"span":"ChevronDownIcon"),s({class:[n.dropdownIcon||n.menuButtonIcon,e.class]},n.ptm("pcDropdown").icon,{"data-pc-section":"menubuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-expanded","aria-controls","onClick","onKeydown","severity","text","outlined","size","unstyled","pt"]),r(y,{ref:"menu",id:n.$id+"_overlay",model:n.model,popup:!0,autoZIndex:n.autoZIndex,baseZIndex:n.baseZIndex,appendTo:n.appendTo,unstyled:n.unstyled,pt:n.ptm("pcMenu")},c({_:2},[n.$slots.menuitemicon?{name:"itemicon",fn:o(function(e){return[i(n.$slots,"menuitemicon",{item:e.item,class:u(e.class)})]}),key:"0"}:void 0,n.$slots.item?{name:"item",fn:o(function(e){return[i(n.$slots,"item",{item:e.item,hasSubmenu:e.hasSubmenu,label:e.label,props:e.props})]}),key:"1"}:void 0]),1032,["id","model","autoZIndex","baseZIndex","appendTo","unstyled","pt"])],16,T)}E.render=A;export{E as default};
