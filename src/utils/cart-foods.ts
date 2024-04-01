type cartType = {
  id: number;
  foodName: string;
  imagePath: string;
  price: number;
  sale: number;
  stock: number;
  ingredients: string[];
  category: string;
  quantity: number;
}[];

const cartData: cartType = [];

export default cartData;
