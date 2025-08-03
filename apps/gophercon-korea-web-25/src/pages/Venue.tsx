import { PageContainer, PageTitle } from "@/components/common/PageContainer";
import Seo from "@/components/common/Seo";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { RiCheckLine, RiFileCopyLine } from "react-icons/ri";

interface SubwayLine {
  line: string;
  color: string;
  info: string;
}

const Venue = () => {
  const { t } = useTranslation();
  const { copy: copyEmail, copyStatus: emailCopyStatus } = useCopyToClipboard();
  const { copy: copyAddress, copyStatus: addressCopyStatus } = useCopyToClipboard();
  const email = t("venue.contact_email");
  const address = t("venue.address");
  const venueName = t("home.venue");
  const subwayLines = t("venue.subway_lines", { returnObjects: true });

  return (
    <PageContainer>
      <Seo title={t("venue.title")} description={t("venue.address")} />
      <PageTitle>{t("venue.title")}</PageTitle>
      <Grid>
        <Card>
          <MapIframe
            title={t("venue.map_title")}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.810996165431!2d126.8247309764327!3d37.55961892419131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c1c4a15f951%3A0x1b491657245551f1!2z7L2U7JeQ7IucIOuniOq0gA!5e0!3m2!1sko!2skr!4v1722839441018!5m2!1sko!2skr'
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </Card>
        <InfoContainer>
          <Card>
            <InfoTitle>{t("venue.address_title")}</InfoTitle>
            <CopyableContainer>
              <AddressWrapper>
                <VenueName>{venueName}</VenueName>
                <Address>{address}</Address>
              </AddressWrapper>
              <CopyButton onClick={() => copyAddress(`${venueName}, ${address}`)} title='Copy address'>
                {addressCopyStatus === "copied" ? <RiCheckLine color='green' /> : <RiFileCopyLine />}
              </CopyButton>
            </CopyableContainer>
          </Card>
          <Card>
            <InfoTitle>{t("venue.transportation_title")}</InfoTitle>
            <TransportSection>
              <SubTitle>{t("venue.subway_title")}</SubTitle>
              <TransportInfo style={{ marginBottom: "1rem" }}>{t("venue.subway_info")}</TransportInfo>
              <SubwayList>
                {Array.isArray(subwayLines) &&
                  (subwayLines as SubwayLine[]).map((line) => (
                    <SubwayItem key={line.line}>
                      <SubwayBadge color={line.color}>{line.line}</SubwayBadge>
                      <span>{line.info}</span>
                    </SubwayItem>
                  ))}
              </SubwayList>
            </TransportSection>
          </Card>
          <Card>
            <InfoTitle>{t("venue.parking_title")}</InfoTitle>
            <TransportInfo>{t("venue.parking_info")}</TransportInfo>
          </Card>
          <Card>
            <InfoTitle>{t("venue.contact_title")}</InfoTitle>
            <CopyableContainer>
              <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
              <CopyButton onClick={() => copyEmail(email)} title='Copy email'>
                {emailCopyStatus === "copied" ? <RiCheckLine color='green' /> : <RiFileCopyLine />}
              </CopyButton>
            </CopyableContainer>
          </Card>
        </InfoContainer>
      </Grid>
    </PageContainer>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  margin-top: 40px;
  align-items: stretch;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    & > div:first-of-type {
      /* This is the Card containing the map */
      aspect-ratio: 4 / 3;
    }
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
`;

const MapIframe = styled.iframe`
  width: 100%;
  flex-grow: 1;
  border-radius: 8px;
  border: none;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const VenueName = styled.strong`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.6;
  margin-bottom: 0.25rem;
`;

const Address = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const TransportSection = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const SubTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const TransportInfo = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SubwayList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const SubwayItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const SubwayBadge = styled.span<{ color: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  margin-right: 12px;
  flex-shrink: 0;
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0;
  transition: opacity 0.2s;
  padding: 0 0 0 12px;
  font-size: 1.2rem;
`;

const CopyableContainer = styled.div`
  display: flex;
  align-items: center;

  &:hover ${CopyButton} {
    opacity: 0.7;
  }
`;

const ContactLink = styled.a`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Venue;
