import { products } from "../data/Data";

// ====Boots=====
export const getBoots = products.filter((e) => {
  return e.categories.includes("boots");
});

// ====Sneakers=====
export const getSneakers = products.filter((e) => {
  return e.categories.includes("sneakers");
});

// ====Sale=====
export const getSale = products.filter((e) => {
  return e.status.includes("sale");
});

// ====Men-Sweater=====
export const getMenSweater = products.filter((e) => {
  return e.categories.includes("men") && e.categories.includes("sweater");
});

// ====Women-Sweaters=====
export const getWomSweaters = products.filter((e) => {
  return e.categories.includes("sweater") && e.categories.includes("women");
});

// ====Men-Pants=====
export const getMenPants = products.filter((e) => {
  return e.categories.includes("men") && e.categories.includes("pants");
});

// ====Men-TSHIRT=====
export const getMenTSHIRT = products.filter((e) => {
  return e.categories.includes("men") && e.categories.includes("tshirts");
});

// ====Women-TSHIRT=====
export const getWomTSHIRT = products.filter((e) => {
  return e.categories.includes("women") && e.categories.includes("tshirts");
});

// ====Unisex-Watch=====
export const getWatches = products.filter((e) => {
  return e.categories.includes("watches");
});

// ====Women-Pants=====
export const getWomPants = products.filter((e) => {
  return e.categories.includes("women") && e.categories.includes("pants");
});

// ====Women-Sandals=====
export const getSandals = products.filter((e) => {
  return e.categories.includes("women") && e.categories.includes("sandals");
});

// ====Women-Shirts=====
export const getWomShirts = products.filter((e) => {
  return e.categories.includes("women") && e.categories.includes("shirts");
});

// ====TRENDING=====
export const getTrending = products.filter((e) => {
  return e.status.includes("trending");
});

// ====HOTTEST/LATEST=====
export const getHottest = products.filter((e) => {
  return e.status.includes("hottest");
});

//====LimitedOffers=====//
export const getLimitedOffers = products.filter((e) => {
  return e.status.includes("LO");
});

export const getIconCol = products.filter(e=>{
  return e.status.includes("icon");
})
