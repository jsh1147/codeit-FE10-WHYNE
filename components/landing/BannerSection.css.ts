import styled from 'styled-components';
import media from '@/styles/mediaQuery';
import Image from 'next/image';
import ColorLogo from '@/public/icons/logo_color.svg';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(1140px, 100%);
  border-radius: 16px;
  background-color: #171a21;
  overflow: hidden;
`;

export const Logo = styled(ColorLogo)`
  width: 98px;
  height: 30px;
  margin: 80px 0 40px;
  transition: 0.2s;

  ${media.tablet`
    margin: 60px 0 30px;
  `}

  ${media.mobile`
    margin: 50px 0 30px;
  `}
`;

export const Description = styled.h2`
  text-align: center;
  font-size: 32px;
  line-height: 46px;
  font-weight: 700;
  color: var(--gray-100);
  transition: 0.2s;

  ${media.tablet`
    font-size: 28px;
    line-height: 40px;
  `}

  ${media.mobile`
    font-size: 20px;
    line-height: 30px;
  `}
`;

export const MoveButton = styled.button`
  width: 256px;
  height: 48px;
  margin: 30px 0 60px;
  border-radius: 999px;
  background-color: var(--purple-100);
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
  transition: 0.2s;

  ${media.tablet`
    margin: 20px 0 30px;
  `}

  ${media.mobile`
    margin: 20px 0 30px;
  `};

  &:hover {
    filter: saturate(70%) contrast(130%);
  }
`;

export const CardsImage = styled(Image)`
  width: 950px;
  height: 170px;
  object-fit: cover;
  object-position: top;
  transition: 0.2s;

  ${media.tablet`
    width: 630px;
    height: 100px;
  `}

  ${media.mobile`
    width: 820px;
    height: 130px;
  `};
`;
