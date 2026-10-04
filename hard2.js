console.log("Start");
process.nextTick(() => {
    console.log("Next Tick A");
    process.nextTick(() => {
        console.log("Next Tick B");
    });
    Promise.resolve().then(() => {
        console.log("Promise A");
    });
});
Promise.resolve().then(() => {
    console.log("Promise B");
    process.nextTick(() => {
        console.log("Next Tick C");
    });
    Promise.resolve().then(() => {
        console.log("Promise C");
    });
});
setTimeout(() => {
    console.log("Timer A");
    process.nextTick(() => {
        console.log("Next Tick D");
    });
    Promise.resolve().then(() => {
        console.log("Promise D");
    });
}, 0);
setTimeout(() => {
    console.log("Timer B");
}, 0);
setImmediate(() => {
    console.log("Immediate");
});