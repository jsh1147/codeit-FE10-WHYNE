import styled from "styled-components";
import media from '@/styles/mediaQuery';

export const MyProfilePageContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
`;
export const MyProfileContainer = styled.div`
    width:100%;
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
    width:800px;
    display:flex;
    flex-direction: column;
    gap:22px;
`;
export const MyProfileHeader = styled.div`
    display: flex;
`;
export const MyProfileHeaderItemWrapper = styled.div`
    display: flex;
    gap:32px;
`;
export const MyProfileHeaderItem = styled.div`
    color: var(--gray-800);
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
`;
export const MyPageContentContainer = styled.div`
    display: flex;
    margin-top: 147px;
    gap: 60px;
`;