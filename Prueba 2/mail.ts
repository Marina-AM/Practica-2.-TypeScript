export class mail {
    private _tipo: string;
    private _direccion: string;

    constructor(tipo: string, direccion: string){
        this._tipo = tipo;
        this._direccion = direccion;
    }

    //SET
    public setTipo(tipo: string): void {
        this._tipo = tipo;
    }
    public setDireccion(direccion: string): void {
        this._direccion = direccion;
    }

    //GET
    public getTipo(): string {
        return this._tipo;
    }
    public getDireccion(): string {
        return this._direccion;
    }

    public toString(): string {
        return `Mail [ Tipo: ${this._tipo}, Dirección: ${this._direccion} ]`;
    }

}