"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
class Agenda {
    constructor(persona) {
        this._persona = [];
        this._persona = persona;
    }
    //Persona
    setPersona(persona) {
        this._persona = persona;
    }
    getPersona() {
        return this._persona;
    }
    //DNI
    getPersonaByDNI(dni) {
        return this._persona.find(persona => persona.getDni() === dni);
    }
    setPersonaByDNI(dni, persona) {
        const indice = this._persona.findIndex(persona => persona.getDni() === dni);
        if (indice !== -1) {
            // Actualizar datos
            this._persona[indice] = persona;
        }
        else {
            console.log(`No se encontró ninguna persona con DNI: ${dni}`);
        }
    }
    toString() {
        let str = 'Lista de personas:\n';
        for (let persona of this._persona) {
            str = str + persona.toString();
        }
        return str;
    }
}
exports.Agenda = Agenda;
