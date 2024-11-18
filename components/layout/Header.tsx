import { useState, useEffect } from 'react';
import Link from 'next/link';
import Profile from './Profile';
import whiteLogo from '@/public/icons/logo_white.svg';
import * as S from './Header.css';

export default function Header() {
  const [token, setToken] = useState<string | null>();

  useEffect(() => {
    setToken(window.localStorage.getItem('accessToken'));
  }, []);

  return (
    <S.Header>
      <S.ContainerDiv>
        <Link href="/" aria-label="메인 페이지 바로가기">
          <S.LogoImage src={whiteLogo} alt="WINE 로고" />
        </Link>
        {token === undefined ? undefined : token ? (
          <Profile />
        ) : (
          <S.AccountDiv>
            <Link href="/login">로그인</Link>
            <Link href="/signup">회원가입</Link>
          </S.AccountDiv>
        )}
      </S.ContainerDiv>
    </S.Header>
  );
}
