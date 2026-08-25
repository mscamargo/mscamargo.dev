# mscamargo.dev

Site pessoal de currículo de Marcos Camargo, Desenvolvedor Backend Sênior.

## Sobre

Página única em HTML/CSS com resumo profissional, stack, destaques de carreira,
contato e currículo em PDF para download. Performance, SEO e acessibilidade
otimizados.

## Features

- Seções: Hero, Sobre, Stack, Destaques de carreira, Contato
- Design responsivo (desktop, tablet, mobile)
- SEO otimizado com Open Graph e Twitter cards
- Dados estruturados (JSON-LD) para mecanismos de busca
- Acessível (labels, foco visível, `prefers-reduced-motion`)
- Performance otimizada (DNS prefetch, preload, imagens em WebP)

## Desenvolvimento

Basta abrir `index.html` no navegador ou servir com qualquer servidor estático:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`

## Currículo (CV)

`cv-marcos-camargo.pdf` é gerado manualmente a partir de
`career/resumes/generated/resume_backend_ptbr_web.html` (no repositório
`mscamargo`, fonte de verdade do currículo, sem telefone nessa variante).
Sempre que o currículo mestre mudar, regenerar essa variante e copiar o PDF
resultante para a raiz deste repositório — não há automação/CI para isso.

## Licença

MIT
