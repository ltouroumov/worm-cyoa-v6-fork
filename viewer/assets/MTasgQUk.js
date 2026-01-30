import{s as N}from"./KBp_stbL.js";import{am as T,bN as m,g as K,y as c,z as i,A as l,X as h,ad as z,ac as a,a2 as b,a3 as y,$ as f,a0 as k,C as O,ae as P}from"./BXi2gqbi.js";import{s as S}from"./Olr3amwk.js";import{s as x}from"./DnM14NVb.js";import"./CHnQdMXn.js";var B=`
    .p-organizationchart-table {
        border-spacing: 0;
        border-collapse: separate;
        margin: 0 auto;
    }

    .p-organizationchart-table > tbody > tr > td {
        text-align: center;
        vertical-align: top;
        padding: 0 dt('organizationchart.gutter');
    }

    .p-organizationchart-node {
        display: inline-block;
        position: relative;
        border: 1px solid dt('organizationchart.node.border.color');
        background: dt('organizationchart.node.background');
        color: dt('organizationchart.node.color');
        padding: dt('organizationchart.node.padding');
        border-radius: dt('organizationchart.node.border.radius');
        transition:
            background dt('organizationchart.transition.duration'),
            border-color dt('organizationchart.transition.duration'),
            color dt('organizationchart.transition.duration'),
            box-shadow dt('organizationchart.transition.duration');
    }

    .p-organizationchart-node:has(.p-organizationchart-node-toggle-button) {
        padding: dt('organizationchart.node.toggleable.padding');
    }

    .p-organizationchart-node.p-organizationchart-node-selectable:not(.p-organizationchart-node-selected):hover {
        background: dt('organizationchart.node.hover.background');
        color: dt('organizationchart.node.hover.color');
    }

    .p-organizationchart-node-selected {
        background: dt('organizationchart.node.selected.background');
        color: dt('organizationchart.node.selected.color');
    }

    .p-organizationchart-node-toggle-button {
        position: absolute;
        inset-block-end: calc(-1 * calc(dt('organizationchart.node.toggle.button.size') / 2));
        margin-inline-start: calc(-1 * calc(dt('organizationchart.node.toggle.button.size') / 2));
        z-index: 2;
        inset-inline-start: 50%;
        user-select: none;
        cursor: pointer;
        width: dt('organizationchart.node.toggle.button.size');
        height: dt('organizationchart.node.toggle.button.size');
        text-decoration: none;
        background: dt('organizationchart.node.toggle.button.background');
        color: dt('organizationchart.node.toggle.button.color');
        border-radius: dt('organizationchart.node.toggle.button.border.radius');
        border: 1px solid dt('organizationchart.node.toggle.button.border.color');
        display: inline-flex;
        justify-content: center;
        align-items: center;
        outline-color: transparent;
        transition:
            background dt('organizationchart.transition.duration'),
            color dt('organizationchart.transition.duration'),
            border-color dt('organizationchart.transition.duration'),
            outline-color dt('organizationchart.transition.duration'),
            box-shadow dt('organizationchart.transition.duration');
    }

    .p-organizationchart-node-toggle-button:hover {
        background: dt('organizationchart.node.toggle.button.hover.background');
        color: dt('organizationchart.node.toggle.button.hover.color');
    }

    .p-organizationchart-node-toggle-button:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-organizationchart-node-toggle-button-icon {
        position: relative;
        inset-block-start: 1px;
    }

    .p-organizationchart-connector-down {
        margin: 0 auto;
        height: dt('organizationchart.connector.height');
        width: 1px;
        background: dt('organizationchart.connector.color');
    }

    .p-organizationchart-connector-right {
        border-radius: 0;
    }

    .p-organizationchart-connector-left {
        border-radius: 0;
        border-inline-end: 1px solid dt('organizationchart.connector.color');
    }

    .p-organizationchart-connector-top {
        border-block-start: 1px solid dt('organizationchart.connector.color');
    }

    .p-organizationchart-node-selectable {
        cursor: pointer;
    }

    .p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-left) {
        border-inline-end: 0 none;
    }

    .p-organizationchart-connectors :nth-last-child(1 of .p-organizationchart-connector-left) {
        border-start-end-radius: dt('organizationchart.connector.border.radius');
    }

    .p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-right) {
        border-inline-start: 1px solid dt('organizationchart.connector.color');
        border-start-start-radius: dt('organizationchart.connector.border.radius');
    }
`,j={root:"p-organizationchart p-component",table:"p-organizationchart-table",node:function(e){var t=e.instance;return["p-organizationchart-node",{"p-organizationchart-node-selectable":t.selectable,"p-organizationchart-node-selected":t.selected}]},nodeToggleButton:function(e){var t=e.instance;return["p-organizationchart-node-toggle-button",{"p-disabled":!t.selectable}]},nodeToggleButtonIcon:"p-organizationchart-node-toggle-button-icon",connectors:"p-organizationchart-connectors",connectorDown:"p-organizationchart-connector-down",connectorLeft:function(e){var t=e.index;return["p-organizationchart-connector-left",{"p-organizationchart-connector-top":t!==0}]},connectorRight:function(e){var t=e.props,r=e.index;return["p-organizationchart-connector-right",{"p-organizationchart-connector-top":r!==t.node.children.length-1}]},nodeChildren:"p-organizationchart-node-children"},D=T.extend({name:"organizationchart",style:B,classes:j}),M={name:"BaseOrganizationChart",extends:N,props:{value:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},collapsible:{type:Boolean,default:!1},collapsedKeys:{type:null,default:null}},style:D,provide:function(){return{$pcOrganizationChart:this,$parentInstance:this}}},w={name:"OrganizationChartNode",hostName:"OrganizationChart",extends:N,emits:["node-click","node-toggle"],props:{node:{type:null,default:null},templates:{type:null,default:null},collapsible:{type:Boolean,default:!1},collapsedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null}},methods:{getPTOptions:function(e){return this.ptm(e,{context:{expanded:this.expanded,selectable:this.selectable,selected:this.selected,toggleable:this.toggleable,active:this.selected}})},getNodeOptions:function(e,t){return this.ptm(t,{context:{lineTop:e}})},onNodeClick:function(e){m(e.target,"data-pc-section","nodetogglebutton")||m(e.target,"data-pc-section","nodetogglebuttonicon")||this.selectionMode&&this.$emit("node-click",this.node)},onChildNodeClick:function(e){this.$emit("node-click",e)},toggleNode:function(){this.$emit("node-toggle",this.node)},onChildNodeToggle:function(e){this.$emit("node-toggle",e)},onKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&(this.toggleNode(),e.preventDefault())}},computed:{leaf:function(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},colspan:function(){return this.node.children&&this.node.children.length?this.node.children.length*2:null},childStyle:function(){return{visibility:!this.leaf&&this.expanded?"inherit":"hidden"}},expanded:function(){return this.collapsedKeys[this.node.key]===void 0},selectable:function(){return this.selectionMode&&this.node.selectable!==!1},selected:function(){return this.selectable&&this.selectionKeys&&this.selectionKeys[this.node.key]===!0},toggleable:function(){return this.collapsible&&this.node.collapsible!==!1&&!this.leaf}},components:{ChevronDownIcon:S,ChevronUpIcon:x}},I=["colspan"],E=["colspan"],L=["colspan"];function R(n,e,t,r,s,o){var p=K("OrganizationChartNode",!0);return i(),c("table",a({class:n.cx("table")},n.ptm("table")),[l("tbody",z(P(n.ptm("body"))),[t.node?(i(),c("tr",z(a({key:0},n.ptm("row"))),[l("td",a({colspan:o.colspan},n.ptm("cell")),[l("div",a({class:[n.cx("node"),t.node.styleClass],onClick:e[2]||(e[2]=function(){return o.onNodeClick&&o.onNodeClick.apply(o,arguments)})},o.getPTOptions("node")),[(i(),b(y(t.templates[t.node.type]||t.templates.default),{node:t.node},null,8,["node"])),o.toggleable?(i(),c("a",a({key:0,tabindex:"0",class:n.cx("nodeToggleButton"),onClick:e[0]||(e[0]=function(){return o.toggleNode&&o.toggleNode.apply(o,arguments)}),onKeydown:e[1]||(e[1]=function(){return o.onKeydown&&o.onKeydown.apply(o,arguments)})},o.getPTOptions("nodeToggleButton")),[t.templates.toggleicon||t.templates.togglericon?(i(),b(y(t.templates.toggleicon||t.templates.togglericon),a({key:0,expanded:o.expanded,class:n.cx("nodeToggleButtonIcon")},o.getPTOptions("nodeToggleButtonIcon")),null,16,["expanded","class"])):(i(),b(y(o.expanded?"ChevronDownIcon":"ChevronUpIcon"),a({key:1,class:n.cx("nodeToggleButtonIcon")},o.getPTOptions("nodeToggleButtonIcon")),null,16,["class"]))],16)):h("",!0)],16)],16,I)],16)):h("",!0),l("tr",a({style:o.childStyle,class:n.cx("connectors")},n.ptm("connectors")),[l("td",a({colspan:o.colspan},n.ptm("lineCell")),[l("div",a({class:n.cx("connectorDown")},n.ptm("connectorDown")),null,16)],16,E)],16),l("tr",a({style:o.childStyle,class:n.cx("connectors")},n.ptm("connectors")),[t.node.children&&t.node.children.length===1?(i(),c("td",a({key:0,colspan:o.colspan},n.ptm("lineCell")),[l("div",a({class:n.cx("connectorDown")},n.ptm("connectorDown")),null,16)],16,L)):h("",!0),t.node.children&&t.node.children.length>1?(i(!0),c(f,{key:1},k(t.node.children,function(g,u){return i(),c(f,{key:g.key},[l("td",a({class:n.cx("connectorLeft",{index:u})},{ref_for:!0},o.getNodeOptions(u!==0,"connectorLeft"))," ",16),l("td",a({class:n.cx("connectorRight",{index:u})},{ref_for:!0},o.getNodeOptions(u!==t.node.children.length-1,"connectorRight"))," ",16)],64)}),128)):h("",!0)],16),l("tr",a({style:o.childStyle,class:n.cx("nodeChildren")},n.ptm("nodeChildren")),[(i(!0),c(f,null,k(t.node.children,function(g){return i(),c("td",a({key:g.key,colspan:"2"},{ref_for:!0},n.ptm("nodeCell")),[O(p,{node:g,templates:t.templates,collapsedKeys:t.collapsedKeys,onNodeToggle:o.onChildNodeToggle,collapsible:t.collapsible,selectionMode:t.selectionMode,selectionKeys:t.selectionKeys,onNodeClick:o.onChildNodeClick,pt:n.pt,unstyled:n.unstyled},null,8,["node","templates","collapsedKeys","onNodeToggle","collapsible","selectionMode","selectionKeys","onNodeClick","pt","unstyled"])],16)}),128))],16)],16)],16)}w.render=R;function d(n){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(n)}function v(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,r)}return t}function C(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?v(Object(t),!0).forEach(function(r){V(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function V(n,e,t){return(e=A(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function A(n){var e=U(n,"string");return d(e)=="symbol"?e:e+""}function U(n,e){if(d(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(d(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var F={name:"OrganizationChart",extends:M,inheritAttrs:!1,emits:["node-unselect","node-select","update:selectionKeys","node-expand","node-collapse","update:collapsedKeys"],data:function(){return{d_collapsedKeys:this.collapsedKeys||{}}},watch:{collapsedKeys:function(e){this.d_collapsedKeys=e}},methods:{onNodeClick:function(e){var t=e.key;if(this.selectionMode){var r=this.selectionKeys?C({},this.selectionKeys):{};r[t]?(delete r[t],this.$emit("node-unselect",e)):(this.selectionMode==="single"&&(r={}),r[t]=!0,this.$emit("node-select",e)),this.$emit("update:selectionKeys",r)}},onNodeToggle:function(e){var t=e.key;this.d_collapsedKeys[t]?(delete this.d_collapsedKeys[t],this.$emit("node-expand",e)):(this.d_collapsedKeys[t]=!0,this.$emit("node-collapse",e)),this.d_collapsedKeys=C({},this.d_collapsedKeys),this.$emit("update:collapsedKeys",this.d_collapsedKeys)}},components:{OrganizationChartNode:w}};function X(n,e,t,r,s,o){var p=K("OrganizationChartNode");return i(),c("div",a({class:n.cx("root")},n.ptmi("root")),[O(p,{node:n.value,templates:n.$slots,onNodeToggle:o.onNodeToggle,collapsedKeys:s.d_collapsedKeys,collapsible:n.collapsible,onNodeClick:o.onNodeClick,selectionMode:n.selectionMode,selectionKeys:n.selectionKeys,pt:n.pt,unstyled:n.unstyled},null,8,["node","templates","onNodeToggle","collapsedKeys","collapsible","onNodeClick","selectionMode","selectionKeys","pt","unstyled"])],16)}F.render=X;export{F as default};
