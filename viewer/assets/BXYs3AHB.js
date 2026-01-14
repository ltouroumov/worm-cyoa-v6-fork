import{am as u,ay as f,y as s,z as v,$ as h,a0 as g,ac as l,A as o,ab as m,X as y}from"./CatXm4QS.js";import{s as b}from"./EUShYJ0M.js";import{f as k}from"./ZhWAdK_X.js";var P=`
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
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
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
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
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
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`,x={root:function(n){var i=n.props;return["p-timeline p-component","p-timeline-"+i.align,"p-timeline-"+i.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},w=u.extend({name:"timeline",style:P,classes:x}),z={name:"BaseTimeline",extends:b,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:w,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function p(e){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},p(e)}function c(e,n,i){return(n=S(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function S(e){var n=T(e,"string");return p(n)=="symbol"?n:n+""}function T(e,n){if(p(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var d=i.call(e,n);if(p(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var O={name:"Timeline",extends:z,inheritAttrs:!1,methods:{getKey:function(n,i){return this.dataKey?f(n,this.dataKey):i},getPTOptions:function(n,i){return this.ptm(n,{context:{index:i,count:this.value.length}})}},computed:{dataP:function(){return k(c(c({},this.layout,this.layout),this.align,this.align))}}},_=["data-p"],C=["data-p"],K=["data-p"],B=["data-p"],j=["data-p"],M=["data-p"],N=["data-p"];function A(e,n,i,d,E,t){return v(),s("div",l({class:e.cx("root")},e.ptmi("root"),{"data-p":t.dataP}),[(v(!0),s(h,null,g(e.value,function(a,r){return v(),s("div",l({key:t.getKey(a,r),class:e.cx("event")},{ref_for:!0},t.getPTOptions("event",r),{"data-p":t.dataP}),[o("div",l({class:e.cx("eventOpposite",{index:r})},{ref_for:!0},t.getPTOptions("eventOpposite",r),{"data-p":t.dataP}),[m(e.$slots,"opposite",{item:a,index:r})],16,K),o("div",l({class:e.cx("eventSeparator")},{ref_for:!0},t.getPTOptions("eventSeparator",r),{"data-p":t.dataP}),[m(e.$slots,"marker",{item:a,index:r},function(){return[o("div",l({class:e.cx("eventMarker")},{ref_for:!0},t.getPTOptions("eventMarker",r),{"data-p":t.dataP}),null,16,j)]}),r!==e.value.length-1?m(e.$slots,"connector",{key:0,item:a,index:r},function(){return[o("div",l({class:e.cx("eventConnector")},{ref_for:!0},t.getPTOptions("eventConnector",r),{"data-p":t.dataP}),null,16,M)]}):y("",!0)],16,B),o("div",l({class:e.cx("eventContent")},{ref_for:!0},t.getPTOptions("eventContent",r),{"data-p":t.dataP}),[m(e.$slots,"content",{item:a,index:r})],16,N)],16,C)}),128))],16,_)}O.render=A;export{O as default};
