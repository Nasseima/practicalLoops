// Loop through all numbers from 1 to 100
num = 101
for(let i = 1; i < num; i++){
    //console.log(i)
}

// If a number is divisible by 3, log "Fizz"
function fizzBuzz(num){
    for(let i = 3; i <= num; i++ ){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("Fizz Buzz", i)
    }
     else if(i % 3 === 0){
        console.log("Fizz", i)
    }
    else if(i % 5 === 0){
        console.log("Buzz", i)
    }
    else{
        console.log(`${i}`)
    }
    
} 
}
//console.log(fizzBuzz(100))

// Prime number
function checkPrime(start){
    let i = 2;

    while (i < start){
        if (start % i === 0) return false;
        i++;
    }
    return true;
}

function findNextPrimeNumber(startingNum){ 
    let starting = startingNum + 1;
    while (starting){
        if(checkPrime(starting)){
            break;
        }
        starting++;
    }
    return starting;
}
console.log(findNextPrimeNumber(3))