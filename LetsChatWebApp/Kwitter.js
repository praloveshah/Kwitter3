function adduser(){
    user_name = document.getElementById("user_name").textContent;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();