const data = [{name:"hello",age:1},{name:"hi",age:"2"},{name:"abc",age:"3"}];

function sortByProperty(propertyName){
    return function(obj1,obj2){
        let v1 = obj1[propertyName];
        let v2 = obj2[propertyName];

        if (v1 > v2) return 1;
        else if(v1 < v2) return -1;
        else return 0;
    }
}

data.sort(sortByProperty("name")).forEach(item => console.log(item))