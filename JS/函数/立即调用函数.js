// (function(){
//     for (var i = 0;i< 10;i++) {
//         console.log(i);
//     }
// })()

function f(){ 
    for(let j = 1;j<=10;j++){
        
    }

    console.log(j);
}


// 这个立即构造函数只需要注意他是一个块级作用域就行了，比如如下代码,你会发现最后的index全是divs.length
const divs = document.getElementsByClassName("className")
for (var index = 0; index < divs.length; index++) {
    divs[index].addEventListener("click",() => {
        console.log(index);
    })
}


// 这个就可以使用立即执行函数模你块级作用域
for (var index = 0; index < divs.length; index++) {
    divs[index].addEventListener("click",(
        function f(i) {
            return function () {
                console.log(i);
            }
        }
    )(index))
}