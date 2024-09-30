import Item1Webp from "@/assets/gallery/item1.webp";
import Item2Webp from "@/assets/gallery/item2.webp";
import Item3Webp from "@/assets/gallery/item3.webp";
import styled from "@emotion/styled";
import Image from "next/image";
import { ForwardedRef, forwardRef } from "react";

interface GalleryProps {
  active?: boolean;
  className?: string;
}

const GalleryContainer = styled.div({
  position: "relative",
});

const Photo = styled(Image)({
  position: "absolute",
  bottom: 0,
  left: 0,
  transition: "transform .3s ease",
  borderRadius: 40,
  border: "8px solid #ffffff",
  boxShadow: "0 8px 0 rgba(0, 0, 0, .05)",
  transformOrigin: "0% 100%",
});

const images = [Item1Webp, Item2Webp, Item3Webp];

const Gallery = forwardRef<HTMLDivElement, GalleryProps>(({ active, className }, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <GalleryContainer className={className} ref={ref}>
      {images.map((image, idx) => (
        <Photo
          key={idx}
          width={360}
          src={image}
          alt={`gallery-${idx}`}
          style={{
            transform: active
              ? `rotate(${15 * idx - 30}deg) translate(0, ${150 * idx - 120}px)`
              : "rotate(0deg) translate(0, 0)",
          }}
        />
      ))}
    </GalleryContainer>
  );
});

export default Gallery;
