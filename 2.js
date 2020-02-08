function cekUsername (){
    let validasi = /^[a-z]{5,9}$/;
    let idUser = document.getElementById("username")
    if(idUser.Value.match(validasi)){
        return true;
    } else {
        return false;
}

function cekPassword () {
    let validasi = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let idPass = document.getElementById("password")
    if (idPass.Value.match(validasi)) {
        return true;
    } else {
        return false;
    }
}