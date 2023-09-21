let url = "https://deckofcardsapi.com/api/deck/";
// parameters = <<deck_id>>/draw/?count=1

// Part 1

axios.get(`${url}new/draw/?count=1`).then((res) => {
  let suit = res.data.cards[0].suit;
  let value = res.data.cards[0].value;
  console.log(`${value} of ${suit}`);
});

// Part 2

let cards = [];

axios
  .get(`${url}new/draw/?count=1`)
  .then((res) => {
    // console.log(res.data.deck_id);
    let suit = res.data.cards[0].suit;
    let value = res.data.cards[0].value;
    let deck_id = res.data.deck_id;
    cards.push(`${value} of ${suit}`);
    return axios.get(`${url}${deck_id}/draw/?count=1`);
  })
  .then((res) => {
    // console.log(res);
    let suit = res.data.cards[0].suit;
    let value = res.data.cards[0].value;
    cards.push(`${value} of ${suit}`);
    console.log(cards);
  })
  .catch((err) => console.log(err));

// Part 2_2

let cards2 = [];

cards2.push(
  axios.get(`${url}new/draw/?count=1`).then((res) => {
    let deck_id = res.data.deck_id;
    return axios.get(`${url}${deck_id}/draw/?count=1`);
  })
);
Promise.all(cards2).then((arr) =>
  arr.forEach((p) => {
    let suit = p.data.cards[0].suit;
    let value = p.data.cards[0].value;
    console.log(`${value} of ${suit}`);
  })
);

// Part 3

let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", function (e) {
  axios.get(`${url}new/draw/?count=1`).then((res) => {
    deck_id = res.data.deck_id;
    axios.get(`${url}${deck_id}/draw/?count=1`).then((resp) => {
      //   console.log(resp.data.cards[0].image);
      let carta = resp.data.cards[0].image;
      return (div.innerHTML = `<img src="${carta}" alt="carta">`);
    });
  });
});
