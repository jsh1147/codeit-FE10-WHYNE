
import Profile from '@/components/myProfile/Profile'
import * as S from '@/styles/myProfile.css';

export default function index() {
    return (
        <S.MyProfilePageContainer>
            <S.MyProfileContainer>
                {/* header */}
                <S.MyPageContentContainer>
                    <Profile />
                    
                </S.MyPageContentContainer>
            </S.MyProfileContainer>
        </S.MyProfilePageContainer>
    );
}
