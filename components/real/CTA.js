import s from "./CTA.module.css";

const CTA = ({ title = "", description = "", text = "" }) => (
  <div className={s.root}>
    <h2 className={s.title}>{title}</h2>
    <p className={s.description}>{description}</p>
    <a className={s.btn}>{text}</a>
  </div>
);

export default CTA;
