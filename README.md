<h1 align="center"> 🎊 🎊 Robô para Sorteio Instagram 🎊 🎊 </h1>	
 
 <h3> Por que? 🤔 </h3>
 
 <p>
 	Esse robô surgiu de uma vontade de participar de sorteios no Instagram sem perder tempo e energia com essa atividade. 
 </p>
 
 <h3> Funcionamento 🤯 </h3>
 
 <p>
 O robô realiza uma quantidade x de comentários (marcando usuários e/ou inserindo texto) em determinado post e "dorme" por um intervalo y de tempo, de minutos, para executar de novo, seja no mesmo post ou num próximo post.
 	O robo realiza uma quantidade <strong>x</strong> de comentários (marcando usuários e/ou inserindo texto) em determinado post e dorme por um intervalo <strong>y</strong> de tempo para executar de novo, seja na mesma ou outra aplicação.
 </p>
 
 <h3> Tecnologias 💻 </h3>
 
 <p>
 	<ul>
    	<li>Node 12.17.0 </li>
        <li>NPM 6.14.4 </li>
    </ul>
 </p>
 
 <h3> Como executar o projeto? </h3>
 <p>
 
<ol>
<li> Instale o node e npm na sua máquina. </li>
<li> Instale os pacotes necessários rodando o comando <strong>npm install</strong> no diretório do projeto. </li>
<li> 
   Crie o arquivo <strong>credentials.json</strong> colocando os seguintes campos:

~~~javascript
{
  "LOGIN": "username-instagram",
  "SENHA": "password-instagram"
}
~~~ 
</li>
<li>
Crie o arquivo <strong>usuarios.json</strong> colocando os seguintes campos:

~~~javascript
{
  "proximo": 0,
  "lista": [
  	{
   		"ig": "username-friend"
    }
    ...
  ]
}
~~~
</li>
    
<li>
altere os parametros da função comment

~~~javascript
const commentForever = async () => {
    	while(true){
      		await comment(<link-post>, <texto>, <quantidade-de-usuarios-para-marcar>);
    	}
}
~~~
</li>
</ol>



<h3> Contatos: </h3>
<a href="https://mail.google.com/mail/?view=cm&source=mailto&to=jgnvs6@gmail.com" target="_blank">
  <img alt="contacte-me por gmail" src="https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white">
</a>
<a href="https://www.linkedin.com/in/joseguilhermenvs/" target="_blank">
<img alt="contacte pelo linkedin" src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white">
</a>
<a href="https://twitter.com/baraodemaua?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">
  <img alt="contacte pelo Twitter" src="https://img.shields.io/twitter/follow/baraodemaua?style=social">
</a>


