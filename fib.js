function fib(n) {
    
    let n1 = 0;
    let n2 = 1;
    let nextTerm;

    let fibSeq = [];   
    for(let i = 0; i < n; i++) {
        fibSeq[i] = n1;
        nextTerm = n1 + n2;
        n1 = n2;
        n2 =nextTerm
    }
    return fibSeq;
}

function fibsRec(n) {

  
   if(n == 0 || n == 1) return [0];
   if(n == 2) return [0,1];

   const arr = fib(n -1);
   arr.push(arr[n - 2] + arr[n - 3]);
   return arr;
}



console.log(fib(8));

