const {favGenre} = require('./favoriteGenre');

const testCase1 = [
  {  
    "David": ["song1", "song2", "song3", "song4", "song8"],
    "Emma":  ["song5", "song6", "song7"]
  },
  {  
    "Rock":    ["song1", "song3"],
    "Dubstep": ["song7"],
    "Techno":  ["song2", "song4"],
    "Pop":     ["song5", "song6"],
    "Jazz":    ["song8", "song9"]
  }];

  const expectedResults1 = { 
    David: [ 'Rock', 'Techno' ], 
    Emma: [ 'Pop' ] 
  };

  const testCase2 = [
    {  
      "David": ["song1", "song2", "song8"],
      "Emma":  ["song1", "song3", "song2", 'song4', 'song11', 'song10', 'song12']
    },
    {  
      "Rock":    ["song1", "song3"],
      "Dubstep": ["song7"],
      "Techno":  ["song2", "song4"],
      "Pop":     ["song5", "song6"],
      "Jazz":    ["song8", "song9"],
      "Classical": ['song11', 'song10', 'song12']
    }];

  const expectedResults2 = { 
    David: [], 
    Emma: [ 'Classical' ] 
  };

describe('favGenre()', () => {
  it(`returns each users' favorite genre`, () => {
    expect(favGenre(testCase1[0], testCase1[1])).toEqual(expectedResults1);
    expect(favGenre(testCase2[0], testCase2[1])).toEqual(expectedResults2);
  });
});