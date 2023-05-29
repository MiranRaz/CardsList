import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageWithBlurhash: React.FC<{
  src: string;
  hash: string;
}> = ({ src, hash }) => {
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoading(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <div style={{ display: imageLoading ? "none" : "inline" }}>
        <Blurhash
          hash={hash}
          style={{ width: "100%" }}
          height={120}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        src={src}
        alt=""
        draggable={false}
        style={{
          display: !imageLoading ? "none" : "inline",
          width: "100%",
          height: "50%",
          borderRadius: "10px",
        }}
        onLoad={() => {
          setImageLoading(true);
        }}
      />
    </>
  );
};
export default ImageWithBlurhash;
