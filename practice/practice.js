//Task 1

// function filterArray(arr) {
//     const newArr = []
//     arr.forEach(element => {
//         if(element % 2 === 0){
//             newArr.push(element)
//         }
//     });
//     return newArr
//   }
//   console.log(filterArray([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

//Task 2

// function findLongestWord(str) {
//     const arrStr = str.split(' ');
//     let newStr = arrStr[0];
//     for(let i = 0; i < arrStr.length; i++){
//         if(newStr.length < arrStr[i].length){
//             newStr = arrStr[i]
//         }
//     }
//     return newStr
//   }
  
//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // "jumped"

//TASK 3

// function reverseString(str) {
//     let reverseStr = ''
//     for(let i = str.length-1; i >= 0; i--){
//         reverseStr += str[i] 
//     }
//     return reverseStr
//   }
  
//   console.log(reverseString("hello")); // "olleh"

//TASK 4

// function factorialize(num) {
//     let result = 1;
//     for(let i = 1; i <= num; i++){
//         result *= i;
//     }
//     return result
//   }
  
//   console.log(factorialize(5)); // 120

//Task 5

// function celsiusToFahrenheit(celsius) {
//     return celsius * 1.8 + 32
//   }
  
//   console.log(celsiusToFahrenheit(30)); // 86

//TASk 6

// function power(base, exponent) {
    // return base ** exponent
    // return Math.pow(base, exponent)
//   }
  
//   console.log(power(2, 3)); // 8

//task 7

// function isPalindrome(str) {
//     // Приведення рядка до нижнього регістру та видалення всіх неалфавітних символів
//     const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     // Порівняння очищеного рядка з його перевернутою версією
//     return cleanedStr === cleanedStr.split('').reverse().join('');
// }

// console.log(isPalindrome("A man a plan a canal Panama")); // true

//task 8

// function sortArray(arr) {
//     return arr.sort((a, b) => a - b);
//   }
  
//   console.log(sortArray([3, 1, 4, 1, 5, 9])); // [1, 1, 3, 4, 5, 9]

// function calculate(num1, num2, operator) {
//     let result = 0
//     switch(operator){
//         case "+":
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break
//         case '/':
//             result = num1 / num2
//             break;
//         default:
//             console.log('Невірний оператор')    
//     }
//     return result
//   }
  
//   console.log(calculate(10, 5, '+')); // 15
//   console.log(calculate(10, 5, '-')); // 5
//   console.log(calculate(10, 5, '*')); // 50
//   console.log(calculate(10, 5, '/')); // 2

// function commonElements(arr1, arr2) {
//     return arr1.filter(num => arr2.includes(num))
//   }
  
//   console.log(commonElements([1, 2, 3], [2, 3, 4])); // [2, 3]

//Object
//task 1

// const car = {
//     brand: 'audi',
//     model: 'a7',
//     year: 2014,
//     color: 'black'
// }

// const {brand, model, year, color} = car

// console.log(`Це автомобіль ${brand} ${model}, випущений у ${year} році, колір - ${color} `)

//task 2

// const user = {
//     name: 'Eugene',
//     age: 18,
//     email: 'eugene@gmail.com'
// }

// function outputValue({name, age, email}){
//     return `Користувач ${name}, вік - ${age}, email - ${email}.`
// }

// console.log(outputValue(user))

//task 3

// const book = {
//     title: 'War and peace',
//     author: "John Doe",
//     year: 2010
// }

// function changeYearBook(book){
//     book.year = new Date().getFullYear()
// }
// changeYearBook(book)
// console.log(book)

//task 4

// const calculator = {
//     a: 5,
//     b: 10,

//     add(){
//       return this.a + this.b  
//     },
//     subtract(){
//         return this.a - this.b
//     },
//     multiply(){
//         return this.a * this.b
//     },
//     divide(){
//         if(a === 0 || b === 0){
//             return 'Ділити на 0 не можна'
//         }else{
//             return this.a / this.b
//         } 
//     }
// }

//task 5
// const student = {
//     name: 'Eugene',
//     age: 18,
//     grades: [4,6,3,6,7,]
// }
// function outputKeyAndValue(obj){
//     const keys = Object.keys(obj)
//     for(key of keys){
//         console.log(`${key}: ${student[key]}`)
//     }
// }

// outputKeyAndValue(student)

//array practice

// task 1

// const array = [1, 2, 3, 4, 5];

// function filterAndMap(arr, predicate, transform){
//     return arr.reduce((acc, number) => {
//         if(predicate(number)){
//             acc.push(transform(number))
//         }
//         return acc
//     },[])
// }

// const result = filterAndMap(
//   array, 
//   num => num > 2, 
//   num => num * 2
// );

// console.log(result); // [6, 8, 10]

//task 2

// const array = [1, 2, 3, 4, 3, 2, 5, 6, 1];

// function findDuplicates(arr){
//     return arr.filter((num, idx) => { 
//         return arr.indexOf(num) !== idx
//     })
// }

// const duplicates = findDuplicates(array);

// console.log(duplicates); // [1, 2, 3]

//task 3

// const array1 = [1, 2, 3];
// const array2 = [4, 5];
// const array3 = [6, 7, 8];

// function concatArrays(...args) {
// const newArr = []
// args.map(el => newArr.push(...el))
// return newArr
// }

// const result = concatArrays(array1, array2, array3);

// console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8]

//task 4

// const people = [
//     { name: "Alice", age: 21 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 21 },
//     { name: "David", age: 25 },
//     { name: "Eve", age: 30 }
//   ];

// function groupBy(arr, key){
//     return arr.reduce((acc, element) =>{
//         const groupKey = element[key]
        
//         if(!acc[groupKey]){
//             acc[groupKey] = []
//         }

//         acc[groupKey].push(element)

//         return acc
//     },{})
// }

//   const groupedByAge = groupBy(people, "age");
  
//   console.log(groupedByAge);
  // {
  //   21: [{ name: "Alice", age: 21 }, { name: "Charlie", age: 21 }],
  //   25: [{ name: "Bob", age: 25 }, { name: "David", age: 25 }],
  //   30: [{ name: "Eve", age: 30 }]
  // }

  //task 5

// const array = [1, 2, 3, 4, 5];

// function shuffleArray(arr){
//     console.log(arr.sort((a,b) => Math.random() * a - b))
// }

// const shuffledArray = shuffleArray(array);

// console.log(shuffledArray); // [3, 5, 1, 4, 2] (можливий варіант)

