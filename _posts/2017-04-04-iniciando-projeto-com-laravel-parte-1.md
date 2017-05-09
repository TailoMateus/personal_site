---
layout: post
title: Iniciando projeto com laravel – parte 1
img: default.png
---

Seja bem vindo a série Iniciando projeto com laravel, na primeira parte veremos como criar um projeto, as principais pastas da estrutura e configuração do banco de dados.

## CONFIGURAÇÕES GERAIS

Para iniciarmos precisamos configurar algumas coisas.

Como o foco não é banco de dados, utilizaremos o xampp. Você pode baixá-lo [aqui](https://www.apachefriends.org/pt_br/download.html)

Para configurar o laravel:

[Windows](https://gist.github.com/Turini/4949f23350ae2297c933)

[Linux](https://gist.github.com/Turini/843fa49af3ada5599c69)

[Mac](https://gist.github.com/Turini/94ed27b4f169c66349d2)

## CRIANDO O PROJETO

Muito bem, agora que tudo esta configurado, abra seu terminal. Digite laravel new NomeProjeto. Pronto, isso mesmo, seu projeto já esta criado. Para testá-lo, inicie seu apache do xampp e digite no terminal php artisan serve, nesse momento já pode testar sua aplicação em localhost.

Mas o que é esse artisan? Bom, ele é uma ferramenta de linha de comando, inclusa no framework.

Maiores informações sobre o artisan e os comandos inclusos, pode [consultar](https://laravel.com/docs/5.4/artisan)

## ESTRUTURAS DE PASTAS

Após criar o projeto, várias pastas foram criadas, vou comentar sobre as mais importantes.

app: Aqui fica o código principal da sua aplicação, seus modelos e controllers.

config: Nessa pasta fica toda a configuração, como, banco de dados, e-mails, entre outros.

public: Geralmente aqui fica seu arquivo index.php, as imagens, css e o js.

vendor: Possui o source code do laravel, plugins e dependências. Tudo que for usado de terceiros, como, frameworks e bibliotecas devem ficar aqui.

Você pode descobrir mais sobre a estrutura [aqui](https://laravel.com/docs/5.4/structure)

## BANCO DE DADOS

O laravel tem interações possíveis com 4 bancos de dados, entre eles, MySQL, Postgres, SQLite, SQL Server. Na versão atual 5.4, o default é o MySQL. Toda a configuração fica na pasta config e no arquivo database.php. E tudo fica em um array como este:

<pre class="lang-php">
'mysql' =&gt; [
'driver' =&gt; 'mysql',
'host' =&gt; env('DB_HOST', 'localhost'),
'database' =&gt; env('DB_DATABASE', 'NomeDoBanco'),
'username' =&gt; env('DB_USERNAME', 'root'),
'password' =&gt; env('DB_PASSWORD', ''),
]
</pre>

Basicamente, é aqui que você deve inserir os seus dados. Além dessas chaves, é possível configurar outras, que não serão mencionadas nesse artigo, mas que podem ser vistas [aqui](https://laravel.com/docs/5.4/database)

OBS: Em um projeto real, o ideal é colocar as configurações do banco de dados no arquivo .env, esse arquivo é mantido fora do controle de versão. Dessa forma, cada desenvolvedor vai possuir seu próprio arquivo e mantém as configurações do servidor em produção de forma sigilosa.

[Para saber mais](https://laravel.com/docs/5.4/configuration)

## CONCLUSÃO

Para iniciar um projeto é muito simples, com poucos passos já esta tudo configurado. Ele facilita muito o desenvolvimento, deixando o processo mais veloz. Nada impede de fazer com php puro, mas caso queira economizar algum tempo, esse framework se torna uma boa forma, nas referências, deixo algumas razões para usá-lo. Ficamos por aqui, nas próximas partes veremos como configurar e manipular as rotas, detalhar como funciona o padrão MVC (Model, View, Controller) no laravel.

## PARA SABER MAIS:

[Criando um projeto](http://laravel-recipes.com/recipes/30/creating-a-laravel-project)

[Documentação do framework](https://laravel.com/docs/5.4)

[O que é o laravel](https://code.tutsplus.com/tutorials/getting-started-with-laravel--cms-25386)

[10 razões para usar laravel](http://acadtec.com.br/site/blog/item/61-10-razoes-para-usar-laravel.html)

[Arquivo .env](http://pt.stackoverflow.com/questions/156660/laravel-5-arquivo-env)
