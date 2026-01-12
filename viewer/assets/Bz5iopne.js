import{s as a}from"./5GknnxE_.js";import{am as p,ac as d,y as u,z as l}from"./DKPM-x0c.js";import{f as s}from"./ZhWAdK_X.js";import"./BatOrcQe.js";import"./DOKo9Z5P.js";var c=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`,f={root:function(t){var e=t.instance,i=t.props;return["p-inputtext p-component",{"p-filled":e.$filled,"p-inputtext-sm p-inputfield-sm":i.size==="small","p-inputtext-lg p-inputfield-lg":i.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-inputtext-fluid":e.$fluid}]}},x=p.extend({name:"inputtext",style:c,classes:f}),b={name:"BaseInputText",extends:a,style:x,provide:function(){return{$pcInputText:this,$parentInstance:this}}};function o(n){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(n)}function m(n,t,e){return(t=g(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function g(n){var t=v(n,"string");return o(t)=="symbol"?t:t+""}function v(n,t){if(o(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t);if(o(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var y={name:"InputText",extends:b,inheritAttrs:!1,methods:{onInput:function(t){this.writeValue(t.target.value,t)}},computed:{attrs:function(){return d(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return s(m({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},h=["value","name","disabled","aria-invalid","data-p"];function k(n,t,e,i,$,r){return l(),u("input",d({type:"text",class:n.cx("root"),value:n.d_value,name:n.name,disabled:n.disabled,"aria-invalid":n.$invalid||void 0,"data-p":r.dataP,onInput:t[0]||(t[0]=function(){return r.onInput&&r.onInput.apply(r,arguments)})},r.attrs),null,16,h)}y.render=k;export{y as default};
