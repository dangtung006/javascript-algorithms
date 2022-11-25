const quickSort = (arr) => {

    if(arr.length < 2) return arr;
    
    // *** lấy phần tử cuối của 'arr' làm 'pivot'
    const pivotIndex = arr.length - 1;
    const pivot = arr[pivotIndex];

    const left = [];
    const right = [];
    
    let currentItem;
    // *** 'i < pivotIndex' => chúng ta sẽ không loop qua 'pivot' nữa
    for(let i = 0; i < pivotIndex; i++) {
        currentItem = arr[i];
        
        if(currentItem < pivot) {
            left.push(currentItem);
        } else {
            right.push(currentItem);
        }
    }

    console.log("left : ", left);
    console.log("right : ", right);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([100, 2, 5, 4, 7, 5, 6, 8, 0, 12, 34, 15]));