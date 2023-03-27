class PessoaJuridica extends Pessoa{

    private _cnpj: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string){
        nome = `${nome} - Jurídica`;
        super(nome, idade, dataNascimento);
        this._cnpj = cnpj;
    }

    get cnpj(){
        return this._cnpj;
    }

    set nome(novoNome: string){
        super.nome = `${novoNome} - Jurídica`;
    }
}