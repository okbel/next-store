import s from "./ArticleWidgetRow.module.css";
import Image from "@/components/core/Image";

const ArticleWidgetRow = ({ title, category, description, imgId }) => (
  <article className={s.root}>
    <figure className={s.figure}>
      <Image
        publicId={imgId}
        alt="image"
        width="424"
        height="302"
        className={s.img}
      />
    </figure>
    <div className={s.header}>
      <h2 className={s.title}>{title}</h2>
      <span className={s.category}>{category}</span>
      <p className={s.description}>{description}</p>
    </div>
  </article>
);

export default ArticleWidgetRow;
