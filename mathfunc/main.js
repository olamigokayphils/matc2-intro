// 1. Factorial

function factorial(number){
    // Asserts type of argument
    if(typeof(number) == "number"){
        let computedValue = 1
        
        function calculate(max){
            for(let i=1; i < max + 1; i++){
                computedValue = computedValue * i
            }
            return computedValue

        }

        // If Number is positive
        if(number >= 0){
            calculate(number)
        }else{
            // If Number is negative -- calculate the abs. value
            const positiveNumber = (number * -1)
            calculate(positiveNumber)
            // Convert computed value back to Negative
            computedValue = (computedValue * -1)
        }

        console.log(`Factorial of ${number} is: ${computedValue}`)
        return computedValue


    }else{
        console.error("Invalid Type; expected 'number' ")
    }

}

// 2. Fibonacci Sequence
let lightCache = {}

function fibonacci(n){
    // Where 'n' is the nth term
    if(typeof(n) == "number"){
        if(lightCache[n] !== undefined){
            return lightCache[n]
        }

        if(n === 1 ){
            return 1
        }else if(n === 2 ){
            return 1
        }else{
            let value = fibonacci(n - 1) + fibonacci(n -2)
            // Keep Record
            lightCache[n] = value
            return value
        }
    }else{
        console.error("Invalid Type; expected 'number' ")
    }
}


// 3. Permutation
// nPk = n! / (n-k)!

function permutation(n , k){
    const numerator = factorial(n)
    const denominator = factorial((n -k))
    const result = numerator / denominator
    console.log(result)
    return result
}

//permutation(5, 2)

function combination(n, k){
    // nCk = n! / k! * (n-k)!
    const numerator = factorial(n)
    const denominatorA = factorial(k)
    const denominatorB = factorial((n - k))
    const result = numerator / (denominatorA * denominatorB)
    console.log(result)

    return result
}

combination(5,2)