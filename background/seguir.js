chrome.runtime.onMessage.addListener(siga);
  
function siga(request, sender, sendResponse){
    let msgfollow = request
    
    // Verifica se o request veio do botão esperado, se sim seque com a funçao.
    if(Object.keys(msgfollow) != 'NumberF'){return} 
    let num = parseInt(msgfollow.NumberF)
    
    follow(num)
}


function follow(n)
{
    // Seleciona todos os botões 'sequir' e 'sequindo'
    let botao = document.querySelectorAll('.L3NKy');

    // variavel para selecionar um botão individual.
    let numbotao = 0


    let contator = setInterval(()=>{
        let classesDobotao = botao[numbotao].classList
        // verifica se o o usuario não é sequido, então clica em sequir. 
        if(classesDobotao[2] == 'y3zKF')
        {
            
        console.log('pegou porra')
        botao[numbotao].click()
        numbotao = numbotao + 1


            if(numbotao == n){clearInterval(contator)}
            else if(numbotao == botao.length){clearInterval(contator)}
        }
        // Se for um usuario que já é seguido ignora e seque para o proximo.
        else{
            if(numbotao == botao.length){clearInterval(contator)}
            numbotao = numbotao + 1
            n = n + 1
        }
    },10000)


}



//     botao.forEach((v, i) =>
//     {
//     setTimeout(()=>
//     {
//         if(!v.classList.contains('.y3zKF'))
//         {
//             v.click();
//             contador++;
//             console.log('Lucas já seguiu '+ contador +' pessoas')

//         } else{
//             console.log('Você já segue esse usuario')
//               }
//     }, i*10000 )
//     });

// };