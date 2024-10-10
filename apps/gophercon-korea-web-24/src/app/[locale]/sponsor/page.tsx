"use client";
import { pretendard_fontFamily } from "@/app/fonts";
import Section from "@/components/Section";
import { GlobalContext } from "@/components/ThemeProvider";
import styled from "@emotion/styled";
import { Flex, Text } from "gophercon-common";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useContext, useEffect, useMemo } from "react";
import { GradeColor, GradeEn, sponsorColor, sponsorList, SponsorProps } from "./data";

type ColorObject = {
  [key in GradeEn]: number;
};

const sponsorGradeList = ["PLATINUM", "GOLD", "SILVER", "BRONZE", "COMMUNITY", "PUBLISHERS"] as const;

const SponsorWrapper = styled.div<{ isModal: boolean }>(({ isModal }) => ({
  width: "100%",
  maxWidth: "1100px",
  padding: "80px",
  height: "70vh",
  overflow: isModal ? "hidden" : "auto",
  "msOverflowStyle?": "none", // Internet Explorer and Edge
  "&::-webkit-scrollbar": {
    display: "none", // Chrome, Safari and Opera
  },
  "@media (max-width: 700px)": {
    padding: "20px",
    height: "100vh",
  },
}));

const EachSponsorWrapper = styled.div({
  padding: "40px",

  backgroundColor: "#F1F1F1",
  boxShadow: "0px 12px 0px rgba(0, 0, 0, 0.12)",
  cursor: "pointer",
  position: "relative",
  borderRadius: "0px 0px 40px 40px",
});

const EachSponsorInner = styled.div({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

const SponsorImage = styled.img<{ height: number }>(({ height }) => ({
  width: "auto",
  height: `${height}px`,
  objectFit: "contain",

  "@media (max-width: 700px)": {
    width: "100%",
  },
}));

const ButtonHeightConfig: ColorObject = {
  PLATINUM: 70,
  GOLD: 60,
  SILVER: 50,
  BRONZE: 50,
  COMMUNITY: 50,
  PUBLISHERS: 50,
};

const EachSponsorButton: FC<SponsorProps> = ({ imgSrc, grade, desc, link, name }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    const logoName = imgSrc.split("_")[1].split(".")[0];
    router.push(`${pathname}?name=${logoName}`);
  };
  return (
    <EachSponsorWrapper onClick={handleClick}>
      <EachSponsorInner>
        <SponsorImage src={`/logo/${imgSrc}`} alt={imgSrc} height={ButtonHeightConfig[grade.en]} />
      </EachSponsorInner>
    </EachSponsorWrapper>
  );
};

const SponsorDivider = styled.div<GradeColor>(({ startColor, endColor }) => ({
  width: "100%",
  height: "10px",
  background: `linear-gradient(to right, ${startColor}, ${endColor})`,
}));

const SponsorModalWrapper = styled.div({
  backgroundColor: "rgba(0, 0, 0, 0.3);",
  width: "100%",
  height: "100%",

  position: "fixed",
  top: "0",
  left: "0",
  zIndex: 1,
});

const SponsorModalOuter = styled.div({
  backgroundColor: "#ffffff",
  padding: 80,
  borderRadius: 40,
  width: "70vw",
  maxWidth: "1000px",
  margin: "0 auto",
  position: "relative",
  "@media (max-width: 1100px)": {
    padding: 40,
    borderRadius: 20,
  },
});

const SponsorModalInner = styled.div({});

const ModalCloseBtn = styled(Image)({
  cursor: "pointer",
  position: "absolute",
  right: -40,
  top: -40,
  "@media (max-width: 960px)": {
    right: 10,
    top: 10,
  },
});

interface ModalLableProps {
  bgColor: string;
  label: string;
}

const SponsorModalLabelWrapper = styled.div<{ bgColor: string }>(({ bgColor }) => ({
  backgroundColor: bgColor,
  padding: "10px 20px",
  borderRadius: 20,
}));

const SponsorModalImage = styled.img({
  objectFit: "contain",
  width: "auto",
  height: "100%",
  "@media (max-width: 960px)": {
    width: "100%",
    maxHeight: 140,
  },
});

const SponsorModalLabel: FC<ModalLableProps> = ({ bgColor, label }) => {
  return (
    <SponsorModalLabelWrapper bgColor={bgColor}>
      <Text weight={700} size={"1.25rem"}>
        {label}
      </Text>
    </SponsorModalLabelWrapper>
  );
};

const SponsorModalImageWrapper = styled.div({
  width: "100%",
  backgroundColor: "#F2FBFF",
  padding: "50px 0px",
  "@media (max-width: 470px)": {
    padding: "20px 0px",
  },
});

const SponsorModalCTA = styled.div({
  width: "100%",
  backgroundColor: "#6630d9",
  display: "flex",
  justifyContent: "center",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "#7234e1",
  },
});

const SponsorModalCTAInner = styled(Link)({
  padding: "20px",
  fontSize: "1.5em",
  fontWeight: 600,
  textAlign: "center",
  color: "#ffffff",
  cursor: "pointer",
});

const SponsorDescWrapper = styled.div({
  height: "200px",
  overflowY: "scroll",
  width: "100%",
  lineHeight: 1.6,
});

const SponsorLabelFlex = styled.div({
  display: "flex",
  gap: "40px",
  flexDirection: "column",
  alignItems: "center",

  "@media (max-width: 470px)": {
    gap: "10px",
  },
});

const SponsorModal: FC<SponsorProps> = ({ imgSrc, grade, desc, link, name }) => {
  const router = useRouter();
  const { locale, dict } = useContext(GlobalContext);
  const pathname = usePathname();
  useEffect(() => {
    if (!document) return;

    const keydownHandler = (e: any) => {
      if (e.key === "Escape") return closeModal(e);
    };
    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.body.removeEventListener("keydown", keydownHandler);
    };
  });

  const closeModal = (e: any) => {
    if (e?.target.id === "cta") return;
    router.push(`${pathname}`);
  };
  return (
    <SponsorModalWrapper id='bg' onClick={closeModal}>
      <Flex align='center' justify='center' height={"100%"}>
        <SponsorModalOuter>
          <SponsorModalInner>
            <SponsorLabelFlex>
              <Flex justify='space-between' direction='row' wrap='wrap' gap={20}>
                <Text weight={700} size={"2rem"}>
                  {name[locale]}
                </Text>
                <SponsorModalLabel bgColor={sponsorColor[grade.en].startColor} label={grade[locale]} />
              </Flex>
              <SponsorModalImageWrapper>
                <Flex>
                  <SponsorModalImage src={`/logo/${imgSrc}`} alt={imgSrc} />
                </Flex>
              </SponsorModalImageWrapper>
              <SponsorDescWrapper>
                <Text size={"1.25rem"} weight={700}>
                  {desc[locale]}
                </Text>
              </SponsorDescWrapper>
              <SponsorModalCTA id='cta'>
                <SponsorModalCTAInner
                  href={link}
                  target='_blank'
                  style={{ textDecoration: "none", width: "100%" }}
                  id='cta'
                >
                  {dict.sponsor.cta}
                </SponsorModalCTAInner>
              </SponsorModalCTA>
            </SponsorLabelFlex>
            <ModalCloseBtn onClick={closeModal} src={"/modalClose.svg"} alt='modalClose' width={40} height={40} />
          </SponsorModalInner>
        </SponsorModalOuter>
      </Flex>
    </SponsorModalWrapper>
  );
};

const SponsorFlex = styled.div<{ justify: string }>(({ justify }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: justify,
  "@media (max-width: 1100px)": {
    flexDirection: "column", // 화면이 1100px 이하일 때 column으로 변경
    justifyContent: "center",
    width: "auto",
    gap: "30px",
  },
}));

const Sponsor = () => {
  const searchParams = useSearchParams();
  const queryValue = searchParams.get("name");

  const { sponsorData, isModal } = useMemo(() => {
    const sponsorData = sponsorList.find(({ imgSrc }) => imgSrc.split("_")[1].split(".")[0] === queryValue);
    const isModal = sponsorData ? true : false;
    return { sponsorData, isModal };
  }, [queryValue]);

  useEffect(() => {
    // 페이지에 접속했을 때 overflow를 hidden으로 설정
    document.body.style.overflow = "hidden";

    // 컴포넌트 언마운트 시 overflow를 visible로 복원
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <Section>
      {sponsorData && <SponsorModal {...sponsorData} />}
      <SponsorWrapper isModal={isModal}>
        <Flex gap={80}>
          {sponsorGradeList.map((grade, idx) => {
            const targetData = sponsorList.filter((info) => info.grade.en === grade);
            const targetColor = sponsorColor[grade];
            const isSolo = targetData.length === 1;
            return (
              <Flex key={`${grade}-${idx}`} width='100%' align='center' justify='center' gap={40}>
                <Flex align='start' justify='start' gap={20}>
                  <Text font={pretendard_fontFamily} size={"2.5rem"} weight={700}>
                    {grade}
                  </Text>
                  <SponsorDivider {...targetColor} />
                </Flex>
                <SponsorFlex justify={isSolo ? "center" : "space-between"}>
                  {targetData.map((data, idx) => (
                    <EachSponsorButton key={`${data.name}-${idx}`} {...data} />
                  ))}
                </SponsorFlex>
              </Flex>
            );
          })}
        </Flex>
      </SponsorWrapper>
    </Section>
  );
};

export default Sponsor;
