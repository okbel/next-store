import s from "./BlogWidget.module.css";
import Image from "@/components/core/Image";

const BlogWidget = ({
  title = "Don't forget your mask",
  date = "Aug 24",
  category = "Culture",
  imgId,
}) => (
  <article className={s.root}>
    <figure>
      <Image publicId={imgId} alt="image" width="493" height="657" />
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
