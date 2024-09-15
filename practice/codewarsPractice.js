//task 1

// function number(arr){
//     if(!arr.length){
//         return []
//     }
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(`${i+1}: ${arr[i]}`)
//     }
//     return newArr
// }



// console.log(number(["a", "b", "c"]))  // ["1: a", "2: b", "3: c"] || [] return []

//Task 2
// function printerError(s) {
//     const arrStr = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
//     let count = 0
//     for(let i = 0; i < s.length; i++){
//         if(!arrStr.includes(s[i])){
//             count +=1
//         }
//     }
//     return `${count}/${s.length}`
// }

// var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
// console.log(printerError(s)) // "3/56"

//task 3
// function stray(numbers) {
//     const res = numbers.reduce((acc,el) => {
//         if(acc.hasOwnProperty(el)){
//             acc[el] += 1
//         } else{
//             acc[el] = 1
//         }
//         return acc
//     },{})
//     const objKey = Object.keys(res)
//     const result = objKey.filter(el => res[el] === 1).join('')
//     return Number(result)
//   }

// console.log(stray([17, 17, 2, 17]))

//task 4

// function min(list){
    // let minValue = list[0];
    // for (let i = 0; i < list.length; i++){
    //     if (minValue > list[i]) {
    //         minValue = list[i]
    //     }
    // }
    // return minValue;
    // return Math.min(...list)
// }

// function max(list){
    // let maxValue = list[0];
    // for (let i = 0; i < list.length; i++){
    //     if (maxValue < list[i]) {
    //         maxValue = list[i]
    //     }
    // }
    // return maxValue;
    // return Math.max(...list)
// }

// console.log(min([-52, 56, 30, 29, -54, 0, -110]))
// console.log(max([4,6,2,1,9,63,-134,566]))

//task 5

// function century(year) {
    // let century = 0;
    // for (let i = 0; i < year; i += 100){
    //     century += 1
    // }
    // return century
    // return Math.ceil(year / 100)
// }

// console.log(century(2024))

//task 6

// function order(words) {
//     const arrStr = words.split(' ');
//     let newArr = []
//     for (let i = 0; i < arrStr.length; i++) {
//         for (let j = 1; j < 10; j++) {
//             if (arrStr[i].includes(`${j}`)) {
//                 newArr[j-1] = arrStr[i]
//             }
//         }
//     }
//         return newArr.join(' ')
//     }

// console.log(order("is2 Thi1s T4est 3a"))

//task 7
// var summation = function (num) {
//     let result = 0;
//     for (let i = 0; i <= num; i++){
//         result += i
//     }
//     return result
// }

// console.log(summation(8))

//task 8

// function twoSort(s) {
//     const sort = s.sort()
//     const firstStr = sort[0]
//    return firstStr.split('').join('***')
// }

// console.log(twoSort(["bitcoin", "bake", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))

//task 9

// function grow(x){
//     return x.reduce((acc, num) => acc * num, 1)
// }

// console.log(grow([1, 2, 3]))

// task 10
// function alphabetPosition(text) {
//  const alpabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
//     const result = []
//     for (let i = 0; i < text.length; i++){
//         for (let j = 0; j < alpabet.length; j++){
//             if (text[i].toLowerCase() === alpabet[j]) {
//                 result.push(j+1)
//             }
//         }
//     }
//     return result.join(' ')
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."))

//task 11

// function rowSumOddNumbers(n) {
//     return Math.pow(n, 3);
// }

// console.log(rowSumOddNumbers(42))

//task 12
// function pipeFix(numbers){
//     const newArr = []
//     for (let i = numbers[0]; i <= numbers[numbers.length-1]; i++){
//         newArr.push(i)
//     }
//     return newArr
// }

// console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]))
// console.log(pipeFix([-1,4]))

//task 13

// function arithmetic(a, b, operator){
//   switch (operator) {
//     case 'add':
//         return a+b
//     case 'subtract':
//        return a-b
//       case 'multiply':
//        return a*b
//       case 'divide':
//        return a/b
//   }
// }

// console.log(arithmetic(1, 2, "add"))
// console.log(arithmetic(8, 2, "subtract"))

//task 14

// function saleHotdogs(n){
//   return n*(n<5?100:n<10?95:90);
// }

//task 15

// var humanYearsCatYearsDogYears = function (humanYears) {
//     const res = []
//     if (humanYears === 1) {
//         res.push(humanYears, 15, 15)
//     }
//     else if (humanYears === 2) {
//         res.push(humanYears, 24, 24)
//     } else {
//         let catYears = 24;
//         let dogYears = 24;
//         for (let i = 0; i < humanYears - 2; i++) {
//             catYears += 4;
//             dogYears += 5;
//         }
//         res.push(humanYears, catYears, dogYears)
//     }
//     return res
// }

// console.log(humanYearsCatYearsDogYears(10)) //[10,56,64]

//task 16;

// function shortcut(string) {
    // let arrStr = 'aeiou'.split('');
    // let newStr = ''
    // for (let i = 0; i < string.length; i++){
    //     if (!arrStr.includes(string[i])) {
    //         newStr += string[i]
    //     }
    // }
    // return newStr
    // return [...string].filter(item => !arrStr.includes(item)).join('')
// }

// console.log(shortcut('hello'))

//task 17

// function calculateYears(principal, interest, tax, desired) {
//     let count = 0;
//     let res = principal
//     while (res <= desired) {
//         let i = res * interest;
//         let t = i * tax;
//         res = res + (i - t);
//         count += 1
//     }
//     return principal === desired ? 0 : count
// }

// console.log(calculateYears(1000, 0.05, 0.18, 1100))

//task 18

// const reverseSeq = n => {
//   const newArr = [];
//   for(let i = 1; i <= n; i++){
//       newArr.push(i)
//   }
//   return newArr.reverse()
// };

// reverseSeq(5) //[5, 4, 3, 2, 1]);

//task 19

// function likes(names) {
//     if (!names.length) {
//        return 'no one likes this'
//     } else if (names.length === 1) {
//         return `${names[0]} likes this`
//     } else if (names.length === 2) {
//         return `${names[0]} and ${names[1]} like this`
//     } else if (names.length === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     } else {
//         return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
//     }
// }

// console.log(likes([]))
// console.log(likes(['Peter']))
// console.log(likes(['Jacob', 'Alex']))

//task 20
// function getRealFloor(n) {
//     if (n <= 0) {
//         return n;
//     } else if (n <= 12) {
//         return n - 1
//     } else {
//         return n - 2
//     }
// }

// console.log(getRealFloor(-1))


// task 21
// function sumMix(x) {
//     return x.reduce((acc, num) => {
//         acc += +num
//         return acc
//    }, 0)
// }
// console.log(sumMix([9, 3, '7', '3']))

//task 22

// function gooseFilter (birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     const newArr = []
//     for (let i = 0; i < birds.length; i++) {
//         if (!geese.includes(birds[i])) {
//             newArr.push(birds[i])
//         }
//     }
//     return newArr
// };

// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
// // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

//task 23
// function findUniq(arr) {
//     const obj = arr.reduce((acc, num) => {
//         if (acc.hasOwnProperty(num)) {
//             acc[num] += 1
//         } else {
//             acc[num] = 1
//         }
//         return acc
//     }, {})
//     const keys = Object.keys(obj)
//     for (let i = 0; i < keys.length; i++){
//         if (obj[keys[i]] === 1) {
//             return Number(keys[i])
//         }
//     }
// }

// console.log(findUniq([ 1, 0, 0 ]))

//task 24

// function removeUrlAnchor(url) {
//   return url.split('#')[0];
// }

// console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))

//task 25

// function countPositivesSumNegatives(input) {
//    if (input === null || input.length === 0) {
//         return []
//     }
//     let posNum = 0;
//     let negSum = 0;
//     for (let i = 0; i < input.length; i++){
//         if (input[i] > 0) {
//             posNum += 1
//         } else {
//             negSum += input[i]
//         }
//     }
//     return [posNum, negSum]
// }

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]

//task 26

// function remove(string) {

//     if (string[string.length - 1] === '!') {
//         const str = string.slice(0, -1); // Берем все символы кроме последнего
//   return str;
//     }else {
//   return string;
// }
// }

// console.log(remove("Hi! Hi!",)) // Hi!!