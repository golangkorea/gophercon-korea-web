import Image from "next/image";

import Content from "@/components/content";

// DIAMOND

// PLATINUM
import Hyundai from "/public/images/sponsors/platinum/logo_hyundai.png";

// GOLD
import Karrot from "/public/images/sponsors/gold/logo_daangn.webp";
import Dreamus from "/public/images/sponsors/gold/logo_flo.webp";
import Megazon from "/public/images/sponsors/gold/logo_megazon.webp";

// SILVER
import Openup from "/public/images/sponsors/silver/logo_openup.webp";

// BRONZE
import AB180 from "/public/images/sponsors/bronze/logo_ab180.webp";
import Onuii from "/public/images/sponsors/bronze/logo_onuii.webp";

// COMMUNITY
import Awskrug from "/public/images/sponsors/community/logo_awskrug.webp";
import GoogleForDevelopers from "/public/images/sponsors/community/logo_google_for_developers.png";
import Jetbrains from "/public/images/sponsors/community/logo_jetbrains.webp";

// PUBLISHER
import { SPONSORS } from "@/constants/sponsors";
import styled from "@emotion/styled";
import { MouseEventHandler } from "react";
import Decoding from "/public/images/sponsors/publisher/logo_decoding.webp";
import GoldenRabbit from "/public/images/sponsors/publisher/logo_golden_rabbit.png";
import Hanbit from "/public/images/sponsors/publisher/logo_hanbitmedia.webp";
import Jpub from "/public/images/sponsors/publisher/logo_jpub.webp";

const SponsorSection = styled.section({
  marginBottom: 40,
});

const Sponsors = () => {
  const handleClickLogo: MouseEventHandler<HTMLImageElement> = (e) => {
    const { id } = e.currentTarget;
    const link = SPONSORS.find((sponsor) => sponsor.name === id)?.link;
    if (link) {
      window.open(link, "_blank");
    }
  };
  return (
    <Content>
      <h1>Sponsors</h1>
      <SponsorSection>
        <p className='mb-2 text-3xl font-bold uppercase'>platinum</p>
        <div className='platinumColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            onClick={handleClickLogo}
            id='현대자동차'
            src={Hyundai}
            alt={"Hyundai Motors"}
            width={800}
            height={220}
            quality={100}
            className='h-[170px] cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </SponsorSection>
      <SponsorSection>
        <p className='mb-2 text-3xl font-bold uppercase'>gold</p>
        <div className='goldColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            onClick={handleClickLogo}
            id='드림어스컴퍼니'
            src={Dreamus}
            alt={"Dreamus"}
            height={120}
            quality={100}
            className='h-[155px] cursor-pointer bg-white object-contain p-2'
          />
          <Image
            onClick={handleClickLogo}
            id='당근마켓'
            src={Karrot}
            alt={"Karrot"}
            height={130}
            quality={100}
            className='h-[155px] cursor-pointer bg-white object-contain p-2'
          />
          <Image
            onClick={handleClickLogo}
            id='메가존소프트'
            src={Megazon}
            alt={"Megazon"}
            height={120}
            quality={100}
            className='h-[155px] cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </SponsorSection>
      <SponsorSection>
        <p className='mb-2 text-3xl font-bold uppercase'>silver</p>
        <div className='silverColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            onClick={handleClickLogo}
            id='오픈업'
            src={Openup}
            alt={"Openup"}
            height={120}
            quality={100}
            className='cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </SponsorSection>
      <SponsorSection>
        <p className='mb-2 text-3xl font-bold uppercase'>bronze</p>
        <div className='bronzeColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            onClick={handleClickLogo}
            id='AB180'
            src={AB180}
            alt={"AB180"}
            height={80}
            quality={100}
            className='cursor-pointer bg-white object-contain p-2'
          />
          <Image
            onClick={handleClickLogo}
            id='오누이(설탭)'
            src={Onuii}
            alt={"Onuii"}
            height={80}
            quality={100}
            className='cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </SponsorSection>
      <SponsorSection>
        <p className='mb-2 text-3xl font-bold uppercase'>community</p>
        <div className='etcColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            onClick={handleClickLogo}
            id='GoogleForDevelopers'
            src={GoogleForDevelopers}
            alt={"GoogleForDevelopers"}
            height={80}
            quality={100}
            className='cursor-pointer bg-white object-contain p-2'
          />
          <Image
            onClick={handleClickLogo}
            id='Awskrug'
            src={Awskrug}
            alt={"Awskrug"}
            height={160}
            quality={100}
            className='cursor-pointer bg-white object-contain p-2'
          />
          <Image
            onClick={handleClickLogo}
            id='Jetbrains'
            src={Jetbrains}
            alt={"Jetbrains"}
            height={140}
            quality={100}
            className='cursor-pointer bg-white object-contain p-2'
          />
        </div>
      </SponsorSection>
      <SponsorSection>
        <p className='mb-2 text-3xl font-bold uppercase'>publisher</p>
        <div className='etcColorGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-lg:flex-col max-lg:items-center'>
          <Image
            onClick={handleClickLogo}
            id='GoldenRabbit'
            src={GoldenRabbit}
            alt={"GoldenRabbit"}
            width={200}
            height={60}
            quality={100}
            className='cursor-pointer p-2'
          />
          <Image
            onClick={handleClickLogo}
            id='Hanbit'
            src={Hanbit}
            alt={"Hanbit"}
            height={90}
            quality={100}
            className='cursor-pointer object-contain p-2'
          />
          <Image
            onClick={handleClickLogo}
            id='Decoding'
            src={Decoding}
            alt={"Decoding"}
            height={80}
            quality={100}
            className='cursor-pointer object-contain p-2'
          />
          <Image
            onClick={handleClickLogo}
            id='Jpub'
            src={Jpub}
            alt={"Jpub"}
            height={120}
            quality={100}
            className='cursor-pointer object-contain p-2'
          />
        </div>
      </SponsorSection>
    </Content>
  );
};

export default Sponsors;
