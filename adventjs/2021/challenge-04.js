// https://adventjs.dev/challenges/04

export default function createXmasTree(nFloors) {
    return [...Array(nFloors).keys()].map(
      (i) =>
        "_".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        "_".repeat(nFloors - i - 1) 
    ).join('\n') +  
      ("\n" + "_".repeat((nFloors * 2 - 1)/2) + '#' + "_".repeat((nFloors * 2 -1)/2)).repeat(2);
}