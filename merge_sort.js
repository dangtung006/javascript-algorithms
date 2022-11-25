function merge(left, right) {
    let arr = [];
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        console.log("current left : ", left);
        console.log("current right : ", right);
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
        console.log("arr : ", arr);
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    console.log("sorted: ", [ ...arr, ...left, ...right ]);
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = array.length / 2;

    // Base case or terminating case
    if(array.length < 2) return array;
    const left = array.splice(0, half);
    console.log("left : ", left);
    console.log("right : ", array);
    return merge( mergeSort(left), mergeSort(array) );
}

var arr = [3, 5, -2, 14, -9, 30];
console.log(mergeSort(arr));