# Plan: App Shell Layout com Componentes de Navegação

## Contexto

- React Router 7 com SSR + Tailwind CSS v4
- 3 rotas de página: home, page2, page3
- Layout fixo para todas as rotas (sidebar + content area)

## Decisões do usuário

- **NavLinks**: Home, Page 2, Page 3 (rotas existentes)
- **NavLogo**: SVGs `logo-light.svg` / `logo-dark.svg` existentes em `pages/home/`
- **NavFooter**: texto "Start App"
- **TopBar**: nome da app / breadcrumb com a rota ativa

---

## Estrutura CSS do Layout

```
<body> → h-screen, flex
  <Navigation> → w-60, flex-col, border-right
    <NavLogo/>    → border-bottom
    <NavLinks/>   → flex-1
    <NavFooter/>  → border-top
  <main> → flex-1, flex-col, overflow-hidden
    <TopBar/>         → border-bottom
    <PageHeader/>     → border-bottom
    <page-content>    → flex-1, overflow-y-auto
      <Outlet/>
```

---

## Componentes a criar

### Fase 1 — Componentes de navegação (sidebar esquerda)

1. `app/components/navigation/NavLogo.tsx`
   - Logo usando `logo-light.svg` / `logo-dark.svg` (importados de `pages/home/`)

2. `app/components/navigation/NavLinks.tsx`
   - Links: Home (`/`), Page 2 (`/page2`), Page 3 (`/page3`)
   - Usa `<NavLink>` com estilo de item ativo

3. `app/components/navigation/NavFooter.tsx`
   - Texto fixo "Start App"

4. `app/components/navigation/Navigation.tsx`
   - Sidebar completa: flex-col com `NavLogo` (topo) + `NavLinks` (flex-1) + `NavFooter` (base)

### Fase 2 — Componentes da área de conteúdo (direita)

5. `app/components/layout/TopBar.tsx`
   - Mostra o nome da app + rota ativa como breadcrumb
   - Lê `useMatches()` + `handle.title`

6. `app/components/layout/PageHeader.tsx`
   - Recebe `title` e `description` como props
   - Exibe título grande + subtítulo

7. `app/layouts/app-layout.tsx`
   - Renderiza `<Navigation>` + coluna direita com `<TopBar>` + `<PageHeader>` + `<Outlet>`
   - Usa `useMatches()` para extrair `handle` da rota ativa

### Fase 3 — Atualizar rotas e páginas (depende da fase 2)

8. `app/routes.ts`
   - Usar `layout("layouts/app-layout.tsx", [...])` para envolver as rotas de página
   - Rota `/peoples` (API) fica fora do layout

9. `app/pages/home/page.tsx`
   - Adicionar `export const handle = { title: "Home", description: "..." }`
   - Remover markup antigo, retornar conteúdo simples via `<Outlet>`

10. `app/pages/page2/page.tsx`
    - Adicionar `handle` com title/description, simplificar conteúdo

11. `app/pages/page3/page.tsx`
    - Idem ao passo 10

### Fase 4 — CSS global (paralelo com fase 1)

12. `app/static/styles/app.css`
    - Adicionar `html, body { height: 100% }` para layout full-height funcionar

---

## Estratégia de metadados de página

Cada página exporta um `handle`:

```ts
export const handle = {
  title: "Home",
  description: "Página inicial da aplicação"
}
```

O `app-layout.tsx` usa `useMatches()` para encontrar o `handle` da rota mais específica ativa e passa `title` / `description` como props para `<PageHeader>`.

---

## Verificação

1. `npm run dev` — sem erros no terminal
2. Navegar entre as 3 rotas — sidebar fixo, título e descrição atualizam
3. Link ativo visualmente destacado na `NavLinks`
4. `npm run typecheck` — sem erros de TypeScript

---

## Decisões técnicas

- Layout via `layout()` route no `routes.ts` (padrão React Router v7), não via `root.tsx`
- Tailwind CSS para estilização (já instalado)
- SVGs de logo permanecem em `pages/home/` e são importados relativamente por `NavLogo.tsx`
- `TopBar` usa `handle.title` da rota ativa como breadcrumb
- A rota `/peoples` (API) fica fora do layout
- Sem ícones nos links por ora (apenas texto)
