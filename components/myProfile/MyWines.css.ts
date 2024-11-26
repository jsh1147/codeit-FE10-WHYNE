import styled from "styled-components";
import Image from "next/image";
import media from '@/styles/mediaQuery';
import Icon from '@/public/icons/icon_kebap.svg';

export const WineListContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    gap:8px;
    ${media.mobile`
        gap:16px;
    `}
`;

export const WineItemWrapper = styled.div`
    width:100%;
    height:270px;
    display:flex;
    align-items: flex-end;
    ${media.mobile`
        height:185px;
    `}
`;
export const ItemWrapper = styled.div`
    display: flex;
    gap: 40px;
    height:100%;
    ${media.mobile`
        gap:20px;
    `}
`;
export const WineItem = styled.div`
    width:100%;
    height: 228px;
    padding: 30px 40px 30px 40px;
    align-items: flex-start;
    justify-content: space-between;
    display:flex;
    gap: 40px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid var(--gray-300);
    background: var(--white);
    ${media.mobile`
        padding: 20px 20px;
        height:135px;
    `}
    
`;

export const TotalCount = styled.div`
    position:relative;
    width:40px;
    bottom:30px;
    left:750px;
    color: var(--purple-100);
    text-align: right;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    ${media.tablet`
        left:660px;    
    `}
    ${media.mobile`
        font-size: 12px;
        left:290px;
    `}
`;
export const ImageWrapper = styled.div`
    width:76px;
    height:270px;
    position:relative;
    bottom: 65px;
    ${media.mobile`
        width:53px;
        height:185px;
    `}
`;
export const WineImage = styled(Image)`
    object-fit: cover;
`;
export const WineInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
    justify-content: space-around;
    ${media.mobile`
        gap:4px;
    `}
`;
export const WineNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
    ${media.mobile`
        gap:15px;
    `}
`;
export const WineNameText = styled.div`
    max-width:300px;
    overflow: hidden; 
    text-overflow: ellipsis;
    color: var(--gray-800);
    font-size: 30px;
    font-weight: 600;
    ${media.mobile`
        max-width:187px;
        font-size:20px;
    `}
`;
export const WineRegionText = styled.div`
    color: var(--gray-500);
    font-weight: 400;
    line-height: 26px;
    font-size: 16px;
    ${media.mobile`
        font-size:14px;
    `}
`;
export const Price = styled.div`
    display: inline-flex;
    height: 37px;
    align-items: center;
    flex-shrink: 0;
    ${media.mobile`
        height:36px;
    `}
`;
export const PriceText = styled.div`
    color: var(--purple-100);
    padding: 8px 15px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px; 
    border-radius: 12px;
    background: var(--purple-10);
    ${media.mobile`
        font-size:14px;
        padding:4px 10px;
    `}
`;
export const KebapIcon = styled(Icon)`
    width:20px;
    height:20px;
`;