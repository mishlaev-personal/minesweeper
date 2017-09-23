"use strict";

var team = {
  _players: [{ firstName: "Pablo", lastName: "Sanchez", age: 11 }, { firstName: "Vit", lastName: "Mi", age: 21 }, { firstName: "Sasa", lastName: "Popo", age: 42 }],
  _games: [{ opponent: "Broncos", teamPoints: 42, opponentPoints: 27 }, { opponent: "Loko", teamPoints: 24, opponentPoints: 26 }, { opponent: "Spartak", teamPoints: 72, opponentPoints: 11 }],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer: function addPlayer(firstName, lastName, age) {
    var player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame: function addGame(opponent, teamPoints, opponentPoints) {
    var game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Dodgers', 33, 24);

console.log(team.players);
console.log(team.games);