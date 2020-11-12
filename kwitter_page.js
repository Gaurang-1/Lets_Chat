var firebaseConfig = {
    apiKey: "AIzaSyAfmR4RdKaxX6wvTu6Ti5q-vEmqANOHL44",
    authDomain: "lets--chat-b5b30.firebaseapp.com",
    databaseURL: "https://lets--chat-b5b30.firebaseio.com",
    projectId: "lets--chat-b5b30",
    storageBucket: "lets--chat-b5b30.appspot.com",
    messagingSenderId: "314389813353",
    appId: "1:314389813353:web:42e89cd3a787eae60faaf8",
    measurementId: "G-LNEKY47KZS"
  };

  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        likes:0
    });
}