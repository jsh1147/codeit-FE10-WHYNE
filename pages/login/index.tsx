import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useUser } from '@/store/UserContext';
import LogInForm from '@/components/login/LogInForm';
import SocialLogIn from '@/components/login/SocialLogIn';
import * as S from '@/styles/auth.css';

export default function LogIn() {
  const { replace } = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (user) replace('/');
  }, [user, replace]);

  return (
    <>
      <Head>
        <title>로그인 - WINE</title>
        <meta
          name="description"
          content="안전한 로그인으로 WINE 서비스를 이용해 보세요."
        />
      </Head>
      {!isLoading && !user && (
        <S.Main>
          <S.HiddenH1>WINE 로그인 페이지</S.HiddenH1>
          <S.Section>
            <S.LogoLink href="/" aria-label="랜딩 페이지 바로가기">
              <S.Logo aria-label="WINE 로고" />
            </S.LogoLink>
            <LogInForm />
            <SocialLogIn />
            <S.SignUpText>
              계정이 없으신가요?
              <S.MoveLink href="/signup" replace>
                회원가입하기
              </S.MoveLink>
            </S.SignUpText>
          </S.Section>
        </S.Main>
      )}
    </>
  );
}

LogIn.noLayout = true;
