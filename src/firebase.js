import * as firebase from "firebase";
import "firebase/database";

// let config = {
//   apiKey: "xxx",
//   authDomain: "bezkoder-firebase.firebaseapp.com",
//   databaseURL: "https://bezkoder-firebase.firebaseio.com",
//   projectId: "bezkoder-firebase",
//   storageBucket: "bezkoder-firebase.appspot.com",
//   messagingSenderId: "xxx",
//   appId: "xxx",
// };

// let config = { 
//   apiKey: "AIzaSyBfGRf3rz_p6R21JDLYjpYjXjwKrLaHb8c",
//   authDomain: "nm-tayal.firebaseapp.com",
//   databaseURL: "https://nm-tayal-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "nm-tayal",
//   storageBucket: "nm-tayal.appspot.com",
//   messagingSenderId: "816237299811",
//   appId: "1:816237299811:web:507e570a2200ce90dd1056",
//   measurementId: "G-FD3QSMYTP3"
// };


let config = { 
  // apiKey: "AIzaSyCkm291w41Hh9ST_mLd3b-oxR1f3Sjd8gY",
  // authDomain: "h2fnote.firebaseapp.com",
  // databaseURL: "https://h2fnote-default-rtdb.firebaseio.com",
  // projectId: "h2fnote",
  // storageBucket: "h2fnote.appspot.com",
  // messagingSenderId: "813097034040",
  // appId: "1:813097034040:web:519e3cc628d721f42661cd",
  // measurementId: "G-DNG7BEFMTW"
  apiKey: "AIzaSyA-sh6CUx3d3MHHfqugmTOzTdhbMIoXCCg",
  authDomain: "h2fnotebkup2-97fd4.firebaseapp.com",
  databaseURL: "https://h2fnotebkup2-97fd4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "h2fnotebkup2-97fd4",
  storageBucket: "h2fnotebkup2-97fd4.appspot.com",
  messagingSenderId: "961384345618",
  appId: "1:961384345618:web:b771027b304fc3087868cb"
};

let config2 = { 
  // apiKey: "AIzaSyA8R9TjllSRp_VD8EUa6vvyItyfjpzjsYE",
  // authDomain: "h2fnote-backup.firebaseapp.com",
  // databaseURL: "https://h2fnote-backup-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "h2fnote-backup",
  // storageBucket: "h2fnote-backup.appspot.com",
  // messagingSenderId: "728696220760",
  // appId: "1:728696220760:web:8be651f1f921ea7d48ae2d"
};

  

firebase.initializeApp(config);

export default firebase.database();
