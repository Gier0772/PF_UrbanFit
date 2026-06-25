# Guía de Estilos — UrbanFit Gym

Esta guía documenta las decisiones del sistema de diseño visual de **UrbanFit** y cómo se implementan técnicamente a través de SASS para mantener la coherencia en toda la plataforma.

---

## 🎨 1. Sistema de Colores y Identidad Visual

El esquema cromático de UrbanFit está diseñado para inspirar energía, profesionalismo y acción:

| Tipo | Color | Hexadecimal | Propósito en la Interfaz |
| :--- | :--- | :--- | :--- |
| **Primario** | Violeta Eléctrico | `#6C63FF` | Representa la modernidad, tecnología y profesionalidad de los coaches. |
| **Secundario** | Coral Pasional | `#FF6B6B` | Representa la acción, adrenalina, ritmo cardíaco alto y llamados a la acción (CTAs). |
| **Oscuro** | Negro Grafito | `#2D3436` | Utilizado para tipografía principal, contrastes y fondos en temas oscuros. |
| **Claro** | Blanco Off-White | `#F8F9FA` | Fondo de secciones secundarias para dar aire, limpieza y respiración al diseño. |

### Aplicación de Funciones de SASS para Paletas Dinámicas
En lugar de codificar colores estáticos a mano para las variaciones de hover o sombras, se utilizan funciones nativas de mezcla en SASS:
*   `shade-color($color-primary, 15%)`: Produce un tono más oscuro del violeta de forma automática mezclándolo con negro.
*   `tint-color($color-secondary, 20%)`: Aclara el coral de forma segura mezclándolo con blanco.

---

## ✍️ 2. Tipografía y Jerarquía

Para UrbanFit, se eligió una combinación tipográfica moderna que refuerza un ambiente dinámico y atlético:

*   **Títulos (Display y Títulos de Secciones)**: `'Montserrat', sans-serif`
    *   *Razón*: Tipografía geométrica sans-serif, fuerte y con peso extra para denotar solidez y determinación.
*   **Texto de Cuerpo (Descripciones y Formularios)**: `'Poppins', sans-serif`
    *   *Razón*: Extremadamente legible, con espaciado balanceado que relaja el ojo al leer descripciones técnicas o tarifas de planes.
*   **Código y Metadatos (Tiempos, Rating, Stats)**: `'JetBrains Mono', monospace`
    *   *Razón*: Denota precisión, métricas exactas de entrenamiento y añade un toque moderno/brutalista.

---

## 🛠️ 3. Mixins de SASS Implementados

Los mixins evitan la duplicación de código y encapsulan patrones repetitivos:

### A. Responsive Design (`respond-to`)
Permite definir breakpoints de manera mobile-first directamente anidando la media-query en el selector:
```scss
.class-card {
  width: 100%; // Móvil
  
  @include respond-to('md') {
    width: 50%; // Tablet
  }
  @include respond-to('lg') {
    width: 25%; // Desktop
  }
}
```

### B. Efecto Elevador en Hover (`hover-lift`)
Aplica una transición suave con un rebote sutil usando `cubic-bezier`:
```scss
@mixin hover-lift($translateY: -8px, $scale: 1.03, $shadow: $shadow-lg) {
  @include transition-standard;
  &:hover {
    transform: translateY($translateY) scale($scale);
    box-shadow: $shadow;
  }
}
```

---

## 🏷️ 4. Metodología BEM (Block-Element-Modifier)

Toda clase CSS en el proyecto sigue estrictamente la arquitectura **BEM**, eliminando la necesidad de selectores descendentes pesados (`ul li a div`), reduciendo la especificidad CSS a un nivel de $O(1)$ y evitando efectos colaterales inesperados.

### Glosario de Sintaxis:
1.  **Bloque (`bloque`)**: La entidad autónoma e independiente de la página. (ej: `plan-card`, `btn-urban`).
2.  **Elemento (`bloque__elemento`)**: Una parte del bloque que no tiene significado independiente y está semánticamente ligada a él. (ej: `plan-card__price`, `plan-card__feature-item`).
3.  **Modificador (`bloque--modificador`)**: Un flag en el bloque o elemento para cambiar su apariencia, estado o comportamiento. (ej: `plan-card--featured`, `btn-urban--pulse`).

### Caso de Estudio Práctico: Tarjeta de Planes de Precios
A continuación se detalla cómo se traduce la tarjeta de precios en código estructurado bajo BEM:

```html
<!-- Bloque Principal de la Tarjeta de Plan -->
<div class="plan-card">
  
  <!-- Elemento: Nombre del plan -->
  <h3 class="plan-card__name">Plan Pro</h3>
  
  <!-- Elemento: Contenedor del precio -->
  <div class="plan-card__price-box">
    <span class="plan-card__price-currency">$</span>
    <span class="plan-card__price-value">59</span>
    <span class="plan-card__price-period">/mes</span>
  </div>
  
  <!-- Elemento: Lista de características -->
  <ul class="plan-card__features">
    <li class="plan-card__feature-item">Acceso ilimitado 24/7</li>
    <!-- Elemento con Modificador de Estado (Deshabilitado) -->
    <li class="plan-card__feature-item plan-card__feature-item--disabled">Entrenador personal VIP</li>
  </ul>
</div>

<!-- Bloque con Modificador para el Plan Destacado -->
<div class="plan-card plan-card--featured">
  ...
</div>
```
