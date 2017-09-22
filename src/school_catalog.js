// How to: Create a class called SchoolCatalog that holds a collection of
// schools. Create an instance of SchoolCatalog for primary, middle, and high schools.

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {return this._name;}
  get level() {return this._level;}
  get numberOfStudents() {return this._numberOfStudents;}
  set numberOfStudents(newNumberOfStudents) {
    //if (newNumberOfStudents.typeOf === 'Number') {
        this._numberOfStudents = newNumberOfStudents;
    //} else {
    //    console.log(`Change ${newNumberOfStudents} to a number from ${newNumberOfStudents.typeOf}.`);
    //}
  }
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students, typically between the ages of ${this._level}.`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    substituteTeachersIndex = Math.floor(Math.random()*(substituteTeachers.length-1));
    return substituteTeachers[substituteTeachersIndex];
  }
};

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {return this._pickupPolicy}
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    console.log(this._sportsTeams.join(', '));
  }
}


let newSchool = new School('Rosha', 'low', 44);
console.log(newSchool);
newSchool.numberOfStudents = 33;
console.log(newSchool);
let newPickSubstituteTeacher = newSchool.pickSubstituteTeacher = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
console.log(newPickSubstituteTeacher);

let lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
let alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;
