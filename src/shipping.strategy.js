function getFedexPrice(originalPrice) {
  return console.log(originalPrice * 0.5);
}
function getUSPSPrice(originalPrice) {
  return console.log(originalPrice * 0.6);
}
function UPS(originalPrice) {
  return console.log(originalPrice * 0.7);
}

const shippingStrategy = {
  Fedex: getFedexPrice,
  USPS: getUSPSPrice,
  UPS,
};

function getPrice(originalPrice, company) {
  return shippingStrategy[company](originalPrice);
}

getPrice(200, "UPS");
