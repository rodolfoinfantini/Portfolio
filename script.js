let autoStart = false
let toggleMenu = document.querySelector(".open")
let menu = document.querySelector(".menu")
let menuChilds = document.querySelectorAll(".menu nav ul li a")
const delay = 4500
const container = document.querySelector("div.container")
let stop = false
console.log("started")

if(autoStart){
    delay = 0
}

setTimeout(function(){
    container.style.display = "flex"
}, delay)

toggleMenu.onclick = function(){
    menu.classList.toggle("show")
}

for(let i = 0; i < menuChilds.length; i++){
    menuChilds[i].onclick = function(){
        menu.classList.remove("show")
    }
}

document.onscroll = () => {
    let y = window.pageYOffset
    updateProgressBar()
    /* console.log(y) */
    if(y < 70){
        document.querySelector("a.top").style = ""
    }else{
        document.querySelector("a.top").style.display = "block"
    }
    
    
    
    /* if(y > 200){
        document.querySelector("div.content.chess div.inner").style.animation = "floatfromright 2s ease forwards"
    }if(y > 1190){
        document.querySelector("div.content.snake div.inner").style.animation = "floatfromright 2s ease forwards"
    }if(y > 2250){
        document.querySelector("div.content.tictactoe div.inner").style.animation = "floatfromright 2s ease forwards"
        stop = true
    } */
}

function updateProgressBar(){
    var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;
    document.querySelector("progress.scrollprogress").value = window.pageYOffset
    document.querySelector("progress.scrollprogress").max = limit
}

updateProgressBar()

window.onresize = () => {
    showImgs()
    appHeight()
}

showImgs()

function showImgs(){
    if(document.body.offsetWidth < 1260 || window.innerHeight < 380){
        document.querySelector(".achess").style.display = "flex"
        document.querySelector(".asnake").style.display = "flex"
        document.querySelector(".content.chess iframe").style.display = "none"
        document.querySelector(".content.snake iframe").style.display = "none"
    }else{
        document.querySelector(".achess").style = ""
        document.querySelector(".asnake").style = ""
        document.querySelector(".content.chess iframe").style.display = "flex"
        document.querySelector(".content.snake iframe").style.display = "flex"
    }
}


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.content.chess .inner').style.animation = "floatfromright 2s ease forwards"
        }
    })
})
observer.observe(document.querySelector('.content.chess .inner p'))

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.content.snake .inner').style.animation = "floatfromright 2s ease forwards"
        }
    })
})
observer2.observe(document.querySelector('.content.snake .inner p'))

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.content.tictactoe .inner').style.animation = "floatfromright 2s ease forwards"
        }
    })
})
observer3.observe(document.querySelector('.content.tictactoe .inner p'))

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.content.calc .inner').style.animation = "floatfromright 2s ease forwards"
        }
    })
})
observer4.observe(document.querySelector('.content.calc .inner p'))

const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.content.player .inner').style.animation = "floatfromright 2s ease forwards"
        }
    })
})
observer5.observe(document.querySelector('.content.player .inner p'))

const observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.content.about .inner').style.animation = "floatfromright 2s ease forwards"
        }
    })
})
observer6.observe(document.querySelector('.content.about .inner p'))


function appHeight() {
    document.documentElement.style.setProperty('--vh', (window.innerHeight*.01) + 'px')
}

appHeight()