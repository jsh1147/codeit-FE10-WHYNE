export interface ReviewUser {
  id: number;
  nickname: string;
  image: string | null;
}

export enum Aroma {
  CHERRY = 'CHERRY',
  BERRY = 'BERRY',
  OAK = 'OAK',
  VANILLA = 'VANILLA',
  PEPPER = 'PEPPER',
  BAKING = 'BAKING',
  GRASS = 'GRASS',
  APPLE = 'APPLE',
  PEACH = 'PEACH',
  CITRUS = 'CITRUS',
  TROPICAL = 'TROPICAL',
  MINERAL = 'MINERAL',
  FLOWER = 'FLOWER',
  TOBACCO = 'TOBACCO',
  EARTH = 'EARTH',
  CHOCOLATE = 'CHOCOLATE',
  SPICE = 'SPICE',
  CARAMEL = 'CARAMEL',
  LEATHER = 'LEATHER',
}

export interface ReviewsType {
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
}

export interface WineDetailTypes {
  id: number;
  name: string;
  region: string;
  image: string;
  price: number;
  type: string;
  avgRating: number;
  reviewCount: number;
  recentReview: {
    id: number;
    rating: number;
    aroma: Aroma[];
    content: string;
    createdAt: Date;
    updatedAt: Date;
    user: ReviewUser;
  } | null;
  userId: number;
  reviews: ReviewsType[];
  avgRatings: Record<string, number>;
}
