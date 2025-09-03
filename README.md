# IFRO Portal - Proposta de Nova Página Inicial

Este projeto é uma proposta acadêmica para uma nova página inicial do portal do Instituto Federal de Rondônia (IFRO). Desenvolvido como trabalho final de disciplina, o objetivo é apresentar uma interface moderna, responsiva e interativa para o site institucional do IFRO.

## Tecnologias Utilizadas

- **Vite**: Ferramenta de build rápida para desenvolvimento web moderno
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática
- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilização responsiva e moderna
- **SVG**: Mapa interativo do estado de Rondônia

## Funcionalidades

### 🏛️ Header Institucional
- Links para redes sociais (Facebook, X/Twitter, Instagram, YouTube)
- Logotipo do IFRO
- Barra de pesquisa
- Menu de navegação principal (Início, Institucional, Cursos, Campi, Ensino, Pesquisa e Extensão, Contato)

### 🎠 Carrossel de Imagens
- Apresentação visual das principais notícias ou destaques
- Navegação manual com botões anterior/próximo
- Funcionalidade implementada em TypeScript

### 📋 Cartões de Acesso Rápido
- Processo Seletivo
- Cursos
- Editais
- Calendário
- Biblioteca

### 📰 Seção de Notícias
- Lista das últimas notícias do IFRO
- Links para visualizar todas as notícias
- Dados simulados para demonstração

### 🗺️ Mapa Interativo dos Campi
- Mapa vetorial do estado de Rondônia
- Destaque visual dos municípios com campi do IFRO
- Interatividade bidirecional:
  - Hover nos links da lista destaca a cidade no mapa
  - Hover nas cidades do mapa destaca os links correspondentes
  - Cliques nas cidades redirecionam para as páginas dos campi
- Indicação especial para campus em implementação (Buritis)

### 📱 Design Responsivo
- Layout adaptável para desktop, tablet e mobile
- Navegação otimizada para diferentes tamanhos de tela

## Estrutura do Projeto

```
ifro-portal/
├── index.html              # Página principal
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração TypeScript
├── vite.config.ts          # Configuração Vite
├── public/                 # Assets estáticos
│   ├── *.svg               # Ícones e logotipos
│   ├── *.png/*.jpg         # Imagens do carrossel e notícias
│   └── Mapa_de_Rondônia.svg # Mapa vetorial
└── src/
    ├── main.ts             # Ponto de entrada da aplicação
    ├── interatividade-mapa.ts # Lógica do mapa interativo
    └── styles/             # Folhas de estilo
        ├── style.css       # Estilos gerais e responsividade
        ├── header.css      # Estilos do cabeçalho
        ├── cards.css       # Estilos dos cartões
        ├── map.css         # Estilos do mapa
        ├── number.css      # Estilos para números/campis
        ├── evento.css      # Estilos para eventos
        ├── videos.css      # Estilos para vídeos
        └── footer.css      # Estilos do rodapé
```

## Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   ```

4. **Preview da build:**
   ```bash
   npm run preview
   ```

## Desenvolvimento

O projeto utiliza Vite como bundler, proporcionando:
- Hot Module Replacement (HMR) para desenvolvimento rápido
- Build otimizado para produção
- Suporte nativo a TypeScript
- Servidor de desenvolvimento com recarregamento automático

## Interatividade do Mapa

A funcionalidade de mapa interativo foi implementada em TypeScript puro, sem dependências externas, utilizando:
- Manipulação do DOM para eventos de mouse
- Classes CSS para destaques visuais
- Navegação programática entre elementos

## Responsividade

O design é totalmente responsivo, adaptando-se automaticamente a diferentes dispositivos:
- Desktop: Layout completo com todas as funcionalidades
- Tablet: Ajustes no espaçamento e tamanho de elementos
- Mobile: Menu colapsível e otimização para toque

## Contribuição

Este projeto foi desenvolvido como trabalho acadêmico e serve como proposta para o portal oficial do IFRO. Sugestões e melhorias são bem-vindas para aprimorar a experiência do usuário.

## Licença

Este projeto é parte de um trabalho acadêmico e seu uso é destinado à avaliação institucional.</content>
