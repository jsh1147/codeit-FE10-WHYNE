import styled from "styled-components";
import Image from "next/image";
import media from '@/styles/mediaQuery';

export const ProfileContainer = styled.div`
    width:283px;
    height:583px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:48px;
    flex-direction: column;
    border-radius: 16px;
    border: 1px solid var(--gray-gray300, #CFDBEA);
    background: var(--white-white, #FFF);
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.04);
`;
export const InfoContainer = styled.div`
    width:100%;
    align-items:center;
    display: flex;
    flex-direction: column;
    gap:32px;
`;
export const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:16px;
`;
export const ProfileImageWrapper = styled.div`
    width: 164px;
    height: 164px;
    overflow: hidden;
    border-radius: 50%;
`;

export const ProfileImage = styled(Image)`
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
`;
export const UserEmail = styled.div`
    color: var(--gray-500);
    font-size: 16px;
    font-weight: 400;
    line-height: 26px; 
`;
export const NameEditContainer = styled.div`
    width:240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:10px;
`;
export const ContainerTitleWrapper = styled.div`
    width:100%;
    display: flex;
`;
export const ContainerTitle = styled.div`
    color: var(--gray-800);
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
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
        color: var(--gray500);
        font-size: 16px;
        font-weight: 400;
        line-height: 26px; 
    }
`;
export const EditButtonWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: right;
`;
export const EditButton = styled.div`
    display: flex;
    width: 96px;
    height: 42px;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: var(--main-main, #6A42DB);

    color: var(--white);
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px; 
`;