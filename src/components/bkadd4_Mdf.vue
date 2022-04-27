<template>
  <div v-if="currentTutorial" class="edit-form">

    <div class="mt-10 grid grid-cols-6 gap-1  ">
            <div class="col-span-1 text-xs ">
               <h4 class=" text-2xl font-black align-text-bottom"> 靶道 使用狀態 </h4> 
            </div>
            <div class="col-span-2   ">
               <span class=" text-xs align-text-bottom"> 調整 後結果： </span> 
            </div>
            <div class="col-span-2 text-xs align-text-bottom">
               <v-alert  type="info" > {{ message }}</v-alert>
            </div>
    </div>
    
   
    <form>
      <div class="form-group"> 
        <!-- <button class="border-2 border-solid px-2 mr-2"  >
          清除資料
        </button> -->

        <v-btn  class="border-2 border-solid px-2" @click="updateTutorial">
          更新內容
        </v-btn> 
         
      </div>

     <div class="flex justify-center w-full mt-10 my-3">  
      <v-row> 
          <v-text-field filled   
           label="場區"
           v-model="currentTutorial.pos" class="text-xs w-1/12 px-1"   ></v-text-field>  
         
         
         
          <v-text-field filled  v-model="currentTutorial.sno" class="text-xs w-1/12 px-1" label="位置"  ></v-text-field>  
          <v-text-field filled  v-model="currentTutorial.sno_idx" class="text-xs w-1/12 px-1" label="序號"  ></v-text-field>  
          <v-text-field filled clearable  v-model="currentTutorial.tmp_idx" class="text-xs w-1/12 px-1" label="牌號"  ></v-text-field>  
 
          <v-text-field filled clearable  v-model="currentTutorial.left_time" class="text-xs w-1/6 px-2" label="離場時間"  placeholder="離場時間"  ></v-text-field>  
          <v-text-field filled clearable  v-model="currentTutorial.memo" class="text-xs w-1/3 px-1" label="備註"  ></v-text-field>   

      <v-btn icon @click="show = !show" >
        <v-icon x-large class="w-1/4" >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>


      
              <v-expand-transition class="" >
              <div v-show="show" >  
                  <div class="flex ml-10 justify-center py-4 "> 
                    <v-row > 
                    <p>活動狀態</p> 

                       <v-chip-group v-model="currentTutorial.memo"  
                                    class=" " >   
                          <v-chip active-class="bg-green-500   text-white text-x" value="第一次"    >   首 </v-chip>
                          <v-chip active-class="bg-red-500     text-white text-x" value="有玩過"    >  有玩過 </v-chip>  
                          <v-chip active-class="bg-blue-500    text-white text-x" value="續時中"    >   續 </v-chip>
                          <v-chip active-class="bg-yellow-500  text-white text-x" value="缺席"    >  等報到 </v-chip>  
                           <v-chip active-class="bg-red-500    text-white text-x" value="下時段保留"    >  已預約 </v-chip> 
                      </v-chip-group>  
                      
                    <p>客人類型</p>  
                      <v-chip-group v-model="currentTutorial.memo"  
                        active-class="bg-yellow-600 text-white text-xs  "
                        class=" " multiple>   
                          <v-chip active-class="bg-green-500   text-white text-x" value="散客" >  體驗 </v-chip>
                          <v-chip active-class="bg-green-500   text-white text-x" value="學員" >  學員 </v-chip>
                          <v-chip active-class="bg-green-500   text-white text-x" value="會員" >  月卡 </v-chip> 
                          <v-chip active-class="bg-green-500   text-white text-x" value="選手" >  選手 </v-chip> 
                      </v-chip-group>  

                   <p>預備工具建議</p> 
                      <v-chip-group v-model="currentTutorial.memo"  
                        active-class="bg-yellow-600 text-white text-xs  "
                        class="  " multiple>   
                          <v-chip active-class="bg-green-500   text-white text-x" value="女" >  成人女 </v-chip>
                          <v-chip active-class="bg-green-500   text-white text-x" value="男" >  成人男 </v-chip>
                          <v-chip active-class="bg-green-500   text-white text-x" value="右手兒童" >  R兒童 </v-chip> 
                          <v-chip active-class="bg-green-500   text-white text-x" value="左手兒童" >  L兒童 </v-chip> 
                      </v-chip-group>  

                   <p>距離</p>
                      <v-chip-group v-model="currentTutorial.memo"  
                        active-class="bg-yellow-600 text-white text-xs  "
                        class=" " multiple >   
                          <v-chip active-class="bg-green-500   text-white text-x" value="輕體驗"  >  體驗距離 </v-chip>
                          <v-chip active-class="bg-green-500   text-white text-x" value="練反曲">  反曲弓練習 </v-chip>
                          <v-chip active-class="bg-green-500   text-white text-x" value="長距離">  特殊長距離 </v-chip> 
                      </v-chip-group>  
                    </v-row>
                    <v-divider></v-divider>  
                  </div >  
                  <v-divider></v-divider>  
              </div>
            </v-expand-transition> 
          </v-row>  
      </div> 

    </form>

    <!-- <button
      class="border-2 border-solid px-2 mr-2"
      v-if="currentTutorial.published"
      @click="updatePublished(false)"
    >
      未發佈
    </button>
    <button
      v-else
      class="border-2 border-solid px-2 mr-2"
      @click="updatePublished(true)"
    >
      儲存
    </button> -->

    
  </div>

  <div v-else>
    <br />
    <p>Please 確認 on a Tutorial...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/SeatPrepareService";

export default {
  name: "tutorial",
  props: ["tutorial"],
  data() {
    return { 
      message: "",

show: true,
      currentTutorial: {
        pos:"",
        sno: "",
        sno_idx: "",
        left_time:"",
        tmp_idx:"",
        memo:"",
        slted: [],
        statu:[] 
        
      },
    };
  },
  watch: {
    tutorial: function(tutorial) {
      this.currentTutorial = { ...tutorial };
      this.message = "";
    },
  },
  methods: {
    updatePublished(status) {
      TutorialDataService.update(this.currentTutorial.key, {
        published: status,
      })
        .then(() => {
          this.currentTutorial.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateTutorial() {
      const data = {
        pos: this.currentTutorial.pos,
        sno: this.currentTutorial.sno,
        sno_idx: this.currentTutorial.sno_idx,
        tmp_idx: this.currentTutorial.tmp_idx,

        left_time: this.currentTutorial.left_time,
        memo: this.currentTutorial.memo,

        // slted: this.currentTutorial.slted,
        // statu: this.currentTutorial.statu

         
      };

      TutorialDataService.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "更新成功!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.currentTutorial = { ...this.tutorial }
  },
};
</script>

<style>
.edit-form {
  /* max-width: 300px;
  margin: auto; */
}
</style>
