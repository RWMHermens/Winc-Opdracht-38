// A
const addTheWordCool = function (array) {
    array.push("cool");
    return array;
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// B
const amountOfElementsInArray = (fruit) => {
    return fruit.length;
};
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));
// 3

// C
const selectBelgiumFromBenelux = (benelux) => {
    return benelux[0];
};
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

// D
const lastElementInArray = (animals) => {
    return animals[animals.length - 1];
};
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

// E
const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = () => {
    let impeach = presidents.slice(1);
    return impeach;
};
const impeachTrumpSplice = () => {
    let impeach = presidents.splice(1, 4);
    return impeach;
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F
const stringsTogether = (strings) => {
    return strings.join(' ');
};
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"

// G
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combineArrays = () => {
    return array1.concat(array2);
};
console.log(combineArrays());
// resultaat: [1,2,3,4,5,6]