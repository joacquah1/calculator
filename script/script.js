let firstsValue='';
let operator;
let secondValue='';
let displayStorage;
const numbsButtons =document.querySelectorAll('.number');
const equalButton = document.querySelector('.equal');
const operatorButtons = document.querySelectorAll(".operator");
const currentDisplayScreen =document.querySelector('.currentDisplayScreen');
const previousDisplayScreen =document.querySelector('.previousDisplayScreen');
const clearButton =document.querySelector('.clear');
clearButton.addEventListener('click',()=>{
    currentDisplayScreen.textContent ='';
    previousDisplayScreen.textContent ='';
    firstsValue='';
    secondValue='';
});

const inputValue =function(values){
    console.log(values);
    firstsValue+=values;
    console.log(firstsValue);
    currentDisplayScreen.textContent =firstsValue;
}


numbsButtons.forEach(num =>
    num.addEventListener('click', ()=>inputValue(num.textContent))
    

  );

function handlers(op){
    operator =op;
    secondValue = firstsValue;
    firstsValue=''
    previousDisplayScreen.textContent = secondValue + operator;
    currentDisplayScreen.textContent ='';
}

function calculate(){

   secondValue =Number(secondValue);
   firstsValue = Number(firstsValue);
    
    if (operator==="+"){
        secondValue+= firstsValue;
       console.log(secondValue);
        
    }
    else if (operator ==="-"){
        secondValue -= firstsValue;
        console.log(secondValue)
    }else if (operator ==="x"){
        
        secondValue *= firstsValue;
        console.log(secondValue)
    }else if (operator ==="/"){
        secondValue/= firstsValue;
        if (secondValue===Infinity){secondValue="Error"};
    }
    currentDisplayScreen.textContent=secondValue;
    previousDisplayScreen.textContent ='';

}
equalButton.addEventListener('click',calculate)


operatorButtons.forEach(operator =>
    operator.addEventListener('click',()=>{
        return handlers(operator.textContent);
    }))








