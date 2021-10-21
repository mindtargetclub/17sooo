<template> 
  <div class="submit-form">
    <div v-if="!submitted">  
      <v-form>
        <v-container >  
          <strong>基本資料：</strong>
            <div class="md:grid grid-cols-5 gap-4">
                <div class="bg-gray-200 col-span-5 rounded-lg pt-3">
                  <div class="md:grid grid-cols-4 gap-2">
                    <div class=" md:p-2 ">
                        <v-text-field   
                          label="顧客姓名"
                          solo
                          clearable
                          prepend-inner-icon="mdi-creation"
                          v-model="PMN.userName"
                        ></v-text-field>  
                    </div>  
                    <div class=" md:p-2 ">
                        <v-text-field   
                          label="顧客手機"
                          solo
                          clearable
                          prepend-inner-icon="mdi-phone"
                          v-model="PMN.userName"
                        ></v-text-field>  
                    </div>  
                    <div class=" md:p-2 ">
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y 
                        min-width="auto"
                      >

                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="date"
                            label="預約日期"
                            prepend-inner-icon="mdi-calendar"
                            readonly
                            solo
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="date"
                          :active-picker.sync="activePicker"
                          :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                          min="1950-01-01"
                          @change="saveDate"
                        ></v-date-picker>
                      </v-menu> 
                    </div> 
                    <div class=" md:p-2">
                      <v-select 
                        :items="onlineRound"
                        prepend-inner-icon="mdi-clipboard-check"
                        label="預約場次" 
                        solo
                        persistent-hint
                      ></v-select> 
                    </div>   
                    <div class=" md:p-2 ">   
                      <v-select  
                              v-model="PMN.Payment_Type"
                              :items="temp_mbrType"
                              prepend-inner-icon="mdi-account"
                              label="會員類別"
                              multiple
                              solo
                              persistent-hint
                            ></v-select> 
                    </div> 
                    <div class=" md:p-2 "> 
                    <v-text-field   
                            label="保險填註記"
                            prepend-inner-icon="mdi-heart"
                            solo
                            clearable 
                          ></v-text-field>
                    </div> 

                    <div class=" md:p-2 col-span-1"> 
                        <v-select 
                        :items="cntPeoepe"
                        prepend-inner-icon="mdi-widgets"
                        label="入場人數" 
                        solo
                        persistent-hint
                      ></v-select>  
                    </div>  

                    <div class=" md:p-2  col-span-1">
                      <v-dialog
                        ref="dialog" 
                        v-model="modal2"
                        :return-value.sync="time"
                        persistent
                        width="290px"
                        >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="chkinTime"
                            label="報到時間"
                            prepend-inner-icon="mdi-clock-time-four-outline"
                            readonly
                            solo
                            value=""
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-time-picker
                          v-if="modal2"
                          v-model="time"
                          full-width
                        >
                          <v-spacer></v-spacer>
                          <v-btn
                            text
                            color="primary"
                            @click="modal2 = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog.save(time)"
                          >
                            OK
                          </v-btn>
                        </v-time-picker>
                      </v-dialog>
                    </div> 
                  </div> 
                </div>

        
                <div class="border-1 border-gray-300 rounded-lg p-2 col-span-1  ">  
                  <!-- <strong> 首次消費： </strong> -->
                     
                    <strong>接駁：</strong> 小計： {{ }} 元
                      <div class="md:grid grid-cols-2 gap-2 "> 
                        <div class=" md:p-2 col-span-2">
                          <v-select
                            v-model="PMN.Payment_Type"
                            :items="cntPeoepe"
                            prepend-icon="mdi-bus"
                            label="單趟.接駁人數" 
                            solo
                            chips 
                            persistent-hint
                          ></v-select>  

                          <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="cntPeoepe" 
                            prepend-icon="mdi-swap-horizontal"
                            label="來回.接駁人數" 
                            solo
                            chips 
                            persistent-hint
                          ></v-select>
                        </div> 
                        <!-- <a class="col-span-2 "> </a> -->
                        
                      </div> 
                      
                  </div> 
        <div class="border-1 border-gray-300 rounded-lg p-2 col-span-1 "> 
                    <strong>弓具：</strong> 小計： {{ }} 元
                      <div class="md:grid grid-cols-2 "> 
                        <div class=" md:p-2 ">
                          <v-select
                            v-model="PMN.Payment_Type"
                            :items="cntPeoepe" 
                            chips  
                            label="傳統弓 100" 
                            persistent-hint
                          ></v-select> 
                        </div>  
                        <div class=" md:p-2 ">
                          <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="cntPeoepe"  
                            label="反曲弓 200"  
                            chips 
                            persistent-hint
                          ></v-select>
                        </div> 
                        <div class=" md:p-2 ">
                          <v-select
                            v-model="PMN.Payment_Type"
                            :items="cntPeoepe" 
                            label=" 複合弓 200"  
                            chips  
                            persistent-hint
                          ></v-select> 
                        </div>  
                        <div class=" md:p-2 ">
                          <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="cntPeoepe"  
                            label="租箭(6支) 100"  
                            chips 
                            persistent-hint
                          ></v-select>
                        </div>  
                        <div class=" md:p-2 ">
                          <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="cntPeoepe"  
                            label="輕.體驗 400"  
                            chips 
                            persistent-hint
                          ></v-select>
                         </div>  
                         <div class=" md:p-2 ">
                          <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="cntPeoepe"
                            label="晚.體驗 500"   
                            chips 
                            persistent-hint
                          ></v-select>
                        </div> 
                        <div class=" md:pt-5 cols-2">  
                        </div> 
                      </div>   
                    </div> 


        <div class="border-1 border-gray-300 rounded-lg p-2 col-span-1 ">
        <strong> 場地： </strong> 小計： {{ }} 元
        <div class="md:grid grid-cols-2 gap-2 ">  
                    <div class=" md:p-2 ">
                          <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="cntPeoepe"  
                            label="首次.場地費 200"  
                            chips 
                            persistent-hint
                          ></v-select>
                        </div>  
                        <div class=" md:p-2 ">
                          <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="cntPeoepe"  
                            label="觀賞.清潔費 100"  
                            chips 
                            persistent-hint
                          ></v-select>
                         </div>   
                         <div class=" md:p-2 col-span-2">
                          <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="cntPeoepe"  
                            label="支付方式"  
                            chips 
                            persistent-hint
                          ></v-select>
                        </div>   
                    </div> 
                </div>
        <div class="border-1 border-gray-300 rounded-lg p-2 col-span-1 ">

        <strong> 續時加購： </strong> 小計： {{ }} 元
        <div class="md:grid grid-cols-2 gap-2 ">  
                       
                        <div class=" md:p-2 ">
                          <v-select
                            v-model="PMN.Payment_Type"
                            :items="cntPeoepe" 
                            label="標靶 200"  
                            chips  
                            persistent-hint
                          ></v-select> 
                        </div>  
                        <div class=" md:p-2 ">
                          <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="cntPeoepe"  
                            label="應用 300"  
                            chips 
                            persistent-hint
                          ></v-select>
                        </div>
                        <div class=" md:p-2 col-span-2">
                          <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="cntPeoepe"  
                            label="支付方式"  
                            chips 
                            persistent-hint
                          ></v-select>
                        </div>   
                    </div> 
                </div>

        <div class="border-1 border-gray-300 rounded-lg p-2 col-span-1 ">
       
                                     <strong> 雜項： </strong>
                    <div class="  ">  
                       <v-textarea
                            v-model="PMN.Payment_Type"
                            label="可留下顧客臨時狀況.由當班教練向上呈報"  
                            chips 
                            persistent-hint
                          ></v-textarea> 
                        <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="cntPeoepe"  
                            label="支付方式"  
                            chips 
                            persistent-hint
                          ></v-select> 
                    </div>  
                </div>
        <!-- <div class="border-1 border-gray-300 rounded-lg col-span-5 p-2">
          
          
          5
          
        </div> -->
        
        <div class="md:p-2 col-span-1  ">
          <strong>當班人員：</strong>
          <v-text-field   
            label="經手人"
            solo
            clearable 
          ></v-text-field> 
        </div>
        <div class="md:p-2 col-span-1  ">
          <strong>首次結算金額：</strong>
            <v-text-field
              solo  
              v-model="PMN.input_money"
            ></v-text-field> 
        </div>
        <div class="md:p-2 col-span-1  ">
          <strong>續時結算金額：</strong>
            <v-text-field
              solo  
              v-model="PMN.input_money"
            ></v-text-field> 
        </div>
        <div class="md:p-2 col-span-1  ">
          <strong>實收總金額：</strong>
            <v-text-field
              solo  
              v-model="PMN.input_money"
            ></v-text-field>  
        </div>
        <button 
              @click="savePMN" 
              class="btn btn-success my-2 md:p-2 col-span-1 text-2xl "  
              > 儲存收費 紀錄
            </button>   
        <a class="text-xs text-gray-300 col-span-5 " > 開始編輯時間：  {{ systime }} </a> 
      </div> 
   </v-container> 
                  
           </v-form> 
            </div> 
            <div v-else>
              <h4>資料已新增成功!</h4>
                  <button class="btn btn-success" @click="newPMN">再新增一筆</button>
                  <v-btn flat class="mx-2">
                    <router-link to="/PMNList"> 了解 收費紀錄</router-link>
                  </v-btn> 
            </div>
          </div>
</template> 

<script> 
import PayMentNoteDataService from "../services/PayMentNoteDataService";

import PayMentSettingDataService from "../services/PayMentSettingDataService";

export default {
  name: "add-tutorial",
  data() {
    return { 
      
        systime: new Date(Date.now()),
        chkinTime: null,
        menu2: false,
        modal2: false,
        activePicker: null,
        date: null,
        menu: false,
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10), 
        cntPeoepe:['0 位','1 位','2 位','3 位','4 位','5 位','6 位','7 位','8 位','9 位','10 位','11 位','12 位','13 位','14 位','15 位','16 位','17 位','18 位','19 位','20 位',],
        Moneyflow:['現金','線上刷','抵用券','其他'],
        onlineRound:['06:00~','07:00~','08:00~','09:00~','10:00~','11:00~','12:00~',
               '13:00~','14:00~','15:00~','16:00~','17:00~','18:00~',
               '19:00~','20:00~','21:00~','22:00~','其他'], 

        PMN:{
            name:"",
            input_money:0,  
            Payment_Type:"",
            status: false
          }, 
 
        ex3: { label: 'thumb-color', val: 50, color: 'red' }, 

        submitted: false,
        temp_PaySetting:[],
        temp_ToolsBorrow:[], 
        temp_mbrType:[],
        temp_roomType:[],
        temp_payType:[],
        temp_addTimeType:[],
        temp_cxtmType:[],

// ...       ....
        servdtl_hds: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        PMN_2: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          }, 
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          }, 
      ]
// ...       ....

    };
  }, 
  mounted() {
    PayMentSettingDataService.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    PayMentSettingDataService.getAll().off("value", this.onDataChange);
  },
  methods: { 

      onDataChange(items) {
       
      let _tutorials = [];  

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key,
          name: data.name,
          type: data.type,
          price: data.price,
          // description: data.description,
          // published: data.published,
          // date_s:data.date_s,
          // date_mor:data.date_mor,
        });
      });
console.log("=========");
console.log(_tutorials);
    //  ::  調用 已建檔.資料  ::
        var temp_ary = 
           _tutorials.map(function(item, index, array){ 
              if (item.name !== '') 
              {
                return item.name;
              }  
            }); 
        this.temp_PaySetting = temp_ary ; 
        console.log(temp_ary);

        
        
    //  ::  調用 已建檔.資料  ::
        var temp_ary2 = 
           _tutorials.map(function(item, index, array){ 
              if (item.type == '弓具費用') 
              {
                return item.name;
              }  
              else{ return null; }
            }); 
        this.temp_ToolsBorrow = temp_ary2.filter(e => e != null);  
        console.log("==== 首次場地費 金額 ===");  


    //  ::  調用 已建檔.資料  ::
        this.temp_payType = 
            _tutorials.map(function(item, index, array){ 
              if (item.type == '付款方式')  { return item.name; }  else{ return null; } }).filter(e => e != null);  
        console.log(this.temp_payType);

    //  ::  調用 已建檔.資料  ::
        this.temp_mbrType = 
            _tutorials.map(function(item, index, array){ 
              if (item.type == '會員類別')  { return item.name; }  else{ return null; } }).filter(e => e != null);  
        console.log(this.temp_mbrType);  

    //  ::  調用 已建檔.資料  ::
        this.temp_addTimeType = 
            _tutorials.map(function(item, index, array){ 
              if (item.type == '加時費用')  { return item.name; }  else{ return null; } }).filter(e => e != null);  
        console.log(this.temp_addTimeType);  


    //  ::  調用 已建檔.資料  ::
        this.temp_roomType = 
            _tutorials.map(function(item, index, array){ 
              if (item.type == '場地費用')  { return item.name; }  else{ return null; } }).filter(e => e != null);  
        console.log(this.temp_roomType);  


    //  ::  調用 已建檔.資料  ::
        this.temp_cxtmType = 
            _tutorials.map(function(item, index, array){ 
              if (item.type == '顧客輪廓')  { return item.name; }  else{ return null; } }).filter(e => e != null);  
        console.log(this.temp_roomType);  


    //      var temp_ary3 = _tutorials.map(function(item, index, array){ if (item.type == '會員類別')  { return item.name; }else{ return null; } });  
    //  this.temp_mbrType =temp_ary3;
    //  console.log(temp_ary3);
  
// console.log("====con~~~~row);===");
//     this.temp_mbrType = sparyPNSType(_tutorials,type,'弓具費用',name,'弓具費用');

 
      },   

      ffd(arry,filter)
      {
        arry.map(e => {

          if(  e.name == filter)
                return e.price; 
            });
        return arry ;
      },

      savePMN() {
        var data = {
          userName: this.PMN.userName,
          input_money: this.PMN.input_money, 
          Payment_Type:this.PMN.Payment_Type,
          status: true
        };

        PayMentNoteDataService.create(data)
          .then(() => {
            console.log("收費成功!");
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },

    newPMN() {
      this.submitted = false;
      this.tutorial = {
        input_money: "",
        userName: "", 
        status: false
      };
    }
  }
};
</script>

<style>
.submit-form {
  max-width:  70%;
  margin: auto;
}
</style>


<!-- </div> <div class="md:grid grid-cols-3 gap-2 ">  
                        <div class=" md:p-2 col-span-2">
                          <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="cntPeoepe" 
                            prepend-icon="mdi-broom"
                            label="temp_PaySetting[3].price" 
                            solo
                            chips 
                            persistent-hint
                          ></v-select>
                        </div> 
                        <div class=" md:pt-5 "> 
                            <a> 小計： {{ }} 元</a>
                        </div>  


                      <v-select
                          v-model="PMN.Payment_Type"
                          :items="temp_roomBorrow"
                          label="消費項目"
                          multiple
                          chips 
                          persistent-hint 
                      ></v-select>   -->
<!-- 
                       <v-select
                          v-model="PMN.Payment_Type"
                          :items="temp_addTimeType"
                          label="加時紀錄"
                          multiple
                          chips 
                          persistent-hint
                      ></v-select> 

                      <v-select
                          v-model="PMN.Payment_Type"
                          :items="temp_payType"
                          label="付款方式"
                          multiple
                          chips 
                          persistent-hint
                      ></v-select>   -->
                     


<!-- <v-text-field   
                          label="會員類別"
                          solo
                          clearable 
                        ></v-text-field>  -->
                        <!-- 
                          <v-slider
       
                            :label="ex3.label"
                            :thumb-color="ex3.color"
                            label="入場人數 "
                            hint ="超過10人 ,請額外加記"
                            thumb-label="always"
                            step="1"
                            min=0
                            max=10
                          ></v-slider>


                          <v-slider
                            v-model="value"
                            :rules="rules"
                            hint="10 in stock"
                            label="入場人數"
                            persistent-hint
                            
                            thumb-label="always"
                            ticks
                          ></v-slider> -->


                    <!-- <strong>場地費用：</strong>
                      <div class="md:grid grid-cols-3 gap-2 "> 
                        <div class=" md:p-2 col-span-2">
                          <v-select
                            v-model="PMN.Payment_Type"
                            :items="cntPeoepe"
                            prepend-icon="mdi-chart-bubble"
                            label="首次.場地費" 
                            solo
                            chips 
                            persistent-hint
                          ></v-select> 
                        </div>
                        <div class=" md:pt-5 "> 
                            <a> 小計： {{ }} 元</a>
                        </div>
                      </div> 
                      <div class="md:grid grid-cols-3 gap-2 ">  
                        <div class=" md:p-2 col-span-2">
                          <v-select
                            v-model="PMN.Payment_TypeDown"
                            :items="cntPeoepe" 
                            prepend-icon="mdi-broom"
                            label="觀賞.清潔費" 
                            solo
                            chips 
                            persistent-hint
                          ></v-select>
                        </div> 
                        <div class=" md:pt-5 "> 
                            <a> 小計： {{ }} 元</a>
                        </div> 
                      </div>  -->




                   <!-- <strong>場地費用：</strong>
                    <div class="md:grid grid-cols-3 gap-2 ">  
                      <div class=" md:p-2 col-span-2">
                        <v-select
                          v-model="PMN.Payment_Type"
                          :items="temp_roomType"
                          label="場地費....用"
                          multiple
                          chips 
                          persistent-hint
                      ></v-select> 
                      </div> 
                    </div>  


                     <div class=" md:p-2 ">  
                      <v-data-table
                        :headers="servdtl_hds"
                        :items="PMN_2"
                        :items-per-page="2"
                        class="elevation-1"
                      ></v-data-table> 
                    </div>     -->