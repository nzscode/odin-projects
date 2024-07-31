// //Regular Function
// function add(a, b){
//     console.log(a + b)
// }
// add(1, 2)

// //Function as Object
// add.value = 1+2
// console.log(add.value)

// //Callback Function
// function add2(func){
//     add(1, 2)
// }
// add2()

// //Callback Function as variable
// let add3 = add
// add3(1, 2)
// ________________________________________________________
// function deliveringPizza(pizzaSize){
//     console.log(`Delivering the ${pizzaSize} pizza.`)
// }

// function makingPizza(cb){
//     deliveringPizza("Large")
// }

// makingPizza()
// // ____________________________
// function firstFunction(callback){
//     console.log("This is the 1st function")
//     callback()
// }

// function secondFunction(){
//     console.log("This is the second function")
// }

// firstFunction(secondFunction)
// // __________________________________
// function sum(callback, a, b){
//     let result = a+b
//     callback(result)
// }

// function multipleSum(result){
//     console.log(result * 4)
// }

// sum(multipleSum, 1, 2)
// _______________________
// let button =  document.querySelector("button")
// button.addEventListener("click", () => {
//     let result;
//     if (button.getAttribute("id") == "yes"){
//         result = "yes"
//     }else{
//         result = "submit"
//     }
//     saveResult(result)
// })

// let x;
// function saveResult (result){
//     console.log(result)
//     x = result
// }

// if (x == "yes"){
//     console.log("Woo")
// }else{
//     console.log("Boo")
// }

let startGame = document.querySelector("#start_game")
let buttons = document.querySelectorAll(".bt")
let buttonsArr = [...buttons]

let button = document.querySelector("#btn1")
// startGame.addEventListener("click", () => {
//     console.log("Game started")
//     for (let i = 0; i < buttonsArr.length; i++) {
//         const btn = buttonsArr[i];
//         btn.addEventListener("click", () => {
//         console.log("i was clicked")
//     },{once: true})
//     }
    
//     // for (let i = 0; i < buttons.length; i++) {
//     //     const btn = buttons[i];
//     //     btn.addEventListener("click", () =>{
//     //         let b_id = btn.getAttribute("id")
//     //         console.log(b_id)
//     //         removeEventListener()
//     //     })
        
//     // }
    
// })


// for (let i = 0; i < buttonsArr.length; i++) {
//     const btn = buttonsArr[i];
//     btn.addEventListener("click", () => {
//         let b_id = button.getAttribute("id")
//         printOut(b_id)
//     })    
// }
rounds = 5

startGame.addEventListener("click", () => {
    console.log("I was clicked")
    for (let i = 0; i < rounds.length; i++) {
        buttonsArr.forEach((button) => {
        button.addEventListener("click", function(){
            let b_id = button.getAttribute("id")
            printOut(b_id)            
        }, {once: true})
        
    })
        
    }
    
}, {once: true})


// buttonsArr.forEach((button) => {
//     button.addEventListener("click", function(){
//         let b_id = button.getAttribute("id")
//         printOut(b_id)
//     })
    
// })

// for (bn of buttonsArr){
//     bn.addEventListener("click", ()=>{
//         let b_id = bn.getAttribute("id")
//         printOut(b_id)
//     })
    
// }

function printOut (result){
    console.log(result)
}