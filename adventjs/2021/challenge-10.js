// https://adventjs.dev/challenges/10

export default function getCoins(change) {
    const cambios = [50, 20, 10, 5, 2, 1];
    
    let final = cambios.map(cambio => {
      let cantidadCambio = Math.floor(change / cambio);
      change = change - cantidadCambio * cambio;
      return cantidadCambio;
    });
    
    return final.reverse();
}