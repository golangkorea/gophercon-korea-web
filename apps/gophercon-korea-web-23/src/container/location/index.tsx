import styled from "@emotion/styled";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import dayjs from "dayjs";
import { gsap } from "gsap";
import { WithTranslation, withTranslation } from "next-i18next";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useCountdown from "../../hooks/useCountdown";

const LocationContainer = styled.main({
  width: "100%",
  padding: "140px 0 80px 0",
  position: "relative",
});

const LocationInner = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
  zIndex: 10,
});

const Globe = styled.div({
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
});

const LocationMainSection = styled.section({
  width: "90%",
  maxWidth: 1440,
  textAlign: "left",
  justifyContent: "flex-start",
  "@media (max-width: 1000px)": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    padding: "0 20px",
  },
});

const LocationTitle = styled.h1({
  margin: "0 0 40px",
  padding: 0,
  fontSize: 70,
  fontWeight: 900,
  border: 0,
  "@media (max-width: 1280px)": {
    fontSize: 60,
  },
});

const LocationDate = styled.h2({
  margin: 0,
  padding: 0,
  fontSize: 40,
  border: 0,
  color: "#9000FF",
  "@media (max-width: 1280px)": {
    width: "100%",
  },
});

const LocationAddressButton = styled.button({
  fontSize: 26,
  fontWeight: 600,
  marginBottom: 40,
  "@media (max-width: 1280px)": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

const LocationAddressButtonCopied = styled.span({
  fontSize: 24,
  marginLeft: 20,
  fontWeight: 600,
  backgroundColor: "#0029FF",
  padding: "8px 16px",
  color: "#fff",
  borderRadius: "0 16px 16px 16px",
  "@media (max-width: 1000px)": {
    display: "block",
    maxWidth: "80%",
    marginTop: 20,
    marginLeft: 0,
  },
});

const LocationAddressButtonCopyMessage = styled(LocationAddressButtonCopied)({
  backgroundColor: "#fafafa90",
  color: "#000",
  "@media (max-width: 1000px)": {
    fontSize: 18,
  },
});

const CounterGroup = styled.div({
  display: "flex",
  marginTop: 20,
  fontWeight: 600,
  gap: 80,
  "@media (max-width: 1000px)": {
    gap: 20,
  },
});
const Counter = styled.div({
  MozOutlineWidthidth: 120,
  height: 200,
  textAlign: "center",
  "@media (max-width: 1000px)": {
    height: 100,
  },
});
const CounterValue = styled.p({
  fontSize: 70,
  fontWeight: 900,
  marginBottom: 10,
  background: "linear-gradient(45deg, #BD00FF, #0066FF)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  lineHeight: 1.5,
  textShadow: "0 6px 12px rgba(0, 32, 255, .25)",
  "@media (max-width: 1000px)": {
    fontSize: 24,
  },
});
const CounterUnit = styled.p({
  fontSize: 30,
  fontWeight: 700,
  background: "linear-gradient(45deg, #0045dd, #00d299)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  textShadow: "0 3px 6px rgba(0, 163, 255, .25)",
  lineHeight: 1.5,
  "@media (max-width: 1000px)": {
    fontSize: 18,
  },
});

const DATE = dayjs("2023-08-05 10:00", "YYYY-MM-DD HH:mm").toDate();
const Location: React.FC<WithTranslation> = ({ t }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const daysRef = useRef<HTMLDivElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);
  const minutesRef = useRef<HTMLDivElement>(null);
  const secondsRef = useRef<HTMLDivElement>(null);
  const [days, hours, minutes, seconds] = useCountdown(DATE);

  const TRIGGER = {
    day: daysRef.current,
    hour: hoursRef.current,
    minute: minutesRef.current,
    second: secondsRef.current,
  };

  const tickAnimation = (trigger: keyof typeof TRIGGER) => {
    let tl = gsap.timeline();
    tl.to(TRIGGER[trigger], {
      duration: 0.1,
      y: -10,
      ease: "power1.inOut",
    }).to(TRIGGER[trigger], {
      duration: 0.1,
      y: 0,
      ease: "power1.inOut",
    });
  };

  const onCopyHandler = () => {
    setCopied(true);
  };

  useEffect(() => {
    tickAnimation("day");
  }, [days]);

  useEffect(() => {
    tickAnimation("hour");
  }, [hours]);

  useEffect(() => {
    tickAnimation("minute");
  }, [minutes]);

  useEffect(() => {
    tickAnimation("second");
  }, [seconds]);

  const initVanta = () => {
    try {
      VANTA.GLOBE({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.2,
        scaleMobile: 1.0,
        color: "#0029ff",
        backgroundColor: "#f2f2ff",
      });
    } catch (e) {
      console.warn(e);
    }
  };

  const onLoadVanta = () => {
    initVanta();
  };

  useEffect(initVanta, []);

  return (
    <LocationContainer>
      <Globe id='vanta'></Globe>
      <Script type='text/javascript' src='/scripts/vanta.globe.min.js' onLoad={onLoadVanta} />
      <LocationInner>
        <LocationMainSection>
          <LocationTitle>
            GopherCon Korea
            <br />
            2023
          </LocationTitle>
          <LocationDate>2023.08.05-06</LocationDate>
          <CopyToClipboard text={t("address")} onCopy={onCopyHandler}>
            <LocationAddressButton>
              <span>{t("address")}</span>
              {copied ? (
                <LocationAddressButtonCopied>{t("copied")}</LocationAddressButtonCopied>
              ) : (
                <LocationAddressButtonCopyMessage>{t("copyAddress")}</LocationAddressButtonCopyMessage>
              )}
            </LocationAddressButton>
          </CopyToClipboard>
        </LocationMainSection>

        <div className='mt-4 flex w-full justify-center'>
          <AddToCalendarButton
            label={t("addCalendar")}
            name='GopherCon Korea 2023'
            description={t("eventDesc")}
            startDate='2023-08-05'
            startTime='10:00'
            endDate='2023-08-06'
            endTime='18:00'
            timeZone='Asia/Seoul'
            location={t("address")}
            options="'Apple','Google','iCal','Outlook.com','Microsoft365'"
            buttonStyle='3d'
            listStyle='overlay'
          />
        </div>
        <CounterGroup>
          <Counter ref={daysRef}>
            <CounterValue>{days}</CounterValue>
            <CounterUnit>DAY</CounterUnit>
          </Counter>
          <Counter ref={hoursRef}>
            <CounterValue>{hours}</CounterValue>
            <CounterUnit>HOURS</CounterUnit>
          </Counter>
          <Counter ref={minutesRef}>
            <CounterValue>{minutes}</CounterValue>
            <CounterUnit>MINUTES</CounterUnit>
          </Counter>
          <Counter ref={secondsRef}>
            <CounterValue>{seconds}</CounterValue>
            <CounterUnit>SECONDS</CounterUnit>
          </Counter>
        </CounterGroup>
      </LocationInner>
    </LocationContainer>
  );
};

export default withTranslation(["common", "nav", "coc"])(Location);
