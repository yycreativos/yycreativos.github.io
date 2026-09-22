/* @ds-bundle: {"format":4,"namespace":"YYParaguasDesignSystem_042bd6","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/core/Button.jsx":"c95f1453f458","components/core/Card.jsx":"aab8c2107697","components/core/Icon.jsx":"baf9e0ee9c5b","components/core/Kicker.jsx":"edc86516952f","components/core/Tag.jsx":"fd1b37d4da09","components/forms/Input.jsx":"f6c6057fff59","components/forms/Textarea.jsx":"88385228aba5","ui_kits/marketing-site/App.jsx":"4c4e1f6b32bd","ui_kits/marketing-site/Footer.jsx":"fcda59d93a78","ui_kits/marketing-site/Gallery.jsx":"f3bf54058045","ui_kits/marketing-site/Header.jsx":"109d7ec35940","ui_kits/marketing-site/Hero.jsx":"f83dfaaa49da","ui_kits/marketing-site/QuoteForm.jsx":"b3c2d6a2e598","ui_kits/marketing-site/Services.jsx":"e42d47b852f1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.YYParaguasDesignSystem_042bd6 = window.YYParaguasDesignSystem_042bd6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  type = 'button',
  disabled
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 14
    },
    md: {
      padding: '12px 22px',
      fontSize: 15
    },
    lg: {
      padding: '16px 28px',
      fontSize: 16
    }
  };
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 800,
    borderRadius: 'var(--radius-pill)',
    border: '2px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    transition: 'all var(--duration-standard) var(--ease-standard)',
    transform: active ? 'scale(0.98)' : 'scale(1)',
    opacity: disabled ? 0.5 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: hover ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--accent-contrast)'
    },
    dark: {
      background: hover ? '#222' : 'var(--y-black)',
      color: 'var(--y-white)'
    },
    outline: {
      background: hover ? 'var(--surface-sunken)' : 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: hover ? 'var(--surface-sunken)' : 'transparent',
      color: 'var(--text-primary)'
    }
  };
  return React.createElement('button', {
    type,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant]
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  image,
  padded = true
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      transition: 'box-shadow var(--duration-standard) var(--ease-standard)'
    }
  }, image && React.createElement('img', {
    src: image,
    style: {
      width: '100%',
      height: 160,
      objectFit: 'cover',
      display: 'block'
    }
  }), React.createElement('div', {
    style: {
      padding: padded ? 'var(--space-5)' : 0
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 20,
  color = 'currentColor'
}) {
  return React.createElement('img', {
    src: `https://unpkg.com/lucide-static@latest/icons/${name}.svg`,
    width: size,
    height: size,
    style: {
      display: 'inline-block',
      filter: color === 'currentColor' ? 'none' : undefined
    },
    alt: ''
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function Kicker({
  children,
  dark
}) {
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-kicker)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-kicker)',
      textTransform: 'uppercase',
      color: dark ? 'var(--text-inverse)' : 'var(--text-primary)'
    }
  }, children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      background: 'var(--gray-100)',
      color: 'var(--text-primary)'
    },
    brand: {
      background: 'var(--y-yellow)',
      color: 'var(--y-black)'
    },
    dark: {
      background: 'var(--y-black)',
      color: 'var(--y-white)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-small)',
      fontWeight: 700,
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: 'var(--text-small)',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      padding: '12px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `2px solid ${focus ? 'var(--y-black)' : 'var(--border-default)'}`,
      outline: 'none',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  label,
  placeholder,
  rows = 4,
  value,
  onChange
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: 'var(--text-small)',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, label), React.createElement('textarea', {
    placeholder,
    rows,
    value,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      padding: '12px 14px',
      resize: 'vertical',
      borderRadius: 'var(--radius-sm)',
      border: `2px solid ${focus ? 'var(--y-black)' : 'var(--border-default)'}`,
      outline: 'none',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/App.jsx
try { (() => {
function App() {
  const nav = label => {
    const el = document.getElementById(label);
    if (el) window.scrollTo({
      top: el.offsetTop - 70,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    onNav: nav
  }), /*#__PURE__*/React.createElement(Hero, {
    onCta: () => nav('Contacto')
  }), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Gallery, null), /*#__PURE__*/React.createElement(QuoteForm, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Footer.jsx
try { (() => {
function Footer() {
  const {
    Icon
  } = window.YYParaguasDesignSystem_042bd6;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--y-black)',
      color: '#fff',
      padding: '40px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/marks/logo-white-bg.jpg",
    alt: "Y&Y Paraguas",
    style: {
      height: 32,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      fontSize: 13,
      color: 'rgba(255,255,255,0.75)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14
  }), "311 7030706"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 14
  }), "y.yparaguas@gmail.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), "Barranquilla, Cll 108 n 13-47"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'var(--gradient-shard)',
      marginTop: 32,
      borderRadius: 2
    }
  }));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Gallery.jsx
try { (() => {
function Gallery() {
  return /*#__PURE__*/React.createElement("section", {
    id: "Galer\xEDa",
    style: {
      position: 'relative',
      minHeight: 360,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/umbrellas-overhead-yellow.jpg",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(0deg,rgba(0,0,0,0.55),rgba(0,0,0,0.15))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '0 32px',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-h1)',
      maxWidth: 560
    }
  }, "Destaca entre la multitud."));
}
window.Gallery = Gallery;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Header.jsx
try { (() => {
const {
  Button
} = window.YYParaguasDesignSystem_042bd6;
function Header({
  onNav
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'var(--y-black)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/marks/logo-white-bg.jpg",
    alt: "Y&Y Paraguas",
    style: {
      height: 36,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, ['Servicios', 'Galería', 'Contacto'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => onNav(l),
    style: {
      color: 'var(--y-white)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 14,
      cursor: 'pointer'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav('Contacto')
  }, "Cotizar")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
function Hero({
  onCta
}) {
  const {
    Button
  } = window.YYParaguasDesignSystem_042bd6;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 560,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/umbrellas-rain-bw.jpg",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(0,0,0,0.75),rgba(0,0,0,0.35))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '0 32px',
      maxWidth: 640,
      color: '#fff',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-kicker)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-kicker)',
      textTransform: 'uppercase',
      color: 'var(--y-yellow)',
      marginBottom: 16
    }
  }, "Paraguas personalizados"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-display-1)',
      lineHeight: 'var(--lh-tight)',
      margin: '0 0 20px'
    }
  }, "Convierte el clima en tu mejor carta de presentaci\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'rgba(255,255,255,0.85)',
      margin: '0 0 28px'
    }
  }, "Dise\xF1o y personalizaci\xF3n de paraguas para marcas, eventos y uso personal \u2014 calidad premium, atenci\xF3n a la medida."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onCta
  }, "Solicitar cotizaci\xF3n"), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    onClick: onCta
  }, "Ver servicios"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/QuoteForm.jsx
try { (() => {
function QuoteForm() {
  const {
    Input,
    Textarea,
    Button,
    Kicker,
    Icon
  } = window.YYParaguasDesignSystem_042bd6;
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    details: ''
  });
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "Contacto",
    style: {
      padding: '80px 32px',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, null, "Solicita tu cotizaci\xF3n"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-h1)',
      margin: '12px 0 16px'
    }
  }, "Cu\xE9ntanos qu\xE9 necesitas"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-body)',
      maxWidth: 420
    }
  }, "Trabajamos de la mano contigo para que el resultado se alinee con tus expectativas. Escr\xEDbenos y te contactamos en menos de 24 horas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 32,
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18
  }), "311 7030706"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  }), "y.yparaguas@gmail.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 18
  }), "Barranquilla, Barrio La Paz \u2014 Cll 108 n 13-47"))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 12,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 18
    }
  }, "\xA1Gracias, ", form.name || 'amigo', "!"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 14
    }
  }, "Recibimos tu solicitud. Te contactaremos pronto por correo o tel\xE9fono."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: () => setSent(false)
  }, "Enviar otra solicitud")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Tu nombre",
    value: form.name,
    onChange: set('name')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    type: "email",
    placeholder: "tucorreo@ejemplo.com",
    value: form.email,
    onChange: set('email')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    placeholder: "311 000 0000",
    value: form.phone,
    onChange: set('phone')
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Detalles del pedido",
    placeholder: "Cantidad, dise\xF1o, fecha de evento...",
    rows: 4,
    value: form.details,
    onChange: set('details')
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "Enviar solicitud"))));
}
window.QuoteForm = QuoteForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/QuoteForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Services.jsx
try { (() => {
function Services() {
  const {
    Card,
    Kicker,
    Tag,
    Icon
  } = window.YYParaguasDesignSystem_042bd6;
  const items = [{
    tag: 'Corporativo',
    tone: 'brand',
    title: 'Paraguas publicitarios',
    desc: 'Tu logo impreso en la capota, ideal para eventos y activaciones de marca.'
  }, {
    tag: 'Eventos',
    tone: 'neutral',
    title: 'Producción para eventos',
    desc: 'Grandes volúmenes con tiempos de entrega confiables para tu marca.'
  }, {
    tag: 'Personal',
    tone: 'dark',
    title: 'Diseños exclusivos',
    desc: 'Accesorios únicos con materiales premium para uso personal.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "Servicios",
    style: {
      padding: '80px 32px',
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Nuestros servicios"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-h1)',
      margin: '12px 0 40px'
    }
  }, "Versatilidad total para cada necesidad"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: it.tone
  }, it.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      margin: '14px 0 8px'
    }
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 14,
      lineHeight: 'var(--lh-body)'
    }
  }, it.desc)))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
