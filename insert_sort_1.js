function insertionSort(array) {
    var size = array.length;

    for (var step = 1; step < size; step++) {
        var key = array[step];
        var j = step - 1;

        // Compare key with each element on the left of it until an element smaller than
        // it is found.
        // For descending order, change key<array[j] to key>array[j].
        while (j >= 0 && key < array[j]) {
            console.log("j : ", j);
            array[j + 1] = array[j];
            --j;
        }

        // Place key at after the element just smaller than it.
        array[j + 1] = key;
        console.log(array);
    }
}

var arr = [3, 5, -2, 14, -9, 30];
insertionSort(arr);
console.log(arr);