export function ExtractVariable(order) {
  return (
    order.quantity * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}

// export function ExtractVariable(order) {
//   return (
//     order.quantity * order.itemPrice * 0.05 +
//     Math.min(order.quantity * order.itemPrice * 0.1, 100)
//   );
// }
