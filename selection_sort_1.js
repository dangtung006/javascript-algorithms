function selectionSort(arr){
    var size = arr.length;
    for(let step = 0; step < size -1; step++) {
        let min_idx = step;
        for(let idx = step+1; idx < size; idx++){
            if(arr[idx] < arr[min_idx]){
                min_idx = idx;
                console.log("min_idx : ",min_idx);
            }
        }

        var temp = arr[step];
        arr[step] = arr[min_idx];
        arr[min_idx] = temp;
    }
}

var myArr = [3, 5, -2, 14, -9, 30];
selectionSort(myArr);
console.log(myArr);
