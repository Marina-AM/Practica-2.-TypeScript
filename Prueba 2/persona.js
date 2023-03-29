"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
class persona {
    constructor(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, genero, direccion = [], mail = [], telefono = [], notas) {
        this._direccion = [];
        this._mail = [];
        this._telefono = [];
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._genero = genero;
        this._direccion = direccion = [];
        this._mail = mail = [];
        this._telefono = telefono = [];
        this._notas = notas;
    }
    //SET
    setNombre(nombre) {
        this._nombre = nombre;
    }
    setApellidos(apellidos) {
        this._apellidos = apellidos;
    }
    setEdad(edad) {
        this._edad = edad;
    }
    setDni(dni) {
        this._dni = dni;
    }
    setCumpleanos(cumpleanos) {
        this._cumpleanos = cumpleanos;
    }
    setColorFavorito(colorFavorito) {
        this._colorFavorito = colorFavorito;
    }
    setGenero(genero) {
        this._genero = genero;
    }
    //GET
    getNombre() {
        return this._nombre;
    }
    getApellidos() {
        return this._apellidos;
    }
    getEdad() {
        return this._edad;
    }
    getDni() {
        return this._dni;
    }
    getCumpleaños() {
        return this._cumpleanos;
    }
    getColorFavorito() {
        return this._colorFavorito;
    }
    getGenero() {
        return this._genero;
    }
    getDireccion() {
        return this._direccion;
    }
    getMail() {
        return this._mail;
    }
    getTelefono() {
        return this._telefono;
    }
    getNotas() {
        return this._notas;
    }
    //Listas
    addDireccion(direccion) {
        this._direccion.push(direccion);
    }
    addMail(mail) {
        this._mail.push(mail);
    }
    addTelefono(telefono) {
        this._telefono.push(telefono);
    }
    //Por indice
    removeDireccionByIndex(index) {
        if (index >= 0 && index < this._direccion.length) {
            this._direccion.splice(index, 1);
        }
    }
    removeMailByIndex(index) {
        if (index >= 0 && index < this._mail.length) {
            this._mail.splice(index, 1);
        }
    }
    removeTelefonoByIndex(index) {
        if (index >= 0 && index < this._telefono.length) {
            this._telefono.splice(index, 1);
        }
    }
    removeNotaByIndex(index) {
        if (index >= 0 && index < this._notas.length) {
            this._notas.slice(index, 1);
        }
    }
    //Por elemento
    removeDireccion(direccion) {
        const index = this._direccion.indexOf(direccion);
        if (index !== -1) {
            this._direccion.splice(index, 1);
        }
    }
    removeMail(mail) {
        const index = this._mail.indexOf(mail);
        if (index !== -1) {
            this._mail.splice(index, 1);
        }
    }
    removeTelefono(telefono) {
        const index = this._telefono.indexOf(telefono);
        if (index !== -1) {
            this._telefono.splice(index, 1);
        }
    }
    removeNota(nota) {
        const index = this._notas.indexOf(nota);
        if (index !== -1) {
            this._notas.slice(index, 1);
        }
    }
    // Método toString()
    toString() {
        return `Nombre: ${this._nombre}, Apellido: ${this._apellidos}, Edad: ${this._edad}, DNI: ${this._dni}, Cumpleaños: ${this._cumpleanos}, 
    Color favorito: ${this._colorFavorito}, Sexo: ${this._genero}, Direcciones: ${this._direccion}, Mails: ${this._mail}, 
    Teléfonos: ${this._telefono}, Notas: ${this._notas}`;
    }
}
exports.persona = persona;
