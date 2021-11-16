<template>

<div class="flex items-start w-auto row">
 

  <div class=" grid grid-cols-3 gap-2  ">  
    <v-card solo>

      <v-card-title>北北東</v-card-title>
      <v-divider></v-divider>
      <div class=" md:p-2 col-span-1">
        <strong> 
    <a class=" text-3xl "> {{ 24-bk_pos0_1.length-bk_pos0_2.length -bk_pos0_3.length -bk_pos0_4.length   }} / 24
      </a></strong> 
      </div>
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
    <v-card-title  >南場 </v-card-title>
      <v-divider></v-divider>

      <div class=" md:p-2 col-span-1">
        <strong> 
          <a class=" text-3xl "> {{ 24-bk_pos2_1.length-bk_pos2_2.length -bk_pos2_3.length -bk_pos2_4.length  }} / 24  
          </a></strong> 
      </div> 
      </v-card>
  </div>
    
    
  <v-tabs
    v-model="tab"
    background-color="primary" 
    fixed-tabs
      
  >
    <v-tab key='k1' href='#k1' v-if="!hide"  >    
        北北東 
        <!-- <br>【 {{ 24-bk_pos0_1.length-bk_pos0_2.length -bk_pos0_3.length -bk_pos0_4.length   }} / 24 】  -->  
    </v-tab>
    <v-tab key='k2' href='#k2' > 
        北場  
        <!-- <br> 【 {{ 36-bk_pos1_1.length-bk_pos1_2.length -bk_pos1_3.length -bk_pos1_4.length -bk_pos1_5.length -bk_pos1_6.length }} / 36 】  -->
    </v-tab>
    <v-tab key='k3' href='#k3'  > 
        南場  
        <!-- <br> 【 {{ 22-bk_pos2_1.length-bk_pos2_2.length -bk_pos2_3.length -bk_pos2_4.length  }} / 22   -->
    </v-tab> 
  </v-tabs> 

      <v-tabs-items v-model="tab">
        <v-tab-item key='k1' value='k1'>  

    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" >棚 1</div>
        <div class= " text-xs border-b-4 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" >剩 : {{ 6-bk_pos0_1.length  }} </div>
        <div class= " text-xs border-b-4 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" >預 : {{ 6-ntadd_pos0_1.length  }} </div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" 
        v-on:click="ckary('11')"
         >換</div> 
      </div>

    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" > 棚 2</div>
        <div class= " text-xs border-2 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" > 剩 :  {{ 6-bk_pos0_2.length  }} </div>  
        <div class= " text-xs border-2 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" > 預 :  {{ 6-ntadd_pos0_2.length  }}</div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" 
        v-on:click="ckary('12')"
         >換</div>    
      </div>  
    </div> 
    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" >棚 3</div>
        <div class= " text-xs border-2 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" >剩 : {{ 6-bk_pos0_3.length  }}  </div>
        <div class= " text-xs border-2 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" >預 : {{ 6-ntadd_pos0_3.length  }} </div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" 
        v-on:click="ckary('13')"
         >換</div>    
      </div> 
    </div> 
    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" >棚 4</div>
        <div class= " text-xs border-2 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" >剩 : {{ 6-bk_pos0_4.length  }} </div>
        <div class= " text-xs border-2 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" >預 : {{ 6-ntadd_pos0_4.length  }} </div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" 
        v-on:click="ckary('14')"
         >換</div>     
      </div>  
    </div>

      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  當時 棚1  </div >  
            <v-chip-group v-model="bk_pos0_1"   multiple 
                  active-class="bg-red-600 text-white text-xs "
                  class="w-5/6 " > 
                  <v-chip class="text-xs " > <div v-if='ck(ntadd_pos0_1,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(ntadd_pos0_1,0) == false' class=""> 6 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_1,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(ntadd_pos0_1,1) == false' class=""> 5 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_1,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(ntadd_pos0_1,2) == false' class=""> 4 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_1,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(ntadd_pos0_1,3) == false' class=""> 3 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_1,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(ntadd_pos0_1,4) == false' class=""> 2 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_1,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(ntadd_pos0_1,5) == false' class=""> 1 </div> </v-chip>  
            </v-chip-group>  
      </div>
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  當時 棚2  </div >   
            <v-chip-group v-model="bk_pos0_2"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip class="text-xs " > <div v-if='ck(ntadd_pos0_2,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(ntadd_pos0_2,0) == false' class=""> 6 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_2,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(ntadd_pos0_2,1) == false' class=""> 5 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_2,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(ntadd_pos0_2,2) == false' class=""> 4 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_2,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(ntadd_pos0_2,3) == false' class=""> 3 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_2,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(ntadd_pos0_2,4) == false' class=""> 2 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_2,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(ntadd_pos0_2,5) == false' class=""> 1 </div> </v-chip> 
            </v-chip-group>  
      </div>
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  當時 棚3  </div >   
            <v-chip-group v-model="bk_pos0_3"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip class="text-xs " > <div v-if='ck(ntadd_pos0_3,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(ntadd_pos0_3,0) == false' class=""> 6 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_3,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(ntadd_pos0_3,1) == false' class=""> 5 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_3,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(ntadd_pos0_3,2) == false' class=""> 4 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_3,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(ntadd_pos0_3,3) == false' class=""> 3 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_3,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(ntadd_pos0_3,4) == false' class=""> 2 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_3,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(ntadd_pos0_3,5) == false' class=""> 1 </div> </v-chip>   
            </v-chip-group>  
      </div>
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  當時 棚4  </div >   
            <v-chip-group v-model="bk_pos0_4"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip class="text-xs " > <div v-if='ck(ntadd_pos0_4,0) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 6 </div> <div v-if='ck(ntadd_pos0_4,0) == false' class=""> 6 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_4,1) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 5 </div> <div v-if='ck(ntadd_pos0_4,1) == false' class=""> 5 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_4,2) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 4 </div> <div v-if='ck(ntadd_pos0_4,2) == false' class=""> 4 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_4,3) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 3 </div> <div v-if='ck(ntadd_pos0_4,3) == false' class=""> 3 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_4,4) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 2 </div> <div v-if='ck(ntadd_pos0_4,4) == false' class=""> 2 </div> </v-chip>
                  <v-chip class="text-xs" >  <div v-if='ck(ntadd_pos0_4,5) == true' class="text-xl text-yellow-400 font-black animate-bounce "> 1 </div> <div v-if='ck(ntadd_pos0_4,5) == false' class=""> 1 </div> </v-chip> 
            </v-chip-group>  
      </div>
<hr>
    <div class="bg-green-50">
            <div class="flex justify-center w-full "> 
      <div class="grid grid-cols-5 " >  
        <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                    text-xs text-center py-1.5 px-2 my-2 mr-1 "
                    v-on:click="ckary('32')"
                    > 
                換</div>
        <div class="col-span-3 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                預 棚1  </div >   
        </div >   
      <v-chip-group v-model="ntadd_pos0_1"   multiple 
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
                    v-on:click="ckary('32')"
                    > 
                換</div>
        <div class="col-span-3 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                預 棚2  </div >   
        </div >   
      <v-chip-group v-model="ntadd_pos0_2"   multiple 
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
                    v-on:click="ckary('32')"
                    > 
                換</div>
        <div class="col-span-3 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                預 棚3  </div >   
        </div >   
      <v-chip-group v-model="ntadd_pos0_3"   multiple 
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
                    v-on:click="ckary('32')"
                    > 
                換</div>
        <div class="col-span-3 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                預 棚4  </div >   
        </div >   
      <v-chip-group v-model="ntadd_pos0_4"   multiple 
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

<!--
      <div class="flex justify-center w-full  ">
          <div  small  
                class="rounded-r-lg text-xs bg-green-800 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  預排 棚1  </div >   
            <v-chip-group v-model="ntadd_pos0_1"   multiple 
                  active-class="bg-green-600 text-white text-xs  " 
                  class="w-5/6 " >  
                  <v-chip   class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip   class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip   class="text-xs" > 1 </v-chip>
            </v-chip-group>  
      </div> 
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs bg-green-800 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  預排 棚2  </div >   
            <v-chip-group v-model="ntadd_pos0_2"   multiple 
                  active-class="bg-green-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip   class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip   class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip   class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs bg-green-800 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  預排 棚3   </div >   
            <v-chip-group v-model="ntadd_pos0_3"   multiple 
                  active-class="bg-green-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip    class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip  class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip  class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 
            <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs bg-green-800 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  預排 棚4  </div >   
            <v-chip-group v-model="ntadd_pos0_4"   multiple 
                  active-class="bg-green-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip    class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip  class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip  class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 
      -->
    </div> 
    </div> 
        </v-tab-item>
        <v-tab-item key='k2' value='k2'> 

    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" >棚 1</div>
        <div class= " text-xs border-b-4 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" >剩 : {{ 6-bk_pos0_1.length  }} </div>
        <div class= " text-xs border-b-4 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" >預 : {{ 6-ntadd_pos0_1.length  }} </div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" 
        v-on:click="ckary('21')"
         >換</div>  
      </div>

    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" > 棚 2</div>
        <div class= " text-xs border-2 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" > 剩 :  {{ 6-bk_pos0_2.length  }} </div>  
        <div class= " text-xs border-2 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" > 預 :  {{ 6-ntadd_pos0_2.length  }}</div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" 
        v-on:click="ckary('22')"
         >換</div>    
      </div>  
    </div> 

    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" >棚 3</div>
        <div class= " text-xs border-2 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" >剩 : {{ 6-bk_pos0_3.length  }}  </div>
        <div class= " text-xs border-2 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" >預 : {{ 6-ntadd_pos0_3.length  }} </div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" 
        v-on:click="ckary('23')"
         >換</div>    
      </div> 
    </div> 

    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" >棚 4</div>
        <div class= " text-xs border-2 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" >剩 : {{ 6-bk_pos0_4.length  }} </div>
        <div class= " text-xs border-2 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" >預 : {{ 6-ntadd_pos0_4.length  }} </div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" 
        v-on:click="ckary('24')"
         >換</div>     
      </div>  
    </div>


    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" >棚 5</div>
        <div class= " text-xs border-2 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" >剩 : {{ 6-bk_pos0_3.length  }}  </div>
        <div class= " text-xs border-2 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" >預 : {{ 6-ntadd_pos0_3.length  }} </div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" 
        v-on:click="ckary('25')"
         >換</div>    
      </div> 
    </div> 
    
    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" >棚 6</div>
        <div class= " text-xs border-2 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" >剩 : {{ 6-bk_pos0_4.length  }} </div>
        <div class= " text-xs border-2 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" >預 : {{ 6-ntadd_pos0_4.length  }} </div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" 
        v-on:click="ckary('26')"
         >換</div>     
      </div>  
    </div>

      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  當時 棚1  </div >   
            <v-chip-group v-model="bk_pos1_1"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip class="text-xs" > 6 </v-chip>
                  <v-chip class="text-xs" > 5 </v-chip>
                  <v-chip class="text-xs" > 4 </v-chip>
                  <v-chip class="text-xs" > 3 </v-chip>
                  <v-chip class="text-xs" > 2 </v-chip>
                  <v-chip class="text-xs" > 1 </v-chip>  
            </v-chip-group>  
      </div>
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  當時 棚2  </div >   
            <v-chip-group v-model="bk_pos1_2"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip class="text-xs" > 6 </v-chip>
                  <v-chip class="text-xs" > 5 </v-chip>
                  <v-chip class="text-xs" > 4 </v-chip>
                  <v-chip class="text-xs" > 3 </v-chip>
                  <v-chip class="text-xs" > 2 </v-chip>
                  <v-chip class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div>
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  當時 棚3  </div >   
            <v-chip-group v-model="bk_pos1_3"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip class="text-xs" > 6 </v-chip>
                  <v-chip class="text-xs" > 5 </v-chip>
                  <v-chip class="text-xs" > 4 </v-chip>
                  <v-chip class="text-xs" > 3 </v-chip>
                  <v-chip class="text-xs" > 2 </v-chip>
                  <v-chip class="text-xs" > 1 </v-chip>  
            </v-chip-group>  
      </div>
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  當時 棚4  </div >   
            <v-chip-group v-model="bk_pos1_4"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip class="text-xs" > 6 </v-chip>
                  <v-chip class="text-xs" > 5 </v-chip>
                  <v-chip class="text-xs" > 4 </v-chip>
                  <v-chip class="text-xs" > 3 </v-chip>
                  <v-chip class="text-xs" > 2 </v-chip>
                  <v-chip class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div>
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  當時 棚5  </div >   
            <v-chip-group v-model="bk_pos1_5"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip class="text-xs" > 6 </v-chip>
                  <v-chip class="text-xs" > 5 </v-chip>
                  <v-chip class="text-xs" > 4 </v-chip>
                  <v-chip class="text-xs" > 3 </v-chip>
                  <v-chip class="text-xs" > 2 </v-chip>
                  <v-chip class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div>
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  當時 棚6  </div >   
            <v-chip-group v-model="bk_pos1_6"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip class="text-xs" > 6 </v-chip>
                  <v-chip class="text-xs" > 5 </v-chip>
                  <v-chip class="text-xs" > 4 </v-chip>
                  <v-chip class="text-xs" > 3 </v-chip>
                  <v-chip class="text-xs" > 2 </v-chip>
                  <v-chip class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div>
<hr>
    <div class="bg-green-50">
      <div class="flex justify-center w-full  ">
          <div  small  
                class="rounded-r-lg text-xs light-green darken-3 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  預排 棚1  </div >   
            <v-chip-group v-model="ntadd_pos1_1"   multiple 
                  active-class="bg-green-600 text-white text-xs  " 
                  class="w-5/6 " >  
                  <v-chip  class="text-xs  " > 6 </v-chip>
                  <v-chip  class="text-xs" > 5 </v-chip>
                  <v-chip  class="text-xs" > 4 </v-chip>
                  <v-chip  class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip  class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs light-green darken-3 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  預排 棚2  </div >   
            <v-chip-group v-model="ntadd_pos1_2"   multiple 
                  active-class="bg-green-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip   class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip   class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip   class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs light-green darken-3 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  預排 棚3   </div >   
            <v-chip-group v-model="ntadd_pos1_3"   multiple 
                  active-class="bg-green-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip    class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip  class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip  class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 
            <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs light-green darken-3 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  預排 棚4  </div >   
            <v-chip-group v-model="ntadd_pos1_4"   multiple 
                  active-class="bg-green-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip    class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip  class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip  class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 
    <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs light-green darken-3 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  預排 棚5  </div >   
            <v-chip-group v-model="ntadd_pos1_5"   multiple 
                  active-class="bg-green-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip class="text-xs" > 6 </v-chip>
                  <v-chip class="text-xs" > 5 </v-chip>
                  <v-chip class="text-xs" > 4 </v-chip>
                  <v-chip class="text-xs" > 3 </v-chip>
                  <v-chip class="text-xs" > 2 </v-chip>
                  <v-chip class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs light-green darken-3 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  預排 棚6  </div >   
            <v-chip-group v-model="ntadd_pos1_6"   multiple 
                  active-class="bg-green-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip class="text-xs" > 6 </v-chip>
                  <v-chip class="text-xs" > 5 </v-chip>
                  <v-chip class="text-xs" > 4 </v-chip>
                  <v-chip class="text-xs" > 3 </v-chip>
                  <v-chip class="text-xs" > 2 </v-chip>
                  <v-chip class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 

    </div> 
    
    </div> 

        </v-tab-item>
        <v-tab-item key='k3' value='k3'>  

    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" >棚 1</div>
        <div class= " text-xs border-b-4 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" >剩 : {{ 6-bk_pos0_1.length  }} </div>
        <div class= " text-xs border-b-4 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" >預 : {{ 6-ntadd_pos0_1.length  }} </div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" 
        v-on:click="ckary('31')"
         >換</div>  
      </div>

    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" > 棚 2</div>
        <div class= " text-xs border-2 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" > 剩 :  {{ 6-bk_pos0_2.length  }} </div>  
        <div class= " text-xs border-2 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" > 預 :  {{ 6-ntadd_pos0_2.length  }}</div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" 
        v-on:click="ckary('32')"
         >換</div>    
      </div>  
    </div> 
    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" >棚 3</div>
        <div class= " text-xs border-2 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" >剩 : {{ 6-bk_pos0_3.length  }}  </div>
        <div class= " text-xs border-2 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" >預 : {{ 6-ntadd_pos0_3.length  }} </div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" 
        v-on:click="ckary('33')"
         >換</div>    
      </div> 
    </div> 
    <div> 
      <div class ="flex justify-center bg-gray-200 py-2 items-start w-auto">
        <div class= " text-xs border-1 py-1 border-blue-400 text-gray-900 rounded-2xl text-ms px-3 px-0.5 mx-2" >棚 4</div>
        <div class= " text-xs border-2 py-1 bg-red-200 border-red-600 text-gray-900 font-semibold rounded-2xl     px-2 mx-1" >剩 : {{ 6-bk_pos0_4.length  }} </div>
        <div class= " text-xs border-2 py-1 bg-green-200 border-green-400 text-gray-900 font-semibold rounded-2xl px-2 mx-1" >預 : {{ 6-ntadd_pos0_4.length  }} </div>
        <div class= " text-xs border-2 py-1 bg-gray-600  border-gray-400  text-gray-200 font-semibold rounded-2xl px-2 mx-1" 
        v-on:click="ckary('34')"
         >換</div>  

          
      </div>  
    </div>

      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  當時 棚1  </div >   
            <v-chip-group v-model="bk_pos2_1"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >   
                  <v-chip class="text-x " >  6  </v-chip>
                  <v-chip class="text-xs" > 5 </v-chip>
                  <v-chip class="text-xs" > 4 </v-chip>
                  <v-chip class="text-xs" > 3 </v-chip>
                  <v-chip class="text-xs" > 2 </v-chip>
                  <v-chip class="text-xs" > 1 </v-chip>  
            </v-chip-group>  
      </div>
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  當時 棚2  </div >   
            <v-chip-group v-model="bk_pos2_2"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip class="text-xs" > 6 </v-chip>
                  <v-chip class="text-xs" > 5 </v-chip>
                  <v-chip class="text-xs" > 4 </v-chip>
                  <v-chip class="text-xs" > 3 </v-chip>
                  <v-chip class="text-xs" > 2 </v-chip>
                  <v-chip class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div>
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  當時 棚3  </div >   
            <v-chip-group v-model="bk_pos2_3"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip class="text-xs" > 6 </v-chip>
                  <v-chip class="text-xs" > 5 </v-chip>
                  <v-chip class="text-xs" > 4 </v-chip>
                  <v-chip class="text-xs" > 3 </v-chip>
                  <v-chip class="text-xs" > 2 </v-chip>
                  <v-chip class="text-xs" > 1 </v-chip>  
            </v-chip-group>  
      </div>
      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs red darken-2 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  當時 棚4  </div >   
            <v-chip-group v-model="bk_pos2_4"   multiple 
                  active-class="bg-red-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip class="text-xs" > 6 </v-chip>
                  <v-chip class="text-xs" > 5 </v-chip>
                  <v-chip class="text-xs" > 4 </v-chip>
                  <v-chip class="text-xs" > 3 </v-chip>
                  <v-chip class="text-xs" > 2 </v-chip>
                  <v-chip class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div>
<hr>
    <div class="bg-green-50">
      <div class="flex justify-center w-full  ">
          <div  small  
                class="rounded-r-lg text-xs light-green darken-3 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  預排 棚1  </div >   
            <v-chip-group v-model="ntadd_pos2_1"   multiple 
                  active-class="bg-green-600 text-white text-xs  " 
                  class="w-5/6 " >  
                  <v-chip  class="text-xs" > 6 </v-chip>
                  <v-chip  class="text-xs" > 5 </v-chip>
                  <v-chip  class="text-xs" > 4 </v-chip>
                  <v-chip  class="text-xs" > 3 </v-chip>
                  <v-chip  class="text-xs" > 2 </v-chip>
                  <v-chip  class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 
      <div class="flex justify-center w-full "> 
      <div class="grid grid-cols-5 " >  
        <div class="col-span-2 rounded-2xl bg-green-400 border-b-4 border-green-700 text-green-900 font-bold
                    text-xs text-center py-1.5 px-2 my-2 mr-1 "
                    v-on:click="ckary('32')"
                    > 
                換</div>
        <div class="col-span-3 rounded-lg text-xs bg-green-600
                    text-white text-center py-2 my-2 mr-1 ">
                預 棚2  </div >   
        </div >   
      <v-chip-group v-model="ntadd_pos2_2"   multiple 
            active-class="bg-green-600 text-white text-xs  "
             >  
            <v-chip   class="text-xs" > 6 </v-chip>
            <v-chip   class="text-xs" > 5 </v-chip>
            <v-chip   class="text-xs" > 4 </v-chip>
            <v-chip   class="text-xs" > 3 </v-chip>
            <v-chip   class="text-xs" > 2 </v-chip>
            <v-chip   class="text-xs" > 1 </v-chip> 
      </v-chip-group>  
<!-- </div> -->
      </div> 

      <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs light-green darken-3 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  預排 棚3   </div >   
            <v-chip-group v-model="ntadd_pos2_3"   multiple 
                  active-class="bg-green-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip    class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip  class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip  class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 
            <div class="flex justify-center w-full ">
          <div  small  
                class="rounded-r-lg text-xs light-green darken-3 text-white text-center p-1 py-2 my-2 mr-1 w-20">
                  預排 棚4  </div >   
            <v-chip-group v-model="ntadd_pos2_4"   multiple 
                  active-class="bg-green-600 text-white text-xs  "
                  class="w-5/6 " >  
                  <v-chip    class="text-xs" > 6 </v-chip>
                  <v-chip   class="text-xs" > 5 </v-chip>
                  <v-chip   class="text-xs" > 4 </v-chip>
                  <v-chip  class="text-xs" > 3 </v-chip>
                  <v-chip   class="text-xs" > 2 </v-chip>
                  <v-chip  class="text-xs" > 1 </v-chip> 
            </v-chip-group>  
      </div> 
    </div> 
    </div> 
        </v-tab-item>
      </v-tabs-items>

 
    
 
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import WordDataService from "../services/WordDataService";


export default {
  name: "add-tutorial",
  data() {
    return {
      tab:"",
      
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
                console.log("ans = " + ans);  // true: 只要有部分符合，則為 true 
           return  ans 
     },
 


    ckary(ary_gp) {
           
          console.log("hh j 111 j kk")
          // if (ary_gp = 11)
          // { this.bk_pos0_1 = this.ntadd_pos0_1; this.ntadd_pos0_1 =[]; }
          // else-if 
          // { this.bk_pos0_1 = this.ntadd_pos0_1; this.ntadd_pos0_1 =[]; }
          
          // ;
          switch (ary_gp) {
            case '11':
              this.bk_pos0_1 = this.ntadd_pos0_1; this.ntadd_pos0_1 =[];
              break;
            case '12':
              this.bk_pos0_2 = this.ntadd_pos0_2; this.ntadd_pos0_2 =[];
              break;
            case '13':
              this.bk_pos0_3 = this.ntadd_pos0_3; this.ntadd_pos0_3 =[];
              break;
            case '14':
              this.bk_pos0_4 = this.ntadd_pos0_4; this.ntadd_pos0_4 =[];
              break;

            case '21':
              this.bk_pos1_1 = this.ntadd_pos1_1; this.ntadd_pos1_1 =[];
              break;
            case '22':
              this.bk_pos1_2 = this.ntadd_pos1_2; this.ntadd_pos1_2 =[];
              break;
            case '23':
              this.bk_pos1_3 = this.ntadd_pos1_3; this.ntadd_pos1_3 =[];
              break;
            case '24':
              this.bk_pos1_4 = this.ntadd_pos1_4; this.ntadd_pos1_4 =[];
              break;
            case '25':
              this.bk_pos1_3 = this.ntadd_pos1_5; this.ntadd_pos1_5 =[];
              break;
            case '26':
              this.bk_pos1_4 = this.ntadd_pos1_6; this.ntadd_pos1_6 =[];
              break;

            case '31':
              this.bk_pos2_1 = this.ntadd_pos2_1; this.ntadd_pos2_1 =[];
              break;
            case '32':
              this.bk_pos2_2 = this.ntadd_pos2_2; this.ntadd_pos2_2 =[];
              break;
            case '33':
              this.bk_pos2_3 = this.ntadd_pos2_3; this.ntadd_pos2_3 =[];
              break;
            case '34':
              this.bk_pos2_4 = this.ntadd_pos2_4; this.ntadd_pos2_4 =[];
              break;

            default:
              break;
          }
//        var temp_ary1 = this.ary1;
       var temp_ary2 = ary2;
// bk_pos0_1
          ary1 = temp_ary2; 
          ary2 = [];
          // temp_ary1 = temp_ary2;
          this.ntadd_pos0_1 = [];
          // this.ary1 = temp_ary2;
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
