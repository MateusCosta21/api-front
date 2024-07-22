# API-FRONT
## Contexto
Mostrar usuário informações de determinados usuários no git consumindo uma api laravel

## Tecnologias

- AngularJs - Framework JavaScript para front-end
- Docker(Com Apache, Nginx e NodeJS) - O Docker permite que você separe seus aplicativos de sua infraestrutura para que você possa entregar software rapidamente.

## Instalação

##### Requisito obrigátorio
Antes de tudo você precisa ter o docker e o docker-compose e também o git.
Caso não tenha instalado, aqui alguns links de referência:
- Aqui encontra os passos para instalação do Docker => https://docs.docker.com/get-docker/ 
- Aqui encontra os passos para instalação do Docker Compose => https://docs.docker.com/compose/ 
- Aqui encontra os passos para instalação do git => https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

##### Clone o projeto
Com o git instalado e em um diretório da sua escolha, baixe o projeto:

```sh
git clone https://github.com/MateusCosta21/api-front.git
```


##### Suba o serviço

Primeiro copie o docker-compose-example para conseguir executar o container
```sh
cp docker-compose-example.yml docker-compose.yml
```

Em seguida, com o Docker-compose instalado, execute esse comando na raiz do projeto:

```sh
docker-compose up --build
```

Pronto, agora basta acessar a url. (Importante deixar na mesma porta) com o usuario do git. Se tudo estiver de acordo o projeto irá funcionar
