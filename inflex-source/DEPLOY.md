# InFlex Terapéutico — cómo ponerlo online

Tenés dos caminos. El primero no necesita instalar nada.

---

## Camino A — Lo más rápido: subir la carpeta ya compilada

Sirve para tener el sitio online en cinco minutos, sin instalar Node ni usar
GitHub. Ideal para mostrarlo, validarlo o dejarlo funcionando ya.

1. Descomprimí **`inflex-dist.zip`**. Adentro hay una carpeta con
   `index.html`, `favicon.svg` y una carpeta `assets`.
2. Entrá a **vercel.com**, creá una cuenta (podés usar Google o GitHub).
3. En el panel, elegí **Add New → Project → Deploy without Git**, o entrá
   directamente a **vercel.com/new** y arrastrá la carpeta descomprimida
   al recuadro.
4. Vercel la publica en un par de minutos y te da una dirección tipo
   `inflex-terapeutico.vercel.app`.

**La limitación:** para cambiar un texto hay que volver a compilar el proyecto,
y para eso necesitás el camino B. Con este camino el sitio funciona, pero no lo
podés editar solo.

---

## Camino B — El que te deja editar: GitHub + Vercel

Tampoco necesita que instales nada en tu computadora: se hace todo desde el
navegador. Vercel compila el proyecto en sus servidores cada vez que cambiás
algo.

1. Descomprimí **`inflex-source.zip`**.
2. Entrá a **github.com**, creá una cuenta y hacé un repositorio nuevo
   (**New repository**). Ponele `inflex-terapeutico` y dejalo privado.
3. En el repositorio vacío, elegí **uploading an existing file** y arrastrá
   *todo el contenido* de la carpeta descomprimida — no la carpeta en sí, sino
   lo que hay adentro: `index.html`, `package.json`, `vite.config.js`,
   `.gitignore`, y las carpetas `src` y `public`.
4. Confirmá con **Commit changes**.
5. Entrá a **vercel.com/new**, elegí **Import Git Repository** y seleccioná ese
   repositorio.
6. Vercel detecta Vite solo. No cambies nada: **Framework Preset** en Vite,
   **Build Command** `npm run build`, **Output Directory** `dist`.
7. **Deploy**.

A partir de ahí, cada vez que edites un archivo en GitHub y guardes, Vercel
vuelve a publicar el sitio solo, en menos de un minuto.

---

## Lo primero que tenés que cambiar

Todo el texto del sitio está en un solo archivo: **`src/content.js`**. No hace
falta tocar ningún componente para cambiar una frase.

### 1. El WhatsApp — obligatorio antes de publicar

En `src/content.js`, arriba de todo:

```js
export const CONTACTO = {
  whatsapp: "5491100000000",     // ← poné tu número real
  mensajeInicial: "Hola, quiero empezar.",
};
```

El formato es código de país + característica sin el 0 + número sin el 15.
Para un celular de Buenos Aires: `54 9 11 xxxx xxxx` se escribe
`5491112345678`, todo junto y sin espacios ni signos.

Mientras ese número sea el de ejemplo, **todos los botones del sitio llevan a
ningún lado**. Es lo primero que hay que corregir.

### 2. Los precios

En `src/content.js`, en `PRECIOS`. Hoy dicen `$ —` y `— días` a propósito: el
sitio promete transparencia de precios y esa promesa está vacía hasta que los
completes.

### 3. Los teléfonos de urgencia

Están en `URGENCIAS`, al final de `content.js`. **Verificalos antes de
publicar y de nuevo cada seis meses.** Un teléfono que no atiende hace daño.

---

## Dominio propio

Cuando tengas el dominio (`inflexterapeutico.com` o `.com.ar`):

1. En Vercel, entrá al proyecto → **Settings → Domains → Add**.
2. Escribí el dominio y Vercel te muestra los registros DNS que hay que cargar
   donde lo compraste.
3. Si es un `.com.ar`, se compra en **nic.ar** y los DNS se editan ahí mismo.

El certificado HTTPS lo emite Vercel solo, sin costo.

---

## Antes de que el sitio sea público

- [ ] WhatsApp real cargado y probado desde un celular ajeno
- [ ] Precio por sesión y plazo hasta la primera sesión completados
- [ ] Al menos dos terapeutas con matrícula verificada, con acuerdo firmado
- [ ] Sección de profesionales con nombre, título, matrícula y domicilio del
      consultorio habilitado de cada uno, como exige el reglamento del colegio
- [ ] Todo el texto público leído y aprobado por un psicólogo matriculado
- [ ] Teléfonos de urgencia verificados uno por uno
- [ ] Protocolo escrito de qué hacer si alguien escribe en crisis

---

## Estructura del proyecto

```
index.html            metadatos, fuente Inter, título de la pestaña
vite.config.js        configuración (no hace falta tocarlo)
package.json          dependencias
public/favicon.svg    ícono de la pestaña: la curva y el punto del click
src/
  main.jsx            arranque de la aplicación
  index.css           sistema de diseño completo — todos los colores acá
  content.js          TODOS LOS TEXTOS — es el archivo que vas a editar
  ui.jsx              piezas compartidas: logo, botones, títulos
  Pacientes.jsx       la página de inicio
  Terapeutas.jsx      la página de profesionales
  App.jsx             menú, navegación entre las dos páginas, pie
```

## Cambiar el color de acento

En `src/index.css`, tres valores:

```css
--color-accent: #7e8f7c;       /* salvia */
--color-accent-deep: #64735f;
--color-accent-soft: #eef1ec;
```

Para la variante arcilla: `#b0876d`, `#906850`, `#f5ece5`. No hay que tocar
nada más — ningún componente tiene colores escritos a mano.

## Correr el proyecto en tu computadora (opcional, más adelante)

Si algún día instalás Node:

```bash
npm install
npm run dev     # abre en localhost:5173 y recarga al guardar
npm run build   # genera la carpeta dist/
```
