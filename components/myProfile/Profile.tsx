import React, { useState, useEffect } from 'react';
import * as S from './Profile.css';
import ProfileImage from '@/public/images/profileimg_example.png';
import { getMe } from '@/apis/user';

export default function Profile() {
    const [userInfo, setUserInfo] = useState({
        image: '',
        nickname: '',
        name: '',
        email: '',
    });
    const [nickname, setNickname] = useState('');

    const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value);
    };

    useEffect(() => {
        const getUserProfile = async () => {
            try {
              const response = await getMe();
              setUserInfo({
                image: response.image || '',
                nickname: response.nickname || '',
                email: 'user@example.com', // 
              });
            } catch (error) {
              console.error('유저 정보 불러오기 에러:', error);
            }
        };

        getUserProfile(); 
    }, []);

    return (
        <S.ProfileContainer>
            <S.InfoContainer>
                <S.ProfileImageWrapper>
                    <S.ProfileImage
                        src={ProfileImage}
                        alt="프로필 이미지"
                        width={164}
                        height={164}
                    />
                </S.ProfileImageWrapper>
                <S.UserInfoWrapper>
                    <S.UserName>{userInfo.nickname}</S.UserName>
                    <S.UserEmail>{userInfo.email}</S.UserEmail>
                </S.UserInfoWrapper>
            </S.InfoContainer>
            <S.NameEditContainer>
                <S.ContainerTitleWrapper>
                    <S.ContainerTitle>닉네임</S.ContainerTitle>
                </S.ContainerTitleWrapper>
                <S.NameEdit
                    name="nickname"
                    value={nickname}
                    onChange={handleNicknameChange}
                    placeholder="닉네임"
                />
                <S.EditButtonWrapper>
                    <S.EditButton>변경하기</S.EditButton>
                </S.EditButtonWrapper>
            </S.NameEditContainer>
        </S.ProfileContainer>
    );
}