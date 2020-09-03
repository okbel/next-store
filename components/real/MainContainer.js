import s from "./MainContainer.module.css";

const MainContainer = ({ children }) => (
  <main className={s.root}>{children}</main>
);

export default MainContainer;
