function play(option) {
    let result = document.getElementById("result");
    let arr=['Rock','Paper','Scissors'];   
    compurterChoice = arr[Math.floor(Math.random() * 3)]; 
    if (option == compurterChoice) {
        result.innerHTML = "It's a Tie!"+"<br>"+"Your choice: "+option+"<br>" +"computer choice: "+compurterChoice;
        console.log("Computer chose: " + compurterChoice);
        console.log("You chose: " + option);
    }else if ((option == 'Rock' && compurterChoice == 'Scissors') || 
               (option == 'Paper' && compurterChoice == 'Rock') || 
               (option == 'Scissors' && compurterChoice == 'Paper')) {
        result.innerHTML = "You Win!"+"<br>"+"Your choice: "+option+"<br>" +"computer choice: "+compurterChoice;
    } else {
        result.innerHTML = "You Lose!"+"<br>"+"Your choice: "+option+"<br>" +"computer choice: "+compurterChoice;

    }   
}