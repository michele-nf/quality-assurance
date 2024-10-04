# PNGN

Este repositório contém dois módulos principais, prático e teórico, dentro da pasta `PNGN`. Abaixo, você encontrará uma descrição detalhada da estrutura.

## Estrutura de Pastas

```
PNGN/
│
├── pratica/
│   └── postman/
│       ├── collection/
│       │   └── PNGN.postman_collection.json  
│       ├── environment/
│       │   └── PNGN.postman_environment.json  
│       └── newman_postman/
│           └── newman/
│               └── Relatórios gerados pelas execuções do Newman
│
└── teorica/
    ├── pergunta1.md  
    ├── pergunta2.md  
    ├── pergunta3.md  
    └── pergunta4.md  

```

## Descrição das Pastas

A pasta `pratica` contém os artefatos utilizados para a execução de testes práticos de API utilizando Postman e Newman.

Dentro da pasta `postman`, temos três subpastas:

- `collection/`: Contém o arquivo JSON da collection de testes de API, onde são executados testes de autenticação.
- `environment/`: Contém o arquivo JSON das variáveis de ambiente necessárias para a execução dos testes via Postman.
- `newman_postman/`: Diretório onde são armazenados os relatórios gerados pela execução do Newman.

Na pasta `teorica`, estão as respostas teóricas a quatro perguntas solicitadas, divididas em arquivos separados:

- pergunta1.md: Resposta à pergunta 1.
- pergunta2.md: Resposta à pergunta 2.
- pergunta3.md: Resposta à pergunta 3.
- pergunta4.md: Resposta à pergunta 4.

## Instruções para Execução dos Testes

Para executar os testes contidos na pasta `pratica/postman`, siga os seguintes passos:

### 1. Importar Collection e Environment no Postman (Desktop)

Para executar os testes manualmente no **Postman Desktop**:

1. Abra o **Postman Desktop**.
2. Importe os arquivos da collection e do ambiente,
3. Execute a collection configurada com o ambiente correto, garantindo que as variáveis e endpoints sejam carregados de acordo com a configuração do ambiente.

### 2. Executar Testes via Newman

Se preferir executar os testes via linha de comando com **Newman**, siga as instruções abaixo:

1. Abra o terminal e navegue até a pasta `newman_postman`, onde o relatório de execução será salvo:
   ```bash
   cd pratica/postman/newman_postman
   ```

**Pré-requisitos:**

Antes de executar os testes via **Newman**, você precisa garantir que o **Node.js** e o **npm** estão instalados em sua máquina, além dos pacotes necessários para rodar o **Newman** e gerar relatórios.

#### Verificar Instalação do Node.js e npm

2. Para verificar se o **Node.js** e o **npm** estão instalados, abra o terminal e execute os seguintes comandos:

   ```bash
   node -v
   npm -v
   ```
Se ambos retornarem versões instaladas (exemplo: v14.17.6), o Node.js e npm já estão configurados corretamente.
Caso contrário, baixe e instale o Node.js e o npm do site oficial: Node.js.

**Instalar o Newman**

3. Se o Node.js e o npm já estão instalados, o próximo passo é instalar o Newman globalmente em sua máquina. Execute o seguinte comando no terminal:

    ```bash
    npm install -g newman
    ```
**Instalar o Newman Reporter (para gerar relatórios em HTML)**

4. Para gerar relatórios em formato HTML, você precisa instalar o pacote de relatórios do Newman. Execute o seguinte comando no terminal:

    ```bash
    npm install -g newman-reporter-htmlextra
    ```

Esse comando instalará o Newman HTML Reporter, que permitirá que você gere relatórios em formato HTML após a execução dos testes.

Agora você está pronto para executar os testes usando o Newman e gerar relatórios em HTML.

**Execute o comando Newman para rodar os testes, utilizando a collection e o environment:**

Resultado exibido no terminal
```bash
newman run https://api.getpostman.com/collections/17800266-2fd49e2c-e4ef-4ffc-be91-b8499116e264?apikey=PMAK-66ff4eb660415a00013988b6-3652bb383c25afa0b1ab259dc9a464b6aa –environment https://api.getpostman.com/environments/17800266-472ad5fd-d56c-43b1-88c5-a772534d3311?apikey=PMAK-66ff4eb660415a00013988b6-3652bb383c25afa0b1ab259dc9a464b6aa
```

Resultado exibido no relatório
```bash
newman run https://api.getpostman.com/collections/17800266-2fd49e2c-e4ef-4ffc-be91-b8499116e264?apikey=PMAK-66ff4eb660415a00013988b6-3652bb383c25afa0b1ab259dc9a464b6aa --environment https://api.getpostman.com/environments/17800266-472ad5fd-d56c-43b1-88c5-a772534d3311?apikey=PMAK-66ff4eb660415a00013988b6-3652bb383c25afa0b1ab259dc9a464b6aa -r htmlextra
```

Certifique-se de estar na pasta newman_postman para que o relatório seja corretamente armazenado na pasta newman.
