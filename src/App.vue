<template>
  <v-app>
    <v-card flat>
      <v-toolbar
        color="primary"
        dark
        extended
        flat
      >
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      </v-toolbar>

      <v-card
        
      >
        <v-toolbar flat>
          <v-toolbar-title class="text-gray-600 text-base">
            射箭場.當日收支報表
          </v-toolbar-title >

          <v-spacer></v-spacer>  
          <v-btn color="red" flat class="xl:mx-9 flex ">
            <v-icon color="white" >mdi-plus-circle</v-icon> 
          <router-link to="/PMNAdd" class="text-white">  新增收費 </router-link>
          </v-btn> 

          <v-btn flat class="xl:mx-2 flex ">
          <router-link to="/PMNList">  當班收費 紀錄 </router-link>
          </v-btn> 
          
          <v-btn flat  class="xl:mx-2 flex ">
            <router-link to="/PMSList"> 
              <v-icon>mdi-dots-vertical</v-icon>
              <!-- 收費設定 -->
            </router-link>
          </v-btn> 

          <!-- <v-btn flat class="mx-3" >
            <v-icon>mdi-magnify</v-icon> 
            <a>文化素養</a>
          </v-btn>

          <v-btn flat class="mx-3"> 
            <v-icon>mdi-apps</v-icon> 
            <a>近期課表</a>
          </v-btn> --> 
          <!-- <v-btn icon class="mx-3">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn> -->
        </v-toolbar> 
         
        <br>
           
        
      </v-card>
    </v-card> 

      <v-content class="mt-6"> 
         <router-view/> 
      </v-content>
  </v-app>

  
</template>