import gopherBagCharm from "@/assets/flea-market/gopher-bag-charm.webp";
import gopherCrochetLarge from "@/assets/flea-market/gopher-crochet-large.webp";
import gopherFigure from "@/assets/flea-market/gopher-figure.webp";
import gopherKeychain from "@/assets/flea-market/gopher-keychain.webp";
import gopherMetalBadge from "@/assets/flea-market/gopher-metal-badge.webp";
import gopherStickers from "@/assets/flea-market/gopher-stickers.webp";
import gopherTshirt from "@/assets/flea-market/gopher-tshirt.webp";
import gopherTumbler from "@/assets/flea-market/gopher-tumbler.webp";
import gopherconBadge from "@/assets/flea-market/gophercon-badge.webp";
import gopherconMug from "@/assets/flea-market/gophercon-mug.webp";
import { PageContainer, PageTitle } from "@/components/common/PageContainer";
import Seo from "@/components/common/Seo";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { RiInformationLine } from "react-icons/ri";

const SHOW_PRICES = false;

const itemImages: { [key: string]: string } = {
  "gopher-crochet-large": gopherCrochetLarge,
  "gopher-bag-charm": gopherBagCharm,
  "gopher-figure": gopherFigure,
  "gopher-keychain": gopherKeychain,
  "gophercon-badge": gopherconBadge,
  "gophercon-mug": gopherconMug,
  "gopher-stickers": gopherStickers,
  "gopher-tshirt": gopherTshirt,
  "gopher-tumbler": gopherTumbler,
  "gopher-metal-badge": gopherMetalBadge,
};

interface FleaMarketItem {
  name: string;
  image: string;
  price: string;
}

const FleaMarket = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "flea_market" });
  const items = t("items", { returnObjects: true }) as FleaMarketItem[];

  return (
    <PageContainer>
      <Seo title={t("title")} description={t("description")} />
      <PageTitle>{t("title")}</PageTitle>
      <Description>{t("description")}</Description>

      <Notice>
        <RiInformationLine size={24} />
        <NoticeContent>
          <h4>{t("notice_title")}</h4>
          <p>{t("notice_content")}</p>
        </NoticeContent>
      </Notice>

      <ItemsGrid>
        {Array.isArray(items) &&
          items.map((item) => (
            <ItemCard key={item.name}>
              <ItemImageContainer>
                <ItemImageWrapper>
                  <ItemImage src={itemImages[item.image]} alt={item.name} />
                </ItemImageWrapper>
              </ItemImageContainer>
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                {SHOW_PRICES && <ItemPrice>{item.price}</ItemPrice>}
              </ItemInfo>
            </ItemCard>
          ))}
      </ItemsGrid>
    </PageContainer>
  );
};

const Notice = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 1.5rem 2rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  svg {
    flex-shrink: 0;
    margin-top: 0.2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NoticeContent = styled.div`
  h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.6;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.25rem;
  max-width: 800px;
  margin: -10px auto 40px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
`;

const ItemImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const ItemCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.medium};

    ${ItemImage} {
      transform: scale(1.05);
    }
  }
`;

const ItemImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
`;

const ItemImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemInfo = styled.div`
  padding: 1.5rem;
  text-align: left;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text};
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

const ItemPrice = styled.p`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-top: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.05rem;
  }
`;

export default FleaMarket;
