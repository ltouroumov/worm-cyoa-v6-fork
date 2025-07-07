import{c as d}from"./Be1fzYNM.js";import{s as h}from"./DQljs1fO.js";import{s as m}from"./CcoDSO_5.js";import{af as u,t as c,X as r,v as o,at as s,a1 as l,av as i,a2 as p,y as g}from"./BZwby5eq.js";import"./4MKSu4WY.js";var v=({dt:e})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${e("chip.background")};
    color: ${e("chip.color")};
    border-radius: ${e("chip.border.radius")};
    padding-block: ${e("chip.padding.y")};
    padding-inline: ${e("chip.padding.x")};
    gap: ${e("chip.gap")};
}

.p-chip-icon {
    color: ${e("chip.icon.color")};
    font-size: ${e("chip.icon.font.size")};
    width: ${e("chip.icon.size")};
    height: ${e("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${e("chip.image.width")};
    height: ${e("chip.image.height")};
    margin-inline-start: calc(-1 * ${e("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${e("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-block-start: calc(${e("chip.padding.y")} / 2);
    padding-block-end: calc(${e("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${e("chip.remove.icon.size")};
    width: ${e("chip.remove.icon.size")};
    height: ${e("chip.remove.icon.size")};
    color: ${e("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${e("chip.transition.duration")}, box-shadow ${e("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${e("chip.remove.icon.focus.ring.shadow")};
    outline: ${e("chip.remove.icon.focus.ring.width")} ${e("chip.remove.icon.focus.ring.style")} ${e("chip.remove.icon.focus.ring.color")};
    outline-offset: ${e("chip.remove.icon.focus.ring.offset")};
}
`,f={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},y=u.extend({name:"chip",style:v,classes:f}),$={name:"BaseChip",extends:m,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:y,provide:function(){return{$pcChip:this,$parentInstance:this}}},b={name:"Chip",extends:$,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(n){(n.key==="Enter"||n.key==="Backspace")&&this.close(n)},close:function(n){this.visible=!1,this.$emit("remove",n)}},computed:{dataP:function(){return d({removable:this.removable})}},components:{TimesCircleIcon:h}},k=["aria-label","data-p"],w=["src"];function C(e,n,I,z,t,a){return t.visible?(o(),c("div",i({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root"),{"data-p":a.dataP}),[s(e.$slots,"default",{},function(){return[e.image?(o(),c("img",i({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,w)):e.$slots.icon?(o(),l(p(e.$slots.icon),i({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(o(),c("span",i({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):r("",!0),e.label?(o(),c("div",i({key:3,class:e.cx("label")},e.ptm("label")),g(e.label),17)):r("",!0)]}),e.removable?s(e.$slots,"removeicon",{key:0,removeCallback:a.close,keydownCallback:a.onKeydown},function(){return[(o(),l(p(e.removeIcon?"span":"TimesCircleIcon"),i({class:[e.cx("removeIcon"),e.removeIcon],onClick:a.close,onKeydown:a.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):r("",!0)],16,k)):r("",!0)}b.render=C;export{b as default};
