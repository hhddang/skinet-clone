import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterSearch } from 'src/app/models/filterSearch';
import { Product } from 'src/app/models/product';

type Response = {
  page: number;
  productPerPage: number;
  count: number;
  products: Product[];
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
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
      description: 'Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.',
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
    {
      id: 2,
      name: 'Core Purple Boots',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',
      price: 199.99,
      pictureUrl:
        'https://skinet.trycatchlearn.com/content/images/products/boot-core1.png',
      productType: 'Boots',
      productBrand: 'NetCore',
    },
    {
      id: 3,
      name: 'Core Red Boots',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',
      price: 189.99,
      pictureUrl:
        'https://skinet.trycatchlearn.com/content/images/products/boot-core2.png',
      productType: 'Boots',
      productBrand: 'NetCore',
    },
    {
      id: 13,
      name: 'Green Angular Board 3000',
      description: 'Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.',
      price: 150,
      pictureUrl:
        'https://skinet.trycatchlearn.com/content/images/products/sb-ang2.png',
      productType: 'Boards',
      productBrand: 'Angular',
    },
    {
      id: 7,
      name: 'Green Code Gloves',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',
      price: 15,
      pictureUrl:
        'https://skinet.trycatchlearn.com/content/images/products/glove-code2.png',
      productType: 'Gloves',
      productBrand: 'VS Code',
    },
    {
      id: 5,
      name: 'Green React Gloves',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',
      price: 14,
      pictureUrl:
        'https://skinet.trycatchlearn.com/content/images/products/glove-react2.png',
      productType: 'Gloves',
      productBrand: 'React',
    },
    {
      id: 10,
      name: 'Green React Woolen Hat',
      description:
        'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
      price: 8,
      pictureUrl:
        'https://skinet.trycatchlearn.com/content/images/products/hat-react1.png',
      productType: 'Hats',
      productBrand: 'React',
    },
    {
      id: 15,
      name: 'Net Core Super Board',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',
      price: 300,
      pictureUrl:
        'https://skinet.trycatchlearn.com/content/images/products/sb-core2.png',
      productType: 'Boards',
      productBrand: 'NetCore',
    },
    {
      id: 6,
      name: 'Purple React Gloves',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.',
      price: 16,
      pictureUrl:
        'https://skinet.trycatchlearn.com/content/images/products/glove-react1.png',
      productType: 'Gloves',
      productBrand: 'React',
    },
    {
      id: 9,
      name: 'Purple React Woolen Hat',
      description:
        'Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',
      price: 15,
      pictureUrl:
        'https://skinet.trycatchlearn.com/content/images/products/hat-react2.png',
      productType: 'Hats',
      productBrand: 'React',
    },
    {
      id: 16,
      name: 'React Board Super Whizzy Fast',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',
      price: 250,
      pictureUrl:
        'https://skinet.trycatchlearn.com/content/images/products/sb-react1.png',
      productType: 'Boards',
      productBrand: 'React',
    },
    {
      id: 4,
      name: 'Redis Red Boots',
      description:
        'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
      price: 250,
      pictureUrl:
        'https://skinet.trycatchlearn.com/content/images/products/boot-redis1.png',
      productType: 'Boots',
      productBrand: 'Redis',
    },
    {
      id: 1,
      name: 'Typescript Entry Board',
      description:
        'Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.',
      price: 120,
      pictureUrl:
        'https://skinet.trycatchlearn.com/content/images/products/sb-ts1.png',
      productType: 'Boards',
      productBrand: 'Typescript',
    },
  ];

  private productServiceResponse = new BehaviorSubject<Response | undefined>(
    undefined
  );

  getAll(query: FilterSearch) {
    this.query(query);
    return this.productServiceResponse.asObservable();
  }

  query(query: FilterSearch) {
    const { sort, brand, type, search, page, productPerPage } = query;

    let products = this.products;

    // Search filter
    if (search !== '') {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase().trim())
      );
    }

    // Brand filter
    if (brand !== 'all') {
      products = products.filter(
        (product) =>
          product.productBrand.toLowerCase().replaceAll(' ', '-') == brand
      );
    }

    // Type filter
    if (type !== 'all') {
      products = products.filter(
        (product) =>
          product.productType.toLowerCase().replaceAll(' ', '-') == type
      );
    }

    if (sort == 'price-asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (sort == 'price-desc') {
      products.sort((a, b) => b.price - a.price);
    } else {
      products.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }

    // Product count
    const count = products.length;

    // Pagination
    if (count > productPerPage) {
      products = products.slice(
        productPerPage * (page - 1),
        productPerPage * (page - 1) + productPerPage
      );
    }

    this.productServiceResponse.next({
      page: count > productPerPage ? page : 1,
      productPerPage,
      count,
      products,
    });
  }

  getById(id: number) {
    return this.products.filter((product) => product.id == id)[0];
  }
}
