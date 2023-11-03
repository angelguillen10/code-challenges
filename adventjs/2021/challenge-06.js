// https://adventjs.dev/challenges/06

export default function sumPairs(numbers, result) {
  
    let elegidos = [];
    for (let i = 0; i < numbers.length; i++) {
      elegidos.push(numbers[i]);
      
      for (let j = i + 1; j < numbers.length; j++) {
        (numbers[i] + numbers[j]) === result && elegidos.push(numbers[j]);
      }
      
      if (elegidos.length == 2) {
        break;
      }
      elegidos = [];
    }
    
    return elegidos.length > 1 ? elegidos : null;
}