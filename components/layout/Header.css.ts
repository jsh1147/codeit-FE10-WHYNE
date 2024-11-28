import styled from 'styled-components';
import media from '@/styles/mediaQuery';
import WhiteLogo from '@/public/icons/logo_white.svg';

export const Header = styled.header`
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  background-color: white;

  ${media.tablet`
    padding: 24px 20px;
  `}

  ${media.mobile`
    padding: 24px 16px;
  `}
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1140px, 100%);
  height: 70px;
  padding: 0 60px;
  border-radius: 16px;
  background-color: var(--black);
  transition: 0.2s;

  ${media.tablet`
    height: 60px;
  `}

  ${media.mobile`
    height: 50px;
    padding: 0 20px;
    border-radius: 12px;
  `}
`;

export const Logo = styled(WhiteLogo)`
  width: 49px;
  height: 15px;
`;

export const AccountBox = styled.div`
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
