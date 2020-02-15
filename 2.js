function username (name) {
    let regex = /^[a-z.]{5,9}$/
    let ekse = regex.exec(name);

    if(ekse) {
        return true;
    }
    return false;
}
console.log(username('jok3r'))
console.log(username('suparman'))

function password (password) {
    let regex = /^(?=(?:.*[0-9]){3})[a-zA-Z0-9#*.!?$,]{8,}$/;
    let ekse = regex.exec(password)
    if(ekse) {
        return true;
    }
    return false
}
console.log(password('Dap0#r'))
console.log(password('T3pungB#3r4s!'))