import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '@/store/UserContext';
import Profile from './Profile';
import * as S from './Header.css';

export default function Header() {
  const { isLoading, user } = useUser();
  const { pathname, reload } = useRouter();

  const handleLogoClick = () => {
    if (pathname === '/') reload();
  };

  return (
    <S.Header>
      <S.HeaderContainer>
        <Link
          href="/"
          onClick={handleLogoClick}
          aria-label="메인 페이지 바로가기"
        >
          <S.Logo aria-label="WINE 로고" />
        </Link>
        {/* {!isLoading &&
          (user ? (
            <Profile />
          ) : (
            <S.AccountBox>
              <Link href="/login">로그인</Link>
              <Link href="/signup">회원가입</Link>
            </S.AccountBox>
          ))}  */}
      </S.HeaderContainer>
    </S.Header>
  );
}
