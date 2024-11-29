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
    watch,
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignUpFormData>({ mode: 'onTouched' });

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
        if (message.includes('Internal'))
          setError('nickname', { message: '이미 사용중인 닉네임입니다.' });
      });
  };

  return (
    <S.Form method="post" onSubmit={handleSubmit(signUpSubmit)}>
      <S.Label htmlFor="email">이메일</S.Label>
      <S.Input
        type="email"
        id="email"
        placeholder="wine@email.com"
        {...register('email', {
          required: { value: true, message: '이메일은 필수 입력입니다.' },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: '이메일 형식으로 작성해 주세요.',
          },
        })}
      />
      <S.ErrorText>{errors.email?.message}</S.ErrorText>
      <S.Label htmlFor="nickname">닉네임</S.Label>
      <S.Input
        type="text"
        id="nickname"
        placeholder="wine"
        {...register('nickname', {
          required: { value: true, message: '닉네임은 필수 입력입니다.' },
          maxLength: {
            value: 20,
            message: '닉네임은 최대 20자까지 가능합니다.',
          },
        })}
      />
      <S.ErrorText>{errors.nickname?.message}</S.ErrorText>
      <S.Label htmlFor="password">비밀번호</S.Label>
      <S.Input
        type="password"
        id="password"
        placeholder="영문, 숫자 포함 8자 이상"
        {...register('password', {
          required: { value: true, message: '비밀번호는 필수 입력입니다.' },
          minLength: { value: 8, message: '비밀번호는 최소 8자 이상입니다.' },
          pattern: {
            value: /^([a-z]|[A-Z]|[0-9]|[!@#$%^&*])+$/,
            message: '비밀번호는 영문, 숫자, 특수문자로만 가능합니다.',
          },
        })}
      />
      <S.ErrorText>{errors.password?.message}</S.ErrorText>
      <S.Label htmlFor="passwordConfirmation">비밀번호 확인</S.Label>
      <S.Input
        type="password"
        id="passwordConfirmation"
        placeholder="비밀번호 확인"
        {...register('passwordConfirmation', {
          required: {
            value: true,
            message: '비밀번호 확인은 필수 입력입니다.',
          },
          validate: {
            value: (value) =>
              value === watch('password') || '비밀번호가 일치하지 않습니다.',
          },
        })}
      />
      <S.ErrorText>{errors.passwordConfirmation?.message}</S.ErrorText>
      <S.SubmitButton type="submit">회원가입</S.SubmitButton>
    </S.Form>
  );
}
