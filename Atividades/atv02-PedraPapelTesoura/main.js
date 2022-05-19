var pontUsuario = 0
var pontMaquina = 0


function validarVencedor(){
 
    var usuario = parseInt(prompt("Insira um número de 1 a 3: 1-PEDRA, 2-PAPEL, 3-TESOURA"));
    var maquina = Math.floor(Math.random() * 3 + 1);

    console.log(usuario)
    console.log(maquina)

    if( usuario == 1 || usuario == 2 || usuario == 3){

        if(usuario != maquina){
            if(usuario === 3 && maquina === 2 || 
                usuario === 2 && maquina === 1 || 
                usuario === 1 && maquina === 3){

                console.log('Ponto para o Usuario!')
                pontUsuario += 1
                console.log(pontUsuario + ' x ' + pontMaquina)
                
            } else {
                console.log('Ponto Para Maquina!')
                pontMaquina += 1
                console.log(pontUsuario + ' x ' + pontMaquina) 
            }
        } else {
            console.log('Empate! Ninguem Pontua!')
            console.log(pontUsuario + ' x ' + pontMaquina)
        }
    } else {

        alert('Valor Incorreto Selecione: 1-PEDRA, 2-PAPEL, 3-TESOURA')
    }
}


function comecarJogo(){
   do {
        if(pontMaquina == 3 || pontUsuario == 3){
            break
        }
        validarVencedor()
   } while (confirm('Deseja continuar?'));

   console.log('========================')

   if(pontUsuario > pontMaquina ){
       console.log(' Resultado final: Usuario Venceu')
       alert('Resultado final: USUARIO Venceu - ' + pontUsuario + ' x ' + pontMaquina )
   } else if(pontUsuario < pontMaquina) {
       console.log('Resultado Final: MAQUINA Venceu')
       alert('Resultado final: Maquina Venceu - ' + pontUsuario + ' x ' + pontMaquina )
   } else {
       console.log('Resultado Final: Partida Empatada')
       alert('Resultado final: Partida Empatada - ' + pontUsuario + ' x ' + pontMaquina  )
   }

}

if(confirm('Bora Jogar?')){
    comecarJogo()
}


