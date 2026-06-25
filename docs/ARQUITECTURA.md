# Arquitectura y Decisiones Técnicas — UrbanFit

Este documento detalla y justifica las decisiones arquitectónicas de software para el frontend de **UrbanFit**, centrándose en el patrón SASS 7-1, la sinergia entre frameworks de diseño y el enfoque modular de desarrollo.

---

## 🏛️ 1. Justificación del Patrón SASS 7-1

Mantener hojas de estilo en una sola hoja gigante es un antipatrón insostenible a largo plazo en equipos profesionales. El **Patrón 7-1** es el estándar de oro para estructurar SASS porque introduce una separación de responsabilidades clara y predecible.

```text
📂 scss/
├── abstracts/      # Lógica pura (sin compilar código CSS directo)
├── base/           # Cimientos visuales globales y tipografía
├── components/     # UI modular atomizada (BEM)
├── layout/         # Divisiones macro y comportamiento estructural
├── pages/          # Modificaciones específicas de cada pantalla
├── themes/         # Soporte de temas integrales (Modo Oscuro)
└── vendors/        # Adaptadores y puentes de frameworks externos
```

### Por qué esta división beneficia a UrbanFit:
1.  **Escalabilidad**: Si el gimnasio decide agregar un sistema de comercio electrónico para suplementos, simplemente creamos un archivo en `pages/_store.scss` y tarjetas específicas en `components/_product-card.scss`, sin alterar la base tipográfica o los botones existentes.
2.  **Mantenibilidad de Código**: Si hay un bug visual en el botón de registro, el desarrollador sabe exactamente que debe abrir `components/_buttons.scss`. No pierde tiempo buscando en archivos de 3000 líneas.
3.  **Compilación Limpia**: Gracias a que todos los archivos se importan como *partials* (usando un guión bajo inicial como `_variables.scss`), SASS no genera archivos CSS basura por cada módulo. Solo compila una única hoja final `main.css`, optimizando las peticiones HTTP del navegador.

---

## 🤝 2. Sinergia Técnica: Bootstrap 5 + Tailwind CSS

Una de las decisiones más audaces y eficientes del proyecto fue la combinación sinérgica de **Bootstrap 5** y **Tailwind CSS**, cada uno actuando en el área donde es más fuerte:

```
            ┌────────────────────────────────────────┐
            │         URBANFIT CSS ARCHITECTURE      │
            └────────────────────────────────────────┘
                                 │
         ┌───────────────────────┴───────────────────────┐
         ▼                                               ▼
  BOOTSTRAP 5 (Componentes)                        TAILWIND CSS (Utilidades)
  - Dropdowns & Collapsibles                       - Padding y Margins precisos
  - Touch-ready Testimonial Carousel               - Efectos rápidos de opacidad
  - Form validations & inputs                      - Alineación flex/grid secundaria
```

### Justificación de Roles:
*   **Por qué Bootstrap 5**: Es excelente para componentes interactivos interactuando con JavaScript y accesibilidad ya testeada en producción (ej. el carrusel de testimonios con controles de deslizamiento lateral e indicadores, y la interactividad colapsable del navbar móvil).
*   **Por qué Tailwind CSS**: Su punto fuerte son las clases utilitarias de un solo propósito. Nos permite realizar ajustes de espaciado rápidos (`p-4`, `mt-12`), clases de color de apoyo, o sombras de transición en componentes locales, sin tener que escribir reglas SASS específicas para cada mínimo espacio vacío.

---

## 📱 3. Responsive Design Mobile-First

La landing page se diseñó bajo el enfoque **Mobile-First**. El CSS por defecto se escribe para pantallas pequeñas (móviles de un solo flujo vertical), y se utiliza el mixin `@include respond-to('breakpoint')` para agregar complejidad estructural (Grillas CSS de múltiples columnas, imágenes decorativas laterales, sidebars) en pantallas de mayor tamaño.

### Puntos de quiebre personalizados de SASS:
*   `sm` (576px): Orientación horizontal en teléfonos y tabletas pequeñas.
*   `md` (768px): Tabletas estándar. Se activa la conversión de layouts verticales a grillas de 2 columnas.
*   `lg` (992px): Computadoras portátiles. Se muestra el menú del navbar expandido y grillas de 3/4 columnas.
*   `xl` (1200px): Monitores de escritorio grandes. Contenedores fijos de un máximo de `1200px` para evitar fatiga de lectura.
