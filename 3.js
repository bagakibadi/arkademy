function countChar(string, huruf) {
    let hitung = 0;

    for (let i = 0; i < string.length; i++) {
        if (huruf.indexOf(string[i]) !== -1) {
            hitung++;
        }
    }
    return hitung;
}
console.log(countChar('arka','a'))
console.log(countChar('javascript','x'))