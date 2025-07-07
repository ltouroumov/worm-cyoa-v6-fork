import{c as u}from"./Be1fzYNM.js";import{s as g}from"./A8AViyYJ.js";import{af as d,t as i,v as s,a1 as p,X as c,at as y,av as a,a2 as f,x as b,y as m}from"./BJ_rnWsM.js";var v=({dt:n})=>`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${n("tag.primary.background")};
    color: ${n("tag.primary.color")};
    font-size: ${n("tag.font.size")};
    font-weight: ${n("tag.font.weight")};
    padding: ${n("tag.padding")};
    border-radius: ${n("tag.border.radius")};
    gap: ${n("tag.gap")};
}

.p-tag-icon {
    font-size: ${n("tag.icon.size")};
    width: ${n("tag.icon.size")};
    height:${n("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${n("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${n("tag.success.background")};
    color: ${n("tag.success.color")};
}

.p-tag-info {
    background: ${n("tag.info.background")};
    color: ${n("tag.info.color")};
}

.p-tag-warn {
    background: ${n("tag.warn.background")};
    color: ${n("tag.warn.color")};
}

.p-tag-danger {
    background: ${n("tag.danger.background")};
    color: ${n("tag.danger.color")};
}

.p-tag-secondary {
    background: ${n("tag.secondary.background")};
    color: ${n("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${n("tag.contrast.background")};
    color: ${n("tag.contrast.color")};
}
`,$={root:function(r){var e=r.props;return["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},k=d.extend({name:"tag",style:v,classes:$}),h={name:"BaseTag",extends:g,props:{value:null,severity:null,rounded:Boolean,icon:String},style:k,provide:function(){return{$pcTag:this,$parentInstance:this}}};function t(n){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t(n)}function S(n,r,e){return(r=w(r))in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function w(n){var r=P(n,"string");return t(r)=="symbol"?r:r+""}function P(n,r){if(t(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,r);if(t(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}var B={name:"Tag",extends:h,inheritAttrs:!1,computed:{dataP:function(){return u(S({rounded:this.rounded},this.severity,this.severity))}}},z=["data-p"];function T(n,r,e,o,j,l){return s(),i("span",a({class:n.cx("root"),"data-p":l.dataP},n.ptmi("root")),[n.$slots.icon?(s(),p(f(n.$slots.icon),a({key:0,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(s(),i("span",a({key:1,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):c("",!0),n.value!=null||n.$slots.default?y(n.$slots,"default",{key:2},function(){return[b("span",a({class:n.cx("label")},n.ptm("label")),m(n.value),17)]}):c("",!0)],16,z)}B.render=T;export{B as default};
