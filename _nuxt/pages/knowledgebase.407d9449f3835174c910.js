webpackJsonp([12],{"+/6O":function(t,i,e){"use strict";i.a={props:{item:{type:Object,required:!0},index:{type:Number,required:!0}},filters:{usdollar:function(t){return"$"+t}},methods:{visitKbitem:function(){this.$store.commit("addKbitem",this.kbitem)},visitLink:function(){this.$store.commit("addKbitem",this.kbitem)}}}},"33hr":function(t,i,e){"use strict";var a=e("VO7l"),n=e("i5Z5");i.a={components:{AppMastheadtoo2:a.a,AppKbitem:n.a},computed:{mKbitems:function(){return this.$store.getters.kbitems}}}},"3QOp":function(t,i,e){"use strict";i.a={props:{bkcolor:{type:String,default:"white"},title:{type:String,default:"Tiny Food"},img:{type:String,default:"banner-ppl"}}}},"784x":function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,".item[data-v-0f063620]{width:100%;min-width:305px;border-radius:5px;padding:20px;background:#fff;position:relative}.item>img[data-v-0f063620]{padding:10px}.equatorialpill[data-v-0f063620],.mountainpill[data-v-0f063620]{background:#e82319;color:#fff;font-family:Barlow,sans-serif;position:absolute;right:30px;top:60px;padding:2px 10px 4px;text-transform:uppercase;font-size:10px;font-weight:700;border-radius:10px}p[data-v-0f063620]{font-size:18px}",""])},"9JJq":function(t,i,e){var a=e("784x");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("209f7a44",a,!1,{sourceMap:!1})},NXcC:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("33hr"),n=e("PMLg"),o=!1;var s=function(t){o||e("l+oX")},r=e("VU/8")(a.a,n.a,!1,s,null,null);r.options.__file="pages/knowledgebase.vue",i.default=r.exports},PMLg:function(t,i,e){"use strict";var a=function(){var t=this.$createElement,i=this._self._c||t;return i("main",{staticClass:"capsule"},[i("div",{staticClass:"saleimg"},[i("app-mastheadtoo2",{attrs:{img:"banner-ppl_knowledgebase",title:"Tiny Food hyper-local food production, transportation and distribution Knowledgebase by SCD Hub",bkcolor:"#fff"}})],1),i("div",{staticClass:"contain"},[i("transition-group",{staticClass:"kbcontent",attrs:{name:"kbitems",tag:"section"}},this._l(this.mKbitems,function(t,e){return i("app-kbitem",{key:"item",attrs:{item:t,index:e}})}),1)],1)])};a._withStripped=!0;var n={render:a,staticRenderFns:[]};i.a=n},VO7l:function(t,i,e){"use strict";var a=e("3QOp"),n=e("fM3o"),o=!1;var s=function(t){o||e("zDKi")},r=e("VU/8")(a.a,n.a,!1,s,"data-v-9a42812e",null);r.options.__file="components/AppMastheadtoo2.vue",i.a=r.exports},fM3o:function(t,i,e){"use strict";var a=function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mastheadtoo2",style:"background:"+this.bkcolor},[i("img",{staticClass:"ppl-banner",attrs:{src:"/"+this.img+".png",alt:"`/${title}` not for profit foundation driven network quality food access network"}})])};a._withStripped=!0;var n={render:a,staticRenderFns:[]};i.a=n},i5Z5:function(t,i,e){"use strict";var a=e("+/6O"),n=e("pYWh"),o=!1;var s=function(t){o||e("9JJq")},r=e("VU/8")(a.a,n.a,!1,s,"data-v-0f063620",null);r.options.__file="components/AppKbitem.vue",i.a=r.exports},"l+oX":function(t,i,e){var a=e("zJkh");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("0e525127",a,!1,{sourceMap:!1})},mHeV:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,"h1[data-v-9a42812e]{color:#fff;position:relative;z-index:100;font-size:60px;padding:8px 80px}#titletext[data-v-9a42812e]{font-size:42px}.bk[data-v-9a42812e]{position:absolute;top:0;left:0}.ppl-banner[data-v-9a42812e]{z-index:10;height:355px}.mastheadtoo2[data-v-9a42812e]{background-color:#fff;height:355px;color:#fff}",""])},pYWh:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"item"},[e("img",{attrs:{src:"/"+t.item.img,alt:"Image of "+t.item.name,width:"140",align:"left"}}),e("p",[e("BR"),e("b",[t._v(t._s(t.item.name))])],1),e("p",[t._v(t._s(t.item.short)+" \n  ")]),e("button",{staticClass:"add",on:{click:function(i){t.visitLink()}}},[t._v("More")])])};a._withStripped=!0;var n={render:a,staticRenderFns:[]};i.a=n},zDKi:function(t,i,e){var a=e("mHeV");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("5dc56a79",a,!1,{sourceMap:!1})},zJkh:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,".saleimg .ppl-banner{height:105%}.kbcontent{float:right;width:92%;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:10px;padding:0!important}",""])}});