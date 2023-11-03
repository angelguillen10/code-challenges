// https://adventjs.dev/challenges/02

export default function listGifts(letter) {
    let objeto = letter.split(' ');
     
     const final = objeto.reduce((acc, value) => ({
       ...acc,
       [value]: (acc[value] || 0) + 1
     }), {});
     
     for (let fin in final) {
       (fin == '') && delete final[fin];
       (fin.includes('_')) && delete final[fin];
     }
     
     return final;
}