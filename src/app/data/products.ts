import { productsFake } from "./productsFake";

interface Products {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  updatedAt: string;
  createdAt: string;
}

export function getProducts(): Products[] | undefined {
  try {
    // const response = await fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=ASC")
    // const data = await response.json()
    // return data.products;
    return productsFake;

  } catch (error) {
    console.log(error);
  }
}