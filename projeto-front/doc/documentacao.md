# DOCUMENTAÇÃO DO PROJETO FRONT-END WEB
## PROJETO: GARAGEM CLÁSSICA - PORTAL DE CARROS ANTIGOS

**Instituição:** Universidade Positivo  
**Curso:** Desenvolvimento Front-End para Web  
**Disciplina:** DFEW.08 – Projeto Front-End para Web  
**Professor:** Fabricio Olivo (<fabricio@up.edu.br>)  
**Equipe:** Gustavo Mendes e Eduardo Costa  

---

## 1. TEMA ESCOLHIDO E OBJETIVOS DO SITE

### 1.1 Tema
O tema escolhido para o projeto foi **Carros Antigos (Antigomobilismo)**, abordando modelos históricos nacionais e internacionais (como Fusca, Opala, Maverick, Mustang, Dodge Charger e Kombi), marcos temporais da indústria automobilística, sonoridade de motores clássicos e preservação cultural.

### 1.2 Objetivos
- **Objetivo Geral:** Desenvolver um portal web responsivo, interativo e acessível offline composto por 10 páginas interligadas, demonstrando o domínio prático dos fundamentos de HTML5, CSS3, JavaScript e Bootstrap.
- **Objetivos Específicos:**
  - Aplicar estruturação semântica com tags HTML5 em todas as páginas.
  - Implementar folhas de estilo CSS3 explorando os três níveis de escopo (externo, incorporado e em linha) e seletores variados (tag, classe, id e pseudo-classes).
  - Desenvolver pelo menos 2 páginas puras (sem bibliotecas ou frameworks externos).
  - Criar interfaces adaptáveis para mobile e desktop através de CSS Grid, Flexbox e Media Queries.
  - Incluir recursos multimídia nativos de áudio e vídeo com controles funcionais.
  - Criar um sistema dinâmico de cadastro de veículos com JavaScript puro, integrando manipulação do DOM e persistência local via `localStorage`.

---

## 2. FERRAMENTAS E SOFTWARES DE SUPORTE
Durante o planejamento e desenvolvimento da aplicação, foram utilizadas as seguintes ferramentas e fontes digitais:

1. **[Visual Studio Code](https://code.visualstudio.com/):** Editor de código-fonte utilizado para a escrita de HTML, CSS e JavaScript, com suporte a extensões de destaque de sintaxe e validação.
2. **[Git e GitHub](https://github.com/):** Controle de versão distribuído e hospedagem pública do repositório de código-fonte do projeto.
3. **[MDN Web Docs](https://developer.mozilla.org/pt-BR/):** Documentação oficial da Mozilla utilizada para consulta de semântica HTML5, regras de CSS Grid, Flexbox e métodos da API do DOM.
4. **[W3Schools](https://www.w3schools.com/):** Plataforma de tutoriais e testes rápidos para validação de sintaxe e atributos nativos de formulários.
5. **[Bootstrap 5](https://getbootstrap.com/):** Framework front-end utilizado em modo local (offline) para classes utilitárias de layout, grid, cartões e botões.
6. **[Google Chrome & DevTools](https://developer.chrome.com/docs/devtools/):** Navegador e suíte de ferramentas de inspeção para teste de responsividade (emulação de smartphone e desktop), auditoria de console e verificação do `localStorage`.

---

## 3. LINGUAGENS E RECURSOS UTILIZADOS
- **HTML5:** Utilização de elementos semânticos (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<video>`, `<audio>`), estruturação de tabelas (`<table>`, `<th>`, `<tr>`, `<td>`) e formulários com validações nativas.
- **CSS3:** Estilização visual em três níveis (arquivo externo `css/styles.css`, tags `<style>` incorporadas no `<head>` e atributo `style` em linha), seletores de tag, classe (`.`) e identificador (`#`), pseudo-classes (`:hover`, `:focus`, `:invalid`), além de técnicas modernas de layout com **CSS Grid** e **CSS Flexbox**.
- **JavaScript (Vanilla JS):** Código simples, procedural e didático para manipulação dinâmica do DOM, tratamento de eventos (`DOMContentLoaded`, `submit`, `click`) e armazenamento persistente com `localStorage`.
- **Bootstrap 5 (Local):** Arquivos baixados localmente para garantir funcionamento 100% offline sem depender de conexões externas.

---

## 4. SITES DE REFERÊNCIA E INSPIRAÇÃO
Para a definição do visual, hierarquia de conteúdo e tom editorial do site, foram consultados:
1. **[Federação Brasileira de Veículos Antigos (FBVA)](https://www.fbva.org.br/):** Referência institucional sobre regras de originalidade, placa preta e eventos no Brasil.
2. **[Petrolicious](https://petrolicious.com/):** Referência visual de fotografia e tipografia elegante para automóveis clássicos.
3. **[Museu do Automóvel de Curitiba](http://museudoautomovel.org.br/):** Inspiração para curadoria e organização histórica do acervo veicular.

---

## 5. DIVISÃO DE TAREFAS ENTRE OS INTEGRANTES
A equipe trabalhou de forma colaborativa, com divisão equilibrada das responsabilidades:
- **Integrante 1 (Gustavo Mendes):**
  - Estruturação da arquitetura de pastas e arquivos (`css/`, `js/`, `img/`, `video/`, `audio/`, `doc/`).
  - Criação do layout base semântico das 10 páginas HTML.
  - Implementação do script de manipulação do DOM e persistência com `localStorage` em `js/script.js`.
  - Configuração do layout responsivo via CSS Grid, Flexbox e Media Queries.
- **Integrante 2 (Eduardo Costa):**
  - Levantamento e pesquisa dos dados técnicos e históricos dos veículos.
  - Criação e curadoria dos ativos visuais (ilustrações vetoriais e mídias de vídeo e áudio).
  - Estilização visual dos formulários com estados `:focus`, `:hover` e `:invalid`.
  - Redação da documentação acadêmica e preparação dos slides para defesa oral.

---

## 6. DIFICULDADES ENCONTRADAS E SOLUÇÕES ADOTADAS
1. **Garantia de Funcionamento 100% Offline:**
   - *Desafio:* Garantir que a avaliação do professor ocorresse perfeitamente mesmo sem internet, sem links quebrados de CDN ou imagens externas indisponíveis.
   - *Solução:* Foi feito o download local dos arquivos do Bootstrap (`css/bootstrap.min.css` e `js/bootstrap.bundle.min.js`), geração e inclusão local de todos os arquivos de mídia (áudio WAV, vídeo MP4 e ilustrações vetoriais SVG autônomas na pasta `img/`).
2. **Separação entre Páginas Puras e Páginas com Framework:**
   - *Desafio:* Cumprir o requisito de pelo menos 2 páginas exclusivamente com HTML, CSS e JS puros sem carregar Bootstrap.
   - *Solução:* As páginas `historia.html` e `curiosidades.html` foram desenvolvidas com estilização pura em `css/styles.css` e CSS incorporado, demonstrando domínio das propriedades fundamentais da web sem muletas de frameworks.
3. **Regra de Comentários Apenas no Cabeçalho:**
   - *Desafio:* Não inserir comentários explicativos no meio das linhas do script ou da folha de estilos para não violar a regra do slide 6.
   - *Solução:* Adotou-se comentários estruturados e completos estritamente no bloco de cabeçalho de cada arquivo, mantendo o corpo do código limpo, legível e autoexplicativo com nomes de variáveis e funções em português.

---

## 7. ESTUDO DA EXPERIÊNCIA DO USUÁRIO (UX)
A experiência do usuário foi projetada priorizando simplicidade, clareza e facilidade de navegação:
- **Navegação Uniforme:** Todas as 10 páginas contêm o mesmo menu de navegação no topo e rodapé padronizado, evitando que o visitante se sinta desorientado.
- **Feedback Imediato:** Ao cadastrar ou remover um veículo na Garagem Virtual, mensagens claras de alerta e confirmação comunicam ao usuário o resultado da ação.
- **Acessibilidade de Conteúdo:** Textos informativos em contraste adequado sobre fundo claro, facilitando a leitura mesmo em telas menores.

---

## 8. ESTUDO DA INTERFACE DO USUÁRIO (UI)
- **Cabeçalho e Barra de Navegação:** Cores escuras sólidas (`#1e293b` e `#0f172a`) que conferem sofisticação e seriedade.
- **Cartões de Conteúdo:** O uso de bordas sutis (`#e2e8f0`), cantos levemente arredondados (`border-radius: 8px`) e sombras leves criam separação visual limpa entre seções.
- **Efeitos de Hover:** Efeito visual na cor laranja clássico (`#ea580c`) ao passar o cursor sobre botões e itens de menu, indicando interatividade.

---

## 9. ESTUDO E APLICAÇÃO DA USABILIDADE
Com base nas Heurísticas de Usabilidade de Jakob Nielsen:
1. **Visibilidade do status do sistema:** A tabela da garagem reflete em tempo real os itens adicionados ou deletados pelo usuário.
2. **Correspondência com o mundo real:** Nomenclaturas familiares ao universo automotivo (Modelo, Marca, Ano, Motor, Potência, Garagem Virtual).
3. **Controle e liberdade para o usuário:** Botão "Limpar Campos" nos formulários e confirmação antes de excluir qualquer registro.
4. **Prevenção de erros:** Validações nativas de formulário com restrições de formato (`type="email"`, `pattern`, `minlength`, limites numéricos de ano entre 1900 e 1995).

---

## 10. ESCOLHA DA PALETA DE CORES
A paleta de cores foi pensada para transmitir sofisticação retrô aliada à modernidade:
- **Azul Noturno / Petróleo Escuro (`#1e293b` e `#0f172a`):** Utilizado em cabeçalhos, rodapés e títulos principais, transmitindo estabilidade e elegância.
- **Laranja Retrô / Terracota (`#ea580c`):** Cor de destaque (Call-to-Action) para botões principais, linhas de separação e efeitos `:hover`, remetendo aos esportivos clássicos da década de 70 (como o Opala SS laranja).
- **Cinza Claro / Gelo (`#f4f6f8` e `#ffffff`):** Cor de fundo limpa para o corpo da página e cartões, garantindo conforto visual e legibilidade.
- **Cinza Ardósia (`#64748b` e `#cbd5e1`):** Usado em bordas de tabela, textos secundários e legendas técnicas.

---

## 11. ESCOLHA DA TIPOGRAFIA
Para garantir máxima compatibilidade offline sem depender de fontes externas da internet, foi utilizada a família nativa:
`font-family: Arial, Helvetica, sans-serif;`
- **Arial:** Fonte sem serifa com excelente legibilidade tanto em monitores de alta resolução quanto em displays de celulares.
- **Hierarquia Tipográfica:**
  - Títulos principais (`h1` e `h2`): Negrito com tamanhos entre 24px e 32px.
  - Subtítulos (`h3`): 18px a 20px, destacando itens e seções.
  - Textos de corpo (`p`): 15px com altura de linha confortável (`line-height: 1.6`).

---

## 12. MAPA DO SITE (SITEMAP) E TELAS DESENVOLVIDAS

```
                        [ index.html ] (Início / Destaques)
                              |
    +-----------+-------------+-------------+------------+-----------+
    |           |             |             |            |           |
[historia] [curiosidades] [modelos]     [galeria]    [tabela]   [multimidia]
 (Pura)       (Pura)     (Flexbox)       (Grid)      (Tabela)    (Audio/Video)
    |           |             |             |            |           |
    +-----------+-------------+-------------+------------+-----------+
                              |
               +--------------+--------------+
               |              |              |
          [cadastro]      [contato]       [sobre]
         (LocalStorage) (Validações)    (Acadêmico)
```

### Relação Detalhada das 10 Páginas:
1. **`index.html` (Início):** Página principal contendo banner de boas-vindas, apresentação institucional da Garagem Clássica e cards com os três principais carros de destaque.
2. **`historia.html` (História):** Página com HTML e CSS puros (sem Bootstrap), abordando a evolução das décadas de 1900 a 1975 e os critérios legais de veículo de coleção no Brasil.
3. **`curiosidades.html` (Curiosidades):** Segunda página com HTML, CSS e JS puros (sem Bootstrap), contendo fatos inusitados da indústria automotiva e botão interativo para revelar curiosidade oculta.
4. **`modelos.html` (Modelos Famosos):** Catálogo de cartões distribuídos horizontalmente com **CSS Flexbox**, apresentando Fusca, Opala, Maverick, Mustang, Kombi e Charger com fotos, textos e links.
5. **`galeria.html` (Galeria de Fotos):** Galeria visual estruturada com **CSS Grid Layout** em 3 colunas no desktop e 1 coluna em smartphones.
6. **`tabela.html` (Tabela Comparativa):** Tabela de dados de tamanho 6x6 (superior ao mínimo de 4x4) com títulos de colunas, comparando motorização, potência e velocidade máxima dos clássicos.
7. **`multimidia.html` (Multimídia):** Página com reprodutor de vídeo nativo em HTML5 (`<video controls>`) e reprodutor de áudio nativo (`<audio controls>`) com o som de partida e aceleração de motor antigo.
8. **`cadastro.html` (Minha Garagem):** Aplicação interativa com formulário de cadastro de veículos, tabela dinâmica com manipulação do DOM e persistência local com `localStorage`.
9. **`contato.html` (Contato):** Formulário de fale conosco contendo campos `text`, `email`, `select`, `textarea` e `submit`, com validações nativas (`required`, `minlength`, `pattern`, `placeholder`) e estilização das pseudo-classes `:focus`, `:hover` e `:invalid`.
10. **`sobre.html` (Sobre o Projeto):** Apresentação acadêmica contendo dados da Universidade Positivo, objetivos pedagógicos, tecnologias aplicadas e identificação dos integrantes da equipe.

---

## 13. TÓPICO ESPECÍFICO: APLICAÇÕES DE JAVASCRIPT NO SITE

O JavaScript do projeto foi concentrado no arquivo `js/script.js` (além da interação na página pura `curiosidades.html`) e foi desenvolvido de forma clara, sequencial e objetiva, cumprindo integralmente os requisitos solicitados:

### 13.1 Manipulação Dinâmica do DOM e Eventos
- O evento `DOMContentLoaded` aguarda o carregamento seguro do documento antes de executar a função de leitura.
- O evento `submit` do formulário intercepta o envio tradicional da página através de `evento.preventDefault()`, lendo os valores digitados nos inputs (`document.getElementById(...).value`).
- A manipulação do DOM é realizada por meio da criação dinâmica de nós (`document.createElement("tr")`, `document.createElement("td")`, `document.createElement("button")`), associação de texto com `.textContent` e inserção no documento com `.appendChild()`.
- A remoção de itens ocorre via evento `onclick` dinâmico em cada botão de exclusão gerado na tabela.

### 13.2 As 4 Estruturas Básicas de Programação
1. **Estrutura de Dados:**
   - Vetor de Objetos (`Array`): `let listaCarros = [...]`, onde cada elemento armazena `{ modelo, marca, ano, cor }`.
2. **Estrutura Sequencial:**
   - Fluxo contínuo de leitura de variáveis, instanciação do novo objeto, inserção no array via `.push()`, gravação no storage e invocação da função de redesenho da interface.
3. **Estrutura Condicional:**
   - `if (dadosSalvos !== null)` para verificar existência prévia de dados no navegador.
   - `if (modelo === "" || marca === "" || ...)` para validação de campos obrigatórios antes do cadastro.
   - `if (confirmacao === true)` para confirmar antes de executar a exclusão de um registro.
4. **Estrutura de Repetição:**
   - Laço `for (let i = 0; i < listaCarros.length; i++)` que percorre iterativamente todos os veículos armazenados no array e constrói a tabela HTML correspondente.

### 13.3 Armazenamento Persistente com `localStorage`
- **Gravação:** `localStorage.setItem("carrosGaragem", JSON.stringify(listaCarros));` converte o array de objetos em string JSON e salva no armazenamento local do navegador do usuário.
- **Recuperação:** `JSON.parse(localStorage.getItem("carrosGaragem"));` resgata e desserializa os dados salvos sempre que a página for aberta ou atualizada (F5), garantindo que os veículos cadastrados não se percam.

---

## 14. INSTRUÇÕES PARA EXECUÇÃO OFFLINE E ENTREGA NO GITHUB
1. **Execução Offline:**
   - Extraia o arquivo compactado `projeto-front.zip`.
   - Dê um duplo clique no arquivo `index.html` na raiz do projeto.
   - O site será aberto em qualquer navegador web moderno sem necessidade de servidor local ou acesso à internet.
2. **Repositório GitHub:**
   - O projeto está estruturado com a pasta raiz contendo os 10 arquivos HTML, e as subpastas `css`, `js`, `img`, `video`, `audio` e `doc`.
   - Para publicar no GitHub, basta executar:
     ```bash
     git init
     git add .
     git commit -m "Entrega do Projeto Front-End Web - Garagem Clássica"
     git branch -M main
     git remote add origin <URL_DO_REPOSITORIO>
     git push -u origin main
     ```
