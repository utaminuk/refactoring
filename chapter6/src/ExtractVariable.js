export function ExtractVariable(order) {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscouunt =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(basePrice * 0.1, 100);
  return basePrice - quantityDiscouunt + shipping;
}

// export function ExtractVariable(order) {
//   return (
//     order.quantity * order.itemPrice -
//     Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
//     Math.min(order.quantity * order.itemPrice * 0.1, 100)
//   );
// }
