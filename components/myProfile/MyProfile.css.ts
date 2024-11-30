import styled from 'styled-components';
import Image from 'next/image';
import media from '@/styles/mediaQuery';
import DefaultImage from '@/public/icons/profile_default.svg';

export const ProfileContainer = styled.div`
  width: 283px;
  height: 583px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid var(--gray-300, #cfdbea);
  background: var(--white, #fff);
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.04);

  ${media.tablet`
    width:100%;
    height:247px;
    gap:30px;
  `}
  ${media.mobile`
    width:100%;
    height: 241px;
    gap:20px;
  `}
`;

export const InfoContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${media.tablet`
    width: 624px;
    flex-direction: row;
  `}
  ${media.mobile`
    width:303px;
    gap:16px;
  `}
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${media.tablet`
    align-items:flex-start;
  `}
  ${media.mobile`
    gap:0px;
  `}
`;

export const ProfileImageWrapper = styled.div`
  width: 164px;
  height: 164px;
  position: relative;
  border-radius: 50%;
  ${media.tablet`
    width:80px;
    height:80px;
  `}
  ${media.mobile`
    width:60px;
    height:60px;
  `}
`;

export const ProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DefaultProfileImage = styled(DefaultImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserName = styled.div`
  color: var(--gray-gray800);
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  ${media.mobile`
    font-size: 20px;
  `}
`;

export const UserEmail = styled.div`
  color: var(--gray-500);
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  ${media.mobile`
    font-size: 14px;
  `}
`;

export const NameEditContainer = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  ${media.tablet`
    width:624px;
  `}
  ${media.mobile`
    width:303px;
    gap:8px;
  `}
`;

export const ContainerTitleWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const ContainerTitle = styled.div`
  color: var(--gray-800);
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  ${media.mobile`
    font-size:14px;
  `}
`;

export const NameEdit = styled.input`
  display: flex;
  height: 48px;
  padding: 14px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid var(--gray-300);
  &::placeholder {
    color: var(--gray-500);
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
  ${media.tablet`
    width:100%;
  `}
  ${media.mobile`
    height:42px;
    border-radius:12px;
    &::placeholder {
      font-size:14px;
      color: var(--gray-500);
    }
  `}
`;

export const NameEditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${media.tablet`
    flex-direction:row;
    gap:24px;
  `}
  ${media.mobile`
    flex-direction:column;
    gap:6px;
  `}
`;

export const EditButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  ${media.tablet`
    width:116px;
  `}
  ${media.mobile`
    width:100%;
  `}
`;

export const EditButton = styled.button`
  display: flex;
  width: 96px;
  height: 42px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--purple-100);
  color: var(--white);
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
`;
