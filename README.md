# Project_Cars_DevElas

Projeto desenvolvido durante o modulo 8 do curso DevElas. O objetivo do projeto foi criar um serviço para cadastro de automoveis. A criação do banco de dados foi executada com o sistema de migrations do sequelize e toda a integração do banco foi realizada pelo sequelize.

## 🚀 Começando

Baixar o repositorio Project_Cars_DevElas. Abrir o terminal e executar npm i para instalar todas as dependencias contidas no package.json e necessarias para que o projeto seja executado em sua maquina.

### 📋 Pré-requisitos

No projeto existe um arquivo .envexample que deve ser configurado conforme as informações do seu projeto e gravadas em um arquivo chamado .env. Abaixo o exemplo que foi disponibilizado no .envexample.

PORT=<<PORT>>
HOST_DB=<<HOST_DB>>
PORT_DB=<<PORT_DB>>
USER_DB=<<USER_DB>>
PASS_DB=<<PASS_DB>>
DATABASE=<<DATABASE>>
DIALECT=<<DIALECT>>

Alem da criação do arquivo .env você deve confirgurar o arquivo config.json localizado na pasta config. Nele você deve setar as seguintes informações.

      {
            "development": {
            "username": "xxxx",
            "password": "xxxxxx",
            "database": "database_xxxxx",
            "host": "xxxxx",
            "dialect": "xxxxxx",
            "port": "xxxxx"
      }

### 🔧 Instalação

O banco de dados deve ser criado. Podendo utilizar qualquer sistema de gerenciamento de bancos de dados relacionados. No projeto original foi utlizado o Postgres.
Para a criação do banco de dados utilizou-se o migrations e para executar essa criação deve-se seguir os seguintes passos:

npx sequelize-cli init

npx sequelize-cli db:create

npx sequelize-cli db:migrate

npx sequelize-cli db:seed:all

### 🔩 Rodando o Projeto

Para rodar o projeto deve-se estar dentro da pasta (project-car) e executar no terminal o comando npm run dev (conforme configurado no atalho do package.json).

## ⚙️ Executando os testes

Para verificar o funcionamento do projeto, utilizou-se o Thunder Client. Abaixo o exemplo para execução de cada funcionalidade.

Para cadastro de um novo carro:
(post): http://localhost/cars

Exemplo de um arquivo json que deve ser inserido no Body:

      {
            "brand": "Fiat",
            "model": "Argo",
            "yearOfManufacture": "2018",
            "color": "branco"
      }

Para visualizar todos os carros cadastrados:
(get): http://localhost/cars

Para visualizar um cadastro a partir do id:
(get): http://localhost/cars/numeroid

Exemplo: http://localhost/cars/e105e990-9f4c-4d46-b67d-fe9e1d2c12435

Para visualizar um cadastro a partir da brand:
(get): http://localhost/cars/brand

Exemplo: http://localhost/cars/?brand=Jeep

Para atualizar um cadastro:
(patch): http://localhost/cars/numeroidquedeseja atualizar

Exemplo de uma atualização de arquivo que deve ser inserido no Body:

      {

            "yearOfManufacture": "2020",

      }

Para remover um cadastro:
(delete):http://localhost/cars/numeroidquedesejadeletar
