# Cómo exportar y colocar las imágenes

Las imágenes viven en `src/assets/` y se versionan en el repo. Astro las optimiza
sola al compilar (genera webp/avif y todos los tamaños). Tú solo tienes que
**exportarlas de Figma con el nombre y la carpeta correctos**.

---

## 1. Ajustes de exportación en Figma

| Ajuste | Valor |
|---|---|
| Formato | **JPG** para fotos · **SVG** para las marcas del logofolio |
| Escala | **2x** (o "Contents" a resolución nativa) |
| Calidad | da igual — se recomprime en el build |
| Tamaño | si puedes, que el lado largo no pase de ~2800px |

No te preocupes por el peso: yo lo optimizo. Prioriza **resolución** (mejor que
sobre, no que falte).

---

## 2. Qué seleccionar

**Selecciona el frame de la imagen tal y como se ve** (el recuadro con su recorte),
no el relleno de imagen suelto. Así el recorte queda "quemado" en el archivo y se
ve igual que en el Figma.

Si una fila tiene **dos imágenes lado a lado**, expórtalas como dos archivos
separados (`03.jpg` y `04.jpg`). Yo detecto que van en pareja leyendo el frame.

---

## 3. Estructura de carpetas y nombres

### Proyectos → `src/assets/projects/<slug>/`

Un folder por proyecto, con el **slug exacto** de esta lista:

```
amargo-mezcal      say-carbon-yachts   sushiitto        deus-ex-machina
desterrados        bar-18              sucanto          chachalaca-cafe
hellow-festival    goldstorm ✓ (ya está)  compa         estral-sport
patio-sunline      anillos-mezcal      koelleza         blum
```

Dentro de cada folder:

| Archivo | Qué es |
|---|---|
| `hero.jpg` | La imagen grande de arriba del todo en la página del proyecto |
| `01.jpg`, `02.jpg`, `03.jpg`… | Las imágenes de la galería, **en orden de arriba abajo** (y de izquierda a derecha si van en pareja) |
| `thumb.jpg` | *(opcional)* La imagen del proyecto en la rejilla de Portfolio (3:2). Si no la pones, se usa `hero.jpg` |

Ejemplo (Goldstorm, ya hecho):
```
src/assets/projects/goldstorm/
  hero.jpg  01.jpg  02.jpg  03.jpg  04.jpg  05.jpg  06.jpg
```

### Home — slideshow → `src/assets/hero/`

Los 5 slides del frame `Hero` de la home (fotos ~16:10 apaisadas, exporta anchas):
```
src/assets/hero/
  sushiitto.jpg
  sucanto.jpg
  goldstorm.jpg
  anillos-mezcal-01.jpg
  anillos-mezcal-04.jpg
```

### About — retrato → `src/assets/about/`

La foto vertical (Coffee and Bikes), formato ~4:5:
```
src/assets/about/portrait.jpg
```

### Logofolio — 30 marcas → `src/assets/logos/`

Solo la **marca blanca** de cada tile (sin el recuadro oscuro), en **SVG**,
fondo transparente:
```
src/assets/logos/
  logo-01.svg  logo-02.svg  …  logo-30.svg
```
En orden de lectura del grid (izquierda→derecha, arriba→abajo).

---

## 4. Entregarlo

Comprime `src/assets/` (o cada carpeta) en un zip y pásamelo, o súbelo tú a esas
rutas. Yo:
- ajusto peso/tamaño si hace falta
- leo cada frame del Figma para montar la galería (cuáles van a ancho completo y
  cuáles en pareja 2-up)
- conecto todo y despliego
