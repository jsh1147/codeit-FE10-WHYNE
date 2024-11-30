import { useForm, SubmitHandler } from 'react-hook-form';
import { postLogIn } from '@/apis/authApi';
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
    formState: { isValid, errors },
    setError,
  } = useForm<LoginFormData>({ mode: 'onTouched' });

  const logInSubmit: SubmitHandler<LoginFormData> = async (data, event) => {
    event?.preventDefault();
    if (!isValid) return;

    await postLogIn(data)
      .then(
        ({ user: { email, nickname, image }, accessToken, refreshToken }) => {
          localStorage.setItem('email', email);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          if (setUser) setUser({ email, nickname, image });
        },
      )
      .catch(() => {
        setError('email', {
          message: '이메일 혹은 비밀번호를 확인해 주세요.',
        });
      });
  };

  return (
    <S.Form method="post" onSubmit={handleSubmit(logInSubmit)}>
      <S.Label htmlFor="email">이메일</S.Label>
      <S.Input
        type="email"
        id="email"
        placeholder="이메일 입력"
        {...register('email', {
          required: { value: true, message: '이메일은 필수 입력입니다.' },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: '이메일 형식으로 작성해 주세요.',
          },
        })}
      />
      <S.ErrorText>{errors.email?.message}</S.ErrorText>
      <S.Label htmlFor="password">비밀번호</S.Label>
      <S.Input
        type="password"
        id="password"
        placeholder="비밀번호 입력"
        {...register('password', {
          required: { value: true, message: '비밀번호는 필수 입력입니다.' },
        })}
      />
      <S.ErrorText>{errors.password?.message}</S.ErrorText>
      <S.SubmitButton type="submit">로그인</S.SubmitButton>
    </S.Form>
  );
}
