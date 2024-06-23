"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pino_1 = require("pino");
// 创建一个 pino 日志记录器实例
var logger = (0, pino_1.default)({
    level: 'info',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname'
        }
    }
});
function romanToInteger(s) {
    var map = new Map();
    map.set("I", 1);
    map.set("V", 5);
    map.set("X", 10);
    map.set("L", 50);
    map.set("C", 100);
    map.set("D", 500);
    map.set("M", 1000);
    var sum = 0;
    // 循环判断字符串，如果前面的大于后面的就减去前面的
    for (var i = 0; i < s.length; i++) {
        if (i < s.length - 1 && (map.get(s.charAt(i))) < (map.get(s.charAt(i + 1)))) {
            sum -= (map.get(s.charAt(i)));
        }
        else {
            sum += (map.get(s.charAt(i)));
        }
    }
    return sum;
}
console.log(romanToInteger("IX"));
console.log(romanToInteger("MXDDX"));
// 是用归并函数
function romanToInteger2(s) {
    var map = new Map();
    map.set("I", 1);
    map.set("V", 5);
    map.set("X", 10);
    map.set("L", 50);
    map.set("C", 100);
    map.set("D", 500);
    map.set("M", 1000);
    var sum = 0;
    var numbers = s.split("").map(function (value) { return map.get(value); });
    sum = numbers.reduce(function (previousValue, currentValue, currentIndex, array) {
        if (currentValue < array[currentIndex + 1])
            currentValue = -currentValue;
        return previousValue + currentValue;
    }, 0);
    return sum;
}
logger.info(romanToInteger2("MDDXD"));
logger.info(romanToInteger2("MXDDX"));
