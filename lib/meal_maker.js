'use strict';

var menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  set setAppertizers(newAppertizers) {},
  get appetizers() {},
  set setMains(newMains) {},
  get mains() {},
  set setDesserts(newDesserts) {},
  get desserts() {},

  get courses() {
    return { appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    };
  },

  addDishToCourse: function addDishToCourse(courseName, dishName, dishPrice) {
    var dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function getRandomDishFromCourse(courseName) {
    var dishes = this._courses[courseName];
    var dishIndex = Math.floor(Math.random() * dishes.length);
    console.log(dishIndex);
    return this._courses[courseName][dishIndex];
  },
  generateRandomMeal: function generateRandomMeal() {
    var appetizer = this.getRandomDishFromCourse('appetizers');
    var main = this.getRandomDishFromCourse('mains');
    var dessert = this.getRandomDishFromCourse('desserts');
    var totalPrice = appetizer.price + main.price + dessert.price;
    return appetizer.name + ', ' + main.name + ', ' + dessert.name + ' total ' + totalPrice + ' USD';
  }
};

menu.addDishToCourse('appetizers', 'salatik', 12);
menu.addDishToCourse('mains', 'borch', 7.25);
menu.addDishToCourse('desserts', 'kompot', 22);
menu.addDishToCourse('appetizers', 'supchik', 2);
menu.addDishToCourse('mains', 'shi', 9);
menu.addDishToCourse('desserts', 'chai', 1.32);
menu.addDishToCourse('appetizers', 'khleb', 1.2);
menu.addDishToCourse('mains', 'okroshechka', 1.27);
menu.addDishToCourse('desserts', 'russiano', 3.2);

console.log(menu.courses);

console.log(menu.generateRandomMeal());