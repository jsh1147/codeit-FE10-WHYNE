import React, { useState, useEffect } from 'react';
import { instance } from '@/apis/instance';
import { ReviewsType } from '@/types/wineDetailTypes';
import { translateAroma } from './TranslateAroma';
import { formatRelativeTime } from './FormatRelativeTime';
import * as S from './ReviewList.css';
import { AxiosError } from 'axios';

interface WineReviewsProps {
  reviews: ReviewsType[];
}

const Slider: React.FC<{ value: number }> = ({ value }) => (
  <S.StyledSlider type="range" min={0} max={5} value={value} disabled />
);

export const ReviewList: React.FC<WineReviewsProps> = ({
  reviews: initialReviews,
}) => {
  const [reviews, setReviews] = useState(initialReviews);
  const [collapsedReviews, setCollapsedReviews] = useState(
    initialReviews.map(() => false),
  );

  const [likesState, setLikesState] = useState(
    initialReviews.map((review) => review.isLiked),
  );

  const [isOpen, setIsOpen] = useState(
    Array(initialReviews.length).fill(false),
  );

  useEffect(() => {
    setReviews(initialReviews);
    setCollapsedReviews(initialReviews.map(() => false));
    setLikesState(initialReviews.map((review) => review.isLiked));
    setIsOpen(Array(initialReviews.length).fill(false));
  }, [initialReviews]);

  const toggleDropdown = (index: number) => {
    setIsOpen((prev) => prev.map((open, i) => (i === index ? !open : false)));
  };

  const toggleCollapse = (index: number) => {
    setCollapsedReviews((prev) =>
      prev.map((collapsed, i) => (i === index ? !collapsed : collapsed)),
    );
  };

  const postLike = async (reviewId: number) => {
    try {
      const response = await instance.post(`Reviews/${reviewId}/like`);
      console.log('좋아요 요청 성공:', response.data);
      setLikesState((prevLikes) =>
        prevLikes.map((liked, i) =>
          reviews[i].id === reviewId ? true : liked,
        ),
      );
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 403) {
        alert('본인이 작성한 리뷰에는 좋아요를 할 수 없습니다.');
      } else {
        console.error('좋아요 요청 중 오류 발생', error);
      }
    }
  };

  const deleteLike = async (reviewId: number) => {
    try {
      const response = await instance.delete(`Reviews/${reviewId}/like`);
      console.log('좋아요 취소 성공:', response.data);
      setLikesState((prevLikes) =>
        prevLikes.map((liked, i) =>
          reviews[i].id === reviewId ? false : liked,
        ),
      );
    } catch (error) {
      console.error('좋아요 취소 중 오류 발생', error);
    }
  };

  const deleteReview = async (reviewId: number) => {
    try {
      const response = await instance.delete(`reviews/${reviewId}`);
      console.log('리뷰 삭제 성공', response.data);
      setReviews((prev) => prev.filter((review) => review.id !== reviewId));
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 403) {
        alert('리뷰 작성자만 삭제할 수 있습니다.');
      } else {
        console.error('리뷰 삭제 중 오류 발생', error);
      }
    }
  };

  return (
    <S.ReviewListContainer>
      <S.ReviewListTitle>리뷰 목록</S.ReviewListTitle>
      {reviews.length === 0 ? (
        <S.NoReviewsMessage>
          아직 리뷰가 없네요~? <br /> <br />이 와인의 첫 번째 감별사가 될 기회를
          놓치지 마세요!
        </S.NoReviewsMessage>
      ) : (
        reviews.map((review, index) => (
          <S.ReviewItemOutline key={review.id}>
            <S.ReviewItem>
              <S.ReviewHeader>
                <S.UserContainer>
                  {review.user.image ? (
                    <S.ReviewUserImage
                      src={review.user.image}
                      alt={`${review.user.nickname}의 프로필`}
                    />
                  ) : (
                    <S.ProfileDefaultIcon />
                  )}
                  <S.UserNameContainer>
                    <S.ReviewUserName>{review.user.nickname}</S.ReviewUserName>
                    {formatRelativeTime(review.createdAt)}
                  </S.UserNameContainer>
                </S.UserContainer>
                <S.LikeMoreContainer>
                  <S.LikeButton
                    onClick={() =>
                      likesState[index]
                        ? deleteLike(review.id)
                        : postLike(review.id)
                    }
                  >
                    {likesState[index] ? <S.LikedIcon /> : <S.LikeIcon />}
                  </S.LikeButton>
                  <S.Dot3Button onClick={() => toggleDropdown(index)}>
                    <S.Dot3Icon />
                    {isOpen[index] && (
                      <S.DropdownList>
                        <ul>
                          <li>
                            <S.DropdownItem>수정하기</S.DropdownItem>
                          </li>
                          <li>
                            <S.DropdownItem
                              onClick={() => deleteReview(review.id)}
                            >
                              삭제하기
                            </S.DropdownItem>
                          </li>
                        </ul>
                      </S.DropdownList>
                    )}
                  </S.Dot3Button>
                </S.LikeMoreContainer>
              </S.ReviewHeader>
              <S.AromaRatingContainer>
                <S.AromaContainer>
                  {review.aroma.map((aroma, aromaIndex) => (
                    <S.ReviewAroma key={aromaIndex}>
                      {translateAroma([aroma])}
                    </S.ReviewAroma>
                  ))}
                </S.AromaContainer>
                <S.ReviewRating>
                  <S.ReviewRatingStar />
                  <p>{review.rating.toFixed(1)}</p>
                </S.ReviewRating>
              </S.AromaRatingContainer>
              <S.Content>{review.content}</S.Content>
              {!collapsedReviews[index] && (
                <div>
                  {[
                    {
                      title: '바디감',
                      labelLeft: '가벼워요',
                      labelRight: '진해요',
                      value: review.lightBold,
                    },
                    {
                      title: '타닌',
                      labelLeft: '부드러워요',
                      labelRight: '떫어요',
                      value: review.smoothTannic,
                    },
                    {
                      title: '당도',
                      labelLeft: '드라이해요',
                      labelRight: '달아요',
                      value: review.drySweet,
                    },
                    {
                      title: '산미',
                      labelLeft: '안셔요',
                      labelRight: '많이셔요',
                      value: review.softAcidic,
                    },
                  ].map((balance, idx) => (
                    <S.WineBalanceContainer key={idx}>
                      <S.WineBalanceTitle>{balance.title}</S.WineBalanceTitle>
                      <S.WineBalanceLabel>
                        {balance.labelLeft}
                      </S.WineBalanceLabel>
                      <Slider value={balance.value} />
                      <S.WineBalanceLabel>
                        {balance.labelRight}
                      </S.WineBalanceLabel>
                    </S.WineBalanceContainer>
                  ))}
                </div>
              )}
              <S.CollapseButtonContainer>
                <button onClick={() => toggleCollapse(index)}>
                  {collapsedReviews[index] ? (
                    <S.ExpandIcon />
                  ) : (
                    <S.CollapseIcon />
                  )}
                </button>
              </S.CollapseButtonContainer>
            </S.ReviewItem>
          </S.ReviewItemOutline>
        ))
      )}
    </S.ReviewListContainer>
  );
};
