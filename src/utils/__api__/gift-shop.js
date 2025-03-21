import { cache } from "react";
import axios from "utils/axiosInstance";
const getMainCarouselData = cache(async () => {
  const response = await axios.get("/api/gift-shop/main-carousel");
  return response.data;
});
const getCategoryNavigation = cache(async () => {
  const response = await axios.get("/api/gift-shop-navigation");
  return response.data;
});
const getPopularProducts = cache(async () => {
  const response = await axios.get("/api/gift-shop/products?tag=popular");
  return response.data;
});
const getTopSailedProducts = cache(async () => {
  const response = await axios.get("/api/gift-shop/products?tag=top-sailed");
  return response.data;
});
const getAllProducts = cache(async category => {
  const response = await axios.get("/api/gift-shop/products", {
    params: {
      category
    }
  });
  return response.data;
});
const getServiceList = cache(async () => {
  const response = await axios.get("/api/gift-shop/service-list");
  return response.data;
});
const getTopCategories = cache(async () => {
  const response = await axios.get("/api/gift-shop/top-categories");
  return response.data;
});
const getCategory = cache(async category => {
  const response = await axios.get("/api/gift-shop/category", {
    params: {
      category
    }
  });
  return response.data;
});
export default {
  getCategory,
  getAllProducts,
  getServiceList,
  getTopCategories,
  getPopularProducts,
  getMainCarouselData,
  getTopSailedProducts,
  getCategoryNavigation
};