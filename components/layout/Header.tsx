import { useState, useEffect } from 'react';
import Link from 'next/link';
import Profile from './Profile';
import Image from 'next/image';
import whiteLogo from '@/public/icons/logo_white.svg';

export default function Header() {
  const [token, setToken] = useState<string | null>();

  useEffect(() => {
    setToken(window.localStorage.getItem('accessToken'));
  }, []);

  return (
    <header>
      <div>
        <Link href="/" aria-label="메인 페이지 바로가기">
          <Image src={whiteLogo} alt="WINE 로고" />
        </Link>
        {token === undefined ? undefined : token ? (
          <Profile />
        ) : (
          <div>
            <Link href="/login">로그인</Link>
            <Link href="/signup">회원가입</Link>
          </div>
        )}
      </div>
    </header>
  );
}
