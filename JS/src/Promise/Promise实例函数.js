// // then函数

// function onResolved(id) {
//     setTimeout(console.log, 1000, id, "resolved");
// }

// function onRejected(error) {
//     setTimeout(console.log, 1000, error, "rejected");
// }

// let ps1 = new Promise((resolved, onRejected) => setTimeout(resolved, 2000));

// let ps2 = new Promise((onResolved, rejected) => setTimeout(rejected, 2000));



// ps1.then(() => onResolved("ps1"), undefined);
// ps2.then(undefined, () => onRejected("ps2"));



// // then 函数每一次返回的Promise实例都不是同一个
// const ps3 = new Promise(() => { });
// const ps4 = ps3.then();

// console.log(ps3);
// console.log(ps4);
// console.log(ps3 === ps4);

// // then函数包装的值
// const ps5 = Promise.resolve("hello");
// const ps6 = ps5.then();
// // 不等，then函数每次返回都是一个新的Promise
// setTimeout(() => {
//     console.log(ps6 === ps5);
// }, 0)

// setTimeout(() => {
//     console.log(ps6, "@")
// }, 0); 


// // 如果你不返回值，那么会默认包装undefined
// const ps7 = new Promise(()=> {} );
// const ps8 = ps7.then(() => {},() => {})

// setTimeout(() => {
//     console.log(ps8,"$");
// }, 0);


// // 抛出异常会返回拒绝的Promise
// const ps10 = Promise.resolve("foo");
// const ps11 = ps10.then(() => {
//     throw Error("eror");
// })

// setTimeout(() => {
//     console.log(ps11);
// }, 0);



// const ps12 = Promise.reject("foo");

// ps12.then(() => {
//     console.log("hello1");
// }).then(() => {
//     console.log("hello2");
// }).then(() => {
//     console.log("hello3");
// }).catch(() => {
//     console.log("error4");
// }).then(()=>{
//     console.log("hello5");
// })


// const p13 = new Promise((resolve,reject)=> {
//     resolve("hello");
// })


// const p14 = p13.finally(()=> {
//     return new Promise((resolve,reject) => {
//         console.log("finally");
//         resolve();
//     })
// })


// async function getResult(){
//     const a = await p14;
//     console.log(p14);
//     return a;
// }

// // const re = getResult();
// async function handleResult(){
//     console.log( await getResult());
// }

// handleResult()



// const p15 = new Promise((resolve,reject) => resolve("hello"))
// p15.then(console.log)
// console.log("world");




// let p1 = Promise.resolve();
// let p2 = Promise.reject();
// p1.then(() => setTimeout(console.log, 0, 1));
// p1.then(() => setTimeout(console.log, 0, 2));
// // 1
// // 2
// p2.then(null, () => setTimeout(console.log, 0, 3));
// p2.then(null, () => setTimeout(console.log, 0, 4));
// // 3
// // 4
// p2.catch(() => setTimeout(console.log, 0, 5));
// p2.catch(() => setTimeout(console.log, 0, 6));
// // 5
// // 6
// p1.finally(() => setTimeout(console.log, 0, 7));
// p1.finally(() => setTimeout(console.log, 0, 8));
// // 7
// // 8


const ps13 = Promise.resolve("hello");
ps13.then(value => console.log(value));

const ps14 = Promise.reject("err");

ps14.then(undefined,error => console.log(error));



new Promise((onResolve,onReJect) => {
    onReJect("error");
}).catch(e => {
    console.log(`catch error ${e}`);
    return Promise.resolve("hello")
}).then((value) => {
    console.log("error finished "+value);
})