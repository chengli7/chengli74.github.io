import{_ as d,r as i,o as s,c as n,a as l,F as p,i as u,n as x,t as h,e as m,w as f,d as v}from"./app-536d921a.js";const C={name:"steps",data(){return{steps:["注册","认证","开通账号","成功","结束"],currentIndex:0}},methods:{handleClick(r){this.currentIndex=r},next(){this.currentIndex<this.steps.length-1&&this.currentIndex++,console.log(this.currentIndex)}}},k={id:"app"},I={class:"steps"},g=["onClick"];function y(r,c,b,B,a,e){const _=i("el-button");return s(),n("div",k,[l("ul",I,[(s(!0),n(p,null,u(a.steps,(t,o)=>(s(),n("li",{class:x({active:a.currentIndex===o}),onClick:N=>e.handleClick(o)},h(t),11,g))),256))]),l("button",{onClick:c[0]||(c[0]=(...t)=>e.next&&e.next(...t))},"下一步"),m(_,{type:"primary"},{default:f(()=>[v("主要按钮")]),_:1})])}const w=d(C,[["render",y],["__scopeId","data-v-210c13ac"],["__file","steps.vue"]]);export{w as default};