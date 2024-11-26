import React, { useState, useEffect } from 'react';
import * as S from './Profile.css';
import ProfileImage from '@/public/images/profileimg_example.png';
import { getMe } from '@/apis/user';
import { patchNickname } from '@/apis/myProfileApi';

export default function Profile() {
    const [userInfo, setUserInfo] = useState({
        image: '',
        nickname: '',
        email: '',
    });
    const [nickname, setNickname] = useState('');

    const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value);
    };
    const handleNicknameUpdate = async () => {
        try {
            await patchNickname({ nickname });
            setUserInfo((prev) => ({ ...prev, nickname })); 
        } catch (error) {
            console.log('닉네임 변경중 오류 발생:', error)
        }
    }

    useEffect(() => {
        const getUserProfile = async () => {
            try {
              const response = await getMe();
              setUserInfo({
                image: response.image || '',
                nickname: response.nickname,
                email: 'user@example.com', //이메일 받아오는 방법 수정필요
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
                        src={userInfo.image}
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
                <S.NameEditWrapper>
                    <S.NameEdit
                        name="nickname"
                        value={nickname}
                        onChange={handleNicknameChange}
                        placeholder="닉네임"
                    />
                    <S.EditButtonWrapper>
                        <S.EditButton onClick={handleNicknameUpdate}>변경하기</S.EditButton>
                </S.EditButtonWrapper>
                </S.NameEditWrapper>
                
            </S.NameEditContainer>
        </S.ProfileContainer>
    );
}