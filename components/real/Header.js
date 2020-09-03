import s from "./Header.module.css";

const Header = () => (
  <div className={s.root}>
    <nav className={s.nav}>
      <a className={s.link}>Clothing</a>
      <a className={s.link}>Bags</a>
      <a className={s.link}>Search</a>
    </nav>
    <h1 className={s.logo}>SSENSE</h1>
    <nav className={s.nav}>
      <a className={s.link}>English</a>
      <a className={s.link}>Login</a>
      <a className={s.link}>Wishlist</a>
      <a className={s.link}>Shopping Bag (3)</a>
    </nav>
  </div>
);

export default Header;
