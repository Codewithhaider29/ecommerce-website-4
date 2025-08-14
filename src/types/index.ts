export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'watches' | 'earbuds' | 'bags' | 'accessories';
  image: string;
  featured?: boolean;
  description: string;
  colors?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

export interface NavItem {
  label: string;
  href: string;
}