<template>
  <v-app>
     
        <v-toolbar flat> 

          <v-btn color="green" flat class="mx-3 ">
              <v-icon color="white" >mdi-sword-cross</v-icon> 
            <router-link to="/posGM_0" class="text-white">  靶位管理(2.0) </router-link>
          </v-btn>   
         
          </v-toolbar>
          
         

      <v-content class="mt-6"> 
         <router-view/> 
      </v-content>
  </v-app>

  
</template>