import{s as t}from"./CcoDSO_5.js";import{af as n,t as o,v as p,at as i,av as r}from"./BZwby5eq.js";var s=({dt:l})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${l("floatlabel.font.weight")};
    inset-inline-start: ${l("floatlabel.position.x")};
    color: ${l("floatlabel.color")};
    transition-duration: ${l("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${l("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${l("form.field.padding.x")} * 2) + ${l("icon.size")});
}

.p-floatlabel:has(.p-invalid) label {
    color: ${l("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${l("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${l("floatlabel.active.font.size")};
    font-weight: ${l("floatlabel.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${l("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${l("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-block-start: ${l("floatlabel.in.input.padding.top")};
    padding-block-end: ${l("floatlabel.in.input.padding.bottom")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${l("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${l("floatlabel.on.border.radius")};
    background: ${l("floatlabel.on.active.background")};
    padding: ${l("floatlabel.on.active.padding")};
}
`,b={root:function(e){var a=e.props;return["p-floatlabel",{"p-floatlabel-over":a.variant==="over","p-floatlabel-on":a.variant==="on","p-floatlabel-in":a.variant==="in"}]}},f=n.extend({name:"floatlabel",style:s,classes:b}),u={name:"BaseFloatLabel",extends:t,props:{variant:{type:String,default:"over"}},style:f,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},c={name:"FloatLabel",extends:u,inheritAttrs:!1};function d(l,e,a,h,v,$){return p(),o("span",r({class:l.cx("root")},l.ptmi("root")),[i(l.$slots,"default")],16)}c.render=d;export{c as default};
