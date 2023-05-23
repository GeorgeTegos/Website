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
    else{
        alert("You Should Give a possitive Number")
    }
}