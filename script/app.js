function handleFloatingLabel() {

}

function handlePasswordSwitcher() {
    var password = document.getElementById('ShowPassword');
    if(password.type  === "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});