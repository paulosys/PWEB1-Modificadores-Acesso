class Pessoa {
    protected _nome: string;
    private _idade: number;
    private _dataNascimento: Date;

    constructor(nome: string, idade: number, dataNascimento: Date){
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get idade(): number {
        return this._idade;
    }
    
    public set idade(value: number) {
        this._idade = value;
    }

    public get dataNascimento(): Date {
        return this._dataNascimento;
    }

    public set dataNascimento(value: Date) {
        this._dataNascimento = value;
    }

}