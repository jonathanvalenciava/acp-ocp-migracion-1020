# ACP · OCP — Migración de Autorizaciones a 1020

Sitio estático con la propuesta de arquitectura y el plan de trabajo para centralizar en el componente 1020 la creación
y la actualización retroactiva de convenios no estándar (ACP y OCP). Se publica con GitHub Pages.

**Sitio:** https://jonathanvalenciava.github.io/acp-ocp-migracion-1020/

## Estructura

```
.
├── index.html               Inicio
├── arquitectura/index.html  Análisis de arquitectura
├── plan/index.html          Plan de migración y trabajo
├── 404.html
├── assets/
│   ├── css/styles.css       Estilos compartidos (modo claro y oscuro)
│   ├── js/common.js         Tooltips, tema y enlaces a Azure DevOps
│   ├── js/arquitectura.js   Datos y gráficos del análisis
│   ├── js/plan.js           Datos y gráficos del plan
│   └── img/favicon.svg
├── robots.txt               Sin indexación
└── .nojekyll                Publicación sin Jekyll
```

## Ver en local

Abre `index.html` en el navegador o sirve la carpeta:

```bash
python -m http.server 8000
```

## Estado

Es una propuesta sujeta a validación y aprobación. Las páginas usan `noindex` y `robots.txt` para que los buscadores no
las indexen.
