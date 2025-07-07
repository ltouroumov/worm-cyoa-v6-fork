import{u as t}from"./DmfvTtO6.js";import{s as r}from"./BMopskjG.js";import{af as a,t as s,v as n,at as p,av as c}from"./DEES2_7q.js";import"./CA5aLBJS.js";var i=`
.p-checkbox-group {
    display: inline-flex;
}
`,u={root:"p-checkbox-group p-component"},m=a.extend({name:"checkboxgroup",style:i,classes:u}),l={name:"BaseCheckboxGroup",extends:r,style:m,provide:function(){return{$pcCheckboxGroup:this,$parentInstance:this}}},d={name:"CheckboxGroup",extends:l,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||t("checkbox-group-")}},mounted:function(){this.groupName=this.groupName||t("checkbox-group-")}};function h(e,o,f,x,k,g){return n(),s("div",c({class:e.cx("root")},e.ptmi("root")),[p(e.$slots,"default")],16)}d.render=h;export{d as default};
