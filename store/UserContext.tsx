import { getMe } from '@/apis/userApi';
import {
  createContext,
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

interface UserProps {
  email: string;
  nickname: string;
  image: string | null;
}

interface UserContextProps {
  isLoading: boolean;
  user?: UserProps;
  setUser?: Dispatch<SetStateAction<UserProps | undefined>>;
}

const UserContext = createContext<UserContextProps>({ isLoading: true });

export function UserProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const email = localStorage.getItem('email');
    const access = localStorage.getItem('accessToken');
    const refresh = localStorage.getItem('refreshToken');
    if (access || refresh || email)
      getMe()
        .then((data) => {
          const { nickname, image } = data;
          setUser({ email: email as string, nickname, image });
        })
        .catch(() => {})
        .finally(() => {
          setIsLoading(false);
        });
    else setIsLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ isLoading, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
