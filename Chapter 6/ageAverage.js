
var ANCESTRY_FILE = require('./ancestry.js');

var ancestry = JSON.parse(ANCESTRY_FILE);

var groups = {};

ancestry.map(function(person) {
  var century = Math.ceil(person.died / 100);
  var age = person.died - person.born;
  if (!groups.hasOwnProperty(century)) {
    groups[century] = [];
  }

  groups[century].push(age);
});

function average(ages) {
  function add(a, b) { return a + b; }

  return ages.reduce(add) / ages.length;
}

for (var group in groups) {
  console.log('Средний возраст ' + group + ' века: '
  + average(groups[group]));
}
