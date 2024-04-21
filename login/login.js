function validated() {
    var username = document.forms["form"]["username"].value;
    var password = document.forms["form"]["password"].value;
    var username_error = document.getElementById("username_error");
    var password_error = document.getElementById("password_error");
    var submit_error = document.getElementById("submit_error");

    // Reset error messages
    username_error.style.display = "none";
    password_error.style.display = "none";
    submit_error.style.display = "none";

    // Check if username and password are empty
    if (username === "") {
        username_error.style.display = "block";
        return false;
    }
    if (password === "") {
        password_error.style.display = "block";
        return false;
    }

    // Check if username and password match the expected values
    if (username !== "Budi Tabuti" || password !== "1234") {
        submit_error.style.display = "block";
        return false;
    }

    // If everything is valid, redirect to another HTML page
    get_userdata(username);
    window.location.href = "./index.html";

    // Prevent form submission
    return false;
}

function get_userdata(str){
    sessionStorage.setItem('username', str);
}