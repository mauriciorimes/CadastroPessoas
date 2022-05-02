import Pessoa from "./Pessoa.js";



export default class PessoaController {    

    _lstPessoa = [];

    _elTbPessoa;

    get elTbPessoa() {
        return this._elTbPessoa;
    }
    set elTbPessoa(value) {
        this._elTbPessoa = value;
    }

    get _lstPessoa() {
        return this._lstPessoa;
    }
    set _lstPessoa(value) {
        this._lstPessoa = value;
    }

    adicionaPessoa(pessoa) {
        this._lstPessoa.push(pessoa);
       // this._atualizaTela();
    }    

    

}
