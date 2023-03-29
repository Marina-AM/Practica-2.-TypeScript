"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telefono = void 0;
class telefono {
    constructor(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    //SET
    setTipo(tipo) {
        this._tipo = tipo;
    }
    setNumero(numero) {
        this._numero = numero;
    }
    //GET
    getTipo() {
        return this._tipo;
    }
    getNumero() {
        return this._numero;
    }
    toString() {
        return `Telefono [ Tipo: ${this._tipo}, Número: ${this._numero} ]`;
    }
}
exports.telefono = telefono;
