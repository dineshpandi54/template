import { mainCarouselData, products, serviceList, blogs, brands } from "./data";
export const FashionEndpoints = Mock => {
  const bestSell = products.filter(item => item.for.type === "best-selling-product");
  const featureProducts = products.filter(item => item.for.type === "featured-products");

  
// get all products
  Mock.onGet("/api/fashion-3/products?tag=best").reply(() => {
    try {
      return [200, bestSell];
    } catch (err) {
      console.error(err);
      return [500, {
        message: "Internal server error"
      }];
    }
  });

  
// get feature products
  Mock.onGet("/api/fashion-3/products?tag=feature").reply(() => {
    try {
      return [200, featureProducts];
    } catch (err) {
      console.error(err);
      return [500, {
        message: "Internal server error"
      }];
    }
  });

  
// get all carousel data
  Mock.onGet("/api/fashion-3/main-carousel").reply(async () => {
    try {
      return [200, mainCarouselData];
    } catch (err) {
      console.error(err);
      return [500, {
        message: "Internal server error"
      }];
    }
  });

  
// get all service
  Mock.onGet("/api/fashion-3/services").reply(async () => {
    try {
      return [200, serviceList];
    } catch (err) {
      console.error(err);
      return [500, {
        message: "Internal server error"
      }];
    }
  });

  
// get all blogs
  Mock.onGet("/api/fashion-3/blogs").reply(async () => {
    try {
      return [200, blogs];
    } catch (err) {
      console.error(err);
      return [500, {
        message: "Internal server error"
      }];
    }
  });

  
// get all brands
  Mock.onGet("/api/fashion-3/brands").reply(async () => {
    try {
      return [200, brands];
    } catch (err) {
      console.error(err);
      return [500, {
        message: "Internal server error"
      }];
    }
  });
};