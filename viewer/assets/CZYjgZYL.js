import{s as p}from"./EUShYJ0M.js";import{am as v,y as a,z as l,X as c,ac as s,ab as u}from"./CatXm4QS.js";import{f as y}from"./ZhWAdK_X.js";var f=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`,b={root:function(i){var t=i.props;return{justifyContent:t.layout==="horizontal"?t.align==="center"||t.align===null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align===null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null}}},g={root:function(i){var t=i.props;return["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}]},content:"p-divider-content"},m=v.extend({name:"divider",style:f,classes:g,inlineStyles:b}),h={name:"BaseDivider",extends:p,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:m,provide:function(){return{$pcDivider:this,$parentInstance:this}}};function n(e){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},n(e)}function o(e,i,t){return(i=z(i))in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function z(e){var i=S(e,"string");return n(i)=="symbol"?i:i+""}function S(e,i){if(n(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,i);if(n(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}var k={name:"Divider",extends:h,inheritAttrs:!1,computed:{dataP:function(){return y(o(o(o({},this.align,this.align),this.layout,this.layout),this.type,this.type))}}},P=["aria-orientation","data-p"],x=["data-p"];function $(e,i,t,r,w,d){return l(),a("div",s({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout,"data-p":d.dataP},e.ptmi("root")),[e.$slots.default?(l(),a("div",s({key:0,class:e.cx("content"),"data-p":d.dataP},e.ptm("content")),[u(e.$slots,"default")],16,x)):c("",!0)],16,P)}k.render=$;export{k as default};
