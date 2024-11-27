import { useForm, SubmitHandler } from 'react-hook-form';
import { AxiosError } from 'axios';
import { postLogIn } from '@/apis/auth';
import { useUser } from '@/store/UserContext';

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
    <form method="post" onSubmit={handleSubmit(logInSubmit)}>
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        id="email"
        placeholder="이메일 입력"
        {...register('email')}
      />
      <span>{errors.email?.message}</span>
      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        id="password"
        placeholder="비밀번호 입력"
        {...register('password')}
      />
      <span>{errors.password?.message}</span>
      <button type="submit">로그인</button>
    </form>
  );
}
