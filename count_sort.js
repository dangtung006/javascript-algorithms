const countingSort = (inputArr, n = inputArr.length) => {
    let k = Math.max(...inputArr);
    let t;
    //Create a temporary with 0 zero value 
    //as the same length of max elemet + 1
    const temp = new Array(k + 1).fill(0);
    
    //Count the frequency of each element in the original array
    //And store it in temp array
    for(let i = 0; i < n; i++){
      t = inputArr[i];
      temp[t]++;
    }
  
    //Update the count based on the previous index
    for(let i = 1; i <= k; i++){
      // Updating elements of count array 
      temp[i] = temp[i] + temp[i - 1];  
    }
    
    //Output arr
    const outputArr = new Array(n).fill(0);
    
    for(let i = n - 1; i >= 0; i--) {
      // Add elements of array A to array B
      t = inputArr[i];
      outputArr[temp[t] - 1] = t;  
          
      // Decrement the count value by 1
      temp[t] = temp[t] - 1;		
     }
    
    return outputArr;
  }

  const arr = [1, 3, 2, 8, 5, 1, 5, 1, 2, 7];
console.log(countingSort(arr));

const countingSortNegative = (arr, n = arr.length) => {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let range = max - min + 1;
    let count = new Array(range).fill(0);
    let output = new Array(n).fill(0);
    
    //Store the frequency
    for (let i = 0; i < n; i++) { 
      count[arr[i] - min]++; 
    } 
   
    //Accumulate the frequency
    for (let i = 1; i < count.length; i++) { 
      count[i] += count[i - 1]; 
    } 
    
    //Sort based on frequency
    for (let i = n - 1; i >= 0; i--) { 
      output[count[arr[i] - min] - 1] = arr[i]; 
      count[arr[i] - min]--; 
    } 
    
    return output;
  }

  const nagativeArr = [-5, -10, 0, -3, 8, 5, -1, 10];
  console.log(countingSortNegative(nagativeArr));


const countingSortStr = (str) => {
    let arr = str.split("");
    let n = str.length;
    const output = new Array(n);
    
    // Create a count array to store count of inidividul 
    // characters and initialize count array as 0
    const count = new Array(256).fill(0);
    
    // store count of each character 
    for (let i = 0; i < n; i++){ 
        count[arr[i].charCodeAt()]++; 
    }
    
    // Change count[i] so that count[i] now contains actual 
    // position of this character in output array 
    for (let i = 1; i <= 255; i++){
        count[i] += count[i - 1]; 
    }
    
    // Build the output character array 
    // To make it stable we are operating in reverse order. 
    for (let i = n - 1; i >= 0; i--) { 
        output[count[arr[i].charCodeAt()] - 1] = arr[i].charCodeAt(); 
        --count[arr[i].charCodeAt()]; 
    } 
    
    //Convert the ASCII Value to characters again
    return output.map(e => String.fromCharCode(e));
}
console.log(countingSortStr("learnersbucket"));