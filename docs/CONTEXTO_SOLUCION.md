# Contexto de Negocio y Solución de Diseño — UrbanFit

Este documento explica las decisiones de diseño y estructura de la landing page de **UrbanFit** vinculadas al contexto real de su negocio, demostrando que cada bloque de código y decisión estética responde a un objetivo estratégico.

---

## 🎯 1. El Desafío de Negocio de UrbanFit

UrbanFit es un gimnasio moderno de alto rendimiento que se enfrenta a un mercado altamente competitivo. Su público objetivo son **adultos de entre 18 y 45 años** que buscan:
*   Mejorar su condición física general.
*   Encontrar entrenamientos eficientes en tiempo (como HIIT).
*   Pertenecer a una comunidad activa que los mantenga motivados.
*   Contar con la guía segura de entrenadores certificados.

---

## 💡 2. Cómo el Diseño Técnico Resuelve las Necesidades del Negocio

Cada sección de la landing page fue diseñada para derribar objeciones y guiar al usuario hacia la conversión (el botón de registro "Únete Ahora").

### A. El Hero Banner: Captar la Atención en 3 Segundos
*   *Necesidad*: El usuario web promedio tiene un lapso de atención muy corto.
*   *Solución Visual*: Un fondo dinámico con gradiente animado en SASS (`.u-heavy-animation`), un eslogan de alto impacto con resplandor neón (`.anim-glow`) y estadísticas clave inmediatas (500+ alumnos, 20+ entrenadores, 95% satisfacción).
*   *Resultado*: El usuario siente inmediatamente que UrbanFit es un centro con autoridad, comunidad consolidada y alta energía desde el primer contacto visual.

### B. Sección de Beneficios: Derribar Barreras Mentales
*   *Necesidad*: El usuario duda de si tendrá resultados o de si encajará.
*   *Solución Visual*: 4 tarjetas con íconos vectoriales flotantes (`.anim-float`) que destacan: "Entrenadores Expertos", "Planes Flexibles", "Resultados Garantizados" y "Comunidad Activa".
*   *Resultado*: Las tarjetas se elevan al pasar el mouse con una transición de rebote elástica, simbolizando dinamismo físico y agilidad mental.

### C. Clases Populares: Mostrar la Oferta de Manera Atractiva
*   *Necesidad*: Los alumnos quieren saber exactamente qué van a hacer (Yoga, HIIT, Spinning, Boxeo).
*   *Solución Visual*: Una grilla responsive impecable (`.regrid-grid--classes`) que expone las clases con badges de intensidad, duración en minutos (`14px` JetBrains Mono), plazas restantes, calificaciones con estrellas doradas y botones directos de "Reservar Clase".
*   *Resultado*: Facilita la toma de decisiones rápidas mostrando valor tangible inmediato.

### D. Entrenadores: Humanizar la Marca y Generar Confianza
*   *Necesidad*: Los principiantes temen lesionarse o no saber qué hacer.
*   *Solución Visual*: Tarjetas de entrenadores certificados con fotos y badges detallados de especialidad. Una tarjeta (el Coach Estrella) incluye una cinta inclinada (`.trainer-card__ribbon`) de "Destacado" para guiar la preferencia.
*   *Resultado*: Conectar con rostros reales de profesionales certificados genera empatía y disminuye la ansiedad de iniciar en un gimnasio.

### E. Planes de Precios y Testimonios: El Cierre de la Venta
*   *Necesidad*: El usuario quiere conocer el precio pero necesita justificación de valor antes de pagar.
*   *Solución Visual*:
    1.  **Testimonios**: Un carrusel táctil interactivo de Bootstrap 5 que muestra opiniones reales de otros alumnos con estrellas de calificación doradas.
    2.  **Precios**: Una grilla de 3 planes (Básico, Pro, VIP). El plan **PRO** está diseñado con un modificador SASS `.plan-card--featured` que le otorga un sombreado resplandeciente (`.anim-glow`), un fondo púrpura sutil, una etiqueta de "Más Popular" y un tamaño mayor.
*   *Resultado*: Se aplica la psicología de precios ("Efecto Señuelo"). El usuario se inclina naturalmente por el plan Pro porque representa el mejor valor percibido, facilitando la conversión.
