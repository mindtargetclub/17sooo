<template>
  <v-app>
     
        

      
       <div class=" ">
    <div class="">
       <!-- Fixed Bottom Nav!  -->
        
        <v-content > 
         <router-view/> 
      </v-content>

    </div>

    <!-- fixed nav -->
    <nav class="fixed bottom-0 inset-x-0 bg-blue-100 flex justify-between text-sm bg-blue-900  text-blue-900 uppercase font-mono">

      <a href="#" class="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800 transition duration-300">
        <svg class="w-4 h-4  mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
        停用功能2
      </a>

      <a href="#" class="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800">
        <svg class="w-4 h-4   mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        停用功能2
      </a>

       <a href="#" class="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800">
        <router-link to="/bkadd2" class="text-white text-xs"> 
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
           靶位管理
        </router-link>
      </a> 
  
  
       <a href="#" class="w-full block py-5 px-3 text-center hover:bg-blue-200 hover:text-blue-800">
            <router-link to="/bkList" class="text-white text-xs ">  
             <svg class="w-4 h-4   mx-auto"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            紀錄查詢 
            </router-link>
          </a>

    </nav>
</div>


  </v-app>

  
</template>