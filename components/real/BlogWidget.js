import s from "./BlogWidget.module.css";

const BlogWidget = ({
  title = "Don't forget your mask",
  date = "Aug 24",
  category = "Culture",
}) => (
  <article className={s.root}>
    <figure>
      <img className={s.img} />
    </figure>
    <div className={s.header}>
      <span className={s.category}>Recent</span>
      <div>
        <h2 className={s.title}>{title}</h2>
        <p className={s.description}>
          {category} | {date}
        </p>
      </div>
    </div>
  </article>
);

export default BlogWidget;
