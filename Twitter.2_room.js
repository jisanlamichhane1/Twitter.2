
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome to My Twitter.2 App "+user_name+ "!";
function addRoom(){

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter.2page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectTORoomName(this.id)' >#"+ Room_names +"</div<hr>";
      document.getElementByID("output").innerHTML += row;
      //End code
      });});}
getData();

  function redirectTORoomName(room){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter.2_page.html";
  }   