var userInput = 0; // gloabal variable for User Input
var getItems = 0; // gloabal variable for money you spent
var appleCount = 0; // gloabal variable for apple
var orangeCount = 0; // gloabal variable for orange
var bananaCount = 0; // gloabal variable for banana
var totalBudget = 0; // gloabal variable for total 
function userMoney(){ // declaring a function of userMoney() for user input
  userInput = document.querySelector('input').value; // asiging the value of user input
}
function userPurchased(){ //declaring a function userPurchased() for total
  document.querySelector('strong').innerHTML = totalBudget; // assiging this total into strong tag of html
}
function applePlus(){ 
  if (userInput >= 10){
    getItems += 10;
    appleCount += 1;
    userInput = userInput - getItems;
    totalBudget = totalBudget + getItems;
    getItems = 0;
    document.getElementById('appleId').innerHTML = appleCount;
    userPurchased();
  }
  else{
    alert("You don\'t have enough money to buy an apple!");
  }
}
function appleMinus(){ 
  if (totalBudget > 0 && appleCount > 0){
    getItems += 10;
    appleCount -= 1;
    userInput = userInput + getItems;
    totalBudget = totalBudget - getItems;
    getItems = 0;
    document.getElementById('appleId').value = appleCount;
    userPurchased();
  }
}
function orangePlus(){
  if (userInput >= 15){
    getItems += 15;
    orangeCount += 1;
    userInput = userInput - getItems;
    totalBudget = totalBudget + getItems;
    getItems = 0;
    document.getElementById('orangeId').innerHTML = orangeCount;
    userPurchased();
  }
  else{
    alert("You don\'t have enough money to buy an Orange!");
  }
}
function orangeMinus(){
  if (totalBudget > 0 && orangeCount > 0){
    getItems += 15;
    orangeCount -= 1;
    userInput = userInput + getItems;
    totalBudget = totalBudget - getItems;
    getItems = 0;
    document.getElementById('orangeId').value = orangeCount;
    userPurchased();
  }
}
function bananaPlus(){
  if (userInput >= 7){
    getItems += 7;
    bananaCount += 1;
    userInput = userInput - getItems;
    totalBudget = totalBudget + getItems;
    getItems = 0;
    document.getElementById('bananaId').innerHTML = bananaCount;
    userPurchased();
  }
  else{
    alert("You don\'t have enough money to buy a Banana!");
  }
}
function bananaMinus(){
  if (totalBudget > 0 && bananaCount > 0){
    getItems += 7;
    bananaCount -= 1;
    userInput = userInput + getItems;
    totalBudget = totalBudget - getItems;
    getItems = 0;
    document.getElementById('bananaId').value = bananaCount;
    userPurchased();
  }
}
if(userInput < totalBudget){
  alert("you don\'t have enough money")
}