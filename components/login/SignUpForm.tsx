import { useForm, SubmitHandler } from 'react-hook-form';

interface SignUpFormData {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const SignUpSubmit: SubmitHandler<SignUpFormData> = (data, event) => {
    event?.preventDefault();
  };

  return (
    <form method="post" onSubmit={handleSubmit(SignUpSubmit)}>
      <label htmlFor="email">이메일</label>
      <input id="email" placeholder="wine@email.com" {...register('email')} />
      <span>{errors.email?.message}</span>
      <label htmlFor="nickname">닉네임</label>
      <input id="nickname" placeholder="wine" {...register('nickname')} />
      <span>{errors.nickname?.message}</span>
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        placeholder="영문, 숫자 포함 8자 이상"
        {...register('password')}
      />
      <span>{errors.password?.message}</span>
      <label htmlFor="passwordConfirmation">비밀번호 확인</label>
      <input
        id="passwordConfirmation"
        placeholder="비밀번호 확인"
        {...register('passwordConfirmation')}
      />
      <span>{errors.passwordConfirmation?.message}</span>
      <button type="submit">회원가입</button>
    </form>
  );
}
