function arrayMethods() {
    //Concat - It joins two or more than two arrays.
    console.log("Concat :");
    var arr1 = ["Mango", "Orange"];
    var arr2 = ["Banana", "Pineapple"];
    var arr3 = arr1.concat(arr2);
    console.log(arr3);

    //Constructor - It returns the function that created
    //the array objects prototype.
    console.log("Constructor :");
    var text = arr1.constructor();
    console.log(text);

    //Copywithin - It copies elements within the array
    // var arr1 = ["Banana", "Mango"];
    // arr1.copyWithin(2, 0, 2);
    //This method is not supported in internet explorer.

    //Entries - Returns a key/value pair Array Iteration
    //Object. Basically it returns array elements in 
    //in key/value format which are iterable.
    console.log("Entries :");
    arr1 = ["Litchi", "Oranges", "Banana", "Apple"];
    const fruits = arr1.entries();
    for (let x of fruits) {
        console.log(x);
    }

    //Every - It executes a function for each element 
    //present in the array. And returns true and false
    //on the basis of the function. It does not execute 
    //the function for empty elements.
    console.log("Every :");
    arr1 = [12, 21, 23, 34, 11, 21];
    arr2 = [19, 32, 23, 34, 43, 21];
    console.log("First Array :", arr1);
    console.log("Second Array :", arr2);
    function checkAge(age) {
        return age > 18;
    }
    console.log("Does this array contains elements above 18?", arr1.every(checkAge));
    console.log("Does This array contains elements above 18?", arr2.every(checkAge));

    //Fill - Fill the elements in an array with static 
    //value. Arguments - value, start, end
    console.log("Fill :");
    console.log("Befolre using fill", arr1);
    arr1.fill(21);
    console.log("After fill", arr1)

    //Filter - It returns an array with every element in
    //the array pass a test.
    console.log("Filter :");
    arr1 = [12, 21, 23, 34, 11, 21];
    const filteredArray = arr1.filter(checkAge);
    console.log(filteredArray);

    //Find - It return the first element which passed
    //the test.
    console.log("Find :");
    arr1 = [12, 31, 21, 43, 23, 45, 32, 44];
    const findElement = arr1.find(checkAge);
    console.log(findElement);

    //findIndex - It is similar to find method but it 
    //return the index of the first element which passed
    // the test.
    console.log("Find Index :");
    var arr1 = [12, 32, 21, 43, 54, 32, 43];
    const findIndex = arr1.findIndex(checkAge);
    console.log(findIndex);


    //forEach - It runs a function on each element of 
    //array
    console.log("For Each :");
    var arr1 = ['a', 'e', 'i', 'o', 'u', 'h', 'j'];
    function checkVowel(letter) {
        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
            console.log("Vowel");
        } else {
            console.log("Alphabet");
        }
    }
    arr1.forEach(checkVowel);

    //From - It creates an array from the object.
    console.log("From :");
    const person = "MangoMan"
    arr1 = Array.from(person);
    console.log(arr1);

    //Includes - It checks wheather an array contains a 
    //specified element.
    console.log("Includes :");
    console.log("Does the above array contains 'M' :", arr1.includes("M"));

    //IndexOf - It search an array for a element and 
    //returns its value.
    console.log("IdexOf :");
    console.log("Index of letter 'o' in above array:", arr1.indexOf('o'));

    //isArrat - It checks whether the object is array or
    //not
    console.log("IsArray :");
    console.log("Is the above object array :", Array.isArray(arr1));

    //lastIndexOf - Search the array for an element, 
    //starting at the end, and returns its position.
    console.log("lastIndexOf :");
    arr1 = [1, 2, 1, 2, 1, 2, 3, 4, 3, 4, 2, 1, 2];
    console.log("The array :", arr1);
    console.log("The last index of 1 :", arr1.lastIndexOf(1));

    //length - It return the length or number of element
    //in the array.
    console.log("Length :");
    console.log("Length of the above array:", arr1.length);

    //Map - creates a new array from calling a function
    //for every  element.
    console.log("Map :");
    console.log("Array before map:", arr1);
    console.log("Adding 10 to each element using map: ", arr1.map(add));
    function add(x) {
        return x + 10;
    }

    //pop - It removes the last element from the array
    console.log("Pop :");
    const x = arr1.pop();
    console.log("Popped element :", x);

    //prototype - It allows you to add new properties 
    //and methods to arrays. This property is available
    //for all the objects in the javascript
    Array.prototype.myUCase = function () {
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i].toUpperCase();
        }
    };
    console.log("Prototype :");
    var fruit = ["Apples", "Orange", "Banana"];
    console.log(fruit);
    fruit.myUCase();
    console.log("Applying new method", fruit);

    //push - It is used to add new elements to the array.
    console.log("Push :");
    console.log(fruit);
    console.log(fruit.push("Pineapple"));

    //reverse - It reverse the order of the elements in 
    //the array.
    console.log("Reverse :");
    console.log("Original Order -", arr1);
    console.log("Reverse Order -", arr1.reverse());

    //sort - It sorts the element present in the array.
    console.log("Sort :");
    console.log("Original Order -", arr1);
    console.log("Sorted Order -", arr1.sort());

    //toString - It converts an array to a string.
    console.log("toString :");
    console.log("Array -", arr1);
    console.log("String -", arr1.toString());

}

//Implementation of Array of objects and methods 
function car() {
    // Array of objects
    let cars = [
        {
            "color": "purple",
            "type": "minivan",
            "registration": new Date('2017-01-03'),
            "capacity": 7
        },
        {
            "color": "red",
            "type": "station wagon",
            "registration": new Date('2018-03-03'),
            "capacity": 5
        },
        {
            "color": "blue",
            "type": "chevi",
            "registration": new Date('2019-03-03'),
            "capacity": 4
        },
        {
            "color": "cherri",
            "type": "hyunday",
            "registration": new Date('2019-04-03'),
            "capacity": 5
        },
        {
            "color": "yellow",
            "type": "audi",
            "registration": new Date('2020-03-03'),
            "capacity": 6
        },
    ]

    console.log("Newly created array of cars :",cars);
    //We can push a new object using array.push()

    let car = {
        "color": "pink",
        "type": "motor",
        "registration": new Date('2021-03-03'),
        "capacity": 4
    }
    cars.push(car);

    console.log("Added a new car in the array of cars :", cars);
    car = {
        "color": "violet",
        "type": "mistu",
        "registration": new Date('2021-04-03'),
        "capacity": 5
    }

    //We can add a new object at a particular location too using array.splice()
    cars.splice(3,0,car);
    console.log("Added a new car at 3rd index of the array of cars : ",cars);
    //We can search an object using array.find() and we 
    //can search using multiple properties.
    let chevi = cars.find(car => car.type === "chevi");
    console.log("Searcher car color : ",chevi.color);

    car = {
        "color": "red",
        "type": "mistu",
        "registration": new Date('2021-04-03'),
        "capacity": 5
    }
    cars.push("We pushed a car at the end of the array : ",car);
    //we can filter object on a particular property too 
    //by using array.filter()
    let redCars = cars.filter(car => car.color === "red");
    console.log("Filtered cars on the basis of red colors : ",redCars);

    //We can add a new property to every element by using array.forEach()
    cars.forEach(
        car => {
            car['size'] = "large";
            if(car.capacity <=5) {
                car['size'] = "medium";
            }
            if(car.capacity <=4) {
                car['size'] = "small";
            }
        }
    );

    console.log("Added a new property to car 'size' : ",cars);
}