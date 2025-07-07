import{s as N}from"./A8AViyYJ.js";import{af as T,bK as m,g as K,t as c,v as i,x as l,X as h,aO as z,av as a,a1 as b,a2 as y,Z as f,$ as v,z as O,bs as P}from"./BJ_rnWsM.js";import{s as x}from"./DUlYJomC.js";import{s as S}from"./Cgar2AdD.js";import"./Dka6TfxS.js";var $=({dt:e})=>`
.p-organizationchart-table {
    border-spacing: 0;
    border-collapse: separate;
    margin: 0 auto;
}

.p-organizationchart-table > tbody > tr > td {
    text-align: center;
    vertical-align: top;
    padding: 0 ${e("organizationchart.gutter")};
}

.p-organizationchart-node {
    display: inline-block;
    position: relative;
    border: 1px solid ${e("organizationchart.node.border.color")};
    background: ${e("organizationchart.node.background")};
    color: ${e("organizationchart.node.color")};
    padding: ${e("organizationchart.node.padding")};
    border-radius: ${e("organizationchart.node.border.radius")};
    transition: background ${e("organizationchart.transition.duration")}, border-color ${e("organizationchart.transition.duration")}, color ${e("organizationchart.transition.duration")}, box-shadow ${e("organizationchart.transition.duration")};
}

.p-organizationchart-node:has(.p-organizationchart-node-toggle-button) {
    padding: ${e("organizationchart.node.toggleable.padding")};
}

.p-organizationchart-node.p-organizationchart-node-selectable:not(.p-organizationchart-node-selected):hover {
    background: ${e("organizationchart.node.hover.background")};
    color: ${e("organizationchart.node.hover.color")};
}

.p-organizationchart-node-selected {
    background: ${e("organizationchart.node.selected.background")};
    color: ${e("organizationchart.node.selected.color")};
}

.p-organizationchart-node-toggle-button {
    position: absolute;
    inset-block-end: calc(-1 * calc(${e("organizationchart.node.toggle.button.size")} / 2));
    margin-inline-start: calc(-1 * calc(${e("organizationchart.node.toggle.button.size")} / 2));
    z-index: 2;
    inset-inline-start: 50%;
    user-select: none;
    cursor: pointer;
    width: ${e("organizationchart.node.toggle.button.size")};
    height: ${e("organizationchart.node.toggle.button.size")};
    text-decoration: none;
    background: ${e("organizationchart.node.toggle.button.background")};
    color: ${e("organizationchart.node.toggle.button.color")};
    border-radius: ${e("organizationchart.node.toggle.button.border.radius")};
    border: 1px solid ${e("organizationchart.node.toggle.button.border.color")};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline-color: transparent;
    transition: background ${e("organizationchart.transition.duration")}, color ${e("organizationchart.transition.duration")}, border-color ${e("organizationchart.transition.duration")}, outline-color ${e("organizationchart.transition.duration")}, box-shadow ${e("organizationchart.transition.duration")};
}

.p-organizationchart-node-toggle-button:hover {
    background: ${e("organizationchart.node.toggle.button.hover.background")};
    color: ${e("organizationchart.node.toggle.button.hover.color")};
}

.p-organizationchart-node-toggle-button:focus-visible {
    box-shadow: ${e("breadcrumb.item.focus.ring.shadow")};
    outline: ${e("breadcrumb.item.focus.ring.width")} ${e("breadcrumb.item.focus.ring.style")} ${e("breadcrumb.item.focus.ring.color")};
    outline-offset: ${e("breadcrumb.item.focus.ring.offset")};
}

.p-organizationchart-node-toggle-button-icon {
    position: relative;
    inset-block-start: 1px;
}

.p-organizationchart-connector-down {
    margin: 0 auto;
    height: ${e("organizationchart.connector.height")};
    width: 1px;
    background: ${e("organizationchart.connector.color")};
}

.p-organizationchart-connector-right {
    border-radius: 0;
}

.p-organizationchart-connector-left {
    border-radius: 0;
    border-inline-end: 1px solid ${e("organizationchart.connector.color")};
}

.p-organizationchart-connector-top {
    border-block-start: 1px solid ${e("organizationchart.connector.color")};
}

.p-organizationchart-node-selectable {
    cursor: pointer;
}

.p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-left) {
    border-inline-end: 0 none;
}

.p-organizationchart-connectors :nth-last-child(1 of .p-organizationchart-connector-left) {
    border-start-end-radius: ${e("organizationchart.connector.border.radius")};
}

.p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-right) {
    border-inline-start: 1px solid ${e("organizationchart.connector.color")};
    border-start-start-radius: ${e("organizationchart.connector.border.radius")};
}
`,j={root:"p-organizationchart p-component",table:"p-organizationchart-table",node:function(n){var o=n.instance;return["p-organizationchart-node",{"p-organizationchart-node-selectable":o.selectable,"p-organizationchart-node-selected":o.selected}]},nodeToggleButton:"p-organizationchart-node-toggle-button",nodeToggleButtonIcon:"p-organizationchart-node-toggle-button-icon",connectors:"p-organizationchart-connectors",connectorDown:"p-organizationchart-connector-down",connectorLeft:function(n){var o=n.index;return["p-organizationchart-connector-left",{"p-organizationchart-connector-top":o!==0}]},connectorRight:function(n){var o=n.props,r=n.index;return["p-organizationchart-connector-right",{"p-organizationchart-connector-top":r!==o.node.children.length-1}]},nodeChildren:"p-organizationchart-node-children"},B=T.extend({name:"organizationchart",style:$,classes:j}),D={name:"BaseOrganizationChart",extends:N,props:{value:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},collapsible:{type:Boolean,default:!1},collapsedKeys:{type:null,default:null}},style:B,provide:function(){return{$pcOrganizationChart:this,$parentInstance:this}}},w={name:"OrganizationChartNode",hostName:"OrganizationChart",extends:N,emits:["node-click","node-toggle"],props:{node:{type:null,default:null},templates:{type:null,default:null},collapsible:{type:Boolean,default:!1},collapsedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null}},methods:{getPTOptions:function(n){return this.ptm(n,{context:{expanded:this.expanded,selectable:this.selectable,selected:this.selected,toggleable:this.toggleable,active:this.selected}})},getNodeOptions:function(n,o){return this.ptm(o,{context:{lineTop:n}})},onNodeClick:function(n){m(n.target,"data-pc-section","nodetogglebutton")||m(n.target,"data-pc-section","nodetogglebuttonicon")||this.selectionMode&&this.$emit("node-click",this.node)},onChildNodeClick:function(n){this.$emit("node-click",n)},toggleNode:function(){this.$emit("node-toggle",this.node)},onChildNodeToggle:function(n){this.$emit("node-toggle",n)},onKeydown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggleNode(),n.preventDefault())}},computed:{leaf:function(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},colspan:function(){return this.node.children&&this.node.children.length?this.node.children.length*2:null},childStyle:function(){return{visibility:!this.leaf&&this.expanded?"inherit":"hidden"}},expanded:function(){return this.collapsedKeys[this.node.key]===void 0},selectable:function(){return this.selectionMode&&this.node.selectable!==!1},selected:function(){return this.selectable&&this.selectionKeys&&this.selectionKeys[this.node.key]===!0},toggleable:function(){return this.collapsible&&this.node.collapsible!==!1&&!this.leaf}},components:{ChevronDownIcon:x,ChevronUpIcon:S}},M=["colspan"],I=["colspan"],E=["colspan"];function L(e,n,o,r,s,t){var p=K("OrganizationChartNode",!0);return i(),c("table",a({class:e.cx("table")},e.ptm("table")),[l("tbody",z(P(e.ptm("body"))),[o.node?(i(),c("tr",z(a({key:0},e.ptm("row"))),[l("td",a({colspan:t.colspan},e.ptm("cell")),[l("div",a({class:[e.cx("node"),o.node.styleClass],onClick:n[2]||(n[2]=function(){return t.onNodeClick&&t.onNodeClick.apply(t,arguments)})},t.getPTOptions("node")),[(i(),b(y(o.templates[o.node.type]||o.templates.default),{node:o.node},null,8,["node"])),t.toggleable?(i(),c("a",a({key:0,tabindex:"0",class:e.cx("nodeToggleButton"),onClick:n[0]||(n[0]=function(){return t.toggleNode&&t.toggleNode.apply(t,arguments)}),onKeydown:n[1]||(n[1]=function(){return t.onKeydown&&t.onKeydown.apply(t,arguments)})},t.getPTOptions("nodeToggleButton")),[o.templates.toggleicon||o.templates.togglericon?(i(),b(y(o.templates.toggleicon||o.templates.togglericon),a({key:0,expanded:t.expanded,class:e.cx("nodeToggleButtonIcon")},t.getPTOptions("nodeToggleButtonIcon")),null,16,["expanded","class"])):(i(),b(y(t.expanded?"ChevronDownIcon":"ChevronUpIcon"),a({key:1,class:e.cx("nodeToggleButtonIcon")},t.getPTOptions("nodeToggleButtonIcon")),null,16,["class"]))],16)):h("",!0)],16)],16,M)],16)):h("",!0),l("tr",a({style:t.childStyle,class:e.cx("connectors")},e.ptm("connectors")),[l("td",a({colspan:t.colspan},e.ptm("lineCell")),[l("div",a({class:e.cx("connectorDown")},e.ptm("connectorDown")),null,16)],16,I)],16),l("tr",a({style:t.childStyle,class:e.cx("connectors")},e.ptm("connectors")),[o.node.children&&o.node.children.length===1?(i(),c("td",a({key:0,colspan:t.colspan},e.ptm("lineCell")),[l("div",a({class:e.cx("connectorDown")},e.ptm("connectorDown")),null,16)],16,E)):h("",!0),o.node.children&&o.node.children.length>1?(i(!0),c(f,{key:1},v(o.node.children,function(g,u){return i(),c(f,{key:g.key},[l("td",a({class:e.cx("connectorLeft",{index:u}),ref_for:!0},t.getNodeOptions(u!==0,"connectorLeft"))," ",16),l("td",a({class:e.cx("connectorRight",{index:u}),ref_for:!0},t.getNodeOptions(u!==o.node.children.length-1,"connectorRight"))," ",16)],64)}),128)):h("",!0)],16),l("tr",a({style:t.childStyle,class:e.cx("nodeChildren")},e.ptm("nodeChildren")),[(i(!0),c(f,null,v(o.node.children,function(g){return i(),c("td",a({key:g.key,colspan:"2",ref_for:!0},e.ptm("nodeCell")),[O(p,{node:g,templates:o.templates,collapsedKeys:o.collapsedKeys,onNodeToggle:t.onChildNodeToggle,collapsible:o.collapsible,selectionMode:o.selectionMode,selectionKeys:o.selectionKeys,onNodeClick:t.onChildNodeClick,pt:e.pt,unstyled:e.unstyled},null,8,["node","templates","collapsedKeys","onNodeToggle","collapsible","selectionMode","selectionKeys","onNodeClick","pt","unstyled"])],16)}),128))],16)],16)],16)}w.render=L;function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(e)}function k(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),o.push.apply(o,r)}return o}function C(e){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?k(Object(o),!0).forEach(function(r){R(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):k(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function R(e,n,o){return(n=V(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function V(e){var n=A(e,"string");return d(n)=="symbol"?n:n+""}function A(e,n){if(d(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,n);if(d(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var U={name:"OrganizationChart",extends:D,inheritAttrs:!1,emits:["node-unselect","node-select","update:selectionKeys","node-expand","node-collapse","update:collapsedKeys"],data:function(){return{d_collapsedKeys:this.collapsedKeys||{}}},watch:{collapsedKeys:function(n){this.d_collapsedKeys=n}},methods:{onNodeClick:function(n){var o=n.key;if(this.selectionMode){var r=this.selectionKeys?C({},this.selectionKeys):{};r[o]?(delete r[o],this.$emit("node-unselect",n)):(this.selectionMode==="single"&&(r={}),r[o]=!0,this.$emit("node-select",n)),this.$emit("update:selectionKeys",r)}},onNodeToggle:function(n){var o=n.key;this.d_collapsedKeys[o]?(delete this.d_collapsedKeys[o],this.$emit("node-expand",n)):(this.d_collapsedKeys[o]=!0,this.$emit("node-collapse",n)),this.d_collapsedKeys=C({},this.d_collapsedKeys),this.$emit("update:collapsedKeys",this.d_collapsedKeys)}},components:{OrganizationChartNode:w}};function q(e,n,o,r,s,t){var p=K("OrganizationChartNode");return i(),c("div",a({class:e.cx("root")},e.ptmi("root")),[O(p,{node:e.value,templates:e.$slots,onNodeToggle:t.onNodeToggle,collapsedKeys:s.d_collapsedKeys,collapsible:e.collapsible,onNodeClick:t.onNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,pt:e.pt,unstyled:e.unstyled},null,8,["node","templates","onNodeToggle","collapsedKeys","collapsible","onNodeClick","selectionMode","selectionKeys","pt","unstyled"])],16)}U.render=q;export{U as default};
