/*Գրեք factorial անունով ֆունկցիա, որը կվերցնի թիվ և կվերադարձնի այդ թվի ֆակտորիալը։
Հիշեք, որ թվի ֆակտորիալը, տրված թվից մինչև 1 բոլոր բնական թվերի արտադրյալն է։
Օրինակ factorial(5)․ պետք է վերադարձի 120։*/



function factorial(num){
    let a = 1;
    while(num >= 1){
        a = a * num;
        num--;
    }
    return a;
}

console.log(factorial(5));