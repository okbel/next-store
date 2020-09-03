import s from "./MainReadWidget.module.css";

const BlogWidget = ({ headline = "A GOOD READ" }) => (
  <div className={s.root}>
    <h2 className={s.title}>{headline}</h2>
    <a className={s.link}>View All Stories</a>
  </div>
);

export default BlogWidget;
