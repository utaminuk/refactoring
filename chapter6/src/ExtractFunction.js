export function printOwing(invoice) {
  const calculateOutstaing = () => 5;
  const printBanner = () => {
    console.log(`printBanner`);
  };

  // 途中処理
  printBanner();
  let outstanding = calculateOutstaing();

  // 明細の印字(print details)
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}
