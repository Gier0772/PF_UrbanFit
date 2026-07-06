import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { 
  Dumbbell, 
  CheckCircle2, 
  Award, 
  Users, 
  Star, 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Code, 
  Sliders, 
  Cpu, 
  Layers, 
  ArrowRight,
  BookOpen,
  Eye,
  Check,
  AlertTriangle
} from 'lucide-react';

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(false);
  
  // Navigation states
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('inicio');

  // Testimonial Carousel state
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Form submission state
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    clase: 'hiit',
    mensaje: '',
    aceptar: false
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Academic Show Panel state
  const [showAcademicPanel, setShowAcademicPanel] = useState<boolean>(false);
  const [activeAcademicTab, setActiveAcademicTab] = useState<string>('sass71');
  const [selectedSassFile, setSelectedSassFile] = useState<string>('variables');
  const [animLabSelected, setAnimLabSelected] = useState<string>('anim-pulse');

  // Track window scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['inicio', 'beneficios', 'clases', 'entrenadores', 'planes', 'testimonios', 'contacto'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.nombre && formData.email && formData.aceptar) {
      setIsSubmitted(true);
    }
  };

  const nextTestimonial = () => {
    setCurrentSlide(prev => (prev + 1) % 3);
  };

  const prevTestimonial = () => {
    setCurrentSlide(prev => (prev - 1 + 3) % 3);
  };

  const testimonials = [
    {
      id: 1,
      name: "Lucía Fernández",
      role: "Alumna de HIIT y Yoga - 28 años",
      text: "UrbanFit me cambió la vida. Empecé buscando bajar de peso, pero encontré una comunidad increíble que me apoya y me motiva todos los días. ¡Los entrenamientos de HIIT son espectaculares y dinámicos!",
      rating: 5,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Mateo Rodríguez",
      role: "Alumno de Boxeo y Spinning - 34 años",
      text: "El ambiente y la infraestructura de UrbanFit no tienen rival. Los entrenadores realmente están certificados, se preocupan por tu técnica y te empujan al límite de tus capacidades en cada clase. Totalmente recomendado.",
      rating: 5,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Camila Sánchez",
      role: "Alumna de Entrenamiento Personal VIP - 41 años",
      text: "Llevaba años yendo a gimnasios tradicionales sin ver resultados. Con el Plan VIP y el acompañamiento personalizado de mi coach de UrbanFit, he mejorado notablemente mi fuerza, flexibilidad y postura. ¡Excelente servicio!",
      rating: 5,
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
    }
  ];

  const sassFilesCode: Record<string, { path: string; desc: string; code: string }> = {
    variables: {
      path: "abstracts/_variables.scss",
      desc: "Declaración limpia del sistema de diseño, colores institucionales, fuentes, sombras y constantes.",
      code: `// Brand Colors
$color-primary: #6C63FF;
$color-secondary: #FF6B6B;
$color-dark-100: #2D3436;
$color-light-100: #F8F9FA;
$transition-duration-base: 0.3s;
$transition-timing-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
$transition-standard: all $transition-duration-base $transition-timing-bounce;`
    },
    mixins: {
      path: "abstracts/_mixins.scss",
      desc: "Estructuras reutilizables para adaptabilidad responsiva, centrado y efectos hover uniformes.",
      code: `@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  }
}

@mixin hover-lift($translateY: -8px, $scale: 1.03) {
  @include transition-standard;
  &:hover {
    transform: translateY($translateY) scale($scale);
    box-shadow: $shadow-lg;
  }
}`
    },
    animations: {
      path: "components/_animations.scss",
      desc: "Las 12 animaciones por hardware creadas con keyframes de CSS y bucle generador de delays.",
      code: `@keyframes pulse {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(108, 99, 255, 0.6); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(108, 99, 255, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(108, 99, 255, 0); }
}

@for $i from 1 through 10 {
  .anim-delay-#{$i} {
    animation-delay: #{$i * 0.15}s;
    animation-fill-mode: both;
  }
}`
    },
    grid: {
      path: "layout/_grid.scss",
      desc: "Consultas de características (@supports) para dar soporte de diseño a navegadores antiguos.",
      code: `.regrid-grid {
  display: block;
  &__col { float: left; width: 100%; }
}

@supports (display: grid) {
  .regrid-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    &__col { float: none; width: auto; }
  }
}`
    },
    cards: {
      path: "components/_cards.scss",
      desc: "Uso riguroso de BEM para el control visual de tarjetas de beneficios, clases y planes.",
      code: `.class-card {
  background-color: $color-white;
  border-radius: $border-radius-xl;
  overflow: hidden;
  @include transition-standard;

  &__img-wrapper { position: relative; overflow: hidden; }
  &__img { width: 100%; height: 100%; object-fit: cover; }
  &__badge { position: absolute; top: 1rem; right: 1rem; }
  &__body { padding: 1.5rem; }

  &:hover {
    transform: translateY(-6px);
    .class-card__img { transform: scale(1.1); }
  }
}`
    }
  };

  return (
    <div className={`app-container ${darkMode ? 'theme-dark' : ''}`} style={{ width: '100vw', overflowX: 'hidden' }}>
      
      {/* NAVBAR */}
      <nav id="navbar" className={`navbar-custom ${isScrolled ? 'navbar-custom--scrolled' : ''}`}>
        <div className="container-custom navbar-custom__container">
          <a href="#inicio" className="navbar-custom__brand">
            <Dumbbell className="anim-float" />
            <span>Urban</span>Fit
          </a>

          <div className="navbar-custom__menu">
            <a href="#beneficios" className={`navbar-custom__link ${activeSection === 'beneficios' ? 'navbar-custom__link--active' : ''}`}>Beneficios</a>
            <a href="#clases" className={`navbar-custom__link ${activeSection === 'clases' ? 'navbar-custom__link--active' : ''}`}>Clases</a>
            <a href="#entrenadores" className={`navbar-custom__link ${activeSection === 'entrenadores' ? 'navbar-custom__link--active' : ''}`}>Coaches</a>
            <a href="#planes" className={`navbar-custom__link ${activeSection === 'planes' ? 'navbar-custom__link--active' : ''}`}>Planes</a>
            <a href="#testimonios" className={`navbar-custom__link ${activeSection === 'testimonios' ? 'navbar-custom__link--active' : ''}`}>Testimonios</a>
            <a href="#contacto" className={`navbar-custom__link ${activeSection === 'contacto' ? 'navbar-custom__link--active' : ''}`}>Contacto</a>
          </div>

          <div className="navbar-custom__cta" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="btn-urban btn-urban--outline btn-urban--sm"
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem', minWidth: '36px' }}
              aria-label="Cambiar modo oscuro"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <a href="#contacto" className="btn-urban btn-urban--primary btn-urban--pulse">
              Únete Ahora
            </a>
          </div>

          <button 
            id="nav-toggle"
            className={`navbar-custom__toggle ${isMenuOpen ? 'navbar-custom__toggle--open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav--open' : ''}`}>
        <a href="#beneficios" className="mobile-nav__link" onClick={() => setIsMenuOpen(false)}>Beneficios</a>
        <a href="#clases" className="mobile-nav__link" onClick={() => setIsMenuOpen(false)}>Clases</a>
        <a href="#entrenadores" className="mobile-nav__link" onClick={() => setIsMenuOpen(false)}>Coaches</a>
        <a href="#planes" className="mobile-nav__link" onClick={() => setIsMenuOpen(false)}>Planes</a>
        <a href="#testimonios" className="mobile-nav__link" onClick={() => setIsMenuOpen(false)}>Testimonios</a>
        <a href="#contacto" className="mobile-nav__link" onClick={() => setIsMenuOpen(false)}>Contacto</a>
        <div className="mt-8 px-2">
          <a href="#contacto" className="btn-urban btn-urban--primary btn-urban--block text-center" onClick={() => setIsMenuOpen(false)}>
            Únete Ahora
          </a>
        </div>
      </div>

      {/* HERO SECTION */}
      <section id="inicio" className="hero-custom anim-gradient-bg">
        <div className="container-custom hero-custom__container">
          <div className="hero-custom__content anim-slide-in-left">
            <span className="hero-custom__badge">
              Inscripciones Abiertas - Comunidad Activa
            </span>
            <h1 className="hero-custom__title">
              Entrena tu cuerpo,<br />
              <span>Transforma tu vida</span>
            </h1>
            <p className="hero-custom__subtitle">
              UrbanFit es el gimnasio de alto rendimiento que se adapta a tu ritmo de vida. Ofrecemos equipamiento de última generación, entrenadores certificados y planes flexibles diseñados para personas ocupadas de 18 a 45 años.
            </p>
            <div className="hero-custom__actions">
              <a href="#contacto" className="btn-urban btn-urban--secondary btn-urban--lg btn-urban--pulse">
                Comenzar Gratis <ArrowRight />
              </a>
              <a href="#planes" className="btn-urban btn-urban--outline-white btn-urban--lg">
                Ver Planes Flexibles
              </a>
            </div>
          </div>

          <div className="hero-custom__visual anim-slide-in-right anim-delay-2">
            <div className="hero-custom__img-container">
              <img 
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop" 
                alt="Entrenamiento en UrbanFit" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="container-custom">
          <div className="hero-custom__stats anim-fade-in-up anim-delay-4">
            <div className="stat-item">
              <span className="stat-item__number">500+</span>
              <span className="stat-item__label">Alumnos Activos</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">20+</span>
              <span className="stat-item__label">Coaches Pro</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">95%</span>
              <span className="stat-item__label">Casos de Éxito</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">5 Años</span>
              <span className="stat-item__label">De Experiencia</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS SECTION */}
      <section id="beneficios" className="home-section home-section--light">
        <div className="home-decor home-decor--dots home-decor--top-right"></div>
        
        <div className="container-custom">
          <div className="section-title">
            <span className="section-title__eyebrow">Por Qué Elegirnos</span>
            <h2 className="section-title__heading">¿Qué hace único a <span>UrbanFit</span>?</h2>
            <div className="section-title__separator"></div>
          </div>

          <div className="regrid-grid regrid-grid--benefits">
            <div className="regrid-grid__col">
              <div className="benefit-card anim-scale-in anim-delay-1 anim-bounce-hover">
                <div className="benefit-card__icon-container">
                  <Award />
                </div>
                <h3 className="benefit-card__title">Coaches Certificados</h3>
                <p className="benefit-card__description">
                  Entrena de forma segura bajo la guía constante de entrenadores profesionales altamente capacitados que adaptan los ejercicios a tu nivel.
                </p>
              </div>
            </div>

            <div className="regrid-grid__col">
              <div className="benefit-card anim-scale-in anim-delay-2 anim-bounce-hover">
                <div className="benefit-card__icon-container">
                  <Sliders />
                </div>
                <h3 className="benefit-card__title">Planes Flexibles</h3>
                <p className="benefit-card__description">
                  Sin contratos forzosos. Elige el plan que mejor se adapte a tus horarios y presupuesto con la libertad de pausar o cambiar cuando quieras.
                </p>
              </div>
            </div>

            <div className="regrid-grid__col">
              <div className="benefit-card anim-scale-in anim-delay-3 anim-bounce-hover">
                <div className="benefit-card__icon-container">
                  <CheckCircle2 />
                </div>
                <h3 className="benefit-card__title">Resultados Garantizados</h3>
                <p className="benefit-card__description">
                  Nuestro sistema combina rutinas personalizadas de fuerza y HIIT para que veas mejoras medibles en tu resistencia, tono y energía en 30 días.
                </p>
              </div>
            </div>

            <div className="regrid-grid__col">
              <div className="benefit-card anim-scale-in anim-delay-4 anim-bounce-hover">
                <div className="benefit-card__icon-container">
                  <Users />
                </div>
                <h3 className="benefit-card__title">Comunidad Activa</h3>
                <p className="benefit-card__description">
                  Forma parte de un grupo de personas apasionadas que se apoyan, asisten a desafíos semanales y hacen que entrenar sea divertido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLASES SECTION */}
      <section id="clases" className="home-section">
        <div className="container-custom">
          <div className="section-title">
            <span className="section-title__eyebrow">Nuestras Disciplinas</span>
            <h2 className="section-title__heading">Clases que Despiertan tu <span>Fuerza</span></h2>
            <div className="section-title__separator"></div>
          </div>

          <div className="regrid-grid regrid-grid--classes">
            <div className="regrid-grid__col">
              <div className="class-card">
                <div className="class-card__img-wrapper">
                  <span className="class-card__badge">Zen</span>
                  <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop" 
                    alt="Clase de Yoga Flow" 
                    className="class-card__img"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="class-card__body">
                  <h3 className="class-card__title">Yoga Flow</h3>
                  <p className="class-card__description">
                    Flexibilidad, respiración controlada y fuerza central para encontrar el equilibrio perfecto entre cuerpo y mente.
                  </p>
                  <div className="class-card__meta">
                    <div className="class-card__meta-item">
                      <Clock /> 50 min
                    </div>
                    <div className="class-card__rating">
                      <Star /> 4.9
                    </div>
                  </div>
                  <a href="#contacto" className="btn-urban btn-urban--primary btn-urban--block text-center btn-urban--sm">
                    Reservar Clase
                  </a>
                </div>
              </div>
            </div>

            <div className="regrid-grid__col">
              <div className="class-card">
                <div className="class-card__img-wrapper">
                  <span className="class-card__badge">Alta Intensidad</span>
                  <img 
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop" 
                    alt="Clase de HIIT Fusion" 
                    className="class-card__img"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="class-card__body">
                  <h3 className="class-card__title">HIIT Fusion</h3>
                  <p className="class-card__description">
                    Quema grasa en tiempo récord con intervalos intensivos que elevan tu metabolismo hasta por 24 horas después de entrenar.
                  </p>
                  <div className="class-card__meta">
                    <div className="class-card__meta-item">
                      <Clock /> 45 min
                    </div>
                    <div className="class-card__rating">
                      <Star /> 5.0
                    </div>
                  </div>
                  <a href="#contacto" className="btn-urban btn-urban--primary btn-urban--block text-center btn-urban--sm">
                    Reservar Clase
                  </a>
                </div>
              </div>
            </div>

            <div className="regrid-grid__col">
              <div className="class-card">
                <div className="class-card__img-wrapper">
                  <span className="class-card__badge">Cardio</span>
                  <img 
                    src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop" 
                    alt="Clase de Spinning Power" 
                    className="class-card__img"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="class-card__body">
                  <h3 className="class-card__title">Spinning Power</h3>
                  <p className="class-card__description">
                    Súbete a la bicicleta estacionaria bajo ritmos explosivos de música, simulando rutas de montaña y sprints veloces.
                  </p>
                  <div className="class-card__meta">
                    <div className="class-card__meta-item">
                      <Clock /> 50 min
                    </div>
                    <div className="class-card__rating">
                      <Star /> 4.8
                    </div>
                  </div>
                  <a href="#contacto" className="btn-urban btn-urban--primary btn-urban--block text-center btn-urban--sm">
                    Reservar Clase
                  </a>
                </div>
              </div>
            </div>

            <div className="regrid-grid__col">
              <div className="class-card">
                <div className="class-card__img-wrapper">
                  <span className="class-card__badge">Fuerza & Desahogo</span>
                  <img 
                    src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=600&auto=format&fit=crop" 
                    alt="Clase de Boxeo Pro" 
                    className="class-card__img"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="class-card__body">
                  <h3 className="class-card__title">Boxeo Pro</h3>
                  <p className="class-card__description">
                    Aprende golpes reales, esquives y combinaciones de pies mientras liberas el estrés cotidiano y trabajas el abdomen.
                  </p>
                  <div className="class-card__meta">
                    <div className="class-card__meta-item">
                      <Clock /> 60 min
                    </div>
                    <div className="class-card__rating">
                      <Star /> 4.9
                    </div>
                  </div>
                  <a href="#contacto" className="btn-urban btn-urban--primary btn-urban--block text-center btn-urban--sm">
                    Reservar Clase
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTRENADORES SECTION */}
      <section id="entrenadores" className="home-section home-section--light">
        <div className="container-custom">
          <div className="section-title">
            <span className="section-title__eyebrow">Staff Técnico</span>
            <h2 className="section-title__heading">Nuestros Coaches <span>Certificados</span></h2>
            <div className="section-title__separator"></div>
          </div>

          <div className="regrid-grid regrid-grid--trainers">
            <div className="regrid-grid__col">
              <div className="trainer-card">
                <div className="trainer-card__img-container">
                  <img 
                    src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400&auto=format&fit=crop" 
                    alt="Coach Andrés" 
                    className="trainer-card__img"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="trainer-card__info">
                  <h3 className="trainer-card__name">Andrés Mendoza</h3>
                  <span className="trainer-card__specialty">HIIT & Acondicionamiento</span>
                  <p className="trainer-card__bio">
                    Ex-atleta de calistenia. Especialista en pérdida de grasa y entrenamiento metabólico de alta intensidad para principiantes.
                  </p>
                  <div className="trainer-card__rating">
                    <Star /> <Star /> <Star /> <Star /> <Star /> (4.9)
                  </div>
                </div>
              </div>
            </div>

            <div className="regrid-grid__col">
              <div className="trainer-card">
                <span className="trainer-card__ribbon">Head Coach</span>
                <div className="trainer-card__img-container">
                  <img 
                    src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=400&auto=format&fit=crop" 
                    alt="Coach Sofía" 
                    className="trainer-card__img"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="trainer-card__info">
                  <h3 className="trainer-card__name">Sofía Valenzuela</h3>
                  <span className="trainer-card__specialty">Nutrición & Fuerza Central</span>
                  <p className="trainer-card__bio">
                    Licenciada en Nutrición Deportiva con 8 años de experiencia. Apasionada de mejorar la salud integral de las mujeres y hombres de negocios ocupados.
                  </p>
                  <div className="trainer-card__rating">
                    <Star /> <Star /> <Star /> <Star /> <Star /> (5.0)
                  </div>
                </div>
              </div>
            </div>

            <div className="regrid-grid__col">
              <div className="trainer-card">
                <div className="trainer-card__img-container">
                  <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop" 
                    alt="Coach Carlos" 
                    className="trainer-card__img"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="trainer-card__info">
                  <h3 className="trainer-card__name">Carlos Peralta</h3>
                  <span className="trainer-card__specialty">Boxeo & Potencia</span>
                  <p className="trainer-card__bio">
                    Ex-boxeador amateur federado. Experto en técnicas de combate para tonificación, fortalecimiento aeróbico y liberación de estrés.
                  </p>
                  <div className="trainer-card__rating">
                    <Star /> <Star /> <Star /> <Star /> <Star /> (4.8)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES SECTION */}
      <section id="planes" className="home-section">
        <div className="container-custom">
          <div className="section-title">
            <span className="section-title__eyebrow">Tarifas Claras</span>
            <h2 className="section-title__heading">Encuentra tu <span>Plan Ideal</span></h2>
            <div className="section-title__separator"></div>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="plan-card">
                <h3 className="plan-card__name">Plan Básico</h3>
                <div className="plan-card__price-box">
                  <span className="plan-card__price-currency">$</span>
                  <span className="plan-card__price-value">29</span>
                  <span className="plan-card__price-period">/mes</span>
                </div>
                <ul className="plan-card__features">
                  <li className="plan-card__feature-item"><Check /> Acceso a sala de musculación</li>
                  <li className="plan-card__feature-item"><Check /> Vestidores y regaderas</li>
                  <li className="plan-card__feature-item"><Check /> Plan inicial de bienvenida</li>
                  <li className="plan-card__feature-item plan-card__feature-item--disabled"><X /> Clases grupales incluidas</li>
                  <li className="plan-card__feature-item plan-card__feature-item--disabled"><X /> Asesoría nutricional mensual</li>
                  <li className="plan-card__feature-item plan-card__feature-item--disabled"><X /> Coach personal de seguimiento</li>
                </ul>
                <a href="#contacto" className="btn-urban btn-urban--outline btn-urban--block text-center mt-auto">
                  Seleccionar Básico
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="plan-card plan-card--featured anim-glow">
                <span className="plan-card__ribbon">Recomendado</span>
                <h3 className="plan-card__name">Plan Pro</h3>
                <div className="plan-card__price-box">
                  <span className="plan-card__price-currency">$</span>
                  <span className="plan-card__price-value">59</span>
                  <span className="plan-card__price-period">/mes</span>
                </div>
                <ul className="plan-card__features">
                  <li className="plan-card__feature-item"><Check /> Acceso a sala de musculación</li>
                  <li className="plan-card__feature-item"><Check /> Vestidores y regaderas</li>
                  <li className="plan-card__feature-item"><Check /> Plan inicial de bienvenida</li>
                  <li className="plan-card__feature-item"><Check /> <b>Clases grupales ilimitadas</b></li>
                  <li className="plan-card__feature-item"><Check /> Acceso a la comunidad de alumnos</li>
                  <li className="plan-card__feature-item plan-card__feature-item--disabled"><X /> Coach personal de seguimiento</li>
                </ul>
                <a href="#contacto" className="btn-urban btn-urban--secondary btn-urban--block text-center mt-auto btn-urban--pulse">
                  Adquirir Pro Ahora
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="plan-card">
                <h3 className="plan-card__name">Plan VIP</h3>
                <div className="plan-card__price-box">
                  <span className="plan-card__price-currency">$</span>
                  <span className="plan-card__price-value">99</span>
                  <span className="plan-card__price-period">/mes</span>
                </div>
                <ul className="plan-card__features">
                  <li className="plan-card__feature-item"><Check /> Acceso a sala de musculación</li>
                  <li className="plan-card__feature-item"><Check /> Vestidores y regaderas</li>
                  <li className="plan-card__feature-item"><Check /> Plan inicial de bienvenida</li>
                  <li className="plan-card__feature-item"><Check /> Clases grupales ilimitadas</li>
                  <li className="plan-card__feature-item"><Check /> <b>Asesoría nutricional mensual</b></li>
                  <li className="plan-card__feature-item"><Check /> <b>Coach personal de seguimiento</b></li>
                </ul>
                <a href="#contacto" className="btn-urban btn-urban--outline btn-urban--block text-center mt-auto">
                  Seleccionar VIP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS SECTION */}
      <section id="testimonios" className="home-section home-section--light">
        <div className="home-decor home-decor--dots home-decor--bottom-left"></div>
        
        <div className="container-custom">
          <div className="section-title">
            <span className="section-title__eyebrow">Opiniones Reales</span>
            <h2 className="section-title__heading">¿Qué dicen nuestros <span>Atletas</span>?</h2>
            <div className="section-title__separator"></div>
          </div>

          <div className="testimonial-carousel position-relative">
            <div className="card shadow-lg bg-white rounded-5 p-4 p-md-5 overflow-hidden border-0">
              <div className="testimonial-carousel__item transition-all duration-500">
                <div className="testimonial-carousel__rating">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <p className="testimonial-carousel__quote">
                  {testimonials[currentSlide].text}
                </p>
                <div className="testimonial-carousel__author mt-4">
                  <img 
                    src={testimonials[currentSlide].img} 
                    alt={testimonials[currentSlide].name} 
                    className="testimonial-carousel__avatar"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="testimonial-carousel__name">{testimonials[currentSlide].name}</h4>
                    <span className="testimonial-carousel__role">{testimonials[currentSlide].role}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="btn-urban btn-urban--outline btn-urban--sm border-1 p-2 rounded-full"
                  style={{ width: '40px', height: '40px' }}
                  aria-label="Previous slide"
                >
                  <ChevronLeft style={{ margin: 0 }} />
                </button>
                <div className="flex gap-2 items-center">
                  {[0, 1, 2].map((idx) => (
                    <span 
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-secondary scale-125' : 'bg-gray-300'}`}
                    ></span>
                  ))}
                </div>
                <button 
                  onClick={nextTestimonial}
                  className="btn-urban btn-urban--outline btn-urban--sm border-1 p-2 rounded-full"
                  style={{ width: '40px', height: '40px' }}
                  aria-label="Next slide"
                >
                  <ChevronRight style={{ margin: 0 }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO SECTION */}
      <section id="contacto" className="home-section">
        <div className="container-custom">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-5">
              <div className="section-title text-start mb-5" style={{ textAlign: 'left' }}>
                <span className="section-title__eyebrow" style={{ margin: '0 0 10px 0' }}>Comienza Hoy</span>
                <h2 className="section-title__heading">Obtén un Pase Gratis de <span>1 Día</span></h2>
                <div className="section-title__separator" style={{ margin: '15px 0 0 0' }}></div>
              </div>

              <p className="mb-8" style={{ color: '#555' }}>
                Completa el formulario de registro y nuestro equipo se pondrá en contacto contigo para programar tu pase de cortesía de 1 día con acceso completo a musculación y clases.
              </p>

              <div className="flex flex-col gap-4">
                <div className="footer-custom__contact-item">
                  <MapPin />
                  <div>
                    <h5 className="font-semibold text-dark mb-1">Ubicación</h5>
                    <p className="text-sm m-0" style={{ color: '#666' }}>Av. Revolución 1420, Ciudad Metropolitana</p>
                  </div>
                </div>

                <div className="footer-custom__contact-item">
                  <Phone />
                  <div>
                    <h5 className="font-semibold text-dark mb-1">Teléfono</h5>
                    <p className="text-sm m-0" style={{ color: '#666' }}>+52 (55) 5432-1098</p>
                  </div>
                </div>

                <div className="footer-custom__contact-item">
                  <Mail />
                  <div>
                    <h5 className="font-semibold text-dark mb-1">Correo Electrónico</h5>
                    <p className="text-sm m-0" style={{ color: '#666' }}>info@urbanfit.com</p>
                  </div>
                </div>

                <div className="footer-custom__contact-item">
                  <Clock />
                  <div>
                    <h5 className="font-semibold text-dark mb-1">Horario</h5>
                    <p className="text-sm m-0" style={{ color: '#666' }}>Lunes a Viernes: 6:00 - 22:00 | Sábado y Domingo: 8:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="contact-form">
                {isSubmitted ? (
                  <div className="text-center py-5">
                    <div className="inline-flex p-4 bg-green-100 rounded-full text-green-600 mb-4 anim-scale-in">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="font-black text-2xl mb-2 text-dark">¡Registro Exitoso!</h3>
                    <p className="text-gray-600 max-w-md mx-auto mb-6">
                      Hola <b>{formData.nombre}</b>, hemos enviado tu pase de 1 día a <b>{formData.email}</b>. Uno de nuestros coaches certificados te llamará en las próximas 2 horas. ¡Prepárate para transformar tu vida!
                    </p>
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ nombre: '', email: '', clase: 'hiit', mensaje: '', aceptar: false });
                      }}
                      className="btn-urban btn-urban--primary btn-urban--sm"
                    >
                      Registrar otro pase
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="contact-form__group">
                          <label className="contact-form__label" htmlFor="nombre">Nombre Completo</label>
                          <input 
                            id="nombre"
                            name="nombre"
                            type="text" 
                            required
                            placeholder="Ej. Juan Pérez"
                            className="contact-form__input"
                            value={formData.nombre}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="contact-form__group">
                          <label className="contact-form__label" htmlFor="email">Correo Electrónico</label>
                          <input 
                            id="email"
                            name="email"
                            type="email" 
                            required
                            placeholder="ejemplo@correo.com"
                            className="contact-form__input"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="contact-form__group">
                      <label className="contact-form__label" htmlFor="clase">Clase de Interés Especial</label>
                      <select 
                        id="clase" 
                        name="clase"
                        className="contact-form__select"
                        value={formData.clase}
                        onChange={handleInputChange}
                      >
                        <option value="yoga">Yoga Flow (Flexibilidad & Paz)</option>
                        <option value="hiit">HIIT Fusion (Resistencia & Grasa)</option>
                        <option value="spinning">Spinning Power (Cardio de Montaña)</option>
                        <option value="boxeo">Boxeo Pro (Potencia & Tonificación)</option>
                      </select>
                    </div>

                    <div className="contact-form__group">
                      <label className="contact-form__label" htmlFor="mensaje">Mensaje Opcional</label>
                      <textarea 
                        id="mensaje"
                        name="mensaje"
                        placeholder="Cuéntanos un poco sobre ti..."
                        className="contact-form__textarea"
                        value={formData.mensaje}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <div className="contact-form__group flex items-start gap-2">
                      <input 
                        id="aceptar"
                        name="aceptar"
                        type="checkbox" 
                        required
                        className="mt-1 w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        checked={formData.aceptar}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="aceptar" className="contact-form__checkbox-label">
                        Acepto los términos de servicio, política de privacidad y autorizo el envío de mi pase gratis de cortesía por correo electrónico.
                      </label>
                    </div>

                    <button type="submit" className="btn-urban btn-urban--secondary btn-urban--block text-center btn-urban--pulse mt-4">
                      Obtener Pase de Cortesía
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="footer-custom">
        <div className="container-custom">
          <div className="footer-custom__grid">
            <div className="footer-custom__brand">
              <div className="footer-custom__logo">
                <Dumbbell />
                <span>Urban</span>Fit
              </div>
              <p className="footer-custom__description">
                Gimnasio urbano premium enfocado en cambiar tu vida a través de clases dinámicas de alta intensidad, comunidad real y entrenadores apasionados.
              </p>
              <div className="footer-custom__socials">
                <a href="#inicio" className="footer-custom__social-icon" aria-label="Facebook">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V1h-3a4 4 0 0 0-4 4v3z"></path></svg>
                </a>
                <a href="#inicio" className="footer-custom__social-icon" aria-label="Instagram">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path></svg>
                </a>
                <a href="#inicio" className="footer-custom__social-icon" aria-label="YouTube">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="footer-custom__title">Enlaces Rápidos</h4>
              <ul className="footer-custom__list">
                <li><a href="#beneficios" className="footer-custom__link">Beneficios</a></li>
                <li><a href="#clases" className="footer-custom__link">Clases</a></li>
                <li><a href="#entrenadores" className="footer-custom__link">Coaches</a></li>
                <li><a href="#planes" className="footer-custom__link">Planes</a></li>
                <li><a href="#testimonios" className="footer-custom__link">Testimonios</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-custom__title">Soporte Académico</h4>
              <button 
                onClick={() => {
                  setShowAcademicPanel(true);
                  setActiveAcademicTab('sass71');
                }} 
                className="footer-custom__link text-left"
                style={{ background: 'none', border: 'none', padding: 0 }}
              >
                Estructura SASS 7-1
              </button>
              <br />
              <button 
                onClick={() => {
                  setShowAcademicPanel(true);
                  setActiveAcademicTab('animations');
                }} 
                className="footer-custom__link text-left mt-2"
                style={{ background: 'none', border: 'none', padding: 0 }}
              >
                Catálogo de Animaciones
              </button>
              <br />
              <button 
                onClick={() => {
                  setShowAcademicPanel(true);
                  setActiveAcademicTab('bem');
                }} 
                className="footer-custom__link text-left mt-2"
                style={{ background: 'none', border: 'none', padding: 0 }}
              >
                Inspector BEM
              </button>
              <br />
              <button 
                onClick={() => {
                  setShowAcademicPanel(true);
                  setActiveAcademicTab('less');
                }} 
                className="footer-custom__link text-left mt-2"
                style={{ background: 'none', border: 'none', padding: 0 }}
              >
                Diferencias con LESS
              </button>
            </div>

            <div>
              <h4 className="footer-custom__title">Contacto Directo</h4>
              <ul className="footer-custom__list">
                <li className="footer-custom__contact-item" style={{ color: '#E9ECEF' }}>
                  <MapPin style={{ color: '#FF6B6B' }} /> Av. Revolución 1420
                </li>
                <li className="footer-custom__contact-item" style={{ color: '#E9ECEF' }}>
                  <Phone style={{ color: '#FF6B6B' }} /> +52 (55) 5432-1098
                </li>
                <li className="footer-custom__contact-item" style={{ color: '#E9ECEF' }}>
                  <Mail style={{ color: '#FF6B6B' }} /> info@urbanfit.com
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-custom__bottom">
            <span className="footer-custom__copy">
              © 2026 UrbanFit Gym. Todos los derechos reservados. Proyecto Académico de Curso de Desarrollo Frontend.
            </span>
            <div className="footer-custom__bottom-links">
              <a href="#inicio" className="footer-custom__bottom-link">Políticas de Privacidad</a>
              <a href="#inicio" className="footer-custom__bottom-link">Términos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ACADEMIC TRIGGER BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          id="academic-trigger"
          onClick={() => setShowAcademicPanel(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold p-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-110 active:scale-95 transition-all duration-300"
          style={{ 
            boxShadow: '0 10px 30px rgba(159, 158, 165, 0.6)',
            willChange: 'transform',
            contain: 'layout paint',
            border: '2px solid grey'
          }}
          title="Ver Panel Académico del Curso"
        >
          <BookOpen size={24} className="animate-bounce" style={{ color: '#9d9d9d' }} />
          <span className="text-sm font-semibold pr-1 hidden sm:inline" style={{ color: '#a4a4a4' }}>Panel Académico</span>
        </button>
      </div>

      {/* ACADEMIC PANEL OVERLAY */}
      {showAcademicPanel && (
        <div className="fixed inset-0 bg-black/70 z-[2000] flex justify-end items-stretch animate-fade-in">
          <div className="absolute inset-0 z-10" onClick={() => setShowAcademicPanel(false)}></div>

          <div 
            className="relative z-20 w-full max-w-4xl bg-white shadow-2xl flex flex-col items-stretch h-full overflow-hidden anim-slide-in-right"
            style={{ 
              borderRadius: '24px 0 0 24px',
              willChange: 'transform',
              contain: 'layout'
            }}
          >
            <div className="bg-gradient-to-r from-purple-700 to-indigo-800 p-6 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Sparkles size={24} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl m-0 text-white font-mono tracking-tight">DEMOSTRACIÓN ACADÉMICA DEL CURSO</h3>
                  <p className="text-purple-200 text-xs m-0 font-sans">Verificador en tiempo real de Temas Obligatorios — UrbanFit</p>
                </div>
              </div>
              <button 
                onClick={() => setShowAcademicPanel(false)}
                className="p-2 hover:bg-white/10 rounded-full text-white/80 hover:text-white transition-colors"
                aria-label="Close academic panel"
              >
                <X size={24} />
              </button>
            </div>

            <div className="bg-purple-50 px-6 py-3 border-b border-purple-100 flex flex-wrap justify-between items-center gap-3 shrink-0">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-purple-800 uppercase tracking-widest font-mono">Prueba Interactiva:</span>
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className={`px-3 py-1 text-xs font-bold rounded-full border transition-all duration-300 flex items-center gap-1.5 ${darkMode ? 'bg-purple-800 text-white border-purple-800' : 'bg-white text-purple-800 border-purple-200 hover:border-purple-300'}`}
                >
                  <Eye size={14} />
                  {darkMode ? 'Modo Oscuro SASS (Activo)' : 'Probar Modo Oscuro SASS'}
                </button>
              </div>

              <div className="text-xs text-purple-700 font-mono">
                Responsive Activo: <span className="bg-purple-200 text-purple-900 font-bold px-1.5 py-0.5 rounded">Mobile-First</span>
              </div>
            </div>

            <div className="flex border-b border-gray-200 overflow-x-auto bg-gray-50 shrink-0 select-none">
              <button 
                onClick={() => setActiveAcademicTab('sass71')}
                className={`px-5 py-3 text-sm font-bold border-b-2 whitespace-nowrap flex items-center gap-2 ${activeAcademicTab === 'sass71' ? 'border-purple-600 text-purple-700 bg-white' : 'border-transparent text-gray-600 hover:text-purple-600 hover:bg-gray-100'}`}
              >
                <Code size={16} /> Patrón SASS 7-1
              </button>

              <button 
                onClick={() => setActiveAcademicTab('animations')}
                className={`px-5 py-3 text-sm font-bold border-b-2 whitespace-nowrap flex items-center gap-2 ${activeAcademicTab === 'animations' ? 'border-purple-600 text-purple-700 bg-white' : 'border-transparent text-gray-600 hover:text-purple-600 hover:bg-gray-100'}`}
              >
                <Sliders size={16} /> Laboratorio de Animaciones (12)
              </button>

              <button 
                onClick={() => setActiveAcademicTab('bem')}
                className={`px-5 py-3 text-sm font-bold border-b-2 whitespace-nowrap flex items-center gap-2 ${activeAcademicTab === 'bem' ? 'border-purple-600 text-purple-700 bg-white' : 'border-transparent text-gray-600 hover:text-purple-600 hover:bg-gray-100'}`}
              >
                <Layers size={16} /> Metodología BEM
              </button>

              <button 
                onClick={() => setActiveAcademicTab('less')}
                className={`px-5 py-3 text-sm font-bold border-b-2 whitespace-nowrap flex items-center gap-2 ${activeAcademicTab === 'less' ? 'border-purple-600 text-purple-700 bg-white' : 'border-transparent text-gray-600 hover:text-purple-600 hover:bg-gray-100'}`}
              >
                <BookOpen size={16} /> LESS Comparativa
              </button>

              <button 
                onClick={() => setActiveAcademicTab('perf')}
                className={`px-5 py-3 text-sm font-bold border-b-2 whitespace-nowrap flex items-center gap-2 ${activeAcademicTab === 'perf' ? 'border-purple-600 text-purple-700 bg-white' : 'border-transparent text-gray-600 hover:text-purple-600 hover:bg-gray-100'}`}
              >
                <Cpu size={16} /> Rendimiento GPU
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 bg-white">
              {activeAcademicTab === 'sass71' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <h4 className="font-extrabold text-purple-900 text-base mb-1">Estructura de Carpetas SASS 7-1</h4>
                    <p className="text-gray-700 text-xs leading-relaxed m-0">
                      El proyecto está configurado de forma modular. Hemos separado todo el diseño en partials organizados en 7 directorios lógicos.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-xl p-3 bg-gray-50 text-xs font-mono">
                      <div className="font-bold text-purple-800 mb-2 border-b border-gray-200 pb-1">📂 src/scss/</div>
                      <div className="space-y-1">
                        <div><span className="text-purple-600">📁 abstracts/</span>
                          <div className="pl-4 text-gray-600 space-y-0.5">
                            <div className={`cursor-pointer hover:text-purple-600 p-0.5 rounded ${selectedSassFile === 'variables' ? 'bg-purple-100 text-purple-800 font-bold' : ''}`} onClick={() => setSelectedSassFile('variables')}>📄 _variables.scss</div>
                            <div className={`cursor-pointer hover:text-purple-600 p-0.5 rounded ${selectedSassFile === 'mixins' ? 'bg-purple-100 text-purple-800 font-bold' : ''}`} onClick={() => setSelectedSassFile('mixins')}>📄 _mixins.scss</div>
                            <div>📄 _functions.scss</div>
                            <div>📄 _breakpoints.scss</div>
                          </div>
                        </div>
                        <div><span className="text-purple-600">📁 base/</span>
                          <div className="pl-4 text-gray-600"><div>📄 _reset.scss</div><div>📄 _typography.scss</div><div>📄 _base.scss</div></div>
                        </div>
                        <div><span className="text-purple-600">📁 components/</span>
                          <div className="pl-4 text-gray-600 space-y-0.5">
                            <div className={`cursor-pointer hover:text-purple-600 p-0.5 rounded ${selectedSassFile === 'animations' ? 'bg-purple-100 text-purple-800 font-bold' : ''}`} onClick={() => setSelectedSassFile('animations')}>📄 _animations.scss</div>
                            <div className={`cursor-pointer hover:text-purple-600 p-0.5 rounded ${selectedSassFile === 'cards' ? 'bg-purple-100 text-purple-800 font-bold' : ''}`} onClick={() => setSelectedSassFile('cards')}>📄 _cards.scss</div>
                            <div>📄 _buttons.scss</div>
                            <div>📄 _navbar.scss</div>
                            <div>📄 _hero.scss</div>
                          </div>
                        </div>
                        <div><span className="text-purple-600">📁 layout/</span>
                          <div className="pl-4 text-gray-600">
                            <div className={`cursor-pointer hover:text-purple-600 p-0.5 rounded ${selectedSassFile === 'grid' ? 'bg-purple-100 text-purple-800 font-bold' : ''}`} onClick={() => setSelectedSassFile('grid')}>📄 _grid.scss</div>
                            <div>📄 _footer.scss</div>
                            <div>📄 _header.scss</div>
                          </div>
                        </div>
                        <div><span className="text-purple-600">📁 pages/</span><div className="pl-4 text-gray-600"><div>📄 _home.scss</div></div></div>
                        <div><span className="text-purple-600">📁 themes/</span><div className="pl-4 text-gray-600"><div>📄 _dark-mode.scss</div></div></div>
                        <div><span className="text-purple-600">📁 vendors/</span><div className="pl-4 text-gray-600"><div>📄 _bootstrap-custom.scss</div><div>📄 _tailwind-utils.scss</div></div></div>
                        <div className="font-bold text-indigo-700">📄 main.scss (Consolidador)</div>
                      </div>
                    </div>

                    <div className="col-span-2 flex flex-col items-stretch border border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-gray-800 text-gray-300 px-4 py-2 text-xs font-mono flex justify-between items-center">
                        <span>Código SASS: {sassFilesCode[selectedSassFile].path}</span>
                        <span className="text-yellow-400 font-bold">SCSS</span>
                      </div>
                      <div className="p-3 bg-purple-50 text-xs border-b border-gray-200 text-purple-900 font-sans">
                        💡 <b>Propósito:</b> {sassFilesCode[selectedSassFile].desc}
                      </div>
                      <pre className="p-4 bg-gray-900 text-green-400 text-xs font-mono overflow-auto flex-grow h-[280px] m-0">
                        <code>{sassFilesCode[selectedSassFile].code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {activeAcademicTab === 'animations' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <h4 className="font-extrabold text-purple-900 text-base mb-1">Laboratorio de Animaciones por Hardware (12 en total)</h4>
                    <p className="text-gray-700 text-xs leading-relaxed m-0">
                      Utilizamos la regla `@keyframes` de SASS para crear 12 animaciones personalizadas.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      <button onClick={() => setAnimLabSelected('anim-fade-in')} className={`px-3 py-2 text-xs font-bold rounded-lg border text-left transition-all ${animLabSelected === 'anim-fade-in' ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700'}`}>1. fadeIn</button>
                      <button onClick={() => setAnimLabSelected('anim-fade-in-up')} className={`px-3 py-2 text-xs font-bold rounded-lg border text-left transition-all ${animLabSelected === 'anim-fade-in-up' ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700'}`}>2. fadeInUp</button>
                      <button onClick={() => setAnimLabSelected('anim-slide-in-left')} className={`px-3 py-2 text-xs font-bold rounded-lg border text-left transition-all ${animLabSelected === 'anim-slide-in-left' ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700'}`}>3. slideInLeft</button>
                      <button onClick={() => setAnimLabSelected('anim-slide-in-right')} className={`px-3 py-2 text-xs font-bold rounded-lg border text-left transition-all ${animLabSelected === 'anim-slide-in-right' ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700'}`}>4. slideInRight</button>
                      <button onClick={() => setAnimLabSelected('anim-scale-in')} className={`px-3 py-2 text-xs font-bold rounded-lg border text-left transition-all ${animLabSelected === 'anim-scale-in' ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700'}`}>5. scaleIn</button>
                      <button onClick={() => setAnimLabSelected('anim-pulse')} className={`px-3 py-2 text-xs font-bold rounded-lg border text-left transition-all ${animLabSelected === 'anim-pulse' ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700'}`}>6. pulse</button>
                      <button onClick={() => setAnimLabSelected('anim-float')} className={`px-3 py-2 text-xs font-bold rounded-lg border text-left transition-all ${animLabSelected === 'anim-float' ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700'}`}>7. float</button>
                      <button onClick={() => setAnimLabSelected('anim-spin')} className={`px-3 py-2 text-xs font-bold rounded-lg border text-left transition-all ${animLabSelected === 'anim-spin' ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700'}`}>8. spin</button>
                      <button onClick={() => setAnimLabSelected('anim-glow')} className={`px-3 py-2 text-xs font-bold rounded-lg border text-left transition-all ${animLabSelected === 'anim-glow' ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700'}`}>9. glow</button>
                      <button onClick={() => setAnimLabSelected('anim-bounce-hover')} className={`px-3 py-2 text-xs font-bold rounded-lg border text-left transition-all ${animLabSelected === 'anim-bounce-hover' ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700'}`}>10. bounce</button>
                      <button onClick={() => setAnimLabSelected('anim-gradient-bg')} className={`px-3 py-2 text-xs font-bold rounded-lg border text-left transition-all ${animLabSelected === 'anim-gradient-bg' ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700'}`}>11. gradientShift</button>
                      <button onClick={() => setAnimLabSelected('anim-typing')} className={`px-3 py-2 text-xs font-bold rounded-lg border text-left transition-all ${animLabSelected === 'anim-typing' ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700'}`}>12. typing</button>
                    </div>

                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-6 bg-gray-50 h-[220px]">
                      <div 
                        key={animLabSelected}
                        className={`flex items-center justify-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 ${
                          animLabSelected === 'anim-fade-in' ? 'anim-fade-in' :
                          animLabSelected === 'anim-fade-in-up' ? 'anim-fade-in-up' :
                          animLabSelected === 'anim-slide-in-left' ? 'anim-slide-in-left' :
                          animLabSelected === 'anim-slide-in-right' ? 'anim-slide-in-right' :
                          animLabSelected === 'anim-scale-in' ? 'anim-scale-in' :
                          animLabSelected === 'anim-pulse' ? 'anim-pulse' :
                          animLabSelected === 'anim-float' ? 'anim-float' :
                          animLabSelected === 'anim-spin' ? 'anim-spin' :
                          animLabSelected === 'anim-glow' ? 'anim-glow border-purple-500' :
                          animLabSelected === 'anim-bounce-hover' ? 'hover:scale-105 cursor-pointer' :
                          animLabSelected === 'anim-gradient-bg' ? 'anim-gradient-bg text-white' : ''
                        }`}
                        style={{
                          width: '140px',
                          height: '140px',
                          animationDuration: animLabSelected === 'anim-spin' ? '1s' : animLabSelected === 'anim-float' ? '2.5s' : '1.5s',
                          animationIterationCount: animLabSelected === 'anim-bounce-hover' ? 'infinite' : undefined
                        }}
                      >
                        {animLabSelected === 'anim-typing' ? (
                          <div className="overflow-hidden border-r-2 border-purple-600 whitespace-nowrap text-purple-700 font-mono font-bold text-xs" style={{ animation: 'typing 2s steps(10) infinite' }}>
                            URBAN_FIT
                          </div>
                        ) : (
                          <Dumbbell size={48} className={animLabSelected === 'anim-gradient-bg' ? 'text-white' : 'text-purple-600'} />
                        )}
                      </div>
                      <span className="text-[10px] text-gray-500 font-mono mt-3 uppercase tracking-widest">
                        Visualizador de GPU Activo
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeAcademicTab === 'bem' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <h4 className="font-extrabold text-purple-900 text-base mb-1">Estructura BEM (Block-Element-Modifier)</h4>
                    <p className="text-gray-700 text-xs leading-relaxed m-0">
                      BEM previene el anidamiento excesivo y la especificidad incontrolada de CSS.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-purple-200 rounded-xl p-4 bg-purple-50/50 space-y-3 relative overflow-hidden">
                      <span className="absolute top-2 right-2 text-[9px] font-mono font-bold bg-purple-200 text-purple-900 px-1.5 py-0.5 rounded">
                        REPRESENTACIÓN VISUAL
                      </span>
                      <div className="border-2 border-purple-500 bg-white p-4 rounded-xl shadow-md text-left">
                        <div className="font-mono text-[9px] text-purple-600 font-bold mb-1">.plan-card .plan-card--featured</div>
                        <h4 className="font-bold text-purple-600 border border-purple-300 px-1 rounded inline-block text-xs font-mono mb-2">.plan-card__name</h4>
                        <div className="border border-purple-300 p-2 rounded mb-2 bg-purple-50">
                          <div className="font-mono text-[9px] text-purple-600 font-bold">.plan-card__price-box</div>
                          <span className="text-sm font-bold">$59 / mes</span>
                        </div>
                        <ul className="text-xs space-y-1">
                          <li className="border border-dashed border-purple-300 p-1 rounded font-mono text-[10px] text-gray-700 flex items-center gap-1">
                            <span className="text-green-600">✔</span> .plan-card__feature-item
                          </li>
                          <li className="border border-dashed border-red-300 p-1 rounded font-mono text-[10px] text-gray-400 flex items-center gap-1">
                            <span className="text-red-500">✘</span> .plan-card__feature-item--disabled
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4 bg-gray-50 space-y-3">
                      <h5 className="font-bold text-gray-900 text-sm mb-1">Glosario BEM del Gimnasio</h5>
                      <div className="space-y-2 text-xs leading-normal">
                        <div>
                          <b className="text-purple-700 font-mono bg-purple-100 px-1 py-0.5 rounded">Bloque (Block)</b>
                          <p className="text-gray-600 m-0 text-[11px] mt-0.5">La entidad independiente: <code>.plan-card</code>, <code>.btn-urban</code>, <code>.navbar-custom</code>.</p>
                        </div>
                        <div>
                          <b className="text-blue-700 font-mono bg-blue-100 px-1 py-0.5 rounded">Elemento (Element)</b>
                          <p className="text-gray-600 m-0 text-[11px] mt-0.5">Ligado al bloque con doble guión bajo <code>__</code>: <code>.plan-card__price-box</code>.</p>
                        </div>
                        <div>
                          <b className="text-secondary font-mono bg-red-100 px-1 py-0.5 rounded">Modificador (Modifier)</b>
                          <p className="text-gray-600 m-0 text-[11px] mt-0.5">Variación ligada con doble guión medio <code>--</code>: <code>.plan-card--featured</code>.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeAcademicTab === 'less' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <h4 className="font-extrabold text-purple-900 text-base mb-1">Comparación Directa: SASS vs LESS</h4>
                    <p className="text-gray-700 text-xs leading-relaxed m-0">
                      Ambos son preprocesadores CSS que extienden el CSS con superpoderes, pero tienen notables diferencias sintácticas y de control de bucles.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-purple-200 rounded-xl overflow-hidden flex flex-col items-stretch">
                      <div className="bg-purple-800 text-white px-3 py-1.5 text-xs font-mono font-bold">SASS (SCSS Sabor)</div>
                      <pre className="p-3 bg-gray-900 text-purple-300 text-xs font-mono m-0 overflow-x-auto h-[220px]">
{`$color-primary: #6C63FF;
$spacing-lg: 1.5rem;

@mixin respond-to($bp) {
  @media (min-width: map-get($breakpoints, $bp)) {
    @content;
  }
}

@for $i from 1 through 3 {
  .card-delay-#{$i} {
    animation-delay: #{$i * 0.15}s;
  }
}`}
                      </pre>
                    </div>

                    <div className="border border-indigo-200 rounded-xl overflow-hidden flex flex-col items-stretch">
                      <div className="bg-indigo-800 text-white px-3 py-1.5 text-xs font-mono font-bold">LESS (Equivalente)</div>
                      <pre className="p-3 bg-gray-900 text-indigo-300 text-xs font-mono m-0 overflow-x-auto h-[220px]">
{`@color-primary: #6C63FF;
@spacing-lg: 1.5rem;

.respond-to(@bp) {
  @media (min-width: @bp) {
    // contenido
  }
}

.generar-delays(@n, @i: 1) when (@i <= @n) {
  .card-delay-@{i} {
    animation-delay: (@i * 0.15s);
  }
  .generar-delays(@n, (@i + 1));
}
.generar-delays(3);`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs leading-normal">
                    💡 <b>Diferencia clave:</b> Bootstrap 5 se escribe directamente en SASS, lo que facilita sobreescribir las variables del framework de forma nativa.
                  </div>
                </div>
              )}

              {activeAcademicTab === 'perf' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <h4 className="font-extrabold text-purple-900 text-base mb-1">Rendimiento de Hardware & GPU</h4>
                    <p className="text-gray-700 text-xs leading-relaxed m-0">
                      Cuando un sitio web tiene muchas transformaciones y animaciones simultáneas, un renderizado ineficiente causa lentitud.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-xl p-4 bg-gray-50 space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-purple-700 font-mono font-bold">
                        <Cpu size={16} /> will-change: transform, opacity;
                      </div>
                      <p className="text-gray-600 m-0 leading-normal">
                        Notifica al motor gráfico que el elemento será animado. El navegador le asigna su propia <b>capa de hardware en la GPU</b>.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4 bg-gray-50 space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-indigo-700 font-mono font-bold">
                        <Layers size={16} /> contain: layout;
                      </div>
                      <p className="text-gray-600 m-0 leading-normal">
                        Aísla el contenido interno del resto de la página. El navegador <b>solo repinta esa pequeña tarjeta</b>, sin recalcular toda la página.
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 flex items-start gap-3">
                    <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-extrabold text-amber-950 text-xs mb-1 uppercase tracking-wider font-mono">Detección de Fallbacks con @supports</h5>
                      <p className="text-amber-900 text-xs m-0 leading-normal">
                        El archivo <code>scss/layout/_grid.scss</code> contiene una query de detección automática. Si se detecta un navegador sin soporte para CSS Grid, la interfaz degrada a <code>float: left</code>.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-50 border-t border-gray-200 p-4 shrink-0 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500 font-sans">
              <span>Gimnasio UrbanFit — Demo de Cátedra Profesional</span>
              <div className="flex gap-4">
                <a href="/docs/README.md" target="_blank" className="text-purple-600 font-bold hover:underline">Ver README.md</a>
                <a href="/docs/GUIA_ESTILOS.md" target="_blank" className="text-purple-600 font-bold hover:underline">Ver Guía de Estilos</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}