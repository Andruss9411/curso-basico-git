export function suma (num1, num2){
    return num1 + num2;
}

export function resta (num1, num2){
    return num1 - num2;
}

export function multiplicacion (num1, num2){
    return num1 * num2;
}

export function division (num1, num2){
    if(num2 === 0){
        return "No se puede dividir por cero"
    }
    return num1 / num2;
}