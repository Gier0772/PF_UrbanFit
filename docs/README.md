# UrbanFit Landing Page — Proyecto Académico Profesional

¡Bienvenido a la landing page oficial de **UrbanFit**! Este es un proyecto frontend avanzado diseñado para promocionar un gimnasio moderno de alto rendimiento, optimizado con las mejores prácticas de la industria en cuanto a arquitectura CSS, responsive design y rendimiento gráfico.

El objetivo de esta plataforma es captar nuevos clientes, dar a conocer los servicios (HIIT, Yoga, Spinning, Boxeo) de UrbanFit, y proporcionar una experiencia interactiva fluida para los estudiantes y coaches.

---

## 🛠️ Tecnologías y Metodologías Implementadas

El proyecto está construido sobre **React (TypeScript) + Vite**, integrando de manera sinérgica varios pilares de la cursada:

1.  **SASS (SCSS)**: Implementado bajo el estándar internacional de arquitectura **Patrón 7-1**, permitiendo la modularidad absoluta de estilos, uso intensivo de variables avanzadas, mixins, funciones de utilidad y bucles condicionales `@for` de SASS.
2.  **Bootstrap 5**: Utilizado de manera controlada para componentes interactivos robustos:
    *   La estructura básica del Navbar adaptativo.
    *   El sistema de carrusel de testimonios táctiles de alumnos.
    *   Sistemas de control de formularios de contacto y registros.
3.  **Tailwind CSS (v4)**: Integrado mediante plugins nativos en Vite, utilizado principalmente para clases utilitarias de espaciado dinámico, micro-ajustes flex/grid, y efectos visuales ágiles que aceleran la velocidad de desarrollo en vistas específicas.
4.  **Metodología BEM (Block-Element-Modifier)**: Toda la nomenclatura de clases CSS sigue la regla estricta de `bloque__elemento--modificador` (ej: `.btn-urban--primary`, `.plan-card--featured`, `.class-card__meta-item`), lo cual garantiza especificidad controlada, nulo choque de selectores globales y legibilidad inmediata.
5.  **Optimización de GPU**: Uso estratégico de las propiedades `will-change` y `contain` en secciones animadas pesadas para avisar al motor de renderizado de la GPU y aislar bloques del DOM del reflujo global de diseño.

---

## 📁 Estructura del Código SASS (Patrón 7-1)

Los archivos fuente de estilos se organizan meticulosamente en siete categorías dentro de `src/scss/`:

*   **`abstracts/`**: Capa lógica no renderizable. Contiene variables globales (`_variables.scss`), puntos de quiebre (`_breakpoints.scss`), mixins de reutilización (`_mixins.scss`) y funciones de conversión rem (`_functions.scss`).
*   **`base/`**: Estilos base y de reset. Contiene normalización CSS (`_reset.scss`), tipografías emparejadas Montserrat y Poppins (`_typography.scss`) y configuraciones de rendimiento global (`_base.scss`).
*   **`components/`**: Módulos independientes y reutilizables bajo nomenclatura BEM. Contiene botones (`_buttons.scss`), tarjetas (`_cards.scss`), navbar (`_navbar.scss`), hero banner (`_hero.scss`) y el catálogo de animaciones de keyframes (`_animations.scss`).
*   **`layout/`**: Contenedores macro de la interfaz. Contiene cabeceras (`_header.scss`), pie de página (`_footer.scss`) y los sistemas de grillas e integraciones de fallbacks con query de características (`_grid.scss`).
*   **`pages/`**: Estilos exclusivos para la página de inicio o vistas únicas (`_home.scss`).
*   **`themes/`**: Modificadores visuales de color o esquemas alternativos, implementando un completo modo oscuro (`_dark-mode.scss`).
*   **`vendors/`**: Adaptaciones de librerías externas. Contiene personalizaciones de clases de Bootstrap (`_bootstrap-custom.scss`) y puentes de clases con Tailwind (`_tailwind-utils.scss`).

---

## 🚀 Instrucciones de Instalación y Ejecución

Para iniciar y compilar este proyecto localmente, sigue los siguientes pasos:

1.  **Clonar e Instalar Dependencias**:
    ```bash
    npm install
    ```
2.  **Iniciar Servidor de Desarrollo**:
    Esto compilará los módulos de React, los estilos SASS y el motor utilitario de Tailwind en tiempo de ejecución:
    ```bash
    npm run dev
    ```
3.  **Compilación para Producción**:
    Genera los assets minificados y optimizados listos para despliegue en la carpeta `dist/`:
    ```bash
    npm run build
    ```

---

## 📄 Documentación Adicional en `/docs`

Para una evaluación profunda, consulta las guías específicas en la carpeta de documentación:
*   `GUIA_ESTILOS.md`: Desglose del sistema de diseño, variables y metodología BEM.
*   `ARQUITECTURA.md`: Justificación técnica de las decisiones y patrón 7-1.
*   `ANIMACIONES.md`: Catálogo completo y análisis de rendimiento de las 12 animaciones keyframes.
*   `COMPATIBILIDAD.md`: Fallbacks de CSS Grid y Flexbox mediante `@supports` y configuración de prefijos.
*   `LESS_COMPARATIVA.md`: Equivalencias de SASS a LESS con ventajas, sintaxis y mixins.
*   `CONTEXTO_SOLUCION.md`: Análisis de negocio de cómo el diseño de UrbanFit atrae clientes ideales.
