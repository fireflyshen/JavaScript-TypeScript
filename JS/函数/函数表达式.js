// 提升，函数和var变量一样，都会进行提升

sum(1,2)
function sum(num1,num2){
    console.log(num1+num2);
}

// 函数表达式则不一定，如果说回let，const则会存在暂时性死区
// sum2(1,2) // Uncaught ReferenceError ReferenceError: Cannot access 'sum2' before initialization
let sum2 = function(num1,num2){
    console.log(num1+num2); 
}

// var也一样,var虽然会提升，但是var的值不会，因此这里还是undefined
// sum3(1,3) // Uncaught TypeError TypeError: sum3 is not a function
var sum3 = function(num1,num2){
    console.log(num1+num2); 
} 

