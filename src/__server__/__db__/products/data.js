import { uniq } from "lodash";
import products from "data/product-database";
import bazaarReactDatabase from "data/bazaar-react-database";
import { products as gift } from "../gift/data";
import { products as gadget1 } from "../gadget-1/data";
import { products as gadget2 } from "../gadget-2/data";
import { products as gadget3 } from "../gadget-3/data";
import { products as market1 } from "../market-1/data";
import { products as market2 } from "../market-2/data";
import { products as fashion1 } from "../fashion-1/data";
import { products as fashion2 } from "../fashion-2/data";
import { products as fashion3 } from "../fashion-3/data";
import { products as grocery1 } from "../grocery-1/data";
import { products as grocery2 } from "../grocery-2/data";
import { products as grocery3 } from "../grocery-3/data";
import { products as grocery4 } from "../grocery-4/data";
import { products as furniture } from "../furniture-1/data";
import { products as furniture2 } from "../furniture-2/data";
import { products as furniture3 } from "../furniture-3/data";
import { products as healthBeauty } from "../health-beauty/data";
import { products as medical } from "../medical/data";
import { relatedProducts, frequentlyBoughtData } from "../related-products/data";
const dbProducts = [...bazaarReactDatabase, ...products];


// all used products in the bazaar template
const productList = [...dbProducts, ...fashion1, ...fashion2, ...fashion3, ...furniture, ...furniture2, ...furniture3, ...gadget1, ...gadget2, ...gadget3, ...gift, ...grocery1, ...grocery2, ...grocery3, ...grocery4, ...healthBeauty, ...market1, ...market2, ...relatedProducts, ...frequentlyBoughtData, ...medical];


// get unique products from product list
export const uniqueProducts = uniq(productList.map(item => item.slug)).map(item => productList.find(it => it.slug === item));


// get the all slugs
export const slugs = uniqueProducts.map(item => ({
  params: {
    slug: item?.slug
  }
}));


// get product names for search
export const search = uniqueProducts.slice(0, 6).map(item => item?.title);
export const reviews = [{
  name: "Jannie Schumm",
  imgUrl: "/assets/images/faces/7.png",
  rating: 4.7,
  date: "2021-02-14",
  comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account."
}, {
  name: "Joe Kenan",
  imgUrl: "/assets/images/faces/6.png",
  rating: 4.7,
  date: "2019-08-10",
  comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account."
}, {
  name: "Jenifer Tulio",
  imgUrl: "/assets/images/faces/8.png",
  rating: 4.7,
  date: "2021-02-05",
  comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account."
}];