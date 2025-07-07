import{s as o}from"./CcoDSO_5.js";import{af as n,t as s,v as l,x as a,at as t,av as r}from"./BZwby5eq.js";var d=({dt:e})=>`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: ${e("toolbar.padding")};
    background: ${e("toolbar.background")};
    border: 1px solid ${e("toolbar.border.color")};
    color: ${e("toolbar.color")};
    border-radius: ${e("toolbar.border.radius")};
    gap: ${e("toolbar.gap")};
}

.p-toolbar-start,
.p-toolbar-center,
.p-toolbar-end {
    display: flex;
    align-items: center;
}
`,p={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},i=n.extend({name:"toolbar",style:d,classes:p}),b={name:"BaseToolbar",extends:o,props:{ariaLabelledby:{type:String,default:null}},style:i,provide:function(){return{$pcToolbar:this,$parentInstance:this}}},c={name:"Toolbar",extends:b,inheritAttrs:!1},$=["aria-labelledby"];function m(e,v,u,y,f,g){return l(),s("div",r({class:e.cx("root"),role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[a("div",r({class:e.cx("start")},e.ptm("start")),[t(e.$slots,"start")],16),a("div",r({class:e.cx("center")},e.ptm("center")),[t(e.$slots,"center")],16),a("div",r({class:e.cx("end")},e.ptm("end")),[t(e.$slots,"end")],16)],16,$)}c.render=m;export{c as default};
