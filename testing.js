function FizzBuzz(){
    let x = Number(prompt("FizzBuzz Game: \nGive a positive number"))
    let count


    if(x > 0 ){
        for (count=1;count <= x;count++){
        if (((count%3) ==0) && ((count%5)==0)){
            alert('FizzBuzz')
        }
        else if((count%5) == 0){
            alert('Buzz')
        }
        else if((count%3) == 0){
            alert('Fizz')
        }
        else{
            alert(count)
        }
        }
    }
    else if(x == null || x == undefined || x.length<=0){
        alert('Null Or Undefined')
    }
    else{
        alert('Not a positive number')
    }
}

function RandomWin(){
    let nRange = Number(prompt("Give a Possitive Number Range \n"))
    if (nRange > 0){
        let iNumber = Number(prompt("Give your Number !"))
            if ((iNumber < 0) || (iNumber > nRange)){
                alert("Your Number Can't be 0 or less or higher the number range")
            }
            else{        
                function getRandomInt(max) {
                    return Math.floor(Math.random() * (max+1));
                }
                const rNumber = getRandomInt(nRange)

                if (iNumber > rNumber){
                    alert(`${rNumber}     \nYOU WON !`)
                }
                else if (iNumber == rNumber){

                    alert(`${rNumber}     \nDraw !`)
                }
                else{
                    alert(`${rNumber}     \nYou Lost !`)
                }  
            }
    }
    else{
            alert("You Should Give a possitive Number")
    }
    
}

function NumberGuessing(){
    let chances = 5;

    function getRandomInt(max) {
        let x = Math.floor(Math.random() * max);
        if (x == 0){
            do{
                x = Math.floor(Math.random() * max);
            }while (x == 0)
        }
        return x;
    }

    let rNumber = getRandomInt(101);

    let userNumber = Number(prompt("Give your first guess !"));

    for (chances = 5; chances > 0; chances--){
        if (userNumber == rNumber){
            alert(`YOU WON \n the number was ${rNumber}!`)
            break;
        } else if(userNumber > rNumber){
            alert(`Wrong guess, you have ${chances} guesses left \n Guess Lower!`);
            userNumber = Number(prompt(`Give your next guess !\n`));
        } else if((userNumber == null) || (userNumber == undefined) || (userNumber <= 0)){
            alert('Wrong or Null Input \n Start from begin');
            break
        } 
        else{
            alert(`Wrong guess, you have ${chances} guesses left \n Guess Higher!`);
            userNumber = Number(prompt(`Give your next guess !\n`));
        }
    
}
}

function rps(){
    
    let rounds = Number(prompt('How many Rounds do you want to play ?'))    /*Number of rounds */
    
    function getComputerChoice(){ 
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
        let option = getRandomInt(3);
        if (option == 0){
            option = 'rock'
        } else if (option == 1 ){
            option = 'paper'
        } else{
            option = 'scissors'
        }
    return option;
    }


    function getUserChoice(){
        let userChoicePrompted = prompt('Choose :\nRock\nPaper\nScissors')
        let userChoice = userChoicePrompted.toLowerCase();

        if (userChoice == 'rock'){
            return userChoice
        } else if (userChoice == 'paper' ){
            return userChoice
        } else if (userChoice == 'scissors'){
            return userChoice
        }
    }


    function newRound(){
        let finalScore , userScore , computerScore
        let userChoice = getUserChoice()
        let computerChoice = getComputerChoice(3)

        if (userScore > computerScore){
             finalScore = 1;
        } else if(userScore < computerScore){
             finalScore = 2;
        }
        finalScore = parseInt(finalScore)
        return finalScore

    } 

    function moreRounds(){
        let x,User,Compu;
        for (i=0;i<rounds;i++){
            x = parseInt(newRound())
            if (x == 1){
                User = User +1
            } else if (x == 2){
                Compu = Compu + 1;
            }
        }
        if (User > Compu){
           alert(`User won`)
        } else if (Compu > User){
          alert(`Computer won`)
        } 

    }

    
    if (rounds == 1){
        newRound()
    } else {
        moreRounds()
    }
}