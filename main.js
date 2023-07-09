'use strict'
// TASK 1
// let isRunning = true;
// let userTransferOfCarrency;
// let userQuantityOfMoney;

// while(isRunning){
//   const userCarrency = prompt("Choose ur carrency:\n" + "a)Dollar;   " + "b)Euro;   " + "c)Funt;   " + "d)Yen;   ");
//   userQuantityOfMoney = parseInt(prompt("How much money do u have?"));
  
//   switch (userCarrency.toLowerCase()) {
//     case "a":
//       userTransferOfCarrency = prompt("In which currency we would transfer?\n" + "a)Euro;   " + "b)Funt;   " + "c)Yen;   ");
//       dollarTransfer();
//       anotherTransfer();
//       break;
      
//       case "b":
//         userTransferOfCarrency = prompt("In which currency we would transfer?\n" + "a)Dollar;   " + "b)Funt;   " + "c)Yen;   ");
//         euroTransfer();
//         anotherTransfer()
//         break;
    
//     case "c":
//       userTransferOfCarrency = prompt("In which currency we would transfer?\n" + "a)Dollar;   " + "b)Euro;   " + "c)Yen;   ");
//       funtTransfer();
//       anotherTransfer()
//       break;

//     case "d":
//       userTransferOfCarrency = prompt("In which currency we would transfer?\n" + "a)Dollar;   " + "b)Euro;   " + "c)Funt;   ");
//       yenTransfer();
//       anotherTransfer()
//       break;

//     default:
//       alert("Choose corect value...");
//       break;
//   }
// }

// function dollarTransfer() {
//   switch (userTransferOfCarrency.toLowerCase()) {
//     case "a":
//       let dollarResultOfTransferEuro = userQuantityOfMoney * 0.92;
//       alert("Ur result: " + dollarResultOfTransferEuro.toFixed(2));
//       break;

//     case "b":
//       let dollarResultOfTransferFunt = userQuantityOfMoney * 0.79;
//       alert("Ur result: " + dollarResultOfTransferFunt.toFixed(2));
//       break;
    
//     case "c":
//       let dollarResultOfTransferYen = userQuantityOfMoney * 144.30;
//       alert("Ur result: " + dollarResultOfTransferYen.toFixed(2));
//       break;
  
//     default:
//       alert("Choose corect value...");
//       break;
//   }
// }

// function euroTransfer() {
//   switch (userTransferOfCarrency.toLowerCase()) {
//     case "a":
//       let euroResultOfTransferDollar = userQuantityOfMoney * 1.09;
//       alert("Ur result: " + euroResultOfTransferDollar.toFixed(2));
//       break;

//     case "b":
//       let euroResultOfTransferFunt = userQuantityOfMoney * 0.86;
//       alert("Ur result: " + euroResultOfTransferFunt.toFixed(2));
//       break;
    
//     case "c":
//       let euroResultOfTransferYen = userQuantityOfMoney * 157.62;
//       alert("Ur result: " + euroResultOfTransferYen.toFixed(2));
//       break;
  
//     default:
//       alert("Choose corect value...");
//       break;
//   }
// }

// function funtTransfer() {
//   switch (userTransferOfCarrency.toLowerCase()) {
//     case "a":
//       let funtResultOfTransferDollar = userQuantityOfMoney * 1.27;
//       alert("Ur result: " + funtResultOfTransferDollar.toFixed(2));
//       break;

//     case "b":
//       let funtResultOfTransferEuro = userQuantityOfMoney * 1.16;
//       alert("Ur result: " + funtResultOfTransferEuro.toFixed(2));
//       break;
    
//     case "c":
//       let funtResultOfTransferYen = userQuantityOfMoney * 183.36;
//       alert("Ur result: " + funtResultOfTransferYen.toFixed(2));
//       break;
  
//     default:
//       alert("Choose corect value...");
//       break;
//   }
// }

// function yenTransfer() {
//   switch (userTransferOfCarrency.toLowerCase()) {
//     case "a":
//       let yenResultOfTransferDollar = userQuantityOfMoney * 0.0069;
//       alert("Ur result: " + yenResultOfTransferDollar.toFixed(2));
//       break;

//     case "b":
//       let yenResultOfTransferEuro = userQuantityOfMoney * 0.0063;
//       alert("Ur result: " + yenResultOfTransferEuro.toFixed(2));
//       break;
    
//     case "c":
//       let yenResultOfTransferFunt = userQuantityOfMoney * 0.0055;
//       alert("Ur result: " + yenResultOfTransferFunt.toFixed(2));
//       break;
  
//     default:
//       alert("Choose corect value...");
//       break;
//   }
// }

// function anotherTransfer() {
//   let transferAgain = prompt("Do u wanna transfer another currency?")

//   if(transferAgain[0].toLowerCase() === 'n') isRunning = false;
// }

// TASK 2
const me = {

}

let userName = prompt("Enter ur name: ");
me.userName = userName;

let userAge = parseInt(prompt("Enter ur age: "));
me.userAge = userAge;

let userSurname = prompt("Enter ur surname: ");
me.userSurname = userSurname;

// TASK 3
let isRunning = true;
let deletingField;
let updateValue;

while(isRunning){
  let additionalAction = prompt("Do u wanna do some actions?");

  if(additionalAction[0].toLowerCase() === 'n'){
    isRunning = false; 
    break;
  }

  let kindOfAction = prompt("What kind of ation do u wanna do? \n a)Delete one field of the keys.      b)Update value one of values.");
  switch (kindOfAction.toLowerCase()) {
    case 'a':
      deletingField = prompt("What field we need to delete?\n a)Name;     b)Surname;     c)Age;");
      whatDelete();
      isRunning = false;
      break;

    case 'b':
      updateValue = prompt("What value we need to update?\n a)Name;     b)Surname;     c)Age;");
      whatUpdate();
      isRunning = false;
      break;
  
    default:
      break;
  }
}

function whatDelete() {
  switch (deletingField.toLowerCase) {
    case 'a':
      delete me['userName'];
      console.log(me);
      break;

    case 'b':
      delete me.userSurname;
      break;

    case 'c':
      delete me.userAge;
      break;
  
    default:
      break;
  }
}

function whatUpdate() {
  switch (updateValue.toLowerCase) {
    case 'a':
      let newValue = prompt("Enter new value for name: ")
      me.userName = newValue;
      break;

    case 'b':
      delete me.userSurname;
      break;

    case 'c':
      delete me.userAge;
      break;
  
    default:
      break;
  }
}
