export default class Pessoa {

    _id;  
    _nome;   
    _salario;   

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    get salario() {
        return this._salario;
    }

    set salario(value) {
        this._salario = value;
    }

    constructor(id, nome, salario) {
        this.id = id;
        this.nome = nome;
        this.salario = salario;
    }
    
}