import{am as d,bx as f,g as m,a2 as o,z as r,D as a,X as h,ac as i,ab as v,Y as b,a3 as L,aB as y}from"./DKPM-x0c.js";import{x as s}from"./CLs7nh7g.js";import{s as S}from"./BuGdX6Tg.js";import w from"./F14tsVHu.js";import{s as g}from"./DOKo9Z5P.js";import"./CLpHadom.js";import"./DsbzfPNq.js";import"./C238T0YF.js";import"./ZhWAdK_X.js";import"./DsMfNAGv.js";import"./CIcfw3sJ.js";import"./jc0MLXVe.js";var k=`
    .p-scrolltop.p-button {
        position: fixed !important;
        inset-block-end: 20px;
        inset-inline-end: 20px;
    }

    .p-scrolltop-sticky.p-button {
        position: sticky !important;
        display: flex;
        margin-inline-start: auto;
    }

    .p-scrolltop-enter-from {
        opacity: 0;
    }

    .p-scrolltop-enter-active {
        transition: opacity 0.15s;
    }

    .p-scrolltop.p-scrolltop-leave-to {
        opacity: 0;
    }

    .p-scrolltop-leave-active {
        transition: opacity 0.15s;
    }
`,E={root:function(n){var l=n.props;return["p-scrolltop",{"p-scrolltop-sticky":l.target!=="window"}]},icon:"p-scrolltop-icon"},$=d.extend({name:"scrolltop",style:k,classes:E}),C={name:"BaseScrollTop",extends:g,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:$,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},T={name:"ScrollTop",extends:C,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(s.clear(this.container),this.overlay=null)},methods:{onClick:function(){var n=this.target==="window"?window:this.$el.parentElement;n.scroll({top:0,behavior:this.behavior})},checkVisibility:function(n){n>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var n=this;this.scrollListener=function(){n.checkVisibility(n.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var n=this;this.scrollListener=function(){n.checkVisibility(f())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(n){s.set("overlay",n,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(n){s.clear(n)},containerRef:function(n){this.container=n?n.$el:void 0}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:S,Button:w}};function A(e,n,l,P,c,t){var p=m("Button");return r(),o(y,i({name:"p-scrolltop",appear:"",onEnter:t.onEnter,onAfterLeave:t.onAfterLeave},e.ptm("transition")),{default:a(function(){return[c.visible?(r(),o(p,i({key:0,ref:t.containerRef,class:e.cx("root"),onClick:t.onClick,"aria-label":t.scrollTopAriaLabel,unstyled:e.unstyled},e.buttonProps,{pt:e.ptm("root")}),{icon:a(function(u){return[v(e.$slots,"icon",{class:b(e.cx("icon"))},function(){return[(r(),o(L(e.icon?"span":"ChevronUpIcon"),i({class:[e.cx("icon"),e.icon,u.class]},e.ptm("root").icon,{"data-pc-section":"icon"}),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):h("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}T.render=A;export{T as default};
