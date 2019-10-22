function findContiguousHistory(urls1 = [], urls2 = []) {
  const histories1 = getAllHistory(urls1);

  return findMatches(histories1, urls2);
}

function getAllHistory(urls) {
  const histories = {};

  for (let i = 0; i < urls.length; i++) {
    for (let j = i + 1; j <= urls.length; j++) {
      const history = urls.slice(i, j).join(',');
      if (!histories[history]) {

        histories[history] = true;
      }
    }
  }

  return histories;
}

function findMatches(histories, urls) {
  let max = 0;
  let results = '';

  for (let i = 0; i < urls.length; i++) {
    for (let j = i + 1; j <= urls.length; j++) {
      const arr = urls.slice(i, j);
      const length = arr.length;
      const history = arr.join(',');
      if (histories[history] && length > max) {
        max = length;
        results = history.split(',');
      }
    }
  }

  return results;
}

const user0 = ["/start", "/pink", "/register", "/orange", "/red", "a"]
const user1 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"]
const user2 = ["a", "/one", "/two"]
const user3 = ["/red", "/orange", "/yellow", "/green", "/blue", "/purple", "/white", "/amber", "/HotRodPink", "/BritishRacingGreen"]
const user4 = ["/red", "/orange", "/amber", "/green", "/blue", "/purple", "/white", "/lavender", "/HotRodPink", "/BritishRacingGreen"]
const user5 = ["a"]

findContiguousHistory(user3, user4);