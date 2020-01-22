export function isHigherThousand(anOrder) {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}
