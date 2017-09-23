'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// РАЗОБРАТЬСЯ, КАК ЭТО ДЕЛАТЬ?!
// Create class called Catalog that holds all of the Media items in our library.


var Media = function () {
  function Media(title) {
    _classCallCheck(this, Media);

    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  _createClass(Media, [{
    key: 'getAverageRating',
    value: function getAverageRating() {
      var ratingsSum = this.ratings.reduce(function (currentSum, rating) {
        return currentSum + rating;
      }, 0);
      return ratingsSum / this._ratings.length;
    }
  }, {
    key: 'toggleCheckOutStatus',
    value: function toggleCheckOutStatus() {
      this._isCheckedOut = this._isCheckedOut ? false : true;
      return this._isCheckedOut;
    }
  }, {
    key: 'addRating',
    value: function addRating(rating) {
      if (rating > 0 && rating < 6) {
        this._ratings.push(rating);
      } else {
        console.log('Rating can be only from 1 to 5');
      }
    }
  }, {
    key: 'printAvgRating',
    value: function printAvgRating() {
      if (this.getAverageRating()) {
        console.log('Average rating for "' + this._title + '" is ' + this.getAverageRating() + '\n');
      } else {
        console.log('Not enough ratings for "' + this._title + '".\n');
      }
    }
  }, {
    key: 'title',
    get: function get() {
      return this._title;
    }
  }, {
    key: 'isCheckedOut',
    get: function get() {
      return this._isCheckedOut;
    }
  }, {
    key: 'ratings',
    get: function get() {
      return this._ratings;
    }
  }]);

  return Media;
}();

var Book = function (_Media) {
  _inherits(Book, _Media);

  function Book(author, title, pages) {
    _classCallCheck(this, Book);

    var _this = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, title));

    _this._author = author;
    _this._pages = pages;
    return _this;
  }

  _createClass(Book, [{
    key: 'author',
    get: function get() {
      return this._author;
    }
  }, {
    key: 'pages',
    get: function get() {
      return this._pages;
    }
  }]);

  return Book;
}(Media);

var Movie = function (_Media2) {
  _inherits(Movie, _Media2);

  function Movie(director, title, runTime) {
    _classCallCheck(this, Movie);

    var _this2 = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this, title));

    _this2._director = director;
    _this2._runTime = runTime;
    return _this2;
  }

  _createClass(Movie, [{
    key: 'director',
    get: function get() {
      return this._director;
    }
  }, {
    key: 'runTime',
    get: function get() {
      return this._runTime;
    }
  }]);

  return Movie;
}(Media);

var CD = function (_Media3) {
  _inherits(CD, _Media3);

  function CD(artist, title, songs) {
    _classCallCheck(this, CD);

    var _this3 = _possibleConstructorReturn(this, (CD.__proto__ || Object.getPrototypeOf(CD)).call(this, title));

    _this3._artist = artist;
    _this3._songs = songs;
    return _this3;
  }

  _createClass(CD, [{
    key: 'director',
    get: function get() {
      return this._director;
    }
  }, {
    key: 'runTime',
    get: function get() {
      return this._runTime;
    }
  }]);

  return CD;
}(Media);

// testing


var newMedia = new Media('Hello');
var newBook = new Book('Fillip', 'Hello Worlds', '5');
var newMovie = new Movie('Tarkovsky', 'Titanic', '360');
var newCD = new CD('Splean', 'Granatovy', ['bread', 'solt', 'orbit']);

console.log(newBook);
newBook.toggleCheckOutStatus();
newBook.addRating(10);
newBook.addRating(4);
newBook.addRating(4);
console.log('Book ' + newBook.author + ' ' + newBook.title + ' ' + newBook.pages + ' ' + newBook.isCheckedOut + ' ' + newBook.ratings);
newBook.printAvgRating();

console.log(newMovie);
newMovie.toggleCheckOutStatus();
console.log('Movie ' + newMovie.director + ' ' + newMovie.title + ' ' + newMovie.runTime + ' ' + newMovie.isCheckedOut + ' ' + newMovie.ratings);
newMovie.printAvgRating();

console.log(newCD);
newCD.toggleCheckOutStatus();
console.log('CD ' + newCD.artist + ' ' + newCD.title + ' ' + newCD.songs + ' ' + newCD.isCheckedOut + ' ' + newCD.ratings);
newCD.printAvgRating();