let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  set setAppertizers(newAppertizers){},
  get appetizers(){},
  set setMains(newMains){},
  get mains(){},
  set setDesserts(newDesserts){},
  get desserts(){},

  get courses(){
    return {appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
           }
  },

  addDishToCourse(courseName, dishName, dishPrice) {
  	const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
	},

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const dishIndex = Math.floor(Math.random()*dishes.length);
    console.log(dishIndex);
    return this._courses[courseName][dishIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `${appetizer.name}, ${main.name}, ${dessert.name} total ${totalPrice} USD`
  },

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
