import styled from 'styled-components';

export const Container = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  border: 1px solid var(--gray-300);
  border-radius: 50px;
  background-color: #fff;
  padding: 11px 20px;
  max-width: 800px;
`;

export const SearchBarInput = styled.input`
  border: none;
  flex: 1;
  background-color: inherit;
  margin-left: 4px;

  &::placeholder {
    color: var(--gray-500);
    font-size: 16px;
  }

  &:focus {
    outline: none;
  }
`;
