import { useForm, SubmitHandler } from 'react-hook-form';
import { AxiosError } from 'axios';
import { postLogIn } from '@/apis/auth';
import { useUser } from '@/store/UserContext';
import * as S from './AuthForm.css';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LogInForm() {
  const { setUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>();

  const logInSubmit: SubmitHandler<LoginFormData> = async (data, event) => {
    event?.preventDefault();

    await postLogIn(data)
      .then(
        ({ user: { email, nickname, image }, accessToken, refreshToken }) => {
          localStorage.setItem('email', email);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          if (setUser) setUser({ email, nickname, image });

          window.alert('로그인되었습니다!\n즐거운 WINE 되세요.');
        },
      )
      .catch((error: AxiosError<{ message: string }>) => {
        const message = error.response?.data.message as string;

        if (message.includes('이메일')) setError('email', { message });
        if (message.includes('비밀번호')) setError('password', { message });
      });
  };

  return (
    <S.Form method="post" onSubmit={handleSubmit(logInSubmit)}>
      <S.Label htmlFor="email">이메일</S.Label>
      <S.Input
        type="email"
        id="email"
        placeholder="이메일 입력"
        {...register('email')}
      />
      <S.ErrorText>{errors.email?.message}</S.ErrorText>
      <S.Label htmlFor="password">비밀번호</S.Label>
      <S.Input
        type="password"
        id="password"
        placeholder="비밀번호 입력"
        {...register('password')}
      />
      <S.ErrorText>{errors.password?.message}</S.ErrorText>
      <S.SubmitButton type="submit">로그인</S.SubmitButton>
    </S.Form>
  );
}
