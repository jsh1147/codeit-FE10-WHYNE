import Link from 'next/link';
import styled from 'styled-components';
import media from './mediaQuery';
import * as F from '@/styles/FontStyles';
import BlackLogo from '@/public/icons/logo_black.svg';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 16px;
  background-color: var(--gray-100);
`;

export const HiddenH1 = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  white-space: nowrap;
  clip-path: rect(0 0 0 0);
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 496px;
  padding: 80px 48px;
  border-radius: 16px;
  border: 1px solid var(--gray-300);
  background-color: var(--white);
  filter: drop-shadow(0 2px 10px #0000000a);

  ${media.tablet`
    padding: 64px 48px;
  `}

  ${media.mobile`
    padding: 56px 20px;
  `}
`;

export const LogoLink = styled(Link)`
  margin-bottom: 48px;

  ${media.mobile`
    margin-bottom: 40px;
  `}
`;

export const Logo = styled(BlackLogo)`
  width: 98px;
  height: 30px;
`;

export const SignUpText = styled.span`
  margin-top: 20px;
  ${F.TextLgRegular}

  ${media.mobile`
    margin-top: 8px;
    ${F.TextMdRegular}
  `}
`;

export const MoveLink = styled(Link)`
  margin-left: 14px;
  ${F.TextLgMedium}
  color: var(--purple-100);
  text-decoration: underline;

  ${media.mobile`
    margin-left: 8px;
    ${F.TextMdMedium}
  `}
`;
