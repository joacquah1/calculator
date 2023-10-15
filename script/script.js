let firstValue;
let operator;
let secondValue;
const add =function(a,b){
    return a + b;
};
const subtract =function(a,b){
    return a-b;
};
const multiply =function(a,b){
    return a*b;
};
const divide =function(a,b){
    return a/b;
};
const operate = function(firstValue,operator,secondValue){
    return operator==="+"? add(firstValue,secondValue):
        operator ==="-"? subtract(firstValue,secondValue):
        operator ==='*'? multiply(firstValue,secondValue):
        operator ==='/'? divide(firstValue,secondValue):"Error";
}

console.log(operate(2,'/',3));