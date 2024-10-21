# Mares do nordeste

Um aplicativo React Native para interação social, onde usuários podem se cadastrar, enviar mensagens em tempo real e compartilhar postagens. O app utiliza Firebase para autenticação e armazenamento de dados.

## Funcionalidades

- **Autenticação de Usuários**: Cadastro e login com validação de email.
- **Perfil do Usuário**: Visualização e edição do perfil, incluindo imagem de perfil.
- **Chat em Tempo Real**: Converse com outros usuários por meio de uma interface de chat.
- **Lista de Usuários**: Visualize todos os usuários registrados e inicie conversas.
- **Criação de Postagens**: Crie e visualize postagens dentro do aplicativo.
- **Navegação Intuitiva**: Navegação entre diferentes telas utilizando abas e pilhas de navegação.

## Tecnologias Usadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Firebase**: Plataforma para autenticação de usuários e armazenamento em tempo real.
- **React Navigation**: Biblioteca para navegação entre telas.
- **Expo**: Utilizado para facilitar o desenvolvimento e testes do aplicativo.
- **Context API**: Gerenciamento de estado global para postagens.

## Capturas de Tela

![Tela de Login](./assets/login.png)
![Tela de Usuários](./assets/user_list.png)
![Tela de Chat](./assets/chat.png)

## Instalação

Siga as instruções abaixo para rodar o aplicativo localmente:

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (opcional, mas recomendado)

### Passos para Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu_usuario/seu_repositorio.git
2. **Navegue até o diretório do projeto:o**:
   ```bash
   cd seu_repositorio
3. **Instale as dependências:**:
   ```bash
   npm install
    # ou
   yarn install
4. **Configure o Firebase:**:
 - Crie um projeto no Firebase Console.
 - Ative os serviços de Autenticação e Firestore.
 - Crie um arquivo de configuração firebase.js e adicione as credenciais do seu projeto Firebase:
  ```bash
   import { initializeApp } from "firebase/app";
   import { getAuth } from "firebase/auth";
   import { getFirestore } from "firebase/firestore";
    
   const firebaseConfig = {
   apiKey: "YOUR_API_KEY",
   authDomain: "YOUR_AUTH_DOMAIN",
   projectId: "YOUR_PROJECT_ID",
   storageBucket: "YOUR_STORAGE_BUCKET",
   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
   appId: "YOUR_APP_ID",
   };
    
   const app = initializeApp(firebaseConfig);
   export const authentication = getAuth(app);
   export const db = getFirestore(app);
   
3. **Inicie o aplicativo:**:
   ```bash
   npm install
    # ou
   yarn install
3. **Instale as dependências:**:
   ```bash
   npm start
   # ou
   yarn start



##Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.

Contato
Seu Nome: seu_email@exemplo.com
GitHub: ErickW22
LinkedIn: seu_linkedin



