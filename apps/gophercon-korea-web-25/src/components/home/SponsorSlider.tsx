import daangnLogo from "@/assets/sponsors/daangn.webp";
import devsistersLogo from "@/assets/sponsors/devsisters.webp";
import easysLogo from "@/assets/sponsors/easys.webp";
import freelecLogo from "@/assets/sponsors/freelec.webp";
import goldenrabbitLogo from "@/assets/sponsors/goldenrabbit.webp";
import googleLogo from "@/assets/sponsors/google.webp";
import hanbitLogo from "@/assets/sponsors/hanbit.webp";
import jpubLogo from "@/assets/sponsors/jpub.webp";
import youngjinLogo from "@/assets/sponsors/youngjindotcom.webp";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  RiCloseLine,
  RiFacebookBoxFill,
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";

interface Sponsor {
  name: { ko: string; en: string };
  logo: string;
  tier: "Platinum" | "Bronze" | "Publisher";
  description: { ko: string; en: string };
  website: string;
  youtube?: string;
  socials: { [key: string]: string };
}

const sponsors: Sponsor[] = [
  {
    name: { ko: "Google", en: "Google" },
    logo: googleLogo,
    tier: "Platinum",
    description: {
      ko: "Google Go 팀은 현대 소프트웨어 개발의 복잡성을 줄이고, 효율적인 성능을 제공하기 위해 Google에서 개발한 프로그래밍 언어인 Go(또는 Golang)를 설계 및 관리하는 팀입니다. 우리의 목표는 개발자들이 더욱 빠르고 효율적으로 소프트웨어를 구축할 수 있도록 돕는 것입니다.",
      en: "The Google Go Team is responsible for designing and maintaining the Go (also known as Golang) programming language, which was developed by Google to reduce the complexity of modern software development and provide efficient performance. Our mission is to empower developers to build software faster and more efficiently.",
    },
    website: "https://developers.google.com/",
    socials: {},
  },
  {
    name: { ko: "당근", en: "Karrot" },
    logo: daangnLogo,
    tier: "Bronze",
    description: {
      ko: "당근은 기술을 통해 지역 사회와 이웃을 연결하는 대한민국 최대 하이퍼로컬 커뮤니티입니다. 2015년 신뢰 기반의 중고거래 서비스로 시작하여, 현재는 4,300만 이웃이 동네생활, 동네지도, 당근알바 등 다양한 서비스를 통해 교류하며 지역 생활의 가치를 높이고 있어요. 대한민국을 넘어 'Karrot'이라는 이름으로 캐나다, 일본, 미국, 영국 등 4개국 1,400여 개 지역에 진출하며 전 세계 이웃을 연결하는 글로벌 커뮤니티로 성장하고 있답니다.",
      en: "Karrot is South Korea's largest hyperlocal community platform, connecting over 43 million neighbors. What began as a trusted peer-to-peer secondhand marketplace in 2015 has evolved into a comprehensive platform for local life. Globally, we operate as 'Karrot,' bringing our community-driven model to over 1,400 regions across the UK, Canada, the US, and Japan to foster meaningful connections worldwide.",
    },
    website: "https://about.daangn.com/",
    youtube: "https://youtu.be/Ig2YfgUk49Q?si=MyeTnNg4MKUdbLLU",
    socials: {
      LinkedIn: "https://www.linkedin.com/company/daangn/",
      X: "https://x.com/daangnteam",
      YouTube: "https://www.youtube.com/@daangntech",
      Medium: "https://medium.com/daangn",
    },
  },
  {
    name: { ko: "데브시스터즈", en: "DEVSISTERS" },
    logo: devsistersLogo,
    tier: "Bronze",
    description: {
      ko: "데브시스터즈는 대한민국 본사를 비롯한 총 4개의 글로벌 오피스, 3개의 개발 스튜디오, 1개의 투자 전문 자회사로 이뤄져있으며, 모든 구성원들이 전 세계 고객들에게 오랜 시간 사랑받고 기억에 남을 경험을 만들기 위해 노력하고 있습니다. 2007년 설립 이후 쿠키런 IP를 중심으로 전 세계 2억 명 이상의 유저들에게 꾸준히 사랑받는 게임과 서비스를 제공해오고 있으며, 모바일은 물론 PC, 콘솔, VR 등 다양한 플랫폼으로 그 영향력을 확대하고 있습니다. 뿐만 아니라 애니메이션, 라이선싱 등 새로운 사업 분야로의 진출을 이어나가고 있습니다.",
      en: "Devsisters consists of four global offices, with its headquarters in Korea, three development studios, and one investment subsidiary branch. Everyone at Devsisters strives to provide an ageless and memorable experience that can be loved by players all across the world. Since its founding in 2007, Devsisters has been providing games and services, centered around the Cookie Run IP, that have been loved by more than 200 millions users around the world. Devsisters is currently expanding its horizons to multiple platforms, such as mobile, PC, console gaming, and VR. In addition, we are continuing to advance into new business ventures such as animation and licensing.",
    },
    website: "https://www.devsisters.com/",
    youtube: "https://www.devsisters.com/",
    socials: {
      LinkedIn: "https://www.linkedin.com/company/devsisters/",
      YouTube: "https://www.youtube.com/@devsisters",
      X: "https://x.com/devsisters",
    },
  },
  {
    name: { ko: "한빛미디어", en: "Hanbit Media" },
    logo: hanbitLogo,
    tier: "Publisher",
    description: {
      ko: "한빛미디어(주)는 '책으로 여는 IT 세상'을 만들어 갑니다. 우리 시대의 주역들을 위한 프로그래밍, 컴퓨터 공학, IT 에세이와 더불어 일반 사용자를 위한 OA, 그래픽 등 IT 활용서와 나와 내 아이를 위한 실용서까지 다양한 분야의 책으로 IT 세상을 만들어 가고 있습니다. IT 전문가와 미래의 전문가를 꿈꾸는 이의 동반자로 30년 한 길을 걸어온 한빛미디어(주)는 앞으로도 여러분과 함께 그려가는 멋진 미래를 꿈꾸며 '책으로 여는 IT 세상'을 만들어 가겠습니다.",
      en: "Hanbit Media Co., Ltd. is creating “The IT World Opened by Books.” For the leading minds of our time, we publish books on programming, computer science, and IT essays, alongside practical guides on office automation, graphic design, and everyday IT applications for general users, as well as lifestyle titles for you and your family. As a trusted companion for IT professionals and aspiring experts, Hanbit Media has walked this path for 30 years. We will continue to build a bright future together with you, shaping “The IT World Opened by Books.”",
    },
    website: "https://www.hanbit.co.kr/",
    youtube: "https://www.youtube.com/@HanbitMedia93",
    socials: {
      Facebook: "https://www.facebook.com/hanbitmedia",
      Instagram: "https://instagram.com/developer_recipe",
      X: "https://twitter.com/programmer_food",
    },
  },
  {
    name: { ko: "제이펍", en: "Jpub" },
    logo: jpubLogo,
    tier: "Publisher",
    description: {
      ko: "제이펍은 IT 전문서, 컴퓨터 활용서, 취미/실용 분야 등 출판 분야가 다양해지면서 2025년부터는 기존의 모토 '0과 1이 꿈꾸는 세상' 대신에 '기술의 깊이, 영감의 높이, 배움의 너비'란 새로운 캐치프레이즈를 내세우며 보다 양질의 책을 펴내는 데 최선을 다하고 있습니다. IT 전문서의 I♥A.I., I♥Cloud, I♥Mobile, I♥Robot 시리즈를 거쳐 LUVIT, LEVELIT 시리즈, 컴퓨터 활용서의 ‘진짜 쓰는’, ‘일잘러’ 시리즈, 취미/실용 분야의 어텐션 시리즈까지 다양한 베스트셀러와 스테디셀러를 출간하고 있습니다.",
      en: "As Jpub's publishing areas have diversified to include not only IT professional books but also computer how-to guides and books in the hobby and lifestyle categories, the company has been doing its utmost to publish higher-quality books since 2025 under a new catchphrase, \"Depth of Technology, Height of Inspiration, Breadth of Learning,\" replacing its previous motto \"A World Dreamed by 0s and 1s.\" From our well-received IT series such as I♥A.I., I♥Cloud, I♥Mobile, and I♥Robot, to the LUVIT and LEVELIT series, and practical computer guides like The Real Guide and Work Smart series, as well as the popular Attention series in the hobby and lifestyle category, we have published a wide range of bestsellers and long-sellers.",
    },
    website: "https://jpub.tistory.com/",
    socials: { Instagram: "https://www.instagram.com/jpub_official" },
  },
  {
    name: { ko: "영진닷컴", en: "youngjin.com" },
    logo: youngjinLogo,
    tier: "Publisher",
    description: {
      ko: "독자에게 도움이 되는 책을 만듭니다. 영진닷컴은 IT 전문서, 취미·실용서, ‘이기적’ 시리즈 수험서를 출간하는 대한민국 대표 종합 출판사입니다. ‘이기적’ 시리즈 수험서는 체계적인 학습 설계로 자격증 취득과 실무 역량 향상을 돕고, IT 실무자를 위한 전문 기술서도 꾸준히 선보입니다. 또한 컬러링북, 요리, 공예, 사진, 일러스트 등 일상 속 취미·실용서까지 폭넓게 제공합니다.",
      en: "We create books that truly help our readers. Youngjin.com is South Korea’s leading comprehensive publisher, releasing IT professional books, hobby and practical guides, and the “Igijeok” series of exam preparation books. The Igijeok series features a structured learning design to support readers in obtaining certifications and enhancing practical skills, and we also consistently publish professional technical books for IT professionals. Additionally, we provide a wide range of books covering hobbies and practical knowledge for everyday life, including coloring books, cooking, crafts, photography, and illustration.",
    },
    website: "https://www.youngjin.com/",
    socials: {
      X: "https://x.com/ydot2",
      Instagram: "https://www.instagram.com/ydot2/",
      YouTube: "https://www.youtube.com/@ydot0789",
      Github: "https://github.com/Youngjin-com/",
    },
  },
  {
    name: { ko: "이지스퍼블리싱", en: "EasysPublishing" },
    logo: easysLogo,
    tier: "Publisher",
    description: {
      ko: "이지스퍼블리싱은 ‘사람을 구체적으로 도와주는 책’을 만드는 출판사입니다. 실무에 바로 적용할 수 있는 IT 실용서와 프로그래밍 교재를 출판하며, 입문자도 부담 없이 따라 할 수 있는 실습 중심의 콘텐츠를 제공합니다. 대표 브랜드인 ‘된다! 시리즈’와 ‘Do it! 시리즈’는 실제 프로젝트를 진행하며 지식을 익히고 경험을 쌓도록 체계적으로 구성해서 복잡하거나 낯선 개념도 쉽고 빠르게 이해할 수 있습니다. 책 속 예제와 실습을 따라 하다 보면 자연스럽게 문제 해결 능력과 업무 처리 능력 등의 실무 감각을 기를 수 있습니다.",
      en: "Easyspublishing is a publisher that makes ‘books that specifically help people.’ It publishes IT practical books and programming textbooks that can be applied directly to the practice, and provides hands-on content that beginners can follow without burden. The flagship brands '된다! series' and 'Do it! series' are organized to learn knowledge and gain experience through real projects, making it easy to understand complex concepts. If you follow the examples and practices in the book, you can naturally develop practical skills such as problem-solving skills and work processing skills.",
    },
    website: "https://www.easyspub.co.kr/Main/PUB",
    socials: {
      Instagram: "https://www.instagram.com/easyspub_it/",
      YouTube: "https://www.youtube.com/@easyspub",
      X: "https://x.com/easys_IT",
    },
  },
  {
    name: { ko: "프리렉", en: "Freelec" },
    logo: freelecLogo,
    tier: "Publisher",
    description: {
      ko: "2001년 설립된 프리렉 출판사는 250종 이상 도서를 출간한 IT 전문 출판사입니다. 2000년대 초, '열혈강의' 시리즈로 IT 학습의 대중화와 함께 동영상 강의를 선도했습니다. 현재는 C/JAVA 등 전문 분야는 물론, IT 기술의 뿌리가 되는 수학·과학적 원리를 쉽게 전달하는 도서를 출간하고 있습니다. 또한 최신 기술 트렌드인 AI 분야에도 집중하고 있습니다. IT 기초 원리부터 최신 기술까지, 프리렉은 여러분의 지식과 성장을 위한 안내자가 되겠습니다.",
      en: "Prereq Publishing, established in 2001, is an IT specialized publisher with over 250 titles released to date. In the early 2000s, we pioneered the popularization of IT education with our \"Passionate Lectures\" series, which included video lectures. Currently, we publish not only core technical books on C/Java but also titles that convey the foundational mathematical and scientific principles of IT. We are also heavily focused on the latest technological trend: AI. From foundational IT principles to the latest technologies, Freelec will be your guide to knowledge and professional growth.",
    },
    website: "https://freelec.co.kr/",
    youtube: "https://www.youtube.com/user/FREELECKOR",
    socials: {
      Instagram: "https://www.instagram.com/freelec_press/",
      YouTube: "https://www.youtube.com/user/FREELECKOR",
      Facebook: "https://www.facebook.com/freelecbook",
    },
  },
  {
    name: { ko: "골든래빗", en: "GoldenRabbit" },
    logo: goldenrabbitLogo,
    tier: "Publisher",
    description: {
      ko: "우리는 모두의 가치가 성장하는 시간을 만듭니다. 더 나은 나를 만드는 시간, 가치가 성장하는 시간이 되는 책을 만듭니다. 골든래빗은 나눌수록 더 커지는 지식을 글로 정리하고, 더 큰 가치를 담아 책으로 제공하는 출판사입니다. IT모바일과 경제경영 주제를 비롯한 다양한 영역의 지식도 책으로 담아 출간하고 있습니다.",
      en: "At Golden Rabbit, we create time for everyone's value to grow. We make books that help you become a better version of yourself and allow your values to thrive. Golden Rabbit is a publishing company that organizes knowledge, which grows larger when shared, into written form and delivers it through books enriched with greater value. We publish books on various topics, including IT & mobile, economics, and management, as well as other areas of knowledge.",
    },
    website: "https://goldenrabbit.co.kr/",
    socials: {},
  },
];

const slideAnimation = (itemWidth: number, sponsorCount: number) => keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-${itemWidth}px * ${sponsorCount}));
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleIn = keyframes`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const SponsorSliderContainer = styled.div`
  padding: 80px 0;
  background-color: #fff;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.text};
`;

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 200px;
    height: 100%;
    z-index: 2;
  }

  &:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), #fff 80%);
  }

  &:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 80%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    &:before,
    &:after {
      width: 100px;
    }
  }
`;

const SliderTrack = styled.div`
  display: flex;
  width: calc(250px * ${sponsors.length * 2});
  animation: ${slideAnimation(250, sponsors.length)} 40s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(180px * ${sponsors.length * 2});
    animation-name: ${slideAnimation(180, sponsors.length)};
  }
`;

const SponsorLogo = styled.div`
  height: 80px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
`;

const SponsorLogoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: visible; /* Prevent image from being clipped on scale */

  img {
    max-width: 100%;
    max-height: 60px;
    object-fit: contain;
    filter: grayscale(1);
    opacity: 0.7;
    transition:
      filter 0.3s ease-in-out,
      opacity 0.3s ease-in-out,
      transform 0.3s ease-in-out;
  }

  &:hover img {
    filter: grayscale(0);
    opacity: 1;
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 180px;
    padding: 0 20px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 50px;
  border-radius: 12px;
  max-width: 750px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  animation: ${scaleIn} 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 30px 25px;
    width: 92%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #888;
  &:hover {
    color: #333;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 20px;
`;

const ModalLogo = styled.img`
  height: 50px;
  max-width: 150px;
  object-fit: contain;
`;

const ModalTitleContainer = styled.div``;

const ModalTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const TierBadge = styled.span<{ tier: string }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 8px;
  color: white;
  ${({ tier }) => {
    if (tier === "Platinum") return "background: linear-gradient(135deg, #006AFF, #AE00FF);";
    if (tier === "Bronze") return "background: linear-gradient(135deg, #D8B182, #B15536);";
    if (tier === "Publisher") return "background: linear-gradient(135deg, #AFE0F6, #0097DC);";
    return "background-color: #ccc;";
  }}
`;

const ModalBody = styled.div`
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const ModalFooter = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const WebsiteLink = styled.a`
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  width: 100%;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background-color 0.2s;
  &:hover {
    background-color: #005f79;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const SocialLinkItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  a {
    font-size: 1.8rem;
    color: #555;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const SocialLinksTitle = styled.h5`
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const socialIcons: { [key: string]: React.ElementType } = {
  LinkedIn: RiLinkedinBoxFill,
  X: RiTwitterXFill,
  YouTube: RiYoutubeFill,
  Github: RiGithubFill,
  Facebook: RiFacebookBoxFill,
  Instagram: RiInstagramLine,
};

const SponsorSlider = () => {
  const { t, i18n } = useTranslation(undefined, { keyPrefix: "home" });
  const lang = i18n.language.startsWith("ko") ? "ko" : "en";
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedSponsor(null);
      }
    };

    if (selectedSponsor) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedSponsor]);

  return (
    <SponsorSliderContainer>
      <SectionTitle>{t("sponsors_title")}</SectionTitle>
      <SliderWrapper>
        <SliderTrack>
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <SponsorLogo key={index}>
              {sponsor.name.en === "Google" ? (
                <SponsorLogoLink href={sponsor.website} target='_blank' rel='noopener noreferrer'>
                  <img src={sponsor.logo} alt={sponsor.name[lang]} />
                </SponsorLogoLink>
              ) : (
                <SponsorLogoLink as='div' onClick={() => setSelectedSponsor(sponsor)}>
                  <img src={sponsor.logo} alt={sponsor.name[lang]} />
                </SponsorLogoLink>
              )}
            </SponsorLogo>
          ))}
        </SliderTrack>
      </SliderWrapper>
      {selectedSponsor && (
        <ModalOverlay onClick={() => setSelectedSponsor(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedSponsor(null)}>
              <RiCloseLine />
            </CloseButton>
            <ModalHeader>
              <ModalLogo src={selectedSponsor.logo} alt={selectedSponsor.name[lang]} />
              <ModalTitleContainer>
                <ModalTitle>{selectedSponsor.name[lang]}</ModalTitle>
                <TierBadge tier={selectedSponsor.tier}>{selectedSponsor.tier}</TierBadge>
              </ModalTitleContainer>
            </ModalHeader>
            <ModalBody>
              <p>{selectedSponsor.description[lang]}</p>
            </ModalBody>
            <ModalFooter>
              <WebsiteLink href={selectedSponsor.website} target='_blank' rel='noopener noreferrer'>
                {t("visit_website")}
              </WebsiteLink>
              {Object.keys(selectedSponsor.socials).length > 0 && (
                <SocialLinks>
                  <SocialLinksTitle>Follow Us</SocialLinksTitle>
                  <SocialLinkItems>
                    {Object.entries(selectedSponsor.socials).map(([name, url]) => {
                      const Icon = socialIcons[name];
                      return Icon ? <a key={name} href={url} target='_blank' rel='noopener noreferrer' title={name}><Icon /></a> : null;
                    })}
                  </SocialLinkItems>
                </SocialLinks>
              )}
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </SponsorSliderContainer>
  );
};

export default SponsorSlider;
