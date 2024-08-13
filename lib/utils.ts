export function extractPrice(...elements: any) {
  for (const element of elements) {
    const priceText = element.text().trim();

    if (priceText) return priceText.replace(/[^\d.]D/g, "");
  }

  return "";
}

export function extractCurrrency(element: any) {
  const currencyText = element.text().trim().slice(0, 1);
  return currencyText ? currencyText : "";
}
