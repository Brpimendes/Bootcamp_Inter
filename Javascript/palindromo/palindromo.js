// versão 1
// function verificaPalindromo1(string) {
//   if (!string) return "Informe uma palavra válida.";

//   return string.split("").reverse().join("") === string;
// }

// console.log(verificaPalindromo1("dedo"));


// versão 2
function verificaPalindromo2(string){
    if (!string) return "Informe uma palavra válida.";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 -i]) return false
    }

    return true
}

console.log(verificaPalindromo2("abba"))