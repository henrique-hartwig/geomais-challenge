# BACK-END

O back-end foi desenvolvido em ambiente `NodeJS` e para tal foram escolhidos a engine de banco de dados `PostgreSQL` e a biblioteca `express` para criar a API.

## Instruções

Entre na pasta do back-end:

> cd back-end

### Banco de Dados
O banco de dados escolhido para este desafio é o PostgreSQL. Para isso, é necessário tê-lo instalado em sua máquina.

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
A API já está com suas credenciais para acessar o banco. Rodando os comandos abaixo a API estará disponível para consumir os dados do banco de dados na porta 3001. 

> npm install \
> npm start

Pronto, agora vamos precisamos subir o front-end para consumir os dados e ter nossa aplicação funcionando.

Siga as instruções do README.md da pasta front-end.
