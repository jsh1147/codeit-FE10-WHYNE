import { ReviewsType } from '@/types/wineDetailTypes';

interface WineReviewsProps {
  reviews: ReviewsType[];
}

export const ReviewList: React.FC<WineReviewsProps> = ({ reviews }) => {
  return (
    <div>
      {reviews.map((reviews) => (
        <div key={reviews.id}>
          <h3>
            {reviews.user.image}
            {reviews.user.nickname}
            {new Date(reviews.createdAt).toLocaleString()}
          </h3>
          <p>{reviews.aroma.join(', ')}</p>
          <p>{reviews.content}</p>
          <div>
            바디감
            <p>가벼워요 {reviews.lightBold} 진해요</p>
          </div>
          <div>
            타닌
            <p>부드러워요 {reviews.smoothTannic} 떫어요</p>
          </div>
          <div>
            당도
            <p>드라이해요 {reviews.drySweet} 달아요</p>
          </div>
          <div>
            산미
            <p>안셔요 {reviews.softAcidic} 많이셔요</p>
          </div>
        </div>
      ))}
    </div>
  );
};
