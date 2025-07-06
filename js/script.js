
let inputDisplay = "";
let numberAndOperator
let angka = [];
let numberOne = null;
let operatorCal = null;
let display = document.getElementById('display')

function appendValue(value){
    inputDisplay += value;
    display.value = inputDisplay
}

function clearValueDisplay(){
    inputDisplay = "";
    numberOne = null;
    operatorCal = null;
    display.value="";
}

function deleteLastValue(){
    inputDisplay = inputDisplay.slice(0,-1);
    display.value = inputDisplay
    // display.value= inputDisplay.slice(0,-1);
}

function inputOperatorDisplay(operator){
    if (inputDisplay == ""){
        return
    } else{
        const lastChar = inputDisplay[inputDisplay.length-1]

        if ("+-/*".includes(lastChar)){
           return;
        } else{
            inputDisplay += operator;
            display.value = inputDisplay;
        }
    }
}


function numberSelector(string){
    const number = [];
    let num = "";

    for(let i = 0;i<string.length;i++){
        const realNumber = string[i]
        if("0123456789.".includes(realNumber)){
            num += realNumber
        }else{
            number.push(parseFloat(num));
            num="";
        }
    }

    if (num !== ""){
        number.push(parseFloat(num))
    }

    return number;
}


function operatorSelector(string){
    const operator =[];
    for(let i=0;i<string.length;i++){
        const char = string[i];
        if ("+-/*".includes(char)){
            operator.push(char);
        }
    }
    return operator;
}

function calculatorResult(){
    
    const number = numberSelector(inputDisplay);
    const operator = operatorSelector(inputDisplay);

    if(number.length == 0){
        return;
    }

    let realNumber = [];
    let realOperator = [];

    for(let i = 0;i<operator.length;i++){
        if (operator[i] === "*" || operator[i] === "/"){

            let result;

            if(operator[i]==="*"){
                result = number[i]*number[i+1];
            } else {
                result = number[i]/number[i+1];
            }

            number.splice(i,2,result); //buat ganti kedua angkanya jadi
            operator.splice(i,1) //hapus operator 1 buah

            i =-1 //buat reset array karna tdi di splice
        }
    }

    let result = number[0];
    for(let i = 0;i<operator.length;i++){
        if(operator[i] === "+"){
            result += number[i+1];
        } else if (operator[i] === "-"){
            result -= number[i+1];
        }
    }

    // let result = number[0];

    // for (let i = 0; i<operator.length;i++){
    //     const optor = operator[i];
    //     const num = number[i+1];

    //     if (optor === "+"){
    //         result += num;
    //     } else if(optor === "-"){
    //         result -= num;
    //     } else if(optor === "*"){
    //         result *= num;
    //     } else if(optor === "/"){
    //         result /= num;
    //     }        
    // }
        
    display.value = result;
    inputDisplay = result.toString();

}

