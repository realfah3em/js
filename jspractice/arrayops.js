function pushOperationExample(arr, element) {
    console.log("original array: ", arr);
    arr.push(element);
    console.log("array after push operation: ", arr);
}

pushOperationExample([1, 2, 3, 4, 5]);

function popOperationExample(arr, element) {
    console.log("arr before pop operation: ", arr);
    arr.pop();
    console.log("array after pop operation: ", arr);
}

popOperationExample([1, 2, 3, 4, 5]);

function shiftOperationExample(arr) {
    console.log("original array: ", arr);
    arr.shift();
    console.log("array after shift operation: ", arr);
}

shiftOperationExample([10, 20, 30, 40]);

function unshiftOperationExample(arr, element) {
    console.log("original array: ", arr);
    arr.unshift(element);
    console.log("string after unshift operation: ", arr);
}

unshiftOperationExample([20, 30, 40, 50], 10);

function concatExample(arr1, arr2) {
    console.log("arrays before concatenation: ", arr1, arr2);

    let concatResult = arr1.concat(arr2);

    console.log("array after concatenation: ", concatResult);
}

concatExample("faheem", "Manyar");

function forEachExample(arr) {
    console.log("array before forEach operation: ", arr);
    arr.forEach(function (item, index) {
        console.log(item, index);
    });
}

forEachExample([10, 20, 30, 40]);

function mapExample(arr) {
    console.log("original array: ", arr);

    let newArr = arr.map(function (item) {
        return item * 2;
    });

    console.log(newArr, "<-- New Array After Map operation.");
}

mapExample([10, 20, 30, 40, 50]);

function filterExample(arr) {
    console.log("Original Array: ", arr);

    let newArr = arr.filter(function (item) {
        return item <= 3;
    });

    console.log("array after a filter condition: ", newArr);
}

filterExample([0, 1, 2, 3, 4, 5]);

function findExample(arr) {
    console.log("Hello, your array Before find Operation: ", arr);

    let found = arr.find(function (item) {
        return item > 30;
    });

    console.log("array after find operation: ", found);
}

findExample([1, 5, 10, 20, 30, 40, 50, 60, 70]);

function sortExample(arr) {
    console.log("Array Before Sort: ", arr);
    let newArray = arr.sort(function (a, b) {
        return a - b;
    });

    console.log("After sort: ", arr);
}

sortExample([23, 21, 28, 31]);
