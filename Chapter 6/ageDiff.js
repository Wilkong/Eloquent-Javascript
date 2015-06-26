var ANCESTRY_FILE = require('./ancestry.js');

var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var diff = ancestry
    .filter(function(person){
        if ( byName[person.mother] !== null && byName[person.mother] !== undefined)
            return person;
    })
    .map(function(person){
            return person.born - byName[person.mother].born;
    });

console.log(average(diff));
