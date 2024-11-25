import { useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@/store/UserContext';
import sampleImage from '@/public/meta/opengraph.png';
import * as S from './Profile.css';

export default function Profile() {
  const { push } = useRouter();
  const { user, setUser } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMyPageClick = () => {
    push('/myprofile');
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    if (setUser) setUser(undefined);
    push('/');
  };

  return (
    <>
      <button type="button" onClick={handleProfileClick}>
        <S.ProfileImage
          src={user?.image ? user.image : sampleImage}
          alt="프로필 이미지"
        />
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
