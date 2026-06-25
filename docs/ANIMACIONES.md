# Catálogo de Animaciones — UrbanFit

Las animaciones en **UrbanFit** no son simples adornos estéticos; son herramientas de comunicación visual diseñadas para guiar la mirada del usuario, jerarquizar la información y motivar la interacción (conversión).

Este documento cataloga las **12 animaciones keyframe** creadas en `scss/components/_animations.scss`, explicando su lógica física, disparador y optimizaciones de rendimiento.

---

## 🎭 1. Catálogo de Keyframes Animados

| # | Animación | Selector BEM / Clase | Propósito Visual | Comportamiento Físico |
| :--- | :--- | :--- | :--- | :--- |
| **1** | `fadeIn` | `.anim-fade-in` | Revelado suave de elementos de apoyo. | Cambia opacidad de `0` a `1` en 1 segundo. |
| **2** | `fadeInUp` | `.anim-fade-in-up` | Entrada natural de tarjetas de clases y precios al cargar la página o scroll. | Desplazamiento sutil desde `translateY(40px)` combinándose con opacidad progresiva. |
| **3** | `slideInLeft` | `.anim-slide-in-left` | Revelar la propuesta de valor principal en el Hero. | Entrada enérgica lateral desde la izquierda (`translateX(-100px)`). |
| **4** | `slideInRight` | `.anim-slide-in-right` | Revelar la imagen del deportista en el Hero. | Entrada lateral desde la derecha (`translateX(100px)`). |
| **5** | `scaleIn` | `.anim-scale-in` | Zoom dinámico sobre las tarjetas de beneficios principales. | Escala de `0.7` a `1` usando una curva con rebote de aceleración elástica. |
| **6** | `pulse` | `.anim-pulse` | Llamar la atención sobre los botones de registro (CTAs) de manera no intrusiva. | Escalado continuo del botón entre `1` y `1.05` acompañado de una onda expansiva de resplandor sombreado con opacidad. |
| **7** | `float` | `.anim-float` | Simular flotación en gravedad de iconos, logotipos y globos decorativos. | Movimiento vertical infinito y cíclico de `translateY(-12px)` con curva `ease-in-out` suave. |
| **8** | `spin` | `.anim-spin` | Indicadores de carga (Loaders) y spinners de procesos. | Rotación de `0deg` a `360deg` continua y lineal sin interrupciones. |
| **9** | `glow` | `.anim-glow` | Resaltar sutilmente la tarjeta de precios VIP o elementos hiper-destacados. | Cambio cíclico infinito del sombreado perimetral simulando un latido de luz de neón. |
| **10** | `bounce` | `.anim-bounce-hover` | Feedback juguetón y gratificante en el hover sobre tarjetas o enlaces. | Rebote vertical amortiguado cuando el puntero del mouse interactúa con el elemento. |
| **11** | `gradientShift` | `.anim-gradient-bg` | Fondo vivo y fluido en el encabezado principal (Hero). | Desplazamiento del gradiente de color angular simulando lava en movimiento infinito. |
| **12** | `typing` | Simulado en Hero | Captar atención en el eslogan inicial del gimnasio. | Modifica el ancho del contenedor simulando escritura mecánica. |

---

## ⚡ 2. Optimización y Rendimiento de Hardware (GPU)

Las animaciones descuidadas pueden causar caídas de frames por segundo (FPS) en móviles, provocando tirones en el scroll. En UrbanFit prevenimos esto utilizando técnicas de optimización profesionales de nivel Senior:

### A. Uso de `will-change`
Aplicado en `scss/base/_base.scss`:
```scss
.class-card, .benefit-card, .btn-urban--pulse {
  will-change: transform, opacity;
}
```
*   *Explicación*: Esto le dice explícitamente al navegador (Safari, Chrome, Firefox) que estos elementos van a cambiar sus propiedades de transformación y opacidad. El navegador los separa en su propia **capa de composición de hardware** en la GPU antes de que comience la animación, evitando que se recalcule el diseño de toda la página en cada frame.

### B. Uso de `contain` (Aislamiento de Pintado)
```scss
.class-card, .plan-card {
  contain: layout;
}
```
*   *Explicación*: Al aplicar `contain: layout;` le decimos al motor de renderizado que los elementos internos de la tarjeta nunca pueden afectar la posición física o el tamaño de otras cajas fuera de ella. Si un badge de la tarjeta cambia de tamaño, el repintado se limita solo a esa tarjeta y no hace temblar el layout global del DOM.

---

## 💫 3. Transiciones Fluidas con `cubic-bezier`

Todas las interacciones del sitio web utilizan un timing elástico personalizado en lugar del aburrido `transition: all 0.3s ease;`:

```scss
$transition-timing-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Por qué esta curva específica:
*   Esta curva representa una aceleración rápida inicial que **supera ligeramente el valor final en un 156%** (`1.56`) para luego asentarse de vuelta con un efecto de rebote elástico.
*   Le otorga a los botones, tarjetas y enlaces una respuesta física inmediata y orgánica que simula el rebote de un material de goma real, incrementando notablemente la sensación de interactividad premium del gimnasio UrbanFit.
