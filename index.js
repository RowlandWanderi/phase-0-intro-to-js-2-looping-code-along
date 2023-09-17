// Code your solutions in this file
const names=["Guadalupe", "Ollie", "Aki"]
const message="surprise"

function writeCards( names,message){

    const thankYouMessages = [];

    for(let i=0;i< names.length;i++){
        const name = names[i];
        const thankYouMessage = `Thank you, ${name}, for the wonderful ${message} gift!`;
    thankYouMessages.push(thankYouMessage);
    }
    return thankYouMessages;
}console.log(`${writeCards(names,message)}`);

function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }