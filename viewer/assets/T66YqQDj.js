import{s as a}from"./jw7iGpfZ.js";import{am as e,y as l,z as n,ab as i,ac as p}from"./BWIH5MBJ.js";var o=`
    .p-iftalabel {
        display: block;
        position: relative;
    }

    .p-iftalabel label {
        position: absolute;
        pointer-events: none;
        top: dt('iftalabel.top');
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-size: dt('iftalabel.font.size');
        font-weight: dt('iftalabel.font.weight');
        inset-inline-start: dt('iftalabel.position.x');
        color: dt('iftalabel.color');
        transition-duration: dt('iftalabel.transition.duration');
    }

    .p-iftalabel .p-inputtext,
    .p-iftalabel .p-textarea,
    .p-iftalabel .p-select-label,
    .p-iftalabel .p-multiselect-label,
    .p-iftalabel .p-multiselect-label:has(.p-chip),
    .p-iftalabel .p-autocomplete-input-multiple,
    .p-iftalabel .p-cascadeselect-label,
    .p-iftalabel .p-treeselect-label {
        padding-block-start: dt('iftalabel.input.padding.top');
        padding-block-end: dt('iftalabel.input.padding.bottom');
    }

    .p-iftalabel:has(.p-invalid) label {
        color: dt('iftalabel.invalid.color');
    }

    .p-iftalabel:has(input:focus) label,
    .p-iftalabel:has(input:-webkit-autofill) label,
    .p-iftalabel:has(textarea:focus) label,
    .p-iftalabel:has(.p-inputwrapper-focus) label {
        color: dt('iftalabel.focus.color');
    }

    .p-iftalabel .p-inputicon {
        top: dt('iftalabel.input.padding.top');
        transform: translateY(25%);
        margin-top: 0;
    }
`,s={root:"p-iftalabel"},r=e.extend({name:"iftalabel",style:o,classes:s}),b={name:"BaseIftaLabel",extends:a,style:r,provide:function(){return{$pcIftaLabel:this,$parentInstance:this}}},f={name:"IftaLabel",extends:b,inheritAttrs:!1};function c(t,d,u,m,h,g){return n(),l("span",p({class:t.cx("root")},t.ptmi("root")),[i(t.$slots,"default")],16)}f.render=c;export{f as default};
