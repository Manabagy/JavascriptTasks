/*Գրեք average անունով ֆունկցիա, որը կվերցնի թվերի զանգված,
 և կվերադարձնի այդ թվերի հանրահաշվական միջինը։
 Օրինակ average([4, 3, 6, 10, 2])․ պետք է վերադարձի 5։*/


var m = 0;
var n = 0;
function average(array) {
    while (m < array.length) {
        n = n + array[m];
        m++;
    }
    return n / m;
}

console.log(average([1, 2, 3, 4]));