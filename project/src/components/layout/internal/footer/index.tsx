type FooterProps = {
  container?: boolean;
}

function Footer({container} : FooterProps): JSX.Element {
  return (
    <footer className={`footer ${container ? 'container' : ''}`}>
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </a>
    </footer>
  );
}

export default Footer;
