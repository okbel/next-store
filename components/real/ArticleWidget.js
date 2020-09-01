import s from "./ArticleWidget.module.css";

const ArticleWidget = () => (
  <article className={s.root}>
    <figure>
      <img className={s.img} />
    </figure>
    <div>
      <div className={s.header}>
        <span className={s.category}>Fashion</span>
        <h2 className={s.title}>Creative Liaisons with Kyuhee Baik</h2>
      </div>
      <p className={s.description}>
        From Hyein Seo to Stüssy, the Creative Strategist on South Korea’s
        Ascent
      </p>
    </div>
  </article>
);

export default ArticleWidget;
