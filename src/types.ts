export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'mains' | 'sides' | 'soups';
  badge?: string;
  dietary?: string;
}

export interface CustomerReview {
  id: string;
  quote: string;
  author: string;
  rating: number;
  highlight: string;
  date?: string;
}

export interface DayHours {
  day: string;
  short: string;
  hours: string;
  isOpen: boolean;
}
