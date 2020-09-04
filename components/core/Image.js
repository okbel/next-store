import { useEffect, useState } from "react";
import useNativeLazyLoading from "@charlietango/use-native-lazy-loading";
import { useInView } from "react-intersection-observer";
import s from "./Image.module.css";
import cn from "classnames";

const CD_BUCKET = "v1592403664" || process.env.CD_BUCKET;
const CD_CLOUD = "vercel" || process.env.CD_CLOUD;
const CD_API = `https://res.cloudinary.com/${CD_CLOUD}/image/upload/`;

export default ({
  width,
  height,
  publicId,
  blur = 100,
  initialQuality = 10,
  className,
  ...rest
}) => {
  const [loading, setLoading] = useState(true);
  const supportsLazyLoading = useNativeLazyLoading();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "220px 0px",
  });
  const ready = inView || supportsLazyLoading;

  useEffect(() => {
    // Setting loaded to true once, when it's appears in the viewport.
    if (ready) {
      setLoading(false);
    }
  }, [ready]);
  // The first render will try to load a bad quality image blurred. Then, when in view, it will load the best
  // quality and display it as soon is ready.
  const imgSrc = ready
    ? `${CD_API}q_100,${height ? `h_${height},` : ""}${
        width ? `w_${width},` : ""
      }/${CD_BUCKET}/${publicId}`
    : `${CD_API}q_${initialQuality},${
        height ? `h_${(height / 10).toFixed(0)},` : ""
      }${
        width ? `w_${(width / 10).toFixed(0)},` : ""
      }/${CD_BUCKET}/${publicId}`;

  const pdB = (height / width) * 100;

  return (
    <div
      ref={!supportsLazyLoading ? ref : undefined}
      className={cn(s.imgContainer, { [s.loading]: loading })}
      style={{
        paddingBottom: `${height > 0 && width > 0 ? pdB.toFixed(1) : 100}%`,
      }}
    >
      <img
        {...rest}
        src={imgSrc}
        width={width}
        height={height}
        loading="lazy"
        className={cn(s.img, className)}
      />
    </div>
  );
};
