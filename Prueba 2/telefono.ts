export class telefono {
    private _tipo: string;
    private _numero: number;

    constructor(tipo:string, numero:number){
        this._tipo = tipo;
        this._numero = numero;
    }

    //SET
    public setTipo(tipo: string): void {
        this._tipo = tipo;
    }
    public setNumero(numero: number): void {
        this._numero = numero;
    }

    //GET
    public getTipo(): string {
        return this._tipo;
    }
    public getNumero(): number {
        return this._numero;
    }

    public toString(): string {
        return `Telefono [ Tipo: ${this._tipo}, Número: ${this._numero} ]`;
    }

}