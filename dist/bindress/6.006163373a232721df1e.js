(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{oOSf:function(t,e,i){"use strict";i.r(e),i.d(e,"DetailModule",function(){return h});var s=i("SVse"),n=i("iInd"),o=i("8Y7J"),r=i("wD+u"),a=i("fMxG"),c=i("LE4H");const l=[{path:"",component:(()=>{class t{constructor(t,e,i,s){this.activatedRoute=t,this.afs=e,this.storage=i,this.itemDetailService=s}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.item=t.item.split("/"),console.log(this.item),this.itemDetailService.getItemInfo().subscribe(t=>{(null==t?void 0:t.itemId)?this.itemInfo=t:this.getItemDetail()})})}getItemDetail(){let t;this.afs.collection(this.item[1],t=>t.where("itemId","==",this.item[2])).valueChanges().subscribe(e=>{(null==e?void 0:e.length)>0&&(t=e[0],this.afs.collection("users").doc(this.item[0]).valueChanges().subscribe(e=>{let i;i=e,t.ownerInfo=i,t.imagesUrl=[],this.storage.ref(this.item[1]+"/"+this.item[0]+"/"+this.item[2]).listAll().subscribe(e=>{e.items.forEach(e=>{e.getDownloadURL().then(e=>{t.imagesUrl.push(e)})})}),this.itemInfo=t}))})}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(n.a),o.Nb(r.a),o.Nb(a.a),o.Nb(c.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-detail"]],decls:2,vars:0,template:function(t,e){1&t&&(o.Sb(0,"p"),o.Fc(1,"detail works!"),o.Rb())},styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[n.e.forChild(l)],n.e]}),t})(),h=(()=>{class t{}return t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({factory:function(e){return new(e||t)},imports:[[s.c,u]]}),t})()}}]);