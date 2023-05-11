import { IProduct } from "../interfaces/product";
import instance from "./instance";

export const getAllProduct = () => {
  return instance.get("/products");
};

export const getOneProduct = (id: number | string) => {
  return instance.get(`/products/${id}`);
};

export const removeProduct = (id: number | string) => {
  return instance.delete(`/products/${id}`);
};

export const createProduct = (product: IProduct) => {
  return instance.post("/products", product);
};

export const updateProduct = (product: IProduct) => {
  return instance.put(`/products/${product.id}`, product);
};
