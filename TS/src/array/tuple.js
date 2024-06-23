var tuple;
(function (tuple) {
    var s = ['a', 'b', 1];
    var a = ["1"];
    var b = ["123", true, false, true, 1];
    var c = [1, 2, 3, 4, 5, 6, "12", [true, false], Symbol("foo")];
    var d = [255, 255, 255];
    var e = typeof d;
    var f = e[0];
    // 只读元组
    var g;
    var h;
    var i;
    var j;
    j = i;
    function distanceFromOrigin(_a) {
        var x = _a[0], y = _a[1];
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }
    var k = [1, 2];
    var o = [1, 2];
    distanceFromOrigin(k);
    var arr = [1, 2];
    var arr2 = [1, 2];
    var arr3 = [1, 2];
    function add(x, y) {
        return x + y;
    }
    add.apply(void 0, arr);
    // 报错
    // add(...arr2);
    var sum = add.apply(void 0, arr3);
    console.log(sum);
})(tuple || (tuple = {}));
