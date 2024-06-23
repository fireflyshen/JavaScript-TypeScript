// Encoding API 主要用于实现字符串与定型数组之间的转换。

var textEncoder = new TextEncoder();

console.log(textEncoder.encoding)
var uint8Array = textEncoder.encode("abc");
uint8Array.forEach(e => console.log(e));
var textDecoder = new TextDecoder();
var s = textDecoder.decode(uint8Array);
console.log(s)