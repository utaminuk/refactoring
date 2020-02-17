function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(qutantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;

  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  const shippingCost = qutantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
}
