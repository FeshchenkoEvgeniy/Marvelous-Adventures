//Task 1

// class Book {
//   constructor({title, author, year}){
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getSummary(){
//     return `Name book ${this.title}, author book ${this.author} and year of publication ${this.year}`
//   }
// }

// const theWitcherBook = new Book({title: 'Відьмак', author: "Andre Sapjovskiy", year: "2015"})
// console.log(theWitcherBook.getSummary())

//Task 2

// class Car {
//   constructor({make, model, year}) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   getDescription(){
//     return `Виробник - ${this.make}, модель - ${this.model}, рік випуску - ${this.year}`
//   }
//   age(){
//     let today = new Date();
//     let yearNow = today.getFullYear()
//     return `Вік вашого автомобіля ${yearNow - this.year} років`
//   }
// }

// const mazdaCar = new Car({make: 'Mazda', model: 'CX-5', year: '2014'})
// console.log(mazdaCar.getDescription());
// console.log(mazdaCar.age())

//Task 3

// class ElectricCar extends Car {
//   constructor({make, model, year, batteryCapacity}){
//     super({make, model, year})
//       this.batteryCapacity = batteryCapacity
//   }
//   charge(){
//     if(this.batteryCapacity === 100){
//       return 'Автомобіль має повну зарядку. Зарядка неможлива'
//     }
//     return `Автомобіль ${this.make} ${this.model} заряджається `
//   }
//   getDescription(){
//     return `${super.getDescription()}, ємність вашої батареї ${this.batteryCapacity} %`
//   }
// }

// const myElectricCar = new ElectricCar({make: "Tesla", model: "Model S", year: 2020, batteryCapacity: 100});

// console.log(myElectricCar.getDescription()); 
// console.log(myElectricCar.charge()); 

// Task 4

// class Circle {
//     constructor(radius){
//       this.radius = radius
//     }
//     getArea(){
//       return Math.PI * (this.radius * this.radius)
//     }
//     getCircumference(){
//       return 2 * Math.PI * this.radius
//     }
// }

// const areaCircle = new Circle(625)
// console.log(`Area ${areaCircle.getArea()}`);
// const Circumference = new Circle(550)
// console.log(`Circumference ${Circumference.getCircumference()}`)

//Task 5

// class Point {
//   constructor(x, y) {
//       this.x = x;
//       this.y = y;
//   }

//   distanceTo(point) {
//       const dx = this.x - point.x;
//       const dy = this.y - point.y;
//       return Math.sqrt(dx * dx + dy * dy);
//   }
// }
// const pointA = new Point(3, 4);
// const pointB = new Point(6, 8);

//Task 6
// class Student {
//   constructor({name, age, grades}){
//     this.name = name;
//     this.age = age;
//     this.grades = grades ?? []
//   }
//   getAverageGrade(){
//     let amountGrades = this.grades.length;

//     if(this.grades.length){
//       let countAverageGrade = 0;
//       this.grades.map((grade)=> countAverageGrade += grade)
//       return `Середній бар ${this.name} - ${countAverageGrade / amountGrades}`
//     }

//     return 'Неможливо розрахувати середній бал! Немає оцінок'
//   }
// }

// const arsenStudent = new Student({name: 'Arsen', age: 15, grades: [5, 4, 5, 7, 8, 9]})

// console.log(arsenStudent.getAverageGrade())

//Task 7
// class BankAccount {
//   constructor({accountNumber, balance}){
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }
//   deposit(amount){
//       this.balance += amount
//       return `Ваш баланс успішно поповнено на суму ${amount}. Наразі Ваш баланс ${this.balance}`
//   }
//   withdraw(amount){
//     if(this.balance < amount){
//       return `Неможливо зняти кошти! Сума на рахунку менше ніж Ви хочете зняти!`
//     }
//     this.balance -= amount
//     return `Ви успішно зняли ${amount}. Сума вашого балансу ${this.balance}`
//   }
// }

// const depos = new BankAccount({accountNumber: 14324, balance: 4500})
// console.log(depos.deposit(1000));
// console.log(depos.withdraw(4000));
// console.log(depos.withdraw(1600));

//Task 8

// class Library {
//   constructor() {
//     this.library = [{title: 'Відьмак', author: "Andre Sapjovskiy", year: "2015"}];
//   }
//   getAllBook(){
//     return this.library;
//   }
//   addBook(obj){
//     const bookExists = this.library.find(book => book.title.toLowerCase() === obj.title.toLowerCase())
//     if(bookExists){
//       return 'Неможливо додати книгу! Така книга вже є в бібліотеці!'
//     } 
//     this.library.push(obj)
//   }
//   removeBook(title){
//     const idx = this.library.findIndex(({title: bookTitle, author, year}) => bookTitle.toLowerCase() === title.toLowerCase())
//     if(idx !== -1){
//       this.library.splice(idx,1); 
//     }
//     return 'Книгу не знайдено для видалення';
//   }
//   findBook(title, author){
//     const foundBook = this.library.find(({title: bookTitle, author: bookAuthor, year}) => title.toLowerCase() === bookTitle.toLowerCase() && bookAuthor.toLowerCase() === author.toLowerCase())
//     if(foundBook){
//       return foundBook
//     }
//     return 'Не знайдено таку книгу'
//   }
// }

// const theWitcherBook = new Library()
// theWitcherBook.addBook({title: 'Дубай', author: "Andre Sapjovskiy", year: "2015"})
// theWitcherBook.addBook({title: 'Бабай', author: "Andre Sapjovskiy", year: "2015"})
// console.log(theWitcherBook.getAllBook())
// theWitcherBook.removeBook('Відьмак')
// console.log(theWitcherBook.getAllBook())
// console.log(theWitcherBook.findBook('Бабай', 'Andre Sapjovskiy'))
//Task 9
// class Song {
//   constructor({name, performer, duration}) {
//     this.name = name,
//     this.performer = performer,
//     this.duration = duration
//   }
// }

// class Playlist {
//   constructor() {
//     this.playlist = []
//   }
//   addSongToPlaylist(songObj){
//     const checkSongInPlaylist = this.playlist.find(song => song.name.toLowerCase() === songObj.name.toLowerCase());
//     if(checkSongInPlaylist){
//       return `Пісня ${songObj.name} вже є у плейлисті` 
//     }
//     this.playlist.push(songObj)
//   }
//   play(){
//     return this.playlist.map(song => console.log(song));
//   }
//   randomSongInPlaylist(){
//     return this.playlist.sort(() => Math.random() - 0.5).map(song => console.table(song))
//   }
//   removeSong(name){
//     const idx = this.playlist.findIndex(song => name.toLowerCase() === song.name.toLowerCase())
//     if(idx !== -1){
//       this.playlist.splice(idx, 1)
//     } else{
//       return `Пісню ${name} не знайдено для видалення!`
//     }
//   }
//   findSong(name){
//     const foundSong = this.playlist.find(song => name.toLowerCase() === song.name.toLowerCase())
//     if(foundSong){
//       return foundSong
//     }
//     return `Пісню ${name} не знайдено.`
//   }                                                           
// }                 

// const meGusto = new Song({name: 'Дубай', performer: "Andre Sapjovskiy", duration: "3:53"});
// const lover = new Song({name: 'Lover', performer: "Bratko", duration: "3:42"});

// const myPlaylist = new Playlist();
// myPlaylist.addSongToPlaylist(meGusto);
// myPlaylist.addSongToPlaylist(lover);
// // myPlaylist.play()
// // console.log(myPlaylist.randomSongInPlaylist())
// // console.log(myPlaylist.removeSong('Дурак'))
// // console.log(myPlaylist.removeSong('Lover'))
// console.log(myPlaylist.findSong('Дубй'))