import Navbar from "@/components/nav";
import useCountdown from "@/hooks/useCountdown";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import Script from "next/script";
import React from "react";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: React.ReactNode;
  main?: boolean;
}

interface LayoutInnerStyledProps {
  main?: boolean;
}

const LayoutContainer = styled.div({
  display: "flex",
  position: "relative",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

const LayoutInner = styled.div<LayoutInnerStyledProps>(({ main }: LayoutInnerStyledProps) => ({
  width: "100vw",
  height: main ? "100vh" : "calc(100vh - 60px)",
  marginTop: main ? 0 : 60,
  overflowY: "auto",
}));

type LiveContainerProps = {
  isLive?: boolean;
};
const LiveContainer = styled.div<LiveContainerProps>(({ isLive }: LiveContainerProps) => ({
  position: "fixed",
  bottom: 0,
  width: "100vw",
  height: 80,
  backgroundColor: "#ffffff",
  opacity: 0.9,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 10px rgba(0, 0, 0, .2)",
  zIndex: 100,
  "@media (max-width: 1000px)": {
    height: 60,
    flexDirection: "column",
    display: isLive ? "flex" : "none",
  },
}));

const LiveText = styled.span({
  fontSize: 24,
  fontWeight: 700,
  marginRight: 20,
  textTransform: "uppercase",
  "@media (max-width: 1000px)": {
    display: "none",
  },
});

const CountDown = styled.span({
  fontSize: 24,
  fontWeight: 700,
  textShadow: "0 3px 6px rgba(0, 163, 255, .25)",
  background: "linear-gradient(45deg, #BD00FF, #0066FF)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  marginRight: 20,
  "@media (max-width: 1000px)": {
    display: "none",
  },
});

const YoutubeButton = styled.button({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FF0000",
  padding: "8px 16px",
  borderRadius: 16,
  color: "#fff",
  fontWeight: 700,
  letterSpacing: 1,
  boxShadow: "0 0 10px rgba(0, 0, 0, .2)",
  "@media (max-width: 1000px)": {
    width: "100vw",
    borderRadius: 0,
    padding: "16px 0",
    letterSpacing: 2,
  },
});

const LiveCircle = styled.div({
  zIndex: 10,
  backgroundColor: "#FFFFFF",
  borderRadius: "50%",
  width: 16,
  height: 16,
  marginRight: 8,
  position: "relative",
  display: "inline-block",
});

const RippleCircle = styled.div({
  zIndex: 1,
  backgroundColor: "#FFFFFF",
  opacity: 0.8,
  borderRadius: "50%",
  width: 16,
  height: 16,
  position: "absolute",
  top: 0,
  left: 0,
  animation: "ripple 1.5s ease-in-out infinite",
});

const DAY1 = dayjs("2023-08-05 10:00", "YYYY-MM-DD HH:mm");
const DAY2 = dayjs("2023-08-06 10:00", "YYYY-MM-DD HH:mm");

const Layout: React.FC<LayoutProps> = ({ children, main }) => {
  const { t } = useTranslation(["common"]);
  const day: Date = React.useMemo(() => {
    const today = dayjs();
    if (today.isBefore(DAY1)) {
      return DAY1.toDate();
    } else return DAY2.toDate();
  }, []);

  const youtubeLink = React.useMemo(() => {
    const today = dayjs();
    if (today.isBefore(DAY1)) {
      return "https://www.youtube.com/watch?v=WZthMW0BaNA";
    } else return "https://www.youtube.com/watch?v=8AUVKh0qJgU";
  }, []);

  const isLive = React.useMemo(() => {
    const today = dayjs();
    return today.isSame(DAY1) || today.isSame(DAY2);
  }, []);

  const [days, hours, minutes, seconds] = useCountdown(day);

  return (
    <LayoutContainer>
      <Navbar />
      <LayoutInner main={main}>
        {children}
        <LiveContainer isLive={isLive}>
          <LiveText>{t("common:liveTitle")}</LiveText>
          <CountDown>{`${days} DAY ${hours} HOURS ${minutes} MINUTES ${seconds} SECONDS`}</CountDown>
          {isLive && (
            <YoutubeButton className='cta' onClick={() => window.open(youtubeLink, "_blank")}>
              <LiveCircle>
                <RippleCircle />
              </LiveCircle>
              WATCH YOUTUBE LIVE
            </YoutubeButton>
          )}
        </LiveContainer>
      </LayoutInner>
      <Script async src='https://www.googletagmanager.com/gtag/js?id=G-T8BMXV9ZPX' />
      <Script id='google-analytics'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T8BMXV9ZPX');
        `}
      </Script>
    </LayoutContainer>
  );
};

export default Layout;
