import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__nav">
          <div className="footer__col">
            <span className="footer__heading">Услуги</span>
            <Link href="/services/telegram-bots">Telegram-боты</Link>
            <Link href="/services/web-development">Веб-разработка</Link>
            <Link href="/services/automation">Автоматизация</Link>
          </div>
          <div className="footer__col">
            <span className="footer__heading">Портфолио</span>
            <Link href="/cases">Все кейсы</Link>
            <Link href="/cases/flower-shop">ИИ-бот для магазина</Link>
            <Link href="/cases/yoga-studio">Лендинг для студии</Link>
          </div>
          <div className="footer__col">
            <span className="footer__heading">Контакты</span>
            <a href="https://t.me/Neznayuusername" target="_blank" rel="noopener">Telegram</a>
            <a href="mailto:obojealexanderwork@gmail.com">Email</a>
          </div>
        </nav>
        <div className="footer__bottom">
          <p>&copy; 2025&ndash;2026 Александр Привалов. Разработка с&nbsp;ИИ.</p>
          <p className="footer__legal">ИП Привалов А.&nbsp;В. &middot; ИНН&nbsp;860330503901 &middot; ОГРНИП&nbsp;324784700269944</p>
        </div>
      </div>
    </footer>
  );
}
