export const numberFormat = (value) =>
  new Intl.NumberFormat("IN-en", {
    style: "currency",
    currency: "IDR",
  }).format(value);
