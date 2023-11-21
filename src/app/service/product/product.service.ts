import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getAll(): Product[] {
    return [
      {
        id: 18,
        name: 'Angular Blue Boots',
        description:
          'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
        price: 180,
        pictureUrl:
          'https://skinet.trycatchlearn.com/content/images/products/boot-ang1.png',
        productType: 'Boots',
        productBrand: 'Angular',
      },
      {
        id: 17,
        name: 'Angular Purple Boots',
        description:
          'Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.',
        price: 150,
        pictureUrl:
          'https://skinet.trycatchlearn.com/content/images/products/boot-ang2.png',
        productType: 'Boots',
        productBrand: 'Angular',
      },
      {
        id: 12,
        name: 'Angular Speedster Board 2000',
        description:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',
        price: 200,
        pictureUrl:
          'https://skinet.trycatchlearn.com/content/images/products/sb-ang1.png',
        productType: 'Boards',
        productBrand: 'Angular',
      },
      {
        id: 8,
        name: 'Blue Code Gloves',
        description:
          'Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.',
        price: 18,
        pictureUrl:
          'https://skinet.trycatchlearn.com/content/images/products/glove-code1.png',
        productType: 'Gloves',
        productBrand: 'VS Code',
      },
      {
        id: 11,
        name: 'Core Blue Hat',
        description:
          'Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',
        price: 10,
        pictureUrl:
          'https://skinet.trycatchlearn.com/content/images/products/hat-core1.png',
        productType: 'Hats',
        productBrand: 'NetCore',
      },
      {
        id: 14,
        name: 'Core Board Speed Rush 3',
        description:
          'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
        price: 180,
        pictureUrl:
          'https://skinet.trycatchlearn.com/content/images/products/sb-core1.png',
        productType: 'Boards',
        productBrand: 'NetCore',
      },
    ];
  }
}
