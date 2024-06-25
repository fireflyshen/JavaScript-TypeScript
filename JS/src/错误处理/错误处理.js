// try-catch语句
// 没啥说的，跟Java一样
try {
  console.log("hiiiiiiiiiiiiii");
  debugger;
  console.log("可能出现错误的代码");

  // 抛出错误
  throw new Exception("hello")

  // 剩下的都是介绍一些错误类型，也记不住，先放着吧
} catch (e) {}

// 补充console.log
console.log = function () {
  // 'arguments'并没有 join 方法，这里先把它转换为数组 
  const args = Array.prototype.slice.call(arguments); 
  console.log(args.join(', '));
};


console.log("aaa")
console.log("bbb");