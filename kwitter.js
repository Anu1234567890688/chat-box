function addUser() 
{
    user_name = document.getElementById("user_name").value;

    localStorage.storage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}