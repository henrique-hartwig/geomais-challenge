<img src="http://www.geomais.com.br/images/logo.png"
     alt="Geomais Logo" />
<br />
# Desafio Geomais
## Cadastro de pessoas

Este documento descreve a solução proposta para criar uma aplicação de cadastro de pessoas e o passo a passo para testar e validar os requisitos.

## Etapa 1 - *(Front-end)*
Para o desenvolvimento da aplicação foram usados o framework `React` a biblioteca gráfica `Antd`.

Antes de continuar com os passos deste arquivo, certifique-se de que o Banco de Dados já foi restaurado e inicializado. Ou se preferir, pode se testar usando a fake API mantida no projeto, com os nomes e atributos das pessoas alterados, para manter a compatibilidade tanto com Back-end real e o fake com json-server.

Como convenção de boas práticas, todo código e entidades foram criadas em inglês. Por tal motivo, as entidades `pessoas` que estavam como exemplo em `db.json` foram renomeadas para `persons`.


## Instruções
Inicie o projeto instalando os pacotes necessários:
> cd front-end \
> npm install

Em seguida, suba a aplicação do Front-end deixando-o disponível em localhost:3000.
> npm start

Abra o navegador e acesse localhost:3000. É possível criar, editar, deletar e filtrar pelos registros de pessoas através do nome.

## Etapa 2 - *(Back-end)*
O back-end foi desenvolvido em ambiente `NodeJS` e para tal foram escolhidos a engine de banco de dados `PostgreSQL` e a biblioteca `express` para criar a API.

## Instruções

### 1. Banco de Dados

Para iniciá-lo, rodar no terminal:
> sudo service postgresql start

Para se recuperar os dados do banco, use o arquivo `geomais_db_backup.sql` que está nesta pasta.
> pg_restore -U geomais_user -d geomais_db -h localhost geomais_db_backup.sql

Insira a senha `senha123`

Com isso, o backup estará carregado em sua máquina e pronto para ter os dados acessados com as seguintes credenciais:

> user: 'geomais_user' \
> password: 'senha123' \
> database: 'geomais_db' \
> host: 'localhost' \
> port: 5432

### Testando a API localmente
A API está com suas credenciais para acessar o banco. Rodando os comandos abaixo a API estará disponível para consumir os dados do banco de dados na porta 3001. 

> npm install \
> npm start

Pronto, agora vamos precisamos subir o front-end para consumir os dados e ter nossa aplicação funcionando.

### 2. JSON-Server (opcional)

Esta etapa é para testa opcional caso não consiga usar o backup do banco que está no projeto.

> cd fake-api \
> npm install \
> npm start

Agora a API fake estará disponível na mesma porta 3001, assim mantém a compatibilidade do Front-end para conseguir consumir de qual fonte preferir.

ATENÇÃO: Só é possível subir uma API por vez, pois ambas estão na mesma porta e endereço!