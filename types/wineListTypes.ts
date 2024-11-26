export interface Wine {
  id: number;
  name: string;
  image: string;
  avgRating: number;
}

export interface WineDetails {
  id: number;
  name: string;
  region: string;
  image: string;
  price: number;
  avgRating: number;
  reviewCount: number;
  recentReview: {
    content: string;
  };
}
