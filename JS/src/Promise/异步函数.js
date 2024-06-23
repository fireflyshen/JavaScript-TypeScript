// async function foo() {
//     return 3;
// }

// foo().then(console.log);


// async function foo2(){
//     console.log(Promise.resolve(3));
// }

// foo2();

// async function foo3(){
//     await Promise.reject("error")
//     console.log("hello");
// }

// const err = foo3();
// setTimeout(console.log,0,err);


// async function delay(mill) {
//     await new Promise ((resolve,reject) => setTimeout(resolve,mill));
// }

// async function foo4(){
//     console.log(Date.now());
//     await delay(1500)
//     console.log(Date.now());
// }

// foo4();


// 异步任务执行顺序


// async function foo(){
//     console.log("2");

//     console.log(await new Promise((resolve,reject) => resolve("8")));

//     console.log("9")
// }


// async function bar(){
//     console.log("4");
//     console.log(await "6");
//     console.log("7");
// }



// console.log("1");

// foo();
// console.log("3");
// bar();
// console.log("5");


// async function randomDelay(id) {
//     const delay = Math.random() * 1000;
//     return new Promise((resolve) => setTimeout(() => {
//         setTimeout(console.log, 0, `${id} finished`);
//         resolve(id);
//     }, delay));
// }

// async function foo() {
//     const t0 = Date.now();

//     const p0 = randomDelay(0);
//     const p1 = randomDelay(1);
//     const p2 = randomDelay(2);  
//     const p3 = randomDelay(3);
//     const p4 = randomDelay(4);
//     const newp1 =  await p0;
//     const newp2 =  await p1;
//     const newp3 =  await p2;
//     const newp4 =  await p3;
//     const newp5 =  await p4;

//     console.log(newp1);
//     console.log(newp2);
//     console.log(newp3);
//     console.log(newp4);
//     console.log(newp5);
//     setTimeout(console.log, 0, `${Date.now() - t0}ms elapsed`);
//   }
//   foo();



// async function foo(){
//     Promise.reject("errr")
// }


// foo().catch(console.log)


let p = new Promise((resolve,reject) => {setTimeout(resolve,1000,"hello")});

p.then(console.log);



let ps1 = Promise.resolve("1");

let arr = ["bar"];

async function foo(){
    console.log(await ps1);
}

async function foo2() {
    console.log(await arr);
}

foo();
foo2()