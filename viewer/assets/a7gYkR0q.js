import{an as y,aN as h,aH as a,bb as p,bc as c,av as v,aX as b,bd as g,aG as k,b7 as A}from"./DnoyKoxn.js";import{B as S}from"./CbA-0jCt.js";var E=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,w={root:"p-ink"},T=y.extend({name:"ripple-directive",style:E,classes:w}),$=S.extend({style:T});function o(e){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(e)}function x(e){return P(e)||R(e)||I(e)||_()}function _(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(e,t){if(e){if(typeof e=="string")return s(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function R(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function P(e){if(Array.isArray(e))return s(e)}function s(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t,n){return(t=U(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e){var t=M(e,"string");return o(t)=="symbol"?t:t+""}function M(e,t){if(o(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(o(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var D=$.extend("ripple",{watch:{"config.ripple":function(t){t?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(t){this.remove(t)},timeout:void 0,methods:{bindEvents:function(t){t.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(t){t.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(t){var n=this.getInk(t);n||(n=A("span",d(d({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root"))),t.appendChild(n),this.$el=n)},remove:function(t){var n=this.getInk(t);n&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(t),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(t){var n=this,r=t.currentTarget,i=this.getInk(r);if(!(!i||getComputedStyle(i,null).display==="none")){if(!this.isUnstyled()&&a(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!p(i)&&!c(i)){var u=Math.max(v(r),b(r));i.style.height=u+"px",i.style.width=u+"px"}var l=g(r),f=t.pageX-l.left+document.body.scrollTop-c(i)/2,m=t.pageY-l.top+document.body.scrollLeft-p(i)/2;i.style.top=m+"px",i.style.left=f+"px",!this.isUnstyled()&&k(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){i&&(!n.isUnstyled()&&a(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(t){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&a(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(t){return t&&t.children?x(t.children).find(function(n){return h(n,"data-pc-name")==="ripple"}):void 0}}});export{D as R};
