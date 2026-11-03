# Duarte Marques — Portfolio

Portfólio pessoal de Duarte Marques, desenvolvido para apresentar projetos, experiência profissional e tecnologias utilizadas no desenvolvimento de aplicações web e soluções digitais.

🌐 **Visita o site:** [9duarte.dev](https://9duarte.dev)

## Funcionalidades

- Secção de apresentação com descrição profissional e contactos.
- Nuvem visual de tecnologias.
- Galeria de projetos com descrição, imagem, tecnologias e links externos.
- Secção de experiência profissional.
- Layout responsivo para desktop e dispositivos móveis.
- Metadados SEO, Open Graph, sitemap e robots configurados.
- Analytics através do Vercel Analytics.

## Tecnologias

- [Next.js](https://nextjs.org/) 16 com App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Lucide React](https://lucide.dev/) e [Simple Icons](https://simpleicons.org/)
- [Vercel Analytics](https://vercel.com/analytics)

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- npm, incluído com o Node.js

## Instalação

1. Clona o repositório:

   ```bash
   git clone https://github.com/9duarte/Portfolio.git
   cd Portfolio
   ```

2. Instala as dependências:

   ```bash
   npm install
   ```

3. Inicia o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) no browser.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com Next.js. |
| `npm run build` | Cria a build de produção. |
| `npm run start` | Inicia a aplicação em modo de produção. |
| `npm run lint` | Executa o ESLint. |

## Personalização

O conteúdo principal do portfólio está centralizado em [`app/data/portfolio.ts`](./app/data/portfolio.ts). Nesse ficheiro podes atualizar:

- nome, descrição e títulos;
- links de contacto;
- tecnologias apresentadas;
- projetos, imagens, descrições e links;
- experiências profissionais.

As imagens dos projetos devem ser colocadas na pasta [`public/`](./public/) e referenciadas a partir da raiz, por exemplo: `/nome-da-imagem.png`.

Informações globais da página, como título, descrição, idioma e metadados Open Graph, estão definidas em [`app/layout.tsx`](./app/layout.tsx).

## Estrutura do projeto

```text
app/
├── components/       # Componentes das diferentes secções do portfólio
├── data/              # Conteúdo dos projetos, tecnologias e experiência
├── globals.css        # Estilos globais e tema visual
├── layout.tsx         # Layout, metadados e Analytics
├── page.tsx           # Página principal
├── robots.ts          # Configuração para robots.txt
└── sitemap.ts         # Configuração do sitemap
public/                # Imagens dos projetos e outros recursos públicos
```

## Deploy

O projeto pode ser publicado diretamente na [Vercel](https://vercel.com/):

1. Importa o repositório na Vercel.
2. Mantém o comando de build `npm run build`.
3. Publica o projeto.

Para executar manualmente uma build de produção:

```bash
npm run build
npm run start
```

## Contacto

- [Email](mailto:duarte09luciano@gmail.com)
- [GitHub](https://github.com/9duarte)
- [LinkedIn](https://www.linkedin.com/in/9duarte/)
