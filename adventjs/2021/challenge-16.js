// https://adventjs.dev/challenges/16

function decodeNumbers(symbols) {
    let tranformSymbols = symbols.split('');
    tranformSymbols = tranformSymbols.map(sym => {
      if (sym === '.') return 1;
      if (sym === ',') return 5;
      if (sym === ':') return 10;
      if (sym === ';') return 50;
      if (sym === '!') return 100;
    });
    let res = 0;
    for(let i = 0; i < tranformSymbols.length; i++) {
      if (tranformSymbols[i] < tranformSymbols[i+1]) {
        res -= tranformSymbols[i];
      } else {
        res += tranformSymbols[i];
      }
    }
    return res;
}