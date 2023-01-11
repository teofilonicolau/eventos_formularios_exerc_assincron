/*No arquivo script.js, para adiantar o
processo, capturamos todos os elementos
do DOM que usaremos.
Para isso, usamos os métodos
getElementById e querySelector.*/

let inputEmail = document.getElementById("email");

let inputIdade = document.getElementById("idade");

let formulario = document.querySelector("form");

//conferimos se a captura deu certo:

console.log(inputEmail);
console.log(inputIdade);
console.log(formulario);

/* evento focus - Para demonstrar o uso do input, precisamos abrir o arquivo
script.js e adicionar um eventListener ao elemento inputEmail.
O primeiro argumento será a string focus e o segundo, 
uma arrow function:

inputEmail.addEventListener("focus" ,()=>{

})*/

/*Agora, vamos mudar a cor de fundo do input quando
ele ganhar foco.
Podemos fazer isso chamando o próprio elemento
inputEmail dentro do bloco do código da arrow function.
Outra opção é usar um argumento evento e acessar sua 
propriedade target. Nesse último caso, chamaremos o próprio elemento:*/

 

inputEmail.addEventListener("focus", ()=> {

  inputEmail.style.backgroundColor = "lightgreen"

});

/* Evento blur - Nosso input de e-mail está sendo alterado quando ganha
foco. Porém, se clicarmos fora dele, ou se acessarmos o próximo input sem 
finalizar o primeiro, o input de e-mail permanece com as alterações que 
definimos previamente. Observe a imagem de exemplo.
Para definir o que deve acontecer com um elemento após perder o foco,
usamos o evento blur.Assim, chamamos o elemento inputEmail novamente
e adicionamos mais um eventListener.Porém, desta vez, passaremos a 
string blur como primeiro argumento e uma arrow function como
segundo. Dessa forma:

inputEmail.addEventListener("blur", ()=> {

 

});
Repetiremos o processo do exemplo anterior e, desta vez,
vamos manipular o elemento acessando o evento.
Para isso, precisamos passar um argumento, que 
representa o evento, dentro dos parênteses da arrow function.
Depois, é necessário acessar a propriedade target dele dentro
do bloco de código.Assim, temos acesso às propriedades
style e backgroundColor,Atribui uma string vazia como valor
da propriedade backgroundColor, que removerá a estilização 
aplicada na etapa anterior:*Após salvar as mudanças e voltar
no navegador, devemos ver nosso input de e-mail ganhando
e perdendo a estilização cada vez que clicamos dentro e fora 
dele, independentemente do valor que ele possui.*/

 

inputEmail.addEventListener("blur", (e)=> {

  e.target.style.backgroundColor = ""

});

/* Evento change - O evento change é disparado quando um elemento sofre 
uma alteração no seu valor. Contudo, isso pode variar de acordo com o tipo
de input e da forma como alteramos os seus dados.
Para demonstrar isso, chamamos o elemento inputEmail,
aplicamos o método addEventListener, passamos como primeiro argumento a
string change e, como segundo, uma arrow function. Observe:

 inputEmail.addEventListener("change", ()=> {

 

});
Para visualizar o momento em que o evento change é disparado, executamos a função
alert() com alguma mensagem dentro do bloco de código da arrow function.
Ao salvar as mudanças e verificar o navegador, veremos que um alerta é disparado 
cada vez que alteramos o valor do input de idade clicando em alguma das setas no
lado direito do input.Entretanto, se você digitar o valor da idade diretamente no 
input, verá que o evento só é disparado após o input perder o foco.
Esse é um comportamento que devemos levar em consideração quando usamos
o evento change com inputs de texto.*/

inputEmail.addEventListener("change", ()=> {

  alert("Certeza que quer alterar seus dados?")

});

/* Evento submit - É sempre importante mostrar algum feedback ao clicar no botão de enviar.
Seja para avisar que não foi possível efetivar o envio por falta de informações obrigatórias
ou para confirmar que as informações mandadas estão corretas.
Para fazer isso, chamamos o elemento formulário, adicionamos nele o
método addEventListener, passamos a string do evento submit como primeiro
parâmetro e, como segundo, uma arrow function:

formulario.addEventListener("submit", ()=> {

 

});

Depois disso, basta executar um alert dentro do bloco de código da arrow function
com uma mensagem confirmando o envio dos dados.Se salvarmos as mudanças e voltarmos
no navegador, nossa mensagem será exibida ao clicar no botão de Enviar:*/

formulario.addEventListener("submit", ()=> {

  alert("Dados enviados com sucesso!")

});


