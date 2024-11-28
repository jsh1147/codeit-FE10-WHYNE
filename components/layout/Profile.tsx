import { useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@/store/UserContext';
import * as S from './Profile.css';

export default function Profile() {
  const { pathname, push, reload } = useRouter();
  const { user, setUser } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMyPageClick = () => {
    setIsOpen((prev) => !prev);

    if (pathname === '/myprofile') reload();
    else push('/myprofile');
  };

  const handleLogoutClick = () => {
    setIsOpen((prev) => !prev);
    localStorage.removeItem('email');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    if (setUser) setUser(undefined);

    if (pathname === '/') reload();
    push('/');
  };

  return (
    <>
      <button type="button" onClick={handleProfileClick}>
        {user?.image ? (
          <S.ProfileImage src={user.image} alt="프로필 이미지" />
        ) : (
          <S.DefaultProfileImage aria-label="프로필 이미지" />
        )}
      </button>
      {isOpen && (
        <S.DropdownList>
          <ul>
            <li>
              <S.DropdownItem onClick={handleMyPageClick}>
                마이페이지
              </S.DropdownItem>
            </li>
            <li>
              <S.DropdownItem onClick={handleLogoutClick}>
                로그아웃
              </S.DropdownItem>
            </li>
          </ul>
        </S.DropdownList>
      )}
    </>
  );
}
