<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
  <!-- 
    <v-toolbar
      flat
      color="deep-purple accent-4"
      dark
    >
      <v-btn icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Filter results</v-toolbar-title>
    </v-toolbar> -->

     <div class=" grid grid-cols-3 gap-2  ">
        <v-card solo> 
          <v-card-title>北北東</v-card-title>
          <v-divider></v-divider>
        <a class=" text-3xl "> {{ 24-bk_pos0_1.length-bk_pos0_2.length -bk_pos0_3.length -bk_pos0_4.length   }} / 24 
          </a>
        </v-card> 
   
        <v-card solo>
        <v-card-title>北場 </v-card-title>
          <v-divider></v-divider>
          <div class=" md:p-2 col-span-1">
            <strong> 
              <a class=" text-3xl "> {{ 36-bk_pos1_1.length-bk_pos1_2.length -bk_pos1_3.length -bk_pos1_4.length -bk_pos1_5.length -bk_pos1_6.length }} / 36 
              </a></strong> 
          </div>
          </v-card>

        <v-card solo>
        <v-card-title>南場 </v-card-title>
          <v-divider></v-divider> 
          <div class=" md:p-2 col-span-1">
            <strong> 
               <a class=" text-3xl "> {{ 22-bk_pos2_1.length-bk_pos2_2.length -bk_pos2_3.length -bk_pos2_4.length  }} / 22 
              </a></strong> 
          </div>
          </v-card>
</div>


<v-tabs
        v-model="tab"
        background-color="primary"
        dark
      >
        <v-tab key='k1' href='#k1' v-if="!hide"> <v-icon color="white" >mdi-sword-cross  </v-icon>  <a> 北北東 </a></v-tab>
        <v-tab key='k2' href='#k2'><v-icon color="white" >mdi-gavel  </v-icon>  <a> 北場 </a></v-tab>
        <v-tab key='k3' href='#k3'><v-icon color="white" >mdi-heart-pulse  </v-icon>  <a> 南場 </a></v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="tab">
        <v-tab-item key='k1' value='k1'> 
  
        </v-tab-item>
        <v-tab-item key='k2' value='k2'> 
  
        </v-tab-item>
        <v-tab-item key='k3' value='k3'> 
  
        </v-tab-item>
      </v-tabs-items>


<v-card-text>

      <span class="text-ms"> 北北東 棚 1  </span> <v-chip   >  剩餘 : {{ 6-bk_pos1_1.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos1_1" column multiple >
        <v-chip  filter outlined class="text-ms" > 位子 1 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 2 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 3 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 4 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 5 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

     <v-card-text>
      <span class="text-ms"> 北北東 棚 2  </span> <v-chip   >  剩餘 : {{ 6-bk_pos1_2.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos1_2" column multiple >
        <v-chip  filter outlined class="text-ms" > 位子 1 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 2 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 3 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 4 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 5 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

     <v-card-text>
      <span class="text-ms"> 北北東 棚 3  </span> <v-chip   >  剩餘 : {{ 6-bk_pos1_3.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos1_3" column multiple >
        <v-chip  filter outlined class="text-ms" > 位子 1 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 2 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 3 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 4 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 5 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <span class="text-ms"> 北北東 棚 4  </span> <v-chip   >  剩餘 : {{ 6-bk_pos1_4.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos1_4" column multiple >
        <v-chip  filter outlined class="text-ms" > 位子 1 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 2 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 3 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 4 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 5 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

    <hr>

    <v-card-text>
      <span class="text-ms"> 北場 棚 1  </span> <v-chip   >  剩餘 : {{ 6-bk_pos1_1.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos1_1" column multiple >
        <v-chip  filter outlined class="text-ms" > 位子 1 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 2 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 3 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 4 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 5 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

     <v-card-text>
      <span class="text-ms"> 北場 棚 2  </span> <v-chip   >  剩餘 : {{ 6-bk_pos1_2.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos1_2" column multiple >
        <v-chip  filter outlined class="text-ms" > 位子 1 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 2 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 3 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 4 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 5 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

     <v-card-text>
      <span class="text-ms"> 北場 棚 3  </span> <v-chip   >  剩餘 : {{ 6-bk_pos1_3.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos1_3" column multiple >
        <v-chip  filter outlined class="text-ms" > 位子 1 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 2 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 3 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 4 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 5 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <span class="text-ms"> 北場 棚 4  </span> <v-chip   >  剩餘 : {{ 6-bk_pos1_4.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos1_4" column multiple >
        <v-chip  filter outlined class="text-ms" > 位子 1 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 2 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 3 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 4 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 5 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

    <hr>

    <v-card-text>
      <span class="text-ms"> 南場 棚 1  </span>  <v-chip   >  剩餘 : {{ 4-bk_pos2_1.length  }} / 4 </v-chip>
      <v-chip-group v-model="bk_pos2_1" column multiple >
        <v-chip  filter outlined class="text-ms" > 位子 1 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 2 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 3 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 4 </v-chip>  
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <span class="text-ms"> 南場 棚 2  </span> <v-chip   >  剩餘 : {{ 6-bk_pos2_2.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos2_1" column multiple >
        <v-chip  filter outlined class="text-ms" > 位子 1 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 2 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 3 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 4 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 5 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

    <v-card-text>
      <span class="text-ms"> 南場 棚 3  </span> <v-chip   >  剩餘 : {{ 6-bk_pos2_3.length  }} / 6 </v-chip>
      <v-chip-group v-model="bk_pos2_3" column multiple >
        <v-chip  filter outlined class="text-ms" > 位子 1 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 2 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 3 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 4 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 5 </v-chip>
        <v-chip  filter outlined class="text-ms" > 位子 6 </v-chip> 
      </v-chip-group>
    </v-card-text>

 
  </v-card>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import WordDataService from "../services/WordDataService";


export default {
  name: "add-tutorial",
  data() {
    return {
      bk_pos0_1:[],
      bk_pos0_2:[],
      bk_pos0_3:[],
      bk_pos0_4:[],

      bk_pos1_1:[],
      bk_pos1_2:[],
      bk_pos1_3:[],
      bk_pos1_4:[],
      bk_pos1_5:[],
      bk_pos1_6:[],

      bk_pos2_1:[],
      bk_pos2_2:[],
      bk_pos2_3:[],
      bk_pos2_4:[],
      

      amenities: [],
      neighborhoods: [],
      season_states:['s1', 's2', 's3', 's4',],
      ttemp:[],
      tutorial: {
        title: "",
        description: "",
        idx: [],
        published: false
      },
      submitted: false
       
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        published: false
      };

      TutorialDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {
        title: "",
        description: "",
        published: false
      };
    },
  },
  mounted() {
    TutorialDataService.getAll().on("value", this.onDataChange);
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
