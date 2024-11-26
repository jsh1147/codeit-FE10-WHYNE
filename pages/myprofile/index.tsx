import { useState } from 'react';
import MyReviews from '@/components/myProfile/MyReviews';
import MyWines from '@/components/myProfile/MyWines';
import Profile from '@/components/myProfile/Profile';
import * as S from '@/styles/myProfile.css';

export default function MyProfile() {
    const [activeTab, setActiveTab] = useState<'reviews' | 'wines'>('reviews'); 
    console.log(activeTab);
    return (
        <S.MyProfilePageContainer>
            <S.MyProfileContainer>
                <S.MyProfileContentContainer>
                    <Profile />
                    <S.MyProfileContentWrapper>
                        <S.MyProfileHeader>
                            <S.MyProfileHeaderItemWrapper>
                                <S.MyProfileHeaderItem
                                    onClick={() => setActiveTab('reviews')} 
                                    $active={activeTab === 'reviews'} 
                                >
                                    내가 쓴 후기
                                </S.MyProfileHeaderItem>
                                <S.MyProfileHeaderItem
                                    onClick={() => setActiveTab('wines')} 
                                    $active={activeTab === 'wines'} 
                                >
                                    내가 등록한 와인
                                </S.MyProfileHeaderItem>
                            </S.MyProfileHeaderItemWrapper>
                        </S.MyProfileHeader>
                        <S.TabContent $active={activeTab === 'reviews'}>
                            {activeTab === 'reviews' && <MyReviews />}
                        </S.TabContent>
                        <S.TabContent $active={activeTab === 'wines'}>
                            {activeTab === 'wines' && <MyWines />}
                        </S.TabContent>
                    </S.MyProfileContentWrapper>
                </S.MyProfileContentContainer>
            </S.MyProfileContainer>
        </S.MyProfilePageContainer>
    );
}