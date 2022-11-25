function binarySearch(arr, n, x){
    var left, right, mid;
    left  = 0;
    right = n-1;

    do{
        mid = (left + right)/2;
        console.log("mid : " , mid);
        if(arr[mid] == x) return mid;

        if(arr[mid] < x) {
            left = mid + 1;
            console.log("left : " , left);
        }else{
            right = mid -1;
            console.log("right : " , right);
        }
    }
    while(left <= right)
    return -1;
}

function main(){
    var myArr = [15, 20, 25, 30, 31, 44, 66];
    let result = binarySearch(myArr, myArr.length, 25);
    console.log("result : " , result);
}

main();