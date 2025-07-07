import t from"./Zh9U_cYO.js";import{af as n,g as o,t as s,v as l,at as i,z as d,av as a}from"./DEES2_7q.js";import"./Be1fzYNM.js";import"./CA5aLBJS.js";var p=({dt:e})=>`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: ${e("overlaybadge.outline.width")};
    outline-style: solid;
    outline-color: ${e("overlaybadge.outline.color")};
}

.p-overlaybadge .p-badge:dir(rtl) {
    transform: translate(-50%, -50%);
}
`,v={root:"p-overlaybadge"},g=n.extend({name:"overlaybadge",style:p,classes:v}),m={name:"OverlayBadge",extends:t,style:g,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},c={name:"OverlayBadge",extends:m,inheritAttrs:!1,components:{Badge:t}};function y(e,u,$,b,f,B){var r=o("Badge");return l(),s("div",a({class:e.cx("root")},e.ptmi("root")),[i(e.$slots,"default"),d(r,a(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}c.render=y;export{c as default};
