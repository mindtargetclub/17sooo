(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c2c1080"],{"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var s=a("ade3"),i=a("5530"),n=(a("4b85"),a("2b0e")),l=a("d9f7"),r=a("80d2"),o=["sm","md","lg","xl"],c=["start","end","center"];function u(t,e){return o.reduce((function(a,s){return a[t+Object(r["D"])(s)]=e(),a}),{})}var p=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},m=u("align",(function(){return{type:String,default:null,validator:p}})),h=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},d=u("justify",(function(){return{type:String,default:null,validator:h}})),v=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},_=u("alignContent",(function(){return{type:String,default:null,validator:v}})),f={align:Object.keys(m),justify:Object.keys(d),alignContent:Object.keys(_)},x={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,a){var s=x[t];if(null!=a){if(e){var i=e.replace(t,"");s+="-".concat(i)}return s+="-".concat(a),s.toLowerCase()}}var y=new Map;e["a"]=n["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:p}},m),{},{justify:{type:String,default:null,validator:h}},d),{},{alignContent:{type:String,default:null,validator:v}},_),render:function(t,e){var a=e.props,i=e.data,n=e.children,r="";for(var o in a)r+=String(a[o]);var c=y.get(r);return c||function(){var t,e;for(e in c=[],f)f[e].forEach((function(t){var s=a[t],i=g(e,t,s);i&&c.push(i)}));c.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(s["a"])(t,"align-".concat(a.align),a.align),Object(s["a"])(t,"justify-".concat(a.justify),a.justify),Object(s["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),y.set(r,c)}(),t(a.tag,Object(l["a"])(i,{staticClass:"row",class:c}),n)}})},"269a":function(t,e){t.exports=function(t,e){var a="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var s in"function"===typeof t.exports&&(a.directives=t.exports.options.directives),a.directives=a.directives||{},e)a.directives[s]=a.directives[s]||e[s]}},"3e3c":function(t,e,a){"use strict";var s=a("d4ec"),i=a("bee2"),n=a("dc59"),l=n["a"].ref("/pmts"),r=function(){function t(){Object(s["a"])(this,t)}return Object(i["a"])(t,[{key:"getAll",value:function(){return l}},{key:"create",value:function(t){return l.push(t)}},{key:"setuuID",value:function(t,e){return n["a"].ref("/pmts/"+t).set(e)}},{key:"update",value:function(t,e){return l.child(t).update(e)}},{key:"delete",value:function(t){return l.child(t).remove()}},{key:"deleteAll",value:function(){return l.remove()}}]),t}();e["a"]=new r},"51c9":function(t,e,a){"use strict";var s=a("f156"),i=a.n(s);i.a},"69e5":function(t,e,a){"use strict";var s=a("d4ec"),i=a("bee2"),n=a("dc59"),l=n["a"].ref("/stss"),r=function(){function t(){Object(s["a"])(this,t)}return Object(i["a"])(t,[{key:"getAll",value:function(){return l}},{key:"create",value:function(t){return l.push(t)}},{key:"update",value:function(t,e){return l.child(t).update(e)}},{key:"delete",value:function(t){return l.child(t).remove()}},{key:"deleteAll",value:function(){return l.remove()}},{key:"getRef",value:function(){return l.no("value",(function(t){console.log(t.val())}))}}]),t}();e["a"]=new r},"7e58":function(t,e,a){},"8f5a":function(t,e,a){},a609:function(t,e,a){"use strict";var s=a("5530"),i=(a("7e58"),a("604c")),n=i["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return i["a"].options.computed.classes.call(this)}},methods:{genData:i["a"].options.methods.genData}}),l=a("a9ad"),r=a("58df");e["a"]=Object(r["a"])(n,l["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},n.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var t=this.setTextColor(this.color,Object(s["a"])({},n.options.methods.genData.call(this)));return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}})},bd27:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.currentTutorial?a("div",{staticClass:"edit-form "},[a("div",{staticClass:"flex justify-center w-full"},[a("div",{staticClass:"w-1/3 text-xs align-text-bottom"}),a("v-btn-toggle",{staticClass:"my-2",attrs:{tile:"",color:"#16a34a",group:""},model:{value:t.toggle_Devtool,callback:function(e){t.toggle_Devtool=e},expression:"toggle_Devtool"}},[a("v-btn",{attrs:{value:"left"}},[t._v(" 詳細資料 ")])],1),a("v-spacer"),a("span",{directives:[{name:"show",rawName:"v-show",value:t.toggle_Devtool==t.left,expression:"toggle_Devtool == left"}],staticClass:"my-3 w-4/5 text-xs font-light "},[t._v(" "+t._s(t.pmt)+" || "+t._s(t.TmpAry_randomId)+" ")]),a("div",{staticClass:"form-group w-2/3 flex py-3"},[a("v-chip",{staticClass:"mt-1 px-3 py-3 text-s font-bold",attrs:{color:"red","text-color":"white"}},[t._v(" "+t._s(t.message)+" ")]),a("v-spacer"),a("div",{staticClass:"text-center rounded py-2 px-10 text-s font-bold bg-green-500 text-white "},[t._v(" "+t._s(t.currentTutorial.pos)+" _ "+t._s(t.currentTutorial.sno)+" _ "+t._s(t.currentTutorial.sno_idx)+" ")]),a("v-btn",{staticClass:"1/5 border-2 border-solid px-2 mx-2",on:{click:t.updateTutorial}},[t._v(" 上傳更新 ")]),t._v(" "+t._s(t.fileName)+" "),a("v-btn",{staticClass:"1/5 border-2 border-solid px-2 mx-2",on:{click:t.resetTutorial}},[t._v(" 重新設定 ")])],1)],1),a("form",[a("div",{staticClass:"flex justify-center w-full mt-10 my-3"},[a("v-row",[a("div",{staticClass:"flex"}),a("div",{staticClass:"grid grid-cols-3 gap-0.5"},[a("div",{staticClass:"col-span-3 "},[a("v-card",{attrs:{color:"#F5F5F5"}},[a("div",{staticClass:"grid grid-cols-3 gap-0.5"},[a("div",{staticClass:"col-span-3 flex justify-between"},[a("v-text-field",{staticClass:"text-xs w-2/12 px-1",attrs:{dense:"",clearable:"",hint:"姓名",placeholder:"姓名"},model:{value:t.currentTutorial.name,callback:function(e){t.$set(t.currentTutorial,"name",e)},expression:"currentTutorial.name"}}),a("v-text-field",{staticClass:"text-xs w-3/12 px-1",attrs:{dense:"",clearable:"",hint:"電話",placeholder:"電話"},model:{value:t.currentTutorial.phone,callback:function(e){t.$set(t.currentTutorial,"phone",e)},expression:"currentTutorial.phone"}}),a("v-text-field",{staticClass:"text-xs w-2/12 px-1",attrs:{dense:"",clearable:"",hint:"客人類型",placeholder:"客人類型"},model:{value:t.currentTutorial.ply_type,callback:function(e){t.$set(t.currentTutorial,"ply_type",e)},expression:"currentTutorial.ply_type"}}),a("v-text-field",{staticClass:"text-xs w-2/12 px-1",attrs:{dense:"",clearable:"",hint:"消費階段",placeholder:"消費階段"},model:{value:t.currentTutorial.ply_statu,callback:function(e){t.$set(t.currentTutorial,"ply_statu",e)},expression:"currentTutorial.ply_statu"}}),a("v-text-field",{staticClass:"text-xs w-1/12 px-1",attrs:{dense:"",clearable:"",hint:"牌號",placeholder:"牌號"},on:{change:t.updateTutorial},model:{value:t.currentTutorial.tmp_idx,callback:function(e){t.$set(t.currentTutorial,"tmp_idx",e)},expression:"currentTutorial.tmp_idx"}}),a("v-text-field",{staticClass:"text-xs w-2/12 px-2",attrs:{dense:"",clearable:"",hint:"離場時間",placeholder:"離場時間"},on:{change:t.updateTutorial},model:{value:t.currentTutorial.left_time,callback:function(e){t.$set(t.currentTutorial,"left_time",e)},expression:"currentTutorial.left_time"}})],1),a("div",{staticClass:"col-span-3 flex justify-between"},[a("v-text-field",{staticClass:"text-xs w-4/12 px-1",attrs:{filled:"",clearable:"",hint:"備註",placeholder:"備註"},model:{value:t.currentTutorial.memo,callback:function(e){t.$set(t.currentTutorial,"memo",e)},expression:"currentTutorial.memo"}}),a("v-text-field",{staticClass:"text-xs w-2/12  px-1",attrs:{filled:"",clearable:"",hint:"客人群組",placeholder:"客人群組"},model:{value:t.currentTutorial.player_group,callback:function(e){t.$set(t.currentTutorial,"player_group",e)},expression:"currentTutorial.player_group"}})],1),a("div",{staticClass:"col-span-2 flex-row"},[a("div",{staticClass:"m-2 rounded-2xl"},[a("span",{staticClass:" text-xs "},[t._v("消費階段")]),a("v-chip-group",{staticClass:" ",attrs:{column:""},on:{change:t.updateTutorial},model:{value:t.currentTutorial.ply_statu,callback:function(e){t.$set(t.currentTutorial,"ply_statu",e)},expression:"currentTutorial.ply_statu"}},[a("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"首次"}},[t._v(" 首次 ")]),a("v-chip",{attrs:{"active-class":"bg-red-500     text-white text-x",value:"免講習"}},[t._v(" 免講習 ")]),a("v-chip",{attrs:{"active-class":"bg-yellow-500 text-white text-x",value:"保留席"}},[t._v(" 保留席 ")]),a("v-chip",{attrs:{"active-class":"bg-blue-500 text-white text-x",value:"續未繳"}},[t._v(" 續.未繳費 ")]),a("v-chip",{attrs:{"active-class":"bg-green-500    text-white text-x",value:"續時0.5 "},on:{click:function(e){return t.left_Mdf(1)}}},[t._v(" 續0.5 ")]),a("v-chip",{attrs:{"active-class":"bg-green-500    text-white text-x",value:"續時1.0 "},on:{click:function(e){return t.left_Mdf(2)}}},[t._v(" 續1.0 ")])],1)],1),a("div",{staticClass:"m-2 rounded-2xl"},[a("span",{staticClass:" text-xs "},[t._v("客人類型")]),a("v-chip-group",{staticClass:" ",attrs:{"active-class":"bg-yellow-600 text-white text-xs  ",column:""},model:{value:t.currentTutorial.ply_type,callback:function(e){t.$set(t.currentTutorial,"ply_type",e)},expression:"currentTutorial.ply_type"}},[a("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"散客"}},[t._v(" 散客 ")]),a("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"自備弓"}},[t._v(" 自備弓 ")]),a("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"學員"}},[t._v(" 學員 ")]),a("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"明星"}},[t._v(" 明星 ")]),a("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"月卡"}},[t._v(" 月卡 ")]),a("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"選手"}},[t._v(" 選手 ")])],1)],1),a("div",{staticClass:"flex justify-center"},[a("div",{staticClass:"m-2 rounded-2xl"},[a("span",{staticClass:" text-xs "},[t._v("距離 （公尺）")]),a("v-chip-group",{staticClass:" ",attrs:{"active-class":"bg-yellow-600 text-white text-xs  ",multiple:""},model:{value:t.currentTutorial.memo,callback:function(e){t.$set(t.currentTutorial,"memo",e)},expression:"currentTutorial.memo"}},[a("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"體驗"}},[t._v(" 體驗 ")]),a("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"長距離"}},[t._v(" 長距離 ")])],1)],1),a("div",{staticClass:" m-2 rounded-2xl"},[a("span",{staticClass:" text-xs "},[t._v("接駁需求")]),a("v-chip-group",{staticClass:" ",attrs:{"active-class":"bg-yellow-600 text-white text-xs  ",multiple:""},model:{value:t.currentTutorial.memo,callback:function(e){t.$set(t.currentTutorial,"memo",e)},expression:"currentTutorial.memo"}},[a("v-chip",{attrs:{"active-class":"bg-red-500   text-white text-x",value:"接駁.上下"}},[t._v(" 接駁.上下 ")]),a("v-chip",{attrs:{"active-class":"bg-red-500   text-white text-x",value:"接駁.下山"}},[t._v(" 接駁.下山 ")]),a("v-chip",{attrs:{"active-class":"bg-red-500   text-white text-x",value:"接駁.上山"}},[t._v(" 接駁.上山 ")])],1)],1)])]),a("div",{staticClass:"col-span-1 flex-row"},[a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.chk_leftTime(),expression:"chk_leftTime() === 1"}],staticClass:"m-2  "},[a("span",{staticClass:" text-xs "},[t._v("離場時間(上午)")]),a("v-chip-group",{staticClass:" ",attrs:{column:""},model:{value:t.currentTutorial.left_time,callback:function(e){t.$set(t.currentTutorial,"left_time",e)},expression:"currentTutorial.left_time"}},[a("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"09:00"}},[t._v(" 09:00 ")]),a("v-chip",{attrs:{"active-class":"bg-red-500     text-white text-x",value:"10:00"}},[t._v(" 10:00 ")]),a("v-chip",{attrs:{"active-class":"bg-blue-500    text-white text-x",value:"11:00"}},[t._v(" 11:00 ")]),a("v-chip",{attrs:{"active-class":"bg-pink-500    text-white text-x",value:"12:00"}},[t._v(" 12:00 ")])],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.chk_leftTime(),expression:"chk_leftTime() === 2"}],staticClass:"m-2 "},[a("span",{staticClass:" text-xs "},[t._v("離場時間(下午)")]),a("v-chip-group",{staticClass:" ",attrs:{column:""},model:{value:t.currentTutorial.left_time,callback:function(e){t.$set(t.currentTutorial,"left_time",e)},expression:"currentTutorial.left_time"}},[a("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"13:00"}},[t._v(" 13:00 ")]),a("v-chip",{attrs:{"active-class":"bg-red-500     text-white text-x",value:"14:00"}},[t._v(" 14:00 ")]),a("v-chip",{attrs:{"active-class":"bg-blue-500    text-white text-x",value:"15:00"}},[t._v(" 15:00 ")]),a("v-chip",{attrs:{"active-class":"bg-pink-500    text-white text-x",value:"16:00"}},[t._v(" 16:00 ")]),a("v-chip",{attrs:{"active-class":"bg-yellow-500 text-white text-x",value:"17:00"}},[t._v(" 17:00 ")])],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:3===t.chk_leftTime(),expression:"chk_leftTime() === 3"}],staticClass:"m-2 "},[a("span",{staticClass:" text-xs "},[t._v("離場時間(晚上)")]),a("v-chip-group",{directives:[{name:"show",rawName:"v-show",value:3==t.chk_leftTime(),expression:"chk_leftTime() == 3"}],staticClass:" ",attrs:{column:""},model:{value:t.currentTutorial.left_time,callback:function(e){t.$set(t.currentTutorial,"left_time",e)},expression:"currentTutorial.left_time"}},[a("v-chip",{attrs:{"active-class":"bg-green-500   text-white text-x",value:"18:00"}},[t._v(" 18:00 ")]),a("v-chip",{attrs:{"active-class":"bg-red-500     text-white text-x",value:"19:00"}},[t._v(" 19:00 ")]),a("v-chip",{attrs:{"active-class":"bg-blue-500    text-white text-x",value:"20:00"}},[t._v(" 20:00 ")]),a("v-chip",{attrs:{"active-class":"bg-pink-500    text-white text-x",value:"21:00"}},[t._v(" 21:00 ")]),a("v-chip",{attrs:{"active-class":"bg-yellow-500 text-white text-x",value:"22:00"}},[t._v(" 22:00 ")])],1)],1)])])])],1),a("div",{staticClass:"col-span-3 "})])])],1)])]):a("div",[a("br"),a("p",[t._v("請 確認 靶位資訊...")])])},i=[],n=(a("4160"),a("c975"),a("b0c0"),a("d3b7"),a("ac1f"),a("25f0"),a("1276"),a("159b"),a("5530")),l=a("69e5"),o=a("3e3c"),c=a("2b0e"),u=a("2347"),p=a.n(u);c["a"].component("downloadCsv",p.a);var m={name:"tutorial",props:["tutorial"],data:function(){return{tmp:{memo:""},toggle_Devtool:"",dialog:!1,dg2:!1,icc:["Foo","Bar","Fizz","Buzz"],steps_name:["預先填寫","報到繳費","安排靶位","確認號碼牌","追問續時","入帳登記","快速入場"],ply_statu:["首次","續時","免安","練習","上課"],ply_type:["散客","自備弓","學員","明星","選手","月卡"],ply_amt:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22"],left_time_idx:["18:00","19:00","20:00","21:00","22:00"],pmt_statu:["已建立","已審核","已入帳","作廢"],pmt_type:["現金","LniePay","信用卡","網銀轉帳","動茲券","練習券"],tabs_idx_mid:["00射箭場","01應用射箭","15投影互動","全部"],tabs_idx_dtl:["預設","常用","0001場地","0002租弓","0003活動","0004課程","0005運動卷","0099其它","食品","工具"],tabs_idx_cnt:["0001場地","0002租弓","0003活動","0004課程","0005運動卷","0099其它","食品","工具"],hds_Left:[{text:"名稱",value:"name"},{text:"消費進度",value:"ply_statu"},{text:"消費單號",value:"pmt_sno"},{text:"收入",value:"memo"},{text:"現金",value:"memo"},{text:"網銀轉帳",value:"memo"},{text:"信用卡",value:"memo"},{text:"LinePay",value:"memo"},{text:"動茲券",value:"memo"}],headers:[{text:"名稱",value:"name"},{text:"牌號",value:"ply_amt"},{text:"手機",value:"phone"},{text:"流水號",value:"key"},{text:"編輯",value:"edit"},{text:"產品名稱",value:"pd_name"},{text:"備註",value:"memo"}],head_st:[{text:"名稱",value:"name"},{text:"流水號",value:"key"},{text:"續時排位",value:"pre_seat"},{text:"消費單號",value:"memo"}],STLists:{key:"",nema:"",nk_N:""},PmtLists:[],tutorials:[],search:"",paynote_sno:"",autoCNT:!1,Bking_shootPos:!1,Bking_Tmp_idx:!1,show:!0,showw:!1,showww:!1,showwww:!1,message:"請選擇一筆資料",step_idx_now:6,json:"",tabs_Now:null,TmpAry_randomId:[],TmpAry_tmp_idx:[],TmpAry_ply_statu:[],TmpAry_ply_type:[],TmpAry_WillPut_tmp_idx:[],tmp_idx_fst:0,tmp_idx_ary:[],selected:[],bch_A:"",bch_B:"",pmt:{name:"",phone:"",ply_amt:"",plySTATU:"首次",left_time:"",pmt_amt:{need_get:0,real_get:0,blscfg:"",payCash:0,payLinPay:0,payCTCard:0,payNetBank:0,payGovTik:0},creatDate:"",shootPos_dtl:[],dtl_1:{pd_sno:"",pd_name:"",ply_type:"",ply_amt:0},dtl_2:{pd_sno:"",pd_name:"",ply_type:"",ply_amt:0}},currentTutorial:{sno_id:"",pos:"",sno:"",sno_idx:"",left_time:"",tmp_idx:"",memo:"",ply_type:"",ply_statu:"",paymtTyp:"",pd_sno:"",amt:"",paymt:"",slted:[]}}},watch:{tutorial:function(t){this.currentTutorial=Object(n["a"])({},t),this.message=""},ctr_leftTime:function(){var t=new Date,e=t.getHours();e<12?this.fb_time=0:e>=12&&e<=18?this.fb_time=1:e>=18&&e<=23&&(this.fb_time=2),this.currentTutorial.memo=this.fb_time+"||||"+e},steps:function(t){this.step_idx_now>t&&(this.step_idx_now=t)}},created:function(){var t=this;fetch("https://www.ragic.com/xihu/forms/137?api&APIKey=cHB2WURReGNHLzNaU1JyZ2h0YlVwbW5DM1JmN2VzRDV5ZUtQNVlrcXJtZWVhYjZoUHl6UmVWbmkvRkI5Zi82cw==&listing").then((function(t){return t.json()})).then((function(e){t.json=e}))},methods:{getPrice:function(t){for(var e=0,a=0,s=0;s<this.json.length;s++)t==this.json[s].商品代號&&(a=s);return e=this.json[a].商品價格,e},tmp_idx_fst:0,CNT_tmp_idx:function(){for(var t=this.tmp_idx_fst,e=parseInt(this.tmp_idx_fst)+parseInt(this.pmt.shootPos_dtl.length),a=t;a<e;a++)this.TmpAry_tmp_idx.push(a),this.TmpAry_ply_statu.push("首次"),this.TmpAry_ply_type.push("散客")},CNTneed_pmt:function(){var t=0,e=this.pmt.dtl_1.pd_sno;10011==e?t=100:50005==e&&(t=500),this.pmt.pmt_amt.need_get=t*parseInt(this.pmt.dtl_1.ply_amt),this.BLS_pmt(),this.CNTply_amt()},BLS_pmt:function(){var t=parseInt(this.pmt.pmt_amt.payCash)+parseInt(this.pmt.pmt_amt.payLinPay)+parseInt(this.pmt.pmt_amt.payNetBank)+parseInt(this.pmt.pmt_amt.payCTCard)+parseInt(this.pmt.pmt_amt.payGovTik),e=this.pmt.pmt_amt.need_get-t;0==t?this.pmt.pmt_amt.blscfg="尚未繳費":0==e?this.pmt.pmt_amt.blscfg="剛剛好，沒問題":e>0?this.pmt.pmt_amt.blscfg="少了"+e+"元":e<0&&(this.pmt.pmt_amt.blscfg="多"+-1*e+"元")},CNTpmt_Amt:function(){var t=parseInt(this.pmt.pmt_amt.payCash)+parseInt(this.pmt.pmt_amt.payLinPay)+parseInt(this.pmt.pmt_amt.payNetBank)+parseInt(this.pmt.pmt_amt.payCTCard)+parseInt(this.pmt.pmt_amt.payGovTik);this.pmt.pmt_amt.real_get=t,this.CNTneed_pmt()},CNTply_amt:function(){var t=0,e=0;null!==parseInt(this.pmt.dtl_1.ply_amt)|NaN!==parseInt(this.pmt.dtl_1.ply_amt)&&(t=parseInt(this.pmt.dtl_1.ply_amt)),null!==parseInt(this.pmt.dtl_2.ply_amt)|NaN!==parseInt(this.pmt.dtl_2.ply_amt)&&(e=parseInt(this.pmt.dtl_2.ply_amt)),this.pmt.ply_amt=t+e},mdf_shootPos:function(t){},savePmt2:function(){var t=this,e=Math.floor(1e3*Math.random())+"A"+Date.now(),a={name:this.pmt.name,phone:this.pmt.phone,pd_name:this.pmt.dtl_1.pd_name,ply_amt:this.pmt.dtl_1.ply_amt};o["a"].setuuID(e.toString(),a).then((function(){t.message="成功紀錄，收費資料",t.TmpAry_randomId.push(e.toString()),t.step_idx_now=2})).catch((function(e){console.log(e),t.message="收費未成功..請再試一次"}))},editItem:function(t){this.editedIndex=this.tutorials.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0,this.t.key=t.key},updateTutorial:function(){var t=this,e={sno_id:this.currentTutorial.sno_idx,pos:this.currentTutorial.pos,sno:this.currentTutorial.sno,sno_idx:this.currentTutorial.sno_idx,tmp_idx:this.currentTutorial.tmp_idx,left_time:this.currentTutorial.left_time,memo:this.currentTutorial.memo,amt:this.currentTutorial.amt,paymt:this.currentTutorial.paymt,ply_statu:this.currentTutorial.ply_statu,ply_type:this.currentTutorial.ply_type};l["a"].update(this.currentTutorial.key,e).then((function(){t.message="更新資料，上傳成功!"})).catch((function(t){console.log(t)}))},upT:function(t){var e=this;o["a"].update(t.key,t).then((function(){e.message="更新資料，上傳成功!"})).catch((function(t){console.log(t)})),alert(t)},upT_Mdf:function(t){var e=this;o["a"].update(t.key,t).then((function(){e.message="更新資料，上傳成功!"})).catch((function(t){console.log(t)})),alert(t)},upT_byChk:function(){for(var t=this,e=0;e<=this.selected.length;e++){var a={key:this.selected[e].key,name:this.selected[e].name,ply_amt:this.bch_A};o["a"].update(a.key,a).then((function(){t.message="更新資料，上傳成功!"})).catch((function(t){console.log(t)}))}alert("更新完成")},pass_payclass_byragic:function(t,e,a){},trans_payclass_byragic:function(t){this.paynote_sno=t},trans_pmtkey_2ary:function(t){this.TmpAry_randomId.push(t)},left_Mdf:function(t){var e=this.currentTutorial.left_time.split(":");1==t?parseInt(e[1])>=30?this.currentTutorial.left_time=parseInt(e[0])+1+":"+(parseInt(e[1])-30):parseInt(e[1])<30&&(this.currentTutorial.left_time=e[0]+":"+(parseInt(e[1])+30)):2==t&&(this.currentTutorial.left_time=parseInt(e[0])+1+":"+e[1])},numMdf:function(t){1==t?this.currentTutorial.tmp_idx++:2==t&&this.currentTutorial.tmp_idx--},resetTutorial:function(){var t=this;this.currentTutorial.tmp_idx="",this.currentTutorial.left_time="",this.currentTutorial.memo="",this.currentTutorial.ply_statu="",this.currentTutorial.paymt="",this.currentTutorial.amt="";var e={tmp_idx:"",left_time:"",memo:"",ply_statu:"",ply_type:"",amt:"",paymt:""};l["a"].update(this.currentTutorial.key,e).then((function(){t.message="資料，清除成功 !"})).catch((function(t){console.log(t)}))},updateShoootPos:function(t){var e=this,a=this.pmt.shootPos_dtl,s=[];if(1==t){for(var i=0;i<a.length;i++)s={memo:this.TmpAry_randomId[this.TmpAry_randomId.length-1]},l["a"].update(a[i],s).then((function(){e.message="更新資料，上傳成功!"})).catch((function(t){console.log(t)}));this.step_idx_now=3,this.Bking_shootPos=!1}else if(2==t){for(var n=0;n<a.length;n++)s={memo:this.TmpAry_randomId[this.TmpAry_randomId.length-1],tmp_idx:this.TmpAry_tmp_idx[n],ply_type:this.TmpAry_ply_type[n],ply_statu:this.TmpAry_ply_statu[n]},l["a"].update(a[n],s).then((function(){e.message="更新資料，上傳成功!"})).catch((function(t){console.log(t)}));this.step_idx_now=4,this.Bking_Tmp_idx=!1}},deleteTutorial:function(){var t=this;l["a"].delete(this.currentTutorial.key).then((function(){t.$emit("refreshList")})).catch((function(t){console.log(t)}))},removeAllTutorials:function(){var t=this;l["a"].deleteAll().then((function(){t.refreshList()})).catch((function(t){console.log(t)}))},chk_leftTime:function(){var t=0,e=this.dayjs(Date.now()).format("HH");return e<=12?t=1:e>10&&e<=18?t=2:e>16&&e<=25&&(t=3),t},updateCurrentTime:function(){this.cT=Date.now()},load_STLists:function(){for(var t=r;t<Max;t++)this.STLists.push(t)},onDataChange:function(t){var e=[];t.forEach((function(t){var a=t.key,s=t.val();e.push({key:a,pos:s.pos,sno:s.sno,sno_idx:s.sno_idx,sno_id:s.sno_id,tmp_idx:s.tmp_idx,left_time:s.left_time,memo:s.memo,player_group:s.player_group,amt:s.amt,paymt:s.paymt,ply_slted:s.ply_slted,ply_type:s.ply_type})})),this.tutorials=e;var a=[];t.forEach((function(t){var e=t.key,s=t.val();a.push({key:e,pos:s.pos,sno:s.sno,sno_idx:s.sno_idx,nk_N:s.pos+"_"+s.sno+"_"+s.sno_idx})})),this.STLists=a},pmt_onDataChange:function(t){var e=[];t.forEach((function(t){var a=t.key,s=t.val();e.push({key:a,name:s.name,phone:s.phone,ply_amt:s.ply_amt,memo:s.memo,pd_name:s.pd_name})})),this.pmtLists=e}},mounted:function(){l["a"].getAll().on("value",this.onDataChange),o["a"].getAll().on("value",this.pmt_onDataChange),this.message="",this.currentTutorial=Object(n["a"])({},this.tutorial)}},h=m,d=(a("51c9"),a("2877")),v=a("6544"),_=a.n(v),f=a("8336"),x=a("a609"),g=a("b0af"),y=a("cc20"),b=a("ef9a"),T=a("0fd9"),w=a("2fa4"),C=a("8654"),k=Object(d["a"])(h,s,i,!1,null,null,null);e["a"]=k.exports;_()(k,{VBtn:f["a"],VBtnToggle:x["a"],VCard:g["a"],VChip:y["a"],VChipGroup:b["a"],VRow:T["a"],VSpacer:w["a"],VTextField:C["a"]})},ef9a:function(t,e,a){"use strict";var s=a("5530"),i=(a("8f5a"),a("7efd")),n=a("a9ad"),l=a("58df");e["a"]=Object(l["a"])(i["a"],n["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,Object(s["a"])({},i["a"].options.methods.genData.call(this)))}}})},f156:function(t,e,a){}}]);