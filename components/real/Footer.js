import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.root}>
      <div className={s.container}>
        <nav className={s.sideNav}>
          <span>© 2020 ssense.com</span>
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
          <a>Accessibility</a>
        </nav>
        <nav>
          <a>COUNTRY/REGION: ARGENTINA</a>
          <a>NEWSLETTER</a>
          <a>SIGNUP</a>
          <a>CUSTOMER CARE</a>
          <a>LOCATIONS</a>
          <a>EDITORIAL</a>
          <a>ARCHIVE</a>
          <a>CAREERS</a>
          <a>AFFILIATES</a>
          <a>SITEMAP</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
