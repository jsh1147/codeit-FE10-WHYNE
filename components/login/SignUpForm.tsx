import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AxiosError } from 'axios';
import { postSignUp } from '@/apis/auth';
import * as S from './AuthForm.css';

interface SignUpFormData {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

export default function SignUpForm() {
  const { replace } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignUpFormData>();

  const signUpSubmit: SubmitHandler<SignUpFormData> = async (data, event) => {
    event?.preventDefault();

    await postSignUp(data)
      .then(() => {
        window.alert('회원가입되었습니다!\n로그인 페이지로 이동합니다.');
        replace('/login');
      })
      .catch((error: AxiosError<{ message: string }>) => {
        const message = error.response?.data.message as string;

        if (message.includes('이메일')) setError('email', { message });
        if (message.includes('일치'))
          setError('passwordConfirmation', { message });
      });
  };

  return (
    <S.Form method="post" onSubmit={handleSubmit(signUpSubmit)}>
      <S.Label htmlFor="email">이메일</S.Label>
      <S.Input
        type="email"
        id="email"
        placeholder="wine@email.com"
        {...register('email')}
      />
      <S.ErrorText>{errors.email?.message}</S.ErrorText>
      <S.Label htmlFor="nickname">닉네임</S.Label>
      <S.Input
        type="text"
        id="nickname"
        placeholder="wine"
        {...register('nickname')}
      />
      <S.ErrorText>{errors.nickname?.message}</S.ErrorText>
      <S.Label htmlFor="password">비밀번호</S.Label>
      <S.Input
        type="password"
        id="password"
        placeholder="영문, 숫자 포함 8자 이상"
        {...register('password')}
      />
      <S.ErrorText>{errors.password?.message}</S.ErrorText>
      <S.Label htmlFor="passwordConfirmation">비밀번호 확인</S.Label>
      <S.Input
        type="password"
        id="passwordConfirmation"
        placeholder="비밀번호 확인"
        {...register('passwordConfirmation')}
      />
      <S.ErrorText>{errors.passwordConfirmation?.message}</S.ErrorText>
      <S.SubmitButton type="submit">회원가입</S.SubmitButton>
    </S.Form>
  );
}
