const p1 = new Promise((resolve, reject) => {
    resolve();
});

p1.then(() => {
    return "hello";
}).then((params) => {
    console.log(params);
    return params + " world";
}).then((params) => {
    console.log(params);
})


const p2 = Promise.resolve("zero");

p2.then((e) => new Promise((resolve, reject) => {
    console.log(e);
    setTimeout(resolve, 1000, "one");
})).then((e) => new Promise((resolve, reject) => {
    console.log(e);
    setTimeout(resolve, 1000, "two");
})
).then((e) => new Promise((resolve, reject) => {
    console.log(e);
    setTimeout(resolve, 1000, "three");
}).then((e) => new Promise((resolve, reject) => {
    console.log(e);

})

)
)


function relayResolve(str) {
    return new Promise((resolve,reject) => {
        console.log(str);
        setTimeout(resolve, 1000,str);
    });
}


p2.then(() =>  relayResolve("one")).then(() =>  relayResolve("two")).then(() =>  relayResolve("three"))




const ps1 = Promise.all([Promise.resolve("hello"),Promise.resolve("world!")]);

setTimeout(() => {
    console.log(ps1);
}, 0);


const ps3 = Promise.all([Promise.resolve("hello"), Promise.reject("world")]);

setTimeout(() => {
    console.log(ps3);
}, 0);

const ps4 = Promise.all([Promise.resolve("hello"), new Promise((resolve, reject) => setTimeout(resolve, 1000, "world"))])


console.log(ps4);

setTimeout(() => {
    console.log(ps4);
}, 2000);