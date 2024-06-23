class person {};

const Animal = class {};

/**
 * 函数式函数作用域
 * 类是块级作用域
 */

{
    class ClassDeclaration {};
    function FunctionDeclaration(){}
}

console.log(FunctionDeclaration); 
// console.log(ClassDeclaration); //ClassDeclaration is not defined

/**
 * 类可以包含构造函数方法、实例方法、获取函数、设置函数和静态类方法，但这些都不是必需的。空的类定义照样有效。默认情况下，类定义中的代码都在严格模式下执行。
 */

class Foo {
    constructor(){}

    static bar(){}

    get baz(){}
}


