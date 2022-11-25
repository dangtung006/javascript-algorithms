//j giam dan
function bubble_sort(arr, n){
    for(let i = 0; i < n- 1; i++){
        for(let j=n-1; j>i; j--){
            console.log("arr : ", i, arr);
            console.log("j : ", j);
            if(arr[j-1] > arr[j]){
                let temp = arr[j];
                arr[j]   = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }
}

function main(){
    var myArr = [8, 4, 1, 6, 5];
    bubble_sort(myArr, myArr.length);
}

main();