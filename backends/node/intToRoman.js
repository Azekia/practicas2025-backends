
function intToRoman(num) {
num = num.toString();
const regex = /[a-z!@#\$%\^\&*\)\(+=._\-\]]+/i;
    
    if (num < 1 || num > 3999) {
        return "Número fuera de rango (1-3999)";
    }else if(-1 < num.search(regex)) {
        return "No es un caracter válido";
    }else {
        const valoresRomanos = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];

    let romano = "";
    for (let i = 0; i < valoresRomanos.length; i++) {
        while (num >= valoresRomanos[i][0]) {
            romano += valoresRomanos[i][1];
            num -= valoresRomanos[i][0];
        }
    }

    return romano;
    }
}


module.exports = { intToRoman };