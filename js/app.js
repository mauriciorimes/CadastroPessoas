import Pessoa from "./Pessoa.js";
import PessoaController from "./PessoaController.js";

//const btnExcluir = document.querySelector("#btnExcluir");

const btnIncluir = document.querySelector("#btnIncluir");

const lblTotal = document.querySelector("#lblTotal");

const inpNome = document.querySelector("#inpNome");
const inpSalario = document.querySelector("#inpSalario");

const ctrPessoa = new PessoaController();

ctrPessoa._elTbPessoa = document.querySelector("#tbPessoa");

let clear = function() {    
    inpNome.value = ``;
    inpSalario.value = ``;
}

btnIncluir.addEventListener("click", (e) => {
    let id =  ctrPessoa._lstPessoa.length;

    let pessoa = new Pessoa( id,inpNome.value, inpSalario.value);
    ctrPessoa.adicionaPessoa(pessoa);    
    clear();
    inpNome.focus();
    _atualizaTela()
});

function attbtndel(){

    //let btn = document.querySelectorAll(".btn-danger")
    ctrPessoa._lstPessoa.forEach(element => {
        if(document.getElementById("btnExcluir"+element.id)){

            document.getElementById("btnExcluir"+element.id).addEventListener("click", function () {
                console.log( ctrPessoa._lstPessoa.splice(ctrPessoa._lstPessoa.indexOf(element), 1));
                 _atualizaTela();
         
               });
        }
        
    });
}

function _atualizaTela() {
    let bodyTb = ctrPessoa.elTbPessoa.querySelector("tbody");
    let linhas = ``;
    ctrPessoa._lstPessoa.forEach(element => {
        linhas +=   `<tr>
                        <td>${element.id} </td>
                        <td>${element.nome} </td>
                        <td>${element.salario} </td>
                        <td><button class="btn btn-danger" id="btnExcluir${element.id}">Excluir</button></td>
                    </tr>`;

    });

    bodyTb.innerHTML = linhas;
    attbtndel();
    lblTotal.innerHTML = `Salario total: ${SalarioTotal()}`;
  
}

let pesquisar = document.getElementById("btnPesquisar");
let limpar = document.getElementById("btnLimparPesquisar");
let importar = document.getElementById("btnImportar");


pesquisar.addEventListener("click",  () => {
   let termoPesquisado = document.getElementById("inpPesquisar").value;

    let pessoasFiltradas = ctrPessoa._lstPessoa.filter(
        (pessoa) => pessoa.nome.toLowerCase().includes(termoPesquisado.toLowerCase())
    );

    let bodyTb = ctrPessoa.elTbPessoa.querySelector("tbody");
    let linhas = ``;

    pessoasFiltradas.forEach(element => {
        linhas +=   `<tr>
                        <td>${element.id} </td>
                        <td>${element.nome} </td>
                        <td>${element.salario} </td>
                        <td><button class="btn btn-danger" id="btnExcluir${element.id}">Excluir</button></td>
                    </tr>`;
    });

    bodyTb.innerHTML = linhas;

    attbtndel();

})


limpar.addEventListener("click",  () => {
    document.getElementById("inpPesquisar").value = "";
    _atualizaTela();  
 });

 importar.addEventListener("click", function () {

    const ImportsExternos = [
      { id: ctrPessoa._lstPessoa.length, nome: "Mauricio Penha", salario: 5000 },
      { id: ctrPessoa._lstPessoa.length + 1, nome: "Vladimir Putin", salario: 0.5 },
      { id: ctrPessoa._lstPessoa.length + 2, nome: "Caruso Albukerker", salario: 3500 },
    ];  
    ImportsExternos.map((importPessoas) => {
      importPessoas.id = ctrPessoa._lstPessoa.length;
      ctrPessoa._lstPessoa.push(importPessoas);
    });  
    _atualizaTela();
  });
  


let delIntervalo = document.getElementById("botaoDeletarIntervalo");

delIntervalo.addEventListener("click", () => {
    let delIntervaloIni = document.getElementById("inputDeleteIntervaloInicio").value;
    let delIntervaloFin = document.getElementById("inputDeleteIntervaloFinal").value;
    console.log("teste")

    ctrPessoa._lstPessoa.splice(Number(delIntervaloIni), Number(delIntervaloFin));
    _atualizaTela();
});

// colocar na tela
function SalarioTotal() {
    var items = ctrPessoa._lstPessoa.reduce((arr, lstPessoa) => {
      arr.push(lstPessoa.salario);
      arr.reduce;
      return arr;
    }, []);

    return items.reduce((a, b) => {
      var soma = parseFloat(a) + parseFloat(b);
      return soma;
    }, 0);
  }

  

  

  




