"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail = void 0;
class mail {
    constructor(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    //SET
    setTipo(tipo) {
        this._tipo = tipo;
    }
    setdireccion(direccion) {
        this._direccion = direccion;
    }
    //GET
    getTipo() {
        return this._tipo;
    }
    getDireccion() {
        return this._direccion;
    }
    toString() {
        return `Mail [ Tipo: ${this._tipo}, Dirección: ${this._direccion} ]`;
    }
}
exports.mail = mail;
