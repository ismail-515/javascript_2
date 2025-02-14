let button = document.getElementsByClassName("btn again")[0]
let highscore2 = document.getElementsByClassName("highscore")[0]
let btncheck = document.getElementsByClassName("btn check")[0]
let messagee= document.querySelector(".message")
let df=document.querySelector(".number")
const guess = document.querySelector(".guess")
const dd = document.getElementsByTagName("span")[0]
let score=20
const body = document.body
const secretNumber = Math.floor(Math.random() * 20)
btncheck.addEventListener("click", () => {
    
    do {
        if (guess.value < secretNumber) {
            messagee.innerText = "Trop pétit"
            dd.textContent = score --
        } else if (guess.value > secretNumber) {
            messagee.innerText = "Trop grand"
            dd.textContent = score --
        }
        else if (guess.value == secretNumber){
            messagee.innerText = "Nombre exacte"
            body.style.backgroundColor = "green"
            df.textContent=guess.value
            highscore2.textContent = dd.textContent
            score=20
        }

        

    } while (condition);
})
button.addEventListener("click", () => {
    messagee.innerText = "Star guessing..."
    body.style.backgroundColor = " black"
    df.textContent="?"
    dd.textContent=20

})