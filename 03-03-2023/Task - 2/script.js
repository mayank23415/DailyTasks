function firstPattern() {
    for(let i=0; i<5; i++) {
        let str = "";
        if(i == 0 || i == 4) {
            for(let j=0; j<5; j++) {
                str += "*";
            }
        }else {
            for(let j=0; j<5; j++) {
                if(j == 0 || j == 4) {
                    str += "*";
                }else {
                    str += " ";
                }
            }
        } 
        console.log(str);
    }
}

function secondPattern() {
    let row = 5, rowElement=1, str;
    for(let i=1; i<=row; i++) {
        str = "";
        for(let j=0; j<row-i; j++) {
            str += " ";
        }
        let elements = 1;
        while(elements<=rowElement) {
            str += elements;
            elements++;
        }
        rowElement += 2;
        console.log(str);
    }
    
}