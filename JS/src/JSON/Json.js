// JSON序列化
document.getElementById("btn").addEventListener("click",e => {
    

    // 序列化JSON
    // 这里发一个请求
    var dataForJSON = fetch("https://jsonplaceholder.typicode.com/todos/1").then(data => data.json()).then(data => data).then(data => console.log(JSON.stringify(data)));


    // 序列化选项，也就是可以指定只序列化哪些属性
    var dataForJSON = fetch("https://jsonplaceholder.typicode.com/todos/1").then(data => data.json()).then(data => data).then(data => console.log(JSON.stringify(data,["userId","title"])));


    // 第二个值也可以是函数，这个就跟map差不多 k 和 v
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(data => data.json()).then(data => data).then(data => {
        return JSON.stringify(data,(key,v) => {
            if (key == "title"){
                return "hello";
            }

            return v;
        });
    }).then(console.log)

    // 这个值还有第三个元素，就是负责缩进的比如如下，就可以让序列化后面的字符串好看一些
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(data => data.json()).then(data => data).then(data => {
        return JSON.stringify(data,(key,v) => {
            if (key == "title"){
                return "hello";
            }

            return v;
        },"    ");
    }).then(console.log)

    // JSON.parse,就是吧字符串解析成对象，也有第二个函数，功能和序列化一样
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(data => data.json()).then(data => data).then(data => {
        return JSON.stringify(data,(key,v) => {
            if (key == "title"){
                return "hello";
            }

            return v;
        },"    ");
    }).then(data => {
        return JSON.parse(data,(k,v) => {
            if (k === "title") {
                return "hi"
            }
            return v;
        });
    }) .then(console.log)
})