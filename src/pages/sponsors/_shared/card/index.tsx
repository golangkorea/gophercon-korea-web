import { Sponsor } from "@/constants/sponsors";
import styled from "@emotion/styled";
import React from "react";
import { useWindowSize } from "react-use";

interface SponsorCardProps extends Sponsor {}

interface SponsorCardContainerStyledProps {
  active?: boolean;
}

interface SponsorOverlayStylesProps {
  active?: boolean;
}

const SponsorCardContainer = styled.div<SponsorCardContainerStyledProps>(
  ({ active }: SponsorCardContainerStyledProps) => ({
    position: active ? "fixed" : "static",
    top: active ? "50%" : "auto",
    height: active ? 800 : "auto",
    marginTop: active ? "-400px" : "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 880,
    width: "80%",
    fontSize: active ? 18 : 24,
    borderRadius: active ? 40 : 160,
    padding: 80,
    backgroundImage: "linear-gradient(45deg, rgba(28, 28, 191, 1) 0%, rgba(38, 124, 255, 1) 50%)",
    color: "#fff",
    cursor: "pointer",
    overflow: "hidden",
    transition: "background-position .3s ease, box-shadow .3s ease, transform .3s ease",
    transform: "scale(1)",
    zIndex: active ? 50 : 0,
    boxSizing: "border-box",
    overflowY: active ? "auto" : "hidden",
    "&:hover": {
      backgroundPosition: active ? "0 50%" : "50% 100%",
      boxShadow: active ? "none" : "0 30px 60px rgba(28, 28, 191, .5)",
      transform: active ? "scale(1)" : "scale(1.02)",
    },
    "@media (max-width: 1000px)": {
      width: "100%",
      padding: 40,
      borderRadius: active ? 20 : 80,
      fontSize: active ? 17 : 22,
    },
  }),
);

const SponsorCardInner = styled.div({
  overflow: "hidden",
});

const SponsorName = styled.h3({
  fontSize: "1.733em",
  textAlign: "center",
  padding: 0,
  margin: 0,
  border: 0,
  marginBottom: 40,
});

const SponsorThumbnail = styled.img({
  maxWidth: "100%",
  borderRadius: 40,
  width: 660,
  marginBottom: 40,
  border: "3px solid #20a0cb",
  boxShadow: "0 16px 32px rgba(0, 32, 255, 0.25)",
});

const SponsorDescription = styled.div({});

const SponsorLink = styled.a({
  display: "block",
  width: "100%",
  padding: "24px 36px",
  textAlign: "center",
  borderRadius: 20,
  backgroundColor: "#00ffab",
  color: "#000",
  fontWeight: 600,
  marginTop: 40,
});

const SponsorOverlay = styled.div<SponsorOverlayStylesProps>(({ active }: SponsorOverlayStylesProps) => ({
  position: "fixed",
  left: 0,
  top: 0,
  width: "100%",
  height: active ? "100%" : 0,
  zIndex: 30,
  backgroundColor: active ? "rgba(0, 0, 0, .5)" : "transparent",
  transition: "background-color .3s ease",
}));

const SponsorCard: React.FC<SponsorCardProps> = ({ ...props }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [isDetail, setIsDetail] = React.useState(false);
  const { name, thumbnail, youtube, logo, link, service, description, detail } = props;
  const { width } = useWindowSize();
  const toggleDetail = React.useCallback(
    (isDetail: boolean | undefined = undefined) => {
      if (isDetail === undefined) setIsDetail(!isDetail);
      else setIsDetail(isDetail);
    },
    [isDetail, width, link],
  );

  const openHomepage = (e: any) => {
    e.stopPropagation();
    window.open(link, "_blank");
  };

  React.useEffect(() => {
    if (isDetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDetail]);

  if (!width) return null;

  return (
    <>
      <SponsorCardContainer active={isDetail} onClick={() => toggleDetail()} ref={cardRef}>
        <SponsorCardInner>
          {!isDetail && (
            <>
              <SponsorName>{name}</SponsorName>
              {thumbnail && <SponsorThumbnail src={thumbnail} alt={name} />}
              <SponsorDescription>{description}</SponsorDescription>
            </>
          )}
          {isDetail && (
            <>
              <SponsorName>{name}</SponsorName>
              {thumbnail && <SponsorThumbnail src={thumbnail} alt={name} />}
              {name !== service && <SponsorName>{service}</SponsorName>}
              <SponsorDescription>{detail}</SponsorDescription>
              <SponsorLink onClick={openHomepage} className='z-50 cursor-pointer text-xl font-semibold text-blue-500'>
                {`홈페이지 바로가기 >`}
              </SponsorLink>
            </>
          )}
        </SponsorCardInner>
      </SponsorCardContainer>
      <SponsorOverlay active={isDetail} onClick={() => toggleDetail(false)} />
    </>
  );
};

export default React.memo(SponsorCard);
