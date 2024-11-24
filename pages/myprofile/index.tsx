
import MyReviews from '@/components/myProfile/MyReviews';
import Profile from '@/components/myProfile/Profile'
import * as S from '@/styles/myProfile.css';

export default function index() {
    return (
        <S.MyProfilePageContainer>
            <S.MyProfileContainer>
                <S.MyPageContentContainer>
                    <Profile />
                    <S.MyProfileContentWrapper>
                        <S.MyProfileHeader>
                            <S.MyProfileHeaderItemWrapper>
                                <S.MyProfileHeaderItem>내가 쓴 후기</S.MyProfileHeaderItem>
                                <S.MyProfileHeaderItem>내가 등록한 와인</S.MyProfileHeaderItem>
                            </S.MyProfileHeaderItemWrapper>
                        </S.MyProfileHeader>
                        <MyReviews />
                    </S.MyProfileContentWrapper>      
                </S.MyPageContentContainer>
            </S.MyProfileContainer>
        </S.MyProfilePageContainer>
    );
}
