function looplike(n){
  

  setTimeout(() => {
      const bnext = document.querySelector('div.JPgJ_ > div.l8mY4.feth3 > button');
      const bLike = document.querySelector('body > div._2dDPU.QPGbb.CkGkG > div._32yJO > div > article > div > div.HP0qD > div > div > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button');
    if(bLike){

      bLike.click();
      if(bnext){
      bnext.click(); 
      }
      else{
        console.log('fim')
        return
      }
    }
    else{console.log('clique em um post')}
      if(n == 1){return}
      looplike(n-1);
  },8000) //8 segundos)

};




chrome.runtime.onMessage.addListener(curta);
  
function curta(request, sender, sendResponse){
  let msglike = request
  // Verifica se o request veio do botão esperado, se sim seque com a funçao.
  if(Object.keys(msglike) != 'NumberL'){return}
    num = parseInt(msglike.NumberL)

    
    
    looplike(num);  
 }





