function selectSaleItems(item) {
  return item.discount > 0
}


function filterbyDiscount(items) {
  return items.filter(selectSaleItems)
}
module.exports = filterbyDiscount
