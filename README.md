# mscamargo.dev

Site pessoal de currículo de Marcos Camargo, Desenvolvedor Backend Sênior.

## Sobre

Página única em HTML e CSS: resumo profissional, stack, experiência, formação,
contato e currículo em PDF para download.

- Um arquivo (`index.html`), sem build, sem framework, sem JavaScript
- Zero requisição para terceiros — sem webfont, sem CDN, sem analytics
- Tema claro e escuro automáticos, via `prefers-color-scheme`
- Imprimível: `Ctrl+P` gera um currículo limpo, com as URLs expandidas
- SEO com Open Graph, Twitter card e dados estruturados (JSON-LD)

## Desenvolvimento

Abrir `index.html` no navegador ou servir com qualquer servidor estático:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`.

## Currículo (CV)

`cv-marcos-camargo.pdf` é uma cópia de `career/resume-web.pdf` do repositório
`mscamargo` — a variante sem telefone, gerada a partir de `career/resume.html`
(fonte de verdade do currículo, mantida em sync com o `CAREER.md`):

```bash
# no repositório mscamargo, em career/
sed '/tel:+5553991740364/{N;d;}' resume.html > /tmp/resume-web.html
chromium --headless --no-pdf-header-footer --print-to-pdf=resume-web.pdf /tmp/resume-web.html
rm /tmp/resume-web.html
```

Sempre que o currículo mestre mudar, regerar o PDF e copiá-lo para a raiz deste
repositório como `cv-marcos-camargo.pdf` — não há automação/CI para isso.

## Licença

MIT
