function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const low = arr.slice(0, mid);
    const high = arr.slice(mid);
    
    return merge(mergeSort(low), mergeSort(high));

}

function merge(left, right) {
    const result = [];
    while(left.length && right.length) {
        if(left[0] <= right [0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift());
        }
    }

    while(left.length) result.push(left.shift());

    while(right.length) result.push(right.shift());
  
    return result;

}





// let arr = [1,2,3,4];
// const mid = Math.floor(arr.length/2);
// const newArray = arr.slice(0,mid)

// console.log(newArray);