
<template>
  <div class="list row">
    <div class="col-md-1">
      <!-- <h4> 列表 </h4> -->
      <a class="text-3xl py-2 "> 詞彙 ...列表 </a> 

      <ul class="list-group">
        <li
          class="list-group-item text-xs"
          :class="{ active: index == currentIndex } "
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          {{ tutorial.od_date }}  
          <!-- {{ tutorial.description }} -->

          <!-- {{ tutorial }} ,   -->

          
        </li>
      </ul>

      

<!-- <template v-slot:activator="{ on, attrs }">
              <v-combobox
                v-model="tutorial.date_mor"
                multiple
                chips
                small-chips
                label="Multiple picker in menu"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-combobox>
            </template> -->



      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remove All
      </button>
    </div>
    <div class="col-md-4">
      <div v-if="currentTutorial">
        <tutorial-details
          :tutorial="currentTutorial"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template>

<script>
import WordDataService from "../services/odDataService"; 
import TutorialDetails from "./WordMdf"; // 連接至 Mdf 的部分

export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  data() {
    return {
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
            od_date  : data.od_date,

            // spell_zh_tw  : data.spell_zh_tw, 
            // description : data.description,
            // season      : data.season,
            // topic       : data.topic,

          // {{ tutorial.spell_tayal }}
          // {{ tutorial.spell_zh_tw }}  
          // <!-- {{ tutorial.description }} -->
          // {{ tutorial.season }}
          // {{ tutorial.topic }}


            // title: data.title,
            // published: data.published,
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
        WordDataService.deleteAll()
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
      },
  },
  mounted() {
    WordDataService.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    WordDataService.getAll().off("value", this.onDataChange);
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
 
  
