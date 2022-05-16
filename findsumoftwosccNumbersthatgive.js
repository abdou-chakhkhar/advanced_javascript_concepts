

function test(arr, target){

  
  let numberTobeFound;
  
  for(let i=0; i<arr.length; i++){
    numberTobeFound = target - arr[i];
    for(let j=i+1; j<arr.length; j++) {
      if(arr[j] == numberTobeFound && j==i+1){
        return [i,j];
      }
    }
  }
  
  return null;

}


console.log(test([1,3,7,9,2], 11));
console.log(test([1,3,7,9,2,4], 11));
console.log(test([1,2,3,4,5], 25));
console.log(test([], 11));
console.log(test([1,6], 7));
console.log(test([5], 8));





