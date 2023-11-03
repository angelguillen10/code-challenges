// https://adventjs.dev/challenges/15

function checkFirstArray(arr) {
    let num = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== num) return false;
      if (arr[i] === num) num++;
    }
    return true;
}
  
function checkLastArray(arr) {
    let num = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== num) return false;
      if (arr[i] === num) num--;
    }
    return true;
}
  
function checkSledJump(heights) {
    const maxHeight = Math.max(...heights);
    const firstArray = heights.slice(0, (heights.indexOf(maxHeight)));
    const lastArray = heights.slice(heights.indexOf(maxHeight)+1, heights.length);
    if (lastArray.length <= 0) return false;
    if (lastArray.length == 1 && firstArray.length == 1) return true;
    
    return (checkFirstArray(firstArray) && checkLastArray(lastArray)) ? true : false;
}