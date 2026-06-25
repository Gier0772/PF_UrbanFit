# Compatibilidad y Soporte de Navegadores — UrbanFit

Este documento explica las estrategias de compatibilidad implementadas en **UrbanFit** para asegurar que el diseño sea utilizable y estéticamente robusto en todo el espectro de navegadores modernos y antiguos.

---

## 🌎 1. Navegadores Soportados

Siguiendo la configuración del archivo de configuración de compatibilidad `.browserslistrc` (que define el target del proyecto):

```text
> 0.5%             # Navegadores con más del 0.5% de cuota mundial activa
last 2 versions    # Las últimas 2 versiones estables de todos los navegadores
Firefox ESR        # Versión de soporte extendido corporativo de Firefox
not dead           # Excluye navegadores sin actualizaciones o soporte técnico activo
```

Esto garantiza un funcionamiento fluido y soporte de estilo automático en:
*   **Google Chrome** y derivados de Chromium (Opera, Brave, Vivaldi).
*   **Microsoft Edge**.
*   **Apple Safari** (iOS y macOS).
*   **Mozilla Firefox**.

---

## ⚙️ 2. Automatización de Vendor Prefixes (Autoprefixer)

Ciertas propiedades de CSS avanzadas como animaciones `@keyframes`, transformaciones tridimensionales (`transform`) o propiedades de filtro de fondo (`backdrop-filter`) requieren prefijos específicos de cada motor de renderizado (`-webkit-`, `-ms-`, `-moz-`) en versiones antiguas de los navegadores.

### Configuración en `package.json`
Hemos integrado **PostCSS** y **Autoprefixer** en el pipeline de optimización del proyecto para evitar tener que escribir estos prefijos manualmente.

```json
"scripts": {
  "build:sass": "sass scss/main.scss css/style.css",
  "prefix:css": "postcss css/style.css --use autoprefixer -d css/"
}
```

### Ejemplo de Procesamiento de Autoprefixer:
**Código de Entrada en SASS (Limpio):**
```scss
.navbar-custom {
  backdrop-filter: blur(15px);
  transform: translateY(0);
}
```

**Código Generado en el CSS Compilado Final (Seguro):**
```css
.navbar-custom {
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
```

---

## 🔍 3. Consultas de Características (@supports) y Fallbacks

El diseño utiliza **CSS Grid** para desplegar grillas perfectas de Clases, Entrenadores y Beneficios. Sin embargo, para navegadores que no soportan Grid, implementamos consultas de características de CSS (`@supports`), aplicando la técnica de **Mejora Progresiva (Progressive Enhancement)**.

### Caso de Estudio: Grilla de Beneficios / Clases
En `scss/layout/_grid.scss` definimos un diseño base con **Flexbox** o **Floats** que actúa como fallback inmediato, y luego actualizamos la interfaz usando `@supports`:

```scss
// Layout Base (Fallback compatible con navegadores antiguos como IE11)
.regrid-grid {
  display: block;
  overflow: hidden;
  
  &__col {
    float: left;
    width: 100%;
    padding: 1rem;
    
    @include respond-to('md') {
      width: 50%;
    }
    @include respond-to('lg') {
      width: 25%;
    }
  }
}

// Mejora Progresiva (Navegadores Modernos con soporte para CSS Grid)
@supports (display: grid) {
  .regrid-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    
    // Anula de manera segura los estilos de float anteriores
    &__col {
      float: none;
      width: auto;
      padding: 0;
    }
    
    &--classes {
      @include respond-to('sm') {
        grid-template-columns: repeat(2, 1fr);
      }
      @include respond-to('lg') {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
}
```

### Lógica de Fallback `@supports not`:
Para dar soporte visual de advertencia o estructuras ultra-básicas de forma explícita, se implementa la consulta negativa:
```scss
@supports not (display: grid) {
  .no-grid-warning {
    display: block;
    background-color: #F1C40F; // Amarillo de advertencia
    color: #2D3436;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    border-radius: 8px;
  }
}
```
Esto asegura que si un usuario ingresa desde un dispositivo legacy, la página siga siendo estructurada, legible y visualmente comprensible.
