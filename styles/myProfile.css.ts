import styled from 'styled-components';
import media from '@/styles/mediaQuery';

export const MyProfilePageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MyProfileContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  gap: 37px;

  ${media.tablet`
    max-width:704px;
  `}
  ${media.mobile`
    max-width:343px;
  `}
`;

export const MyProfileContentWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  ${media.tablet`
    width:100%;
  `}
`;

export const MyProfileHeader = styled.div`
  display: flex;
`;

export const MyProfileHeaderItemWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

export const MyProfileHeaderItem = styled.button<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? 'var(--black)' : 'var(--gray-500)')};
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  cursor: pointer;
  &:hover {
    color: ${({ $active }) => ($active ? 'var(--black)' : '#000')};
  }
  ${media.tablet`
    font-size: 18px;
  `}
  ${media.mobile`
    font-size: 16px;
  `}
`;

export const MyProfileContentContainer = styled.div`
  display: flex;
  margin-top: 147px;
  gap: 60px;
  ${media.tablet`
    flex-direction:column;
    margin-top:117px;
  `}
  ${media.mobile`
    margin-top:105px;
  `}
`;

export const TabContent = styled.div<{ $active: boolean }>`
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transform: ${({ $active }) =>
    $active ? 'translateY(0)' : 'translateY(10px)'};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`;
