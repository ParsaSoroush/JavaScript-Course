const calcAge3 = birthYeah => 2025 - birthYeah;

const age3 = calcAge3(2010);
console.log(age3);

const yearsUntilRetirement = birthYeah => {
    const age = 2025 - birthYeah;
    const retirement = 65 - age;

    return retirement
}

console.log(yearsUntilRetirement(2010));