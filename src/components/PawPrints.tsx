import React from "react";
import Image from "next/image";
import image1 from "@/assets/images/image1.png";
import singlepaw from "@/assets/images/PAW.png";

const PawPrints = () => {
  const pawPrintImages = [
    {
      src: singlepaw,
      styles: {
        position: "absolute",
        top: "70%",
        left: "62%",
        transform: "rotate(-40deg) scale(0.55)",
        filter: "contrast(1.1) brightness(1.05)",
      },
      objectPosition: "20% 20%",
    },
    {
      src: singlepaw,
      styles: {
        position: "absolute",
        top: "59%",
        left: "59%",
        transform: "rotate(-40deg) scale(0.47)",
        filter: "contrast(1.1) brightness(1.05)",
      },
      objectPosition: "20% 20%",
    },
    {
      src: image1,
      styles: {
        position: "absolute",
        top: "49%",
        left: "55%",
        transform: "rotate(-30deg) scaleX(-1) scale(0.8)",
        filter: "contrast(1.1) brightness(1.05)",
      },
      objectPosition: "center bottom",
    },
    {
      src: image1,
      styles: {
        position: "absolute",
        bottom: "47%",
        left: "53%",
        transform: "rotate(-9deg) scale(0.8)",
        filter: "contrast(1.1) brightness(1.05)",
      },
      objectPosition: "25% 25%",
    },
  ];
  return (
    <div>
      {pawPrintImages.map((imageData, index) => (
        <div
          key={index}
          style={{
            width: "100px",
            height: "100px",
            position: "absolute", // Removed from imageData.styles, as it's now set here
            overflow: "hidden",
            ...imageData.styles,
          }}
        >
          <Image
            src={imageData.src}
            alt={`Paw print ${index + 1}`}
            fill
            sizes="100vw, 50vw, 33vw"
            style={{
              objectFit: "cover",
              objectPosition: imageData.objectPosition || 'center center'
            }}
          />
        </div>
      ))}
    </div>
  );
};
export default PawPrints;
