import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HennaPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'רקדנית בטן לחינה | אמילי פלואו'
  }, [])

  return (
    <>
      {/* Nav */}
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 bg-paper/97 backdrop-blur-md border-b border-ink/8 shadow-sm">
        <Link to="/" className="font-sans text-lg font-black text-ink tracking-tight uppercase">
          Emily Flow
        </Link>
        <a href="https://wa.me/972544880750?text=%D7%94%D7%99%D7%99%20%D7%90%D7%9E%D7%99%D7%9C%D7%99%21%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%F0%9F%99%8F"
          target="_blank" rel="noopener"
          className="px-7 py-3 bg-teal text-paper text-[12px] font-bold tracking-[2px] uppercase hover:bg-teal-dark transition-colors duration-300">
          הזמיני עכשיו
        </a>
      </nav>

      <main className="pt-24">

        {/* Hero */}
        <section className="py-6 px-8 md:px-20 bg-paper-warm">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-muted text-[12px] font-bold tracking-[2px] uppercase mb-3 hover:text-ink transition-colors">
              <span>←</span> חזרה לדף הבית
            </Link>
            <span className="text-muted text-[11px] font-bold tracking-[4px] uppercase mb-2 block">מוצר דגל</span>
            <h1 className="font-sans font-black text-ink uppercase tracking-tight leading-[0.95] mb-2 text-[clamp(1.8rem,4vw,3rem)]">
              אמילי פלואו<br />רקדנית בטן לחינה
            </h1>
            <p className="text-ink/60 text-[14px] leading-[1.6] max-w-2xl font-light">
              חינה אחת. רגע אחד שכולן יזכרו.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-20 px-8 md:px-20 bg-paper">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            <div className="space-y-8 text-ink/70 text-[15px] leading-[1.9] font-light">
              <p>
                <strong className="text-ink font-semibold">אמילי פלואו</strong> — רקדנית בטן שיודעת לקרוא את הקהל, להרים את האנרגיה בדיוק ברגע הנכון —
                ולגרום לכלה להרגיש מלכה. אני מגיעה מוכנה, מקצועית ועם הלב פתוח,
                ומותאמת את ההופעה לאופי החינה שלכן — למוזיקה ולאווירה.
              </p>
              <p>
                כי <strong className="text-ink font-semibold">חינה טובה לא תלויה רק בקישוטים</strong> —
                היא תלויה באנרגיה שמביאים לחדר.
              </p>

              <div>
                <h2 className="font-sans font-black text-ink uppercase tracking-tight text-2xl mb-4">
                  מה כוללת ההופעה?
                </h2>
                <ul className="space-y-3">
                  {[
                    'הופעת סולו ייחודית',
                    'תלבושת ריקודי בטן מהפנטת',
                    'מוזיקה שמותאמת לאווירה ולסגנון החינה',
                    'אפשרות לריקוד עם הכלה ועם האורחות',
                    'הכנה מוקדמת ותיאום מלא מראש',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-teal font-bold mt-1">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-sans font-black text-ink uppercase tracking-tight text-2xl mb-4">
                  למה לבחור בי?
                </h2>
                <ul className="space-y-3">
                  {[
                    'ניסיון עשיר בהופעות לחינות ואירועים',
                    'סגנון טרייבל פיוז׳ן ייחודי שמשלב עוצמה, יופי ואנרגיה בכל תנועה',
                    'כל פרט מתואם מראש — את בידיים טובות',
                    'אנרגיה שמדביקה את כל האולם',
                    'כל הופעה מותאמת אישית — לא תבנית קבועה',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-teal font-bold mt-1">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image + CTA */}
            <div className="sticky top-28">
              <div className="relative mb-8">
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-teal/40" />
                <img src="/henna-hero.jpg" alt="ריקוד בטן לחינה — אמילי פלואו"
                  className="relative z-10 w-full object-cover shadow-2xl" />
              </div>

              <div className="bg-paper-warm border border-ink/10 p-8">
                <h3 className="font-black text-ink text-xl uppercase tracking-tight mb-3">
                  מעוניינות בהופעה?
                </h3>
                <p className="text-ink/50 text-sm leading-relaxed mb-6 font-light">
                  השאירי פרטים ואחזור אליכן בהקדם עם כל המידע והמחירים.
                </p>
                <a href="https://wa.me/972544880750?text=%D7%94%D7%99%D7%99%20%D7%90%D7%9E%D7%99%D7%9C%D7%99%21%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%94%D7%95%D7%A4%D7%A2%D7%94%20%D7%9C%D7%90%D7%99%D7%A8%D7%95%D7%A2%20%F0%9F%99%8F"
                  target="_blank" rel="noopener"
                  className="block w-full text-center py-4 bg-[#25D366] text-paper text-[12px] font-bold tracking-[3px] uppercase hover:bg-[#1ebe5d] transition-colors duration-300">
                  וואטסאפ — שלחי הודעה
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-8 md:px-20 bg-paper-warm">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans font-black text-ink uppercase tracking-tight text-display-md mb-12">
              שאלות נפוצות
            </h2>
            <div className="border-t border-ink/10">
              {[
                {
                  q: 'כמה זמן נמשכת הופעת ריקוד בטן לחינה?',
                  a: 'בדרך כלל 20-45 דקות, תלוי בחבילה שנבחר יחד. אפשר לחלק את ההופעה לשניים — פתיחה ואחרי הארוחה.',
                },
                {
                  q: 'האם ניתן לבקש שירים ספציפיים?',
                  a: 'כן! אני מתאימה את המוזיקה לסגנון החינה שלכן — מזרחית, מרוקאית, תימנית או כל סגנון אחר.',
                },
                {
                  q: 'האם את מגיעה לכל הארץ?',
                  a: 'כן, אני מגיעה לכל הארץ. עלות הנסיעה נוספת בהתאם למיקום.',
                },
                {
                  q: 'כמה מראש צריך להזמין?',
                  a: 'מומלץ להזמין לפחות חודש מראש, אך בתאריכים פנויים אפשרי גם בהתראה קצרה יותר. צרי קשר לבדיקת זמינות.',
                },
              ].map((item, i) => (
                <div key={i} className="py-8 border-b border-ink/10">
                  <h3 className="font-black text-ink text-lg mb-3">{item.q}</h3>
                  <p className="text-ink/60 text-[15px] leading-relaxed font-light">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles grid */}
        <section className="py-20 px-8 md:px-20 bg-paper">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans font-black text-ink uppercase tracking-tight text-[clamp(1.4rem,3vw,2rem)] mb-10">
              מדריכים שיעזרו לכן להחליט
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'איך לבחור רקדנית בטן לחינה?', desc: '7 דברים שחשוב לבדוק לפני שמזמינות', href: '/חינה/איך-לבחור', ready: false },
                { title: 'כמה עולה רקדנית בטן לאירוע?', desc: 'טווח מחירים, מה משפיע על העלות ומה לשאול', href: '/חינה/כמה-עולה', ready: false },
                { title: '7 דברים לבדוק לפני שמזמינות', desc: 'רשימת תיוג שתחסוך כאבי ראש', href: '/חינה/7-דברים', ready: false },
                { title: "ריקוד בטן vs טרייבל פיוז'ן", desc: 'מה ההבדל ואיזה סגנון מתאים לכן', href: '/חינה/בטן-vs-טרייבל', ready: false },
                { title: 'רעיונות לאטרקציות לחינה', desc: 'כל האפשרויות — מריקוד בטן ועד אש', href: '/חינה/אטרקציות-לחינה', ready: false },
                { title: 'איך רקדנית בטן משנה את האווירה?', desc: 'למה זה עובד — ומה ההבדל שעושה רקדנית טובה', href: '/חינה/איך-משנה-אווירה', ready: false },
              ].map((article, i) => (
                article.ready
                  ? <Link key={i} to={article.href}
                      className="group block p-6 border border-ink/10 bg-paper-warm hover:border-teal/40 hover:bg-paper transition-all duration-300">
                      <h3 className="font-black text-ink text-[17px] mb-2 group-hover:text-teal transition-colors duration-200">{article.title}</h3>
                      <p className="text-ink/50 text-[13px] font-light leading-relaxed">{article.desc}</p>
                      <span className="inline-block mt-4 text-[11px] font-bold tracking-[2px] uppercase text-teal">קראי עוד →</span>
                    </Link>
                  : <div key={i} className="p-6 border border-ink/10 bg-paper-warm opacity-50 cursor-default">
                      <h3 className="font-black text-ink text-[17px] mb-2">{article.title}</h3>
                      <p className="text-ink/50 text-[13px] font-light leading-relaxed">{article.desc}</p>
                      <span className="inline-block mt-4 text-[11px] font-bold tracking-[2px] uppercase text-muted">בקרוב</span>
                    </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-20 bg-ink border-t border-paper/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="font-black text-paper text-lg uppercase tracking-tight">Emily Flow</Link>
        <span className="text-[12px] text-paper/30 font-light tracking-wide">© 2026 אמילי פלואו · כל הזכויות שמורות</span>
      </footer>
    </>
  )
}
