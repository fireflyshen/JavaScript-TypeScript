function removeTrailingZeros(num: string): string {

    if(num.trim() == "")
        return "";

    if(Number.isNaN(Number.parseInt(num))){
        throw new Error("不是数字")
    }


    let index,jndex;
    for(index = 0 , jndex = num.length-1 ; index < jndex;){
        if (num.charAt(index) === "0") {
            index++;
        } else if(num.charAt(jndex) === "0"){
            jndex--;
        } else if(num.charAt(index) === "0" && num.charAt(jndex) === "0"){
            index++;
            jndex--;
        } else {
            break;
        }
    }

    return num.substring(index,jndex+1);
};