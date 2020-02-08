function count (hitung) {
    let hidup = ['a','i','u','e','o'];
    let vowels = 0;

    for(i=0;i<hitung.length;i++) {
        if (hidup.indexOf(hitung[i]) > -1) {
            vowels++;
        }
    }
    return vowels;
}

console.log(count('asoloe'));
console.log(count('html'));