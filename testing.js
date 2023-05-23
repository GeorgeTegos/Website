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

