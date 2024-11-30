import styled, { css } from 'styled-components';
import media from '@/styles/mediaQuery';
import Image from 'next/image';
import DefaultImage from '@/public/icons/profile_default.svg';

export const ProfileButton = styled.button`
  border-radius: 100%;
`;

const ImageCss = css`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid var(--gray-300);
  background-color: var(--gray-300);

  ${media.mobile`
    width: 30px;
    height: 30px;
  `};
`;

export const ProfileImage = styled(Image)`
  ${ImageCss}
`;

export const DefaultProfileImage = styled(DefaultImage)`
  ${ImageCss}
`;

export const DropdownList = styled.div`
  position: absolute;
  inset: 65px 60px auto auto;
  border-radius: 16px;
  border: 1px solid var(--gray-300);
  background-color: white;

  ${media.tablet`
    top: 55px;
  `}

  ${media.mobile`
    inset: 45px 20px auto auto;
  `};
`;

export const DropdownItem = styled.button`
  width: 120px;
  height: 48px;
  margin: 4px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-800);

  ${media.mobile`
    width: 96px;
    height: 40px;
    font-size: 14px;
  `};

  &:hover {
    background-color: var(--purple-10);
    color: var(--purple-100);
  }
`;
