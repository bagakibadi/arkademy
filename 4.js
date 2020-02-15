function validateColor(hexCode) {
    if (hexCode[0] !== "#" || hexCode.length < 4 || hexCode.length > 7) {
        return "Format Hex Code Salah!";
    } else {

        for (i = 1; i < hexCode.length; i++) {
            if (isNaN(parseInt(hexCode.charAt(i), 16))) {
                return "Format Hex Code Salah";
            }
        }
    }
    return "Format Hex Code Benar!";
}
console.log(validateColor('#eee'));
console.log(validateColor('#F3F3F3'));
console.log(validateColor('#ezff8d'));