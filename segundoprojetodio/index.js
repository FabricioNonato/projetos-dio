function calcularSaldo(vitorias,derrotas){
    let saldo = vitorias-derrotas
    return saldo
}
function calRank(saldo){
    if(saldo < 10){
        return "ferro"
    }else if(saldo >= 11 && saldo <=20){
        return "bronze"
    }else if(saldo >= 21 && saldo <=50){
        return "prata"
    }else if(saldo >= 51 && saldo <=80){
        return "ouro"
    }else if(saldo >= 81 && saldo <=90){
        return "diamante"
    }else if(saldo >= 91 && saldo <=100){
        return "lendario"
    }else {
        return "imortal"
    }
}
let vitorias=12
let derrotas=3

let saldoRankeadas = calcularSaldo(vitorias,derrotas)
let rank = calRank(saldoRankeadas)
console.log("O herói tem o saldo de: "  + saldoRankeadas + "e está no nivel: " + rank)