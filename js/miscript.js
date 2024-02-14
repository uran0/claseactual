const formulario = document.getElementById
('formulario');
const email = document.getElementById('email');

let texto = "hola@gmail.com"
console.log(texto.endsWith(".com"))

formulario.onsubmit = (e) => {
    e.preventDefault();
    emailLimpio =email.ariaValueMax.trim();
    if (emailLimpio.endsWith(".com") || emailLimpio. endsWith(".cl")) {
        alert("acceso concedido")
    } else {
        alert("acceso denegado")
    }
}

function validarDigitoVerificador(rutSinDigito) {
    let M = 0;
    let S = 1;
    for (;rutSinDigito;rutSinDigito=Math.floor(rutSinDigito)/10)) {
        S=(S+rutSinDigito%10*(9-M++%6))%11;
    }
    return S?S-1: 'k';
}

