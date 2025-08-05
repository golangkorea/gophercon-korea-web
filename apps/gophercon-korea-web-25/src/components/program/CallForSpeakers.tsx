import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { RiMicLine, RiSendPlaneFill } from "react-icons/ri";

export const SHOW_CALL_FOR_SPEAKERS = true;

const CallForSpeakers = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "program" });

  if (!SHOW_CALL_FOR_SPEAKERS) {
    return null;
  }

  return (
    <NoticeBox>
      <IconWrapper>
        <RiMicLine size={28} />
      </IconWrapper>
      <Content>
        <h4>{t("call_for_speakers_title")}</h4>
        <p>{t("call_for_speakers_content")}</p>
      </Content>
      <CtaButton href='https://forms.gle/o6RQfG1kpeebRSTh9' target='_blank' rel='noopener noreferrer'>
        {t("call_for_speakers_cta")}
        <RiSendPlaneFill />
      </CtaButton>
    </NoticeBox>
  );
};

const NoticeBox = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 125, 156, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.primary};
  background-color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  flex-grow: 1;
  h4 {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primaryDark};
  }
  p {
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export default CallForSpeakers;
