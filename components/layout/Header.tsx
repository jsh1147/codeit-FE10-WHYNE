import Link from 'next/link';
import Profile from './Profile';
import { useUser } from '@/store/UserContext';
import whiteLogo from '@/public/icons/logo_white.svg';
import * as S from './Header.css';

export default function Header() {
  const { isLoading, user } = useUser();

  return (
    <S.Header>
      <S.ContainerDiv>
        <Link href="/" aria-label="메인 페이지 바로가기">
          <S.LogoImage src={whiteLogo} alt="WINE 로고" />
        </Link>
        {!isLoading &&
          (user ? (
            <Profile />
          ) : (
            <S.AccountDiv>
              <Link href="/login">로그인</Link>
              <Link href="/signup">회원가입</Link>
            </S.AccountDiv>
          ))}
      </S.ContainerDiv>
    </S.Header>
  );
}
