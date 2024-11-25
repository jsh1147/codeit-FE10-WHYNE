import styled from "styled-components";
import Image from "next/image";
import media from '@/styles/mediaQuery';

export const WineListContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    gap:8px;
`;

export const WineItemWrapper = styled.div`
    width:100%;
    height:270px;
    display:flex;
    align-items: flex-end;
`;
export const ItemWrapper = styled.div`
    display: flex;
    gap: 40px;
`;
export const WineItem = styled.div`
    width:100%;
    height: 228px;
    padding: 30px 40px 30px 40px;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid var(--gray-300);
    background: var(--white);
    ${media.mobile`
        padding: 16px 20px;
    `}
    display:flex;
`;

export const TotalCount = styled.div`
    position:relative;
    bottom:30px;
    color: var(--purple-100);
    text-align: right;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    ${media.mobile`
        font-size: 12px;
    `}
`;
export const ImageWrapper = styled.div`
    width:76px;
    height:270px;
    position:relative;
    bottom: 65px;
`;
export const WineImage = styled(Image)`
    width:76px;
    height:270px;
    object-fit: cover;
    
`;
export const WineInfoWrapper = styled.div`
    width:300px;
    display: flex;
    flex-direction: column;
    gap:13px;
`;
export const WineNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
`;
export const WineNameText = styled.div`
    color: var(--gray-800);
    font-size: 30px;
    font-weight: 600;
`;
export const WineRegionText = styled.div`
    color: var(--gray-500);
    font-weight: 400;
    line-height: 26px;
`;
export const Price = styled.div`
    display: inline-flex;
    height: 37px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
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
`;
export const KebapIcon = styled(Image)`
    width:20px;
    height:20px;
`;