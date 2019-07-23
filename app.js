const express = require('express')
const app = express()
const port = 3000

const urlArray = [
  'https://www.amazon.in/s?k=organic+honey&me=AGIY6BA745YGD&ref=bnav_search_go',
  'https://www.amazon.in/s?k=honey+organic+honey&me=AGIY6BA745YGD&ref=bnav_search_go',
  'https://www.amazon.in/s?k=pure+honey&me=AGIY6BA745YGD&ref=bnav_search_go'
];

app.get('/', (req, res) => {
  const url = urlArray.shift();
  urlArray.push(url)
  return res.redirect(url);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))