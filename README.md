# Portal Mitra Academia

Central de aplicativos dos colaboradores. React + TypeScript + Vite + Tailwind CSS + Lucide. Sem banco de dados, autenticação ou dependência de créditos Lovable. O link MTGym continua apontando para o aplicativo existente.

## Executar

Node.js 22 ou superior:

```sh
npm ci
npm run dev
npm test
npm run build
```

## Adicionar e administrar aplicativos

Edite `src/config/apps.json` pelo GitHub (ícone do lápis). Cada aplicativo tem `id` único, `name`, `description`, `url`, `icon`, `order`, `active` e `category`.

- Links: somente HTTPS; deixe vazio para mostrar **Em configuração**. Insira os endereços reais de Escala e Certificados quando disponíveis.
- Ícones: `calendar`, `certificate`, `dumbbell`, `users`, `chart`, `folder`.
- Ordem: menor `order` aparece primeiro.
- Desativar: `active: false`.
- Adicionar: copie um objeto, separe com vírgula e altere o `id`.

Exemplo:

```json
{"id":"novo","name":"Novo aplicativo","description":"Descrição breve.","url":"https://exemplo.com","icon":"folder","order":4,"active":true,"category":"OPERAÇÃO"}
```

A alteração na branch `main` aciona o deploy. A configuração só pode ser alterada por quem tem permissão no repositório; não existe painel público de edição. O portal é público: nunca inclua dados pessoais, documentos internos, tokens ou senhas nos arquivos ou URLs.

## GitHub Pages

Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**. O workflow `.github/workflows/deploy.yml` testa, compila e publica. Se `configure-pages` não tiver permissão para habilitar o Pages, habilite manualmente nessa tela e execute novamente o workflow em Actions.

Endereço esperado, sujeito a publicação bem-sucedida: `https://ricardofss72.github.io/portal-mitra/`.

O Vite usa `base: '/portal-mitra/'`. Altere a base para `/` se migrar para domínio próprio na raiz.

## Identidade visual e acessibilidade

`public/mitra-oficial.png` é a referência oficial preservada. O componente `Brand.tsx` separa em canvas os pixels dourados e brancos da imagem original: a camada dourada gira no sentido anti-horário, e o boneco e a tipografia permanecem fixos. As formas originais são preservadas, com brilho discreto e tom laranja. Esta versão usa a chama estilizada oficial; não simula labaredas fotorealistas. Em falha de canvas, a imagem oficial estática permanece como alternativa. `prefers-reduced-motion` desativa o movimento. Links têm foco visível e aviso de nova aba; links não configurados não são botões falsos.

## Expansão

`PortalApp` em `src/config/catalog.ts` define o contrato do catálogo. Uma futura fonte Supabase pode substituir o JSON mantendo os componentes. Autenticação e permissões exigirão validação no servidor e políticas de acesso; ocultar cards no cliente não protege os aplicativos de destino. Cada aplicativo continua responsável por seu próprio acesso.
