var Jogador, Vencedor = null;

var JogadorSelecionado = document.getElementById( elementId= 'Jogador-selecionado');
var VencedorSelecionado = document.getElementById( elementId= 'Vencedor-selecionado');
var Quadrados = document.getElementsByClassName(classname= 'Quadrado');

mudarJogador( valor= 'X');

function escolherquadrado(id){

    if (Vencedor !== null){
        return;
    }
    
    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = Jogador;
    quadrado.style.color = "#000";

    if (Jogador === 'X'){
        Jogador = 'O';
     } else{
         Jogador = 'X';
     }

    mudarJogador(Jogador);
    ChecarVencedor();
}

function mudarJogador(valor){
    Jogador=valor;
    JogadorSelecionado.innerHTML = Jogador;
}

function ChecarVencedor(){
    var quadrado1 = document.getElementById(elementId= 1);
    var quadrado2 = document.getElementById(elementId= 2);
    var quadrado3 = document.getElementById(elementId= 3);
    var quadrado4 = document.getElementById(elementId= 4);
    var quadrado5 = document.getElementById(elementId= 5);
    var quadrado6 = document.getElementById(elementId= 6);
    var quadrado7 = document.getElementById(elementId= 7);
    var quadrado8 = document.getElementById(elementId= 8);
    var quadrado9 = document.getElementById(elementId= 9);

    if(ChecarSequencia(quadrado1, quadrado2, quadrado3)){
        mudacorQuadrado (quadrado1, quadrado2, quadrado3);
        MudaVencedor(quadrado1);
        return;

    }

    if(ChecarSequencia(quadrado4, quadrado5, quadrado6)){
        mudacorQuadrado (quadrado4, quadrado5, quadrado6);
        MudaVencedor(quadrado4);
        return;

    }

    if(ChecarSequencia(quadrado7, quadrado8, quadrado9)){
        mudacorQuadrado (quadrado7, quadrado8, quadrado9);
        MudaVencedor(quadrado7);
        return;

    }

    if(ChecarSequencia(quadrado1, quadrado4, quadrado7)){
        mudacorQuadrado (quadrado1, quadrado4, quadrado7);
        MudaVencedor(quadrado1);
        return;

    }

    if(ChecarSequencia(quadrado2, quadrado5, quadrado8)){
        mudacorQuadrado (quadrado2, quadrado5, quadrado8);
        MudaVencedor(quadrado2);
        return;

    }

    if(ChecarSequencia(quadrado3, quadrado6, quadrado9)){
        mudacorQuadrado (quadrado3, quadrado6, quadrado9);
        MudaVencedor(quadrado3);
        return;
    }

    if(ChecarSequencia(quadrado1, quadrado5, quadrado9)){
        mudacorQuadrado (quadrado1, quadrado5, quadrado9);
        MudaVencedor(quadrado1);
        return;
    }

    if(ChecarSequencia(quadrado3, quadrado5, quadrado7)){
        mudacorQuadrado (quadrado3, quadrado5, quadrado7);
        MudaVencedor(quadrado3);
    }
}

function mudacorQuadrado(quadrado1, quadrado2, quadrado3){
        quadrado1.style.background = '#0f0';
        quadrado2.style.background = '#0f0';
        quadrado3.style.background = '#0f0';
    }


function MudaVencedor(quadrado){
    Vencedor = quadrado.innerHTML;
    VencedorSelecionado = Vencedor;

}

function ChecarSequencia (quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;
    }

    return eigual;
}

function Reiniciar()

{
    Vencedor = null;
    VencedorSelecionado,innerHTML = '';

    for ( var i=1; i <= 9; i++ ){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador(valor= 'X')
}

