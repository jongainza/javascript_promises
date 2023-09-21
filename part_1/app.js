let url = "http://numbersapi.com/";

// part 1

let favNum = 15;

axios.get(`${url}${favNum}?json`).then((res) => console.log(res.data.text));

// part 2

let multipleRequest = [];

for (let i = 15; i <= 30; i++) {
  multipleRequest.push(axios.get(`${url}${i}?json`));
}

Promise.all(multipleRequest).then((arr) => {
  arr.forEach((p) => console.log(p.data.text));
});

let nums = [15, 20, 25, 30];

axios.get(`${url}${nums}?json`).then((res) => {
  console.log(res.data);
  for (let key in res.data) {
    console.log(`${res.data[key]}`);
  }
});

// part 3

let multipleFacts = [];

for (let i = 1; i < 5; i++) {
  multipleFacts.push(axios.get(`${url}${favNum}?json`));
}

Promise.all(multipleFacts).then((arr) =>
  arr.forEach((p) => console.log(p.data.text))
);
