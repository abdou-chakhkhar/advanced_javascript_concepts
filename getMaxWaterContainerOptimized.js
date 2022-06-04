const heightArray = [4, 8, 1, 2, 3, 9];

const getMaxWaterContainer = function(height){
  let p1 = 0, p2 = heights.length - 1, maxArea = 0;

  console.log({ p1, p2, maxArea })
  while(p1 <  p2){
      console.log({ p1, p2})

    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
      console.log({ height, width, area })

    maxArea = Math.max(maxArea, area);
  console.log({ maxArea })

    if(heights[p1] <= heights[p2]){
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
}
