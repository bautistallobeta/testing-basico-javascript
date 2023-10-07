/**
 * Copyright (c) 2023, Laboratorio de Microprocesadores
 * Facultad de Ciencias Exactas y Tecnología, Universidad Nacional de Tucumán
 * https://www.microprocesadores.unt.edu.ar/
 *
 * Copyright (c) 2023, Bautista José Llobeta <llobetabautista@gmail.com>

 *
 * SPDX-License-Identifier: MIT
 */

const describe = require('mocha').describe
const it = require('mocha').it
const assert = require('chai').assert

const lista = require('../src/lista').lista

describe('En una lista de pares clave:valor ...', function () {
  describe('cuando la lista esta vacia ...', function () {
    //Cuando la lista esta vacia
    it('hay cero elementos', function () {
      const nueva_lista = lista.crear()
      assert.equal(nueva_lista.length, 0)
    })
  })
})
