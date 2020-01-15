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

export function printOwing2(invoice) {
  let outstanding = 0;
  const printBanner = () => {
    console.log(`printBanner`);
  };
  const recordDueDate = invoice => {
    return invoice;
  };
  const printDetail = (invoice, outstanding) => {
    console.log(invoice);
    console.log(outstanding);
  };

  printBanner();

  // 未払金の計算
  for (const o of invoice.others) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);
  printDetail(invoice, outstanding);

  return outstanding;
}
