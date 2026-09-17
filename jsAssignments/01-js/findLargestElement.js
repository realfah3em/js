
function findLargestElement(arr){
    console.log("the array: ", arr);
    let newArr = arr.sort();
    console.log("the largest element is " + arr.at(-1));
}


findLargestElement([10, 20, 30, 40, 50]);

