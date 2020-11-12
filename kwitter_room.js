name=document.getElementById("name").value;
document.getElementById("name").value=name;

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

function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 
 console.log("Room Name-"+room_name);
 row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;

 });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}