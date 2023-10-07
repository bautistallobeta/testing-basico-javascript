/**
 * Copyright (c) 2023, Laboratorio de Microprocesadores
 * Facultad de Ciencias Exactas y Tecnología, Universidad Nacional de Tucumán
 * https://www.microprocesadores.unt.edu.ar/
 *
 * Copyright (c) 2023, Bautista José Llobeta <llobetabautista@gmail.com>

 *
 * SPDX-License-Identifier: MIT
 */

const suma = require('./src/suma.js')

let acumulador = 5
let resultado = suma.acumular(acumulador, 3)

console.log(`Resultado: ${resultado.acumulador}`)
