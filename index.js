let newCard = 0
let cardArray = []
let sum = 0

let hasBlackjack = false
let isAlive = false

let message= ""
let messageEl = document.getElementById("message-El")

let sumEl = document.querySelector("#sum-El")
let cardsEl = document.getElementById("cards-El")


let playerEl = document.querySelector("#player-El")
let player = {
    name: "per1" ,
     credits : 165
}
playerEl.textContent = player.name + ": $" + player.credits


// logic building

function StartGame(){
    isAlive = true
    let firstcard = randomCard()
    let secondcard = randomCard()
    cardArray = [firstcard, secondcard]
    sum = firstcard + secondcard
    RenderGame()
}


function randomCard(){
    let random = Math.floor(Math.random()*13 + 1)
    if(random ==1 ){
        return 11
    }
    else if( random >10){
        return 10
    }
    return random
}

function NewCard(){
    if(hasBlackjack === false && isAlive === true){
        newCard = randomCard()
        cardArray.push(newCard)
        sum += newCard
        RenderGame()
    }
}


function RenderGame(){
    if (sum <= 20){
        message = "Do you want to draw a card ?"
    } 
    else if ( sum === 21){
        message = "WoHoo !!! You got Blackjack."
        hasBlackjack = true
    }
    else{
        message = "You're out of game ."
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum

    cardsEl.innerText = `Cards: ${cardArray.join(', ')}`
}
