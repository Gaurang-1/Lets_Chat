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

function getData() { firebase.database().ref("/"+room_name).on('value', 
function(snapshot) { document.getElementById("output").innerHTML = "";  
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
  childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData; 
    //Start code
    console.log(message_data);
    var name=message_data['name'];
    message=message_data['message'];
    likes=message_data['like'];
    name_with_tag="<h4>"+name+"<img src='tick.png' style='height:50px;width:50px;'></h4>";
    message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
    like_button="<button class='btn btn-warning' id="+firebase_message_id+"onclick='uppdate_like(this.id)'>";
    span_with_tag="<span class='glyphicon glyphicon-thumbs-up '>Like :" +likes+"</span></button><hr>";
    
    row=name_with_tag+message_with_tag+like_button+span_with_tag;
    document.getElementById("output").innerHTML=row;
    
  //End code 
} }); }); } getData();

function logOut(){
 
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
