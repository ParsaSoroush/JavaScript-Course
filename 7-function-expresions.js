// Function Declaration
function calcAge1(birthYeah) {
    return 2025 - birthYeah;
}

const age1 = calcAge1(2010);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYeah) {
    return 2025 - birthYeah;
}

const age2 = calcAge2(2010);
console.log(age2);
