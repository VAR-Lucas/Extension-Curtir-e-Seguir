document.addEventListener("DOMContentLoaded", function(){
    const botaolike = document.querySelector('#toLike');
    const inputlike = document.querySelector('#ilike')

    botaolike.addEventListener('click', enviarLike)
    function enviarLike(tabs){
        msglike = {
            'NumberL': inputlike.value
        }
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, msglike)})
    }

    const botaofollow = document.querySelector('#toFollow');
    const inputfollow = document.querySelector('#ifollow')

    botaofollow.addEventListener('click', enviarFollow)
    function enviarFollow(tabs){
        msgfollow = {
            'NumberF': inputfollow.value
        }
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, msgfollow)})
    }
})