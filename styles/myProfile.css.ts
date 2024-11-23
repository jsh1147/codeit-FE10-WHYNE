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
        max-width:303px;
    `}
`;
export const MyPageContentContainer = styled.div`
    display: flex;
    margin-top: 118px;
    gap: 60px;
`;