export interface Restaurant {
  id: string;
  name: string;
  about?: string;
  hours?: string;
  rating: number;
  category: string;
  imagePath: string;
  deliveryEstimate: string;
}
