function play(option) {
    let result = document.getElementById("result");
    let arr=['Rock','Paper','Scissors'];   
    compurterChoice = arr[Math.floor(Math.random() * 3)]; 
    if (option == compurterChoice) {
        result.innerHTML = "It's a Tie!";
        console.log("Computer chose: " + compurterChoice);
        console.log("You chose: " + option);
    }else if ((option == 'Rock' && compurterChoice == 'Scissors') || 
               (option == 'Paper' && compurterChoice == 'Rock') || 
               (option == 'Scissors' && compurterChoice == 'Paper')) {
        result.innerHTML = "You Win!";
    } else {
        result.innerHTML = "You Lose!";
    }   
}