import React from "react";
import useNativeLazyLoading from "@charlietango/use-native-lazy-loading";
import { useInView } from "react-intersection-observer";
import s from "./Image.module.css";

const CD_BUCKET = "v1592403664" || process.env.CD_BUCKET;
const CD_CLOUD = "vercel" || process.env.CD_CLOUD;
const CD_API = `https://res.cloudinary.com/${CD_CLOUD}/image/upload/`;

export default ({
  width,
  height,
  publicId,
  blur = 100,
  initialQuality = 10,
  ...rest
}) => {
  const supportsLazyLoading = useNativeLazyLoading();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });
  const ready = inView || supportsLazyLoading;
  const imgSrc = ready
    ? `${CD_API}q_100,${height ? `h_${height},` : ""}${
        width ? `w_${width},` : ""
      }/${CD_BUCKET}/${publicId}`
    : `${CD_API}q_${initialQuality},${
        height ? `h_${(height / 10).toFixed(0)},` : ""
      }${
        width ? `w_${(width / 10).toFixed(0)},` : ""
      }/${CD_BUCKET}/${publicId}`;

  return (
    <div
      ref={!supportsLazyLoading ? ref : undefined}
      className={s.imgContainer}
      style={{
        paddingBottom: `${
          height > 0 && width > 0 ? (height / width) * 100 : 100
        }%`,
      }}
    >
      <img
        {...rest}
        src={imgSrc}
        width={width}
        height={height}
        loading="lazy"
        className={s.img}
        style={{
          filter: ready ? "none" : `blur(${blur}px)`,
        }}
      />
    </div>
  );
};
