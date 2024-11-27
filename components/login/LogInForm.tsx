import { useForm, SubmitHandler } from 'react-hook-form';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LogInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const logInSubmit: SubmitHandler<LoginFormData> = (data, event) => {
    event?.preventDefault();
  };

  return (
    <form method="post" onSubmit={handleSubmit(logInSubmit)}>
      <label htmlFor="email">이메일</label>
      <input id="email" placeholder="이메일 입력" {...register('email')} />
      <span>{errors.email?.message}</span>
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        placeholder="비밀번호 입력"
        {...register('password')}
      />
      <span>{errors.password?.message}</span>
      <button type="submit">로그인</button>
    </form>
  );
}
