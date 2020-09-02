import s from "./ReadWidget.module.css";
import Image from "@/components/core/Image";

const BlogWidget = ({ title = "", category = "", imgId = "" }) => (
  <div className={s.root}>
    <figure className={s.side}>
      <Image
        publicId={imgId}
        alt="image"
        width="95"
        height="127"
        className={s.img}
      />
    </figure>
    <div className={s.header}>
      <span className={s.title}>{title}</span>
      <p className={s.category}>{category}</p>
    </div>
  </div>
);

export default BlogWidget;
