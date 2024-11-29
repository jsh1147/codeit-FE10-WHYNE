import styled from 'styled-components';
import media from '@/styles/mediaQuery';
import * as F from '@/styles/FontStyles';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  ${F.TextLgMedium}

  ${media.mobile`
    margin-bottom: 4px;
    ${F.TextMdMedium}
  `}
`;

export const Input = styled.input`
  height: 48px;
  margin-bottom: 4px;
  padding-left: 20px;
  border-radius: 16px;
  border: 1px solid var(--gray-300);
  ${F.TextLgRegular}

  ${media.mobile`
    height: 44px;
    border-radius: 12px;
    ${F.TextMdRegular}
  `}

  &::placeholder {
    color: var(--gray-500);
  }

  &:focus {
    outline: 2px solid var(--purple-100);
  }
`;

export const ErrorText = styled.span`
  height: 22px;
  padding-left: 20px;
  ${F.TextSmRegular}
  color: var(--purple-100);

  ${media.mobile`
    height: 18px;
    ${F.TextXsRegular}
  `}
`;

export const SubmitButton = styled.button`
  height: 52px;
  margin-top: 24px;
  border-radius: 16px;
  background-color: var(--purple-100);
  ${F.TextLgBold}
  color: var(--white);

  ${media.mobile`
    height: 48px;
    border-radius: 12px;
    ${F.TextMdRegular}
  `}
`;
