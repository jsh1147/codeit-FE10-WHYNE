import styled from 'styled-components';
import media from '@/styles/mediaQuery';
import Image from 'next/image';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(1140px, 100%);
  border-radius: 16px;
  background-color: #171a21;
  overflow: hidden;
`;

export const Logo = styled(Image)`
  width: 98px;
  height: 30px;
  margin: 110px 0 40px;
  transition: 0.2s;

  ${media.tablet`
    margin: 80px 0 40px;
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

export const CardsImage = styled(Image)`
  width: 950px;
  height: 170px;
  margin-top: 110px;
  object-fit: cover;
  object-position: top;
  transition: 0.2s;

  ${media.tablet`
    width: 630px;
    height: 100px;
    margin-top: 70px;
  `}

  ${media.mobile`
    width: 820px;
    height: 130px;
    margin-top: 100px;
  `};
`;
