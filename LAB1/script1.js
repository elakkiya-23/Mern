var a = 20;
var b = 5;


if (a > b) {
    if (a % b === 0) {
        console.log(`${b} can completely divide ${a}.`);
    } else {
        console.log(`${b} cannot completely divide ${a}.`);
    }
}
else {
    if (b % a === 0) {
        console.log(`${a} can completely divide ${b}.`);
    } else {
        console.log(`${a} cannot completely divide ${b}.`);
    }
}
