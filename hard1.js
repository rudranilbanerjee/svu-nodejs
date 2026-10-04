console.log("Start");
setTimeout(() => {
    console.log("Timer A");
    process.nextTick(() => {
        console.log("Next Tick A");
        Promise.resolve().then(() => {
            console.log("Promise A");
        });
    });
    Promise.resolve().then(() => {
        console.log("Promise B");
    });
}, 0);
setTimeout(() => {
    console.log("Timer B");
    process.nextTick(() => {
        console.log("Next Tick B");
    });
}, 0);
setImmediate(() => {
    console.log("Immediate");
});
process.nextTick(() => {
    console.log("Initial Next Tick");
});

