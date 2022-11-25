function BubbleSort(a,n){
    var temp; // biến tạm temp
    for (let i = 0; i < n; i++){
        for (let j = i + 1; j < n; j++){
            if (a[j] > a[j+1]){
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
	}
    console.log("a : " , a);
}

function main(){
    var myArr = [5, 3, 8, 4, 6];
    BubbleSort(myArr, myArr.length);
}

main();