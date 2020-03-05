function validar(){
    let email = document.getElementById('email').value;
    if(email === ""){
        alert("campos vacíos");
        return false;
    }
}