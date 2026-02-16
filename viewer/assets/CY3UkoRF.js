import{bn as c,an as u,z as m,A as i,Y as f,B as r,ae as t,C as s,a0 as g,a1 as h,a6 as y,a7 as v}from"./DnoyKoxn.js";import{s as b}from"./_HAkkcDx.js";var p=c(),T=`
    .p-terminal {
        display: block;
        height: dt('terminal.height');
        overflow: auto;
        background: dt('terminal.background');
        color: dt('terminal.color');
        border: 1px solid dt('terminal.border.color');
        padding: dt('terminal.padding');
        border-radius: dt('terminal.border.radius');
    }

    .p-terminal-prompt {
        display: flex;
        align-items: center;
    }

    .p-terminal-prompt-value {
        flex: 1 1 auto;
        border: 0 none;
        background: transparent;
        color: inherit;
        padding: 0;
        outline: 0 none;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
    }

    .p-terminal-prompt-label {
        margin-inline-end: dt('terminal.prompt.gap');
    }

    .p-terminal-input::-ms-clear {
        display: none;
    }

    .p-terminal-command-response {
        margin: dt('terminal.command.response.margin');
    }
`,k={root:"p-terminal p-component",welcomeMessage:"p-terminal-welcome-message",commandList:"p-terminal-command-list",command:"p-terminal-command",commandValue:"p-terminal-command-value",commandResponse:"p-terminal-command-response",prompt:"p-terminal-prompt",promptLabel:"p-terminal-prompt-label",promptValue:"p-terminal-prompt-value"},w=u.extend({name:"terminal",style:T,classes:k}),L={name:"BaseTerminal",extends:b,props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},style:w,provide:function(){return{$pcTerminal:this,$parentInstance:this}}},x={name:"Terminal",extends:L,inheritAttrs:!1,data:function(){return{commandText:null,commands:[]}},mounted:function(){p.on("response",this.responseListener),this.$refs.input.focus()},updated:function(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount:function(){p.off("response",this.responseListener)},methods:{onClick:function(){this.$refs.input.focus()},onKeydown:function(n){n.key==="Enter"&&this.commandText&&(this.commands.push({text:this.commandText}),p.emit("command",this.commandText),this.commandText="")},responseListener:function(n){this.commands[this.commands.length-1].response=n}}};function C(e,n,M,S,l,o){return i(),m("div",t({class:e.cx("root"),onClick:n[2]||(n[2]=function(){return o.onClick&&o.onClick.apply(o,arguments)})},e.ptmi("root")),[e.welcomeMessage?(i(),m("div",t({key:0,class:e.cx("welcomeMessage")},e.ptm("welcomeMessage")),s(e.welcomeMessage),17)):f("",!0),r("div",t({class:e.cx("commandList")},e.ptm("content")),[(i(!0),m(g,null,h(l.commands,function(a,d){return i(),m("div",t({key:a.text+d.toString(),class:e.cx("command")},{ref_for:!0},e.ptm("commands")),[r("span",t({class:e.cx("promptLabel")},{ref_for:!0},e.ptm("prompt")),s(e.prompt),17),r("span",t({class:e.cx("commandValue")},{ref_for:!0},e.ptm("command")),s(a.text),17),r("div",t({class:e.cx("commandResponse"),"aria-live":"polite"},{ref_for:!0},e.ptm("response")),s(a.response),17)],16)}),128))],16),r("div",t({class:e.cx("prompt")},e.ptm("container")),[r("span",t({class:e.cx("promptLabel")},e.ptm("prompt")),s(e.prompt),17),y(r("input",t({ref:"input","onUpdate:modelValue":n[0]||(n[0]=function(a){return l.commandText=a}),class:e.cx("promptValue"),type:"text",autocomplete:"off",onKeydown:n[1]||(n[1]=function(){return o.onKeydown&&o.onKeydown.apply(o,arguments)})},e.ptm("commandText")),null,16),[[v,l.commandText]])],16)],16)}x.render=C;export{x as default};
