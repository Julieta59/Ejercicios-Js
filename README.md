README - Ejercicios Integradores JavaScript

Este archivo explica paso a paso las soluciones implementadas en el script "ejercicios_integradores.js".
Cada función resuelve un problema específico usando estructuras básicas de programación.

--------------------------------------------------------
✅ Ejercicio 1: Sumar importes válidos
--------------------------------------------------------
Objetivo:
Sumar todos los importes positivos de un array, siempre que no superen los $1000.

Lógica:
1. Recorrer el array con un bucle for.
2. Verificar si cada importe es mayor que 0 y menor o igual a 1000.
3. Si cumple, se suma a una variable acumuladora.
4. Al finalizar, se retorna la suma total.

Función: sumarImportesValidos(importes)

--------------------------------------------------------
✅ Ejercicio 2: Verificación de asiento disponible
--------------------------------------------------------
Objetivo:
Verificar si el asiento solicitado por una persona está dentro de los disponibles.

Lógica:
1. Recibe un array de asientos disponibles y un número de asiento solicitado.
2. Usa el método .includes() para ver si el asiento está en el array.
3. Si está disponible, muestra un mensaje de felicitaciones.
4. Si no está, informa que está ocupado y cuántos asientos hay libres.

Función: verificarAsientoDisponibilidad(asientosDisponibles, asientoSolicitado)

--------------------------------------------------------
✅ Ejercicio 3: Reporte de pasajeros por estación
--------------------------------------------------------
Objetivo:
Mostrar cuántos pasajeros hay en el tren después de cada parada.

Lógica:
1. El tren parte con 200 pasajeros desde la estación 1.
2. En cada estación normal, suben 50 personas y bajan 30.
3. En la estación especial (número 5), suben 120 y bajan 80.
4. Usamos un bucle for para simular el paso por estaciones.
5. Se guarda un reporte de la cantidad de pasajeros luego de cada parada en un array.

Función: reportePasajeros(estacionesRecorridas)

--------------------------------------------------------
✅ Ejercicio 4: FizzBuzz
--------------------------------------------------------
Objetivo:
Imprimir todos los números desde 0 hasta un número dado que:
- Sean divisibles por 3 o 5, pero NO por ambos.

Lógica (para ambas versiones):
1. Usar un bucle (for o while) que vaya desde 0 hasta max (exclusivo).
2. Verificar si el número cumple:
   - divisible por 3 o 5: (num % 3 === 0 || num % 5 === 0)
   - pero NO por ambos: num % 15 !== 0
3. Si cumple, imprimirlo con console.log()

Funciones:
- fizzBuzzFor(max)
- fizzBuzzWhile(max)

--------------------------------------------------------
