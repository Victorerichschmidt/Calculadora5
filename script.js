function calcula(opera){
    let num1 = parseFloat(documento.getElementById('zeroum').value);
    let num1 = parseFloat(documento.getElementById('zerodois').value);
    let resultado = 0
    if(isNaN(num1) || isNaN(num2)){
        alert('acorde para a vida.');
    }else{
        if (opera == "+") {
            resultado = num1 + num2;
        } else if (opera == "-") {
            resultado = num1 - num2;
        } else if (opera == "*") {
            resultado = num1 * num2;
        } else if (opera == "/") {
            resultado = num1 / num2;
        }
    }
}