# Boilerplate Useall-React

![Useall Logo](./src/assets/LogoUseall.png "Logo Useall")

## Utilização

### Para a utilização é necessário clonar o projeto com

```
git clone
```

### Instalar as dependências com o npm

```
npm install
```

### Para rodar em modo de desenvolvimento

```
npm run dev
```

### Para compilar o projeto para produção

```
npm run build
```

#

## Dependências instaladas:

- Axios:
  1. Biblioteca utilizada para realização de chamadas HTTP de forma simples e eficiente
  2. **Biblioteca já configurada para uso**
  3. Link para documentação [Axios](https://axios-http.com/)
- React Router Dom

  1. Biblioteca de roteamento, possibilitando transitar entre páginas sem recarregar todo o html (SPA);
  2. Fazer Requisições durante a troca de páginas;
  3. Layout conjunto para diversas páginas com a função outlet;
  4. **Biblioteca já configurada para uso**
  5. Link para documentação [React Router](https://reactrouter.com/en/main)

- React Query

  1. Biblioteca de armazenamento de estado global e validação de dados para React;
  2. Faz o fetch dos dados do servidor, armazena e sincroniza de acordo com cada chamada feita pelo cliente, evitando assim requisições desnecessárias e fornecendo melhor usabilidade;
  3. **Biblioteca já configurada para uso**;
  4. Link para documentação [React Query](https://tanstack.com/query/latest/docs/react/overview)

- React Hook Form
  1. Melhor opção para gerenciar formulários de forma "controlled" e "uncontrolled";
  2. Possiblidade de fazer formulários com diversas etapas ('Comumente utilizada em nossos cadastros')
  3. Link para documentação [React Hook Form](https://react-hook-form.com/get-started/)

#

## Estilização

### Para a estilização fica aberto a preferência dos desenvolvedores do projeto, como não possuímos um design system no momento.

- TailwindCSS
  1. Classes CSS pré-definidas para um desenvolvimento rápido e eficaz de aplicações
  2. Link para documentação [TailwindCSS](https://tailwindcss.com/docs/guides/vite)
- Material UI
  1. Maior biblioteca de componentes prontos para desenvolvimento de aplicações em React, Facilita o desenvolvimento devido aos componentes pré estilizados, porém pode ser complexa na hora de alterar os estilos padrões.
  2. Link para documentação [Material UI](https://mui.com/material-ui/getting-started/overview/)
- CSS Modules
  1. Pode se utilizar o bom e velho CSS com abordagem de CSS Modules, uma prática onde criamos arquivos .module.css e importamos o estilos de forma dinâmica, assim, tendo nomes únicos para classes e evitando conflitos e o uso do !important.
  2. **O Vite ja possúi o CSS Modules por padrão**
  3. Link para documentação [CSS Modules](https://github.com/css-modules/css-modules)

#

## Opcional

Conforme a experiência dos desenvolvedores e o tamanho do projeto, é interessante a utilização de Typescript.

Segue a baixo

1. Instalar typescript @types/react e @types/react-dom
2. No package.json trocar `vite build` por `tsc && vite build`
3. Configurar o TS com o seguinte arquivo tsconfig.json

```
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

4. Configurar o TS node com o seguinte arquivo tsconfig.node.json

```
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

<p style="text-align: center;">Feito por Davi Freitas & Useall</p>
