//Basic FizzBuzz problem where if the number is divisible by 3 print Fizz
//If its divisible by 5 print Buzz and if its by both FizzBuzz
function practice (num: number) {

    for(let i = 1; i <= num; i++) {

        if (i % 5 === 0 && i % 3 == 0) {
            console.log("FizzBuzz")
        } else if (i % 3 == 0){
            console.log("Fizz")
        } else if (i % 5 == 0){
            console.log("Buzz")
        }  else {
            console.log(i)
        }
    }
}

console.log(practice(15))