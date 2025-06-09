import { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Пица Маргарита',
    image: 'https://picsum.photos/200',
    description: 'Класическа италианска пица с домати и моцарела.',
    price: 9.99,
    categoryId: 'pizza',
  },
  {
    id: '2',
    name: 'Суши микс',
    image: 'https://picsum.photos/201',
    description: 'Асортимент от 8 суши ролки.',
    price: 14.99,
    categoryId: 'sushi',
  },
];
