function findPrime(...numbers) {
    messages=[]
    numbers.forEach(number=>{
        if(isItPrime(number))
            messages.push(number+" is a prime number");
        else
            messages.push(number+" is a not prime number");
    })
    return messages;
}
function isItPrime(number){
    for(var i=2;i<number;i++){
        if(number%i==0){
            return false;
        }
    }
    return true;
}
//console.log(findPrime(2,5,8,21,13));

function findFriendNumber(number1,number2){
    number1SumDivisors=getSumDivisors(number1);
    number2SumDivisors=getSumDivisors(number2);
    if(number1SumDivisors==number2 && number2SumDivisors==number1)
        return true;
    return false;
}
function getSumDivisors(number){
    sumDivisors=0
    for(var i=0;i<number;i++){
        if(number%i==0)
            sumDivisors+=i;
    }
    return sumDivisors;
}
//console.log(findFriendNumber(220,284))
function findPerfectNumber(number){
    sumDivisors=getSumDivisors(number)
    if(sumDivisors==number)
        return true;
    return false;
}
//console.log(findPerfectNumber(28))
function allPerfectNumbersUpTo1000(){
    perfectNumbers=[]
    for(var i=1;i<1000;i++){
        if(findPerfectNumber(i))
            perfectNumbers.push(i)
    }
    return perfectNumbers;
}
//console.log(allPerfectNumbersUpTo1000())
function allPrimeNumbersUpTo1000(){
    primeNumbers=[]
    for(var i=2;i<1000;i++){
        if(isItPrime(i))
            primeNumbers.push(i);
    }
    return primeNumbers;
}
//console.log(allPrimeNumbersUpTo1000())