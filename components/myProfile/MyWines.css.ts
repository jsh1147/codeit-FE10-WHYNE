import styled from "styled-components";
import Image from "next/image";
import media from '@/styles/mediaQuery';

export const WineListContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    gap:8px;
`;
export const WineItem = styled.div`
    display: inline-flex;
    padding: 24px 40px 30px 40px;
    align-items: flex-start;
    gap: 20px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid var(--gray-300);
    background: var(--white);
    ${media.mobile`
        padding: 16px 20px;
    `}
`;