console.log("Start");
setTimeout(() => {
    console.log("Timer A");
}, 0);
setTimeout(() => {
    console.log("Timer B");
}, 0);
setImmediate(() => {
    console.log("Immediate");
});
console.log("End");