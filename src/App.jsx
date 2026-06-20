import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function useReveal(delay = 0) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return [ref, visible]
}

/* ── Nav ─────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = [
    { label: 'חינה',    href: '#henna'    },
    { label: 'שירותים', href: '#services' },
    { label: 'גלריה',   href: '#gallery'  },
    { label: 'אודות',   href: '#about'    },
  ]

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 md:px-16 transition-all duration-500 backdrop-blur-md
        ${scrolled ? 'py-4 bg-paper/90 border-b border-ink/8 shadow-sm' : 'py-7 bg-paper/40'}`}>

        <a href="#" className="font-sans text-lg font-black text-ink tracking-tight uppercase">
          Emily Flow
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}
                className="nav-link text-[13px] font-semibold tracking-[2px] uppercase text-ink hover:text-ink transition-colors duration-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://wa.me/972544880750?text=%D7%94%D7%99%D7%99%20%D7%90%D7%9E%D7%99%D7%9C%D7%99%21%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%F0%9F%99%8F"
            target="_blank" rel="noopener"
            className="px-7 py-3 bg-teal text-paper text-[12px] font-bold tracking-[2px] uppercase
              hover:bg-teal-dark transition-colors duration-300">
            הזמיני עכשיו
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(true)} className="md:hidden flex flex-col gap-[5px] p-1" aria-label="תפריט">
          <span className="w-6 h-[2px] bg-ink block" />
          <span className="w-6 h-[2px] bg-ink block" />
          <span className="w-4 h-[2px] bg-ink block" />
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-ink/60 z-[998] backdrop-blur-sm" />}
      <div className={`fixed top-0 right-0 h-screen w-80 bg-paper z-[999] flex flex-col pt-24 pb-10
        transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setOpen(false)}
          className="absolute top-7 left-7 text-ink text-2xl font-light leading-none">✕</button>
        <span className="font-black text-ink text-xl px-8 pb-6 border-b border-ink/10 uppercase tracking-tight">Emily Flow</span>
        <ul className="list-none mt-4 flex-1">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}
                className="block px-8 py-5 text-sm font-bold uppercase tracking-widest text-ink border-b border-ink/8 hover:bg-paper-warm transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-8">
          <a href="https://wa.me/972544880750?text=%D7%94%D7%99%D7%99%20%D7%90%D7%9E%D7%99%D7%9C%D7%99%21%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%F0%9F%99%8F"
            target="_blank" rel="noopener" onClick={() => setOpen(false)}
            className="block w-full text-center py-4 bg-teal text-paper text-sm font-bold tracking-widest uppercase">
            הזמיני עכשיו
          </a>
        </div>
      </div>
    </>
  )
}

/* ── Hero ────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="home" className="overflow-hidden" style={{background: 'linear-gradient(to bottom, rgb(162,177,231) 0%, rgb(220,224,245) 45%, rgb(171,141,115) 100%)'}}>

      {/* Mobile: תמונה למעלה, טקסט למטה */}
      <div className="md:hidden">
        <div className="relative h-[60vh]">
          <img src="/hero-bg.jpg" alt="Emily Flow"
            className="w-full h-full object-cover object-center animate-fade-in" />
        </div>
        <div className="px-8 py-10">
          <span className="text-muted text-[11px] font-bold tracking-[4px] uppercase mb-4 block">
            ריקוד · אש · יוגה
          </span>
          <h1 className="font-sans font-black text-ink leading-[0.92] mb-6 uppercase tracking-tight text-[clamp(3.5rem,14vw,6rem)]">
            אמילי<br />פלואו
          </h1>
          <p className="text-ink/60 text-[15px] leading-[1.8] mb-8 font-light">
            רקדנית בטן טרייבל פיוז׳ן ופרפורמרית אש ·
            מורה ליוגה אשטנגה ויניאסה ·
            מנחת מדיטציה ומיינדפולנס ·
            מדריכת סדנאת ״חיבור לעצמי״
          </p>
          <a href="https://wa.me/972544880750?text=%D7%94%D7%99%D7%99%20%D7%90%D7%9E%D7%99%D7%9C%D7%99%21%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%F0%9F%99%8F"
            target="_blank" rel="noopener"
            className="inline-block px-10 py-4 bg-teal text-paper text-[12px] font-bold tracking-[3px] uppercase">
            הזמיני עכשיו
          </a>
        </div>
      </div>

      {/* Desktop: תמונה טבעית שמאלה, גרדיאנט מטשטש לימין */}
      <div className="hidden md:flex relative h-[88vh] overflow-hidden">
        {/* התמונה בגובה מלא, רוחב טבעי — נמסה לשקיפות מימין */}
        <img src="/hero-bg.jpg" alt="Emily Flow"
          className="absolute top-0 left-0 h-full w-auto animate-fade-in"
          style={{WebkitMaskImage: 'linear-gradient(to right, black 55%, transparent 82%)', maskImage: 'linear-gradient(to right, black 55%, transparent 82%)', transform: 'scale(1.15)', transformOrigin: 'left center'}} />
        <div className="relative z-10 flex flex-col justify-center px-16 pt-32 pb-6 max-w-xl ml-auto">
          <span className="inline-flex items-center gap-3 text-ink text-[13px] font-black tracking-[4px] uppercase mb-8 animate-fade-up">
            תנועה · נוכחות · חוויה
          </span>
          <h1 className="font-sans font-black text-ink leading-[0.92] mb-10 animate-fade-up uppercase tracking-tight text-[clamp(3.6rem,9.6vw,8rem)]">
            אמילי<br />פלואו
          </h1>
          <p className="text-ink/80 text-[16px] leading-[1.8] mb-12 max-w-md animate-fade-up font-semibold">
            רקדנית בטן טרייבל פיוז׳ן ופרפורמרית אש ·
            מורה ליוגה אשטנגה ויניאסה ·
            מנחת מדיטציה ומיינדפולנס ·
            מדריכת סדנאת ״חיבור לעצמי״
          </p>
          <div className="flex items-center gap-5 flex-wrap animate-fade-up">
            <a href="https://wa.me/972544880750?text=%D7%94%D7%99%D7%99%20%D7%90%D7%9E%D7%99%D7%9C%D7%99%21%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%F0%9F%99%8F"
              target="_blank" rel="noopener"
              className="inline-block px-10 py-4 bg-teal text-paper text-[12px] font-bold tracking-[3px] uppercase hover:bg-teal-dark transition-colors duration-300">
              הזמיני עכשיו
            </a>
            <a href="#services"
              className="inline-flex items-center gap-3 text-[13px] font-bold tracking-[2px] uppercase text-ink hover:text-muted transition-colors duration-300">
              <span>גלי עוד</span>
              <span className="w-8 h-px bg-current" />
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

/* ── Marquee strip ───────────────────────────────────────── */
const MARQUEE_ITEMS = [
  'ריקודי בטן', 'טרייבל פיוז׳ן', 'הופעות אש', 'יוגה אשטנגה',
  'מדיטציה ומיינדפולנס', 'גאגלינג פלואו', 'סדנת חיבור לעצמי',
  'ריקודי בטן', 'טרייבל פיוז׳ן', 'הופעות אש', 'יוגה אשטנגה',
  'מדיטציה ומיינדפולנס', 'גאגלינג פלואו', 'סדנת חיבור לעצמי',
]

function Marquee() {
  return (
    <div className="overflow-hidden border-y border-ink/10 py-4 bg-ink" style={{ direction: 'ltr' }}>
      <div className="marquee-track whitespace-nowrap">
        {MARQUEE_ITEMS.map((t, i) => (
          <span key={i} className="inline-block px-8 text-paper text-[13px] font-bold tracking-[3px] uppercase">
            {t}
            <span className="ml-8 text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Henna ───────────────────────────────────────────────── */
function Henna() {
  const [ref, visible] = useReveal()
  const [imgRef, imgVisible] = useReveal(150)
  return (
    <section id="henna" className="py-28 px-8 md:px-20 bg-paper">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* Text */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <span className="text-muted text-[11px] font-bold tracking-[4px] uppercase mb-4 block">מוצר דגל</span>
          <h2 className="font-sans font-black text-ink uppercase tracking-tight text-display-md mb-6">
            ריקודי בטן<br />לחינה
          </h2>
          <div className="space-y-5 text-ink/65 text-[15px] leading-[1.9] font-light">
            <p>
              <strong className="text-ink font-semibold">חינה אחת. רגע אחד שכולן יזכרו.</strong>
            </p>
            <p>
              רקדנית בטן שיודעת לקרוא את הקהל, להרים את האנרגיה בדיוק ברגע הנכון —
              ולגרום לכלה להרגיש מלכה. אני מגיעה מוכנה, מקצועית ועם הלב פתוח,
              ומותאמת את ההופעה לאופי החינה שלכן — למוזיקה ולאווירה.
            </p>
            <p>
              כי חינה טובה לא תלויה רק בקישוטים —
              היא תלויה באנרגיה שמביאים לחדר.
            </p>
            <p>
              <strong className="text-ink font-semibold">מעוניינות? השאירי פרטים ואחזור אליכן בהקדם.</strong>
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {['חינה מרוקאית', 'חינה תימנית', 'חינה מזרחית', 'כל סגנון'].map(tag => (
              <span key={tag} className="px-4 py-2 border border-ink/20 text-ink/60 text-[11px] font-bold tracking-wider uppercase">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/חינה"
              className="inline-block px-10 py-4 bg-teal text-paper text-[12px] font-bold tracking-[3px] uppercase
                hover:bg-teal-dark transition-colors duration-300">
              קראי עוד
            </Link>
            <a href="https://wa.me/972544880750?text=%D7%94%D7%99%D7%99%20%D7%90%D7%9E%D7%99%D7%9C%D7%99%21%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%F0%9F%99%8F"
              target="_blank" rel="noopener"
              className="inline-block px-10 py-4 border-2 border-ink text-ink text-[12px] font-bold tracking-[3px] uppercase
                hover:bg-ink hover:text-paper transition-all duration-300">
              הזמיני עכשיו
            </a>
          </div>
        </div>

        {/* Image */}
        <div ref={imgRef} className={`reveal ${imgVisible ? 'visible' : ''} relative`}>
          <div className="absolute -top-3 -left-3 w-full h-full border-2 border-teal/40" />
          <img src="/gallery-1.jpg" alt="ריקוד בטן לחינה — אמילי פלואו"
            className="relative z-10 w-full object-cover shadow-2xl" />
        </div>

      </div>
    </section>
  )
}

/* ── Services ────────────────────────────────────────────── */
const SERVICES = [
  {
    num: '01',
    title: "ריקודי בטן לחינה",
    subtitle: 'מוצר דגל',
    desc: "אמילי פלואו — רקדנית בטן שמביאה אנרגיה, צבע ושמחה לחגיגה שלכן. הופעת ריקודי בטן לחינה היא אחד הרגעים הכי קסומים בערב. אני מתמחה בריקוד בטן טרייבל לאירועי חינה: הופעה מלאת אנרגיה ושמחה שמותאמת לאווירה, למוזיקה ולכלה. מחפשות רקדנית בטן לחינה? אני כאן.",
  },
  {
    num: '02',
    title: "ריקודי בטן טרייבל פיוז'ן",
    subtitle: 'הופעות, שיעורים וסדנאות',
    desc: "חיבור לגוף דרך ריקוד טרייבל פיוז'ן. תנועות ושרירים שלא היינו מודעים אליהם, תוך ריקוד משחרר, מחזק ומהפנט.",
  },
  {
    num: '03',
    title: 'הופעות אש ופלואו',
    subtitle: 'גאגלינג פלואו',
    desc: 'פרפורמנס אש ייחודי לכל אירוע — חתונות, בר מצווה, חינה, פסטיבלים, מסעדות שף ואירועים קורפורטיביים.',
  },
  {
    num: '04',
    title: 'יוגה אשטנגה ויניאסה',
    subtitle: 'שיעורים וסדנאות',
    desc: 'יוגה כדרך חיים. החיבור של התנועה והנשימה, המודעות והנוכחות לרגע הזה — כאן ועכשיו.',
  },
  {
    num: '05',
    title: 'סדנאת ״חיבור לעצמי״',
    subtitle: 'מדיטציה ומיינדפולנס',
    desc: 'כלים ושיטות להתחבר לכאן ועכשיו. תרגילי נשימה, מדיטציה ו-Emotional Release — בדרך לחיים מודעים יותר.',
  },
]

function Services() {
  const [titleRef, titleVisible] = useReveal()
  return (
    <section id="services" className="py-28 px-8 md:px-20 bg-paper">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className={`reveal mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 ${titleVisible ? 'visible' : ''}`}>
          <div>
            <span className="text-muted text-[11px] font-bold tracking-[4px] uppercase mb-4 block">
              מה אני מציעה
            </span>
            <h2 className="font-sans font-black text-ink uppercase tracking-tight text-display-lg">
              שירותים
            </h2>
          </div>
          <a href="https://wa.me/972544880750?text=%D7%94%D7%99%D7%99%20%D7%90%D7%9E%D7%99%D7%9C%D7%99%21%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%F0%9F%99%8F"
            target="_blank" rel="noopener"
            className="self-start md:self-auto px-8 py-3 border-2 border-ink text-ink text-[12px] font-bold tracking-[2px] uppercase
              hover:bg-ink hover:text-paper transition-all duration-300">
            לפרטים ותיאום
          </a>
        </div>

        <div className="border-t border-ink/10">
          {SERVICES.map((s, i) => (
            <ServiceRow key={i} {...s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceRow({ num, title, subtitle, desc, delay, featured }) {
  const [ref, visible] = useReveal(delay)
  return (
    <div ref={ref}
      className={`reveal service-card group flex items-start gap-6 md:gap-12 py-10 px-4 border-b border-ink/10 cursor-default ${visible ? 'visible' : ''} ${featured ? 'bg-paper-warm' : ''}`}>
      <span className="font-sans text-sm text-muted font-bold leading-none mt-1 shrink-0 select-none">{num}</span>
      <div className="flex flex-col md:flex-row md:items-center md:gap-12 flex-1">
        <div className="md:w-72 shrink-0 mb-3 md:mb-0">
          {featured && (
            <span className="inline-block mb-2 px-3 py-1 bg-teal text-paper text-[10px] font-bold tracking-[2px] uppercase">
              ✦ מוצר דגל
            </span>
          )}
          <h3 className="font-sans font-black text-ink text-xl leading-tight mb-1 uppercase">{title}</h3>
          <span className="text-muted text-[12px] font-semibold tracking-wider uppercase">{subtitle}</span>
        </div>
        <p className="text-ink/60 text-[15px] leading-relaxed font-light">{desc}</p>
      </div>
      <svg viewBox="0 0 24 24" className="hidden md:block w-5 h-5 shrink-0 mt-1 text-muted-light group-hover:text-ink transition-colors duration-300 stroke-current fill-none" strokeWidth="1.5">
        <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

/* ── About ───────────────────────────────────────────────── */
function About() {
  const [ref, visible] = useReveal()
  const [imgRef, imgVisible] = useReveal(150)
  return (
    <section id="about" className="py-28 px-8 md:px-20 bg-paper-warm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* Image */}
        <div ref={imgRef} className={`reveal order-2 md:order-1 relative ${imgVisible ? 'visible' : ''}`}>
          <div className="absolute -top-3 -right-3 w-full h-full border-2 border-ink/20" />
          <img src="/contact-photo.jpg" alt="אמילי פלואו"
            className="relative z-10 w-full object-cover shadow-2xl" />
        </div>

        {/* Text */}
        <div ref={ref} className={`reveal order-1 md:order-2 ${visible ? 'visible' : ''}`}>
          <span className="text-muted text-[11px] font-bold tracking-[4px] uppercase mb-6 block">אודות</span>
          <h2 className="font-sans font-black text-ink uppercase tracking-tight text-display-md mb-4">
            היי,<br />אני אמילי
          </h2>
          <p className="text-teal font-semibold text-[15px] tracking-wide mb-8">
            אמנית פרפורמנס שמלמדת נוכחות דרך תנועה
          </p>
          <div className="space-y-5 text-ink/65 text-[15px] leading-[1.9] font-light">
            <p>
              רקדנית בטן טרייבל פיוז׳ן, פרפורמרית אש, מורה ליוגה ומנחת מדיטציה —
              העולמות שלי שונים אבל כולם מסתכמים בדבר אחד: <strong className="text-ink font-semibold">חיבור לגוף ולרגע הזה.</strong>
            </p>
            <p>
              אני מביאה את כל עצמי לכל הופעה, שיעור וסדנה.
              בין אם מדובר בריקוד לבן ובת זוג בחופה, בפרפורמנס אש בפסטיבל, או בסדנת מדיטציה —
              המטרה היא תמיד אותה: לגרום לאנשים להרגיש משהו אמיתי.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://wa.me/972544880750?text=%D7%94%D7%99%D7%99%20%D7%90%D7%9E%D7%99%D7%9C%D7%99%21%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%F0%9F%99%8F"
              target="_blank" rel="noopener"
              className="px-9 py-4 bg-ink text-paper text-[12px] font-bold tracking-[3px] uppercase
                hover:bg-ink-soft transition-colors duration-300">
              צרי קשר
            </a>
            <a href="#gallery"
              className="px-9 py-4 border-2 border-ink text-ink text-[12px] font-bold tracking-[3px] uppercase
                hover:bg-ink hover:text-paper transition-all duration-300">
              גלריה
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Gallery ─────────────────────────────────────────────── */
const GALLERY = [
  { src: '/gallery-1.jpg', label: 'ריקודי בטן',               span: 'row-span-2' },
  { src: '/gallery-2.jpg', label: 'אמילי פלואו',             span: '' },
  { src: '/gallery-3.jpg', label: 'Free Earth Festival',     span: '' },
  { src: '/gallery-4.jpg', label: 'פרפורמנס אש',             span: '' },
  { src: '/gallery-5.jpg', label: "סדנאת ריקוד טרייבל פיוז'ן", span: '' },
  { src: '/gallery-6.jpg', label: 'סדנאת חיבור לעצמי',      span: '' },
]

function Gallery() {
  const [titleRef, titleVisible] = useReveal()
  return (
    <section id="gallery" className="py-28 px-8 md:px-20 bg-paper">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className={`reveal mb-14 ${titleVisible ? 'visible' : ''}`}>
          <span className="text-muted text-[11px] font-bold tracking-[4px] uppercase mb-4 block">
            רגעים
          </span>
          <h2 className="font-sans font-black text-ink uppercase tracking-tight text-display-lg">
            גלריה
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2" style={{ gridAutoRows: '240px' }}>
          {GALLERY.map((g, i) => (
            <GalleryItem key={i} {...g} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryItem({ src, label, span, delay }) {
  const [ref, visible] = useReveal(delay)
  return (
    <div ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${span} relative overflow-hidden group cursor-pointer bg-paper-mid`}>
      <img src={src} alt={label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
        <span className="text-paper text-sm font-bold tracking-wide uppercase">{label}</span>
      </div>
    </div>
  )
}

/* ── Contact ─────────────────────────────────────────────── */
const SOCIALS = [
  {
    href: 'https://www.instagram.com/emily_flow_tribal/',
    label: 'Instagram',
    handle: '@emily__flow',
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    href: 'https://www.facebook.com/emilyflowshow',
    label: 'Facebook',
    handle: 'Emily Flow',
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    href: 'https://www.youtube.com/@Emily__Flow',
    label: 'YouTube',
    handle: 'Emily Flow',
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>,
  },
  {
    href: 'https://www.tiktok.com/@emily__flow',
    label: 'TikTok',
    handle: '@emily__flow',
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>,
  },
]

function Contact() {
  const [ref, visible] = useReveal()
  return (
    <section id="contact" className="py-28 px-8 md:px-20 bg-ink text-paper">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`reveal mb-16 ${visible ? 'visible' : ''}`}>
          <span className="text-muted-light text-[11px] font-bold tracking-[4px] uppercase mb-4 block">
            בואו נדבר
          </span>
          <h2 className="font-sans font-black text-paper uppercase tracking-tight text-display-lg">
            צור קשר
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="text-paper/60 text-[16px] leading-[1.9] mb-12 font-light">
              שמחה לשמוע ממך לגבי הופעות, שיעורים, סדנאות, ועוד.
              ניתן למצוא אותי בכל הרשתות החברתיות:
            </p>
            <div className="flex flex-col gap-2">
              {SOCIALS.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener"
                  className="group flex items-center gap-5 py-5 px-0 border-b border-paper/10
                    hover:border-paper/30 transition-all duration-300">
                  <span className="text-paper/50 group-hover:text-paper transition-colors duration-300">{s.icon}</span>
                  <div className="flex-1">
                    <span className="text-paper text-sm font-bold uppercase tracking-wider">{s.label}</span>
                    <span className="text-paper/40 text-xs block">{s.handle}</span>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-paper/20 group-hover:text-paper transition-colors duration-300 stroke-current fill-none rotate-180" strokeWidth="1.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-paper/5 border border-paper/10 p-10">
              <h3 className="font-black text-paper text-2xl uppercase tracking-tight mb-6">
                מעוניינות בהופעה או שיעור?
              </h3>
              <p className="text-paper/50 text-sm leading-relaxed mb-8 font-light">
                השאירו פרטים ואחזור אליכן בהקדם עם כל המידע.
              </p>
              <a href="https://wa.me/972544880750?text=%D7%94%D7%99%D7%99%20%D7%90%D7%9E%D7%99%D7%9C%D7%99%21%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%94%D7%95%D7%A4%D7%A2%D7%94%20%D7%9C%D7%90%D7%99%D7%A8%D7%95%D7%A2%20%F0%9F%99%8F"
                target="_blank" rel="noopener"
                className="block w-full text-center py-4 bg-[#25D366] text-paper text-[12px] font-bold tracking-[3px] uppercase
                  hover:bg-[#1ebe5d] transition-colors duration-300">
                וואטסאפ — שלחי הודעה
              </a>
            </div>

            <div className="mt-8 flex gap-3 flex-wrap">
              {['חתונות', 'בר מצווה', 'חינה', 'פסטיבלים', 'מסעדות שף', 'אירועים קורפורטיביים'].map(tag => (
                <span key={tag} className="px-4 py-2 border border-paper/15 text-paper/50 text-[11px] font-bold tracking-wider uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ──────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="py-8 px-8 md:px-20 bg-ink border-t border-paper/5 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-black text-paper text-lg uppercase tracking-tight">Emily Flow</span>
      <span className="text-[12px] text-paper/30 font-light tracking-wide">© 2026 אמילי פלואו · כל הזכויות שמורות</span>
    </footer>
  )
}

/* ── App ─────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Henna />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
