import{am as B,bi as a,aq as l,as as R,av as S,bc as C,aQ as H,aF as K,g as j,az as P,a2 as g,z as c,D as p,C as y,aB as F,ac as r,a9 as I,X as w,y as u,ab as f,$ as D,A as m,a3 as z,Y as T,B as N,aC as A}from"./BWIH5MBJ.js";import{x as L}from"./CLs7nh7g.js";import{C as U}from"./BCsZib27.js";import V from"./BSLb12W9.js";import{F as Y}from"./D4TAhsup.js";import{O as q}from"./UyA0PUQ7.js";import{s as Q}from"./DmkudeqT.js";import{s as W}from"./jw7iGpfZ.js";import"./BQhSPkoy.js";import"./tuLF93f7.js";import"./DLHbj_16.js";import"./ZhWAdK_X.js";import"./DM4lIH5R.js";import"./9dxaLjyM.js";import"./jc0MLXVe.js";var X=`
    .p-confirmpopup {
        position: absolute;
        margin-top: dt('confirmpopup.gutter');
        top: 0;
        left: 0;
        background: dt('confirmpopup.background');
        color: dt('confirmpopup.color');
        border: 1px solid dt('confirmpopup.border.color');
        border-radius: dt('confirmpopup.border.radius');
        box-shadow: dt('confirmpopup.shadow');
    }

    .p-confirmpopup-content {
        display: flex;
        align-items: center;
        padding: dt('confirmpopup.content.padding');
        gap: dt('confirmpopup.content.gap');
    }

    .p-confirmpopup-icon {
        font-size: dt('confirmpopup.icon.size');
        width: dt('confirmpopup.icon.size');
        height: dt('confirmpopup.icon.size');
        color: dt('confirmpopup.icon.color');
    }

    .p-confirmpopup-footer {
        display: flex;
        justify-content: flex-end;
        gap: dt('confirmpopup.footer.gap');
        padding: dt('confirmpopup.footer.padding');
    }

    .p-confirmpopup-footer button {
        width: auto;
    }

    .p-confirmpopup-footer button:last-child {
        margin: 0;
    }

    .p-confirmpopup-flipped {
        margin-block-start: calc(dt('confirmpopup.gutter') * -1);
        margin-block-end: dt('confirmpopup.gutter');
    }

    .p-confirmpopup-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-confirmpopup-leave-to {
        opacity: 0;
    }

    .p-confirmpopup-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-confirmpopup-leave-active {
        transition: opacity 0.1s linear;
    }

    .p-confirmpopup:after,
    .p-confirmpopup:before {
        bottom: 100%;
        left: calc(dt('confirmpopup.arrow.offset') + dt('confirmpopup.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-confirmpopup:after {
        border-width: calc(dt('confirmpopup.gutter') - 2px);
        margin-left: calc(-1 * (dt('confirmpopup.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.background');
    }

    .p-confirmpopup:before {
        border-width: dt('confirmpopup.gutter');
        margin-left: calc(-1 * dt('confirmpopup.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.border.color');
    }

    .p-confirmpopup-flipped:after,
    .p-confirmpopup-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-confirmpopup-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.background');
    }

    .p-confirmpopup-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.border.color');
    }
`,G={root:"p-confirmpopup p-component",content:"p-confirmpopup-content",icon:"p-confirmpopup-icon",message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},J=B.extend({name:"confirmpopup",style:X,classes:G}),M={name:"BaseConfirmPopup",extends:W,props:{group:String},style:J,provide:function(){return{$pcConfirmPopup:this,$parentInstance:this}}},Z={name:"ConfirmPopup",extends:M,inheritAttrs:!1,data:function(){return{visible:!1,confirmation:null,autoFocusAccept:null,autoFocusReject:null,target:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted:function(){var n=this;this.confirmListener=function(o){o&&o.group===n.group&&(n.confirmation=o,n.target=o.target,n.confirmation.onShow&&n.confirmation.onShow(),n.visible=!0)},this.closeListener=function(){n.visible=!1,n.confirmation=null},a.on("confirm",this.confirmListener),a.on("close",this.closeListener)},beforeUnmount:function(){a.off("confirm",this.confirmListener),a.off("close",this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.container&&(L.clear(this.container),this.container=null),this.target=null,this.confirmation=null},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},onAcceptKeydown:function(n){(n.code==="Space"||n.code==="Enter"||n.code==="NumpadEnter")&&(this.accept(),l(this.target),n.preventDefault())},onRejectKeydown:function(n){(n.code==="Space"||n.code==="Enter"||n.code==="NumpadEnter")&&(this.reject(),l(this.target),n.preventDefault())},onEnter:function(n){this.autoFocusAccept=this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept",this.autoFocusReject=this.confirmation.defaultFocus==="reject",this.target=this.target||document.activeElement,this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),L.set("overlay",n,this.$primevue.config.zIndex.overlay)},onAfterEnter:function(){this.focus()},onLeave:function(){this.autoFocusAccept=null,this.autoFocusReject=null,l(this.target),this.target=null,this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave:function(n){L.clear(n)},alignOverlay:function(){S(this.container,this.target,!1);var n=C(this.container),o=C(this.target),d=0;n.left<o.left&&(d=o.left-n.left),this.container.style.setProperty(H("confirmpopup.arrow.left").name,"".concat(d,"px")),n.top<o.top&&(this.container.setAttribute("data-p-confirmpopup-flipped","true"),!this.isUnstyled&&K(this.container,"p-confirmpopup-flipped"))},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(o){n.visible&&n.container&&!n.container.contains(o.target)&&!n.isTargetClicked(o)?(n.confirmation.onHide&&n.confirmation.onHide(),n.visible=!1):n.alignOverlay()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var n=this;this.scrollHandler||(this.scrollHandler=new U(this.target,function(){n.visible&&(n.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var n=this;this.resizeListener||(this.resizeListener=function(){n.visible&&!R()&&(n.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},focus:function(){var n=this.container.querySelector("[autofocus]");n&&n.focus({preventScroll:!0})},isTargetClicked:function(n){return this.target&&(this.target===n.target||this.target.contains(n.target))},containerRef:function(n){this.container=n},onOverlayClick:function(n){q.emit("overlay-click",{originalEvent:n,target:this.target})},onOverlayKeydown:function(n){n.code==="Escape"&&(a.emit("close",this.closeListener),l(this.target))}},computed:{message:function(){return this.confirmation?this.confirmation.message:null},acceptLabel:function(){if(this.confirmation){var n,o=this.confirmation;return o.acceptLabel||((n=o.acceptProps)===null||n===void 0?void 0:n.label)||this.$primevue.config.locale.accept}return this.$primevue.config.locale.accept},rejectLabel:function(){if(this.confirmation){var n,o=this.confirmation;return o.rejectLabel||((n=o.rejectProps)===null||n===void 0?void 0:n.label)||this.$primevue.config.locale.reject}return this.$primevue.config.locale.reject},acceptIcon:function(){var n;return this.confirmation?this.confirmation.acceptIcon:(n=this.confirmation)!==null&&n!==void 0&&n.acceptProps?this.confirmation.acceptProps.icon:null},rejectIcon:function(){var n;return this.confirmation?this.confirmation.rejectIcon:(n=this.confirmation)!==null&&n!==void 0&&n.rejectProps?this.confirmation.rejectProps.icon:null}},components:{Button:V,Portal:Q},directives:{focustrap:Y}},$=["aria-modal"];function x(e,n,o,d,i,t){var k=j("Button"),E=j("Portal"),O=P("focustrap");return c(),g(E,null,{default:p(function(){return[y(F,r({name:"p-confirmpopup",onEnter:t.onEnter,onAfterEnter:t.onAfterEnter,onLeave:t.onLeave,onAfterLeave:t.onAfterLeave},e.ptm("transition")),{default:p(function(){var h,b,v;return[i.visible?I((c(),u("div",r({key:0,ref:t.containerRef,role:"alertdialog",class:e.cx("root"),"aria-modal":i.visible,onClick:n[2]||(n[2]=function(){return t.onOverlayClick&&t.onOverlayClick.apply(t,arguments)}),onKeydown:n[3]||(n[3]=function(){return t.onOverlayKeydown&&t.onOverlayKeydown.apply(t,arguments)})},e.ptmi("root")),[e.$slots.container?f(e.$slots,"container",{key:0,message:i.confirmation,acceptCallback:t.accept,rejectCallback:t.reject}):(c(),u(D,{key:1},[e.$slots.message?(c(),g(z(e.$slots.message),{key:1,message:i.confirmation},null,8,["message"])):(c(),u("div",r({key:0,class:e.cx("content")},e.ptm("content")),[f(e.$slots,"icon",{},function(){return[e.$slots.icon?(c(),g(z(e.$slots.icon),{key:0,class:T(e.cx("icon"))},null,8,["class"])):i.confirmation.icon?(c(),u("span",r({key:1,class:[i.confirmation.icon,e.cx("icon")]},e.ptm("icon")),null,16)):w("",!0)]}),m("span",r({class:e.cx("message")},e.ptm("message")),N(i.confirmation.message),17)],16)),m("div",r({class:e.cx("footer")},e.ptm("footer")),[y(k,r({class:[e.cx("pcRejectButton"),i.confirmation.rejectClass],autofocus:i.autoFocusReject,unstyled:e.unstyled,size:((h=i.confirmation.rejectProps)===null||h===void 0?void 0:h.size)||"small",text:((b=i.confirmation.rejectProps)===null||b===void 0?void 0:b.text)||!1,onClick:n[0]||(n[0]=function(s){return t.reject()}),onKeydown:t.onRejectKeydown},i.confirmation.rejectProps,{label:t.rejectLabel,pt:e.ptm("pcRejectButton")}),A({_:2},[t.rejectIcon||e.$slots.rejecticon?{name:"icon",fn:p(function(s){return[f(e.$slots,"rejecticon",{},function(){return[m("span",r({class:[t.rejectIcon,s.class]},e.ptm("pcRejectButton").icon,{"data-pc-section":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","size","text","onKeydown","label","pt"]),y(k,r({class:[e.cx("pcAcceptButton"),i.confirmation.acceptClass],autofocus:i.autoFocusAccept,unstyled:e.unstyled,size:((v=i.confirmation.acceptProps)===null||v===void 0?void 0:v.size)||"small",onClick:n[1]||(n[1]=function(s){return t.accept()}),onKeydown:t.onAcceptKeydown},i.confirmation.acceptProps,{label:t.acceptLabel,pt:e.ptm("pcAcceptButton")}),A({_:2},[t.acceptIcon||e.$slots.accepticon?{name:"icon",fn:p(function(s){return[f(e.$slots,"accepticon",{},function(){return[m("span",r({class:[t.acceptIcon,s.class]},e.ptm("pcAcceptButton").icon,{"data-pc-section":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","size","onKeydown","label","pt"])],16)],64))],16,$)),[[O]]):w("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3})}Z.render=x;export{Z as default};
