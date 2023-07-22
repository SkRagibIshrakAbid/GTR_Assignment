export const formatCurrency = (value) => {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "BDT",
  }).format(value);
};
