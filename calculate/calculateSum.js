console.log("Calculate sum file executed")

// this is a default behavior of javascript that inside a 
// module any variable and functions are not leak outside or not 
// accessible outside of the module.
var x="123"
function calculateSum(a, b) {
    return a + b;
}
// console.log("--->",module.exports)
module.exports=calculateSum
// export default calculateSum;
// console.log("--->",module.exports)
// this module.export is a default command of node js for 
// exporting any variable or function to outside of the module.  