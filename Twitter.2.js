function addUser(){
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "Twitter.2_room.html";

}