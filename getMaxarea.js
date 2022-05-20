
function test(arr){

  let max = 0;
  
  if(arr.length == 0 || arr.length == 1){
    return 0;
  }

  for(let i = 0; i < arr.length; i++){
      for(let j = i+1; j < arr.length; j++){
        let area = (j-i) * Math.min(arr[i], arr[j]);
        max = Math.max(max, area);
      }
  }

  
  
return max;
  
}


console.log(test([1, 8, 6, 2, 9, 4]))
console.log(test([7, 1, 2, 3, 9]))
console.log(test([6, 9, 3, 4, 5, 8]))
console.log(test([7, 9, 3, 4, 5, 8]))
console.log(test([]))
console.log(test([1]))
console.log(test([4,5]))
 
