let atividade_da_conta = 2 //em anos
let valor = 30000

if (atividade_da_conta >= 3){
    if(valor >= 10000){
        console.log("trasferencia concluida")
    }else{ 
        console.log("falta dinheiro para a transferencia ")
    }
}else{
    console.log('conta suspeita, pagamento não efetuado')
}