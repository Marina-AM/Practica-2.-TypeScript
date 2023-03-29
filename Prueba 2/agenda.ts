import {persona} from "./persona";

export class Agenda {
    private _persona: persona[] = [];

    constructor(persona: persona[]) {
        this._persona = persona
    }

    //Persona
    public setPersona(persona: persona[]) {
        this._persona = persona;
    }
    public getPersona(): persona[] {
        return this._persona;
    }

    //DNI
    public getPersonaByDNI(dni: number) {
        return this._persona.find(persona => persona.getDni() === dni);
    }

    public setPersonaByDNI(dni: number, persona: persona) {
        const indice = this._persona.findIndex(persona => persona.getDni() === dni);

        if (indice !== -1) {
            // Actualizar datos
            this._persona[indice] = persona
        } else {
            console.log(`No se encontró ninguna persona con DNI: ${dni}`);
        }
    }

    public toString() {
        let str = 'Lista de personas:\n';
        
        for (let persona of this._persona) {
            str = str + persona.toString()
        }

        return str;
    }
}