
// ✅ Ejercicio 1: Importes con ganancia hasta $1.000
function sumarImportesValidos(importes) {
  let total = 0;
  for (let i = 0; i < importes.length; i++) {
    if (importes[i] > 0 && importes[i] <= 1000) {
      total += importes[i];
    }
  }
  return total;
}
// console.log(sumarImportesValidos([500, -200, 1200, 800, 1001]));


// ✅ Ejercicio 2: Verificación de asiento disponible
function verificarAsientoDisponibilidad(asientosDisponibles, asientoSolicitado) {
  if (asientosDisponibles.includes(asientoSolicitado)) {
    return `🎉 Felicitaciones, el asiento número ${asientoSolicitado} está disponible.`;
  } else {
    return `❌ Lo sentimos, el asiento número ${asientoSolicitado} está ocupado, pero aún quedan ${asientosDisponibles.length} asientos disponibles.`;
  }
}
// console.log(verificarAsientoDisponibilidad([15, 28, 44, 45, 70], 15));


// ✅ Ejercicio 3: Reporte de pasajeros por estación
function reportePasajeros(estacionesRecorridas) {
  let pasajeros = 200;
  let reporte = [];

  for (let i = 1; i <= estacionesRecorridas; i++) {
    if (i === 5) {
      pasajeros += 120;
      pasajeros -= 80;
    } else {
      pasajeros += 50;
      pasajeros -= 30;
    }
    reporte.push(`Estación ${i}: ${pasajeros} pasajeros`);
  }

  return reporte;
}
// console.log(reportePasajeros(7));


// ✅ Ejercicio 4: FizzBuzz

// 🔁 Versión con for
function fizzBuzzFor(max) {
  for (let i = 0; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {
      console.log(i);
    }
  }
}

// 🔁 Versión con while
function fizzBuzzWhile(max) {
  let i = 0;
  while (i < max) {
    if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {
      console.log(i);
    }
    i++;
  }
}
