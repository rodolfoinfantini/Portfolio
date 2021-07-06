const delay = 5000
const container = document.querySelector("div.container")
setTimeout(function(){
    container.style.display = "flex"
}, delay)

document.onscroll = (e) => {
    let y = window.pageYOffset
    if(y > 200){
        document.querySelector("div.content.chess div.inner").style.animation = "floatfromright 2s ease forwards"
    }if(y > 1190){
        document.querySelector("div.content.snake div.inner").style.animation = "floatfromright 2s ease forwards"
    }if(y > 2250){
        document.querySelector("div.content.tictactoe div.inner").style.animation = "floatfromright 2s ease forwards"
    }
}