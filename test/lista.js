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
    it('la lista de claves esta ordenada', function(){
      assert.deepEqual(lista.keys(), ['clave'])
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
    it('se actualiza el valor almacenado', function(){
      assert.equal(lista.find('clave'), 'value')
    })
  })

  describe('cuando se elimina un elemento...', function(){
    let lista = new Lista()
    lista.add('clave', 'valor')
    lista.add('key', 'value')
    lista.remove('clave')

    it('la cantidad de elementos en la lista se reduce en uno', function(){
      assert.equal(lista.count(),1)
    })

    it('no se puede recuperar el valor', function(){
      assert.isNaN(lista.find('clave'))
    })
  })



  describe('cuando se agrega un par con clave ...', function(){
    let lista = new Lista()
    lista.add(4, 'valor')
    lista.add('', 'value')

    it('que no es una cadena', function(){
      assert.isNaN(lista.find(4))
    })

    it('que es cadena vacia', function(){
      assert.isNaN(lista.find(''))
    })
  })

  describe('cuando se agrega una clave menor a las existentes...', function(){
    let lista = new Lista()
    lista.add('b', 'valor1')
    lista.add('a', 'valor2')

    it('queda ordenada', function(){
      assert.deepEqual(lista.keys(), ['a','b'])
    })
  })


  describe('cuando se agrega una clave mayor a las existentes...', function(){
    let lista = new Lista()
    lista.add('c', 'valor1')
    lista.add('b', 'valor2')
    lista.add('a', 'valor2')
    
    it('queda ordenada', function(){
      assert.deepEqual(lista.keys(), ['a','b','c'])
    })
  })


})
