// https://adventjs.dev/challenges/07

export default function contains(store, product) {
    return joiner(store).includes(product);
}
  
function joiner(store) {
    let keys = [];
    for (let key in store) {
      if (typeof store[key] === "object") {
        keys = keys.concat(joiner(store[key]));
      } else {
        keys.push(store[key]);
      }
    }
    return keys;
}