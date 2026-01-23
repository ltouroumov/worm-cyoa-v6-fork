import{am as h,ax as B,g as c,y as w,z as f,C as r,aC as m,D as o,ab as i,Y as a,A as v,ac as s,a2 as $,a3 as S}from"./CRyIMHD9.js";import{s as C}from"./BqeyNZXa.js";import D from"./BtgTkROP.js";import k from"./DQ4_Yfqf.js";import{s as I}from"./DtRQ--so.js";import"./DQnnyGUv.js";import"./Blyx9LFc.js";import"./CerxV63u.js";import"./ZhWAdK_X.js";import"./Yj_2VITT.js";import"./-v8K-QF4.js";import"./jc0MLXVe.js";import"./CLs7nh7g.js";import"./CJb-wsJH.js";import"./DMxPzpgf.js";import"./DkiAaU-x.js";import"./CzcfqDV8.js";var g=`
    .p-splitbutton {
        display: inline-flex;
        position: relative;
        border-radius: dt('splitbutton.border.radius');
    }

    .p-splitbutton-button.p-button {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
        border-inline-end: 0 none;
    }

    .p-splitbutton-button.p-button:focus-visible,
    .p-splitbutton-dropdown.p-button:focus-visible {
        z-index: 1;
    }

    .p-splitbutton-button.p-button:not(:disabled):hover,
    .p-splitbutton-button.p-button:not(:disabled):active {
        border-inline-end: 0 none;
    }

    .p-splitbutton-dropdown.p-button {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-splitbutton-fluid {
        display: flex;
    }

    .p-splitbutton-rounded .p-splitbutton-dropdown.p-button {
        border-start-end-radius: dt('splitbutton.rounded.border.radius');
        border-end-end-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-rounded .p-splitbutton-button.p-button {
        border-start-start-radius: dt('splitbutton.rounded.border.radius');
        border-end-start-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-raised {
        box-shadow: dt('splitbutton.raised.shadow');
    }
`,z={root:function(t){var d=t.instance,u=t.props;return["p-splitbutton p-component",{"p-splitbutton-raised":u.raised,"p-splitbutton-rounded":u.rounded,"p-splitbutton-fluid":d.hasFluid}]},pcButton:"p-splitbutton-button",pcDropdown:"p-splitbutton-dropdown"},V=h.extend({name:"splitbutton",style:g,classes:z}),Z={name:"BaseSplitButton",extends:I,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1},fluid:{type:Boolean,default:null},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:V,provide:function(){return{$pcSplitButton:this,$parentInstance:this}}},E={name:"SplitButton",extends:Z,inheritAttrs:!1,emits:["click"],inject:{$pcFluid:{default:null}},data:function(){return{isExpanded:!1}},mounted:function(){var t=this;this.$watch("$refs.menu.visible",function(d){t.isExpanded=d})},methods:{onDropdownButtonClick:function(t){t&&t.preventDefault(),this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=this.$refs.menu.visible},onDropdownKeydown:function(t){(t.code==="ArrowDown"||t.code==="ArrowUp")&&(this.onDropdownButtonClick(),t.preventDefault())},onDefaultButtonClick:function(t){this.isExpanded&&this.$refs.menu.hide(t),this.$emit("click",t)}},computed:{containerClass:function(){return[this.cx("root"),this.class]},hasFluid:function(){return B(this.fluid)?!!this.$pcFluid:this.fluid}},components:{PVSButton:D,PVSMenu:k,ChevronDownIcon:C}},T=["data-p-severity"];function A(n,t,d,u,p,l){var b=c("PVSButton"),y=c("PVSMenu");return f(),w("div",s({class:l.containerClass,style:n.style},n.ptmi("root"),{"data-p-severity":n.severity}),[r(b,s({type:"button",class:n.cx("pcButton"),label:n.label,disabled:n.disabled,severity:n.severity,text:n.text,icon:n.icon,outlined:n.outlined,size:n.size,fluid:n.fluid,"aria-label":n.label,onClick:l.onDefaultButtonClick},n.buttonProps,{pt:n.ptm("pcButton"),unstyled:n.unstyled}),m({default:o(function(){return[i(n.$slots,"default")]}),_:2},[n.$slots.icon?{name:"icon",fn:o(function(e){return[i(n.$slots,"icon",{class:a(e.class)},function(){return[v("span",s({class:[n.icon,e.class]},n.ptm("pcButton").icon,{"data-pc-section":"buttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","label","disabled","severity","text","icon","outlined","size","fluid","aria-label","onClick","pt","unstyled"]),r(b,s({ref:"button",type:"button",class:n.cx("pcDropdown"),disabled:n.disabled,"aria-haspopup":"true","aria-expanded":p.isExpanded,"aria-controls":p.isExpanded?n.$id+"_overlay":void 0,onClick:l.onDropdownButtonClick,onKeydown:l.onDropdownKeydown,severity:n.severity,text:n.text,outlined:n.outlined,size:n.size,unstyled:n.unstyled},n.menuButtonProps,{pt:n.ptm("pcDropdown")}),{icon:o(function(e){return[i(n.$slots,n.$slots.dropdownicon?"dropdownicon":"menubuttonicon",{class:a(e.class)},function(){return[(f(),$(S(n.menuButtonIcon||n.dropdownIcon?"span":"ChevronDownIcon"),s({class:[n.dropdownIcon||n.menuButtonIcon,e.class]},n.ptm("pcDropdown").icon,{"data-pc-section":"menubuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-expanded","aria-controls","onClick","onKeydown","severity","text","outlined","size","unstyled","pt"]),r(y,{ref:"menu",id:n.$id+"_overlay",model:n.model,popup:!0,autoZIndex:n.autoZIndex,baseZIndex:n.baseZIndex,appendTo:n.appendTo,unstyled:n.unstyled,pt:n.ptm("pcMenu")},m({_:2},[n.$slots.menuitemicon?{name:"itemicon",fn:o(function(e){return[i(n.$slots,"menuitemicon",{item:e.item,class:a(e.class)})]}),key:"0"}:void 0,n.$slots.item?{name:"item",fn:o(function(e){return[i(n.$slots,"item",{item:e.item,hasSubmenu:e.hasSubmenu,label:e.label,props:e.props})]}),key:"1"}:void 0]),1032,["id","model","autoZIndex","baseZIndex","appendTo","unstyled","pt"])],16,T)}E.render=A;export{E as default};
