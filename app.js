// const calculateSum = require('./calculate/calculateSum.js');
// const calculateMultiply = require('./calculate/calculateMultiply.js');
const {calculateSum,calculateMultiply} = require('./calculate')
const xyz = require(xyz.js);
const data = require('./data.json');
// import {calculateSum,calculateMultiply} from './calculate/index.js'
// console.log("Value of x is ",x)
var a=10
var b=20

console.log(JSON.parse(JSON.stringify(data)))

console.log(calculateSum(a, b));
console.log(calculateMultiply(a,b))