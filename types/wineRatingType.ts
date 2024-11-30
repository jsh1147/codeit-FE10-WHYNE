import {
  RATING_30_35,
  RATING_35_40,
  RATING_40_45,
  RATING_45_50,
  RATING_ALL,
} from '@/constants/wineRating';

export type RatingType =
  | typeof RATING_ALL
  | typeof RATING_45_50
  | typeof RATING_40_45
  | typeof RATING_35_40
  | typeof RATING_30_35;
