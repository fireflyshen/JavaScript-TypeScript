import Paper from './Paper.js';
import Item from './Item.js'
window.addEventListener("message",(e) => {
    let itemarr = [];
    console.log(e.data);
    var p = JSON.parse(e.data)
    var paper2 = Paper.fromJson(p)
    console.log(paper2);
    const items = paper2._items;
    items.forEach(_item => {
        const item = Item.fromJson(_item);
        itemarr.push(item);
    })
   
    
    paper2._items = itemarr;
    console.log(paper2.items)
    let paper = new Proxy(paper2,Reflect)
    render(paper)
})


function render(paper){
    var elements = document.getElementsByClassName("container")[0]
    var itemContainer;
    var q;
    paper.items.forEach(item => {
        itemContainer = document.createElement("div")
        let optionContainer = document.createElement("div");
        q = document.createElement("h3");
        console.log(q);
        q.innerHTML = item.question;
        debugger;
        itemContainer.appendChild(q);
        console.log(itemContainer);
        const itemOptions = item.options.filter(e => e.trim() != "");
        itemOptions.forEach(e => {
            debugger;
            var radio = document.createElement("input")
            var lable = document.createElement("label")
            radio.type = "radio";
            radio.value = e.substring(0,1);
            radio.id = e;
            lable.for = radio.id;
            lable.innerHTML = e;
            if(item.yourAnwser != item.rightAnwser){
                if(item.yourAnwser === radio.value){
                    var id = radio.id;
                    //  通过这个id拿到for
                    if(lable.for === id){
                        lable.style.color = "red";
                    }
                }
            }
            if (radio.value === item.yourAnwser) {
                radio.checked = true;
            }
            radio.disabled = true;
            optionContainer.appendChild(radio);
            optionContainer.appendChild(lable);
            itemContainer.appendChild(optionContainer)
        })
        elements.appendChild(itemContainer);
    })

  
    
}
