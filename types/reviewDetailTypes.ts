import { Aroma, ReviewUser } from './wineDetailTypes';

export interface ReviewDetailType {
  id: number;
  rating: number;
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  aroma: Aroma[];
  content: string;
  createdAt: Date;
  updatedAt: Date;
  user: ReviewUser;
  isLiked?: boolean;
  wineId: number;
  teamId: string;
}
