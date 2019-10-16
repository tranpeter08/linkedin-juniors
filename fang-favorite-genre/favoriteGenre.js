'use strict';
function favGenre(userSongs = {}, songGenres = {}) {
  const userGenres = {};

  for (let user in userSongs) {
    const genreCount = {};
    const songs = userSongs[user];

    matchGenre(songs, songGenres, genreCount);

    userGenres[user] = genreCount;
  }

  return userFavs(userGenres);
}


function matchGenre(songs, genres, count) {
  for (let i = 0; i < songs.length; i++) {
    const song = songs[i];
    for (let genre in genres) {
      const categorizedSongs = genres[genre];
      const result = categorizedSongs.find(item => item === song);

      if (result) {
        addToCount(genre, count);
      }
    }
  }
}

function addToCount(key, count) {
  if (count[key]) {
    count[key]++;
    return;
  }

  count[key] = 1;
}

function userFavs(userGenres) {
  const favs = {};

  for (let user in userGenres) {
    const genres = userGenres[user];
    favs[user] = [];
    const favGenres = favs[user];
    const max = findMax(genres);

    findFav(genres, max, favGenres)
  }

  return favs;
}

function findMax(genres) {
  const values = [];

  for (let genre in genres) {
    values.push(genres[genre]);
  }

  return Math.max(...values);
}

function findFav(genres, max, favGenres) {
  for (let genre in genres) {
    const genreCount = genres[genre];

    if (genreCount > 1 && genreCount === max) {
      favGenres.push(genre);
    }
  }
}

module.exports = {favGenre};