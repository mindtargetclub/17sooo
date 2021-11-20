<template>
  <div class="submit-form">

    <span class="result"></span>
      <hr>  
      check here ,
      Exp_1:  
      <br>
      {{ temp  }}

      <hr>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import WordDataService from "../services/WordDataService";


export default {
  name: "add-tutorial",
  data() {
    return {


      temp:[],
       
      submitted: false
      ,
      word: {  
        spell_tayal: "",
        spell_zh_tw: "",  
        season: "",
        topic:"",
        description: "", 
      },
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

    getDt()
    {
      
    }



  },
  mounted() {

    // const uuid = xxxxxx;
    // const token = xxxxxx;

    // const instance = axios.create({
    //   baseURL: 'https://some-domain.com/api/',
    //   timeout: 1000,
    //   headers: {'X-Custom-Header': 'foobar'}
    // });

    // //新增一個變數叫HexSchool api，它是一個axios實體物件。
    // //我們在裏面設定config物件，讓我們之後可以重用
    // const apiHexSchool = axios.create({
    //     baseURL: `https://course-ec-api.hexschool.io/api/${uuid}`,
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Authorization": `Bearer ${token}`,
    //     }
    // })

    // //新增商品到後台。在.post()裏第一個参數，只需放入URL後面的部分
    // const addProduct_backend = data => apiHexSchool.post('/admin/ec/product',data);

    // addProduct_backend(data)
    //     .then( (response) => console.log(response))
    //     .catch( (error) => console.log(error));



    // axios.get('https://randomuser.me/api/?gender=female&nat=us')
    // .then( (response) =>  
    // {  this.temp = response;
    //    console.log(response);
    // })




    // axios.get('https://api.rezio.io/v1/config')
    // .then( (response) =>  
    // {  this.temp = response;
    //    console.log(response);
    // })


// var request = new XMLHttpRequest();

// request.open('GET', 'https://api.rezio.io/v1/config');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };

// request.send();



// axios({
//   method: 'get',
//   baseURL: 'https://api.rezio.io/',
//   url: '/v1/config',
//   headers: {
//            'Content-Type': 'application/json',
//             "X-Lang":"en",
//             "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
//             "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
//         }
  
// })
//   .then((result) => { console.log(result.data) })
//   .catch((err) => { console.error(err) })


// fetch('https://randomuser.me/api/')
//     .then((response) => {
//         console.log(response); 
//     })
//     .catch((error) => {
//         console.log(`Error: ${error}`);
//     })


// let responseee = fetch('https://randomuser.me/api/',{
//     headers: {
//         Authentication: 'secret'
//     }
// });

// console.log("responseee = " + responseee)

// const url = 'https://api.rezio.io//v1/config'

// let headers = {
//     "Content-Type": "application/json",
//     "X-Lang":"en",
//             "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
//             "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
// }

// fetch(url, {
//     method: "GET",
//     headers: headers,
// })
//     .then( (response) => response.json())
//     .then( (json) => console.log(json));

// console.log("- -- - -- here")


// var xhr = new XMLHttpRequest();
// //需要告知要傳遞的資料格式
// xhr.open("GET","/https://api.rezio.io//v1/config");
// // xhr.setRequestHeader("Content-type","text/plain;charset=UTF-8"); 

// xhr.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };


// xhr.send();

var request = new XMLHttpRequest();

// request.open('GET', 'https://api.rezio.io/v1/config');
request.open('GET', 'https://api.uat.rezio.io/v1/order/list');

	
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('X-Lang', 'en');
request.setRequestHeader('X-Auth-StoreUuid', '001e81f1-3111-485e-8c22-6644cb2df11c');
request.setRequestHeader('X-Auth-Key', '0b4ae1cc6859fc3a47b06d27677eb07c');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
    console.log('Bodyd:', response);
    
  }
};

request.send();

// fetch('https://api.rezio.io//v1/config', {
// method: 'get',
// headers: {
//           "Content-Type": "application/json",
//             "X-Lang":"en",
//             "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
//             "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
// }})
// .then((response) => {
//         console.log(response); 
//     })
//     .catch((error) => {
//         console.log(`Error: ${error}`);
//     })


console.log("- -- - -- here")

// body: new URLSearchParams([
// ["username", "Lan"],["password", "123456"]
// ]).toString()
// })
// .then(res => {
// console.log(res);
// return res.text();
// })
// .then(data => {
// console.log(data);
// })


// fetch('http://www.mozotech.cn/bangbang/index/user/login', {
// method: 'post',
// headers: {
// 'Content-Type': 'application/x-www-form-urlencoded'
// },
// body: new URLSearchParams([
// ["username", "Lan"],["password", "123456"]
// ]).toString()
// })
// .then(res => {
// console.log(res);
// return res.text();
// })
// .then(data => {
// console.log(data);
// })


    // let headers = {
    //     "Content-Type": "application/json", 
    //         // "X-Lang":"en",
    //         // "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
    //         // "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
    // };

    // axios({
    //       method: 'get',
    //       //又要多寫一次整個URL
    //       url:'https://api.uat.rezio.io/v1/config',
    //       // url: 'https://randomuser.me/api/?gender=female&nat=us',
    //       //又要多寫一次headers
    //       headers: headers
    //   })
    //  .then( (response) =>  
    // {  this.temp = response;
    //    console.log(response);
    // })
    // .catch( (error) => console.log(error))

    // .catch( (error) => console.log(error));


    // const uuid = xxxxxx;
    // const token = xxxxxx;

    //新增一個變數叫HexSchool api，它是一個axios實體物件。
    //我們在裏面設定config物件，讓我們之後可以重用
    // const apiRezio = axios.create({
    //     baseURL: 'https://api.rezio.io/',
    //     headers: {
    //         "Content-Type": "application/json", 
    //         "X-Lang":"en",
    //         "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
    //         "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
    //     }
    // })

    // //新增商品到後台。在.post()裏第一個参數，只需放入URL後面的部分
    // const getRezioDt = data => apiRezio.get('https://api.rezio.io/v1/config',data);

    // getRezioDt(data)
    //     .then( (response) => 
    //             {  
    //               // this.temp = response;
    //                 console.log(response);
    //             })
    //     .catch( (error) => console.log(error));

 
      // const result = document.querySelector('.result');

      // axios.get('https://randomuser.me/api/')
      //   .then(function (response) {
      //     let data = response.data;
      //     result.textContent = data.results[0].email;
      //     // this.temp = data;
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   })
      //   .finally(function () {
      //     // always executed
      //     console.log('I always Execued');
      //   });
    


    // TutorialDataService.getAll().on("value", this.onDataChange);
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
