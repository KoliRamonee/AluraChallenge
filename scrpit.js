const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");

const matriz_code=[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar(){
    const textoEncriptado =encriptar(campo_texto.value);
    campo_mensaje.value = textoEncriptado;
    campo_texto.value="";
}

function encriptar(fraseEncriptada){
    let matriz_code = [["e","enter"],["i","ines"],["a","ai"],["o","ober"],["u","ufat"]];
   /* stringEncriptado = stringEncriptado.tolowerCase()*/

    for(let i=0; i < matriz_code.length;i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(matriz_code[i][0], matriz_code[i][1]);
        }
    }
    return fraseEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado =desencriptar(campo_texto.value);
    campo_mensaje.value = textoEncriptado;
    campo_texto.value="";
}

function desencriptar(fraseEncriptada){
    let matrizCodgo = [["e","enter"],["i","ines"],["a","ai"],["o","ober"],["u","ufat"]];
    /*stringDesencriptado = stringDesencriptado.tolowerCase()*/

    for(let i=0; i < matrizCodgo.length;i++){
        if(fraseEncriptada.includes(matrizCodgo[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(matrizCodgo[i][1], matrizCodgo[i][0]);
        }
    }
    return fraseEncriptada;
}

function btnLimpiar(){
    campo_mensaje.value = '';
    campo_texto.value = '';
}

function btnCopiar(){
    var textoOriginal = document.getElementById("campo-mensaje").value;
    navigator.clipboard.writeText(textoOriginal)
            .then(function() {
            console.log('Texto copiado al portapapeles exitosamente');
            })
                .catch(function(err) {
                console.error('Error al copiar el texto al portapapeles: ', err);
                });
    document.getElementById("texto-encriptado").value = textoOriginal;
    campo_mensaje.value = '';
}
