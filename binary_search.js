function binarySearch(arr, left, right, x){
    var middle;
    while(left <= right){
        middle = (left + right)/2;
        console.log("middle : ", middle);
        console.log("left_0 : ", left);
        console.log("right_0 : ", right);
        if(arr[middle] == x) return middle;

        if(x > arr[middle]) {
            left = middle + 1;
            console.log("left : ", left);
        }else{
            right = middle - 1;
            console.log("right : ", right);
        }
    }

    return -1;
}
var myArr = [15, 20, 25, 30, 31, 44, 66];
let result = binarySearch(myArr, 0, myArr.length -1, 25);
console.log("result: ", result);