import { useState } from 'react';
import MyReviews from '@/components/myProfile/MyReviews';
import MyWines from '@/components/myProfile/MyWines';
import Profile from '@/components/myProfile/Profile';
import DeleteModal from '@/components/common/DeleteModal'; 
import * as S from '@/styles/myProfile.css';
import { deleteReview } from '@/apis/DeleteEditApis';
import { deleteWine } from '@/apis/DeleteEditApis';
import { useRouter } from 'next/router';

export default function MyProfile() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'reviews' | 'wines'>('reviews');
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false); 
    const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);
    const [deleteTargetType, setDeleteTargetType] = useState<'review' | 'wine' | null>(null); // 삭제 대상 타입

    const openDeleteModal = (id: number, type: 'review' | 'wine') => {
        setDeleteTargetId(id);
        setDeleteTargetType(type);
        setDeleteModalOpen(true);
    };
    const closeDeleteModal = () => {
        setDeleteTargetId(null);
        setDeleteTargetType(null);
        setDeleteModalOpen(false);
    };

    const handleDelete = async () => {
        if (deleteTargetId !== null && deleteTargetType !== null) {
            try {
                if (deleteTargetType === 'review') {
                    await deleteReview(deleteTargetId);
                } else if (deleteTargetType === 'wine') {
                    await deleteWine(deleteTargetId);
                }
                setDeleteModalOpen(false); 
                router.reload(); 
            } catch (error) {
                console.error(`${deleteTargetType} 삭제 오류:`, error);
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
                            {activeTab === 'reviews' && (
                                <MyReviews openDeleteModal={(id) => openDeleteModal(id, 'review')} />
                            )}
                        </S.TabContent>
                        <S.TabContent $active={activeTab === 'wines'}>
                            {activeTab === 'wines' && (
                                <MyWines openDeleteModal={(id) => openDeleteModal(id, 'wine')} />
                            )}
                        </S.TabContent>
                    </S.MyProfileContentWrapper>
                </S.MyProfileContentContainer>
            </S.MyProfileContainer>

            {isDeleteModalOpen && (
                <DeleteModal 
                    onClose={closeDeleteModal}
                    onDelete={handleDelete} 
                />
            )}
        </S.MyProfilePageContainer>
    );
}