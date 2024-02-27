/*
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase.
*/
var personNAme = "shehryaar";
//lowercase
console.log(personNAme.toLowerCase());
//uppercase
console.log(personNAme.toUpperCase());
//titlecase
var firstletter = personNAme.charAt(0).toUpperCase();
var restletters = personNAme.slice(1).toLowerCase();
var titleCase = firstletter + restletters;
console.log(titleCase);
