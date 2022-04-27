<template>
  <div class=" flex justify-center  ">
    
    
    <div class="w-1/3 ">
      <h4 class="mt-10 text-2xl font-black " >靶道列表</h4>

      <ul class="list-group"> 
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"

        > 
          <div class=" flex  w-full">
            <div class="w-1/6   text-xs">
                {{ tutorial.pos }}_{{ tutorial.sno }}_{{ tutorial.sno_idx }} 
            </div>
            <div class="w-1/5   text-xs font-black"> , {{ tutorial.left_time }}離場</div>  
            <div class="  text-xs text-blue-500 "> -- {{ tutorial.tmp_idx }} :: {{ tutorial.memo }}   </div>
             
          </div>
        
          <div class="text-xs " >
            

            
          </div>

          <div class="text-s font-black" >
          
          </div>

          

           <!-- pos: data.st.pos,
            sno: data.st.sno,
            sno_idx: data.st.sno_idx,
            left_time: data.st.left_time,
            memo: data.st.memo,
            slted: data.st.slted,
            statu: data.st.statu --> 
        </li> 
      </ul> 
    </div>

 


    <div class="w-2/3 ml-10">
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
    </div>
<hr> 
  </div>
</template>



        
 

      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        增加一個數
      </button>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        移除所有資料
      </button> -->

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
          // title: data.title,
          // description: data.description,
          // published: data.published,
          // date_s:data.date_s,
          // date_mor:data.date_mor,
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

    // //  ::  藉由使用  ::
    // var temp_ary = _tutorials.map(function(item, index, array){ 
    //     if (item.description !== '') {
    //           return item.description;
    //         }  
    //   }) ; 
    // this.FVB = temp_ary ;
    // console.log('- - - < temp_ary > - - -');  
    // console.log(temp_ary);  
 
    },

    refreshList() {
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;

      // alert('tmp_idx = ' + this.currentTutorial.tmp_idx);  
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
  max-width: 750px;
  margin: auto;
}
</style>
