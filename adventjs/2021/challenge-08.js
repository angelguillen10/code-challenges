// https://adventjs.dev/challenges/08

export default function maxProfit(prices) {
    let compra = Math.min(...prices.slice(0, 2));
    let venta = Math.max(...prices.slice(2, prices.length));
    
    if (venta <= compra) {
      return -1;
    } else {
      return venta - compra;
    }
}