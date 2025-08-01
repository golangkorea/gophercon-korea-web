import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";

const socialLinks = [
  {
    name: "Discord",
    url: "https://discord.gg/ggVVZSayuj",
    icon: <FaDiscord />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/gophercon.kr",
    icon: <FaFacebook />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/golang.korea",
    icon: <FaInstagram />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/gdg-golang-korea/",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    url: "https://github.com/golangkorea",
    icon: <FaGithub />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@golangkorea8237",
    icon: <RiYoutubeLine />,
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <Content>
        <Info>
          <p>
            <strong>Golang Korea</strong>
          </p>
          <p>{t("venue.address")}</p>
          <p>{t("venue.contact_email")}</p>
          <Copyright>&copy; {new Date().getFullYear()} Golang Korea. All rights reserved.</Copyright>
        </Info>
        <SocialLinks>
          {socialLinks.map((link) => (
            <SocialLink
              key={link.name}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={link.name}
            >
              {link.icon}
            </SocialLink>
          ))}
        </SocialLinks>
      </Content>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 60px 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.footerBg};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;

const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Info = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  p {
    margin: 0;
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Footer;
