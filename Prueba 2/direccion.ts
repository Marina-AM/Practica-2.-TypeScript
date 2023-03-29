export class direccion {
    private _calle: string;
    private _numero: number;
    private _piso: number;
    private _letra: string;
    private _codigoPostal: number;
    private _poblacion: string;
    private _provincia: string;
    
    constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal: number, poblacion:  string, provincia: string){
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia
    }


    //SET
    public setCalle(calle: string) {
        this._calle = calle;
    }
    public setNumero(numero: number) {
        this._numero = numero;
    }
    public setPiso(piso: number) {
        this._piso = piso;
    }
    public setLetra(letra: string) {
        this._letra = letra;
    }
    public setCodigoPostal(codigoPostal: number) {
        this._codigoPostal = codigoPostal;
    }
    public setPoblacion(poblacion: string) {
        this._poblacion = poblacion;
    }
    public setProvincia(provincia: string) {
        this._provincia = provincia;
    }

    //GET
    public getCalle(): string {
        return this._calle;
    }
    public getNumero(): number {
        return this._numero;
    }
    public getPiso(): number {
        return this._piso;
    }
    public getLetra(): string {
        return this._letra;
    }
    public getCodigoPostal(): number {
        return this._codigoPostal;
    }
    public getPoblacion(): string {
        return this._poblacion;
    }
    public getProvincia(): string {
        return this._provincia;
    }
    
    public toString(): string {
        return "Direccion [ calle: " + this.getCalle() + ", numero: " + this.getNumero() + 
        ", piso: " + this.getPiso() + ", letra: " + this.getLetra() + ", codigo postal: " + this.getCodigoPostal() + 
        ", poblacion: " + this.getPoblacion + ", provincia: ", this.getProvincia() + " ]"
    }
}