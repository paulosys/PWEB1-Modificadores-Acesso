class PessoaFisica extends Pessoa{

    private _cpf: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cpf:string){
        nome = `${nome} - Física`;
        super(nome, idade, dataNascimento);
        this._cpf = cpf;
    }

    get cpf(){
        return this._cpf;
    }

    set nome(novoNome: string){
        super.nome = `${novoNome} - Física`;
    }
}