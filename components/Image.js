import React from "react";
import useNativeLazyLoading from "@charlietango/use-native-lazy-loading";
import { useInView } from "react-intersection-observer";

const CD_BUCKET = "v1592403664" || process.env.CD_BUCKET;
const CD_CLOUD = "vercel" || process.env.CD_CLOUD;
const CD_API = `https://res.cloudinary.com/${CD_CLOUD}/image/upload/`;

export default ({ width, height, publicId, ...rest }) => {
  let initialProps = { width, height, publicId, ...rest };

  const supportsLazyLoading = useNativeLazyLoading();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <div
      ref={!supportsLazyLoading ? ref : undefined}
      className="relative block overflow-hidden ease-in"
      style={{
        position: "relative",
        paddingBottom: `${
          height > 0 && width > 0 ? (height / width) * 100 : 100
        }%`,
        background: "#edf2f7",
      }}
    >
      {inView || supportsLazyLoading ? (
        <img
          {...rest}
          src={`${CD_API}${height ? `h_${height},` : ""}${
            width ? `w_${width},` : ""
          }/${CD_BUCKET}/${publicId}`}
          width={width}
          height={height}
          loading="lazy"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      ) : null}
    </div>
  );
};
