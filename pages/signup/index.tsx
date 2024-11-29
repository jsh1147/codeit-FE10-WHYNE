import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useUser } from '@/store/UserContext';
import SignUpForm from '@/components/auth/SignUpForm';
import * as S from '@/styles/auth.css';

export default function SignUp() {
  const { replace } = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (user) replace('/');
  }, [user, replace]);

  return (
    <>
      <Head>
        <title>회원가입 - WINE</title>
        <meta
          name="description"
          content="간단한 회원가입으로 WINE 서비스를 시작해 보세요."
        />
      </Head>
      {!isLoading && !user && (
        <S.Main>
          <S.HiddenH1>WINE 회원가입 페이지</S.HiddenH1>
          <S.Section>
            <S.LogoLink href="/" aria-label="랜딩 페이지 바로가기">
              <S.Logo aria-label="WINE 로고" />
            </S.LogoLink>
            <SignUpForm />
            <S.SignUpText>
              계정이 이미 있으신가요?
              <S.MoveLink href="/login" replace>
                로그인하기
              </S.MoveLink>
            </S.SignUpText>
          </S.Section>
        </S.Main>
      )}
    </>
  );
}

SignUp.noLayout = true;
