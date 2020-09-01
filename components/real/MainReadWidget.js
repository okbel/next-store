import s from "./MainReadWidget.module.css";

const BlogWidget = ({}) => (
  <div className={s.root}>
    <span className={s.title}>A Good Read</span>
    <a className={s.link}>View All Stories</a>
  </div>
);

export default BlogWidget;
