import styled from 'styled-components';
import media from '@/styles/mediaQuery';
import Image from 'next/image';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;

  ${media.tablet`
    padding: 24px 20px;
  `}

  ${media.mobile`
    padding: 24px 16px;
  `}
`;

export const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1140px, 100%);
  height: 70px;
  padding: 0 60px;
  border-radius: 16px;
  background-color: var(--black);

  ${media.tablet`
    height: 60px;
  `}

  ${media.mobile`
    height: 50px;
    padding: 0 20px;
    border-radius: 12px;
  `}
`;

export const LogoImage = styled(Image)`
  width: 49px;
  height: 15px;
`;

export const AccountDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  font-size: 16px;
  color: var(--gray-100);

  ${media.mobile`
    gap: 20px;
    font-size: 14px;
  `}

  & a {
    transition: 0.2s;

    &:hover {
      color: var(--gray-300);
    }
  }
`;
