function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        //Compara si el residuo de 3 es igual a 0 y el residuo de 5 es igual a 0
        if (i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0){
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}


console.log(fizzBuzz(100));
