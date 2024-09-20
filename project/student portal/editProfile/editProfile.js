 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
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