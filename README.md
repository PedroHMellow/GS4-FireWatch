# FireWatch - Sistema de Monitoramento de Queimadas

## Equipe 
  - Gabriel Borba - RM553187
  - Enzo Teles de Moura – RM553899
  - Pedro Henrique Mello Silva Alves - RM554223

## Descrição do Problema 

As queimadas e o desmatamento causam grandes danos ao meio ambiente e colocam a saúde das pessoas em risco. As soluções existentes são caras e pouco acessíveis, principalmente para comunidades que vivem em áreas remotas.


## Visão Geral da Arquitetura da Solução

A solução é construída com uma arquitetura moderna dividida em frontend e backend:

### Backend
- Desenvolvido com **Spring Boot 3.2.5** (Java)
- Utiliza **Maven** para gerenciamento de dependências
- Banco de dados **H2** (em memória) para desenvolvimento
- Implementa uma API RESTful para gerenciamento de dados
- Estrutura organizada em camadas (Controllers, Services, Repositories)

### Frontend
- Desenvolvido com **React** para uma interface moderna e responsiva
- Integra bibliotecas especializadas:
  - **Leaflet**: Para visualização de mapas interativos
  - **Chart.js**: Para visualização de dados em gráficos
- Componentes principais:
  - Mapa interativo com marcadores de fogo
  - Dashboard com análise de dados
  - Sistema de denúncias
  - Visualização de heatmap

## Instruções para Execução

### Pré-requisitos
- Java Development Kit (JDK) 17 ou superior
- Node.js e npm (para o frontend)
- Apache Maven

### Backend
1. Navegue até o diretório do projeto:
   ```bash
   cd gs-ddd2-queimadas
   ```

2. Execute a aplicação Spring Boot:
   ```bash
   mvn spring-boot:run
   ```

3. O backend estará disponível em `http://localhost:8080`

### Frontend
1. Navegue até o diretório do frontend:
   ```bash
   cd frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

4. O frontend estará disponível em `http://localhost:8081`
