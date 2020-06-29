
document.querySelector('.secao-2').style = "display:none;";
function comeca() {
    // 0. Apresenta a caixa branca

    document.querySelector('.secao-2').style = "display: block;";
    document.querySelector('body').style = "background-color: #0101C2";


    // 1. Declare vars para capturar o input

    var nome = prompt('Qual o seu nome?');
    var sonho = prompt('Qual o seu maior sonho?');
    var tempo = prompt('Em quanto tempo você quer realizar seu sonho?');
    // 2. Combine os inputs com outras palavras e forme uma frase
var fraseCompleta = `Meu nome é ${nome} e eu tenho um sonho! Meu sonho é ${sonho} e eu pretendo realizá-lo em ${tempo}`;

// 3. Apresenta na setença de Main no HTML
document.querySelector('main').innerHTML =`${fraseCompleta}`;
var link0 = 'https://twitter.com/intent/tweet?text='
var tratarTweet = encodeURIComponent(fraseCompleta);
var tweetPronto = `${link0}${tratarTweet}`;
function trocarLink(){
document.querySelector('.twitter-share-button').href = tweetPronto;
}
trocarLink()
}





