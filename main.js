let operators = ["+", "-", "/", "*"]
let first_number = prompt("type the first number");
let operator = prompt("use any of the following operators + / - *");
let second_number = prompt("type the second number");



if (operators.indexOf(operator) > -1){
    let answer;
    if( operator == "+"){
        answer = Number(first_number) + Number(second_number)
        prompt(`${first_number} + ${second_number} = ${answer}`)
    }
    else if( operator == "-"){
        answer = Number(first_number) - Number(second_number)
        prompt(`${first_number} - ${second_number} = ${answer}`)
    }
    else if( operator == "/"){
        answer = Number(first_number) / Number(second_number)
        prompt(`${first_number} / ${second_number} = ${answer}`)
    }
    else{
        answer = Number(first_number) * Number(second_number)
        prompt(`${first_number} * ${second_number} = ${answer}`)
    }
    
}
else{
    prompt("enter a valid a operator from (+ - / *)")
}


