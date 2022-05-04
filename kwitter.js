var firebaseConfig = {
    apiKey: "AIzaSyBvlvXwcP9exIwZtxqBaw_tsAc4N3bsw7c",
    authDomain: "letschat-b2447.firebaseapp.com",
    databaseURL: "https://letschat-b2447-default-rtdb.firebaseio.com",
    projectId: "letschat-b2447",
    storageBucket: "letschat-b2447.appspot.com",
    messagingSenderId: "846154603307",
    appId: "1:846154603307:web:b1e6dc0d6d346172eac36e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function addUser(){

user_name=document.getElementById("user_name").value;
localStorage.setItem("user_name",user_name);
console.log (localStorage.getItem("user_name"));
window.location="kwitter_room.html";

}