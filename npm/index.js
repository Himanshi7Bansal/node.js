// package sillyname (It will generate silly names)
var generateName = require('sillyname');    // import package
console.log(`My name is ${generateName()}`);    // print

// package superHeroes (It will generate superHeroes name)
const superheroes = require('superheroes'); // import package
console.log(`My favourite SuperHero is ${superheroes.random()}`); // print

// package uppercase (It will return text in Uppercase)
var to = require('to-case');
console.log(to.upper("Hello World !!!"));

// to run this file
// run => npm i sillyname superheroes to-case 