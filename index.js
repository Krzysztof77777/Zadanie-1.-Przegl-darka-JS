const btn = document.querySelector('button');
const evenNumbers = document.querySelector('.even__numbers');
const oddNumbers = document.querySelector('.odd__numbers');

let arrayOfRandomNumbers = [];
let evenNumbersFromArrayOfRandomNumbers = [];
let oddNumbersFromArrayOfRandomNumbers = [];

btn.addEventListener('click', () => {
    resetArrays();
    deleteGeneratedNumbersFromHTML();
    generate20RandomNumbersFrom1To100();
    filterGeneratedNumbersToEvenAndOddArrays();
    sortAscendindNumbersToEvenAndOddArrays();
    addEvenAndOddNumbersToHTML();
});

const resetArrays = () => {
    arrayOfRandomNumbers = [];
    evenNumbersFromArrayOfRandomNumbers = [];
    oddNumbersFromArrayOfRandomNumbers = [];
}

const deleteGeneratedNumbersFromHTML = () => {
    evenNumbers.textContent = "";
    oddNumbers.textContent = "";
}

const generate20RandomNumbersFrom1To100 = () => {
    let remainingNumbersToGenerate = 20;
    while (remainingNumbersToGenerate) {
        const randomNumberToAdd = Math.floor(Math.random() * 100 + 1);
        if (!arrayOfRandomNumbers.includes(randomNumberToAdd)) {
            arrayOfRandomNumbers.push(randomNumberToAdd);
            remainingNumbersToGenerate--;
        }
    }
}

const filterGeneratedNumbersToEvenAndOddArrays = () => {
    for (const el of arrayOfRandomNumbers) {
        if (!(el % 2)) {
            evenNumbersFromArrayOfRandomNumbers.push(el);
        } else oddNumbersFromArrayOfRandomNumbers.push(el);
    }
}

const sortAscendindNumbersToEvenAndOddArrays = () => {
    evenNumbersFromArrayOfRandomNumbers.sort((a, b) => a - b);
    oddNumbersFromArrayOfRandomNumbers.sort((a, b) => a - b);
}

const addEvenAndOddNumbersToHTML = () => { //nie jest do końca sprecyzowane w jaki sposób dodać te liczby do kolumn, uznałem , że zrobie to w następujący sposób.
    evenNumbers.textContent = evenNumbersFromArrayOfRandomNumbers.join(', ');
    oddNumbers.textContent = oddNumbersFromArrayOfRandomNumbers.join(', ');
}