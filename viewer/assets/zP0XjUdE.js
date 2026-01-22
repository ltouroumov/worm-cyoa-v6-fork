import{s as d}from"./DFni3GdF.js";import{s as h}from"./jw7iGpfZ.js";import{am as m,y as r,X as c,z as i,ab as t,a2 as s,ac as o,a3 as l,B as u}from"./BWIH5MBJ.js";import{f as g}from"./ZhWAdK_X.js";import"./tuLF93f7.js";var v=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,f={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},y=m.extend({name:"chip",style:v,classes:f}),b={name:"BaseChip",extends:h,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:y,provide:function(){return{$pcChip:this,$parentInstance:this}}},k={name:"Chip",extends:b,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(n){(n.key==="Enter"||n.key==="Backspace")&&this.close(n)},close:function(n){this.visible=!1,this.$emit("remove",n)}},computed:{dataP:function(){return g({removable:this.removable})}},components:{TimesCircleIcon:d}},w=["aria-label","data-p"],C=["src"];function z(e,n,I,B,p,a){return p.visible?(i(),r("div",o({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root"),{"data-p":a.dataP}),[t(e.$slots,"default",{},function(){return[e.image?(i(),r("img",o({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,C)):e.$slots.icon?(i(),s(l(e.$slots.icon),o({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(i(),r("span",o({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):c("",!0),e.label!==null?(i(),r("div",o({key:3,class:e.cx("label")},e.ptm("label")),u(e.label),17)):c("",!0)]}),e.removable?t(e.$slots,"removeicon",{key:0,removeCallback:a.close,keydownCallback:a.onKeydown},function(){return[(i(),s(l(e.removeIcon?"span":"TimesCircleIcon"),o({class:[e.cx("removeIcon"),e.removeIcon],onClick:a.close,onKeydown:a.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):c("",!0)],16,w)):c("",!0)}k.render=z;export{k as default};
