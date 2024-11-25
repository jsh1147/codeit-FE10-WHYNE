import styled from 'styled-components';
import media from '@/styles/mediaQuery';
import {
  TextWineDetailName,
  TextWineDetailNameMobile,
  TextLgRegular,
  Text2lgBold,
  TextLgBold,
  TextMdRegular,
} from '../../public/fonts/FontStyles';

export const WineInfoContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  overflow: hidden;
  align-items: center;
  width: min(1140px, 100%);
  height: 410px;

  ${media.tablet`
    padding: 0 20px;
    height: 400px;
  `}

  ${media.mobile`
    height: 290px;
  `}
`;
export const WineContainer = styled.div`
  display: flex;
  flex-direction: row;
  outline: 1px solid var(--gray-300);
  border-radius: 16px;
  width: min(1138px, 100%);
  height: 260px;
  margin: 1px;

  ${media.mobile`
    height: 190px;
  `}
`;

export const WineImage = styled.div`
  position: absolute;
  width: 58px;
  height: 229px;
  margin-top: 52.5px;
  margin-left: 100px;

  ${media.tablet`
    width: 84px;
    height: 330px;
    margin-left: 60px;
    margin-top: -37.5px;
    `}

  ${media.mobile`
      width: 58px;
      height: 229px;
      margin-left: 20px;
      margin-top: -17.5px;
      `}
`;

export const WineInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 245px;

  ${media.tablet`
    margin-left: 205px;
  `}

  ${media.mobile`
    margin-top: 33px;
    margin-left: 100px;
  `}
`;

export const WineName = styled.div`
  display: flex;
  width: 300px;
  height: 72px;
  ${TextWineDetailName}
  color: var(--gray-800);

  ${media.mobile`
    width: 200px;
    height: 48px;
    ${TextWineDetailNameMobile}
  `}
`;

export const WineRegion = styled.div`
  display: flex;
  width: 198px;
  height: 26px;
  margin-top: 20px;
  color: var(--gray-500);
  ${TextLgRegular};

  ${media.mobile`
    width: 173px;
    height: 24px;
    margin-top: 15px;
    ${TextMdRegular};
  `}
`;

export const WinePrice = styled.div`
  display: flex;
  color: #6a42db;
  background-color: #f1edfc;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  // color: var(--main);
  // background-color: var(--main-10);
  width: 114px;
  height: 37px;
  margin-top: 20px;
  ${Text2lgBold};

  ${media.mobile`
    width: 86px;
    height: 36px;
    margin-top: 15px;
    ${TextLgBold};
  `}
`;
