# SASS vs LESS: Comparativa de Preprocesadores

Este documento proporciona un análisis técnico de las diferencias clave entre los preprocesadores **SASS (SCSS)** y **LESS**, e incluye ejemplos comparativos de sintaxis basados en el proyecto **UrbanFit**.

---

## 📌 1. Principales Diferencias Tecnológicas

| Característica | SASS (SCSS) | LESS |
| :--- | :--- | :--- |
| **Sintaxis de Variables** | Usa el símbolo `$` (`$color-primary: #6C63FF;`) | Usa el símbolo `@` (`@color-primary: #6C63FF;`) |
| **Motor de Ejecución** | Escrito originalmente en Ruby, compilado hoy en C/C++ (LibSass) o Dart Sass. Altamente veloz. | Escrito en JavaScript. Se compila nativamente en Node.js o directamente en el navegador del lado del cliente. |
| **Estructuras lógicas** | Ofrece estructuras reales de control de flujo (`@if`, `@else`, `@each`, `@for`, `@while`). | No tiene condicionales tradicionales. Utiliza "Guards" y mixins recursivos para simular bucles. |
| **Mixins** | Se declaran explícitamente con `@mixin` y se llaman con `@include`. | Cualquier clase de CSS regular se puede usar como un mixin llamándola directamente con paréntesis `()`. |
| **Extensión de Clases** | Directiva nativa potente `@extend .selector`. | Funcionalidad de extensión más simple `:extend(.selector)`. |

---

## 💻 2. Ejemplos de Sintaxis: SASS vs LESS

### A. Declaración y Uso de Variables
Las variables en SASS son más comunes en el desarrollo web moderno debido a su coincidencia con variables CSS nativas, pero LESS sigue un patrón similar utilizando el símbolo de arroba.

**SASS (SCSS):**
```scss
$color-primary: #6C63FF;
$spacing-lg: 1.5rem;

.btn-urban {
  background-color: $color-primary;
  padding: $spacing-lg;
}
```

**LESS:**
```less
@color-primary: #6C63FF;
@spacing-lg: 1.5rem;

.btn-urban {
  background-color: @color-primary;
  padding: @spacing-lg;
}
```

---

### B. Mixins con Parámetros y Retorno

**SASS (SCSS):**
```scss
@mixin flex-center($direction: row) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-items: center;
}

// Implementación
.hero-custom__stats {
  @include flex-center(column);
}
```

**LESS:**
```less
.flex-center(@direction: row) {
  display: flex;
  flex-direction: @direction;
  justify-content: center;
  align-items: center;
}

// Implementación (LESS los trata como clases llamables)
.hero-custom__stats {
  .flex-center(column);
}
```

---

### C. Estructuras de Bucles (El Bucle de Delays de Animaciones)
Este ejemplo muestra dónde SASS tiene una ventaja sustancial en cuanto a legibilidad de código gracias a su soporte nativo de bucles `@for`.

**SASS (SCSS):**
```scss
// Genera de forma limpia 10 clases de retraso de animación
@for $i from 1 through 10 {
  .anim-delay-#{$i} {
    animation-delay: #{$i * 0.15}s;
  }
}
```

**LESS (Requiere Recursividad de Mixins / Guards):**
```less
// En LESS no existen los bucles @for. Se debe simular con recursión:
.generar-delays(@n, @i: 1) when (@i <= @n) {
  .anim-delay-@{i} {
    animation-delay: (@i * 0.15s);
  }
  // Llamada recursiva incrementando el iterador
  .generar-delays(@n, (@i + 1));
}

// Activación del bucle
.generar-delays(10);
```

---

### D. Funciones de Operaciones con Colores

**SASS (SCSS):**
```scss
// Mezcla nativa de SASS
.btn-urban:hover {
  background-color: shade-color($color-primary, 15%); // Mezcla con negro
}
```

**LESS:**
```less
// LESS tiene funciones integradas similares como darken y lighten
.btn-urban:hover {
  background-color: darken(@color-primary, 15%);
}
```

---

## 💡 Conclusión del Análisis

Para un proyecto del calibre de **UrbanFit**, **SASS** es muy superior por las siguientes razones:
1.  **Estructuras de Control Legibles**: Crear delays escalonados o animaciones avanzadas requiere menos hackeos sintácticos en SASS.
2.  **Ecosistema de Compatibilidad**: La mayoría de los frameworks modernos (incluido Bootstrap 5 en su código fuente) están escritos íntegramente en SASS, lo que facilita sobreescribir variables nativas de forma directa.
3.  **Soporte Estándar**: SASS (SCSS) es el estándar del preprocesamiento CSS en el desarrollo web moderno a nivel global.
