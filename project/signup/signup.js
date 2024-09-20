 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
 import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
 import { getFirestore , doc , setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBAlVjTiWgvvhUM0ECQejwiaIck30OaIE4",
   authDomain: "studentdata-f002d.firebaseapp.com",
   projectId: "studentdata-f002d",
   storageBucket: "studentdata-f002d.appspot.com",
   messagingSenderId: "596430172374",
   appId: "1:596430172374:web:cfd127e899acb106a21977",
   measurementId: "G-ZZW2W36DPD"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth();
 const db = getFirestore();

 
 let username = document.getElementById("username");
 let email = document.getElementById("email");
 let password = document.getElementById("password");
 
 window.save = () => {
   let obj = {
     username: username.value,
     email: email.value,
     password: password.value,
   };
   console.log(obj);
 
 
   createUserWithEmailAndPassword(auth,obj.email, obj.password)
   .then((res) => {
     obj.id = res.user.uid;
     obj.userType = 'user'
 
     delete obj.password;
 
     const reference = doc(db,'user',obj.id)
     setDoc(reference,obj)
     .then(() => {
       const userObj = JSON.stringify(obj)
       localStorage.setItem('user',userObj)
       // window.location.replace('../../index.html')
     })
     .catch((err) => {
       console.log(err.message);
     })
   })
   .catch((err) => {
     console.log(err.message);
   })
 }