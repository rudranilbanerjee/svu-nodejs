console.log("Start");
process.nextTick(() => {
    console.log("Next Tick");
});
Promise.resolve().then(() => {
    console.log("Promise");
});
setTimeout(() => {
    console.log("Timer");
}, 0);
console.log("End");

/**
 * Start
 * End
 * Next Tick
 * Promise
 * Timer
 */
