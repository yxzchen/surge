let url = $request.url;
if (!url.includes("Weibo_intl_4140")) {
  $done({});
}

if (url.includes("selffans")) {
  let data = JSON.parse($response.body);
  let cards = data.cards.filter((card) => card.itemid !== "INTEREST_PEOPLE2");
  $done({ body: JSON.stringify({ ...data, cards }) });
} else {
  $done({});
}
