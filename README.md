
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/daviaquino87/answaers.git
```

# Questoes

Entre no diretório do projeto

```bash
  cd answaers
```

execute as questões com npx:

```bash
  npx ts-node-dev {nome do arquivo para rodar}
```


# Search_api

Entre no diretório do projeto

```bash
  cd search_api

```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Deploy

Para fazer o deploy desse projeto rode

<i>obs: Para o seguinte passo certifique-se de ter docker e  docker-compose na sua maquina</i>

```bash
  docker-compose up
```


## Documentação da API

#### Buscar um CEP

```http
  GET /cep/search
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `cep` | `query-param` | **Obrigatório**. CEP a ser buscado |




