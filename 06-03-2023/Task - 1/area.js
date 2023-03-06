class Area{
    squareArea() {
        const side = document.getElementById("squareSide").value;
        var printArea = document.getElementById("squareArea");
        printArea.innerHTML += side*side;
    }

    rectangleArea() {
        const length = document.getElementById("rectLength").value;
        const breadth = document.getElementById("rectBreadth").value;
        var printArea = document.getElementById("rectArea");
        printArea.innerHTML += length*breadth;
    }

    triangleArea() {
        const height = document.getElementById("triHeight").value;
        const base = document.getElementById("triBase").value;
        var printArea = document.getElementById("triArea");
        printArea.innerHTML += height*base/2;
    }
}

let findArea = new Area();