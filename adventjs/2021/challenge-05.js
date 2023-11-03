// https://adventjs.dev/challenges/05

export default function daysToXmas(date) {
    const navidad = new Date('Dec 25, 2021').getTime();
    const fechaRecibida = new Date(date).getTime();
    
    const diferencia = navidad - fechaRecibida;
    
    return Math.ceil(diferencia/(1000*60*60*24));
}