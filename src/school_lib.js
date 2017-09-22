// РАЗОБРАТЬСЯ, КАК ЭТО ДЕЛАТЬ?!
// Create class called Catalog that holds all of the Media items in our library.


class Media {
   constructor(title) {
       this._title = title;
       this._isCheckedOut = false;
       this._ratings = [];
   }
   get title() { return this._title; }
   get isCheckedOut() { return this._isCheckedOut; }
   get ratings() { return this._ratings; }
   getAverageRating(){
     let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
     return ratingsSum/this._ratings.length;
   }
   toggleCheckOutStatus() {
      this._isCheckedOut = this._isCheckedOut ? false : true;
      return this._isCheckedOut;
   }
   addRating(rating) {
     if (rating > 0 && rating < 6) {
       this._ratings.push(rating);
     } else {
       console.log('Rating can be only from 1 to 5');
     }
   }
   printAvgRating() {
     if (this.getAverageRating()) {
     console.log(`Average rating for "${this._title}" is ${this.getAverageRating()}\n`);
     } else {
       console.log(`Not enough ratings for "${this._title}".\n`);
     }
   }
}

class Book extends Media {
  constructor(author, title, pages) {
    super (title);
    this._author = author;
    this._pages = pages;
  }
  get author() { return this._author; }
  get pages() { return this._pages; }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super (title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() { return this._director; }
  get runTime() { return this._runTime; }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super (title);
    this._artist = artist;
    this._songs = songs;
  }
  get director() { return this._director; }
  get runTime() { return this._runTime; }
}

// testing
let newMedia = new Media ('Hello');
let newBook = new Book ('Fillip', 'Hello Worlds', '5');
let newMovie = new Movie ('Tarkovsky', 'Titanic', '360');
let newCD = new CD ('Splean', 'Granatovy', ['bread', 'solt', 'orbit']);

console.log(newBook);
newBook.toggleCheckOutStatus();
newBook.addRating(10);
newBook.addRating(4);
newBook.addRating(4);
console.log(`Book ${newBook.author} ${newBook.title} ${newBook.pages} ${newBook.isCheckedOut} ${newBook.ratings}`);
newBook.printAvgRating();

console.log(newMovie);
newMovie.toggleCheckOutStatus();
console.log(`Movie ${newMovie.director} ${newMovie.title} ${newMovie.runTime} ${newMovie.isCheckedOut} ${newMovie.ratings}`);
newMovie.printAvgRating();

console.log(newCD);
newCD.toggleCheckOutStatus();
console.log(`CD ${newCD.artist} ${newCD.title} ${newCD.songs} ${newCD.isCheckedOut} ${newCD.ratings}`);
newCD.printAvgRating();
