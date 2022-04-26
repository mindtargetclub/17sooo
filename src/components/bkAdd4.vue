<template>

<div class=" w-full item-start  ">
 

  <div class=" grid grid-cols-3 gap-2  "> 
 

      <div class= "col-span-2"> 
        <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="seat.od_date"
                  label="日期設定" 
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>

              
              <v-date-picker
                v-model="seat.od_date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker> 
      </v-menu>
      </div>  
      
      <div class= "col-span-1">
        <!-- <button @click="saveODR" class="btn btn-success"> 儲存...記錄 </button> -->
        <button @click="saveSeat" class="btn btn-success">Submit</button>
      </div>   
<!-- </div> -->

      

   
  </div> 


<div v-if="!submitted">
  <v-tabs
    v-model="tab"
    background-color="primary" 
    fixed-tabs
      
  >

    <v-tab key='k3' href='#k3' v-if="!hide"  >    
        422版,測試中  
    </v-tab>
    
    <v-tab key='k2' href='#k2' > 
        北 {{ 36-bk_pos1_1.length-bk_pos1_2.length -bk_pos1_3.length -bk_pos1_4.length -bk_pos1_5.length -bk_pos1_6.length }}  人 / 南 {{ 22-bk_pos2_1.length-bk_pos2_2.length -bk_pos2_3.length -bk_pos2_4.length  }}   人  
    </v-tab>
     
    <v-tab key='k1' href='#k1' v-if="!hide"  >    
      13:00
        <!-- 北北東  {{ 24-bk_pos0_1.length-bk_pos0_2.length -bk_pos0_3.length -bk_pos0_4.length   }} 人    -->
    </v-tab>

    <v-tab key='k4' href='#k4' v-if="!hide"  >    
        14:00   
    </v-tab>

    <v-tab key='k5' href='#k5' v-if="!hide"  >    
        15:00   
    </v-tab>

    

  </v-tabs> 

  <v-tabs-items v-model="tab">
    <v-tab-item key='k1' value='k1'>  

    <div>  

    <div class ="flex justify-center "> 當時</div>
    <div class="flex justify-center w-full ">
      
        <div class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                棚1  </div >  

                <!-- {{ od.bk_pos0_1 }}   -->
          <v-chip-group v-model="od.bk_pos0_1"   multiple 
                active-class="bg-red-600 text-white text-xs "
                class=" " > 
                <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos0_1,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos0_1,0) == false' class=""> 6 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_1,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos0_1,1) == false' class=""> 5 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_1,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos0_1,2) == false' class=""> 4 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_1,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos0_1,3) == false' class=""> 3 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_1,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos0_1,4) == false' class=""> 2 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_1,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos0_1,5) == false' class=""> 1 </div> </v-chip>  
          </v-chip-group>  
    </div>
    <div class="flex justify-center w-full ">
        <div class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                棚2  </div >   
          <v-chip-group v-model="od.bk_pos0_2"   multiple 
                active-class="bg-red-600 text-white text-xs  "
                class=" " >  
                <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos0_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos0_2,0) == false' class=""> 6 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos0_2,1) == false' class=""> 5 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos0_2,2) == false' class=""> 4 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_2,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos0_2,3) == false' class=""> 3 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_2,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos0_2,4) == false' class=""> 2 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_2,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos0_2,5) == false' class=""> 1 </div> </v-chip> 
          </v-chip-group>  
    </div>
    <div class="flex justify-center w-full ">
        <div class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                棚3  </div >   
          <v-chip-group v-model="od.bk_pos0_3"   multiple 
                active-class="bg-red-600 text-white text-xs  "
                class=" " >  
                <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos0_3,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos0_3,0) == false' class=""> 6 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_3,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos0_3,1) == false' class=""> 5 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_3,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos0_3,2) == false' class=""> 4 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_3,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos0_3,3) == false' class=""> 3 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_3,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos0_3,4) == false' class=""> 2 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_3,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos0_3,5) == false' class=""> 1 </div> </v-chip>   
          </v-chip-group>  
    </div>
    <div class="flex justify-center w-full ">
        <div class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                棚4  </div >   
          <v-chip-group v-model="od.bk_pos0_4"   multiple 
                active-class="bg-red-600 text-white text-xs  "
                class=" " >  
                <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos0_4,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos0_4,0) == false' class=""> 6 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_4,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos0_4,1) == false' class=""> 5 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_4,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos0_4,2) == false' class=""> 4 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_4,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos0_4,3) == false' class=""> 3 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_4,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos0_4,4) == false' class=""> 2 </div> </v-chip>
                <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos0_4,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos0_4,5) == false' class=""> 1 </div> </v-chip> 
          </v-chip-group>  
    </div>
<hr>
    <div class="bg-green-50">
      <div class ="flex justify-center "> 預留</div>
            <div class="flex justify-center w-full "> 
             
      <div class="grid grid-cols-5 " >  
        <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                    text-xs text-center py-1.5 px-2 my-2 mr-1 "
                    v-on:click="ckary('11')"
                    > 
                換</div>
        <div class="col-span-3 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                棚1  </div >   
        </div >   
      <v-chip-group v-model="od.ntadd_pos0_1" multiple 
            active-class="bg-green-600 text-white text-xs">  
            <v-chip   class="text-xs" > 6 </v-chip>
            <v-chip   class="text-xs" > 5 </v-chip>
            <v-chip   class="text-xs" > 4 </v-chip>
            <v-chip   class="text-xs" > 3 </v-chip>
            <v-chip   class="text-xs" > 2 </v-chip>
            <v-chip   class="text-xs" > 1 </v-chip> 
      </v-chip-group>  
      </div> 
      <!-- ..... -->

            <div class="flex justify-center w-full "> 
      <div class="grid grid-cols-5 " >  
        <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                    text-xs text-center py-1.5 px-2 my-2 mr-1 "
                    v-on:click="ckary('12')"
                    > 
                換</div>
        <div class="col-span-3 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                棚2  </div >   
        </div >   
      <v-chip-group v-model="od.ntadd_pos0_2"   multiple 
            active-class="bg-green-600 text-white text-xs  "
            >  
            <v-chip   class="text-xs" > 6 </v-chip>
            <v-chip   class="text-xs" > 5 </v-chip>
            <v-chip   class="text-xs" > 4 </v-chip>
            <v-chip   class="text-xs" > 3 </v-chip>
            <v-chip   class="text-xs" > 2 </v-chip>
            <v-chip   class="text-xs" > 1 </v-chip> 
      </v-chip-group>  
      </div> 
      <!-- ..... -->

                  <div class="flex justify-center w-full "> 
      <div class="grid grid-cols-5 " >  
        <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                    text-xs text-center py-1.5 px-2 my-2 mr-1 "
                    v-on:click="ckary('13')"
                    > 
                換</div>
        <div class="col-span-3 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                棚3  </div >   
        </div >   
      <v-chip-group v-model="od.ntadd_pos0_3"   multiple 
            active-class="bg-green-600 text-white text-xs  "
            >  
            <v-chip   class="text-xs" > 6 </v-chip>
            <v-chip   class="text-xs" > 5 </v-chip>
            <v-chip   class="text-xs" > 4 </v-chip>
            <v-chip   class="text-xs" > 3 </v-chip>
            <v-chip   class="text-xs" > 2 </v-chip>
            <v-chip   class="text-xs" > 1 </v-chip> 
      </v-chip-group>  
      </div> 
      <!-- ..... -->

                  <div class="flex justify-center w-full "> 
      <div class="grid grid-cols-5 " >  
        <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                    text-xs text-center py-1.5 px-2 my-2 mr-1 "
                    v-on:click="ckary('14')"
                    > 
                換</div>
        <div class="col-span-3 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                棚4  </div >   
        </div >   
      <v-chip-group v-model="od.ntadd_pos0_4"   multiple 
            active-class="bg-green-600 text-white text-xs  "
            >  
            <v-chip   class="text-xs" > 6 </v-chip>
            <v-chip   class="text-xs" > 5 </v-chip>
            <v-chip   class="text-xs" > 4 </v-chip>
            <v-chip   class="text-xs" > 3 </v-chip>
            <v-chip   class="text-xs" > 2 </v-chip>
            <v-chip   class="text-xs" > 1 </v-chip> 
      </v-chip-group>  
      </div> 
      

    </div> 
    </div> 
    </v-tab-item>
    <v-tab-item key='k2' value='k2'> 

<div> 
  
 
  
  <div class ="flex justify-center "> 靶位現況  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
              北棚-1  </div >   
        <v-chip-group v-model="od.bk_pos1_1"   multiple 
              active-class="bg-red-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_1,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_1,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_1,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_1,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_1,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_1,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_1,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_1,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_1,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_1,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_1,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_1,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
              北棚-2  </div >   
        <v-chip-group v-model="od.bk_pos1_2"   multiple 
              active-class="bg-red-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_2,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_2,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_2,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_2,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_2,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_2,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_2,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_2,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_2,5) == false' class=""> 1 </div> </v-chip>  
        </v-chip-group>  
  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
              北棚-3  </div >   
        <v-chip-group v-model="od.bk_pos1_3"   multiple 
              active-class="bg-red-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_3,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_3,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_3,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_3,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_3,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_3,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_3,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_3,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_3,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_3,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_3,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_3,5) == false' class=""> 1 </div> </v-chip>   
        </v-chip-group>  
  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
              北棚-4  </div >   
        <v-chip-group v-model="od.bk_pos1_4"   multiple 
              active-class="bg-red-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_4,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_4,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_4,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_4,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_4,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_4,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_4,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_4,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_4,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_4,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_4,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_4,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
              北棚-5  </div >   
        <v-chip-group v-model="od.bk_pos1_5"   multiple 
              active-class="bg-red-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_5,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_5,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_5,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_5,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_5,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_5,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_5,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_5,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_5,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_5,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_5,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_5,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
              北棚-6  </div >   
        <v-chip-group v-model="od.bk_pos1_6"   multiple 
              active-class="bg-red-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_6,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_6,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_6,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_6,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_6,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_6,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_6,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_6,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_6,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_6,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_6,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_6,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>

  <hr>
  <!-- <div class ="flex justify-center mt-2 "> 現況  </div> -->
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs yellow darken-2 text-center p-1 py-2 my-2 mr-1 w-20">
              南棚-7  </div >   
        <v-chip-group v-model="od.bk_pos1_7"   multiple 
              active-class="bg-yellow-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_7,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_7,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_7,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_7,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_7,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_7,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_7,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_7,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_7,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_7,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_7,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_7,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs  yellow darken-2 text-center p-1 py-2 my-2 mr-1 w-20">
              南棚-8  </div >   
        <v-chip-group v-model="od.bk_pos1_8"   multiple 
              active-class="bg-yellow-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_8,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_8,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_8,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_8,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_8,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_8,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_8,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_8,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_8,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_8,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_8,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_8,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>

  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs  yellow darken-2 text-center p-1 py-2 my-2 mr-1 w-20">
              南棚-9  </div >   
        <v-chip-group v-model="od.bk_pos1_9"   multiple 
              active-class="bg-yellow-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_9,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_9,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_9,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_9,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_9,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_9,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_9,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_9,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_9,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_9,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_9,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_9,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>
  <div class="flex justify-center w-full ">
      <div  small  
            class="rounded-r-lg text-xs  yellow darken-2 text-center p-1 py-2 my-2 mr-1 w-20">
              南棚-10  </div >   
        <v-chip-group v-model="od.bk_pos1_10"   multiple 
              active-class="bg-yellow-600 text-white text-xs  "
              class=" " >  
              <v-chip class="text-xs " > <div v-if='ck(od.ntadd_pos1_10,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(od.ntadd_pos1_10,0) == false' class=""> 6 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_10,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(od.ntadd_pos1_10,1) == false' class=""> 5 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_10,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(od.ntadd_pos1_10,2) == false' class=""> 4 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_10,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(od.ntadd_pos1_10,3) == false' class=""> 3 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_10,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(od.ntadd_pos1_10,4) == false' class=""> 2 </div> </v-chip>
              <v-chip class="text-xs" >  <div v-if='ck(od.ntadd_pos1_10,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(od.ntadd_pos1_10,5) == false' class=""> 1 </div> </v-chip> 
        </v-chip-group>  
  </div>
<hr>

<div class ="flex justify-center bg-green-900 text-gray-100 py-2 "> 下個時段  </div>
<div class="bg-green-50">
        <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('21')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-green-600
                text-white text-center py-2 my-2 mr-1 ">
            北棚-1  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_1" multiple 
        active-class="bg-green-600 text-white text-xs">  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div> 
  <!-- ..... -->

        <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('22')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-green-600
                text-white text-center py-2 my-2 mr-1 ">
            北棚-2  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_2"   multiple 
        active-class="bg-green-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div> 
  <!-- ..... -->

              <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('23')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-green-600
                text-white text-center py-2 my-2 mr-1 ">
            北棚-3  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_3"   multiple 
        active-class="bg-green-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div> 
  <!-- ..... -->

              <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('24')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-green-600
                text-white text-center py-2 my-2 mr-1 ">
            北棚-4  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_4"   multiple 
        active-class="bg-green-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div> 
  <!-- ..... -->

              <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('25')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-green-600
                text-white text-center py-2 my-2 mr-1 ">
            北棚-5  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_5"   multiple 
        active-class="bg-green-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div> 
  <!-- ..... -->

              <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('26')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-green-600
                text-white text-center py-2 my-2 mr-1 ">
            北棚-6  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_6"   multiple 
        active-class="bg-green-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div> 

  <hr>
  <!-- <div class ="flex justify-center bg-gray-900 text-gray-100 "> 南場 下時段  </div> -->
  <!-- ..... -->  
  <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-yellow-400 border-b-4 border-yellow-700 text-yellow-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('27')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-yellow-400
                text-center py-2 my-2 mr-1 ">
            南棚-7  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_7"   multiple 
        active-class="bg-yellow-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div>  
  <!-- ..... -->  
  <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-yellow-400 border-b-4 border-yellow-700 text-yellow-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('28')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-yellow-400
                text-center py-2 my-2 mr-1 ">
            南棚-8  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_8"   multiple 
        active-class="bg-yellow-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div>     
  <!-- ..... -->  
  <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-yellow-400 border-b-4 border-yellow-700 text-yellow-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('29')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-yellow-400
                text-center py-2 my-2 mr-1 ">
            南棚-9  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_9"   multiple 
        active-class="bg-yellow-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div>  
  <!-- ..... -->  
  <div class="flex justify-center w-full "> 
  <div class="grid grid-cols-5 " >  
    <div class="col-span-2 rounded-2xl bg-yellow-400 border-b-4 border-yellow-700 text-yellow-900 font-bold
                text-xs text-center py-1.5 px-2 my-2 mr-1 "
                v-on:click="ckary('210')"
                > 
            換</div>
    <div class="col-span-3 rounded-lg text-xs bg-yellow-400
                text-center py-2 my-2 mr-1 ">
            南棚-10  </div >   
    </div >   
  <v-chip-group v-model="od.ntadd_pos1_10"   multiple 
        active-class="bg-yellow-600 text-white text-xs  "
          >  
        <v-chip   class="text-xs" > 6 </v-chip>
        <v-chip   class="text-xs" > 5 </v-chip>
        <v-chip   class="text-xs" > 4 </v-chip>
        <v-chip   class="text-xs" > 3 </v-chip>
        <v-chip   class="text-xs" > 2 </v-chip>
        <v-chip   class="text-xs" > 1 </v-chip> 
  </v-chip-group>  
  </div>        
 
   
</div>  
</div> 

    </v-tab-item>

        <v-tab-item key='k3' value='k3'> 

<div> 
  
 
  
  <div class ="flex justify-center "> 靶位現況  </div>
  
  <div class="flex justify-center w-full my-3"> 
      
      <!-- <v-card-text>{{ slted01_1 }}</v-card-text>  -->
      <v-row> 
          <v-chip class="my-3 px-2 w-12  blue lighten-5"> 01-1 </v-chip>  
          <v-text-field solo v-model="statu01_1" class="text-xs w-1/12 px-1" label="牌號"  ></v-text-field>  
          <v-text-field solo class="text-xs w-1/6 px-2" label="離場時間"  placeholder="離場時間"  ></v-text-field>  
          <v-text-field solo class="text-xs w-1/3 px-1" v-model="slted01_1" label="號碼牌"  ></v-text-field>  
           
 

  
  
         

<v-btn class="w-1/6"
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>


      
              <v-expand-transition class="" >
              <div v-show="show" >
              

                <!-- <v-card-text>
                  這邊是繳費記錄摘要....
                </v-card-text>  -->
                 <!-- <v-card-text>{{ slted01_1 }}</v-card-text>  -->
                 
                  <div class="flex ml-10 justify-center py-4 ">

                    <v-row >
                      <!-- <v-col 
                        sm="4"
                        md="4"
                      >
                        <v-checkbox
                          v-model="slted01_1"
                          label="成人男"
                          value="蛇皮"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="slted01_1"
                          label="成人女"
                          value="大灰"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="slted01_1"
                          label="兒童左"
                          value="童(左)"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="slted01_1"
                          label="兒童右"
                          value="童(右)"
                        ></v-checkbox>
                      </v-col>

                       <v-col 
                        sm="4"
                        md="4"
                      >
                        <v-checkbox
                          v-model="slted01_1"
                          label="成人男"
                          value="蛇皮"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="slted01_1"
                          label="成人女"
                          value="大灰"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="slted01_1"
                          label="兒童左"
                          value="童(左)"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="slted01_1"
                          label="兒童右"
                          value="童(右)"
                        ></v-checkbox>
                      </v-col>

                       <v-col 
                        sm="4"
                        md="4"
                      >
                        <v-checkbox
                          v-model="slted01_1"
                          label="成人男"
                          value="蛇皮"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="slted01_1"
                          label="成人女"
                          value="大灰"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="slted01_1"
                          label="兒童左"
                          value="童(左)"
                        ></v-checkbox>
                        <v-checkbox
                          v-model="slted01_1"
                          label="兒童右"
                          value="童(右)"
                        ></v-checkbox>
                      </v-col> -->
<p>活動狀態</p> 
                       <v-chip-group v-model="statu01_1" 
                                     
                                    class="md:w-1/3 " >  
                          
                          <v-chip active-class="bg-green-500   text-white text-x" value="第一次"    >   首 </v-chip>
                          <v-chip active-class="bg-red-500     text-white text-x" value="有玩過"    >  有玩過 </v-chip>  
                          <v-chip active-class="bg-blue-500    text-white text-x" value="續時中"    >   續 </v-chip>
                          <v-chip active-class="bg-yellow-500  text-white text-x" value="缺席"    >  等報到 </v-chip>  
                           <v-chip active-class="bg-red-500    text-white text-x" value="下時段保留"    >  已預約 </v-chip>
                          
                      </v-chip-group>  
                      
<p>客人類型</p> 

                      <v-chip-group v-model="slted01_1"  
                        active-class="bg-yellow-600 text-white text-xs  "
                        class="md:w-1/3 " multiple>   
                          <v-chip active-class="bg-green-500   text-white text-x" value="散客" >  體驗 </v-chip>
                          <v-chip active-class="bg-green-500   text-white text-x" value="學員" >  學員 </v-chip>
                          <v-chip active-class="bg-green-500   text-white text-x" value="會員" >  月卡 </v-chip> 
                          <v-chip active-class="bg-green-500   text-white text-x" value="選手" >  選手 </v-chip> 
                      </v-chip-group>  
<p>預備工具建議</p> 
                      <v-chip-group v-model="slted01_1"  
                        active-class="bg-yellow-600 text-white text-xs  "
                        class="md:w-1/3 " multiple>   
                          <v-chip active-class="bg-green-500   text-white text-x" value="女" >  成人女 </v-chip>
                          <v-chip active-class="bg-green-500   text-white text-x" value="男" >  成人男 </v-chip>
                          <v-chip active-class="bg-green-500   text-white text-x" value="右手兒童" >  R兒童 </v-chip> 
                          <v-chip active-class="bg-green-500   text-white text-x" value="左手兒童" >  L兒童 </v-chip> 
                      </v-chip-group>  

<p>距離</p>
                      <v-chip-group v-model="slted01_1"  
                        active-class="bg-yellow-600 text-white text-xs  "
                        class="md:w-1/3 " multiple >   
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
      <!-- <v-row    >
      <p class="text-xs text-red-500" >{{ slted01_1 }}</p> 
      </v-row>  -->
      <!-- <v-row> <p>{{ seat.pos01_1.slted }}</p> </v-row> -->
  </div>

<!-- <!> pos_01:[{ tempCardID: "", lftTm: "", nowstu: "" }], -->
  <div class="flex justify-center w-full my-3"> 
       <v-row> 
          <v-chip class="my-3 w-12 mx-1 blue lighten-5"> 01-2 </v-chip>  
          <v-text-field v-model="seat.pos_02.tempCardID" clearable   solo class="text-s w-8 px-1" label="號碼牌"   ></v-text-field>  
          <v-text-field v-model="seat.pos_02.lftTm"   clearable      solo class="text-s w-24 px-2" label="離場時間" ></v-text-field>   
          <!-- <v-text-field
            v-model="message2"
            solo
            label="Solo"
            clearable
          ></v-text-field> -->

          <!-- <v-checkbox
             class="w-12 "
              v-model="ex4"
              label="兒"
              color="red"
              value="兒童"
              hide-details
            ></v-checkbox> -->

           <!-- <v-chip  v-model="seat.pos_02.Kid" class="my-3 w-12 mx-1" active-class="bg-red-500 text-white text-x" > 兒童 </v-chip>   -->
              <!-- <v-chip  v-model="seat.pos_02.Kid" active-class="bg-red-500 text-white text-x" class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,0) == false' class=""> 兒童 </div> </v-chip> -->
          <v-chip-group v-model="seat.pos_02.nowstu"    
                        class="w-1/3 " >  
              <v-chip active-class="bg-red-500 text-white text-x" class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,0) == false' class=""> 首 </div> </v-chip>
              
              <v-chip active-class="bg-yellow-500 text-white text-x" class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,0) == false' class=""> 首 </div> </v-chip>
              <v-chip active-class="bg-green-500  text-white text-x" class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,1) == false' class=""> 續 </div> </v-chip>
              <v-chip active-class="bg-blue-500   text-white text-x" class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,2) == false' class=""> 保 </div> </v-chip>
            
          </v-chip-group>  
      </v-row> 
  </div>

  <div class="flex justify-center w-full my-1"> 
        <v-row> 
          <v-chip class="my-3 w-12  blue lighten-5"> 01-3 </v-chip>  
          <v-text-field solo class="text-xs w-4 px-1" label="號碼牌"  ></v-text-field>  
          <v-text-field solo class="text-s w-24 px-2" label="離場時間"  placeholder="離場時間"  ></v-text-field>   
 
          <v-chip-group v-model="seat.pos01_3"  multiple
                        active-class="bg-yellow-600 text-white text-xs  "
                        class="w-1/3" >  
              <v-chip active-class="bg-red-500     text-white text-x" > <div v-if='ck(od.ntadd_pos1_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,0) == false' class=""> 兒 </div> </v-chip>
              <v-chip active-class="bg-green-500   text-white text-x" > <div v-if='ck(od.ntadd_pos1_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,1) == false' class=""> 首 </div> </v-chip>
              <v-chip active-class="bg-blue-500    text-white text-x" > <div v-if='ck(od.ntadd_pos1_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,2) == false' class=""> 續 </div> </v-chip>
              <v-chip active-class="bg-yellow-500  text-white text-x" > <div v-if='ck(od.ntadd_pos1_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,2) == false' class=""> 保 </div> </v-chip>
          </v-chip-group>  
        </v-row> 
  </div> 

  <div class="flex justify-center w-full my-3"> 

    <v-card
    flat
    class="py-12"
  >
    <v-card-text>
      <v-row
        align="center"
        justify="center"
      >
        
       <!-- Model: {{ toggle_exclusive }} -->
<v-text-field solo v-model="toggle_exclusive" class="text-xs w-8 px-1" label="號碼牌登記為"  ></v-text-field>  

        <v-btn-toggle
          v-model="toggle_exclusive"
          multiple
        >
          <v-btn>
            <!-- <v-icon>mdi-format-align-left</v-icon> -->
            <span> 兒童 </span>
          </v-btn>
          <v-btn>
            <!-- <v-icon>mdi-format-align-center</v-icon> -->
            <span> 首次 </span>
          </v-btn>
          <v-btn>
            <!-- <v-icon>mdi-format-align-right</v-icon> -->
            <span> 續時 </span>
          </v-btn>
          <v-btn>
            <span> 保留 </span>
            <!-- <v-icon>保留</v-icon> -->
          </v-btn>
        </v-btn-toggle>

        <!-- <v-col
          cols="12"
          class="text-center"
        >
         
        </v-col> -->
      </v-row>
    </v-card-text>
  </v-card>

       <!-- <v-row> 
          <v-chip class="my-3 w-12 mx-1 blue lighten-3"> 02-1 </v-chip>  
          <v-text-field solo class="text-xs w-8 px-1" label="號碼牌登記為"  ></v-text-field>  
          <v-text-field solo class="text-s w-24 px-2" label="離場時間"  placeholder="離場時間"  ></v-text-field>   
          <v-chip-group v-model="seat.pos02_1"   
                        active-class="bg-blue-600 text-white text-xs  "
                        class="w-1/3 " >  
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,0) == false' class=""> 首 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,1) == false' class=""> 續 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,2) == false' class=""> 保 </div> </v-chip>
          </v-chip-group>  
      </v-row>  -->
  </div>

  <div class="flex justify-center w-full my-3"> 
       <v-row> 
          <v-chip class="my-3 w-12 mx-1 blue lighten-3"> 02-2 </v-chip>  
          <v-text-field solo class="text-xs w-8 px-1" label="號碼牌登記為"  ></v-text-field>  
          <v-text-field solo class="text-s w-24 px-2" label="離場時間"  placeholder="離場時間"  ></v-text-field>   
          <v-chip-group v-model="seat.pos02_2"   
                        active-class="bg-blue-600 text-white text-xs  "
                        class="w-1/3 " >  
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,0) == false' class=""> 首 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,1) == false' class=""> 續 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,2) == false' class=""> 保 </div> </v-chip>
          </v-chip-group>  
      </v-row> 
  </div>

  <div class="flex justify-center w-full my-3"> 
       <v-row> 
          <v-chip class="my-3 w-12 mx-1 blue lighten-3"> 02-3 </v-chip>  
          <v-text-field solo class="text-xs w-8 px-1" label="號碼牌登記為"  ></v-text-field>  
          <v-text-field solo class="text-s w-24 px-2" label="離場時間"  placeholder="離場時間"  ></v-text-field>   
          <v-chip-group v-model="seat.pos02_3"   
                        active-class="bg-blue-600 text-white text-xs  "
                        class="w-1/3 " >  
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,0) == false' class=""> 首 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,1) == false' class=""> 續 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,2) == false' class=""> 保 </div> </v-chip>
          </v-chip-group>  
      </v-row> 
  </div>

  <hr>
  <!-- <div class ="flex justify-center mt-2 "> 現況  </div> -->

   
  <div class="flex justify-center w-full my-3"> 
       <v-row> 
          <v-chip class="my-3 w-12 mx-1 yellow darken-2"> 07-1 </v-chip>  
          <v-text-field solo class="text-xs w-8 px-1" label="號碼牌登記為"  ></v-text-field>  
          <v-text-field solo class="text-s w-24 px-2" label="離場時間"  placeholder="離場時間"  ></v-text-field>   
          <v-chip-group v-model="od.bk_pos1_2"   
                        active-class="bg-yellow-600 text-white text-xs  "
                        class="w-1/3 " >  
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,0) == false' class=""> 首 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,1) == false' class=""> 續 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,2) == false' class=""> 保 </div> </v-chip>
          </v-chip-group>  
      </v-row> 
  </div>

  <div class="flex justify-center w-full my-3"> 
       <v-row> 
          <v-chip class="my-3 w-12 mx-1 yellow darken-2"> 07-2 </v-chip>  
          <v-text-field solo class="text-xs w-8 px-1" label="號碼牌登記為"  ></v-text-field>  
          <v-text-field solo class="text-s w-24 px-2" label="離場時間"  placeholder="離場時間"  ></v-text-field>   
          <v-chip-group v-model="od.bk_pos1_2"   
                        active-class="bg-yellow-600 text-white text-xs  "
                        class="w-1/3 " >  
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,0) == false' class=""> 首 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,1) == false' class=""> 續 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,2) == false' class=""> 保 </div> </v-chip>
          </v-chip-group>  
      </v-row> 
  </div>

  <div class="flex justify-center w-full my-3"> 
       <v-row> 
          <v-chip class="my-3 w-12 mx-1 yellow darken-2"> 07-3 </v-chip>  
          <v-text-field solo class="text-xs w-8 px-1" label="號碼牌登記為"  ></v-text-field>  
          <v-text-field solo class="text-s w-24 px-2" label="離場時間"  placeholder="離場時間"  ></v-text-field>   
          <v-chip-group v-model="od.bk_pos1_2"   
                        active-class="bg-yellow-600 text-white text-xs  "
                        class="w-1/3 " >  
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,0) == false' class=""> 首 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,1) == false' class=""> 續 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,2) == false' class=""> 保 </div> </v-chip>
          </v-chip-group>  
      </v-row> 
  </div> 

  <div class="flex justify-center w-full my-3"> 
       <v-row> 
          <v-chip class="my-3 w-12 mx-1 yellow darken-1"> 08-1 </v-chip>  
          <v-text-field solo class="text-xs w-8 px-1" label="號碼牌登記為"  ></v-text-field>  
          <v-text-field solo class="text-s w-24 px-2" label="離場時間"  placeholder="離場時間"  ></v-text-field>   
          <v-chip-group v-model="od.bk_pos1_2"   
                        active-class="bg-yellow-600 text-white text-xs  "
                        class="w-1/3 " >  
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,0) == false' class=""> 首 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,1) == false' class=""> 續 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,2) == false' class=""> 保 </div> </v-chip>
          </v-chip-group>  
      </v-row> 
  </div>

  <div class="flex justify-center w-full my-3"> 
       <v-row> 
          <v-chip class="my-3 w-12 mx-1 yellow darken-1"> 08-2 </v-chip>  
          <v-text-field solo class="text-xs w-8 px-1" label="號碼牌登記為"  ></v-text-field>  
          <v-text-field solo class="text-s w-24 px-2" label="離場時間"  placeholder="離場時間"  ></v-text-field>   
          <v-chip-group v-model="od.bk_pos1_2"   
                        active-class="bg-yellow-600 text-white text-xs  "
                        class="w-1/3 " >  
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,0) == false' class=""> 首 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,1) == false' class=""> 續 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,2) == false' class=""> 保 </div> </v-chip>
          </v-chip-group>  
      </v-row> 
  </div>

  <div class="flex justify-center w-full my-3"> 
       <v-row> 
          <v-chip class="my-3 w-12 mx-1 yellow darken-1"> 08-3 </v-chip>  
          <v-text-field solo class="text-xs w-8 px-1" label="號碼牌登記為"  ></v-text-field>  
          <v-text-field solo class="text-s w-24 px-2" label="離場時間"  placeholder="離場時間"  ></v-text-field>   
          <v-chip-group v-model="od.bk_pos1_2"   
                        active-class="bg-yellow-600 text-white text-xs  "
                        class="w-1/3 " >  
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,0) == false' class=""> 首 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,1) == false' class=""> 續 </div> </v-chip>
              <v-chip class="text-xs" > <div v-if='ck(od.ntadd_pos1_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce ">  </div> <div v-if='ck(od.ntadd_pos1_2,2) == false' class=""> 保 </div> </v-chip>
          </v-chip-group>  
      </v-row> 
  </div> 

<hr>

<div class ="flex justify-center bg-green-900 text-gray-100 py-2 "> 下個時段  </div>
 
</div> 

    </v-tab-item>
   
  </v-tabs-items> 
 
    </div>
<div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newODR">Add</button>
    </div>  
 
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import WordDataService from "../services/WordDataService";
import odDataService from "../services/odDataService";
import SeatPrepareService from "../services/SeatPrepareService";


export default {
  name: "add-tutorial",
  data() {
    return {
      includeFiles: false,
      enabled: false,
      toggle_exclusive: [],
       show: false,
       statu01_1:[],
       slted01_1:[],
      // - - - 
      // names: [{ first: "", last: "" }],
      seat:{
        od_date:"",
        pos01_1:[{tempCardID: "", lftTm: "", nowstu: "" ,slted:[]}],
         
        pos_02:[{ tempCardID: "", lftTm: "", nowstu: "" , kid: "" }],
        pos01_3:[{ tempCardID: "", lftTm: "", nowstu: "" , kid: "",slted:[] }],
      },

// seat.pos01_1.son

      menu: false,
      modal: false,
      menu2: false,
      tab:"",
      od: {
        od_date:"",
        bk_pos0_1:[],
        bk_pos0_2:[],
        bk_pos0_3:[],
        bk_pos0_4:[],
        ntadd_pos0_1:[],
        ntadd_pos0_2:[],
        ntadd_pos0_3:[],
        ntadd_pos0_4:[], 

        bk_pos1_1:[],
        bk_pos1_2:[],
        bk_pos1_3:[],
        bk_pos1_4:[],
        bk_pos1_5:[],
        bk_pos1_6:[],

        bk_pos1_7:[],
        bk_pos1_8:[],
        bk_pos1_9:[],
        bk_pos1_10:[], 

        ntadd_pos1_1:[],
        ntadd_pos1_2:[],
        ntadd_pos1_3:[],
        ntadd_pos1_4:[],
        ntadd_pos1_5:[],
        ntadd_pos1_6:[],

        ntadd_pos1_7:[],
        ntadd_pos1_8:[],
        ntadd_pos1_9:[],
        ntadd_pos1_10:[], 

        bk_pos2_1:[],
        bk_pos2_2:[],
        bk_pos2_3:[],
        bk_pos2_4:[],

        ntadd_pos2_1:[],
        ntadd_pos2_2:[],
        ntadd_pos2_3:[],
        ntadd_pos2_4:[],
      },
      
      bk_pos0_1:[],
      bk_pos0_2:[],
      bk_pos0_3:[],
      bk_pos0_4:[],

      ntadd_pos0_1:[],
      ntadd_pos0_2:[],
      ntadd_pos0_3:[],
      ntadd_pos0_4:[],

      bk_pos1_1:[],
      bk_pos1_2:[],
      bk_pos1_3:[],
      bk_pos1_4:[],
      bk_pos1_5:[],
      bk_pos1_6:[], 

      ntadd_pos1_1:[],
      ntadd_pos1_2:[],
      ntadd_pos1_3:[],
      ntadd_pos1_4:[],
      ntadd_pos1_5:[],
      ntadd_pos1_6:[],

      bk_pos2_1:[],
      bk_pos2_2:[],
      bk_pos2_3:[],
      bk_pos2_4:[],

      ntadd_pos2_1:[],
      ntadd_pos2_2:[],
      ntadd_pos2_3:[],
      ntadd_pos2_4:[],
      

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
 
     ck(aryy,cdtion){  
       var ans = aryy.some(function(item, index, array)
                {
                  return item == cdtion // 當全部 age 大於 10 才能回傳 true
                });
                // console.log("ans = " + ans);  // true: 只要有部分符合，則為 true 
           return  ans 
     }, 

    //  ckSt(ary_gp,sno,){  
    //    this.seat.pos_01 = this.od.ntadd_pos0_1; this.od.ntadd_pos0_1 =[];
    //   //  var ans = aryy.some(function(item, index, array)
    //   //           {
    //   //             return item == cdtion // 當全部 age 大於 10 才能回傳 true
    //   //           });
    //   //           // console.log("ans = " + ans);  // true: 只要有部分符合，則為 true 
    //        return  ans 
    //  }, 

    ckary(ary_gp) {
           
          console.log("hh j 111 j kk")
           
          switch (ary_gp) {
            case '11':
              this.od.bk_pos0_1 = this.od.ntadd_pos0_1; this.od.ntadd_pos0_1 =[];
              break;
            case '12':
              this.od.bk_pos0_2 = this.od.ntadd_pos0_2; this.od.ntadd_pos0_2 =[];
              break;
            case '13':
              this.od.bk_pos0_3 = this.od.ntadd_pos0_3; this.od.ntadd_pos0_3 =[];
              break;
            case '14':
              this.od.bk_pos0_4 = this.od.ntadd_pos0_4; this.od.ntadd_pos0_4 =[];
              break;

            case '21':
              this.od.bk_pos1_1 = this.od.ntadd_pos1_1; this.od.ntadd_pos1_1 =[];
              break;
            case '22':
              this.od.bk_pos1_2 = this.od.ntadd_pos1_2; this.od.ntadd_pos1_2 =[];
              break;
            case '23':
              this.od.bk_pos1_3 = this.od.ntadd_pos1_3; this.od.ntadd_pos1_3 =[];
              break;
            case '24':
              this.od.bk_pos1_4 = this.od.ntadd_pos1_4; this.od.ntadd_pos1_4 =[];
              break;
            case '25':
              this.od.bk_pos1_3 = this.od.ntadd_pos1_5; this.od.ntadd_pos1_5 =[];
              break;
            case '26':
              this.od.bk_pos1_4 = this.od.ntadd_pos1_6; this.od.ntadd_pos1_6 =[];
              break;

            case '27':
              this.od.bk_pos1_7 = this.od.ntadd_pos1_7; this.od.ntadd_pos1_7 =[];
              break;
            case '28':
              this.od.bk_pos1_8 = this.od.ntadd_pos1_8; this.od.ntadd_pos1_8 =[];
              break;

            case '29':
              this.od.bk_pos1_9 = this.od.ntadd_pos1_9; this.od.ntadd_pos1_9 =[];
              break;
            case '210':
              this.od.bk_pos1_10 = this.od.ntadd_pos1_10; this.od.ntadd_pos1_10 =[];
              break;    

            case '31':
              this.od.bk_pos2_1 = this.od.ntadd_pos2_1; this.od.ntadd_pos2_1 =[];
              break;
            case '32':
              this.od.bk_pos2_2 = this.od.ntadd_pos2_2; this.od.ntadd_pos2_2 =[];
              break;
            case '33':
              this.od.bk_pos2_3 = this.od.ntadd_pos2_3; this.od.ntadd_pos2_3 =[];
              break;
            case '34':
              this.od.bk_pos2_4 = this.od.ntadd_pos2_4; this.od.ntadd_pos2_4 =[];
              break;

            default:
              break;
          }
//        var temp_ary1 = this.ary1;
       
// bk_pos0_1
          // temp_ary1 = temp_ary2;
          // this.ary1 = temp_ary2;

      var temp_ary2 = ary2;
          ary1 = temp_ary2; 
          ary2 = [];
          
      this.od.ntadd_pos0_1 = [];
      console.log("hh j 2 j kk")
      return  ary1,ary2;

       
    },

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


    saveSeat() {
      var data = { 
        od_date  : this.seat.od_date,
        pos_01: this.seat.pos_01,
        pos_02: this.seat.pos_02,
        
      };

      odDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    saveODR() {
      var data = {
        // title: this.tutorial.title,
        // description: this.tutorial.description,
        // published: false,
        od_date  : this.od.od_date,
        bk_pos0_1: this.od.bk_pos0_1,
        bk_pos0_2: this.od.bk_pos0_2,
        bk_pos0_3: this.od.bk_pos0_3,
        bk_pos0_4: this.od.bk_pos0_4,
        bk_pos0_1: this.od.bk_pos0_1,
        bk_pos0_2: this.od.bk_pos0_2,
        bk_pos0_3: this.od.bk_pos0_3,
        bk_pos0_4: this.od.bk_pos0_4,
        bk_pos1_1: this.od.bk_pos1_1,
        bk_pos1_2: this.od.bk_pos1_2,
        bk_pos1_3: this.od.bk_pos1_3,
        bk_pos1_4: this.od.bk_pos1_4,
        bk_pos1_5: this.od.bk_pos1_5,
        bk_pos1_6: this.od.bk_pos1_6,
        bk_pos1_1: this.od.bk_pos1_1,
        bk_pos1_2: this.od.bk_pos1_2,
        bk_pos1_3: this.od.bk_pos1_3,
        bk_pos1_4: this.od.bk_pos1_4,
        bk_pos1_5: this.od.bk_pos1_5,
        bk_pos1_6: this.od.bk_pos1_6,
        bk_pos2_1: this.od.bk_pos2_1,
        bk_pos2_2: this.od.bk_pos2_2,
        bk_pos2_3: this.od.bk_pos2_3,
        bk_pos2_4: this.od.bk_pos2_4,
        bk_pos2_1: this.od.bk_pos2_1,
        bk_pos2_2: this.od.bk_pos2_2,
        bk_pos2_3: this.od.bk_pos2_3,
        bk_pos2_4: this.od.bk_pos2_4,
      };

      odDataService.create(data)
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
    
    newODR() {
      this.submitted = false;
      this.tutorial = {
        // title: "",
        // description: "",
        // published: false,
          od_date:[] ,
          bk_pos0_1:[] ,
          bk_pos0_2:[] ,
          bk_pos0_3:[] ,
          bk_pos0_4:[] ,
          bk_pos0_1:[] ,
          bk_pos0_2:[] ,
          bk_pos0_3:[] ,
          bk_pos0_4:[] ,
          bk_pos1_1:[] ,
          bk_pos1_2:[] ,
          bk_pos1_3:[] ,
          bk_pos1_4:[] ,
          bk_pos1_5:[] ,
          bk_pos1_6:[] ,
          bk_pos1_1:[] ,
          bk_pos1_2:[] ,
          bk_pos1_3:[] ,
          bk_pos1_4:[] ,
          bk_pos1_5:[] ,
          bk_pos1_6:[] ,
          bk_pos2_1:[] ,
          bk_pos2_2:[] ,
          bk_pos2_3:[] ,
          bk_pos2_4:[] ,
          bk_pos2_1:[] ,
          bk_pos2_2:[] ,
          bk_pos2_3:[] ,
          bk_pos2_4:[] ,
      };
    },
  },
  mounted() {
    TutorialDataService.getAll().on("value", this.onDataChange);
    SeatPrepareService.getAll().on("value", this.onDataChange);
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
