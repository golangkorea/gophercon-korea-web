import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiCheckLine, RiFileCopyLine, RiYoutubeLine } from "react-icons/ri";

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
  const { copy: copyAddress, copyStatus: addressCopyStatus } = useCopyToClipboard();
  const { copy: copyEmail, copyStatus: emailCopyStatus } = useCopyToClipboard();

  const address = t("venue.address");
  const email = t("venue.contact_email");

  return (
    <FooterContainer>
      <Content>
        <Info>
          <strong>Golang Korea</strong>
          <CopyableContainer>
            <span>{address}</span>
            <CopyButton onClick={() => copyAddress(address)} title='Copy address'>
              {addressCopyStatus === "copied" ? <RiCheckLine color='green' /> : <RiFileCopyLine />}
            </CopyButton>
          </CopyableContainer>
          <CopyableContainer>
            <span>{email}</span>
            <CopyButton onClick={() => copyEmail(email)} title='Copy email'>
              {emailCopyStatus === "copied" ? <RiCheckLine color='green' /> : <RiFileCopyLine />}
            </CopyButton>
          </CopyableContainer>
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
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    margin-bottom: 4px;
  }
`;

const CopyableContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover button {
    opacity: 1;
  }
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0;
  transition: opacity 0.2s;
  font-size: 1.1rem;
  padding: 0;
  display: inline-flex;
  align-items: center;
`;

const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
  margin-bottom: 0;
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
