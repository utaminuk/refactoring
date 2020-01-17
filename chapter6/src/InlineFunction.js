function getRating(driver) {
  return moreThanFiveDeliveries(driver) ? 2 : 1;
}

function moreThanFiveDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}
