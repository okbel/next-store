import s from "./ReadWidget.module.css";

const BlogWidget = ({
  title = "Don't forget your mask",
  date = "Aug 24",
  category = "Culture",
}) => (
  <div className={s.root}>
    <figure className={s.side}>
      <img className={s.img} />
    </figure>
    <div className={s.header}>
      <span className={s.title}>{title}</span>
      <p className={s.category}>{category}</p>
    </div>
  </div>
);

export default BlogWidget;
