# Ajudante do Professor de Exatas 🎓

Um aplicativo web moderno, responsivo e projetado para auxiliar professores de Ciências Exatas (Física, Química e Matemática). O app centraliza simuladores virtuais interativos em uma interface amigável que simula a experiência de uso de um Tablet.

## 🚀 Funcionalidades

- **Experiência SPA (Single Page Application)**: Navegação fluida entre telas sem recarregar a página, construída 100% com Vanilla JavaScript.
- **Design "Glassmorphism" Premium**: Interface visualmente atrativa, com efeitos de desfoque, sombreamento e paleta de cores moderna focada na retenção de atenção dos alunos.
- **Integração de Simuladores via Iframe**: Permite abrir experiências interativas (do SciSimulator) nativamente dentro do aplicativo, mantendo o usuário engajado.
- **Responsividade Anti-Scroll**: Estrutura desenvolvida usando Flexbox e CSS Grid para ajustar dinamicamente o conteúdo ao tamanho da tela (Mobile, Tablet ou Desktop), eliminando barras de rolagem desnecessárias.

## 🛠️ Arquitetura e Tecnologias

A aplicação não utiliza frameworks pesados, garantindo performance máxima. O código é modularizado para facilitar a manutenção:

- **HTML5**: Estrutura semântica (`index.html`).
- **CSS3 Modular**: 
  - `variables.css`: Tema global.
  - `layout.css`: Controle do contêiner flexível.
  - `components.css`: Estilização de botões, avatares e cards.
  - `screens.css`: Regras específicas para o interior de cada tela.
- **Vanilla JS**:
  - `data.js`: Mock de dados (Matérias, Links, Assets).
  - `ui.js`: Renderização dinâmica do DOM (cards).
  - `app.js`: Lógica de roteamento e injeção do Iframe.

## 🖥️ Como Executar o Projeto

Como o projeto é construído em HTML/CSS/JS puros e não usa dependências externas complexas (sem `node_modules` ou build steps):

1. Clone o repositório em sua máquina:
```bash
git clone https://github.com/desv-jorge/ajudante-professor-exatas.git
```
2. Abra a pasta do projeto.
3. Dê um duplo-clique no arquivo `index.html` para abri-lo no seu navegador padrão (Google Chrome, Firefox, Safari, Edge, etc.).
4. *Opcional*: Se desejar usar extensões como o **Live Server** (do VS Code), basta clicar com o botão direito no `index.html` e selecionar "Open with Live Server".

## 🖼️ Personalização

Para modificar as imagens animadas (GIFs) utilizadas nas matérias ou na tela principal, basta acessar o arquivo `js/data.js` (para as matérias) e o `index.html` (para a tela inicial) e substituir os endereços (URLs) nos atributos correspondentes.

---
*Projeto desenvolvido como parte do fluxo de estudos em tecnologia educacional.*
