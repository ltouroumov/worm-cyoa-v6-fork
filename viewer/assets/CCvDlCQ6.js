import{c as u}from"./Be1fzYNM.js";import{af as f,ar as h,t as v,v as c,Z as g,$ as y,av as l,x as o,at as m,X as b}from"./BJ_rnWsM.js";import{s as k}from"./A8AViyYJ.js";var P=({dt:e})=>`
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    direction: ltr;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: ${e("timeline.vertical.event.content.padding")};
}

.p-timeline-vertical .p-timeline-event-connector {
    width: ${e("timeline.event.connector.size")};
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: ${e("timeline.event.min.height")};
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
}

.p-timeline-event-content {
    flex: 1;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border-width: ${e("timeline.event.marker.border.width")};
    border-style: solid;
    border-color: ${e("timeline.event.marker.border.color")};
    border-radius: ${e("timeline.event.marker.border.radius")};
    width: ${e("timeline.event.marker.size")};
    height: ${e("timeline.event.marker.size")};
    background: ${e("timeline.event.marker.background")};
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: ${e("timeline.event.marker.content.border.radius")};
    width: ${e("timeline.event.marker.content.size")};
    height:${e("timeline.event.marker.content.size")};
    background: ${e("timeline.event.marker.content.background")};
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("timeline.event.marker.border.radius")};
    box-shadow: ${e("timeline.event.marker.content.inset.shadow")};
}

.p-timeline-event-connector {
    flex-grow: 1;
    background: ${e("timeline.event.connector.color")};
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: ${e("timeline.event.connector.size")};
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: ${e("timeline.horizontal.event.content.padding")};
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`,x={root:function(n){var i=n.props;return["p-timeline p-component","p-timeline-"+i.align,"p-timeline-"+i.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},w=f.extend({name:"timeline",style:P,classes:x}),$={name:"BaseTimeline",extends:k,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:w,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function p(e){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},p(e)}function d(e,n,i){return(n=z(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function z(e){var n=S(e,"string");return p(n)=="symbol"?n:n+""}function S(e,n){if(p(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var s=i.call(e,n);if(p(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var T={name:"Timeline",extends:$,inheritAttrs:!1,methods:{getKey:function(n,i){return this.dataKey?h(n,this.dataKey):i},getPTOptions:function(n,i){return this.ptm(n,{context:{index:i,count:this.value.length}})}},computed:{dataP:function(){return u(d(d({},this.layout,this.layout),this.align,this.align))}}},O=["data-p"],_=["data-p"],C=["data-p"],K=["data-p"],B=["data-p"],j=["data-p"],M=["data-p"];function N(e,n,i,s,E,t){return c(),v("div",l({class:e.cx("root")},e.ptmi("root"),{"data-p":t.dataP}),[(c(!0),v(g,null,y(e.value,function(a,r){return c(),v("div",l({key:t.getKey(a,r),class:e.cx("event"),ref_for:!0},t.getPTOptions("event",r),{"data-p":t.dataP}),[o("div",l({class:e.cx("eventOpposite",{index:r}),ref_for:!0},t.getPTOptions("eventOpposite",r),{"data-p":t.dataP}),[m(e.$slots,"opposite",{item:a,index:r})],16,C),o("div",l({class:e.cx("eventSeparator"),ref_for:!0},t.getPTOptions("eventSeparator",r),{"data-p":t.dataP}),[m(e.$slots,"marker",{item:a,index:r},function(){return[o("div",l({class:e.cx("eventMarker"),ref_for:!0},t.getPTOptions("eventMarker",r),{"data-p":t.dataP}),null,16,B)]}),r!==e.value.length-1?m(e.$slots,"connector",{key:0,item:a,index:r},function(){return[o("div",l({class:e.cx("eventConnector"),ref_for:!0},t.getPTOptions("eventConnector",r),{"data-p":t.dataP}),null,16,j)]}):b("",!0)],16,K),o("div",l({class:e.cx("eventContent"),ref_for:!0},t.getPTOptions("eventContent",r),{"data-p":t.dataP}),[m(e.$slots,"content",{item:a,index:r})],16,M)],16,_)}),128))],16,O)}T.render=N;export{T as default};
