let humChoiceText = document.getElementById("humanText")
let compChoiceText = document.getElementById("compText")
let compScore = 0
let humanScore = 0
let humanscoreText = document.getElementById("humanScoreText")
let compscoreText = document.getElementById("compScoreText")


function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"]
    let rand = Math.floor(Math.random()*3)
    if(rand == 0){
        return "Rock"
    }else if(rand == "1"){
        return "Paper"
    }else{
        return"Scissor"    
    }
}
let compChoice = getComputerChoice()
console.log(compChoice)

function getHumanChoice(){
    let humanRock = document.getElementById("0")
    humanRock.addEventListener("click", (e) => {

    })

}
let hChoice = saveHumanChoice();
function saveHumanChoice(humanChoice){
    return humanChoice
}

saveHumanChoice("a")

console.log(hChoice)

// let humanRock = document.getElementById("0")
// humanRock.addEventListener("click", (e)=> {
//     let text = e.target.innerText
//     returnClickResult(text.toLowerCase())
//     removeListener(humanPaper, humanScissor, returnClickResult)
//     humChoiceText.innerHTML = "Rock"
//     compChoiceText.innerHTML = compChoice
//     updateScore()
// }, {once:true})

// let humanPaper = document.getElementById("1")
// humanPaper.addEventListener("click", (e)=> {
//     let text = e.target.innerText
//     returnClickResult(text.toLowerCase()) 
//     removeListener(humanRock, humanScissor, returnClickResult)
//     humChoiceText.innerHTML = "Paper"  
//     compChoiceText.innerHTML = compChoice

// }, {once:true})

// let humanScissor = document.getElementById("2")
// humanScissor.addEventListener("click", (e)=> {
//     let text = e.target.innerText
//     returnClickResult(text.toLowerCase())  
//     removeListener(humanRock, humanPaper, returnClickResult)
//     humChoiceText.innerHTML = "Scissor"  
//     compChoiceText.innerHTML = compChoice
//     console.log(returnClickResult)
// }, {once:true})

// let humanChoice;
// function returnClickResult(result){
//     return result
// }

// // if (result == "rock"){
// //     humanPaper.removeEventListener()
// //     humanScissor.removeEventListener()
// // }else if(result == "paper"){
// //     humanRock.removeEventListener()
// //     humanScissor.removeEventListener()
// // }else if(result == "scissor"){
// //     humanRock.removeEventListener()
// //     humanPaper.removeEventListener()
// // }

// function removeListener(item1, item2, result){
//     if (result == "rock"){
//         item2.removeEventListener()
//         item3.removeEventListener()
//     }else if(result == "paper"){
//         item1.removeEventListener()
//         item3.removeEventListener()
//     }else if(result == "scissor"){
//         item1.removeEventListener()
//         item2.removeEventListener()
//     }
// }

// function choiceText(){

// }

//     let roundWinnerText = document.getElementById("roundWinnerText")
//     if (compChoice == humanChoice){
//         roundWinnerText.innerHTML = "Tie"
        
//     } else if(compChoice == "rock" && humanChoice == "scissor"){
//         roundWinnerText.innerHTML = "You lost this round!"
//         compScore += 1
//     }else if(compChoice == "rock" && humanChoice == "paper"){
//         roundWinnerText.innerHTML = "You won this round!"
//         humanScore+=1
//     }else if(compChoice == "paper" && humanChoice == "rock"){
//         roundWinnerText.innerHTML = "You lost this round!"
//         compScore+=1
//     }else if(compChoice == "paper" && humanChoice == "scissor"){
//         roundWinnerText.innerHTML = "You won this round!"
//         humanScore+=1
//     }else if(compChoice == "scissor" && humanChoice == "rock"){
//         roundWinnerText.innerHTML = "You won this round!"
//         humanScore+=1
//     }else if(compChoice == "scissor" && humanChoice == "paper"){
//         roundWinnerText.innerHTML = "You lost this round!"
//         compScore+=1
//     }
   

// function updateScore(){
//     humanscoreText.innerHTML = humanScore
//     compscoreText.innerHTML = compScore
// }


