import {wooCommerceClient} from './client';

export const getAllCategories = async () => {
  try {
    const response = await wooCommerceClient.get(`/products/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};


export const getProductById = async (productId) => {
  try {
    const response = await wooCommerceClient.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};


export const getProductVariantions = async (productId) => {
  try {
    const response = await wooCommerceClient.get(`/products/${productId}/variations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};
