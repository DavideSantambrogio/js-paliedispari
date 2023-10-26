// const
const send = document.getElementById("send");
const clear = document.getElementById("clear");

// al click
send.addEventListener("click", function(event) { 
    event.preventDefault();
   const word = document.getElementById("parola").value;
    console.log(word);
    
    /*
    let reverseWord= ""
    
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
      }
    console.log(reverseWord)

    if (word === reverseWord) {
    console.log("palindroma");
    } 

    else {
    console.log("non è palindroma");
    }
    */

   
    const reverse = reverseWord(word)

    if (word === reverse) {
    console.log("palindroma");
    } 

    else {
    console.log("non è palindroma");
    }
})

function reverseWord(word) {
    let rW =""
    for (let i = word.length - 1; i >= 0; i--) {
        rW += word[i];
      }
    console.log(reverseWord)
    return rW;
}
    
    







// clear
clear.addEventListener("click", function(event) { 
    event.preventDefault();
    
    parola.value = ""
        
})