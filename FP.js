//Messing with FP
var sector = [
    {"name" : "Дмитрий", "work" : "ABAP", "age" : "26", "salary" : "25000"},
    {"name" : "Александр", "work" : "ABAP", "age" : "27", "salary" : "28000"},
    {"name" : "Макс", "work" : "SM", "age" : "28", "salary" : "40000"},
    {"name" : "Сергей", "work" : "SM", "age" : "29", "salary" : "30000"}
    ];
var saratov = {
    age: 27,
    salary: 30000,
    city: "Саратов"
};
var moscow = {
    age: 28,
    salary: 40000,
    city: "Москва"
};
var context = moscow;
sector.filter(function(element){
    return element.age <= this.age && element.salary <= this.salary;
},context).forEach(function(el){
    console.log("Готов для переезда в " + this.city + ": " + el.name);
},context);


sector.filter(function(person){
    return person.work === 'SM';
}).map(function(person) {
    return { 'имя' : person.name };
});

var byName = {};
sector.forEach(function(person) {
  byName[person.name] = person;
});
console.log(byName["Дмитрий"]);