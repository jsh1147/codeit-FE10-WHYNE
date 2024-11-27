import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AxiosError } from 'axios';
import { postSignUp } from '@/apis/auth';

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
    <form method="post" onSubmit={handleSubmit(signUpSubmit)}>
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        id="email"
        placeholder="wine@email.com"
        {...register('email')}
      />
      <span>{errors.email?.message}</span>
      <label htmlFor="nickname">닉네임</label>
      <input
        type="text"
        id="nickname"
        placeholder="wine"
        {...register('nickname')}
      />
      <span>{errors.nickname?.message}</span>
      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        id="password"
        placeholder="영문, 숫자 포함 8자 이상"
        {...register('password')}
      />
      <span>{errors.password?.message}</span>
      <label htmlFor="passwordConfirmation">비밀번호 확인</label>
      <input
        type="email"
        id="passwordConfirmation"
        placeholder="비밀번호 확인"
        {...register('passwordConfirmation')}
      />
      <span>{errors.passwordConfirmation?.message}</span>
      <button type="submit">회원가입</button>
    </form>
  );
}
