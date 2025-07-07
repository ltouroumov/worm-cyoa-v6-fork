import{s as a}from"./CcoDSO_5.js";import{af as e,t as l,v as n,at as i,av as o}from"./BZwby5eq.js";var p=({dt:t})=>`
.p-iftalabel {
    display: block;
    position: relative;
}

.p-iftalabel label {
    position: absolute;
    pointer-events: none;
    top: ${t("iftalabel.top")};
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-size: ${t("iftalabel.font.size")};
    font-weight: ${t("iftalabel.font.weight")};
    inset-inline-start: ${t("iftalabel.position.x")};
    color: ${t("iftalabel.color")};
    transition-duration: ${t("iftalabel.transition.duration")};
}

.p-iftalabel .p-inputtext,
.p-iftalabel .p-textarea,
.p-iftalabel .p-select-label,
.p-iftalabel .p-multiselect-label,
.p-iftalabel .p-autocomplete-input-multiple,
.p-iftalabel .p-cascadeselect-label,
.p-iftalabel .p-treeselect-label {
    padding-block-start: ${t("iftalabel.input.padding.top")};
    padding-block-end: ${t("iftalabel.input.padding.bottom")};
}

.p-iftalabel:has(.p-invalid) label {
    color: ${t("iftalabel.invalid.color")};
}

.p-iftalabel:has(input:focus) label,
.p-iftalabel:has(input:-webkit-autofill) label,
.p-iftalabel:has(textarea:focus) label,
.p-iftalabel:has(.p-inputwrapper-focus) label {
    color: ${t("iftalabel.focus.color")};
}

.p-iftalabel .p-inputicon {
    top: ${t("iftalabel.input.padding.top")};
    transform: translateY(25%);
    margin-top: 0;
}
`,s={root:"p-iftalabel"},r=e.extend({name:"iftalabel",style:p,classes:s}),f={name:"BaseIftaLabel",extends:a,style:r,provide:function(){return{$pcIftaLabel:this,$parentInstance:this}}},b={name:"IftaLabel",extends:f,inheritAttrs:!1};function c(t,d,u,$,m,h){return n(),l("span",o({class:t.cx("root")},t.ptmi("root")),[i(t.$slots,"default")],16)}b.render=c;export{b as default};
