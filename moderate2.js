console.log("Start");
process.nextTick(() => {
    console.log("Next Tick A");
    Promise.resolve().then(() => {
        console.log("Promise A");
    });
});
Promise.resolve().then(() => {
    console.log("Promise B");
    process.nextTick(() => {
        console.log("Next Tick B");
    });
});
setTimeout(() => {
    console.log("Timer");
}, 0);
setImmediate(() => {
    console.log("Immediate");
});