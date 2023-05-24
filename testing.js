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

    function getComputerChoice(){
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
        let option = getRandomInt(3);
        if (option == 0){
            return x = 'Rock'
        } else if (option == 1){
            return x = 'Paper'
        } else {
            return x = 'scissors'
        } 
    }
}