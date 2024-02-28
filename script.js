// Função para criptografar o texto
function btnCriptografar() {
    // Obter o texto de entrada
    var textoEntrada = document.getElementById("text").value;
    
    // Lógica para criptografar o texto (substitua esta parte pela sua lógica de criptografia)
    var textoCriptografado = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
        };
    
    var textoCriptografadoFinal = '';

    // Percorre cada caractere do texto de entrada
        for (var i = 0; i < textoEntrada.length; i++) {
            var char = textoEntrada[i];
            //esse var está conectando com o outro que conecta com o html
            // Verifica se o caractere é uma vogal e se tem uma substituição correspondente
            if (textoCriptografado[char]) {
                //se existir um texto de entrada(var char conectado com o var do começo da função), o var textocriptografado vai substituir as vogais e adicionar as mudanças ao var textocriptografadofinal

                //o += adiciona um valor a primeira variavel da linha. aqui o textocriptografado com parametro char é add ao texto criptografado
                textoCriptografadoFinal += textoCriptografado[char];
            } else {
                // Se não for uma vogal, mantém o caractere original
                textoCriptografadoFinal += char;
            }
        }
        
        // Define o texto criptografado na área de resultado
        document.getElementById("text-output").value = textoCriptografadoFinal;
    }

// Função para descriptografar o texto
function btnDescriptografar() {

    var inputText = document.getElementById("text-output").value;
    
    var textoDescriptografado = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u',
        };

    var textoDescriptografadoFinal = '';
    
    var posicao = 0;
    //Este é um loop while que será executado enquanto a variável posicao for menor que o comprimento do texto de entrada (inputText.length)
    while (posicao < inputText.length) {
        //Esta variável será usada para determinar se uma substituição foi encontrada para uma sequência criptografada durante a iteração.
        var encontrouSubstituicao = false;
            //Este loop percorre cada chave (ou sequência criptografada) no objeto textoDescriptografado. A variável sequencia recebe o valor da chave atual em cada iteração.
        for (var sequencia in textoDescriptografado) {
            //Aqui estamos verificando se uma subsequência do texto de entrada, começando na posição atual (posicao) e com o mesmo comprimento da sequência criptografada (sequencia.length), é igual à sequência criptografada atual (sequencia).
            if (inputText.substr(posicao, sequencia.length) === sequencia) {
                //Se uma correspondência for encontrada, adicionamos o valor correspondente à sequência criptografada ao texto descriptografado final (textoDescriptografadoFinal).
                textoDescriptografadoFinal += textoDescriptografado[sequencia];
                //Atualizamos a variável posicao, avançando para além da sequência criptografada que acabamos de descriptografar. Isso nos move para o próximo caractere do texto de entrada que ainda não foi processado.
                posicao += sequencia.length;
                encontrouSubstituicao = true;
                break;
            }
        }
        if (!encontrouSubstituicao) {
            textoDescriptografadoFinal += inputText[posicao];
            posicao++;
        }
}
        
    document.getElementById("text-output").value = textoDescriptografadoFinal;
}

function copiar() {
    var textoCopiar = document.getElementById("text-output").value;
    var textareaTemporario = document.createElement("textarea");
    textareaTemporario.value = textoCopiar;
    document.body.appendChild(textareaTemporario);
    textareaTemporario.select();
    document.execCommand("copy");
    document.body.removeChild(textareaTemporario);
}

const textOutput = document.getElementById("text-output");
const imagem = document.getElementById("imagem");

textOutput.addEventListener("input", function() {
    if (textOutput.value.trim() === "") {
        imagem.style.display = "block";
    } else {
        imagem.style.display = "none";
    }
});