<template>
  <div class=" flex justify-center  ">
    
    
    <div class="w-full ">
      <h4 class="mt-10 text-2xl font-black " >靶道列表</h4>

      <!-- <ul class=" "> 
        <li
          class="bg-gray-100 py-2 pl-3 my-2 border-2 rounded-sm border-gray-300 "  
          v-if="tutorial.sno == 1 | tutorial.sno == 2 "

          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"  
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        > 
          <div class=" flex w-full ">
            <div class="w-1/6 text-xs "  >
                {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
            </div>
            <div class="w-1/5   text-xs font-black"> , {{ tutorial.left_time }}離</div>  
            <div class="  text-xs text-blue-500 "> -- {{ tutorial.tmp_idx }} :: {{ tutorial.memo }}   </div>
             
          </div>
        
          <div class="text-xs " >  
          </div>

          <div class="text-s font-black" >
          
          </div> 
        </li> 
      </ul>  -->


      <v-list-item-group 
        color="primary"
      >
        <v-list-item
          v-for="(tutorial, index) in tutorials"  
          :key="index"
        >
          
          <v-list-item-content 
                  class=" text-xs bg-red-100 py-2 pl-3 my-1 border-2 rounded-sm border-red-300 "
                   v-if="tutorial.sno == 1 | tutorial.sno == 2 "
          >
             <div class=" flex  w-full">
                <div class=" w-1/5">
                  {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                </div>
                <div class="  w-2/5   text-xs font-black"> {{ tutorial.tmp_idx }}, {{ tutorial.left_time }}離</div>  
                <div class=" w-3/5  text-xs text-blue-500 "> --  :: {{ tutorial.memo }}   </div>
                
              </div>
          </v-list-item-content>

          <v-list-item-content 
                  class=" text-xs bg-gray-100 py-2 pl-3 my-1 border-2 rounded-sm border-gray-300 "
                   v-if="tutorial.sno == 3 | tutorial.sno == 4 "
          >
             <div class=" flex  w-full">
                <div class=" w-1/5">
                  {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                </div>
                <div class="  w-2/5   text-xs font-black"> {{ tutorial.tmp_idx }}, {{ tutorial.left_time }}離</div>  
                <div class=" w-3/5  text-xs text-blue-500 "> --  :: {{ tutorial.memo }}   </div>
                
              </div>
          </v-list-item-content>

          <v-list-item-content 
                  class=" text-xs bg-green-100 py-2 pl-3 my-1 border-2 rounded-sm border-green-300 "
                   v-if="tutorial.sno == 5 | tutorial.sno == 6 "
          >
             <div class=" flex  w-full">
                <div class=" w-1/5">
                  {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                </div>
                <div class="  w-2/5   text-xs font-black"> {{ tutorial.tmp_idx }}, {{ tutorial.left_time }}離</div>  
                <div class=" w-3/5  text-xs text-blue-500 "> --  :: {{ tutorial.memo }}   </div>
                
              </div>
          </v-list-item-content>

          <v-list-item-content 
                  class=" text-xs bg-yellow-100 py-2 pl-3 my-1 border-2 rounded-sm border-yellow-300 "
                   v-if="tutorial.sno == 7 | tutorial.sno == 8 "
          >
             <div class=" flex  w-full">
                <div class=" w-1/5">
                  {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
                </div>
                <div class="  w-2/5   text-xs font-black"> {{ tutorial.tmp_idx }}, {{ tutorial.left_time }}離</div>  
                <div class=" w-3/5  text-xs text-blue-500 "> --  :: {{ tutorial.memo }}   </div>
                
              </div>
          </v-list-item-content>
          
           
        </v-list-item>
      </v-list-item-group>

    </div> 

        <!-- <div class="w-2/3 ml-10">
          <div v-if="currentTutorial">
            <tutorial-details
              :tutorial="currentTutorial"
              @refreshList="refreshList"
            />
          </div>
          <div v-else>
            <br />
            <p>Please 確認 on a Tutorial...</p>
          </div>
        </div> -->
    <hr> 
  </div>
</template>
 

<script>

import TutorialDetails from "./bkadd4_Mdf";
 
import SeatDataService from "../services/SeatPrepareService";

export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  

  data() {
    return {  
show: false,
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1
    };
  }, 
  methods: { 
    onDataChange(items) {
       
      let _tutorials = []; 


      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key, 
            pos: data.pos,
            sno: data.sno,
            sno_idx: data.sno_idx,
            tmp_idx: data.tmp_idx,
            left_time: data.left_time,
            memo: data.memo,
            slted: data.slted,
            statu: data.statu
        });
      });

      this.tutorials = _tutorials; 
    },

    refreshList() {
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    removeAllTutorials() {
      SeatDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    
  },
  mounted() {
    // console.log(_tutorials.title);  
     SeatDataService.getAll().on("value", this.onDataChange);  
  },
  beforeDestroy() {
     SeatDataService.getAll().off("value", this.onDataChange);
  }, 

    
};
</script>

<style>
/* .submit-form {
  max-width: 300px;
  margin: auto;
} */
</style>


<style>
.list {
  text-align: left;
  /* max-width: 750px; */
  margin: auto;
}
</style>
