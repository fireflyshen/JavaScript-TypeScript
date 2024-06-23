
function changeColor() {
    let anotherColor = "red";
    function swapColors() {
        let tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        // 这里可以访问color、anotherColor和tempColor }
        // 这里可以访问color和anotherColor，但访问不到tempColor
        swapColors();
    }
}
// 这里只能访问color changeColor()


function a(){
    let h = "hello";
    return function b(){
        console.log(h);
    }
}

a()();