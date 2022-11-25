function binarySearch(arr, left, right, x){
    var mid = (left + right) / 2;
    if(x == arr[mid]) return mid;
    if(x < arr[mid]) return binarySearch(arr, left, mid -1, x);
    return binarySearch(arr, mid + 1, right, x);
}  

function main(){
    var myArr = [
        15, 20, 25, 30, 31, 44, 66
    ];

    let result = binarySearch(myArr, 0, myArr.length -1, 25);
    console.log("result : " , result);
}

main();