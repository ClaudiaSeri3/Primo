//N°1
function contaFinoA(n){
    for(let i=0;i<n;i++){
        console.log(i);
    }
}

//N°2
function sommaNumeri(n) {
    let somma = 0;
    let i = 1;

    while (i <= n) {
        somma += i;
        i++;
    }
    return somma;
}

//N°3
function stampaPari(n) {
    let i = 2;
    do {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    } while (i <= n);
}

//N°4 
//saluta 
function saluta(nome){
    return "Ciao,"+nome;
}

//N°5
//moltiplicazione
function moltiplica(a,b){
    return a*b
}

//N°6
function squadra (nome){
    return "Forza, "+nome
}

module.exports = {
    contaFinoA,
    sommaNumeri,
    stampaPari,
    saluta,
    moltiplica,
    squadra,

}



