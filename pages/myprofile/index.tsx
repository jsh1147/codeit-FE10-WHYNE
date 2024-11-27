import { useState } from 'react';
import MyReviews from '@/components/myProfile/MyReviews';
import MyWines from '@/components/myProfile/MyWines';
import Profile from '@/components/myProfile/Profile';
import DeleteModal from '@/components/common/DeleteModal'; 
import * as S from '@/styles/myProfile.css';
import { deleteReview } from '@/apis/ReviewDeleteEditApis';
import { useRouter } from 'next/router';
export default function MyProfile() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'reviews' | 'wines'>('reviews');
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false); 
    const [deleteReviewId, setDeleteReviewId] = useState<number | null>(null);
    const openDeleteModal = (reviewId: number) => {
        setDeleteReviewId(reviewId);
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setDeleteReviewId(null);
        setDeleteModalOpen(false);
    };
    const handleDeleteReview = async () => {
        if (deleteReviewId !== null) {
            try {
                await deleteReview(deleteReviewId);
                setDeleteModalOpen(false); 
                router.reload();
            } catch (error) {
                console.error('리뷰 삭제 오류:', error);
            }
        }
    };


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
                            {activeTab === 'reviews' && <MyReviews openDeleteModal={openDeleteModal} />}
                        </S.TabContent>
                        <S.TabContent $active={activeTab === 'wines'}>
                            {activeTab === 'wines' && <MyWines />}
                        </S.TabContent>
                    </S.MyProfileContentWrapper>
                </S.MyProfileContentContainer>
            </S.MyProfileContainer>

            {isDeleteModalOpen && (
                <DeleteModal 
                    onClose={closeDeleteModal}
                    onDelete={handleDeleteReview} 
                />
            )}
        </S.MyProfilePageContainer>
    );
}