import LogInForm from '@/components/login/LogInForm';
import SocialLogIn from '@/components/login/SocialLogIn';
import * as S from '@/styles/auth.css';

export default function LogIn() {
  return (
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
  );
}

LogIn.noLayout = true;
