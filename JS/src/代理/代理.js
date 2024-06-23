// 代理是使用 Proxy 构造函数创建的。
// 这个构造函数接收两个参数:目标对象和处理程序对象。
// 缺少其中任何一个参数都会抛出 TypeError。要创建空代理，可以传一个简单的对象字面量作为处理程
// 注意 在ES6之前，ECMAScript中并没有类似代理的特性。由于代理是一种新的基础性 很多转译程序都不能把代理行为转换为之前的 ECMAScript 代码，因为代理的 行为实际上是无可替代的。为此，代理和反射只在百分之百支持它们的平台上有用。可以 检测代理是否存在，不存在则提供后备代码。不过这会导致代码冗余，因此并不推荐。
// 注意 ECMAScript 代理与 C++指针有重大区别，后面会再讨论。不过作为一种有助于理解的类比，指针在概念上还是比较合适的结构。


// 目标对象
let target = {
    id:"target"
}

// 处理对象
let handler = {};

// 创建空代理
const proxy = new Proxy(target,handler);

console.log(target.id);
console.log(proxy.id);

target.id = "hello";

console.log(proxy.id);
console.log(target.id);

proxy.id = "hi";
console.log(target.id);
console.log(proxy.id);

console.log();