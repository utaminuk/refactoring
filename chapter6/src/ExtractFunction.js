export function printOwing(invoice) {
  const calculateOutstaing = () => 5;
  const printBanner = () => {
    console.log(`printBanner`);
  };

  // 途中処理
  printBanner();

  // 最終結果
  let outstanding = calculateOutstaing();
  printDetails(outstanding);

  function printDetails(outstanding) {
    // 明細の印字(print details)
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
  }
}
