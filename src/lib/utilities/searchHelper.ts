export function getCoinIdFromSearchSymbolResponse(
  list: any,
  symbol: string
): string {
  let id = "";
  if (list && list.coins?.length > 0) {
    for (let item of list.coins) {
      if (item.symbol.toUpperCase() === symbol.toUpperCase()) {
        id = item.id;
        break;
      }
    }
  }
  return id;
}
