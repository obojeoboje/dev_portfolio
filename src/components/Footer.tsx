export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__nav">
          <div className="footer__col">
            <span className="footer__heading">Проекты</span>
            <a href="https://bonaqa.tech" target="_blank" rel="noopener">BonAQA</a>
          </div>
          <div className="footer__col">
            <span className="footer__heading">Соцсети</span>
            <a href="https://www.threads.net/@obojedev" target="_blank" rel="noopener">Threads</a>
            <a href="https://t.me/obojedev" target="_blank" rel="noopener">Telegram</a>
            <a href="https://instagram.com/obojedev" target="_blank" rel="noopener">Instagram</a>
          </div>
          <div className="footer__col">
            <span className="footer__heading">Контакт</span>
            <a href="mailto:obojealexanderwork@gmail.com">Email</a>
          </div>
        </nav>
        <div className="footer__bottom">
          <p>&copy; 2025&ndash;2026 oboje.dev</p>
        </div>
      </div>
    </footer>
  );
}
