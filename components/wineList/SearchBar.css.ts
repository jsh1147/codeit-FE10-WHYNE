import media from '@/styles/mediaQuery';
import styled from 'styled-components';

export const Container = styled.div`
  height: 48px;

  ${media.mobile`
    height: 38px;
    padding: 0 15px;
  `}

  align-items: center;
  border: 1px solid var(--gray-300);
  border-radius: 50px;
  background-color: #fff;
  padding: 11px 20px;
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  .search-icon {
    grid-column: 1;
  }
  .cancel-icon {
    grid-column: 3;
  }
`;

export const SearchBarInput = styled.input`
  grid-column: 2;
  border: none;
  background-color: inherit;
  margin-left: 4px;
  overflow: hidden;

  &::placeholder {
    color: var(--gray-500);
    font-size: 16px;
  }

  &:focus {
    outline: none;
  }
`;
