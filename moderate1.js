console.log("Start");
setTimeout(() => {
    console.log("Timer A");
    process.nextTick(() => {
        console.log("Next Tick");
    });
    Promise.resolve().then(() => {
        console.log("Promise");
    });
}, 0);//0
setTimeout(() => {
    console.log("Timer B");
}, 0);//0
setImmediate(() => {
    console.log("Immediate");
});

/**
 * Start
 * Timer A
 * Next Tick
 * Promise
 * Timer B
 * Immediate
 */


