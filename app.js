//Teste de conflito de commit.
//1 - Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

//2 - Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let listaLinguagensDeProgramação = [];
criarLista();

//3 - Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

//4 - Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

//5 - Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

//6 - Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

function criarLista(){
    listaLinguagensDeProgramação = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
}

function clique_CriarLista(){
    criarLista();
}

function clique_AdicionarElemento(){
    let novoElemento = prompt('Qual o novo elemento da lista?');
    listaLinguagensDeProgramação.push(novoElemento);
    alert (`A lista está com ${listaLinguagensDeProgramação.length} elementos.`);
    console.log(listaLinguagensDeProgramação);
}

function clique_RemoverUltimoElemento(){
    listaLinguagensDeProgramação.pop();
    alert (`A lista está com ${listaLinguagensDeProgramação.length} elementos.`);
    console.log(listaLinguagensDeProgramação);
}

function clique_ElementoDaLista(){
    let Num_Indice = document.querySelector('input').value;
    
    if (Num_Indice <= listaLinguagensDeProgramação.length){
        alert (`Elemento ${Num_Indice} da lista: ${listaLinguagensDeProgramação[Num_Indice-1]}.`);
    } else{
        alert('A lista não possui essa quantidade de elementos.')
    }

    Num_Indice = document.querySelector('input');
    Num_Indice.value = '';

    
}
