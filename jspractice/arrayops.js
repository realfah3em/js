function pushOperationExample(arr, element){
    console.log("original array: ", arr);
    arr.push(element);
    console.log("array after push operation: ", arr);
}

pushOperationExample([1, 2, 3, 4, 5]);

function popOperationExample(arr, element){
    console.log("arr before pop operation: ", arr);
    arr.pop();
    console.log("array after pop operation: ", arr);
}

popOperationExample([1, 2, 3, 4, 5]);

function shiftOperationExample(arr){
    console.log("original array: ", arr);
    arr.shift();
    console.log("array after shift operation: ", arr);
}

shiftOperationExample([10, 20, 30, 40]);