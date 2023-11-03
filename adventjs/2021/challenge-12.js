// https://adventjs.dev/challenges/12

export default function getMinJump(obstacles) {
    const maxJump = Math.max(...obstacles);
    let minJump = 1;
    
    for(let i = 0; i <= maxJump; i = i + minJump) {
      if (obstacles.includes(i)) {
        minJump++;
        i = 0;
      }
    }
  
    return minJump;
}