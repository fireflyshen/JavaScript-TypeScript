// 五种原始类型
let x3: number = 123;

let x4: boolean = true;

let x5: string = "hello";

// let x6: bigint = 1n;

let x7: symbol = Symbol.for("foo");

// 前三种有包装类型

let x8: Number = new Number(123);

let x9: Boolean = new Boolean(true);

let x10: String = new String("123");

// 后两种可以使用obhect进行包装
let x11: symbol = Object(x7);

// let x12: bigint = Object(x6);

// 字面量和包装对象
// let x13 : number = new Number(123);

// Object object

let x13: object = { foo: "foo" };
let x17: object = [12, 3, 4];
let x21: object = () => console.log("hello");

// let x18 : object = "123";
// let x19 : object = Symbol.for("123");
// let x20 : object = BigInt(123);
// let x15 : object = 123;
// let x16 : object = true;

let x14: Object = { foo: "foo" };

let x22: null = null;
let x23: undefined = undefined;

// null 类型可以赋值给任意类型的值,只能赋值字面量
let x24: number = 123;
// 错误
// x24 = x23;
// x24 = null;
let x25: string = "123";
// x25 = x22;

// 值类型
let x26: "hello";
//x26 = "world";
x26 = "hello";

// 如果使用const定义变量，不指定类型默认就是值类型
// 这样推断是合理的，因为const命令声明的变量，一旦声明就不能改变，相当于常量。值类型就意味着不能赋为其他值
const x27 = "hello";

// 如果const声明的是对象类型则不会成为值类型
// const变量赋值为对象时，属性值是可以改变的
const x28 = { foo: "foo" };

// 一些奇怪的报错
//const x29: 5 = 4 + 1;
/**
 *上面示例中，等号左侧的类型是数值5，等号右侧4 + 1的类型，TypeScript 推测为number。由于5是number的子类型，number是5的父类型，父类型不能赋值给子类型，所以报错了
 * */

// 联合类型
// 联合类型A|B表示，任何一个类型只要属于A或B，就属于联合类型A|B。
let x29: string | number;
x29 = 123;
x29 = "123";

//联合类型可以与值类型相结合，表示一个变量的值有若干种可能。

let x30: true | false;
let x31: "red" | "orange" | "yellow" | "green" | "qing" | "blue" | "purple";
let x32: "male" | "female";

//打开编译选项strictNullChecks后，其他类型的变量不能赋值为undefined或null。这时，如果某个变量确实可能包含空值，就可以采用联合类型的写法。

let x33: null | undefined;

// 联合类型的第一个成员前面，也可以加上竖杠|，这样便于多行书写。

let x34: "one" | "two" | "three" | "four" | "five" | "six" | "seven";

// 如果一个变量有多种类型，读取该变量时，往往需要进行“类型缩小”（type narrowing），区分该值到底属于哪一种类型，然后再进一步处理。

function printid(id: string | number) {
  // 如果这里调用函数的话可能会出现错误，因为这里类型不确定
  // console.log(id);
}

function printid2(id: string | number) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id.toString();
  }
}

// 交叉类型（intersection types）指的多个类型组成的一个新类型，使用符号&表示。
// 交叉类型A&B表示，任何一个类型必须同时属于A和B，才属于交叉类型A&B，即交叉类型同时满足A和B的特征。
let x35: string & number;
//上面示例中，变量x35同时是数值和字符串，这当然是不可能的，所以 TypeScript 会认为x35的类型实际是never。
// 交叉类型的主要用途是表示对象的合成。

let x36: { foo: "foo" } & { bar: "bar" };

x36 = {
  foo: "foo",
  bar: "bar",
};

// type命令用来定义一个类型的别名。


type age = number;

let x37: age = 12;

// 别名不允许重名。
// type age = string;

// 别名的作用域是块级作用域。这意味着，代码块内部定义的别名，影响不到外部。
if (true) {
  type name = string;
}

// let x38 : name = "name";

// 别名支持使用表达式，也可以在定义一个别名时，使用另一个别名，即别名允许嵌套
type person = `hello${age}`;

// TypeScript 将typeof运算符移植到了类型运算，它的操作数依然是一个值，但是返回的不是字符串，而是该值的 TypeScript 类型。
let a7 = "hello";
type s = typeof a;
const a1 = { foo: "foo" };
type s1 = typeof a1;

// TypeScript 的类型存在兼容关系，某些类型可以兼容其他类型。
type T = string | number;
let a2: number = 1;
let b7: T = a7;

let a3: "hello" = "hello";
let b2: string = "hi";

// a3 = b2;

b2 = a3;
