import s from "./ShopWidget.module.css";
import Image from "@/components/core/Image";

const ShopWidget = ({ title = "", text = "", imgId = "" }) => (
  <div className={s.root}>
    <figure>
      <Image
        className={s.img}
        publicId={imgId}
        alt="image"
        width="690"
        height="493"
      />
    </figure>
    <div className={s.header}>
      <span className={s.category}>Featured</span>
      <h2 className={s.title}>{title}</h2>
    </div>
    <button className={s.btn}>{text}</button>
  </div>
);

export default ShopWidget;
