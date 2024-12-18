class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
       return this.state = this.state * 1.5;
    }
    set state(stateNew){
        if (stateNew < 0) {
           this._state = 0;
        } else if (stateNew > 100) {
           this._state = 100
        } else {
            this._state = stateNew;
        }
    }
    get state(){
        return this._state
    }
}

   class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
   }

   class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
   }

   class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
   }

   class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
   }

   class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
   }

   class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30) {
            return this.books.push(book)
        }
    }
    findBookBy(type, value){
        return this.books.find(book => book[type] === value) !== undefined ? this.books.find(book => book[type] === value) : null
    }

    giveBookByName(bookName){
        const index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            const book = this.books[index];
            this.books.splice(index, 1);
            return book;
        } else {
            return null;
        }
    }
}


class Student{
    constructor(name){
    this.name = name;
    this.marks = {};
    }
        
    addMark(mark, subject){
        if (mark < 2 || mark > 5) {
            return
        } else if ([subject] in this.marks === false) {
            this.marks[subject] = []};
            this.marks[subject].push(mark);
        }

    getAverageBySubject(subject){
        if ([subject] in this.marks === false) {
            return 0
        }
        return (this.marks[subject].reduce(
            function (acc, number) {return acc + number}, 0) 
            / this.marks[subject].length)
    }

    getAverage(){
        let subjects = Object.keys(this.marks);
        if (subjects.length === 0 ) {
            return 0
        }
        let averageMark = 0;
        let averageMarks = [];
        for (let i = 0; i < subjects.length; i++) {
            averageMark = this.getAverageBySubject(subjects[i]);
            averageMarks.push(averageMark);
        }

        return  averageMarks.reduce(function (currentSum, currentNumber) {
        return currentSum + currentNumber
      }, 0) / subjects.length
    }
}












