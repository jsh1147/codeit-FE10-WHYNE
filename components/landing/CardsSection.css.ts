import styled from 'styled-components';
import media from '@/styles/mediaQuery';
import Image from 'next/image';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 96px;
  width: min(1140px, 100%);

  ${media.mobile`
  gap: 48px;
  `};
`;

export const Card = styled.div<{ $rightGradient?: boolean }>`
  position: relative;
  width: min(640px, 100%);
  height: 320px;
  border-radius: 16px;
  border: 1px solid #e0e6ee;
  background-color: #ebeef4;
  overflow: hidden;
  filter: drop-shadow(4px 4px 10px #e0e6ee40);
  transition: 0.2s;

  ${media.mobile`
    height: 420px;
  `};

  &:after {
    content: '';
    position: absolute;
    ${({ $rightGradient }) =>
      $rightGradient
        ? `
        inset: 0 0 0 auto;
        width: 32px;
        background-image: linear-gradient(270deg, #ebeef4ff, #ebeef400);
      `
        : `
        inset: auto 0 0;
        height: 32px;
        background-image: linear-gradient(0, #ebeef4ff, #ebeef400);
      `}
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 56px 0 0 32px;
  transition: 0.2s;

  ${media.mobile`
    margin: 24px 0 0 24px;
  `};
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  line-height: 32px;
  font-weight: 700;
  color: var(--gray-800);
  transition: 0.2s;

  ${media.mobile`
    font-size: 18px;
    line-height: 26px;
  `};
`;

export const CardDescription = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: var(--gray-500);
  transition: 0.2s;

  ${media.mobile`
    font-size: 12px;
    line-height: 16px;
  `};
`;

const CardImage = styled(Image)`
  position: absolute;
  transition: 0.2s;
`;

export const RecommendImage = styled(CardImage)`
  inset: auto 0 20px auto;
  width: 360px;
  height: 250px;

  ${media.mobile`
    inset: auto -75px 20px auto;
  `};
`;

export const WindImage = styled(CardImage)`
  inset: auto -10px -85px auto;
  width: 343px;
  height: 360px;

  ${media.mobile`
    inset: auto -10px -5px auto;
    width: 280px;
    height: 286px;
  `};
`;

export const FilterImage = styled(CardImage)`
  inset: 175px auto auto 75px;
  width: 143px;
  height: 216px;

  ${media.mobile`
    opacity: 0;
    visibility: hidden;
  `};
`;

export const ReviewImage = styled(CardImage)`
  inset: auto 40px -60px auto;
  width: 272px;
  height: 431px;

  ${media.mobile`
    inset: auto -1px -140px auto;
  `};
`;
