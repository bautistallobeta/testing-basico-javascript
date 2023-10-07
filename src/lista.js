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
        if(this.#lista.length > 0){
            this.#lista.forEach(element => {
                if(element.clave == clave){
                    resultado = element.valor
                }
            })          
            }
        return resultado
        }


    add(clave, valor){

        this.#lista.push({clave: clave, valor: valor})
    }

}
