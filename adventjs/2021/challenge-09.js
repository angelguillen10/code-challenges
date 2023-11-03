// https://adventjs.dev/challenges/09

export default function groupBy(collection, it) {
    let resultado = {};
    collection.forEach(item => {
      const x = typeof it === 'function' ? it(item) : item[it];
      resultado[x] = resultado[x] || [];
      resultado[x].push(item);
    });
    return resultado;
}