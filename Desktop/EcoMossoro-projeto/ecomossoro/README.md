# EcoMossoró

Protótipo de site responsivo para divulgar pontos de coleta e iniciativas de reciclagem em Mossoró/RN.

## Páginas

- `index.html`: página inicial e busca rápida por material.
- `pontos.html`: diretório demonstrativo com filtros por bairro/nome e material.
- `iniciativas.html`: iniciativas sugeridas e guia de separação.
- `sobre.html`: propósito, valores e transparência sobre os dados.
- `contato.html`: formulário de sugestão com validação no navegador.

## Tecnologias

- HTML5 semântico
- CSS3 organizado por responsabilidade
- JavaScript puro para menu, filtros e validação demonstrativa

PHP não é necessário para a versão estática. Será necessário um backend (por exemplo, PHP) se o projeto precisar salvar sugestões, administrar os pontos de coleta, autenticar usuários ou consultar dados de um banco.

## Como executar

Abra `index.html` no navegador. Para desenvolvimento, também pode usar a extensão Live Server do Visual Studio Code.

## Organização do CSS

- `css/base.css`: variáveis, tipografia, resets e acessibilidade.
- `css/layout.css`: cabeçalho, navegação, container e rodapé.
- `css/components.css`: botões, cartões, badges e componentes reutilizáveis.
- `css/pages.css`: estilos específicos das páginas.

## Antes de publicar

Os pontos em `pontos.html` são exemplos fictícios de interface, não locais confirmados. Substitua-os por informações verificadas com organizações responsáveis. O formulário de contato ainda não transmite nem armazena dados; conecte-o a um backend antes de usar em produção.
