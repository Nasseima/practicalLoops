//Part 1: Fizz Buzz
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

// Part 2: Prime number
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

// Part 3: Feeling loopy
const str = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
const strCopy = str.split("\n");
console.log(strCopy);