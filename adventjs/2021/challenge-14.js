// https://adventjs.dev/challenges/14

function missingReindeer(ids) {
    for(let i = 0; i <= ids.length; i++) {
      if (!ids.includes(i)) return i;
    }
}