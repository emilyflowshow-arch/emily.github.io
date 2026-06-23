import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HowToChoosePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'איך לבחור רקדנית בטן לחינה? | אמילי פלואו'
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

      <main className="pt-24" dir="rtl">

        {/* Hero */}
        <section className="py-12 px-8 md:px-20 bg-paper-warm border-b border-ink/10">
          <div className="max-w-3xl mx-auto">
            <Link to="/חינה" className="inline-flex items-center gap-2 text-muted text-[12px] font-bold tracking-[2px] uppercase mb-6 hover:text-ink transition-colors">
              <span>←</span> ריקודי בטן לחינה
            </Link>
            <span className="text-teal text-[11px] font-bold tracking-[4px] uppercase mb-3 block">מדריך</span>
            <h1 className="font-sans font-black text-ink uppercase tracking-tight leading-[0.95] mb-5 text-[clamp(2rem,5vw,3.8rem)]">
              איך לבחור רקדנית בטן לחינה?
            </h1>
            <p className="text-ink/60 text-[16px] leading-[1.8] font-light max-w-2xl">
              כל מה שצריך לדעת לפני שמזמינים — כך תמצאו רקדנית שתגרום לחינה להיות בלתי נשכחת.
            </p>
          </div>
        </section>

        {/* Article body */}
        <section className="py-16 px-8 md:px-20 bg-paper">
          <div className="max-w-3xl mx-auto space-y-10 text-ink/75 text-[16px] leading-[1.9] font-light">

            <p>
              חינה היא אחד האירועים המרגשים והמשמחים ביותר לפני החתונה. המשפחה מתכנסת, החברים מגיעים לחגוג, והכלה נמצאת במרכז הערב.
              אחת האטרקציות המבוקשות ביותר באירועי חינה היא הופעת ריקודי בטן, שמכניסה אנרגיה, שמחה ואווירה חגיגית לאירוע.
            </p>
            <p>אבל איך בוחרים רקדנית בטן לחינה שתתאים בדיוק לערב שלכם?</p>

            <div>
              <h2 className="font-sans font-black text-ink uppercase tracking-tight text-2xl mb-4">
                1. בדקו שיש לה ניסיון ספציפי בחינות
              </h2>
              <p>
                לא כל רקדנית בטן מתאימה לחינה. הופעת ריקודי בטן בחינה שונה מהופעה במסעדה או באירוע אחר.
                היא דורשת יכולת לקרוא את הקהל, להתחבר לכלה, להזמין את האורחים להשתתף ולהתאים את האנרגיה למה שקורה בזמן אמת.
              </p>
              <p className="mt-4">כדאי לשאול:</p>
              <ul className="mt-3 space-y-2">
                {['כמה חינות ביצעת?', 'האם אפשר לראות סרטונים מחינות אמיתיות?', 'האם יש המלצות מלקוחות קודמים?'].map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teal font-bold mt-1 shrink-0">✦</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">סרטונים מאירועים אמיתיים יספרו הרבה יותר מתמונות או סרטוני סטודיו.</p>
            </div>

            <div>
              <h2 className="font-sans font-black text-ink uppercase tracking-tight text-2xl mb-4">
                2. בדקו שהסגנון והאנרגיה מתאימים לאירוע
              </h2>
              <p>
                לכל רקדנית יש סגנון שונה. יש רקדניות שמביאות אווירה מסורתית וקלאסית, ויש כאלה שמביאות סגנון מודרני, בימתי או ייחודי יותר.
              </p>
              <p className="mt-4">כשאתם צופים בסרטונים, שאלו את עצמכם:</p>
              <p className="mt-2 italic">האם זו האנרגיה שאתם רוצים לראות בחינה שלכם?</p>
              <p className="mt-4">החיבור לסגנון האישי של הרקדנית חשוב לא פחות מהיכולות הטכניות שלה.</p>
            </div>

            <div>
              <h2 className="font-sans font-black text-ink uppercase tracking-tight text-2xl mb-4">
                3. ראו אותה בפעולה — לא רק בתמונות
              </h2>
              <p>תמונות יפות הן דבר נהדר, אבל הן לא מספרות את כל הסיפור. בקשו לראות סרטון של הופעה אמיתית מול קהל.</p>
              <p className="mt-4">שימו לב:</p>
              <ul className="mt-3 space-y-2">
                {[
                  'האם הקהל מגיב?',
                  'האם הרקדנית יוצרת אינטראקציה עם האורחים?',
                  'האם היא מצליחה להרים את האווירה?',
                  'האם היא נראית בטוחה ונינוחה מול אנשים?',
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teal font-bold mt-1 shrink-0">✦</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">בסופו של דבר, בחינה חשוב לא רק איך הרקדנית רוקדת — אלא איך היא גורמת לאנשים להרגיש.</p>
            </div>

            <div>
              <h2 className="font-sans font-black text-ink uppercase tracking-tight text-2xl mb-4">
                4. בדקו מה כוללת ההופעה
              </h2>
              <p>לפני שסוגרים, כדאי להבין בדיוק מה מקבלים. שאלו:</p>
              <ul className="mt-4 space-y-3">
                {[
                  'כמה זמן נמשכת ההופעה?',
                  'האם יש כניסה חגיגית או מספר קטעים לאורך הערב?',
                  'האם יש ריקוד משותף עם הכלה והאורחים?',
                  'מה קורה במקרה של תקלה או מחלה ביום האירוע?',
                  'האם קיימת תוספת עבור נסיעות לאזור האירוע?',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teal font-bold mt-1 shrink-0">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">ככל שהדברים ברורים יותר מראש, כך יהיו פחות הפתעות בהמשך.</p>
            </div>

            <div>
              <h2 className="font-sans font-black text-ink uppercase tracking-tight text-2xl mb-4">
                5. שימו לב לרמת המקצועיות והתקשורת
              </h2>
              <p>עוד לפני ההופעה אפשר ללמוד הרבה על הרקדנית. רקדנית מקצועית תברר פרטים חשובים כמו:</p>
              <ul className="mt-4 space-y-2">
                {['מיקום האירוע', 'שעת ההופעה', 'סוג החינה', 'גודל הקהל', 'תנאי השטח והמקום'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teal font-bold mt-1 shrink-0">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">היא תוודא שכל הפרטים ברורים מראש כדי שהאירוע יעבור בצורה חלקה ונעימה.</p>
            </div>

            <div>
              <h2 className="font-sans font-black text-ink uppercase tracking-tight text-2xl mb-4">
                6. קראו המלצות וביקורות
              </h2>
              <p>המלצות של לקוחות קודמים הן אחד המדדים הטובים ביותר. בדקו:</p>
              <ul className="mt-4 space-y-2">
                {['ביקורות בגוגל', 'עמוד האינסטגרם', 'עמוד הפייסבוק', 'תגובות של לקוחות אמיתיים'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teal font-bold mt-1 shrink-0">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">ככל שיש יותר חוות דעת אותנטיות לאורך זמן, כך קל יותר לקבל תמונה אמינה.</p>
            </div>

            <div>
              <h2 className="font-sans font-black text-ink uppercase tracking-tight text-2xl mb-4">
                7. כמה עולה רקדנית בטן לחינה?
              </h2>
              <p>
                מחיר הופעת רקדנית בטן לחינה בישראל נע בדרך כלל בין{' '}
                <strong className="text-ink font-semibold">1,000 ל־3,000 ₪</strong>,
                בהתאם לניסיון, משך ההופעה, מיקום האירוע, מורכבות המופע והמוניטין של הרקדנית.
              </p>
              <p className="mt-4">
                חשוב לזכור: המחיר הזול ביותר לא תמיד יהיה המשתלם ביותר.
                רקדנית מנוסה שיודעת להחזיק קהל, להרים את האנרגיה ולהפוך את החינה לחוויה בלתי נשכחת יכולה להשפיע על כל האווירה באירוע.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-10">
              <h2 className="font-sans font-black text-ink uppercase tracking-tight text-2xl mb-4">לסיכום</h2>
              <p>
                כשמחפשים רקדנית בטן לחינה, לא בוחרים רק מופע — בוחרים את האנרגיה שתלווה את הערב.
                בדקו ניסיון, צפו בסרטונים, קראו המלצות וודאו שיש חיבור לסגנון ולאווירה שאתם מחפשים.
              </p>
              <p className="mt-4 italic">
                בסופו של דבר, השאלה הפשוטה ביותר היא גם החשובה ביותר: אם הייתם רואים את הרקדנית מופיעה בחינה של מישהו אחר — האם הייתם רוצים לראות אותה גם אצלכם?
              </p>
            </div>

            {/* CTA block */}
            <div className="bg-paper-warm border border-ink/10 p-8 mt-4">
              <h3 className="font-black text-ink text-xl uppercase tracking-tight mb-2">
                אמילי פלואו — רקדנית בטן לחינה
              </h3>
              <p className="text-ink/55 text-sm leading-relaxed mb-6 font-light">
                ניסיון עשיר בחינות מכל הסגנונות · תיאום אישי מלא לפני האירוע
              </p>
              <a href="https://wa.me/972544880750?text=%D7%94%D7%99%D7%99%20%D7%90%D7%9E%D7%99%D7%9C%D7%99%21%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%F0%9F%99%8F"
                target="_blank" rel="noopener"
                className="inline-block px-10 py-4 bg-teal text-paper text-[12px] font-bold tracking-[3px] uppercase hover:bg-teal-dark transition-colors duration-300">
                צרי קשר לבדיקת זמינות
              </a>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-8 md:px-20 bg-paper-warm">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-sans font-black text-ink uppercase tracking-tight text-2xl mb-10">
              שאלות נפוצות
            </h2>
            <div className="border-t border-ink/10">
              {[
                {
                  q: 'כמה מראש צריך להזמין רקדנית בטן לחינה?',
                  a: 'מומלץ לפחות חודש–חודשיים מראש, בעיקר בעונת החגים (ספטמבר–נובמבר) שבה הביקוש גבוה. ככל שמזמינים מוקדם יותר — כך מבטיחים את הרקדנית הרצויה.',
                },
                {
                  q: 'האם רקדנית בטן מתאימה לכל סוגי חינה?',
                  a: 'כן — ריקוד בטן מתאים לחינה מרוקאית, תימנית, מזרחית וכל סגנון אחר. חשוב לתאם עם הרקדנית את סגנון המוזיקה והאווירה הרצויה.',
                },
                {
                  q: 'האם הרקדנית יכולה לרקוד עם הכלה?',
                  a: 'בהחלט — זה אחד הרגעים הכי יפים בחינה. רקדנית טובה תדע מתי ואיך לשלב את הכלה בהופעה בצורה שתרגיש טבעית ושמחה.',
                },
                {
                  q: 'מה ההבדל בין הופעה של 20 דקות לשעה שלמה?',
                  a: 'הופעה קצרה (20–30 דקות) היא לרוב קטע אחד מרוכז. הופעה ארוכה יותר מאפשרת מספר קטעים לאורך הערב, ריקוד עם האורחים ואינטראקציה עמוקה יותר עם הקהל.',
                },
              ].map((item, i) => (
                <div key={i} className="py-7 border-b border-ink/10">
                  <h3 className="font-black text-ink text-[17px] mb-3">{item.q}</h3>
                  <p className="text-ink/60 text-[15px] leading-relaxed font-light">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back link */}
        <section className="py-10 px-8 md:px-20 bg-paper border-t border-ink/10">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <Link to="/חינה" className="inline-flex items-center gap-2 text-ink font-bold tracking-wide text-sm uppercase hover:text-teal transition-colors">
              ← חזרה לעמוד ריקודי בטן לחינה
            </Link>
            <a href="https://wa.me/972544880750?text=%D7%94%D7%99%D7%99%20%D7%90%D7%9E%D7%99%D7%9C%D7%99%21%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%F0%9F%99%8F"
              target="_blank" rel="noopener"
              className="inline-block px-8 py-3 bg-teal text-paper text-[12px] font-bold tracking-[2px] uppercase hover:bg-teal-dark transition-colors duration-300">
              הזמיני עכשיו
            </a>
          </div>
        </section>

      </main>

      <footer className="py-8 px-8 md:px-20 bg-ink border-t border-paper/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="font-black text-paper text-lg uppercase tracking-tight">Emily Flow</Link>
        <span className="text-[12px] text-paper/30 font-light tracking-wide">© 2026 אמילי פלואו · כל הזכויות שמורות</span>
      </footer>
    </>
  )
}
