// https://adventjs.dev/challenges/11

function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
}
  
export default function shouldBuyFidelity(times) {
    let conFidelidad = 0;
    [...range(1, times).map((num) => 12 * Math.pow(0.75, num)), 250].forEach(num => conFidelidad = conFidelidad + num);
    
    const sinFidelidad = 12 * times;
  
    return conFidelidad < sinFidelidad;
}