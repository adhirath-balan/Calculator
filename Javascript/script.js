
var num1 = document.getElementById('number1')
var num2 = document.getElementById('number2')
var operator = document.getElementById('operator')
var answer = document.getElementById('answer')


function nine(){

    if ( num1.textContent == " "){
        num1.textContent = 9
    }
    else if (num2.textContent == " "){
        num2.textContent = 9
    }

}

function eight(){

    if ( num1.textContent == " "){
        num1.textContent = 8
    }
    else if (num2.textContent == " "){
        num2.textContent = 8
    }
    
}

function seven(){

    if ( num1.textContent == " "){
        num1.textContent = 7
    }
    else if (num2.textContent == " "){
        num2.textContent = 7
    }
    
}

function six(){

    if ( num1.textContent == " "){
        num1.textContent = 6
    }
    else if (num2.textContent == " "){
        num2.textContent = 6
    }
    
}

function five(){

    if ( num1.textContent == " "){
        num1.textContent = 5
    }
    else if (num2.textContent == " "){
        num2.textContent = 5
    }
    
}

function four(){

    if ( num1.textContent == " "){
        num1.textContent = 4
    }
    else if (num2.textContent == " "){
        num2.textContent = 4
    }
    
}

function three(){

    if ( num1.textContent == " "){
        num1.textContent = 3
    }
    else if (num2.textContent == " "){
        num2.textContent = 3
    }
    
}

function two(){

    if ( num1.textContent == " "){
        num1.textContent = 2
    }
    else if (num2.textContent == " "){
        num2.textContent = 2
    }
    
}

function one(){

    if ( num1.textContent == " "){
        num1.textContent = 1
    }
    else if (num2.textContent == " "){
        num2.textContent = 1
    }
    
}

function add(){

    if (num1.textContent != " "){
        operator.textContent = "+"
    }
    
}

function minus(){

    if ( num1.textContent != " " ){
        operator.textContent = "-"
    }
    
}

function multiply(){

    if ( num1.textContent != " " ){
        operator.textContent = "*"
    }
    
}

function divide(){

    if ( num1.textContent != " "){
        operator.textContent = "/"
    }
    
}

function equal(){

    switch (operator.textContent){

        case "+":
            answer.textContent = "Ans : " + (parseInt(num1.textContent) + parseInt(num2.textContent))
            break;
        
        case "-":
            answer.textContent = "Ans : " + (num1.textContent - num2.textContent)
            break;

        case "*":
            answer.textContent = "Ans : " + num1.textContent * num2.textContent
            break;
        
        case "/":
            answer.textContent = "Ans : " + num1.textContent / num2.textContent
            break;

    }
}

function erase(){

    num1.textContent = " "
    num2.textContent = " "
    operator.textContent = " "
    answer.textContent = " "
}
