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

const Lista = require('../src/lista')

describe('En una lista de pares clave:valor ...', function () {
  
  describe('cuando la lista esta vacia ...', function () {
    let nueva_lista = new Lista()

    it('hay cero elementos', function () {
      assert.equal(nueva_lista.count(), 0)
    })
    it('no encuentra ninguna clave', function(){
      assert.isNaN(nueva_lista.find('clave'))
    })
  })

  describe('cuando se agrega un elemento a una lista vacia...', function(){
    let lista = new Lista()
    lista.add('clave','valor')

    it('hay un elemento', function(){
      assert.equal(lista.count(),1)
    })
    it('se puede recuperar el  valor a partir de la clave', function(){
      assert.equal(lista.find('clave'), 'valor')
    })
  })

  describe('cuando se agregan dos elementos a una lista vacia...', function(){
    let lista = new Lista()
    lista.add('clave','valor')
    lista.add('key', 'value')

    it('hay dos elementos', function(){
      assert.equal(lista.count(),2)
    })
    it('se puede recuperar el  valor a partir de la clave', function(){
      assert.equal(lista.find('key'), 'value')
    })
  })

  describe('cuando se agrega una clave que ya existe...', function(){
    let lista = new Lista()
    lista.add('clave','valor')
    lista.add('clave', 'value')

    it('la cantidad de elementos en la lista no cambia', function(){
      assert.equal(lista.count(),1)
    })
    //it('se actualiza el valor almacenado', function(){
    //  assert.equal(lista.find('clave'), 'value')
    //})
  })


})
