/**
 * Copyright (c) 2023, Laboratorio de Microprocesadores
 * Facultad de Ciencias Exactas y Tecnología, Universidad Nacional de Tucumán
 * https://www.microprocesadores.unt.edu.ar/
 *
 * Copyright (c) 2023, Bautista José Llobeta <llobetabautista@gmail.com>

 *
 * SPDX-License-Identifier: MIT
 */

module.exports = class Lista {
    #lista
    constructor(){
        this.#lista = []
    }

    count(){
        return this.#lista.length
    }

    find(clave){
        var resultado = NaN
        var elemento = this.#findElem(clave)
        if(elemento) resultado = elemento.valor
        return resultado
    }

    add(clave, valor){
        var elemento = this.#findElem(clave)

        if(elemento){
            elemento.valor = valor
        }else{
            this.#lista.push({clave: clave, valor: valor})
        }
        }
    

    //Funcion privada auxiliar para encontrar elementos por clave
    #findElem(clave){
        var elemento = NaN
        if(this.#lista.length > 0){
            this.#lista.forEach(element => {
                if(element.clave == clave){
                    elemento = element
                }
            })          
            }
        return elemento
        }

    }

