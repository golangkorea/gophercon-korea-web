import { Sponsor } from "@/constants/sponsors";
import styled from "@emotion/styled";
import React from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "react-use";

interface SponsorCardProps extends Sponsor {}

interface SponsorCardContainerStyledProps {
  active?: boolean;
}

interface SponsorCardInnerStylesProps {
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
    minWidth: 600,
    width: "40%",
    textAlign: "center",
    fontSize: active ? 18 : 22,
    borderRadius: active ? 40 : 80,
    padding: 40,
    backgroundImage: "linear-gradient(45deg, rgba(28, 28, 191, 1) 0%, rgba(38, 124, 255, 1) 50%)",
    color: "#fff",
    cursor: "pointer",
    overflow: "hidden",
    transition: "background-position .3s ease, box-shadow .3s ease, transform .3s ease",
    transform: "scale(1)",
    zIndex: active ? 50 : 0,
    boxSizing: "border-box",
    "&:hover": {
      backgroundPosition: active ? "0 50%" : "50% 100%",
      boxShadow: active ? "none" : "0 30px 60px rgba(28, 28, 191, .5)",
      transform: active ? "scale(1)" : "scale(1.02)",
    },
    "@media (max-width: 1000px)": {
      width: active ? "90%" : "100%",
      minWidth: "auto",
      padding: 20,
      height: active ? 600 : "auto",
      marginTop: active ? "-300px" : "auto",
      borderRadius: active ? 20 : 40,
      fontSize: active ? 18 : 20,
    },
  }),
);

const SponsorCardInner = styled.div<SponsorCardInnerStylesProps>(({ active }: SponsorCardInnerStylesProps) => ({
  height: "100%",
  overflowY: active ? "auto" : "hidden",
  textAlign: "left",
}));

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
  margin: "0 auto 40px",
  width: 660,
  border: "3px solid #20a0cb",
  boxShadow: "0 16px 32px rgba(0, 32, 255, 0.25)",
  "@media (max-width: 1000px)": {
    width: 300,
    margin: "0 auto 20px",
  },
});

const SponsorDescription = styled.div({
  whiteSpace: "pre-line",
});

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
  "@media (max-width: 1000px)": {
    padding: "14px 20px",
    fontSize: 18,
    marginTop: 20,
  },
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
  const { t } = useTranslation(["common", "nav", "coc"]);
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

  if (!width || !props.isShow) return null;

  return (
    <>
      <SponsorCardContainer active={isDetail} onClick={() => toggleDetail()} ref={cardRef}>
        <SponsorCardInner active={isDetail}>
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
                {`${t("common:goToWebsite")} >`}
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
