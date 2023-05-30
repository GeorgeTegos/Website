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

    let userChoice = Number(prompt('Choose :\n 0) Rock\n1) Paper\n2) Scissors'))
    function getComputerChoice(){
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
        let option = getRandomInt(3);
        return option;
    }

    let computerChoice = getComputerChoice(3);
    let text
    if (computerChoice == 0){
        text = 'Rock'
    } else if (computerChoice == 1 ){
        text = 'Paper'
    } else{
        text = 'Scissors'
    }

    function newRound(userChoice,computerChoice){
        let result
        if (userChoice == computerChoice){
            result = alert(`Computer Choose ${text} \nDraw`)
        } else if ((userChoice == 0) && (computerChoice == 1)){
            result = alert(`Computer Choose ${text} \nYou Lost`)
        } else if ((userChoice == 0) && (computerChoice == 2)){
            result = alert(`Computer Choose ${text} \nYou Won!`)
        } else if ((userChoice == 1) && (computerChoice == 0)){
            result = alert(`Computer Choose ${text} \nYou Won!`)
        } else if ((userChoice == 1) && (computerChoice == 1)){
            result = alert(`Computer Choose ${text} \nDraw`)
        } else if ((userChoice == 1) && (computerChoice == 2)){
            result = alert(`Computer Choose ${text} \nYou Lost`)
        } else if ((userChoice == 2 ) && (computerChoice == 0)){
            result = alert(`Computer Choose ${text} \nYou Lost`)
        } else if ((userChoice == 2) && (computerChoice == 1)){
            result = alert(`Computer Choose ${text} \nYou Won!`)
        } else if ((userChoice == 2 ) && (computerChoice == 2)){
            result = alert(`Computer Choose ${text} \nDraw`)
        }
        return result;
    }
    newRound(userChoice,computerChoice);
}