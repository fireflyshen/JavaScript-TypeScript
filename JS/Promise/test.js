let s = "hello-hi";
const a2 = s.split("-");
const s2 = a2.join("*")
const a = Array.from(s);
console.log(typeof s2);

const obj = {
    * [Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}

const a3 = Array.from(obj);
console.log(a3);

const a4 = Array.of(1,2,3,4,5,6,7);
const a5 = Array.from(a4);

const a6 = a5.map(item =>  item**2)
console.log(a6);

const obj2 = {
    aobj : 1,
    bobj : 2
}


let { aobj , bobj } = obj2;

console.log(aobj,bobj);

console.log(Array.from(new Map().set(1,2).set(3,4)));



const arr3 = [3,4,2,1,4,5,2,6];

arr3.sort();
console.log(arr3);


const arr4 = [2,3,1,4,2,4,6,7,9];

arr4.sort((v1,v2) => {
  return v1-v2; 
})


console.log(arr4);


const arr5 = [2,3,1,4,2,4,6,7,9];

const colors = ["red","blue","green"];

const newColors = colors.concat("yellow",["black","brown"])

console.log(newColors);

const newColors2 = ["black","brown"];

newColors2[Symbol.isConcatSpreadable] = false;

let colors3 = colors.concat(newColors2);
console.log(colors3);


let obj3 = {
    [Symbol.isConcatSpreadable]: true,
    0: "pink",
    1: "darkred",
    length: 2
}

const newColor4 = colors.concat(obj3)
console.log(newColor4);


let colors5 = ["red", "green", "blue", "yellow", "purple"];


console.log(colors5.slice(1,4));

console.log(colors5.slice(1));


// 是用slice实现删除
// colors5.splice(1,1)
// console.log(colors5);


// colors5.splice(2,0,"pink","white");
// console.log(colors5);


colors5.splice(1,1,"darkblue");

console.log(colors5);



let nums = [1,2,3,4,5,6,7,8];
const isZero = nums.every(item => item > 0);
console.log(isZero); // true
const isOne = nums.every(item => item > 1);
console.log(isOne); // false


const isSomeZero = nums.some(item => item < 0)
console.log(isSomeZero); // false
const isSomeOne = nums.some(item => item > 1);
console.log(isSomeOne);

const filterItem = nums.filter(item => item > 3);
console.log(filterItem);


const maps = nums.map(e => e**2);
console.log(maps); // [1, 4, 9, 16, 25, 36, 49, 64]

const f = nums.forEach(e => console.log(e));
console.log(f);

const sum = nums.reduce((prev,cur) =>  prev + cur);
console.log(sum);