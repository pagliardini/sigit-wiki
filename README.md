# sigit.pagliardini.com

Landing y manual de usuario de [SIGIT](https://demo.sigit.pagliardini.com). Astro + Starlight,
publicado como Cloudflare Worker.

| Ruta | Fuente |
|---|---|
| `/` | `src/pages/index.astro` (landing, página independiente) |
| `/manual-usuario/` | `src/content/docs/manual-usuario/*.md` (Starlight) |

En `index.astro`, arriba de todo:

- `CONTACT_EMAIL`: casilla que recibe las consultas.
- `FORM_ENDPOINT`: URL que recibe el formulario de contacto como JSON (hoy Formspree, proyecto "sigit";
  los envíos llegan a sigit@pagliardini.com). Vacío: el formulario abre el correo del visitante.

Capturas en `public/screens/` (de la demo, en modo claro y oscuro) e imagen para redes en
`public/og.png`.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run deploy     # wrangler deploy (o push, si el repo está conectado a Workers Builds)
```

Sin Node instalado: `docker run --rm -it -v $PWD:/app -w /app -p 4321:4321 node:22 npm run dev -- --host`.
