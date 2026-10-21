# Skate Landing 🛹

Landing page para venda de skates, desenvolvida com React + TypeScript + Vite.

## 🚀 Como usar

### Instalação local
```bash
npm install
npm run dev
```

### Build para produção
```bash
npm run build
```

### Testes (futuro)
```bash
npm test
```

## 📁 Estrutura do Projeto

```
src/
├── components/      # Componentes React reutilizáveis
│   ├── Hero.tsx     # Seção principal com imagem + CTA
│   ├── ProductCard.tsx  # Card de produto
│   ├── CTA.tsx      # Botão call-to-action
│   └── Form.tsx     # Formulário de contato
├── styles/          # Estilos CSS e design tokens
│   ├── App.css      # CSS principal com responsividade
│   └── design-tokens.json  # Tokens de design (cores, tipografia)
├── utils/           # Funções utilitárias
│   └── formspree.ts # Integração com Formspree
├── App.tsx          # Componente principal
└── main.tsx         # Entry point

public/assets/       # Imagens otimizadas (.webp)
.github/workflows/   # CI/CD para GitHub Pages
```

## 🎨 Design System

- **Cores primárias**: Laranja vibrante (#FF6B35), Azul confiança (#2D9CDB)
- **Tipografia**: Inter (Google Fonts)
- **Responsividade**: Mobile-first com breakpoints 320px, 768px, 1024px

## 🔧 Integrações

- **Formspree**: Para processamento de formulário (configurar `VITE_FORMSPREE_ENDPOINT` no `.env`)
- **GitHub Actions**: Deploy automático ao push na branch `main`

## 📄 Licença

Proprietário: Gabriel

---

**Deploy**: https://github.com/gabrielolvv/skate-landing
