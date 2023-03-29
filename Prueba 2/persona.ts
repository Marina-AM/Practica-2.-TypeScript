import {direccion} from "./direccion"
import {telefono} from "./telefono"
import {mail} from "./mail"

export class persona { 
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: number;
    private _cumpleanos: Date; 
    private _colorFavorito: string;
    private _genero: string;
    private _direccion: direccion[] = [];
    private _mail: mail[] = [];
    private _telefono: telefono[] = [];
    private _notas: string;

    constructor(nombre:string, apellidos:string, edad:number, dni:number, cumpleanos:Date, colorFavorito:string, genero:string, 
    direccion:direccion[] = [], mail:mail[] = [], telefono:telefono[] = [], notas:string){
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
    public setNombre(nombre: string) {
        this._nombre = nombre;
    }
    public setApellidos(apellidos: string) {
        this._apellidos = apellidos;
    }
    public setEdad(edad: number) {
        this._edad = edad;
    }
    public setDni(dni: number) {
        this._dni = dni;
    }
    public setCumpleanos(cumpleanos: Date) {
        this._cumpleanos = cumpleanos;
    }
    public setColorFavorito(colorFavorito: string) {
        this._colorFavorito = colorFavorito;
    }
    public setGenero(genero: string) {
        this._genero = genero;
    }

    //GET
    public getNombre(): string {
        return this._nombre;
    }
    public getApellidos(): string{
        return this._apellidos;
    }
    public getEdad(): number {
        return this._edad;
    }
    public getDni(): number {
        return this._dni;
    }
    public getCumpleaños(): Date {
        return this._cumpleanos;
    }
    public getColorFavorito(): string {
        return this._colorFavorito;
    }
    public getGenero(): string {
        return this._genero;
    }
    public getDireccion(): direccion[] {
        return this._direccion;
    }
    public getMail(): mail[] {
        return this._mail;
    }
    public getTelefono(): telefono[] {
        return this._telefono;
    }
    public getNotas(): string {
        return this._notas;
    }

    //Listas
    addDireccion(direccion: direccion): void{
        this._direccion.push(direccion);
    }
    addMail(mail: mail): void{
        this._mail.push(mail);
    }
    addTelefono(telefono: telefono): void{
        this._telefono.push(telefono);
    }

    //Por indice
    removeDireccionByIndex(index: number): void {
        if (index >= 0 && index < this._direccion.length) {
          this._direccion.splice(index, 1);
        }
    }
    
    removeMailByIndex(index: number): void {
        if (index >= 0 && index < this._mail.length) {
          this._mail.splice(index, 1);
        }
    }
    
    removeTelefonoByIndex(index: number): void {
        if (index >= 0 && index < this._telefono.length) {
          this._telefono.splice(index, 1);
        }
    }
    
    removeNotaByIndex(index: number): void {
        if (index >= 0 && index < this._notas.length) {
          this._notas.slice(index, 1);
        }
    }
    
      //Por elemento
    removeDireccion(direccion: direccion): void {
        const index = this._direccion.indexOf(direccion);
        if (index !== -1) {
          this._direccion.splice(index, 1);
        }
    }
    
    removeMail(mail: mail): void {
        const index = this._mail.indexOf(mail);
        if (index !== -1) {
          this._mail.splice(index, 1);
        }
    }
    
    removeTelefono(telefono: telefono): void {
        const index = this._telefono.indexOf(telefono);
        if (index !== -1) {
          this._telefono.splice(index, 1);
        }
    }
    
    removeNota(nota: string): void {
        const index = this._notas.indexOf(nota);
        if (index !== -1) {
          this._notas.slice(index, 1);
        }
    }


      // Método toString()
    public toString(): string {
    return `Nombre: ${this._nombre}, Apellido: ${this._apellidos}, Edad: ${this._edad}, DNI: ${this._dni}, Cumpleaños: ${this._cumpleanos}, 
    Color favorito: ${this._colorFavorito}, Sexo: ${this._genero}, Direcciones: ${this._direccion}, Mails: ${this._mail}, 
    Teléfonos: ${this._telefono}, Notas: ${this._notas}`;
    }
}