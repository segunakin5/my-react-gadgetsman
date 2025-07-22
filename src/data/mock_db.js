const productList = [
  {
    productId: '1',
    productName: 'Samsung S25 Ultra',
    productPrice: '₦2,000,000',
    productDescription: 'The latest flagship from Samsung with top-of-the-line features.',
    productImage: '../../public/assets/Samsung-Galaxy-S25-Ultra.webp'
  },
  {
    productId: '2',
    productName: 'Laptop Pro 15',
    productPrice: '₦4,000,000',
    productDescription: 'A powerful laptop designed for professionals and creators.',
    productImage: '../../public/assets/macpro.jpg'
  },
  {
    productId: '3',
    productName: 'Airpod Max',
    productPrice: '₦800,000',
    productDescription: 'Premium wireless headphones with active noise cancellation.',
    productImage: '../../public/assets/airpodpromax.png'
  },
  {
    productId: '4',
    productName: 'Laptop Pro 15',
    productPrice: '₦4,000,000',
    productDescription: 'Same Laptop Pro model, available in different configurations.',
    productImage: '../../public/assets/macpro.jpg'
  },
  {
    productId: '5',
    productName: 'Airpod Max',
    productPrice: '₦800,000',
    productDescription: 'Another listing of Airpod Max for quick access.',
    productImage: '../../public/assets/airpodpromax.png'
  }
];

export function getProductById(productId) {
  return productList.find(product => product.productId === productId);
}

export function getAllProducts(){
    return [...productList];
}